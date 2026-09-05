/**
 * Request parameters for get_merchant_info
 *
 * Use this call to get information of merchant
 */
export type ShopeeGetMerchantInfoRequest = Record<string, never>;

/**
 * Request parameters for get_merchant_prepaid_account_list
 *
 * Use this api to get seller’s courier prepaid account.
 */
export interface ShopeeGetMerchantPrepaidAccountListRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.Min: 1 Max:10
   */
  page_size: number;
}

/**
 * ShopeeGetMerchantWarehouseListCursor sub-interface for ShopeeGetMerchantWarehouseListRequest
 */
export interface ShopeeGetMerchantWarehouseListCursor {
  next_id?: number;
  prev_id?: number;
  /**
   * The size of one page. Limit is [1,30].
   */
  page_size: number;
}

/**
 * Request parameters for get_merchant_warehouse_list
 *
 * Get merchant warehouse with page
 */
export interface ShopeeGetMerchantWarehouseListRequest {
  /**
   * // how to use DoubleSidedCursor// Get data for the first page: Please pass next_id = 0 or nil, page_size = {your page size}.// Get data for the next page: Please pass the Cursor from the previous response, and set prev_id=nil;// Get data for the prev page: Please pass the Cursor from the previous response, and set next_id=nil;// Stop fetching next data: The Cursor.next_id in the previous response is nil.// Stop fetching prev data: The Cursor.prev_id in the previous response is nil.
   */
  cursor: ShopeeGetMerchantWarehouseListCursor;
  /**
   * 1 means pickup warehouse2 means return warehouse
   */
  warehouse_type: number;
}

/**
 * Request parameters for get_merchant_warehouse_location_list
 *
 * get merchant warehouse location list
 */
export type ShopeeGetMerchantWarehouseLocationListRequest = Record<string, never>;

/**
 * Request parameters for get_shop_list_by_merchant
 *
 * Use this call to get shop_list bound to merchant_id.
 */
export interface ShopeeGetShopListByMerchantRequest {
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.No more than 500.
   */
  page_size: number;
}

/**
 * ShopeeGetWarehouseEligibleShopListCursor sub-interface for ShopeeGetWarehouseEligibleShopListRequest
 */
export interface ShopeeGetWarehouseEligibleShopListCursor {
  next_id?: number;
  prev_id?: number;
  /**
   * The size of one page. Limit is [1,30].
   */
  page_size: number;
}

/**
 * Request parameters for get_warehouse_eligible_shop_list
 *
 * Get eligible shop list by warehouse id
 */
export interface ShopeeGetWarehouseEligibleShopListRequest {
  /**
   * Warehouse address identifier.
   */
  warehouse_id: number;
  /**
   * 1 means pickup warehouse2 means return warehouse
   */
  warehouse_type: number;
  /**
   * // how to use DoubleSidedCursor// Get data for the first page: Please pass next_id = 0 or nil, page_size = {your page size}.// Get data for the next page: Please pass the Cursor from the previous response, and set prev_id=nil;// Get data for the prev page: Please pass the Cursor from the previous response, and set next_id=nil;// Stop fetching next data: The Cursor.next_id in the previous response is nil.// Stop fetching prev data: The Cursor.prev_id in the previous response is nil.
   */
  cursor: ShopeeGetWarehouseEligibleShopListCursor;
}
