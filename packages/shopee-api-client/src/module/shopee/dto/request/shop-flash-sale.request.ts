/**
 * ShopeeAddShopFlashSaleItemsModel sub-interface for ShopeeAddShopFlashSaleItemsItem
 */
export interface ShopeeAddShopFlashSaleItemsModel {
  /**
   * If the item has variation, this param is necessary.
   */
  model_id: number;
  /**
   * promotion price without tax
   */
  input_promo_price: number;
  /**
   * min=1, Campaign Stock, Campaign stock can only be reserved from either Shopee stock or Seller stock
   */
  stock: number;
}

/**
 * ShopeeAddShopFlashSaleItemsItem sub-interface for ShopeeAddShopFlashSaleItemsRequest
 */
export interface ShopeeAddShopFlashSaleItemsItem {
  item_id: number;
  /**
   * min=0, 0 means no limit
   */
  purchase_limit: number;
  /**
   * If the item has variation, this param is necessary.
   */
  models?: ShopeeAddShopFlashSaleItemsModel[];
  /**
   * promotion price without tax of the item. If the item has no variation, this param is necessary, otherwise don't use this field
   */
  item_input_promo_price?: number;
  /**
   * min=1, The campaign stock of the item. If the item has no variation, this param is necessary, otherwise don't use this field
   */
  item_stock?: number;
}

/**
 * Request parameters for add_shop_flash_sale_items
 *
 * add shop flash sale item
 */
export interface ShopeeAddShopFlashSaleItemsRequest {
  flash_sale_id: number;
  items: ShopeeAddShopFlashSaleItemsItem[];
}

/**
 * Request parameters for create_shop_flash_sale
 *
 * creat shop flash sale
 */
export interface ShopeeCreateShopFlashSaleRequest {
  /**
   * can get it from v2.shop_flash_sale.get_time_slot_id API, and you can only use the timeslot which start_time > now
   */
  timeslot_id: number;
}

/**
 * Request parameters for delete_shop_flash_sale
 *
 * delete shop flash sale
 */
export interface ShopeeDeleteShopFlashSaleRequest {
  /**
   * cannot delete ongoing and expired shop flash sale
   */
  flash_sale_id: number;
}

/**
 * Request parameters for delete_shop_flash_sale_items
 *
 * delete shop flash sale items
 */
export interface ShopeeDeleteShopFlashSaleItemsRequest {
  flash_sale_id: number;
  /**
   * if you delete a item, will delete all models of the item
   */
  item_ids: number[];
}

/**
 * Request parameters for get_item_criteria
 *
 * get shop flash sale item criteria
 */
export type ShopeeGetItemCriteriaRequest = Record<string, never>;

/**
 * Request parameters for get_shop_flash_sale
 *
 * get shop flash sale detail
 */
export interface ShopeeGetShopFlashSaleRequest {
  flash_sale_id: number;
}

/**
 * Request parameters for get_shop_flash_sale_items
 *
 * get shop flash sale items and item detail
 */
export interface ShopeeGetShopFlashSaleItemsRequest {
  flash_sale_id: number;
  /**
   * min=0,max=1000
   */
  offset: number;
  /**
   * min=1,max=100
   */
  limit: number;
}

/**
 * Request parameters for get_shop_flash_sale_list
 *
 * get shop flash sale list
 */
export interface ShopeeGetShopFlashSaleListRequest {
  /**
   * you can use this filed to search different state of shop flash sale0: all state1: upcoming state2: ongoing state3: expired state
   */
  type: number;
  /**
   * you should use start_time and end_time together, and start_time shoule be < end_time
   */
  start_time?: number;
  /**
   * you should use start_time and end_time together, and start_time shoule be < end_time
   */
  end_time?: number;
  /**
   * min=0,max=1000
   */
  offset: number;
  /**
   * min=1,max=100
   */
  limit: number;
}

/**
 * ShopeeGetShopFlashSaleListFlashSale sub-interface for ShopeeGetShopFlashSaleListResponse
 */
export interface ShopeeGetShopFlashSaleListFlashSale {
  timeslot_id?: number;
  flash_sale_id?: number;
  /**
   * the status of shop flash sale0: deleted1: enabled2: disabled3: system_rejected, you cannot edit the shop flash sale in 'system_rejected' status
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
  /**
   * No. of Reminders Set
   */
  remindme_count?: number;
  /**
   * No. of Product Clicks
   */
  click_count?: number;
}

/**
 * Request parameters for get_time_slot_id
 *
 * get time slot id
 */
export interface ShopeeGetTimeSlotIdRequest {
  /**
   * min = now, max=2145887999, should be < end_time
   */
  start_time: number;
  /**
   * should be > start_time, max=2145887999
   */
  end_time: number;
}

/**
 * Request parameters for update_shop_flash_sale
 *
 * edit shop flash sale(enable, disable)
 */
export interface ShopeeUpdateShopFlashSaleRequest {
  flash_sale_id: number;
  /**
   * the status of shop flash sale you want to set, you cannot edit the shop flash sale in 'system_rejected' statusDisabling this Flash Sale will disable all items in this session1: enable2: disbaled
   */
  status: number;
}

/**
 * ShopeeUpdateShopFlashSaleItemsModel sub-interface for ShopeeUpdateShopFlashSaleItemsItem
 */
export interface ShopeeUpdateShopFlashSaleItemsModel {
  /**
   * If the item has variation, this param is necessary.
   */
  model_id: number;
  /**
   * you can use this field to set the status of model0: disable1: enable
   */
  status: number;
  /**
   * promotion price without taxif the model is enabled(status  = 1) now, you can't set this field, you can only disable the modelif the model is disabled(status  = 0) now and you want to set this field, you should also set status to 1
   */
  input_promo_price?: number;
  /**
   * min=1, Campaign Stock, Campaign stock can only be reserved from either Shopee stock or Seller stockif the model is enabled(status  = 1) now, you can't set this field, you can only disable the modelif the model is disabled(status  = 0) now and you want to set this field, you should also set status to 1
   */
  stock?: number;
}

/**
 * ShopeeUpdateShopFlashSaleItemsItem sub-interface for ShopeeUpdateShopFlashSaleItemsRequest
 */
export interface ShopeeUpdateShopFlashSaleItemsItem {
  item_id: number;
  /**
   * min=0, 0 means no limitif the item is in enabled status or the item has models in enabled status, you can't set this field
   */
  purchase_limit?: number;
  /**
   * If the item has variation, this param is necessary, otherwise please don't use this field
   */
  models?: ShopeeUpdateShopFlashSaleItemsModel[];
  /**
   * The status of the item. If the item has no variation, this param is necessary, otherwise don't use this fieldyou can use this field to set the status of item0: disable1: enable
   */
  item_status?: number;
  /**
   * The promotion price of the item. If the item has no variation, you can use this field to update the promotion price of the item, otherwise don't use this fieldif the item is enabled(item_status  = 1) now, you can't set this field, you can only disable the itemif the item is disabled(item_status  = 0) now and you want to set this field, you should also set item_status to 1
   */
  item_input_promo_price?: number;
  /**
   * min=1, The campaign stock of the item. If the item has no variation, you can use this field to update the campaign stock of the item, otherwise don't use this fieldif the item is enabled(item_status  = 1) now, you can't set this field, you can only disable the itemif the item is disabled(item_status  = 0) now and you want to set this field, you should also set item_status to 1
   */
  item_stock?: number;
}

/**
 * Request parameters for update_shop_flash_sale_items
 *
 * edit shop flash sale item, you can only edit the models in disbaled or enabled status
 */
export interface ShopeeUpdateShopFlashSaleItemsRequest {
  flash_sale_id: number;
  items: ShopeeUpdateShopFlashSaleItemsItem[];
}
