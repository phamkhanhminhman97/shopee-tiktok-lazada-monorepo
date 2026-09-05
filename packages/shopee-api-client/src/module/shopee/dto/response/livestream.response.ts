import { ShopeeResponseCommon } from './config.response';

/**
 * Response data payload for add_item_list
 */
export type ShopeeAddItemListResponseData = any;

/**
 * Response payload for add_item_list
 *
 * Add items to item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeAddItemListResponse = ShopeeResponseCommon<ShopeeAddItemListResponseData>;

/**
 * Response data payload for apply_item_set
 */
export type ShopeeApplyItemSetResponseData = any;

/**
 * Response payload for apply_item_set
 *
 * Add product set to item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeApplyItemSetResponse = ShopeeResponseCommon<ShopeeApplyItemSetResponseData>;

/**
 * Response data payload for ban_user_comment
 */
export type ShopeeBanUserCommentResponseData = any;

/**
 * Response payload for ban_user_comment
 *
 * Ban the user from posting comments. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeBanUserCommentResponse = ShopeeResponseCommon<ShopeeBanUserCommentResponseData>;

/**
 * ShopeeCreateSessionResponseData sub-interface for ShopeeCreateSessionResponse
 */
export interface ShopeeCreateSessionResponseData {
  /**
   * The identifier of livestream session.
   */
  session_id?: number;
}

/**
 * Response payload for create_session
 *
 * Create a new live stream, include basic information, like cover, title, description, type (test live or normal live). (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeCreateSessionResponse = ShopeeResponseCommon<ShopeeCreateSessionResponseData>;

/**
 * Response data payload for delete_item_list
 */
export type ShopeeDeleteItemListResponseData = any;

/**
 * Response payload for delete_item_list
 *
 * Delete items from item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeDeleteItemListResponse = ShopeeResponseCommon<ShopeeDeleteItemListResponseData>;

/**
 * Response data payload for delete_show_item
 */
export type ShopeeDeleteShowItemResponseData = any;

/**
 * Response payload for delete_show_item
 *
 * Unshow showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeDeleteShowItemResponse = ShopeeResponseCommon<ShopeeDeleteShowItemResponseData>;

/**
 * Response data payload for end_session
 */
export type ShopeeEndSessionResponseData = any;

/**
 * Response payload for end_session
 *
 * End Live. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeEndSessionResponse = ShopeeResponseCommon<ShopeeEndSessionResponseData>;

/**
 * ShopeeGetItemCountResponseData sub-interface for ShopeeGetItemCountResponse
 */
export interface ShopeeGetItemCountResponseData {
  /**
   * The number of items in the shopping bag of this session.
   */
  item_count?: number;
  /**
   * The maximum number of items allowed in the shopping bag of this session.
   */
  max_item_count?: number;
}

/**
 * Response payload for get_item_count
 *
 * Get the number of items in the shopping bag, including the current number of items in the shopping bag, the upper limit of the number, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetItemCountResponse = ShopeeResponseCommon<ShopeeGetItemCountResponseData>;

/**
 * ShopeeGetItemListPriceInfo sub-interface for ShopeeGetItemListList
 */
export interface ShopeeGetItemListPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetItemListAffiliateInfo sub-interface for ShopeeGetItemListList
 */
export interface ShopeeGetItemListAffiliateInfo {
  /**
   * The commission rate that the streamer can get, for example, 0.1 means 10%.
   */
  commission_rate?: number;
  /**
   * Whether participate in a campaign project (generally, the commission will be higher)
   */
  is_campaign?: boolean;
  /**
   * MCN agency that initiated this campaign
   */
  campaign_mcn_name?: string;
  /**
   * Campaign start time, it's unix timestamp in seconds.
   */
  campaign_start_time?: number;
  /**
   * Campaign end time, it's unix timestamp in seconds.
   */
  campaign_end_time?: number;
}

/**
 * ShopeeGetItemListList sub-interface for ShopeeGetItemListResponseData
 */
export interface ShopeeGetItemListList {
  /**
   * The order of this item in the shopping bag of current session, start from 1.
   */
  item_no?: number;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of this item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of this item.
   */
  image_url?: string;
  price_info?: ShopeeGetItemListPriceInfo;
  affiliate_info?: ShopeeGetItemListAffiliateInfo;
}

/**
 * ShopeeGetItemListResponseData sub-interface for ShopeeGetItemListResponse
 */
export interface ShopeeGetItemListResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetItemListList[];
}

/**
 * Response payload for get_item_list
 *
 * Get the detail information of item in item bag, including item id, item serial number, etc.(For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetItemListResponse = ShopeeResponseCommon<ShopeeGetItemListResponseData>;

/**
 * ShopeeGetItemSetItemListPriceInfo sub-interface for ShopeeGetItemSetItemListList
 */
export interface ShopeeGetItemSetItemListPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetItemSetItemListAffiliateInfo sub-interface for ShopeeGetItemSetItemListList
 */
export interface ShopeeGetItemSetItemListAffiliateInfo {
  /**
   * The commission rate that the streamer can get, for example, 0.1 means 10%.
   */
  commission_rate?: number;
  /**
   * Whether participate in a campaign project (generally, the commission will be higher)
   */
  is_campaign?: boolean;
  /**
   * MCN agency that initiated this campaign
   */
  campaign_mcn_name?: string;
  /**
   * Campaign start time, it's unix timestamp in seconds.
   */
  campaign_start_time?: number;
  /**
   * Campaign end time, it's unix timestamp in seconds.
   */
  campaign_end_time?: number;
}

/**
 * ShopeeGetItemSetItemListList sub-interface for ShopeeGetItemSetItemListResponseData
 */
export interface ShopeeGetItemSetItemListList {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of this item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of this item.
   */
  image_url?: string;
  price_info?: ShopeeGetItemSetItemListPriceInfo;
  affiliate_info?: ShopeeGetItemSetItemListAffiliateInfo;
}

/**
 * ShopeeGetItemSetItemListResponseData sub-interface for ShopeeGetItemSetItemListResponse
 */
export interface ShopeeGetItemSetItemListResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetItemSetItemListList[];
}

/**
 * Response payload for get_item_set_item_list
 *
 * Get the item list of the product set, including item name, id, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetItemSetItemListResponse = ShopeeResponseCommon<ShopeeGetItemSetItemListResponseData>;

/**
 * ShopeeGetItemSetListList sub-interface for ShopeeGetItemSetListResponseData
 */
export interface ShopeeGetItemSetListList {
  /**
   * The identifier of the item set.
   */
  item_set_id?: number;
  /**
   * The name of the item set.
   */
  item_set_name?: string;
  /**
   * The number of items in this item set.
   */
  item_count?: number;
}

/**
 * ShopeeGetItemSetListResponseData sub-interface for ShopeeGetItemSetListResponse
 */
export interface ShopeeGetItemSetListResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetItemSetListList[];
}

/**
 * Response payload for get_item_set_list
 *
 * Get the product set of the live stream, including the product set name, id, and item number. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetItemSetListResponse = ShopeeResponseCommon<ShopeeGetItemSetListResponseData>;

/**
 * ShopeeGetLatestCommentListList sub-interface for ShopeeGetLatestCommentListResponseData
 */
export interface ShopeeGetLatestCommentListList {
  /**
   * The identifier of comment.
   */
  comment_id?: number;
  /**
   * The content of comment.
   */
  content?: string;
  /**
   * Timestamp for posting comment. It's unix timestamp in seconds.
   */
  timestamp?: number;
  /**
   * The user id of the one who posted the comment.
   */
  user_id?: number;
  /**
   * The username of the one who posted comment.
   */
  username?: string;
}

/**
 * ShopeeGetLatestCommentListResponseData sub-interface for ShopeeGetLatestCommentListResponse
 */
export interface ShopeeGetLatestCommentListResponseData {
  /**
   * The offset for next page request.
   */
  next_offset?: number;
  list?: ShopeeGetLatestCommentListList[];
}

/**
 * Response payload for get_latest_comment_list
 *
 * Get live stream room comments in the last 10 seconds, including user id, user name, comment id, comment content, and comment time. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetLatestCommentListResponse = ShopeeResponseCommon<ShopeeGetLatestCommentListResponseData>;

/**
 * ShopeeGetLikeItemListPriceInfo sub-interface for ShopeeGetLikeItemListList
 */
export interface ShopeeGetLikeItemListPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetLikeItemListAffiliateInfo sub-interface for ShopeeGetLikeItemListList
 */
export interface ShopeeGetLikeItemListAffiliateInfo {
  /**
   * The commission rate that the streamer can get, for example, 0.1 means 10%.
   */
  commission_rate?: number;
  /**
   * Whether participate in a campaign project (generally, the commission will be higher).
   */
  is_campaign?: boolean;
  /**
   * MCN agency that initiated this campaign.
   */
  campaign_mcn_name?: string;
  /**
   * Campaign start time, it's unix timestamp in seconds.
   */
  campaign_start_time?: number;
  /**
   * Campaign end time, it's unix timestamp in seconds.
   */
  campaign_end_time?: number;
}

/**
 * ShopeeGetLikeItemListList sub-interface for ShopeeGetLikeItemListResponseData
 */
export interface ShopeeGetLikeItemListList {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of this item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of this item.
   */
  image_url?: string;
  price_info?: ShopeeGetLikeItemListPriceInfo;
  affiliate_info?: ShopeeGetLikeItemListAffiliateInfo;
}

/**
 * ShopeeGetLikeItemListResponseData sub-interface for ShopeeGetLikeItemListResponse
 */
export interface ShopeeGetLikeItemListResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetLikeItemListList[];
}

/**
 * Response payload for get_like_item_list
 *
 * Get the item list of My Likes tab.(For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetLikeItemListResponse = ShopeeResponseCommon<ShopeeGetLikeItemListResponseData>;

/**
 * ShopeeGetRecentItemListPriceInfo sub-interface for ShopeeGetRecentItemListList
 */
export interface ShopeeGetRecentItemListPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetRecentItemListAffiliateInfo sub-interface for ShopeeGetRecentItemListList
 */
export interface ShopeeGetRecentItemListAffiliateInfo {
  /**
   * The commission rate that the streamer can get, for example, 0.1 means 10%.
   */
  commission_rate?: number;
  /**
   * Whether participate in a campaign project (generally, the commission will be higher)
   */
  is_campaign?: boolean;
  /**
   * MCN agency that initiated this campaign
   */
  campaign_mcn_name?: string;
  /**
   * Campaign start time, it's unix timestamp in seconds.
   */
  campaign_start_time?: number;
  /**
   * Campaign end time, it's unix timestamp in seconds.
   */
  campaign_end_time?: number;
}

/**
 * ShopeeGetRecentItemListList sub-interface for ShopeeGetRecentItemListResponseData
 */
export interface ShopeeGetRecentItemListList {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of this item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of this item.
   */
  image_url?: string;
  price_info?: ShopeeGetRecentItemListPriceInfo;
  affiliate_info?: ShopeeGetRecentItemListAffiliateInfo;
}

/**
 * ShopeeGetRecentItemListResponseData sub-interface for ShopeeGetRecentItemListResponse
 */
export interface ShopeeGetRecentItemListResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetRecentItemListList[];
}

/**
 * Response payload for get_recent_item_list
 *
 * Get the item list of the Recently tab. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetRecentItemListResponse = ShopeeResponseCommon<ShopeeGetRecentItemListResponseData>;

/**
 * ShopeeGetSessionDetailStreamUrl sub-interface for ShopeeGetSessionDetailResponseData
 */
export interface ShopeeGetSessionDetailStreamUrl {
  /**
   * The push stream url for the livestream session.
   */
  push_url?: string;
  /**
   * The push stream key for the livestream session.
   */
  push_key?: string;
  /**
   * The pull stream url of the livestream session.
   */
  play_url?: string;
  /**
   * The identifier of the stream domain, need to be passed in request for v2.livestream.start_session.
   */
  domain_id?: number;
}

/**
 * ShopeeGetSessionDetailResponseData sub-interface for ShopeeGetSessionDetailResponse
 */
export interface ShopeeGetSessionDetailResponseData {
  /**
   * The identifier of livestream session.
   */
  session_id?: number;
  /**
   * The title of the livestream session.
   */
  title?: string;
  /**
   * The description of the livestream session.
   */
  description?: string;
  /**
   * The cover image URL of the livestream session.
   */
  cover_image_url?: string;
  /**
   * The status of the livestream session, the enumeration values are as follows:0 - Initial1 - Ongoing2 - Ended
   */
  status?: number;
  /**
   * The share link of the livestream session.
   */
  share_url?: string;
  /**
   * Indicate whether this livestream session if for testing purpose only.
   */
  is_test?: boolean;
  /**
   * The creation time of the livestream session. It's unix timestamp in seconds.
   */
  create_time?: number;
  /**
   * The update time of the livestream session. It's unix timestamp in seconds.
   */
  update_time?: number;
  /**
   * The start time of the livestream session, 0 if session is not started yet. It's unix timestamp in seconds.
   */
  start_time?: number;
  /**
   * The end time of livestream session, 0 if session is not ended yet. It's unix timestamp in seconds.
   */
  end_time?: number;
  stream_url_list?: ShopeeGetSessionDetailStreamUrl[];
}

/**
 * Response payload for get_session_detail
 *
 * Get basic information about the live streaming room, including cover, title, description, type (test live or normal live), create time, update time, stream url, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetSessionDetailResponse = ShopeeResponseCommon<ShopeeGetSessionDetailResponseData>;

/**
 * ShopeeGetSessionItemMetricPriceInfo sub-interface for ShopeeGetSessionItemMetricItem
 */
export interface ShopeeGetSessionItemMetricPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetSessionItemMetricItem sub-interface for ShopeeGetSessionItemMetricList
 */
export interface ShopeeGetSessionItemMetricItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of the item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of the item.
   */
  image_url?: string;
  price_info?: ShopeeGetSessionItemMetricPriceInfo;
}

/**
 * ShopeeGetSessionItemMetricMetric sub-interface for ShopeeGetSessionItemMetricList
 */
export interface ShopeeGetSessionItemMetricMetric {
  /**
   * Number of product clicks.
   */
  item_clicks?: number;
  /**
   * Number of "Add To Cart" button clicked for all products in the orange bag during livestream.
   */
  atc?: number;
  /**
   * Number of product sold.
   */
  sold_items?: number;
}

/**
 * ShopeeGetSessionItemMetricList sub-interface for ShopeeGetSessionItemMetricResponseData
 */
export interface ShopeeGetSessionItemMetricList {
  item?: ShopeeGetSessionItemMetricItem;
  metric?: ShopeeGetSessionItemMetricMetric;
}

/**
 * ShopeeGetSessionItemMetricResponseData sub-interface for ShopeeGetSessionItemMetricResponse
 */
export interface ShopeeGetSessionItemMetricResponseData {
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of data.
   */
  more?: boolean;
  /**
   * If more is true, this value need set to next request offset.
   */
  next_offset?: number;
  list?: ShopeeGetSessionItemMetricList[];
}

/**
 * Response payload for get_session_item_metric
 *
 * Get real-time indicator data of live stream products, including product clicks, add-to-cart, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetSessionItemMetricResponse = ShopeeResponseCommon<ShopeeGetSessionItemMetricResponseData>;

/**
 * ShopeeGetSessionMetricResponseData sub-interface for ShopeeGetSessionMetricResponse
 */
export interface ShopeeGetSessionMetricResponseData {
  /**
   * Value of placed orders (paid and unpaid) during Livestream, including sales from cancelled orders.
   */
  gmv?: number;
  /**
   * Number of "Add To Cart" button clicked for all products in the orange bag during livestream.
   */
  atc?: number;
  /**
   * Number of products clicks divided by Number of Livestream views.
   */
  ctr?: number;
  /**
   * Amount of product orders from the stream divided by Amount of product clicks from the stream.
   */
  co?: number;
  /**
   * Number of placed orders (paid and unpaid) during Livestream, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of viewers during stream.
   */
  ccu?: number;
  /**
   * Number of Concurrent viewers in the stream that have watched for more than 1 minute.
   */
  engage_ccu_1m?: number;
  /**
   * Highest number of viewers during stream.
   */
  peak_ccu?: number;
  /**
   * Number of "Like" clicked during livestream.
   */
  likes?: number;
  /**
   * Number of comments acquired during the stream.
   */
  comments?: number;
  /**
   * Number of shares created during the stream.
   */
  shares?: number;
  /**
   * Number of views from the stream.
   */
  views?: number;
  /**
   * Average of Viewer duration watching in the stream.
   */
  avg_viewing_duration?: number;
}

/**
 * Response payload for get_session_metric
 *
 * Get real-time indicator data of the live stream room, including the number of likes, comments, shares, views, etc.(For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetSessionMetricResponse = ShopeeResponseCommon<ShopeeGetSessionMetricResponseData>;

/**
 * ShopeeGetShowItemPriceInfo sub-interface for ShopeeGetShowItemItem
 */
export interface ShopeeGetShowItemPriceInfo {
  /**
   * The three-digit code representing the currency unit used for the item.
   */
  currency?: string;
  /**
   * The current price of the item in the listing currency. If product under an ongoing promotion, current_price will be the promotion price.
   */
  current_price?: number;
  /**
   * The original price of the item in the listing currency.
   */
  original_price?: number;
}

/**
 * ShopeeGetShowItemItem sub-interface for ShopeeGetShowItemResponseData
 */
export interface ShopeeGetShowItemItem {
  /**
   * The order of this item in the shopping bag of current session, start from 1. Only return item_no when showing item is in the shopping bag of current session.
   */
  item_no?: number;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The shop id of this item.
   */
  shop_id?: number;
  /**
   * Name of the item in local language.
   */
  name?: string;
  /**
   * The image url of this item.
   */
  image_url?: string;
  price_info?: ShopeeGetShowItemPriceInfo;
}

/**
 * ShopeeGetShowItemResponseData sub-interface for ShopeeGetShowItemResponse
 */
export interface ShopeeGetShowItemResponseData {
  /**
   * Whether has the showing item.
   */
  has_show_item?: boolean;
  item?: ShopeeGetShowItemItem;
}

/**
 * Response payload for get_show_item
 *
 * Get the showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeGetShowItemResponse = ShopeeResponseCommon<ShopeeGetShowItemResponseData>;

/**
 * ShopeePostCommentResponseData sub-interface for ShopeePostCommentResponse
 */
export interface ShopeePostCommentResponseData {
  /**
   * The identifier of the comment.
   */
  comment_id?: number;
}

/**
 * Response payload for post_comment
 *
 * Post comment in the live stream as streamer. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeePostCommentResponse = ShopeeResponseCommon<ShopeePostCommentResponseData>;

/**
 * Response data payload for start_session
 */
export type ShopeeStartSessionResponseData = any;

/**
 * Response payload for start_session
 *
 * Start Live. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeStartSessionResponse = ShopeeResponseCommon<ShopeeStartSessionResponseData>;

/**
 * Response data payload for unban_user_comment
 */
export type ShopeeUnbanUserCommentResponseData = any;

/**
 * Response payload for unban_user_comment
 *
 * Unban a user from posting comments. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeUnbanUserCommentResponse = ShopeeResponseCommon<ShopeeUnbanUserCommentResponseData>;

/**
 * Response data payload for update_item_list
 */
export type ShopeeUpdateItemListResponseData = any;

/**
 * Response payload for update_item_list
 *
 * Update the order of items in item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeUpdateItemListResponse = ShopeeResponseCommon<ShopeeUpdateItemListResponseData>;

/**
 * Response data payload for update_session
 */
export type ShopeeUpdateSessionResponseData = any;

/**
 * Response payload for update_session
 *
 * Update live stream information, including cover, title, description, and type (test live or normal live). (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeUpdateSessionResponse = ShopeeResponseCommon<ShopeeUpdateSessionResponseData>;

/**
 * Response data payload for update_show_item
 */
export type ShopeeUpdateShowItemResponseData = any;

/**
 * Response payload for update_show_item
 *
 * Set the showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeUpdateShowItemResponse = ShopeeResponseCommon<ShopeeUpdateShowItemResponseData>;

/**
 * ShopeeUploadImageResponseData sub-interface for ShopeeUploadImageResponse
 */
export interface ShopeeUploadImageResponseData {
  /**
   * The image URL
   */
  image_url?: string;
}

/**
 * Response payload for upload_image
 *
 * Upload an image as the live stream cover.(For TW, ID, TH, PH, MY, SG, VN)
 */
export type ShopeeUploadImageResponse = ShopeeResponseCommon<ShopeeUploadImageResponseData>;
