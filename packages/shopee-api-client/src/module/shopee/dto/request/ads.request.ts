/**
 * Enum generated for field ShopeeSmartCreativeSetting
 */
export enum ShopeeSmartCreativeSetting {
  ON = "on",
  OFF = "off",
}

/**
 * Enum generated for field ShopeeReferenceId
 */
export enum ShopeeReferenceId {
  SUGGESTION = "suggestion",
  RECOMMENDATION = "recommendation",
}

/**
 * Request parameters for check_create_gms_product_campaign_eligibility
 *
 * Check the seller's eligibility in creating a GMS campaign
 */
export type ShopeeCheckCreateGmsProductCampaignEligibilityRequest = Record<string, never>;

/**
 * Request parameters for create_auto_product_ads
 *
 * Use this API to create Auto Product Ads
 */
export interface ShopeeCreateAutoProductAdsRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * The budget set for the Auto Product Ads
   */
  budget: number;
  /**
   * the start date per campaign. please kindly note that if you want to set unlimited date, you can just pass today's date as the start date
   */
  start_date: string;
  /**
   * the end date of each campaign. please kindly note that if you want to set an unlimited campaign, you can keep empty for the end date field
   */
  end_date?: string;
}

/**
 * Request parameters for create_gms_product_campaign
 *
 * Create a GMS campaign
 */
export interface ShopeeCreateGmsProductCampaignRequest {
  /**
   * Start date of Campaign e.g. "30-11-2025". Cannot be earlier than today.
   */
  start_date: string;
  /**
   * End date of Campaign e.g. "30-11-2025". Do not fill if no end date.
   */
  end_date?: string;
  /**
   * Daily budget for Campaign.
   */
  daily_budget: number;
  /**
   * Input a string
   */
  reference_id?: string;
  /**
   * No input will be GMV Max Auto Bidding (Shop).Input 0 for GMV Max Auto Bidding (Shop).Input greater than 0 for GMV Max Custom ROAS (Shop).If value = 10.123456, it will be taken as 10.1If value = 10.199999, it will be taken as 10.1
   */
  roas_target?: number;
}

/**
 * ShopeeCreateManualProductAdsSelectedKeyword sub-interface for ShopeeCreateManualProductAdsRequest
 */
export interface ShopeeCreateManualProductAdsSelectedKeyword {
  /**
   * bid keyword for each campaign
   */
  keyword: string;
  /**
   * exact, broad
   */
  match_type: string;
  /**
   * the bid price of keyword
   */
  bid_price_per_click: number;
}

/**
 * ShopeeCreateManualProductAdsDiscoveryAdsLocation sub-interface for ShopeeCreateManualProductAdsRequest
 */
export interface ShopeeCreateManualProductAdsDiscoveryAdsLocation {
  /**
   * daily_discover, you_may_also_like
   */
  location: string;
  /**
   * bid price of the location
   */
  bid_price: number;
}

/**
 * Request parameters for create_manual_product_ads
 *
 * Use this API to create Manual Selection Product Ads
 */
export interface ShopeeCreateManualProductAdsRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * The budget set for the Auto Product Ads
   */
  budget: number;
  /**
   * the start date per campaign. please kindly note that if you want to set unlimited date, you can just pass today's date as the start date
   */
  start_date: string;
  /**
   * the end date of each campaign. please kindly note that if you want to set an unlimited campaign, you can keep empty for the end date field
   */
  end_date?: string;
  /**
   * auto, manual
   */
  bidding_method: string;
  /**
   * Product ID
   */
  item_id: number;
  /**
   * the ROAS target for each campaign with auto bidding. If 0, GMV Max / ROI feature is not enabled
   */
  roas_target?: number;
  /**
   * selected keywords, required for manual bidding mode
   */
  selected_keywords?: ShopeeCreateManualProductAdsSelectedKeyword[];
  /**
   * the location settings for manual bidding method
   */
  discovery_ads_locations?: ShopeeCreateManualProductAdsDiscoveryAdsLocation[];
  /**
   * Enhanced CPC functionality toggle
   */
  enhanced_cpc?: boolean;
  /**
   * Whether to use default or set on/off Smart Creative for this ad. Supported Values: "", "default", "on", "off". Empty string treated as default.
   */
  smart_creative_setting?: ShopeeSmartCreativeSetting | string | number;
}

/**
 * Request parameters for edit_auto_product_ads
 *
 * Use this API to edit Auto Product Ads
 */
export interface ShopeeEditAutoProductAdsRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * The unique identifier for a campaign
   */
  campaign_id: number;
  /**
   * Actions supported: "start", "pause", "resume", "stop", "change_budget", "change_duration"
   */
  edit_action: string;
  /**
   * The budget set for the Auto Product Ads
   */
  budget?: number;
  /**
   * the start date per campaign
   */
  start_date?: string;
  /**
   * the end date per campaign
   */
  end_date?: string;
}

/**
 * Request parameters for edit_gms_item_product_campaign
 *
 * Add/remove items to/from the GMS Campaign
 */
export interface ShopeeEditGmsItemProductCampaignRequest {
  /**
   * The GMS Campaign ID. Provide if available.
   */
  campaign_id?: number;
  /**
   * The following is the list of possible actions:    add    remove
   */
  edit_action: string;
  /**
   * Item IDs to add / remove. Minimum 1 Item ID. Maximum 30 Item IDs.
   */
  item_id_list: number[];
}

/**
 * Request parameters for edit_gms_product_campaign
 *
 * Edit a GMS campaign
 */
export interface ShopeeEditGmsProductCampaignRequest {
  /**
   * The GMS Campaign ID. Provide if available.
   */
  campaign_id?: number;
  /**
   * The following is the list of possible actions and their required fields:1.change_budgetdaily_budget2.change_durationstart_date3.end_date4.pause5.resume6.start7.change_roas_targetroas_target: when edit_action = change_roas_target, you must provide:roas_target (float) Value rules follow the same logic as in the create endpoint
   */
  edit_action: string;
  /**
   * Daily budget for Campaign.
   */
  daily_budget?: number;
  /**
   * Start date of Campaign e.g. "11-11-2025". Cannot be earlier than today.
   */
  start_date?: string;
  /**
   * End date of Campaign e.g. "11-11-2025". Do not fill if no end date.
   */
  end_date?: string;
  /**
   * No input will be GMV Max Auto Bidding (Shop).Input 0 for GMV Max Auto Bidding (Shop).Input greater than 0 for GMV Max Custom ROAS (Shop).If value = 10.123456, it will be taken as 10.1If value = 10.199999, it will be taken as 10.1
   */
  roas_target?: number;
  /**
   * Generated by developers, used to prevent duplicate requestsSubmitting the same reference_id more than once will fail; a new reference_id must be generated to retry.Example: 086a16bf-49e9-4103-b7fe-c0125beb9278
   */
  reference_id?: string;
}

/**
 * ShopeeEditManualProductAdKeywordsSelectedKeyword sub-interface for ShopeeEditManualProductAdKeywordsRequest
 */
export interface ShopeeEditManualProductAdKeywordsSelectedKeyword {
  /**
   * The update behaviours such as "add", "delete", "restore", "change_bid_price", "change_match_type"
   */
  edit_action: string;
  /**
   * bid keyword for each campaign
   */
  keyword: string;
  /**
   * exact, broad; required if changing match type
   */
  match_type?: string;
  /**
   * the bid price of keyword; required if changing bid price
   */
  bid_price_per_click?: number;
}

/**
 * Request parameters for edit_manual_product_ad_keywords
 *
 * Use this API to edit Manual Selection Product Ad Keywords
 */
export interface ShopeeEditManualProductAdKeywordsRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * The unique identifier for a campaign
   */
  campaign_id: number;
  /**
   * selected keywords, required for manual bidding mode.
   */
  selected_keywords: ShopeeEditManualProductAdKeywordsSelectedKeyword[];
}

/**
 * ShopeeEditManualProductAdsDiscoveryAdsLocation sub-interface for ShopeeEditManualProductAdsRequest
 */
export interface ShopeeEditManualProductAdsDiscoveryAdsLocation {
  /**
   * daily_discover, you_may_also_like
   */
  location: string;
  /**
   * active / inactive
   */
  status: string;
  /**
   * bid price of the location
   */
  bid_price: number;
}

/**
 * Request parameters for edit_manual_product_ads
 *
 * Use this API to edit Manual Selection Product Ads
 */
export interface ShopeeEditManualProductAdsRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * The unique identifier for a campaign
   */
  campaign_id: number;
  /**
   * Actions supported: "start", "pause", "resume", "stop", "delete", "change_budget", "change_duration", "change_smart_creative", "change_location", "change_enhanced_cpc", "change_roas_target"
   */
  edit_action: string;
  /**
   * The budget set for the Auto Product Ads
   */
  budget?: number;
  /**
   * the start date per campaign. please kindly note that if you want to set unlimited date, you can just pass today's date as the start date
   */
  start_date?: string;
  /**
   * the end date of each campaign. please kindly note that if you want to set an unlimited campaign, you can keep empty for the end date field
   */
  end_date?: string;
  /**
   * the ROAS target for each campaign with auto bidding
   */
  roas_target?: number;
  /**
   * the location settings for manual bidding method
   */
  discovery_ads_locations?: ShopeeEditManualProductAdsDiscoveryAdsLocation[];
  /**
   * Enhanced CPC functionality toggle
   */
  enhanced_cpc?: boolean;
  /**
   * Whether to use default or set on/off Smart Creative for this ad. Supported Values: "", "default", "on", "off". Empty string treated as default.
   */
  smart_creative_setting?: ShopeeSmartCreativeSetting | string | number;
}

/**
 * Request parameters for get_ads_facil_shop_rate
 *
 * Get shop rate for Ads Facil Program
 */
export type ShopeeGetAdsFacilShopRateRequest = Record<string, never>;

/**
 * Request parameters for get_all_cpc_ads_daily_performance
 *
 * Use this API to get Shop level CPC ads multiple-days daily performance.
 */
export interface ShopeeGetAllCpcAdsDailyPerformanceRequest {
  /**
   * This is the parameter to indicate the start date of the time length of performance.
   */
  start_date: string;
  /**
   * This is the parameter to indicate the end date of the time length of performance
   */
  end_date: string;
}

/**
 * Request parameters for get_all_cpc_ads_hourly_performance
 *
 * Use this API to get Shop level CPC ads single-date hourly performance.
 */
export interface ShopeeGetAllCpcAdsHourlyPerformanceRequest {
  /**
   * This is the parameter of the single date on which requester wants to check the hourly performance. Date in DD-MM-YYYY format.
   */
  performance_date: string;
}

/**
 * Request parameters for get_create_product_ad_budget_suggestion
 *
 * Call this API to get budget suggestion for product ads creation
 */
export interface ShopeeGetCreateProductAdBudgetSuggestionRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail
   */
  reference_id: string;
  /**
   * auto,manual - for Auto product ads or Manual Product Ads
   */
  product_selection: string;
  /**
   * search, discovery, all
   */
  campaign_placement: string;
  /**
   * Bidding Method of product ad: auto, manual
   */
  bidding_method: string;
  /**
   * Enhanced CPC functionality toggle. Values supported "true"/"false". Mandatory for product_selection=manual, bidding_method=manual
   */
  enhanced_cpc?: string;
  /**
   * List of comma separated location values from: daily_discover, you_may_also_like.Mandatory for product_selection=manual, product_placement={all|discovery}, bidding_method=manual
   */
  discovery_ads_location_names?: string;
  /**
   * the ROAS target for each campaign with auto bidding. If 0, GMV Max / ROI feature is not enabled
   */
  roas_target?: number;
  /**
   * Product ID. Mandatory for product_selection=manual
   */
  item_id?: number;
}

/**
 * Request parameters for get_gms_campaign_performance
 *
 * Get GMS Campaign performance
 */
export interface ShopeeGetGmsCampaignPerformanceRequest {
  /**
   * The GMS Campaign ID. Provide if available.
   */
  campaign_id?: number;
  /**
   * Start date of Campaign e.g. "11-11-2025". Maximum duration of 3 months between start_date & end_date. Earliest start_date is 6 months before today.
   */
  start_date: string;
  /**
   * End date of Campaign e.g. "11-11-2025". Maximum duration of 3 months between start_date & end_date.
   */
  end_date: string;
}

/**
 * Request parameters for get_gms_item_performance
 *
 * Get GMS Item performance
 * 1. The response returned is sorted by item_id
 * 2. Only items with performance will be returned
 */
export interface ShopeeGetGmsItemPerformanceRequest {
  /**
   * The GMS Campaign ID. Provide if available.
   */
  campaign_id?: number;
  /**
   * Start date of Campaign e.g. "11-11-2025". Maximum duration of 3 months between start_date & end_date. Earliest start_date is 6 months before today.
   */
  start_date: string;
  /**
   * End date of Campaign e.g. "11-11-2025". Maximum duration of 3 months between start_date & end_date.
   */
  end_date: string;
  /**
   * Specifies the starting point, or the number of records to skip. Default is 0.
   */
  offset?: number;
  /**
   * Specifies the maximum number of records to show. Default is 50. Maximum is 100.
   */
  limit?: number;
}

/**
 * Request parameters for get_product_campaign_daily_performance
 *
 * Use this API to get Product level ads multiple-days daily performance.
 */
export interface ShopeeGetProductCampaignDailyPerformanceRequest {
  /**
   * This is the parameter to indicate the start date of the time length of performance.
   */
  start_date: string;
  /**
   * This is the parameter to indicate the end date of the time length of performance
   */
  end_date: string;
  /**
   * The campaign ids (comma separated) you want to fetch the performance. (max 100)
   */
  campaign_id_list: string[];
}

/**
 * Request parameters for get_product_campaign_hourly_performance
 *
 * Use this API to get Product level ads single-day hourly performance.
 */
export interface ShopeeGetProductCampaignHourlyPerformanceRequest {
  /**
   * This is the parameter to indicate the start date of the time length of performance.
   */
  performance_date: string;
  /**
   * The campaign ids (comma separated) you want to fetch the performance. (max 100)
   */
  campaign_id_list: string[];
}

/**
 * Request parameters for get_product_level_campaign_id_list
 *
 * Call this API to fetch all the product campaign ids displayed on advertiser platform under a specific Shop
 */
export interface ShopeeGetProductLevelCampaignIdListRequest {
  /**
   * Any of ["","all","auto","manual"]
   */
  ad_type?: string;
  /**
   * offset
   */
  offset?: number;
  /**
   * limit
   */
  limit?: number;
}

/**
 * Request parameters for get_product_level_campaign_setting_info
 *
 * Call this API to fetch all the campaign setting info under this Shop.
 */
export interface ShopeeGetProductLevelCampaignSettingInfoRequest {
  /**
   * Info type values: 1.Common Info 2.Manual Bidding Info 3.Auto Bidding Info 4.Auto Product Ads Info
   */
  info_type_list: string[];
  /**
   * list of campaign ids comma separated (max 100 campaign ids)
   */
  campaign_id_list: string[];
}

/**
 * Request parameters for get_product_recommended_roi_target
 *
 * Get Product Recommended ROI Target
 */
export interface ShopeeGetProductRecommendedRoiTargetRequest {
  /**
   * A random string used to prevent duplicate ads. If an ads is created successfully, subsequent requests using the same reference id will fail - in this case, a new one must be generated.Use the same string for calling suggestion/recommendation API before the actual request to create an ads.
   */
  reference_id: ShopeeReferenceId | string | number;
  /**
   * Unique identifier for a product.
   */
  item_id: number;
}

/**
 * Request parameters for get_recommended_item_list
 *
 * Use this API to get the list of recommended SKU (Shop level) with the corresponding tag, i.e top search/best selling/best ROI tag.
 */
export type ShopeeGetRecommendedItemListRequest = Record<string, never>;

/**
 * Request parameters for get_recommended_keyword_list
 *
 * Use this API to get the list of Recommended keywords by item and optionally a search keyword
 */
export interface ShopeeGetRecommendedKeywordListRequest {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * The keyword seller typed in the manually add keyword window.
   */
  input_keyword?: string;
}

/**
 * Request parameters for get_shop_toggle_info
 *
 * Use this API to get Shop level info - i.e. seller's toggle status is on/off
 */
export type ShopeeGetShopToggleInfoRequest = Record<string, never>;

/**
 * Request parameters for get_total_balance
 *
 * Use this API to return the seller's Real-time total balance of their ads credit including the paid credits and free credits.
 */
export type ShopeeGetTotalBalanceRequest = Record<string, never>;

/**
 * Request parameters for list_gms_user_deleted_item
 *
 * List GMS items that have been removed from the Campaign by seller
 */
export interface ShopeeListGmsUserDeletedItemRequest {
  /**
   * Specifies the starting point, or the number of records to skip. Default is 0.
   */
  offset?: number;
  /**
   * Specifies the maximum number of records to show. Default is 50. Maximum is 100.
   */
  limit?: number;
}
