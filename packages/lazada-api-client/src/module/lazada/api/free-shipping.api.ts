import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  FreeShippingFreeShippingActivateRequest,
  FreeShippingFreeShippingAddSelectedProductSKURequest,
  FreeShippingFreeShippingCreateRequest,
  FreeShippingFreeShippingDeactivateRequest,
  FreeShippingFreeShippingDeleteSelectedProductSKURequest,
  FreeShippingFreeShippingDeliveryOptionsQueryRequest,
  FreeShippingFreeShippingGetRequest,
  FreeShippingFreeShippingListRequest,
  FreeShippingFreeShippingRegionsQueryRequest,
  FreeShippingFreeShippingSelectedProductListRequest,
  FreeShippingFreeShippingUpdateRequest,
} from '../dto/request/free-shipping.request';
import {
  FreeShippingFreeShippingActivateResponse,
  FreeShippingFreeShippingAddSelectedProductSKUResponse,
  FreeShippingFreeShippingCreateResponse,
  FreeShippingFreeShippingDeactivateResponse,
  FreeShippingFreeShippingDeleteSelectedProductSKUResponse,
  FreeShippingFreeShippingDeliveryOptionsQueryResponse,
  FreeShippingFreeShippingGetResponse,
  FreeShippingFreeShippingListResponse,
  FreeShippingFreeShippingRegionsQueryResponse,
  FreeShippingFreeShippingSelectedProductListResponse,
  FreeShippingFreeShippingUpdateResponse,
} from '../dto/response/free-shipping.response';

/**
 * FreeShippingDeliveryOptionsQuery via Lazada `GET /promotion/freeshipping/deliveryoptions/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingDeliveryOptionsQuery(config: LazadaConfig): Promise<FreeShippingFreeShippingDeliveryOptionsQueryResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingDeliveryOptionsQueryResponse>('/promotion/freeshipping/deliveryoptions/get', 'GET', {} as unknown as Record<string, unknown>, config, 'freeShippingDeliveryOptionsQuery');
}

/**
 * FreeShippingGet via Lazada `GET /promotion/freeshipping/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingGet(params: FreeShippingFreeShippingGetRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingGetResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingGetResponse>('/promotion/freeshipping/get', 'GET', params as unknown as Record<string, unknown>, config, 'freeShippingGet');
}

/**
 * FreeShippingSelectedProductList via Lazada `GET /promotion/freeshipping/products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingSelectedProductList(params: FreeShippingFreeShippingSelectedProductListRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingSelectedProductListResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingSelectedProductListResponse>('/promotion/freeshipping/products/get', 'GET', params as unknown as Record<string, unknown>, config, 'freeShippingSelectedProductList');
}

/**
 * FreeShippingRegionsQuery via Lazada `GET /promotion/freeshipping/regions/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingRegionsQuery(config: LazadaConfig): Promise<FreeShippingFreeShippingRegionsQueryResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingRegionsQueryResponse>('/promotion/freeshipping/regions/get', 'GET', {} as unknown as Record<string, unknown>, config, 'freeShippingRegionsQuery');
}

/**
 * FreeShippingList via Lazada `GET /promotion/freeshippings/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingList(params: FreeShippingFreeShippingListRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingListResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingListResponse>('/promotion/freeshippings/get', 'GET', params as unknown as Record<string, unknown>, config, 'freeShippingList');
}

/**
 * FreeShippingActivate via Lazada `POST /promotion/freeshipping/activate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingActivate(params: FreeShippingFreeShippingActivateRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingActivateResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingActivateResponse>('/promotion/freeshipping/activate', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingActivate');
}

/**
 * FreeShippingCreate via Lazada `POST /promotion/freeshipping/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingCreate(params: FreeShippingFreeShippingCreateRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingCreateResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingCreateResponse>('/promotion/freeshipping/create', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingCreate');
}

/**
 * FreeShippingDeactivate via Lazada `POST /promotion/freeshipping/deactivate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingDeactivate(params: FreeShippingFreeShippingDeactivateRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingDeactivateResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingDeactivateResponse>('/promotion/freeshipping/deactivate', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingDeactivate');
}

/**
 * FreeShippingAddSelectedProductSKU via Lazada `POST /promotion/freeshipping/product/sku/add`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingAddSelectedProductSKU(params: FreeShippingFreeShippingAddSelectedProductSKURequest, config: LazadaConfig): Promise<FreeShippingFreeShippingAddSelectedProductSKUResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingAddSelectedProductSKUResponse>('/promotion/freeshipping/product/sku/add', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingAddSelectedProductSKU');
}

/**
 * FreeShippingDeleteSelectedProductSKU via Lazada `POST /promotion/freeshipping/product/sku/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingDeleteSelectedProductSKU(params: FreeShippingFreeShippingDeleteSelectedProductSKURequest, config: LazadaConfig): Promise<FreeShippingFreeShippingDeleteSelectedProductSKUResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingDeleteSelectedProductSKUResponse>('/promotion/freeshipping/product/sku/remove', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingDeleteSelectedProductSKU');
}

/**
 * FreeShippingUpdate via Lazada `POST /promotion/freeshipping/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function freeShippingUpdate(params: FreeShippingFreeShippingUpdateRequest, config: LazadaConfig): Promise<FreeShippingFreeShippingUpdateResponse> {
  return LazadaHelper.callLazadaApi<FreeShippingFreeShippingUpdateResponse>('/promotion/freeshipping/update', 'POST', params as unknown as Record<string, unknown>, config, 'freeShippingUpdate');
}
