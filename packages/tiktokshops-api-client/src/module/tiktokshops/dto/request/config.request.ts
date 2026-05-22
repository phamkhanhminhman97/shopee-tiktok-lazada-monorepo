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
}

export interface TiktokConfigList {
  [shopId: string]: TiktokConfig;
}

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
