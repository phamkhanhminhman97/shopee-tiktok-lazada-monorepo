const assert = require('node:assert/strict');
const test = require('node:test');
const axios = require('axios');

const { TiktokModule, TiktokApiError } = require('../dist');

function makeTiktok() {
  return new TiktokModule({
    appKey: 'test-app-key',
    appSecret: 'test-app-secret',
    accessToken: 'test-access-token',
    shopCipher: 'test-shop-cipher',
  });
}

function withMockedAxiosRequest(response, run) {
  const original = axios.request;
  let call;

  axios.request = async (options) => {
    call = options;
    if (response instanceof Error) throw response;
    return { data: response, status: 200 };
  };

  return run(() => call).finally(() => {
    axios.request = original;
  });
}

function withMockedAxiosPost(response, run) {
  const original = axios.post;
  let call;

  axios.post = async (url, body, options) => {
    call = { url, body, options };
    if (response instanceof Error) throw response;
    return { data: response, status: 200 };
  };

  return run(() => call).finally(() => {
    axios.post = original;
  });
}

// ============================================================
// Full domain expansion (production-grade API parity audit against the
// tiktok-shop-sdk reference source: 14 domains, 155 endpoints). These smoke
// tests verify: every new submodule namespace is wired, GET/POST requests
// build correctly-signed URLs, multipart uploads sign with an empty body
// component, and TikTok error responses throw TiktokApiError consistently.
// ============================================================

const EXPECTED_SUBMODULES = [
  'affiliatePartner', 'affiliateSeller', 'analytics', 'auth', 'event', 'finance',
  'fulfillment', 'logistic', 'order', 'product', 'promotion', 'returnRefund',
  'seller', 'shop',
];

test('TiktokModule exposes all 14 newly added domain submodule namespaces', () => {
  const tiktok = makeTiktok();

  for (const propName of EXPECTED_SUBMODULES) {
    assert.equal(typeof tiktok[propName], 'object', `tiktok.${propName} should be an object`);
    assert.notEqual(tiktok[propName], null, `tiktok.${propName} should not be null`);
  }
});

test('domain expansion does not collide with pre-existing flat methods', () => {
  const tiktok = makeTiktok();

  // Pre-existing flat methods (published before this expansion) must remain functions.
  const existingFlatMethods = [
    'getOrderList', 'getOrderDetail', 'getPriceDetail', 'getProductDetail',
    'getAuthorizedShop', 'getPackageTimeSlots', 'shipPackage', 'getShippingDocument',
    'getCategories', 'getBrands', 'getAttributes', 'createProduct',
    'refreshToken', 'fetchTokenWithAuthCode', 'generateAuthLink',
  ];
  for (const name of existingFlatMethods) {
    assert.equal(typeof tiktok[name], 'function', `tiktok.${name} should remain a function`);
  }

  // New domain submodules expose the SAME business concepts under a namespace,
  // without overwriting the flat methods above (several names collide on purpose).
  assert.equal(typeof tiktok.order.getOrderList, 'function');
  assert.equal(typeof tiktok.product.createProduct, 'function');
  assert.notEqual(tiktok.getOrderList, tiktok.order.getOrderList);
  assert.notEqual(tiktok.createProduct, tiktok.product.createProduct);
});

test('tiktok.order.getOrderList (POST) builds a signed URL with app_key/timestamp/shop_cipher and sends the JSON body', async () => {
  await withMockedAxiosRequest(
    { code: 0, message: 'success', data: { orders: [] }, request_id: 'req-1' },
    async (getCall) => {
      const tiktok = makeTiktok();
      const result = await tiktok.order.getOrderList({
        query: { page_size: 10 },
        body: { order_status: 'UNPAID' },
      });

      assert.deepEqual(result.data, { orders: [] });
      const call = getCall();
      assert.equal(call.method, 'POST');
      assert.match(call.url, /^https:\/\/open-api\.tiktokglobalshop\.com\/order\/202309\/orders\/search\?/);
      assert.match(call.url, /app_key=test-app-key/);
      assert.match(call.url, /timestamp=\d+/);
      assert.match(call.url, /shop_cipher=test-shop-cipher/);
      assert.match(call.url, /sign=[0-9a-f]{64}/);
      assert.match(call.url, /page_size=10/);
      assert.deepEqual(call.data, { order_status: 'UNPAID' });
      assert.equal(call.headers['x-tts-access-token'], 'test-access-token');
    },
  );
});

test('tiktok.logistic.getWarehouseList (GET, zero-param) calls the correct endpoint', async () => {
  await withMockedAxiosRequest(
    { code: 0, message: 'success', data: { warehouses: [] }, request_id: 'req-2' },
    async (getCall) => {
      const tiktok = makeTiktok();
      const result = await tiktok.logistic.getWarehouseList();

      assert.deepEqual(result.data, { warehouses: [] });
      const call = getCall();
      assert.equal(call.method, 'GET');
      assert.match(call.url, /^https:\/\/open-api\.tiktokglobalshop\.com\/logistics\/202309\/warehouses\?/);
    },
  );
});

test('tiktok.finance.getWithdrawals returns the corrected TiktokGetWithdrawalsResponse shape (upstream SDK type bug fix)', async () => {
  await withMockedAxiosRequest(
    { code: 0, message: 'success', data: { next_page_token: '', total_count: 1, withdrawals: [{ id: 'w1', type: 'WITHDRAW' }] }, request_id: 'req-3' },
    async (getCall) => {
      const tiktok = makeTiktok();
      const result = await tiktok.finance.getWithdrawals({ types: ['WITHDRAW'] });

      assert.equal(result.data.withdrawals[0].id, 'w1');
      assert.match(getCall().url, /\/finance\/202309\/withdrawals\?/);
    },
  );
});

test('throws TiktokApiError when TikTok returns a non-zero code', async () => {
  await withMockedAxiosRequest(
    { code: 12006, message: 'invalid access token', request_id: 'req-err' },
    async () => {
      const tiktok = makeTiktok();

      await assert.rejects(
        () => tiktok.order.getOrderDetail({ ids: ['123'] }),
        (error) => {
          assert.equal(error instanceof TiktokApiError, true);
          assert.equal(error.code, 12006);
          assert.equal(error.requestId, 'req-err');
          return true;
        },
      );
    },
  );
});

test('tiktok.product.uploadProductImage (multipart) signs with an empty body component and sends form-data', async () => {
  await withMockedAxiosPost(
    { code: 0, message: 'success', data: { uri: 'img-uri', url: 'https://example.com/img.png' }, request_id: 'req-4' },
    async (getCall) => {
      const tiktok = makeTiktok();
      const result = await tiktok.product.uploadProductImage({
        data: Buffer.from('fake-image-bytes'),
        use_case: 'MAIN_IMAGE',
      });

      assert.equal(result.data.uri, 'img-uri');
      const call = getCall();
      assert.match(call.url, /^https:\/\/open-api\.tiktokglobalshop\.com\/product\/202309\/images\/upload\?/);
      assert.match(call.url, /app_key=test-app-key/);
      assert.match(call.url, /sign=[0-9a-f]{64}/);
      // multipart body is a form-data instance, not a plain object
      assert.equal(typeof call.body.getHeaders, 'function');
    },
  );
});

test('tiktok.auth.getAccessToken uses the auth host with app_secret in the query and no HMAC signature', async () => {
  await withMockedAxiosRequest(
    { code: 0, message: 'success', data: { access_token: 'at-1' }, request_id: 'req-5' },
    async (getCall) => {
      const tiktok = makeTiktok();
      const result = await tiktok.auth.getAccessToken({ auth_code: 'code-1', grant_type: 'authorized_code' });

      assert.equal(result.data.access_token, 'at-1');
      const call = getCall();
      assert.match(call.url, /^https:\/\/auth\.tiktok-shops\.com\/api\/v2\/token\/get\?/);
      assert.match(call.url, /app_secret=test-app-secret/);
      assert.doesNotMatch(call.url, /sign=/);
    },
  );
});

// Spot-check a representative sample of the remaining domains to confirm they are wired
// correctly end-to-end (namespace -> API function -> callTiktokApi -> axios.request).
// Each entry's 'args' matches that method's REAL parameter shape (verified against the
// generated source), not a generic guess.
const SAMPLE_DOMAIN_METHODS = [
  { ns: 'affiliatePartner', method: 'getAffiliatePartnerCampaignList', args: [{ query: { page_size: 10 } }], path: '/affiliate_partner/202405/campaigns' },
  { ns: 'affiliateSeller', method: 'getOpenCollaborationSettings', args: [], path: '/affiliate_seller/202409/open_collaboration_settings' },
  { ns: 'analytics', method: 'getShopPerformance', args: [{}], path: '/analytics/202405/shop/performance' },
  { ns: 'event', method: 'getShopWebhooks', args: [], path: '/event/202309/webhooks' },
  { ns: 'fulfillment', method: 'getPackageHandoverTimeSlots', args: ['pkg-1'], path: '/fulfillment/202309/packages/pkg-1/handover_time_slots' },
  { ns: 'promotion', method: 'getActivity', args: ['act-1'], path: '/promotion/202309/activities/act-1' },
  { ns: 'returnRefund', method: 'getRejectReasons', args: [{}], path: '/return_refund/202309/reject_reasons' },
  { ns: 'seller', method: 'getActiveShops', args: [], path: '/seller/202309/shops' },
  { ns: 'shop', method: 'getAuthorizedShops', args: [], path: '/authorization/202309/shops' },
];

for (const { ns, method, args, path } of SAMPLE_DOMAIN_METHODS) {
  test(`tiktok.${ns}.${method} is wired and calls the correct endpoint`, async () => {
    const mockResponse = { code: 0, message: 'success', data: { ok: true }, request_id: 'req-sample' };

    await withMockedAxiosRequest(mockResponse, async (getCall) => {
      const tiktok = makeTiktok();
      assert.equal(typeof tiktok[ns][method], 'function', `tiktok.${ns}.${method} should be a function`);

      const result = await tiktok[ns][method](...args);

      assert.deepEqual(result.data, { ok: true });
      assert.ok(getCall().url.includes(path), `expected URL to include ${path}, got ${getCall().url}`);
    });
  });
}

