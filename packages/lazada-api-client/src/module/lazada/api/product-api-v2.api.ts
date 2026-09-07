import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  ProductAdjustSellableQuantityRequest,
  ProductBatchUpdateSizeChartRequest,
  ProductCreateProductRequest,
  ProductDeactivateProductRequest,
  ProductGetBrandByPagesRequest,
  ProductGetCategoryAttributesRequest,
  ProductGetCategorySuggestionRequest,
  ProductGetCategoryTreeRequest,
  ProductGetNextCascadePropRequest,
  ProductGetPreQcRulesRequest,
  ProductGetProductContentScoreRequest,
  ProductGetProductItemRequest,
  ProductGetProductsRequest,
  ProductGetQCAlertProductsRequest,
  ProductGetResponseRequest,
  ProductGetSellerItemLimitRequest,
  ProductGetSizeChartTemplateRequest,
  ProductGetUnfilledAttributeItemRequest,
  ProductMigrateImageRequest,
  ProductMigrateImagesRequest,
  ProductProductCheckRequest,
  ProductRemoveProductRequest,
  ProductRemoveSkuRequest,
  ProductSetImagesRequest,
  ProductUpdatePriceQuantityRequest,
  ProductUpdateProductRequest,
  ProductUpdateSellableQuantityRequest,
  ProductUploadImageRequest,
} from '../dto/request/product-api-v2.request';
import {
  ProductAdjustSellableQuantityResponse,
  ProductBatchUpdateSizeChartResponse,
  ProductCreateProductResponse,
  ProductDeactivateProductResponse,
  ProductGetBrandByPagesResponse,
  ProductGetCategoryAttributesResponse,
  ProductGetCategorySuggestionResponse,
  ProductGetCategoryTreeResponse,
  ProductGetNextCascadePropResponse,
  ProductGetPreQcRulesResponse,
  ProductGetProductContentScoreResponse,
  ProductGetProductItemResponse,
  ProductGetProductsResponse,
  ProductGetQCAlertProductsResponse,
  ProductGetResponseResponse,
  ProductGetSellerItemLimitResponse,
  ProductGetSizeChartTemplateResponse,
  ProductGetUnfilledAttributeItemResponse,
  ProductMigrateImageResponse,
  ProductMigrateImagesResponse,
  ProductProductCheckResponse,
  ProductRemoveProductResponse,
  ProductRemoveSkuResponse,
  ProductSetImagesResponse,
  ProductUpdatePriceQuantityResponse,
  ProductUpdateProductResponse,
  ProductUpdateSellableQuantityResponse,
  ProductUploadImageResponse,
} from '../dto/response/product-api-v2.response';

/**
 * GetCategoryAttributes via Lazada `GET /category/attributes/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCategoryAttributes(params: ProductGetCategoryAttributesRequest, config: LazadaConfig): Promise<ProductGetCategoryAttributesResponse> {
  return LazadaHelper.callLazadaApi<ProductGetCategoryAttributesResponse>('/category/attributes/get', 'GET', params as unknown as Record<string, unknown>, config, 'getCategoryAttributes');
}

/**
 * GetBrandByPages via Lazada `GET /category/brands/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getBrandByPages(params: ProductGetBrandByPagesRequest, config: LazadaConfig): Promise<ProductGetBrandByPagesResponse> {
  return LazadaHelper.callLazadaApi<ProductGetBrandByPagesResponse>('/category/brands/query', 'GET', params as unknown as Record<string, unknown>, config, 'getBrandByPages');
}

/**
 * GetNextCascadeProp via Lazada `GET /category/cascade/getNextCascadeProp`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getNextCascadeProp(params: ProductGetNextCascadePropRequest, config: LazadaConfig): Promise<ProductGetNextCascadePropResponse> {
  return LazadaHelper.callLazadaApi<ProductGetNextCascadePropResponse>('/category/cascade/getNextCascadeProp', 'GET', params as unknown as Record<string, unknown>, config, 'getNextCascadeProp');
}

/**
 * GetCategoryTree via Lazada `GET /category/tree/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCategoryTree(params: ProductGetCategoryTreeRequest, config: LazadaConfig): Promise<ProductGetCategoryTreeResponse> {
  return LazadaHelper.callLazadaApi<ProductGetCategoryTreeResponse>('/category/tree/get', 'GET', params as unknown as Record<string, unknown>, config, 'getCategoryTree');
}

/**
 * GetResponse via Lazada `GET /image/response/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getResponse(params: ProductGetResponseRequest, config: LazadaConfig): Promise<ProductGetResponseResponse> {
  return LazadaHelper.callLazadaApi<ProductGetResponseResponse>('/image/response/get', 'GET', params as unknown as Record<string, unknown>, config, 'getResponse');
}

/**
 * GetCategorySuggestion via Lazada `GET /product/category/suggestion/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCategorySuggestion(params: ProductGetCategorySuggestionRequest, config: LazadaConfig): Promise<ProductGetCategorySuggestionResponse> {
  return LazadaHelper.callLazadaApi<ProductGetCategorySuggestionResponse>('/product/category/suggestion/get', 'GET', params as unknown as Record<string, unknown>, config, 'getCategorySuggestion');
}

/**
 * GetProductContentScore via Lazada `GET /product/content/score/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getProductContentScore(params: ProductGetProductContentScoreRequest, config: LazadaConfig): Promise<ProductGetProductContentScoreResponse> {
  return LazadaHelper.callLazadaApi<ProductGetProductContentScoreResponse>('/product/content/score/get', 'GET', params as unknown as Record<string, unknown>, config, 'getProductContentScore');
}

/**
 * GetProductItem via Lazada `GET /product/item/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getProductItem(params: ProductGetProductItemRequest, config: LazadaConfig): Promise<ProductGetProductItemResponse> {
  return LazadaHelper.callLazadaApi<ProductGetProductItemResponse>('/product/item/get', 'GET', params as unknown as Record<string, unknown>, config, 'getProductItem');
}

/**
 * GetQCAlertProducts via Lazada `GET /product/qc/alert/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getQCAlertProducts(params: ProductGetQCAlertProductsRequest, config: LazadaConfig): Promise<ProductGetQCAlertProductsResponse> {
  return LazadaHelper.callLazadaApi<ProductGetQCAlertProductsResponse>('/product/qc/alert/list', 'GET', params as unknown as Record<string, unknown>, config, 'getQCAlertProducts');
}

/**
 * GetPreQcRules via Lazada `GET /product/seller/item/getPreQcRules`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getPreQcRules(params: ProductGetPreQcRulesRequest, config: LazadaConfig): Promise<ProductGetPreQcRulesResponse> {
  return LazadaHelper.callLazadaApi<ProductGetPreQcRulesResponse>('/product/seller/item/getPreQcRules', 'GET', params as unknown as Record<string, unknown>, config, 'getPreQcRules');
}

/**
 * GetSellerItemLimit via Lazada `GET /product/seller/item/limit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSellerItemLimit(config: LazadaConfig): Promise<ProductGetSellerItemLimitResponse> {
  return LazadaHelper.callLazadaApi<ProductGetSellerItemLimitResponse>('/product/seller/item/limit', 'GET', {} as unknown as Record<string, unknown>, config, 'getSellerItemLimit');
}

/**
 * GetUnfilledAttributeItem via Lazada `GET /product/unfilled/attribute/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getUnfilledAttributeItem(params: ProductGetUnfilledAttributeItemRequest, config: LazadaConfig): Promise<ProductGetUnfilledAttributeItemResponse> {
  return LazadaHelper.callLazadaApi<ProductGetUnfilledAttributeItemResponse>('/product/unfilled/attribute/get', 'GET', params as unknown as Record<string, unknown>, config, 'getUnfilledAttributeItem');
}

/**
 * GetProducts via Lazada `GET /products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getProducts(params: ProductGetProductsRequest, config: LazadaConfig): Promise<ProductGetProductsResponse> {
  return LazadaHelper.callLazadaApi<ProductGetProductsResponse>('/products/get', 'GET', params as unknown as Record<string, unknown>, config, 'getProducts');
}

/**
 * GetSizeChartTemplate via Lazada `GET /size/chart/template/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSizeChartTemplate(params: ProductGetSizeChartTemplateRequest, config: LazadaConfig): Promise<ProductGetSizeChartTemplateResponse> {
  return LazadaHelper.callLazadaApi<ProductGetSizeChartTemplateResponse>('/size/chart/template/get', 'GET', params as unknown as Record<string, unknown>, config, 'getSizeChartTemplate');
}

/**
 * MigrateImage via Lazada `POST /image/migrate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function migrateImage(params: ProductMigrateImageRequest, config: LazadaConfig): Promise<ProductMigrateImageResponse> {
  return LazadaHelper.callLazadaApi<ProductMigrateImageResponse>('/image/migrate', 'POST', params as unknown as Record<string, unknown>, config, 'migrateImage');
}

/**
 * UploadImage via Lazada `POST /image/upload`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function uploadImage(params: ProductUploadImageRequest, config: LazadaConfig): Promise<ProductUploadImageResponse> {
  return LazadaHelper.callLazadaApi<ProductUploadImageResponse>('/image/upload', 'POST', params as unknown as Record<string, unknown>, config, 'uploadImage');
}

/**
 * MigrateImages via Lazada `POST /images/migrate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function migrateImages(params: ProductMigrateImagesRequest, config: LazadaConfig): Promise<ProductMigrateImagesResponse> {
  return LazadaHelper.callLazadaApi<ProductMigrateImagesResponse>('/images/migrate', 'POST', params as unknown as Record<string, unknown>, config, 'migrateImages');
}

/**
 * SetImages via Lazada `POST /images/set`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function setImages(params: ProductSetImagesRequest, config: LazadaConfig): Promise<ProductSetImagesResponse> {
  return LazadaHelper.callLazadaApi<ProductSetImagesResponse>('/images/set', 'POST', params as unknown as Record<string, unknown>, config, 'setImages');
}

/**
 * CreateProduct via Lazada `POST /product/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createProduct(params: ProductCreateProductRequest, config: LazadaConfig): Promise<ProductCreateProductResponse> {
  return LazadaHelper.callLazadaApi<ProductCreateProductResponse>('/product/create', 'POST', params as unknown as Record<string, unknown>, config, 'createProduct');
}

/**
 * DeactivateProduct via Lazada `POST /product/deactivate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deactivateProduct(params: ProductDeactivateProductRequest, config: LazadaConfig): Promise<ProductDeactivateProductResponse> {
  return LazadaHelper.callLazadaApi<ProductDeactivateProductResponse>('/product/deactivate', 'POST', params as unknown as Record<string, unknown>, config, 'deactivateProduct');
}

/**
 * ProductCheck via Lazada `POST /product/pre/check`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function productCheck(params: ProductProductCheckRequest, config: LazadaConfig): Promise<ProductProductCheckResponse> {
  return LazadaHelper.callLazadaApi<ProductProductCheckResponse>('/product/pre/check', 'POST', params as unknown as Record<string, unknown>, config, 'productCheck');
}

/**
 * UpdatePriceQuantity via Lazada `POST /product/price_quantity/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updatePriceQuantity(params: ProductUpdatePriceQuantityRequest, config: LazadaConfig): Promise<ProductUpdatePriceQuantityResponse> {
  return LazadaHelper.callLazadaApi<ProductUpdatePriceQuantityResponse>('/product/price_quantity/update', 'POST', params as unknown as Record<string, unknown>, config, 'updatePriceQuantity');
}

/**
 * RemoveProduct via Lazada `POST /product/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function removeProduct(params: ProductRemoveProductRequest, config: LazadaConfig): Promise<ProductRemoveProductResponse> {
  return LazadaHelper.callLazadaApi<ProductRemoveProductResponse>('/product/remove', 'POST', params as unknown as Record<string, unknown>, config, 'removeProduct');
}

/**
 * RemoveSku via Lazada `POST /product/sku/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function removeSku(params: ProductRemoveSkuRequest, config: LazadaConfig): Promise<ProductRemoveSkuResponse> {
  return LazadaHelper.callLazadaApi<ProductRemoveSkuResponse>('/product/sku/remove', 'POST', params as unknown as Record<string, unknown>, config, 'removeSku');
}

/**
 * AdjustSellableQuantity via Lazada `POST /product/stock/sellable/adjust`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function adjustSellableQuantity(params: ProductAdjustSellableQuantityRequest, config: LazadaConfig): Promise<ProductAdjustSellableQuantityResponse> {
  return LazadaHelper.callLazadaApi<ProductAdjustSellableQuantityResponse>('/product/stock/sellable/adjust', 'POST', params as unknown as Record<string, unknown>, config, 'adjustSellableQuantity');
}

/**
 * UpdateSellableQuantity via Lazada `POST /product/stock/sellable/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateSellableQuantity(params: ProductUpdateSellableQuantityRequest, config: LazadaConfig): Promise<ProductUpdateSellableQuantityResponse> {
  return LazadaHelper.callLazadaApi<ProductUpdateSellableQuantityResponse>('/product/stock/sellable/update', 'POST', params as unknown as Record<string, unknown>, config, 'updateSellableQuantity');
}

/**
 * UpdateProduct via Lazada `POST /product/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateProduct(params: ProductUpdateProductRequest, config: LazadaConfig): Promise<ProductUpdateProductResponse> {
  return LazadaHelper.callLazadaApi<ProductUpdateProductResponse>('/product/update', 'POST', params as unknown as Record<string, unknown>, config, 'updateProduct');
}

/**
 * BatchUpdateSizeChart via Lazada `POST /size/chart/batch/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function batchUpdateSizeChart(params: ProductBatchUpdateSizeChartRequest, config: LazadaConfig): Promise<ProductBatchUpdateSizeChartResponse> {
  return LazadaHelper.callLazadaApi<ProductBatchUpdateSizeChartResponse>('/size/chart/batch/update', 'POST', params as unknown as Record<string, unknown>, config, 'batchUpdateSizeChart');
}
