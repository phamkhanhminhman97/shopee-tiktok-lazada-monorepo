import { createHmac, timingSafeEqual } from 'crypto';

/** Raw HTTP body of a Lazada push message request, exactly as received. */
export type LazadaPushRawBody = string | Buffer;

export interface LazadaVerifyPushSignatureOptions {
  /** Lazada Open Platform app key of the app that receives the push messages. */
  appKey: string;
  /** Lazada Open Platform app secret (HMAC key). */
  appSecret: string;
  /** The raw request body bytes/string as received - never `JSON.stringify()` a parsed body. */
  rawBody: LazadaPushRawBody;
  /** Value of the `Authorization` request header sent by Lazada. */
  authorization: string;
}

/**
 * Compute the Lazada Push Mechanism signature:
 *
 *   hex( HMAC_SHA256( key = appSecret, message = appKey + rawBody ) )
 *
 * Mainly useful for tests; production handlers should call
 * `verifyLazadaPushSignature()` instead.
 */
export function createLazadaPushSignature(appKey: string, appSecret: string, rawBody: LazadaPushRawBody): string {
  return createHmac('sha256', appSecret).update(appKey).update(rawBody).digest('hex');
}

/**
 * Verify the `Authorization` header of a Lazada push message request.
 *
 * Pass the raw body exactly as received: re-serializing a parsed JSON body can
 * change whitespace/key order and yield a different signature. Comparison is
 * constant-time and case-insensitive for the hex digest. Returns `false` (never
 * throws) for a missing, malformed or mismatching signature, so handlers can
 * reject with a 401.
 */
export function verifyLazadaPushSignature(options: LazadaVerifyPushSignatureOptions): boolean {
  const { appKey, appSecret, rawBody, authorization } = options;
  if (!appKey || !appSecret || typeof authorization !== 'string') {
    return false;
  }

  const received = authorization.trim();
  if (!/^[a-f0-9]+$/i.test(received)) {
    return false;
  }

  const expectedBuffer = Buffer.from(createLazadaPushSignature(appKey, appSecret, rawBody), 'hex');
  const receivedBuffer = Buffer.from(received, 'hex');
  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

/**
 * Parse a raw push message body into a typed payload. Call this only AFTER the
 * signature has been verified.
 */
export function parseLazadaPushPayload<TPayload = unknown>(rawBody: LazadaPushRawBody): TPayload {
  const text = Buffer.isBuffer(rawBody) ? rawBody.toString('utf8') : rawBody;
  return JSON.parse(text) as TPayload;
}
