import { TiktokConfig } from '../dto/request/config.request';
import {
  getActiveShops,
  getSellerPermissions,
} from '../api/seller-v3.api';
import {
  TiktokSellerPermissionsResponse,
  TiktokSellerShopsResponse,
} from '../dto/response/seller-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Seller` API namespace.
 *
 * Access via `tiktok.seller.<method>()` on a `TiktokModule` instance.
 */
export class TiktokSeller {
  constructor(private config: TiktokConfig) {}

  async getActiveShops(): Promise<TiktokResponseCommon<TiktokSellerShopsResponse>> {
    return await getActiveShops(this.config);
  }

  async getSellerPermissions(): Promise<TiktokResponseCommon<TiktokSellerPermissionsResponse>> {
    return await getSellerPermissions(this.config);
  }
}
