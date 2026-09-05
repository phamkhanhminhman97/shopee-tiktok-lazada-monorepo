/**
 * Enum generated for field ShopeeTierIndex
 */
export enum ShopeeTierIndex {
  TIER = "tier",
  TWO = "two",
}

/**
 * ShopeeAddGlobalItemImage sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemImage {
  /**
   * Image id list of global item.
   */
  image_id_list: string[];
}

/**
 * ShopeeAddGlobalItemDimension sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemDimension {
  /**
   * Package length of global item.
   */
  package_length: number;
  /**
   * Package width of global item.
   */
  package_width: number;
  /**
   * Package height of global item.
   */
  package_height: number;
}

/**
 * ShopeeAddGlobalItemPreOrder sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemPreOrder {
  /**
   * Days to ship.
   */
  days_to_ship: number;
}

/**
 * ShopeeAddGlobalItemBrand sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemBrand {
  /**
   * Id of brand.
   */
  brand_id?: number;
  /**
   * Original name of brand.
   */
  original_brand_name?: string;
}

/**
 * ShopeeAddGlobalItemAttributeValue sub-interface for ShopeeAddGlobalItemAttribute
 */
export interface ShopeeAddGlobalItemAttributeValue {
  /**
   * ID of attribute value. In the following cases, the value id needs to be uploaded as 0, and original_value_name is mandatory, needs to be filled in customized value. (1) AttributeInputType is TEXT_FILED; (2) AttributeInputType is COMBO_BOX or MULTIPLE_SELECT_COMBO_BOX, and the seller want to fill in a customized value.
   */
  value_id?: number;
  /**
   * Name of attribute value. original_value_name from global_product.get_attributes api. If value id=0, this field is required. If AttributeType is DATE_TYPE or TIMESTAMP_TYPE, you can upload timestamp(string type) as the original_value_name.
   */
  original_value_name?: string;
  /**
   * Unit of attribute value.(quantitative attribute only)
   */
  value_unit?: string;
}

/**
 * ShopeeAddGlobalItemAttribute sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemAttribute {
  /**
   * ID of attribute.
   */
  attribute_id?: number;
  attribute_value_list?: ShopeeAddGlobalItemAttributeValue[];
}

/**
 * ShopeeAddGlobalItemImageInfo sub-interface for ShopeeAddGlobalItemField
 */
export interface ShopeeAddGlobalItemImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
}

/**
 * ShopeeAddGlobalItemField sub-interface for ShopeeAddGlobalItemExtendedDescription
 */
export interface ShopeeAddGlobalItemField {
  /**
   * type of extended description field ：values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text， text information will be set by this field.
   */
  text?: string;
  /**
   * If field_type is image，image url will be set by this field.
   */
  image_info?: ShopeeAddGlobalItemImageInfo;
}

/**
 * ShopeeAddGlobalItemExtendedDescription sub-interface for ShopeeAddGlobalItemDescriptionInfo
 */
export interface ShopeeAddGlobalItemExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeAddGlobalItemField[];
}

/**
 * ShopeeAddGlobalItemDescriptionInfo sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description?: ShopeeAddGlobalItemExtendedDescription;
}

/**
 * ShopeeAddGlobalItemSellerStock sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemSellerStock {
  /**
   * location_id of stock
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeAddGlobalItemSizeChartInfo sub-interface for ShopeeAddGlobalItemRequest
 */
export interface ShopeeAddGlobalItemSizeChartInfo {
  /**
   * ID of size chart image. If you want to remove the image size chart of the item, please pass the "size_chart" empty. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Both CB shops and local shops are supported to set "size_chart".
   */
  size_chart?: string;
  /**
   * ID of template size chart. If you want to remove the template size chart of the item, please pass the "size_chart_id" as 0. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Both local shops and CB shops are supported to set "size_chart_id" now and seller need set the size_chart template in CBSC in advance
   */
  size_chart_id?: number;
}

/**
 * Request parameters for add_global_item
 *
 * Add global item. Only for China mainland sellers using China Seller Centre(CNSC). More details in https://shopee.cn/cooperate/46/53/926.
 */
export interface ShopeeAddGlobalItemRequest {
  /**
   * Category id of global item.
   */
  category_id: number;
  /**
   * Name of global item.
   */
  global_item_name: string;
  /**
   * Description of global item.
   */
  description: string;
  /**
   * Sku of global item.
   */
  global_item_sku?: string;
  /**
   * Image information of global item.
   */
  image?: ShopeeAddGlobalItemImage;
  /**
   * Original price of global item.
   */
  original_price: number;
  /**
   * Normal stock of global item.
   */
  normal_stock?: number;
  /**
   * Weight of global item.
   */
  weight: number;
  /**
   * Dimension information of global item.
   */
  dimension?: ShopeeAddGlobalItemDimension;
  /**
   * Preorder information of global item.
   */
  pre_order: ShopeeAddGlobalItemPreOrder;
  /**
   * Condition of global item, USED、Used and used will be mapped to Used; NEW、New and new will be mapped to New.
   */
  condition: string;
  /**
   * Video upload id of global item. Only accept one video_upload_id at most.
   */
  video_upload_id?: string[];
  brand?: ShopeeAddGlobalItemBrand;
  /**
   * Item attributes.
   */
  attribute_list?: ShopeeAddGlobalItemAttribute[];
  /**
   * New description field. New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeAddGlobalItemDescriptionInfo;
  /**
   * Values: See Data Definition- description_type (normal , extended). If you want to use extended_description, this field must be inputed
   */
  description_type?: string;
  /**
   * seller_stock of global item.
   */
  seller_stock?: ShopeeAddGlobalItemSellerStock[];
  /**
   * category recommendation service id
   */
  ds_cat_rcmd_id?: string;
  size_chart_info?: ShopeeAddGlobalItemSizeChartInfo;
}

/**
 * ShopeeAddGlobalModelSellerStock sub-interface for ShopeeAddGlobalModelGlobalModel
 */
export interface ShopeeAddGlobalModelSellerStock {
  /**
   * location_id of stock, if the merchant has 3PF shop, the location_id cannot be empty, can use the get_merchant_warehouse_location_list API to obtain the location_id list of the merchant, if the merchant does not have 3PF shop (only has normal CBSC shop), the location_id can be empty
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeAddGlobalModelDimension sub-interface for ShopeeAddGlobalModelGlobalModel
 */
export interface ShopeeAddGlobalModelDimension {
  /**
   * The height of package for this global model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this global model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this global model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeAddGlobalModelPreOrder sub-interface for ShopeeAddGlobalModelGlobalModel
 */
export interface ShopeeAddGlobalModelPreOrder {
  /**
   * Days to ship. Please get the days_to_ship range from the get_dts_limit API.
   */
  days_to_ship: number;
}

/**
 * ShopeeAddGlobalModelGlobalModel sub-interface for ShopeeAddGlobalModelRequest
 */
export interface ShopeeAddGlobalModelGlobalModel {
  /**
   * Sku of global model. model_sku length information needs to be no more than 100 characters.
   */
  global_model_sku?: string;
  /**
   * Tier index of global model.
   */
  tier_index: number[];
  /**
   * seller_stock of global item
   */
  seller_stock?: ShopeeAddGlobalModelSellerStock[];
  /**
   * Original price of global item.
   */
  original_price: number;
  /**
   * The weight of this global model, the unit is KG.If don't set the weight of this global model, will use the weight of global item by default.If set the dimension of this global model, them must set the weight of this global model.
   */
  weight?: number;
  /**
   * The dimension of this global model.If don't set the dimension of this global model, will use the dimension of global item by default.
   */
  dimension?: ShopeeAddGlobalModelDimension;
  /**
   * Pre-order information of this global model.Notes: If don't set the DTS of this global model, will use the DTS of the global item by default.
   */
  pre_order?: ShopeeAddGlobalModelPreOrder;
}

/**
 * Request parameters for add_global_model
 *
 * Add global model. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeAddGlobalModelRequest {
  /**
   * ID of global item.
   */
  global_item_id: number;
  /**
   * Global model setting list. Limit is  [1,50].
   */
  global_model: ShopeeAddGlobalModelGlobalModel[];
}

/**
 * Request parameters for category_recommend
 *
 * Recommend category by item name. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeCategoryRecommendRequest {
  /**
   * name of item
   */
  global_item_name: string;
  /**
   * Please use the image id returned by v2.media_space.upload_image api, we will ignore if this field is empty string
   */
  global_product_cover_image?: string;
}

/**
 * ShopeeCreatePublishTaskImage sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskImage {
  /**
   * Image id list of item.
   */
  image_id_list: string[];
}

/**
 * ShopeeCreatePublishTaskModel sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskModel {
  /**
   * Tier index of model.
   */
  tier_index: number[];
  /**
   * Original price of model. If you upload this field, we will take your value, so you should pass the value in local currency, if you don't upload this field, Shopee will automatically calculate the price.
   */
  original_price: number;
  /**
   * can be "NORMAL" or "UNAVAILABLE". Normal models can be sold on the buyer's side, and UNAVAILABLE models cannot be sold on the buyer's side. If you do not upload this field, the model status will be considered as "NORMAL".
   */
  model_status?: string;
}

/**
 * ShopeeCreatePublishTaskLogistic sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskLogistic {
  /**
   * Logistic id.
   */
  logistic_id: number;
  /**
   * If this logistic channel is enabled.
   */
  enabled: boolean;
  /**
   * Shipping fee.
   */
  shipping_fee?: number;
  /**
   * Size id.
   */
  size_id?: number;
  /**
   * If this logistic channel is free.
   */
  is_free?: boolean;
}

/**
 * ShopeeCreatePublishTaskPreOrder sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskPreOrder {
  /**
   * If this item is preorder.
   */
  is_pre_order: boolean;
  /**
   * Days to ship, it's mandatory if is_pre_order is true.
   */
  days_to_ship?: number;
}

/**
 * ShopeeCreatePublishTaskImageInfo sub-interface for ShopeeCreatePublishTaskField
 */
export interface ShopeeCreatePublishTaskImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
}

/**
 * ShopeeCreatePublishTaskField sub-interface for ShopeeCreatePublishTaskExtendedDescription
 */
export interface ShopeeCreatePublishTaskField {
  /**
   * Type of extended description field ：values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text， text information will be set by this field.
   */
  text?: string;
  /**
   * If field_type is image，image url will be set by this field.
   */
  image_info?: ShopeeCreatePublishTaskImageInfo;
}

/**
 * ShopeeCreatePublishTaskExtendedDescription sub-interface for ShopeeCreatePublishTaskDescriptionInfo
 */
export interface ShopeeCreatePublishTaskExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeCreatePublishTaskField[];
}

/**
 * ShopeeCreatePublishTaskDescriptionInfo sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description?: ShopeeCreatePublishTaskExtendedDescription;
}

/**
 * ShopeeCreatePublishTaskVariationOption sub-interface for ShopeeCreatePublishTaskStandardiseTierVariation
 */
export interface ShopeeCreatePublishTaskVariationOption {
  variation_option_id?: number;
  variation_option_name?: string;
  image_id?: string;
}

/**
 * ShopeeCreatePublishTaskStandardiseTierVariation sub-interface for ShopeeCreatePublishTaskItem
 */
export interface ShopeeCreatePublishTaskStandardiseTierVariation {
  variation_id?: number;
  variation_name?: string;
  variation_group_id?: number;
  variation_option_list?: ShopeeCreatePublishTaskVariationOption[];
}

/**
 * ShopeeCreatePublishTaskItem sub-interface for ShopeeCreatePublishTaskRequest
 */
export interface ShopeeCreatePublishTaskItem {
  /**
   * Name of item. If you upload this field, we will take your value, so you should pass the value in the local language, if you don't upload this field, Shopee will automatically translate your global product name into the local language.
   */
  item_name?: string;
  /**
   * Description of item. If you upload this field, we will take your value, so you should pass the value in the local language, if you don't upload this field, Shopee will automatically translate your global product description into the local language.
   */
  description?: string;
  /**
   * Status of item.
   */
  item_status?: string;
  /**
   * Original price of item.For SG/MY/BR/MX/PL/ES/AR seller: Sellers can set the price with two decimal place, other regions can only set the price as an integer. If you upload this field, we will take your value, so you should pass the value in local currency, if you don't upload this field, Shopee will automatically calculate the price.
   */
  original_price?: number;
  /**
   * Image information of item.
   */
  image?: ShopeeCreatePublishTaskImage;
  /**
   * Model information of item.
   */
  model?: ShopeeCreatePublishTaskModel[];
  /**
   * Size chart of item. Only support image_id for now
   */
  size_chart?: string;
  /**
   * Logistic information of item.
   */
  logistic?: ShopeeCreatePublishTaskLogistic[];
  /**
   * Preorder information of item.
   */
  pre_order?: ShopeeCreatePublishTaskPreOrder;
  /**
   * New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal. If you upload this field, we will take your value, so you should pass the value in the local language, if you don't upload this field, Shopee will automatically translate your global product description into the local language.
   */
  description_info?: ShopeeCreatePublishTaskDescriptionInfo;
  standardise_tier_variation?: ShopeeCreatePublishTaskStandardiseTierVariation[];
}

/**
 * Request parameters for create_publish_task
 *
 * Create publish task for global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeCreatePublishTaskRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Id of shop to publish to.
   */
  shop_id: number;
  /**
   * Region of shop.
   */
  shop_region: string;
  /**
   * Item information.
   */
  item?: ShopeeCreatePublishTaskItem;
}

/**
 * Request parameters for delete_global_item
 *
 * Delete global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeDeleteGlobalItemRequest {
  /**
   * The id of global item to delete.
   */
  global_item_id: number;
}

/**
 * Request parameters for delete_global_model
 *
 * Delete global model. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeDeleteGlobalModelRequest {
  /**
   * Shopee's unique identifier for an global item.
   */
  global_item_id: number;
  /**
   * Shopee's unique identifier for an global model.
   */
  global_model_id: number;
}

/**
 * Request parameters for get_attribute_tree
 *
 * Get the mtsku attribute trees for categories
 */
export interface ShopeeGetAttributeTreeRequest {
  /**
   * Max count is 20
   */
  category_id_list: number[];
  /**
   * LanguageSupport Lanuage:"SG": [ "en", "zh-Hans", "ms" ], "MY": [ "en", "zh-Hans", "ms" ],"PH": [ "en", "zh-Hans" ],"VN": [ "vn", "en" ],"ID": [ "id", "en" ],"TH": [ "th", "en" ],"BR": [ "pt-BR", "en" ],"MX": [ "es-MX", "en" ],"CO": [ "es-CO", "en" ],"CL": [ "es-CL", "en" ],"TW": [ "zh-Hant", "zh-Hans", "en" ],"IN": [ "en", "hi" ]
   */
  language?: string;
}

/**
 * Request parameters for get_brand_list
 *
 * Use this call to get a list of brand. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetBrandListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0. if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * the size of one page.
   */
  page_size: number;
  /**
   * ID of category.
   */
  category_id: number;
  /**
   * Brand status , 1: normal brand, 2: pending brand.
   */
  status: number;
}

/**
 * Request parameters for get_category
 *
 * Get global category. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetCategoryRequest {
  /**
   * Display language. Language should be one of "zh-hans", "en"
   */
  language?: string;
}

/**
 * Request parameters for get_global_item_id
 *
 * Get get_global_item_id by item_id. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetGlobalItemIdRequest {
  /**
   * Id of shop.
   */
  shop_id: number;
  /**
   * Item id list. Length limit is [1,20].
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_global_item_info
 *
 * Get global item info.Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetGlobalItemInfoRequest {
  /**
   * Global item id list. Length limit is [1,20].
   */
  global_item_id_list: number[];
}

/**
 * Request parameters for get_global_item_limit
 *
 * Get global item upload control.
 */
export interface ShopeeGetGlobalItemLimitRequest {
  category_id?: number;
}

/**
 * ShopeeGetGlobalItemLimitSizeChartLimit sub-interface for ShopeeGetGlobalItemLimitResponse
 */
export interface ShopeeGetGlobalItemLimitSizeChartLimit {
  size_chart_mandatory?: boolean;
  support_image_size_chart?: boolean;
  support_template_size_chart?: boolean;
}

/**
 * Request parameters for get_global_item_list
 *
 * Get global item id list. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetGlobalItemListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is null. if data is more than one page, the offset can be some entry to start next call.
   */
  offset?: string;
  /**
   * The size of one page. Limit is [1,50].
   */
  page_size: number;
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the item update time). The update_time_from field is the starting date range.
   */
  update_time_from?: number;
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the item update time). The update_time_to field is the ending date range
   */
  update_time_to?: number;
}

/**
 * Request parameters for get_global_model_list
 *
 * Get global model list. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetGlobalModelListRequest {
  /**
   * The id of global item.
   */
  global_item_id: number;
}

/**
 * Request parameters for get_local_adjustment_rate
 *
 * Retrieves the adjustment rate that converts CB stock price into local-warehouse price for a specific shop.
 */
export interface ShopeeGetLocalAdjustmentRateRequest {
  /**
   * The unique identifier of the shop whose adjustment rate is being queried
   */
  shop_id: number;
}

/**
 * Request parameters for get_publish_task_result
 *
 * Get publish task result for global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetPublishTaskResultRequest {
  /**
   * Id of publish task.
   */
  publish_task_id: number;
}

/**
 * Request parameters for get_publishable_shop
 *
 * Get publishable shop list for global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetPublishableShopRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Shop id list for checking if the shop is publishable.If not input the list, will return the first 300 publishable shop list in response
   */
  shop_id_list?: number[];
}

/**
 * Request parameters for get_published_list
 *
 * Get published item list of global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetPublishedListRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Shop id list for checking if the shop is publishable.If not input the list, will return the first 300 publishable shop list in response after the migration period.
   */
  shop_id_list?: number[];
}

/**
 * Request parameters for get_recommend_attribute
 *
 * Get recommend attributes. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeGetRecommendAttributeRequest {
  /**
   * Name of item.
   */
  global_item_name: string;
  /**
   * ID of category.
   */
  category_id: number;
  /**
   * ID of image.
   */
  cover_image_id?: string;
}

/**
 * Request parameters for get_shop_publishable_status
 *
 * Get publishable shop list for global item in pages.
 */
export interface ShopeeGetShopPublishableStatusRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0. if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * the size of one page.Max=100
   */
  page_size: number;
}

/**
 * Request parameters for get_size_chart_detail
 *
 * Get new size chart detail
 */
export interface ShopeeGetSizeChartDetailRequest {
  size_chart_id: number;
  /**
   * language should be in the list: ["en", "zh-Hans"]
   */
  language?: string;
}

/**
 * Request parameters for get_size_chart_list
 *
 * Get size chart list
 */
export interface ShopeeGetSizeChartListRequest {
  category_id: number;
  page_size: number;
  cursor: string;
}

/**
 * Request parameters for get_variations
 *
 * Get the standardized tier variation defined by Shopee, which is currently a three-layer tree structure. The top layer is variations, the second layer is groups, groups are used to divide options, and the third layer is options.
 */
export interface ShopeeGetVariationsRequest {
  /**
   * Leaf category id
   */
  category_id: number;
}

/**
 * ShopeeInitTierVariationSellerStock sub-interface for ShopeeInitTierVariationGlobalModel
 */
export interface ShopeeInitTierVariationSellerStock {
  /**
   * location_id of stock, if the merchant has 3PF shop, the location_id cannot be empty, can use the get_merchant_warehouse_location_list API to obtain the location_id list of the merchant, if the merchant does not have 3PF shop (only has normal CBSC shop), the location_id can be empty
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeInitTierVariationDimension sub-interface for ShopeeInitTierVariationGlobalModel
 */
export interface ShopeeInitTierVariationDimension {
  /**
   * The height of package for this global model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this global model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this global model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeInitTierVariationPreOrder sub-interface for ShopeeInitTierVariationGlobalModel
 */
export interface ShopeeInitTierVariationPreOrder {
  /**
   * Days to ship. Please get the days_to_ship range from the get_dts_limit API.
   */
  days_to_ship: number;
}

/**
 * ShopeeInitTierVariationGlobalModel sub-interface for ShopeeInitTierVariationRequest
 */
export interface ShopeeInitTierVariationGlobalModel {
  /**
   * Original price of global model.
   */
  original_price: number;
  /**
   * seller_stock of global item
   */
  seller_stock?: ShopeeInitTierVariationSellerStock[];
  /**
   * Sku of global model. model_sku length information needs to be no more than 100 characters.
   */
  global_model_sku?: string;
  /**
   * Tier index of global model. Index starts from 0.If you want to update one tier/two tier to no tier, can just pass the tier_variation and standardise_tier_variation as [], and pass the global_model >> tier_index as [], meanwhile pass the original_price, seller_stock, etc., to set the price and stock for the modified product with no tier structure.
   */
  tier_index: ShopeeTierIndex | string | number;
  /**
   * The weight of this global model, the unit is KG.If don't set the weight of this global model, will use the weight of global item by default.If set the dimension of this global model, them must set the weight of this global model.
   */
  weight?: number;
  /**
   * The dimension of this global model.If don't set the dimension of this global model, will use the dimension of global item by default.
   */
  dimension?: ShopeeInitTierVariationDimension;
  /**
   * Pre-order information of this global model.Notes: If don't set the DTS of this global model, will use the DTS of the global item by default.
   */
  pre_order?: ShopeeInitTierVariationPreOrder;
}

/**
 * ShopeeInitTierVariationVariationOption sub-interface for ShopeeInitTierVariationStandardiseTierVariation
 */
export interface ShopeeInitTierVariationVariationOption {
  /**
   * standardise tier variation option ID
   */
  variation_option_id: number;
  /**
   * standardise tier variation option value
   */
  variation_option_name?: string;
  /**
   * standardise tier variation option image ID
   */
  image_id?: string;
}

/**
 * ShopeeInitTierVariationStandardiseTierVariation sub-interface for ShopeeInitTierVariationRequest
 */
export interface ShopeeInitTierVariationStandardiseTierVariation {
  /**
   * standardise tier variation ID
   */
  variation_id: number;
  /**
   * standardise tier variation name
   */
  variation_name?: string;
  /**
   * standardise tier variation group ID
   */
  variation_group_id?: number;
  /**
   * standardise tier variation option list
   */
  variation_option_list: ShopeeInitTierVariationVariationOption[];
}

/**
 * Request parameters for init_tier_variation
 *
 * Only for China mainland sellers and Korean sellers. If you only define color, it is one tier, if you define color and size, it is two tier. Support two tier structures at most. This API can change no tier to one tier, no tier to two tier, one tier to two tier, two tier to one tier, one tier to no tier, two tier to no tier. Please create variants after an interval of 5 seconds after creating an item, as there may be a delay.
 */
export interface ShopeeInitTierVariationRequest {
  /**
   * Model info list, model number at most 50
   */
  global_model: ShopeeInitTierVariationGlobalModel[];
  /**
   * ID of global item.
   */
  global_item_id: number;
  /**
   * There is at least one standardise_tier_variation and tier_variation.If you want to update one tier/two tier to no tier, can just pass the tier_variation and standardise_tier_variation as [], and pass the global_model >> tier_index as [], meanwhile pass the original_price, seller_stock, etc., to set the price and stock for the modified product with no tier structure.
   */
  standardise_tier_variation?: ShopeeInitTierVariationStandardiseTierVariation[];
}

/**
 * Request parameters for search_global_attribute_value_list
 *
 * this api is for searching attribute value list for attribute with support_search_value flag
 */
export interface ShopeeSearchGlobalAttributeValueListRequest {
  attribute_id: number;
  value_name?: string;
  cursor: number;
  /**
   * The range is 1 to 100
   */
  limit: number;
}

/**
 * ShopeeSetSyncFieldShopSync sub-interface for ShopeeSetSyncFieldRequest
 */
export interface ShopeeSetSyncFieldShopSync {
  /**
   * Id of shop.
   */
  shop_id: number;
  /**
   * TW TH MY BR IN SG VN
   */
  shop_region: string;
  /**
   * sync name and description
   */
  name_and_description: boolean;
  /**
   * sync media information
   */
  media_information: boolean;
  /**
   * sync tier variation
   */
  tier_variation_name_and_option: boolean;
  /**
   * sync price
   */
  price: boolean;
  /**
   * sync days to ship info
   */
  days_to_ship: boolean;
}

/**
 * Request parameters for set_sync_field
 *
 * Set auto sync field. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeSetSyncFieldRequest {
  /**
   * Length limit is [1,50].
   */
  shop_sync_list: ShopeeSetSyncFieldShopSync[];
}

/**
 * Request parameters for support_size_chart
 *
 * Get category support size chart. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeSupportSizeChartRequest {
  /**
   * Id of category.
   */
  category_id: number;
}

/**
 * ShopeeUpdateGlobalItemDimension sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemDimension {
  /**
   * The length of package for this global item, the unit is CM.
   */
  package_length?: number;
  /**
   * The width of package for this global item, the unit is CM.
   */
  package_width?: number;
  /**
   * The height of package for this global item, the unit is CM.
   */
  package_height?: number;
}

/**
 * ShopeeUpdateGlobalItemPreOrder sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemPreOrder {
  /**
   * Days to ship.
   */
  days_to_ship: number;
}

/**
 * ShopeeUpdateGlobalItemImage sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemImage {
  /**
   * Image id list of global item.
   */
  image_id_list: string[];
}

/**
 * ShopeeUpdateGlobalItemBrand sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemBrand {
  /**
   * Id of brand.
   */
  brand_id?: number;
}

/**
 * ShopeeUpdateGlobalItemAttributeValue sub-interface for ShopeeUpdateGlobalItemAttribute
 */
export interface ShopeeUpdateGlobalItemAttributeValue {
  /**
   * ID of attribute value. In the following cases, the value id needs to be uploaded as 0, and original_value_name is mandatory, needs to be filled in customized value. (1) AttributeInputType is TEXT_FILED; (2) AttributeInputType is COMBO_BOX or MULTIPLE_SELECT_COMBO_BOX, and the seller want to fill in a customized value.
   */
  value_id?: number;
  /**
   * Name of attribute value. original_value_name from global_product.get_attributes api. If value id=0, this field is required. If AttributeType is DATE_TYPE or TIMESTAMP_TYPE, you can upload timestamp(string type) as the original_value_name.
   */
  original_value_name?: string;
  /**
   * Unit of attribute value.(quantitative attribute only)
   */
  value_unit?: string;
}

/**
 * ShopeeUpdateGlobalItemAttribute sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemAttribute {
  /**
   * ID of attribute.
   */
  attribute_id?: number;
  attribute_value_list?: ShopeeUpdateGlobalItemAttributeValue[];
}

/**
 * ShopeeUpdateGlobalItemImageInfo sub-interface for ShopeeUpdateGlobalItemField
 */
export interface ShopeeUpdateGlobalItemImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
}

/**
 * ShopeeUpdateGlobalItemField sub-interface for ShopeeUpdateGlobalItemExtendedDescription
 */
export interface ShopeeUpdateGlobalItemField {
  /**
   * Type of extended description field ：values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text, text information will be set by this field.
   */
  text?: string;
  /**
   * If field_type is image, image url will be set by this field.
   */
  image_info?: ShopeeUpdateGlobalItemImageInfo;
}

/**
 * ShopeeUpdateGlobalItemExtendedDescription sub-interface for ShopeeUpdateGlobalItemDescriptionInfo
 */
export interface ShopeeUpdateGlobalItemExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeUpdateGlobalItemField[];
}

/**
 * ShopeeUpdateGlobalItemDescriptionInfo sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description?: ShopeeUpdateGlobalItemExtendedDescription;
}

/**
 * ShopeeUpdateGlobalItemSizeChartInfo sub-interface for ShopeeUpdateGlobalItemRequest
 */
export interface ShopeeUpdateGlobalItemSizeChartInfo {
  /**
   * ID of size chart image. If you want to remove the image size chart of the item, please pass the "size_chart" empty. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Both CB shops and local shops are supported to set "size_chart".
   */
  size_chart?: string;
  /**
   * ID of template size chart. If you want to remove the template size chart of the item, please pass the "size_chart_id" as 0. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Both local shops and CB shops are supported to set "size_chart_id" now and seller need set the size_chart template in CBSC in advance
   */
  size_chart_id?: number;
}

/**
 * Request parameters for update_global_item
 *
 * Update global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeUpdateGlobalItemRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Category id of global item.
   */
  category_id?: number;
  /**
   * Name of global item.
   */
  global_item_name?: string;
  /**
   * Description of global item.
   */
  description?: string;
  /**
   * Sku of global item.
   */
  global_item_sku?: string;
  /**
   * The weight of this global item, the unit is KG.Updating the weight of this global item will overwrite the weight of all global models under this global item.
   */
  weight?: number;
  /**
   * The dimension of this global item.Updating the dimension of this global item will overwrite the dimension of all global models under this global item.
   */
  dimension?: ShopeeUpdateGlobalItemDimension;
  /**
   * Preorder information of global item.Updating the DTS of global item will overwrite the DTS of all global models under the global item
   */
  pre_order?: ShopeeUpdateGlobalItemPreOrder;
  /**
   * Condition of global item, "NEW" or "USED" is available.
   */
  condition?: string;
  /**
   * Image information of global item.
   */
  image?: ShopeeUpdateGlobalItemImage;
  /**
   * Video upload id of global item.
   */
  video_upload_id?: string[];
  brand?: ShopeeUpdateGlobalItemBrand;
  /**
   * Item attributes.
   */
  attribute_list?: ShopeeUpdateGlobalItemAttribute[];
  /**
   * New description field. New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeUpdateGlobalItemDescriptionInfo;
  /**
   * Values: See Data Definition- description_type (normal , extended). If you want to use extended_description or change description type ,this field must be inputed
   */
  description_type?: string;
  size_chart_info?: ShopeeUpdateGlobalItemSizeChartInfo;
}

/**
 * ShopeeUpdateGlobalModelDimension sub-interface for ShopeeUpdateGlobalModelGlobalModel
 */
export interface ShopeeUpdateGlobalModelDimension {
  /**
   * The height of package for this global model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this global model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this global model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeUpdateGlobalModelPreOrder sub-interface for ShopeeUpdateGlobalModelGlobalModel
 */
export interface ShopeeUpdateGlobalModelPreOrder {
  /**
   * Days to ship. Please get the days_to_ship range from the get_dts_limit API.
   */
  days_to_ship: number;
}

/**
 * ShopeeUpdateGlobalModelGlobalModel sub-interface for ShopeeUpdateGlobalModelRequest
 */
export interface ShopeeUpdateGlobalModelGlobalModel {
  /**
   * Sku of global model.
   */
  global_model_sku: string;
  /**
   * ID of global model.
   */
  global_model_id: number;
  /**
   * The weight of this global model, the unit is KG.If don't set the weight of this global model, will use the weight of global item by default.If set the dimension of this global model, them must set the weight of this global model.
   */
  weight?: number;
  /**
   * The dimension of this global model.If don't set the dimension of this global model, will use the dimension of global item by default.
   */
  dimension?: ShopeeUpdateGlobalModelDimension;
  /**
   * Pre-order information of this global model.Notes: If don't set the DTS of this global model, will use the DTS of the global item by default.
   */
  pre_order?: ShopeeUpdateGlobalModelPreOrder;
}

/**
 * Request parameters for update_global_model
 *
 * Update global model. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeUpdateGlobalModelRequest {
  /**
   * ID of global item.
   */
  global_item_id: number;
  /**
   * Sku setting for global model. Limit is [1,50].
   */
  global_model: ShopeeUpdateGlobalModelGlobalModel[];
}

/**
 * Request parameters for update_local_adjustment_rate
 *
 * A multiplier that automatically converts your CB stock price into the local-warehouse price. It ensures your local inventory prices reflect regional costs, currency factors, and margin targets.
 */
export interface ShopeeUpdateLocalAdjustmentRateRequest {
  /**
   * The multiplier used to adjust the cross-border original price to local price
   */
  adjustment_rate: number;
  /**
   * The unique identifier of the shop to which the adjustment rate applies
   */
  shop_id: number;
}

/**
 * ShopeeUpdatePricePrice sub-interface for ShopeeUpdatePriceRequest
 */
export interface ShopeeUpdatePricePrice {
  /**
   * ID of global model.
   */
  global_model_id?: number;
  /**
   * Original price of global item.
   */
  original_price: number;
}

/**
 * Request parameters for update_price
 *
 * Update global price. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeUpdatePriceRequest {
  /**
   * ID of global item.
   */
  global_item_id: number;
  /**
   * Price setting for global model. Limit is [1,50].
   */
  price_list: ShopeeUpdatePricePrice[];
}

/**
 * Request parameters for update_size_chart
 *
 * Update size chart for global item. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeUpdateSizeChartRequest {
  /**
   * Id of global item.
   */
  global_item_id: number;
  /**
   * Image id of size chart.
   */
  size_chart: string;
}

/**
 * ShopeeUpdateStockSellerStock sub-interface for ShopeeUpdateStockStock
 */
export interface ShopeeUpdateStockSellerStock {
  /**
   * location_id of stock, if the merchant has 3PF shop, the location_id cannot be empty, can use the get_merchant_warehouse_location_list API to obtain the location_id list of the merchant, if the merchant does not have 3PF shop (only has normal CBSC shop), the location_id can be empty
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeUpdateStockStock sub-interface for ShopeeUpdateStockRequest
 */
export interface ShopeeUpdateStockStock {
  /**
   * ID of global model.
   */
  global_model_id?: number;
  seller_stock?: ShopeeUpdateStockSellerStock[];
}

/**
 * Request parameters for update_stock
 *
 * Update global stock. Only for China mainland sellers and Korean sellers.
 */
export interface ShopeeUpdateStockRequest {
  /**
   * ID of global item.
   */
  global_item_id: number;
  /**
   * Stock setting for global model. Limit is [1,50].
   */
  stock_list: ShopeeUpdateStockStock[];
}

/**
 * ShopeeUpdateTierVariationModel sub-interface for ShopeeUpdateTierVariationRequest
 */
export interface ShopeeUpdateTierVariationModel {
  /**
   * ID of model
   */
  model_id: number;
  /**
   * Model's tier_variation
   */
  tier_index: number;
}

/**
 * ShopeeUpdateTierVariationVariationOption sub-interface for ShopeeUpdateTierVariationStandardiseTierVariation
 */
export interface ShopeeUpdateTierVariationVariationOption {
  variation_option_id: number;
  variation_option_name?: string;
  image_id?: string;
}

/**
 * ShopeeUpdateTierVariationStandardiseTierVariation sub-interface for ShopeeUpdateTierVariationRequest
 */
export interface ShopeeUpdateTierVariationStandardiseTierVariation {
  /**
   * standardise tier variation ID
   */
  variation_id: number;
  /**
   * standardise tier variation name
   */
  variation_name?: string;
  /**
   * standardise tier variation group ID
   */
  variation_group_id?: number;
  /**
   * standardise tier variation option list
   */
  variation_option_list: ShopeeUpdateTierVariationVariationOption[];
}

/**
 * Request parameters for update_tier_variation
 *
 * Update global product tier variation. Only for China mainland sellers and Korean sellers.This api can only be used without changing the tier structure, you can add options, delete options, and update the option image by this api.
 */
export interface ShopeeUpdateTierVariationRequest {
  /**
   * ID of global item.
   */
  global_item_id: number;
  model_list?: ShopeeUpdateTierVariationModel[];
  /**
   * item standardise tier variation There is at least one standardise_tier_variation and tier_variation
   */
  standardise_tier_variation?: ShopeeUpdateTierVariationStandardiseTierVariation[];
}
