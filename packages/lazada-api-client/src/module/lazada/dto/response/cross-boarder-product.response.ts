export interface CrossBoarderProductGetGlobalProductExtensionDataProductsSkus {
  sku_id?: number;
  seller_sku?: string;
  no_postage_fee?: Record<string, unknown>;
  special_price?: Record<string, unknown>;
  price?: Record<string, unknown>;
}

export interface CrossBoarderProductGetGlobalProductExtensionDataProducts {
  abs?: string;
  item_id?: number;
  market?: string;
  semi_status?: number;
  skus?: CrossBoarderProductGetGlobalProductExtensionDataProductsSkus[];
}

export interface CrossBoarderProductGetGlobalProductExtensionData {
  global_item_id?: number;
  item_id?: number;
  products?: CrossBoarderProductGetGlobalProductExtensionDataProducts[];
}

export interface CrossBoarderProductGetGlobalProductExtension {
  success?: boolean;
  error_code?: string;
  error_msg?: string;
  data?: CrossBoarderProductGetGlobalProductExtensionData[];
}

export type CrossBoarderProductGetGlobalProductExtensionResponse = CrossBoarderProductGetGlobalProductExtension;

export interface CrossBoarderProductGetUpgradableGlobalPlusProductListDataProductsSkusCountryInfo {
  market: string;
  quantity: number;
  price: string;
  currency: string;
  special_price: string;
  item_id?: number;
  sku_id?: number;
  abs?: string;
}

export interface CrossBoarderProductGetUpgradableGlobalPlusProductListDataProductsSkus {
  item_id: number;
  package_height: string;
  package_weight: string;
  package_length: string;
  package_width: string;
  seller_sku: string;
  country_info: CrossBoarderProductGetUpgradableGlobalPlusProductListDataProductsSkusCountryInfo[];
  sku_id: number;
}

export interface CrossBoarderProductGetUpgradableGlobalPlusProductListDataProducts {
  item_id: number;
  skus: CrossBoarderProductGetUpgradableGlobalPlusProductListDataProductsSkus[];
  global_item_id: number;
}

export interface CrossBoarderProductGetUpgradableGlobalPlusProductListData {
  total_products: number;
  page_size: number;
  type: string;
  current_index: number;
  products: CrossBoarderProductGetUpgradableGlobalPlusProductListDataProducts[];
  current_page?: string;
}

export interface CrossBoarderProductGetUpgradableGlobalPlusProductList {
  data: CrossBoarderProductGetUpgradableGlobalPlusProductListData;
  success: boolean;
}

export type CrossBoarderProductGetUpgradableGlobalPlusProductListResponse = CrossBoarderProductGetUpgradableGlobalPlusProductList;

export interface CrossBoarderProductGetRecommendPriceDataSkusCountryPrice {
  market: string;
  no_postage_price: string;
  currency: string;
}

export interface CrossBoarderProductGetRecommendPriceDataSkus {
  seller_sku: string;
  country_price: CrossBoarderProductGetRecommendPriceDataSkusCountryPrice[];
  sku_id: number;
}

export interface CrossBoarderProductGetRecommendPriceData {
  item_id: number;
  skus: CrossBoarderProductGetRecommendPriceDataSkus[];
  global_item_id: number;
}

export interface CrossBoarderProductGetRecommendPrice {
  data: CrossBoarderProductGetRecommendPriceData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type CrossBoarderProductGetRecommendPriceResponse = CrossBoarderProductGetRecommendPrice;

export interface CrossBoarderProductGetGlobalProductStatus {
  data: string;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type CrossBoarderProductGetGlobalProductStatusResponse = CrossBoarderProductGetGlobalProductStatus;

export interface CrossBoarderProductGetUnfilledAttributeDataProductsAttributesAdvanced {
  is_key_prop: number;
}

export interface CrossBoarderProductGetUnfilledAttributeDataProductsAttributes {
  advanced: CrossBoarderProductGetUnfilledAttributeDataProductsAttributesAdvanced;
  input_type: string;
  options: string[];
  name: string;
  is_mandatory: number;
  attribute_type: string;
  label: string;
}

export interface CrossBoarderProductGetUnfilledAttributeDataProducts {
  item_id: number;
  primary_category: number;
  seller_sku: string;
  attributes: CrossBoarderProductGetUnfilledAttributeDataProductsAttributes[];
}

export interface CrossBoarderProductGetUnfilledAttributeData {
  total_products: number;
  products: CrossBoarderProductGetUnfilledAttributeDataProducts[];
}

export interface CrossBoarderProductGetUnfilledAttribute {
  data: CrossBoarderProductGetUnfilledAttributeData;
  success: boolean;
  error_detail: string;
  error_code: string;
  errors: string;
  error_msg: string;
}

export type CrossBoarderProductGetUnfilledAttributeResponse = CrossBoarderProductGetUnfilledAttribute;

export interface CrossBoarderProductUpdateGlobalProductAttribute {
  success: boolean;
  error_detail: string;
  error_code: string;
  errors: string;
  error_msg: string;
}

export type CrossBoarderProductUpdateGlobalProductAttributeResponse = CrossBoarderProductUpdateGlobalProductAttribute;

export interface CrossBoarderProductCreateGlobalProductDataSkuList {
  seller_sku?: string;
}

export interface CrossBoarderProductCreateGlobalProductData {
  sku_list?: CrossBoarderProductCreateGlobalProductDataSkuList[];
}

export interface CrossBoarderProductCreateGlobalProduct {
  data: CrossBoarderProductCreateGlobalProductData;
}

export type CrossBoarderProductCreateGlobalProductResponse = CrossBoarderProductCreateGlobalProduct;

export interface CrossBoarderProductDeleteMerchantProductDataDeleteIcProductFailResultList {
  productId?: number;
  market?: string;
  updateResult?: boolean;
  updateMsg?: string;
}

export interface CrossBoarderProductDeleteMerchantProductData {
  deleteGspProductResult?: boolean;
  deleteICProductResult?: boolean;
  deleteIcProductFailResultList?: CrossBoarderProductDeleteMerchantProductDataDeleteIcProductFailResultList[];
}

export interface CrossBoarderProductDeleteMerchantProduct {
  data?: CrossBoarderProductDeleteMerchantProductData;
  success?: boolean;
  error_code?: string;
  error_msg?: string;
}

export type CrossBoarderProductDeleteMerchantProductResponse = CrossBoarderProductDeleteMerchantProduct;

export interface CrossBoarderProductSemiProductUpdateData {
  product_id?: number;
}

export interface CrossBoarderProductSemiProductUpdate {
  data?: CrossBoarderProductSemiProductUpdateData;
  success?: boolean;
  error_code?: string;
  error_msg?: string;
}

export type CrossBoarderProductSemiProductUpdateResponse = CrossBoarderProductSemiProductUpdate;

export interface CrossBoarderProductSemiProductUpgradeData {
  product_id?: number;
}

export interface CrossBoarderProductSemiProductUpgrade {
  data: CrossBoarderProductSemiProductUpgradeData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type CrossBoarderProductSemiProductUpgradeResponse = CrossBoarderProductSemiProductUpgrade;

export interface CrossBoarderProductUpdateProductStatusDataUpdateIcProductFailResultList {
  product_id?: number;
  market?: string;
  update_result?: boolean;
  update_msg?: string;
}

export interface CrossBoarderProductUpdateProductStatusData {
  update_gsp_product_result?: boolean;
  update_ic_product_result?: boolean;
  update_ic_product_fail_result_list?: CrossBoarderProductUpdateProductStatusDataUpdateIcProductFailResultList[];
}

export interface CrossBoarderProductUpdateProductStatus {
  data?: CrossBoarderProductUpdateProductStatusData;
  success?: boolean;
  error_code?: string;
  error_msg?: string;
}

export type CrossBoarderProductUpdateProductStatusResponse = CrossBoarderProductUpdateProductStatus;
