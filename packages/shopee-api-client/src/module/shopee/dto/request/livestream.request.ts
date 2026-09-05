/**
 * ShopeeAddItemListItem sub-interface for ShopeeAddItemListRequest
 */
export interface ShopeeAddItemListItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The shop id of this item.
   */
  shop_id: number;
}

/**
 * Request parameters for add_item_list
 *
 * Add items to item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeAddItemListRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The list of item to add.
   */
  item_list: ShopeeAddItemListItem[];
}

/**
 * Request parameters for apply_item_set
 *
 * Add product set to item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeApplyItemSetRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * List of item set id to apply.
   */
  item_set_ids: number[];
}

/**
 * Request parameters for ban_user_comment
 *
 * Ban the user from posting comments. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeBanUserCommentRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The user id that will be banned from posting comments.
   */
  ban_user_id: number;
}

/**
 * Request parameters for create_session
 *
 * Create a new live stream, include basic information, like cover, title, description, type (test live or normal live). (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeCreateSessionRequest {
  /**
   * The title of livestream session, cannot exceed 200 characters.
   */
  title: string;
  /**
   * The description of livestream session, cannot exceed 200 characters.
   */
  description?: string;
  /**
   * The cover image URL of livestream session.Please call the v2.livestream.upload_image to upload the cover image file and get the cover_image_url.
   */
  cover_image_url: string;
  /**
   * Indicate whether the livestream session is for testing purpose only.
   */
  is_test?: boolean;
}

/**
 * ShopeeDeleteItemListItem sub-interface for ShopeeDeleteItemListRequest
 */
export interface ShopeeDeleteItemListItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The shop id of this item.
   */
  shop_id: number;
}

/**
 * Request parameters for delete_item_list
 *
 * Delete items from item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeDeleteItemListRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The list of item to delete.
   */
  item_list: ShopeeDeleteItemListItem[];
}

/**
 * Request parameters for delete_show_item
 *
 * Unshow showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeDeleteShowItemRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for end_session
 *
 * End Live. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeEndSessionRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for get_item_count
 *
 * Get the number of items in the shopping bag, including the current number of items in the shopping bag, the upper limit of the number, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetItemCountRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for get_item_list
 *
 * Get the detail information of item in item bag, including item id, item serial number, etc.(For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetItemListRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_item_set_item_list
 *
 * Get the item list of the product set, including item name, id, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetItemSetItemListRequest {
  /**
   * The identifier of the item set.
   */
  item_set_id: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_item_set_list
 *
 * Get the product set of the live stream, including the product set name, id, and item number. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetItemSetListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Search the item set with it's name matching the keyword.
   */
  keyword?: string;
}

/**
 * Request parameters for get_latest_comment_list
 *
 * Get live stream room comments in the last 10 seconds, including user id, user name, comment id, comment content, and comment time. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetLatestCommentListRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset?: number;
}

/**
 * Request parameters for get_like_item_list
 *
 * Get the item list of My Likes tab.(For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetLikeItemListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Search items with name matching this keyword.
   */
  keyword?: string;
}

/**
 * Request parameters for get_recent_item_list
 *
 * Get the item list of the Recently tab. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetRecentItemListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_session_detail
 *
 * Get basic information about the live streaming room, including cover, title, description, type (test live or normal live), create time, update time, stream url, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetSessionDetailRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for get_session_item_metric
 *
 * Get real-time indicator data of live stream products, including product clicks, add-to-cart, etc. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetSessionItemMetricRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_session_metric
 *
 * Get real-time indicator data of the live stream room, including the number of likes, comments, shares, views, etc.(For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetSessionMetricRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for get_show_item
 *
 * Get the showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeGetShowItemRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
}

/**
 * Request parameters for post_comment
 *
 * Post comment in the live stream as streamer. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeePostCommentRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The comment content, cannot exceed 150 characters.
   */
  content: string;
}

/**
 * Request parameters for start_session
 *
 * Start Live. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeStartSessionRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The identifier of the stream domain.
   */
  domain_id: number;
  /**
   * Only available in PH region.To support transparent experiences on Shopee Live,please select this option if AI-generated streameris used for live-streaming.Failure of doing so may lead to warning or termination.Learn more about the policy:PH: https://seller.shopee.ph/edu/article/25213
   */
  ai_stream?: boolean;
}

/**
 * Request parameters for unban_user_comment
 *
 * Unban a user from posting comments. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeUnbanUserCommentRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The user ID that will be unbanned from posting comments.
   */
  unban_user_id: number;
}

/**
 * ShopeeUpdateItemListItem sub-interface for ShopeeUpdateItemListRequest
 */
export interface ShopeeUpdateItemListItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The shop id of this item.
   */
  shop_id: number;
}

/**
 * Request parameters for update_item_list
 *
 * Update the order of items in item bag. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeUpdateItemListRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The list of item with updated order.
   */
  item_list: ShopeeUpdateItemListItem[];
}

/**
 * Request parameters for update_session
 *
 * Update live stream information, including cover, title, description, and type (test live or normal live). (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeUpdateSessionRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * The title of the livestream session, cannot exceed 200 characters.
   */
  title: string;
  /**
   * The description of the livestream session, cannot exceed 200 characters.
   */
  description?: string;
  /**
   * The cover image url of the livestream session.Please call the v2.livestream.upload_image to upload the cover image file and get the cover_image_url.
   */
  cover_image_url: string;
  /**
   * Indicate whether this livestream session if for testing purpose only.
   */
  is_test: boolean;
}

/**
 * Request parameters for update_show_item
 *
 * Set the showing item. (For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeUpdateShowItemRequest {
  /**
   * The identifier of livestream session.
   */
  session_id: number;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The shop id of this item.
   */
  shop_id: number;
}

/**
 * Request parameters for upload_image
 *
 * Upload an image as the live stream cover.(For TW, ID, TH, PH, MY, SG, VN)
 */
export interface ShopeeUploadImageRequest {
  /**
   * The image file to upload.
   */
  image: Buffer;
}
