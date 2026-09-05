import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * getMerchantInfo via Shopee `v2.merchant.get_merchant_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMerchantInfo(config: ShopeeConfig): Promise<ShopeeGetMerchantInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMerchantInfoResponse>('/merchant/get_merchant_info', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMerchantInfo',
  });
}

/**
 * getMerchantPrepaidAccountList via Shopee `v2.merchant.get_merchant_prepaid_account_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMerchantPrepaidAccountList(params: ShopeeGetMerchantPrepaidAccountListRequest, config: ShopeeConfig): Promise<ShopeeGetMerchantPrepaidAccountListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMerchantPrepaidAccountListResponse>('/merchant/get_merchant_prepaid_account_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMerchantPrepaidAccountList',
  });
}

/**
 * getMerchantWarehouseList via Shopee `v2.merchant.get_merchant_warehouse_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMerchantWarehouseList(params: ShopeeGetMerchantWarehouseListRequest, config: ShopeeConfig): Promise<ShopeeGetMerchantWarehouseListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMerchantWarehouseListResponse>('/merchant/get_merchant_warehouse_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMerchantWarehouseList',
  });
}

/**
 * getMerchantWarehouseLocationList via Shopee `v2.merchant.get_merchant_warehouse_location_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMerchantWarehouseLocationList(config: ShopeeConfig): Promise<ShopeeGetMerchantWarehouseLocationListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMerchantWarehouseLocationListResponse>('/merchant/get_merchant_warehouse_location_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMerchantWarehouseLocationList',
  });
}

/**
 * getShopListByMerchant via Shopee `v2.merchant.get_shop_list_by_merchant`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopListByMerchant(params: ShopeeGetShopListByMerchantRequest, config: ShopeeConfig): Promise<ShopeeGetShopListByMerchantResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopListByMerchantResponse>('/merchant/get_shop_list_by_merchant', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopListByMerchant',
  });
}

/**
 * getWarehouseEligibleShopList via Shopee `v2.merchant.get_warehouse_eligible_shop_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getWarehouseEligibleShopList(params: ShopeeGetWarehouseEligibleShopListRequest, config: ShopeeConfig): Promise<ShopeeGetWarehouseEligibleShopListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetWarehouseEligibleShopListResponse>('/merchant/get_warehouse_eligible_shop_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getWarehouseEligibleShopList',
  });
}
