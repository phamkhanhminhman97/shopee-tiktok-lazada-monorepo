import { ShopeeRequestCommon } from './config.request';

type OrderListTimeRangeField = 'create_time' | 'update_time';

type OrderListStatus = 'UNPAID' | 'READY_TO_SHIP' | 'PROCESSED' | 'SHIPPED' | 'COMPLETED' | 'IN_CANCEL' | 'CANCELLED' | 'INVOICE_PENDING';

type OrderListResponseOptionalField = 'order_status';

interface RequestOrderDetail extends ShopeeRequestCommon {
  order_sn_list: string[];
  response_optional_fields?: string[];
  request_order_status_pending?: boolean;
}

interface RequestOrderList extends ShopeeRequestCommon {
  time_range_field: OrderListTimeRangeField; //Available value: create_time, update_time.
  time_from: number; //The maximum date range that may be specified with the time_from and time_to fields is 15 days.
  time_to: number;
  page_size: number; //The limit of page_size if between 1 and 100.
  cursor?: string; //Default is "". If data is more than one page, the offset can be some entry to start next call.
  order_status?: OrderListStatus; //Available value: UNPAID/READY_TO_SHIP/PROCESSED/SHIPPED/COMPLETED/IN_CANCEL/CANCELLED/INVOICE_PENDING
  response_optional_fields?: OrderListResponseOptionalField; //Available value: order_status.
  request_order_status_pending?: boolean; //send True will let API support PENDING status, send False or don’t send will fallback to old logic.
  logistics_channel_id?: number; //The identity of logistic channel. Valid only for BR.
}

interface GetOrdersOptions {
  /**
   * Query window counted backward from current time, in minutes.
   * Shopee allows a maximum 15-day range. Default: 15 days.
   */
  beforeMinutes?: number;
  /**
   * The kind of time_from and time_to.
   * Available values: create_time, update_time. Default: create_time.
   */
  timeRangeField?: OrderListTimeRangeField;
  /**
   * Start timestamp. If provided with timeTo, it takes priority over beforeMinutes.
   * The maximum range between timeFrom and timeTo is 15 days.
   */
  timeFrom?: number;
  /**
   * End timestamp. If provided with timeFrom, it takes priority over beforeMinutes.
   * Default: current timestamp.
   */
  timeTo?: number;
  /**
   * Page size for each Shopee API call.
   * Available values: 1-100. Default: 100.
   */
  pageSize?: number;
  /**
   * Starting cursor. Default is empty string.
   */
  cursor?: string;
  /**
   * Order status filter. Use ALL or omit this field to query all statuses.
   * Available values: ALL, UNPAID, READY_TO_SHIP, PROCESSED, SHIPPED, COMPLETED, IN_CANCEL, CANCELLED, INVOICE_PENDING.
   */
  orderStatus?: OrderListStatus | 'ALL';
  /**
   * Optional fields in response.
   * Available value: order_status.
   */
  responseOptionalFields?: OrderListResponseOptionalField | OrderListResponseOptionalField[];
  /**
   * Compatible parameter during migration period.
   * Send true to let API support PENDING status order.
   */
  requestOrderStatusPending?: boolean;
  /**
   * The identity of logistic channel. Valid only for BR.
   */
  logisticsChannelId?: number;
}

interface RequestEscrowDetail extends ShopeeRequestCommon {
  order_sn: string;
}

interface RequestSearchPackageListFilter {
  package_status?: number;
  product_location_ids?: string[];
  logistics_channel_ids?: number[];
  fulfillment_type?: number;
  invoice_pending?: boolean;
  sorting_group?: number;
  order_type?: number;
  is_pre_order?: number;
  shipping_priority?: number;
}

interface RequestSearchPackageListPagination {
  page_size: number;
  cursor?: string;
}

interface RequestSearchPackageListSort {
  sort_type?: number;
  ascending?: boolean;
}

interface RequestSearchPackageList {
  filter?: RequestSearchPackageListFilter;
  pagination: RequestSearchPackageListPagination;
  sort?: RequestSearchPackageListSort;
}

interface RequestCancelOrderItem {
  item_id: number;
  model_id: number;
}

/**
 * cancel_reason applicable values:
 *   OUT_OF_STOCK
 *   CUSTOMER_REQUEST
 *   UNDELIVERABLE_AREA  (TW and MY only)
 *   COD_NOT_SUPPORTED
 *
 * item_list is required when cancel_reason is OUT_OF_STOCK.
 */
interface RequestCancelOrder {
  order_sn: string;
  cancel_reason: 'OUT_OF_STOCK' | 'CUSTOMER_REQUEST' | 'UNDELIVERABLE_AREA' | 'COD_NOT_SUPPORTED';
  item_list?: RequestCancelOrderItem[];
}

export {
  RequestOrderDetail as ShopeeRequestOrderDetail,
  RequestOrderList as ShopeeRequestOrderList,
  GetOrdersOptions as ShopeeGetOrdersOptions,
  OrderListStatus as ShopeeOrderListStatus,
  OrderListTimeRangeField as ShopeeOrderListTimeRangeField,
  RequestEscrowDetail as ShopeeRequestEscrowDetail,
  RequestSearchPackageList as ShopeeRequestSearchPackageList,
  RequestCancelOrder as ShopeeRequestCancelOrder,
};
