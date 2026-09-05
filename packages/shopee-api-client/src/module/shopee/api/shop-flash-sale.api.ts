import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddShopFlashSaleItemsRequest,
  ShopeeCreateShopFlashSaleRequest,
  ShopeeDeleteShopFlashSaleRequest,
  ShopeeDeleteShopFlashSaleItemsRequest,
  ShopeeGetItemCriteriaRequest,
  ShopeeGetShopFlashSaleRequest,
  ShopeeGetShopFlashSaleItemsRequest,
  ShopeeGetShopFlashSaleListRequest,
  ShopeeGetTimeSlotIdRequest,
  ShopeeUpdateShopFlashSaleRequest,
  ShopeeUpdateShopFlashSaleItemsRequest,
} from '../dto/request/shop-flash-sale.request';
import {
  ShopeeAddShopFlashSaleItemsResponse,
  ShopeeCreateShopFlashSaleResponse,
  ShopeeDeleteShopFlashSaleResponse,
  ShopeeDeleteShopFlashSaleItemsResponse,
  ShopeeGetItemCriteriaResponse,
  ShopeeGetShopFlashSaleResponse,
  ShopeeGetShopFlashSaleItemsResponse,
  ShopeeGetShopFlashSaleListResponse,
  ShopeeGetTimeSlotIdResponse,
  ShopeeUpdateShopFlashSaleResponse,
  ShopeeUpdateShopFlashSaleItemsResponse,
} from '../dto/response/shop-flash-sale.response';

/**
 * addShopFlashSaleItems via Shopee `v2.shop_flash_sale.add_shop_flash_sale_items`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addShopFlashSaleItems(params: ShopeeAddShopFlashSaleItemsRequest, config: ShopeeConfig): Promise<ShopeeAddShopFlashSaleItemsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddShopFlashSaleItemsResponse>('/shop_flash_sale/add_shop_flash_sale_items', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addShopFlashSaleItems',
  });
}

/**
 * createShopFlashSale via Shopee `v2.shop_flash_sale.create_shop_flash_sale`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createShopFlashSale(params: ShopeeCreateShopFlashSaleRequest, config: ShopeeConfig): Promise<ShopeeCreateShopFlashSaleResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateShopFlashSaleResponse>('/shop_flash_sale/create_shop_flash_sale', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createShopFlashSale',
  });
}

/**
 * deleteShopFlashSale via Shopee `v2.shop_flash_sale.delete_shop_flash_sale`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteShopFlashSale(params: ShopeeDeleteShopFlashSaleRequest, config: ShopeeConfig): Promise<ShopeeDeleteShopFlashSaleResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteShopFlashSaleResponse>('/shop_flash_sale/delete_shop_flash_sale', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteShopFlashSale',
  });
}

/**
 * deleteShopFlashSaleItems via Shopee `v2.shop_flash_sale.delete_shop_flash_sale_items`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteShopFlashSaleItems(params: ShopeeDeleteShopFlashSaleItemsRequest, config: ShopeeConfig): Promise<ShopeeDeleteShopFlashSaleItemsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteShopFlashSaleItemsResponse>('/shop_flash_sale/delete_shop_flash_sale_items', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteShopFlashSaleItems',
  });
}

/**
 * getItemCriteria via Shopee `v2.shop_flash_sale.get_item_criteria`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemCriteria(config: ShopeeConfig): Promise<ShopeeGetItemCriteriaResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemCriteriaResponse>('/shop_flash_sale/get_item_criteria', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemCriteria',
  });
}

/**
 * getShopFlashSale via Shopee `v2.shop_flash_sale.get_shop_flash_sale`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopFlashSale(params: ShopeeGetShopFlashSaleRequest, config: ShopeeConfig): Promise<ShopeeGetShopFlashSaleResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopFlashSaleResponse>('/shop_flash_sale/get_shop_flash_sale', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopFlashSale',
  });
}

/**
 * getShopFlashSaleItems via Shopee `v2.shop_flash_sale.get_shop_flash_sale_items`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopFlashSaleItems(params: ShopeeGetShopFlashSaleItemsRequest, config: ShopeeConfig): Promise<ShopeeGetShopFlashSaleItemsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopFlashSaleItemsResponse>('/shop_flash_sale/get_shop_flash_sale_items', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopFlashSaleItems',
  });
}

/**
 * getShopFlashSaleList via Shopee `v2.shop_flash_sale.get_shop_flash_sale_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopFlashSaleList(params: ShopeeGetShopFlashSaleListRequest, config: ShopeeConfig): Promise<ShopeeGetShopFlashSaleListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopFlashSaleListResponse>('/shop_flash_sale/get_shop_flash_sale_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopFlashSaleList',
  });
}

/**
 * getTimeSlotId via Shopee `v2.shop_flash_sale.get_time_slot_id`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTimeSlotId(params: ShopeeGetTimeSlotIdRequest, config: ShopeeConfig): Promise<ShopeeGetTimeSlotIdResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTimeSlotIdResponse>('/shop_flash_sale/get_time_slot_id', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTimeSlotId',
  });
}

/**
 * updateShopFlashSale via Shopee `v2.shop_flash_sale.update_shop_flash_sale`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateShopFlashSale(params: ShopeeUpdateShopFlashSaleRequest, config: ShopeeConfig): Promise<ShopeeUpdateShopFlashSaleResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateShopFlashSaleResponse>('/shop_flash_sale/update_shop_flash_sale', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateShopFlashSale',
  });
}

/**
 * updateShopFlashSaleItems via Shopee `v2.shop_flash_sale.update_shop_flash_sale_items`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateShopFlashSaleItems(params: ShopeeUpdateShopFlashSaleItemsRequest, config: ShopeeConfig): Promise<ShopeeUpdateShopFlashSaleItemsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateShopFlashSaleItemsResponse>('/shop_flash_sale/update_shop_flash_sale_items', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateShopFlashSaleItems',
  });
}
