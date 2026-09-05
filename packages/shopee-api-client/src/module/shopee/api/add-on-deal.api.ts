import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddAddOnDealRequest,
  ShopeeAddAddOnDealMainItemRequest,
  ShopeeAddAddOnDealSubItemRequest,
  ShopeeDeleteAddOnDealRequest,
  ShopeeDeleteAddOnDealMainItemRequest,
  ShopeeDeleteAddOnDealSubItemRequest,
  ShopeeEndAddOnDealRequest,
  ShopeeGetAddOnDealRequest,
  ShopeeGetAddOnDealListRequest,
  ShopeeGetAddOnDealMainItemRequest,
  ShopeeGetAddOnDealSubItemRequest,
  ShopeeUpdateAddOnDealRequest,
  ShopeeUpdateAddOnDealMainItemRequest,
  ShopeeUpdateAddOnDealSubItemRequest,
} from '../dto/request/add-on-deal.request';
import {
  ShopeeAddAddOnDealResponse,
  ShopeeAddAddOnDealMainItemResponse,
  ShopeeAddAddOnDealSubItemResponse,
  ShopeeDeleteAddOnDealResponse,
  ShopeeDeleteAddOnDealMainItemResponse,
  ShopeeDeleteAddOnDealSubItemResponse,
  ShopeeEndAddOnDealResponse,
  ShopeeGetAddOnDealResponse,
  ShopeeGetAddOnDealListResponse,
  ShopeeGetAddOnDealMainItemResponse,
  ShopeeGetAddOnDealSubItemResponse,
  ShopeeUpdateAddOnDealResponse,
  ShopeeUpdateAddOnDealMainItemResponse,
  ShopeeUpdateAddOnDealSubItemResponse,
} from '../dto/response/add-on-deal.response';

/**
 * addAddOnDeal via Shopee `v2.add_on_deal.add_add_on_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addAddOnDeal(params: ShopeeAddAddOnDealRequest, config: ShopeeConfig): Promise<ShopeeAddAddOnDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddAddOnDealResponse>('/add_on_deal/add_add_on_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addAddOnDeal',
  });
}

/**
 * addAddOnDealMainItem via Shopee `v2.add_on_deal.add_add_on_deal_main_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addAddOnDealMainItem(params: ShopeeAddAddOnDealMainItemRequest, config: ShopeeConfig): Promise<ShopeeAddAddOnDealMainItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddAddOnDealMainItemResponse>('/add_on_deal/add_add_on_deal_main_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addAddOnDealMainItem',
  });
}

/**
 * addAddOnDealSubItem via Shopee `v2.add_on_deal.add_add_on_deal_sub_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addAddOnDealSubItem(params: ShopeeAddAddOnDealSubItemRequest, config: ShopeeConfig): Promise<ShopeeAddAddOnDealSubItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddAddOnDealSubItemResponse>('/add_on_deal/add_add_on_deal_sub_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addAddOnDealSubItem',
  });
}

/**
 * deleteAddOnDeal via Shopee `v2.add_on_deal.delete_add_on_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteAddOnDeal(params: ShopeeDeleteAddOnDealRequest, config: ShopeeConfig): Promise<ShopeeDeleteAddOnDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteAddOnDealResponse>('/add_on_deal/delete_add_on_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteAddOnDeal',
  });
}

/**
 * deleteAddOnDealMainItem via Shopee `v2.add_on_deal.delete_add_on_deal_main_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteAddOnDealMainItem(params: ShopeeDeleteAddOnDealMainItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteAddOnDealMainItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteAddOnDealMainItemResponse>('/add_on_deal/delete_add_on_deal_main_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteAddOnDealMainItem',
  });
}

/**
 * deleteAddOnDealSubItem via Shopee `v2.add_on_deal.delete_add_on_deal_sub_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteAddOnDealSubItem(params: ShopeeDeleteAddOnDealSubItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteAddOnDealSubItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteAddOnDealSubItemResponse>('/add_on_deal/delete_add_on_deal_sub_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteAddOnDealSubItem',
  });
}

/**
 * endAddOnDeal via Shopee `v2.add_on_deal.end_add_on_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endAddOnDeal(params: ShopeeEndAddOnDealRequest, config: ShopeeConfig): Promise<ShopeeEndAddOnDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndAddOnDealResponse>('/add_on_deal/end_add_on_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endAddOnDeal',
  });
}

/**
 * getAddOnDeal via Shopee `v2.add_on_deal.get_add_on_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAddOnDeal(params: ShopeeGetAddOnDealRequest, config: ShopeeConfig): Promise<ShopeeGetAddOnDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAddOnDealResponse>('/add_on_deal/get_add_on_deal', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAddOnDeal',
  });
}

/**
 * getAddOnDealList via Shopee `v2.add_on_deal.get_add_on_deal_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAddOnDealList(params: ShopeeGetAddOnDealListRequest, config: ShopeeConfig): Promise<ShopeeGetAddOnDealListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAddOnDealListResponse>('/add_on_deal/get_add_on_deal_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAddOnDealList',
  });
}

/**
 * getAddOnDealMainItem via Shopee `v2.add_on_deal.get_add_on_deal_main_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAddOnDealMainItem(params: ShopeeGetAddOnDealMainItemRequest, config: ShopeeConfig): Promise<ShopeeGetAddOnDealMainItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAddOnDealMainItemResponse>('/add_on_deal/get_add_on_deal_main_item', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAddOnDealMainItem',
  });
}

/**
 * getAddOnDealSubItem via Shopee `v2.add_on_deal.get_add_on_deal_sub_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAddOnDealSubItem(params: ShopeeGetAddOnDealSubItemRequest, config: ShopeeConfig): Promise<ShopeeGetAddOnDealSubItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAddOnDealSubItemResponse>('/add_on_deal/get_add_on_deal_sub_item', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAddOnDealSubItem',
  });
}

/**
 * updateAddOnDeal via Shopee `v2.add_on_deal.update_add_on_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateAddOnDeal(params: ShopeeUpdateAddOnDealRequest, config: ShopeeConfig): Promise<ShopeeUpdateAddOnDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateAddOnDealResponse>('/add_on_deal/update_add_on_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateAddOnDeal',
  });
}

/**
 * updateAddOnDealMainItem via Shopee `v2.add_on_deal.update_add_on_deal_main_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateAddOnDealMainItem(params: ShopeeUpdateAddOnDealMainItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateAddOnDealMainItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateAddOnDealMainItemResponse>('/add_on_deal/update_add_on_deal_main_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateAddOnDealMainItem',
  });
}

/**
 * updateAddOnDealSubItem via Shopee `v2.add_on_deal.update_add_on_deal_sub_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateAddOnDealSubItem(params: ShopeeUpdateAddOnDealSubItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateAddOnDealSubItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateAddOnDealSubItemResponse>('/add_on_deal/update_add_on_deal_sub_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateAddOnDealSubItem',
  });
}
