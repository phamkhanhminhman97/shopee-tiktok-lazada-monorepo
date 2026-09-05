/**
 * ShopeeAddBundleDealAdditionalTier sub-interface for ShopeeAddBundleDealRequest
 */
export interface ShopeeAddBundleDealAdditionalTier {
  /**
   * The quantity of items that the buyers need to purchase for additional tier
   */
  min_amount: number;
  /**
   * The bundle price when the buyers purchase a bundle deal for additional tiers. Need to input it when the bundle deal rule type is 1.
   */
  fix_price?: number;
  /**
   * The bundle deal discount amount the buyer can save when purchasing a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The bundle deal discount% that the buyer can get when buying a bundle deal for additional tiers. Need to input it when the bundle deal rule type is 2
   */
  discount_percentage?: number;
}

/**
 * Request parameters for add_bundle_deal
 *
 * create bundle deal. Relevant restrictions refer to FAQ：https://open.shopee.com/faq/254
 */
export interface ShopeeAddBundleDealRequest {
  /**
   * The bundle deal rule type：FIX_PRICE = 1 ；DISCOUNT_PERCENTAGE = 2； DISCOUNT_VALUE = 3
   */
  rule_type: number;
  /**
   * The deducted price when when buying a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value: number;
  /**
   * The amount of the buyer needs to spend to purchase a bundle deal. Need to input it when the bundle deal rule type is 1
   */
  fix_price: number;
  /**
   * The discount that the buyer can get when buying a bundle deal. Need to input it when the bundle deal rule type is 2
   */
  discount_percentage: number;
  /**
   * The quantity of items that need buyer to combine purchased
   */
  min_amount: number;
  /**
   * The time when bundle deal activity start.The start time must be later than current time.
   */
  start_time: number;
  /**
   * The time when bundle deal activity end. The end time must be 1 hour later than start time.
   */
  end_time: number;
  /**
   * Title of the bundle deal
   */
  name: string;
  /**
   * Maximum number of bundle deals that can be bought by a buyer.
   */
  purchase_limit: number;
  /**
   * Use to create tiered discount for bundle deals, a max of 2 additional tiers are allowed to create.the rule of multiple tiers needs to follow this faq https://open.shopee.com/faq/53For additional tiers, the fix price, discount_percentage, discount_value should be consistent with tier 1
   */
  additional_tiers?: ShopeeAddBundleDealAdditionalTier[];
}

/**
 * ShopeeAddBundleDealItemItem sub-interface for ShopeeAddBundleDealItemRequest
 */
export interface ShopeeAddBundleDealItemItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The status of bundle deal item：enable = 1；disable =0
   */
  status: number;
}

/**
 * Request parameters for add_bundle_deal_item
 *
 * add product to bundle deal
 */
export interface ShopeeAddBundleDealItemRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
  /**
   * The items added in this bundle deal promotion.
   */
  item_list: ShopeeAddBundleDealItemItem[];
}

/**
 * Request parameters for delete_bundle_deal
 *
 * delete bundle deal
 */
export interface ShopeeDeleteBundleDealRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
}

/**
 * ShopeeDeleteBundleDealItemItem sub-interface for ShopeeDeleteBundleDealItemRequest
 */
export interface ShopeeDeleteBundleDealItemItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
}

/**
 * Request parameters for delete_bundle_deal_item
 *
 * delete product in bundle deal
 */
export interface ShopeeDeleteBundleDealItemRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
  /**
   * The items deleted in this bundle deal promotion.
   */
  item_list: ShopeeDeleteBundleDealItemItem[];
}

/**
 * Request parameters for end_bundle_deal
 *
 * end bundle deal
 */
export interface ShopeeEndBundleDealRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
}

/**
 * Request parameters for get_bundle_deal
 *
 * get bundle deal detail
 */
export interface ShopeeGetBundleDealRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
}

/**
 * Request parameters for get_bundle_deal_item
 *
 * get bundle deal item
 */
export interface ShopeeGetBundleDealItemRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
}

/**
 * Request parameters for get_bundle_deal_list
 *
 * get bundle deal list
 */
export interface ShopeeGetBundleDealListRequest {
  /**
   * Data paging, representing the data size of each page, the maximum is 1000, the default is 20
   */
  page_size?: number;
  /**
   * The Status of bundle deal，all=1；upcoming=2；ongoing=3，expired=4 , the default is 1
   */
  time_status?: number;
  /**
   * Data paging, represents the page number, starting from 1, the default is 1
   */
  page_no?: number;
}

/**
 * ShopeeUpdateBundleDealAdditionalTier sub-interface for ShopeeUpdateBundleDealRequest
 */
export interface ShopeeUpdateBundleDealAdditionalTier {
  /**
   * The quantity of items that the buyers need to purchase for additional tier
   */
  min_amount: number;
  /**
   * The bundle price when the buyers purchase a bundle deal for additional tiers. Need to input it when the bundle deal rule type is 1.
   */
  fix_price?: number;
  /**
   * The bundle deal discount amount the buyer can save when purchasing a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The bundle deal discount% that the buyer can get when buying a bundle deal for additional tiers. Need to input it when the bundle deal rule type is 2
   */
  discount_percentage?: number;
}

/**
 * Request parameters for update_bundle_deal
 *
 * update bundle deal. Relevant restrictions refer to FAQ：https://open.shopee.com/faq/254
 */
export interface ShopeeUpdateBundleDealRequest {
  /**
   * The bundle deal rule type：FIX_PRICE = 1 ；DISCOUNT_PERCENTAGE = 2； DISCOUNT_VALUE = 3
   */
  rule_type?: number;
  /**
   * The deducted price when when buying a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The amount of the buyer needs to spend to purchase a bundle deal.Need to input it when the bundle deal rule type is 1
   */
  fix_price?: number;
  /**
   * The discount that the buyer can get when buying a bundle deal. Need to input it when the bundle deal rule type is 2
   */
  discount_percentage?: number;
  /**
   * The quantity of items that need buyer to combine purchased
   */
  min_amount?: number;
  /**
   * The time when bundle deal activity start.The start time must be later than current time.
   */
  start_time?: number;
  /**
   * The time when bundle deal activity end. The end time must be later than current time.
   */
  end_time?: number;
  /**
   * Title of the bundle deal
   */
  name?: string;
  /**
   * Maximum number of bundle deals that can be bought by a buyer.
   */
  purchase_limit?: number;
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
  /**
   * Use to create tiered discount for bundle deals, a max of 2 additional tiers are allowed to create bundle deals like buy 2 get 10% off, buy 3 for 15% off, buy 4 for 20% off; For each tier, we will need to set the following 4 values based on bundle deal type +    min_amount = IntAttribute() +    fix_price = IntAttribute() +    discount_percentage = IntAttribute() +    discount_value = IntAttribute()Note: for additional tiers, the fix price, discount_percentage, discount_value should be consistent with tier 1
   */
  additional_tiers?: ShopeeUpdateBundleDealAdditionalTier;
}

/**
 * ShopeeUpdateBundleDealItemItem sub-interface for ShopeeUpdateBundleDealItemRequest
 */
export interface ShopeeUpdateBundleDealItemItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The status of bundle deal item：enable = 1；disable =0
   */
  status: number;
}

/**
 * Request parameters for update_bundle_deal_item
 *
 * update product in bundle deal
 */
export interface ShopeeUpdateBundleDealItemRequest {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id: number;
  /**
   * The items added in this bundle deal promotion.
   */
  item_list: ShopeeUpdateBundleDealItemItem[];
}
