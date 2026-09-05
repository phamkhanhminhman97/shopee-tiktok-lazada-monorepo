import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeStatus
 */
export enum ShopeeStatus {
  UPCOMING = "upcoming",
  ONGOING = "ongoing",
}

/**
 * ShopeeAddDiscountResponseData sub-interface for ShopeeAddDiscountResponse
 */
export interface ShopeeAddDiscountResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
}

/**
 * Response payload for add_discount
 *
 * Use this api to add shop discount activity
 */
export type ShopeeAddDiscountResponse = ShopeeResponseCommon<ShopeeAddDiscountResponseData>;

/**
 * ShopeeAddDiscountItemError sub-interface for ShopeeAddDiscountItemResponseData
 */
export interface ShopeeAddDiscountItemError {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  model_id?: number;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
}

/**
 * ShopeeAddDiscountItemResponseData sub-interface for ShopeeAddDiscountItemResponse
 */
export interface ShopeeAddDiscountItemResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The number of items that add successfully.
   */
  count?: number;
  /**
   * Indicate error details.
   */
  error_list?: ShopeeAddDiscountItemError[];
}

/**
 * Response payload for add_discount_item
 *
 * Use this api to add shop discount item.
 */
export type ShopeeAddDiscountItemResponse = ShopeeResponseCommon<ShopeeAddDiscountItemResponseData>;

/**
 * ShopeeDeleteDiscountResponseData sub-interface for ShopeeDeleteDiscountResponse
 */
export interface ShopeeDeleteDiscountResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The time when discount has been deleted.
   */
  modify_time?: number;
}

/**
 * Response payload for delete_discount
 *
 * Use this api to delete one discount activity
 */
export type ShopeeDeleteDiscountResponse = ShopeeResponseCommon<ShopeeDeleteDiscountResponseData>;

/**
 * ShopeeDeleteDiscountItemError sub-interface for ShopeeDeleteDiscountItemResponseData
 */
export interface ShopeeDeleteDiscountItemError {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  model_id?: number;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
}

/**
 * ShopeeDeleteDiscountItemResponseData sub-interface for ShopeeDeleteDiscountItemResponse
 */
export interface ShopeeDeleteDiscountItemResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * Detail informations about error.
   */
  error_list?: ShopeeDeleteDiscountItemError[];
}

/**
 * Response payload for delete_discount_item
 *
 * Use this api to delete items of the discount activity
 */
export type ShopeeDeleteDiscountItemResponse = ShopeeResponseCommon<ShopeeDeleteDiscountItemResponseData>;

/**
 * ShopeeDeleteSipDiscountResponseData sub-interface for ShopeeDeleteSipDiscountResponse
 */
export interface ShopeeDeleteSipDiscountResponseData {
  /**
   * The region of SIP affiliate shop that needs to delete discount.
   */
  region?: string;
}

/**
 * Response payload for delete_sip_discount
 *
 * Delete SIP Overseas Discounts for SIP affiliate region. Please use Primary shop's Shop ID to request, and provide the region of the Affiliate shop to be deleted, the API will delete the discount from that region's Affiliate shop.
 */
export type ShopeeDeleteSipDiscountResponse = ShopeeResponseCommon<ShopeeDeleteSipDiscountResponseData>;

/**
 * ShopeeEndDiscountResponseData sub-interface for ShopeeEndDiscountResponse
 */
export interface ShopeeEndDiscountResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The time to track the modified time.
   */
  modify_time?: number;
}

/**
 * Response payload for end_discount
 *
 * Use this api to end shop discount activity
 */
export type ShopeeEndDiscountResponse = ShopeeResponseCommon<ShopeeEndDiscountResponseData>;

/**
 * ShopeeGetDiscountModel sub-interface for ShopeeGetDiscountItem
 */
export interface ShopeeGetDiscountModel {
  /**
   * Shopee's unique identifier for a variation of an item.
   */
  model_id?: number;
  /**
   * Name of the variation that belongs to the same item.
   */
  model_name?: string;
  /**
   * The current stock quantity of the variation.
   */
  model_normal_stock?: number;
  /**
   * The reserved stock of the model.
   */
  model_promotion_stock?: number;
  /**
   * The original price before discount of the variation.
   */
  model_original_price?: number;
  /**
   * The discount price of the variation.
   */
  model_promotion_price?: number;
  /**
   * The original price after tax of model (Only for taxable Shop).
   */
  model_inflated_price_of_original_price?: number;
  /**
   * The discount price after tax of model (Only for taxable Shop).
   */
  model_inflated_price_of_promotion_price?: number;
  /**
   * The local price of model calculated as: Local Price = CB Original Price × Local Adjustment Rate.Reflects the final local price derived from shop-level adjustment rules and is denominated in local currency.
   */
  model_local_price?: number;
  /**
   * The local discount price of model calculated as: Local Discount Price = Local Price × Discount Rate.Reflects the final local seller discount price derived from setting a seller discount and is denominated in local currency.
   */
  model_local_promotion_price?: number;
  /**
   * The local price after tax of model (Only for taxable Shop).
   */
  model_local_price_inflated?: number;
  /**
   * The local discount price after tax of model (Only for taxable Shop).
   */
  model_local_promotion_price_inflated?: number;
}

/**
 * ShopeeGetDiscountItem sub-interface for ShopeeGetDiscountResponseData
 */
export interface ShopeeGetDiscountItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Name of the item in local language.
   */
  item_name?: string;
  /**
   * The current stock quantity of the item.
   */
  normal_stock?: number;
  /**
   * The reserved stock of the item. If the item has no variation, this param is necessary.
   */
  item_promotion_stock?: number;
  /**
   * The original price before discount of the item. If there is variation, this value is 0.
   */
  item_original_price?: number;
  /**
   * The discount price of the item. If there is variation, this value is 0.
   */
  item_promotion_price?: number;
  /**
   * The original price after tax of item (Only for taxable Shop).
   */
  item_inflated_price_of_original_price?: number;
  /**
   * The discount price after tax of item (Only for taxable Shop).
   */
  item_inflated_price_of_promotion_price?: number;
  /**
   * The local price of item calculated as: Local Price = CB Original Price × Local Adjustment Rate.Reflects the final local price derived from shop-level adjustment rules and is denominated in local currency.
   */
  item_local_price?: number;
  /**
   * The local discount price of item calculated as: Local Discount Price = Local Price × Discount Rate.Reflects the final local seller discount price derived from setting a seller discount and is denominated in local currency.
   */
  item_local_promotion_price?: number;
  /**
   * The local price after tax of item (Only for taxable Shop).
   */
  item_local_price_inflated?: number;
  /**
   * The local discount price after tax of item (Only for taxable Shop).
   */
  item_local_promotion_price_inflated?: number;
  /**
   * The models belong to this item.
   */
  model_list?: ShopeeGetDiscountModel[];
  /**
   * The max number of this product in the promotion price.
   */
  purchase_limit?: number;
}

/**
 * ShopeeGetDiscountResponseData sub-interface for ShopeeGetDiscountResponse
 */
export interface ShopeeGetDiscountResponseData {
  /**
   * The status of discount promotion
   */
  status?: string;
  /**
   * Title of the discount.
   */
  discount_name?: string;
  /**
   * The items selected in this discount.
   */
  item_list?: ShopeeGetDiscountItem[];
  /**
   * The time when discount activity start.
   */
  start_time?: number;
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The time when discount activity end.
   */
  end_time?: number;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more?: boolean;
}

/**
 * Response payload for get_discount
 *
 * Use this api to get one shop discount activity detail
 */
export type ShopeeGetDiscountResponse = ShopeeResponseCommon<ShopeeGetDiscountResponseData>;

/**
 * ShopeeGetDiscountListDiscount sub-interface for ShopeeGetDiscountListResponseData
 */
export interface ShopeeGetDiscountListDiscount {
  /**
   * The status of discount.
   */
  status?: string;
  /**
   * Title of the discount.
   */
  discount_name?: string;
  /**
   * The time when discount activity start.
   */
  start_time?: number;
  /**
   * The time when discount activity end.
   */
  end_time?: number;
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * Source of the discount. 7: live stream, 1: admin, 0: others
   */
  source?: number;
}

/**
 * ShopeeGetDiscountListResponseData sub-interface for ShopeeGetDiscountListResponse
 */
export interface ShopeeGetDiscountListResponseData {
  /**
   * The discounts created in this shop.
   */
  discount_list?: ShopeeGetDiscountListDiscount[];
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more?: boolean;
}

/**
 * Response payload for get_discount_list
 *
 * Use this api to get shop discount activity list
 */
export type ShopeeGetDiscountListResponse = ShopeeResponseCommon<ShopeeGetDiscountListResponseData>;

/**
 * ShopeeGetSipDiscountsDiscount sub-interface for ShopeeGetSipDiscountsResponseData
 */
export interface ShopeeGetSipDiscountsDiscount {
  /**
   * The region of SIP affiliate shop.
   */
  region?: string;
  /**
   * The status of discount for SIP affiliate shop in current region, can be upcoming/ongoing, excluding expired discounts.
   */
  status?: ShopeeStatus | string | number;
  /**
   * The discount rate set for SIP affiliate shop in current region.
   */
  sip_discount_rate?: number;
  /**
   * The start time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  start_time?: number;
  /**
   * The end time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  end_time?: number;
  /**
   * The create time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  create_time?: number;
  /**
   * The latest update time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  update_time?: number;
}

/**
 * ShopeeGetSipDiscountsResponseData sub-interface for ShopeeGetSipDiscountsResponse
 */
export interface ShopeeGetSipDiscountsResponseData {
  /**
   * List of discounts in each region. Will be filtered based on the "region" request parameter.
   */
  discount_list?: ShopeeGetSipDiscountsDiscount[];
}

/**
 * Response payload for get_sip_discounts
 *
 * Get SIP Overseas Discounts. Only regions that have upcoming/ongoing discounts will be returned. Please use Primary shop's Shop ID to request, the API will return the list of Affiliate shops under this Primary shop that have set discounts, along with the discount details.
 */
export type ShopeeGetSipDiscountsResponse = ShopeeResponseCommon<ShopeeGetSipDiscountsResponseData>;

/**
 * ShopeeSetSipDiscountResponseData sub-interface for ShopeeSetSipDiscountResponse
 */
export interface ShopeeSetSipDiscountResponseData {
  /**
   * The region of SIP affiliate shop.
   */
  region?: string;
  /**
   * The status of discount for SIP affiliate shop in current region, can be upcoming/ongoing, excluding expired discounts.
   */
  status?: ShopeeStatus | string | number;
  /**
   * The discount rate set for SIP affiliate shop in current region.
   */
  sip_discount_rate?: number;
  /**
   * The start time of discount for SIP affiliate shop in current region, in UNIX seconds.Note: The start time is 30 minutes after the sellers set up the sip_discount_rate.
   */
  start_time?: number;
  /**
   * The end time of discount for SIP affiliate shop in current region, in UNIX seconds.Note: The end time is 180 days after the start time.
   */
  end_time?: number;
  /**
   * The create time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  create_time?: number;
  /**
   * The latest update time of discount for SIP affiliate shop in current region, in UNIX seconds.
   */
  update_time?: number;
}

/**
 * Response payload for set_sip_discount
 *
 * Set SIP Overseas Discount for SIP affiliate region. Please use Primary shop's Shop ID to request, and provide the region and discount rate of the Affiliate shop to be set or update, the API will set or update the discount rate for that region's Affiliate shop.
 */
export type ShopeeSetSipDiscountResponse = ShopeeResponseCommon<ShopeeSetSipDiscountResponseData>;

/**
 * ShopeeUpdateDiscountResponseData sub-interface for ShopeeUpdateDiscountResponse
 */
export interface ShopeeUpdateDiscountResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The time when discount is updated.
   */
  modify_time?: number;
}

/**
 * Response payload for update_discount
 *
 * Use this api to update one discount information
 */
export type ShopeeUpdateDiscountResponse = ShopeeResponseCommon<ShopeeUpdateDiscountResponseData>;

/**
 * ShopeeUpdateDiscountItemError sub-interface for ShopeeUpdateDiscountItemResponseData
 */
export interface ShopeeUpdateDiscountItemError {
  /**
   * The items which have something error.
   */
  item_id?: number;
  /**
   * The models which have something error.
   */
  model_id?: number;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
}

/**
 * ShopeeUpdateDiscountItemResponseData sub-interface for ShopeeUpdateDiscountItemResponse
 */
export interface ShopeeUpdateDiscountItemResponseData {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id?: number;
  /**
   * The number of items that modify successfully.
   */
  count?: number;
  /**
   * Error list of this discount.
   */
  error_list?: ShopeeUpdateDiscountItemError[];
}

/**
 * Response payload for update_discount_item
 *
 * Use this api to update items of the discount promotion.
 */
export type ShopeeUpdateDiscountItemResponse = ShopeeResponseCommon<ShopeeUpdateDiscountItemResponseData>;
