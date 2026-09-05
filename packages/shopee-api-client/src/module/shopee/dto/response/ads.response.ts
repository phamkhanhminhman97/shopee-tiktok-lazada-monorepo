import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeAdType
 */
export enum ShopeeAdType {
  AUTO = "auto",
  MANUAL = "manual",
}

/**
 * ShopeeCheckCreateGmsProductCampaignEligibilityResponseData sub-interface for ShopeeCheckCreateGmsProductCampaignEligibilityResponse
 */
export interface ShopeeCheckCreateGmsProductCampaignEligibilityResponseData {
  /**
   * Indicates if the seller is eligible to create a GMS Campaign
   */
  is_eligible?: boolean;
  /**
   * The following are the list of reasons for not being able to create a GMS Campaign: active_campaign    There is already an existing GMS Campaign that is activenot_whitelisted    The seller is not whitelisted to sz_shop_gmv_max_featurenot_have_enough_sku    The seller does not have enough valid items in the shopexclusive_with_other_campaign    Seller is whitelisted to sz_ads_auto_boost
   */
  reason?: string;
}

/**
 * Response payload for check_create_gms_product_campaign_eligibility
 *
 * Check the seller's eligibility in creating a GMS campaign
 */
export type ShopeeCheckCreateGmsProductCampaignEligibilityResponse =
  ShopeeResponseCommon<ShopeeCheckCreateGmsProductCampaignEligibilityResponseData>;

/**
 * ShopeeCreateAutoProductAdsResponseDataItem sub-interface for ShopeeCreateAutoProductAdsResponse
 */
export interface ShopeeCreateAutoProductAdsResponseDataItem {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
}

/**
 * Response data payload for create_auto_product_ads
 */
export type ShopeeCreateAutoProductAdsResponseData = ShopeeCreateAutoProductAdsResponseDataItem[];

/**
 * Response payload for create_auto_product_ads
 *
 * Use this API to create Auto Product Ads
 */
export type ShopeeCreateAutoProductAdsResponse = ShopeeResponseCommon<ShopeeCreateAutoProductAdsResponseData>;

/**
 * ShopeeCreateGmsProductCampaignResponseData sub-interface for ShopeeCreateGmsProductCampaignResponse
 */
export interface ShopeeCreateGmsProductCampaignResponseData {
  /**
   * GMS Campaign ID.
   */
  campaign_id?: number;
}

/**
 * Response payload for create_gms_product_campaign
 *
 * Create a GMS campaign
 */
export type ShopeeCreateGmsProductCampaignResponse = ShopeeResponseCommon<ShopeeCreateGmsProductCampaignResponseData>;

/**
 * ShopeeCreateManualProductAdsResponseDataItem sub-interface for ShopeeCreateManualProductAdsResponse
 */
export interface ShopeeCreateManualProductAdsResponseDataItem {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
}

/**
 * Response data payload for create_manual_product_ads
 */
export type ShopeeCreateManualProductAdsResponseData = ShopeeCreateManualProductAdsResponseDataItem[];

/**
 * Response payload for create_manual_product_ads
 *
 * Use this API to create Manual Selection Product Ads
 */
export type ShopeeCreateManualProductAdsResponse = ShopeeResponseCommon<ShopeeCreateManualProductAdsResponseData>;

/**
 * ShopeeEditAutoProductAdsResponseDataItem sub-interface for ShopeeEditAutoProductAdsResponse
 */
export interface ShopeeEditAutoProductAdsResponseDataItem {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
}

/**
 * Response data payload for edit_auto_product_ads
 */
export type ShopeeEditAutoProductAdsResponseData = ShopeeEditAutoProductAdsResponseDataItem[];

/**
 * Response payload for edit_auto_product_ads
 *
 * Use this API to edit Auto Product Ads
 */
export type ShopeeEditAutoProductAdsResponse = ShopeeResponseCommon<ShopeeEditAutoProductAdsResponseData>;

/**
 * ShopeeEditGmsItemProductCampaignResponseData sub-interface for ShopeeEditGmsItemProductCampaignResponse
 */
export interface ShopeeEditGmsItemProductCampaignResponseData {
  /**
   * GMS Campaign ID
   */
  campaign_id?: number;
}

/**
 * Response payload for edit_gms_item_product_campaign
 *
 * Add/remove items to/from the GMS Campaign
 */
export type ShopeeEditGmsItemProductCampaignResponse =
  ShopeeResponseCommon<ShopeeEditGmsItemProductCampaignResponseData>;

/**
 * ShopeeEditGmsProductCampaignResponseData sub-interface for ShopeeEditGmsProductCampaignResponse
 */
export interface ShopeeEditGmsProductCampaignResponseData {
  /**
   * GMS Campaign ID
   */
  campaign_id?: number;
}

/**
 * Response payload for edit_gms_product_campaign
 *
 * Edit a GMS campaign
 */
export type ShopeeEditGmsProductCampaignResponse = ShopeeResponseCommon<ShopeeEditGmsProductCampaignResponseData>;

/**
 * ShopeeEditManualProductAdKeywordsFailedEdit sub-interface for ShopeeEditManualProductAdKeywordsResponseDataItem
 */
export interface ShopeeEditManualProductAdKeywordsFailedEdit {
  /**
   * keyword that failed to update
   */
  keyword?: string;
  /**
   * Error code
   */
  error?: string;
  /**
   * error description
   */
  message?: string;
}

/**
 * ShopeeEditManualProductAdKeywordsResponseDataItem sub-interface for ShopeeEditManualProductAdKeywordsResponse
 */
export interface ShopeeEditManualProductAdKeywordsResponseDataItem {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
  /**
   * failed edits are mentioned here
   */
  failed_edits?: ShopeeEditManualProductAdKeywordsFailedEdit[];
}

/**
 * Response data payload for edit_manual_product_ad_keywords
 */
export type ShopeeEditManualProductAdKeywordsResponseData = ShopeeEditManualProductAdKeywordsResponseDataItem[];

/**
 * Response payload for edit_manual_product_ad_keywords
 *
 * Use this API to edit Manual Selection Product Ad Keywords
 */
export type ShopeeEditManualProductAdKeywordsResponse =
  ShopeeResponseCommon<ShopeeEditManualProductAdKeywordsResponseData>;

/**
 * ShopeeEditManualProductAdsResponseDataItem sub-interface for ShopeeEditManualProductAdsResponse
 */
export interface ShopeeEditManualProductAdsResponseDataItem {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
}

/**
 * Response data payload for edit_manual_product_ads
 */
export type ShopeeEditManualProductAdsResponseData = ShopeeEditManualProductAdsResponseDataItem[];

/**
 * Response payload for edit_manual_product_ads
 *
 * Use this API to edit Manual Selection Product Ads
 */
export type ShopeeEditManualProductAdsResponse = ShopeeResponseCommon<ShopeeEditManualProductAdsResponseData>;

/**
 * Response data payload for get_ads_facil_shop_rate
 */
export interface ShopeeGetAdsFacilShopRateResponseData {
  /**
   * The rate of the shop who choose to participate in this program
   */
  rate?: number;
  /**
   * The update time in timestamp format
   */
  update_at?: number;
}

/**
 * Response payload for get_ads_facil_shop_rate
 *
 * Get shop rate for Ads Facil Program
 */
export type ShopeeGetAdsFacilShopRateResponse = ShopeeResponseCommon<ShopeeGetAdsFacilShopRateResponseData>;

/**
 * ShopeeGetAllCpcAdsDailyPerformanceResponseDataItem sub-interface for ShopeeGetAllCpcAdsDailyPerformanceResponse
 */
export interface ShopeeGetAllCpcAdsDailyPerformanceResponseDataItem {
  /**
   * This is the parameter to indicate which date the performance record belongs to.
   */
  date?: string;
  /**
   * Number of times buyers see ads
   */
  impression?: number;
  /**
   * Total number of clicks on the Ad
   */
  clicks?: number;
  /**
   * Ctr, click-through rate measures how often shoppers who see an ad end up clicking it. CTR = Clicks / Impressions
   */
  ctr?: number;
  /**
   * Buyer place an order within 7 days after clicking on the ads (item gets purchased from the clicked ads)Please kindly note that the direct_order in the API reflected to Seller Center - Shopee Ads Module FE is Direct Conversions.
   */
  direct_order?: number;
  /**
   * Buyer place an order within 7 days after clicking on the ads; (the item gets purchased as long as there are other items from the same shops got click.)Please kindly note that the broad_order in the API reflected to Seller Center - Shopee Ads Module FE is Conversions.
   */
  broad_order?: number;
  /**
   * Ad orders / total number of clicks on the Ad. (item gets purchased from the clicked ads.)Please kindly note that the direct_conversions in the API reflected to Seller Center - Shopee Ads Module FE is Direct Conversions Rate.
   */
  direct_conversions?: number;
  /**
   * Ad orders / total number of clicks on the Ad. (the item gets purchased as long as there are other items from the same shops got click.)Please kindly note that the broad_conversions in the API reflected to Seller Center - Shopee Ads Module FE is Conversions Rate.
   */
  broad_conversions?: number;
  /**
   * item sold within 7 days after clicking on the ads. (item gets purchased from the clicked ads.)
   */
  direct_item_sold?: number;
  /**
   * item sold within 7 days after clicking on the ads.(the item gets purchased as long as there are other items from the same shops got click.)Please kindly note that the broad_conversions in the API reflected to Advertiser Platform is Conversion Rate.
   */
  broad_item_sold?: number;
  /**
   * Total sales generated from Ad over a certain time frame Typically 7 days. (item gets purchased from the clicked ads.)
   */
  direct_gmv?: number;
  /**
   * Total sales generated from Ad over a certain time frame (the item gets purchased as long as there are other items from the same shops got click.)
   */
  broad_gmv?: number;
  /**
   * Ad Expenditure
   */
  expense?: number;
  /**
   * (Cost Per Conversion) Ad's average cost per sales conversion
   */
  cost_per_conversion?: number;
  /**
   * Ad GMV/Ad Expenditure. (item gets purchased from the clicked ads.)
   */
  direct_roas?: number;
  /**
   * Ad GMV/Ad Expenditure. (the item gets purchased as long as there are other items from the same shops got click.)
   */
  broad_roas?: number;
}

/**
 * Response data payload for get_all_cpc_ads_daily_performance
 */
export type ShopeeGetAllCpcAdsDailyPerformanceResponseData =
  ShopeeGetAllCpcAdsDailyPerformanceResponseDataItem[];

/**
 * Response payload for get_all_cpc_ads_daily_performance
 *
 * Use this API to get Shop level CPC ads multiple-days daily performance.
 */
export type ShopeeGetAllCpcAdsDailyPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetAllCpcAdsDailyPerformanceResponseData>;

/**
 * ShopeeGetAllCpcAdsHourlyPerformanceResponseDataItem sub-interface for ShopeeGetAllCpcAdsHourlyPerformanceResponse
 */
export interface ShopeeGetAllCpcAdsHourlyPerformanceResponseDataItem {
  /**
   * This is the parameter to indicate each hour the performance record belongs to.
   */
  hour?: number;
  /**
   * This is the parameter to indicate which date the performance record belongs to.
   */
  date?: string;
  /**
   * Number of times buyers see ads
   */
  impression?: number;
  /**
   * Total number of clicks on the Ad
   */
  clicks?: number;
  /**
   * Ctr, click-through rate measures how often shoppers who see an ad end up clicking it. CTR = Clicks / Impressions
   */
  ctr?: number;
  /**
   * Buyer place an order within 7 days after clicking on the ads (item gets purchased from the clicked ads).Please kindly note that the direct_order in the API reflected to Seller Center Shopee Ads Module FE is Direct Conversions.
   */
  direct_order?: number;
  /**
   * Buyer place an order within 7 days after clicking on the ads; (the item gets purchased as long as there are other items from the same shops got click.)Please kindly note that the broad_order in the API reflected to Seller Center Shopee Ads Module FE is Conversions.
   */
  broad_order?: number;
  /**
   * Ad orders / total number of clicks on the Ad. (item gets purchased from the clicked ads.)Please kindly note that the direct_conversions in the API reflected to Seller Center Shopee Ads Module FE is the Direct Conversion Rate
   */
  direct_conversions?: number;
  /**
   * Ad orders / total number of clicks on the Ad. (the item gets purchased as long as there are other items from the same shops got click.)Please kindly note that the broad conversions in the API reflected to Seller Center Shopee Ads Module FE is Conversion Rate
   */
  broad_conversions?: number;
  /**
   * item sold within 7 days after clicking on the ads. (item gets purchased from the clicked ads.)
   */
  direct_item_sold?: number;
  /**
   * item sold within 7 days after clicking on the ads.(the item gets purchased as long as there are other items from the same shops got click.)
   */
  broad_item_sold?: number;
  /**
   * Total sales generated from Ad over a certain time frame Typically 7 days. (item gets purchased from the clicked ads.)
   */
  direct_gmv?: number;
  /**
   * Total sales generated from Ad over a certain time frame (the item gets purchased as long as there are other items from the same shops got click.)
   */
  broad_gmv?: number;
  /**
   * Ad Expenditure
   */
  expense?: number;
  /**
   * (Cost Per Conversion) Ad's average cost per sales conversion
   */
  cost_per_conversion?: number;
  /**
   * Ad GMV/Ad Expenditure. (item gets purchased from the clicked ads.)
   */
  direct_roas?: number;
  /**
   * Ad GMV/Ad Expenditure. (the item gets purchased as long as there are other items from the same shops got click.)
   */
  broad_roas?: number;
}

/**
 * Response data payload for get_all_cpc_ads_hourly_performance
 */
export type ShopeeGetAllCpcAdsHourlyPerformanceResponseData =
  ShopeeGetAllCpcAdsHourlyPerformanceResponseDataItem[];

/**
 * Response payload for get_all_cpc_ads_hourly_performance
 *
 * Use this API to get Shop level CPC ads single-date hourly performance.
 */
export type ShopeeGetAllCpcAdsHourlyPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetAllCpcAdsHourlyPerformanceResponseData>;

/**
 * ShopeeGetCreateProductAdBudgetSuggestionBudget sub-interface for ShopeeGetCreateProductAdBudgetSuggestionResponseData
 */
export interface ShopeeGetCreateProductAdBudgetSuggestionBudget {
  /**
   * Recommended Suggested Budget
   */
  recommended_budget?: number;
  /**
   * Minimun Suggested Budget
   */
  min_budget?: number;
  /**
   * Maximum Suggested Budget
   */
  max_budget?: number;
}

/**
 * ShopeeGetCreateProductAdBudgetSuggestionResponseData sub-interface for ShopeeGetCreateProductAdBudgetSuggestionResponse
 */
export interface ShopeeGetCreateProductAdBudgetSuggestionResponseData {
  /**
   * Budget data
   */
  budget?: ShopeeGetCreateProductAdBudgetSuggestionBudget;
}

/**
 * Response payload for get_create_product_ad_budget_suggestion
 *
 * Call this API to get budget suggestion for product ads creation
 */
export type ShopeeGetCreateProductAdBudgetSuggestionResponse =
  ShopeeResponseCommon<ShopeeGetCreateProductAdBudgetSuggestionResponseData>;

/**
 * ShopeeGetGmsCampaignPerformanceReport sub-interface for ShopeeGetGmsCampaignPerformanceResponseData
 */
export interface ShopeeGetGmsCampaignPerformanceReport {
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  broad_cir?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing products within 7 days of them clicking on your ad.
   */
  broad_gmv?: number;
  /**
   * The number of times shoppers purchased any product from your shop within 7 days of them clicking on your ad.
   */
  broad_order?: number;
  /**
   * The total quantity of products purchased by shoppers within 7 days of them clicking on your ad.
   */
  broad_order_amount?: number;
  /**
   * Return on ad spend (ROAS) measures how much revenue is generated by your ad relative to the cost of the ad. It is the amount of sales revenue attributed to your ad divided by the amount spent on the ad. ROAS = GMV ÷ expense. (Note: We recommend monitoring ROAS trends on a weekly basis.)
   */
  broad_roi?: number;
  /**
   * The number of times shoppers click on your ad. (Note: Shopee filters out repeated clicks from the same shopper that occur within a short time frame.)
   */
  clicks?: number;
  /**
   * The amount spent on your ad.
   */
  expense?: number;
  /**
   * The cost per conversion is how much each conversion costs, on average. It is the amount spent on your ad divided by the number of conversions attributed to the ad. Cost per conversion = expense ÷ conversions.
   */
  cpc?: number;
  /**
   * The cost per direct conversion is how much each direct conversion costs, on average. It is the amount spent on your ad divided by the number of direct conversions attributed to the ad. Cost per direct conversion = expense ÷ direct conversions.
   */
  cpdc?: number;
  /**
   * The conversion rate measures how often shoppers end up purchasing something from your shop after clicking on your ad. It is the number of conversions attributed to your ad divided by the number of clicks on the ad. Conversion rate = conversions ÷ clicks × 100%.
   */
  cr?: number;
  /**
   * The direct conversion rate measures how often shoppers end up purchasing the advertised product after clicking on the ad. Direct conversion rate is the number of direct conversions divided by the number of clicks. Direct conversion rate = direct conversions ÷ clicks × 100%.
   */
  direct_cr?: number;
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  direct_cir?: number;
  /**
   * The number of times shoppers purchased the advertised product within 7 days of them clicking on the ad.
   */
  direct_order?: number;
  /**
   * The total quantity of the advertised product purchased by shoppers within 7 days of them clicking on the ad.
   */
  direct_order_amount?: number;
  /**
   * The direct return on ad spend, or direct ROAS, measures how much revenue is generated from sales of the advertised product, relative to the cost of the ad. It is the amount of sales revenue for the advertised product attributed to the ad, divided by the amount spent on the ad. Direct ROAS = direct GMV ÷ expense.
   */
  direct_roi?: number;
  /**
   * The number of times shoppers see your ad.
   */
  impression?: number;
}

/**
 * ShopeeGetGmsCampaignPerformanceResponseData sub-interface for ShopeeGetGmsCampaignPerformanceResponse
 */
export interface ShopeeGetGmsCampaignPerformanceResponseData {
  /**
   * GMS Campaign ID
   */
  campaign_id?: number;
  report?: ShopeeGetGmsCampaignPerformanceReport;
}

/**
 * Response payload for get_gms_campaign_performance
 *
 * Get GMS Campaign performance
 */
export type ShopeeGetGmsCampaignPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetGmsCampaignPerformanceResponseData>;

/**
 * ShopeeGetGmsItemPerformanceReport sub-interface for ShopeeGetGmsItemPerformanceResult
 */
export interface ShopeeGetGmsItemPerformanceReport {
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  broad_cir?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing products within 7 days of them clicking on your ad.
   */
  broad_gmv?: number;
  /**
   * The number of times shoppers purchased any product from your shop within 7 days of them clicking on your ad.
   */
  broad_order?: number;
  /**
   * The total quantity of products purchased by shoppers within 7 days of them clicking on your ad.
   */
  broad_order_amount?: number;
  /**
   * Return on ad spend (ROAS) measures how much revenue is generated by your ad relative to the cost of the ad. It is the amount of sales revenue attributed to your ad divided by the amount spent on the ad. ROAS = GMV ÷ expense. (Note: We recommend monitoring ROAS trends on a weekly basis.)
   */
  broad_roi?: number;
  /**
   * The number of times shoppers click on your ad. (Note: Shopee filters out repeated clicks from the same shopper that occur within a short time frame.)
   */
  clicks?: number;
  /**
   * The amount spent on your ad.
   */
  expense?: number;
  /**
   * The cost per conversion is how much each conversion costs, on average. It is the amount spent on your ad divided by the number of conversions attributed to the ad. Cost per conversion = expense ÷ conversions.
   */
  cpc?: number;
  /**
   * The cost per direct conversion is how much each direct conversion costs, on average. It is the amount spent on your ad divided by the number of direct conversions attributed to the ad. Cost per direct conversion = expense ÷ direct conversions.
   */
  cpdc?: number;
  /**
   * The conversion rate measures how often shoppers end up purchasing something from your shop after clicking on your ad. It is the number of conversions attributed to your ad divided by the number of clicks on the ad. Conversion rate = conversions ÷ clicks × 100%.
   */
  cr?: number;
  /**
   * The direct conversion rate measures how often shoppers end up purchasing the advertised product after clicking on the ad. Direct conversion rate is the number of direct conversions divided by the number of clicks. Direct conversion rate = direct conversions ÷ clicks × 100%.
   */
  direct_cr?: number;
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  direct_cir?: number;
  /**
   * The number of times shoppers purchased the advertised product within 7 days of them clicking on the ad.
   */
  direct_order?: number;
  /**
   * The total quantity of the advertised product purchased by shoppers within 7 days of them clicking on the ad.
   */
  direct_order_amount?: number;
  /**
   * The direct return on ad spend, or direct ROAS, measures how much revenue is generated from sales of the advertised product, relative to the cost of the ad. It is the amount of sales revenue for the advertised product attributed to the ad, divided by the amount spent on the ad. Direct ROAS = direct GMV ÷ expense.
   */
  direct_roi?: number;
  /**
   * The number of times shoppers see your ad.
   */
  impression?: number;
}

/**
 * ShopeeGetGmsItemPerformanceResult sub-interface for ShopeeGetGmsItemPerformanceResponseData
 */
export interface ShopeeGetGmsItemPerformanceResult {
  /**
   * Item ID. Results are sorted by this.
   */
  item_id?: number;
  report?: ShopeeGetGmsItemPerformanceReport;
}

/**
 * ShopeeGetGmsItemPerformanceResponseData sub-interface for ShopeeGetGmsItemPerformanceResponse
 */
export interface ShopeeGetGmsItemPerformanceResponseData {
  /**
   * GMS Campaign ID
   */
  campaign_id?: number;
  result_list?: ShopeeGetGmsItemPerformanceResult[];
  /**
   * Total number of Item ID reports.
   */
  total?: number;
  /**
   * Indicate that there are more item ID reports.
   */
  has_next_page?: boolean;
}

/**
 * Response payload for get_gms_item_performance
 *
 * Get GMS Item performance
 * 1. The response returned is sorted by item_id
 * 2. Only items with performance will be returned
 */
export type ShopeeGetGmsItemPerformanceResponse = ShopeeResponseCommon<ShopeeGetGmsItemPerformanceResponseData>;

/**
 * ShopeeGetProductCampaignDailyPerformanceMetrics sub-interface for ShopeeGetProductCampaignDailyPerformanceCampaign
 */
export interface ShopeeGetProductCampaignDailyPerformanceMetrics {
  /**
   * the given date for the performance
   */
  date?: string;
  /**
   * The number of times shoppers see your ad.
   */
  impression?: number;
  /**
   * The number of times shoppers click on your ad. (Note: Shopee filters out repeated clicks from the same shopper that occur within a short time frame.)
   */
  clicks?: number;
  /**
   * The click-through rate (CTR) measures how often shoppers end up clicking on your ad after seeing it. It is the number of clicks on your ad divided by the number of times your ad is seen. CTR = clicks ÷ impressions × 100%.
   */
  ctr?: number;
  /**
   * The amount spent on your ad.
   */
  expense?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing products within 7 days of them clicking on your ad.
   */
  broad_gmv?: number;
  /**
   * The number of times shoppers purchased any product from your shop within 7 days of them clicking on your ad.
   */
  broad_order?: number;
  /**
   * The total quantity of products purchased by shoppers within 7 days of them clicking on your ad.
   */
  broad_order_amount?: number;
  /**
   * Return on ad spend (ROAS) measures how much revenue is generated by your ad relative to the cost of the ad. It is the amount of sales revenue attributed to your ad divided by the amount spent on the ad. ROAS = GMV ÷ expense. (Note: We recommend monitoring ROAS trends on a weekly basis.)
   */
  broad_roi?: number;
  /**
   * The advertising cost of sales (ACOS) measures how much your ad costs relative to the revenue the ad generates. It is the amount spent on your ad divided by the amount of sales revenue attributed to the ad. ACOS = expense ÷ GMV × 100%.
   */
  broad_cir?: number;
  /**
   * The conversion rate measures how often shoppers end up purchasing something from your shop after clicking on your ad. It is the number of conversions attributed to your ad divided by the number of clicks on the ad. Conversion rate = conversions ÷ clicks × 100%.
   */
  cr?: number;
  /**
   * The cost per conversion is how much each conversion costs, on average. It is the amount spent on your ad divided by the number of conversions attributed to the ad. Cost per conversion = expense ÷ conversions.
   */
  cpc?: number;
  /**
   * The number of times shoppers purchased the advertised product within 7 days of them clicking on the ad.
   */
  direct_order?: number;
  /**
   * The total quantity of the advertised product purchased by shoppers within 7 days of them clicking on the ad.
   */
  direct_order_amount?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing the advertised product within 7 days of them clicking on the ad.
   */
  direct_gmv?: number;
  /**
   * The direct return on ad spend, or direct ROAS, measures how much revenue is generated from sales of the advertised product, relative to the cost of the ad. It is the amount of sales revenue for the advertised product attributed to the ad, divided by the amount spent on the ad. Direct ROAS = direct GMV ÷ expense.
   */
  direct_roi?: number;
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  direct_cir?: number;
  /**
   * The direct conversion rate measures how often shoppers end up purchasing the advertised product after clicking on the ad. Direct conversion rate is the number of direct conversions divided by the number of clicks. Direct conversion rate = direct conversions ÷ clicks × 100%.
   */
  direct_cr?: number;
  /**
   * The cost per direct conversion is how much each direct conversion costs, on average. It is the amount spent on your ad divided by the number of direct conversions attributed to the ad. Cost per direct conversion = expense ÷ direct conversions.
   */
  cpdc?: number;
}

/**
 * ShopeeGetProductCampaignDailyPerformanceCampaign sub-interface for ShopeeGetProductCampaignDailyPerformanceResponseDataItem
 */
export interface ShopeeGetProductCampaignDailyPerformanceCampaign {
  /**
   * the unique id per campaign
   */
  campaign_id?: number;
  /**
   * auto, manual
   */
  ad_type?: string;
  /**
   * search, discovery, all
   */
  campaign_placement?: string;
  /**
   * the name of each ad
   */
  ad_name?: string;
  /**
   * the performance metric list
   */
  metrics_list?: ShopeeGetProductCampaignDailyPerformanceMetrics[];
}

/**
 * ShopeeGetProductCampaignDailyPerformanceResponseDataItem sub-interface for ShopeeGetProductCampaignDailyPerformanceResponse
 */
export interface ShopeeGetProductCampaignDailyPerformanceResponseDataItem {
  /**
   * the unique id per shop
   */
  shop_id?: number;
  /**
   * the region where each shop is under
   */
  region?: string;
  /**
   * the list of campaign
   */
  campaign_list?: ShopeeGetProductCampaignDailyPerformanceCampaign[];
}

/**
 * Response data payload for get_product_campaign_daily_performance
 */
export type ShopeeGetProductCampaignDailyPerformanceResponseData =
  ShopeeGetProductCampaignDailyPerformanceResponseDataItem[];

/**
 * Response payload for get_product_campaign_daily_performance
 *
 * Use this API to get Product level ads multiple-days daily performance.
 */
export type ShopeeGetProductCampaignDailyPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetProductCampaignDailyPerformanceResponseData>;

/**
 * ShopeeGetProductCampaignHourlyPerformanceMetrics sub-interface for ShopeeGetProductCampaignHourlyPerformanceCampaign
 */
export interface ShopeeGetProductCampaignHourlyPerformanceMetrics {
  /**
   * This is the parameter to indicate each hour the performance record belongs to.
   */
  hour?: number;
  /**
   * This is the parameter of the single date on which requestor wants to check the hourly performance
   */
  date?: string;
  /**
   * The number of times shoppers see your ad.
   */
  impression?: number;
  /**
   * The number of times shoppers click on your ad. (Note: Shopee filters out repeated clicks from the same shopper that occur within a short time frame.)
   */
  clicks?: number;
  /**
   * The click-through rate (CTR) measures how often shoppers end up clicking on your ad after seeing it. It is the number of clicks on your ad divided by the number of times your ad is seen. CTR = clicks ÷ impressions × 100%.
   */
  ctr?: number;
  /**
   * The amount spent on your ad.
   */
  expense?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing products within 7 days of them clicking on your ad.
   */
  broad_gmv?: number;
  /**
   * The number of times shoppers purchased any product from your shop within 7 days of them clicking on your ad.
   */
  broad_order?: number;
  /**
   * The total quantity of products purchased by shoppers within 7 days of them clicking on your ad.
   */
  broad_order_amount?: number;
  /**
   * Return on ad spend (ROAS) measures how much revenue is generated by your ad relative to the cost of the ad. It is the amount of sales revenue attributed to your ad divided by the amount spent on the ad. ROAS = GMV ÷ expense. (Note: We recommend monitoring ROAS trends on a weekly basis.)
   */
  broad_roi?: number;
  /**
   * The advertising cost of sales (ACOS) measures how much your ad costs relative to the revenue the ad generates. It is the amount spent on your ad divided by the amount of sales revenue attributed to the ad. ACOS = expense ÷ GMV × 100%.
   */
  broad_cir?: number;
  /**
   * The conversion rate measures how often shoppers end up purchasing something from your shop after clicking on your ad. It is the number of conversions attributed to your ad divided by the number of clicks on the ad. Conversion rate = conversions ÷ clicks × 100%.
   */
  cr?: number;
  /**
   * The cost per conversion is how much each conversion costs, on average. It is the amount spent on your ad divided by the number of conversions attributed to the ad. Cost per conversion = expense ÷ conversions.
   */
  cpc?: number;
  /**
   * The number of times shoppers purchased the advertised product within 7 days of them clicking on the ad.
   */
  direct_order?: number;
  /**
   * The total quantity of the advertised product purchased by shoppers within 7 days of them clicking on the ad.
   */
  direct_order_amount?: number;
  /**
   * The amount of sales revenue generated from shoppers purchasing the advertised product within 7 days of them clicking on the ad.
   */
  direct_gmv?: number;
  /**
   * The direct return on ad spend, or direct ROAS, measures how much revenue is generated from sales of the advertised product, relative to the cost of the ad. It is the amount of sales revenue for the advertised product attributed to the ad, divided by the amount spent on the ad. Direct ROAS = direct GMV ÷ expense.
   */
  direct_roi?: number;
  /**
   * The direct advertising cost of sales, or direct ACOS, measures how much your ad costs relative to the revenue generated from sales of the advertised product. It is the amount spent on the ad divided by the amount of sales revenue for the advertised product that is attributed to the ad. Direct ACOS = expense ÷ direct GMV × 100%.
   */
  direct_cir?: number;
  /**
   * The direct conversion rate measures how often shoppers end up purchasing the advertised product after clicking on the ad. Direct conversion rate is the number of direct conversions divided by the number of clicks. Direct conversion rate = direct conversions ÷ clicks × 100%.
   */
  direct_cr?: number;
  /**
   * The cost per direct conversion is how much each direct conversion costs, on average. It is the amount spent on your ad divided by the number of direct conversions attributed to the ad. Cost per direct conversion = expense ÷ direct conversions.
   */
  cpdc?: number;
}

/**
 * ShopeeGetProductCampaignHourlyPerformanceCampaign sub-interface for ShopeeGetProductCampaignHourlyPerformanceResponseDataItem
 */
export interface ShopeeGetProductCampaignHourlyPerformanceCampaign {
  /**
   * The unique identifier for a campaign
   */
  campaign_id?: number;
  /**
   * auto, manual
   */
  ad_type?: string;
  /**
   * search, discovery, all
   */
  campaign_placement?: string;
  /**
   * the name of each campaign
   */
  ad_name?: string;
  /**
   * performance metric list
   */
  metrics_list?: ShopeeGetProductCampaignHourlyPerformanceMetrics[];
}

/**
 * ShopeeGetProductCampaignHourlyPerformanceResponseDataItem sub-interface for ShopeeGetProductCampaignHourlyPerformanceResponse
 */
export interface ShopeeGetProductCampaignHourlyPerformanceResponseDataItem {
  /**
   * Shopee's unique identifier for a shop
   */
  shop_id?: number;
  /**
   * The region where this Shop is under
   */
  region?: string;
  /**
   * the list of campaign
   */
  campaign_list?: ShopeeGetProductCampaignHourlyPerformanceCampaign[];
}

/**
 * Response data payload for get_product_campaign_hourly_performance
 */
export type ShopeeGetProductCampaignHourlyPerformanceResponseData =
  ShopeeGetProductCampaignHourlyPerformanceResponseDataItem[];

/**
 * Response payload for get_product_campaign_hourly_performance
 *
 * Use this API to get Product level ads single-day hourly performance.
 */
export type ShopeeGetProductCampaignHourlyPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetProductCampaignHourlyPerformanceResponseData>;

/**
 * ShopeeGetProductLevelCampaignIdListCampaign sub-interface for ShopeeGetProductLevelCampaignIdListResponseData
 */
export interface ShopeeGetProductLevelCampaignIdListCampaign {
  /**
   * auto/manual
   */
  ad_type?: ShopeeAdType | string | number;
  /**
   * the unique id per campaign
   */
  campaign_id?: number;
}

/**
 * ShopeeGetProductLevelCampaignIdListResponseData sub-interface for ShopeeGetProductLevelCampaignIdListResponse
 */
export interface ShopeeGetProductLevelCampaignIdListResponseData {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * Region the shop belongs to
   */
  region?: string;
  /**
   * there are more campaigns on next page
   */
  has_next_page?: boolean;
  /**
   * the list of campaigns
   */
  campaign_list?: ShopeeGetProductLevelCampaignIdListCampaign[];
}

/**
 * Response payload for get_product_level_campaign_id_list
 *
 * Call this API to fetch all the product campaign ids displayed on advertiser platform under a specific Shop
 */
export type ShopeeGetProductLevelCampaignIdListResponse =
  ShopeeResponseCommon<ShopeeGetProductLevelCampaignIdListResponseData>;

/**
 * ShopeeGetProductLevelCampaignSettingInfoCampaignDuration sub-interface for ShopeeGetProductLevelCampaignSettingInfoCommonInfo
 */
export interface ShopeeGetProductLevelCampaignSettingInfoCampaignDuration {
  /**
   * The start date for each campaign. please kindly note that if this campaign is no end date, please pass today's date as the start date
   */
  start_time?: number;
  /**
   * the end date per campaign. please kindly note that if it's no limit, so you don't need pass anything and if it's unlimited, the end time would return 0
   */
  end_time?: number;
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoCommonInfo sub-interface for ShopeeGetProductLevelCampaignSettingInfoCampaign
 */
export interface ShopeeGetProductLevelCampaignSettingInfoCommonInfo {
  /**
   * auto, manual
   */
  ad_type?: string;
  /**
   * the name of each ad
   */
  ad_name?: string;
  /**
   * ongoing, scheduled, ended, paused, deleted, closed
   */
  campaign_status?: string;
  /**
   * auto, manual
   */
  bidding_method?: string;
  /**
   * search, discovery, all
   */
  campaign_placement?: string;
  /**
   * The budget per campaign. Please kindly note that if the campaign budget = 0, it means the budget set for this campaign is unlimited
   */
  campaign_budget?: number;
  /**
   * the duration per campaign
   */
  campaign_duration?: ShopeeGetProductLevelCampaignSettingInfoCampaignDuration;
  /**
   * List of unique identifiers for all products under this campaign. If the campaign is using auto product selection it can have between zero and many products. If the campaign is using manual product selection, it has exactly one.
   */
  item_id_list?: number[];
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoSelectedKeyword sub-interface for ShopeeGetProductLevelCampaignSettingInfoManualBiddingInfo
 */
export interface ShopeeGetProductLevelCampaignSettingInfoSelectedKeyword {
  /**
   * bid keywords for each campaign with search placement
   */
  keyword?: string;
  /**
   * deleted, normal, reserved, blacklist
   */
  status?: string;
  /**
   * exact, broad
   */
  match_type?: string;
  /**
   * the bid price
   */
  bid_price_per_click?: number;
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoDiscoveryAdsLocation sub-interface for ShopeeGetProductLevelCampaignSettingInfoManualBiddingInfo
 */
export interface ShopeeGetProductLevelCampaignSettingInfoDiscoveryAdsLocation {
  /**
   * daily_discover, you_may_also_like
   */
  location?: string;
  /**
   * toggle on or toggle off
   */
  status?: string;
  /**
   * bid price
   */
  bid_price?: number;
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoManualBiddingInfo sub-interface for ShopeeGetProductLevelCampaignSettingInfoCampaign
 */
export interface ShopeeGetProductLevelCampaignSettingInfoManualBiddingInfo {
  /**
   * Enhanced CPC functionality
   */
  enhanced_cpc?: boolean;
  /**
   * selected keywords
   */
  selected_keywords?: ShopeeGetProductLevelCampaignSettingInfoSelectedKeyword[];
  /**
   * the location settings
   */
  discovery_ads_locations?: ShopeeGetProductLevelCampaignSettingInfoDiscoveryAdsLocation[];
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoAutoBiddingInfo sub-interface for ShopeeGetProductLevelCampaignSettingInfoCampaign
 */
export interface ShopeeGetProductLevelCampaignSettingInfoAutoBiddingInfo {
  /**
   * the ROAS target for each campaign with auto bidding
   */
  roas_target?: number;
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoAutoProductAdsInfo sub-interface for ShopeeGetProductLevelCampaignSettingInfoCampaign
 */
export interface ShopeeGetProductLevelCampaignSettingInfoAutoProductAdsInfo {
  /**
   * the name of product
   */
  product_name?: string;
  /**
   * learning, ongoing, paused, ended, unavailable
   */
  status?: string;
  /**
   * Unique identifier for the product.
   */
  item_id?: number;
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoCampaign sub-interface for ShopeeGetProductLevelCampaignSettingInfoResponseData
 */
export interface ShopeeGetProductLevelCampaignSettingInfoCampaign {
  /**
   * The unique ID per campaign
   */
  campaign_id?: number;
  /**
   * common_info body
   */
  common_info?: ShopeeGetProductLevelCampaignSettingInfoCommonInfo;
  /**
   * manual bidding info
   */
  manual_bidding_info?: ShopeeGetProductLevelCampaignSettingInfoManualBiddingInfo;
  /**
   * bidding info
   */
  auto_bidding_info?: ShopeeGetProductLevelCampaignSettingInfoAutoBiddingInfo;
  /**
   * selected products info
   */
  auto_product_ads_info?: ShopeeGetProductLevelCampaignSettingInfoAutoProductAdsInfo[];
}

/**
 * ShopeeGetProductLevelCampaignSettingInfoResponseData sub-interface for ShopeeGetProductLevelCampaignSettingInfoResponse
 */
export interface ShopeeGetProductLevelCampaignSettingInfoResponseData {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * Region the shop belongs to
   */
  region?: string;
  /**
   * -
   */
  campaign_list?: ShopeeGetProductLevelCampaignSettingInfoCampaign[];
}

/**
 * Response payload for get_product_level_campaign_setting_info
 *
 * Call this API to fetch all the campaign setting info under this Shop.
 */
export type ShopeeGetProductLevelCampaignSettingInfoResponse =
  ShopeeResponseCommon<ShopeeGetProductLevelCampaignSettingInfoResponseData>;

/**
 * ShopeeGetProductRecommendedRoiTargetLowerBound sub-interface for ShopeeGetProductRecommendedRoiTargetResponseData
 */
export interface ShopeeGetProductRecommendedRoiTargetLowerBound {
  /**
   * The ROI target value.
   */
  value?: number;
  /**
   * Competitiveness over similar ads.
   */
  percentile?: number;
}

/**
 * ShopeeGetProductRecommendedRoiTargetExact sub-interface for ShopeeGetProductRecommendedRoiTargetResponseData
 */
export interface ShopeeGetProductRecommendedRoiTargetExact {
  /**
   * The ROI target value.
   */
  value?: number;
  /**
   * Competitiveness over similar ads.
   */
  percentile?: number;
}

/**
 * ShopeeGetProductRecommendedRoiTargetUpperBound sub-interface for ShopeeGetProductRecommendedRoiTargetResponseData
 */
export interface ShopeeGetProductRecommendedRoiTargetUpperBound {
  /**
   * The ROI target value.
   */
  value?: number;
  /**
   * Competitiveness over similar ads.
   */
  percentile?: number;
}

/**
 * ShopeeGetProductRecommendedRoiTargetResponseData sub-interface for ShopeeGetProductRecommendedRoiTargetResponse
 */
export interface ShopeeGetProductRecommendedRoiTargetResponseData {
  /**
   * Lower bound recommendation.
   * e.g., value=3.5 and percentile=80 mean that setting an ROI target of 3.5 makes the ads more competitive than 80% of similar ads.
   */
  lower_bound?: ShopeeGetProductRecommendedRoiTargetLowerBound;
  /**
   * Mid-level recommendation e.g., value=5.9 and percentile=50 mean that setting an ROI target of 5.9 makes the ads more competitive than 50% of similar ads.
   */
  exact?: ShopeeGetProductRecommendedRoiTargetExact;
  /**
   * Higher bound recommendation.e.g., value=10.8 and percentile=20 mean that setting an ROI target of 10.8 makes the ads more competitive than 20% of similar ads.
   */
  upper_bound?: ShopeeGetProductRecommendedRoiTargetUpperBound;
}

/**
 * Response payload for get_product_recommended_roi_target
 *
 * Get Product Recommended ROI Target
 */
export type ShopeeGetProductRecommendedRoiTargetResponse =
  ShopeeResponseCommon<ShopeeGetProductRecommendedRoiTargetResponseData>;

/**
 * ShopeeGetRecommendedItemListResponseDataItem sub-interface for ShopeeGetRecommendedItemListResponse
 */
export interface ShopeeGetRecommendedItemListResponseDataItem {
  /**
   * Recommended SKU's item id
   */
  item_id?: number;
  /**
   * This is param to indicate the status of items, so sellers can know whether an item is eligible for ads or not.
   */
  item_status_list?: string[];
  /**
   * The corresponding tag (or tags) that belong to item_id, sequences follow as best selling>best ROI>top search
   */
  sku_tag_list?: string[];
  /**
   * Current status of the ad on this item. For example- no ongoing promotion, search ads, discovery ads, boost ads
   */
  ongoing_ad_type_list?: string[];
}

/**
 * Response data payload for get_recommended_item_list
 */
export type ShopeeGetRecommendedItemListResponseData = ShopeeGetRecommendedItemListResponseDataItem[];

/**
 * Response payload for get_recommended_item_list
 *
 * Use this API to get the list of recommended SKU (Shop level) with the corresponding tag, i.e top search/best selling/best ROI tag.
 */
export type ShopeeGetRecommendedItemListResponse = ShopeeResponseCommon<ShopeeGetRecommendedItemListResponseData>;

/**
 * ShopeeGetRecommendedKeywordListSuggestedKeyword sub-interface for ShopeeGetRecommendedKeywordListResponseData
 */
export interface ShopeeGetRecommendedKeywordListSuggestedKeyword {
  /**
   * Keyword value(Only return the highly recommended keywords, will be sightly different from Seller Center)
   */
  keyword?: string;
  /**
   * This is a measure of how attractive your ad is and its relevance to the keyword. The higher the quality score, the higher your ad rank. Ad rank is based on this score and your bid price.
   */
  quality_score?: number;
  /**
   * The number of times the keyword has been searched on Shopee in the last 30 days. The larger the search volume, the more impressions your ad will receive.
   */
  search_volume?: number;
  /**
   * This is bid price suggested by Shopee algorithm for the keyword in local currency.
   */
  suggested_bid?: number;
}

/**
 * ShopeeGetRecommendedKeywordListResponseData sub-interface for ShopeeGetRecommendedKeywordListResponse
 */
export interface ShopeeGetRecommendedKeywordListResponseData {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The keyword seller typed in the manually add keyword window.
   */
  input_keyword?: string;
  /**
   * Suggested keywords recommended from product.
   */
  suggested_keywords?: ShopeeGetRecommendedKeywordListSuggestedKeyword[];
}

/**
 * Response payload for get_recommended_keyword_list
 *
 * Use this API to get the list of Recommended keywords by item and optionally a search keyword
 */
export type ShopeeGetRecommendedKeywordListResponse =
  ShopeeResponseCommon<ShopeeGetRecommendedKeywordListResponseData>;

/**
 * ShopeeGetShopToggleInfoResponseData sub-interface for ShopeeGetShopToggleInfoResponse
 */
export interface ShopeeGetShopToggleInfoResponseData {
  /**
   * Timestamp of data in response
   */
  data_timestamp?: number;
  /**
   * auto_top_up toggle on/off
   */
  auto_top_up?: boolean;
  /**
   * campaign_surge toggle on/off
   */
  campaign_surge?: boolean;
}

/**
 * Response payload for get_shop_toggle_info
 *
 * Use this API to get Shop level info - i.e. seller's toggle status is on/off
 */
export type ShopeeGetShopToggleInfoResponse = ShopeeResponseCommon<ShopeeGetShopToggleInfoResponseData>;

/**
 * ShopeeGetTotalBalanceResponseData sub-interface for ShopeeGetTotalBalanceResponse
 */
export interface ShopeeGetTotalBalanceResponseData {
  /**
   * This is param to indicate the time of the snapshot of total balance
   */
  data_timestamp?: number;
  /**
   * This is seller's ads credit balance, including paid credits and free credits.
   */
  total_balance?: number;
}

/**
 * Response payload for get_total_balance
 *
 * Use this API to return the seller's Real-time total balance of their ads credit including the paid credits and free credits.
 */
export type ShopeeGetTotalBalanceResponse = ShopeeResponseCommon<ShopeeGetTotalBalanceResponseData>;

/**
 * ShopeeListGmsUserDeletedItemResponseData sub-interface for ShopeeListGmsUserDeletedItemResponse
 */
export interface ShopeeListGmsUserDeletedItemResponseData {
  /**
   * GMS Campaign ID
   */
  campaign_id?: number;
  /**
   * List of Item IDs
   */
  item_id_list?: number[];
  /**
   * Total number of Item IDs
   */
  total?: number;
  /**
   * Indicate that there are more item IDs.
   */
  has_next_page?: boolean;
}

/**
 * Response payload for list_gms_user_deleted_item
 *
 * List GMS items that have been removed from the Campaign by seller
 */
export type ShopeeListGmsUserDeletedItemResponse = ShopeeResponseCommon<ShopeeListGmsUserDeletedItemResponseData>;
