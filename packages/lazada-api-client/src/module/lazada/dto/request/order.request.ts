/**
 * Parameters for GetOrders API (/orders/get)
 * API docs: https://open.lazada.com/apps/doc/api?docId=108920&docType=1
 */
export interface GetOrdersRequest {
  /**
   * Limits the returned orders to those updated after or on the specified date.
   * ISO 8601 format. Either `update_after` or `created_after` is mandatory.
   * Example: 2018-02-10T16:00:00+08:00
   */
  update_after?: string;

  /**
   * Limits the returned orders to those updated before or on the specified date.
   * ISO 8601 format. Optional.
   */
  update_before?: string;

  /**
   * Limits the returned orders to those created after or on the specified date.
   * ISO 8601 format. Either `update_after` or `created_after` is mandatory.
   */
  created_after?: string;

  /**
   * Limits the returned orders to those created before or on the specified date.
   * ISO 8601 format. Optional.
   */
  created_before?: string;

  /**
   * Filter orders by status.
   * Possible values: unpaid, pending, canceled, ready_to_ship, delivered, returned, shipped,
   * failed, topack, toship, shipping, lost
   * Use 'all' to get all statuses.
   */
  status?: string;

  /**
   * Sort direction. Possible values: ASC, DESC.
   */
  sort_direction?: 'ASC' | 'DESC';

  /**
   * Sort column. Possible values: created_at, updated_at.
   */
  sort_by?: 'created_at' | 'updated_at';

  /**
   * Number of orders to skip at the beginning of the list.
   * Maximum value: 5000
   */
  offset?: number;

  /**
   * Maximum number of orders to return. Maximum value: 100.
   */
  limit?: number;
}

/**
 * Parameters for GetOrder API (/order/get)
 */
export interface GetOrderRequest {
  /**
   * The order ID assigned by Seller Center.
   */
  order_id: number | string;
}

/**
 * Parameters for GetOrderItems API (/order/items/get)
 */
export interface GetOrderItemsRequest {
  /**
   * The ID of the order to retrieve items for.
   */
  order_id: number | string;
}

/**
 * Parameters for GetMultipleOrderItems API (GET /orders/items/get)
 * Use this API to get the item information of one or more orders (max 50 at a time).
 */
export interface GetMultipleOrderItemsRequest {
  /**
   * Comma-separated list of order identifiers in square brackets.
   * Example: "[123456,789012]"
   * Maximum 50 order IDs at a time.
   */
  order_ids: string;
}

/**
 * Parameters for PackOrder API (/order/fulfill/pack)
 * Action: SetToPack
 */
export interface PackOrderRequest {
  /**
   * The ID of the order to pack.
   */
  order_id: number | string;

  /**
   * List of order item IDs to pack.
   */
  order_item_ids: (number | string)[];

  /**
   * The shipment provider code (optional). Get via GetShipmentProviders API.
   */
  shipment_provider?: string;

  /**
   * The delivery type for the shipment.
   */
  delivery_type?: string;
}

/**
 * Parameters for RecreatePackage (repack) API
 * Action: SetRepack
 */
export interface RecreatePackageRequest {
  /**
   * The ID of the order to repack.
   */
  order_id: number | string;

  /**
   * List of order item IDs to repack.
   */
  order_item_ids: (number | string)[];
}

/**
 * Parameters for ReadyToShip API (/order/package/rts)
 * Action: SetRTS
 */
export interface ReadyToShipRequest {
  /**
   * The ID of the order.
   */
  order_id: number | string;

  /**
   * The ID of the package to set as ready to ship.
   */
  package_id: string;

  /**
   * Tracking number for the shipment.
   */
  tracking_number?: string;

  /**
   * Shipment provider code.
   */
  shipment_provider?: string;
}

/**
 * Parameters for GetShipmentProviders API (/order/shipment/providers/get)
 */
export interface GetShipmentProvidersRequest {
  /**
   * The ID of the order to get available shipment providers for.
   */
  order_id: number | string;
}

/**
 * Parameters for PrintAWB API (/order/document/awb/pdf/get)
 * Get shipping label / AWB document as PDF
 */
export interface PrintAWBRequest {
  /**
   * The ID of the order.
   */
  order_id: number | string;

  /**
   * The ID of the package.
   */
  package_id: string;
}

/**
 * Parameters for GetShippingLabel API (/order/package/document/get) - V2
 */
export interface GetShippingLabelRequest {
  /**
   * List of package IDs to print labels for.
   */
  package_ids: string[];
}

/**
 * Parameters for TraceOrder API (/logistic/order/trace)
 */
export interface TraceOrderRequest {
  /**
   * The ID of the order to trace.
   */
  order_id: number | string;

  /**
   * The ID of the package (optional).
   */
  package_id?: string;
}

/**
 * Parameters for ConfirmDeliveryForDBS API
 * Delivered by Seller - confirm successful delivery
 */
export interface ConfirmDeliveryForDBSRequest {
  /**
   * The ID of the order.
   */
  order_id: number | string;

  /**
   * The ID of the order item(s) to confirm delivery for.
   */
  order_item_ids: (number | string)[];
}

/**
 * Parameters for FailedDeliveryForDBS API
 * Delivered by Seller - confirm failed delivery
 */
export interface FailedDeliveryForDBSRequest {
  /**
   * The ID of the order.
   */
  order_id: number | string;

  /**
   * The ID of the order item(s) to mark as failed delivery.
   */
  order_item_ids: (number | string)[];
}

/**
 * Parameters for GetOrderDocument API
 */
export interface GetOrderDocumentRequest {
  /**
   * The type of document to retrieve.
   */
  document_type: 'invoice' | 'shipping_label' | 'awb_pdf';

  /**
   * The ID of the order.
   */
  order_id: number | string;
}

/**
 * Order status enumeration matching Lazada API values (lowercase for API calls).
 */
export enum OrderStatusFilter {
  ALL = 'all',
  UNPAID = 'unpaid',
  PENDING = 'pending',
  CANCELED = 'canceled',
  READY_TO_SHIP = 'ready_to_ship',
  DELIVERED = 'delivered',
  RETURNED = 'returned',
  SHIPPED = 'shipped',
  FAILED = 'failed',
  TOPACK = 'topack',
  TOSHIP = 'toship',
  SHIPPING = 'shipping',
  LOST = 'lost',
  PACKED = 'packed',
}

/**
 * Sort direction enum
 */
export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * Sort column enum
 */
export enum SortBy {
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
}
