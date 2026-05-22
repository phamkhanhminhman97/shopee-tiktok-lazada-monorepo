import { TiktokConfig } from '../../dto/request/config.request';
import { TIKTOK_END_POINT_AUTH, TIKTOK_END_POINT_AUTH_2309, TIKTOK_END_POINT_AUTH_2309_US, TIKTOK_PATH_202309 } from '../../common/constant';
import * as TiktokHelper from '../../common/helper';
import { TiktokResponseAccessToken, TiktokResponseAuthorized, TiktokResponseRefreshToken } from '../../dto/response/config.response';

async function requestTiktokAPI(config: TiktokConfig, path: string): Promise<any> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter(config, timestamp);
  const url = TiktokHelper.genURLwithSignature(path, commonParam, config);
  return TiktokHelper.httpGet(url, config);
}

/**
 * Generate a TikTok Shop seller authorization URL.
 *
 * Docs use:
 * - non-US: https://services.tiktokshop.com/open/authorize
 * - US: https://services.us.tiktokshop.com/open/authorize
 * - required query: service_id
 * - optional query: state
 */
export function generateAuthLink(serviceId: string, state?: string, useUsDomain = false) {
  const baseUrl = useUsDomain ? TIKTOK_END_POINT_AUTH_2309_US : TIKTOK_END_POINT_AUTH_2309;
  const queryParams = new URLSearchParams({
    service_id: serviceId,
  });

  if (state) {
    queryParams.set('state', state);
  }

  return {
    url: `${baseUrl}?${queryParams.toString()}`,
    serviceId,
    state,
  };
}

/**
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseAuthorized>} - Response of get authorized shop.
 */
export function getAuthorizedShop(config: TiktokConfig): Promise<TiktokResponseAuthorized> {
  return requestTiktokAPI(config, TIKTOK_PATH_202309.AUTHORIZED_SHOP);
}

/**
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseRefreshToken>} - Response of refreshing token.
 */
export function refreshToken(config: TiktokConfig): Promise<TiktokResponseRefreshToken> {
  const { appKey, appSecret, refreshToken } = config;

  if (!refreshToken) {
    throw new Error('refreshToken is required to refresh TikTok Shop access token.');
  }

  const queryParams = new URLSearchParams({
    app_key: appKey,
    app_secret: appSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });
  const url = `${TIKTOK_END_POINT_AUTH}${TIKTOK_PATH_202309.REFRESH_TOKEN}?${queryParams}`;

  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param authCode
 * @param config
 * @returns
 */
export function fetchTokenWithAuthCode(authCode: string, config: TiktokConfig): Promise<TiktokResponseAccessToken> {
  const { appKey, appSecret } = config;
  const queryParams = new URLSearchParams({
    app_key: appKey,
    auth_code: authCode,
    app_secret: appSecret,
    grant_type: 'authorized_code',
  });
  const url = `${TIKTOK_END_POINT_AUTH}${TIKTOK_PATH_202309.FETCH_TOKEN}?${queryParams}`;

  return TiktokHelper.httpGet(url, config);
}
