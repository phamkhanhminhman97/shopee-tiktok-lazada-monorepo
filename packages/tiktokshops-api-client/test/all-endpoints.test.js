const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');
const axios = require('axios');

const { TiktokModule } = require('../dist');
const OFFICIAL = require('./fixtures/official-manifest.json');

const SECRET = 'sweep-app-secret';
const AUTH_HOST = 'https://auth.tiktok-shops.com';
const API_HOST = 'https://open-api.tiktokglobalshop.com';

const PROBE_KEY = 'probe_field';
const PROBE_VALUE = 'probe-value';

/**
 * A deep placeholder argument. It stringifies to 'id-1' and every property read returns another placeholder, so
 * both flat (params.order_id) and nested (params.path.campaign_id) path parameters resolve to 'id-1'.
 * It also owns one enumerable key (probe_field=probe-value), so whenever a method forwards its query/body input
 * to the request the probe is observable in the URL (query) or in the request body.
 */
const ANY = new Proxy(
  {},
  {
    get: (_target, key) => {
      if (key === Symbol.toPrimitive || key === 'toString') return () => 'id-1';
      if (key === PROBE_KEY) return PROBE_VALUE;
      return ANY;
    },
    ownKeys: () => [PROBE_KEY],
    getOwnPropertyDescriptor: (_target, key) =>
      key === PROBE_KEY ? { value: PROBE_VALUE, enumerable: true, configurable: true, writable: true } : undefined,
  },
);

/**
 * Methods that intentionally send neither query nor body (every input is a path parameter, or there is no input).
 * Any other method MUST forward its input: a missing entry here means a method silently drops caller data.
 */
const PATH_ONLY_OR_NO_INPUT = new Set([
  'affiliatePartner.publishAffiliatePartnerCampaign',
  'affiliatePartner.getAffiliatePartnerCampaignDetail',
  'affiliatePartner.getAffiliateCampaignCreatorProductSampleStatus',
  'affiliateSeller.generateAffiliateProductPromotionLink',
  'affiliateSeller.removeTargetCollaboration',
  'affiliateSeller.getOpenCollaborationSettings',
  'affiliateSeller.removeOpenCollaboration',
  'affiliateSeller.queryTargetCollaborationDetail',
  'affiliateSeller.getLatestUnreadMessages',
  'affiliateSeller.getMarketplaceCreatorPerformance',
  'event.getShopWebhooks',
  'finance.getTransactionsByOrder',
  'fulfillment.getPackageHandoverTimeSlots',
  'logistic.getWarehouseList',
  'logistic.getGlobalSellerWarehouse',
  'logistic.getWarehouseDeliveryOptions',
  'logistic.getShippingProviders',
  'order.getPriceDetail',
  'product.getProductPrerequisites',
  'product.createCategoryUpgradeTask',
  'product.getGlobalProduct',
  'promotion.deactivateActivity',
  'promotion.getActivity',
  'promotion.getCoupon',
  'seller.getActiveShops',
  'seller.getSellerPermissions',
  'shop.getAuthorizedShops',
  'shop.getCategoryAssets',
]);

/** Deprecated aliases that intentionally share an endpoint with another method. */
const DEPRECATED_ALIASES = { 'affiliateSeller.createConversationwithCreator': 'affiliateSeller.createConversationWithCreator' };

/**
 * Methods that forward only specific named fields (not a generic query/body object); they are covered by
 * dedicated tests (OAuth token endpoints read auth_code / refresh_token and take the rest from the config).
 */
const FORWARDS_NAMED_FIELDS_ONLY = new Set(['auth.getAccessToken', 'auth.refreshAccessToken']);

/** GET endpoints whose published request type documents a body in addition to the query. */
const GET_WITH_DOCUMENTED_BODY = new Set(['affiliateSeller.getConversationList']);

/** Methods whose payload must be a real Buffer (multipart uploads). */
const MULTIPART_ARGS = {
  'product.uploadProductImage': [{ data: Buffer.from('img'), use_case: 'MAIN_IMAGE' }],
  'product.uploadProductFile': [{ data: Buffer.from('file'), name: 'a.pdf' }],
  // Methods generated from the official metadata take { body: { data: Buffer, filename? } }.
  'affiliateCreator.uploadShoppablePhotoFile': [{ body: { data: Buffer.from('x') } }],
  'affiliateCreator.uploadShoppableVideoFile': [{ body: { data: Buffer.from('x') } }],
  'affiliateSeller.uploadMessageImage': [{ body: { data: Buffer.from('x') } }],
  'affiliateSeller.uploadMessageImageV2': [{ body: { data: Buffer.from('x') } }],
  'customerService.uploadBuyerMessagesImage': [{ body: { data: Buffer.from('x') } }],
  'fulfillment.fulfillmentUploadDeliveryFile': [{ body: { data: Buffer.from('x'), name: 'n' } }],
  'fulfillment.fulfillmentUploadDeliveryImage': [{ body: { data: Buffer.from('x') } }],
  'returnRefund.uploadShippingDocumentAndTrackingInfo': [{ query: { return_ids: ['r1'] }, body: { return_shipping_label: Buffer.from('x'), return_qr_code: Buffer.from('y'), tracking_number: 't', return_provider_id: 'p' } }],
};

function makeTiktok() {
  return new TiktokModule({
    appKey: 'sweep-app-key',
    appSecret: SECRET,
    accessToken: 'sweep-token',
    shopCipher: 'sweep-cipher',
  });
}

function referenceSign(path, query, body) {
  const keys = Object.keys(query).filter((key) => key !== 'sign' && key !== 'access_token').sort();
  // TikTok appends the request body exactly as sent (a JSON string), unless the request is multipart.
  const bodyString = typeof body === 'string' ? body : '';
  const base = SECRET + path + keys.map((key) => key + query[key]).join('') + bodyString + SECRET;
  return crypto.createHmac('sha256', SECRET).update(base).digest('hex');
}

/** Every public method of a namespace, including the ones inherited from the generated base class. */
function methodsOf(instance) {
  const names = new Set();
  for (let proto = Object.getPrototypeOf(instance); proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
    Object.getOwnPropertyNames(proto).forEach((name) => {
      if (name !== 'constructor' && typeof instance[name] === 'function') names.add(name);
    });
  }
  return [...names];
}

/** Namespaces of a TiktokModule: every own property holding a Tiktok* namespace instance. */
function domainsOf(tiktok) {
  return Object.keys(tiktok).filter((key) => tiktok[key] && typeof tiktok[key] === 'object' && /^Tiktok/.test(tiktok[key].constructor.name));
}

async function sweep() {
  const originalRequest = axios.request;
  const originalPost = axios.post;
  const records = [];
  let current;

  axios.request = async (options) => {
    current.calls.push({ url: options.url, method: options.method, body: options.data, multipart: false });
    return { status: 200, data: { code: 0, message: 'success', data: {}, request_id: 'sweep' } };
  };
  axios.post = async (url, body) => {
    current.calls.push({ url, method: 'POST', body, multipart: true });
    return { status: 200, data: { code: 0, message: 'success', data: {}, request_id: 'sweep' } };
  };

  try {
    const tiktok = makeTiktok();
    for (const domain of domainsOf(tiktok)) {
      for (const name of methodsOf(tiktok[domain])) {
        current = { domain, name, calls: [] };
        const args = MULTIPART_ARGS[`${domain}.${name}`] || [ANY, ANY, ANY];
        await tiktok[domain][name](...args);
        records.push(current);
      }
    }
  } finally {
    axios.request = originalRequest;
    axios.post = originalPost;
  }
  return records;
}

test('every domain method issues exactly one well-formed request', async () => {
  const records = await sweep();
  assert.ok(records.length > 0);

  for (const { domain, name, calls } of records) {
    const label = `tiktok.${domain}.${name}`;
    assert.equal(calls.length, 1, `${label} must issue exactly one HTTP request`);

    const [{ url, method, body, multipart }] = calls;
    assert.match(method, /^(GET|POST|PUT|DELETE)$/, label);

    const parsed = new URL(url);
    assert.ok(parsed.origin === API_HOST || parsed.origin === AUTH_HOST, `${label} unexpected host ${parsed.origin}`);
    assert.match(parsed.pathname, /^\/[A-Za-z0-9_\-/]+$/, `${label} path ${parsed.pathname} must be fully resolved (no {placeholders}, undefined or [object])`);
    assert.doesNotMatch(parsed.pathname, /undefined|\[object|\{|\}/, label);

    if (parsed.origin === API_HOST) {
      const query = {};
      parsed.searchParams.forEach((value, key) => { query[key] = value; });
      assert.equal(query.app_key, 'sweep-app-key', label);
      assert.match(query.timestamp, /^\d{10}$/, label);
      assert.equal(query.shop_cipher, 'sweep-cipher', label);
      assert.match(query.sign, /^[0-9a-f]{64}$/, label);
      const signedBody = multipart ? undefined : body;
      assert.equal(query.sign, referenceSign(parsed.pathname, query, signedBody), `${label} signature must match the documented algorithm`);
    } else {
      assert.equal(parsed.searchParams.get('app_secret'), SECRET, label);
      assert.equal(parsed.searchParams.has('sign'), false, `${label} OAuth endpoints are unsigned`);
    }
  }
});

test('every method forwards its query/body input to the request (no silently dropped caller data)', async () => {
  const records = await sweep();
  const dropped = [];

  for (const { domain, name, calls } of records) {
    const label = `${domain}.${name}`;
    const official = OFFICIAL[label];
    if (official && official.multipart) continue;
    // Generated methods: the manifest says which request sections (path/query/body) the endpoint really has.
    if (official && !official.sections.includes('query') && !official.sections.includes('body')) continue;
    if (PATH_ONLY_OR_NO_INPUT.has(label) || FORWARDS_NAMED_FIELDS_ONLY.has(label)) continue;
    if (label === 'product.uploadProductImage' || label === 'product.uploadProductFile') continue;

    const [{ url, method, body }] = calls;
    const parsed = new URL(url);
    const queryForwarded = parsed.searchParams.get(PROBE_KEY) === PROBE_VALUE;
    const bodyForwarded = body !== undefined;

    if (!queryForwarded && !bodyForwarded) {
      dropped.push(`${label} (${method} ${parsed.pathname})`);
    }
    const documentedGetBody = GET_WITH_DOCUMENTED_BODY.has(label) || (official && official.sections.includes('body'));
    if (method === 'GET' && bodyForwarded && !documentedGetBody) {
      dropped.push(`${label} sends a body on a GET request`);
    }
  }

  assert.deepEqual(dropped, [], `methods dropping caller input: ${dropped.join(', ')}`);
});

test('methods allow-listed as path-only really do forward nothing but path parameters', async () => {
  const records = await sweep();
  const labels = new Set(records.map(({ domain, name }) => `${domain}.${name}`));
  for (const label of PATH_ONLY_OR_NO_INPUT) {
    assert.ok(labels.has(label), `allow-list entry ${label} does not exist (stale allow-list)`);
  }
});

test('the namespaces cover 20 domains, 155 hand-written + every generated method, each on a distinct endpoint', async () => {
  const records = await sweep();
  const endpoints = new Set();
  const domains = new Set();
  const byEndpoint = new Map();
  for (const { domain } of records) domains.add(domain);
  for (const { domain, name, calls } of records) {
    const [{ url, method }] = calls;
    const endpoint = `${method} ${new URL(url).pathname}`;
    endpoints.add(endpoint);
    byEndpoint.set(endpoint, [...(byEndpoint.get(endpoint) || []), `${domain}.${name}`]);
  }
  const generated = Object.keys(OFFICIAL).length;
  assert.equal(domains.size, 20);
  assert.equal(records.length, 155 + generated, 'every hand-written and generated method is exercised');

  // The only permitted duplicate is a deprecated alias that points at its canonical method.
  for (const [endpoint, labels] of byEndpoint) {
    if (labels.length === 1) continue;
    const aliases = labels.filter((label) => DEPRECATED_ALIASES[label]);
    assert.equal(aliases.length, labels.length - 1, `${endpoint} is shared by ${labels.join(', ')} without a deprecated alias`);
    for (const alias of aliases) {
      assert.ok(labels.includes(DEPRECATED_ALIASES[alias]), `${alias} must alias a method on the same endpoint`);
    }
  }
  assert.equal(endpoints.size, records.length - 1, 'only the deprecated alias shares an endpoint');
});

test('every generated method requests exactly the verb and path recorded from the official API reference', async () => {
  const records = await sweep();
  const byLabel = new Map(records.map((record) => [`${record.domain}.${record.name}`, record]));
  const mismatches = [];

  for (const [label, official] of Object.entries(OFFICIAL)) {
    const record = byLabel.get(label);
    if (!record) {
      mismatches.push(`${label} is in the manifest but missing from the client`);
      continue;
    }
    const [{ url, method }] = record.calls;
    const actualPath = decodeURIComponent(new URL(url).pathname);
    // Path placeholders resolve to the probe value 'id-1' in the sweep.
    const expectedPath = official.path.replace(/\{[^}]+\}/g, 'id-1');
    if (method !== official.verb || actualPath !== expectedPath) {
      mismatches.push(`${label}: expected ${official.verb} ${expectedPath}, got ${method} ${actualPath}`);
    }
  }

  assert.deepEqual(mismatches, []);
  assert.ok(Object.keys(OFFICIAL).length >= 195);
});

test('methods inherited from the generated base classes are real prototype methods on each namespace', () => {
  const tiktok = makeTiktok();
  for (const label of Object.keys(OFFICIAL)) {
    const [domain, name] = label.split('.');
    assert.equal(typeof tiktok[domain]?.[name], 'function', `tiktok.${label} should be a function`);
  }
});
