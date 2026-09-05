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
 * Request parameters for add_follow_prize
 *
 * OpenAPI add Follow Prize
 */
export interface ShopeeAddFollowPrizeRequest {
  /**
   * The name of the follow prize,The follow prize name length max limit is 20.
   */
  follow_prize_name: string;
  /**
   * The timing from when the follow prize is valid,the start time later than the current time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  start_time: number;
  /**
   * The timing until when the follow prize is still valid,the end time must be greater than the start time by at least 1 day and end time cannot exceed 3 months after start time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  end_time: number;
  /**
   * Please enter a value between 1 and 200000.
   */
  usage_quantity: number;
  /**
   * The minimum spend required for using this follow prize.
   */
  min_spend: number;
  /**
   * The reward type of the follow prize.The available values are:1:discount---fix amount,2:discount---by percentage,3:coin cash back.
   */
  reward_type: number;
  /**
   * The discount amount set for this particular follow prize.Only fill in when you are creating a fix amount follow prize.
   */
  discount_amount?: number;
  /**
   * The discount percentage set for this particular follow prize. Only fill in when you are creating a discount percentage follow prize or coins cashback follow prize.Discount percentage (reward_type ==2) or Percentage of coins cash back (reward_type==3).
   */
  percentage?: number;
  /**
   * The max amount of discount/value a user can enjoy by using this particular follow prize. It is required to fill in when you are creating a discount percentage follow prize or coins cashback follow prize. max_price >=1
   */
  max_price?: number;
}

/**
 * Request parameters for delete_follow_prize
 *
 * delete_follow_prize
 */
export interface ShopeeDeleteFollowPrizeRequest {
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id: number;
}

/**
 * Request parameters for end_follow_prize
 *
 * end follow prize
 */
export interface ShopeeEndFollowPrizeRequest {
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id: number;
}

/**
 * Request parameters for get_follow_prize_detail
 *
 * get_follow_prize_detail
 */
export interface ShopeeGetFollowPrizeDetailRequest {
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id?: number;
}

/**
 * Request parameters for get_follow_prize_list
 *
 * OpenAPI get_follow_prize_list
 */
export interface ShopeeGetFollowPrizeListRequest {
  /**
   * Specifies the page number of data to return in the current call. Default to be 1.
   */
  page_no?: number;
  /**
   * Use the 'page_size' filters to control the maximum number of entries to retrieve per page (i.e., per call). Default to be 20 and allowed input is from 1- 100.
   */
  page_size?: number;
  /**
   * The status filter for retrieving follow prize list. Available value: upcoming/ongoing/expired/all.
   */
  status: ShopeeStatus | string | number;
}

/**
 * Request parameters for update_follow_prize
 *
 * update_follow_prize
 */
export interface ShopeeUpdateFollowPrizeRequest {
  /**
   * The name of the follow prize,The follow prize name length max limit is 20.
   */
  follow_prize_name?: string;
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id: number;
  /**
   * The timing from when the follow prize is valid,the start time later than the current time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  start_time?: number;
  /**
   * The timing until when the follow prize is still valid,the end time must be greater than the start time by at least 1 day and end time cannot exceed 3 months after start time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  end_time?: number;
  /**
   * Please enter a value between 1 and 200000.
   */
  usage_quantity?: number;
  /**
   * The minimum spend required for using this follow prize.
   */
  min_spend?: number;
}
