import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokGetAccessTokenParams,
  TiktokRefreshAccessTokenParams,
} from '../dto/request/auth-v3.request';
import {
  TiktokAccessTokenResponse,
} from '../dto/response/auth-v3.response';

/**
 * Exchange an authorization code for an access token.
 * This method should be used after the user authorizes your app and you receive a code.
 *
 * @param params - Includes `auth_code` and optional `grant_type`
 * @param config - Tiktok API configuration.
 * @returns Promise resolving to an AccessTokenResponse object
 */
export async function getAccessToken(params: TiktokGetAccessTokenParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokAccessTokenResponse>> {
  return TiktokHelper.callTiktokAuthApi<TiktokResponseCommon<TiktokAccessTokenResponse>>(
    '/api/v2/token/get',
    'GET',
    {
      app_key: config.appKey,
      app_secret: config.appSecret,
      grant_type: 'authorized_code',
      auth_code: params.auth_code,
    },
    'getAccessToken',
  );
}

/**
 * Refresh an existing access token using a refresh token.
 * This is useful when the original access token has expired.
 *
 * @param params - Includes `refresh_token` and `grant_type`
 * @param config - Tiktok API configuration.
 * @returns Promise resolving to an AccessTokenResponse object
 */
export async function refreshAccessToken(params: TiktokRefreshAccessTokenParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokAccessTokenResponse>> {
  return TiktokHelper.callTiktokAuthApi<TiktokResponseCommon<TiktokAccessTokenResponse>>(
    '/api/v2/token/refresh',
    'GET',
    {
      app_key: config.appKey,
      app_secret: config.appSecret,
      grant_type: 'refresh_token',
      refresh_token: params.refresh_token,
    },
    'refreshAccessToken',
  );
}

