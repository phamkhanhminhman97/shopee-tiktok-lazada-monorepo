/**
 * Enum generated for field ShopeeDiscountStatus
 */
export enum ShopeeDiscountStatus {
  UPCOMING = "upcoming",
  ONGOING = "ongoing",
  EXPIRED = "expired",
  ALL = "all",
}

/**
 * Request parameters for add_discount
 *
 * Use this api to add shop discount activity
 */
export interface ShopeeAddDiscountRequest {
  /**
   * Title of the discount.
   */
  discount_name: string;
  /**
   * The time when discount activity start.The start time must be 1 hour later than current time.
   */
  start_time: number;
  /**
   * The time when discount activity end.The end time must be 1 hour later than start time,and the discount period must be less than 180 days.
   */
  end_time: number;
}

/**
 * ShopeeAddDiscountItemModel sub-interface for ShopeeAddDiscountItemItem
 */
export interface ShopeeAddDiscountItemModel {
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  model_id: number;
  /**
   * The discount price of the item.
   */
  model_promotion_price: number;
  /**
   * The reserved stock of the model, default is no limit, and can not update. To edit the promotion stock, you need to delete the exist discount and re-add again.
   */
  model_promotion_stock?: number;
}

/**
 * ShopeeAddDiscountItemItem sub-interface for ShopeeAddDiscountItemRequest
 */
export interface ShopeeAddDiscountItemItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The discount price of the item. If the item has no variation, this param is necessary.
   */
  item_promotion_price?: number;
  /**
   * The reserved stock of the item.
   */
  item_promotion_stock?: number;
  /**
   * The models which belongs to this item.
   */
  model_list?: ShopeeAddDiscountItemModel[];
  /**
   * The max number of this product in the promotion price. If it's No Limit, please input the 0 for this request data.
   */
  purchase_limit: number;
}

/**
 * Request parameters for add_discount_item
 *
 * Use this api to add shop discount item.
 */
export interface ShopeeAddDiscountItemRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
  /**
   * The items added in this discount promotion.
   */
  item_list: ShopeeAddDiscountItemItem[];
}

/**
 * Request parameters for delete_discount
 *
 * Use this api to delete one discount activity
 */
export interface ShopeeDeleteDiscountRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
}

/**
 * Request parameters for delete_discount_item
 *
 * Use this api to delete items of the discount activity
 */
export interface ShopeeDeleteDiscountItemRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  model_id?: number;
}

/**
 * Request parameters for delete_sip_discount
 *
 * Delete SIP Overseas Discounts for SIP affiliate region. Please use Primary shop's Shop ID to request, and provide the region of the Affiliate shop to be deleted, the API will delete the discount from that region's Affiliate shop.
 */
export interface ShopeeDeleteSipDiscountRequest {
  /**
   * The region of SIP affiliate shop that needs to delete discount.
   */
  region: string;
}

/**
 * Request parameters for end_discount
 *
 * Use this api to end shop discount activity
 */
export interface ShopeeEndDiscountRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
}

/**
 * Request parameters for get_discount
 *
 * Use this api to get one shop discount activity detail
 */
export interface ShopeeGetDiscountRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.
   */
  page_size: number;
}

/**
 * Request parameters for get_discount_list
 *
 * Use this api to get shop discount activity list
 */
export interface ShopeeGetDiscountListRequest {
  /**
   * The status filter for retriveing discount list. Available value: upcoming/ongoing/expired/all.
   */
  discount_status: ShopeeDiscountStatus | string | number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * If many items are available to retrieve, you may need to call GetDiscountsList multiple times to retrieve all the data. Each result set is returned as a page of entries. Use the Pagination filters to control the maximum number of entries (<= 100) to retrieve per page (i.e., per call), the offset number to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.
   */
  page_size: number;
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The maximum date range that may be specified with the update_time_from and update_time_to fields is 30 days.
   */
  update_time_from?: number;
  /**
   * The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The maximum date range that may be specified with the update_time_from and update_time_to fields is 30 days.
   */
  update_time_to?: number;
}

/**
 * Request parameters for get_sip_discounts
 *
 * Get SIP Overseas Discounts. Only regions that have upcoming/ongoing discounts will be returned. Please use Primary shop's Shop ID to request, the API will return the list of Affiliate shops under this Primary shop that have set discounts, along with the discount details.
 */
export interface ShopeeGetSipDiscountsRequest {
  /**
   * The region of SIP affiliate shop that needs to get discount information.If do not pass, will return the discount information set for all SIP affiliate shops.
   */
  region?: string;
}

/**
 * Request parameters for set_sip_discount
 *
 * Set SIP Overseas Discount for SIP affiliate region. Please use Primary shop's Shop ID to request, and provide the region and discount rate of the Affiliate shop to be set or update, the API will set or update the discount rate for that region's Affiliate shop.
 */
export interface ShopeeSetSipDiscountRequest {
  /**
   * The region of SIP affiliate shop that needs to set discount.
   */
  region: string;
  /**
   * The overall market discount rate that will apply to all items for SIP affiliate shop in current region.
   */
  sip_discount_rate: number;
}

/**
 * Request parameters for update_discount
 *
 * Use this api to update one discount information
 */
export interface ShopeeUpdateDiscountRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
  /**
   * Title of the discount.
   */
  discount_name?: string;
  /**
   * The time when discount activity end. The end time must be 1 hour later than start time.
   */
  end_time?: number;
  /**
   * The time when discount activity start. The new start time must later than original start time.
   */
  start_time?: number;
}

/**
 * ShopeeUpdateDiscountItemModel sub-interface for ShopeeUpdateDiscountItemItem
 */
export interface ShopeeUpdateDiscountItemModel {
  /**
   * Shopee's unique identifier for a variation of an item. If there is no variation of this item, you don't need to input this param. Dafault is 0.
   */
  model_id: number;
  /**
   * The discount price of the item.
   */
  model_promotion_price: number;
}

/**
 * ShopeeUpdateDiscountItemItem sub-interface for ShopeeUpdateDiscountItemRequest
 */
export interface ShopeeUpdateDiscountItemItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The discount price of the item.
   */
  item_promotion_price?: number;
  /**
   * The models selected to this discount.
   */
  model_list?: ShopeeUpdateDiscountItemModel[];
  /**
   * The max number of this product in the promotion price.
   */
  purchase_limit?: number;
}

/**
 * Request parameters for update_discount_item
 *
 * Use this api to update items of the discount promotion.
 */
export interface ShopeeUpdateDiscountItemRequest {
  /**
   * Shopee's unique identifier for a discount activity.
   */
  discount_id: number;
  /**
   * The items selected to this discount. You can update at most 50 items per call.
   */
  item_list: ShopeeUpdateDiscountItemItem[];
}
