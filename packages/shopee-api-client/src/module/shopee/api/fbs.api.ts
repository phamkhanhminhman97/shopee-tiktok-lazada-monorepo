import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeQueryBrShopBlockStatusRequest,
  ShopeeQueryBrShopEnrollmentStatusRequest,
  ShopeeQueryBrShopInvoiceErrorRequest,
  ShopeeQueryBrSkuBlockStatusRequest,
} from '../dto/request/fbs.request';
import {
  ShopeeQueryBrShopBlockStatusResponse,
  ShopeeQueryBrShopEnrollmentStatusResponse,
  ShopeeQueryBrShopInvoiceErrorResponse,
  ShopeeQueryBrSkuBlockStatusResponse,
} from '../dto/response/fbs.response';

/**
 * queryBrShopBlockStatus via Shopee `v2.fbs.query_br_shop_block_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryBrShopBlockStatus(config: ShopeeConfig): Promise<ShopeeQueryBrShopBlockStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryBrShopBlockStatusResponse>('/fbs/query_br_shop_block_status', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryBrShopBlockStatus',
  });
}

/**
 * queryBrShopEnrollmentStatus via Shopee `v2.fbs.query_br_shop_enrollment_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryBrShopEnrollmentStatus(config: ShopeeConfig): Promise<ShopeeQueryBrShopEnrollmentStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryBrShopEnrollmentStatusResponse>('/fbs/query_br_shop_enrollment_status', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryBrShopEnrollmentStatus',
  });
}

/**
 * queryBrShopInvoiceError via Shopee `v2.fbs.query_br_shop_invoice_error`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryBrShopInvoiceError(params: ShopeeQueryBrShopInvoiceErrorRequest = {}, config: ShopeeConfig): Promise<ShopeeQueryBrShopInvoiceErrorResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryBrShopInvoiceErrorResponse>('/fbs/query_br_shop_invoice_error', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryBrShopInvoiceError',
  });
}

/**
 * queryBrSkuBlockStatus via Shopee `v2.fbs.query_br_sku_block_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryBrSkuBlockStatus(params: ShopeeQueryBrSkuBlockStatusRequest, config: ShopeeConfig): Promise<ShopeeQueryBrSkuBlockStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryBrSkuBlockStatusResponse>('/fbs/query_br_sku_block_status', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryBrSkuBlockStatus',
  });
}
