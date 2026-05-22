//import { TiktokRequestCommon } from './config.request';

type RequestOrderListSortOrder = 'ASC' | 'DESC';

type RequestOrderListSortField = 'create_time' | 'update_time';

type RequestOrderListOrderStatus =
  | 'UNPAID'
  | 'ON_HOLD'
  | 'AWAITING_SHIPMENT'
  | 'AWAITING_COLLECTION'
  | 'PARTIALLY_SHIPPING'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'COMPLETED'
  | 'CANCELLED';

type RequestOrderListShippingType = 'TIKTOK' | 'SELLER';

interface RequestOrderList {
  /**
   * Query window counted backward from current time, in hours.
   * Shortcut for create_time_ge/create_time_lt.
   * Used only when createTimeGe/createTimeLt/updateTimeGe/updateTimeLt are not provided.
   */
  beforeHours?: number;
  /**
   * Number of orders to return per page. Default: 20.
   */
  pageSize?: number;
  /**
   * Page token from previous response.
   */
  pageToken?: string;
  /**
   * Sort order in query params. Available values: ASC, DESC.
   */
  sortOrder?: RequestOrderListSortOrder;
  /**
   * Sort field in query params. Available values: create_time, update_time.
   */
  sortField?: RequestOrderListSortField;
  /**
   * Order status filter. Omit or use ALL to query all statuses.
   */
  orderStatus?: RequestOrderListOrderStatus | 'ALL';
  /**
   * Filter orders with create_time greater than or equal to this Unix timestamp.
   */
  createTimeGe?: number;
  /**
   * Filter orders with create_time less than this Unix timestamp.
   */
  createTimeLt?: number;
  /**
   * Filter orders with update_time greater than or equal to this Unix timestamp.
   */
  updateTimeGe?: number;
  /**
   * Filter orders with update_time less than this Unix timestamp.
   */
  updateTimeLt?: number;
  /**
   * Shipping type filter. Available values from docs include TIKTOK.
   */
  shippingType?: RequestOrderListShippingType;
  /**
   * Buyer user ID filter.
   */
  buyerUserId?: string;
  /**
   * Filter orders with buyer cancellation request.
   */
  isBuyerRequestCancel?: boolean;
  /**
   * Warehouse IDs filter.
   */
  warehouseIds?: string[];
}

interface RequestShipOrder {
  order_id: string;
}

interface RequestOrderDetail {
  order_id_list: string[]; //Must be less than 50
}

export {
  RequestOrderList as TiktokRequestOrderList,
  RequestOrderListOrderStatus as TiktokRequestOrderListOrderStatus,
  RequestOrderListShippingType as TiktokRequestOrderListShippingType,
  RequestOrderListSortField as TiktokRequestOrderListSortField,
  RequestOrderListSortOrder as TiktokRequestOrderListSortOrder,
  RequestShipOrder as TiktokRequestShipOrder,
  RequestOrderDetail as TiktokRequestOrderDetail,
};
