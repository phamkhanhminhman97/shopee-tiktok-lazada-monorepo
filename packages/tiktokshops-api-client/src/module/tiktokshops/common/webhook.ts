import { createHmac, timingSafeEqual } from 'crypto';

/** Raw HTTP body of a TikTok Shop webhook request, exactly as received. */
export type TiktokWebhookRawBody = string | Buffer;

export interface TiktokVerifyWebhookSignatureOptions {
  /** TikTok Shop app key of the app that registered the webhook. */
  appKey: string;
  /** TikTok Shop app secret (HMAC key). */
  appSecret: string;
  /** The raw request body bytes/string as received - never `JSON.stringify()` a parsed body. */
  rawBody: TiktokWebhookRawBody;
  /** Value of the `Authorization` request header sent by TikTok Shop. */
  authorization: string;
}

/**
 * Compute the TikTok Shop webhook signature:
 *
 *   hex( HMAC_SHA256( key = appSecret, message = appKey + rawBody ) )
 *
 * Mainly useful for tests; production handlers should call
 * `verifyTiktokWebhookSignature()` instead.
 */
export function createTiktokWebhookSignature(appKey: string, appSecret: string, rawBody: TiktokWebhookRawBody): string {
  return createHmac('sha256', appSecret).update(appKey).update(rawBody).digest('hex');
}

/**
 * Verify the `Authorization` header of a TikTok Shop webhook request.
 *
 * Pass the raw body exactly as received: re-serializing a parsed JSON body can
 * change whitespace/key order and yield a different signature. Comparison is
 * constant-time. Returns `false` (never throws) for a missing, malformed or
 * mismatching signature, so handlers can reject with a 401.
 */
export function verifyTiktokWebhookSignature(options: TiktokVerifyWebhookSignatureOptions): boolean {
  const { appKey, appSecret, rawBody, authorization } = options;
  if (!appKey || !appSecret || typeof authorization !== 'string') {
    return false;
  }

  const received = authorization.trim();
  if (!/^[a-f0-9]+$/i.test(received)) {
    return false;
  }

  const expectedBuffer = Buffer.from(createTiktokWebhookSignature(appKey, appSecret, rawBody), 'hex');
  const receivedBuffer = Buffer.from(received, 'hex');
  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

/**
 * Parse a raw webhook body into a typed payload. Call this only AFTER the
 * signature has been verified.
 */
export function parseTiktokWebhookPayload<TPayload = unknown>(rawBody: TiktokWebhookRawBody): TPayload {
  const text = Buffer.isBuffer(rawBody) ? rawBody.toString('utf8') : rawBody;
  return JSON.parse(text) as TPayload;
}
