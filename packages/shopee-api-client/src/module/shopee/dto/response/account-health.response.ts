import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeGetLateOrdersLateOrder sub-interface for ShopeeGetLateOrdersResponseData
 */
export interface ShopeeGetLateOrdersLateOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Shipping Deadline of this order.
   */
  shipping_deadline?: number;
  /**
   * Late-by Days of this order.
   */
  late_by_days?: number;
}

/**
 * ShopeeGetLateOrdersResponseData sub-interface for ShopeeGetLateOrdersResponse
 */
export interface ShopeeGetLateOrdersResponseData {
  /**
   * Late Orders.
   */
  late_order_list?: ShopeeGetLateOrdersLateOrder[];
  /**
   * Total number of late orders.
   */
  total_count?: number;
}

/**
 * Response payload for get_late_orders
 *
 * Get the Late Orders to take action to avoid order cancellation and penalty points.
 */
export type ShopeeGetLateOrdersResponse = ShopeeResponseCommon<ShopeeGetLateOrdersResponseData>;

/**
 * ShopeeGetListingsWithIssuesListing sub-interface for ShopeeGetListingsWithIssuesResponseData
 */
export interface ShopeeGetListingsWithIssuesListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Reason of this item. Applicable values: 1: Prohibited2: Counterfeit3: Spam4: Inappropriate Image5: Insufficient Info6: Mall Listing Improvement7: Other Listing Improvement
   */
  reason?: number;
}

/**
 * ShopeeGetListingsWithIssuesResponseData sub-interface for ShopeeGetListingsWithIssuesResponse
 */
export interface ShopeeGetListingsWithIssuesResponseData {
  /**
   * Listing with issues.
   */
  listing_list?: ShopeeGetListingsWithIssuesListing[];
  /**
   * Total number of listing with issues.
   */
  total_count?: number;
}

/**
 * Response payload for get_listings_with_issues
 *
 * Get the Problematic Listings to improve the listings to avoid incurring penalty points.
 */
export type ShopeeGetListingsWithIssuesResponse = ShopeeResponseCommon<ShopeeGetListingsWithIssuesResponseData>;

/**
 * ShopeeGetMetricSourceDetailNfrOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailNfrOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Non-fulfilment type. Applicable values: 1: System Cancellation2: Seller Cancellation3: Return Refunds
   */
  non_fulfillment_type?: number;
  /**
   * Reason. Applicable values: 1001: Return Refund1002: Parcel Split Cancellation1003: First Mile Pick up fail1004: Order inclusion10005: Out of Stock10006: Undeliverable area10007: Cannot support COD10008: Logistics request cancelled10009: Logistics pickup failed10010: Logistics not ready10011: Inactive seller10012: Seller did not ship order10013: Order did not reach warehouse10014: Seller asked to cancel10015: Non-receipt10016: Wrong item10017: Damaged item10018: Incomplete product10019: Fake item10020: Functional Damage10021: Return Refund
   */
  detailed_reason?: number;
}

/**
 * ShopeeGetMetricSourceDetailCancellationOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailCancellationOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Cancellation Type. Applicable values: 1: System Cancellation2: Seller Cancellation
   */
  cancellation_type?: number;
  /**
   * Reason. Applicable values: 1001: Return Refund1002: Parcel Split Cancellation1003: First Mile Pick up fail1004: Order inclusion10005: Out of Stock10006: Undeliverable area10007: Cannot support COD10008: Logistics request cancelled10009: Logistics pickup failed10010: Logistics not ready10011: Inactive seller10012: Seller did not ship order10013: Order did not reach warehouse10014: Seller asked to cancel10015: Non-receipt10016: Wrong item10017: Damaged item10018: Incomplete product10019: Fake item10020: Functional Damage10021: Return Refund
   */
  detailed_reason?: number;
}

/**
 * ShopeeGetMetricSourceDetailReturnRefundOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailReturnRefundOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Reason. Applicable values: 1001: Return Refund1002: Parcel Split Cancellation1003: First Mile Pick up fail1004: Order inclusion10005: Out of Stock10006: Undeliverable area10007: Cannot support COD10008: Logistics request cancelled10009: Logistics pickup failed10010: Logistics not ready10011: Inactive seller10012: Seller did not ship order10013: Order did not reach warehouse10014: Seller asked to cancel10015: Non-receipt10016: Wrong item10017: Damaged item10018: Incomplete product10019: Fake item10020: Functional Damage10021: Return Refund
   */
  detailed_reason?: number;
}

/**
 * ShopeeGetMetricSourceDetailLsrOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailLsrOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Ship by date.
   */
  shipping_deadline?: number;
  /**
   * Seller arrange shipment time.
   */
  actual_shipping_time?: number;
  /**
   * Late-by Days.
   */
  late_by_days?: number;
  /**
   * Courier actual pick up time.
   */
  actual_pick_up_time?: number;
  /**
   * Logistics Company.
   */
  shipping_channel?: string;
  /**
   * First mile shipping type. Applicable values:PickupDrop off
   */
  first_mile_type?: string;
  /**
   * Diagnosis of the issue.
   */
  diagnosis_scenario?: string[];
}

/**
 * ShopeeGetMetricSourceDetailFhrOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailFhrOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Parcel ID.
   */
  parcel_id?: number;
  /**
   * Display Parcel ID.
   */
  parcel_display_id?: string;
  /**
   * Confirmed Date.
   */
  confirm_time?: number;
  /**
   * Handover Deadline.
   */
  handover_deadline?: number;
  /**
   * Fast Handover Due Date.
   */
  fast_handover_due_date?: number;
  /**
   * Seller arrange pick up time.
   */
  arrange_pick_up_time?: number;
  /**
   * Parcel drop off / pickup time.
   */
  handover_time?: number;
  /**
   * Logistics Company.
   */
  shipping_channel?: string;
  /**
   * First mile shipping type. Applicable values:PickupDrop off
   */
  first_mile_type?: string;
  /**
   * First Mile Tracking No.
   */
  first_mile_tracking_no?: string;
  /**
   * Diagnosis of the issue.
   */
  diagnosis_scenario?: string[];
}

/**
 * ShopeeGetMetricSourceDetailOpfrDayDetailData sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailOpfrDayDetailData {
  /**
   * Date.
   */
  date?: string;
  /**
   * Number of scheduled pickups.
   */
  scheduled_pickup_num?: number;
  /**
   * Number of failed pickups.
   */
  failed_pickup_num?: number;
  /**
   * OPFR.
   */
  opfr?: number;
  /**
   * Target.
   */
  target?: string;
}

/**
 * ShopeeGetMetricSourceDetailViolationListing sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailViolationListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Reason. Applicable values: 1: Prohibited2: Counterfeit3: Spam4: Inappropriate Image5: Insufficient Info6: Mall Listing Improvement7: Other Listing Improvement8: PQR Products
   */
  detailed_reason?: number;
  /**
   * Updated on.
   */
  update_time?: number;
}

/**
 * ShopeeGetMetricSourceDetailPreOrderListingViolationData sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailPreOrderListingViolationData {
  /**
   * Date.
   */
  date?: string;
  /**
   * Number of Live Listings.
   */
  live_listing_count?: number[];
  /**
   * Number of pre-order Listings.
   */
  pre_order_listing_count?: number[];
  /**
   * Pre-order Listing %.
   */
  pre_order_listing_rate?: number[];
  /**
   * Target.
   */
  target?: string;
}

/**
 * ShopeeGetMetricSourceDetailPreOrderListing sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailPreOrderListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Current Pre-order Status. Applicable values: 1: Yes2: No
   */
  current_pre_order_status?: number;
}

/**
 * ShopeeGetMetricSourceDetailSddListing sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailSddListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Current SDD Status. Applicable values: 1: Yes0: No
   */
  current_sdd_status?: number;
}

/**
 * ShopeeGetMetricSourceDetailNddListing sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailNddListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * Current NDD Status. Applicable values: 1: Yes0: No
   */
  current_ndd_status?: number;
}

/**
 * ShopeeGetMetricSourceDetailAptOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailAptOrder {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Order Paid Time.
   */
  order_create_time?: number;
  /**
   * Seller arrange pick up time.
   */
  arrange_pick_up_time?: number;
  /**
   * Courier actual pick up time.
   */
  actual_pick_up_time?: number;
  /**
   * Preparation Days.
   */
  preparation_days?: number;
  /**
   * Logistics Company.
   */
  shipping_channel?: string;
  /**
   * First mile shipping type. Applicable values:PickupDrop off
   */
  first_mile_type?: string;
  /**
   * First Mile Tracking No.
   */
  first_mile_tracking_no?: string;
}

/**
 * ShopeeGetMetricSourceDetailHdListing sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailHdListing {
  /**
   * Item ID.
   */
  item_id?: number;
  /**
   * For 2030: % HD Listings, it refer to Current HD Status.For 2031: % HD Free Shipping Enabled, it refer to Free Shipping Enabled Status.Applicable values: 1: Yes2: No
   */
  current_status?: number;
}

/**
 * ShopeeGetMetricSourceDetailSaturdayShipment sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailSaturdayShipment {
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Order Paid Time.
   */
  order_create_time?: number;
  /**
   * Seller arrange pick up time.
   */
  arrange_pick_up_time?: number;
  /**
   * Courier actual pick up time.
   */
  actual_pick_up_time?: number;
  /**
   * Preparation Days.
   */
  preparation_days?: number;
  /**
   * Logistics Company.
   */
  shipping_channel?: string;
  /**
   * First mile shipping type. Applicable values:PickupDrop off
   */
  first_mile_type?: string;
  /**
   * First Mile Tracking No.
   */
  first_mile_tracking_no?: string;
}

/**
 * ShopeeGetMetricSourceDetailOtdrOrder sub-interface for ShopeeGetMetricSourceDetailResponseData
 */
export interface ShopeeGetMetricSourceDetailOtdrOrder {
  /**
   * Order ID.
   */
  order_id?: string;
  /**
   * Order SN.
   */
  order_sn?: string;
  /**
   * Order Paid Time.
   */
  paid_time?: number;
  /**
   * Estimated delivery date
   */
  estimated_delivery_date?: number;
  /**
   * Actual pick up time
   */
  actual_pick_up_time?: number;
  /**
   * Real delivery time
   */
  real_delivery_time?: number;
  /**
   * Difference days between estimated delivery date and real delivery time
   */
  difference_between_edd_rdt?: string;
}

/**
 * ShopeeGetMetricSourceDetailResponseData sub-interface for ShopeeGetMetricSourceDetailResponse
 */
export interface ShopeeGetMetricSourceDetailResponseData {
  /**
   * ID of metric.
   */
  metric_id?: number;
  /**
   * Affected Orders for Non-fulfilment Rate.Supported metric_id: 3: Non-Fulfilment Rate (All Channels)88: Non-fulfilment Rate (NDD)
   */
  nfr_order_list?: ShopeeGetMetricSourceDetailNfrOrder[];
  /**
   * Affected Orders for Cancellation Rate. Supported metric_id: 42: Cancellation Rate (All Channels)91: Cancellation Rate (NDD)
   */
  cancellation_order_list?: ShopeeGetMetricSourceDetailCancellationOrder[];
  /**
   * Affected Orders for Return-refund Rate.Supported metric_id: 43: Return-refund Rate (All Channels)92: Return-refund Rate (NDD)
   */
  return_refund_order_list?: ShopeeGetMetricSourceDetailReturnRefundOrder[];
  /**
   * Affected Orders for Late Shipment Rate.Supported metric_id: 1: Late Shipment Rate (All Channels)85: Late Shipment Rate (NDD)
   */
  lsr_order_list?: ShopeeGetMetricSourceDetailLsrOrder[];
  /**
   * Affected Orders for Fast Handover Rate.Supported metric_id: 25: Fast Handover Rate2001: Fast Handover Rate - SLS2002: Fast Handover Rate - FBS2003: Fast Handover Rate - 3PF
   */
  fhr_order_list?: ShopeeGetMetricSourceDetailFhrOrder[];
  /**
   * Relevant Violations for OPFR Violation Value.Supported metric_id: 28: On-time Pickup Failure Rate Violation Value
   */
  opfr_day_detail_data_list?: ShopeeGetMetricSourceDetailOpfrDayDetailData[];
  /**
   * Relevant Listings for Severe Listing Violations and Other Listing Violations.Supported metric_id: 52: Severe Listing Violations53: Other Listing Violations
   */
  violation_listing_list?: ShopeeGetMetricSourceDetailViolationListing[];
  /**
   * Relevant Listings for Days of Pre-order Listing Violation.Supported metric_id: 15: Days of Pre-order Listing Violation
   */
  pre_order_listing_violation_data_list?: ShopeeGetMetricSourceDetailPreOrderListingViolationData[];
  /**
   * Relevant Listings for Pre-order Listing.Supported metric_id: 12: Pre-order Listing %
   */
  pre_order_listing_list?: ShopeeGetMetricSourceDetailPreOrderListing[];
  /**
   * Relevant Listings for % SDD Listings.Supported metric_id: 96: % SDD Listings.
   */
  sdd_listing_list?: ShopeeGetMetricSourceDetailSddListing[];
  /**
   * Relevant Listings for % NDD Listings.Supported metric_id: 97: % NDD Listings.
   */
  ndd_listing_list?: ShopeeGetMetricSourceDetailNddListing[];
  /**
   * Affected Parcels for Preparation Time.Supported metric_id: 4: Preparation Time
   */
  apt_order_list?: ShopeeGetMetricSourceDetailAptOrder[];
  /**
   * Relevant Listings for % HD Listings and % HD Free Shipping Enabled.Supported metric_id: 2030: % HD Listings2031: % HD Free Shipping Enabled
   */
  hd_listing_list?: ShopeeGetMetricSourceDetailHdListing[];
  /**
   * Affected Parcels for Saturday ShipmentSupported metric_id:2032: Saturday Shipment
   */
  saturday_shipment_list?: ShopeeGetMetricSourceDetailSaturdayShipment[];
  otdr_order_list?: ShopeeGetMetricSourceDetailOtdrOrder[];
  /**
   * Total number of Affected Orders or Relevant Listings.
   */
  total_count?: number;
}

/**
 * Response payload for get_metric_source_detail
 *
 * Get the Affected Orders / Relevant Listings / Relevant Violations details of metrics.
 */
export type ShopeeGetMetricSourceDetailResponse = ShopeeResponseCommon<ShopeeGetMetricSourceDetailResponseData>;

/**
 * ShopeeGetPenaltyPointHistoryPenaltyPoint sub-interface for ShopeeGetPenaltyPointHistoryResponseData
 */
export interface ShopeeGetPenaltyPointHistoryPenaltyPoint {
  /**
   * The time when penalty points are issued.
   */
  issue_time?: number;
  /**
   * The latest penalty points issued under current penalty point record. If seller raised appeal for this penalty point record and the appeal has been approved and Shopee adjusted the penalty point, then the original_point_num returns the penalty point before the adjustment, and latest_point_num returns the penalty point after the adjustment.
   */
  latest_point_num?: number;
  /**
   * The original penalty points issued under current penalty point record.If seller raised appeal for this penalty point record and the appeal has been approved and Shopee adjusted the penalty point, then the original_point_num returns the penalty point before the adjustment, and latest_point_num returns the penalty point after the adjustment.
   */
  original_point_num?: number;
  /**
   * Reference ID for this penalty point record.
   */
  reference_id?: number;
  /**
   * Applicable values: 5: High Late Shipment Rate6: High Non-fulfilment Rate7: High number of non-fulfilled orders8: High number of late shipped orders9: Prohibited Listings10: Counterfeit / IP infringement11: Spam12: Copy/Steal images13: Re-uploading deleted listings with no change14: Bought counterfeit from mall15: Counterfeit caught by Shopee16: High percentage of pre-order listings17: Confirmed Fraud attempts (total)18: Confirmed Fraud attempts per week (All with vouchers only)19: Fake return address20: Shipping fraud/abuse21: High No. of Non-responded Chat22: Rude chat replies23: Request buyer to cancel order24: Rude reply to buyer's review25: Violate Return/Refund policy101: Tier Reason3026: Misuse of Shopee’s IP3028: Violate Shop Name Regulations3030: Direct transactions outside of the Shopee platform3032: Shipping empty / incomplete parcels3034: Severe Violations on Shopee Feed3036: Severe Violations on Shopee LIVE3038: Misuse of Local Vendor Tag3040: Use of misleading shop tag in listing image3042: Counterfeit / IP Infringement test3044: Repeat Offender - IP infringement and Counterfeit listings3046: Violation of Live Animals Selling Policy3048: Chat Spam3050: High Overseas Return Refunds Rate3052: Privacy breach in buyer's review reply3054: Order Brushing3056: porn image3058: Incorrect Product Categories3060: Extremely High Non-Fulfilment Rate3062: Penalty of Affiliate Marketing Solution (AMS) Overdue Invoice Payment3064: Government-related listing3066: Listing invalid gifted items3068: High non-fulfilment rate (Next Day Delivery Orders)3070: High Late Shipment Rate (Next Day Delivery Orders)3072: OPFR Violation Value3074: Direct transactions outside Shopee platform via chat3090: Prohibited Listings-Extreme Violations3091: Prohibited Listings-High Violations3092: Prohibited Listings-Mid Violations3093: Prohibited Listings-Low Violations3094: Counterfeit Listings-Extreme Violations3095: Counterfeit Listings-High Violations3096: Counterfeit Listings-Mid Violations3097: Counterfeit Listings-Low Violations3098: Spam Listings-Extreme Violations3099: Spam Listings-High Violations3100: Spam Listings-Mid Violations3101: Spam Listings-Low Violations3145: Return/Refund Rate (Non-integrated Channel)4130: Poor Product Quality
   */
  violation_type?: number;
}

/**
 * ShopeeGetPenaltyPointHistoryResponseData sub-interface for ShopeeGetPenaltyPointHistoryResponse
 */
export interface ShopeeGetPenaltyPointHistoryResponseData {
  /**
   * The penalty point records generated in the current quarter.
   */
  penalty_point_list?: ShopeeGetPenaltyPointHistoryPenaltyPoint[];
  /**
   * Total number of penalty point records.
   */
  total_count?: number;
}

/**
 * Response payload for get_penalty_point_history
 *
 * Get the penalty point records generated in the current quarter.
 */
export type ShopeeGetPenaltyPointHistoryResponse = ShopeeResponseCommon<ShopeeGetPenaltyPointHistoryResponseData>;

/**
 * ShopeeGetPunishmentHistoryPunishment sub-interface for ShopeeGetPunishmentHistoryResponseData
 */
export interface ShopeeGetPunishmentHistoryPunishment {
  /**
   * The time when punishment are issued.
   */
  issue_time?: number;
  /**
   * Start time in the duration of this punishment record.
   */
  start_time?: number;
  /**
   * End time in the duration of this punishment record.
   */
  end_time?: number;
  /**
   * Punishment Type of this punishment record. Applicable values: 103: Listings not displayed in category browsing104: Listings not displayed in search105: Unable to create new listings106: Unable to edit listings107: Unable to join marketing campaigns108: No shipping subsidies109: Account is suspended600: Listings not displayed in search601: Shop listings hide from recommendation602: Listings not displayed in category browsing1109: Listing Limit is reduced1110: Listing Limit is reduced1111: Listing Limit is reduced1112: Listing Limit is reduced2008: Order Limit
   */
  punishment_type?: number;
  /**
   * Reason of this punishment record. Applicable values: 1: Tier 12: Tier 23: Tier 34: Tier 45: Tier 51109: Listing Limit Tier 11110: Listing Limit Tier 21111: Listing Limit POL
   */
  reason?: number;
  /**
   * Reference ID for this punishment record.
   */
  reference_id?: number;
  /**
   * Return the specific value of listing limit when punishment_type is: 1109: Listing Limit is reduced1110: Listing Limit is reduced1111: Listing Limit is reduced1112: Listing Limit is reduced
   */
  listing_limit?: number[];
  /**
   * Return the specific percentage of order limit when punishment_type is: 2008: Order LimitDaily Order Limit = X % * L28D ADO (Average Daily Order of this Shop in Past 28 Days)
   */
  order_limit?: string;
}

/**
 * ShopeeGetPunishmentHistoryResponseData sub-interface for ShopeeGetPunishmentHistoryResponse
 */
export interface ShopeeGetPunishmentHistoryResponseData {
  /**
   * The punishment records generated in the current quarter.
   */
  punishment_list?: ShopeeGetPunishmentHistoryPunishment[];
  /**
   * Total number of punishment records.
   */
  total_count?: number;
}

/**
 * Response payload for get_punishment_history
 *
 * Get the punishment records generated in the current quarter.
 */
export type ShopeeGetPunishmentHistoryResponse = ShopeeResponseCommon<ShopeeGetPunishmentHistoryResponseData>;

/**
 * ShopeeGetShopPerformanceOverallPerformance sub-interface for ShopeeGetShopPerformanceResponseData
 */
export interface ShopeeGetShopPerformanceOverallPerformance {
  /**
   * Overall Performance: Poor = 1ImprovementNeeded = 2Good = 3Excellent = 4
   */
  rating?: number;
  /**
   * The number of metrics that did not meet target under Fulfillment Performance type.
   */
  fulfillment_failed?: number;
  /**
   * The number of metrics that did not meet target under Listing Performance type.
   */
  listing_failed?: number[];
  /**
   * The number of metrics that did not meet target under Customer Service Performance type.
   */
  custom_service_failed?: number;
}

/**
 * ShopeeGetShopPerformanceTarget sub-interface for ShopeeGetShopPerformanceMetric
 */
export interface ShopeeGetShopPerformanceTarget {
  /**
   * Value of target.
   */
  value?: number;
  /**
   * Comparator of target: <, <=, >, >=, =
   */
  comparator?: string;
}

/**
 * ShopeeGetShopPerformanceMetric sub-interface for ShopeeGetShopPerformanceResponseData
 */
export interface ShopeeGetShopPerformanceMetric {
  /**
   * Type of metric: Fulfillment Performance = 1Listing Performance = 2Customer Service Performance = 3
   */
  metric_type?: number;
  /**
   * ID of metric.If metric_id < 0, it means that this is not a real metric, but a group of metrics.Non-Responded Chats = -1Late Shipment Rate (All Channels) = 1Non-Fulfilment Rate (All Channels) = 3Preparation Time = 4Chat Response Rate = 11Pre-order Listing % = 12Days of Pre-order Listing Violation = 15Response Time = 21Shop Rating = 22No. of Non-Responded Chats = 23Fast Handover Rate = 25On-time Pickup Failure Rate = 27On-time Pickup Failure Rate Violation Value = 28Average Response Time = 29Cancellation Rate (All Channels) = 42Return-refund Rate (All Channels) = 43Severe Listing Violations = 52Other Listing Violations = 53Prohibited Listings = 54Counterfeit/IP infringement = 55Spam Listings = 56Late Shipment Rate (NDD) = 85Non-fulfilment Rate (NDD) = 88Cancellation Rate (NDD) = 91Return-refund Rate (NDD) = 92Customer Satisfaction = 95% SDD Listings = 96% NDD Listings = 97Fast Handover Rate - SLS = 2001Fast Handover Rate - FBS = 2002Fast Handover Rate - 3PF = 2003Poor Quality Products = 2011% HD Listings = 2030% HD Free Shipping Enabled = 2031Saturday Shipment = 2032Preparation Time PS = 2033OTDR Logistic Rate = 2036OTDR DD Rate = 2037
   */
  metric_id?: number;
  /**
   * ID of parent metric.
   */
  parent_metric_id?: number;
  /**
   * Default name of metric.
   */
  metric_name?: string;
  /**
   * The performance of the metric at current period.
   */
  current_period?: number;
  /**
   * The performance of the metric at last period.
   */
  last_period?: number;
  /**
   * Unit of metric: Number = 1Percentage = 2Second = 3Day = 4Hour = 5
   */
  unit?: number;
  target?: ShopeeGetShopPerformanceTarget;
  /**
   * (Only for whitelist TW sellers) The exemption_end_date value will not be empty if ALL conditions are met: - The shop is in the "POL Shop Whitelist"- Within the "Exemption Period"- The metric_id is 12 (Pre-order Listing %) or 15 (Days of Pre-order Listing Violation)
   */
  exemption_end_date?: string;
}

/**
 * ShopeeGetShopPerformanceResponseData sub-interface for ShopeeGetShopPerformanceResponse
 */
export interface ShopeeGetShopPerformanceResponseData {
  overall_performance?: ShopeeGetShopPerformanceOverallPerformance;
  metric_list?: ShopeeGetShopPerformanceMetric[];
}

/**
 * Response payload for get_shop_performance
 *
 * The data metrics of shop performance.
 */
export type ShopeeGetShopPerformanceResponse = ShopeeResponseCommon<ShopeeGetShopPerformanceResponseData>;
