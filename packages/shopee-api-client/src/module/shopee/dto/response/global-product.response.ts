import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddGlobalItemResponseData sub-interface for ShopeeAddGlobalItemResponse
 */
export interface ShopeeAddGlobalItemResponseData {
  /**
   * Id of added global item.
   */
  global_item_id?: number;
}

/**
 * Response payload for add_global_item
 *
 * Add global item. Only for China mainland sellers using China Seller Centre(CNSC). More details in https://shopee.cn/cooperate/46/53/926.
 */
export type ShopeeAddGlobalItemResponse = ShopeeResponseCommon<ShopeeAddGlobalItemResponseData>;

/**
 * Response data payload for add_global_model
 */
export interface ShopeeAddGlobalModelResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for add_global_model
 *
 * Add global model. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeAddGlobalModelResponse = ShopeeResponseCommon<ShopeeAddGlobalModelResponseData>;

/**
 * ShopeeCategoryRecommendResponseData sub-interface for ShopeeCategoryRecommendResponse
 */
export interface ShopeeCategoryRecommendResponseData {
  /**
   * Shopee's unique identifier for a category.
   */
  category_id?: number[];
}

/**
 * Response payload for category_recommend
 *
 * Recommend category by item name. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeCategoryRecommendResponse = ShopeeResponseCommon<ShopeeCategoryRecommendResponseData>;

/**
 * ShopeeCreatePublishTaskResponseData sub-interface for ShopeeCreatePublishTaskResponse
 */
export interface ShopeeCreatePublishTaskResponseData {
  /**
   * The id of publish task.
   */
  publish_task_id?: number;
}

/**
 * Response payload for create_publish_task
 *
 * Create publish task for global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeCreatePublishTaskResponse = ShopeeResponseCommon<ShopeeCreatePublishTaskResponseData>;

/**
 * ShopeeDeleteGlobalItemFailureDeleteItem sub-interface for ShopeeDeleteGlobalItemResponseData
 */
export interface ShopeeDeleteGlobalItemFailureDeleteItem {
  /**
   * The id of shop corresponding to the related item failed to delete.
   */
  shop_id?: number;
  /**
   * The id of related item failed to delete.
   */
  item_id?: number;
}

/**
 * ShopeeDeleteGlobalItemResponseData sub-interface for ShopeeDeleteGlobalItemResponse
 */
export interface ShopeeDeleteGlobalItemResponseData {
  /**
   * If delete failed, this field shows the details.
   */
  failure_delete_item?: ShopeeDeleteGlobalItemFailureDeleteItem[];
}

/**
 * Response payload for delete_global_item
 *
 * Delete global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeDeleteGlobalItemResponse = ShopeeResponseCommon<ShopeeDeleteGlobalItemResponseData>;

/**
 * ShopeeDeleteGlobalModelFailure sub-interface for ShopeeDeleteGlobalModelResponseData
 */
export interface ShopeeDeleteGlobalModelFailure {
  /**
   * Failed shop id.
   */
  shop_id?: number;
  /**
   * Failed item id.
   */
  item_id?: number;
  /**
   * Failed model id.
   */
  model_id?: number;
}

/**
 * ShopeeDeleteGlobalModelResponseData sub-interface for ShopeeDeleteGlobalModelResponse
 */
export interface ShopeeDeleteGlobalModelResponseData {
  /**
   * Global model id.
   */
  global_model_id?: number;
  failures?: ShopeeDeleteGlobalModelFailure[];
}

/**
 * Response payload for delete_global_model
 *
 * Delete global model. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeDeleteGlobalModelResponse = ShopeeResponseCommon<ShopeeDeleteGlobalModelResponseData>;

/**
 * ShopeeGetAttributeTreeMultiLang sub-interface for ShopeeGetAttributeTreeAttributeValue
 */
export interface ShopeeGetAttributeTreeMultiLang {
  /**
   * Language
   */
  language?: string;
  /**
   * Translate result
   */
  value?: string;
}

/**
 * ShopeeGetAttributeTreeAttributeValue sub-interface for ShopeeGetAttributeTreeAttributeTree
 */
export interface ShopeeGetAttributeTreeAttributeValue {
  /**
   * Value ID
   */
  value_id?: number;
  /**
   * Value name
   */
  name?: string;
  /**
   * Value unit
   */
  value_unit?: string;
  /**
   * Child attributes for the value of parent attribute. The structure content is the same as attribute_tree (recursive).
   */
  child_attribute_list?: ShopeeGetAttributeTreeAttributeTree[];
  /**
   * Translate results for value name display
   */
  multi_lang?: ShopeeGetAttributeTreeMultiLang;
}

/**
 * ShopeeGetAttributeTreeAttributeInfo sub-interface for ShopeeGetAttributeTreeAttributeTree
 */
export interface ShopeeGetAttributeTreeAttributeInfo {
  /**
   * SINGLE_DROP_DOWN = 1SINGLE_COMBO_BOX = 2FREE_TEXT_FILED        = 3MULTI_DROP_DOWN   = 4MULTI_COMBO_BOX   = 5
   */
  input_type?: number;
  /**
   * VALIDATOR_NO_VALIDATE_TYPE =  0VALIDATOR_INT_TYPE = 1 VALIDATOR_STRING_TYPE = 2VALIDATOR_FLOAT_TYPE = 3 VALIDATOR_DATE_TYPE = 4
   */
  input_validation_type?: number;
  /**
   * FORMAT_NORMAL = 1FORMAT_QUANTITATIVE_WITH_UNIT = 2
   */
  format_type?: number;
  /**
   * YEAR_MONTH_DATE = 0 (DD/MM/YYYY)YEAR_MONTH = 1 (MM/YYYY)
   */
  date_format_type?: number;
  /**
   * Attribute's available units list
   */
  attribute_unit_list?: string[];
  /**
   * Attribute is mandatory for these regions
   */
  mandatory_region?: string[];
  /**
   * Max selected value count
   */
  max_value_count?: number;
  /**
   * introduction of special attribute
   */
  introduction?: string;
  is_oem?: boolean;
  /**
   * Indicates whether this attribute has searchable values.If yes, please call v2.global_product.search_global_attribute_value_list to get the default values
   */
  support_search_value?: boolean;
}

/**
 * ShopeeGetAttributeTreeAttributeTree sub-interface for ShopeeGetAttributeTreeList
 */
export interface ShopeeGetAttributeTreeAttributeTree {
  /**
   * Attribute ID
   */
  attribute_id?: number;
  /**
   * Is mandatory or not
   */
  mandatory?: boolean;
  /**
   * Attribute Name
   */
  name?: string;
  /**
   * All available values for this attribute
   */
  attribute_value_list?: ShopeeGetAttributeTreeAttributeValue[];
  /**
   * Attribute extra info
   */
  attribute_info?: ShopeeGetAttributeTreeAttributeInfo;
  /**
   * Translate result for attribute name display
   */
  multi_lang?: ShopeeGetAttributeTreeMultiLang[];
}

/**
 * ShopeeGetAttributeTreeList sub-interface for ShopeeGetAttributeTreeResponseData
 */
export interface ShopeeGetAttributeTreeList {
  /**
   * One category's attribute trees
   */
  attribute_tree?: ShopeeGetAttributeTreeAttributeTree[];
  /**
   * Category ID
   */
  category_id?: number;
  /**
   * Warning msg
   */
  warning?: string;
}

/**
 * ShopeeGetAttributeTreeResponseData sub-interface for ShopeeGetAttributeTreeResponse
 */
export interface ShopeeGetAttributeTreeResponseData {
  /**
   * Each result corresponds to one category in category_ids
   */
  list?: ShopeeGetAttributeTreeList[];
}

/**
 * Response payload for get_attribute_tree
 *
 * Get the mtsku attribute trees for categories
 */
export type ShopeeGetAttributeTreeResponse = ShopeeResponseCommon<ShopeeGetAttributeTreeResponseData>;

/**
 * ShopeeGetBrandListBrand sub-interface for ShopeeGetBrandListResponseData
 */
export interface ShopeeGetBrandListBrand {
  /**
   * Id of brand.
   */
  brand_id?: number;
  /**
   * Original name of brand
   */
  original_brand_name?: string;
  /**
   * Display name of brand
   */
  display_brand_name?: string;
}

/**
 * ShopeeGetBrandListResponseData sub-interface for ShopeeGetBrandListResponse
 */
export interface ShopeeGetBrandListResponseData {
  brand_list?: ShopeeGetBrandListBrand[];
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  has_next_page?: boolean;
  /**
   * If has_next_page is true, this value need set to next request.offset
   */
  next_offset?: number;
  /**
   * Whether is mandatory.
   */
  is_mandatory?: boolean;
  /**
   * Input type: DROP_DOWN
   */
  input_type?: string;
}

/**
 * Response payload for get_brand_list
 *
 * Use this call to get a list of brand. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetBrandListResponse = ShopeeResponseCommon<ShopeeGetBrandListResponseData>;

/**
 * ShopeeGetCategoryCategory sub-interface for ShopeeGetCategoryResponseData
 */
export interface ShopeeGetCategoryCategory {
  /**
   * ID for category.
   */
  category_id?: number;
  /**
   * ID for parent category.
   */
  parent_category_id?: number;
  /**
   * English category name.
   */
  original_category_name?: string;
  /**
   * Display category name, it depends on what language you have uploaded
   */
  display_category_name?: string;
  /**
   * Whether this category has active children category.
   */
  has_children?: boolean;
}

/**
 * ShopeeGetCategoryResponseData sub-interface for ShopeeGetCategoryResponse
 */
export interface ShopeeGetCategoryResponseData {
  category_list?: ShopeeGetCategoryCategory[];
}

/**
 * Response payload for get_category
 *
 * Get global category. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetCategoryResponse = ShopeeResponseCommon<ShopeeGetCategoryResponseData>;

/**
 * ShopeeGetGlobalItemIdItemIdMap sub-interface for ShopeeGetGlobalItemIdResponseData
 */
export interface ShopeeGetGlobalItemIdItemIdMap {
  /**
   * Id of item.
   */
  item_id?: number;
  /**
   * Id of global item.
   */
  global_item_id?: number;
}

/**
 * ShopeeGetGlobalItemIdResponseData sub-interface for ShopeeGetGlobalItemIdResponse
 */
export interface ShopeeGetGlobalItemIdResponseData {
  item_id_map?: ShopeeGetGlobalItemIdItemIdMap[];
}

/**
 * Response payload for get_global_item_id
 *
 * Get get_global_item_id by item_id. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetGlobalItemIdResponse = ShopeeResponseCommon<ShopeeGetGlobalItemIdResponseData>;

/**
 * ShopeeGetGlobalItemInfoStockInfo sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoStockInfo {
  /**
   * The stock type.
   */
  stock_type?: number;
  /**
   * location_id of the stock.
   */
  stock_location_id?: string;
  /**
   * The normal stock quantity of the variation in the listing currency.
   */
  normal_stock?: number;
  /**
   * The reserved stock quantity of the variation in the listing currency.
   */
  reserved_stock?: number;
}

/**
 * ShopeeGetGlobalItemInfoPriceInfo sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item in Shopee Listings.
   */
  currency?: string;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
  /**
   * SIP item price.
   */
  sip_item_price?: number;
  /**
   * source of sip' price. ( auto or manual).
   */
  sip_item_price_source?: string;
}

/**
 * ShopeeGetGlobalItemInfoImage sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoImage {
  /**
   * List of image url.
   */
  image_id_list?: string[];
  /**
   * List of image id.
   */
  image_url_list?: string[];
}

/**
 * ShopeeGetGlobalItemInfoDimension sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoDimension {
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
 * ShopeeGetGlobalItemInfoPreOrder sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoPreOrder {
  /**
   * Days to ship.
   */
  days_to_ship?: number;
}

/**
 * ShopeeGetGlobalItemInfoVideo sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoVideo {
  /**
   * Url of video.
   */
  video_url?: string;
  /**
   * Thumbnail of video.
   */
  thumbnail_url?: string;
  /**
   * Duration of video.
   */
  duration?: number;
}

/**
 * ShopeeGetGlobalItemInfoBrand sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoBrand {
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
 * ShopeeGetGlobalItemInfoAttributeValue sub-interface for ShopeeGetGlobalItemInfoAttribute
 */
export interface ShopeeGetGlobalItemInfoAttributeValue {
  /**
   * Unique identifier for value of this item attribute.
   */
  value_id?: number;
  /**
   * Value name of this item attribute.
   */
  original_value_name?: string;
  /**
   * Value unit of this item attribute.
   */
  value_unit?: string;
}

/**
 * ShopeeGetGlobalItemInfoAttribute sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoAttribute {
  /**
   * The Identify of each category.
   */
  attribute_id?: number;
  /**
   * The name of each attribute.
   */
  original_attribute_name?: string;
  attribute_value_list?: ShopeeGetGlobalItemInfoAttributeValue[];
}

/**
 * ShopeeGetGlobalItemInfoImageInfo sub-interface for ShopeeGetGlobalItemInfoField
 */
export interface ShopeeGetGlobalItemInfoImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
  /**
   * Image url.
   */
  image_url?: string;
}

/**
 * ShopeeGetGlobalItemInfoField sub-interface for ShopeeGetGlobalItemInfoExtendedDescription
 */
export interface ShopeeGetGlobalItemInfoField {
  /**
   * Type of extended description field: values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text, text information will be returned through this field.
   */
  text?: string;
  /**
   * If field_type is image, image url will be returned through this field.
   */
  image_info?: ShopeeGetGlobalItemInfoImageInfo;
}

/**
 * ShopeeGetGlobalItemInfoExtendedDescription sub-interface for ShopeeGetGlobalItemInfoDescriptionInfo
 */
export interface ShopeeGetGlobalItemInfoExtendedDescription {
  /**
   * Field of extended description
   */
  field_list?: ShopeeGetGlobalItemInfoField[];
}

/**
 * ShopeeGetGlobalItemInfoDescriptionInfo sub-interface for ShopeeGetGlobalItemInfoGlobalItem
 */
export interface ShopeeGetGlobalItemInfoDescriptionInfo {
  /**
   * If description_type is extended , Description information will be returned through this field.
   */
  extended_description?: ShopeeGetGlobalItemInfoExtendedDescription;
}

/**
 * ShopeeGetGlobalItemInfoGlobalItem sub-interface for ShopeeGetGlobalItemInfoResponseData
 */
export interface ShopeeGetGlobalItemInfoGlobalItem {
  /**
   * Shopee's unique identifier for an global item.
   */
  global_item_id?: number;
  /**
   * Name of the global item.
   */
  global_item_name?: string;
  /**
   * Description of the global item.
   */
  description?: string;
  /**
   * An global item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  global_item_sku?: string;
  /**
   * The current status of the item. You can only query global product with normal status, otherwise api will return error.
   */
  global_item_status?: string;
  /**
   * Timestamp that indicates the date and time that the global item was created.
   */
  create_time?: number;
  /**
   * Timestamp that indicates the last time that there was a change in value of the global item.
   */
  update_time?: number;
  /**
   * If the item has models, this field will not be returned, please get it through get_model_list api.
   */
  stock_info?: ShopeeGetGlobalItemInfoStockInfo[];
  /**
   * If the item has models, price_info will not be returned. Please get the price of each model through the get_global_model_list api.
   */
  price_info?: ShopeeGetGlobalItemInfoPriceInfo[];
  image?: ShopeeGetGlobalItemInfoImage;
  /**
   * The weight of this global item, the unit is KG.If set the weight of global models under this item, will return the max weight of all global models during the switching period to ensure system compatibility, please switch to call v2.global_product.get_global_model_list to get the weight of models.
   */
  weight?: string;
  /**
   * The dimension of this global item.If set the dimension of global models under this global item, will return the dimension with largest volume calculated by height*length*width during the switching period to ensure system compatibility, please switch to call v2.global_product.get_global_model_list to get the dimension of models.
   */
  dimension?: ShopeeGetGlobalItemInfoDimension;
  /**
   * If set the DTS of global models under this item, will return the max DTS of all global models during the switching period to ensure system compatibility, please switch to call v2.global_product.get_global_model_list to get the DTS of models.
   */
  pre_order?: ShopeeGetGlobalItemInfoPreOrder;
  /**
   * Url of size chart image.
   */
  size_chart?: string;
  /**
   * Is it second-hand.
   */
  condition?: string;
  /**
   * Does it contain model.
   */
  has_model?: boolean;
  video?: ShopeeGetGlobalItemInfoVideo;
  /**
   * Shopee's unique identifier for a category.
   */
  category_id?: number;
  brand?: ShopeeGetGlobalItemInfoBrand;
  attribute_list?: ShopeeGetGlobalItemInfoAttribute[];
  /**
   * New description field.New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeGetGlobalItemInfoDescriptionInfo;
  /**
   * Type of description : values: See Data Definition- description_type (normal , extended).
   */
  description_type?: string;
  /**
   * whether item is fulfillment by shopee
   */
  is_fulfillment_by_shopee?: boolean;
  /**
   * size_chart 模板ID
   */
  size_chart_id?: number;
}

/**
 * ShopeeGetGlobalItemInfoResponseData sub-interface for ShopeeGetGlobalItemInfoResponse
 */
export interface ShopeeGetGlobalItemInfoResponseData {
  global_item_list?: ShopeeGetGlobalItemInfoGlobalItem[];
}

/**
 * Response payload for get_global_item_info
 *
 * Get global item info.Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetGlobalItemInfoResponse = ShopeeResponseCommon<ShopeeGetGlobalItemInfoResponseData>;

/**
 * ShopeeGetGlobalItemLimitPriceLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitPriceLimit {
  /**
   * Global item price min limit.
   */
  min_limit?: number;
  /**
   * Global item price max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitStockLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitStockLimit {
  /**
   * Global item stock min limit.
   */
  min_limit?: number;
  /**
   * Global item stock max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitGlobalItemNameLengthLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitGlobalItemNameLengthLimit {
  /**
   * Global item name length min limit.
   */
  min_limit?: number;
  /**
   * Global item name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitGlobalItemImageCountLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitGlobalItemImageCountLimit {
  /**
   * Global item image count min limit.
   */
  min_limit?: number;
  /**
   * Global item image count max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitGlobalItemDescriptionLengthLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitGlobalItemDescriptionLengthLimit {
  /**
   * Global item description length min limit.
   */
  min_limit?: number;
  /**
   * Global item description length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitTierVariationNameLengthLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitTierVariationNameLengthLimit {
  /**
   * Global item tier variation name length min limit.
   */
  min_limit?: number;
  /**
   * Global item tier variation name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitTierVariationOptionLengthLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitTierVariationOptionLengthLimit {
  /**
   * Global item tier variation option length min limit.
   */
  min_limit?: number;
  /**
   * Global item tier variation option length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitExtendedDescriptionLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitExtendedDescriptionLimit {
  /**
   * length min limit for item extended description text part
   */
  description_text_length_min?: number;
  /**
   * length max limit for item extended description text part
   */
  description_text_length_max?: number;
  /**
   * length min limit for item extended description image num
   */
  description_image_num_min?: number;
  /**
   * length max limit for item extended description image num
   */
  description_image_num_max?: number;
  /**
   * length min limit for item extended description image width
   */
  description_image_width_min?: number;
  /**
   * length min limit for item extended description image hight
   */
  description_image_height_min?: number;
  /**
   * length min limit for item extended description image aspect (image width / image hight )
   */
  description_image_aspect_ratio_min?: number;
  /**
   * length max limit for item extended description image aspect (image width / image hight )
   */
  description_image_aspect_ratio_max?: number;
}

/**
 * ShopeeGetGlobalItemLimitDaysToShipRange sub-interface for ShopeeGetGlobalItemLimitDtsLimit
 */
export interface ShopeeGetGlobalItemLimitDaysToShipRange {
  min_limit?: number;
  max_limit?: number;
}

/**
 * ShopeeGetGlobalItemLimitDtsLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitDtsLimit {
  /**
   * Allowed limit scope for Pre order
   */
  days_to_ship_range_list?: ShopeeGetGlobalItemLimitDaysToShipRange[];
}

/**
 * ShopeeGetGlobalItemLimitWeightLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitWeightLimit {
  /**
   * weight is mandatory or not
   */
  weight_mandatory?: boolean;
}

/**
 * ShopeeGetGlobalItemLimitDimensionLimit sub-interface for ShopeeGetGlobalItemLimitResponseData
 */
export interface ShopeeGetGlobalItemLimitDimensionLimit {
  /**
   * dimension is mandatory or not for the category
   */
  dimension_mandatory?: boolean;
}

/**
 * ShopeeGetGlobalItemLimitResponseData sub-interface for ShopeeGetGlobalItemLimitResponse
 */
export interface ShopeeGetGlobalItemLimitResponseData {
  price_limit?: ShopeeGetGlobalItemLimitPriceLimit;
  stock_limit?: ShopeeGetGlobalItemLimitStockLimit;
  global_item_name_length_limit?: ShopeeGetGlobalItemLimitGlobalItemNameLengthLimit;
  global_item_image_count_limit?: ShopeeGetGlobalItemLimitGlobalItemImageCountLimit;
  global_item_description_length_limit?: ShopeeGetGlobalItemLimitGlobalItemDescriptionLengthLimit;
  tier_variation_name_length_limit?: ShopeeGetGlobalItemLimitTierVariationNameLengthLimit;
  tier_variation_option_length_limit?: ShopeeGetGlobalItemLimitTierVariationOptionLengthLimit;
  /**
   * Length ratio of Chinese characters to English characters in parameter verification. len(text)=len(Chinese characters)*text_length_multiplier+len(English characters )
   */
  text_length_multiplier?: number;
  extended_description_limit?: ShopeeGetGlobalItemLimitExtendedDescriptionLimit;
  dts_limit?: ShopeeGetGlobalItemLimitDtsLimit;
  weight_limit?: ShopeeGetGlobalItemLimitWeightLimit;
  dimension_limit?: ShopeeGetGlobalItemLimitDimensionLimit;
}

/**
 * Response payload for get_global_item_limit
 *
 * Get global item upload control.
 */
export type ShopeeGetGlobalItemLimitResponse = ShopeeResponseCommon<ShopeeGetGlobalItemLimitResponseData>;

/**
 * ShopeeGetGlobalItemListGlobalItem sub-interface for ShopeeGetGlobalItemListResponseData
 */
export interface ShopeeGetGlobalItemListGlobalItem {
  /**
   * Shopee's unique identifier for an global item.
   */
  global_item_id?: number;
  /**
   * Timestamp that indicates the last time that there was a change in value of the item, such as price/stock change.
   */
  update_time?: number;
}

/**
 * ShopeeGetGlobalItemListResponseData sub-interface for ShopeeGetGlobalItemListResponse
 */
export interface ShopeeGetGlobalItemListResponseData {
  global_item_list?: ShopeeGetGlobalItemListGlobalItem[];
  /**
   * Total global item count.
   */
  total_count?: number;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  has_next_page?: boolean;
  /**
   * If has_next_page is true, this value need set to next request.offset.
   */
  offset?: string;
}

/**
 * Response payload for get_global_item_list
 *
 * Get global item id list. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetGlobalItemListResponse = ShopeeResponseCommon<ShopeeGetGlobalItemListResponseData>;

/**
 * ShopeeGetGlobalModelListImage sub-interface for ShopeeGetGlobalModelListOption
 */
export interface ShopeeGetGlobalModelListImage {
  /**
   * Image url.
   */
  image_url?: string;
  /**
   * Id of image.
   */
  image_id?: string;
}

/**
 * ShopeeGetGlobalModelListOption sub-interface for ShopeeGetGlobalModelListTierVariation
 */
export interface ShopeeGetGlobalModelListOption {
  /**
   * Tier option.
   */
  option?: string;
  /**
   * Image information of tier.
   */
  image?: ShopeeGetGlobalModelListImage;
}

/**
 * ShopeeGetGlobalModelListTierVariation sub-interface for ShopeeGetGlobalModelListResponseData
 */
export interface ShopeeGetGlobalModelListTierVariation {
  /**
   * Tier name.
   */
  name?: string;
  /**
   * Tier option list for corresponding tier name.
   */
  option_list?: ShopeeGetGlobalModelListOption[];
}

/**
 * ShopeeGetGlobalModelListPriceInfo sub-interface for ShopeeGetGlobalModelListGlobalModel
 */
export interface ShopeeGetGlobalModelListPriceInfo {
  /**
   * Original price of global model.
   */
  original_price?: number;
}

/**
 * ShopeeGetGlobalModelListStockInfo sub-interface for ShopeeGetGlobalModelListGlobalModel
 */
export interface ShopeeGetGlobalModelListStockInfo {
  /**
   * Stock type. "1" means wms on hand, "2" means seller on hand.
   */
  stock_type?: number;
  /**
   * Stock location id.
   */
  stock_location_id?: string;
  /**
   * Current stock.
   */
  current_stock?: number;
  /**
   * Normal stock.
   */
  normal_stock?: number;
  /**
   * Reserved stock.
   */
  reserved_stock?: number;
}

/**
 * ShopeeGetGlobalModelListDimension sub-interface for ShopeeGetGlobalModelListGlobalModel
 */
export interface ShopeeGetGlobalModelListDimension {
  /**
   * The height of package for this global model, the unit is CM.
   */
  package_height?: number;
  /**
   * The length of package for this global model, the unit is CM.
   */
  package_length?: number;
  /**
   * The width of package for this global model, the unit is CM.
   */
  package_width?: number;
}

/**
 * ShopeeGetGlobalModelListPreOrder sub-interface for ShopeeGetGlobalModelListGlobalModel
 */
export interface ShopeeGetGlobalModelListPreOrder {
  /**
   * Days to ship.
   */
  days_to_ship?: number;
}

/**
 * ShopeeGetGlobalModelListGlobalModel sub-interface for ShopeeGetGlobalModelListResponseData
 */
export interface ShopeeGetGlobalModelListGlobalModel {
  /**
   * Id of global model.
   */
  global_model_id?: number;
  /**
   * Sku of global model.
   */
  global_model_sku?: string;
  /**
   * Price info of global model.
   */
  price_info?: ShopeeGetGlobalModelListPriceInfo;
  /**
   * Stock info of global model.
   */
  stock_info?: ShopeeGetGlobalModelListStockInfo[];
  /**
   * Tier index of global model.
   */
  tier_index?: number[];
  /**
   * The weight of this global model, the unit is KG.If don't set the weight of this global model, will use the weight of global item by default.
   */
  weight?: string;
  /**
   * The dimension of this global model.If don't set the dimension of this global model, will use the dimension of global item by default.
   */
  dimension?: ShopeeGetGlobalModelListDimension;
  /**
   * Pre-order information of this global model.Notes: If don't set the DTS of this global model, will use the DTS of the global item by default.
   */
  pre_order?: ShopeeGetGlobalModelListPreOrder;
  /**
   * If it it a FBS model
   */
  is_fulfillment_by_shopee?: boolean;
}

/**
 * ShopeeGetGlobalModelListVariationOption sub-interface for ShopeeGetGlobalModelListStandardiseTierVariation
 */
export interface ShopeeGetGlobalModelListVariationOption {
  /**
   * Standardise Tier variation Option ID.
   */
  variation_option_id?: number;
  /**
   * Standardise Tier variation Option Name.
   */
  variation_option_name?: string;
  /**
   * ID of image
   */
  image_id?: string;
  /**
   * URL of image
   */
  image_url?: string;
}

/**
 * ShopeeGetGlobalModelListStandardiseTierVariation sub-interface for ShopeeGetGlobalModelListResponseData
 */
export interface ShopeeGetGlobalModelListStandardiseTierVariation {
  /**
   * Standardise Tier variation ID.
   */
  variation_id?: number;
  /**
   * Standardise Tier variation Name.
   */
  variation_name?: string;
  /**
   * Standardise Tier variation Group ID.
   */
  variation_group_id?: number;
  /**
   * Standardise Tier variation Options List.
   */
  variation_option_list?: ShopeeGetGlobalModelListVariationOption[];
}

/**
 * ShopeeGetGlobalModelListResponseData sub-interface for ShopeeGetGlobalModelListResponse
 */
export interface ShopeeGetGlobalModelListResponseData {
  /**
   * Tier variation information of global item.
   */
  tier_variation?: ShopeeGetGlobalModelListTierVariation[];
  /**
   * Global models.
   */
  global_model?: ShopeeGetGlobalModelListGlobalModel[];
  /**
   * Standardise Tier variation information of global item.
   */
  standardise_tier_variation?: ShopeeGetGlobalModelListStandardiseTierVariation[];
}

/**
 * Response payload for get_global_model_list
 *
 * Get global model list. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetGlobalModelListResponse = ShopeeResponseCommon<ShopeeGetGlobalModelListResponseData>;

/**
 * ShopeeGetLocalAdjustmentRateResponseData sub-interface for ShopeeGetLocalAdjustmentRateResponse
 */
export interface ShopeeGetLocalAdjustmentRateResponseData {
  /**
   * The multiplier used to adjust the cross-border original price to local price
   */
  local_adjustment_rate?: number;
}

/**
 * Response payload for get_local_adjustment_rate
 *
 * Retrieves the adjustment rate that converts CB stock price into local-warehouse price for a specific shop.
 */
export type ShopeeGetLocalAdjustmentRateResponse = ShopeeResponseCommon<ShopeeGetLocalAdjustmentRateResponseData>;

/**
 * ShopeeGetPublishTaskResultSucces sub-interface for ShopeeGetPublishTaskResultResponseData
 */
export interface ShopeeGetPublishTaskResultSucces {
  /**
   * The region of published item.
   */
  region?: string;
  /**
   * The shop id of published item.
   */
  shop_id?: string;
  /**
   * The id of published item.
   */
  item_id?: string;
}

/**
 * ShopeeGetPublishTaskResultFailed sub-interface for ShopeeGetPublishTaskResultResponseData
 */
export interface ShopeeGetPublishTaskResultFailed {
  /**
   * Failed reason.
   */
  failed_reason?: string;
}

/**
 * ShopeeGetPublishTaskResultResponseData sub-interface for ShopeeGetPublishTaskResultResponse
 */
export interface ShopeeGetPublishTaskResultResponseData {
  /**
   * Status of publish task.
   */
  publish_status?: string;
  /**
   * If publish task is successful, this field shows the published results.
   */
  success?: ShopeeGetPublishTaskResultSucces;
  /**
   * If publish task is failed, this field shows the failed reason.
   */
  failed?: ShopeeGetPublishTaskResultFailed;
}

/**
 * Response payload for get_publish_task_result
 *
 * Get publish task result for global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetPublishTaskResultResponse = ShopeeResponseCommon<ShopeeGetPublishTaskResultResponseData>;

/**
 * ShopeeGetPublishableShopPublishableShop sub-interface for ShopeeGetPublishableShopResponseData
 */
export interface ShopeeGetPublishableShopPublishableShop {
  /**
   * Id of publishable shop.
   */
  shop_id?: number;
  /**
   * Region of published shop.
   */
  shop_region?: string;
}

/**
 * ShopeeGetPublishableShopResponseData sub-interface for ShopeeGetPublishableShopResponse
 */
export interface ShopeeGetPublishableShopResponseData {
  /**
   * Detail of publishable shops.
   */
  publishable_shop?: ShopeeGetPublishableShopPublishableShop[];
}

/**
 * Response payload for get_publishable_shop
 *
 * Get publishable shop list for global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetPublishableShopResponse = ShopeeResponseCommon<ShopeeGetPublishableShopResponseData>;

/**
 * ShopeeGetPublishedListPublishedItem sub-interface for ShopeeGetPublishedListResponseData
 */
export interface ShopeeGetPublishedListPublishedItem {
  /**
   * Shop id corresponding to the published item.
   */
  shop_id?: number;
  /**
   * Region of shop.
   */
  shop_region?: string;
  /**
   * Id of published item.
   */
  item_id?: number;
  /**
   * Status of published item.Applicable values: 0.DELETED(Item is deleted by seller himself),1.NORMAL, 2.BANNED,3.REVIEWING,4.INVALID(Shopee Admin deleted),5.INVALID_HIDE(Shopee Admin delete confirmed),6.BLACKLISTED(Offensive_hide),8.NORMAL_UNLIST
   */
  item_status?: number;
}

/**
 * ShopeeGetPublishedListResponseData sub-interface for ShopeeGetPublishedListResponse
 */
export interface ShopeeGetPublishedListResponseData {
  /**
   * Detail of published items.
   */
  published_item?: ShopeeGetPublishedListPublishedItem[];
}

/**
 * Response payload for get_published_list
 *
 * Get published item list of global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetPublishedListResponse = ShopeeResponseCommon<ShopeeGetPublishedListResponseData>;

/**
 * ShopeeGetRecommendAttributeAttributeValue sub-interface for ShopeeGetRecommendAttributeAttribute
 */
export interface ShopeeGetRecommendAttributeAttributeValue {
  /**
   * ID of attribute value.
   */
  value_id?: number;
}

/**
 * ShopeeGetRecommendAttributeAttribute sub-interface for ShopeeGetRecommendAttributeResponseData
 */
export interface ShopeeGetRecommendAttributeAttribute {
  /**
   * ID of attribute.
   */
  attribute_id?: number;
  /**
   * Value list of this attribute.
   */
  attribute_value_list?: ShopeeGetRecommendAttributeAttributeValue[];
}

/**
 * ShopeeGetRecommendAttributeResponseData sub-interface for ShopeeGetRecommendAttributeResponse
 */
export interface ShopeeGetRecommendAttributeResponseData {
  /**
   * Attribute info list.
   */
  attribute_list?: ShopeeGetRecommendAttributeAttribute[];
}

/**
 * Response payload for get_recommend_attribute
 *
 * Get recommend attributes. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeGetRecommendAttributeResponse = ShopeeResponseCommon<ShopeeGetRecommendAttributeResponseData>;

/**
 * ShopeeGetShopPublishableStatusShopPublishableStatus sub-interface for ShopeeGetShopPublishableStatusResponseData
 */
export interface ShopeeGetShopPublishableStatusShopPublishableStatus {
  /**
   * Id of publishable shop.
   */
  shop_id?: number;
  /**
   * Region of published shop.
   */
  region?: string;
  /**
   * If the shop is publishable, ture means shop is publishable, fals means shop is unpublishable
   */
  shop_publishable_status?: boolean;
  /**
   * Return the unpublishable reason. If the shop is publishable, will return empty for this field.
   */
  unpublishable_reason?: string;
}

/**
 * ShopeeGetShopPublishableStatusResponseData sub-interface for ShopeeGetShopPublishableStatusResponse
 */
export interface ShopeeGetShopPublishableStatusResponseData {
  /**
   * Detail of publishable shops.
   */
  shop_publishable_status_list?: ShopeeGetShopPublishableStatusShopPublishableStatus[];
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  has_next_page?: boolean;
  /**
   * if has_next_page is true, this value need set to next request.offset
   */
  next_offset?: number;
}

/**
 * Response payload for get_shop_publishable_status
 *
 * Get publishable shop list for global item in pages.
 */
export type ShopeeGetShopPublishableStatusResponse = ShopeeResponseCommon<ShopeeGetShopPublishableStatusResponseData>;

/**
 * ShopeeGetSizeChartDetailMeasurement sub-interface for ShopeeGetSizeChartDetailColumn
 */
export interface ShopeeGetSizeChartDetailMeasurement {
  /**
   * there are 3 kinds of measurement type: Single Dropdown, Input Single Number, Input Range Number.
   */
  input_type?: string;
  /**
   * the unit of this size measurement.
   */
  unit?: string;
  /**
   * name of column header (measurement)
   */
  display_name?: string;
}

/**
 * ShopeeGetSizeChartDetailMeasurementValue sub-interface for ShopeeGetSizeChartDetailColumn
 */
export interface ShopeeGetSizeChartDetailMeasurementValue {
  /**
   * if the input_type of measurement is single input number, measurement will have one value which is returned by this field.
   */
  value?: number;
  /**
   * if the input_type of measurement is input range number, measurement will be a range which is returned by 2 fields: min_value and max_value.
   */
  min_value?: number;
  /**
   * if the input_type of measurement is input range number, measurement will be a range which is returned by 2 fields: min_value and max_value.
   */
  max_value?: number;
  /**
   * if the input_type of measurement is single dropdown, measurement will have one value which is returned by this field.
   */
  option?: string;
}

/**
 * ShopeeGetSizeChartDetailColumn sub-interface for ShopeeGetSizeChartDetailSizeChartTable
 */
export interface ShopeeGetSizeChartDetailColumn {
  /**
   * this is the column header which means a kind of measurement
   */
  measurement?: ShopeeGetSizeChartDetailMeasurement;
  /**
   * the list of measurement value
   */
  measurement_value_list?: ShopeeGetSizeChartDetailMeasurementValue[];
}

/**
 * ShopeeGetSizeChartDetailSizeChartTable sub-interface for ShopeeGetSizeChartDetailResponseData
 */
export interface ShopeeGetSizeChartDetailSizeChartTable {
  /**
   * column list of new size chart table. it include one column (measurement) and multiple values (measurement value)
   */
  column_list?: ShopeeGetSizeChartDetailColumn[];
}

/**
 * ShopeeGetSizeChartDetailResponseData sub-interface for ShopeeGetSizeChartDetailResponse
 */
export interface ShopeeGetSizeChartDetailResponseData {
  /**
   * ID of new size chart
   */
  size_chart_id?: number;
  /**
   * name of new size chart
   */
  size_chart_name?: string;
  /**
   * new size chart is a table format which include multiple columns. each column has column header (measurement) and multiple values (measurement value) of this column.
   */
  size_chart_table?: ShopeeGetSizeChartDetailSizeChartTable;
}

/**
 * Response payload for get_size_chart_detail
 *
 * Get new size chart detail
 */
export type ShopeeGetSizeChartDetailResponse = ShopeeResponseCommon<ShopeeGetSizeChartDetailResponseData>;

/**
 * ShopeeGetSizeChartListSizeChart sub-interface for ShopeeGetSizeChartListResponseData
 */
export interface ShopeeGetSizeChartListSizeChart {
  size_chart_id?: number;
}

/**
 * ShopeeGetSizeChartListResponseData sub-interface for ShopeeGetSizeChartListResponse
 */
export interface ShopeeGetSizeChartListResponseData {
  size_chart_list?: ShopeeGetSizeChartListSizeChart[];
  total_count?: number;
  next_cursor?: string;
}

/**
 * Response payload for get_size_chart_list
 *
 * Get size chart list
 */
export type ShopeeGetSizeChartListResponse = ShopeeResponseCommon<ShopeeGetSizeChartListResponseData>;

/**
 * ShopeeGetVariationsVariationOption sub-interface for ShopeeGetVariationsVariationGroup
 */
export interface ShopeeGetVariationsVariationOption {
  variation_option_id?: number;
  variation_option_name?: string;
}

/**
 * ShopeeGetVariationsVariationGroup sub-interface for ShopeeGetVariationsStandardiseVariation
 */
export interface ShopeeGetVariationsVariationGroup {
  variation_group_id?: number;
  variation_group_name?: string;
  variation_option_list?: ShopeeGetVariationsVariationOption[];
}

/**
 * ShopeeGetVariationsStandardiseVariation sub-interface for ShopeeGetVariationsResponse
 */
export interface ShopeeGetVariationsStandardiseVariation {
  variation_id?: number;
  variation_name?: string;
  variation_group_list?: ShopeeGetVariationsVariationGroup[];
}

/**
 * Response data payload for get_variations
 */
export interface ShopeeGetVariationsResponseData {
  /**
   * Warning message.
   */
  warning?: string;
  /** Undocumented by Shopee beyond the `warning` field; shape is not specified in the official schema. */
  data?: unknown;
  standardise_variation_list?: ShopeeGetVariationsStandardiseVariation[];
}

/**
 * Response payload for get_variations
 *
 * Get the standardized tier variation defined by Shopee, which is currently a three-layer tree structure. The top layer is variations, the second layer is groups, groups are used to divide options, and the third layer is options.
 */
export type ShopeeGetVariationsResponse = ShopeeResponseCommon<ShopeeGetVariationsResponseData>;

/**
 * Response data payload for init_tier_variation
 */
export interface ShopeeInitTierVariationResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for init_tier_variation
 *
 * Only for China mainland sellers and Korean sellers. If you only define color, it is one tier, if you define color and size, it is two tier. Support two tier structures at most. This API can change no tier to one tier, no tier to two tier, one tier to two tier, two tier to one tier, one tier to no tier, two tier to no tier. Please create variants after an interval of 5 seconds after creating an item, as there may be a delay.
 */
export type ShopeeInitTierVariationResponse = ShopeeResponseCommon<ShopeeInitTierVariationResponseData>;

/**
 * ShopeeSearchGlobalAttributeValueListValue sub-interface for ShopeeSearchGlobalAttributeValueListResponseData
 */
export interface ShopeeSearchGlobalAttributeValueListValue {
  value_id?: number;
  value_name?: string;
}

/**
 * ShopeeSearchGlobalAttributeValueListPageInfo sub-interface for ShopeeSearchGlobalAttributeValueListResponseData
 */
export interface ShopeeSearchGlobalAttributeValueListPageInfo {
  cursor?: number;
  has_next?: boolean;
}

/**
 * ShopeeSearchGlobalAttributeValueListResponseData sub-interface for ShopeeSearchGlobalAttributeValueListResponse
 */
export interface ShopeeSearchGlobalAttributeValueListResponseData {
  value_list?: ShopeeSearchGlobalAttributeValueListValue[];
  page_info?: ShopeeSearchGlobalAttributeValueListPageInfo;
}

/**
 * Response payload for search_global_attribute_value_list
 *
 * this api is for searching attribute value list for attribute with support_search_value flag
 */
export type ShopeeSearchGlobalAttributeValueListResponse =
  ShopeeResponseCommon<ShopeeSearchGlobalAttributeValueListResponseData>;

/**
 * Response data payload for set_sync_field
 */
export interface ShopeeSetSyncFieldResponseData {
  /**
   * Warning  message.
   */
  warning?: string;
}

/**
 * Response payload for set_sync_field
 *
 * Set auto sync field. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeSetSyncFieldResponse = ShopeeResponseCommon<ShopeeSetSyncFieldResponseData>;

/**
 * ShopeeSupportSizeChartResponseData sub-interface for ShopeeSupportSizeChartResponse
 */
export interface ShopeeSupportSizeChartResponseData {
  /**
   * If category support size chart.
   */
  support_size_chart?: boolean;
}

/**
 * Response payload for support_size_chart
 *
 * Get category support size chart. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeSupportSizeChartResponse = ShopeeResponseCommon<ShopeeSupportSizeChartResponseData>;

/**
 * ShopeeUpdateGlobalItemResponseData sub-interface for ShopeeUpdateGlobalItemResponse
 */
export interface ShopeeUpdateGlobalItemResponseData {
  /**
   * Id of updated global item.
   */
  global_item_id?: number;
}

/**
 * Response payload for update_global_item
 *
 * Update global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeUpdateGlobalItemResponse = ShopeeResponseCommon<ShopeeUpdateGlobalItemResponseData>;

/**
 * Response data payload for update_global_model
 */
export interface ShopeeUpdateGlobalModelResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_global_model
 *
 * Update global model. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeUpdateGlobalModelResponse = ShopeeResponseCommon<ShopeeUpdateGlobalModelResponseData>;

/**
 * Response data payload for update_local_adjustment_rate
 */
export interface ShopeeUpdateLocalAdjustmentRateResponseData {
  /**
   * Indicate waring details if hit waring. Empty if no waring happened.
   */
  warning?: string;
}

/**
 * Response payload for update_local_adjustment_rate
 *
 * A multiplier that automatically converts your CB stock price into the local-warehouse price. It ensures your local inventory prices reflect regional costs, currency factors, and margin targets.
 */
export type ShopeeUpdateLocalAdjustmentRateResponse =
  ShopeeResponseCommon<ShopeeUpdateLocalAdjustmentRateResponseData>;

/**
 * Response data payload for update_price
 */
export interface ShopeeUpdatePriceResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_price
 *
 * Update global price. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeUpdatePriceResponse = ShopeeResponseCommon<ShopeeUpdatePriceResponseData>;

/**
 * Response data payload for update_size_chart
 */
export interface ShopeeUpdateSizeChartResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_size_chart
 *
 * Update size chart for global item. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeUpdateSizeChartResponse = ShopeeResponseCommon<ShopeeUpdateSizeChartResponseData>;

/**
 * Response data payload for update_stock
 */
export interface ShopeeUpdateStockResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_stock
 *
 * Update global stock. Only for China mainland sellers and Korean sellers.
 */
export type ShopeeUpdateStockResponse = ShopeeResponseCommon<ShopeeUpdateStockResponseData>;

/**
 * Response data payload for update_tier_variation
 */
export interface ShopeeUpdateTierVariationResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_tier_variation
 *
 * Update global product tier variation. Only for China mainland sellers and Korean sellers.This api can only be used without changing the tier structure, you can add options, delete options, and update the option image by this api.
 */
export type ShopeeUpdateTierVariationResponse = ShopeeResponseCommon<ShopeeUpdateTierVariationResponseData>;
