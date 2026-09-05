import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddVoucherRequest,
  ShopeeDeleteVoucherRequest,
  ShopeeEndVoucherRequest,
  ShopeeGetVoucherRequest,
  ShopeeGetVoucherListRequest,
  ShopeeUpdateVoucherRequest,
} from '../dto/request/voucher.request';
import {
  ShopeeAddVoucherResponse,
  ShopeeDeleteVoucherResponse,
  ShopeeEndVoucherResponse,
  ShopeeGetVoucherResponse,
  ShopeeGetVoucherListResponse,
  ShopeeUpdateVoucherResponse,
} from '../dto/response/voucher.response';

/**
 * addVoucher via Shopee `v2.voucher.add_voucher`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addVoucher(params: ShopeeAddVoucherRequest, config: ShopeeConfig): Promise<ShopeeAddVoucherResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddVoucherResponse>('/voucher/add_voucher', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addVoucher',
  });
}

/**
 * deleteVoucher via Shopee `v2.voucher.delete_voucher`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteVoucher(params: ShopeeDeleteVoucherRequest, config: ShopeeConfig): Promise<ShopeeDeleteVoucherResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteVoucherResponse>('/voucher/delete_voucher', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteVoucher',
  });
}

/**
 * endVoucher via Shopee `v2.voucher.end_voucher`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endVoucher(params: ShopeeEndVoucherRequest, config: ShopeeConfig): Promise<ShopeeEndVoucherResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndVoucherResponse>('/voucher/end_voucher', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endVoucher',
  });
}

/**
 * getVoucher via Shopee `v2.voucher.get_voucher`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVoucher(params: ShopeeGetVoucherRequest, config: ShopeeConfig): Promise<ShopeeGetVoucherResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVoucherResponse>('/voucher/get_voucher', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVoucher',
  });
}

/**
 * getVoucherList via Shopee `v2.voucher.get_voucher_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVoucherList(params: ShopeeGetVoucherListRequest, config: ShopeeConfig): Promise<ShopeeGetVoucherListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVoucherListResponse>('/voucher/get_voucher_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVoucherList',
  });
}

/**
 * updateVoucher via Shopee `v2.voucher.update_voucher`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateVoucher(params: ShopeeUpdateVoucherRequest, config: ShopeeConfig): Promise<ShopeeUpdateVoucherResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateVoucherResponse>('/voucher/update_voucher', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateVoucher',
  });
}
