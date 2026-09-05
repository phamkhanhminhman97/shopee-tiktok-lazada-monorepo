import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeGetBoundWhsInfoRequest,
  ShopeeGetCurrentInventoryRequest,
  ShopeeGetExpiryReportRequest,
  ShopeeGetFulfillmentMappingInventoryListRequest,
  ShopeeGetStockAgingRequest,
  ShopeeGetStockMovementRequest,
} from '../dto/request/sbs.request';
import {
  ShopeeGetBoundWhsInfoResponse,
  ShopeeGetCurrentInventoryResponse,
  ShopeeGetExpiryReportResponse,
  ShopeeGetFulfillmentMappingInventoryListResponse,
  ShopeeGetStockAgingResponse,
  ShopeeGetStockMovementResponse,
} from '../dto/response/sbs.response';

/**
 * getBoundWhsInfo via Shopee `v2.sbs.get_bound_whs_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBoundWhsInfo(config: ShopeeConfig): Promise<ShopeeGetBoundWhsInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBoundWhsInfoResponse>('/sbs/get_bound_whs_info', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBoundWhsInfo',
  });
}

/**
 * getCurrentInventory via Shopee `v2.sbs.get_current_inventory`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCurrentInventory(params: ShopeeGetCurrentInventoryRequest, config: ShopeeConfig): Promise<ShopeeGetCurrentInventoryResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCurrentInventoryResponse>('/sbs/get_current_inventory', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCurrentInventory',
  });
}

/**
 * getExpiryReport via Shopee `v2.sbs.get_expiry_report`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getExpiryReport(params: ShopeeGetExpiryReportRequest, config: ShopeeConfig): Promise<ShopeeGetExpiryReportResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetExpiryReportResponse>('/sbs/get_expiry_report', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getExpiryReport',
  });
}

/**
 * getFulfillmentMappingInventoryList via Shopee `v2.sbs.get_fulfillment_mapping_inventory_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getFulfillmentMappingInventoryList(params: ShopeeGetFulfillmentMappingInventoryListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetFulfillmentMappingInventoryListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetFulfillmentMappingInventoryListResponse>('/sbs/get_fulfillment_mapping_inventory_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getFulfillmentMappingInventoryList',
  });
}

/**
 * getStockAging via Shopee `v2.sbs.get_stock_aging`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getStockAging(params: ShopeeGetStockAgingRequest, config: ShopeeConfig): Promise<ShopeeGetStockAgingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetStockAgingResponse>('/sbs/get_stock_aging', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getStockAging',
  });
}

/**
 * getStockMovement via Shopee `v2.sbs.get_stock_movement`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getStockMovement(params: ShopeeGetStockMovementRequest, config: ShopeeConfig): Promise<ShopeeGetStockMovementResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetStockMovementResponse>('/sbs/get_stock_movement', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getStockMovement',
  });
}
