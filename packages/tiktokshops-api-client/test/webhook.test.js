const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');

const {
  createTiktokWebhookSignature,
  parseTiktokWebhookPayload,
  verifyTiktokWebhookSignature,
} = require('../dist');

const APP_KEY = 'webhook-app-key';
const APP_SECRET = 'webhook-app-secret';
const BODY = '{"type":1,"shop_id":"7494","timestamp":1700000000,"data":{"order_id":"5760","order_status":"AWAITING_SHIPMENT"}}';

function referenceSignature(body) {
  return crypto.createHmac('sha256', APP_SECRET).update(APP_KEY + body).digest('hex');
}

test('createTiktokWebhookSignature = hex(HMAC_SHA256(appSecret, appKey + rawBody))', () => {
  assert.equal(createTiktokWebhookSignature(APP_KEY, APP_SECRET, BODY), referenceSignature(BODY));
  assert.equal(createTiktokWebhookSignature(APP_KEY, APP_SECRET, Buffer.from(BODY)), referenceSignature(BODY));
});

test('verifyTiktokWebhookSignature accepts a valid signature (string and Buffer bodies)', () => {
  const authorization = referenceSignature(BODY);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY, authorization }), true);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: Buffer.from(BODY), authorization }), true);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY, authorization: `  ${authorization.toUpperCase()} ` }), true);
});

test('verifyTiktokWebhookSignature rejects a tampered body, wrong secret or wrong app key', () => {
  const authorization = referenceSignature(BODY);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY.replace('5760', '9999'), authorization }), false);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: 'other-secret', rawBody: BODY, authorization }), false);
  assert.equal(verifyTiktokWebhookSignature({ appKey: 'other-key', appSecret: APP_SECRET, rawBody: BODY, authorization }), false);
});

test('verifyTiktokWebhookSignature never throws on malformed input', () => {
  const base = { appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY };
  for (const authorization of ['', 'not-hex!', 'abc', 'zz'.repeat(32), undefined, null, 123]) {
    assert.equal(verifyTiktokWebhookSignature({ ...base, authorization }), false, String(authorization));
  }
  assert.equal(verifyTiktokWebhookSignature({ ...base, appKey: '', authorization: referenceSignature(BODY) }), false);
  assert.equal(verifyTiktokWebhookSignature({ ...base, appSecret: '', authorization: referenceSignature(BODY) }), false);
});

test('re-serialized JSON does not verify (raw body must be used as received)', () => {
  const authorization = referenceSignature(BODY);
  const reserialized = JSON.stringify(JSON.parse(BODY), null, 2);
  assert.equal(verifyTiktokWebhookSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: reserialized, authorization }), false);
});

test('parseTiktokWebhookPayload parses string and Buffer bodies', () => {
  assert.equal(parseTiktokWebhookPayload(BODY).data.order_id, '5760');
  assert.equal(parseTiktokWebhookPayload(Buffer.from(BODY)).shop_id, '7494');
  assert.throws(() => parseTiktokWebhookPayload('not json'));
});
