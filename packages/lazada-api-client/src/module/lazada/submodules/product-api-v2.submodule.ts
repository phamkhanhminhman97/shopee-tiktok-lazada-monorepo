import { LazadaConfig } from '../dto/request/config.request';
import {
  adjustSellableQuantity,
  batchUpdateSizeChart,
  createProduct,
  deactivateProduct,
  getBrandByPages,
  getCategoryAttributes,
  getCategorySuggestion,
  getCategoryTree,
  getNextCascadeProp,
  getPreQcRules,
  getProductContentScore,
  getProductItem,
  getProducts,
  getQCAlertProducts,
  getResponse,
  getSellerItemLimit,
  getSizeChartTemplate,
  getUnfilledAttributeItem,
  migrateImage,
  migrateImages,
  productCheck,
  removeProduct,
  removeSku,
  setImages,
  updatePriceQuantity,
  updateProduct,
  updateSellableQuantity,
  uploadImage,
} from '../api/product-api-v2.api';
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
 * Lazada `product-api` API namespace.
 *
 * Access via `lazada.product.<method>()` on a `LazadaModule` instance.
 */
export class LazadaProduct {
  constructor(private config: LazadaConfig) {}

  async getCategoryAttributes(params: ProductGetCategoryAttributesRequest): Promise<ProductGetCategoryAttributesResponse> {
    return await getCategoryAttributes(params, this.config);
  }

  async getBrandByPages(params: ProductGetBrandByPagesRequest): Promise<ProductGetBrandByPagesResponse> {
    return await getBrandByPages(params, this.config);
  }

  async getNextCascadeProp(params: ProductGetNextCascadePropRequest): Promise<ProductGetNextCascadePropResponse> {
    return await getNextCascadeProp(params, this.config);
  }

  async getCategoryTree(params: ProductGetCategoryTreeRequest): Promise<ProductGetCategoryTreeResponse> {
    return await getCategoryTree(params, this.config);
  }

  async getResponse(params: ProductGetResponseRequest): Promise<ProductGetResponseResponse> {
    return await getResponse(params, this.config);
  }

  async getCategorySuggestion(params: ProductGetCategorySuggestionRequest): Promise<ProductGetCategorySuggestionResponse> {
    return await getCategorySuggestion(params, this.config);
  }

  async getProductContentScore(params: ProductGetProductContentScoreRequest): Promise<ProductGetProductContentScoreResponse> {
    return await getProductContentScore(params, this.config);
  }

  async getProductItem(params: ProductGetProductItemRequest): Promise<ProductGetProductItemResponse> {
    return await getProductItem(params, this.config);
  }

  async getQCAlertProducts(params: ProductGetQCAlertProductsRequest): Promise<ProductGetQCAlertProductsResponse> {
    return await getQCAlertProducts(params, this.config);
  }

  async getPreQcRules(params: ProductGetPreQcRulesRequest): Promise<ProductGetPreQcRulesResponse> {
    return await getPreQcRules(params, this.config);
  }

  async getSellerItemLimit(): Promise<ProductGetSellerItemLimitResponse> {
    return await getSellerItemLimit(this.config);
  }

  async getUnfilledAttributeItem(params: ProductGetUnfilledAttributeItemRequest): Promise<ProductGetUnfilledAttributeItemResponse> {
    return await getUnfilledAttributeItem(params, this.config);
  }

  async getProducts(params: ProductGetProductsRequest): Promise<ProductGetProductsResponse> {
    return await getProducts(params, this.config);
  }

  async getSizeChartTemplate(params: ProductGetSizeChartTemplateRequest): Promise<ProductGetSizeChartTemplateResponse> {
    return await getSizeChartTemplate(params, this.config);
  }

  async migrateImage(params: ProductMigrateImageRequest): Promise<ProductMigrateImageResponse> {
    return await migrateImage(params, this.config);
  }

  async uploadImage(params: ProductUploadImageRequest): Promise<ProductUploadImageResponse> {
    return await uploadImage(params, this.config);
  }

  async migrateImages(params: ProductMigrateImagesRequest): Promise<ProductMigrateImagesResponse> {
    return await migrateImages(params, this.config);
  }

  async setImages(params: ProductSetImagesRequest): Promise<ProductSetImagesResponse> {
    return await setImages(params, this.config);
  }

  async createProduct(params: ProductCreateProductRequest): Promise<ProductCreateProductResponse> {
    return await createProduct(params, this.config);
  }

  async deactivateProduct(params: ProductDeactivateProductRequest): Promise<ProductDeactivateProductResponse> {
    return await deactivateProduct(params, this.config);
  }

  async productCheck(params: ProductProductCheckRequest): Promise<ProductProductCheckResponse> {
    return await productCheck(params, this.config);
  }

  async updatePriceQuantity(params: ProductUpdatePriceQuantityRequest): Promise<ProductUpdatePriceQuantityResponse> {
    return await updatePriceQuantity(params, this.config);
  }

  async removeProduct(params: ProductRemoveProductRequest): Promise<ProductRemoveProductResponse> {
    return await removeProduct(params, this.config);
  }

  async removeSku(params: ProductRemoveSkuRequest): Promise<ProductRemoveSkuResponse> {
    return await removeSku(params, this.config);
  }

  async adjustSellableQuantity(params: ProductAdjustSellableQuantityRequest): Promise<ProductAdjustSellableQuantityResponse> {
    return await adjustSellableQuantity(params, this.config);
  }

  async updateSellableQuantity(params: ProductUpdateSellableQuantityRequest): Promise<ProductUpdateSellableQuantityResponse> {
    return await updateSellableQuantity(params, this.config);
  }

  async updateProduct(params: ProductUpdateProductRequest): Promise<ProductUpdateProductResponse> {
    return await updateProduct(params, this.config);
  }

  async batchUpdateSizeChart(params: ProductBatchUpdateSizeChartRequest): Promise<ProductBatchUpdateSizeChartResponse> {
    return await batchUpdateSizeChart(params, this.config);
  }
}
