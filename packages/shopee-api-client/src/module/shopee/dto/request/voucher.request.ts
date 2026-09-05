/**
 * Enum generated for field ShopeeStatus
 */
export enum ShopeeStatus {
  UPCOMING = "upcoming",
  ONGOING = "ongoing",
  EXPIRED = "expired",
  ALL = "all",
}

/**
 * Request parameters for add_voucher
 *
 * Add voucher
 */
export interface ShopeeAddVoucherRequest {
  /**
   * The name of the voucher.
   */
  voucher_name: string;
  /**
   * The code of the voucher.
   */
  voucher_code: string;
  /**
   * The timing from when the voucher is valid; so buyer is allowed to claim and to use. Field can only be updated if voucher has not started.
   */
  start_time: number;
  /**
   * The timing until when the voucher is still valid. Any time after this end_time, buyer is not allowed to claim or to use.
   */
  end_time: number;
  /**
   * The type of the voucher. The available values are: 1: shop voucher, 2: product voucher.
   */
  voucher_type: number;
  /**
   * The reward type of the voucher. The available values are: 1: fix_amount voucher, 2: discount_percentage voucher, 3: coin_cashback voucher.
   */
  reward_type: number;
  /**
   * The number of times for this particular voucher could be used.
   */
  usage_quantity: number;
  /**
   * The minimum spend required for using this voucher.
   */
  min_basket_price: number;
  /**
   * The discount amount set for this particular voucher. Only fill in when you are creating a fix amount voucher.
   */
  discount_amount?: number;
  /**
   * The discount percentage set for this particular voucher. Only fill in when you are creating a discount percentage voucher or coins cashback voucher.
   */
  percentage?: number;
  /**
   * The max amount of discount/value a user can enjoy by using this particular voucher. Only fill in when you are creating a discount percentage voucher or coins cashback voucher.If no cap limit, can set to be 0.
   */
  max_price?: number;
  /**
   * The FE channel where the voucher will be displayed. The available values are: 1: display_all  3: feed, 4: live streaming,   [] (empty - which is hidden).
   */
  display_channel_list?: number[];
  /**
   * The list of items which is applicable for the voucher. Only fill in when you are creating a product type of voucher.
   */
  item_id_list?: number[];
  /**
   * The timing of when voucher is displayed on shop pages; so buyer is allowed to claim.display_start_time must be left empty if the display_channel_list is empty (when voucher is hidden), otherwise it will show error.
   */
  display_start_time?: number;
}

/**
 * Request parameters for delete_voucher
 *
 * Delete voucher
 */
export interface ShopeeDeleteVoucherRequest {
  /**
   * The unique identifier for the voucher you want to delete.
   */
  voucher_id: number;
}

/**
 * Request parameters for end_voucher
 *
 * End Voucher
 */
export interface ShopeeEndVoucherRequest {
  /**
   * The unique identifier for the voucher you want to end now.
   */
  voucher_id: number;
}

/**
 * Request parameters for get_voucher
 *
 * Get Voucher Detail
 */
export interface ShopeeGetVoucherRequest {
  /**
   * The unique identifier of a voucher used to query the voucher details.
   */
  voucher_id: number;
}

/**
 * Request parameters for get_voucher_list
 *
 * Get Voucher List
 */
export interface ShopeeGetVoucherListRequest {
  /**
   * Specifies the page number of data to return in the current call. Default to be 1 and allowed input is from 1 - 5000.
   */
  page_no?: number;
  /**
   * Use the 'page_size' filters to control the maximum number of entries to retrieve per page (i.e., per call). Default to be 20 and allowed input is from 1- 100.
   */
  page_size?: number;
  /**
   * The status filter for retrieving voucher list. Available value: upcoming/ongoing/expired/all.
   */
  status: ShopeeStatus | string | number;
}

/**
 * Request parameters for update_voucher
 *
 * Update voucher
 */
export interface ShopeeUpdateVoucherRequest {
  /**
   * The unique identifier of the voucher which is going to be updated.
   */
  voucher_id: number;
  /**
   * The name of the voucher
   */
  voucher_name?: string;
  /**
   * The timing from when the voucher is valid; so buyer is allowed to claim and to use. Field can only be updated if voucher has not started.
   */
  start_time?: number;
  /**
   * The timing until when the voucher is still valid. Any time after this end_time, buyer is not allowed to claim or to use.
   */
  end_time?: number;
  /**
   * The number of times for this particular voucher could be used.
   */
  usage_quantity?: number;
  /**
   * The minimum spend required for using this voucher.
   */
  min_basket_price?: number;
  /**
   * The discount amount set for this particular voucher. Only fill in when you are updating a fix amount voucher.
   */
  discount_amount?: number;
  /**
   * The discount percentage set for this particular voucher. Only fill in when you are updating a discount percentage voucher or coins cashback voucher.
   */
  percentage?: number;
  /**
   * The max amount of discount/value a user can enjoy by using this particular voucher. Only fill in when you are updating a discount percentage voucher or coins cashback voucher.
   */
  max_price?: number;
  /**
   * The FE channel where the voucher will be displayed. The available values are: 1: display_all, 2: order page, 3: feed, 4: live streaming,   [] (empty - which is hidden).
   */
  display_channel_list?: number[];
  /**
   * The list of items which is applicable for the voucher. Only fill in when you are updating a product type of voucher.
   */
  item_id_list?: number[];
  /**
   * The timing of when voucher is displayed on shop pages; so buyer is allowed to claim.
   */
  display_start_time?: number;
}
