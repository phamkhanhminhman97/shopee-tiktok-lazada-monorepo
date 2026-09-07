import { TiktokConfig } from '../dto/request/config.request';
import {
  getAuthorizedShops,
  getCategoryAssets,
} from '../api/shop-v3.api';
import {
  TiktokAuthorizedShopsResponse,
  TiktokCategoryAssetsResponse,
} from '../dto/response/shop-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Shop` API namespace.
 *
 * Access via `tiktok.shop.<method>()` on a `TiktokModule` instance.
 */
export class TiktokShop {
  constructor(private config: TiktokConfig) {}

  async getAuthorizedShops(): Promise<TiktokResponseCommon<TiktokAuthorizedShopsResponse>> {
    return await getAuthorizedShops(this.config);
  }

  async getCategoryAssets(): Promise<TiktokResponseCommon<TiktokCategoryAssetsResponse>> {
    return await getCategoryAssets(this.config);
  }
}
