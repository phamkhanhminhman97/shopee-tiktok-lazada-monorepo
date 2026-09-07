import { TiktokConfig } from '../dto/request/config.request';
import {
  activateProducts,
  checkProductListing,
  createCategoryUpgradeTask,
  createCustomBrands,
  createGlobalProduct,
  createImageTranslationTasks,
  createManufacturer,
  createProduct,
  createResponsiblePerson,
  deactivateProducts,
  deleteGlobalProducts,
  deleteProducts,
  editGlobalProduct,
  editPartialManufacturer,
  editProduct,
  editResponsiblePersons,
  getAttributes,
  getBrands,
  getCategories,
  getCategoryRules,
  getGlobalAttributes,
  getGlobalCategories,
  getGlobalCategoryRules,
  getGlobalProduct,
  getImageTranslationTasks,
  getProduct,
  getProductPrerequisites,
  getProductsSEOWords,
  getRecommendedProductTitleAndDescription,
  optimizedImages,
  partialEditProduct,
  productInformationIssueDiagnosis,
  publishGlobalProduct,
  recommendCategory,
  recommendGlobalCategory,
  recoverProduct,
  searchGlobalProducts,
  searchInventory,
  searchManufacturer,
  searchProducts,
  searchResponsiblePersons,
  searchSizeCharts,
  updateGlobalInventory,
  updateProductInventory,
  updateProductPrice,
  uploadProductFile,
  uploadProductImage,
} from '../api/product-v3.api';
import {
  TiktokActivateProductInput,
  TiktokBrandFilterInput,
  TiktokBrandInput,
  TiktokCheckProductListingBody,
  TiktokCreateGlobalProductInput,
  TiktokCreateImageTranslationTasksInput,
  TiktokCreateManufacturerInput,
  TiktokCreateProductInput,
  TiktokCreateResponsiblePersonInput,
  TiktokDeactivateProductInput,
  TiktokDeleteGlobalProductsInput,
  TiktokDeleteProductInput,
  TiktokEditGlobalProductInput,
  TiktokEditPartialManufacturerParam,
  TiktokEditProductParams,
  TiktokEditResponsiblePersonInput,
  TiktokGetCategoriesQuery,
  TiktokGetCategoryAttributes,
  TiktokGetCategoryRulesQuery,
  TiktokGetGlobalAttributesQuery,
  TiktokGetGlobalCategoriesQuery,
  TiktokGetGlobalCategoryRulesParams,
  TiktokGetImageTranslationTasksQuery,
  TiktokGetProductParams,
  TiktokGetRecommendedProductTitleAndDescriptionQuery,
  TiktokOptimizedImagesInput,
  TiktokPartialEditProductParams,
  TiktokPublishGlobalProductInput,
  TiktokRecommendCategoryByProductParams,
  TiktokRecommendGlobalCategoryInput,
  TiktokRecoverProductBody,
  TiktokSearchGlobalProductsInput,
  TiktokSearchInventoryBody,
  TiktokSearchManufacturerQuery,
  TiktokSearchProductInput,
  TiktokSearchResponsiblePersonsParam,
  TiktokSearchSizeChartsInput,
  TiktokUpdateGlobalInventoryInput,
  TiktokUpdateProductInventoryInput,
  TiktokUpdateProductPriceInput,
  TiktokUploadImageParams,
  TiktokUploadProductFileParams,
} from '../dto/request/product-v3.request';
import {
  TiktokBrandCreateResponse,
  TiktokCategoriesResponse,
  TiktokCheckListingPrerequisitesResponse,
  TiktokCheckProductListingResponse,
  TiktokCreateGlobalProductResponse,
  TiktokCreateImageTranslationTasksResponse,
  TiktokCreateManufacturerResponse,
  TiktokCreateProductResponse,
  TiktokCreateResponsiblePersonResponse,
  TiktokDeleteGlobalProductsResponse,
  TiktokEditGlobalProductResponse,
  TiktokEditProductResponse,
  TiktokGetAttributesResponse,
  TiktokGetBrandsResponse,
  TiktokGetCategoryRulesResponse,
  TiktokGetGlobalAttributeResponse,
  TiktokGetGlobalCategoriesResponse,
  TiktokGetGlobalCategoryRulesResponse,
  TiktokGetGlobalProductResponse,
  TiktokGetImageTranslationTasksResponse,
  TiktokGetManufacturersResponse,
  TiktokGetProductResponse,
  TiktokGetProductSEOWordsResponse,
  TiktokGetRecommendedProductTitleAndDescriptionResponse,
  TiktokOptimizedImagesResponse,
  TiktokPartialEditProductResponse,
  TiktokProductDiagnosisResponse,
  TiktokPublishGlobalProductResponse,
  TiktokRecommendCategoryByProductResponse,
  TiktokRecommendGlobalCategoryResponse,
  TiktokSearchGlobalProductsResponse,
  TiktokSearchInventoryResponse,
  TiktokSearchProductsResponse,
  TiktokSearchResponsiblePersonsResponse,
  TiktokSearchSizeChartResponse,
  TiktokUpdateGlobalInventoryResponse,
  TiktokUpdateProductInventoryResponse,
  TiktokUpdateProductPriceResponse,
  TiktokUploadImageResponse,
  TiktokUploadProductFileResponse,
} from '../dto/response/product-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Product` API namespace.
 *
 * Access via `tiktok.product.<method>()` on a `TiktokModule` instance.
 */
export class TiktokProduct {
  constructor(private config: TiktokConfig) {}

  async getProductPrerequisites(): Promise<TiktokResponseCommon<TiktokCheckListingPrerequisitesResponse>> {
    return await getProductPrerequisites(this.config);
  }

  async getCategories(query: TiktokGetCategoriesQuery): Promise<TiktokResponseCommon<TiktokCategoriesResponse>> {
    return await getCategories(query, this.config);
  }

  async recommendCategory(body: TiktokRecommendCategoryByProductParams): Promise<TiktokResponseCommon<TiktokRecommendCategoryByProductResponse>> {
    return await recommendCategory(body, this.config);
  }

  async getCategoryRules(params: TiktokGetCategoryRulesQuery): Promise<TiktokResponseCommon<TiktokGetCategoryRulesResponse>> {
    return await getCategoryRules(params, this.config);
  }

  async getAttributes(params: TiktokGetCategoryAttributes): Promise<TiktokResponseCommon<TiktokGetAttributesResponse>> {
    return await getAttributes(params, this.config);
  }

  async createCustomBrands(body: TiktokBrandInput): Promise<TiktokResponseCommon<TiktokBrandCreateResponse>> {
    return await createCustomBrands(body, this.config);
  }

  async getBrands(query: TiktokBrandFilterInput): Promise<TiktokResponseCommon<TiktokGetBrandsResponse>> {
    return await getBrands(query, this.config);
  }

  async searchSizeCharts(params: TiktokSearchSizeChartsInput): Promise<TiktokResponseCommon<TiktokSearchSizeChartResponse>> {
    return await searchSizeCharts(params, this.config);
  }

  async searchProducts(params: TiktokSearchProductInput): Promise<TiktokResponseCommon<TiktokSearchProductsResponse>> {
    return await searchProducts(params, this.config);
  }

  async getProduct(params: TiktokGetProductParams): Promise<TiktokResponseCommon<TiktokGetProductResponse>> {
    return await getProduct(params, this.config);
  }

  async createResponsiblePerson(body: TiktokCreateResponsiblePersonInput): Promise<TiktokResponseCommon<TiktokCreateResponsiblePersonResponse>> {
    return await createResponsiblePerson(body, this.config);
  }

  async searchResponsiblePersons(params: TiktokSearchResponsiblePersonsParam): Promise<TiktokResponseCommon<TiktokSearchResponsiblePersonsResponse>> {
    return await searchResponsiblePersons(params, this.config);
  }

  async editResponsiblePersons(params: TiktokEditResponsiblePersonInput): Promise<TiktokResponseCommon<object>> {
    return await editResponsiblePersons(params, this.config);
  }

  async createCategoryUpgradeTask(): Promise<TiktokResponseCommon<object>> {
    return await createCategoryUpgradeTask(this.config);
  }

  async getRecommendedProductTitleAndDescription(query: TiktokGetRecommendedProductTitleAndDescriptionQuery): Promise<TiktokResponseCommon<TiktokGetRecommendedProductTitleAndDescriptionResponse>> {
    return await getRecommendedProductTitleAndDescription(query, this.config);
  }

  async getProductsSEOWords(query: TiktokGetRecommendedProductTitleAndDescriptionQuery): Promise<TiktokResponseCommon<TiktokGetProductSEOWordsResponse>> {
    return await getProductsSEOWords(query, this.config);
  }

  async productInformationIssueDiagnosis(query: TiktokGetRecommendedProductTitleAndDescriptionQuery): Promise<TiktokResponseCommon<TiktokProductDiagnosisResponse>> {
    return await productInformationIssueDiagnosis(query, this.config);
  }

  async getGlobalCategories(query: TiktokGetGlobalCategoriesQuery): Promise<TiktokResponseCommon<TiktokGetGlobalCategoriesResponse>> {
    return await getGlobalCategories(query, this.config);
  }

  async getGlobalAttributes(params: TiktokGetGlobalAttributesQuery): Promise<TiktokResponseCommon<TiktokGetGlobalAttributeResponse>> {
    return await getGlobalAttributes(params, this.config);
  }

  async createManufacturer(body: TiktokCreateManufacturerInput): Promise<TiktokResponseCommon<TiktokCreateManufacturerResponse>> {
    return await createManufacturer(body, this.config);
  }

  async searchManufacturer(params: TiktokSearchManufacturerQuery): Promise<TiktokResponseCommon<TiktokGetManufacturersResponse>> {
    return await searchManufacturer(params, this.config);
  }

  async editPartialManufacturer(params: TiktokEditPartialManufacturerParam): Promise<TiktokResponseCommon<object>> {
    return await editPartialManufacturer(params, this.config);
  }

  async deactivateProducts(body: TiktokDeactivateProductInput): Promise<TiktokResponseCommon<object>> {
    return await deactivateProducts(body, this.config);
  }

  async activateProducts(body: TiktokActivateProductInput): Promise<TiktokResponseCommon<object>> {
    return await activateProducts(body, this.config);
  }

  async deleteProducts(body: TiktokDeleteProductInput): Promise<TiktokResponseCommon<object>> {
    return await deleteProducts(body, this.config);
  }

  async uploadProductImage(body: TiktokUploadImageParams): Promise<TiktokResponseCommon<TiktokUploadImageResponse>> {
    return await uploadProductImage(body, this.config);
  }

  async optimizedImages(body: TiktokOptimizedImagesInput): Promise<TiktokResponseCommon<TiktokOptimizedImagesResponse | object>> {
    return await optimizedImages(body, this.config);
  }

  async createProduct(body: TiktokCreateProductInput): Promise<TiktokResponseCommon<TiktokCreateProductResponse | object>> {
    return await createProduct(body, this.config);
  }

  async editProduct(params: TiktokEditProductParams): Promise<TiktokResponseCommon<TiktokEditProductResponse | object>> {
    return await editProduct(params, this.config);
  }

  async partialEditProduct(params: TiktokPartialEditProductParams): Promise<TiktokResponseCommon<TiktokPartialEditProductResponse | object>> {
    return await partialEditProduct(params, this.config);
  }

  async recoverProduct(body: TiktokRecoverProductBody): Promise<TiktokResponseCommon<object>> {
    return await recoverProduct(body, this.config);
  }

  async checkProductListing(body: TiktokCheckProductListingBody): Promise<TiktokResponseCommon<TiktokCheckProductListingResponse>> {
    return await checkProductListing(body, this.config);
  }

  async uploadProductFile(body: TiktokUploadProductFileParams): Promise<TiktokResponseCommon<TiktokUploadProductFileResponse>> {
    return await uploadProductFile(body, this.config);
  }

  async searchInventory(body: TiktokSearchInventoryBody): Promise<TiktokResponseCommon<TiktokSearchInventoryResponse>> {
    return await searchInventory(body, this.config);
  }

  async updateProductPrice(params: TiktokUpdateProductPriceInput): Promise<TiktokResponseCommon<TiktokUpdateProductPriceResponse>> {
    return await updateProductPrice(params, this.config);
  }

  async updateProductInventory(params: TiktokUpdateProductInventoryInput): Promise<TiktokResponseCommon<TiktokUpdateProductInventoryResponse>> {
    return await updateProductInventory(params, this.config);
  }

  async recommendGlobalCategory(body: TiktokRecommendGlobalCategoryInput): Promise<TiktokResponseCommon<TiktokRecommendGlobalCategoryResponse>> {
    return await recommendGlobalCategory(body, this.config);
  }

  async getGlobalCategoryRules(params: TiktokGetGlobalCategoryRulesParams): Promise<TiktokResponseCommon<TiktokGetGlobalCategoryRulesResponse>> {
    return await getGlobalCategoryRules(params, this.config);
  }

  async createGlobalProduct(body: TiktokCreateGlobalProductInput): Promise<TiktokResponseCommon<TiktokCreateGlobalProductResponse>> {
    return await createGlobalProduct(body, this.config);
  }

  async editGlobalProduct(params: TiktokEditGlobalProductInput): Promise<TiktokResponseCommon<TiktokEditGlobalProductResponse>> {
    return await editGlobalProduct(params, this.config);
  }

  async deleteGlobalProducts(body: TiktokDeleteGlobalProductsInput): Promise<TiktokResponseCommon<TiktokDeleteGlobalProductsResponse>> {
    return await deleteGlobalProducts(body, this.config);
  }

  async searchGlobalProducts(params: TiktokSearchGlobalProductsInput): Promise<TiktokResponseCommon<TiktokSearchGlobalProductsResponse>> {
    return await searchGlobalProducts(params, this.config);
  }

  async updateGlobalInventory(params: TiktokUpdateGlobalInventoryInput): Promise<TiktokResponseCommon<TiktokUpdateGlobalInventoryResponse>> {
    return await updateGlobalInventory(params, this.config);
  }

  async getGlobalProduct(global_product_id: string): Promise<TiktokResponseCommon<TiktokGetGlobalProductResponse>> {
    return await getGlobalProduct(global_product_id, this.config);
  }

  async publishGlobalProduct(params: TiktokPublishGlobalProductInput): Promise<TiktokResponseCommon<TiktokPublishGlobalProductResponse>> {
    return await publishGlobalProduct(params, this.config);
  }

  async createImageTranslationTasks(body: TiktokCreateImageTranslationTasksInput): Promise<TiktokResponseCommon<TiktokCreateImageTranslationTasksResponse>> {
    return await createImageTranslationTasks(body, this.config);
  }

  async getImageTranslationTasks(query: TiktokGetImageTranslationTasksQuery): Promise<TiktokResponseCommon<TiktokGetImageTranslationTasksResponse>> {
    return await getImageTranslationTasks(query, this.config);
  }
}
