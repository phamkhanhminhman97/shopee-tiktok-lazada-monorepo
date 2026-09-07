import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
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

/**
 * Check if the seller has fulfilled all necessary prerequisites to list products.
 * This may include return address setup or brand approval.
 */
export async function getProductPrerequisites(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCheckListingPrerequisitesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCheckListingPrerequisitesResponse>>(
    '/product/202309/prerequisites',
    'GET',
    {},
    config,
    'getProductPrerequisites',
  );
}

/**
 * Retrieve available product categories.
 * Useful when the seller needs to browse or filter categories for listing.
 */
export async function getCategories(query: TiktokGetCategoriesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCategoriesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCategoriesResponse>>(
    '/product/202309/categories',
    'GET',
    { query: query },
    config,
    'getCategories',
  );
}

/**
 * Get recommended category for a product based on title, description, or image.
 */
export async function recommendCategory(body: TiktokRecommendCategoryByProductParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokRecommendCategoryByProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokRecommendCategoryByProductResponse>>(
    '/product/202309/categories/recommend',
    'POST',
    { body: body },
    config,
    'recommendCategory',
  );
}

/**
 * Get category-specific rules (e.g., mandatory fields, validations) for listing a product.
 */
export async function getCategoryRules(params: TiktokGetCategoryRulesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetCategoryRulesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetCategoryRulesResponse>>(
    `/product/202309/categories/${params.category_id}/rules`,
    'GET',
    { query: params.query },
    config,
    'getCategoryRules',
  );
}

/**
 * Get category-specific product attributes (e.g., color, size) required for listing.
 */
export async function getAttributes(params: TiktokGetCategoryAttributes, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAttributesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAttributesResponse>>(
    `/product/202309/categories/${params.category_id}/attributes`,
    'GET',
    { query: params.query },
    config,
    'getAttributes',
  );
}

/**
 * Create a custom brand under the seller's account.
 * Useful when listing products that don’t belong to existing brands.
 */
export async function createCustomBrands(body: TiktokBrandInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokBrandCreateResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokBrandCreateResponse>>(
    `/product/202309/brands`,
    'POST',
    { body: body },
    config,
    'createCustomBrands',
  );
}

/**
 * Search for existing brands by keyword or filter.
 */
export async function getBrands(query: TiktokBrandFilterInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetBrandsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetBrandsResponse>>(
    `/product/202309/brands`,
    'GET',
    { query: query },
    config,
    'getBrands',
  );
}

/**
 * Search for size charts based on category and product attributes.
 * Used when size chart is required for apparel or similar categories.
 */
export async function searchSizeCharts(params: TiktokSearchSizeChartsInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchSizeChartResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchSizeChartResponse>>(
    `/product/202407/sizecharts/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchSizeCharts',
  );
}

/**
 * Search for existing products using keywords, filters, or pagination.
 * Helpful for managing listed inventory or checking duplicates.
 */
export async function searchProducts(params: TiktokSearchProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchProductsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchProductsResponse>>(
    `/product/202502/products/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchProducts',
  );
}

/**
 * Retrieve detailed information about a specific product by ID.
 */
export async function getProduct(params: TiktokGetProductParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetProductResponse>>(
    `/product/202309/products/${params.product_id}`,
    'GET',
    { query: params.query },
    config,
    'getProduct',
  );
}

/**
 * Create a new responsible person for product compliance.
 */
export async function createResponsiblePerson(body: TiktokCreateResponsiblePersonInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateResponsiblePersonResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateResponsiblePersonResponse>>(
    `/product/202409/compliance/responsible_persons`,
    'POST',
    { body: body },
    config,
    'createResponsiblePerson',
  );
}

/**
 * Search responsible persons based on given query and filters.
 */
export async function searchResponsiblePersons(params: TiktokSearchResponsiblePersonsParam, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchResponsiblePersonsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchResponsiblePersonsResponse>>(
    `/product/202409/compliance/responsible_persons/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchResponsiblePersons',
  );
}

/**
 * Edit details of a responsible person partially by ID.
 */
export async function editResponsiblePersons(params: TiktokEditResponsiblePersonInput, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202409/compliance/responsible_persons/${params.responsible_person_id}/partial_edit`,
    'POST',
    { body: params.body },
    config,
    'editResponsiblePersons',
  );
}

/**
 * Create a category upgrade task for products.
 */
export async function createCategoryUpgradeTask(config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202407/products/category_upgrade_task`,
    'POST',
    {},
    config,
    'createCategoryUpgradeTask',
  );
}

/**
 * Get recommended product titles and descriptions.
 */
export async function getRecommendedProductTitleAndDescription(query: TiktokGetRecommendedProductTitleAndDescriptionQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetRecommendedProductTitleAndDescriptionResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetRecommendedProductTitleAndDescriptionResponse>>(
    `/product/202405/products/suggestions`,
    'GET',
    {},
    config,
    'getRecommendedProductTitleAndDescription',
  );
}

/**
 * Get SEO words recommendations for products.
 */
export async function getProductsSEOWords(query: TiktokGetRecommendedProductTitleAndDescriptionQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetProductSEOWordsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetProductSEOWordsResponse>>(
    `/product/202405/products/seo_words`,
    'GET',
    {},
    config,
    'getProductsSEOWords',
  );
}

/**
 * Diagnose product information issues.
 */
export async function productInformationIssueDiagnosis(query: TiktokGetRecommendedProductTitleAndDescriptionQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokProductDiagnosisResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokProductDiagnosisResponse>>(
    `/product/202405/products/diagnoses`,
    'GET',
    {},
    config,
    'productInformationIssueDiagnosis',
  );
}

/**
 * Retrieve global product categories.
 */
export async function getGlobalCategories(query: TiktokGetGlobalCategoriesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetGlobalCategoriesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetGlobalCategoriesResponse>>(
    `/product/202309/global_categories`,
    'GET',
    {},
    config,
    'getGlobalCategories',
  );
}

/**
 * Get global attributes for a specific category.
 */
export async function getGlobalAttributes(params: TiktokGetGlobalAttributesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetGlobalAttributeResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetGlobalAttributeResponse>>(
    `/product/202309/categories/${params.category_id}/global_attributes`,
    'GET',
    { query: params.query },
    config,
    'getGlobalAttributes',
  );
}

/**
 * Create a new manufacturer entry.
 */
export async function createManufacturer(body: TiktokCreateManufacturerInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateManufacturerResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateManufacturerResponse>>(
    `/product/202409/compliance/manufacturers`,
    'POST',
    { body: body },
    config,
    'createManufacturer',
  );
}

/**
 * Search manufacturers with filters and query.
 */
export async function searchManufacturer(params: TiktokSearchManufacturerQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetManufacturersResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetManufacturersResponse>>(
    `/product/202501/compliance/manufacturers/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchManufacturer',
  );
}

/**
 * Partially edit manufacturer information by ID.
 */
export async function editPartialManufacturer(params: TiktokEditPartialManufacturerParam, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202409/compliance/manufacturers/${params.manufacturer_id}/partial_edit`,
    'POST',
    { body: params.body },
    config,
    'editPartialManufacturer',
  );
}

/**
 * Deactivate products by given list.
 */
export async function deactivateProducts(body: TiktokDeactivateProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202309/products/deactivate`,
    'POST',
    { body: body },
    config,
    'deactivateProducts',
  );
}

/**
 * Activate products by given list.
 */
export async function activateProducts(body: TiktokActivateProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202309/products/activate`,
    'POST',
    { body: body },
    config,
    'activateProducts',
  );
}

/**
 * Delete products by given list.
 */
export async function deleteProducts(body: TiktokDeleteProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202309/products`,
    'DELETE',
    { body: body },
    config,
    'deleteProducts',
  );
}

/**
 * Upload product images using multipart/form-data.
 */
export async function uploadProductImage(body: TiktokUploadImageParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUploadImageResponse>> {
  return TiktokHelper.callTiktokMultipart<TiktokResponseCommon<TiktokUploadImageResponse>>(
    '/product/202309/images/upload',
    { data: body.data, use_case: body.use_case },
    'data',
    'product_name',
    config,
    'uploadProductImage',
  );
}

/**
 * Optimize images for products.
 */
export async function optimizedImages(body: TiktokOptimizedImagesInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokOptimizedImagesResponse | object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokOptimizedImagesResponse | object>>(
    '/product/202404/images/optimize',
    'POST',
    { body: body },
    config,
    'optimizedImages',
  );
}

/**
 * Create a new product with given details.
 */
export async function createProduct(body: TiktokCreateProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateProductResponse | object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateProductResponse | object>>(
    '/product/202309/products',
    'POST',
    { body: body },
    config,
    'createProduct',
  );
}

/**
 * Edit a product with given details.
 */
export async function editProduct(params: TiktokEditProductParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokEditProductResponse | object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokEditProductResponse | object>>(
    `/product/202309/products/${params.product_id}`,
    'PUT',
    { body: params.body },
    config,
    'editProduct',
  );
}

/**
 * Partially edit a product with given details.
 * This endpoint allows updating specific fields of a product without requiring all fields.
 */
export async function partialEditProduct(params: TiktokPartialEditProductParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokPartialEditProductResponse | object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokPartialEditProductResponse | object>>(
    `/product/202309/products/${params.product_id}/partial_edit`,
    'POST',
    { body: params.body },
    config,
    'partialEditProduct',
  );
}

/**
 * Recover deleted product using product ID.
 * @see https://partner.tiktokshop.com/doc/page/661176
 * @param body - Payload containing the product_id to recover.
 */
export async function recoverProduct(body: TiktokRecoverProductBody, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/product/202309/products/recover`,
    'POST',
    { body: body },
    config,
    'recoverProduct',
  );
}

/**
 * Check product listing prerequisites before publishing.
 * @see https://partner.tiktokshop.com/docv2/page/recover-products-202309
 * @param body - Payload containing product details to check listing eligibility.
 */
export async function checkProductListing(body: TiktokCheckProductListingBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCheckProductListingResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCheckProductListingResponse>>(
    `/product/202309/products/listing_check`,
    'POST',
    { body: body },
    config,
    'checkProductListing',
  );
}

/**
 * Upload a file (e.g., product image or certificate).
 * @see https://partner.tiktokshop.com/docv2/page/upload-product-file-202309
 * @param body - File and metadata required for upload.
 */
export async function uploadProductFile(body: TiktokUploadProductFileParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUploadProductFileResponse>> {
  return TiktokHelper.callTiktokMultipart<TiktokResponseCommon<TiktokUploadProductFileResponse>>(
    '/product/202309/files/upload',
    { data: body.data, name: body.name },
    'data',
    body.name,
    config,
    'uploadProductFile',
  );
}

/**
 * Search inventory by filters like product_id or status.
 * @see https://partner.tiktokshop.com/docv2/page/inventory-search-202309
 * @param body - Payload to filter and search product inventory.
 */
export async function searchInventory(body: TiktokSearchInventoryBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchInventoryResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchInventoryResponse>>(
    '/product/202309/inventory/search',
    'POST',
    {},
    config,
    'searchInventory',
  );
}

/**
 * Update price of a product SKU.
 * @see https://partner.tiktokshop.com/docv2/page/update-price-202309
 * @param params - Object containing product_id and body with price data.
 */
export async function updateProductPrice(params: TiktokUpdateProductPriceInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateProductPriceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateProductPriceResponse>>(
    `/product/202309/products/${params.product_id}/prices/update`,
    'POST',
    { body: params.body },
    config,
    'updateProductPrice',
  );
}

/**
 * Update inventory of a product SKU.
 * @see https://partner.tiktokshop.com/docv2/page/update-inventory-202309
 * @param params - Object containing product_id and inventory data.
 */
export async function updateProductInventory(params: TiktokUpdateProductInventoryInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateProductInventoryResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateProductInventoryResponse>>(
    `/product/202309/products/${params.product_id}/inventory/update`,
    'POST',
    { body: params.body },
    config,
    'updateProductInventory',
  );
}

/**
 * Get recommended global categories for a product.
 * @see https://partner.tiktokshop.com/docv2/page/recommend-global-categories-202309
 * @param body - Object with product information to get category suggestions.
 */
export async function recommendGlobalCategory(body: TiktokRecommendGlobalCategoryInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokRecommendGlobalCategoryResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokRecommendGlobalCategoryResponse>>(
    '/product/202309/global_categories/recommend',
    'POST',
    {},
    config,
    'recommendGlobalCategory',
  );
}

/**
 * Get global category rules (e.g., attributes, requirements).
 * @see https://partner.tiktokshop.com/docv2/page/get-global-category-rules-202309
 * @param params - Params containing category_id and optional query.
 */
export async function getGlobalCategoryRules(params: TiktokGetGlobalCategoryRulesParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetGlobalCategoryRulesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetGlobalCategoryRulesResponse>>(
    `/product/202309/categories/${params.category_id}/global_rules`,
    'GET',
    { query: params.query },
    config,
    'getGlobalCategoryRules',
  );
}

/**
 * Create a new global product.
 * @see https://partner.tiktokshop.com/docv2/page/create-global-product-202309
 * @param body - Payload for creating a global product.
 */
export async function createGlobalProduct(body: TiktokCreateGlobalProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateGlobalProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateGlobalProductResponse>>(
    '/product/202309/global_products',
    'POST',
    {},
    config,
    'createGlobalProduct',
  );
}

/**
 * Edit a global product by ID.
 * @see https://partner.tiktokshop.com/docv2/page/edit-global-product-202309
 * @param params - Object containing global_product_id and updated product body.
 */
export async function editGlobalProduct(params: TiktokEditGlobalProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokEditGlobalProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokEditGlobalProductResponse>>(
    `/product/202309/global_products/${params.global_product_id}`,
    'PUT',
    { body: params.body },
    config,
    'editGlobalProduct',
  );
}

/**
 * Delete one or multiple global products.
 * @see https://partner.tiktokshop.com/docv2/page/delete-global-products-202309
 * @param body - Payload containing IDs of global products to delete.
 */
export async function deleteGlobalProducts(body: TiktokDeleteGlobalProductsInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokDeleteGlobalProductsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokDeleteGlobalProductsResponse>>(
    '/product/202309/global_products',
    'DELETE',
    {},
    config,
    'deleteGlobalProducts',
  );
}

/**
 * Search for global products using filters and pagination.
 * @see https://partner.tiktokshop.com/docv2/page/search-global-products-202312
 * @param params - Object with query and body filters.
 */
export async function searchGlobalProducts(params: TiktokSearchGlobalProductsInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchGlobalProductsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchGlobalProductsResponse>>(
    '/product/202312/global_products/search',
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchGlobalProducts',
  );
}

/**
 * Update inventory for a specific global product.
 * @see https://partner.tiktokshop.com/docv2/page/update-global-inventory-202309
 * @param params - Params containing global_product_id and new inventory data.
 */
export async function updateGlobalInventory(params: TiktokUpdateGlobalInventoryInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateGlobalInventoryResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateGlobalInventoryResponse>>(
    `/product/202309/global_products/${params.global_product_id}/inventory/update`,
    'POST',
    { body: params.body },
    config,
    'updateGlobalInventory',
  );
}

/**
 * Get a specific global product by ID.
 * @see https://partner.tiktokshop.com/docv2/page/get-global-product-202309
 * @param global_product_id - ID of the global product to retrieve.
 */
export async function getGlobalProduct(global_product_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetGlobalProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetGlobalProductResponse>>(
    `/product/202309/global_products/${global_product_id}`,
    'GET',
    {},
    config,
    'getGlobalProduct',
  );
}

/**
 * Publish a global product to a specific market or all markets.
 * @see https://partner.tiktokshop.com/docv2/page/publish-global-product-202309
 * @param params - Object containing global_product_id and publish config.
 */
export async function publishGlobalProduct(params: TiktokPublishGlobalProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokPublishGlobalProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokPublishGlobalProductResponse>>(
    `/product/202309/global_products/${params.global_product_id}/publish`,
    'POST',
    { body: params.body },
    config,
    'publishGlobalProduct',
  );
}

/**
 * Create image translation tasks for multiple product images.
 * @see https://partner.tiktokshop.com/docv2/page/create-image-translation-tasks-202505
 * @param body - List of image URLs and target languages.
 */
export async function createImageTranslationTasks(body: TiktokCreateImageTranslationTasksInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateImageTranslationTasksResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateImageTranslationTasksResponse>>(
    '/product/202505/images/translation_tasks',
    'POST',
    {},
    config,
    'createImageTranslationTasks',
  );
}

/**
 * Get status of image translation tasks.
 * @see https://partner.tiktokshop.com/docv2/page/get-image-translation-tasks-202506
 * @param query - Object containing task_ids for status lookup.
 */
export async function getImageTranslationTasks(query: TiktokGetImageTranslationTasksQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetImageTranslationTasksResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetImageTranslationTasksResponse>>(
    '/product/202506/images/translation_tasks',
    'GET',
    { query: query },
    config,
    'getImageTranslationTasks',
  );
}
