import { ShopeeConfig } from '../dto/request/config.request';
import {
  getMerchantInfo,
  getMerchantPrepaidAccountList,
  getMerchantWarehouseList,
  getMerchantWarehouseLocationList,
  getShopListByMerchant,
  getWarehouseEligibleShopList,
} from '../api/merchant.api';
import {
  ShopeeGetMerchantInfoRequest,
  ShopeeGetMerchantPrepaidAccountListRequest,
  ShopeeGetMerchantWarehouseListRequest,
  ShopeeGetMerchantWarehouseLocationListRequest,
  ShopeeGetShopListByMerchantRequest,
  ShopeeGetWarehouseEligibleShopListRequest,
} from '../dto/request/merchant.request';
import {
  ShopeeGetMerchantInfoResponse,
  ShopeeGetMerchantPrepaidAccountListResponse,
  ShopeeGetMerchantWarehouseListResponse,
  ShopeeGetMerchantWarehouseLocationListResponse,
  ShopeeGetShopListByMerchantResponse,
  ShopeeGetWarehouseEligibleShopListResponse,
} from '../dto/response/merchant.response';

/**
 * Shopee `v2.merchant.*` API namespace.
 *
 * Access via `shopee.merchant.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeMerchant {
  constructor(private config: ShopeeConfig) {}

  async getMerchantInfo(): Promise<ShopeeGetMerchantInfoResponse> {
    return await getMerchantInfo(this.config);
  }

  async getMerchantPrepaidAccountList(params: ShopeeGetMerchantPrepaidAccountListRequest): Promise<ShopeeGetMerchantPrepaidAccountListResponse> {
    return await getMerchantPrepaidAccountList(params, this.config);
  }

  async getMerchantWarehouseList(params: ShopeeGetMerchantWarehouseListRequest): Promise<ShopeeGetMerchantWarehouseListResponse> {
    return await getMerchantWarehouseList(params, this.config);
  }

  async getMerchantWarehouseLocationList(): Promise<ShopeeGetMerchantWarehouseLocationListResponse> {
    return await getMerchantWarehouseLocationList(this.config);
  }

  async getShopListByMerchant(params: ShopeeGetShopListByMerchantRequest): Promise<ShopeeGetShopListByMerchantResponse> {
    return await getShopListByMerchant(params, this.config);
  }

  async getWarehouseEligibleShopList(params: ShopeeGetWarehouseEligibleShopListRequest): Promise<ShopeeGetWarehouseEligibleShopListResponse> {
    return await getWarehouseEligibleShopList(params, this.config);
  }
}
