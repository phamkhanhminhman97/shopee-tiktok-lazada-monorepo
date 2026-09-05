import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddVoucherResponseData sub-interface for ShopeeAddVoucherResponse
 */
export interface ShopeeAddVoucherResponseData {
  /**
   * The unique identifier for the created voucher.
   */
  voucher_id?: number;
}

/**
 * Response payload for add_voucher
 *
 * Add voucher
 */
export type ShopeeAddVoucherResponse = ShopeeResponseCommon<ShopeeAddVoucherResponseData>;

/**
 * ShopeeDeleteVoucherResponseData sub-interface for ShopeeDeleteVoucherResponse
 */
export interface ShopeeDeleteVoucherResponseData {
  /**
   * The unique identifier for the voucher it is being deleted.
   */
  voucher_id?: number;
}

/**
 * Response payload for delete_voucher
 *
 * Delete voucher
 */
export type ShopeeDeleteVoucherResponse = ShopeeResponseCommon<ShopeeDeleteVoucherResponseData>;

/**
 * ShopeeEndVoucherResponseData sub-interface for ShopeeEndVoucherResponse
 */
export interface ShopeeEndVoucherResponseData {
  /**
   * The unique identifier for the voucher it is being ended.
   */
  voucher_id?: number;
}

/**
 * Response payload for end_voucher
 *
 * End Voucher
 */
export type ShopeeEndVoucherResponse = ShopeeResponseCommon<ShopeeEndVoucherResponseData>;

/**
 * ShopeeGetVoucherResponseData sub-interface for ShopeeGetVoucherResponse
 */
export interface ShopeeGetVoucherResponseData {
  /**
   * The unique identifier of the voucher whose details are returned.
   */
  voucher_id?: number;
  /**
   * Voucher Code
   */
  voucher_code?: string;
  /**
   * Voucher Name
   */
  voucher_name?: string;
  /**
   * The type of the voucher. The available values are: 1: shop voucher, 2: product voucher.
   */
  voucher_type?: number;
  /**
   * The reward type of the voucher. The available values are: 1: fix_amount voucher, 2: discount_percentage voucher, 3: coin_cashback voucher.
   */
  reward_type?: number;
  /**
   * The number of times for this particular voucher could be used.
   */
  usage_quantity?: number;
  /**
   * Up till now, how many times has this particular voucher already been used.
   */
  current_usage?: number;
  /**
   * The timing from when the voucher is valid; so buyer is allowed to claim and to use.
   */
  start_time?: number;
  /**
   * The timing until when the voucher is still valid. Any time after this end_time, buyer is not allowed to claim or to use.
   */
  end_time?: number;
  /**
   * If the voucher is created by Shopee or not.
   */
  is_admin?: boolean;
  /**
   * The use case for the voucher. The available values are: 0: normal; 1: welcome, 2: referral; 3: shop_follow; 4:shop_game, 5: free_gift, 6: membership，7: Ads
   */
  voucher_purpose?: number;
  /**
   * The FE channel where the voucher will be displayed. The available values are: 1: display_all, 2: order page, 3: feed, 4: live streaming,   [] (empty - which is hidden).
   */
  display_channel_list?: number[];
  /**
   * The minimum spend required for using this voucher.
   */
  min_basket_price?: number;
  /**
   * The discount percentage is set for this particular voucher. Only when it is a discount percentage voucher or coins cashback voucher, api will return a value.
   */
  percentage?: number;
  /**
   * The max amount of discount/value a user can enjoy by using this particular voucher. Only when it is a discount percentage voucher or coins cashback voucher, api will return a value.
   */
  max_price?: number;
  /**
   * The discount amount set for this particular voucher. Only when it is a fix amount voucher, api will return a value.
   */
  discount_amount?: number;
  /**
   * The voucher status in CMT. The available values are: 1:review, 2: approved, 3:reject. Only when this voucher is attending CMT campaign and not being rejected, api will return a value.
   */
  cmt_voucher_status?: number;
  /**
   * The list of items which is applicable for the voucher. Only return a value when it is a product type of voucher.
   */
  item_id_list?: number[];
  /**
   * The timing of when voucher is displayed on shop pages; so buyer is allowed to claim.
   */
  display_start_time?: number;
  /**
   * The field is used to mark new user voucher/ repeat buyer voucher 1: new user voucher 2: repeat buyer voucher: with 1 orders3. repeat buyer voucher: with 2 orders
   */
  target_voucher?: number;
  /**
   * usecase indicates a specific business scenario that the voucher is created and used for, i.e., new buyer voucher, live voucher, follow shop voucher, etc.shop voucher:1product voucher:2new buyer voucher:3repeat buyer voucher:4private voucher:5live voucher:6video voucher:7campaign voucher:8follow prize voucher:9membership voucher:10game prize voucher:11sample voucher:12
   */
  usecase?: number;
}

/**
 * Response payload for get_voucher
 *
 * Get Voucher Detail
 */
export type ShopeeGetVoucherResponse = ShopeeResponseCommon<ShopeeGetVoucherResponseData>;

/**
 * ShopeeGetVoucherListVoucher sub-interface for ShopeeGetVoucherListResponseData
 */
export interface ShopeeGetVoucherListVoucher {
  /**
   * The unique identifier for a voucher.
   */
  voucher_id?: number;
  /**
   * Voucher Code
   */
  voucher_code?: string;
  /**
   * Voucher Name
   */
  voucher_name?: string;
  /**
   * The type of the voucher. The available values are: 1: shop voucher, 2: product voucher.
   */
  voucher_type?: number;
  /**
   * The reward type of the voucher. The available values are: 1: fix_amount voucher, 2: discount_percentage voucher, 3: coin_cashback voucher.
   */
  reward_type?: number;
  /**
   * The number of times for this particular voucher could be used.
   */
  usage_quantity?: number;
  /**
   * Up till now, how many times has this particular voucher already been used.
   */
  current_usage?: number;
  /**
   * The timing from when the voucher is valid; so buyer is allowed to claim and to use.
   */
  start_time?: number;
  /**
   * The timing until when the voucher is still valid. Any time after this end_time, buyer is not allowed to claim or to use.
   */
  end_time?: number;
  /**
   * If the voucher is created by Shopee or not.
   */
  is_admin?: boolean;
  /**
   * The use case for the voucher. The available values are: 0: normal; 1: welcome, 2: referral; 3: shop_follow; 4:shop_game, 5: free_gift, 6: membership
   */
  voucher_purpose?: number;
  /**
   * The discount amount set for this particular voucher. Only when it is a fix amount voucher, api will return a value.
   */
  discount_amount?: number;
  /**
   * The discount percentage set for this particular voucher. Only when it is a discount percentage voucher or coins cashback voucher, api will return a value.
   */
  percentage?: number;
  /**
   * The voucher status in CMT. The available values are: 1:review, 2: approved, 3:reject. Only when this voucher is attending CMT campaign and not being rejected, api will return a value.
   */
  cmt_voucher_status?: number;
  /**
   * The timing of when voucher is displayed on shop pages; so buyer is allowed to claim.
   */
  display_start_time?: number;
}

/**
 * ShopeeGetVoucherListResponseData sub-interface for ShopeeGetVoucherListResponse
 */
export interface ShopeeGetVoucherListResponseData {
  /**
   * This is to indicate whether the comment list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of comments.
   */
  more?: boolean;
  /**
   * The list of voucher.
   */
  voucher_list?: ShopeeGetVoucherListVoucher[];
}

/**
 * Response payload for get_voucher_list
 *
 * Get Voucher List
 */
export type ShopeeGetVoucherListResponse = ShopeeResponseCommon<ShopeeGetVoucherListResponseData>;

/**
 * ShopeeUpdateVoucherResponseData sub-interface for ShopeeUpdateVoucherResponse
 */
export interface ShopeeUpdateVoucherResponseData {
  /**
   * The unique identifier of the voucher which is being updated.
   */
  voucher_id?: number;
}

/**
 * Response payload for update_voucher
 *
 * Update voucher
 */
export type ShopeeUpdateVoucherResponse = ShopeeResponseCommon<ShopeeUpdateVoucherResponseData>;
