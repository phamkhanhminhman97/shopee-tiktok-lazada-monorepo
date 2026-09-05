/**
 * Request parameters for get_late_orders
 *
 * Get the Late Orders to take action to avoid order cancellation and penalty points.
 */
export interface ShopeeGetLateOrdersRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Default is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Default is 10.
   */
  page_size?: number;
}

/**
 * Request parameters for get_listings_with_issues
 *
 * Get the Problematic Listings to improve the listings to avoid incurring penalty points.
 */
export interface ShopeeGetListingsWithIssuesRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Default is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Default is 10.
   */
  page_size?: number;
}

/**
 * Request parameters for get_metric_source_detail
 *
 * Get the Affected Orders / Relevant Listings / Relevant Violations details of metrics.
 */
export interface ShopeeGetMetricSourceDetailRequest {
  /**
   * ID of metric. Supported values: 1: Late Shipment Rate (All Channels)3: Non-Fulfilment Rate (All Channels)4: Preparation Time12: Pre-order Listing %15: Days of Pre-order Listing Violation25: Fast Handover Rate28: On-time Pickup Failure Rate Violation Value42: Cancellation Rate (All Channels)43: Return-refund Rate (All Channels)52: Severe Listing Violations53: Other Listing Violations85: Late Shipment Rate (NDD)88: Non-fulfilment Rate (NDD91: Cancellation Rate (NDD)92: Return-refund Rate (NDD)96: % SDD Listings97: % NDD Listings2001: Fast Handover Rate - SLS2002: Fast Handover Rate - FBS2003: Fast Handover Rate - 3PF2030: % HD Listings2031: % HD Free Shipping Enabled2032: Saturday Shipment2033: Preparation Time PS2033: Preparation Time PS2036: OTDR Logistic Rate2037: OTDR DD Rate
   */
  metric_id: number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Default is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Default is 10.
   */
  page_size?: number;
}

/**
 * Request parameters for get_penalty_point_history
 *
 * Get the penalty point records generated in the current quarter.
 */
export interface ShopeeGetPenaltyPointHistoryRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Default is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Default is 10.
   */
  page_size?: number;
  /**
   * Applicable values: 5: High Late Shipment Rate6: High Non-fulfilment Rate7: High number of non-fulfilled orders8: High number of late shipped orders9: Prohibited Listings10: Counterfeit / IP infringement11: Spam12: Copy/Steal images13: Re-uploading deleted listings with no change14: Bought counterfeit from mall15: Counterfeit caught by Shopee16: High percentage of pre-order listings17: Confirmed Fraud attempts (total)18: Confirmed Fraud attempts per week (All with vouchers only)19: Fake return address20: Shipping fraud/abuse21: High No. of Non-responded Chat22: Rude chat replies23: Request buyer to cancel order24: Rude reply to buyer's review25: Violate Return/Refund policy101: Tier Reason3026: Misuse of Shopee’s IP3028: Violate Shop Name Regulations3030: Direct transactions outside of the Shopee platform3032: Shipping empty / incomplete parcels3034: Severe Violations on Shopee Feed3036: Severe Violations on Shopee LIVE3038: Misuse of Local Vendor Tag3040: Use of misleading shop tag in listing image3042: Counterfeit / IP Infringement test3044: Repeat Offender - IP infringement and Counterfeit listings3046: Violation of Live Animals Selling Policy3048: Chat Spam3050: High Overseas Return Refunds Rate3052: Privacy breach in buyer's review reply3054: Order Brushing3056: porn image3058: Incorrect Product Categories3060: Extremely High Non-Fulfilment Rate3062: Penalty of Affiliate Marketing Solution (AMS) Overdue Invoice Payment3064: Government-related listing3066: Listing invalid gifted items3068: High non-fulfilment rate (Next Day Delivery Orders)3070: High Late Shipment Rate (Next Day Delivery Orders)3072: OPFR Violation Value3074: Direct transactions outside Shopee platform via chat3090: Prohibited Listings-Extreme Violations3091: Prohibited Listings-High Violations3092: Prohibited Listings-Mid Violations3093: Prohibited Listings-Low Violations3094: Counterfeit Listings-Extreme Violations3095: Counterfeit Listings-High Violations3096: Counterfeit Listings-Mid Violations3097: Counterfeit Listings-Low Violations3098: Spam Listings-Extreme Violations3099: Spam Listings-High Violations3100: Spam Listings-Mid Violations3101: Spam Listings-Low Violations3145: Return/Refund Rate (Non-integrated Channel)4130: Poor Product Quality
   */
  violation_type?: number;
}

/**
 * Request parameters for get_punishment_history
 *
 * Get the punishment records generated in the current quarter.
 */
export interface ShopeeGetPunishmentHistoryRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Default is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Default is 10.
   */
  page_size?: number;
  /**
   * The status of punishment. Applicable values: 1: Ongoing2: Ended
   */
  punishment_status: number;
}

/**
 * Request parameters for get_shop_performance
 *
 * The data metrics of shop performance.
 */
export type ShopeeGetShopPerformanceRequest = Record<string, never>;
