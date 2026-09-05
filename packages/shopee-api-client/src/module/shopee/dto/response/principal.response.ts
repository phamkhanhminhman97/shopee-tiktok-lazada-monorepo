import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeGetClipVideoPerformanceSummary sub-interface for ShopeeGetClipVideoPerformanceResponseData
 */
export interface ShopeeGetClipVideoPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary.
   */
  currency?: string;
  /**
   * Total views from the selected videos.
   */
  total_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Video duration in minutes.
   */
  video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of Like clicks from the selected videos.
   */
  likes?: number;
  /**
   * Number of comments generated from the selected videos.
   */
  comments?: number;
  /**
   * Number of shares created from the selected videos.
   */
  share?: number;
  /**
   * Number of unique buyers who placed order from the selected videos. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during the selected videos.
   */
  atc_units?: number;
  /**
   * Number of items sold from placed orders during the selected videos.
   */
  units_sold?: number;
  /**
   * Number of placed orders (paid and unpaid) during the selected videos, including cancelled orders.
   */
  orders?: number;
  /**
   * Value of placed orders (paid and unpaid) from the selected videos in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Video orders / total video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetClipVideoPerformanceDetail sub-interface for ShopeeGetClipVideoPerformanceResponseData
 */
export interface ShopeeGetClipVideoPerformanceDetail {
  /**
   * Region code of the shop that owns this video.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this video item.
   */
  currency?: string;
  /**
   * Shop identifier that owns this video.
   */
  shop_id?: number;
  /**
   * Shop name that owns this video.
   */
  shop_name?: string;
  /**
   * Video identifier.
   */
  video_id?: number;
  /**
   * Video name.
   */
  video_name?: string;
  /**
   * Total views from this video.
   */
  total_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Video duration in minutes.
   */
  video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of Like clicks from this video.
   */
  likes?: number;
  /**
   * Number of comments generated from this video.
   */
  comments?: number;
  /**
   * Number of shares created from this video.
   */
  share?: number;
  /**
   * Number of unique buyers who placed order from this video. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during this video.
   */
  atc_units?: number;
  /**
   * Number of items sold from placed orders during this video.
   */
  units_sold?: number;
  /**
   * Number of placed orders (paid and unpaid) during this video, including cancelled orders.
   */
  orders?: number;
  /**
   * Value of placed orders (paid and unpaid) from this video in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Video orders / total video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetClipVideoPerformanceResponseData sub-interface for ShopeeGetClipVideoPerformanceResponse
 */
export interface ShopeeGetClipVideoPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall performance of the selected videos.Note:- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  summary?: ShopeeGetClipVideoPerformanceSummary[];
  /**
   * List of video-level detail records that returns performance metrics for each selected video within the requested date range.Details are sorted by shop_id and then video_id in ascending order.- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  details?: ShopeeGetClipVideoPerformanceDetail[];
  /**
   * Offset to be used in the next request for fetching the next page of detail records.Notes:- Returned only when video_list is omitted or an empty array.- Calculated as cursor + returned_detail_count.- If returned_detail_count is less than page_size, it indicates there may be no more records.- If the request is already beyond the end of the result set, the API returns 0 detail records and next_cursor remains equal to the input cursor.
   */
  next_cursor?: number;
}

/**
 * Response payload for get_clip_video_performance
 *
 * Queries video clip performance data for the specified videos within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and video-level detailed metrics.
 */
export type ShopeeGetClipVideoPerformanceResponse = ShopeeResponseCommon<ShopeeGetClipVideoPerformanceResponseData>;

/**
 * ShopeeGetContentAffiliatePerformanceSummary sub-interface for ShopeeGetContentAffiliatePerformanceResponseData
 */
export interface ShopeeGetContentAffiliatePerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary.
   */
  currency?: string;
  /**
   * Total content views generated during the selected period.
   */
  views?: number;
  /**
   * Total content likes generated during the selected period.
   */
  likes?: number;
  /**
   * Total content comments generated during the selected period.
   */
  comments?: number;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
}

/**
 * ShopeeGetContentAffiliatePerformanceDetail sub-interface for ShopeeGetContentAffiliatePerformanceResponseData
 */
export interface ShopeeGetContentAffiliatePerformanceDetail {
  /**
   * Region code of the shop that owns this content item.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this content item.
   */
  currency?: string;
  /**
   * Shop identifier that owns this content item.
   */
  shop_id?: number;
  /**
   * Shop name that owns this content item.
   */
  shop_name?: string;
  /**
   * Affiliate content identifier.
   */
  content_id?: number;
  /**
   * Affiliate content name.
   */
  content_name?: string;
  /**
   * Total content views generated during the selected period for this content item.
   */
  views?: number;
  /**
   * Total content likes generated during the selected period for this content item.
   */
  likes?: number;
  /**
   * Total content comments generated during the selected period for this content item.
   */
  comments?: number;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period for this content item. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period for this content item. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period for this content item.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period for this content item.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period for this content item. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period for this content item. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
}

/**
 * ShopeeGetContentAffiliatePerformanceResponseData sub-interface for ShopeeGetContentAffiliatePerformanceResponse
 */
export interface ShopeeGetContentAffiliatePerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall affiliate performance of the selected content items. The summary currency is USD when multiple currencies are requested; otherwise it follows the single requested currency, or USD by default.
   */
  summary?: ShopeeGetContentAffiliatePerformanceSummary[];
  /**
   * List of content-level detail records that returns affiliate performance metrics for each selected content item within the requested date range.Details are sorted by shop_id and then content_id in ascending order.
   */
  details?: ShopeeGetContentAffiliatePerformanceDetail[];
  /**
   * Offset to be used in the next request for fetching the next page of detail records.Notes:- Returned only when content_list is omitted or an empty array.- Calculated as cursor + returned_detail_count.- If returned_detail_count is less than page_size, it indicates there may be no more records.- If the request is already beyond the end of the result set, the API returns 0 detail records and next_cursor remains equal to the input cursor.
   */
  next_cursor?: number;
}

/**
 * Response payload for get_content_affiliate_performance
 *
 * Queries affiliate performance data for the specified content items within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and content-level detailed metrics with placed-order and confirmed-order views.
 */
export type ShopeeGetContentAffiliatePerformanceResponse =
  ShopeeResponseCommon<ShopeeGetContentAffiliatePerformanceResponseData>;

/**
 * ShopeeGetPrincipalAffiliatePerformanceSummary sub-interface for ShopeeGetPrincipalAffiliatePerformanceResponseData
 */
export interface ShopeeGetPrincipalAffiliatePerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
  /**
   * Estimated total payout from placed affiliate marketing orders during the selected period.
   */
  estimated_commission_placed?: number;
  /**
   * Estimated total payout from confirmed affiliate marketing orders during the selected period.
   */
  estimated_commission_confirmed?: number;
  /**
   * Return on Investment = Sales Placed / Estimated Commission Placed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_placed?: number;
  /**
   * Return on Investment = Sales Confirmed / Estimated Commission Confirmed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_confirmed?: number;
  /**
   * Total number of unique buyers who placed affiliate marketing orders from the selected principal during the selected period.
   */
  buyers_placed?: number;
  /**
   * Total number of unique buyers with confirmed affiliate marketing orders from the selected principal during the selected period.
   */
  buyers_confirmed?: number;
  /**
   * Total number of unique new buyers who placed affiliate marketing orders from the selected principal during the selected period.
   */
  new_buyers_placed?: number;
  /**
   * Total number of unique new buyers with confirmed affiliate marketing orders from the selected principal during the selected period.
   */
  new_buyers_confirmed?: number;
}

/**
 * ShopeeGetPrincipalAffiliatePerformanceDetail sub-interface for ShopeeGetPrincipalAffiliatePerformanceResponseData
 */
export interface ShopeeGetPrincipalAffiliatePerformanceDetail {
  /**
   * Region code of this detail item.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this region item.
   */
  currency?: string;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period for this region. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period for this region. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period for this region.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period for this region.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period for this region. Placed orders are orders (COD and non-COD) that buyers have successfully placed, including paid and unpaid orders.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period for this region. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
  /**
   * Estimated total payout from placed affiliate marketing orders during the selected period for this region.
   */
  estimated_commission_placed?: number;
  /**
   * Estimated total payout from confirmed affiliate marketing orders during the selected period for this region.
   */
  estimated_commission_confirmed?: number;
  /**
   * Return on Investment = Sales Placed / Estimated Commission Placed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_placed?: number;
  /**
   * Return on Investment = Sales Confirmed / Estimated Commission Confirmed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_confirmed?: number;
  /**
   * Total number of unique buyers who placed affiliate marketing orders from this region during the selected period.
   */
  buyers_placed?: number;
  /**
   * Total number of unique buyers with confirmed affiliate marketing orders from this region during the selected period.
   */
  buyers_confirmed?: number;
  /**
   * Total number of unique new buyers who placed affiliate marketing orders from this region during the selected period.
   */
  new_buyers_placed?: number;
  /**
   * Total number of unique new buyers with confirmed affiliate marketing orders from this region during the selected period.
   */
  new_buyers_confirmed?: number;
}

/**
 * ShopeeGetPrincipalAffiliatePerformanceResponseData sub-interface for ShopeeGetPrincipalAffiliatePerformanceResponse
 */
export interface ShopeeGetPrincipalAffiliatePerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall affiliate performance of the requested principal. Summary values are returned only when the principal has accessible shops under the selected regions.
   */
  summary?: ShopeeGetPrincipalAffiliatePerformanceSummary[];
  /**
   * List of region-level detail records that returns affiliate performance metrics for each selected region within the requested date range.Note:- Details are queried from shop-level source data and then merged into region-level results in the service layer.- For de-duplicated metrics such as buyers, new_buyers, and orders, values may differ from a true region-level de-duplicated aggregation when multiple shops in the same region share overlapping users or orders.
   */
  details?: ShopeeGetPrincipalAffiliatePerformanceDetail[];
}

/**
 * Response payload for get_principal_affiliate_performance
 *
 * Queries affiliate performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics with placed-order and confirmed-order views.
 */
export type ShopeeGetPrincipalAffiliatePerformanceResponse =
  ShopeeResponseCommon<ShopeeGetPrincipalAffiliatePerformanceResponseData>;

/**
 * ShopeeGetPrincipalLivestreamPerformanceSummary sub-interface for ShopeeGetPrincipalLivestreamPerformanceResponseData
 */
export interface ShopeeGetPrincipalLivestreamPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Livestream, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of unique buyers who placed order from your Livestream.
   */
  buyers?: number;
  /**
   * Total number of likes in your Livestream.
   */
  likes?: number;
  /**
   * Total number of comments acquired during your Livestream.
   */
  comments?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Number of items sold from placed orders during your Livestream.
   */
  units_sold?: number;
  /**
   * Total views from your Livestream.
   */
  total_views?: number;
  /**
   * Total duration of your Livestream.
   */
  total_live_duration?: number;
  /**
   * Total unique viewers from your Livestream.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Livestream.
   */
  atc_units?: number;
  /**
   * Total count of Livestream sessions in the selected period.
   */
  total_livestreams?: number;
  /**
   * Average duration of your Livestream.
   */
  average_live_duration?: number;
  /**
   * Average time viewers watch your Livestreams.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from your Livestream.
   */
  new_followers?: number;
  /**
   * Number of buyers who have not had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  new_buyers?: number;
  /**
   * Number of buyers who have already had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  existing_buyers?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalLivestreamPerformanceDetail sub-interface for ShopeeGetPrincipalLivestreamPerformanceResponseData
 */
export interface ShopeeGetPrincipalLivestreamPerformanceDetail {
  /**
   * Region code of this detail item.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this region item.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Livestream, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of unique buyers who placed order from your Livestream.
   */
  buyers?: number;
  /**
   * Total number of likes in your Livestream.
   */
  likes?: number;
  /**
   * Total number of comments acquired during your Livestream.
   */
  comments?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Number of items sold from placed orders during your Livestream.
   */
  units_sold?: number;
  /**
   * Total views from your Livestream.
   */
  total_views?: number;
  /**
   * Total duration of your Livestream.
   */
  total_live_duration?: number;
  /**
   * Total unique viewers from your Livestream.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Livestream.
   */
  atc_units?: number;
  /**
   * Total count of Livestream sessions in the selected period.
   */
  total_livestreams?: number;
  /**
   * Average duration of your Livestream.
   */
  average_live_duration?: number;
  /**
   * Average time viewers watch your Livestreams.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from your Livestream.
   */
  new_followers?: number;
  /**
   * Number of buyers who have not had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  new_buyers?: number;
  /**
   * Number of buyers who have already had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  existing_buyers?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalLivestreamPerformanceResponseData sub-interface for ShopeeGetPrincipalLivestreamPerformanceResponse
 */
export interface ShopeeGetPrincipalLivestreamPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall livestream performance of the selected principal. Summary values are returned in USD when data exists.
   */
  summary?: ShopeeGetPrincipalLivestreamPerformanceSummary[];
  /**
   * List of region-level detail records that returns livestream performance metrics for each selected region within the requested date range.Details are produced by aggregating shop-level livestream data into region-level results in the service layer.
   */
  details?: ShopeeGetPrincipalLivestreamPerformanceDetail[];
}

/**
 * Response payload for get_principal_livestream_performance
 *
 * Queries livestream performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export type ShopeeGetPrincipalLivestreamPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetPrincipalLivestreamPerformanceResponseData>;

/**
 * ShopeeGetPrincipalSalesPerformanceDetailSummary sub-interface for ShopeeGetPrincipalSalesPerformanceDetailResponseData
 */
export interface ShopeeGetPrincipalSalesPerformanceDetailSummary {
  /**
   * Currency code used for all monetary metrics in the summary. When multiple regions are requested, the summary currency is always USD. When exactly one region is requested, the summary currency follows that region's requested currency.
   */
  currency?: string;
  /**
   * Total order value (paid and unpaid) within the selected time period, reflecting the sales amount received by sellers after deducting seller rebates.Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * The number of placed orders, including unpaid orders.
   */
  orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.
   */
  units_sold?: number;
  /**
   * Average Basket Size = Sales ÷ Orders. It measures average sales per order.
   */
  average_basket_size?: number;
  /**
   * Items Per Order = Units Sold ÷ Orders. It measures the average number of items sold per transaction.
   */
  items_per_order?: number;
  /**
   * Average selling price = Sales ÷ Units Sold. It measures average sales per unit.
   */
  average_selling_price?: number;
  /**
   * Total number of times your item cards were clicked over the selected time period, on both App and PC. This metric is only available after 31/12/2023.
   */
  product_clicks?: number;
  /**
   * The number of visits to the product page.
   */
  product_views?: number;
  /**
   * Total number of unique visitors who viewed your shop or product pages over the selected time period. Multiple views by the same visitor are counted as 1 unique visitor. This metric is only available after 31/12/2023.
   */
  unique_visitors?: number;
  /**
   * Item conversion rate = Units Sold ÷ Product Views.
   */
  item_conversion_rate?: number;
  /**
   * Number of orders divided by total number of product clicks over the selected time period. This metric is only available after 31/12/2023.
   */
  order_conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalSalesPerformanceDetailDetail sub-interface for ShopeeGetPrincipalSalesPerformanceDetailResponseData
 */
export interface ShopeeGetPrincipalSalesPerformanceDetailDetail {
  /**
   * Region code.
   */
  region?: string;
  /**
   * Currency code used for all monetary metrics of this region item.
   */
  currency?: string;
  /**
   * Total order value (paid and unpaid) within the selected time period, reflecting the sales amount received by sellers after deducting seller rebates.Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * The number of placed orders, including unpaid orders.
   */
  orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.
   */
  units_sold?: number;
  /**
   * Average Basket Size = Sales ÷ Orders. It measures average sales per order.
   */
  average_basket_size?: number;
  /**
   * Items Per Order = Units Sold ÷ Orders. It measures the average number of items sold per transaction.
   */
  items_per_order?: number;
  /**
   * Average selling price = Sales ÷ Units Sold. It measures average sales per unit.
   */
  average_selling_price?: number;
  /**
   * Total number of times your item cards were clicked over the selected time period, on both App and PC. This metric is only available after 31/12/2023.
   */
  product_clicks?: number;
  /**
   * The number of visits to the product page.
   */
  product_views?: number;
  /**
   * Total number of unique visitors who viewed your shop or product pages over the selected time period. Multiple views by the same visitor are counted as 1 unique visitor. This metric is only available after 31/12/2023.
   */
  unique_visitors?: number;
  /**
   * Item conversion rate = Units Sold ÷ Product Views.
   */
  item_conversion_rate?: number;
  /**
   * Number of orders divided by total number of product clicks over the selected time period. This metric is only available after 31/12/2023.
   */
  order_conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalSalesPerformanceDetailResponseData sub-interface for ShopeeGetPrincipalSalesPerformanceDetailResponse
 */
export interface ShopeeGetPrincipalSalesPerformanceDetailResponseData {
  /**
   * Aggregated summary metrics for the requested date range and selected granularity, representing the overall performance of the requested principal across the selected regions.
   */
  summary?: ShopeeGetPrincipalSalesPerformanceDetailSummary[];
  /**
   * List of region-level detail records that returns performance metrics for each selected region within the requested date range.
   */
  details?: ShopeeGetPrincipalSalesPerformanceDetailDetail[];
}

/**
 * Response payload for get_principal_sales_performance_detail
 *
 * Queries the business performance data aggregated at principal level for the specified regions within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export type ShopeeGetPrincipalSalesPerformanceDetailResponse =
  ShopeeResponseCommon<ShopeeGetPrincipalSalesPerformanceDetailResponseData>;

/**
 * ShopeeGetPrincipalVideoPerformanceSummary sub-interface for ShopeeGetPrincipalVideoPerformanceResponseData
 */
export interface ShopeeGetPrincipalVideoPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Video, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of Like clicks from all videos.
   */
  likes?: number;
  /**
   * Number of comments generated from all videos.
   */
  comments?: number;
  /**
   * Number of shares created from all videos.
   */
  share?: number;
  /**
   * Value of placed orders (paid and unpaid) from all videos in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Number of items sold from placed orders during your Video.
   */
  units_sold?: number;
  /**
   * Number of views from the video that lasted for more than 3 seconds.
   */
  effective_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Total duration of your videos in minutes. This field is returned only in summary.
   */
  total_video_duration?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Video.
   */
  atc_units?: number;
  /**
   * Average duration of your videos in minutes.
   */
  average_video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of unique buyers who placed order from your Video. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Video orders / effective video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalVideoPerformanceDetail sub-interface for ShopeeGetPrincipalVideoPerformanceResponseData
 */
export interface ShopeeGetPrincipalVideoPerformanceDetail {
  /**
   * Region code of this detail item.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this region item.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Video, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of Like clicks from all videos.
   */
  likes?: number;
  /**
   * Number of comments generated from all videos.
   */
  comments?: number;
  /**
   * Number of shares created from all videos.
   */
  share?: number;
  /**
   * Value of placed orders (paid and unpaid) from all videos in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Number of items sold from placed orders during your Video.
   */
  units_sold?: number;
  /**
   * Number of views from the video that lasted for more than 3 seconds.
   */
  effective_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Video.
   */
  atc_units?: number;
  /**
   * Average duration of your videos in minutes.
   */
  average_video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of unique buyers who placed order from your Video. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Video orders / effective video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetPrincipalVideoPerformanceResponseData sub-interface for ShopeeGetPrincipalVideoPerformanceResponse
 */
export interface ShopeeGetPrincipalVideoPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall video performance of the selected principal. Summary values are returned in USD when data exists.Note:- total_video_duration is returned only in summary.- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  summary?: ShopeeGetPrincipalVideoPerformanceSummary[];
  /**
   * List of region-level detail records that returns video performance metrics for each selected region within the requested date range.Note:- details do not include total_video_duration.- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  details?: ShopeeGetPrincipalVideoPerformanceDetail[];
}

/**
 * Response payload for get_principal_video_performance
 *
 * Queries video performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export type ShopeeGetPrincipalVideoPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetPrincipalVideoPerformanceResponseData>;

/**
 * ShopeeGetSessionLivestreamPerformanceSummary sub-interface for ShopeeGetSessionLivestreamPerformanceResponseData
 */
export interface ShopeeGetSessionLivestreamPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Total number of likes in the selected livestream sessions.
   */
  likes?: number;
  /**
   * Total number of comments acquired during the selected livestream sessions.
   */
  comments?: number;
  /**
   * Number of unique buyers who placed orders from the selected livestream sessions.
   */
  buyers?: number;
  /**
   * Number of placed orders (paid and unpaid) during the selected livestream sessions, including cancelled orders.
   */
  orders?: number;
  /**
   * Total views from the selected livestream sessions.
   */
  total_views?: number;
  /**
   * Total unique viewers from the selected livestream sessions.
   */
  unique_viewers?: number;
  /**
   * Total duration of the selected livestream sessions.
   */
  total_live_duration?: number;
  /**
   * Average time viewers watch the selected livestream sessions.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from the selected livestream sessions.
   */
  new_followers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during the selected livestream sessions.
   */
  atc_units?: number;
  /**
   * Number of items sold from placed orders during the selected livestream sessions.
   */
  units_sold?: number;
  /**
   * Value of placed orders (paid and unpaid) during the selected livestream sessions, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Value of placed orders (paid and unpaid) during the selected livestream sessions, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetSessionLivestreamPerformanceDetail sub-interface for ShopeeGetSessionLivestreamPerformanceResponseData
 */
export interface ShopeeGetSessionLivestreamPerformanceDetail {
  /**
   * Region code of the shop that owns this livestream session.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this livestream session item.
   */
  currency?: string;
  /**
   * Total number of likes in this livestream session.
   */
  likes?: number;
  /**
   * Total number of comments acquired during this livestream session.
   */
  comments?: number;
  /**
   * Number of unique buyers who placed orders from this livestream session.
   */
  buyers?: number;
  /**
   * Number of placed orders (paid and unpaid) during this livestream session, including cancelled orders.
   */
  orders?: number;
  /**
   * Shop identifier that owns this livestream session.
   */
  shop_id?: number;
  /**
   * Shop name that owns this livestream session.
   */
  shop_name?: string;
  /**
   * Livestream session identifier.
   */
  session_id?: number;
  /**
   * Livestream session name.
   */
  session_name?: string;
  /**
   * Total views from this livestream session.
   */
  total_views?: number;
  /**
   * Total unique viewers from this livestream session.
   */
  unique_viewers?: number;
  /**
   * Total duration of this livestream session.
   */
  total_live_duration?: number;
  /**
   * Average time viewers watch this livestream session.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from this livestream session.
   */
  new_followers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during this livestream session.
   */
  atc_units?: number;
  /**
   * Number of items sold from placed orders during this livestream session.
   */
  units_sold?: number;
  /**
   * Value of placed orders (paid and unpaid) during this livestream session, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Value of placed orders (paid and unpaid) during this livestream session, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetSessionLivestreamPerformanceResponseData sub-interface for ShopeeGetSessionLivestreamPerformanceResponse
 */
export interface ShopeeGetSessionLivestreamPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall livestream session performance of the selected sessions. Summary values are returned in USD when data exists.
   */
  summary?: ShopeeGetSessionLivestreamPerformanceSummary[];
  /**
   * List of livestream session-level detail records that returns performance metrics for each selected session within the requested date range.
   */
  details?: ShopeeGetSessionLivestreamPerformanceDetail[];
  /**
   * Offset to be used in the next request for fetching the next page of detail records.Notes:- Returned only when session_list is omitted or an empty array.- Calculated as cursor + returned_detail_count.- If returned_detail_count is less than page_size, it indicates there may be no more records.- If the request is already beyond the end of the result set, the API returns 0 detail records and next_cursor remains equal to the input cursor.
   */
  next_cursor?: number;
}

/**
 * Response payload for get_session_livestream_performance
 *
 * Queries livestream session performance data for the specified sessions within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and session-level detailed metrics.
 */
export type ShopeeGetSessionLivestreamPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetSessionLivestreamPerformanceResponseData>;

/**
 * ShopeeGetShopAffiliatePerformanceSummary sub-interface for ShopeeGetShopAffiliatePerformanceResponseData
 */
export interface ShopeeGetShopAffiliatePerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
  /**
   * Estimated total payout from placed affiliate marketing orders during the selected period.
   */
  estimated_commission_placed?: number;
  /**
   * Estimated total payout from confirmed affiliate marketing orders during the selected period.
   */
  estimated_commission_confirmed?: number;
  /**
   * Return on Investment = Sales Placed / Estimated Commission Placed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_placed?: number;
  /**
   * Return on Investment = Sales Confirmed / Estimated Commission Confirmed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_confirmed?: number;
  /**
   * Total number of unique buyers who placed affiliate marketing orders from your shop set during the selected period.
   */
  buyers_placed?: number;
  /**
   * Total number of unique buyers with confirmed affiliate marketing orders from your shop set during the selected period.
   */
  buyers_confirmed?: number;
  /**
   * Total number of unique new buyers who placed affiliate marketing orders from your shop set during the selected period.
   */
  new_buyers_placed?: number;
  /**
   * Total number of unique new buyers with confirmed affiliate marketing orders from your shop set during the selected period.
   */
  new_buyers_confirmed?: number;
}

/**
 * ShopeeGetShopAffiliatePerformanceDetail sub-interface for ShopeeGetShopAffiliatePerformanceResponseData
 */
export interface ShopeeGetShopAffiliatePerformanceDetail {
  /**
   * Region code of the shop.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this shop item.
   */
  currency?: string;
  /**
   * Shop identifier.
   */
  shop_id?: number;
  /**
   * Shop name.
   */
  shop_name?: string;
  /**
   * Total value of placed orders generated through affiliate marketing during the selected period.
   */
  sales_placed?: number;
  /**
   * Total value of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  sales_confirmed?: number;
  /**
   * Total number of items sold in placed orders generated through affiliate marketing during the selected period.
   */
  units_sold_placed?: number;
  /**
   * Total number of items sold in confirmed orders generated through affiliate marketing during the selected period.
   */
  units_sold_confirmed?: number;
  /**
   * Total number of placed orders generated through affiliate marketing during the selected period.
   */
  orders_placed?: number;
  /**
   * Total number of confirmed orders generated through affiliate marketing during the selected period. Confirmed orders are either non-Cash On Delivery (non-COD) orders that have been paid for or COD orders that have been confirmed for shipping (usually 30 mins after placing the order).
   */
  orders_confirmed?: number;
  /**
   * Estimated total payout from placed affiliate marketing orders during the selected period.
   */
  estimated_commission_placed?: number;
  /**
   * Estimated total payout from confirmed affiliate marketing orders during the selected period.
   */
  estimated_commission_confirmed?: number;
  /**
   * Return on Investment = Sales Placed / Estimated Commission Placed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_placed?: number;
  /**
   * Return on Investment = Sales Confirmed / Estimated Commission Confirmed. It can be used to evaluate the efficiency of your investment in affiliate marketing.
   */
  roi_confirmed?: number;
  /**
   * Total number of unique buyers who placed affiliate marketing orders from this shop during the selected period.
   */
  buyers_placed?: number;
  /**
   * Total number of unique buyers with confirmed affiliate marketing orders from this shop during the selected period.
   */
  buyers_confirmed?: number;
  /**
   * Total number of unique new buyers who placed affiliate marketing orders from this shop during the selected period.
   */
  new_buyers_placed?: number;
  /**
   * Total number of unique new buyers with confirmed affiliate marketing orders from this shop during the selected period.
   */
  new_buyers_confirmed?: number;
}

/**
 * ShopeeGetShopAffiliatePerformanceResponseData sub-interface for ShopeeGetShopAffiliatePerformanceResponse
 */
export interface ShopeeGetShopAffiliatePerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall affiliate performance of the requested shop set.
   */
  summary?: ShopeeGetShopAffiliatePerformanceSummary[];
  /**
   * List of shop-level detail records that returns affiliate performance metrics for each selected shop within the requested date range.
   */
  details?: ShopeeGetShopAffiliatePerformanceDetail[];
}

/**
 * Response payload for get_shop_affiliate_performance
 *
 * Queries affiliate performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics with placed-order and confirmed-order views.
 */
export type ShopeeGetShopAffiliatePerformanceResponse =
  ShopeeResponseCommon<ShopeeGetShopAffiliatePerformanceResponseData>;

/**
 * ShopeeGetShopLivestreamPerformanceSummary sub-interface for ShopeeGetShopLivestreamPerformanceResponseData
 */
export interface ShopeeGetShopLivestreamPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Livestream, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of unique buyers who placed order from your Livestream.
   */
  buyers?: number;
  /**
   * Total number of likes in your Livestream.
   */
  likes?: number;
  /**
   * Total number of comments acquired during your Livestream.
   */
  comments?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Number of items sold from placed orders during your Livestream.
   */
  units_sold?: number;
  /**
   * Total views from your Livestream.
   */
  total_views?: number;
  /**
   * Total duration of your Livestream.
   */
  total_live_duration?: number;
  /**
   * Total unique viewers from your Livestream.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Livestream.
   */
  atc_units?: number;
  /**
   * Total count of Livestream sessions in the selected period.
   */
  total_livestreams?: number;
  /**
   * Average duration of your Livestream.
   */
  average_live_duration?: number;
  /**
   * Average time viewers watch your Livestreams.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from your Livestream.
   */
  new_followers?: number;
  /**
   * Number of buyers who have not had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  new_buyers?: number;
  /**
   * Number of buyers who have already had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  existing_buyers?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetShopLivestreamPerformanceDetail sub-interface for ShopeeGetShopLivestreamPerformanceResponseData
 */
export interface ShopeeGetShopLivestreamPerformanceDetail {
  /**
   * Region code of the shop.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this shop item.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Livestream, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of unique buyers who placed order from your Livestream.
   */
  buyers?: number;
  /**
   * Total number of likes in your Livestream.
   */
  likes?: number;
  /**
   * Total number of comments acquired during your Livestream.
   */
  comments?: number;
  /**
   * Shop identifier.
   */
  shop_id?: number;
  /**
   * Shop name.
   */
  shop_name?: string;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled orders.
   */
  sales_gross?: number;
  /**
   * Number of items sold from placed orders during your Livestream.
   */
  units_sold?: number;
  /**
   * Total views from your Livestream.
   */
  total_views?: number;
  /**
   * Total duration of your Livestream.
   */
  total_live_duration?: number;
  /**
   * Total unique viewers from your Livestream.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Livestream.
   */
  atc_units?: number;
  /**
   * Total count of Livestream sessions in the selected period.
   */
  total_livestreams?: number;
  /**
   * Average duration of your Livestream.
   */
  average_live_duration?: number;
  /**
   * Average time viewers watch your Livestreams.
   */
  average_views_duration?: number;
  /**
   * Total followers gained from your Livestream.
   */
  new_followers?: number;
  /**
   * Number of buyers who have not had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  new_buyers?: number;
  /**
   * Number of buyers who have already had placed orders (including paid and unpaid) via your Livestream in the past 365 days.
   */
  existing_buyers?: number;
  /**
   * Value of placed orders (paid and unpaid) during your Livestream, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value excludes the refund amount for all non-cancelled and invalid items.
   */
  sales_net?: number;
  /**
   * Livestream orders / Livestream views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetShopLivestreamPerformanceResponseData sub-interface for ShopeeGetShopLivestreamPerformanceResponse
 */
export interface ShopeeGetShopLivestreamPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall livestream performance of the requested shop set. Summary values are returned in USD when data exists.
   */
  summary?: ShopeeGetShopLivestreamPerformanceSummary[];
  /**
   * List of shop-level detail records that returns livestream performance metrics for each selected shop within the requested date range.
   */
  details?: ShopeeGetShopLivestreamPerformanceDetail[];
}

/**
 * Response payload for get_shop_livestream_performance
 *
 * Queries livestream performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics.
 */
export type ShopeeGetShopLivestreamPerformanceResponse =
  ShopeeResponseCommon<ShopeeGetShopLivestreamPerformanceResponseData>;

/**
 * ShopeeGetShopSalesPerformanceDetailSummary sub-interface for ShopeeGetShopSalesPerformanceDetailResponseData
 */
export interface ShopeeGetShopSalesPerformanceDetailSummary {
  /**
   * currency code used for all monetary metrics of this shop item
   */
  currency?: string;
  /**
   * Total order value (paid and unpaid) within the selected time period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * The number of placed orders, including unpaid orders.
   */
  orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.
   */
  units_sold?: number;
  /**
   * Average Basket Size = Sales ÷ Orders. It measures average sales per order
   */
  average_basket_size?: number;
  /**
   * Items Per Order = Units Sold ÷ Orders. It measures the average number of items sold per transaction.
   */
  items_per_order?: number;
  /**
   * Average selling price=Sales ÷ Units Sold. It measures average sales per unit.
   */
  average_selling_price?: number;
  /**
   * Total number of times your item cards were clicked over the selected time period, on both App and PC. This metric is only available after 31/12/2023.
   */
  product_clicks?: number;
  /**
   * The number of visits to the product page.
   */
  product_views?: number;
  /**
   * Total number of unique visitors who viewed your shop, product detail pages, or item cards in Live or Video over the selected time period. Multiple views of one page by the same visitor is counted as 1 unique visitor. This metric is only available after 31/12/2023
   */
  unique_visitors?: number;
  /**
   * Item conversion rate = Units Sold ÷ Product Views.
   */
  item_conversion_rate?: number;
  /**
   * Number of orders divided by total number of product clicks, over the selected time period. This metric is only available after 31/12/2023
   */
  order_conversion_rate?: number;
  /**
   * Total flash sale order value (paid and unpaid) within the selected time period (done by both seller and platform flash sale), reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  flash_sale_sales?: number;
  /**
   * The number of placed orders, including unpaid orders.This includes flash sales done by seller and platform.
   */
  flash_sale_orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.This includes flash sales done by seller and platform.
   */
  flash_sale_units_sold?: number;
  /**
   * Total value of all placed orders using your vouchers, including shipping fees and excluding other promotions, over the selected time period.
   */
  voucher_sales?: number;
  /**
   * Total number of unique buyers who applied your vouchers at least once, in all placed orders over the selected time period.
   */
  voucher_buyers?: number;
  /**
   * Usage Rate = Vouchers Redeemed / Vouchers Claimed * 100%
   */
  voucher_usage_rate?: number;
  /**
   * Cost to Income Ratio (Voucher Cost/Gross Sales) measures the cost of vouchers relative to the revenue generated by the voucher from the sales of your shop's products.
   */
  voucher_cir?: number;
  /**
   * Total cost of vouchers applied at checkout, including shipping fees and excluding other promotions, over the selected time period.
   */
  voucher_cost?: number;
}

/**
 * ShopeeGetShopSalesPerformanceDetailDetail sub-interface for ShopeeGetShopSalesPerformanceDetailResponseData
 */
export interface ShopeeGetShopSalesPerformanceDetailDetail {
  /**
   * Shop identifier.
   */
  shop_id?: number;
  /**
   * Shop name.
   */
  shop_name?: string;
  /**
   * Shop region code.
   */
  shop_region_code?: string;
  /**
   * currency code used for all monetary metrics of this shop item
   */
  currency?: string;
  /**
   * Total order value (paid and unpaid) within the selected time period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * The number of placed orders, including unpaid orders.
   */
  orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.
   */
  units_sold?: number;
  /**
   * Average Basket Size = Sales ÷ Orders. It measures average sales per order
   */
  average_basket_size?: number;
  /**
   * Items Per Order = Units Sold ÷ Orders. It measures the average number of items sold per transaction.
   */
  items_per_order?: number;
  /**
   * Average selling price=Sales ÷ Units Sold. It measures average sales per unit.
   */
  average_selling_price?: number;
  /**
   * Total number of times your item cards were clicked over the selected time period, on both App and PC. This metric is only available after 31/12/2023.
   */
  product_clicks?: number;
  /**
   * The number of visits to the product page.
   */
  product_views?: number;
  /**
   * Total number of unique visitors who viewed your shop, product detail pages, or item cards in Live or Video over the selected time period. Multiple views of one page by the same visitor is counted as 1 unique visitor. This metric is only available after 31/12/2023
   */
  unique_visitors?: number;
  /**
   * Item conversion rate = Units Sold ÷ Product Views.
   */
  item_conversion_rate?: number;
  /**
   * Number of orders divided by total number of product clicks, over the selected time period. This metric is only available after 31/12/2023
   */
  order_conversion_rate?: number;
  /**
   * Average daily ATP% of top 80% GMV-contributing SKUs in the selected timeframe, the data will begin from 2023-10-01.
   */
  atp_top_skus_l1d?: number;
  /**
   * Average ATP% of top 80% GMV SKUs over a rolling 30-day period in the selected timeframe, the data will begin from 2023-10-01.
   */
  atp_top_skus_l30d?: number;
  /**
   * Average daily ATP% of all GMV-contributing SKUs in the selected timeframe, the data will begin from 2023-10-01.
   */
  atp_live_skus_l1d?: number;
  /**
   * Average ATP% of all-GMV SKUs over a rolling 30-day period in the selected timeframe, the data will begin from 2023-10-01.
   */
  atp_live_skus_l30d?: number;
  /**
   * Total flash sale order value (paid and unpaid) within the selected time period (done by both seller and platform flash sale), reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  flash_sale_sales?: number;
  /**
   * The number of placed orders, including unpaid orders.This includes flash sales done by seller and platform.
   */
  flash_sale_orders?: number;
  /**
   * The number of units associated with the orders placed, including unpaid orders.This includes flash sales done by seller and platform.
   */
  flash_sale_units_sold?: number;
  /**
   * Total value of all placed orders using your vouchers, including shipping fees and excluding other promotions, over the selected time period.
   */
  voucher_sales?: number;
  /**
   * Total number of unique buyers who applied your vouchers at least once, in all placed orders over the selected time period.
   */
  voucher_buyers?: number;
  /**
   * Usage Rate = Vouchers Redeemed / Vouchers Claimed * 100%
   */
  voucher_usage_rate?: number;
  /**
   * Cost to Income Ratio (Voucher Cost/Gross Sales) measures the cost of vouchers relative to the revenue generated by the voucher from the sales of your shop's products.
   */
  voucher_cir?: number;
  /**
   * Total cost of vouchers applied at checkout, including shipping fees and excluding other promotions, over the selected time period.
   */
  voucher_cost?: number;
}

/**
 * ShopeeGetShopSalesPerformanceDetailResponseData sub-interface for ShopeeGetShopSalesPerformanceDetailResponse
 */
export interface ShopeeGetShopSalesPerformanceDetailResponseData {
  /**
   * Aggregated summary metrics for the requested date range and selected granularity, representing the overall performance of the requested shop set.
   */
  summary?: ShopeeGetShopSalesPerformanceDetailSummary[];
  /**
   * List of shop-level detail records that returns performance metrics for each selected shop within the requested date range.
   */
  details?: ShopeeGetShopSalesPerformanceDetailDetail[];
}

/**
 * Response payload for get_shop_sales_performance_detail
 *
 * Queries the business performance data of stores under the specified entity within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and store-level detailed metrics.
 */
export type ShopeeGetShopSalesPerformanceDetailResponse =
  ShopeeResponseCommon<ShopeeGetShopSalesPerformanceDetailResponseData>;

/**
 * ShopeeGetShopVideoPerformanceSummary sub-interface for ShopeeGetShopVideoPerformanceResponseData
 */
export interface ShopeeGetShopVideoPerformanceSummary {
  /**
   * Currency code used for all amount-based metrics in the summary. Summary values are returned in USD.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Video, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of Like clicks from all videos.
   */
  likes?: number;
  /**
   * Number of comments generated from all videos.
   */
  comments?: number;
  /**
   * Number of shares created from all videos.
   */
  share?: number;
  /**
   * Value of placed orders (paid and unpaid) from all videos in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Number of items sold from placed orders during your Video.
   */
  units_sold?: number;
  /**
   * Number of views from the video that lasted for more than 3 seconds.
   */
  effective_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Total duration of your videos in minutes. This field is returned only in summary.
   */
  total_video_duration?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Video.
   */
  atc_units?: number;
  /**
   * Average duration of your videos in minutes.
   */
  average_video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of unique buyers who placed order from your Video. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Video orders / effective video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetShopVideoPerformanceDetail sub-interface for ShopeeGetShopVideoPerformanceResponseData
 */
export interface ShopeeGetShopVideoPerformanceDetail {
  /**
   * Region code of the shop.
   */
  region?: string;
  /**
   * Currency code used for all amount-based metrics of this shop item.
   */
  currency?: string;
  /**
   * Number of placed orders (paid and unpaid) during your Video, including cancelled orders.
   */
  orders?: number;
  /**
   * Number of Like clicks from all videos.
   */
  likes?: number;
  /**
   * Number of comments generated from all videos.
   */
  comments?: number;
  /**
   * Number of shares created from all videos.
   */
  share?: number;
  /**
   * Shop identifier.
   */
  shop_id?: number;
  /**
   * Shop name.
   */
  shop_name?: string;
  /**
   * Value of placed orders (paid and unpaid) from all videos in the period, reflecting the sales amount received by sellers after deducting seller rebates. Note: This value includes sales from cancelled and return/refund orders.
   */
  sales?: number;
  /**
   * Number of items sold from placed orders during your Video.
   */
  units_sold?: number;
  /**
   * Number of views from the video that lasted for more than 3 seconds.
   */
  effective_views?: number;
  /**
   * Number of video viewers in the selected period. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  unique_viewers?: number;
  /**
   * Number of Add To Cart button clicks for all products in the orange bag during your Video.
   */
  atc_units?: number;
  /**
   * Average duration of your videos in minutes.
   */
  average_video_duration?: number;
  /**
   * Average viewing duration per video in minutes.
   */
  average_views_duration?: number;
  /**
   * Number of unique buyers who placed order from your Video. Note: This data is unavailable when you select by month, by quarter, by year, customize date, or a non-full weekly range.
   */
  total_unique_buyers?: number;
  /**
   * Video orders / effective video views.
   */
  conversion_rate?: number;
}

/**
 * ShopeeGetShopVideoPerformanceResponseData sub-interface for ShopeeGetShopVideoPerformanceResponse
 */
export interface ShopeeGetShopVideoPerformanceResponseData {
  /**
   * Aggregated summary metrics for the requested date range, representing the overall video performance of the requested shop set. Summary values are returned in USD when data exists.Note:- total_video_duration is returned only in summary.- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  summary?: ShopeeGetShopVideoPerformanceSummary[];
  /**
   * List of shop-level detail records that returns video performance metrics for each selected shop within the requested date range.Note:- details do not include total_video_duration.- unique_viewers and total_unique_buyers are unavailable for customize, month, quarter, year, and non-full-week weekly ranges.
   */
  details?: ShopeeGetShopVideoPerformanceDetail[];
}

/**
 * Response payload for get_shop_video_performance
 *
 * Queries video performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics.
 */
export type ShopeeGetShopVideoPerformanceResponse = ShopeeResponseCommon<ShopeeGetShopVideoPerformanceResponseData>;
