const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');
const axios = require('axios');

const { TiktokModule } = require('../dist');
const constants = require('../dist/module/tiktokshops/common/constant');

const SECRET = 'legacy-app-secret';

function makeTiktok() {
  return new TiktokModule({
    appKey: 'legacy-app-key',
    appSecret: SECRET,
    accessToken: 'legacy-access-token',
    shopId: 'legacy-shop-id',
    shopCipher: 'legacy-shop-cipher',
  });
}

/** Independent re-implementation of the documented TikTok Shop v1 signing algorithm. */
function referenceSign({ path, query, body }) {
  const keys = Object.keys(query)
    .filter((key) => key !== 'sign' && key !== 'access_token')
    .sort();
  const base = SECRET + path + keys.map((key) => key + query[key]).join('') + (body ? JSON.stringify(body) : '') + SECRET;
  return crypto.createHmac('sha256', SECRET).update(base).digest('hex');
}

function queryOf(url) {
  const query = {};
  new URL(url).searchParams.forEach((value, key) => {
    query[key] = value;
  });
  return query;
}

async function captureLegacy(method, run) {
  const original = axios[method];
  let call;
  axios[method] = async (url, ...rest) => {
    call = { url, rest };
    return { data: { code: 0, data: {} }, status: 200 };
  };
  try {
    await run();
  } finally {
    axios[method] = original;
  }
  return call;
}

test('every legacy endpoint path constant is a well-formed absolute path', () => {
  for (const group of ['TIKTOK_PATH', 'TIKTOK_PATH_202309', 'TIKTOK_PATH_202407']) {
    for (const [name, value] of Object.entries(constants[group])) {
      assert.match(value, /^\/[A-Za-z0-9_\-/{}]*$/, `${group}.${name} = ${JSON.stringify(value)} must be a clean absolute path (no spaces)`);
    }
  }
});

test('regression: Product brands path uses the 202309 version (was the invalid /product/2309/brands)', () => {
  assert.equal(constants.TIKTOK_PATH_202309.BRANDS, '/product/202309/brands');
});

test('regression: createProduct path has no leading space (previously made new URL() throw Invalid URL)', () => {
  assert.equal(constants.TIKTOK_PATH_202309.CREATE_PRODUCT, '/product/202309/products');
});

test('legacy createProduct builds a valid URL and signs the JSON body', async () => {
  const payload = { title: 'Legacy product', category_id: '1' };
  const call = await captureLegacy('post', () => makeTiktok().createProduct(payload));

  const url = new URL(call.url);
  assert.equal(url.pathname, '/product/202309/products');
  assert.deepEqual(call.rest[0], payload);

  const expected = referenceSign({ path: url.pathname, query: queryOf(call.url), body: payload });
  assert.equal(queryOf(call.url).sign, expected, 'signature must include the JSON body');
  assert.notEqual(
    queryOf(call.url).sign,
    referenceSign({ path: url.pathname, query: queryOf(call.url), body: undefined }),
    'a body-less signature would be rejected by TikTok Shop',
  );
});

test('legacy shipPackage signs the JSON body', async () => {
  const payload = { handover_method: 'PICKUP', pickup_slot: { start_time: 1700000000, end_time: 1700003600 } };
  const call = await captureLegacy('post', () => makeTiktok().shipPackage('pkg-1', payload));

  const url = new URL(call.url);
  assert.equal(url.pathname, '/fulfillment/202309/packages/pkg-1/ship');
  assert.equal(queryOf(call.url).sign, referenceSign({ path: url.pathname, query: queryOf(call.url), body: call.rest[0] }));
});

test('legacy getBrands hits the corrected 202309 path with a valid signature', async () => {
  const call = await captureLegacy('get', () => makeTiktok().getBrands('cat-1'));

  const url = new URL(call.url);
  assert.equal(url.pathname, '/product/202309/brands');
  assert.equal(url.searchParams.get('category_id'), 'cat-1');
  assert.equal(queryOf(call.url).sign, referenceSign({ path: url.pathname, query: queryOf(call.url), body: undefined }));
});
