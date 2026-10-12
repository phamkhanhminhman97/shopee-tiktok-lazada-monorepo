/**
 * Configuration used to initialize `TiktokModule`.
 *
 * Typical seller API usage:
 *
 * ```ts
 * const tiktok = new TiktokModule({
 *   appKey: 'YOUR_APP_KEY',
 *   appSecret: 'YOUR_APP_SECRET',
 *   shopId: 'YOUR_SHOP_ID',
 *   shopCipher: 'YOUR_SHOP_CIPHER',
 *   accessToken: 'YOUR_ACCESS_TOKEN',
 *   refreshToken: 'YOUR_REFRESH_TOKEN',
 * });
 * ```
 *
 * Authorization exchange usage:
 *
 * ```ts
 * const tiktok = new TiktokModule({
 *   appKey: 'YOUR_APP_KEY',
 *   appSecret: 'YOUR_APP_SECRET',
 *   serviceId: 'YOUR_SERVICE_ID',
 * });
 * ```
 */
export interface TiktokConfig {
  /**
   * TikTok Shop app key from Partner Center.
   * Required for all auth and seller API requests.
   */
  appKey: string;
  /**
   * TikTok Shop app secret from Partner Center.
   * Keep this on the server only.
   */
  appSecret: string;
  /**
   * Optional TikTok Shop service ID used to generate authorization links.
   */
  serviceId?: string;
  /**
   * TikTok Shop shop ID.
   * Required for most seller APIs.
   */
  shopId?: string;
  /**
   * Current TikTok Shop access token.
   * Required for private seller APIs.
   */
  accessToken?: string;
  /**
   * Access token expiration as a Unix timestamp.
   */
  accessTokenExpire?: number;
  /**
   * Refresh token expiration as a Unix timestamp.
   */
  refreshTokenExipre?: number;
  /**
   * Current TikTok Shop refresh token.
   * Required when calling `refreshToken()`.
   */
  refreshToken?: string;
  /**
   * TikTok Shop shop cipher.
   * Required for some seller APIs such as order search.
   */
  shopCipher?: string;
  /**
   * TikTok Shop category assets cipher.
   * Required for some Product domain APIs (e.g. category/attribute/brand
   * lookups that are scoped to a specific category asset context).
   */
  categoryAssetsCipher?: string;
  /**
   * Per-request timeout in milliseconds for seller API calls made through the
   * domain namespaces (`tiktok.order.*`, `tiktok.product.*`, ...). Defaults to 30000.
   */
  timeoutMs?: number;
  /**
   * Number of automatic retries for idempotent GET requests on transient
   * failures (network errors, 408/429/5xx). Defaults to 2; set `0` to disable.
   * POST/PUT/DELETE requests are never retried automatically.
   */
  maxRetries?: number;
}

export interface TiktokConfigList {
  [shopId: string]: TiktokConfig;
}

/**
 * A file sent in a multipart/form-data request: raw bytes, or bytes plus the file name to send them with
 * (defaults to the form field name).
 */
export type TiktokUploadFile = Buffer | { data: Buffer; filename?: string };

export interface TiktokRequestAccessToken {
  app_key: string;
  app_secret: string;
  auth_code: string; //The code you obtain in the last step
  grant_type: string; //The way you grant token. Only "authorized_code" is accepted.
}

export interface TiktokRequestRefreshToken {
  app_key: string;
  app_secret: string;
  refresh_token: string; //The refresh token used to obtain a new access token.
  grant_type: string; //The way you grant token. Only "refresh_token" is accepted.
}

export interface TiktokRequestCommon {
  access_token?: string;
  shop_id?: string;
}
