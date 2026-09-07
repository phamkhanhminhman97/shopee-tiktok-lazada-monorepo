export interface ProductGetCategoryAttributesRequest {
  primary_category_id: string;
  language_code?: string;
}

export interface ProductGetBrandByPagesRequest {
  startRow: string;
  pageSize: string;
}

export interface ProductGetNextCascadePropRequest {
  categoryId: number;
  cascadeId: number;
  path?: string;
}

export interface ProductGetCategoryTreeRequest {
  language_code?: string;
}

export interface ProductGetResponseRequest {
  batch_id: string;
}

export interface ProductGetCategorySuggestionRequest {
  product_name: string;
  image_url?: string;
}

export interface ProductGetProductContentScoreRequest {
  item_id: number;
}

export interface ProductGetProductItemRequest {
  item_id: number;
  seller_sku?: string;
}

export interface ProductGetQCAlertProductsRequest {
  offset: string;
  limit: string;
}

export interface ProductGetPreQcRulesRequest {
  option: number;
  option_set: number[];
}

export type ProductGetSellerItemLimitRequest = Record<string, never>;

export interface ProductGetUnfilledAttributeItemRequest {
  page_index: number;
  attribute_tag: string;
  page_size: number;
  language_code: string;
}

export interface ProductGetProductsRequest {
  filter?: string;
  update_before?: string;
  create_before?: string;
  offset?: string;
  create_after?: string;
  update_after?: string;
  limit?: string;
  options?: string;
  sku_seller_list?: string;
}

export interface ProductGetSizeChartTemplateRequest {
  template_id?: number;
  template_name?: string;
  page_no: number;
  page_size: number;
}

export interface ProductMigrateImageRequest {
  payload: Record<string, unknown>;
}

export interface ProductUploadImageRequest {
  image: string[];
}

export interface ProductMigrateImagesRequest {
  payload: Record<string, unknown>;
}

export interface ProductSetImagesRequest {
  payload: Record<string, unknown>;
}

export interface ProductCreateProductRequest {
  payload: Record<string, unknown>;
}

export interface ProductDeactivateProductRequest {
  apiRequestBody: string;
}

export interface ProductProductCheckRequest {
  payload: string;
}

export interface ProductUpdatePriceQuantityRequest {
  payload: Record<string, unknown>;
}

export interface ProductRemoveProductRequest {
  seller_sku_list?: string;
  sku_id_list?: string;
}

export interface ProductRemoveSkuRequest {
  payload: string;
}

export interface ProductAdjustSellableQuantityRequest {
  payload: Record<string, unknown>;
}

export interface ProductUpdateSellableQuantityRequest {
  payload: string;
}

export interface ProductUpdateProductRequest {
  payload: string;
}

export interface ProductBatchUpdateSizeChartRequest {
  payload: Record<string, unknown>;
}
