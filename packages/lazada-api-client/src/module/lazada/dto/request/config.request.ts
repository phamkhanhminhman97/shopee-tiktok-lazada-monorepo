/**
 * Configuration used to initialize `LazadaModule`.
 *
 * Typical usage:
 *
 * ```ts
 * const lazada = new LazadaModule({
 *   appKey: 'YOUR_APP_KEY',
 *   appSecret: 'YOUR_APP_SECRET',
 *   appAccessToken: 'YOUR_ACCESS_TOKEN',
 *   refreshToken: 'YOUR_REFRESH_TOKEN',
 *   countryCode: 'sg',
 * });
 * ```
 *
 * Authorization callback exchange usage:
 *
 * ```ts
 * const lazada = new LazadaModule({
 *   appKey: 'YOUR_APP_KEY',
 *   appSecret: 'YOUR_APP_SECRET',
 * });
 * ```
 */
export interface LazadaConfig {
  /**
   * Lazada Open Platform APP Key.
   * Required for all authorization and API requests.
   */
  appKey: string;
  /**
   * Lazada Open Platform APP Secret used to sign requests.
   * Keep this on the server only.
   */
  appSecret: string;
  /**
   * Optional Lazada region or country code such as `sg`, `my`, `vn`, or `cb`.
   * Store this if your application needs it after authorization.
   */
  countryCode?: string;
  /**
   * Optional shop identifier stored by the application.
   * Lazada access tokens are store-specific.
   */
  shopId?: string;
  /**
   * Current Lazada access token.
   * Required for private seller APIs such as orders and products.
   */
  appAccessToken?: string;
  /**
   * Current Lazada refresh token.
   * Required when calling `refreshToken()`.
   */
  refreshToken?: string;
  /**
   * Remaining access token lifetime in seconds.
   */
  expiresIn?: number;
  /**
   * Remaining refresh token lifetime in seconds.
   */
  refreshExpiresIn?: number;
}

export interface LazadaConfigList {
  [shopId: string]: LazadaConfig;
}
