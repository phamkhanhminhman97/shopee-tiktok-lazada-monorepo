const assert = require('node:assert/strict');
const test = require('node:test');
const crypto = require('node:crypto');

const { createLazadaPushSignature, parseLazadaPushPayload, verifyLazadaPushSignature } = require('../dist');

const APP_KEY = '100001';
const APP_SECRET = 'push-app-secret';
const BODY = '{"data":{"trade_order_id":"123","order_status":"unpaid"},"message_type":0,"seller_id":"7001","site":"lazada_vn","timestamp":1700000000}';

function referenceSignature(body) {
  return crypto.createHmac('sha256', APP_SECRET).update(APP_KEY + body).digest('hex');
}

test('createLazadaPushSignature = hex(HMAC_SHA256(appSecret, appKey + rawBody))', () => {
  assert.equal(createLazadaPushSignature(APP_KEY, APP_SECRET, BODY), referenceSignature(BODY));
  assert.equal(createLazadaPushSignature(APP_KEY, APP_SECRET, Buffer.from(BODY)), referenceSignature(BODY));
});

test('verifyLazadaPushSignature accepts a valid signature (string/Buffer body, any hex case, surrounding whitespace)', () => {
  const authorization = referenceSignature(BODY);
  const base = { appKey: APP_KEY, appSecret: APP_SECRET };
  assert.equal(verifyLazadaPushSignature({ ...base, rawBody: BODY, authorization }), true);
  assert.equal(verifyLazadaPushSignature({ ...base, rawBody: Buffer.from(BODY), authorization }), true);
  assert.equal(verifyLazadaPushSignature({ ...base, rawBody: BODY, authorization: `  ${authorization.toUpperCase()} ` }), true);
});

test('verifyLazadaPushSignature rejects a tampered body, wrong secret or wrong app key', () => {
  const authorization = referenceSignature(BODY);
  assert.equal(verifyLazadaPushSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY.replace('123', '999'), authorization }), false);
  assert.equal(verifyLazadaPushSignature({ appKey: APP_KEY, appSecret: 'other', rawBody: BODY, authorization }), false);
  assert.equal(verifyLazadaPushSignature({ appKey: '999', appSecret: APP_SECRET, rawBody: BODY, authorization }), false);
});

test('verifyLazadaPushSignature never throws on malformed input', () => {
  const base = { appKey: APP_KEY, appSecret: APP_SECRET, rawBody: BODY };
  for (const authorization of ['', 'not-hex!', 'abc', 'zz'.repeat(32), undefined, null, 123]) {
    assert.equal(verifyLazadaPushSignature({ ...base, authorization }), false, String(authorization));
  }
  assert.equal(verifyLazadaPushSignature({ ...base, appKey: '', authorization: referenceSignature(BODY) }), false);
  assert.equal(verifyLazadaPushSignature({ ...base, appSecret: '', authorization: referenceSignature(BODY) }), false);
});

test('re-serialized JSON does not verify (raw body must be used as received)', () => {
  const authorization = referenceSignature(BODY);
  const reserialized = JSON.stringify(JSON.parse(BODY), null, 2);
  assert.equal(verifyLazadaPushSignature({ appKey: APP_KEY, appSecret: APP_SECRET, rawBody: reserialized, authorization }), false);
});

test('parseLazadaPushPayload parses string and Buffer bodies', () => {
  assert.equal(parseLazadaPushPayload(BODY).data.trade_order_id, '123');
  assert.equal(parseLazadaPushPayload(Buffer.from(BODY)).seller_id, '7001');
  assert.throws(() => parseLazadaPushPayload('not json'));
});
