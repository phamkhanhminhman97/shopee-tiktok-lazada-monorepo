import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddBundleDealResponseData sub-interface for ShopeeAddBundleDealResponse
 */
export interface ShopeeAddBundleDealResponseData {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
}

/**
 * Response payload for add_bundle_deal
 *
 * create bundle deal. Relevant restrictions refer to FAQ：https://open.shopee.com/faq/254
 */
export type ShopeeAddBundleDealResponse = ShopeeResponseCommon<ShopeeAddBundleDealResponseData>;

/**
 * ShopeeAddBundleDealItemFailed sub-interface for ShopeeAddBundleDealItemResponseData
 */
export interface ShopeeAddBundleDealItemFailed {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
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
 * ShopeeAddBundleDealItemResponseData sub-interface for ShopeeAddBundleDealItemResponse
 */
export interface ShopeeAddBundleDealItemResponseData {
  /**
   * Indicate error details.
   */
  failed_list?: ShopeeAddBundleDealItemFailed[];
  /**
   * The list of succeed added items
   */
  success_list?: Array<Record<string, unknown>>;
}

/**
 * Response payload for add_bundle_deal_item
 *
 * add product to bundle deal
 */
export type ShopeeAddBundleDealItemResponse = ShopeeResponseCommon<ShopeeAddBundleDealItemResponseData>;

/**
 * ShopeeDeleteBundleDealResponseData sub-interface for ShopeeDeleteBundleDealResponse
 */
export interface ShopeeDeleteBundleDealResponseData {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
}

/**
 * Response payload for delete_bundle_deal
 *
 * delete bundle deal
 */
export type ShopeeDeleteBundleDealResponse = ShopeeResponseCommon<ShopeeDeleteBundleDealResponseData>;

/**
 * ShopeeDeleteBundleDealItemFailed sub-interface for ShopeeDeleteBundleDealItemResponseData
 */
export interface ShopeeDeleteBundleDealItemFailed {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
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
 * ShopeeDeleteBundleDealItemResponseData sub-interface for ShopeeDeleteBundleDealItemResponse
 */
export interface ShopeeDeleteBundleDealItemResponseData {
  /**
   * Indicate error details.
   */
  failed_list?: ShopeeDeleteBundleDealItemFailed[];
  /**
   * The list of succeed added items
   */
  success_list?: Array<Record<string, unknown>>;
}

/**
 * Response payload for delete_bundle_deal_item
 *
 * delete product in bundle deal
 */
export type ShopeeDeleteBundleDealItemResponse = ShopeeResponseCommon<ShopeeDeleteBundleDealItemResponseData>;

/**
 * ShopeeEndBundleDealResponseData sub-interface for ShopeeEndBundleDealResponse
 */
export interface ShopeeEndBundleDealResponseData {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
}

/**
 * Response payload for end_bundle_deal
 *
 * end bundle deal
 */
export type ShopeeEndBundleDealResponse = ShopeeResponseCommon<ShopeeEndBundleDealResponseData>;

/**
 * ShopeeGetBundleDealAdditionalTier sub-interface for ShopeeGetBundleDealBundleDealRule
 */
export interface ShopeeGetBundleDealAdditionalTier {
  /**
   * The quantity of items that the buyers need to purchase for additional tier
   */
  min_amount?: number;
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
 * ShopeeGetBundleDealBundleDealRule sub-interface for ShopeeGetBundleDealResponseData
 */
export interface ShopeeGetBundleDealBundleDealRule {
  /**
   * The bundle deal rule type：FIX_PRICE = 1 ；DISCOUNT_PERCENTAGE = 2； DISCOUNT_VALUE = 3
   */
  rule_type?: number;
  /**
   * The deducted price when when buying a bundle deal.Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The amount of the buyer needs to spend to purchase a bundle deal. Need to input it when the bundle deal rule type is 1
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
   * Use to create tiered discount for bundle deals, a max of 2 additional tiers are allowed to create bundle deals like buy 2 get 10% off, buy 3 for 15% off, buy 4 for 20% off; For each tier, we will need to set the following 4 values based on bundle deal type +    min_amount = IntAttribute() +    fix_price = IntAttribute() +    discount_percentage = IntAttribute() +    discount_value = IntAttribute()  Note: for additional tiers, the fix price, discount_percentage, discount_value should be consistent with tier 1
   */
  additional_tiers?: ShopeeGetBundleDealAdditionalTier;
}

/**
 * ShopeeGetBundleDealResponseData sub-interface for ShopeeGetBundleDealResponse
 */
export interface ShopeeGetBundleDealResponseData {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
  /**
   * Title of the bundle deal
   */
  name?: string;
  /**
   * The time when bundle deal activity start.
   */
  start_time?: number;
  /**
   * The time when bundle deal activity end.
   */
  end_time?: number;
  bundle_deal_rule?: ShopeeGetBundleDealBundleDealRule;
  /**
   * Maximum number of bundle deals that can be bought by a buyer.
   */
  purchase_limit?: number;
}

/**
 * Response payload for get_bundle_deal
 *
 * get bundle deal detail
 */
export type ShopeeGetBundleDealResponse = ShopeeResponseCommon<ShopeeGetBundleDealResponseData>;

/**
 * ShopeeGetBundleDealItemItem sub-interface for ShopeeGetBundleDealItemResponseData
 */
export interface ShopeeGetBundleDealItemItem {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  item_id?: number;
  /**
   * The status of items：enable = 1，disable =0
   */
  status?: number;
}

/**
 * ShopeeGetBundleDealItemResponseData sub-interface for ShopeeGetBundleDealItemResponse
 */
export interface ShopeeGetBundleDealItemResponseData {
  /**
   * The list of bundle deal item
   */
  item_list?: ShopeeGetBundleDealItemItem[];
  /**
   * The number of  items in this bundle deal
   */
  total_count?: number;
}

/**
 * Response payload for get_bundle_deal_item
 *
 * get bundle deal item
 */
export type ShopeeGetBundleDealItemResponse = ShopeeResponseCommon<ShopeeGetBundleDealItemResponseData>;

/**
 * ShopeeGetBundleDealListAdditionalTier sub-interface for ShopeeGetBundleDealListBundleDealRule
 */
export interface ShopeeGetBundleDealListAdditionalTier {
  /**
   * The quantity of items that the buyers need to purchase for additional tier
   */
  min_amount?: number;
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
 * ShopeeGetBundleDealListBundleDealRule sub-interface for ShopeeGetBundleDealListBundleDeal
 */
export interface ShopeeGetBundleDealListBundleDealRule {
  /**
   * The bundle deal rule type：FIX_PRICE = 1 ；DISCOUNT_PERCENTAGE = 2； DISCOUNT_VALUE = 3
   */
  rule_type?: number;
  /**
   * The deducted price when when buying a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The amount of the buyer needs to spend to purchase a bundle deal. Need to input it when the bundle deal rule type is 1
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
   * Use to create tiered discount for bundle deals, a max of 2 additional tiers are allowed to create bundle deals like buy 2 get 10% off, buy 3 for 15% off, buy 4 for 20% off; For each tier, we will need to set the following 4 values based on bundle deal type +    min_amount = IntAttribute() +    fix_price = IntAttribute() +    discount_percentage = IntAttribute() +    discount_value = IntAttribute() Note: for additional tiers, the fix price, discount_percentage, discount_value should be consistent with tier 1
   */
  additional_tiers?: ShopeeGetBundleDealListAdditionalTier[];
}

/**
 * ShopeeGetBundleDealListBundleDeal sub-interface for ShopeeGetBundleDealListResponseData
 */
export interface ShopeeGetBundleDealListBundleDeal {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
  /**
   * Title of the bundle deal
   */
  name?: string;
  /**
   * The time when bundle deal activity start.
   */
  start_time?: number;
  /**
   * The time when bundle deal activity end.
   */
  end_time?: number;
  bundle_deal_rule?: ShopeeGetBundleDealListBundleDealRule;
  /**
   * Maximum number of bundle deals that can be bought by a buyer.
   */
  purchase_limit?: number;
}

/**
 * ShopeeGetBundleDealListResponseData sub-interface for ShopeeGetBundleDealListResponse
 */
export interface ShopeeGetBundleDealListResponseData {
  /**
   * The list of bundle deal id
   */
  bundle_deal_list?: ShopeeGetBundleDealListBundleDeal[];
  /**
   * this field shows whether there are more bundle deals in next page or not
   */
  more?: boolean;
}

/**
 * Response payload for get_bundle_deal_list
 *
 * get bundle deal list
 */
export type ShopeeGetBundleDealListResponse = ShopeeResponseCommon<ShopeeGetBundleDealListResponseData>;

/**
 * ShopeeUpdateBundleDeal_UpdateBundleDealAdditionalTier sub-interface for ShopeeUpdateBundleDealBundleDealRule
 */
export interface ShopeeUpdateBundleDeal_UpdateBundleDealAdditionalTier {
  /**
   * The quantity of items that the buyers need to purchase for additional tier
   */
  min_amount?: number;
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
 * ShopeeUpdateBundleDealBundleDealRule sub-interface for ShopeeUpdateBundleDealResponseData
 */
export interface ShopeeUpdateBundleDealBundleDealRule {
  /**
   * The bundle deal rule type：FIX_PRICE = 1 ；DISCOUNT_PERCENTAGE = 2； DISCOUNT_VALUE = 3
   */
  rule_type?: number;
  /**
   * The deducted price when when buying a bundle deal. Need to input it when the bundle deal rule type is 3
   */
  discount_value?: number;
  /**
   * The amount of the buyer needs to spend to purchase a bundle deal. Need to input it when the bundle deal rule type is 1
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
   * Use to create tiered discount for bundle deals, a max of 2 additional tiers are allowed to create bundle deals like buy 2 get 10% off, buy 3 for 15% off, buy 4 for 20% off; For each tier, we will need to set the following 4 values based on bundle deal type +    min_amount = IntAttribute() +    fix_price = IntAttribute() +    discount_percentage = IntAttribute() +    discount_value = IntAttribute()Note: for additional tiers, the fix price, discount_percentage, discount_value should be consistent with tier 1
   */
  additional_tiers?: ShopeeUpdateBundleDeal_UpdateBundleDealAdditionalTier[];
}

/**
 * ShopeeUpdateBundleDealResponseData sub-interface for ShopeeUpdateBundleDealResponse
 */
export interface ShopeeUpdateBundleDealResponseData {
  /**
   * Shopee's unique identifier for a bundle deal activity.
   */
  bundle_deal_id?: number;
  /**
   * Title of the bundle deal
   */
  name?: string;
  /**
   * The time when bundle deal activity start.
   */
  start_time?: number;
  /**
   * The time when bundle deal activity end.
   */
  end_time?: number;
  bundle_deal_rule?: ShopeeUpdateBundleDealBundleDealRule;
  /**
   * Maximum number of bundle deals that can be bought by a buyer.
   */
  purchase_limit?: number;
}

/**
 * Response payload for update_bundle_deal
 *
 * update bundle deal. Relevant restrictions refer to FAQ：https://open.shopee.com/faq/254
 */
export type ShopeeUpdateBundleDealResponse = ShopeeResponseCommon<ShopeeUpdateBundleDealResponseData>;

/**
 * ShopeeUpdateBundleDealItemFailed sub-interface for ShopeeUpdateBundleDealItemResponseData
 */
export interface ShopeeUpdateBundleDealItemFailed {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
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
 * ShopeeUpdateBundleDealItemResponseData sub-interface for ShopeeUpdateBundleDealItemResponse
 */
export interface ShopeeUpdateBundleDealItemResponseData {
  /**
   * Indicate error details.
   */
  failed_list?: ShopeeUpdateBundleDealItemFailed[];
  /**
   * The list of succeed added items
   */
  success_list?: Array<Record<string, unknown>>;
}

/**
 * Response payload for update_bundle_deal_item
 *
 * update product in bundle deal
 */
export type ShopeeUpdateBundleDealItemResponse = ShopeeResponseCommon<ShopeeUpdateBundleDealItemResponseData>;
