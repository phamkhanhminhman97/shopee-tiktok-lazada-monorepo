/**
 * Request parameters for delete_video
 *
 * Use this API to delete video. You can delete the video for both draft and post status.
 */
export interface ShopeeDeleteVideoRequest {
  /**
   * You can only select one from video_upload_id_list and post_id_list: - If you want to delete video with draft status, please pass video_upload_id_list.- If you want to delete video with post status, please pass post_id_list.
   */
  video_upload_id_list?: string[];
  /**
   * You can only select one from video_upload_id_list and post_id_list: - If you want to delete video with draft status, please pass video_upload_id_list.- If you want to delete video with post status, please pass post_id_list.
   */
  post_id_list?: string[];
}

/**
 * ShopeeEditVideoInfoItemInfo sub-interface for ShopeeEditVideoInfoVideoUpload
 */
export interface ShopeeEditVideoInfoItemInfo {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * Product display name in Shopee Video.
   */
  custom_item_name?: string;
}

/**
 * ShopeeEditVideoInfoAllowInfo sub-interface for ShopeeEditVideoInfoVideoUpload
 */
export interface ShopeeEditVideoInfoAllowInfo {
  /**
   * Whether allow duet.
   */
  allow_duet: boolean;
  /**
   * Whether allow stitch.
   */
  allow_stitch: boolean;
}

/**
 * ShopeeEditVideoInfoScheduledInfo sub-interface for ShopeeEditVideoInfoVideoUpload
 */
export interface ShopeeEditVideoInfoScheduledInfo {
  /**
   * Whether post it to Shopee Video at scheduled time.
   */
  scheduled_post: boolean;
  /**
   * Scheduled post time, millisecond timestamp. When scheduled_post is true, scheduled_post_time must not empty.
   */
  scheduled_post_time?: number;
}

/**
 * ShopeeEditVideoInfoVideoUpload sub-interface for ShopeeEditVideoInfoRequest
 */
export interface ShopeeEditVideoInfoVideoUpload {
  /**
   * ID of uploaded video. Obtain from v2.media.get_video_upload_result.
   */
  video_upload_id: string;
  /**
   * Description of the Shopee Video.
   */
  caption?: string;
  /**
   * Selected cover image url of the Shopee Video. Obtain from v2.video.get_cover_list.
   */
  cover_image_url: string;
  /**
   * List of products to be linked with the Shopee Video, no more than 6.
   */
  item_info?: ShopeeEditVideoInfoItemInfo[];
  /**
   * Whether allow stitch and duet.
   */
  allow_info: ShopeeEditVideoInfoAllowInfo;
  /**
   * When scheduled_post is true, scheduled_post_time must not empty.When scheduled_post is false, scheduled_post_time must empty.
   */
  scheduled_info: ShopeeEditVideoInfoScheduledInfo;
}

/**
 * Request parameters for edit_video_info
 *
 * You need to call v2.media.init_video_upload, v2.media.upload_video_part, and v2.media.complete_video_upload to upload the video, and call the v2.media.get_video_upload_result to get the video_upload_id of uploaded video first, then call this API to set video post information. After submit, the video is still draft status, you need to call v2.video.post_video to post the video to Shopee Video. You can only set and update post information before the video is post.
 */
export interface ShopeeEditVideoInfoRequest {
  /**
   * Video information collection, no more than 5.
   */
  video_upload_list: ShopeeEditVideoInfoVideoUpload[];
  /**
   * Indicates whether the video contains AI-generated or AI-assisted content, such as visuals, voice, avatars, or scripts. Set to true if it does; otherwise, set to false. An AI label will be shown to viewers when set to true.
   */
  aigc_label: boolean;
}

/**
 * Request parameters for get_cover_list
 *
 * You need to call v2.media.init_video_upload, v2.media.upload_video_part, and v2.media.complete_video_upload to upload the video, and call the v2.media.get_video_upload_result to get the video_upload_id of uploaded video. After the video is uploaded, obtain the frame-by-frame results and select a specific frame as the video cover.
 */
export interface ShopeeGetCoverListRequest {
  /**
   * ID of uploaded video. Obtain from v2.media.get_video_upload_result.
   */
  video_upload_id: string;
}

/**
 * Request parameters for get_metric_trend
 *
 * Query video data indicator trends.
 */
export interface ShopeeGetMetricTrendRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast15dLast30dNote: The end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The end_date format should be "YYYY-MM-DD".- For Day, Last7d, Last15d, and Last30d, the end_date must before current day.- For Week, the end_date must be Sunday and must be less than or equal to the current week.- For Month, the end_date must be the end of the month and must be less than or equal to the current month.
   */
  end_date: string;
}

/**
 * Request parameters for get_overview_performance
 *
 * Get overall performance data for all post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetOverviewPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast15dLast30dNote: The end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The end_date format should be "YYYY-MM-DD".- For Day, Last7d, Last15d, and Last30d, the end_date must before current day.- For Week, the end_date must be Sunday and must be less than or equal to the current week.- For Month, the end_date must be the end of the month and must be less than or equal to the current month.
   */
  end_date: string;
}

/**
 * Request parameters for get_prodcut_performance_list
 *
 * Get specific performance data for products linked with Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetProdcutPerformanceListRequest {
  /**
   * The start index of request. Starting from 1.
   */
  page_no: number;
  /**
   * The number of item returned by this request. Max is 20.
   */
  page_size: number;
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast15dLast30dNote: The end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The end_date format should be "YYYY-MM-DD".- For Day, Last7d, Last15d, and Last30d, the end_date must before current day.- For Week, the end_date must be Sunday and must be less than or equal to the current week.- For Month, the end_date must be the end of the month and must be less than or equal to the current month.
   */
  end_date: string;
  /**
   * Use this field to specify which field to use to sort the returned list. Available values:PlacedOrdersPlacedSalesPlacedUniqueBuyersConfirmedOrdersConfirmedSalesConfirmedUniqueBuyers
   */
  order_by: string;
  /**
   * Use this field to specify whether the returned list is sorted in ascending or descending order_by. Available values:ascdesc
   */
  sort: string;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Search by product name.
   */
  item_name?: string;
}

/**
 * Request parameters for get_user_demographics
 *
 * Get user demographics data to better understand the types of viewers that watch your Shopee Video.
 */
export type ShopeeGetUserDemographicsRequest = Record<string, never>;

/**
 * Request parameters for get_video_detail
 *
 * Get the detail information of video.
 */
export interface ShopeeGetVideoDetailRequest {
  /**
   * You can only select one from video_upload_id and post_id: - If you want to get detail information of video with draft status, please pass video_upload_id.- If you want to get detail information of video with post status, please pass post_id.
   */
  video_upload_id?: string;
  /**
   * You can only select one from video_upload_id and post_id: - If you want to get detail information of video with draft status, please pass video_upload_id.- If you want to get detail information of video with post status, please pass post_id.
   */
  post_id?: string;
}

/**
 * Request parameters for get_video_detail_audience_distribution
 *
 * Get detailed audience distribution data for individual post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetVideoDetailAudienceDistributionRequest {
  /**
   * A unique identifier for Shopee videos.
   */
  post_id: string;
}

/**
 * Request parameters for get_video_detail_metric_trend
 *
 * Get detailed metric trend data for individual post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetVideoDetailMetricTrendRequest {
  /**
   * A unique identifier for Shopee videos.
   */
  post_id: string;
  /**
   * The name of metric that require obtaining trend data. Applicable values: Views, Likes, Comments, Shares, FollowersGrowth, PlacedOrders, PlacedSales, UniqueBuyers, ConversionRate, SoldItems, SalesPerOrder, SalesPerBuyer
   */
  metric_name: string;
}

/**
 * Request parameters for get_video_detail_performance
 *
 * Get detailed performance data for individual post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetVideoDetailPerformanceRequest {
  /**
   * A unique identifier for Shopee videos.
   */
  post_id: string;
}

/**
 * Request parameters for get_video_detail_product_performance
 *
 * Get performance data for products linked with individual post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetVideoDetailProductPerformanceRequest {
  /**
   * The start index of request. Starting from 1.
   */
  page_no: number;
  /**
   * The number of item returned by this request. Max is 20.
   */
  page_size: number;
  /**
   * The unique identifier for post Shopee Video.
   */
  post_id: string;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Name of the item.
   */
  item_name?: string;
}

/**
 * Request parameters for get_video_list
 *
 * Get the list of video in draft status or video already post to Shopee Video.
 */
export interface ShopeeGetVideoListRequest {
  /**
   * The start index of request. Starting from 1.
   */
  page_no: number;
  /**
   * The number of affiliate returned by this request, Max is 20.
   */
  page_size: number;
  /**
   * Search tpye for video in draft status or video already post to Shopee Video.1: draft2: post
   */
  list_type: number[];
}

/**
 * Request parameters for get_video_performance_list
 *
 * Get specific performance data for individual post Shopee Video. There is at least a one-day delay.
 */
export interface ShopeeGetVideoPerformanceListRequest {
  /**
   * The start index of request. Starting from 1.
   */
  page_no: number;
  /**
   * The number of video returned by this request. Max is 20.
   */
  page_size: number;
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast15dLast30dNote: The end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The end_date format should be "YYYY-MM-DD".- For Day, Last7d, Last15d, and Last30d, the end_date must before current day.- For Week, the end_date must be Sunday and must be less than or equal to the current week.- For Month, the end_date must be the end of the month and must be less than or equal to the current month.
   */
  end_date: string;
  /**
   * Description of the Shopee Video.
   */
  caption?: string;
  /**
   * Use this field to specify which field to use to sort the returned list. Available values:ViewsLikesCommentsAvgViewsDuration
   */
  order_by: string;
  /**
   * Use this field to specify whether the returned list is sorted in ascending or descending order_by. Available values:ascdesc
   */
  sort: string;
}

/**
 * Request parameters for post_video
 *
 * You need to call v2.media.init_video_upload, v2.media.upload_video_part, and v2.media.complete_video_upload to upload the video, then call the v2.video.edit_video_info API to set video post information, finally call this API to post the video to Shopee Video.
 */
export interface ShopeePostVideoRequest {
  /**
   * ID of uploaded video. Obtain from v2.media.get_video_upload_result. No more than 5.
   */
  video_upload_id_list: string[];
}
