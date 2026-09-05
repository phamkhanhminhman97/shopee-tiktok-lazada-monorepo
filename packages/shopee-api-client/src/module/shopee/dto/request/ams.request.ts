/**
 * Enum generated for field ShopeeCampaignPartner
 */
export enum ShopeeCampaignPartner {
  NAME = "Name",
  ID = "ID",
}

/**
 * Request parameters for add_all_products_to_open_campaign
 *
 * Add all eligible products into the Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams.batch_add_products_to_open_campaign by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export interface ShopeeAddAllProductsToOpenCampaignRequest {
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate: number;
  /**
   * Period start time, in seconds, if missing, will set 10 minutes later
   */
  period_start_time?: number;
  /**
   * Period end time, in seconds, if missing, will set 32503651199 (2999-12-31 23:59:59) represent of no limit
   */
  period_end_time?: number;
}

/**
 * Request parameters for batch_add_products_to_open_campaign
 *
 * Batch add products to the Open Campaign for a given list of product IDs
 */
export interface ShopeeBatchAddProductsToOpenCampaignRequest {
  /**
   * The list of item_id, max limit: 50
   */
  item_id_list: number[];
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate: number;
  /**
   * Period start time, in seconds, if missing, will set 10 minutes later
   */
  period_start_time?: number;
  /**
   * Period end time, in seconds, if missing, will set 32503651199 (2999-12-31 23:59:59) represent of no limit
   */
  period_end_time?: number;
}

/**
 * Request parameters for batch_edit_products_open_campaign_setting
 *
 * Batch update open campaign settings for a given list of product IDs
 */
export interface ShopeeBatchEditProductsOpenCampaignSettingRequest {
  /**
   * The list of campaign_id, max limit: 50
   */
  campaign_ids: number[];
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate?: number;
  /**
   * Period start time, in seconds, if missing, will skip and do not updateOnly allow to update on UPCOMING status, when in other status, will skip too
   */
  period_start_time?: number;
  /**
   * Period end time, in seconds, if missing, will skip and do not updateCan set 32503651199 to make period no limit
   */
  period_end_time?: number;
}

/**
 * Request parameters for batch_get_products_suggested_rate
 *
 * Fetch suggested rates for a given list of product IDs
 */
export interface ShopeeBatchGetProductsSuggestedRateRequest {
  /**
   * The list of item_id, different item id should be split by comma and at most 20 items
   */
  item_id_list: string[];
}

/**
 * Request parameters for batch_remove_products_open_campaign_setting
 *
 * Batch update products from Open Campaign for a given list of product IDs
 */
export interface ShopeeBatchRemoveProductsOpenCampaignSettingRequest {
  /**
   * The list of campaign_id, max limit: 50
   */
  campaign_ids: number[];
}

/**
 * ShopeeCreateNewTargetedCampaignItem sub-interface for ShopeeCreateNewTargetedCampaignRequest
 */
export interface ShopeeCreateNewTargetedCampaignItem {
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Commission rate of current item, 1.1 means 1.1%, support two decimal places.
   */
  rate: number;
}

/**
 * ShopeeCreateNewTargetedCampaignAffiliate sub-interface for ShopeeCreateNewTargetedCampaignRequest
 */
export interface ShopeeCreateNewTargetedCampaignAffiliate {
  /**
   * The unique key for affiliate.
   */
  affiliate_id: number;
}

/**
 * Request parameters for create_new_targeted_campaign
 *
 * Create a new campaign with custom product & affiliate selections, and basic info filling.
 */
export interface ShopeeCreateNewTargetedCampaignRequest {
  /**
   * The name of the current campaign.
   */
  campaign_name: string;
  /**
   * The period start time of campaign, in seconds.
   */
  period_start_time: number;
  /**
   * The period end time of campaign, in seconds.Can set 32503651199 (2999-12-31 23:59:59) represent of no limit.
   */
  period_end_time: number;
  /**
   * Budget allocation toggle for the current campaign.Note: TH not supported
   */
  is_set_budget?: boolean;
  /**
   * Budget value set for the current campaign.Note: TH not supported
   */
  budget?: number;
  /**
   * The message displayed to affiliates.
   */
  seller_message: string;
  /**
   * The list of items associated with the current campaign.
   */
  item_list: ShopeeCreateNewTargetedCampaignItem[];
  /**
   * The list of affiliates associated with the current campaign.
   */
  affiliate_list: ShopeeCreateNewTargetedCampaignAffiliate[];
}

/**
 * ShopeeEditAffiliateListOfTargetedCampaignAffiliate sub-interface for ShopeeEditAffiliateListOfTargetedCampaignRequest
 */
export interface ShopeeEditAffiliateListOfTargetedCampaignAffiliate {
  /**
   * The unique key for affiliate.
   */
  affiliate_id: number;
}

/**
 * Request parameters for edit_affiliate_list_of_targeted_campaign
 *
 * Modify the selected affiliate list in an existing target campaign
 */
export interface ShopeeEditAffiliateListOfTargetedCampaignRequest {
  /**
   * Campaign id for update.
   */
  campaign_id: number;
  /**
   * Edit type. Applicable values:adddelete
   */
  edit_type: string;
  /**
   * The list of affiliates to be modified.
   */
  affiliate_list: ShopeeEditAffiliateListOfTargetedCampaignAffiliate[];
}

/**
 * Request parameters for edit_all_products_open_campaign_setting
 *
 * Update for all products in the Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams.batch_edit_products_open_campaign_setting by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export interface ShopeeEditAllProductsOpenCampaignSettingRequest {
  /**
   * Commission Rate, 1.1 means 1.1%, support two decimal places, if miss, will skip and do not update
   */
  commission_rate?: number;
  /**
   * Period start time, in seconds, if missing, will skip and do not updateOnly allow to update on UPCOMING status, when in other status, will skip too
   */
  period_start_time?: number;
  /**
   * Period end time, in seconds, if missing, will skip and do not updateCan set 32503651199 to make period no limit
   */
  period_end_time?: number;
}

/**
 * ShopeeEditProductListOfTargetedCampaignItem sub-interface for ShopeeEditProductListOfTargetedCampaignRequest
 */
export interface ShopeeEditProductListOfTargetedCampaignItem {
  /**
   * Item ID.
   */
  item_id: number;
  /**
   * Commission rate of current item, 1.1 means 1.1%, support two decimal places.
   */
  rate?: number;
}

/**
 * Request parameters for edit_product_list_of_targeted_campaign
 *
 * Modify the selected product list in an existing target campaign
 */
export interface ShopeeEditProductListOfTargetedCampaignRequest {
  /**
   * Campaign id for update.
   */
  campaign_id: number;
  /**
   * Edit type. Applicable values: adddeleteupdate
   */
  edit_type: string;
  /**
   * The list of items to be modified.
   */
  item_list: ShopeeEditProductListOfTargetedCampaignItem[];
}

/**
 * Request parameters for get_affiliate_performance
 *
 * Retrieve affiliate performance of the shop.
 */
export interface ShopeeGetAffiliatePerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 20.
   */
  page_size: number;
  /**
   * Order Type. Applicable values: PlacedOrderConfirmedOrder: Note: - Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.- Confirmed orders are either non-COD orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  order_type: string;
  /**
   * Channel. Applicable values: - AllChannel- SocialMedia- ShopeeVideo- LiveStreaming
   */
  channel: string;
  /**
   * Affiliate ID for query.
   */
  affiliate_id?: number;
}

/**
 * Request parameters for get_auto_add_new_product_toggle_status
 *
 * Check if auto-add new product is currently enabled
 */
export type ShopeeGetAutoAddNewProductToggleStatusRequest = Record<string, never>;

/**
 * Request parameters for get_campaign_key_metrics_performance
 *
 * Retrieve key metrics for Open and Targeted campaigns
 */
export interface ShopeeGetCampaignKeyMetricsPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
}

/**
 * Request parameters for get_content_performance
 *
 * Retrieve content performance of the shop
 */
export interface ShopeeGetContentPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 20.
   */
  page_size: number;
  /**
   * Order Type. Applicable values: PlacedOrderConfirmedOrder: Note: - Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.- Confirmed orders are either non-COD orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  order_type: string;
  /**
   * Channel. Applicable values: - ShopeeVideo- LiveStreaming
   */
  channel: string;
  /**
   * Search for the contents published by affiliates with the affiliate id entered.
   */
  affiliate_id?: number;
  /**
   * Search for the contents with the searched product included (precise search).
   */
  item_id?: number;
}

/**
 * Request parameters for get_conversion_report
 *
 * Retrieve the shop's conversion report with details about each order, item, affiliate, campaign.You can filter results using one or multiple time ranges, and the final result will be the intersection of these ranges. Due to data volume limitations, the maximum queryable time span is three months, etc.Maximum data can be viewed is 500 pages, please export data for more details.
 */
export interface ShopeeGetConversionReportRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. If data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Number of records returned per page, the maximum limit is 500, and page_no * page_size must be <= 10000.
   */
  page_size: number;
  /**
   * Unique identifier of the order.
   */
  order_sn?: string;
  /**
   * ID of the affiliate who promoted the item.
   */
  affiliate_id?: number;
  /**
   * ID of the product purchased.
   */
  item_id?: number;
  /**
   * Product's name.
   */
  item_name?: string;
  /**
   * Hierarchical product category classification. (L1 Category)
   */
  l1_category_id?: number;
  /**
   * Hierarchical product category classification. (L2 category)
   */
  l2_category_id?: number;
  /**
   * Hierarchical product category classification. (L3 Category)
   */
  l3_category_id?: number;
  /**
   * Order Status. Applicable values:UnpaidPendingCompletedCancelled
   */
  order_status?: string;
  /**
   * Verified Status. Applicable values:UnverifiedValidInvalid
   */
  verified_status?: string;
  /**
   * Buyer Status. Applicable values:NewExisting
   */
  buyer_status?: string;
  /**
   * ID referencing the campaign rule applied.
   */
  attr_campaign_id?: number;
  /**
   * Name/ID of campaign partner.
   */
  campaign_partner?: ShopeeCampaignPartner | string | number;
  /**
   * Seller Campaign Type. Applicable values:TargetCampaignOpenCampaignMCNCampaign
   */
  seller_campaign_type?: string;
  /**
   * Deduction Status. Applicable values:PendingDeductionDeducted
   */
  deduction_status?: string;
  /**
   * Deduction Method. Applicable values:OrderEscrowSellerWalletAutoAdjustmentSVSPaymentLinkOfflineSettlementAMSCredit
   */
  deduction_method?: string;
  /**
   * Start time (inclusive) of order placement, in timestamp format.
   */
  place_order_time_start?: number;
  /**
   * End time (inclusive) of order placement, in timestamp format.
   */
  place_order_time_end?: number;
  /**
   * Start time (inclusive) of order completion, in timestamp format.
   */
  order_completed_time_start?: number;
  /**
   * End time (inclusive) of order completion, in timestamp format.
   */
  order_completed_time_end?: number;
  /**
   * Start time (inclusive) of final completion, in timestamp format.
   */
  conversion_completed_time_start?: number;
  /**
   * End time (inclusive) of final completion, in timestamp format.
   */
  conversion_completed_time_end?: number;
  /**
   * Start time (inclusive) of fee deduction, in timestamp format.
   */
  ams_deduction_time_start?: number;
  /**
   * End time (inclusive) of fee deduction, in timestamp format.
   */
  ams_deduction_time_end?: number;
}

/**
 * Request parameters for get_managed_affiliate_list
 *
 * Returns affiliates that are saved to managed affiliate list
 */
export interface ShopeeGetManagedAffiliateListRequest {
  /**
   * The start index of request.The max managed affiliates of affiliate is 2000. Zero count will returned if offset > 2000 or offset > real managed count.
   */
  page_no: number;
  /**
   * The number of affiliate returned by this request, Max is 100, default is 20.The max managed affiliates of affiliate is 2000.
   */
  page_size: number;
}

/**
 * Request parameters for get_open_campaign_added_product
 *
 * Retrieve all products currently in the Open Campaign, including campaign status, commission rate, and promotion period
 */
export interface ShopeeGetOpenCampaignAddedProductRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "" or not passed. If data is more than one page, the cursor can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Use this field to specify which field to use to sort the returned item list. Sort by update_time and commission_id in descending order by default. Available values:commission_rate: Sort by commission_rate in ascending order-commission_rate: Sort by commission_rate in descending order
   */
  sort_by?: string;
  /**
   * Search type: ITEM_NAME or ITEM_ID
   */
  search_type?: string;
  /**
   * Search for item_name or item_id, item_id should be split by comma and at most 50 items.
   */
  search_content?: string;
}

/**
 * Request parameters for get_open_campaign_batch_task_result
 *
 * Get open campaign batch task result
 */
export interface ShopeeGetOpenCampaignBatchTaskResultRequest {
  /**
   * Task id, used to query task progress
   */
  task_id: string;
}

/**
 * Request parameters for get_open_campaign_not_added_product
 *
 * Retrieve eligible products not yet added to the Open Campaign
 */
export interface ShopeeGetOpenCampaignNotAddedProductRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "" or not passed. If data is more than one page, the cursor can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Use this field to specify which field to use to sort the returned item list. Available values:-sales: Sort by sales in descending order (default value)sales: Sort by sales in ascending order-stock: Sort by inventory in descending orderstock: Sort by inventory in ascending order-price: Sort by price in descending orderprice: Sort by price in ascending order
   */
  sort_by?: string;
  /**
   * Search type: ITEM_ID or ITEM_NAME
   */
  search_type?: string;
  /**
   * Search for item name or item id. item id should be split by comma and at most 50 items. When search_content is passed, search_type is required.
   */
  search_content?: string;
}

/**
 * Request parameters for get_open_campaign_performance
 *
 * Retrieve all products in the Open Campaign along with performance data
 */
export interface ShopeeGetOpenCampaignPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 20.
   */
  page_size: number;
  /**
   * Item ID for query.
   */
  item_id?: number;
}

/**
 * Request parameters for get_optimization_suggestion_product
 *
 * Retrieve products with suggestions to improve performance
 */
export interface ShopeeGetOptimizationSuggestionProductRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data.The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Recommended types. Applicable values: product_opportunitiesoptimize_increase_commission_rateoptimize_extend_promotion_period
   */
  rcmd_reason_filter: string;
}

/**
 * Request parameters for get_performance_data_update_time
 *
 * Retrieve the latest date of AMS dashboard data metrics update.
 */
export interface ShopeeGetPerformanceDataUpdateTimeRequest {
  /**
   * Marker type. Applicable values: - AmsMarker: Used to query the data update date for ams metrics.
   */
  marker_type: string;
}

/**
 * Request parameters for get_product_performance
 *
 * Retrieve product performance of the shop.
 */
export interface ShopeeGetProductPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. If data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 20.
   */
  page_size: number;
  /**
   * Order Type. Applicable values: PlacedOrderConfirmedOrder: Note: - Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.- Confirmed orders are either non-COD orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  order_type: string;
  /**
   * Channel. Applicable values: - AllChannel- SocialMedia- ShopeeVideo- LiveStreaming
   */
  channel: string;
  /**
   * Item ID for query.
   */
  item_id?: number;
}

/**
 * Request parameters for get_recommended_affiliate_list
 *
 * Returns top 200 recommended affiliates that can be added to a campaign
 */
export interface ShopeeGetRecommendedAffiliateListRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. Note: The response size will up to 200.
   */
  page_size: number;
}

/**
 * Request parameters for get_shop_performance
 *
 * Retrieve overall key metrics for all channels or specific channels.
 */
export interface ShopeeGetShopPerformanceRequest {
  /**
   * Period Type. Applicable values: DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Order Type. Applicable values: PlacedOrderConfirmedOrder: Note: - Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.- Confirmed orders are either non-COD orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  order_type: string;
  /**
   * Channel. Applicable values: - AllChannel- SocialMedia- ShopeeVideo- LiveStreaming
   */
  channel: string;
}

/**
 * Request parameters for get_shop_suggested_rate
 *
 * Retrieve suggested rates for all eligible products
 */
export type ShopeeGetShopSuggestedRateRequest = Record<string, never>;

/**
 * Request parameters for get_targeted_campaign_addable_product_list
 *
 * Returns a list of products that can be added to a targeted campaign
 */
export interface ShopeeGetTargetedCampaignAddableProductListRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "" or not passed. If data is more than one page, the cursor can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Use this field to specify which field to use to sort the returned item list. Available values:-sales: Sort by sales in descending order (default value)sales: Sort by sales in ascending order-stock: Sort by inventory in descending orderstock: Sort by inventory in ascending order-price: Sort by price in descending orderprice: Sort by price in ascending order
   */
  sort_by?: string;
  /**
   * Search type: ITEM_NAME or ITEM_ID, used with search_content.
   */
  search_type?: string;
  /**
   * Search by item name or item ID, item_id should be split by comma and at most 50 items.Please specify search_type for it to be effective, otherwise search_content will be ignored.
   */
  search_content?: string;
}

/**
 * Request parameters for get_targeted_campaign_list
 *
 * Retrieve all current targeted campaigns created by the seller
 */
export interface ShopeeGetTargetedCampaignListRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * The list of campaign_id for query, different campaign id should be split by comma and at most 50 campaigns.
   */
  campaign_id_list?: string[];
  /**
   * Campaign name for query.
   */
  campaign_name?: string;
  /**
   * Campaign status for query. Applicable values: UpcomingOngoingEndedCancelledDraftTerminatingTerminatedPaused
   */
  campaign_status?: string;
  /**
   * Campaign period start time for query.
   */
  period_start_time?: number;
  /**
   * Campaign period end time for query.
   */
  period_end_time?: number;
  /**
   * Item id for query.
   */
  item_id?: number;
  /**
   * Item name for query.
   */
  item_name?: string;
}

/**
 * Request parameters for get_targeted_campaign_performance
 *
 * Retrieve a list of Targeted Campaigns and their performance data
 */
export interface ShopeeGetTargetedCampaignPerformanceRequest {
  /**
   * Period Type. Applicable values:DayWeekMonthLast7dLast30dNote: The start date and end date must align with the Period Type.
   */
  period_type: string;
  /**
   * The start_date must be:- Any day in the past three calendar months for "Day" period type- Sunday for "Week" period type- The 1st day of a Month for "Month" period type- The date that is 6 days prior to the latest data date for "Last7d" period type- The date that is 29 days prior to the latest data date for "Last30d" period typeNote: The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  start_date: string;
  /**
   * The end_date must be: - Equal to start_date for "Day" period type- Saturday for "Week" period type- The last day of a Month for "Month" period type. If the selected month is the current month, the end_date should be the latest data date- The latest data date for "Last7d" period type- The latest data date for "Last30d" period typeNote: - The end_date must be later than the start_date and earlier than the latest data date- The latest data date can be obtained by using "AmsMarker" in the v2.ams.get_performance_data_update_time API.
   */
  end_date: string;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 20.
   */
  page_size: number;
  /**
   * Campaign ID for query.
   */
  campaign_id?: number;
}

/**
 * Request parameters for get_targeted_campaign_settings
 *
 * For each campaign, return: campaign basic info (name, status, promotion period, message), selected product list (with product name & ID), selected affiliate list (with affiliate names)
 */
export interface ShopeeGetTargetedCampaignSettingsRequest {
  /**
   * Campaign id for query.Note: For campaigns with campaign_source = ShopeeManaged, cannot be queried for details through this API.
   */
  campaign_id: number;
}

/**
 * Request parameters for get_validation_list
 *
 * Retrieve the seller's AMS validation bill
 */
export type ShopeeGetValidationListRequest = Record<string, never>;

/**
 * Request parameters for get_validation_report
 *
 * Retrieve detailed information for a specific validation bill
 */
export interface ShopeeGetValidationReportRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. If data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Number of records returned per page, the maximum limit is 500, and page_no * page_size must be <= 10000.
   */
  page_size: number;
  /**
   * Unique identifier of the billing entry.
   */
  validation_id: string;
  /**
   * Billing month in the format YYYYMM (e.g., 202405).
   */
  validation_month: number;
  /**
   * Source of campaign setup. Applicable values:ShopeeManagedSeller
   */
  campaign_source: string;
  /**
   * Unique identifier of the order.
   */
  order_sn?: string;
  /**
   * Hierarchical product category classification. (L1 Category)
   */
  l1_category_id?: number;
  /**
   * Hierarchical product category classification. (L2 Category)
   */
  l2_category_id?: number;
  /**
   * Hierarchical product category classification. (L3 Category)
   */
  l3_category_id?: number;
  /**
   * Unique identifier of the product.
   */
  item_id?: number;
  /**
   * The product's name.
   */
  item_name?: string;
  /**
   * Verified Status. Applicable values:ValidInvalid
   */
  verified_status?: string;
  /**
   * ID referencing the campaign rule applied. (Ties to the campaign seller created).
   */
  attr_campaign_id?: number;
  /**
   * Start time (inclusive) of order placement, in timestamp format.
   */
  place_order_time_start: number;
  /**
   * End time (inclusive) of order placement, in timestamp format.
   */
  place_order_time_end: number;
}

/**
 * Request parameters for query_affiliate_list
 *
 * Retrieve affiliate information by affiliate id.
 */
export interface ShopeeQueryAffiliateListRequest {
  /**
   * Query type: 1: query affiliate information by id list2: query affiliate id by name(fuzzy matching), only return affiliate id and affiliate name
   */
  query_type: number;
  /**
   * Query affiliate information by affiliate id list.Max count of affiliate id is 200. Will return first 200 affiliates' information if length > 200.
   */
  affiliate_id_list?: string[];
  /**
   * Query affiliate information by name use fuzzy matching.Will return first 200 affiliates' information is match number > 200.
   */
  name?: string;
}

/**
 * Request parameters for remove_all_products_open_campaign_setting
 *
 * Remove the entire product list of Open Campaign. We will only return the general error that caused the whole task failure, without returning the specific error for each product in the v2.ams.get_open_campaign_batch_task_result API. If you want to get the result for each products, you can use v2.ams. batch_remove_products_open_campaign_setting by pagination manually, or check the product status by using the GET API after the task progress turn to 100%.
 */
export type ShopeeRemoveAllProductsOpenCampaignSettingRequest = Record<string, never>;

/**
 * Request parameters for terminate_targeted_campaign
 *
 * Change target campaign status to "terminated" to stop all affiliate promotion activity
 */
export interface ShopeeTerminateTargetedCampaignRequest {
  /**
   * The unique key for the current campaign.
   */
  campaign_id: number;
}

/**
 * Request parameters for update_auto_add_new_product_setting
 *
 * Change auto-add toggle and default commission rate setting
 */
export interface ShopeeUpdateAutoAddNewProductSettingRequest {
  /**
   * Enable or disable auto-add new product, if true is passed, it means enabled, if false is passed, it means disabled
   */
  open: boolean;
  /**
   * Commission rate, 1.1 means 1.1%, support two decimal places
   */
  commission_rate?: number;
}

/**
 * Request parameters for update_basic_info_of_targeted_campaign
 *
 * Edit campaign name, promotion period, message, and budget (if the shop is whitelisted) of target campaign
 */
export interface ShopeeUpdateBasicInfoOfTargetedCampaignRequest {
  /**
   * The unique key for the current campaign.
   */
  campaign_id: number;
  /**
   * The name of the current campaign.
   */
  campaign_name?: string;
  /**
   * The start time of the designated campaign, in seconds.
   */
  period_start_time?: number;
  /**
   * The period end time of campaign, in seconds.Can set 32503651199 (2999-12-31 23:59:59) represent of no limit.
   */
  period_end_time?: number;
  /**
   * Budget allocation toggle for the current campaign.Note: TH not supported
   */
  is_set_budget?: boolean;
  /**
   * Budget value set for the current campaign.Note: TH not supported
   */
  budget?: number;
}
