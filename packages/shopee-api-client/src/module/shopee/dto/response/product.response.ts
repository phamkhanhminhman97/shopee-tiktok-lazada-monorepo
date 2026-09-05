import { ShopeeResponseCommon } from './config.response';

interface CommentReply {
  reply?: string;
  hidden?: boolean;
}

interface ResponseComment {
  comment_id?: number;
  comment?: string;
  buyer_username?: string;
  order_sn?: string;
  item_id?: number;
  model_id?: number;
  create_time?: number;
  rating_star?: number;
  editable?: string;
  hidden?: boolean;
  comment_reply?: CommentReply;
}

interface ItemList {
  item: Array<Item>;
  total_count: number;
  has_next_page: boolean;
  next_offset: number;
}

interface FailureList {
  item_id: number;
  failed_reason: string;
}

interface SuccessList {
  item_id: number;
  unlist: boolean;
}

interface UnlistItem {
  failure_list: Array<FailureList>;
  success_list: Array<SuccessList>;
}

interface UpdateStock {
  failure_list: Array<FailureList>;
  success_list: Array<SuccessList>;
}

interface PriceInfo {
  currency: string;
  original_price: number;
  current_price: number;
  inflated_price_of_original_price?: number;
  inflated_price_of_current_price?: number;
  sip_item_price?: number;
  sip_item_price_source?: string;
  sip_item_price_currency?: string;
  local_price?: number;
  local_promotion_price?: number;
}

interface StockInfo {
  stock_type: number;
  stock_location_id: string;
  current_stock: number;
  normal_stock: number;
  reserved_stock: number;
}

interface Image {
  image_url_list: string[];
  image_id_list: string[];
}

interface Dimension {
  package_length: number;
  package_width: number;
  package_height: number;
}

interface LogisticInfo {
  logistic_id: number;
  logistic_name?: string;
  enabled: boolean;
  shipping_fee?: number;
  size_id?: number;
  is_free?: boolean;
  estimated_shipping_fee?: number;
}

interface PreOrder {
  is_pre_order: boolean;
  days_to_ship: number;
}

interface Wholesale {
  min_count: number;
  max_count: number;
  unit_price: number;
  inflated_price_of_unit_price: number;
}

interface ComplaintPolicy {
  warranty_time?: string;
  exclude_entrepreneur_warranty?: boolean;
  complaint_address_id?: number;
  additional_information?: string;
}

interface VideoInfo {
  video_url: string;
  thumbnail_url: string;
  duration: number;
}

interface ExtendedDescription {
  field_type: string;
  text: string;
  image_info: {
    image_id: string;
    image_url: string;
  };
}

interface DescriptionInfo {
  extended_description: {
    field_list: ExtendedDescription[];
  };
}

interface TaxInfo {
  ncm: string;
  diff_state_cfop: string;
  csosn: string;
  origin: string;
  cest: string;
  measure_unit: string;
  invoice_option: string;
  vat_rate: string;
  hs_code: string;
  tax_code: string;
}

interface SummaryInfo {
  total_reserved_stock: number;
  total_available_stock: number;
}

interface SellerStock {
  location_id: string;
  stock: number;
  if_saleable?: boolean;
}

interface ShopeeStock {
  location_id: string;
  stock: number | string;
}

interface AdvanceStock {
  sellable_advance_stock: number;
  in_transit_advance_stock: number;
}

interface StockInfoV2 {
  summary_info: SummaryInfo;
  seller_stock: SellerStock[];
  shopee_stock: ShopeeStock[];
  advance_stock?: AdvanceStock;
}

interface ModelImage {
  image_id: string;
  image_url: string;
}

interface TierVariationOption {
  option: string;
  image?: ModelImage;
}

interface TierVariation {
  option_list: TierVariationOption[];
  name: string;
}

interface StandardiseTierVariationOption {
  variation_option_id?: number;
  variation_option_name: string;
  image_id?: string;
  image_url?: string;
}

interface StandardiseTierVariation {
  variation_id?: number;
  variation_name: string;
  variation_group_id?: number;
  variation_option_list: StandardiseTierVariationOption[];
}

interface Model {
  model_id: number;
  tier_index: number[];
  promotion_id?: number;
  has_promotion?: boolean;
  model_sku: string;
  /**
   * `MODEL_NORMAL` can be sold. `MODEL_UNAVAILABLE` cannot be sold.
   */
  model_status: 'MODEL_NORMAL' | 'MODEL_UNAVAILABLE' | string;
  price_info?: PriceInfo[];
  pre_order?: PreOrder;
  stock_info_v2?: StockInfoV2;
  gtin_code?: string;
  weight?: string;
  dimension?: Dimension;
  is_fulfillment_by_shopee?: boolean;
}

interface ModelList {
  tier_variation: TierVariation[];
  model: Model[];
  standardise_tier_variation?: StandardiseTierVariation[];
}

interface ResponseGetModelList extends ShopeeResponseCommon<ModelList> {
  warning?: string;
}

interface SearchItemResponse {
  item_id_list: number[];
  total_count: number;
  next_offset: string;
}

interface ResponseSearchItem extends ShopeeResponseCommon<SearchItemResponse> {
  warning?: string;
}

interface Item {
  item_id: number;
  category_id: number;
  item_name: string;
  description: string;
  item_sku: string;
  create_time: number;
  update_time: number;
  attribute_list: Attribute[];
  price_info: PriceInfo[];
  stock_info: StockInfo[];
  image: Image;
  weight: number;
  dimension: Dimension;
  logistic_info: LogisticInfo[];
  pre_order: PreOrder;
  wholesales: Wholesale[];
  condition: string;
  size_chart: string;
  item_status: string;
  deboost: string;
  has_model: boolean;
  promotion_id: number;
  video_info: VideoInfo[];
  brand: Brand;
  item_dangerous: number;
  complaint_policy: ComplaintPolicy;
  tax_info: TaxInfo;
  description_info: DescriptionInfo;
  description_type: string;
  stock_info_v2: StockInfoV2;
}

interface ProductBaseItemInfo {
  item_list: Item[];
}
interface Category {
  category_id: number;
  parent_category_id: number;
  original_category_name: string;
  display_category_name: string;
  has_children: boolean;
}

interface Categories {
  category_list: Category[];
}

interface AttributeValue {
  value_id: number;
  original_value_name: string;
  display_value_name: string;
  value_unit: string;
  parent_attribute_list: {
    parent_attribute_id: number;
    parent_value_id: number;
  }[];
  parent_brand_list: {
    parent_brand_id: number;
  }[];
}

interface Attribute {
  attribute_id: number;
  original_attribute_name: string;
  display_attribute_name: string;
  is_mandatory: boolean;
  input_validation_type: string;
  format_type: string;
  date_format_type: string;
  input_type: string;
  attribute_unit: string[];
  attribute_value_list: AttributeValue[];
}

interface AttributeValues {
  attribute_list: AttributeValue[];
}

interface Brand {
  brand_id: number;
  original_brand_name: string;
  display_brand_name?: string;
}

interface ResponseGetBrandList extends ShopeeResponseCommon<Brand> {
  brand_list: Brand[];
  has_next_page: boolean;
  next_offset: number;
  is_mandatory: boolean;
  input_type: string;
}

interface UpdatePrice {
  failure_list: Array<FailureList>;
  success_list: Array<{ item_id: number; model_id?: number; original_price: number }>;
}

type ResponseUnlistItem = ShopeeResponseCommon<UnlistItem>;
type ResponseUpdateStock = ShopeeResponseCommon<UpdateStock>;
type ResponseGetItemList = ShopeeResponseCommon<ItemList>;
type ResponseProductBaseItemInfo = ShopeeResponseCommon<ProductBaseItemInfo>;
type ResponseGetCategories = ShopeeResponseCommon<Categories>;
type ResponseGetAttributes = ShopeeResponseCommon<AttributeValues>;
type ResponseUpdatePrice = ShopeeResponseCommon<UpdatePrice>;

/**
 * Response type for Shopee v2.product.add_item.
 *
 * @see docs/product_add_item.md for the full API reference.
 */
interface AddItemResponse {
  item_id: number;
  item_name: string;
  description: string;
  weight: number;
  category_id: number;
  condition: string;
  images: Image;
  price_info: { current_price: number; original_price: number };
  logistic_info: LogisticInfo[];
  dimension: Dimension;
  pre_order: PreOrder;
  wholesale: Wholesale[];
  brand: Brand;
  item_status: string;
  item_dangerous: number;
  video_info: VideoInfo[];
  description_type: string;
  description_info?: DescriptionInfo;
  complaint_policy?: ComplaintPolicy;
  seller_stock?: SellerStock[];
  attributes?: Attribute[];
  /**
   * Shopee docs return `attributes` (not `attribute_list`) for
   * v2.product.add_item. The `attribute_list` alias is kept for backward
   * compatibility with older package users but will be removed in a future
   * major release. Use `attributes` instead.
   * @deprecated Use `attributes` instead, which matches the Shopee API response.
   */
  attribute_list?: Attribute[];
}

interface ResponseAddItem extends ShopeeResponseCommon<AddItemResponse> {
  warning?: string;
}

/**
 * Response type for Shopee v2.product.update_item.
 *
 * @see docs/product_update_item.md for the full API reference.
 */
interface UpdateItemResponse {
  item_id: number;
  item_name?: string;
  description?: string;
  weight?: number;
  category_id?: number;
  condition?: string;
  images?: Image;
  logistic_info?: LogisticInfo[];
  dimension?: Dimension;
  pre_order?: PreOrder;
  brand?: Brand;
  item_status?: string;
  item_dangerous?: number;
  description_type?: string;
  description_info?: DescriptionInfo;
  complaint_policy?: ComplaintPolicy;
}

interface ResponseUpdateItem extends ShopeeResponseCommon<UpdateItemResponse> {
  warning?: string;
}

export {
  ResponseComment as ShopeeResponseComment,
  ResponseGetModelList as ShopeeResponseGetModelList,
  ResponseUnlistItem as ShopeeResponseUnlistItem,
  ResponseUpdateStock as ShopeeResponseUpdateStock,
  ResponseGetItemList as ShopeeResponseGetItemList,
  ResponseProductBaseItemInfo as ShopeeResponseProductBaseItemInfo,
  ResponseGetCategories as ShopeeResponseGetCategories,
  ResponseGetAttributes as ShopeeResponseGetAttributes,
  ResponseGetBrandList as ShopeeResponseGetBrandList,
  ResponseSearchItem as ShopeeResponseSearchItem,
  ResponseUpdatePrice as ShopeeResponseUpdatePrice,
  ResponseAddItem as ShopeeResponseAddItem,
  ResponseUpdateItem as ShopeeResponseUpdateItem,
};

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeEditable
 */
export enum ShopeeEditable {
  EXPIRED = "EXPIRED",
  EDITABLE = "EDITABLE",
  HAVE_EDIT_ONCE = "HAVE_EDIT_ONCE",
}

/**
 * Enum generated for field ShopeePromotionStaging
 */
export enum ShopeePromotionStaging {
  ONGOING = "ongoing",
  UPCOMING = "upcoming",
}

/**
 * ShopeeAddKitItemResponseData sub-interface for ShopeeAddKitItemResponse
 */
export interface ShopeeAddKitItemResponseData {
  item_id?: number;
}

/**
 * Response payload for add_kit_item
 *
 * Create the kit item by selecting multiple items and setting main component and quantity per kit.
 */
export type ShopeeAddKitItemResponse = ShopeeResponseCommon<ShopeeAddKitItemResponseData>;

/**
 * ShopeeAddModelPriceInfo sub-interface for ShopeeAddModel_AddModelModel
 */
export interface ShopeeAddModelPriceInfo {
  /**
   * Original Price.For CO local VAT responsible seller：Please remember the price you set in here must be VAT inclusive. If you have any doubts on how to calculate VAT for your product please refer to the Seller Education Hub（https://seller.shopee.com.co/edu/article/13565）
   */
  original_price?: number;
}

/**
 * ShopeeAddModel_AddModelSellerStock sub-interface for ShopeeAddModel_AddModelModel
 */
export interface ShopeeAddModel_AddModelSellerStock {
  /**
   * location id
   */
  location_id?: string;
  /**
   * stock
   */
  stock?: number;
}

/**
 * ShopeeAddModel_AddModelDimension sub-interface for ShopeeAddModel_AddModelModel
 */
export interface ShopeeAddModel_AddModelDimension {
  /**
   * The height of package for this model, the unit is CM.
   */
  package_height?: number;
  /**
   * The length of package for this model, the unit is CM.
   */
  package_length?: number;
  /**
   * The width of package for this model, the unit is CM.
   */
  package_width?: number;
}

/**
 * ShopeeAddModel_AddModelModel sub-interface for ShopeeAddModelResponseData
 */
export interface ShopeeAddModel_AddModelModel {
  /**
   * model tier index
   */
  tier_index?: number[];
  /**
   * ID of model
   */
  model_id?: number;
  /**
   * Seller SKU of this model, model_sku length information needs to be no more than 100 characters.
   */
  model_sku?: string;
  price_info?: ShopeeAddModelPriceInfo[];
  /**
   * new stock info
   */
  seller_stock?: ShopeeAddModel_AddModelSellerStock[];
  /**
   * The weight of this model, the unit is KG.If don't set the weight of this model, will use the weight of item by default.If set the dimension of this model, them must set the weight of this model.
   */
  weight?: number;
  /**
   * The dimension of this model.If don't set the dimension of this model, will use the dimension of item by default.
   */
  dimension?: ShopeeAddModel_AddModelDimension;
}

/**
 * ShopeeAddModelResponseData sub-interface for ShopeeAddModelResponse
 */
export interface ShopeeAddModelResponseData {
  model?: ShopeeAddModel_AddModelModel[];
}

/**
 * Response payload for add_model
 *
 * Add model. More detail please check: https://open.shopee.com/developer-guide/219
 */
export type ShopeeAddModelResponse = ShopeeResponseCommon<ShopeeAddModelResponseData>;

/**
 * ShopeeBatchAddItemResponseData sub-interface for ShopeeBatchAddItemResponse
 */
export interface ShopeeBatchAddItemResponseData {
  /**
   * The task ID of the batch add item task.
   */
  task_id?: number;
}

/**
 * Response payload for batch_add_item
 *
 * Create asynchronous task to batch add item
 */
export type ShopeeBatchAddItemResponse = ShopeeResponseCommon<ShopeeBatchAddItemResponseData>;

/**
 * ShopeeBatchPublishItemToOutletShopResponseData sub-interface for ShopeeBatchPublishItemToOutletShopResponse
 */
export interface ShopeeBatchPublishItemToOutletShopResponseData {
  /**
   * The task ID of the batch publish outlet item task.
   */
  task_id?: number;
}

/**
 * Response payload for batch_publish_item_to_outlet_shop
 *
 * Create asynchronous task to batch publish outlet item
 */
export type ShopeeBatchPublishItemToOutletShopResponse =
  ShopeeResponseCommon<ShopeeBatchPublishItemToOutletShopResponseData>;

/**
 * ShopeeBatchUpdateOutletPriceResponseData sub-interface for ShopeeBatchUpdateOutletPriceResponse
 */
export interface ShopeeBatchUpdateOutletPriceResponseData {
  /**
   * The task ID of the batch update price task.
   */
  task_id?: number;
}

/**
 * Response payload for batch_update_outlet_price
 *
 * Create asynchronous task to batch update outlet item's price
 */
export type ShopeeBatchUpdateOutletPriceResponse = ShopeeResponseCommon<ShopeeBatchUpdateOutletPriceResponseData>;

/**
 * ShopeeBatchUpdateOutletStockResponseData sub-interface for ShopeeBatchUpdateOutletStockResponse
 */
export interface ShopeeBatchUpdateOutletStockResponseData {
  /**
   * The task ID of the batch update stock task.
   */
  task_id?: number;
}

/**
 * Response payload for batch_update_outlet_stock
 *
 * Create asynchronous task to batch update outlet stock
 */
export type ShopeeBatchUpdateOutletStockResponse = ShopeeResponseCommon<ShopeeBatchUpdateOutletStockResponseData>;

/**
 * ShopeeBoostItemFailure sub-interface for ShopeeBoostItemResponseData
 */
export interface ShopeeBoostItemFailure {
  /**
   * Failed item ID.
   */
  item_id?: number;
  /**
   * Reason for failure.
   */
  failed_reason?: string;
}

/**
 * ShopeeBoostItemSuccess sub-interface for ShopeeBoostItemResponseData
 */
export interface ShopeeBoostItemSuccess {
  /**
   * Success item ID.
   */
  item_id_list?: number[];
}

/**
 * ShopeeBoostItemResponseData sub-interface for ShopeeBoostItemResponse
 */
export interface ShopeeBoostItemResponseData {
  failure_list?: ShopeeBoostItemFailure[];
  success_list?: ShopeeBoostItemSuccess[];
}

/**
 * Response payload for boost_item
 *
 * Boost item.
 */
export type ShopeeBoostItemResponse = ShopeeResponseCommon<ShopeeBoostItemResponseData>;

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
 * Recommend category by item name.
 */
export type ShopeeCategoryRecommendResponse = ShopeeResponseCommon<ShopeeCategoryRecommendResponseData>;

/**
 * Response data payload for delete_item
 */
export interface ShopeeDeleteItemResponseData {
  /**
   * Indicate waring details if hit waring. Empty if no waring happened.
   */
  warning?: string;
}

/**
 * Response payload for delete_item
 *
 * Use this call to delete a product item.
 */
export type ShopeeDeleteItemResponse = ShopeeResponseCommon<ShopeeDeleteItemResponseData>;

/**
 * Response data payload for delete_model
 */
export interface ShopeeDeleteModelResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for delete_model
 *
 * Delete item model.
 */
export type ShopeeDeleteModelResponse = ShopeeResponseCommon<ShopeeDeleteModelResponseData>;

/**
 * ShopeeGenerateKitImageResponseData sub-interface for ShopeeGenerateKitImageResponse
 */
export interface ShopeeGenerateKitImageResponseData {
  /**
   * generated kit image
   */
  kit_image?: string;
}

/**
 * Response payload for generate_kit_image
 *
 * This API generates a single consolidated image by combining the cover images of all selected items. It is typically used to create a unified product display image for kits or bundles.
 */
export type ShopeeGenerateKitImageResponse = ShopeeResponseCommon<ShopeeGenerateKitImageResponseData>;

/**
 * ShopeeGetAitemByPitemIdModelMapping sub-interface for ShopeeGetAitemByPitemIdAitem
 */
export interface ShopeeGetAitemByPitemIdModelMapping {
  /**
   * ID of model for the P Item.
   */
  pmodel_id?: number;
  /**
   * ID of model for the A Item.
   */
  amodel_id?: number;
}

/**
 * ShopeeGetAitemByPitemIdAitem sub-interface for ShopeeGetAitemByPitemIdResponseData
 */
export interface ShopeeGetAitemByPitemIdAitem {
  /**
   * ID of SIP Affiliate Shop.
   */
  ashop_id?: number;
  /**
   * Region of SIP Affiliate Shop.
   */
  ashop_region?: string;
  /**
   * ID of item under SIP Affiliate Shop corresponding to the P Item.
   */
  aitem_id?: number;
  /**
   * If the P Item does not have model, then the model_mapping_list will not be returned.
   */
  model_mapping_list?: ShopeeGetAitemByPitemIdModelMapping[];
}

/**
 * ShopeeGetAitemByPitemIdResponseData sub-interface for ShopeeGetAitemByPitemIdResponse
 */
export interface ShopeeGetAitemByPitemIdResponseData {
  aitem_list?: ShopeeGetAitemByPitemIdAitem[];
}

/**
 * Response payload for get_aitem_by_pitem_id
 *
 * Get the list of A Items under SIP Affiliate Shop corresponding to P Items under SIP Primary Shop.
 */
export type ShopeeGetAitemByPitemIdResponse = ShopeeResponseCommon<ShopeeGetAitemByPitemIdResponseData>;

/**
 * ShopeeGetAllVehicleListVehicle sub-interface for ShopeeGetAllVehicleListResponseData
 */
export interface ShopeeGetAllVehicleListVehicle {
  /**
   * ID of the brand.
   */
  brand_id?: number;
  /**
   * Name of the brand.
   */
  brand_name?: string;
  /**
   * ID of the model.
   */
  model_id?: number;
  /**
   * Name of the model.
   */
  model_name?: string;
  /**
   * ID of the year.
   */
  year_id?: number;
  /**
   * Name of the year.
   */
  year_name?: string;
  /**
   * ID of the version.
   */
  version_id?: number;
  /**
   * Name of the version.
   */
  version_name?: string;
}

/**
 * ShopeeGetAllVehicleListResponseData sub-interface for ShopeeGetAllVehicleListResponse
 */
export interface ShopeeGetAllVehicleListResponseData {
  vehicle_list?: ShopeeGetAllVehicleListVehicle[];
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  has_next_page?: boolean;
  /**
   * If has_next_page is true, this value need set to next request offset
   */
  next_offset?: number;
}

/**
 * Response payload for get_all_vehicle_list
 *
 * Use this Open API to get all vehicle list.
 */
export type ShopeeGetAllVehicleListResponse = ShopeeResponseCommon<ShopeeGetAllVehicleListResponseData>;

/**
 * ShopeeGetAttributeTreeMultiLang sub-interface for ShopeeGetAttributeTreeAttributeValue
 */
export interface ShopeeGetAttributeTreeMultiLang {
  /**
   * ShopeeLanguage
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
   * Translate results for display
   */
  multi_lang?: ShopeeGetAttributeTreeMultiLang[];
}

/**
 * ShopeeGetAttributeTreeAttributeInfo sub-interface for ShopeeGetAttributeTreeAttributeTree
 */
export interface ShopeeGetAttributeTreeAttributeInfo {
  /**
   * SINGLE_DROP_DOWN = 1 SINGLE_COMBO_BOX = 2 FREE_TEXT_FILED        = 3 MULTI_DROP_DOWN   = 4 MULTI_COMBO_BOX   = 5
   */
  input_type?: number;
  /**
   * VALIDATOR_NO_VALIDATE_TYPE =  0 VALIDATOR_INT_TYPE = 1 VALIDATOR_STRING_TYPE = 2VALIDATOR_FLOAT_TYPE = 3 VALIDATOR_DATE_TYPE = 4
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
   * Max selected value count
   */
  max_value_count?: number;
  /**
   * Introduction for special Attribute
   */
  introduction?: string;
  is_oem?: boolean;
  /**
   * Indicates whether this attribute has searchable values.If yes, please call v2.product.search_attribute_value_list to get the default values
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
   * Attribute translate info
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
 * Get the attribute tree for categories
 */
export type ShopeeGetAttributeTreeResponse = ShopeeResponseCommon<ShopeeGetAttributeTreeResponseData>;

/**
 * ShopeeGetBatchTaskResultSuccess sub-interface for ShopeeGetBatchTaskResultResponseData
 */
export interface ShopeeGetBatchTaskResultSuccess {
  /**
   * The shop ID
   */
  shop_id?: number;
  /**
   * The item ID of the item in the shop.
   */
  item_id?: number;
  /**
   * The model ID of the model in the shop.
   */
  model_id?: number;
}

/**
 * ShopeeGetBatchTaskResultFailed sub-interface for ShopeeGetBatchTaskResultResponseData
 */
export interface ShopeeGetBatchTaskResultFailed {
  /**
   * The shop ID
   */
  shop_id?: number;
  /**
   * The item ID of the item in the shop.
   */
  item_id?: number;
  /**
   * The model ID of the model in the shop.
   */
  model_id?: number;
  /**
   * The failed reason.
   */
  failed_reason?: string;
}

/**
 * ShopeeGetBatchTaskResultResponseData sub-interface for ShopeeGetBatchTaskResultResponse
 */
export interface ShopeeGetBatchTaskResultResponseData {
  /**
   * The publish status. 1: ongoing; 2: finished.
   */
  publish_status?: number;
  /**
   * The batch task success records.
   */
  success_list?: ShopeeGetBatchTaskResultSuccess[];
  /**
   * The batch task failed records.
   */
  failed_list?: ShopeeGetBatchTaskResultFailed[];
}

/**
 * Response payload for get_batch_task_result
 *
 * Query batch task result
 */
export type ShopeeGetBatchTaskResultResponse = ShopeeResponseCommon<ShopeeGetBatchTaskResultResponseData>;

/**
 * ShopeeGetBoostedListItem sub-interface for ShopeeGetBoostedListResponseData
 */
export interface ShopeeGetBoostedListItem {
  /**
   * Shopee's unique identifier for an item
   */
  item_id?: number;
  /**
   * Remain cool down time
   */
  cool_down_second?: number;
}

/**
 * ShopeeGetBoostedListResponseData sub-interface for ShopeeGetBoostedListResponse
 */
export interface ShopeeGetBoostedListResponseData {
  item_list?: ShopeeGetBoostedListItem[];
}

/**
 * Response payload for get_boosted_list
 *
 * Get boosted item list.
 */
export type ShopeeGetBoostedListResponse = ShopeeResponseCommon<ShopeeGetBoostedListResponseData>;

/**
 * ShopeeGetCommentCommentReply sub-interface for ShopeeGetCommentItemComment
 */
export interface ShopeeGetCommentCommentReply {
  /**
   * The content of reply.
   */
  reply?: string;
  /**
   * The comment reply is hidden or not.
   */
  hidden?: boolean;
  /**
   * The time the seller replied to the comment.
   */
  create_time?: number;
}

/**
 * ShopeeGetCommentMedia sub-interface for ShopeeGetCommentItemComment
 */
export interface ShopeeGetCommentMedia {
  /**
   * List of image url uploaded by the buyer in the comment.
   */
  image_url_list?: string[];
  /**
   * List of video url uploaded by the buyer in the comment.
   */
  video_url_list?: string[];
}

/**
 * ShopeeGetCommentItemComment sub-interface for ShopeeGetCommentResponseData
 */
export interface ShopeeGetCommentItemComment {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * The identity of comment.
   */
  comment_id?: string;
  /**
   * The content of the comment.
   */
  comment?: string;
  /**
   * The username of the buyer who posted the comment.
   */
  buyer_username?: string;
  /**
   * The commented item's id
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model of an item. It will only return 0 now. Will be offline on 2024-12-27, please switch to use model_id_list.
   */
  model_id?: number;
  /**
   * Buyer's rating for the item.
   */
  rating_star?: number;
  /**
   * The editable status of the comment. The value may be one of  EXPIRED/EDITABLE/HAVE_EDIT_ONCE.
   */
  editable?: ShopeeEditable | string | number;
  /**
   * The comment is hidden or not.
   */
  hidden?: boolean;
  /**
   * The create time of the comment.
   */
  create_time?: number;
  /**
   * The reply of the comment.
   */
  comment_reply?: ShopeeGetCommentCommentReply;
  /**
   * List of model id of the buyer's purchase corresponding to the comment.
   */
  model_id_list?: number[];
  media?: ShopeeGetCommentMedia;
}

/**
 * ShopeeGetCommentResponseData sub-interface for ShopeeGetCommentResponse
 */
export interface ShopeeGetCommentResponseData {
  /**
   * This is to indicate whether the comment list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of comments. But only respond 500 comments at most through OpenAPI, if there are more than 500, this field "more" also respond "true".
   */
  more?: boolean;
  /**
   * The comment data list of the items.
   */
  item_comment_list?: ShopeeGetCommentItemComment[];
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_comment
 *
 * Use this api to get comment by shop_id, item_id, or comment_id, get up to 1000 comments.
 */
export type ShopeeGetCommentResponse = ShopeeResponseCommon<ShopeeGetCommentResponseData>;

/**
 * ShopeeGetDirectItemListDirectItem sub-interface for ShopeeGetDirectItemListList
 */
export interface ShopeeGetDirectItemListDirectItem {
  /**
   * Id of direct shop.
   */
  direct_shop_id?: number;
  /**
   * Item id of direct shop.
   */
  direct_item_id?: number;
}

/**
 * ShopeeGetDirectItemListList sub-interface for ShopeeGetDirectItemListResponseData
 */
export interface ShopeeGetDirectItemListList {
  /**
   * Item id of main shop.
   */
  main_item_id?: number;
  direct_item_list?: ShopeeGetDirectItemListDirectItem[];
}

/**
 * ShopeeGetDirectItemListResponseData sub-interface for ShopeeGetDirectItemListResponse
 */
export interface ShopeeGetDirectItemListResponseData {
  list?: ShopeeGetDirectItemListList[];
}

/**
 * Response payload for get_direct_item_list
 *
 * get direct item by main item.
 */
export type ShopeeGetDirectItemListResponse = ShopeeResponseCommon<ShopeeGetDirectItemListResponseData>;

/**
 * ShopeeGetDirectShopRecommendedPriceItemModelPrice sub-interface for ShopeeGetDirectShopRecommendedPriceDirectItemPrice
 */
export interface ShopeeGetDirectShopRecommendedPriceItemModelPrice {
  /**
   * Id of main model.
   */
  model_id?: number;
  /**
   * Tier index of main model. Index starts from 0.
   */
  tier_index?: number[];
  price?: number;
}

/**
 * ShopeeGetDirectShopRecommendedPriceDirectItemPrice sub-interface for ShopeeGetDirectShopRecommendedPriceResponseData
 */
export interface ShopeeGetDirectShopRecommendedPriceDirectItemPrice {
  /**
   * Id of direct shop.
   */
  shop_id?: number;
  /**
   * Region of direct shop.
   */
  region?: string;
  hidden_price?: number;
  item_model_price_list?: ShopeeGetDirectShopRecommendedPriceItemModelPrice[];
}

/**
 * ShopeeGetDirectShopRecommendedPriceResponseData sub-interface for ShopeeGetDirectShopRecommendedPriceResponse
 */
export interface ShopeeGetDirectShopRecommendedPriceResponseData {
  direct_item_price?: ShopeeGetDirectShopRecommendedPriceDirectItemPrice[];
}

/**
 * Response payload for get_direct_shop_recommended_price
 *
 * get recommend price for direct shop.
 */
export type ShopeeGetDirectShopRecommendedPriceResponse =
  ShopeeResponseCommon<ShopeeGetDirectShopRecommendedPriceResponseData>;

/**
 * ShopeeGetItemContentDiagnosisResultUnfinishedTask sub-interface for ShopeeGetItemContentDiagnosisResultSuccessItem
 */
export interface ShopeeGetItemContentDiagnosisResultUnfinishedTask {
  /**
   * Item's content issue. Applicable values:1: TOO_FEW_IMAGES  2: WRONG_CATEGORY  3: TOO_FEW_ATTRIBUTES_FOR_QUALIFIED4: LACK_OF_SIZE_CHART  5: LACK_OF_STANDARD_VARIATION 6: LACK_BRAND  7: TOO_SHORT_DESCRIPTION  8: TOO_SHORT_OR_TOO_LONG_NAME9: WRONG_WEIGHT  10: LACK_OF_VIDEO11: TOO_FEW_ATTRIBUTES_FOR_EXCELLENT
   */
  issue_type?: number;
  /**
   * System suggestion for item's content issue. Applicable values:Add at least 3 imagesAdopt suggested categoryAdd at least 1 attributesAdd size chartAdopt the color or size variationAdd brand infoAdd at least 100 characters or 1 image for descAdd characters for name to 25~100Adopt suggested weightAdd videoAdd at least 3 attributes
   */
  suggestion?: string;
}

/**
 * ShopeeGetItemContentDiagnosisResultSuccessItem sub-interface for ShopeeGetItemContentDiagnosisResultResponseData
 */
export interface ShopeeGetItemContentDiagnosisResultSuccessItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Item's latest content quality level. Applicable values:0: NONE (No quality level for item in SELLER_DELETE / SHOPEE_DELETE / BANNED status)1: TO_BE_IMPROVED2: QUALIFIED3: EXCELLENT
   */
  quality_level?: number;
  unfinished_task?: ShopeeGetItemContentDiagnosisResultUnfinishedTask[];
}

/**
 * ShopeeGetItemContentDiagnosisResultFailureItem sub-interface for ShopeeGetItemContentDiagnosisResultResponseData
 */
export interface ShopeeGetItemContentDiagnosisResultFailureItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Item's failure reason.
   */
  failed_reason?: string;
}

/**
 * ShopeeGetItemContentDiagnosisResultResponseData sub-interface for ShopeeGetItemContentDiagnosisResultResponse
 */
export interface ShopeeGetItemContentDiagnosisResultResponseData {
  success_item_list?: ShopeeGetItemContentDiagnosisResultSuccessItem[];
  failure_item_list?: ShopeeGetItemContentDiagnosisResultFailureItem[];
}

/**
 * Response payload for get_item_content_diagnosis_result
 *
 * Get the content quality details (including content quality level, content issues, and system suggestions) for specific product list.
 */
export type ShopeeGetItemContentDiagnosisResultResponse =
  ShopeeResponseCommon<ShopeeGetItemContentDiagnosisResultResponseData>;

/**
 * ShopeeGetItemExtraInfoItem sub-interface for ShopeeGetItemExtraInfoResponseData
 */
export interface ShopeeGetItemExtraInfoItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The sales volume of item.
   */
  sale?: number;
  /**
   * The page view of item.
   */
  views?: number;
  /**
   * The collection number of item.
   */
  likes?: number;
  /**
   * The rating star scores of this item.
   */
  rating_star?: number;
  /**
   * Count of comments for the item.
   */
  comment_count?: number;
}

/**
 * ShopeeGetItemExtraInfoResponseData sub-interface for ShopeeGetItemExtraInfoResponse
 */
export interface ShopeeGetItemExtraInfoResponseData {
  /**
   * extra info of item list.
   */
  item_list?: ShopeeGetItemExtraInfoItem[];
}

/**
 * Response payload for get_item_extra_info
 *
 * Use this api to get extra info of item by item_id list.
 */
export type ShopeeGetItemExtraInfoResponse = ShopeeResponseCommon<ShopeeGetItemExtraInfoResponseData>;

/**
 * ShopeeGetItemLimitPriceLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitPriceLimit {
  /**
   * Item price max limit.
   */
  min_limit?: number;
  /**
   * Item price min limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitWholesalePriceThresholdPercentage sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitWholesalePriceThresholdPercentage {
  /**
   * Item wholesale price percentage of original price min limit.
   */
  min_limit?: number;
  /**
   * Item wholesale price percentage of original price min limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitStockLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitStockLimit {
  /**
   * Item stock min limit.
   */
  min_limit?: number;
  /**
   * Item stock max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitItemNameLengthLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitItemNameLengthLimit {
  /**
   * Item name length min limit.
   */
  min_limit?: number;
  /**
   * Item name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitItemImageCountLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitItemImageCountLimit {
  /**
   * Item image count min limit.
   */
  min_limit?: number;
  /**
   * Item image count max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitItemDescriptionLengthLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitItemDescriptionLengthLimit {
  /**
   * Item description length min limit.
   */
  min_limit?: number;
  /**
   * Item description length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitTierVariationNameLengthLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitTierVariationNameLengthLimit {
  /**
   * Item tier variation name length min limit.
   */
  min_limit?: number;
  /**
   * Item tier variation name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitTierVariationOptionLengthLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitTierVariationOptionLengthLimit {
  /**
   * Item tier variation option length min limit.
   */
  min_limit?: number;
  /**
   * Item tier variation option length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitItemCountLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitItemCountLimit {
  /**
   * Item count max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitExtendedDescriptionLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitExtendedDescriptionLimit {
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
   * length min limit for item extended description image aspect  (image width / image hight )
   */
  description_image_aspect_ratio_min?: number;
  /**
   * length max limit for item extended description image aspect (image width / image hight )
   */
  description_image_aspect_ratio_max?: number;
}

/**
 * ShopeeGetItemLimitDaysToShipLimit sub-interface for ShopeeGetItemLimitDtsLimit
 */
export interface ShopeeGetItemLimitDaysToShipLimit {
  min_limit?: number;
  max_limit?: number;
}

/**
 * ShopeeGetItemLimitDtsLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitDtsLimit {
  /**
   * Pre order limits for the category
   */
  days_to_ship_limit?: ShopeeGetItemLimitDaysToShipLimit;
  non_pre_order_days_to_ship?: number;
}

/**
 * ShopeeGetItemLimitWeightLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitWeightLimit {
  /**
   * weight is mandatory or not
   */
  weight_mandatory?: boolean;
}

/**
 * ShopeeGetItemLimitDimensionLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitDimensionLimit {
  /**
   * dimension is mandatory or not for the category
   */
  dimension_mandatory?: boolean;
}

/**
 * ShopeeGetItemLimitSizeChartLimit sub-interface for ShopeeGetItemLimitResponseData
 */
export interface ShopeeGetItemLimitSizeChartLimit {
  size_chart_mandatory?: boolean;
  support_image_size_chart?: boolean;
  support_template_size_chart?: boolean;
}

/**
 * ShopeeGetItemLimitResponseData sub-interface for ShopeeGetItemLimitResponse
 */
export interface ShopeeGetItemLimitResponseData {
  price_limit?: ShopeeGetItemLimitPriceLimit;
  wholesale_price_threshold_percentage?: ShopeeGetItemLimitWholesalePriceThresholdPercentage;
  stock_limit?: ShopeeGetItemLimitStockLimit;
  item_name_length_limit?: ShopeeGetItemLimitItemNameLengthLimit;
  item_image_count_limit?: ShopeeGetItemLimitItemImageCountLimit;
  item_description_length_limit?: ShopeeGetItemLimitItemDescriptionLengthLimit;
  tier_variation_name_length_limit?: ShopeeGetItemLimitTierVariationNameLengthLimit;
  tier_variation_option_length_limit?: ShopeeGetItemLimitTierVariationOptionLengthLimit;
  item_count_limit?: ShopeeGetItemLimitItemCountLimit;
  extended_description_limit?: ShopeeGetItemLimitExtendedDescriptionLimit;
  dts_limit?: ShopeeGetItemLimitDtsLimit;
  weight_limit?: ShopeeGetItemLimitWeightLimit;
  dimension_limit?: ShopeeGetItemLimitDimensionLimit;
  size_chart_limit?: ShopeeGetItemLimitSizeChartLimit;
}

/**
 * Response payload for get_item_limit
 *
 * Get item upload control.
 */
export type ShopeeGetItemLimitResponse = ShopeeResponseCommon<ShopeeGetItemLimitResponseData>;

/**
 * ShopeeGetItemListByContentDiagnosisUnfinishedTask sub-interface for ShopeeGetItemListByContentDiagnosisItem
 */
export interface ShopeeGetItemListByContentDiagnosisUnfinishedTask {
  /**
   * Item's content issue. Applicable values:1: TOO_FEW_IMAGES2: WRONG_CATEGORY3: TOO_FEW_ATTRIBUTES_FOR_QUALIFIED4: LACK_OF_SIZE_CHART5: LACK_OF_STANDARD_VARIATION6: LACK_BRAND7: TOO_SHORT_DESCRIPTION8: TOO_SHORT_OR_TOO_LONG_NAME9: WRONG_WEIGHT10: LACK_OF_VIDEO11: TOO_FEW_ATTRIBUTES_FOR_EXCELLENT
   */
  issue_type?: number;
  /**
   * System suggestion for item's content issue. Applicable values:Add at least 3 imagesAdopt suggested categoryAdd at least 1 attributesAdd size chartAdopt the color or size variationAdd brand infoAdd at least 100 characters or 1 image for descAdd characters for name to 25~100Adopt suggested weightAdd videoAdd at least 3 attributes
   */
  suggestion?: string;
}

/**
 * ShopeeGetItemListByContentDiagnosisItem sub-interface for ShopeeGetItemListByContentDiagnosisResponseData
 */
export interface ShopeeGetItemListByContentDiagnosisItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Item's latest content quality level. Applicable values:0: NONE (No quality level for item in SELLER_DELETE / SHOPEE_DELETE / BANNED status)1: TO_BE_IMPROVED2: QUALIFIED3: EXCELLENT
   */
  quality_level?: number;
  unfinished_task?: ShopeeGetItemListByContentDiagnosisUnfinishedTask[];
}

/**
 * ShopeeGetItemListByContentDiagnosisResponseData sub-interface for ShopeeGetItemListByContentDiagnosisResponse
 */
export interface ShopeeGetItemListByContentDiagnosisResponseData {
  item_list?: ShopeeGetItemListByContentDiagnosisItem[];
  /**
   * Total num of items match condition.
   */
  total_count?: number;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  has_next_page?: boolean;
  /**
   * If has_next_page is true, this value need set to next request.offset
   */
  next_offset?: string;
}

/**
 * Response payload for get_item_list_by_content_diagnosis
 *
 * Query the list of products and their content quality details by content quality level or content issues.
 */
export type ShopeeGetItemListByContentDiagnosisResponse =
  ShopeeResponseCommon<ShopeeGetItemListByContentDiagnosisResponseData>;

/**
 * ShopeeGetItemPromotionPromotionPriceInfo sub-interface for ShopeeGetItemPromotionPromotion
 */
export interface ShopeeGetItemPromotionPromotionPriceInfo {
  /**
   * Promotion price.
   */
  promotion_price?: number;
}

/**
 * ShopeeGetItemPromotionPromotionStockInfoV2 sub-interface for ShopeeGetItemPromotionPromotion
 */
export interface ShopeeGetItemPromotionPromotionStockInfoV2 {
  /**
   * stock summary info
   */
  summary_info?: Record<string, unknown>;
  /**
   * Total Stock reserved for promotion
   */
  total_reserved_stock?: number;
}

/**
 * ShopeeGetItemPromotionPromotion sub-interface for ShopeeGetItemPromotionSuccess
 */
export interface ShopeeGetItemPromotionPromotion {
  /**
   * Promotion type, Applicable values: See Data Definition- PromotionType.
   */
  promotion_type?: string;
  /**
   * The identity of item promotion.
   */
  promotion_id?: number;
  /**
   * The identity of product model.
   */
  model_id?: number;
  /**
   * Promotion start tiem.
   */
  start_time?: number;
  /**
   * Promotion end item.
   */
  end_time?: number;
  /**
   * Promotion price info.
   */
  promotion_price_info?: ShopeeGetItemPromotionPromotionPriceInfo[];
  /**
   * Could be ongoing/upcoming
   */
  promotion_staging?: ShopeePromotionStaging | string | number;
  /**
   * new promotion stock
   */
  promotion_stock_info_v2?: ShopeeGetItemPromotionPromotionStockInfoV2;
}

/**
 * ShopeeGetItemPromotionSuccess sub-interface for ShopeeGetItemPromotionResponseData
 */
export interface ShopeeGetItemPromotionSuccess {
  /**
   * The identity of product item.
   */
  item_id?: number;
  /**
   * Item promotion info list
   */
  promotion?: ShopeeGetItemPromotionPromotion[];
}

/**
 * ShopeeGetItemPromotionFailure sub-interface for ShopeeGetItemPromotionResponseData
 */
export interface ShopeeGetItemPromotionFailure {
  /**
   * The identity of item.
   */
  item_id?: number;
  /**
   * Fail reason.
   */
  failed_reason?: string;
}

/**
 * ShopeeGetItemPromotionResponseData sub-interface for ShopeeGetItemPromotionResponse
 */
export interface ShopeeGetItemPromotionResponseData {
  /**
   * Success item promotion info.
   */
  success_list?: ShopeeGetItemPromotionSuccess[];
  /**
   * Fail item promotion info.
   */
  failure_list?: ShopeeGetItemPromotionFailure[];
}

/**
 * Response payload for get_item_promotion
 *
 * Get item promotion info.
 */
export type ShopeeGetItemPromotionResponse = ShopeeResponseCommon<ShopeeGetItemPromotionResponseData>;

/**
 * ShopeeGetItemViolationInfoItemStatusDetail sub-interface for ShopeeGetItemViolationInfoItem
 */
export interface ShopeeGetItemViolationInfoItemStatusDetail {
  /**
   * Violation types defined by Shopee. Applicable values: Prohibited ListingCounterfeit and IP InfringementSpamInappropriate ImageInsufficient InformationMall Listing ImprovementOther Listing Improvement
   */
  violation_type?: string;
  /**
   * The reason for violation.
   */
  violation_reason?: string;
  /**
   * Shopee provides you with suggestions for modifying items.
   */
  suggestion?: string;
  /**
   * Action required deadline. Empty if no deadline.
   */
  fix_deadline_time?: number;
  /**
   * Latest update time.
   */
  update_time?: number;
}

/**
 * ShopeeGetItemViolationInfoSuggestedCategory sub-interface for ShopeeGetItemViolationInfoDeboostDetail
 */
export interface ShopeeGetItemViolationInfoSuggestedCategory {
  /**
   * ID for Shopee suggested category.
   */
  category_id?: number;
  /**
   * Default name for Shopee suggested category.
   */
  category_name?: string;
}

/**
 * ShopeeGetItemViolationInfoDeboostDetail sub-interface for ShopeeGetItemViolationInfoItem
 */
export interface ShopeeGetItemViolationInfoDeboostDetail {
  /**
   * Violation types defined by Shopee. Applicable values: Prohibited ListingCounterfeit and IP InfringementSpamInappropriate ImageInsufficient InformationMall Listing ImprovementOther Listing Improvement
   */
  violation_type?: string;
  /**
   * The reason for violation.
   */
  violation_reason?: string;
  /**
   * Shopee provides you with suggestions for modifying items.
   */
  suggestion?: string;
  suggested_category?: ShopeeGetItemViolationInfoSuggestedCategory[];
  /**
   * Action required deadline. Empty if no deadline.
   */
  fix_deadline_time?: number;
  /**
   * Latest update time.
   */
  update_time?: number;
}

/**
 * ShopeeGetItemViolationInfoItem sub-interface for ShopeeGetItemViolationInfoResponseData
 */
export interface ShopeeGetItemViolationInfoItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Name of the item.
   */
  item_name?: string;
  /**
   * Enumerated type that defines the current status of the item. Applicable values: NORMAL, BANNED, UNLIST, SELLER_DELETE, SHOPEE_DELETE, REVIEWING.
   */
  item_status?: string;
  /**
   * If deboost is true, means that the item's search ranking is lowered.
   */
  deboost?: boolean;
  item_status_details?: ShopeeGetItemViolationInfoItemStatusDetail[];
  deboost_details?: ShopeeGetItemViolationInfoDeboostDetail[];
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeGetItemViolationInfoResponseData sub-interface for ShopeeGetItemViolationInfoResponse
 */
export interface ShopeeGetItemViolationInfoResponseData {
  item_list?: ShopeeGetItemViolationInfoItem[];
}

/**
 * Response payload for get_item_violation_info
 *
 * get item violation info
 */
export type ShopeeGetItemViolationInfoResponse = ShopeeResponseCommon<ShopeeGetItemViolationInfoResponseData>;

/**
 * ShopeeGetKitItemInfoImage sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoImage {
  /**
   * List of image id.
   */
  image_id_list?: string[];
  /**
   * List of image url.
   */
  image_url_list?: string[];
  /**
   * 1:1
   */
  image_ratio?: string;
}

/**
 * ShopeeGetKitItemInfoLongImage sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoLongImage {
  /**
   * List of image id.
   */
  image_id_list?: string[];
  /**
   * List of image url.
   */
  image_url_list?: string[];
  /**
   * 3:4
   */
  image_ratio?: string;
}

/**
 * ShopeeGetKitItemInfoImageInfo sub-interface for ShopeeGetKitItemInfoField
 */
export interface ShopeeGetKitItemInfoImageInfo {
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
 * ShopeeGetKitItemInfoField sub-interface for ShopeeGetKitItemInfoExtendedDescription
 */
export interface ShopeeGetKitItemInfoField {
  /**
   * Type of extended description field. See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text, text information will be returned through this field.
   */
  text?: string;
  /**
   * If field_type is image, image will be returned through this field.
   */
  image_info?: ShopeeGetKitItemInfoImageInfo;
}

/**
 * ShopeeGetKitItemInfoExtendedDescription sub-interface for ShopeeGetKitItemInfoDescriptionInfo
 */
export interface ShopeeGetKitItemInfoExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeGetKitItemInfoField[];
}

/**
 * ShopeeGetKitItemInfoDescriptionInfo sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoDescriptionInfo {
  /**
   * If description_type is extended , Description information will be returned through this field.
   */
  extended_description?: ShopeeGetKitItemInfoExtendedDescription;
}

/**
 * ShopeeGetKitItemInfoVideo sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoVideo {
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
 * ShopeeGetKitItemInfoAttributeValue sub-interface for ShopeeGetKitItemInfoAttribute
 */
export interface ShopeeGetKitItemInfoAttributeValue {
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
 * ShopeeGetKitItemInfoAttribute sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoAttribute {
  /**
   * The Identify of each attribute.
   */
  attribute_id?: number;
  /**
   * The name of each attribute.
   */
  original_attribute_name?: string;
  attribute_value_list?: ShopeeGetKitItemInfoAttributeValue[];
}

/**
 * ShopeeGetKitItemInfoDimension sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoDimension {
  /**
   * The length of package for this item, the unit is CM.
   */
  package_length?: number;
  /**
   * The width of package for this item, the unit is CM.
   */
  package_width?: number;
  /**
   * The height of package for this item, the unit is CM.
   */
  package_height?: number;
}

/**
 * ShopeeGetKitItemInfoBrandInfo sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoBrandInfo {
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
 * ShopeeGetKitItemInfoComponent sub-interface for ShopeeGetKitItemInfoModel
 */
export interface ShopeeGetKitItemInfoComponent {
  /**
   * ID of the item that composes this kit model.
   */
  component_item_id?: number;
  /**
   * Name of the item that composes this kit model.
   */
  component_item_name?: string;
  /**
   * ID of the model that composes this kit model.
   */
  component_model_id?: number;
  /**
   * Name of the model that composes this kit model.
   */
  component_model_name?: string;
  /**
   * The amount of the item/model that composes this kit model.
   */
  quantity?: number;
  /**
   * Whether this item/model is the main component for this kit.
   */
  main_component?: boolean;
  component_item_or_model_image?: string;
  component_item_or_model_sku?: string;
}

/**
 * ShopeeGetKitItemInfoModel sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoModel {
  /**
   * ID of this kit model.
   */
  model_id?: number;
  /**
   * Seller SKU of this kit model.
   */
  model_sku?: number;
  /**
   * Original price of this kit model.
   */
  original_price?: number;
  /**
   * Tier index of this kit model.
   */
  tier_index?: number[];
  component_list?: ShopeeGetKitItemInfoComponent[];
}

/**
 * ShopeeGetKitItemInfoPreOrderInfo sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoPreOrderInfo {
  is_pre_order?: boolean;
  days_to_ship?: number;
}

/**
 * ShopeeGetKitItemInfo_GetKitItemInfoImage sub-interface for ShopeeGetKitItemInfoOption
 */
export interface ShopeeGetKitItemInfo_GetKitItemInfoImage {
  /**
   * Id of image.
   */
  image_id?: string;
  /**
   * Url of image.
   */
  image_url?: string;
}

/**
 * ShopeeGetKitItemInfoOption sub-interface for ShopeeGetKitItemInfoTierVariation
 */
export interface ShopeeGetKitItemInfoOption {
  /**
   * Option name.
   */
  option?: string;
  image?: ShopeeGetKitItemInfo_GetKitItemInfoImage[];
}

/**
 * ShopeeGetKitItemInfoTierVariation sub-interface for ShopeeGetKitItemInfoProductInfo
 */
export interface ShopeeGetKitItemInfoTierVariation {
  /**
   * Variation name.
   */
  name?: string;
  /**
   * Option list.
   */
  option_list?: ShopeeGetKitItemInfoOption[];
}

/**
 * ShopeeGetKitItemInfoProductInfo sub-interface for ShopeeGetKitItemInfoResponseData
 */
export interface ShopeeGetKitItemInfoProductInfo {
  /**
   * ID of this kit item.
   */
  item_id?: number;
  /**
   * The name of this kit item.
   */
  item_name?: string;
  /**
   * The category of this kit item, sync from the category of the main component of this kit item.
   */
  category_id?: number[];
  /**
   * Enumerated type that defines the current status of the item. Applicable values: NORMAL, BANNED, UNLIST, SELLER_DELETE, SHOPEE_DELETE, REVIEWING.
   */
  item_status?: string;
  /**
   * An item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku?: string;
  /**
   * Item images with 1:1 ratio.
   */
  images?: ShopeeGetKitItemInfoImage;
  /**
   * Item images with 3:4 ratio.
   */
  long_images?: ShopeeGetKitItemInfoLongImage;
  /**
   * Rich text description field. Only whitelist sellers can use it.
   */
  description_info?: ShopeeGetKitItemInfoDescriptionInfo;
  /**
   * If description_type is normal, description information will be returned through this field, else description will be empty.
   */
  description?: string;
  /**
   * Type of description : values: See Data Definition- description_type (normal , extended).
   */
  description_type?: string;
  /**
   * Info of video list.
   */
  video_list?: ShopeeGetKitItemInfoVideo[];
  /**
   * The attributes of this kit item, sync from the attributes of the main component of this kit item.
   */
  attributes?: ShopeeGetKitItemInfoAttribute[];
  /**
   * The weight of this kit item, the unit is KG.
   */
  weight?: string;
  /**
   * The dimension of this kit item.
   */
  dimension?: ShopeeGetKitItemInfoDimension;
  /**
   * The brand of this kit item, sync from the brand of the main component of this kit item.
   */
  brand_info?: ShopeeGetKitItemInfoBrandInfo;
  /**
   * Model info list, model number at most 9.
   */
  model_list?: ShopeeGetKitItemInfoModel[];
  pre_order_info?: ShopeeGetKitItemInfoPreOrderInfo;
  /**
   * Variation config of item.
   */
  tier_variation_list?: ShopeeGetKitItemInfoTierVariation[];
}

/**
 * ShopeeGetKitItemInfoResponseData sub-interface for ShopeeGetKitItemInfoResponse
 */
export interface ShopeeGetKitItemInfoResponseData {
  product_info?: ShopeeGetKitItemInfoProductInfo;
}

/**
 * Response payload for get_kit_item_info
 *
 * Get the kit basic information and kit components.
 */
export type ShopeeGetKitItemInfoResponse = ShopeeResponseCommon<ShopeeGetKitItemInfoResponseData>;

/**
 * ShopeeGetKitItemLimitPriceLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitPriceLimit {
  /**
   * Item price max limit.
   */
  min_limit?: number;
  /**
   * Item price min limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitItemNameLengthLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitItemNameLengthLimit {
  /**
   * Item name length min limit.
   */
  min_limit?: number;
  /**
   * Item name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitItemImageCountLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitItemImageCountLimit {
  /**
   * Item image count min limit.
   */
  min_limit?: number;
  /**
   * Item image count max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitDescriptionLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitDescriptionLimit {
  /**
   * Item description length min limit.
   */
  description_length_min?: number;
  /**
   * length max limit for item extended description text part.
   */
  description_length_max?: number;
  /**
   * length min limit for item extended description text part, when one of the minimum limits for image and text is reached, the item can be added or updated successfully.
   */
  description_text_length_min?: number;
  /**
   * length max limit for item extended description text part
   */
  description_text_length_max?: number;
  /**
   * length min limit for item extended description image num, when one of the minimum limits for image and text is reached, the item can be added or updated successfully.
   */
  description_image_num_min?: number;
  /**
   * length max limit for item extended description image num.
   */
  description_image_num_max?: number;
  /**
   * length min limit for item extended description image width.
   */
  description_image_width_min?: number;
  /**
   * length min limit for item extended description image hight.
   */
  description_image_height_min?: number;
  /**
   * length min limit for item extended description image aspect ( aspect_ratio= image width / image hight ).
   */
  description_image_aspect_ratio_min?: number;
  /**
   * length max limit for item extended description image aspect ( aspect_ratio= image width / image hight ).
   */
  description_image_aspect_ratio_max?: number;
}

/**
 * ShopeeGetKitItemLimitTierVariationNameLengthLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitTierVariationNameLengthLimit {
  /**
   * Item tier variation name length min limit.
   */
  min_limit?: number;
  /**
   * Item tier variation name length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitTierVariationOptionLengthLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitTierVariationOptionLengthLimit {
  /**
   * Item tier variation option length min limit.
   */
  min_limit?: number;
  /**
   * Item tier variation option length max limit.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitWeightLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitWeightLimit {
  /**
   * Whether weight is mandatory or not for the category.
   */
  weight_mandatory?: boolean;
}

/**
 * ShopeeGetKitItemLimitDimensionLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitDimensionLimit {
  /**
   * Whether dimension is mandatory or not for the category.
   */
  dimension_mandatory?: boolean;
}

/**
 * ShopeeGetKitItemLimitDaysToShipLimit sub-interface for ShopeeGetKitItemLimitDtsLimit
 */
export interface ShopeeGetKitItemLimitDaysToShipLimit {
  /**
   * Min limit of days to ship for pre-order products.
   */
  min_limit?: number;
  /**
   * Max limit of days to ship for pre-order products.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitDtsLimit sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitDtsLimit {
  /**
   * Days to ship for non pre-order products.
   */
  non_pre_order_days_to_ship?: number;
  /**
   * Whether support pre_order for the category.
   */
  support_pre_order?: boolean;
  /**
   * Days to ship for pre-order products.
   */
  days_to_ship_limit?: ShopeeGetKitItemLimitDaysToShipLimit;
}

/**
 * ShopeeGetKitItemLimitComponentCountLimitOfSingleModel sub-interface for ShopeeGetKitItemLimitResponseData
 */
export interface ShopeeGetKitItemLimitComponentCountLimitOfSingleModel {
  /**
   * Item count min limit that each kit variations support.
   */
  min_limit?: number;
  /**
   * Item count max limit that each kit variations support.
   */
  max_limit?: number;
}

/**
 * ShopeeGetKitItemLimitResponseData sub-interface for ShopeeGetKitItemLimitResponse
 */
export interface ShopeeGetKitItemLimitResponseData {
  price_limit?: ShopeeGetKitItemLimitPriceLimit;
  item_name_length_limit?: ShopeeGetKitItemLimitItemNameLengthLimit;
  item_image_count_limit?: ShopeeGetKitItemLimitItemImageCountLimit;
  description_limit?: ShopeeGetKitItemLimitDescriptionLimit;
  tier_variation_name_length_limit?: ShopeeGetKitItemLimitTierVariationNameLengthLimit;
  tier_variation_option_length_limit?: ShopeeGetKitItemLimitTierVariationOptionLengthLimit;
  weight_limit?: ShopeeGetKitItemLimitWeightLimit;
  dimension_limit?: ShopeeGetKitItemLimitDimensionLimit;
  dts_limit?: ShopeeGetKitItemLimitDtsLimit;
  component_count_limit_of_single_model?: ShopeeGetKitItemLimitComponentCountLimitOfSingleModel;
}

/**
 * Response payload for get_kit_item_limit
 *
 * Get the limit of Kit item.
 */
export type ShopeeGetKitItemLimitResponse = ShopeeResponseCommon<ShopeeGetKitItemLimitResponseData>;

/**
 * ShopeeGetMainItemListList sub-interface for ShopeeGetMainItemListResponseData
 */
export interface ShopeeGetMainItemListList {
  /**
   * Item id of direct shop.
   */
  direct_item_id?: number;
  /**
   * Id of main shop.
   */
  main_shop_id?: number;
  /**
   * Item id of main shop.
   */
  main_item_id?: number;
}

/**
 * ShopeeGetMainItemListResponseData sub-interface for ShopeeGetMainItemListResponse
 */
export interface ShopeeGetMainItemListResponseData {
  list?: ShopeeGetMainItemListList[];
}

/**
 * Response payload for get_main_item_list
 *
 * get main item by direct item.
 */
export type ShopeeGetMainItemListResponse = ShopeeResponseCommon<ShopeeGetMainItemListResponseData>;

/**
 * ShopeeGetMartItemByOutletItemIdModelMapping sub-interface for ShopeeGetMartItemByOutletItemIdItemMapping
 */
export interface ShopeeGetMartItemByOutletItemIdModelMapping {
  /**
   * The model ID of the product in the Mart shop.
   */
  mart_model_id?: number;
  /**
   * The model ID of the corresponding product in the outlet shop.
   */
  outlet_model_id?: number;
}

/**
 * ShopeeGetMartItemByOutletItemIdItemMapping sub-interface for ShopeeGetMartItemByOutletItemIdResponseData
 */
export interface ShopeeGetMartItemByOutletItemIdItemMapping {
  /**
   * The item ID of the item in the Mart shop.
   */
  mart_item_id?: number;
  /**
   * The item ID of the corresponding item in the outlet shop.
   */
  outlet_item_id?: number;
  /**
   * The mapping relationship between Mart models and outlet models under the mapped items.
   */
  model_mapping?: ShopeeGetMartItemByOutletItemIdModelMapping[];
}

/**
 * ShopeeGetMartItemByOutletItemIdResponseData sub-interface for ShopeeGetMartItemByOutletItemIdResponse
 */
export interface ShopeeGetMartItemByOutletItemIdResponseData {
  /**
   * A list of item mapping records between the Mart item and its corresponding outlet items.
   */
  item_mapping_list?: ShopeeGetMartItemByOutletItemIdItemMapping[];
}

/**
 * Response payload for get_mart_item_by_outlet_item_id
 *
 * Get the mapping information between a Mart item and its corresponding outlet item by outlet item ID.
 */
export type ShopeeGetMartItemByOutletItemIdResponse =
  ShopeeResponseCommon<ShopeeGetMartItemByOutletItemIdResponseData>;

/**
 * ShopeeGetMartItemMappingByIdModelMapping sub-interface for ShopeeGetMartItemMappingByIdItemMapping
 */
export interface ShopeeGetMartItemMappingByIdModelMapping {
  /**
   * The model ID of the product in the Mart shop.
   */
  mart_model_id?: number;
  /**
   * The model ID of the corresponding product in the outlet shop.
   */
  outlet_model_id?: number;
}

/**
 * ShopeeGetMartItemMappingByIdItemMapping sub-interface for ShopeeGetMartItemMappingByIdResponseData
 */
export interface ShopeeGetMartItemMappingByIdItemMapping {
  /**
   * The item ID of the item in the Mart shop.
   */
  mart_item_id?: number;
  /**
   * The item ID of the corresponding item in the outlet shop.
   */
  outlet_item_id?: number;
  /**
   * The mapping relationship between Mart models and outlet models under the mapped items.
   */
  model_mapping?: ShopeeGetMartItemMappingByIdModelMapping[];
}

/**
 * ShopeeGetMartItemMappingByIdResponseData sub-interface for ShopeeGetMartItemMappingByIdResponse
 */
export interface ShopeeGetMartItemMappingByIdResponseData {
  /**
   * A list of item mapping records between the Mart item and its corresponding outlet items.
   */
  item_mapping_list?: ShopeeGetMartItemMappingByIdItemMapping[];
}

/**
 * Response payload for get_mart_item_mapping_by_id
 *
 * Get the mapping information between a Mart item and its corresponding outlet item by item ID.
 */
export type ShopeeGetMartItemMappingByIdResponse = ShopeeResponseCommon<ShopeeGetMartItemMappingByIdResponseData>;

/**
 * ShopeeGetProductCertificationRuleCertificationRule sub-interface for ShopeeGetProductCertificationRuleResponseData
 */
export interface ShopeeGetProductCertificationRuleCertificationRule {
  /**
   * type of certification; always=1
   */
  certification_type?: number;
  /**
   * if this type of certification is mandatory for product
   */
  is_mandatory?: boolean;
  permit_id?: number;
  /**
   * Permit Type Name
   */
  name?: string;
}

/**
 * ShopeeGetProductCertificationRuleResponseData sub-interface for ShopeeGetProductCertificationRuleResponse
 */
export interface ShopeeGetProductCertificationRuleResponseData {
  /**
   * New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  certification_rule_list?: ShopeeGetProductCertificationRuleCertificationRule[];
}

/**
 * Response payload for get_product_certification_rule
 *
 * Get product certification rule
 */
export type ShopeeGetProductCertificationRuleResponse =
  ShopeeResponseCommon<ShopeeGetProductCertificationRuleResponseData>;

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
 * Get recommend attributes.
 */
export type ShopeeGetRecommendAttributeResponse = ShopeeResponseCommon<ShopeeGetRecommendAttributeResponseData>;

/**
 * ShopeeGetSizeChartDetailMeasurement sub-interface for ShopeeGetSizeChartDetailColumn
 */
export interface ShopeeGetSizeChartDetailMeasurement {
  /**
   * there are 3 kinds of measurement type: Single Dropdown, Input Single Number, Input Range Number.
   */
  input_type?: string;
  /**
   * name of column header (measurement)
   */
  display_name?: string;
  /**
   * the unit of this size measurement.
   */
  unit?: string;
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
 * Get new size chart detail. Now only local shop support to use this api to get new size chart detail.
 */
export type ShopeeGetSizeChartDetailResponse = ShopeeResponseCommon<ShopeeGetSizeChartDetailResponseData>;

/**
 * ShopeeGetSizeChartListSizeChart sub-interface for ShopeeGetSizeChartListResponseData
 */
export interface ShopeeGetSizeChartListSizeChart {
  /**
   * ID of new size chart
   */
  size_chart_id?: string;
}

/**
 * ShopeeGetSizeChartListResponseData sub-interface for ShopeeGetSizeChartListResponse
 */
export interface ShopeeGetSizeChartListResponseData {
  size_chart_list?: ShopeeGetSizeChartListSizeChart[];
  /**
   * total number of new size chart under requested category_id
   */
  total_count?: string;
  /**
   * if next_cursor has value, this value need set to next request.cursor
   */
  next_cursor?: string;
}

/**
 * Response payload for get_size_chart_list
 *
 * Get new size chart list. Now only support local shop to use new size chart.
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
 * ShopeeGetVariationsStandardiseVariation sub-interface for ShopeeGetVariationsData
 */
export interface ShopeeGetVariationsStandardiseVariation {
  variation_id?: number;
  variation_name?: string;
  variation_group_list?: ShopeeGetVariationsVariationGroup[];
}

/**
 * ShopeeGetVariationsData sub-interface for ShopeeGetVariationsResponse
 */
export interface ShopeeGetVariationsData {
  /**
   * standardized tier variation tree
   */
  standardise_variation_list?: ShopeeGetVariationsStandardiseVariation[];
}

/**
 * Response data payload for get_variations
 */
export interface ShopeeGetVariationsResponseData {
  /**
   * Warning message.
   */
  warning?: string;
  /**
   * standardized tier variation data
   */
  data?: ShopeeGetVariationsData;
}

/**
 * Response payload for get_variations
 *
 * Get the standardized tier variation defined by Shopee, which is currently a three-layer tree structure.
 * The top layer is variations, the second layer is groups, groups are used to divide options, and the third layer is options.
 */
export type ShopeeGetVariationsResponse = ShopeeResponseCommon<ShopeeGetVariationsResponseData>;

/**
 * ShopeeGetVehicleListByCompatibilityDetailVehicle sub-interface for ShopeeGetVehicleListByCompatibilityDetailResponseData
 */
export interface ShopeeGetVehicleListByCompatibilityDetailVehicle {
  /**
   * ID of the brand.
   */
  brand_id?: number;
  /**
   * Name of the brand.
   */
  brand_name?: string;
  /**
   * ID of the model.
   */
  model_id?: number;
  /**
   * Name of the model.
   */
  model_name?: string;
  /**
   * ID of the year.
   */
  year_id?: number;
  /**
   * Name of the year.
   */
  year_name?: string;
  /**
   * ID of the version.
   */
  version_id?: number;
  /**
   * Name of the version.
   */
  version_name?: string;
}

/**
 * ShopeeGetVehicleListByCompatibilityDetailResponseData sub-interface for ShopeeGetVehicleListByCompatibilityDetailResponse
 */
export interface ShopeeGetVehicleListByCompatibilityDetailResponseData {
  vehicle_list?: ShopeeGetVehicleListByCompatibilityDetailVehicle[];
}

/**
 * Response payload for get_vehicle_list_by_compatibility_detail
 *
 * Use this Open API to get vehicle list by brand, model, year, and version.
 */
export type ShopeeGetVehicleListByCompatibilityDetailResponse =
  ShopeeResponseCommon<ShopeeGetVehicleListByCompatibilityDetailResponseData>;

/**
 * ShopeeGetWeightRecommendationResponseData sub-interface for ShopeeGetWeightRecommendationResponse
 */
export interface ShopeeGetWeightRecommendationResponseData {
  /**
   * Recommended weight range, in kg. If there are no recommended results, return empty.
   */
  normal_weight_range?: number[];
}

/**
 * Response payload for get_weight_recommendation
 *
 * Get recommended weight. Now only BR shop support to use this api to get recommended weight.
 */
export type ShopeeGetWeightRecommendationResponse = ShopeeResponseCommon<ShopeeGetWeightRecommendationResponseData>;

/**
 * ShopeeInitTierVariationImage sub-interface for ShopeeInitTierVariationOption
 */
export interface ShopeeInitTierVariationImage {
  /**
   * URL of image
   */
  image_url?: string;
}

/**
 * ShopeeInitTierVariationOption sub-interface for ShopeeInitTierVariationTierVariation
 */
export interface ShopeeInitTierVariationOption {
  /**
   * Image of this option
   */
  image?: ShopeeInitTierVariationImage;
  /**
   * Option name
   */
  option?: string;
}

/**
 * ShopeeInitTierVariationTierVariation sub-interface for ShopeeInitTierVariationResponseData
 */
export interface ShopeeInitTierVariationTierVariation {
  /**
   * Variation name
   */
  name?: string;
  /**
   * Options of this variation
   */
  option_list?: ShopeeInitTierVariationOption[];
}

/**
 * ShopeeInitTierVariationPriceInfo sub-interface for ShopeeInitTierVariation_InitTierVariationModel
 */
export interface ShopeeInitTierVariationPriceInfo {
  /**
   * Original price
   */
  original_price?: number;
}

/**
 * ShopeeInitTierVariation_InitTierVariationSellerStock sub-interface for ShopeeInitTierVariation_InitTierVariationModel
 */
export interface ShopeeInitTierVariation_InitTierVariationSellerStock {
  /**
   * location id
   */
  location_id?: string;
  /**
   * stock
   */
  stock?: number;
}

/**
 * ShopeeInitTierVariation_InitTierVariationDimension sub-interface for ShopeeInitTierVariation_InitTierVariationModel
 */
export interface ShopeeInitTierVariation_InitTierVariationDimension {
  /**
   * The height of package for this model, the unit is CM.
   */
  package_height?: number;
  /**
   * The length of package for this model, the unit is CM.
   */
  package_length?: number;
  /**
   * The width of package for this model, the unit is CM.
   */
  package_width?: number;
}

/**
 * ShopeeInitTierVariation_InitTierVariationModel sub-interface for ShopeeInitTierVariationResponseData
 */
export interface ShopeeInitTierVariation_InitTierVariationModel {
  /**
   * Tier index of model. Index starts from 0.
   */
  tier_index?: number[];
  /**
   * ID of model
   */
  model_id?: number;
  /**
   * Seller SKU of this model
   */
  model_sku?: string;
  price_info?: ShopeeInitTierVariationPriceInfo[];
  /**
   * new stock info
   */
  seller_stock?: ShopeeInitTierVariation_InitTierVariationSellerStock[];
  /**
   * The weight of this model, the unit is KG.If don't set the weight of this model, will use the weight of item by default.If set the dimension of this model, them must set the weight of this model.
   */
  weight?: number;
  /**
   * The dimension of this model.If don't set the dimension of this model, will use the dimension of item by default.
   */
  dimension?: ShopeeInitTierVariation_InitTierVariationDimension;
}

/**
 * ShopeeInitTierVariationResponseData sub-interface for ShopeeInitTierVariationResponse
 */
export interface ShopeeInitTierVariationResponseData {
  /**
   * ID of item
   */
  item_id?: number;
  /**
   * Variations of item
   */
  tier_variation?: ShopeeInitTierVariationTierVariation[];
  model?: ShopeeInitTierVariation_InitTierVariationModel[];
}

/**
 * Response payload for init_tier_variation
 *
 * This API allows you to update the tier structure of a product. Defining only color creates one tier, while color + size creates two tiers (maximum supported). Supported changes include: no tier ↔ one/two tiers, one tier ↔ two/no tier, and two tiers ↔ one/no tier. For details, see Developer Guide.  Please wait at least 5 seconds after creating an item before creating variants, as processing may be delayed.
 */
export type ShopeeInitTierVariationResponse = ShopeeResponseCommon<ShopeeInitTierVariationResponseData>;

/**
 * ShopeePublishItemToOutletShopResponseData sub-interface for ShopeePublishItemToOutletShopResponse
 */
export interface ShopeePublishItemToOutletShopResponseData {
  /**
   * The outlet item ID.
   */
  item_id?: number;
}

/**
 * Response payload for publish_item_to_outlet_shop
 *
 * This API supports publishing an existing item from the mart shop to an outlet shop.
 */
export type ShopeePublishItemToOutletShopResponse = ShopeeResponseCommon<ShopeePublishItemToOutletShopResponseData>;

/**
 * ShopeeRegisterBrandResponseData sub-interface for ShopeeRegisterBrandResponse
 */
export interface ShopeeRegisterBrandResponseData {
  /**
   * The identity of brand.
   */
  brand_id?: number;
  /**
   * Brand name
   */
  original_brand_name?: string;
}

/**
 * Response payload for register_brand
 *
 * Use this call to register a brand.
 */
export type ShopeeRegisterBrandResponse = ShopeeResponseCommon<ShopeeRegisterBrandResponseData>;

/**
 * ShopeeReplyCommentResult sub-interface for ShopeeReplyCommentResponseData
 */
export interface ShopeeReplyCommentResult {
  /**
   * The identity of comment.
   */
  comment_id?: number;
  /**
   * Indicate error details if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeReplyCommentResponseData sub-interface for ShopeeReplyCommentResponse
 */
export interface ShopeeReplyCommentResponseData {
  /**
   * The result list of the request comment list.
   */
  result_list?: ShopeeReplyCommentResult[];
}

/**
 * Response payload for reply_comment
 *
 * Use this api to reply comments from buyers in batch.
 */
export type ShopeeReplyCommentResponse = ShopeeResponseCommon<ShopeeReplyCommentResponseData>;

/**
 * ShopeeSearchAttributeValueListValue sub-interface for ShopeeSearchAttributeValueListResponseData
 */
export interface ShopeeSearchAttributeValueListValue {
  /**
   * The ID of the predefined attributes value.
   */
  value_id?: number;
  /**
   * The name of the predefined attributes value.
   */
  value_name?: string;
}

/**
 * ShopeeSearchAttributeValueListPageInfo sub-interface for ShopeeSearchAttributeValueListResponseData
 */
export interface ShopeeSearchAttributeValueListPageInfo {
  cursor?: number;
  has_next?: boolean;
}

/**
 * ShopeeSearchAttributeValueListResponseData sub-interface for ShopeeSearchAttributeValueListResponse
 */
export interface ShopeeSearchAttributeValueListResponseData {
  value_list?: ShopeeSearchAttributeValueListValue[];
  page_info?: ShopeeSearchAttributeValueListPageInfo;
}

/**
 * Response payload for search_attribute_value_list
 *
 * this api is for searching attribute value list for attribute with support_search_value flag
 */
export type ShopeeSearchAttributeValueListResponse = ShopeeResponseCommon<ShopeeSearchAttributeValueListResponseData>;

/**
 * ShopeeSearchUnpackagedModelListModel sub-interface for ShopeeSearchUnpackagedModelListResponseData
 */
export interface ShopeeSearchUnpackagedModelListModel {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Name of the item.
   */
  item_name?: string;
  /**
   * Shopee's unique identifier for a model under item. 0 for no model item.
   */
  model_id?: number;
  /**
   * Unpackaged SKU ID of the model.
   */
  unpackaged_sku_id?: string;
}

/**
 * ShopeeSearchUnpackagedModelListResponseData sub-interface for ShopeeSearchUnpackagedModelListResponse
 */
export interface ShopeeSearchUnpackagedModelListResponseData {
  /**
   * Total number of models that match the condition.
   */
  total_count?: number;
  /**
   * Pass the next_cursor in the next request as cursor to get the next page data.
   */
  next_cursor?: string;
  /**
   * List of models that match the condition.
   */
  model_list?: ShopeeSearchUnpackagedModelListModel[];
}

/**
 * Response payload for search_unpackaged_model_list
 *
 * Use this API to retrieve Unpackaged SKU ID information for items that toggle on logistics channel 30029.
 */
export type ShopeeSearchUnpackagedModelListResponse =
  ShopeeResponseCommon<ShopeeSearchUnpackagedModelListResponseData>;

/**
 * Response data payload for update_kit_item
 */
export interface ShopeeUpdateKitItemResponseData {
  warning?: string;
}

/**
 * Response payload for update_kit_item
 *
 * Update the kit basic information and kit components, only support adding kit variations and updating existing kit variation’s image, price, and model_sku, don’t support deleting existing kit variations and updating the items, main component and quantity per kit of existing kit variations.
 */
export type ShopeeUpdateKitItemResponse = ShopeeResponseCommon<ShopeeUpdateKitItemResponseData>;

/**
 * Response data payload for update_model
 */
export interface ShopeeUpdateModelResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_model
 *
 * Update seller sku/ pre order/ model status for model.
 */
export type ShopeeUpdateModelResponse = ShopeeResponseCommon<ShopeeUpdateModelResponseData>;

/**
 * Response data payload for update_sip_item_price
 */
export interface ShopeeUpdateSipItemPriceResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for update_sip_item_price
 *
 * Update sip item price.
 */
export type ShopeeUpdateSipItemPriceResponse = ShopeeResponseCommon<ShopeeUpdateSipItemPriceResponseData>;

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
 * This api can only be used without changing the tier structure, you can add options, delete options, and update the option image by this api. More detail please check: https://open.shopee.com/developer-guide/219
 */
export type ShopeeUpdateTierVariationResponse = ShopeeResponseCommon<ShopeeUpdateTierVariationResponseData>;
