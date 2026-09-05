/**
 * Request parameters for get_bound_whs_info
 *
 * get bound warehouse by shop id
 */
export type ShopeeGetBoundWhsInfoRequest = Record<string, never>;

/**
 * Request parameters for get_current_inventory
 *
 * Get Seller Center Current Inventory Page Data
 */
export interface ShopeeGetCurrentInventoryRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. If empty, the default value is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.If empty, the default value is 10. The value should be between 1 and 100.
   */
  page_size?: number;
  /**
   * 0-All data；1-Product Name；2-SKU ID；3-Variations；4-Item ID
   */
  search_type?: number;
  /**
   * Bind Value and Search_type
   */
  keyword?: string;
  /**
   * Whs ID list, comma-separated
   */
  whs_ids?: string[];
  /**
   * Blank-All；0-No；1-Yes
   */
  not_moving_tag?: number;
  /**
   * Blank-All；0-No；1-Yes
   */
  inbound_pending_approval?: number;
  /**
   * Blank-All；0-No；1-Yes
   */
  products_with_inventory?: number;
  /**
   * Category id. Here you need to call the get_category API to retrieve the first-tier category_id.
   */
  category_id?: number;
  /**
   * 1-Low Stock & No Sellable stock; 2-Low Stock & To replenish; 3-Low Stock & Replenished; 4-Excess
   */
  stock_levels?: string;
  /**
   * The warehouse region you want to query, can only query one region in a requestOptional value: BR、CN、ID、MY、MX、TH、TW、PH、VN、SGIf do not pass, will get error "block by gateway due to invalid cid"
   */
  whs_region: string;
}

/**
 * Request parameters for get_expiry_report
 *
 * Seller Center Expiry Report page data
 */
export interface ShopeeGetExpiryReportRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. If empty, the default value is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.If empty, the default value is 10. The value should be between 1 and 40.
   */
  page_size?: number;
  whs_ids?: string[];
  /**
   * 0-Expired，2-Expiring，4-expiry_blocked，5-damaged，6-normal。Multiple selections allowed, separated by commas.
   */
  expiry_status?: string;
  /**
   * Only Level 1 Category can be filtered
   */
  category_id_l1?: number;
  sku_id?: string;
  item_id?: string;
  variation?: string;
  item_name?: string;
  /**
   * Num value: BR、CN、ID、MY、MX、TH、TW、PH、VN、SGIf do not pass, will get error "block by gateway due to invalid cid"
   */
  whs_region: string;
}

/**
 * Request parameters for get_fulfillment_mapping_inventory_list
 *
 * This API is designed for sellers using Fulfillment Mapping and their ERP systems.It allows callers to query the corresponding mapping and inventory information using the MTSKU ID of either a Bundle SKU or a Parent SKU, supporting automated inventory reconciliation and planning, improving Parent SKU inventory visibility, and reducing manual operations and cross-channel overselling risks.
 */
export interface ShopeeGetFulfillmentMappingInventoryListRequest {
  /**
   * The MTSKU ID of either a Bundle SKU or a Parent SKU in a fulfillment mapping relationship.Up to 100 comma-separated MTSKU IDs can be queried in one request.All MTSKU IDs must belong to the specified shop_id.When mtsku_ids is omitted, the API returns all fulfillment mapping records with available Bundle SKU stock under the shop. When mtsku_ids is provided, the API returns all matching fulfillment mapping records for the specified Bundle or Parent MTSKUs.For example, given the mapping relationship MTSKU A = MTSKU B + MTSKU C, MTSKU A is the Bundle SKU, while MTSKU B and MTSKU C are its Parent SKUs. The API can be queried using the MTSKU ID of A, B, or C. Regardless of which SKU is queried, the API returns the fulfillment mapping inventory information of MTSKU A and its Parent SKUs.
   */
  mtsku_ids?: string[];
  /**
   * The number of records returned by each query. You can fill in value from [1-100].If not filled in, the default value is 100.
   */
  page_size?: number;
  /**
   * The cursor for the next page query. The next_cursor will be returned from the response. If this field is not provided, the query starts from the first page by default.
   */
  next_cursor?: string;
}

/**
 * Request parameters for get_stock_aging
 *
 * Get Seller Center Stock Aging page data
 */
export interface ShopeeGetStockAgingRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. If empty, the default value is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.If empty, the default value is 10. The value should be between 1 and 100.
   */
  page_size?: number;
  /**
   * 1-Product Name；2-SKU ID；3-Variations；4-Item ID
   */
  search_type?: number;
  /**
   * bound with search_type
   */
  keyword?: string;
  /**
   * split by comma
   */
  whs_ids?: string[];
  /**
   * 0-false；1-true
   */
  aging_storage_tag?: number;
  /**
   * 0-false；1-true
   */
  excess_storage_tag?: number;
  /**
   * L1-level product category ID. You need to call the get_category API to obtain the first-level category_id
   */
  category_id?: number;
  /**
   * BR、CN、ID、MY、MX、TH、TW、PH、VN、SGIf do not pass, will get error "block by gateway due to invalid cid"
   */
  whs_region: string;
}

/**
 * Request parameters for get_stock_movement
 *
 * Get Seller Center，Stock Movement page data
 */
export interface ShopeeGetStockMovementRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. If empty, the default value is 1.
   */
  page_no?: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.If empty, the default value is 10. The value should be between 1 and 20.
   */
  page_size?: number;
  /**
   * Start date in YYYY-MM-DD format. Only data within the past 1 year can be queried, and the time range must not exceed 90 days.
   */
  start_time: string;
  /**
   * End date in YYYY-MM-DD format. Only data within the past 1 year can be queried, and the time range must not exceed 90 days.
   */
  end_time: string;
  /**
   * Multiple warehouse_id values should be separated by commas.
   */
  whs_ids?: string[];
  /**
   * L1-level category_id. You need to call the get_category API to retrieve the first-level category_id.
   */
  category_id_l1?: number;
  sku_id?: string;
  item_id?: string;
  /**
   * Product Name Filter
   */
  item_name?: string;
  variation?: string;
  /**
   * Warehouse Region. Enum values: BR, CN, ID, MY, MX, TH, TW, PH, VN, SGIf do not pass, will get error "block by gateway due to invalid cid"
   */
  whs_region: string;
}
