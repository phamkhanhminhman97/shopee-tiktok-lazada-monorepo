/**
 * ShopeeGetClipVideoPerformanceVideo sub-interface for ShopeeGetClipVideoPerformanceRequest
 */
export interface ShopeeGetClipVideoPerformanceVideo {
  /**
   * Shop identifier that owns the specified videos.Limitations:- Required for every object in video_list.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * List of video identifiers to be queried under the specified shop.Limitations:- Required for every object in video_list.- Must contain at least one video_id.- Must contain at most 100 video_ids per object.- Null video_id values are rejected.- Duplicate video_id values across the whole request are rejected.- Across the whole request, the total number of unique video_ids must not exceed 100.
   */
  video_ids: number[];
  /**
   * Currency used for amount-based metrics for the specified videos.Limitations:- Optional for every object in video_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_clip_video_performance
 *
 * Queries video clip performance data for the specified videos within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and video-level detailed metrics.
 */
export interface ShopeeGetClipVideoPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for video metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of video clip query targets.Limitations:- Must contain at least one object.- Must contain at most 100 objects.- Every shop_id must belong to the specified principal_id.- Duplicate shop_id values are rejected.- Each object must provide a non-empty video_ids list.- Null video_id values are rejected.- Duplicate video_id values across the whole request are rejected.- The total number of unique video_ids across the whole request must not exceed 100.
   */
  video_list?: ShopeeGetClipVideoPerformanceVideo[];
  /**
   * Number of detail records to return in the current response page.Limitations:- Only supported when video_list is omitted or an empty array.- Default value is 100.- Must be between 1 and 200, inclusive.
   */
  page_size?: number;
  /**
   * Zero-based offset of the first detail record to return.Limitations:- Only supported when video_list is omitted or an empty array.- Default value is 0.- Must be greater than or equal to 0.
   */
  cursor?: number;
}

/**
 * ShopeeGetContentAffiliatePerformanceContent sub-interface for ShopeeGetContentAffiliatePerformanceRequest
 */
export interface ShopeeGetContentAffiliatePerformanceContent {
  /**
   * Shop identifier of the target shop to be queried.Limitations:- Required for every shop object in content_list.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * List of content IDs under the specified shop_id to be queried.Limitations:- Required for every shop object in content_list.- Must contain 1 to 100 values.- Duplicate content_id values are not allowed within the request.
   */
  content_ids: number[];
  /**
   * Currency used for amount-based metrics for the specified content items.Limitations:- Optional for every object in content_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_content_affiliate_performance
 *
 * Queries affiliate performance data for the specified content items within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and content-level detailed metrics with placed-order and confirmed-order views.
 */
export interface ShopeeGetContentAffiliatePerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried as daily data.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of shops and content IDs to be queried.Limitations:- If omitted or set to [], the API returns all eligible content under the specified principal_id.- If provided, must contain 1 to 100 shop entries.- Duplicate shop_id values are not allowed.- page_size and cursor are only supported when content_list is omitted or empty.
   */
  content_list?: ShopeeGetContentAffiliatePerformanceContent[];
  /**
   * Number of detail records to return in the current response page.Limitations:- Only supported when content_list is omitted or an empty array.- Default value is 100.- Must be between 1 and 200, inclusive.
   */
  page_size?: number;
  /**
   * Zero-based offset of the first detail record to return.Limitations:- Only supported when content_list is omitted or an empty array.- Default value is 0.- Must be greater than or equal to 0.
   */
  cursor?: number;
}

/**
 * ShopeeGetPrincipalAffiliatePerformanceRegion sub-interface for ShopeeGetPrincipalAffiliatePerformanceRequest
 */
export interface ShopeeGetPrincipalAffiliatePerformanceRegion {
  /**
   * Region code to be queried.Limitations:- Required for every region object in region_list.- Must be a valid region code supported by the API.- Must belong to the specified principal_id.
   */
  region: string;
  /**
   * Currency used for amount-based metrics for the region.Limitations:- Optional for every region object in region_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_principal_affiliate_performance
 *
 * Queries affiliate performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics with placed-order and confirmed-order views.
 */
export interface ShopeeGetPrincipalAffiliatePerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried as daily data.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * Optional list of principal regions to be queried.Limitations:- When omitted or empty, the API queries all regions belonging to the specified principal_id.- Must contain at most 100 region objects.- Every region must belong to the specified principal_id.- Duplicate region values are merged when they use the same currency.- The same region cannot appear with different currencies.
   */
  region_list?: ShopeeGetPrincipalAffiliatePerformanceRegion[];
}

/**
 * ShopeeGetPrincipalLivestreamPerformanceRegion sub-interface for ShopeeGetPrincipalLivestreamPerformanceRequest
 */
export interface ShopeeGetPrincipalLivestreamPerformanceRegion {
  /**
   * Region code to be queried.Limitations:- Required for every region object in region_list.- Must be a valid region code supported by the API.- Must belong to the specified principal_id.
   */
  region: string;
  /**
   * Currency used for amount-based metrics for the region.Limitations:- Optional for every region object in region_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_principal_livestream_performance
 *
 * Queries livestream performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export interface ShopeeGetPrincipalLivestreamPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for livestream metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried with the affiliate-compatible livestream granularity.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * Optional list of principal regions to be queried.Limitations:- When omitted or empty, the API queries all regions belonging to the specified principal_id except the aggregate regional bucket.- Must contain at most 100 region objects.- Every region must belong to the specified principal_id.- Duplicate region values are merged for filtering purposes.- Currency defaults to USD when omitted.- When the same region appears multiple times, the first provided currency is used.
   */
  region_list?: ShopeeGetPrincipalLivestreamPerformanceRegion[];
}

/**
 * ShopeeGetPrincipalSalesPerformanceDetailRegion sub-interface for ShopeeGetPrincipalSalesPerformanceDetailRequest
 */
export interface ShopeeGetPrincipalSalesPerformanceDetailRegion {
  /**
   * Target region code of the principal to be queried.Limitations:- Required for every region object in region_list.- Must be a valid region code or region name recognized by the API, such as SG or ID.
   */
  region: string;
  /**
   * Currency used for amount-based metrics for the region.Limitations:- Optional for every region object in region_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_principal_sales_performance_detail
 *
 * Queries the business performance data aggregated at principal level for the specified regions within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export interface ShopeeGetPrincipalSalesPerformanceDetailRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried as daily data.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of principal regions to be queried.Limitations:- Optional. If omitted or empty, the API queries all regions that belong to the specified principal.- Duplicate region entries are deduplicated internally.- The same region must not appear multiple times with different currency values.
   */
  region_list?: ShopeeGetPrincipalSalesPerformanceDetailRegion[];
}

/**
 * ShopeeGetPrincipalVideoPerformanceRegion sub-interface for ShopeeGetPrincipalVideoPerformanceRequest
 */
export interface ShopeeGetPrincipalVideoPerformanceRegion {
  /**
   * Region code to be queried.Limitations:- Required for every region object in region_list.- Must be a valid region code supported by the API.- Must belong to the specified principal_id.
   */
  region: string;
  /**
   * Currency used for amount-based metrics for the region.Limitations:- Optional for every region object in region_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_principal_video_performance
 *
 * Queries video performance data for the specified principal within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and region-level detailed metrics.
 */
export interface ShopeeGetPrincipalVideoPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for video metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * Optional list of principal regions to be queried.Limitations:- When omitted or empty, the API queries all regions belonging to the specified principal_id except the aggregate regional bucket.- Must contain at most 100 region objects.- Every region must belong to the specified principal_id.- Duplicate region values are merged when they use the same currency.- The same region cannot appear with different currencies.- Currency defaults to USD when omitted.
   */
  region_list?: ShopeeGetPrincipalVideoPerformanceRegion[];
}

/**
 * ShopeeGetSessionLivestreamPerformanceSession sub-interface for ShopeeGetSessionLivestreamPerformanceRequest
 */
export interface ShopeeGetSessionLivestreamPerformanceSession {
  /**
   * Shop identifier that owns the specified livestream sessions.Limitations:- Required for every object in session_list.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * List of livestream session identifiers to be queried under the specified shop.Limitations:- Required for every object in session_list.- Must contain at least one session_id.- Must contain at most 100 session_ids per object.- Null session_id values are rejected.- Duplicate session_id values across the whole request are rejected.- Across the whole request, the total number of unique session_ids must not exceed 100.
   */
  session_ids: number[];
  /**
   * Currency used for amount-based metrics for the specified livestream sessions.Limitations:- Optional for every object in session_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_session_livestream_performance
 *
 * Queries livestream session performance data for the specified sessions within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and session-level detailed metrics.
 */
export interface ShopeeGetSessionLivestreamPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for livestream metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried with the affiliate-compatible livestream granularity.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of livestream session query targets.Limitations:- Must contain at least one object.- Must contain at most 100 objects.- Every shop_id must belong to the specified principal_id.- Duplicate shop_id values are rejected.- Each object must provide a non-empty session_ids list.- Null session_id values are rejected.- Duplicate session_id values across the whole request are rejected.- The total number of unique session_ids across the whole request must not exceed 100.
   */
  session_list?: ShopeeGetSessionLivestreamPerformanceSession[];
  /**
   * Number of detail records to return in the current response page.Limitations:- Only supported when session_list is omitted or an empty array.- Default value is 100.- Must be between 1 and 200, inclusive.
   */
  page_size?: number;
  /**
   * Zero-based offset of the first detail record to return.Limitations:- Only supported when session_list is omitted or an empty array.- Default value is 0.- Must be greater than or equal to 0.
   */
  cursor?: number;
}

/**
 * ShopeeGetShopAffiliatePerformanceShop sub-interface for ShopeeGetShopAffiliatePerformanceRequest
 */
export interface ShopeeGetShopAffiliatePerformanceShop {
  /**
   * Shop identifier of the target shop to be queried.Limitations:- Required for every shop object when shop_list is provided as a non-empty array.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * Currency used for amount-based metrics for the shop.Limitations:- Optional for every shop object in shop_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_shop_affiliate_performance
 *
 * Queries affiliate performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics with placed-order and confirmed-order views.
 */
export interface ShopeeGetShopAffiliatePerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried as daily data.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of shops to be queried. This field is optional. If omitted or passed as an empty array, the API will return data for all shops under the specified principal_id.Limitations:- If provided, must contain at most 50 shops.- If omitted or passed as [], all shops under the specified principal_id will be queried.- If provided as a non-empty array, all shops must belong to the specified principal_id.Duplicate shops are not allowed.
   */
  shop_list?: ShopeeGetShopAffiliatePerformanceShop[];
}

/**
 * ShopeeGetShopLivestreamPerformanceShop sub-interface for ShopeeGetShopLivestreamPerformanceRequest
 */
export interface ShopeeGetShopLivestreamPerformanceShop {
  /**
   * Shop identifier of the target shop to be queried.Limitations:- Required for every shop object when shop_list is provided as a non-empty array.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * Currency used for amount-based metrics for the shop.Limitations:- Optional for every shop object in shop_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_shop_livestream_performance
 *
 * Queries livestream performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics.
 */
export interface ShopeeGetShopLivestreamPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for livestream metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried with the affiliate-compatible livestream granularity.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of shops to be queried. This field is optional. If omitted or passed as an empty array, the API will return data for all shops under the specified principal_id.Limitations:- If provided, must contain at most 50 shops.- If omitted or passed as [], all shops under the specified principal_id will be queried.- If provided as a non-empty array, all shops must belong to the specified principal_id.Duplicate shops are not allowed.
   */
  shop_list?: ShopeeGetShopLivestreamPerformanceShop[];
}

/**
 * ShopeeGetShopSalesPerformanceDetailShop sub-interface for ShopeeGetShopSalesPerformanceDetailRequest
 */
export interface ShopeeGetShopSalesPerformanceDetailShop {
  /**
   * Shop identifier of the target shop to be queried.Limitations:- Required for every shop object when shop_list is provided as a non-empty array.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * Currency used for amount-based metrics for the shop.Limitations:- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- default USD
   */
  currency?: string;
}

/**
 * Request parameters for get_shop_sales_performance_detail
 *
 * Queries the business performance data of stores under the specified entity within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and store-level detailed metrics.
 */
export interface ShopeeGetShopSalesPerformanceDetailRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date .- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: ["GMT+7", "GMT+8", "GMT-3"]- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range and is internally queried as daily data.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.-Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * List of shops to be queried. This field is optional. If omitted or passed as an empty array, the API will return data for all shops under the specified principal_id.Limitations:- If provided, must contain at most 50 shops.- If omitted or passed as [], all shops under the specified principal_id will be queried.- If provided as a non-empty array, all shops must belong to the specified principal_id.Duplicate shops are not allowed.
   */
  shop_list?: ShopeeGetShopSalesPerformanceDetailShop[];
}

/**
 * ShopeeGetShopVideoPerformanceShop sub-interface for ShopeeGetShopVideoPerformanceRequest
 */
export interface ShopeeGetShopVideoPerformanceShop {
  /**
   * Shop identifier of the target shop to be queried.Limitations:- Required for every shop object when shop_list is provided as a non-empty array.- Must belong to the specified principal_id.
   */
  shop_id: number;
  /**
   * Currency used for amount-based metrics for the shop.Limitations:- Optional for every shop object in shop_list.- Supported values are LOCAL and USD.- Invalid currency values are rejected as invalid_parameter.- Defaults to USD when omitted.
   */
  currency?: string;
}

/**
 * Request parameters for get_shop_video_performance
 *
 * Queries video performance data for the specified shops within the selected time range. Supports request granularity by day, week, month, quarter, year, or customize, and returns both overall summary metrics and shop-level detailed metrics.
 */
export interface ShopeeGetShopVideoPerformanceRequest {
  /**
   * Start date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be later than end_date.- Validation is based on the requested timezone.- The earliest selectable date is calculated as: current day in timezone - 1 day - 2 years.- The exact boundary rules depend on granularity:-- For customize, start_date must not be earlier than the earliest selectable date.-- For day, start_date must equal end_date.-- For week, start_date must be a Sunday.-- For month, start_date must be the first day of the month.-- For quarter, start_date must be the first day of the quarter.-- For year, start_date must be the first day of the year.
   */
  start_date: string;
  /**
   * End date of the requested period in YYYY-MM-DD format.Limitations:- Must use the YYYY-MM-DD format.- Must be a valid calendar date.- Must not be earlier than start_date.- Validation is based on the requested timezone.- For customize, end_date must not be later than the day before the current day in the requested timezone. The inclusive date range from start_date to end_date must not exceed 366 days.- For day, end_date must equal start_date.- For week, end_date must be within the selected week range: from start_date (Sunday) to the end of that Sunday-to-Saturday week, or to the latest selectable day if the week extends beyond today. Formally: startDate ≤ endDate ≤ min(startDate + 6 days, today - 1 day).- For month, end_date must be within the selected month: from the 1st day of the month to the last calendar day of that month, or to the latest selectable day for the current month. Formally: startDate ≤ endDate ≤ min(month end, today - 1 day).- For quarter, end_date must be within the selected quarter: from the 1st day of the quarter to the last calendar day of that quarter, or to the latest selectable day for the current quarter. Formally: startDate ≤ endDate ≤ min(quarter end, today - 1 day).- For year, end_date must be within the selected year: from January 1st to December 31st of that year, or to the latest selectable day for the current year. Formally: startDate ≤ endDate ≤ min(Dec 31, today - 1 day).
   */
  end_date: string;
  /**
   * Timezone used for date boundary calculation, selectable date validation, and timestamp conversion.Limitations:- Enum values: [\"GMT+7\", \"GMT+8\", \"GMT-3\"]- The API internally normalizes the open API timezone value for video metric queries.- All date validation rules are evaluated in the requested timezone.
   */
  timezone: string;
  /**
   * Aggregation granularity that determines the validation rules for the requested date range and the reporting period.Limitations:- Supported values are customize, day, week, month, quarter, and year.- customize is validated as a free date range.- day represents a single calendar day.- week requires a Sunday-based calendar week.- month requires a calendar month range.- quarter requires a calendar quarter range.- year requires a calendar year range.- Any other value is rejected as invalid_parameter.
   */
  granularity: string;
  /**
   * shops under the specified principal_id.Limitations:- If provided, must contain at most 50 shops.- If omitted or passed as [], all shops under the specified principal_id will be queried.- If provided as a non-empty array, all shops must belong to the specified principal_id.Duplicate shops are not allowed.
   */
  shop_list?: ShopeeGetShopVideoPerformanceShop[];
}
