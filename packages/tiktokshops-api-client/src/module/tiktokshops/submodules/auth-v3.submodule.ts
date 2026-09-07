import { TiktokConfig } from '../dto/request/config.request';
import {
  getAccessToken,
  refreshAccessToken,
} from '../api/auth-v3.api';
import {
  TiktokGetAccessTokenParams,
  TiktokRefreshAccessTokenParams,
} from '../dto/request/auth-v3.request';
import {
  TiktokAccessTokenResponse,
} from '../dto/response/auth-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Auth` API namespace.
 *
 * Access via `tiktok.auth.<method>()` on a `TiktokModule` instance.
 */
export class TiktokAuth {
  constructor(private config: TiktokConfig) {}

  async getAccessToken(params: TiktokGetAccessTokenParams): Promise<TiktokResponseCommon<TiktokAccessTokenResponse>> {
    return await getAccessToken(params, this.config);
  }

  async refreshAccessToken(params: TiktokRefreshAccessTokenParams): Promise<TiktokResponseCommon<TiktokAccessTokenResponse>> {
    return await refreshAccessToken(params, this.config);
  }
}
