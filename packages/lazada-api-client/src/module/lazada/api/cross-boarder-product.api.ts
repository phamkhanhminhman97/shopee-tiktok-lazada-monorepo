import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  CrossBoarderProductCreateGlobalProductRequest,
  CrossBoarderProductDeleteMerchantProductRequest,
  CrossBoarderProductGetGlobalProductExtensionRequest,
  CrossBoarderProductGetGlobalProductStatusRequest,
  CrossBoarderProductGetRecommendPriceRequest,
  CrossBoarderProductGetUnfilledAttributeRequest,
  CrossBoarderProductGetUpgradableGlobalPlusProductListRequest,
  CrossBoarderProductSemiProductUpdateRequest,
  CrossBoarderProductSemiProductUpgradeRequest,
  CrossBoarderProductUpdateGlobalProductAttributeRequest,
  CrossBoarderProductUpdateProductStatusRequest,
} from '../dto/request/cross-boarder-product.request';
import {
  CrossBoarderProductCreateGlobalProductResponse,
  CrossBoarderProductDeleteMerchantProductResponse,
  CrossBoarderProductGetGlobalProductExtensionResponse,
  CrossBoarderProductGetGlobalProductStatusResponse,
  CrossBoarderProductGetRecommendPriceResponse,
  CrossBoarderProductGetUnfilledAttributeResponse,
  CrossBoarderProductGetUpgradableGlobalPlusProductListResponse,
  CrossBoarderProductSemiProductUpdateResponse,
  CrossBoarderProductSemiProductUpgradeResponse,
  CrossBoarderProductUpdateGlobalProductAttributeResponse,
  CrossBoarderProductUpdateProductStatusResponse,
} from '../dto/response/cross-boarder-product.response';

/**
 * GetGlobalProductExtension via Lazada `GET /product/global/extension`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getGlobalProductExtension(params: CrossBoarderProductGetGlobalProductExtensionRequest, config: LazadaConfig): Promise<CrossBoarderProductGetGlobalProductExtensionResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductGetGlobalProductExtensionResponse>('/product/global/extension', 'GET', params as unknown as Record<string, unknown>, config, 'getGlobalProductExtension');
}

/**
 * GetUpgradableGlobalPlusProductList via Lazada `GET /product/global/semi/avaible/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getUpgradableGlobalPlusProductList(params: CrossBoarderProductGetUpgradableGlobalPlusProductListRequest, config: LazadaConfig): Promise<CrossBoarderProductGetUpgradableGlobalPlusProductListResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductGetUpgradableGlobalPlusProductListResponse>('/product/global/semi/avaible/get', 'GET', params as unknown as Record<string, unknown>, config, 'getUpgradableGlobalPlusProductList');
}

/**
 * GetRecommendPrice via Lazada `GET /product/global/semi/recommend/price/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getRecommendPrice(params: CrossBoarderProductGetRecommendPriceRequest, config: LazadaConfig): Promise<CrossBoarderProductGetRecommendPriceResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductGetRecommendPriceResponse>('/product/global/semi/recommend/price/get', 'GET', params as unknown as Record<string, unknown>, config, 'getRecommendPrice');
}

/**
 * GetGlobalProductStatus via Lazada `GET /product/global/status/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getGlobalProductStatus(params: CrossBoarderProductGetGlobalProductStatusRequest, config: LazadaConfig): Promise<CrossBoarderProductGetGlobalProductStatusResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductGetGlobalProductStatusResponse>('/product/global/status/get', 'GET', params as unknown as Record<string, unknown>, config, 'getGlobalProductStatus');
}

/**
 * GetUnfilledAttribute via Lazada `GET /product/global/unfilled/attribute/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getUnfilledAttribute(params: CrossBoarderProductGetUnfilledAttributeRequest, config: LazadaConfig): Promise<CrossBoarderProductGetUnfilledAttributeResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductGetUnfilledAttributeResponse>('/product/global/unfilled/attribute/get', 'GET', params as unknown as Record<string, unknown>, config, 'getUnfilledAttribute');
}

/**
 * UpdateGlobalProductAttribute via Lazada `POST /product/global/attribute/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateGlobalProductAttribute(params: CrossBoarderProductUpdateGlobalProductAttributeRequest, config: LazadaConfig): Promise<CrossBoarderProductUpdateGlobalProductAttributeResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductUpdateGlobalProductAttributeResponse>('/product/global/attribute/update', 'POST', params as unknown as Record<string, unknown>, config, 'updateGlobalProductAttribute');
}

/**
 * CreateGlobalProduct via Lazada `POST /product/global/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createGlobalProduct(params: CrossBoarderProductCreateGlobalProductRequest, config: LazadaConfig): Promise<CrossBoarderProductCreateGlobalProductResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductCreateGlobalProductResponse>('/product/global/create', 'POST', params as unknown as Record<string, unknown>, config, 'createGlobalProduct');
}

/**
 * deleteMerchantProduct via Lazada `POST /product/global/delete`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deleteMerchantProduct(params: CrossBoarderProductDeleteMerchantProductRequest, config: LazadaConfig): Promise<CrossBoarderProductDeleteMerchantProductResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductDeleteMerchantProductResponse>('/product/global/delete', 'POST', params as unknown as Record<string, unknown>, config, 'deleteMerchantProduct');
}

/**
 * SemiProductUpdate via Lazada `POST /product/global/semi/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function semiProductUpdate(params: CrossBoarderProductSemiProductUpdateRequest, config: LazadaConfig): Promise<CrossBoarderProductSemiProductUpdateResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductSemiProductUpdateResponse>('/product/global/semi/update', 'POST', params as unknown as Record<string, unknown>, config, 'semiProductUpdate');
}

/**
 * SemiProductUpgrade via Lazada `POST /product/global/semi/upgrade`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function semiProductUpgrade(params: CrossBoarderProductSemiProductUpgradeRequest, config: LazadaConfig): Promise<CrossBoarderProductSemiProductUpgradeResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductSemiProductUpgradeResponse>('/product/global/semi/upgrade', 'POST', params as unknown as Record<string, unknown>, config, 'semiProductUpgrade');
}

/**
 * updateProductStatus via Lazada `POST /product/global/update/status`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateProductStatus(params: CrossBoarderProductUpdateProductStatusRequest, config: LazadaConfig): Promise<CrossBoarderProductUpdateProductStatusResponse> {
  return LazadaHelper.callLazadaApi<CrossBoarderProductUpdateProductStatusResponse>('/product/global/update/status', 'POST', params as unknown as Record<string, unknown>, config, 'updateProductStatus');
}
