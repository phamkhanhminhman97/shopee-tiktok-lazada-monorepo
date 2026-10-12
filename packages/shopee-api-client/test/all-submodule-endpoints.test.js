const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');
const axios = require('axios');

const { ShopeeModule } = require('../dist');
const OFFICIAL = require('./fixtures/official-manifest.json');

const PARTNER_KEY = 'sweep-partner-key';
const PARTNER_ID = 1001;
const ACCESS_TOKEN = 'sweep-access-token';
const IDS = { shop: '2002', merchant: '3003', user: '4004', principal: '5005' };
const ID_PARAM = { shop: 'shop_id', merchant: 'merchant_id', user: 'user_id', principal: 'principal_id' };
const PROBE_KEY = 'probe_field';
const PROBE_VALUE = 'probe-value';

/** Official APIs behind flat methods that validate their input first, so the placeholder probe never reaches HTTP. */
const EXPECTED_UNREACHED_BY_SWEEP = [
  'v2.media.upload_image',
  'v2.order.get_order_detail',
  'v2.order.get_package_detail',
  'v2.product.add_item',
  'v2.product.get_model_list',
  'v2.product.search_item',
  'v2.product.update_item',
  'v2.returns.get_return_list',
  'v2.shop_category.add_item_list',
];
const byPath = new Map(OFFICIAL.map((api) => [api.path, api]));

/**
 * Placeholder argument with one enumerable key (probe_field=probe-value): whenever a method forwards its request
 * object, the probe is observable in the URL (GET) or in the request body (POST/multipart).
 */
const PROBE = new Proxy(
  {},
  {
    get: (_target, key) => {
      if (key === PROBE_KEY) return PROBE_VALUE;
      if (key === Symbol.toPrimitive || key === 'toString') return () => 'id-1';
      return undefined;
    },
    ownKeys: () => [PROBE_KEY],
    getOwnPropertyDescriptor: (_target, key) =>
      key === PROBE_KEY ? { value: PROBE_VALUE, enumerable: true, configurable: true, writable: true } : undefined,
  },
);

function makeShopee() {
  return new ShopeeModule({
    partnerId: PARTNER_ID,
    partnerKey: PARTNER_KEY,
    shopId: IDS.shop,
    merchantId: IDS.merchant,
    userId: IDS.user,
    principalId: IDS.principal,
    accessToken: ACCESS_TOKEN,
    refreshToken: 'sweep-refresh-token',
    redirectUrl: 'https://example.com/callback',
  });
}

function submoduleNames(shopee) {
  return Object.keys(shopee).filter(
    (key) => shopee[key] && typeof shopee[key] === 'object' && shopee[key].constructor && shopee[key].constructor !== Object,
  );
}

function methodsOf(instance) {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).filter(
    (name) => name !== 'constructor' && typeof instance[name] === 'function',
  );
}

/** Independent re-implementation of the signature rules in Shopee's "Calculating the sign parameter" guide. */
function referenceSign({ path, timestamp, type }) {
  const base =
    type === 'public'
      ? `${PARTNER_ID}${path}${timestamp}`
      : `${PARTNER_ID}${path}${timestamp}${ACCESS_TOKEN}${IDS[type]}`;
  return crypto.createHmac('sha256', PARTNER_KEY).update(base).digest('hex');
}

async function sweep() {
  const originalGet = axios.get;
  const originalPost = axios.post;
  const records = [];
  let current;
  const ok = { status: 200, data: { error: '', message: '', response: {} } };

  axios.get = async (url) => {
    current.calls.push({ method: 'GET', url, body: undefined });
    return ok;
  };
  axios.post = async (url, body) => {
    current.calls.push({ method: 'POST', url, body });
    return ok;
  };

  try {
    const shopee = makeShopee();
    for (const namespace of submoduleNames(shopee)) {
      for (const name of methodsOf(shopee[namespace])) {
        current = { namespace, name, arity: shopee[namespace][name].length, calls: [] };
        await shopee[namespace][name](PROBE, PROBE, PROBE);
        records.push(current);
      }
    }
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
  return records;
}

test('the sweep covers all 23 Shopee submodule namespaces', async () => {
  const records = await sweep();
  const namespaces = new Set(records.map((record) => record.namespace));
  assert.equal(namespaces.size, 23);
  assert.ok(records.length >= 268, `expected at least 268 submodule methods, got ${records.length}`);
});

test('every submodule method requests the official verb and path and authenticates as the official API type', async () => {
  const records = await sweep();
  const typesSeen = new Set();

  for (const { namespace, name, calls } of records) {
    const label = `shopee.${namespace}.${name}`;
    assert.equal(calls.length, 1, `${label} must issue exactly one HTTP request`);

    const [{ method, url }] = calls;
    const parsed = new URL(url);
    assert.match(parsed.origin, /^https:\/\/partner\.(test-stable\.)?shopeemobile\.com$/, `${label} host`);
    assert.match(parsed.pathname, /^\/api\/v2\/[A-Za-z0-9_\-/]+$/, `${label} path ${parsed.pathname} must be fully resolved`);

    const official = byPath.get(parsed.pathname);
    assert.ok(official, `${label} requests ${parsed.pathname}, which is not in the official Shopee API reference`);
    assert.equal(method, official.verb, `${label}: Shopee documents ${official.verb} for ${official.name}`);

    const type = official.type;
    typesSeen.add(type);
    const query = parsed.searchParams;
    assert.equal(query.get('partner_id'), String(PARTNER_ID), label);
    assert.match(query.get('timestamp'), /^\d{10}$/, label);
    assert.match(query.get('sign'), /^[0-9a-f]{64}$/, label);

    if (type === 'public') {
      assert.equal(query.has('access_token'), false, `${label} is a Public API: no access_token`);
      for (const param of Object.values(ID_PARAM)) assert.equal(query.has(param), false, `${label} is a Public API: no ${param}`);
    } else {
      assert.equal(query.get('access_token'), ACCESS_TOKEN, label);
      assert.equal(query.get(ID_PARAM[type]), IDS[type], `${label} is a ${type} API and must carry ${ID_PARAM[type]}`);
      for (const [other, param] of Object.entries(ID_PARAM)) {
        if (other !== type) assert.equal(query.has(param), false, `${label} is a ${type} API and must not carry ${param}`);
      }
    }

    assert.equal(
      query.get('sign'),
      referenceSign({ path: parsed.pathname, timestamp: query.get('timestamp'), type }),
      `${label} signature must match the documented ${type} algorithm`,
    );
  }

  for (const type of ['shop', 'merchant', 'user', 'principal', 'public']) {
    assert.ok(typesSeen.has(type), `the sweep should exercise at least one ${type} API`);
  }
});

test('every submodule method that takes input forwards it to the request', async () => {
  const records = await sweep();
  const dropped = [];
  let forwarding = 0;

  for (const { namespace, name, arity, calls } of records) {
    if (arity === 0) continue;
    forwarding += 1;
    const [{ method, url, body }] = calls;
    const inUrl = new URL(url).searchParams.get(PROBE_KEY) === PROBE_VALUE;
    const inBody =
      body !== undefined &&
      body !== null &&
      (typeof body.getBuffer === 'function' || typeof body.getHeaders === 'function' || JSON.stringify(body).includes(PROBE_VALUE));
    if (!inUrl && !inBody) dropped.push(`shopee.${namespace}.${name} (${method} ${new URL(url).pathname})`);
  }

  assert.deepEqual(dropped, [], `methods dropping caller input: ${dropped.join(', ')}`);
  assert.ok(forwarding > 200, 'most submodule methods take a request object');
});

test('POST endpoints keep the payload out of the URL query string', async () => {
  const records = await sweep();
  for (const { namespace, name, calls } of records) {
    const [{ method, url }] = calls;
    if (method !== 'POST') continue;
    assert.equal(new URL(url).searchParams.has(PROBE_KEY), false, `shopee.${namespace}.${name} leaked its payload into the URL`);
  }
});

test('non-shop APIs fail fast with a clear error when their identity is not configured', async () => {
  const shopOnly = new ShopeeModule({ partnerId: PARTNER_ID, partnerKey: PARTNER_KEY, shopId: IDS.shop, accessToken: ACCESS_TOKEN });
  const originalGet = axios.get;
  let requests = 0;
  axios.get = async () => ((requests += 1), { status: 200, data: { error: '', response: {} } });
  try {
    await assert.rejects(() => shopOnly.merchant.getMerchantInfo(), /merchantId.*merchant-level API.*merchant_id/);
    await assert.rejects(() => shopOnly.principal.getShopVideoPerformance({}), /principalId.*principal-level API.*principal_id/);
    assert.equal(requests, 0, 'no request may be sent with a signature Shopee would reject');
  } finally {
    axios.get = originalGet;
  }
});

// ----------------------------------------------------------------------------------------------------------------
// The original flat methods (shopee.getOrders(), shopee.addItem(), ...) must follow the same official rules.
// ----------------------------------------------------------------------------------------------------------------

/** Flat methods that validate their input before sending anything (the probe placeholder is not a valid request). */
const FLAT_VALIDATES_INPUT = new Set([
  'getOrderDetail', 'getPackageDetail', 'getReturnList', 'uploadImage', 'addShopCategoryItemList', 'getModelList',
  'searchItem', 'addItem', 'updateItem', 'verifyPushSignature', 'parsePushPayload',
]);
/** Flat methods that do not call the Shopee API at all. */
const FLAT_LOCAL_ONLY = new Set(['setConfig', 'getConfig', 'generateAuthLink']);
/** Legacy flat methods that call an endpoint the current official reference no longer lists. */
const FLAT_LEGACY_ENDPOINTS = new Set(['/api/v2/product/get_attributes']);

function flatMethodNames(shopee) {
  const names = new Set();
  for (let proto = Object.getPrototypeOf(shopee); proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
    Object.getOwnPropertyNames(proto).forEach((name) => {
      if (name !== 'constructor' && typeof shopee[name] === 'function') names.add(name);
    });
  }
  return [...names];
}

test('flat methods request official verbs and paths and authenticate as the official API type', async () => {
  const originalGet = axios.get;
  const originalPost = axios.post;
  const ok = { status: 200, data: { error: '', message: '', response: {} } };
  let calls;
  axios.get = async (url) => (calls.push({ method: 'GET', url }), ok);
  axios.post = async (url) => (calls.push({ method: 'POST', url }), ok);

  const problems = [];
  let exercised = 0;
  try {
    const shopee = makeShopee();
    for (const name of flatMethodNames(shopee)) {
      if (FLAT_VALIDATES_INPUT.has(name) || FLAT_LOCAL_ONLY.has(name) || submoduleNames(shopee).includes(name)) continue;
      calls = [];
      try {
        await shopee[name](PROBE, PROBE, PROBE);
      } catch (error) {
        problems.push(`shopee.${name} threw: ${String(error.message).slice(0, 100)}`);
        continue;
      }
      for (const { method, url } of calls) {
        exercised += 1;
        const parsed = new URL(url);
        const official = byPath.get(parsed.pathname);
        if (!official) {
          if (!FLAT_LEGACY_ENDPOINTS.has(parsed.pathname)) problems.push(`shopee.${name} requests ${parsed.pathname}, which is not in the official reference`);
          continue;
        }
        if (method !== official.verb) problems.push(`shopee.${name}: ${method} ${parsed.pathname}, official verb is ${official.verb}`);
        const query = parsed.searchParams;
        const type = official.type;
        const hasToken = query.has('access_token');
        if ((type === 'public') === hasToken) problems.push(`shopee.${name} (${type} API) ${hasToken ? 'sends' : 'omits'} access_token`);
        if (type !== 'public' && query.get(ID_PARAM[type]) !== IDS[type]) problems.push(`shopee.${name} (${type} API) is missing ${ID_PARAM[type]}`);
        if (query.get('sign') !== referenceSign({ path: parsed.pathname, timestamp: query.get('timestamp'), type })) {
          problems.push(`shopee.${name} (${type} API) has a signature that does not match the documented algorithm`);
        }
      }
    }
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }

  assert.deepEqual(problems, []);
  assert.ok(exercised > 150, `expected to exercise the flat methods, got ${exercised}`);
});

test('every official Shopee API is reachable through the client, except the ones listed here', async () => {
  const originalGet = axios.get;
  const originalPost = axios.post;
  const hit = new Set();
  const ok = { status: 200, data: { error: '', message: '', response: {} } };
  axios.get = async (url) => (hit.add(new URL(url).pathname), ok);
  axios.post = async (url) => (hit.add(new URL(url).pathname), ok);
  try {
    const shopee = makeShopee();
    const namespaces = submoduleNames(shopee);
    const targets = [shopee, ...namespaces.map((ns) => shopee[ns])];
    for (const target of targets) {
      for (const name of target === shopee ? flatMethodNames(shopee) : methodsOf(target)) {
        if (typeof target[name] !== 'function' || namespaces.includes(name)) continue;
        try { await target[name](PROBE, PROBE, PROBE); } catch (error) { /* input validation: covered by dedicated tests */ }
      }
    }
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
  // The only official APIs this sweep cannot reach are the flat methods that validate their input before sending
  // (the probe placeholder is not a valid request); they have dedicated tests. Anything else is a coverage gap.
  const unreached = OFFICIAL.filter((api) => !hit.has(api.path)).map((api) => api.name).sort();
  assert.deepEqual(unreached, EXPECTED_UNREACHED_BY_SWEEP, 'official APIs the client does not reach');
});
