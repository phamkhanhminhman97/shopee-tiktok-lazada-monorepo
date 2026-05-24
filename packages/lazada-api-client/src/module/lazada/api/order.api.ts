import { LAZADA_PATH, LZD_ALGORITHM } from '../common/constant';
import * as LazadaHelper from '../common/helper';
import { LazadaConfig } from '../dto/request/config.request';
import {
  GetOrdersRequest,
  GetOrderRequest,
  GetOrderItemsRequest,
  GetMultipleOrderItemsRequest,
  PackOrderRequest,
  RecreatePackageRequest,
  ReadyToShipRequest,
  GetShipmentProvidersRequest,
  PrintAWBRequest,
  GetShippingLabelRequest,
  TraceOrderRequest,
  ConfirmDeliveryForDBSRequest,
  FailedDeliveryForDBSRequest,
} from '../dto/request/order.request';
import {
  LazadaOrderDetail,
  LazadaResponseGetOrders,
  LazadaResponseGetOrder,
  LazadaResponseGetOrderItems,
  LazadaResponseGetMultipleOrderItems,
  LazadaResponsePackOrder,
  LazadaResponseRTSOrder,
  LazadaResponseShipmentProviders,
  LazadaResponsePrintAWB,
  LazadaResponseShippingLabel,
  LazadaResponseTraceOrder,
  LazadaResponseConfirmDeliveryDBS,
  LazadaResponseFailedDeliveryDBS,
  LazadaResponseRecreatePackage,
} from '../dto/response/order.response';

// ============================================================
// Helper to build base payload with auth parameters
// ============================================================

function buildBasePayload(info: LazadaConfig): Record<string, any> {
  return {
    app_key: info.appKey,
    sign_method: LZD_ALGORITHM,
    timestamp: LazadaHelper.getTimestampMilisec(),
    access_token: info.appAccessToken,
  };
}

// ============================================================
// GetOrders API - GET /orders/get
// Use this API to get the list of items for a range of orders.
// ============================================================

/**
 * Get a list of orders with optional filters.
 *
 * Either `update_after` or `created_after` is mandatory.
 * Maximum limit is 100 per request. Use offset for pagination.
 *
 * @param info - Lazada client configuration
 * @param params - Optional filter parameters
 * @returns List of orders matching the criteria
 */
export async function getOrders(
  info: LazadaConfig,
  params?: GetOrdersRequest
): Promise<LazadaResponseGetOrders> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
  };

  if (params) {
    if (params.update_after) obj.update_after = params.update_after;
    if (params.update_before) obj.update_before = params.update_before;
    if (params.created_after) obj.created_after = params.created_after;
    if (params.created_before) obj.created_before = params.created_before;
    if (params.status) obj.status = params.status;
    if (params.sort_direction) obj.sort_direction = params.sort_direction;
    if (params.sort_by) obj.sort_by = params.sort_by;
    if (params.offset !== undefined) obj.offset = params.offset;
    if (params.limit !== undefined) obj.limit = params.limit;
  }

  return LazadaHelper.httpGet(
    LAZADA_PATH.ORDERS_GET,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseGetOrders>;
}

/**
 * Get all orders by paginating through all pages.
 * Automatically handles offset/limit pagination up to the total count.
 *
 * @param info - Lazada client configuration
 * @param params - Optional filter parameters (limit will be overridden for pagination)
 * @param onProgress - Optional callback for progress tracking (receives current page info)
 * @returns Complete list of all orders matching the criteria
 */
export async function getAllOrders(
  info: LazadaConfig,
  params?: Omit<GetOrdersRequest, 'offset' | 'limit'>,
  onProgress?: (page: number, total: number, countSoFar: number) => void
): Promise<LazadaOrderDetail[]> {
  const allOrders: LazadaOrderDetail[] = [];
  let offset = 0;
  const pageSize = 100;
  let totalCount = 0;
  let page = 0;

  while (true) {
    const response = await getOrders(info, {
      ...params,
      offset,
      limit: pageSize,
    });

    const data = response?.data;
    if (!data) break;

    if (page === 0) {
      totalCount = data.countTotal || 0;
    }

    const orders = data.orders;
    if (!orders || orders.length === 0) break;

    allOrders.push(...orders);
    page++;

    if (onProgress) {
      onProgress(page, totalCount, allOrders.length);
    }

    if (allOrders.length >= totalCount) break;

    offset += pageSize;
    if (offset > 5000) break; // Maximum offset is 5000 per API docs
  }

  return allOrders;
}

// ============================================================
// GetOrder API (Single Order) - GET /order/get
// Use this API to get the list of items for a single order.
// ============================================================

/**
 * Get details of a single order by its ID.
 *
 * @param info - Lazada client configuration
 * @param order_id - The order ID
 * @returns Order details
 */
export async function getOrderById(
  info: LazadaConfig,
  order_id: string | number
): Promise<LazadaResponseGetOrder> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_id,
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.SINGLE_ORDER_GET,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseGetOrder>;
}

// ============================================================
// GetOrderItems API - GET /order/items/get
// Get the list of items for a specific order.
// ============================================================

/**
 * Get order items for a specific order.
 *
 * Note: Lazada does not count the number of items in the order,
 * but responds with each item as a separate object (unique order_item_id).
 *
 * @param info - Lazada client configuration
 * @param order_id - The ID of the order to retrieve items for
 * @returns List of order items
 */
export async function getOrderItems(
  info: LazadaConfig,
  order_id: string | number
): Promise<LazadaResponseGetOrderItems> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_id,
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.SINGLE_ORDER_ITEM_GET,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseGetOrderItems>;
}

// ============================================================
// GetMultipleOrderItems API
// Get order items for multiple orders.
// ============================================================

/**
 * Get order items for multiple orders.
 *
 * @param info - Lazada client configuration
 * @param order_ids - Comma-separated string of order IDs
 * @returns Order items grouped by order
 */
export async function getMultipleOrderItems(
  info: LazadaConfig,
  order_ids: string
): Promise<LazadaResponseGetMultipleOrderItems> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_ids,
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.ORDERS_ITEMS_GET,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseGetMultipleOrderItems>;
}

// ============================================================
// GetShipmentProviders API - GET /order/shipment/providers/get
// Get available shipment providers for a specific order.
// ============================================================

/**
 * Get the available shipment/logistics providers for a specific order.
 * This must be called before packing to determine the appropriate provider.
 *
 * @param info - Lazada client configuration
 * @param order_id - The ID of the order
 * @returns List of available shipment providers
 */
export async function getShipmentProviders(
  info: LazadaConfig,
  order_id: string | number
): Promise<LazadaResponseShipmentProviders> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_id,
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.SHIPMENT_PROVIDERS,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseShipmentProviders>;
}

// ============================================================
// PackOrder API (SetToPack) - POST /order/fulfill/pack
// Pack order items to create packages.
// ============================================================

/**
 * Pack order items - creates packages for the specified items.
 *
 * **Important**: Must call `getOrderItems` before this step to get
 * the list of order item IDs that need to be packed.
 *
 * @param info - Lazada client configuration
 * @param params - Packing parameters (order_id, order_item_ids, shipment_provider, delivery_type)
 * @returns Result of the pack operation including package IDs
 */
export async function packOrder(
  info: LazadaConfig,
  params: PackOrderRequest
): Promise<LazadaResponsePackOrder> {
  const payload = {
    ...buildBasePayload(info),
    order_id: String(params.order_id),
    order_item_ids: JSON.stringify(params.order_item_ids),
    ...(params.shipment_provider && {
      shipment_provider: params.shipment_provider,
    }),
    ...(params.delivery_type && { delivery_type: params.delivery_type }),
    action: 'SetToPack',
  };

  return LazadaHelper.executePOST(
    LAZADA_PATH.FULFILL_PACK,
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponsePackOrder>;
}

// ============================================================
// RecreatePackage API (SetRepack) - POST /order/fulfill/pack
// Request to repack order items when a repack is needed.
// ============================================================

/**
 * Request to repack order items.
 *
 * When an order is in `packed` status and needs modification,
 * use this action to revert to `repacked` status, then call `packOrder` again.
 *
 * @param info - Lazada client configuration
 * @param params - Repack parameters (order_id, order_item_ids)
 * @returns Result of the repack operation
 */
export async function recreatePackage(
  info: LazadaConfig,
  params: RecreatePackageRequest
): Promise<LazadaResponseRecreatePackage> {
  const payload = {
    ...buildBasePayload(info),
    order_id: String(params.order_id),
    order_item_ids: JSON.stringify(params.order_item_ids),
    action: 'SetRepack',
  };

  return LazadaHelper.executePOST(
    LAZADA_PATH.FULFILL_PACK,
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponseRecreatePackage>;
}

// ============================================================
// ReadyToShip API (SetRTS) - POST /order/package/rts
// Set packaged orders to ready-to-ship status.
// ============================================================

/**
 * Set a package as ready to ship (ReadyToShip / SetRTS).
 *
 * This updates the order status from `packed` to `ready_to_ship_pending`,
 * then the system automatically transitions to `ready_to_ship`.
 *
 * @param info - Lazada client configuration
 * @param params - RTS parameters (order_id, package_id, tracking_number, shipment_provider)
 * @returns Result of the RTS operation
 */
export async function setReadyToShip(
  info: LazadaConfig,
  params: ReadyToShipRequest
): Promise<LazadaResponseRTSOrder> {
  const payload: Record<string, any> = {
    ...buildBasePayload(info),
    order_id: String(params.order_id),
    package_id: params.package_id,
    ...(params.tracking_number && {
      tracking_number: params.tracking_number,
    }),
    ...(params.shipment_provider && {
      shipment_provider: params.shipment_provider,
    }),
    action: 'SetRTS',
  };

  return LazadaHelper.executePOST(
    LAZADA_PATH.READY_TO_SHIP,
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponseRTSOrder>;
}

// ============================================================
// PrintAWB API - GET /order/document/awb/pdf/get
// Get AWB (Air Waybill) PDF document for a package.
// ============================================================

/**
 * Get the AWB (Air Waybill) shipping label PDF for a package.
 *
 * @param info - Lazada client configuration
 * @param params - AWB parameters (order_id, package_id)
 * @returns Base64 encoded PDF content
 */
export async function printAWB(
  info: LazadaConfig,
  params: PrintAWBRequest
): Promise<LazadaResponsePrintAWB> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_id: params.order_id,
    package_id: params.package_id,
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.SHIPPING_LABEL_GET,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponsePrintAWB>;
}

// ============================================================
// GetShippingLabel V2 API - POST /order/package/document/get
// Get shipping labels for multiple packages (V2).
// ============================================================

/**
 * Get shipping labels for multiple packages (V2 API).
 *
 * @param info - Lazada client configuration
 * @param params - Shipping label parameters (package_ids)
 * @returns List of package documents with base64 encoded files
 */
export async function getShippingLabel(
  info: LazadaConfig,
  params: GetShippingLabelRequest
): Promise<LazadaResponseShippingLabel> {
  const payload: Record<string, any> = {
    ...buildBasePayload(info),
    package_ids: JSON.stringify(params.package_ids),
  };

  return LazadaHelper.executePOST(
    LAZADA_PATH.SHIPPING_LABEL_V2,
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponseShippingLabel>;
}

// ============================================================
// TraceOrder API - GET /logistic/order/trace
// Trace the logistics status of a package.
// ============================================================

/**
 * Trace the logistics status of an order/package.
 *
 * Provides detailed tracking information including timestamps,
 * locations, and status codes for each logistics event.
 *
 * @param info - Lazada client configuration
 * @param params - Trace parameters (order_id, optional package_id)
 * @returns Detailed tracking information
 */
export async function traceOrder(
  info: LazadaConfig,
  params: TraceOrderRequest
): Promise<LazadaResponseTraceOrder> {
  const obj: Record<string, any> = {
    ...buildBasePayload(info),
    order_id: params.order_id,
    ...(params.package_id && { package_id: params.package_id }),
  };

  return LazadaHelper.httpGet(
    LAZADA_PATH.TRACE_ORDER,
    obj,
    info.appSecret
  ) as unknown as Promise<LazadaResponseTraceOrder>;
}

// ============================================================
// ConfirmDeliveryForDBS API
// Confirm successful delivery for Delivered by Seller (DBS) orders.
// ============================================================

/**
 * Confirm delivery successful for Delivered by Seller (DBS) model.
 *
 * Use this when the seller delivers the product themselves,
 * and the delivery was successful.
 *
 * @param info - Lazada client configuration
 * @param params - DBS confirmation parameters (order_id, order_item_ids)
 * @returns Result of the confirmation
 */
export async function confirmDeliveryForDBS(
  info: LazadaConfig,
  params: ConfirmDeliveryForDBSRequest
): Promise<LazadaResponseConfirmDeliveryDBS> {
  const payload: Record<string, any> = {
    ...buildBasePayload(info),
    order_id: String(params.order_id),
    order_item_ids: JSON.stringify(params.order_item_ids),
  };

  return LazadaHelper.executePOST(
    '/order/delivery/confirm',
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponseConfirmDeliveryDBS>;
}

// ============================================================
// FailedDeliveryForDBS API
// Confirm failed delivery for Delivered by Seller (DBS) orders.
// ============================================================

/**
 * Confirm delivery failed for Delivered by Seller (DBS) model.
 *
 * Use this when the seller delivers the product themselves,
 * but the delivery was not successful.
 *
 * @param info - Lazada client configuration
 * @param params - DBS failure parameters (order_id, order_item_ids)
 * @returns Result of the failure confirmation
 */
export async function failedDeliveryForDBS(
  info: LazadaConfig,
  params: FailedDeliveryForDBSRequest
): Promise<LazadaResponseFailedDeliveryDBS> {
  const payload: Record<string, any> = {
    ...buildBasePayload(info),
    order_id: String(params.order_id),
    order_item_ids: JSON.stringify(params.order_item_ids),
  };

  return LazadaHelper.executePOST(
    '/order/failed_delivery/confirm',
    payload,
    info.appSecret
  ) as unknown as Promise<LazadaResponseFailedDeliveryDBS>;
}

// Deprecated / backward compatibility
export { LazadaHelper };
