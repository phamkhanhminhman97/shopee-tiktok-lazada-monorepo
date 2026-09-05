import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddShopFlashSaleItemsUnqualifiedCondition sub-interface for ShopeeAddShopFlashSaleItemsFailedItem
 */
export interface ShopeeAddShopFlashSaleItemsUnqualifiedCondition {
  /**
   * error code for unqualified item
   */
  unqualified_code?: number;
  /**
   * error message for unqualified item
   */
  unqualified_msg?: string;
}

/**
 * ShopeeAddShopFlashSaleItemsFailedItem sub-interface for ShopeeAddShopFlashSaleItemsResponseData
 */
export interface ShopeeAddShopFlashSaleItemsFailedItem {
  item_id?: number;
  /**
   * If the item has no variation, this field will be empty
   */
  model_id?: number;
  err_code?: number;
  /**
   * the reason why the model cannot be added
   */
  err_msg?: string;
  /**
   * if model or item doesn't meet a criteria, will show the detail in this field
   */
  unqualified_conditions?: ShopeeAddShopFlashSaleItemsUnqualifiedCondition[];
}

/**
 * ShopeeAddShopFlashSaleItemsResponseData sub-interface for ShopeeAddShopFlashSaleItemsResponse
 */
export interface ShopeeAddShopFlashSaleItemsResponseData {
  failed_items?: ShopeeAddShopFlashSaleItemsFailedItem[];
}

/**
 * Response payload for add_shop_flash_sale_items
 *
 * add shop flash sale item
 */
export type ShopeeAddShopFlashSaleItemsResponse = ShopeeResponseCommon<ShopeeAddShopFlashSaleItemsResponseData>;

/**
 * ShopeeCreateShopFlashSaleResponseData sub-interface for ShopeeCreateShopFlashSaleResponse
 */
export interface ShopeeCreateShopFlashSaleResponseData {
  timeslot_id?: number;
  flash_sale_id?: number;
  /**
   * the status of shop flash sale0: deleted1: enabled2: disabled3: system_rejected
   */
  status?: number;
}

/**
 * Response payload for create_shop_flash_sale
 *
 * creat shop flash sale
 */
export type ShopeeCreateShopFlashSaleResponse = ShopeeResponseCommon<ShopeeCreateShopFlashSaleResponseData>;

/**
 * ShopeeDeleteShopFlashSaleResponseData sub-interface for ShopeeDeleteShopFlashSaleResponse
 */
export interface ShopeeDeleteShopFlashSaleResponseData {
  timeslot_id?: number;
  flash_sale_id?: number;
  /**
   * the status of shop flash sale0: deleted1: enabled2: disabled3: system_rejected
   */
  status?: number;
}

/**
 * Response payload for delete_shop_flash_sale
 *
 * delete shop flash sale
 */
export type ShopeeDeleteShopFlashSaleResponse = ShopeeResponseCommon<ShopeeDeleteShopFlashSaleResponseData>;

/**
 * ShopeeDeleteShopFlashSaleItemsUnqualifiedCondition sub-interface for ShopeeDeleteShopFlashSaleItemsFailedItem
 */
export interface ShopeeDeleteShopFlashSaleItemsUnqualifiedCondition {
  unqualified_code?: number;
  unqualified_msg?: string;
}

/**
 * ShopeeDeleteShopFlashSaleItemsFailedItem sub-interface for ShopeeDeleteShopFlashSaleItemsResponseData
 */
export interface ShopeeDeleteShopFlashSaleItemsFailedItem {
  item_id?: number;
  /**
   * If the item has no variation, this field will be empty
   */
  model_id?: number;
  err_code?: number;
  /**
   * the reason why the model cannot be added
   */
  err_msg?: string;
  /**
   * if the model doesn't meet a criteria, will show the detail in this field
   */
  unqualified_conditions?: ShopeeDeleteShopFlashSaleItemsUnqualifiedCondition[];
}

/**
 * ShopeeDeleteShopFlashSaleItemsResponseData sub-interface for ShopeeDeleteShopFlashSaleItemsResponse
 */
export interface ShopeeDeleteShopFlashSaleItemsResponseData {
  failed_items?: ShopeeDeleteShopFlashSaleItemsFailedItem[];
}

/**
 * Response payload for delete_shop_flash_sale_items
 *
 * delete shop flash sale items
 */
export type ShopeeDeleteShopFlashSaleItemsResponse = ShopeeResponseCommon<ShopeeDeleteShopFlashSaleItemsResponseData>;

/**
 * ShopeeGetItemCriteriaCriteria sub-interface for ShopeeGetItemCriteriaResponseData
 */
export interface ShopeeGetItemCriteriaCriteria {
  criteria_id?: number;
  /**
   * Product Rating(0.0-5.0), -1 means no limit
   */
  min_product_rating?: number;
  /**
   * Likes(s), -1 means no limit
   */
  min_likes?: number;
  /**
   * Pre-Order(s)
   */
  must_not_pre_order?: boolean;
  /**
   * Orders in the last 30 day(s), -1 means no limit
   */
  min_order_total?: number;
  /**
   * Days to Ship, -1 means no limit
   */
  max_days_to_ship?: number;
  /**
   * Repetition Control (Same Product cannot Join ISFS within N Days), -1 means no limit
   */
  min_repetition_day?: number;
  /**
   * Promo Stock, -1 means no limit
   */
  min_promo_stock?: number;
  /**
   * Promo Stock, -1 means no limit
   */
  max_promo_stock?: number;
  /**
   * Discount Limit, 10 means 10%, -1 means no limit
   */
  min_discount?: number;
  /**
   * Discount Limit, 100 means 100%, -1 means no limit
   */
  max_discount?: number;
  /**
   * Discount Limit, -1 means no limit, real min discount price = min_discount_price / 100000
   */
  min_discount_price?: number;
  /**
   * Discount Limit, -1 means no limit, real max discount price = max_discount_price / 100000
   */
  max_discount_price?: number;
  /**
   * lower than lowest price in last 7 days (exclude Shopee Flash Deals)
   */
  need_lowest_price?: boolean;
}

/**
 * ShopeeGetItemCriteriaCategory sub-interface for ShopeeGetItemCriteriaPairId
 */
export interface ShopeeGetItemCriteriaCategory {
  /**
   * o means this is All category
   */
  category_id?: number;
  /**
   * category name
   */
  name?: string;
  /**
   * the parent category id, 0 means this category is L1 category
   */
  parent_id?: number;
}

/**
 * ShopeeGetItemCriteriaPairId sub-interface for ShopeeGetItemCriteriaResponseData
 */
export interface ShopeeGetItemCriteriaPairId {
  criteria_id?: number;
  /**
   * these are the categories that the shop has items, and the criteria will apply to these categories
   */
  category_list?: ShopeeGetItemCriteriaCategory[];
}

/**
 * ShopeeGetItemCriteriaResponseData sub-interface for ShopeeGetItemCriteriaResponse
 */
export interface ShopeeGetItemCriteriaResponseData {
  /**
   * criteria detail
   */
  criteria?: ShopeeGetItemCriteriaCriteria[];
  /**
   * the mapping relationship between criteria and category
   */
  pair_ids?: ShopeeGetItemCriteriaPairId[];
  /**
   * Due to regulations, the promotion of some products in these categories are prohibited in this region
   */
  overlap_block_category_ids?: number[];
}

/**
 * Response payload for get_item_criteria
 *
 * get shop flash sale item criteria
 */
export type ShopeeGetItemCriteriaResponse = ShopeeResponseCommon<ShopeeGetItemCriteriaResponseData>;

/**
 * ShopeeGetShopFlashSaleResponseData sub-interface for ShopeeGetShopFlashSaleResponse
 */
export interface ShopeeGetShopFlashSaleResponseData {
  timeslot_id?: number;
  flash_sale_id?: number;
  /**
   * the status of shop flash sale0: deleted1: enabled2: disabled
   */
  status?: number;
  /**
   * the start time of shop flash sale
   */
  start_time?: number;
  /**
   * the end time of shop flash sale
   */
  end_time?: number;
  /**
   * the number of enabled items in shop flash sale
   */
  enabled_item_count?: number;
  /**
   * the number of items in shop flash sale
   */
  item_count?: number;
  /**
   * the state of shop flash sale1: upcoming2: ongoing3: expired
   */
  type?: number;
}

/**
 * Response payload for get_shop_flash_sale
 *
 * get shop flash sale detail
 */
export type ShopeeGetShopFlashSaleResponse = ShopeeResponseCommon<ShopeeGetShopFlashSaleResponseData>;

/**
 * ShopeeGetShopFlashSaleItemsUnqualifiedCondition sub-interface for ShopeeGetShopFlashSaleItemsModel
 */
export interface ShopeeGetShopFlashSaleItemsUnqualifiedCondition {
  unqualified_code?: number;
  unqualified_msg?: string;
}

/**
 * ShopeeGetShopFlashSaleItemsModel sub-interface for ShopeeGetShopFlashSaleItemsResponseData
 */
export interface ShopeeGetShopFlashSaleItemsModel {
  item_id?: number;
  model_id?: number;
  model_name?: string;
  /**
   * the status of model in shop flash sale0: disable1: enable2: delete4: system_rejected, the model is rejected by system5: manual_rejected, the model is rejected manually
   */
  status?: number;
  original_price?: number;
  /**
   * promotion price without tax
   */
  input_promotion_price?: number;
  /**
   * promotion price with tax
   */
  promotion_price_with_tax?: number;
  /**
   * 0 means NO LIMIT
   */
  purchase_limit?: number;
  campaign_stock?: number;
  /**
   * Active inventory
   */
  stock?: number;
  /**
   * if the status is 4 or 5, this field will show the reason why this model was rejected
   */
  reject_reason?: string;
  /**
   * if the model doesn't meet a criteria, will show the detail in this field
   */
  unqualified_conditions?: ShopeeGetShopFlashSaleItemsUnqualifiedCondition;
}

/**
 * ShopeeGetShopFlashSaleItemsItemInfo sub-interface for ShopeeGetShopFlashSaleItemsResponseData
 */
export interface ShopeeGetShopFlashSaleItemsItemInfo {
  item_id?: number;
  item_name?: string;
  /**
   * item status0: Deleted1: Normal2: reviewing3: banned4: invalid5: invalid hide6: offensive hide7: auditing8: normal unlist
   */
  status?: number;
  /**
   * item image
   */
  image?: string;
  /**
   * the status of item in shop flash sale. If the item has variation, this field will be empty0: disable1: enable2: delete4: system_rejected, the item is rejected by system5: manual_rejected, the item is rejected manually
   */
  item_status?: number;
  /**
   * original price of item, if the item has variation, this field will be empty
   */
  original_price?: number;
  /**
   * promotion price without tax of item, if the item has variation, this field will be empty
   */
  input_promotion_price?: number;
  /**
   * promotion price with tax of item, if the item has no variation, this field will has value
   */
  promotion_price_with_tax?: number;
  /**
   * 0 means NO LIMITpurchase limit of item, if the item has variation, this field will be empty
   */
  purchase_limit?: number;
  /**
   * campaign stock of item, if the item has no variation, this field will has value
   */
  campaign_stock?: number;
  /**
   * Active inventory of item, if the item has no variation, this field will has value
   */
  stock?: number;
  /**
   * if the item_status is 4 or 5, this field will show the reason why this item was rejectedif the item has variation, this field will be empty
   */
  reject_reason?: string;
  /**
   * if the item doesn't meet a criteria, will show the detail in this fieldif the item has variation, this field will be empty
   */
  unqualified_conditions?: ShopeeGetShopFlashSaleItemsUnqualifiedCondition;
}

/**
 * ShopeeGetShopFlashSaleItemsResponseData sub-interface for ShopeeGetShopFlashSaleItemsResponse
 */
export interface ShopeeGetShopFlashSaleItemsResponseData {
  total_count?: number;
  /**
   * If the item has variation, the infomation of model will be in this field
   */
  models?: ShopeeGetShopFlashSaleItemsModel[];
  item_info?: ShopeeGetShopFlashSaleItemsItemInfo[];
}

/**
 * Response payload for get_shop_flash_sale_items
 *
 * get shop flash sale items and item detail
 */
export type ShopeeGetShopFlashSaleItemsResponse = ShopeeResponseCommon<ShopeeGetShopFlashSaleItemsResponseData>;

/**
 * ShopeeGetShopFlashSaleListResponseData sub-interface for ShopeeGetShopFlashSaleListResponse
 */
export interface ShopeeGetShopFlashSaleListResponseData {
  /**
   * the number of shop flash sale that the shop has
   */
  total_count?: number;
}

/**
 * Response payload for get_shop_flash_sale_list
 *
 * get shop flash sale list
 */
export type ShopeeGetShopFlashSaleListResponse = ShopeeResponseCommon<ShopeeGetShopFlashSaleListResponseData>;

/**
 * ShopeeGetTimeSlotIdResponseDataItem sub-interface for ShopeeGetTimeSlotIdResponse
 */
export interface ShopeeGetTimeSlotIdResponseDataItem {
  timeslot_id?: number;
  /**
   * the start time of time slot
   */
  start_time?: number;
  /**
   * the end time of time slot
   */
  end_time?: number;
}

/**
 * Response data payload for get_time_slot_id
 */
export type ShopeeGetTimeSlotIdResponseData = ShopeeGetTimeSlotIdResponseDataItem[];

/**
 * Response payload for get_time_slot_id
 *
 * get time slot id
 */
export type ShopeeGetTimeSlotIdResponse = ShopeeResponseCommon<ShopeeGetTimeSlotIdResponseData>;

/**
 * ShopeeUpdateShopFlashSaleResponseData sub-interface for ShopeeUpdateShopFlashSaleResponse
 */
export interface ShopeeUpdateShopFlashSaleResponseData {
  timeslot_id?: number;
  flash_sale_id?: number;
  /**
   * the status of shop flash sale0: deleted1: enabled2: disabled3: system_rejected, you cannot edit the shop flash sale in 'system_rejected' status
   */
  status?: number;
}

/**
 * Response payload for update_shop_flash_sale
 *
 * edit shop flash sale(enable, disable)
 */
export type ShopeeUpdateShopFlashSaleResponse = ShopeeResponseCommon<ShopeeUpdateShopFlashSaleResponseData>;

/**
 * ShopeeUpdateShopFlashSaleItemsUnqualifiedCondition sub-interface for ShopeeUpdateShopFlashSaleItemsFailedItem
 */
export interface ShopeeUpdateShopFlashSaleItemsUnqualifiedCondition {
  unqualified_code?: number;
  unqualified_msg?: string;
}

/**
 * ShopeeUpdateShopFlashSaleItemsFailedItem sub-interface for ShopeeUpdateShopFlashSaleItemsResponseData
 */
export interface ShopeeUpdateShopFlashSaleItemsFailedItem {
  item_id?: number;
  /**
   * If the item has no variation, this field will be empty
   */
  model_id?: number;
  err_code?: number;
  /**
   * the reason why the model cannot be added
   */
  err_msg?: string;
  /**
   * if the model doesn't meet a criteria, will show the detail in this field
   */
  unqualified_conditions?: ShopeeUpdateShopFlashSaleItemsUnqualifiedCondition[];
}

/**
 * ShopeeUpdateShopFlashSaleItemsResponseData sub-interface for ShopeeUpdateShopFlashSaleItemsResponse
 */
export interface ShopeeUpdateShopFlashSaleItemsResponseData {
  failed_items?: ShopeeUpdateShopFlashSaleItemsFailedItem[];
}

/**
 * Response payload for update_shop_flash_sale_items
 *
 * edit shop flash sale item, you can only edit the models in disbaled or enabled status
 */
export type ShopeeUpdateShopFlashSaleItemsResponse = ShopeeResponseCommon<ShopeeUpdateShopFlashSaleItemsResponseData>;
