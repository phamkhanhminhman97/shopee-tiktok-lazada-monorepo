import { LAZADA_PATH, LZD_ALGORITHM, LZD_END_POINT_AUTH } from '../common/constant';
import { executeAuth } from '../common/helper';
import { LazadaConfig } from '../dto/request/config.request';
import { LazadaResponseAccessToken } from '../dto/response/config.response';
import * as LazadaHelper from '../common/helper';

/**
 * Generate a Lazada seller authorization URL.
 *
 * Lazada docs (2026) use:
 * - response_type=code
 * - force_auth=true
 * - redirect_uri
 * - client_id
 * - optional state
 *
 * The third parameter is kept for backward compatibility. It is now sent as
 * `state`, which is the documented Lazada field.
 */
export function generateAuthLink(redirectURL: string, appKey: string, state?: string) {
  const queryParams = new URLSearchParams({
    response_type: 'code',
    force_auth: 'true',
    redirect_uri: redirectURL,
    client_id: appKey,
  });

  if (state) {
    queryParams.set('state', state);
  }

  const url = `${LZD_END_POINT_AUTH}?${queryParams.toString()}`;

  return { url, redirect: redirectURL };
}

/**
 * Exchange a Lazada authorization code for an access token.
 *
 * The second parameter used to be called `uuid` in this package. Lazada's 2026
 * docs do not require that field for token exchange, so it is accepted for
 * backward compatibility and ignored.
 */
export function fetchTokenWithAuthCode(
  authCode: string,
  _legacyStateOrUuid: string | undefined,
  config: LazadaConfig
): Promise<LazadaResponseAccessToken> {
  const { appKey, appSecret } = config;

  const payload = {
    app_key: appKey,
    sign_method: LZD_ALGORITHM,
    timestamp: LazadaHelper.getTimestampMilisec(),
    code: authCode,
  };

  return executeAuth(LAZADA_PATH.FETCH_TOKEN, payload, appSecret);
}

export async function refreshToken(config: LazadaConfig): Promise<LazadaResponseAccessToken> {
  if (!config.refreshToken) {
    throw new Error('refreshToken is required to refresh Lazada access token.');
  }

  const payload = {
    refresh_token: config.refreshToken,
    app_key: config.appKey,
    sign_method: LZD_ALGORITHM,
    timestamp: LazadaHelper.getTimestampMilisec(),
  };
  return LazadaHelper.httpGet(LAZADA_PATH.REFRESH_TOKEN, payload, config.appSecret);
}
