export interface ProductGetCategoryAttributesDataOptions {
  name?: string;
  en_name?: string;
  id?: number;
}

export interface ProductGetCategoryAttributesDataUnit {
  type?: string[];
  numericMin?: string;
  numericMax?: string;
  precision?: number;
}

export interface ProductGetCategoryAttributesData {
  advanced?: Record<string, unknown>;
  label?: string;
  name?: string;
  is_mandatory?: number;
  attribute_type?: string;
  input_type?: string;
  options?: ProductGetCategoryAttributesDataOptions[];
  is_sale_prop?: number;
  id?: number;
  unit?: ProductGetCategoryAttributesDataUnit;
}

export interface ProductGetCategoryAttributes {
  data?: ProductGetCategoryAttributesData[];
}

export type ProductGetCategoryAttributesResponse = ProductGetCategoryAttributes;

export interface ProductGetBrandByPagesDataModule {
  global_identifier: string;
  name_en: string;
  brand_id: number;
  name: string;
}

export interface ProductGetBrandByPagesData {
  start_row: number;
  page_index: number;
  total_page: number;
  module: ProductGetBrandByPagesDataModule[];
  enable_total: boolean;
  page_size: number;
  total_record: number;
}

export interface ProductGetBrandByPages {
  data: ProductGetBrandByPagesData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type ProductGetBrandByPagesResponse = ProductGetBrandByPages;

export interface ProductGetNextCascadePropDataProp {
  id?: number;
  name?: string;
  required?: boolean;
}

export interface ProductGetNextCascadePropDataPropValue {
  id?: number;
  name?: string;
  leaf?: string;
}

export interface ProductGetNextCascadePropData {
  prop?: ProductGetNextCascadePropDataProp;
  propValue?: ProductGetNextCascadePropDataPropValue[];
}

export interface ProductGetNextCascadeProp {
  data?: ProductGetNextCascadePropData;
}

export type ProductGetNextCascadePropResponse = ProductGetNextCascadeProp;

export interface ProductGetCategoryTree {
  data?: Record<string, unknown>[];
}

export type ProductGetCategoryTreeResponse = ProductGetCategoryTree;

export interface ProductGetResponseDataImages {
  url?: string;
  hash_code?: string;
}

export interface ProductGetResponseDataErrors {
  field?: string;
  msg?: string;
  original_url?: string;
}

export interface ProductGetResponseData {
  images?: ProductGetResponseDataImages[];
  errors?: ProductGetResponseDataErrors[];
}

export interface ProductGetResponse {
  data: ProductGetResponseData;
}

export type ProductGetResponseResponse = ProductGetResponse;

export interface ProductGetCategorySuggestionDataCategorySuggestions {
  categoryId?: number;
  categoryName?: string;
  categoryPath?: string;
}

export interface ProductGetCategorySuggestionData {
  categorySuggestions?: ProductGetCategorySuggestionDataCategorySuggestions[];
}

export interface ProductGetCategorySuggestion {
  data: ProductGetCategorySuggestionData;
}

export type ProductGetCategorySuggestionResponse = ProductGetCategorySuggestion;

export interface ProductGetProductContentScoreResultDataItemsIndicators {
  critical?: boolean;
  text?: string;
  key?: string;
}

export interface ProductGetProductContentScoreResultDataItemsImageListIndicators {
  text?: string;
  key?: string;
}

export interface ProductGetProductContentScoreResultDataItemsImageList {
  score?: number;
  imageUrl?: string;
  text?: string;
  type?: string;
  imageType?: number;
  indicators?: ProductGetProductContentScoreResultDataItemsImageListIndicators[];
}

export interface ProductGetProductContentScoreResultDataItems {
  key?: string;
  score?: number;
  total?: number;
  group?: string;
  label?: string;
  latest?: boolean;
  indicators?: ProductGetProductContentScoreResultDataItemsIndicators[];
  imageList?: ProductGetProductContentScoreResultDataItemsImageList[];
  itemTitle?: string;
}

export interface ProductGetProductContentScoreResultData {
  productTitle?: string;
  score?: number;
  image?: string;
  total?: number;
  productId?: number;
  items?: ProductGetProductContentScoreResultDataItems[];
}

export interface ProductGetProductContentScoreResult {
  data: ProductGetProductContentScoreResultData;
}

export interface ProductGetProductContentScore {
  result: ProductGetProductContentScoreResult;
}

export type ProductGetProductContentScoreResponse = ProductGetProductContentScore;

export interface ProductGetProductItemDataVariationVariation1 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ProductGetProductItemDataVariationVariation2 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ProductGetProductItemDataVariationVariation3 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ProductGetProductItemDataVariationVariation4 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ProductGetProductItemDataVariation {
  variation1?: ProductGetProductItemDataVariationVariation1;
  variation2?: ProductGetProductItemDataVariationVariation2;
  variation3?: ProductGetProductItemDataVariationVariation3;
  variation4?: ProductGetProductItemDataVariationVariation4;
}

export interface ProductGetProductItemData {
  subStatus?: string;
  suspendedSkus?: Record<string, unknown>[];
  variation?: ProductGetProductItemDataVariation;
  primary_category?: number;
  attributes?: Record<string, unknown>;
  skus?: Record<string, unknown>[];
  item_id?: number;
  created_time?: string;
  updated_time?: string;
  images?: string;
  marketImages?: string;
  status?: string;
  trialProduct?: boolean;
  rejectReason?: Record<string, unknown>[];
  hiddenReason?: string;
  hiddenStatus?: string;
  bizSupplement?: Record<string, unknown>;
  imageSequence?: Record<string, unknown>;
}

export interface ProductGetProductItem {
  data: ProductGetProductItemData;
}

export type ProductGetProductItemResponse = ProductGetProductItem;

export interface ProductGetQCAlertProductsData {
  productId?: number;
  categoryId?: number;
  deactivationTime?: number;
  suggestionCategories?: number[];
}

export interface ProductGetQCAlertProducts {
  data?: ProductGetQCAlertProductsData[];
}

export type ProductGetQCAlertProductsResponse = ProductGetQCAlertProducts;

export interface ProductGetPreQcRulesValues {
  restricted_cate_ids: number[];
  item_limit: number;
  item_count: number;
}

export interface ProductGetPreQcRules {
  values: ProductGetPreQcRulesValues;
}

export type ProductGetPreQcRulesResponse = ProductGetPreQcRules;

export interface ProductGetSellerItemLimitData {
  onlineItemCount?: number;
  itemLimit?: number;
  payItemCnt?: number;
  payByrCnt?: number;
}

export interface ProductGetSellerItemLimit {
  success?: boolean;
  errorCodes?: string[];
  errorMsgs?: string[];
  data?: ProductGetSellerItemLimitData;
}

export type ProductGetSellerItemLimitResponse = ProductGetSellerItemLimit;

export interface ProductGetUnfilledAttributeItemProductsAttributesOptions {
  name: string;
}

export interface ProductGetUnfilledAttributeItemProductsAttributes {
  advanced: Record<string, unknown>;
  name: string;
  input_type: string;
  options: ProductGetUnfilledAttributeItemProductsAttributesOptions[];
  is_mandatory: number;
  attribute_type: string;
  label: string;
}

export interface ProductGetUnfilledAttributeItemProducts {
  item_id: number;
  primary_category: number;
  attributes: ProductGetUnfilledAttributeItemProductsAttributes[];
  seller_sku_id: string;
}

export interface ProductGetUnfilledAttributeItem {
  success: boolean;
  total_products: number;
  products: ProductGetUnfilledAttributeItemProducts[];
  error_msg: string;
}

export type ProductGetUnfilledAttributeItemResponse = ProductGetUnfilledAttributeItem;

export interface ProductGetProductsDataProducts {
  primary_category?: number;
  attributes?: Record<string, unknown>;
  skus?: Record<string, unknown>[];
  item_id?: number;
  created_time?: string;
  updated_time?: string;
  images?: string;
  marketImages?: string;
  status?: string;
  subStatus?: string;
  suspendedSkus?: Record<string, unknown>[];
  trialProduct?: boolean;
  rejectReason?: Record<string, unknown>[];
  hiddenReason?: string;
  hiddenStatus?: string;
}

export interface ProductGetProductsData {
  total_products?: number;
  products?: ProductGetProductsDataProducts[];
}

export interface ProductGetProducts {
  data?: ProductGetProductsData;
}

export type ProductGetProductsResponse = ProductGetProducts;

export interface ProductGetSizeChartTemplateData {
  total?: number;
  pageNo?: number;
  pageSize?: number;
  totalPage?: number;
  sizeChartResponses?: Record<string, unknown>[];
}

export interface ProductGetSizeChartTemplate {
  data?: ProductGetSizeChartTemplateData;
}

export type ProductGetSizeChartTemplateResponse = ProductGetSizeChartTemplate;

export interface ProductMigrateImageDataImage {
  url?: string;
  hash_code?: string;
}

export interface ProductMigrateImageData {
  image?: ProductMigrateImageDataImage;
}

export interface ProductMigrateImage {
  data?: ProductMigrateImageData;
}

export type ProductMigrateImageResponse = ProductMigrateImage;

export interface ProductUploadImageDataImage {
  url?: string;
  hash_code?: string;
}

export interface ProductUploadImageData {
  image?: ProductUploadImageDataImage;
}

export interface ProductUploadImage {
  data: ProductUploadImageData;
}

export type ProductUploadImageResponse = ProductUploadImage;

export interface ProductMigrateImages {
  batch_id: string;
}

export type ProductMigrateImagesResponse = ProductMigrateImages;

export interface ProductSetImages {
  data?: Record<string, unknown>;
}

export type ProductSetImagesResponse = ProductSetImages;

export interface ProductCreateProductDataSkuList {
  seller_sku?: string;
  shop_sku?: string;
  sku_id?: number;
}

export interface ProductCreateProductData {
  item_id?: number;
  sku_list?: ProductCreateProductDataSkuList[];
  item_status?: string;
}

export interface ProductCreateProduct {
  data: ProductCreateProductData;
}

export type ProductCreateProductResponse = ProductCreateProduct;

export interface ProductDeactivateProduct {
  data?: Record<string, unknown>;
}

export type ProductDeactivateProductResponse = ProductDeactivateProduct;

export interface ProductProductCheck {
  data?: Record<string, unknown>;
}

export type ProductProductCheckResponse = ProductProductCheck;

export interface ProductUpdatePriceQuantity {
  data: Record<string, unknown>;
}

export type ProductUpdatePriceQuantityResponse = ProductUpdatePriceQuantity;

export interface ProductRemoveProduct {
  data: Record<string, unknown>;
}

export type ProductRemoveProductResponse = ProductRemoveProduct;

export interface ProductRemoveSku {
  data?: Record<string, unknown>;
}

export type ProductRemoveSkuResponse = ProductRemoveSku;

export interface ProductAdjustSellableQuantity {
  data?: Record<string, unknown>;
}

export type ProductAdjustSellableQuantityResponse = ProductAdjustSellableQuantity;

export interface ProductUpdateSellableQuantity {
  data?: Record<string, unknown>;
}

export type ProductUpdateSellableQuantityResponse = ProductUpdateSellableQuantity;

export interface ProductUpdateProductDataVariationVariation1 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
}

export interface ProductUpdateProductDataVariationVariation2 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
}

export interface ProductUpdateProductDataVariationVariation3 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
}

export interface ProductUpdateProductDataVariationVariation4 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
}

export interface ProductUpdateProductDataVariation {
  Variation1?: ProductUpdateProductDataVariationVariation1;
  Variation2?: ProductUpdateProductDataVariationVariation2;
  Variation3?: ProductUpdateProductDataVariationVariation3;
  Variation4?: ProductUpdateProductDataVariationVariation4;
}

export interface ProductUpdateProductData {
  variation?: ProductUpdateProductDataVariation;
  item_status?: string;
}

export interface ProductUpdateProduct {
  data?: ProductUpdateProductData;
}

export type ProductUpdateProductResponse = ProductUpdateProduct;

export interface ProductBatchUpdateSizeChart {
  data?: Record<string, unknown>;
}

export type ProductBatchUpdateSizeChartResponse = ProductBatchUpdateSizeChart;
