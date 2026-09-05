import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeePlatform
 */
export enum ShopeePlatform {
  VIDEO = "video",
  SHOPEE = "shopee",
}

/**
 * ShopeeAddAllProductsToOpenCampaignResponseData sub-interface for ShopeeAddAllProductsToOpenCampaignResponse
 */
export interface ShopeeAddAllProductsToOpenCampaignResponseData {
  /**
   * Task type. Applicable values: batch_add_open_campaignsbatch_remove_open_campaignsbatch_update_open_campaignsFor this API, task type will be batch_add_open_campaigns
   */
  task_type?: string;
  /**
   * Task id, used to query task progress when calling v2.ams.get_open_campaign_batch_task_result API
   */
  task_id?: string;
}

/**
 * Response payload for add_all_products_to_open_campaign
 *
 * Add all eligible products into the Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams.batch_add_products_to_open_campaign by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export type ShopeeAddAllProductsToOpenCampaignResponse =
  ShopeeResponseCommon<ShopeeAddAllProductsToOpenCampaignResponseData>;

/**
 * ShopeeBatchAddProductsToOpenCampaignFailed sub-interface for ShopeeBatchAddProductsToOpenCampaignResponseData
 */
export interface ShopeeBatchAddProductsToOpenCampaignFailed {
  /**
   * Item ID
   */
  item_id?: number;
  /**
   * Fail Error
   */
  fail_error?: string;
  /**
   * Fail Message
   */
  fail_message?: string;
}

/**
 * ShopeeBatchAddProductsToOpenCampaignResponseData sub-interface for ShopeeBatchAddProductsToOpenCampaignResponse
 */
export interface ShopeeBatchAddProductsToOpenCampaignResponseData {
  failed_list?: ShopeeBatchAddProductsToOpenCampaignFailed[];
  /**
   * Success Item ID List
   */
  success_list?: number[];
}

/**
 * Response payload for batch_add_products_to_open_campaign
 *
 * Batch add products to the Open Campaign for a given list of product IDs
 */
export type ShopeeBatchAddProductsToOpenCampaignResponse =
  ShopeeResponseCommon<ShopeeBatchAddProductsToOpenCampaignResponseData>;

/**
 * ShopeeBatchEditProductsOpenCampaignSettingFailed sub-interface for ShopeeBatchEditProductsOpenCampaignSettingResponseData
 */
export interface ShopeeBatchEditProductsOpenCampaignSettingFailed {
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Fail error
   */
  fail_error?: string;
  /**
   * Fail message
   */
  fail_message?: string;
}

/**
 * ShopeeBatchEditProductsOpenCampaignSettingResponseData sub-interface for ShopeeBatchEditProductsOpenCampaignSettingResponse
 */
export interface ShopeeBatchEditProductsOpenCampaignSettingResponseData {
  failed_list?: ShopeeBatchEditProductsOpenCampaignSettingFailed[];
  /**
   * Success Campaign ID List
   */
  success_list?: number[];
}

/**
 * Response payload for batch_edit_products_open_campaign_setting
 *
 * Batch update open campaign settings for a given list of product IDs
 */
export type ShopeeBatchEditProductsOpenCampaignSettingResponse =
  ShopeeResponseCommon<ShopeeBatchEditProductsOpenCampaignSettingResponseData>;

/**
 * ShopeeBatchGetProductsSuggestedRateRate sub-interface for ShopeeBatchGetProductsSuggestedRateResponseData
 */
export interface ShopeeBatchGetProductsSuggestedRateRate {
  /**
   * Item ID
   */
  item_id?: number;
  /**
   * Minimum suggested commission rate, 1.1 means 1.1%, support two decimal places
   */
  min_rate?: number;
  /**
   * Maximum suggested commission rate, 1.2 means 1.2%, support two decimal places
   */
  max_rate?: number;
}

/**
 * ShopeeBatchGetProductsSuggestedRateResponseData sub-interface for ShopeeBatchGetProductsSuggestedRateResponse
 */
export interface ShopeeBatchGetProductsSuggestedRateResponseData {
  rates?: ShopeeBatchGetProductsSuggestedRateRate[];
}

/**
 * Response payload for batch_get_products_suggested_rate
 *
 * Fetch suggested rates for a given list of product IDs
 */
export type ShopeeBatchGetProductsSuggestedRateResponse =
  ShopeeResponseCommon<ShopeeBatchGetProductsSuggestedRateResponseData>;

/**
 * ShopeeBatchRemoveProductsOpenCampaignSettingFailed sub-interface for ShopeeBatchRemoveProductsOpenCampaignSettingResponseData
 */
export interface ShopeeBatchRemoveProductsOpenCampaignSettingFailed {
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Fail error
   */
  fail_error?: string;
  /**
   * Fail message
   */
  fail_message?: string;
}

/**
 * ShopeeBatchRemoveProductsOpenCampaignSettingResponseData sub-interface for ShopeeBatchRemoveProductsOpenCampaignSettingResponse
 */
export interface ShopeeBatchRemoveProductsOpenCampaignSettingResponseData {
  failed_list?: ShopeeBatchRemoveProductsOpenCampaignSettingFailed[];
  /**
   * Success Campaign ID List
   */
  success_list?: number[];
}

/**
 * Response payload for batch_remove_products_open_campaign_setting
 *
 * Batch update products from Open Campaign for a given list of product IDs
 */
export type ShopeeBatchRemoveProductsOpenCampaignSettingResponse =
  ShopeeResponseCommon<ShopeeBatchRemoveProductsOpenCampaignSettingResponseData>;

/**
 * ShopeeCreateNewTargetedCampaignFailItem sub-interface for ShopeeCreateNewTargetedCampaignResponseData
 */
export interface ShopeeCreateNewTargetedCampaignFailItem {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Fail error.
   */
  fail_error?: string;
  /**
   * Fail message.
   */
  fail_message?: string;
}

/**
 * ShopeeCreateNewTargetedCampaignFailAffiliate sub-interface for ShopeeCreateNewTargetedCampaignResponseData
 */
export interface ShopeeCreateNewTargetedCampaignFailAffiliate {
  /**
   * Affiliate ID.
   */
  affiliate_id?: number;
  /**
   * Fail error.
   */
  fail_error?: string;
  /**
   * Fail message.
   */
  fail_message?: string;
}

/**
 * ShopeeCreateNewTargetedCampaignResponseData sub-interface for ShopeeCreateNewTargetedCampaignResponse
 */
export interface ShopeeCreateNewTargetedCampaignResponseData {
  /**
   * The unique key for campaign.
   */
  campaign_id?: number;
  /**
   * Failed Item List.
   */
  fail_item_list?: ShopeeCreateNewTargetedCampaignFailItem[];
  /**
   * Fail Affiliate List.
   */
  fail_affiliate_list?: ShopeeCreateNewTargetedCampaignFailAffiliate[];
}

/**
 * Response payload for create_new_targeted_campaign
 *
 * Create a new campaign with custom product & affiliate selections, and basic info filling.
 */
export type ShopeeCreateNewTargetedCampaignResponse =
  ShopeeResponseCommon<ShopeeCreateNewTargetedCampaignResponseData>;

/**
 * ShopeeEditAffiliateListOfTargetedCampaignFailAffiliate sub-interface for ShopeeEditAffiliateListOfTargetedCampaignResponseData
 */
export interface ShopeeEditAffiliateListOfTargetedCampaignFailAffiliate {
  /**
   * The unique key for affiliate.
   */
  affiliate_id?: number;
  /**
   * Indicate error type if hit error. Empty if no error happened.
   */
  fail_error?: string;
  /**
   * Indicate error details if hit error. Empty if no error happened.
   */
  fail_message?: string;
}

/**
 * ShopeeEditAffiliateListOfTargetedCampaignResponseData sub-interface for ShopeeEditAffiliateListOfTargetedCampaignResponse
 */
export interface ShopeeEditAffiliateListOfTargetedCampaignResponseData {
  /**
   * Failed Affiliate List.
   */
  fail_affiliate_list?: ShopeeEditAffiliateListOfTargetedCampaignFailAffiliate[];
}

/**
 * Response payload for edit_affiliate_list_of_targeted_campaign
 *
 * Modify the selected affiliate list in an existing target campaign
 */
export type ShopeeEditAffiliateListOfTargetedCampaignResponse =
  ShopeeResponseCommon<ShopeeEditAffiliateListOfTargetedCampaignResponseData>;

/**
 * ShopeeEditAllProductsOpenCampaignSettingResponseData sub-interface for ShopeeEditAllProductsOpenCampaignSettingResponse
 */
export interface ShopeeEditAllProductsOpenCampaignSettingResponseData {
  /**
   * Task type. Applicable values: batch_add_open_campaignsbatch_remove_open_campaignsbatch_update_open_campaignsFor this API, task type will be batch_update_open_campaigns
   */
  task_type?: string;
  /**
   * Task id, used to query task progress when calling v2.ams.get_open_campaign_batch_task_result API
   */
  task_id?: string;
}

/**
 * Response payload for edit_all_products_open_campaign_setting
 *
 * Update for all products in the Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams.batch_edit_products_open_campaign_setting by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export type ShopeeEditAllProductsOpenCampaignSettingResponse =
  ShopeeResponseCommon<ShopeeEditAllProductsOpenCampaignSettingResponseData>;

/**
 * ShopeeEditProductListOfTargetedCampaignFailItem sub-interface for ShopeeEditProductListOfTargetedCampaignResponseData
 */
export interface ShopeeEditProductListOfTargetedCampaignFailItem {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Indicate error type if hit error. Empty if no error happened.
   */
  fail_error?: string;
  /**
   * Indicate error details if hit error. Empty if no error happened.
   */
  fail_message?: string;
}

/**
 * ShopeeEditProductListOfTargetedCampaignResponseData sub-interface for ShopeeEditProductListOfTargetedCampaignResponse
 */
export interface ShopeeEditProductListOfTargetedCampaignResponseData {
  /**
   * Failed Item List.
   */
  fail_item_list?: ShopeeEditProductListOfTargetedCampaignFailItem[];
}

/**
 * Response payload for edit_product_list_of_targeted_campaign
 *
 * Modify the selected product list in an existing target campaign
 */
export type ShopeeEditProductListOfTargetedCampaignResponse =
  ShopeeResponseCommon<ShopeeEditProductListOfTargetedCampaignResponseData>;

/**
 * ShopeeGetAffiliatePerformanceList sub-interface for ShopeeGetAffiliatePerformanceResponseData
 */
export interface ShopeeGetAffiliatePerformanceList {
  /**
   * Unique identifier assigned to the affiliate. Used as a reference key in the system.
   */
  affiliate_id?: number;
  /**
   * Display name of the affiliate, typically the Shopee display name.
   */
  affiliate_name?: string;
  /**
   * Login or Shopee account username associated with the affiliate.
   */
  affiliate_username?: string;
  /**
   * Total value of the product sold through the affiliate's promotion.
   */
  sales?: string;
  /**
   * Total number of the product sold through the affiliate's promotion.
   */
  items_sold?: number;
  /**
   * Total number of orders generated through the affiliate's promotion.
   */
  orders?: number;
  /**
   * Total number of clicks on your product links through affiliate marketing during the selected period.
   */
  clicks?: number;
  /**
   * Estimated payout through the affiliate's promotion.
   */
  est_commission?: string;
  /**
   * Return on Investment, equal to GMV divided by Estimated Commission. It can be used to evaluate the efficiency of the affiliate's promotion. If it does not exist, the return value is --.
   */
  roi?: string;
  /**
   * Total number of buyers who have purchased the product through the affiliate's promotion.
   */
  total_buyers?: number;
  /**
   * Total number of new buyers who have purchased the product through the affiliate's promotion.
   */
  new_buyers?: number;
}

/**
 * ShopeeGetAffiliatePerformanceResponseData sub-interface for ShopeeGetAffiliatePerformanceResponse
 */
export interface ShopeeGetAffiliatePerformanceResponseData {
  list?: ShopeeGetAffiliatePerformanceList[];
  /**
   * Total number of affiliates that match the condition.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_affiliate_performance
 *
 * Retrieve affiliate performance of the shop.
 */
export type ShopeeGetAffiliatePerformanceResponse = ShopeeResponseCommon<ShopeeGetAffiliatePerformanceResponseData>;

/**
 * ShopeeGetAutoAddNewProductToggleStatusResponseData sub-interface for ShopeeGetAutoAddNewProductToggleStatusResponse
 */
export interface ShopeeGetAutoAddNewProductToggleStatusResponseData {
  /**
   * If auto-add new product is currently enabled
   */
  is_open?: boolean;
  /**
   * Commission Rate, 1.11 means 1.11%, support two decimal places
   */
  commission_rate?: number;
}

/**
 * Response payload for get_auto_add_new_product_toggle_status
 *
 * Check if auto-add new product is currently enabled
 */
export type ShopeeGetAutoAddNewProductToggleStatusResponse =
  ShopeeResponseCommon<ShopeeGetAutoAddNewProductToggleStatusResponseData>;

/**
 * ShopeeGetCampaignKeyMetricsPerformanceOpenCampaignKeyMetirc sub-interface for ShopeeGetCampaignKeyMetricsPerformanceResponseData
 */
export interface ShopeeGetCampaignKeyMetricsPerformanceOpenCampaignKeyMetirc {
  /**
   * Total number of affiliates who drove orders from Open Campaigns.
   */
  affiliates?: number;
  /**
   * Total number of items sold from Open Campaigns.
   */
  items_sold?: number;
  /**
   * Total value of orders from Open Campaigns.
   */
  sales?: string;
  /**
   * Total estimated commission for orders placed from Open Campaigns.
   */
  est_commission?: string;
}

/**
 * ShopeeGetCampaignKeyMetricsPerformanceTargetedCampaignKeyMetirc sub-interface for ShopeeGetCampaignKeyMetricsPerformanceResponseData
 */
export interface ShopeeGetCampaignKeyMetricsPerformanceTargetedCampaignKeyMetirc {
  /**
   * Total number of affiliates who drove orders from Targeted Campaigns.
   */
  affiliates?: number;
  /**
   * Total number of items sold from Targeted Campaigns.
   */
  items_sold?: number;
  /**
   * Total value of orders from Targeted Campaigns.
   */
  sales?: string;
  /**
   * Total estimated commission for orders placed from Targeted Campaigns.
   */
  est_commission?: string;
}

/**
 * ShopeeGetCampaignKeyMetricsPerformanceResponseData sub-interface for ShopeeGetCampaignKeyMetricsPerformanceResponse
 */
export interface ShopeeGetCampaignKeyMetricsPerformanceResponseData {
  /**
   * Performance data of Open Campaign.
   */
  open_campaign_key_metircs?: ShopeeGetCampaignKeyMetricsPerformanceOpenCampaignKeyMetirc;
  /**
   * Performance data of Target Campaign.
   */
  targeted_campaign_key_metircs?: ShopeeGetCampaignKeyMetricsPerformanceTargetedCampaignKeyMetirc;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_campaign_key_metrics_performance
 *
 * Retrieve key metrics for Open and Targeted campaigns
 */
export type ShopeeGetCampaignKeyMetricsPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetCampaignKeyMetricsPerformanceResponseData>;

/**
 * ShopeeGetContentPerformanceList sub-interface for ShopeeGetContentPerformanceResponseData
 */
export interface ShopeeGetContentPerformanceList {
  /**
   * Unique identifier of the content where the product is placed.
   */
  content_id?: string;
  /**
   * Title or name of the content (e.g., video, livestream) associated with the product.
   */
  content_title?: string;
  /**
   * Livestream:  The livestream start time.Video: The video post time.
   */
  post_time?: number;
  /**
   * Display name of the affiliate who posted the content, typically the Shopee name.
   */
  affiliate_name?: string;
  /**
   * Login or Shopee account username associated with the affiliate.
   */
  affiliate_username?: string;
  /**
   * Number of products associated with the content.
   */
  products?: number;
  /**
   * The total viewed pv of the content of this shop within the selected time range
   */
  views?: number;
  /**
   * The total number of likes for the content of this shop within the selected time range
   */
  likes?: number;
  /**
   * The total number of comments for the content of this shop within the selected time range
   */
  comments?: number;
  /**
   * The total sales of the content associated with the shop orders within the selected time range
   */
  sales?: string;
  /**
   * The total number of orders associated with the shop for the content in the selected time range
   */
  orders?: number;
  /**
   * The total number of items sold associated with the shop for the content in the selected time range
   */
  items_sold?: number;
  /**
   * Channel. Applicable values: - ShopeeVideo- LiveStreaming
   */
  channel?: string;
}

/**
 * ShopeeGetContentPerformanceResponseData sub-interface for ShopeeGetContentPerformanceResponse
 */
export interface ShopeeGetContentPerformanceResponseData {
  list?: ShopeeGetContentPerformanceList[];
  /**
   * This is to indicate the whole number of items.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_content_performance
 *
 * Retrieve content performance of the shop
 */
export type ShopeeGetContentPerformanceResponse = ShopeeResponseCommon<ShopeeGetContentPerformanceResponseData>;

/**
 * ShopeeGetConversionReportItem sub-interface for ShopeeGetConversionReportList
 */
export interface ShopeeGetConversionReportItem {
  /**
   * Unique identifier of the item in the order.
   */
  item_id?: number;
  /**
   * Name of the item in the order.
   */
  item_name?: string;
  /**
   * SKU/model identifier for the item.
   */
  model_id?: number;
  /**
   * Level-1 global category id classification of the item.
   */
  l1_category_id?: number;
  /**
   * Level-2 global category id classification of the item.
   */
  l2_category_id?: number;
  /**
   * Level-3 global category id classification of the item.
   */
  l3_category_id?: number;
  /**
   * Identifier of the promotion campaign linked to the order.
   */
  promotion_id?: string;
  /**
   * Item price in cents (or smallest currency unit).
   */
  price?: number;
  /**
   * Quantity of the item purchased.
   */
  qty?: number;
  /**
   * Type of seller campaign:1. Seller Open Campaign – Open to all affiliates.2. Seller Target Campaign – Restricted to designated affiliates.
   */
  seller_campaign_type?: string;
  /**
   * Campaign attribute ID associated with the order.
   */
  attr_campaign_id?: number;
  /**
   * Total purchase value of the order in cents (or smallest currency unit).
   */
  purchase_value?: number;
  /**
   * Amount refunded for the order.
   */
  refund_amount?: string;
  /**
   * Commission (amount) for the item, paid by the seller.
   */
  item_brand_commission?: string;
  /**
   * Commission rate allocated to the affiliate for the item.
   */
  item_brand_commission_rate_to_affiliate?: string;
  /**
   * Commission (amount) allocated to the affiliate for the item.
   */
  item_brand_commission_to_affiliate?: string;
  /**
   * Commission rate allocated to the MCN for the item.
   */
  item_brand_commission_rate_to_mcn?: string;
  /**
   * Commission (amount) allocated to the MCN for the item.
   */
  item_brand_commission_to_mcn?: string;
  /**
   * Seller service fee rate applied to the item.
   */
  seller_service_fee_rate?: string;
  /**
   * Seller service fee amount charged for the item.seller_service_fee = item_brand_commission *  seller_service_fee_rate
   */
  seller_service_fee?: string;
}

/**
 * ShopeeGetConversionReportList sub-interface for ShopeeGetConversionReportResponseData
 */
export interface ShopeeGetConversionReportList {
  /**
   * Unique identifier of the order.
   */
  order_sn?: string;
  /**
   * Current status of the order (e.g., Pending, Completed, Cancelled).
   */
  order_status?: string;
  /**
   * Verification status of the order (Unverified, Verified).
   */
  verified_status?: string;
  /**
   * Time when the order was placed.
   */
  place_order_time?: string;
  /**
   * Time when the order was marked as completed.
   */
  order_completed_time?: string;
  /**
   * Time when the conversion (affiliate action) was completed.
   */
  conversion_completed_time?: string;
  /**
   * Unique identifier of the affiliate.
   */
  affiliate_id?: number;
  /**
   * Shopee display name of the affiliate who promoted the item.
   */
  affiliate_name?: string;
  /**
   * Affiliate's Shopee login username.
   */
  affiliate_username?: string;
  /**
   * MCN (Multi-Channel Network) linked with the affiliate, if any.
   */
  linked_mcn?: string;
  /**
   * Commission (amount) for the whole order, paid by the seller.
   */
  order_brand_commission?: string;
  /**
   * Traffic channel or platform where the promotion took place.
   */
  channel?: string;
  /**
   * Type of order: Direct Order or Indirect Order.
   */
  order_type?: string;
  /**
   * Buyer Status. Applicable values: NewExisting
   */
  buyer_status?: string;
  items?: ShopeeGetConversionReportItem[];
  /**
   * Partner identifier for the campaign.
   */
  campaign_partner?: string;
}

/**
 * ShopeeGetConversionReportResponseData sub-interface for ShopeeGetConversionReportResponse
 */
export interface ShopeeGetConversionReportResponseData {
  /**
   * Array of order records. Each object contains order and commission details.
   */
  list?: ShopeeGetConversionReportList[];
  /**
   * Total number of entities that match the condition.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
}

/**
 * Response payload for get_conversion_report
 *
 * Retrieve the shop's conversion report with details about each order, item, affiliate, campaign.You can filter results using one or multiple time ranges, and the final result will be the intersection of these ranges. Due to data volume limitations, the maximum queryable time span is three months, etc.Maximum data can be viewed is 500 pages, please export data for more details.
 */
export type ShopeeGetConversionReportResponse = ShopeeResponseCommon<ShopeeGetConversionReportResponseData>;

/**
 * ShopeeGetManagedAffiliateListPopularSocialMedia sub-interface for ShopeeGetManagedAffiliateListAffiliate
 */
export interface ShopeeGetManagedAffiliateListPopularSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
}

/**
 * ShopeeGetManagedAffiliateListSocialMedia sub-interface for ShopeeGetManagedAffiliateListAffiliate
 */
export interface ShopeeGetManagedAffiliateListSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
  /**
   * Social media name of this account.
   */
  social_media_user_name?: string;
}

/**
 * ShopeeGetManagedAffiliateListTopPopularContent sub-interface for ShopeeGetManagedAffiliateListAffiliate
 */
export interface ShopeeGetManagedAffiliateListTopPopularContent {
  /**
   * The platform of this affiliate's content. eg. shopee video/shopee live
   */
  platform?: ShopeePlatform | string | number;
  /**
   * The comment count of this affiliate's content.
   */
  comment_count?: number;
  /**
   * The like count of this affiliate's content.
   */
  like_count?: number;
  /**
   * The view count of this affiliate's content.
   */
  view_count?: number;
  /**
   * The cover link of this affiliate's content.
   */
  cover_url?: string;
  /**
   * The media link of this affiliate's content.
   */
  media_url?: string;
}

/**
 * ShopeeGetManagedAffiliateListTopSellingProduct sub-interface for ShopeeGetManagedAffiliateListAffiliate
 */
export interface ShopeeGetManagedAffiliateListTopSellingProduct {
  /**
   * The item id of this item.
   */
  item_id?: number;
}

/**
 * ShopeeGetManagedAffiliateListAffiliate sub-interface for ShopeeGetManagedAffiliateListResponseData
 */
export interface ShopeeGetManagedAffiliateListAffiliate {
  /**
   * The unique key for the current affiliate.
   */
  affiliate_id?: number;
  /**
   * The name of the current commission.
   */
  affiliate_name?: string;
  /**
   * The shopee user name or affiliate name for this affiliate
   */
  user_name?: string;
  /**
   * The portrait url of affiliate.
   */
  portrait_url?: string;
  /**
   * The popular social media of this affiliate.
   */
  popular_social_media?: ShopeeGetManagedAffiliateListPopularSocialMedia;
  /**
   * Social media account list of this affiliate.
   */
  social_medias?: ShopeeGetManagedAffiliateListSocialMedia[];
  /**
   * Number of clicks in the last 30 days.
   */
  total_click?: number;
  /**
   * Range number of the orders in the last 30 days.
   */
  order_range?: number[];
  /**
   * Range number of the gmv in the last 30 days.
   */
  gmv_range?: number[];
  /**
   * Golden tick means affiliates create high quality contents with good sales conversion in Shopee Live or Shopee Video.
   */
  is_orange_tick_kol?: boolean;
  /**
   * Good sample fulfillment means that affiliates demonstrate better in free sample fulfillment compared to the majority of affiliates in recent180 days.
   */
  is_good_fulfillment?: boolean;
  /**
   * Top three promote category ids for this affiliate
   */
  promote_category_ids?: number[];
  /**
   * Top popular contents of this affiliate.
   */
  top_popular_contents?: ShopeeGetManagedAffiliateListTopPopularContent[];
  /**
   * Top selling items of the affiliate.
   */
  top_selling_products?: ShopeeGetManagedAffiliateListTopSellingProduct[];
}

/**
 * ShopeeGetManagedAffiliateListResponseData sub-interface for ShopeeGetManagedAffiliateListResponse
 */
export interface ShopeeGetManagedAffiliateListResponseData {
  /**
   * The total count of affiliates that managed by this seller.
   */
  total_count?: number;
  /**
   * Affiliate list managed by seller.Not all return fields will have values.
   */
  affiliate_list?: ShopeeGetManagedAffiliateListAffiliate[];
}

/**
 * Response payload for get_managed_affiliate_list
 *
 * Returns affiliates that are saved to managed affiliate list
 */
export type ShopeeGetManagedAffiliateListResponse = ShopeeResponseCommon<ShopeeGetManagedAffiliateListResponseData>;

/**
 * ShopeeGetOpenCampaignAddedProductCommissionProtection sub-interface for ShopeeGetOpenCampaignAddedProductItem
 */
export interface ShopeeGetOpenCampaignAddedProductCommissionProtection {
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate?: number;
  /**
   * Protection Period End Time
   */
  protection_period_end_time?: number;
}

/**
 * ShopeeGetOpenCampaignAddedProductItem sub-interface for ShopeeGetOpenCampaignAddedProductResponseData
 */
export interface ShopeeGetOpenCampaignAddedProductItem {
  /**
   * Item ID
   */
  item_id?: number;
  /**
   * Item Name
   */
  item_name?: string;
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Campaign Status: UpcomingOngoingTerminating
   */
  campaign_status?: string;
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate?: number;
  /**
   * Period Start Time
   */
  period_start_time?: number;
  /**
   * Period End Time, if get 32503651199 (2999-12-31 23:59:59), it means no limit
   */
  period_end_time?: number;
  /**
   * Pending Terminated Time
   */
  pending_terminated_time?: number;
  /**
   * Commission Protection List
   */
  commission_protection_list?: ShopeeGetOpenCampaignAddedProductCommissionProtection[];
  /**
   * Max Commission Rate Current Day, 1.1 means 1.1%, support two decimal places
   */
  max_commission_rate_current_day?: number;
}

/**
 * ShopeeGetOpenCampaignAddedProductResponseData sub-interface for ShopeeGetOpenCampaignAddedProductResponse
 */
export interface ShopeeGetOpenCampaignAddedProductResponseData {
  item_list?: ShopeeGetOpenCampaignAddedProductItem[];
  /**
   * Total number of items that match the condition
   */
  total_count?: number;
  /**
   * Pass the content in the next request as cursor to get the next page data
   */
  cursor?: string;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  has_more?: boolean;
}

/**
 * Response payload for get_open_campaign_added_product
 *
 * Retrieve all products currently in the Open Campaign, including campaign status, commission rate, and promotion period
 */
export type ShopeeGetOpenCampaignAddedProductResponse =
  ShopeeResponseCommon<ShopeeGetOpenCampaignAddedProductResponseData>;

/**
 * ShopeeGetOpenCampaignBatchTaskResultResponseData sub-interface for ShopeeGetOpenCampaignBatchTaskResultResponse
 */
export interface ShopeeGetOpenCampaignBatchTaskResultResponseData {
  /**
   * Task status. Applicable values:DoingDoneFailNote: Please note that task Done here refers to the completion of scanning all products in the shop, but not the successful execution of all products. Some products may fail, but due to the unpredictable huge volume of data, detailed information will not returned in the fail_reason. After the task is Done, you need to retrieve the list again by GET API and compare it with the before list to confirm the execution details
   */
  status?: string;
  /**
   * Progress rate, 80 means 80%
   */
  progress_rate?: number;
  /**
   * Error message, if it is not empty, it means there is an errorWill not return the detail error for each products, you can check the products detail by using GET API, or using the batch operate API
   */
  fail_reason?: string;
}

/**
 * Response payload for get_open_campaign_batch_task_result
 *
 * Get open campaign batch task result
 */
export type ShopeeGetOpenCampaignBatchTaskResultResponse =
  ShopeeResponseCommon<ShopeeGetOpenCampaignBatchTaskResultResponseData>;

/**
 * ShopeeGetOpenCampaignNotAddedProductItem sub-interface for ShopeeGetOpenCampaignNotAddedProductResponseData
 */
export interface ShopeeGetOpenCampaignNotAddedProductItem {
  /**
   * Item ID
   */
  item_id?: number;
  /**
   * Item name
   */
  item_name?: string;
  /**
   * Item sales
   */
  sales?: number;
  /**
   * Item display price
   */
  display_price?: string;
  /**
   * Item stock
   */
  stock?: number;
  /**
   * If item is in blacklist, it cannot set up open campaign
   */
  is_in_blacklist?: boolean;
  /**
   * If item already has open campaign, it cannot set up another open campaignThe item list may be delayed, so it is used to further filter items that already have open campaigns
   */
  with_open_campaign?: boolean;
}

/**
 * ShopeeGetOpenCampaignNotAddedProductResponseData sub-interface for ShopeeGetOpenCampaignNotAddedProductResponse
 */
export interface ShopeeGetOpenCampaignNotAddedProductResponseData {
  item_list?: ShopeeGetOpenCampaignNotAddedProductItem[];
  /**
   * Total number of items that match the condition
   */
  total_count?: number;
  /**
   * Pass the content in the next request as cursor to get the next page data
   */
  cursor?: string;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  has_more?: boolean;
}

/**
 * Response payload for get_open_campaign_not_added_product
 *
 * Retrieve eligible products not yet added to the Open Campaign
 */
export type ShopeeGetOpenCampaignNotAddedProductResponse =
  ShopeeResponseCommon<ShopeeGetOpenCampaignNotAddedProductResponseData>;

/**
 * ShopeeGetOpenCampaignPerformanceList sub-interface for ShopeeGetOpenCampaignPerformanceResponseData
 */
export interface ShopeeGetOpenCampaignPerformanceList {
  /**
   * Unique identifier of the promoted item within open campaign.
   */
  item_id?: number;
  /**
   * Name or title of the promoted item within open campaign.
   */
  item_name?: string;
  /**
   * Number of affiliates currently participating in the campaign for this item.
   */
  affiliates?: number;
  /**
   * Total sales amount generated from the campaign, in the market's currency.
   */
  sales?: string;
  /**
   * Total quantity of the item sold through the campaign.
   */
  item_sold?: number;
  /**
   * Estimated commission amount payable to affiliates for this item, based on current campaign data.
   */
  est_commission?: string;
}

/**
 * ShopeeGetOpenCampaignPerformanceResponseData sub-interface for ShopeeGetOpenCampaignPerformanceResponse
 */
export interface ShopeeGetOpenCampaignPerformanceResponseData {
  list?: ShopeeGetOpenCampaignPerformanceList[];
  /**
   * This is to indicate the whole number of items.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_open_campaign_performance
 *
 * Retrieve all products in the Open Campaign along with performance data
 */
export type ShopeeGetOpenCampaignPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetOpenCampaignPerformanceResponseData>;

/**
 * ShopeeGetOptimizationSuggestionProductItem sub-interface for ShopeeGetOptimizationSuggestionProductResponseData
 */
export interface ShopeeGetOptimizationSuggestionProductItem {
  /**
   * Item ID
   */
  item_id?: number;
  /**
   * Item Name
   */
  item_name?: string;
  /**
   * Recommend reason. Applicable values: severe_shortagehigh_popularityoptimize_commission_rateextend_time_period
   */
  rcmd_reason?: string[];
  /**
   * Campaign ID
   */
  campaign_id?: number;
  /**
   * Commission Rate, 1.11 means 1.11%, support two decimal places
   */
  commission_rate?: number;
  /**
   * Period Start Time
   */
  period_start_time?: number;
  /**
   * Period End Time, if get 32503651199 (2999-12-31 23:59:59), it means no limit
   */
  period_end_time?: number;
  /**
   * The total number of affiliates who have ever shared the product in the last 90 days
   */
  affiliate_count?: number;
  /**
   * If the requested rcmd_reason_filter is product_opportunition, it is represented as item sales. Other scenarios are the total number of item sold for each product of the shop through AMS in the last 90 days
   */
  item_sold?: number;
  /**
   * Campaign Status:UpcomingOngoingTerminating
   */
  campaign_status?: string;
  /**
   * The total number of AMS orders for the product's L2 category in the last 30 days, only available when requested rcmd_reason_filter is product_opportunition
   */
  l2_category_order_count?: number;
  /**
   * Minimum suggested commission rate, 1.1 means 1.1%, support two decimal places
   */
  suggest_min_rate?: number;
  /**
   * Maximum suggested commission rate, 1.2 means 1.2%, support two decimal places
   */
  suggest_max_rate?: number;
  /**
   * Prefill rate, 1.1 means 1.1%, support two decimal places
   */
  prefill_rate?: number;
  /**
   * Prefill subsidy rate, platform commission rate calculated based on seller commission, 1.2 means 1.2%, support two decimal places
   */
  prefill_subsidy_rate?: number;
  /**
   * Display price
   */
  display_price?: string;
  /**
   * Has subsidy rate
   */
  has_subsidy_data?: boolean;
}

/**
 * ShopeeGetOptimizationSuggestionProductResponseData sub-interface for ShopeeGetOptimizationSuggestionProductResponse
 */
export interface ShopeeGetOptimizationSuggestionProductResponseData {
  item_list?: ShopeeGetOptimizationSuggestionProductItem[];
  /**
   * Total number of items that match the condition
   */
  total?: number;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  has_more?: boolean;
}

/**
 * Response payload for get_optimization_suggestion_product
 *
 * Retrieve products with suggestions to improve performance
 */
export type ShopeeGetOptimizationSuggestionProductResponse =
  ShopeeResponseCommon<ShopeeGetOptimizationSuggestionProductResponseData>;

/**
 * ShopeeGetPerformanceDataUpdateTimeResponseData sub-interface for ShopeeGetPerformanceDataUpdateTimeResponse
 */
export interface ShopeeGetPerformanceDataUpdateTimeResponseData {
  /**
   * The latest date of AMS dashboard data metrics update.
   */
  last_report_date?: string;
}

/**
 * Response payload for get_performance_data_update_time
 *
 * Retrieve the latest date of AMS dashboard data metrics update.
 */
export type ShopeeGetPerformanceDataUpdateTimeResponse =
  ShopeeResponseCommon<ShopeeGetPerformanceDataUpdateTimeResponseData>;

/**
 * ShopeeGetProductPerformanceList sub-interface for ShopeeGetProductPerformanceResponseData
 */
export interface ShopeeGetProductPerformanceList {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Item Name.
   */
  item_name?: string;
  /**
   * Total value of the product sold through affiliate marketing.
   */
  sales?: string;
  /**
   * Total number of the product sold through affiliate marketing.
   */
  items_sold?: number;
  /**
   * Total number of orders including the product generated through affiliate marketing.
   */
  orders?: number;
  /**
   * Total number of clicks on your product links through affiliate marketing during the selected period.
   */
  clicks?: number;
  /**
   * Estimated payout of the product sold through affiliate marketing.
   */
  est_commission?: string;
  /**
   * Return on Investment, equal to GMV divided by Estimated Commission. It can be used to evaluate the efficiency of your investment in affiliate marketing on the product.If it does not exist, the return value is --.
   */
  roi?: string;
  /**
   * Total number of buyers who have purchased the product through affiliate marketing.
   */
  total_buyers?: number;
  /**
   * Total number of new buyers who have purchased the product through affiliate marketing.
   */
  new_buyers?: number;
}

/**
 * ShopeeGetProductPerformanceResponseData sub-interface for ShopeeGetProductPerformanceResponse
 */
export interface ShopeeGetProductPerformanceResponseData {
  list?: ShopeeGetProductPerformanceList[];
  /**
   * Total number of items that match the condition.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_product_performance
 *
 * Retrieve product performance of the shop.
 */
export type ShopeeGetProductPerformanceResponse = ShopeeResponseCommon<ShopeeGetProductPerformanceResponseData>;

/**
 * ShopeeGetRecommendedAffiliateListPopularSocialMedia sub-interface for ShopeeGetRecommendedAffiliateListAffiliate
 */
export interface ShopeeGetRecommendedAffiliateListPopularSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
}

/**
 * ShopeeGetRecommendedAffiliateListSocialMedia sub-interface for ShopeeGetRecommendedAffiliateListAffiliate
 */
export interface ShopeeGetRecommendedAffiliateListSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
  /**
   * Social media name of this account.
   */
  social_media_user_name?: string;
}

/**
 * ShopeeGetRecommendedAffiliateListTopPopularContent sub-interface for ShopeeGetRecommendedAffiliateListAffiliate
 */
export interface ShopeeGetRecommendedAffiliateListTopPopularContent {
  /**
   * The platform of this affiliate's content. eg. shopee video/shopee live
   */
  platform?: ShopeePlatform | string | number;
  /**
   * The comment count of this affiliate's content.
   */
  comment_count?: number;
  /**
   * The like count of this affiliate's content.
   */
  like_count?: number;
  /**
   * The view count of this affiliate's content.
   */
  view_count?: number;
  /**
   * The cover link of this affiliate's content.
   */
  cover_url?: string;
  /**
   * The media link of this affiliate's content.
   */
  media_url?: string;
}

/**
 * ShopeeGetRecommendedAffiliateListTopSellingProduct sub-interface for ShopeeGetRecommendedAffiliateListAffiliate
 */
export interface ShopeeGetRecommendedAffiliateListTopSellingProduct {
  /**
   * The item id of this item.
   */
  item_id?: number;
}

/**
 * ShopeeGetRecommendedAffiliateListAffiliate sub-interface for ShopeeGetRecommendedAffiliateListResponseData
 */
export interface ShopeeGetRecommendedAffiliateListAffiliate {
  /**
   * The unique key for the current affiliate.
   */
  affiliate_id?: number;
  /**
   * The name of the affiliate.
   */
  affiliate_name?: string;
  /**
   * The shopee user name or affiliate name for this affiliate.
   */
  user_name?: string;
  /**
   * The portrait url of affiliate.
   */
  portrait_url?: string;
  /**
   * The popular social media of this affiliate.
   */
  popular_social_media?: ShopeeGetRecommendedAffiliateListPopularSocialMedia;
  /**
   * Social media account list of this affiliate.
   */
  social_medias?: ShopeeGetRecommendedAffiliateListSocialMedia[];
  /**
   * Number of clicks in the last 30 days.
   */
  total_click?: number;
  /**
   * Range number of the orders in the last 30 days.
   */
  order_range?: number[];
  /**
   * Range number of the GMV in the last 30 days.
   */
  gmv_range?: number[];
  /**
   * Golden tick means affiliates create high quality contents with good sales conversion in Shopee Live or Shopee Video.
   */
  is_orange_tick_kol?: boolean;
  /**
   * Good sample fulfillment means that affiliates demonstrate better in free sample fulfillment compared to the majority of affiliates in recent180 days
   */
  is_good_fulfillment?: boolean;
  /**
   * Three promote category ids for this affiliate.
   */
  promote_category_ids?: number[];
  /**
   * Top popular contents of this affiliate.
   */
  top_popular_contents?: ShopeeGetRecommendedAffiliateListTopPopularContent[];
  /**
   * Top selling items of the affiliate.
   */
  top_selling_products?: ShopeeGetRecommendedAffiliateListTopSellingProduct[];
}

/**
 * ShopeeGetRecommendedAffiliateListResponseData sub-interface for ShopeeGetRecommendedAffiliateListResponse
 */
export interface ShopeeGetRecommendedAffiliateListResponseData {
  /**
   * The total count of affiliates that recommended for shop id.
   */
  total_count?: number;
  /**
   * Recommended Affiliate list. Not all return fields will have values.
   */
  affiliate_list?: ShopeeGetRecommendedAffiliateListAffiliate[];
}

/**
 * Response payload for get_recommended_affiliate_list
 *
 * Returns top 200 recommended affiliates that can be added to a campaign
 */
export type ShopeeGetRecommendedAffiliateListResponse =
  ShopeeResponseCommon<ShopeeGetRecommendedAffiliateListResponseData>;

/**
 * ShopeeGetShopPerformanceResponseData sub-interface for ShopeeGetShopPerformanceResponse
 */
export interface ShopeeGetShopPerformanceResponseData {
  /**
   * Total value of orders generated through affiliate marketing during the selected period.
   */
  sales?: string;
  /**
   * Total number of items sold through affiliate marketing during the selected period.
   */
  gross_item_sold?: number;
  /**
   * Total number of orders generated through affiliate marketing during the selected period.
   */
  orders?: number;
  /**
   * Total clicks on your product links through affiliate marketing during the selected period.
   */
  clicks?: number;
  /**
   * Estimated total payout from your affiliate marketing orders.
   */
  est_commission?: string;
  /**
   * Return on Investment, equal to Sales divided by Est. Commission. It can be used to evaluate the efficiency of your investment in affiliate marketing. If it does not exist, the return value is --.
   */
  roi?: string;
  /**
   * Total number of buyers who order from your shop through affiliate marketing.
   */
  total_buyers?: number;
  /**
   * Total number of new buyers who order from your shop through affiliate marketing.
   */
  new_buyers?: number;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_shop_performance
 *
 * Retrieve overall key metrics for all channels or specific channels.
 */
export type ShopeeGetShopPerformanceResponse = ShopeeResponseCommon<ShopeeGetShopPerformanceResponseData>;

/**
 * ShopeeGetShopSuggestedRateResponseData sub-interface for ShopeeGetShopSuggestedRateResponse
 */
export interface ShopeeGetShopSuggestedRateResponseData {
  /**
   * Minimum suggested commission rate, 1.1 means 1.1%, support two decimal places
   */
  min_rate?: number;
  /**
   * Maximum suggested commission rate, 1.2 means 1.2%, support two decimal places
   */
  max_rate?: number;
}

/**
 * Response payload for get_shop_suggested_rate
 *
 * Retrieve suggested rates for all eligible products
 */
export type ShopeeGetShopSuggestedRateResponse = ShopeeResponseCommon<ShopeeGetShopSuggestedRateResponseData>;

/**
 * ShopeeGetTargetedCampaignAddableProductListItem sub-interface for ShopeeGetTargetedCampaignAddableProductListResponseData
 */
export interface ShopeeGetTargetedCampaignAddableProductListItem {
  /**
   * The unique key for item.
   */
  item_id?: number;
  /**
   * The name of the current item.
   */
  item_name?: string;
  /**
   * The sold of the current item.
   */
  sales?: number;
  /**
   * The display_price of the current item.
   */
  display_price?: string;
  /**
   * The stock of the current item.
   */
  stock?: number;
  /**
   * Is the current item in the blacklist.
   */
  is_in_blacklist?: boolean;
}

/**
 * ShopeeGetTargetedCampaignAddableProductListResponseData sub-interface for ShopeeGetTargetedCampaignAddableProductListResponse
 */
export interface ShopeeGetTargetedCampaignAddableProductListResponseData {
  /**
   * Item list.
   */
  item_list?: ShopeeGetTargetedCampaignAddableProductListItem[];
  /**
   * The total count of items that meet the query criteria.
   */
  total_count?: number;
  /**
   * Pass the content in the next request as cursor to get the next page data.
   */
  cursor?: string;
}

/**
 * Response payload for get_targeted_campaign_addable_product_list
 *
 * Returns a list of products that can be added to a targeted campaign
 */
export type ShopeeGetTargetedCampaignAddableProductListResponse =
  ShopeeResponseCommon<ShopeeGetTargetedCampaignAddableProductListResponseData>;

/**
 * ShopeeGetTargetedCampaignListCampaign sub-interface for ShopeeGetTargetedCampaignListResponseData
 */
export interface ShopeeGetTargetedCampaignListCampaign {
  /**
   * The unique key for the current campaign.
   */
  campaign_id?: number;
  /**
   * The name of the current campaign.
   */
  campaign_name?: string;
  /**
   * Campaign Status: UpcomingOngoingEndedCancelledDraftTerminatingTerminatedPaused
   */
  campaign_status?: string;
  /**
   * Source of campaign setup. Applicable values: - ShopeeManaged (Note: You cannot view the details or edit this campaign. If you try to do so, an 'invalid campaign_id' error will occur.)- Seller- Unknown
   */
  campaign_source?: string;
  /**
   * The start time of the current campaign.
   */
  period_start_time?: number;
  /**
   * The end time of the current campaign, if get 32503651199 (2999-12-31 23:59:59), it means no limit
   */
  period_end_time?: number;
  /**
   * The last editor of the current campaign.
   */
  last_editor?: string;
  /**
   * The last edit time of the current campaign.
   */
  last_edit_time?: number;
  /**
   * The total count of affiliates associated with the current campaign.
   */
  affiliate_count?: number;
  /**
   * The total count of items associated with the current campaign.
   */
  item_count?: number;
  /**
   * The min commission rate of the current campaign.
   */
  min_rate?: number;
  /**
   * The max commission rate of the current campaign.
   */
  max_rate?: number;
}

/**
 * ShopeeGetTargetedCampaignListResponseData sub-interface for ShopeeGetTargetedCampaignListResponse
 */
export interface ShopeeGetTargetedCampaignListResponseData {
  /**
   * The total count of targeted campaigns that meet the query criteria.
   */
  total_count?: number;
  /**
   * Targeted campaign list.
   */
  campaign_list?: ShopeeGetTargetedCampaignListCampaign[];
}

/**
 * Response payload for get_targeted_campaign_list
 *
 * Retrieve all current targeted campaigns created by the seller
 */
export type ShopeeGetTargetedCampaignListResponse = ShopeeResponseCommon<ShopeeGetTargetedCampaignListResponseData>;

/**
 * ShopeeGetTargetedCampaignPerformanceList sub-interface for ShopeeGetTargetedCampaignPerformanceResponseData
 */
export interface ShopeeGetTargetedCampaignPerformanceList {
  /**
   * Unique identifier of the targeted campaign.
   */
  campaign_id?: number;
  /**
   * The number of affiliates ever brought sales for the targeted campaign.
   */
  affiliates?: number;
  /**
   * Total sales amount generated from this targeted campaign, in the market's default currency.
   */
  sales?: string;
  /**
   * Total quantity of the item sold through the targeted campaign.
   */
  item_sold?: number;
  /**
   * The estimated commission amount payable to affiliates from this targeted campaign.
   */
  est_commission?: string;
  /**
   * Campaign name.
   */
  campaign_name?: string;
}

/**
 * ShopeeGetTargetedCampaignPerformanceResponseData sub-interface for ShopeeGetTargetedCampaignPerformanceResponse
 */
export interface ShopeeGetTargetedCampaignPerformanceResponseData {
  list?: ShopeeGetTargetedCampaignPerformanceList[];
  /**
   * This is to indicate the whole number of target campaigns.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
  /**
   * Effective query date range. Invalid input ranges will be automatically shifted.
   */
  fetched_date_range?: string;
}

/**
 * Response payload for get_targeted_campaign_performance
 *
 * Retrieve a list of Targeted Campaigns and their performance data
 */
export type ShopeeGetTargetedCampaignPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetTargetedCampaignPerformanceResponseData>;

/**
 * ShopeeGetTargetedCampaignSettingsAffiliate sub-interface for ShopeeGetTargetedCampaignSettingsResponseData
 */
export interface ShopeeGetTargetedCampaignSettingsAffiliate {
  /**
   * The unique key for affiliate, can call v2.ams.query_affiliate_list to get affiliate details.
   */
  affiliate_id?: number;
}

/**
 * ShopeeGetTargetedCampaignSettingsCommissionProtection sub-interface for ShopeeGetTargetedCampaignSettingsItem
 */
export interface ShopeeGetTargetedCampaignSettingsCommissionProtection {
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places.
   */
  commission_rate?: number;
  /**
   * Protection Period End Time.
   */
  protection_period_end_time?: number;
}

/**
 * ShopeeGetTargetedCampaignSettingsItem sub-interface for ShopeeGetTargetedCampaignSettingsResponseData
 */
export interface ShopeeGetTargetedCampaignSettingsItem {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Item Name.
   */
  item_name?: string;
  /**
   * Commission rate of current item, 1.1 means 1.1%, support two decimal places.
   */
  rate?: number;
  /**
   * Max Commission Rate Current Day, 1.1 means 1.1%, support two decimal places.
   */
  max_commission_rate_current_day?: number;
  /**
   * Commission Protection List.
   */
  commission_protection_list?: ShopeeGetTargetedCampaignSettingsCommissionProtection[];
}

/**
 * ShopeeGetTargetedCampaignSettingsResponseData sub-interface for ShopeeGetTargetedCampaignSettingsResponse
 */
export interface ShopeeGetTargetedCampaignSettingsResponseData {
  /**
   * The name of the current campaign.
   */
  campaign_name?: string;
  /**
   * Campaign Status: UpcomingOngoingEndedCancelledDraftTerminatingTerminatedPaused
   */
  commission_status?: string;
  /**
   * The start time of the current campaign.
   */
  period_start_time?: number;
  /**
   * The end time of the current campaign, if get 32503651199 (2999-12-31 23:59:59), it means no limit.
   */
  period_end_time?: number;
  /**
   * Has the current campaign set a budget.Note: TH not supported
   */
  is_set_budget?: boolean;
  /**
   * The budget of the current campaign.Note: TH not supported
   */
  budget?: number;
  /**
   * The budget already spent on the current campaign.Note: TH not supported
   */
  budget_cost?: number;
  /**
   * The message displayed to affiliates.
   */
  seller_message?: string;
  /**
   * Pending Terminated Time.
   */
  pending_terminated_time?: number;
  /**
   * The list of affiliates associated with the current campaign.
   */
  affiliate_list?: ShopeeGetTargetedCampaignSettingsAffiliate[];
  /**
   * The list of items associated with the current campaign.
   */
  item_list?: ShopeeGetTargetedCampaignSettingsItem[];
}

/**
 * Response payload for get_targeted_campaign_settings
 *
 * For each campaign, return: campaign basic info (name, status, promotion period, message), selected product list (with product name & ID), selected affiliate list (with affiliate names)
 */
export type ShopeeGetTargetedCampaignSettingsResponse =
  ShopeeResponseCommon<ShopeeGetTargetedCampaignSettingsResponseData>;

/**
 * ShopeeGetValidationListOnlineBill sub-interface for ShopeeGetValidationListValidation
 */
export interface ShopeeGetValidationListOnlineBill {
  /**
   * Total commission amount for the billing month.
   */
  total_amount?: number;
  /**
   * Billing Status. Applicable values:1 = Pending2 = Completed3 = In process4 = To pay via payment link5 = Manual completed6 = To Be Settled Offline
   */
  bill_status?: number;
  /**
   * Commission amount already deducted.
   */
  deducted_amount?: number;
  /**
   * Commission amount paid using AMS Credits
   */
  ams_credit_deducted_amount?: number;
  /**
   * Commission amount pending deduction.
   */
  pending_amount?: number;
}

/**
 * ShopeeGetValidationListOfflineBill sub-interface for ShopeeGetValidationListValidation
 */
export interface ShopeeGetValidationListOfflineBill {
  /**
   * Order placement month in the format YYYYMM.
   */
  order_place_month?: number;
  /**
   * Total commission amount = commission_amount_after_tax + ams_credit_deducted_amount.
   */
  total_amount?: number;
  /**
   * Offline commission amount before tax.
   */
  commission_amount?: number;
  /**
   * Offline commission amount including tax.
   */
  commission_amount_after_tax?: number;
  /**
   * Commission amount already paid using AMS Credits.
   */
  ams_credit_deducted_amount?: number;
}

/**
 * ShopeeGetValidationListValidation sub-interface for ShopeeGetValidationListResponseData
 */
export interface ShopeeGetValidationListValidation {
  /**
   * Unique identifier of the billing entry.
   */
  validation_id?: string;
  /**
   * Payment method. Applicable values:1 = Online2 = Offline
   */
  payment_method?: number;
  /**
   * Billing month in the format YYYYMM (e.g., 202405).
   */
  validation_month?: number;
  /**
   * Source of campaign setup. Applicable values:ShopeeManagedSeller
   */
  campaign_source?: string;
  /**
   * Billing details when payment method is Online.
   */
  online_bill?: ShopeeGetValidationListOnlineBill;
  /**
   * List of billing details when payment method is Offline, grouped by order placement month.
   */
  offline_bills?: ShopeeGetValidationListOfflineBill[];
}

/**
 * ShopeeGetValidationListResponseData sub-interface for ShopeeGetValidationListResponse
 */
export interface ShopeeGetValidationListResponseData {
  validation_list?: ShopeeGetValidationListValidation[];
}

/**
 * Response payload for get_validation_list
 *
 * Retrieve the seller's AMS validation bill
 */
export type ShopeeGetValidationListResponse = ShopeeResponseCommon<ShopeeGetValidationListResponseData>;

/**
 * ShopeeGetValidationReportItem sub-interface for ShopeeGetValidationReportList
 */
export interface ShopeeGetValidationReportItem {
  /**
   * Unique identifier of the item in the order.
   */
  item_id?: number;
  /**
   * Name of the item in the order.
   */
  item_name?: string;
  /**
   * SKU/model identifier for the item.
   */
  model_id?: number;
  /**
   * Level-1 global category id classification of the item.
   */
  l1_category_id?: number;
  /**
   * Level-2 global category id classification of the item.
   */
  l2_category_id?: number;
  /**
   * Level-3 global category id classification of the item.
   */
  l3_category_id?: number;
  /**
   * Identifier of the promotion campaign linked to the order.
   */
  promotion_id?: string;
  /**
   * Item price in cents (or smallest currency unit).
   */
  price?: number;
  /**
   * Quantity of the item purchased.
   */
  qty?: number;
  /**
   * Type of seller campaign:1. Seller Open Campaign – Open to all affiliates.2. Seller Target Campaign – Restricted to designated affiliates.
   */
  seller_campaign_type?: string;
  /**
   * ID referencing the campaign rule applied.
   */
  attr_campaign_id?: number;
  /**
   * Total purchase value of the order in cents (or smallest currency unit).
   */
  purchase_value?: number;
  /**
   * Amount refunded for the item.
   */
  refund_amount?: string;
  /**
   * Commission (amount) for the item, paid by the seller.
   */
  item_brand_commission?: string;
  /**
   * Commission rate allocated to the affiliate for the item.
   */
  item_brand_commission_rate_to_affiliate?: string;
  /**
   * Commission (amount) allocated to the affiliate for the item.
   */
  item_brand_commission_to_affiliate?: string;
  /**
   * Commission rate allocated to the MCN for the item.
   */
  item_brand_commission_rate_to_mcn?: string;
  /**
   * Commission (amount) allocated to the MCN for the item.
   */
  item_brand_commission_to_mcn?: string;
  /**
   * Seller service fee rate applied to the item.
   */
  seller_service_fee_rate?: string;
  /**
   * Seller service fee amount charged for the item. seller_service_fee = item_brand_commission *  seller_service_fee_rate
   */
  seller_service_fee?: string;
}

/**
 * ShopeeGetValidationReportList sub-interface for ShopeeGetValidationReportResponseData
 */
export interface ShopeeGetValidationReportList {
  /**
   * Unique identifier of the order.
   */
  order_sn?: string;
  /**
   * Current status of the order (e.g., Pending, Completed, Cancelled).
   */
  order_status?: string;
  /**
   * Verification status of the order (Unverified, Verified).
   */
  verified_status?: string;
  /**
   * Time when the order was placed.
   */
  place_order_time?: string;
  /**
   * Time when the order was marked as completed.
   */
  order_completed_time?: string;
  /**
   * Time when the conversion (affiliate action) was completed.
   */
  conversion_completed_time?: string;
  /**
   * Display name of the affiliate who promoted the item.
   */
  affiliate_name?: string;
  /**
   * Login username of the affiliate.
   */
  affiliate_username?: string;
  /**
   * MCN (Multi-Channel Network) linked with the affiliate, if any.
   */
  linked_mcn?: string;
  /**
   * Partner identifier for the campaign.
   */
  campaign_partner?: string;
  /**
   * Type of order: Direct Order or Indirect Order.
   */
  order_type?: string;
  /**
   * Commission (amount) for the whole order, paid by the seller.
   */
  order_brand_commission?: string;
  /**
   * Traffic channel or platform where the promotion took place.
   */
  channel?: string;
  /**
   * Unique identifier of the affiliate.
   */
  affiliate_id?: number;
  /**
   * Buyer Status. Applicable values:NewExisting
   */
  buyer_status?: string;
  items?: ShopeeGetValidationReportItem[];
}

/**
 * ShopeeGetValidationReportResponseData sub-interface for ShopeeGetValidationReportResponse
 */
export interface ShopeeGetValidationReportResponseData {
  /**
   * Array of order records. Each object contains order and commission details.
   */
  list?: ShopeeGetValidationReportList[];
  /**
   * Total number of entities that match the condition.
   */
  total_count?: number;
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  has_more?: boolean;
}

/**
 * Response payload for get_validation_report
 *
 * Retrieve detailed information for a specific validation bill
 */
export type ShopeeGetValidationReportResponse = ShopeeResponseCommon<ShopeeGetValidationReportResponseData>;

/**
 * ShopeeQueryAffiliateListPopularSocialMedia sub-interface for ShopeeQueryAffiliateListAffiliate
 */
export interface ShopeeQueryAffiliateListPopularSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
}

/**
 * ShopeeQueryAffiliateListSocialMedia sub-interface for ShopeeQueryAffiliateListAffiliate
 */
export interface ShopeeQueryAffiliateListSocialMedia {
  /**
   * The platform of this social media account.
   */
  platform?: string;
  /**
   * The follower count of this account.
   */
  follower_count?: number;
  /**
   * Social media name of this account.
   */
  social_media_user_name?: string;
}

/**
 * ShopeeQueryAffiliateListTopPopularContent sub-interface for ShopeeQueryAffiliateListAffiliate
 */
export interface ShopeeQueryAffiliateListTopPopularContent {
  /**
   * The platform of this affiliate's content.
   */
  platform?: string;
  /**
   * The comment count of this affiliate's content.
   */
  comment_count?: number;
  /**
   * The like count of this affiliate's content.
   */
  like_count?: number;
  /**
   * The view count of this affiliate's content.
   */
  view_count?: number;
  /**
   * The cover link of this affiliate's content.
   */
  cover_url?: string;
  /**
   * The media link of this affiliate's content.
   */
  media_url?: string;
}

/**
 * ShopeeQueryAffiliateListTopSellingProduct sub-interface for ShopeeQueryAffiliateListAffiliate
 */
export interface ShopeeQueryAffiliateListTopSellingProduct {
  /**
   * The item id of this item.
   */
  item_id?: number;
}

/**
 * ShopeeQueryAffiliateListAffiliate sub-interface for ShopeeQueryAffiliateListResponseData
 */
export interface ShopeeQueryAffiliateListAffiliate {
  /**
   * The unique key for the current affiliate.
   */
  affiliate_id?: number;
  /**
   * The name of the affiliate.
   */
  affiliate_name?: string;
  /**
   * The shopee user name or affiliate name for this affiliate.
   */
  user_name?: string;
  /**
   * The url of affiliate's portrait
   */
  portrait_url?: string;
  /**
   * The popular social media of this affiliate.
   */
  popular_social_media?: ShopeeQueryAffiliateListPopularSocialMedia[];
  /**
   * Social media account list of this affiliate.
   */
  social_medias?: ShopeeQueryAffiliateListSocialMedia[];
  /**
   * Number of clicks in the last 30 days.
   */
  total_click?: number;
  /**
   * Range number of the orders in the last 30 days.
   */
  order_range?: number[];
  /**
   * Range number of the gmv in the last 30 days.
   */
  gmv_range?: number[];
  /**
   * Golden tick means affiliates create high quality contents with good sales conversion in Shopee Live or Shopee Video.
   */
  is_orange_tick_kol?: boolean;
  /**
   * Good sample fulfillment means that affiliates demonstrate better in free sample fulfillment compared to the majority of affiliates in recent180 days
   */
  is_good_fulfillment?: boolean;
  /**
   * Three promote category ids for this affiliate
   */
  promote_category_ids?: number[];
  /**
   * Top popular contents of this affiliate.
   */
  top_popular_contents?: ShopeeQueryAffiliateListTopPopularContent[];
  /**
   * Top selling items of the affiliate.
   */
  top_selling_products?: ShopeeQueryAffiliateListTopSellingProduct[];
}

/**
 * ShopeeQueryAffiliateListResponseData sub-interface for ShopeeQueryAffiliateListResponse
 */
export interface ShopeeQueryAffiliateListResponseData {
  /**
   * The total count of affiliates by this query.Max is 200.
   */
  total_count?: number;
  /**
   * Affiliate list by this query.Not all return fields will have values.
   */
  affiliate_list?: ShopeeQueryAffiliateListAffiliate[];
}

/**
 * Response payload for query_affiliate_list
 *
 * Retrieve affiliate information by affiliate id.
 */
export type ShopeeQueryAffiliateListResponse = ShopeeResponseCommon<ShopeeQueryAffiliateListResponseData>;

/**
 * ShopeeRemoveAllProductsOpenCampaignSettingResponseData sub-interface for ShopeeRemoveAllProductsOpenCampaignSettingResponse
 */
export interface ShopeeRemoveAllProductsOpenCampaignSettingResponseData {
  /**
   * Task type. Applicable values: batch_add_open_campaignsbatch_remove_open_campaignsbatch_update_open_campaignsFor this API, task type will be batch_remove_open_campaigns
   */
  task_type?: string;
  /**
   * Task id, used to query task progress when calling v2.ams.get_open_campaign_batch_task_result API
   */
  task_id?: string;
}

/**
 * Response payload for remove_all_products_open_campaign_setting
 *
 * Remove the entire product list of Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams. batch_remove_products_open_campaign_setting by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export type ShopeeRemoveAllProductsOpenCampaignSettingResponse =
  ShopeeResponseCommon<ShopeeRemoveAllProductsOpenCampaignSettingResponseData>;

/**
 * Response data payload for terminate_targeted_campaign
 */
export type ShopeeTerminateTargetedCampaignResponseData = Record<string, never>;

/**
 * Response payload for terminate_targeted_campaign
 *
 * Change target campaign status to "terminated" to stop all affiliate promotion activity
 */
export type ShopeeTerminateTargetedCampaignResponse =
  ShopeeResponseCommon<ShopeeTerminateTargetedCampaignResponseData>;

/**
 * Response data payload for update_auto_add_new_product_setting
 */
export type ShopeeUpdateAutoAddNewProductSettingResponseData = Record<string, never>;

/**
 * Response payload for update_auto_add_new_product_setting
 *
 * Change auto-add toggle and default commission rate setting
 */
export type ShopeeUpdateAutoAddNewProductSettingResponse =
  ShopeeResponseCommon<ShopeeUpdateAutoAddNewProductSettingResponseData>;

/**
 * Response data payload for update_basic_info_of_targeted_campaign
 */
export type ShopeeUpdateBasicInfoOfTargetedCampaignResponseData = Record<string, never>;

/**
 * Response payload for update_basic_info_of_targeted_campaign
 *
 * Edit campaign name, promotion period, message, and budget (if the shop is whitelisted) of target campaign
 */
export type ShopeeUpdateBasicInfoOfTargetedCampaignResponse =
  ShopeeResponseCommon<ShopeeUpdateBasicInfoOfTargetedCampaignResponseData>;
