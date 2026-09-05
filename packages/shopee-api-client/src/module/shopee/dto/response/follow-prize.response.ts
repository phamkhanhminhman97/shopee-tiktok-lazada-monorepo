import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeCampaignStatus
 */
export enum ShopeeCampaignStatus {
  UPCOMING = "upcoming",
  ONGOING = "ongoing",
  EXPIRED = "expired",
}

/**
 * ShopeeAddFollowPrizeResponseData sub-interface for ShopeeAddFollowPrizeResponse
 */
export interface ShopeeAddFollowPrizeResponseData {
  /**
   * The unique identifier for the created follow prize.
   */
  campagin_id?: number;
}

/**
 * Response payload for add_follow_prize
 *
 * OpenAPI add Follow Prize
 */
export type ShopeeAddFollowPrizeResponse = ShopeeResponseCommon<ShopeeAddFollowPrizeResponseData>;

/**
 * ShopeeDeleteFollowPrizeResponseData sub-interface for ShopeeDeleteFollowPrizeResponse
 */
export interface ShopeeDeleteFollowPrizeResponseData {
  /**
   * The unique identifier for the created follow prize.
   */
  campagin_id?: number;
}

/**
 * Response payload for delete_follow_prize
 *
 * delete_follow_prize
 */
export type ShopeeDeleteFollowPrizeResponse = ShopeeResponseCommon<ShopeeDeleteFollowPrizeResponseData>;

/**
 * ShopeeEndFollowPrizeResponseData sub-interface for ShopeeEndFollowPrizeResponse
 */
export interface ShopeeEndFollowPrizeResponseData {
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id?: number;
}

/**
 * Response payload for end_follow_prize
 *
 * end follow prize
 */
export type ShopeeEndFollowPrizeResponse = ShopeeResponseCommon<ShopeeEndFollowPrizeResponseData>;

/**
 * ShopeeGetFollowPrizeDetailResponseData sub-interface for ShopeeGetFollowPrizeDetailResponse
 */
export interface ShopeeGetFollowPrizeDetailResponseData {
  /**
   * The status of follow prize,the campagin status have upcoming/ongoing/expired.
   */
  campaign_status?: ShopeeCampaignStatus | string | number;
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id?: number;
  /**
   * Please enter a value between 1 and 200000.
   */
  usage_quantity?: number;
  /**
   * The timing from when the follow prize is valid,the start time later than the current time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  start_time?: number;
  /**
   * The timing until when the follow prize is still valid,the end time must be greater than the start time by at least 1 day and end time cannot exceed 3 months after start time.If the start time and end time passed in by the seller overlap with other upcoming/ongoing activities, it will prompt "Another Follow Prize voucher already exists during this time period, please set another period."
   */
  end_time?: number;
  /**
   * The minimum spend required for using this follow prize.
   */
  min_spend?: number;
  /**
   * The reward type of the follow prize.The available values are:1:discount---fix amount,2:discount---by percentage,3:coin cash back.
   */
  reward_type?: number;
  /**
   * The name of the follow prize,The follow prize name length max limit is 20.
   */
  follow_prize_name?: string;
  /**
   * The discount amount set for this particular follow prize.Only fill in when you are creating a fix amount follow prize.
   */
  discount_amount?: number;
  /**
   * The discount percentage set for this particular follow prize. Only fill in when you are creating a discount percentage follow prize or coins cashback follow prize.Discount percentage (reward_type ==2) or Percentage of coins cash back (reward_type==3).
   */
  percentage?: number;
  /**
   * The max amount of discount/value a user can enjoy by using this particular follow prize. Only fill in when you are creating a discount percentage follow prize or coins cashback follow prize.
   */
  max_price?: number;
}

/**
 * Response payload for get_follow_prize_detail
 *
 * get_follow_prize_detail
 */
export type ShopeeGetFollowPrizeDetailResponse = ShopeeResponseCommon<ShopeeGetFollowPrizeDetailResponseData>;

/**
 * ShopeeGetFollowPrizeListFollowPrize sub-interface for ShopeeGetFollowPrizeListResponseData
 */
export interface ShopeeGetFollowPrizeListFollowPrize {
  /**
   * The unique identifier for the created follow prize.
   */
  campaign_id?: number;
  /**
   * The status of follow prize,the campagin status have upcoming/ongoing/expired.
   */
  campaign_status?: ShopeeCampaignStatus | string | number;
  /**
   * The name of the follow prize,The follow prize name length max limit is 20.
   */
  follow_prize_name?: string;
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
   * This is to indicate the quantity of voucher claimed.
   */
  claimed?: number;
}

/**
 * ShopeeGetFollowPrizeListResponseData sub-interface for ShopeeGetFollowPrizeListResponse
 */
export interface ShopeeGetFollowPrizeListResponseData {
  /**
   * This is to indicate whether the comment list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of comments.
   */
  more?: boolean;
  /**
   * The list of follow prize.
   */
  follow_prize_list?: ShopeeGetFollowPrizeListFollowPrize[];
}

/**
 * Response payload for get_follow_prize_list
 *
 * OpenAPI get_follow_prize_list
 */
export type ShopeeGetFollowPrizeListResponse = ShopeeResponseCommon<ShopeeGetFollowPrizeListResponseData>;

/**
 * ShopeeUpdateFollowPrizeResponseData sub-interface for ShopeeUpdateFollowPrizeResponse
 */
export interface ShopeeUpdateFollowPrizeResponseData {
  /**
   * The unique identifier for the created follow prize.
   */
  campagin_id?: number;
}

/**
 * Response payload for update_follow_prize
 *
 * update_follow_prize
 */
export type ShopeeUpdateFollowPrizeResponse = ShopeeResponseCommon<ShopeeUpdateFollowPrizeResponseData>;
