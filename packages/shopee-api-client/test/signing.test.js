const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');
const axios = require('axios');

const { ShopeeModule } = require('../dist');

const PARTNER_ID = 1001;
const PARTNER_KEY = 'signing-partner-key';
const SHOP_ID = '2002';
const ACCESS_TOKEN = 'signing-access-token';
const MERCHANT_ID = '3003';
const USER_ID = '4004';
const PRINCIPAL_ID = '5005';

function makeShopee() {
  return new ShopeeModule({
    partnerId: PARTNER_ID,
    partnerKey: PARTNER_KEY,
    shopId: SHOP_ID,
    merchantId: MERCHANT_ID,
    userId: USER_ID,
    principalId: PRINCIPAL_ID,
    accessToken: ACCESS_TOKEN,
    refreshToken: 'r',
  });
}

const hmac = (base) => crypto.createHmac('sha256', PARTNER_KEY).update(base).digest('hex');

async function capture(run) {
  const originalGet = axios.get;
  const originalPost = axios.post;
  let call;
  const ok = { status: 200, data: { error: '', message: '', response: {} } };
  axios.get = async (url) => ((call = { method: 'GET', url }), ok);
  axios.post = async (url, body) => ((call = { method: 'POST', url, body }), ok);
  try {
    await run(makeShopee());
  } finally {
    axios.get = originalGet;
    axios.post = originalPost;
  }
  return call;
}

// Shopee verifies the signature over the FULL api path (/api/v2/...). The domain-relative helpers
// (callShopeeApi / callShopeePublicApi / multipart uploads) used to sign the short path, so Shopee rejected
// every request made through them with error_sign.

test('regression: shop-level submodule endpoints sign partner_id + /api/v2/<path> + timestamp + access_token + shop_id', async () => {
  const call = await capture((shopee) => shopee.accountHealth.getLateOrders({}));
  const url = new URL(call.url);
  assert.equal(url.pathname, '/api/v2/account_health/get_late_orders');

  const timestamp = url.searchParams.get('timestamp');
  assert.equal(url.searchParams.get('sign'), hmac(`${PARTNER_ID}/api/v2/account_health/get_late_orders${timestamp}${ACCESS_TOKEN}${SHOP_ID}`));
  assert.notEqual(
    url.searchParams.get('sign'),
    hmac(`${PARTNER_ID}/account_health/get_late_orders${timestamp}${ACCESS_TOKEN}${SHOP_ID}`),
    'signing the short path is rejected by Shopee',
  );
});

test('regression: multipart upload endpoints sign the full /api/v2 path (media_space uploads are Public APIs)', async () => {
  const call = await capture((shopee) => shopee.mediaSpace.uploadImage({ image: Buffer.from('img') }));
  const url = new URL(call.url);
  assert.equal(url.pathname, '/api/v2/media_space/upload_image');
  const timestamp = url.searchParams.get('timestamp');
  // Public API: partner_id + path + timestamp, and no access_token / shop_id in the query.
  assert.equal(url.searchParams.get('sign'), hmac(`${PARTNER_ID}/api/v2/media_space/upload_image${timestamp}`));
  assert.equal(url.searchParams.has('access_token'), false);
  assert.equal(url.searchParams.has('shop_id'), false);
});

test('regression: public (partner-level) endpoints sign partner_id + /api/v2/<path> + timestamp', async () => {
  const call = await capture((shopee) => shopee.publicApi.getShopeeIpRanges());
  const url = new URL(call.url);
  assert.equal(url.pathname, '/api/v2/public/get_shopee_ip_ranges');
  const timestamp = url.searchParams.get('timestamp');
  assert.equal(url.searchParams.get('sign'), hmac(`${PARTNER_ID}/api/v2/public/get_shopee_ip_ranges${timestamp}`));
});

test('legacy flat methods keep signing the full /api/v2 path (unchanged)', async () => {
  const call = await capture((shopee) => shopee.getShopInfo());
  const url = new URL(call.url);
  assert.equal(url.pathname, '/api/v2/shop/get_shop_info');
  const timestamp = url.searchParams.get('timestamp');
  assert.equal(url.searchParams.get('sign'), hmac(`${PARTNER_ID}/api/v2/shop/get_shop_info${timestamp}${ACCESS_TOKEN}${SHOP_ID}`));
});

test('regression: public POST endpoints send their payload in the JSON body, not the URL', async () => {
  const call = await capture((shopee) => shopee.publicApi.getTokenByResendCode({ resend_code: 'secret-resend-code' }));
  assert.equal(call.method, 'POST');
  assert.equal(new URL(call.url).searchParams.has('resend_code'), false);
  assert.equal(call.url.includes('secret-resend-code'), false, 'secrets must not appear in URLs / access logs');
  assert.deepEqual(call.body, { resend_code: 'secret-resend-code' });
});

test('public GET endpoints still send their query parameters in the URL', async () => {
  const call = await capture((shopee) => shopee.publicApi.getShopeeIpRanges());
  assert.equal(call.method, 'GET');
  assert.ok(new URL(call.url).searchParams.has('partner_id'));
});
