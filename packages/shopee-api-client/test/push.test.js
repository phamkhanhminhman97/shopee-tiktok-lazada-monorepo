const assert = require('node:assert/strict');
const { createHmac } = require('node:crypto');
const test = require('node:test');

const {
  SHOPEE_PUSH_CODE,
  ShopeeModule,
  createShopeePushSignature,
  parseShopeePushPayload,
  verifyShopeePushSignature,
} = require('../dist');

const callbackUrl = 'https://example.com/shopee/webhook';
const partnerKey = 'test-partner-key';
const rawBody = JSON.stringify({
  data: {
    items: [],
    ordersn: '220810QSK8S7BX',
    status: 'PROCESSED',
    completed_scenario: '',
    update_time: 1660123127,
  },
  shop_id: 727720655,
  code: SHOPEE_PUSH_CODE.ORDER_STATUS_UPDATE,
  timestamp: 1660123127,
});

test('createShopeePushSignature signs callback URL and raw body with HMAC-SHA256', () => {
  const expected = createHmac('sha256', partnerKey).update(`${callbackUrl}|${rawBody}`).digest('hex');

  assert.equal(createShopeePushSignature(callbackUrl, rawBody, partnerKey), expected);
});

test('verifyShopeePushSignature returns true for a valid Authorization header', () => {
  const authorization = createShopeePushSignature(callbackUrl, rawBody, partnerKey);

  assert.equal(
    verifyShopeePushSignature({
      callbackUrl,
      rawBody,
      partnerKey,
      authorization,
    }),
    true,
  );
});

test('verifyShopeePushSignature accepts Buffer raw bodies', () => {
  const rawBuffer = Buffer.from(rawBody, 'utf8');
  const authorization = createShopeePushSignature(callbackUrl, rawBuffer, partnerKey);

  assert.equal(
    verifyShopeePushSignature({
      callbackUrl,
      rawBody: rawBuffer,
      partnerKey,
      authorization,
    }),
    true,
  );
});

test('verifyShopeePushSignature returns false for invalid signatures', () => {
  const authorization = createShopeePushSignature(callbackUrl, rawBody, partnerKey);

  assert.equal(
    verifyShopeePushSignature({
      callbackUrl: 'https://example.com/wrong-webhook',
      rawBody,
      partnerKey,
      authorization,
    }),
    false,
  );
});

test('verifyShopeePushSignature returns false for non-hex Authorization headers', () => {
  assert.equal(
    verifyShopeePushSignature({
      callbackUrl,
      rawBody,
      partnerKey,
      authorization: 'not-a-hex-signature',
    }),
    false,
  );
});

test('parseShopeePushPayload parses verified raw body payloads', () => {
  const payload = parseShopeePushPayload(rawBody);

  assert.equal(payload.code, SHOPEE_PUSH_CODE.ORDER_STATUS_UPDATE);
  assert.equal(payload.shop_id, 727720655);
  assert.equal(payload.data.ordersn, '220810QSK8S7BX');
  assert.equal(payload.data.status, 'PROCESSED');
});

test('ShopeeModule verifies and parses push payloads using configured partnerKey', () => {
  const shopee = new ShopeeModule({
    partnerId: 1,
    partnerKey,
  });
  const authorization = createShopeePushSignature(callbackUrl, rawBody, partnerKey);

  assert.equal(shopee.verifyPushSignature(callbackUrl, rawBody, authorization), true);
  assert.equal(shopee.parsePushPayload(rawBody).data.ordersn, '220810QSK8S7BX');
});
