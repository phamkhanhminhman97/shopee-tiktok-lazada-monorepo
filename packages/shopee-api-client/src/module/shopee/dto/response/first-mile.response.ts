import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeShipmentMethod
 */
export enum ShopeeShipmentMethod {
  PICKUP = "pickup",
  DROPOFF = "dropoff",
  SELF_DELIVER = "self_deliver",
  COURIER_DELIVERY = "courier_delivery",
}

/**
 * Enum generated for field ShopeeSlsTrackingNumber
 */
export enum ShopeeSlsTrackingNumber {
  ORDERS = "orders",
  FORDERS = "forders",
}

/**
 * Enum generated for field ShopeeDeclareDate
 */
export enum ShopeeDeclareDate {
  ID = "ID",
  FIRST = "first",
}

/**
 * ShopeeBindCourierDeliveryFirstMileTrackingNumberSuccess sub-interface for ShopeeBindCourierDeliveryFirstMileTrackingNumberResponseData
 */
export interface ShopeeBindCourierDeliveryFirstMileTrackingNumberSuccess {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
}

/**
 * ShopeeBindCourierDeliveryFirstMileTrackingNumberFail sub-interface for ShopeeBindCourierDeliveryFirstMileTrackingNumberResponseData
 */
export interface ShopeeBindCourierDeliveryFirstMileTrackingNumberFail {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeBindCourierDeliveryFirstMileTrackingNumberResponseData sub-interface for ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse
 */
export interface ShopeeBindCourierDeliveryFirstMileTrackingNumberResponseData {
  /**
   * Binding ID
   */
  binding_id?: string;
  success_list?: ShopeeBindCourierDeliveryFirstMileTrackingNumberSuccess[];
  fail_list?: ShopeeBindCourierDeliveryFirstMileTrackingNumberFail[];
}

/**
 * Response payload for bind_courier_delivery_first_mile_tracking_number
 *
 * Use this api to bind first mile tracking number for courier delivery method.
 */
export type ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse =
  ShopeeResponseCommon<ShopeeBindCourierDeliveryFirstMileTrackingNumberResponseData>;

/**
 * ShopeeBindFirstMileTrackingNumber_BindFirstMileTrackingNumberOrder sub-interface for ShopeeBindFirstMileTrackingNumberResponseData
 */
export interface ShopeeBindFirstMileTrackingNumber_BindFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeBindFirstMileTrackingNumberResponseData sub-interface for ShopeeBindFirstMileTrackingNumberResponse
 */
export interface ShopeeBindFirstMileTrackingNumberResponseData {
  /**
   * The first mile tracking number
   */
  first_mile_tracking_number?: string;
  /**
   * The list of orders.
   */
  order_list?: ShopeeBindFirstMileTrackingNumber_BindFirstMileTrackingNumberOrder[];
}

/**
 * Response payload for bind_first_mile_tracking_number
 *
 * Use this api to bind first mile tracking number.
 */
export type ShopeeBindFirstMileTrackingNumberResponse =
  ShopeeResponseCommon<ShopeeBindFirstMileTrackingNumberResponseData>;

/**
 * ShopeeGenerateAndBindFirstMileTrackingNumberSuccess sub-interface for ShopeeGenerateAndBindFirstMileTrackingNumberResponseData
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberSuccess {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
}

/**
 * ShopeeGenerateAndBindFirstMileTrackingNumberFail sub-interface for ShopeeGenerateAndBindFirstMileTrackingNumberResponseData
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberFail {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeGenerateAndBindFirstMileTrackingNumberResponseData sub-interface for ShopeeGenerateAndBindFirstMileTrackingNumberResponse
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberResponseData {
  /**
   * Binding ID
   */
  binding_id?: string;
  success_list?: ShopeeGenerateAndBindFirstMileTrackingNumberSuccess[];
  fail_list?: ShopeeGenerateAndBindFirstMileTrackingNumberFail[];
}

/**
 * Response payload for generate_and_bind_first_mile_tracking_number
 *
 * Use this api to generate first mile tracking number for courier delivery method.
 */
export type ShopeeGenerateAndBindFirstMileTrackingNumberResponse =
  ShopeeResponseCommon<ShopeeGenerateAndBindFirstMileTrackingNumberResponseData>;

/**
 * ShopeeGenerateFirstMileTrackingNumberResponseData sub-interface for ShopeeGenerateFirstMileTrackingNumberResponse
 */
export interface ShopeeGenerateFirstMileTrackingNumberResponseData {
  /**
   * The list of first mile tracking number that you generate
   */
  first_mile_tracking_number_list?: string[];
}

/**
 * Response payload for generate_first_mile_tracking_number
 *
 * Use this api to generate first mile tracking number.
 */
export type ShopeeGenerateFirstMileTrackingNumberResponse =
  ShopeeResponseCommon<ShopeeGenerateFirstMileTrackingNumberResponseData>;

/**
 * ShopeeGetChannelListLogisticsChannel sub-interface for ShopeeGetChannelListResponseData
 */
export interface ShopeeGetChannelListLogisticsChannel {
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id?: number;
  /**
   * The name of logistic channel.
   */
  logistics_channel_name?: string;
  /**
   * The shipment method for bound orders.Available values: pickup, dropoff, self_deliver.
   */
  shipment_method?: ShopeeShipmentMethod | string | number;
}

/**
 * ShopeeGetChannelListResponseData sub-interface for ShopeeGetChannelListResponse
 */
export interface ShopeeGetChannelListResponseData {
  logistics_channel_list?: ShopeeGetChannelListLogisticsChannel[];
}

/**
 * Response payload for get_channel_list
 *
 * Use this api to get first mile channel list.
 */
export type ShopeeGetChannelListResponse = ShopeeResponseCommon<ShopeeGetChannelListResponseData>;

/**
 * ShopeeGetCourierDeliveryChannelListCourier sub-interface for ShopeeGetCourierDeliveryChannelListLogisticsChannel
 */
export interface ShopeeGetCourierDeliveryChannelListCourier {
  /**
   * The name of the courier.
   */
  courier_name?: string;
  /**
   * The identity of the service provided by courier.
   */
  courier_service_id?: string;
  /**
   * The name of the service provided by courier.
   */
  courier_service_name?: string;
}

/**
 * ShopeeGetCourierDeliveryChannelListLogisticsChannel sub-interface for ShopeeGetCourierDeliveryChannelListResponseData
 */
export interface ShopeeGetCourierDeliveryChannelListLogisticsChannel {
  /**
   * The identity of logistics product ID: 1010003: kuaidi100 to C1010004: kuaidi100 prepaid(MP)
   */
  logistics_product_id?: number;
  /**
   * The name of logistics product ID: - kuaidi100 to C- kuaidi100 prepaid(MP)
   */
  logistics_product_name?: string;
  courier_list?: ShopeeGetCourierDeliveryChannelListCourier[];
}

/**
 * ShopeeGetCourierDeliveryChannelListResponseData sub-interface for ShopeeGetCourierDeliveryChannelListResponse
 */
export interface ShopeeGetCourierDeliveryChannelListResponseData {
  logistics_channel_list?: ShopeeGetCourierDeliveryChannelListLogisticsChannel[];
}

/**
 * Response payload for get_courier_delivery_channel_list
 *
 * Use this api to get courier information for courier delivery method.
 */
export type ShopeeGetCourierDeliveryChannelListResponse =
  ShopeeResponseCommon<ShopeeGetCourierDeliveryChannelListResponseData>;

/**
 * ShopeeGetCourierDeliveryDetailOrder sub-interface for ShopeeGetCourierDeliveryDetailResponseData
 */
export interface ShopeeGetCourierDeliveryDetailOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * The tracking number of SLS for orders/forders.
   */
  sls_tracking_number?: ShopeeSlsTrackingNumber | string | number;
  /**
   * Use this filed to indicate whether the order has been picked up by carrier.
   */
  pick_up_done?: boolean;
  /**
   * Use this filed to indicate whether the order has arrived at transit warehouse.
   */
  arrived_transit_warehouse?: boolean;
}

/**
 * ShopeeGetCourierDeliveryDetailResponseData sub-interface for ShopeeGetCourierDeliveryDetailResponse
 */
export interface ShopeeGetCourierDeliveryDetailResponseData {
  /**
   * Binding ID
   */
  binding_id?: string;
  /**
   * The first mile tracking number.
   */
  first_mile_tracking_number?: string;
  /**
   * The logistics status for first-mile tracking number. Status could be:CANCELEDCANCELINGDELIVEREDNOT_AVAILABLEORDER_CREATEDORDER_RECEIVEDPICKED_UP
   */
  status?: string;
  /**
   * The specified delivery date.
   */
  declare_date?: string;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more?: boolean;
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
  order_list?: ShopeeGetCourierDeliveryDetailOrder[];
}

/**
 * Response payload for get_courier_delivery_detail
 *
 * Use this api to get first mile detail for courier delivery method.
 */
export type ShopeeGetCourierDeliveryDetailResponse = ShopeeResponseCommon<ShopeeGetCourierDeliveryDetailResponseData>;

/**
 * ShopeeGetCourierDeliveryTrackingNumberListTrackingNumber sub-interface for ShopeeGetCourierDeliveryTrackingNumberListResponseData
 */
export interface ShopeeGetCourierDeliveryTrackingNumberListTrackingNumber {
  /**
   * The generated binding ID.
   */
  binding_id?: string;
  /**
   * The generate first-mile tracking number, value might be blank.
   */
  first_mile_tracking_number?: string;
  /**
   * The logistics status for first-mile tracking number. Status could be:CANCELEDCANCELINGDELIVEREDNOT_AVAILABLEORDER_CREATEDORDER_RECEIVEDPICKED_UPNote: NOT_AVAILABLE status means that Binding ID / First Mile Tracking Number is not yet bound with any order.
   */
  status?: string;
  /**
   * Indicate the reason when Shopee failed to place courier order to 3PL (Kuaidi 100 supporting) or courier company cancelled the order.Note: Will be empty if status is not CANCELED.
   */
  reason?: string;
  /**
   * The declare date of binding ID/first-mile tracking number.
   */
  declare_date?: ShopeeDeclareDate | string | number;
}

/**
 * ShopeeGetCourierDeliveryTrackingNumberListResponseData sub-interface for ShopeeGetCourierDeliveryTrackingNumberListResponse
 */
export interface ShopeeGetCourierDeliveryTrackingNumberListResponseData {
  tracking_number_list?: ShopeeGetCourierDeliveryTrackingNumberListTrackingNumber[];
  /**
   * This is to indicate whether the tracking number list is more than one page. If this value is true, you may want to continue to check next page to retrieve tracking numbers.
   */
  more?: boolean;
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_courier_delivery_tracking_number_list
 *
 * Use this api to get tracking number for courier delivery method.
 */
export type ShopeeGetCourierDeliveryTrackingNumberListResponse =
  ShopeeResponseCommon<ShopeeGetCourierDeliveryTrackingNumberListResponseData>;

/**
 * ShopeeGetCourierDeliveryWaybillWaybill sub-interface for ShopeeGetCourierDeliveryWaybillResponseData
 */
export interface ShopeeGetCourierDeliveryWaybillWaybill {
  /**
   * Binding ID
   */
  binding_id?: string;
  /**
   * URL for downloading waybill.
   */
  shipping_label_url?: string;
}

/**
 * ShopeeGetCourierDeliveryWaybillResponseData sub-interface for ShopeeGetCourierDeliveryWaybillResponse
 */
export interface ShopeeGetCourierDeliveryWaybillResponseData {
  waybill_list?: ShopeeGetCourierDeliveryWaybillWaybill[];
}

/**
 * Response payload for get_courier_delivery_waybill
 *
 * Use this api to get first mile waybill file for courier delivery method.
 */
export type ShopeeGetCourierDeliveryWaybillResponse =
  ShopeeResponseCommon<ShopeeGetCourierDeliveryWaybillResponseData>;

/**
 * ShopeeGetDetailOrder sub-interface for ShopeeGetDetailResponseData
 */
export interface ShopeeGetDetailOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * The tracking number of SLS for orders/forders.
   */
  sls_tracking_number?: ShopeeSlsTrackingNumber | string | number;
  /**
   * Use this filed to indicate whether the order has been picked up by carrier.
   */
  pick_up_done?: boolean;
  /**
   * Use this filed to indicate whether the order has arrived at transit warehouse.
   */
  arrived_transit_warehouse?: boolean;
}

/**
 * ShopeeGetDetailResponseData sub-interface for ShopeeGetDetailResponse
 */
export interface ShopeeGetDetailResponseData {
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id?: number;
  /**
   * The first-mile tracking number.
   */
  first_mile_tracking_number?: string;
  /**
   * The shipment method for bound orders, should be pickup or dropoff.
   */
  shipment_method?: string;
  /**
   * The logistics status for first-mile tracking number. Status could be: NOT_AVAILABLE,ORDER_CREATED,PICKED_UP,DELIVERED,ORDER_RECEIVED,CANCELING,CANCELED.NOT_AVAILABLE status means that either of the two scenarios has happened:1. First Mile Tracking Number in the request does not exist. (e.g., wrong format)2. First Mile Tracking Number is not yet bound with any order.
   */
  status?: string;
  /**
   * The specified delivery date.
   */
  declare_date?: string;
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more?: boolean;
  /**
   * The list of order.
   */
  order_list?: ShopeeGetDetailOrder[];
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_detail
 *
 * Use this api to get first mile detail.
 */
export type ShopeeGetDetailResponse = ShopeeResponseCommon<ShopeeGetDetailResponseData>;

/**
 * ShopeeGetTrackingNumberListFirstMileTrackingNumber sub-interface for ShopeeGetTrackingNumberListResponseData
 */
export interface ShopeeGetTrackingNumberListFirstMileTrackingNumber {
  /**
   * The first-mile tracking number.
   */
  first_mile_tracking_number?: string;
  /**
   * The logistics status for bound orders.NOT_AVAILABLE status means that First Mile Tracking Number is not yet bound with any order.
   */
  status?: string;
  /**
   * The specified delivery date.
   */
  declare_date?: string;
}

/**
 * ShopeeGetTrackingNumberListResponseData sub-interface for ShopeeGetTrackingNumberListResponse
 */
export interface ShopeeGetTrackingNumberListResponseData {
  /**
   * This is to indicate whether the order list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  more?: boolean;
  /**
   * The first-mile tracking number.
   */
  first_mile_tracking_number_list?: ShopeeGetTrackingNumberListFirstMileTrackingNumber[];
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_tracking_number_list
 *
 * Use this api to get first mile tracking number list.
 */
export type ShopeeGetTrackingNumberListResponse = ShopeeResponseCommon<ShopeeGetTrackingNumberListResponseData>;

/**
 * ShopeeGetTransitWarehouseListTransitWarehouse sub-interface for ShopeeGetTransitWarehouseListResponseData
 */
export interface ShopeeGetTransitWarehouseListTransitWarehouse {
  /**
   * The identity of transit warehouse.
   */
  warehouse_id?: string;
  /**
   * The name of transit warehouse in English.
   */
  warehouse_name_en?: string;
  /**
   * The name of transit warehouse in Chinese.
   */
  warehouse_name_cn?: string;
  /**
   * Warehouse type: 0 = normal warehouse1 = vendor warehouseNote: Only when shipment_method = dropoff, the API response will include warehouses where warehouse_type = 1 (vendor warehouse).
   */
  warehouse_type?: number;
}

/**
 * ShopeeGetTransitWarehouseListResponseData sub-interface for ShopeeGetTransitWarehouseListResponse
 */
export interface ShopeeGetTransitWarehouseListResponseData {
  transit_warehouse_list?: ShopeeGetTransitWarehouseListTransitWarehouse[];
}

/**
 * Response payload for get_transit_warehouse_list
 *
 * Use this api to get transit warehouse list which is used for first mile tracking number generation for courier delivery method.
 */
export type ShopeeGetTransitWarehouseListResponse = ShopeeResponseCommon<ShopeeGetTransitWarehouseListResponseData>;

/**
 * ShopeeGetUnbindOrderListOrder sub-interface for ShopeeGetUnbindOrderListResponseData
 */
export interface ShopeeGetUnbindOrderListOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * The Shopee logistics status for the order. Applicable values: See Data Definition- LogisticsStatus.
   */
  logistics_status?: string;
}

/**
 * ShopeeGetUnbindOrderListResponseData sub-interface for ShopeeGetUnbindOrderListResponse
 */
export interface ShopeeGetUnbindOrderListResponseData {
  /**
   * This is to indicate whether the item list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of items.
   */
  more?: boolean;
  /**
   * The result list of order you querying.
   */
  order_list?: ShopeeGetUnbindOrderListOrder[];
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_unbind_order_list
 *
 * Use this api to get unbind order list. It will only return orders unbound to first-mile that were created within the past 6 months.
 */
export type ShopeeGetUnbindOrderListResponse = ShopeeResponseCommon<ShopeeGetUnbindOrderListResponseData>;

/**
 * Response data payload for get_waybill
 */
export interface ShopeeGetWaybillResponseData {
  /**
   * The waybill file. Shopee does not document an exact shape beyond "the
   * waybill file" (likely a base64-encoded document); treat as opaque.
   */
  waybill?: unknown;
}

/**
 * Response payload for get_waybill
 *
 * Use this api to get first mile waybill file.
 */
export type ShopeeGetWaybillResponse = ShopeeResponseCommon<ShopeeGetWaybillResponseData>;

/**
 * ShopeeUnbindFirstMileTrackingNumber_UnbindFirstMileTrackingNumberOrder sub-interface for ShopeeUnbindFirstMileTrackingNumberResponseData
 */
export interface ShopeeUnbindFirstMileTrackingNumber_UnbindFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeUnbindFirstMileTrackingNumberResponseData sub-interface for ShopeeUnbindFirstMileTrackingNumberResponse
 */
export interface ShopeeUnbindFirstMileTrackingNumberResponseData {
  /**
   * The first mile tracking number.
   */
  first_mile_tracking_number?: string;
  /**
   * The binding result list of each order.
   */
  order_list?: ShopeeUnbindFirstMileTrackingNumber_UnbindFirstMileTrackingNumberOrder[];
}

/**
 * Response payload for unbind_first_mile_tracking_number
 *
 * Use this api to unbind first mile.
 */
export type ShopeeUnbindFirstMileTrackingNumberResponse =
  ShopeeResponseCommon<ShopeeUnbindFirstMileTrackingNumberResponseData>;

/**
 * ShopeeUnbindFirstMileTrackingNumberAllSuccess sub-interface for ShopeeUnbindFirstMileTrackingNumberAllResponseData
 */
export interface ShopeeUnbindFirstMileTrackingNumberAllSuccess {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Binding ID
   */
  binding_id?: string;
  /**
   * The generated first-mile tracking number, value might be blank.
   */
  first_mile_tracking_number?: string;
}

/**
 * ShopeeUnbindFirstMileTrackingNumberAllFail sub-interface for ShopeeUnbindFirstMileTrackingNumberAllResponseData
 */
export interface ShopeeUnbindFirstMileTrackingNumberAllFail {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Indicate error type if one element hit error.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error.
   */
  fail_message?: string;
}

/**
 * ShopeeUnbindFirstMileTrackingNumberAllResponseData sub-interface for ShopeeUnbindFirstMileTrackingNumberAllResponse
 */
export interface ShopeeUnbindFirstMileTrackingNumberAllResponseData {
  success_list?: ShopeeUnbindFirstMileTrackingNumberAllSuccess[];
  fail_list?: ShopeeUnbindFirstMileTrackingNumberAllFail[];
}

/**
 * Response payload for unbind_first_mile_tracking_number_all
 *
 * Use this api to unbind orders from first mile tracking number or binding ID.
 */
export type ShopeeUnbindFirstMileTrackingNumberAllResponse =
  ShopeeResponseCommon<ShopeeUnbindFirstMileTrackingNumberAllResponseData>;
