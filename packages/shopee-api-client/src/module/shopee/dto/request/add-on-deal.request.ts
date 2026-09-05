/**
 * Request parameters for add_add_on_deal
 *
 * Add Add-on Deal
 */
export interface ShopeeAddAddOnDealRequest {
  /**
   * Title of the add on deal
   */
  add_on_deal_name: string;
  /**
   * The time when add on deal activity start.
   */
  start_time: number;
  /**
   * The time when add on deal activity end
   */
  end_time: number;
  /**
   * The type of add on deal：add on discount =0；gift with mini spend=1
   */
  promotion_type: number;
  /**
   * The minimum purchase amount that needs to be met to buy the gift with min.Spend
   */
  purchase_min_spend?: number;
  /**
   * Number of gifts that buyers can get
   */
  per_gift_num?: number;
  /**
   * promotion_purchase_limit
   */
  promotion_purchase_limit?: number;
}

/**
 * ShopeeAddAddOnDealMainItemMainItem sub-interface for ShopeeAddAddOnDealMainItemRequest
 */
export interface ShopeeAddAddOnDealMainItemMainItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status: number;
}

/**
 * Request parameters for add_add_on_deal_main_item
 *
 * Add Add-on Deal Main Item
 */
export interface ShopeeAddAddOnDealMainItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list: ShopeeAddAddOnDealMainItemMainItem[];
}

/**
 * ShopeeAddAddOnDealSubItemSubItem sub-interface for ShopeeAddAddOnDealSubItemRequest
 */
export interface ShopeeAddAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
  /**
   * Add-on discount price before tax
   */
  sub_item_input_price?: number;
  /**
   * The purchase limit of sub item.
   */
  sub_item_limit?: number;
}

/**
 * Request parameters for add_add_on_deal_sub_item
 *
 * Add Add-on Deal Sub Item
 */
export interface ShopeeAddAddOnDealSubItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list: ShopeeAddAddOnDealSubItemSubItem[];
}

/**
 * Request parameters for delete_add_on_deal
 *
 * Delete Add-on Deal
 */
export interface ShopeeDeleteAddOnDealRequest {
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id: number;
}

/**
 * Request parameters for delete_add_on_deal_main_item
 *
 * Delete Add-on Deal Main Item
 */
export interface ShopeeDeleteAddOnDealMainItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list: number[];
}

/**
 * ShopeeDeleteAddOnDealSubItemSubItem sub-interface for ShopeeDeleteAddOnDealSubItemRequest
 */
export interface ShopeeDeleteAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
}

/**
 * Request parameters for delete_add_on_deal_sub_item
 *
 * Delete Add-on Deal Sub Item
 */
export interface ShopeeDeleteAddOnDealSubItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list: ShopeeDeleteAddOnDealSubItemSubItem[];
}

/**
 * Request parameters for end_add_on_deal
 *
 * End Add-on Deal
 */
export interface ShopeeEndAddOnDealRequest {
  /**
   * The identifier of the API request for error tracking
   */
  add_on_deal_id: number;
}

/**
 * Request parameters for get_add_on_deal
 *
 * Get Add-on Deal
 */
export interface ShopeeGetAddOnDealRequest {
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id: number;
}

/**
 * Request parameters for get_add_on_deal_list
 *
 * Get Add-on Deal List
 */
export interface ShopeeGetAddOnDealListRequest {
  /**
   * The Status of add on deal，default status is all
   */
  promotion_status: string;
  /**
   * The default page number is 1
   */
  page_no?: number;
  /**
   * The default page size is 100
   */
  page_size?: number;
}

/**
 * Request parameters for get_add_on_deal_main_item
 *
 * Get Add-on Deal Main Item
 */
export interface ShopeeGetAddOnDealMainItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
}

/**
 * Request parameters for get_add_on_deal_sub_item
 *
 * Get Add-on Deal Sub Item
 */
export interface ShopeeGetAddOnDealSubItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
}

/**
 * Request parameters for update_add_on_deal
 *
 * Update Add-on Deal
 */
export interface ShopeeUpdateAddOnDealRequest {
  /**
   * Shopee's unique identifier for an add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The time when bundle deal activity start.The start time must be 1 hour than current time.
   */
  start_time?: number;
  /**
   * The time when bundle deal activity end. The end time must be later than start time.
   */
  end_time?: number;
  /**
   * The minimum purchase amount that needs to be met to buy the gift with min.Spend
   */
  purchase_min_spend?: number;
  /**
   * Number of gifts that buyers can get
   */
  per_gift_num?: number;
  /**
   * Max. number of add-on products that a customer can purchase per order.
   */
  promotion_purchase_limit?: number;
  /**
   * The order of sub item
   */
  sub_item_priority?: number[];
  /**
   * Title of the add on deal
   */
  add_on_deal_name?: string;
}

/**
 * ShopeeUpdateAddOnDealMainItemMainItem sub-interface for ShopeeUpdateAddOnDealMainItemRequest
 */
export interface ShopeeUpdateAddOnDealMainItemMainItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status: number;
}

/**
 * Request parameters for update_add_on_deal_main_item
 *
 * Update Add-on Deal Main Item
 */
export interface ShopeeUpdateAddOnDealMainItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The main items added in this add on deal promotion.
   */
  main_item_list: ShopeeUpdateAddOnDealMainItemMainItem[];
}

/**
 * ShopeeUpdateAddOnDealSubItemSubItem sub-interface for ShopeeUpdateAddOnDealSubItemRequest
 */
export interface ShopeeUpdateAddOnDealSubItemSubItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  /**
   * The status of add on deal item：enable = 1；disable =2
   */
  status?: number;
  /**
   * Add-on discount price before tax
   */
  sub_item_input_price?: number;
  /**
   * The purchase limit of sub item.The purchase limit of each sub item. Only the add on discount can be set and the default limit of gift with mini.spend is 1
   */
  sub_item_limit?: number;
}

/**
 * Request parameters for update_add_on_deal_sub_item
 *
 * Update Add-on Deal Sub Item
 */
export interface ShopeeUpdateAddOnDealSubItemRequest {
  /**
   * Shopee's unique identifier for add on deal activity.
   */
  add_on_deal_id: number;
  /**
   * The sub items added in this add on deal promotion.
   */
  sub_item_list: ShopeeUpdateAddOnDealSubItemSubItem[];
}
