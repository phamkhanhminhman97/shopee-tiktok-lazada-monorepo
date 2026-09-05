import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddDiscountRequest,
  ShopeeAddDiscountItemRequest,
  ShopeeDeleteDiscountRequest,
  ShopeeDeleteDiscountItemRequest,
  ShopeeDeleteSipDiscountRequest,
  ShopeeEndDiscountRequest,
  ShopeeGetDiscountRequest,
  ShopeeGetDiscountListRequest,
  ShopeeGetSipDiscountsRequest,
  ShopeeSetSipDiscountRequest,
  ShopeeUpdateDiscountRequest,
  ShopeeUpdateDiscountItemRequest,
} from '../dto/request/discount.request';
import {
  ShopeeAddDiscountResponse,
  ShopeeAddDiscountItemResponse,
  ShopeeDeleteDiscountResponse,
  ShopeeDeleteDiscountItemResponse,
  ShopeeDeleteSipDiscountResponse,
  ShopeeEndDiscountResponse,
  ShopeeGetDiscountResponse,
  ShopeeGetDiscountListResponse,
  ShopeeGetSipDiscountsResponse,
  ShopeeSetSipDiscountResponse,
  ShopeeUpdateDiscountResponse,
  ShopeeUpdateDiscountItemResponse,
} from '../dto/response/discount.response';

/**
 * addDiscount via Shopee `v2.discount.add_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addDiscount(params: ShopeeAddDiscountRequest, config: ShopeeConfig): Promise<ShopeeAddDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddDiscountResponse>('/discount/add_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addDiscount',
  });
}

/**
 * addDiscountItem via Shopee `v2.discount.add_discount_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addDiscountItem(params: ShopeeAddDiscountItemRequest, config: ShopeeConfig): Promise<ShopeeAddDiscountItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddDiscountItemResponse>('/discount/add_discount_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addDiscountItem',
  });
}

/**
 * deleteDiscount via Shopee `v2.discount.delete_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteDiscount(params: ShopeeDeleteDiscountRequest, config: ShopeeConfig): Promise<ShopeeDeleteDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteDiscountResponse>('/discount/delete_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteDiscount',
  });
}

/**
 * deleteDiscountItem via Shopee `v2.discount.delete_discount_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteDiscountItem(params: ShopeeDeleteDiscountItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteDiscountItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteDiscountItemResponse>('/discount/delete_discount_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteDiscountItem',
  });
}

/**
 * deleteSipDiscount via Shopee `v2.discount.delete_sip_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteSipDiscount(params: ShopeeDeleteSipDiscountRequest, config: ShopeeConfig): Promise<ShopeeDeleteSipDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteSipDiscountResponse>('/discount/delete_sip_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteSipDiscount',
  });
}

/**
 * endDiscount via Shopee `v2.discount.end_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endDiscount(params: ShopeeEndDiscountRequest, config: ShopeeConfig): Promise<ShopeeEndDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndDiscountResponse>('/discount/end_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endDiscount',
  });
}

/**
 * getDiscount via Shopee `v2.discount.get_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getDiscount(params: ShopeeGetDiscountRequest, config: ShopeeConfig): Promise<ShopeeGetDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetDiscountResponse>('/discount/get_discount', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getDiscount',
  });
}

/**
 * getDiscountList via Shopee `v2.discount.get_discount_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getDiscountList(params: ShopeeGetDiscountListRequest, config: ShopeeConfig): Promise<ShopeeGetDiscountListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetDiscountListResponse>('/discount/get_discount_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getDiscountList',
  });
}

/**
 * getSipDiscounts via Shopee `v2.discount.get_sip_discounts`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSipDiscounts(params: ShopeeGetSipDiscountsRequest = {}, config: ShopeeConfig): Promise<ShopeeGetSipDiscountsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSipDiscountsResponse>('/discount/get_sip_discounts', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSipDiscounts',
  });
}

/**
 * setSipDiscount via Shopee `v2.discount.set_sip_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setSipDiscount(params: ShopeeSetSipDiscountRequest, config: ShopeeConfig): Promise<ShopeeSetSipDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetSipDiscountResponse>('/discount/set_sip_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setSipDiscount',
  });
}

/**
 * updateDiscount via Shopee `v2.discount.update_discount`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateDiscount(params: ShopeeUpdateDiscountRequest, config: ShopeeConfig): Promise<ShopeeUpdateDiscountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateDiscountResponse>('/discount/update_discount', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateDiscount',
  });
}

/**
 * updateDiscountItem via Shopee `v2.discount.update_discount_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateDiscountItem(params: ShopeeUpdateDiscountItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateDiscountItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateDiscountItemResponse>('/discount/update_discount_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateDiscountItem',
  });
}
