import { createHmac, timingSafeEqual } from 'crypto';
import { ShopeeKnownPushPayload, ShopeePushPayload, ShopeeVerifyPushSignatureOptions } from '../dto/request/push.request';

function normalizeRawBody(rawBody: string | Buffer): string {
  return Buffer.isBuffer(rawBody) ? rawBody.toString('utf8') : rawBody;
}

/**
 * Create Shopee Push Mechanism signature.
 *
 * Shopee signs the exact callback URL and raw request body:
 *
 *   callbackUrl + "|" + rawBody
 *
 * This helper exists mainly for testing and debugging. In production callback
 * handlers, use `verifyShopeePushSignature()` against Shopee's Authorization
 * header instead.
 */
function createPushSignature(callbackUrl: string, rawBody: string | Buffer, partnerKey: string): string {
  const baseString = `${callbackUrl}|${normalizeRawBody(rawBody)}`;

  return createHmac('sha256', partnerKey).update(baseString).digest('hex');
}

/**
 * Parse Shopee Push raw request body into a typed payload.
 *
 * Important: parse only after verifying the Authorization header. Shopee Push
 * docs explicitly discourage reconstructing the body with JSON.stringify for
 * signature verification because key order/whitespace may change.
 */
function parsePushPayload<TPayload extends ShopeePushPayload = ShopeeKnownPushPayload>(rawBody: string | Buffer): TPayload {
  return JSON.parse(normalizeRawBody(rawBody)) as TPayload;
}

/**
 * Verify Shopee Push Mechanism (webhook) Authorization header.
 *
 * Shopee signs the exact callback URL and raw request body:
 *   callbackUrl + "|" + rawBody
 *
 * Always pass the raw body as received from Shopee. Re-stringifying parsed JSON
 * can change whitespace/key order and produce a different signature.
 *
 * Shopee expects successful callback handlers to return a 2xx response with an
 * empty body within the push timeout window. Otherwise Shopee may retry the
 * same message, and docs note that duplicate messages are possible.
 */
function verifyPushSignature(options: ShopeeVerifyPushSignatureOptions): boolean {
  const expected = createPushSignature(options.callbackUrl, options.rawBody, options.partnerKey);
  const received = options.authorization.trim();

  if (!/^[a-f0-9]+$/i.test(received)) {
    return false;
  }

  const expectedBuffer = Buffer.from(expected, 'hex');
  const receivedBuffer = Buffer.from(received, 'hex');

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

export {
  createPushSignature as createShopeePushSignature,
  parsePushPayload as parseShopeePushPayload,
  verifyPushSignature as verifyShopeePushSignature,
};
