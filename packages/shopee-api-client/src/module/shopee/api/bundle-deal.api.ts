import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddBundleDealRequest,
  ShopeeAddBundleDealItemRequest,
  ShopeeDeleteBundleDealRequest,
  ShopeeDeleteBundleDealItemRequest,
  ShopeeEndBundleDealRequest,
  ShopeeGetBundleDealRequest,
  ShopeeGetBundleDealItemRequest,
  ShopeeGetBundleDealListRequest,
  ShopeeUpdateBundleDealRequest,
  ShopeeUpdateBundleDealItemRequest,
} from '../dto/request/bundle-deal.request';
import {
  ShopeeAddBundleDealResponse,
  ShopeeAddBundleDealItemResponse,
  ShopeeDeleteBundleDealResponse,
  ShopeeDeleteBundleDealItemResponse,
  ShopeeEndBundleDealResponse,
  ShopeeGetBundleDealResponse,
  ShopeeGetBundleDealItemResponse,
  ShopeeGetBundleDealListResponse,
  ShopeeUpdateBundleDealResponse,
  ShopeeUpdateBundleDealItemResponse,
} from '../dto/response/bundle-deal.response';

/**
 * addBundleDeal via Shopee `v2.bundle_deal.add_bundle_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addBundleDeal(params: ShopeeAddBundleDealRequest, config: ShopeeConfig): Promise<ShopeeAddBundleDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddBundleDealResponse>('/bundle_deal/add_bundle_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addBundleDeal',
  });
}

/**
 * addBundleDealItem via Shopee `v2.bundle_deal.add_bundle_deal_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addBundleDealItem(params: ShopeeAddBundleDealItemRequest, config: ShopeeConfig): Promise<ShopeeAddBundleDealItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddBundleDealItemResponse>('/bundle_deal/add_bundle_deal_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addBundleDealItem',
  });
}

/**
 * deleteBundleDeal via Shopee `v2.bundle_deal.delete_bundle_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteBundleDeal(params: ShopeeDeleteBundleDealRequest, config: ShopeeConfig): Promise<ShopeeDeleteBundleDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteBundleDealResponse>('/bundle_deal/delete_bundle_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteBundleDeal',
  });
}

/**
 * deleteBundleDealItem via Shopee `v2.bundle_deal.delete_bundle_deal_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteBundleDealItem(params: ShopeeDeleteBundleDealItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteBundleDealItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteBundleDealItemResponse>('/bundle_deal/delete_bundle_deal_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteBundleDealItem',
  });
}

/**
 * endBundleDeal via Shopee `v2.bundle_deal.end_bundle_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endBundleDeal(params: ShopeeEndBundleDealRequest, config: ShopeeConfig): Promise<ShopeeEndBundleDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndBundleDealResponse>('/bundle_deal/end_bundle_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endBundleDeal',
  });
}

/**
 * getBundleDeal via Shopee `v2.bundle_deal.get_bundle_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBundleDeal(params: ShopeeGetBundleDealRequest, config: ShopeeConfig): Promise<ShopeeGetBundleDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBundleDealResponse>('/bundle_deal/get_bundle_deal', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBundleDeal',
  });
}

/**
 * getBundleDealItem via Shopee `v2.bundle_deal.get_bundle_deal_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBundleDealItem(params: ShopeeGetBundleDealItemRequest, config: ShopeeConfig): Promise<ShopeeGetBundleDealItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBundleDealItemResponse>('/bundle_deal/get_bundle_deal_item', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBundleDealItem',
  });
}

/**
 * getBundleDealList via Shopee `v2.bundle_deal.get_bundle_deal_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBundleDealList(params: ShopeeGetBundleDealListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetBundleDealListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBundleDealListResponse>('/bundle_deal/get_bundle_deal_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBundleDealList',
  });
}

/**
 * updateBundleDeal via Shopee `v2.bundle_deal.update_bundle_deal`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateBundleDeal(params: ShopeeUpdateBundleDealRequest, config: ShopeeConfig): Promise<ShopeeUpdateBundleDealResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateBundleDealResponse>('/bundle_deal/update_bundle_deal', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateBundleDeal',
  });
}

/**
 * updateBundleDealItem via Shopee `v2.bundle_deal.update_bundle_deal_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateBundleDealItem(params: ShopeeUpdateBundleDealItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateBundleDealItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateBundleDealItemResponse>('/bundle_deal/update_bundle_deal_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateBundleDealItem',
  });
}
