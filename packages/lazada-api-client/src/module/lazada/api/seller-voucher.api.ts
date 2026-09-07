import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  SellerVoucherSellerVoucheDeleteSelectedProductSKURequest,
  SellerVoucherSellerVoucherActivateRequest,
  SellerVoucherSellerVoucherAddSelectedProductSKURequest,
  SellerVoucherSellerVoucherCreateRequest,
  SellerVoucherSellerVoucherDeactivateRequest,
  SellerVoucherSellerVoucherDetailQueryRequest,
  SellerVoucherSellerVoucherListRequest,
  SellerVoucherSellerVoucherSelectedProductListRequest,
  SellerVoucherSellerVoucherUpdateRequest,
} from '../dto/request/seller-voucher.request';
import {
  SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse,
  SellerVoucherSellerVoucherActivateResponse,
  SellerVoucherSellerVoucherAddSelectedProductSKUResponse,
  SellerVoucherSellerVoucherCreateResponse,
  SellerVoucherSellerVoucherDeactivateResponse,
  SellerVoucherSellerVoucherDetailQueryResponse,
  SellerVoucherSellerVoucherListResponse,
  SellerVoucherSellerVoucherSelectedProductListResponse,
  SellerVoucherSellerVoucherUpdateResponse,
} from '../dto/response/seller-voucher.response';

/**
 * SellerVoucherDetailQuery via Lazada `GET /promotion/voucher/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherDetailQuery(params: SellerVoucherSellerVoucherDetailQueryRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherDetailQueryResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherDetailQueryResponse>('/promotion/voucher/get', 'GET', params as unknown as Record<string, unknown>, config, 'sellerVoucherDetailQuery');
}

/**
 * SellerVoucherSelectedProductList via Lazada `GET /promotion/voucher/products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherSelectedProductList(params: SellerVoucherSellerVoucherSelectedProductListRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherSelectedProductListResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherSelectedProductListResponse>('/promotion/voucher/products/get', 'GET', params as unknown as Record<string, unknown>, config, 'sellerVoucherSelectedProductList');
}

/**
 * SellerVoucherList via Lazada `GET /promotion/vouchers/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherList(params: SellerVoucherSellerVoucherListRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherListResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherListResponse>('/promotion/vouchers/get', 'GET', params as unknown as Record<string, unknown>, config, 'sellerVoucherList');
}

/**
 * SellerVoucherActivate via Lazada `POST /promotion/voucher/activate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherActivate(params: SellerVoucherSellerVoucherActivateRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherActivateResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherActivateResponse>('/promotion/voucher/activate', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucherActivate');
}

/**
 * SellerVoucherCreate via Lazada `POST /promotion/voucher/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherCreate(params: SellerVoucherSellerVoucherCreateRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherCreateResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherCreateResponse>('/promotion/voucher/create', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucherCreate');
}

/**
 * SellerVoucherDeactivate via Lazada `POST /promotion/voucher/deactivate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherDeactivate(params: SellerVoucherSellerVoucherDeactivateRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherDeactivateResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherDeactivateResponse>('/promotion/voucher/deactivate', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucherDeactivate');
}

/**
 * SellerVoucherAddSelectedProductSKU via Lazada `POST /promotion/voucher/product/sku/add`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherAddSelectedProductSKU(params: SellerVoucherSellerVoucherAddSelectedProductSKURequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherAddSelectedProductSKUResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherAddSelectedProductSKUResponse>('/promotion/voucher/product/sku/add', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucherAddSelectedProductSKU');
}

/**
 * SellerVoucheDeleteSelectedProductSKU via Lazada `POST /promotion/voucher/product/sku/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucheDeleteSelectedProductSKU(params: SellerVoucherSellerVoucheDeleteSelectedProductSKURequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse>('/promotion/voucher/product/sku/remove', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucheDeleteSelectedProductSKU');
}

/**
 * SellerVoucherUpdate via Lazada `POST /promotion/voucher/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerVoucherUpdate(params: SellerVoucherSellerVoucherUpdateRequest, config: LazadaConfig): Promise<SellerVoucherSellerVoucherUpdateResponse> {
  return LazadaHelper.callLazadaApi<SellerVoucherSellerVoucherUpdateResponse>('/promotion/voucher/update', 'POST', params as unknown as Record<string, unknown>, config, 'sellerVoucherUpdate');
}
