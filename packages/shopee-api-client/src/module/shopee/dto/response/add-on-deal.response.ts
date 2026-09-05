import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddAddOnDealResponseData sub-interface for ShopeeAddAddOnDealResponse
 */
export interface ShopeeAddAddOnDealResponseData {
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for add_add_on_deal
 *
 * Add Add-on Deal
 */
export type ShopeeAddAddOnDealResponse = ShopeeResponseCommon<ShopeeAddAddOnDealResponseData>;

/**
 * ShopeeAddAddOnDealMainItem_AddAddOnDealMainItemMainItem sub-interface for ShopeeAddAddOnDealMainItemResponseData
 */
export interface ShopeeAddAddOnDealMainItem_AddAddOnDealMainItemMainItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
}

/**
 * ShopeeAddAddOnDealMainItemResponseData sub-interface for ShopeeAddAddOnDealMainItemResponse
 */
export interface ShopeeAddAddOnDealMainItemResponseData {
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list?: ShopeeAddAddOnDealMainItem_AddAddOnDealMainItemMainItem[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for add_add_on_deal_main_item
 *
 * Add Add-on Deal Main Item
 */
export type ShopeeAddAddOnDealMainItemResponse = ShopeeResponseCommon<ShopeeAddAddOnDealMainItemResponseData>;

/**
 * ShopeeAddAddOnDealSubItem_AddAddOnDealSubItemSubItem sub-interface for ShopeeAddAddOnDealSubItemResponseData
 */
export interface ShopeeAddAddOnDealSubItem_AddAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  fail_error?: string;
  fail_message?: string;
}

/**
 * ShopeeAddAddOnDealSubItemResponseData sub-interface for ShopeeAddAddOnDealSubItemResponse
 */
export interface ShopeeAddAddOnDealSubItemResponseData {
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list?: ShopeeAddAddOnDealSubItem_AddAddOnDealSubItemSubItem[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for add_add_on_deal_sub_item
 *
 * Add Add-on Deal Sub Item
 */
export type ShopeeAddAddOnDealSubItemResponse = ShopeeResponseCommon<ShopeeAddAddOnDealSubItemResponseData>;

/**
 * ShopeeDeleteAddOnDealResponseData sub-interface for ShopeeDeleteAddOnDealResponse
 */
export interface ShopeeDeleteAddOnDealResponseData {
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for delete_add_on_deal
 *
 * Delete Add-on Deal
 */
export type ShopeeDeleteAddOnDealResponse = ShopeeResponseCommon<ShopeeDeleteAddOnDealResponseData>;

/**
 * ShopeeDeleteAddOnDealMainItemResponseData sub-interface for ShopeeDeleteAddOnDealMainItemResponse
 */
export interface ShopeeDeleteAddOnDealMainItemResponseData {
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list?: number[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for delete_add_on_deal_main_item
 *
 * Delete Add-on Deal Main Item
 */
export type ShopeeDeleteAddOnDealMainItemResponse = ShopeeResponseCommon<ShopeeDeleteAddOnDealMainItemResponseData>;

/**
 * ShopeeDeleteAddOnDealSubItem_DeleteAddOnDealSubItemSubItem sub-interface for ShopeeDeleteAddOnDealSubItemResponseData
 */
export interface ShopeeDeleteAddOnDealSubItem_DeleteAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  fail_error?: string;
  fail_message?: string;
}

/**
 * ShopeeDeleteAddOnDealSubItemResponseData sub-interface for ShopeeDeleteAddOnDealSubItemResponse
 */
export interface ShopeeDeleteAddOnDealSubItemResponseData {
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list?: ShopeeDeleteAddOnDealSubItem_DeleteAddOnDealSubItemSubItem[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for delete_add_on_deal_sub_item
 *
 * Delete Add-on Deal Sub Item
 */
export type ShopeeDeleteAddOnDealSubItemResponse = ShopeeResponseCommon<ShopeeDeleteAddOnDealSubItemResponseData>;

/**
 * ShopeeEndAddOnDealResponseData sub-interface for ShopeeEndAddOnDealResponse
 */
export interface ShopeeEndAddOnDealResponseData {
  /**
   * The identifier of the API request for error tracking
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for end_add_on_deal
 *
 * End Add-on Deal
 */
export type ShopeeEndAddOnDealResponse = ShopeeResponseCommon<ShopeeEndAddOnDealResponseData>;

/**
 * ShopeeGetAddOnDealResponseData sub-interface for ShopeeGetAddOnDealResponse
 */
export interface ShopeeGetAddOnDealResponseData {
  /**
   * The time when add on deal activity start.
   */
  start_time?: number;
  /**
   * The time when add on deal activity end
   */
  end_time?: number;
  /**
   * The type of add on deal：add on discount =0；gift with mini spend=1
   */
  promotion_type?: number;
  /**
   * The minimum purchase amount that needs to be met to buy the gift with min.Spend
   */
  purchase_min_spend?: number;
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id?: number;
  /**
   * Number of gifts that buyers can get
   */
  per_gift_num?: number;
  /**
   * The order of the sub item
   */
  sub_item_priority?: number[];
  /**
   * Max. number of add-on products that a customer can purchase per order.
   */
  promotion_purchase_limit?: number;
  /**
   * Title of the add on deal
   */
  add_on_deal_name?: string;
  source?: number;
}

/**
 * Response payload for get_add_on_deal
 *
 * Get Add-on Deal
 */
export type ShopeeGetAddOnDealResponse = ShopeeResponseCommon<ShopeeGetAddOnDealResponseData>;

/**
 * ShopeeGetAddOnDealListAddOnDeal sub-interface for ShopeeGetAddOnDealListResponseData
 */
export interface ShopeeGetAddOnDealListAddOnDeal {
  /**
   * The time when add on deal activity start.
   */
  start_time?: number;
  /**
   * The time when add on deal activity end
   */
  end_time?: number;
  /**
   * The type of add on deal：add on discount =0；gift with mini spend=1
   */
  promotion_type?: number;
  /**
   * The minimum purchase amount that needs to be met to buy the gift with min.Spend
   */
  purchase_min_spend?: number;
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id?: number;
  /**
   * Number of gifts that buyers can get
   */
  per_gift_num?: number;
  /**
   * Max. number of add-on products that a customer can purchase per order.
   */
  promotion_purchase_limit?: number;
  /**
   * Title of the add on deal
   */
  add_on_deal_name?: string;
  /**
   * The create source of bundle deal：Seller=1，shopee admin=0
   */
  source?: number;
  /**
   * The display sequence of sub item in buyer side
   */
  sub_item_prioriry?: number[];
}

/**
 * ShopeeGetAddOnDealListResponseData sub-interface for ShopeeGetAddOnDealListResponse
 */
export interface ShopeeGetAddOnDealListResponseData {
  /**
   * The list of add on deal id
   */
  add_on_deal_list?: ShopeeGetAddOnDealListAddOnDeal[];
  /**
   * This is to indicate whether the promotion list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of promotions.
   */
  more?: boolean;
}

/**
 * Response payload for get_add_on_deal_list
 *
 * Get Add-on Deal List
 */
export type ShopeeGetAddOnDealListResponse = ShopeeResponseCommon<ShopeeGetAddOnDealListResponseData>;

/**
 * ShopeeGetAddOnDealMainItemMainItem sub-interface for ShopeeGetAddOnDealMainItemResponseData
 */
export interface ShopeeGetAddOnDealMainItemMainItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
}

/**
 * ShopeeGetAddOnDealMainItemResponseData sub-interface for ShopeeGetAddOnDealMainItemResponse
 */
export interface ShopeeGetAddOnDealMainItemResponseData {
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list?: ShopeeGetAddOnDealMainItemMainItem[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for get_add_on_deal_main_item
 *
 * Get Add-on Deal Main Item
 */
export type ShopeeGetAddOnDealMainItemResponse = ShopeeResponseCommon<ShopeeGetAddOnDealMainItemResponseData>;

/**
 * ShopeeGetAddOnDealSubItemPrice sub-interface for ShopeeGetAddOnDealSubItemSubItem
 */
export interface ShopeeGetAddOnDealSubItemPrice {
  /**
   * Add-on discount price before tax
   */
  promo_input_price?: number;
  /**
   * Add-on discount price after tax
   */
  promo_price?: number;
}

/**
 * ShopeeGetAddOnDealSubItemSubItem sub-interface for ShopeeGetAddOnDealSubItemResponseData
 */
export interface ShopeeGetAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
  /**
   * The purchase limit of each sub item. Only the add on discount can be set and the default limit of gift with mini.spend is 1
   */
  sub_item_limit?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  price?: ShopeeGetAddOnDealSubItemPrice;
}

/**
 * ShopeeGetAddOnDealSubItemResponseData sub-interface for ShopeeGetAddOnDealSubItemResponse
 */
export interface ShopeeGetAddOnDealSubItemResponseData {
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list?: ShopeeGetAddOnDealSubItemSubItem[];
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id?: number;
}

/**
 * Response payload for get_add_on_deal_sub_item
 *
 * Get Add-on Deal Sub Item
 */
export type ShopeeGetAddOnDealSubItemResponse = ShopeeResponseCommon<ShopeeGetAddOnDealSubItemResponseData>;

/**
 * ShopeeUpdateAddOnDealResponseData sub-interface for ShopeeUpdateAddOnDealResponse
 */
export interface ShopeeUpdateAddOnDealResponseData {
  /**
   * The time when add on deal activity start.
   */
  start_time?: number;
  /**
   * The time when add on deal activity end
   */
  end_time?: number;
  /**
   * The type of add on deal：add on discount =0；gift with mini spend=1
   */
  promotion_type?: number;
  /**
   * The minimum purchase amount that needs to be met to buy the gift with min.Spend
   */
  purchase_min_spend?: number;
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id?: number;
  /**
   * Number of gifts that buyers can get
   */
  per_gift_num?: number;
  /**
   * Max. number of add-on products that a customer can purchase per order.
   */
  promotion_purchase_limit?: number;
  /**
   * Title of the add on deal
   */
  add_on_deal_name?: string;
}

/**
 * Response payload for update_add_on_deal
 *
 * Update Add-on Deal
 */
export type ShopeeUpdateAddOnDealResponse = ShopeeResponseCommon<ShopeeUpdateAddOnDealResponseData>;

/**
 * ShopeeUpdateAddOnDealMainItem_UpdateAddOnDealMainItemMainItem sub-interface for ShopeeUpdateAddOnDealMainItemResponseData
 */
export interface ShopeeUpdateAddOnDealMainItem_UpdateAddOnDealMainItemMainItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
}

/**
 * ShopeeUpdateAddOnDealMainItemResponseData sub-interface for ShopeeUpdateAddOnDealMainItemResponse
 */
export interface ShopeeUpdateAddOnDealMainItemResponseData {
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list?: ShopeeUpdateAddOnDealMainItem_UpdateAddOnDealMainItemMainItem[];
}

/**
 * Response payload for update_add_on_deal_main_item
 *
 * Update Add-on Deal Main Item
 */
export type ShopeeUpdateAddOnDealMainItemResponse = ShopeeResponseCommon<ShopeeUpdateAddOnDealMainItemResponseData>;

/**
 * ShopeeUpdateAddOnDealSubItem_UpdateAddOnDealSubItemSubItem sub-interface for ShopeeUpdateAddOnDealSubItemResponseData
 */
export interface ShopeeUpdateAddOnDealSubItem_UpdateAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  fail_error?: string;
  fail_message?: string;
  /**
   * The discounted price of sub item
   */
  sub_item_input_price?: number;
  /**
   * The purchase limit of sub item.The purchase limit of each sub item. Only the add on discount can be set and the default limit of gift with mini.spend is 1
   */
  sub_item_limit?: number;
}

/**
 * ShopeeUpdateAddOnDealSubItemResponseData sub-interface for ShopeeUpdateAddOnDealSubItemResponse
 */
export interface ShopeeUpdateAddOnDealSubItemResponseData {
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list?: ShopeeUpdateAddOnDealSubItem_UpdateAddOnDealSubItemSubItem[];
}

/**
 * Response payload for update_add_on_deal_sub_item
 *
 * Update Add-on Deal Sub Item
 */
export type ShopeeUpdateAddOnDealSubItemResponse = ShopeeResponseCommon<ShopeeUpdateAddOnDealSubItemResponseData>;
