import { ShopeeShipmentMethod } from '../response/first-mile.response';

/**
 * Enum generated for field ShopeeRegion
 */
export enum ShopeeRegion {
  CN = "CN",
  KR = "KR",
}

/**
 * Enum generated for field ShopeeResponseOptionalFields
 */
export enum ShopeeResponseOptionalFields {
  LOGISTICS_STATUS = "logistics_status",
  PACKAGE_NUMBER = "package_number",
}

/**
 * ShopeeBindCourierDeliveryFirstMileTrackingNumberOrder sub-interface for ShopeeBindCourierDeliveryFirstMileTrackingNumberRequest
 */
export interface ShopeeBindCourierDeliveryFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should't fill the field with empty string when there isn't a package number.
   */
  package_number?: string;
}

/**
 * Request parameters for bind_courier_delivery_first_mile_tracking_number
 *
 * Use this api to bind first mile tracking number for courier delivery method.
 */
export interface ShopeeBindCourierDeliveryFirstMileTrackingNumberRequest {
  /**
   * The shipment method for generate and bind orders. Available value: courier_delivery.
   */
  shipment_method: string;
  /**
   * If using courier_delivery as the shipment method, the "binding_id" field should pass the value generated from v2.first_mile.generate_and_bind_first_mile_tracking_number.
   */
  binding_id: string;
  /**
   * The list of order_sn. You can specify up to 50 order_sns in this call. One fm_tn maximum number of total bind orders is 10000.
   */
  order_list: ShopeeBindCourierDeliveryFirstMileTrackingNumberOrder[];
}

/**
 * ShopeeBindFirstMileTrackingNumberOrder sub-interface for ShopeeBindFirstMileTrackingNumberRequest
 */
export interface ShopeeBindFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should't fill the field with empty string when there is't a package number.
   */
  package_number?: string;
}

/**
 * Request parameters for bind_first_mile_tracking_number
 *
 * Use this api to bind first mile tracking number.
 */
export interface ShopeeBindFirstMileTrackingNumberRequest {
  /**
   * If using "pickup" or "self_deliver" as the shipment method the "first_mile_tracking_number" field should pass the value generated from v2.first_mile.generate_first_mile_tracking_number.If using "dropoff" as the shipment method the "first_mile_tracking_number" field should pass the tracking number provide by the supplier.
   */
  first_mile_tracking_number: string;
  /**
   * The shipment method for bound orders, should be pickup, dropoff or self_deliver.
   */
  shipment_method: string;
  /**
   * Use this field to specify the region you want to ship parcel.Available value: cn,kr. Please fill in the field according to the region of the Merchant to which the shop belongs.
   */
  region: ShopeeRegion | string | number;
  /**
   * The identity of first-mile logistic channel.If you using "dropoff" or "pickup" as shipment method, please call v2.first_mile.get_channel_list to get the logsitc_channel_id then fill it.If you using "self_deliver"as shipment method then the logistics_channel_id should be "null".
   */
  logistics_channel_id: number;
  /**
   * The volume of the parcel.
   */
  volume?: number;
  /**
   * The weight of the parcel.
   */
  weight?: number;
  /**
   * The width of the parcel.
   */
  width?: number;
  /**
   * The length of the parcel.
   */
  length?: number;
  /**
   * The height of the parcel.
   */
  height?: number;
  /**
   * The set of ordersn. You can specify up to 50 ordersns in this call.one fm_tn maximum number of total bind orders is 10000.
   */
  order_list: ShopeeBindFirstMileTrackingNumberOrder[];
  /**
   * The identity of transit warehouse address. Retrieved from v2.first_mile.get_transit_warehouse_list.Note: When the first-mile delivery mode is "Drop Off", this field is expected to be a required field. However, to avoid affecting your existing services, this field will be temporarily optional until April 30, 2026. Please complete the integration before then to avoid any impact on your services if it is changed to a required field later.
   */
  warehouse_id?: string;
  /**
   * Warehouse type. Retrieved from v2.first_mile.get_transit_warehouse_list.0 = normal warehouse1 = vendor warehouseNote: When the first-mile delivery mode is "Drop Off", this field is expected to be a required field. However, to avoid affecting your existing services, this field will be temporarily optional until April 30, 2026. Please complete the integration before then to avoid any impact on your services if it is changed to a required field later.
   */
  warehouse_type?: number;
}

/**
 * ShopeeBindFirstMileTrackingNumberWarning sub-interface for ShopeeBindFirstMileTrackingNumberResponse
 */
export interface ShopeeBindFirstMileTrackingNumberWarning {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
}

/**
 * ShopeeGenerateAndBindFirstMileTrackingNumberOrder sub-interface for ShopeeGenerateAndBindFirstMileTrackingNumberRequest
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should fill the field with empty string when there isn't a package number.
   */
  package_number?: string;
}

/**
 * ShopeeGenerateAndBindFirstMileTrackingNumberCourierDeliveryInfo sub-interface for ShopeeGenerateAndBindFirstMileTrackingNumberRequest
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberCourierDeliveryInfo {
  /**
   * The identity of address. Retrieved from v2.logistics.get_address_list, address_type need to be FIRST_MILE_PICKUP_ADDRESS.
   */
  address_id: number;
  /**
   * The identity of transit warehouse address. Retrieved from v2.first_mile.get_transit_warehouse_list.
   */
  warehouse_id: string;
  /**
   * The definition of logistics product ID: 1010003 (kuaidi100 to C) - seller book courier pickup and pay offline1010004 (kuaidi100 prepaid(MP)) - seller can use prepaid account to place courier order, so prepaid_account_id is required
   */
  logistics_product_id: number;
  /**
   * ID of prepaid account. Retrieved from v2.merchant.get_merchant_prepaid_account_list.
   */
  prepaid_account_id?: number;
  /**
   * The identity of courier service. Retrieved from v2.first_mile.get_courier_delivery_channel_list.
   */
  courier_service_id: string;
}

/**
 * Request parameters for generate_and_bind_first_mile_tracking_number
 *
 * Use this api to generate first mile tracking number for courier delivery method.
 */
export interface ShopeeGenerateAndBindFirstMileTrackingNumberRequest {
  /**
   * The shipment method for generate and bind orders. Available value: courier_delivery.
   */
  shipment_method: string;
  /**
   * Use this field to specify the region you want to ship parcel. Available value: CN.
   */
  region?: string;
  /**
   * The list of order_sn. You can specify up to 50 order_sns in this call. One fm_tn maximum number of total bind orders is 10000.
   */
  order_list: ShopeeGenerateAndBindFirstMileTrackingNumberOrder[];
  /**
   * The set of information you need to generate FM tracking number and bind orders.
   */
  courier_delivery_info: ShopeeGenerateAndBindFirstMileTrackingNumberCourierDeliveryInfo;
}

/**
 * Request parameters for generate_first_mile_tracking_number
 *
 * Use this api to generate first mile tracking number.
 */
export interface ShopeeGenerateFirstMileTrackingNumberRequest {
  /**
   * This field is used for seller to specify the declare time.
   */
  declare_date: string;
  /**
   * The number of first-mile tracking numbers generated. Up to 20 first-mile tracking numbers can be generated for one declaration day.
   */
  quantity?: number;
}

/**
 * Request parameters for get_channel_list
 *
 * Use this api to get first mile channel list.
 */
export interface ShopeeGetChannelListRequest {
  /**
   * Use this field to specify the region you want to ship parcel. Available value: CN, KR
   */
  region?: ShopeeRegion | string | number;
}

/**
 * Request parameters for get_courier_delivery_channel_list
 *
 * Use this api to get courier information for courier delivery method.
 */
export interface ShopeeGetCourierDeliveryChannelListRequest {
  /**
   * Use this field to specify the region you want to ship parcel. Available value: CN
   */
  region?: string;
}

/**
 * Request parameters for get_courier_delivery_detail
 *
 * Use this api to get first mile detail for courier delivery method.
 */
export interface ShopeeGetCourierDeliveryDetailRequest {
  /**
   * Binding ID
   */
  binding_id: string;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. limit [1, 50].
   */
  page_size?: number;
}

/**
 * Request parameters for get_courier_delivery_tracking_number_list
 *
 * Use this api to get tracking number for courier delivery method.
 */
export interface ShopeeGetCourierDeliveryTrackingNumberListRequest {
  /**
   * The start time of creation time
   */
  from_date: string;
  /**
   * The end time of creation time
   */
  to_date: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. limit [1, 50]
   */
  page_size?: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
}

/**
 * Request parameters for get_courier_delivery_waybill
 *
 * Use this api to get first mile waybill file for courier delivery method.
 */
export interface ShopeeGetCourierDeliveryWaybillRequest {
  /**
   * Binding ID list of waybill. System limits maximum of Binding ID to 50.
   */
  binding_id_list: string[];
}

/**
 * Request parameters for get_detail
 *
 * Use this api to get first mile detail.
 */
export interface ShopeeGetDetailRequest {
  /**
   * The first mile tracking number.
   */
  first_mile_tracking_number: string;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
}

/**
 * Request parameters for get_tracking_number_list
 *
 * Use this api to get first mile tracking number list.
 */
export interface ShopeeGetTrackingNumberListRequest {
  /**
   * The start time of declare_date.
   */
  from_date: string;
  /**
   * The end time of declare_date.
   */
  to_date: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. limit [1, 50]
   */
  page_size?: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
}

/**
 * Request parameters for get_transit_warehouse_list
 *
 * Use this api to get transit warehouse list which is used for first mile tracking number generation for courier delivery method.
 */
export interface ShopeeGetTransitWarehouseListRequest {
  /**
   * Use this field to specify the region you want to ship parcel. Available value: CN.
   */
  region?: string;
  /**
   * Use this field to specify the shipment method you want to ship parcel. Available value: pickup, dropoff, self_deliver, courier_delivery.Note: Only when shipment_method = dropoff, the API response will include warehouses where warehouse_type = 1 (vendor warehouse).
   */
  shipment_method?: ShopeeShipmentMethod | string | number;
}

/**
 * Request parameters for get_unbind_order_list
 *
 * Use this api to get unbind order list. It will only return orders unbound to first-mile that were created within the past 6 months.
 */
export interface ShopeeGetUnbindOrderListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. limit [1, 100]
   */
  page_size?: number;
  /**
   * Indicate response fields you want to get. Please select from the below response parameters. If you input an object field, all the params under it will be included automatically in the response. If there are multiple response fields you want to get, you need to use English comma to connect them.  Available values: logistics_status,package_number.
   */
  response_optional_fields?: ShopeeResponseOptionalFields | string | number;
}

/**
 * Request parameters for get_waybill
 *
 * Use this api to get first mile waybill file.
 */
export interface ShopeeGetWaybillRequest {
  /**
   * The first mile tracking number that you want to print waybill.limit [1, 50]
   */
  first_mile_tracking_number_list: string[];
}

/**
 * ShopeeUnbindFirstMileTrackingNumberOrder sub-interface for ShopeeUnbindFirstMileTrackingNumberRequest
 */
export interface ShopeeUnbindFirstMileTrackingNumberOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should't fill the field with empty string when there is't a package number.
   */
  package_number?: string;
}

/**
 * Request parameters for unbind_first_mile_tracking_number
 *
 * Use this api to unbind first mile.
 */
export interface ShopeeUnbindFirstMileTrackingNumberRequest {
  /**
   * The identifier for an API request for error tracking.
   */
  first_mile_tracking_number: string;
  /**
   * The list of order info you want to unbind from the given first mile tracking number.You can specify up to 50 orders in this call.
   */
  order_list: ShopeeUnbindFirstMileTrackingNumberOrder[];
}

/**
 * ShopeeUnbindFirstMileTrackingNumberWarning sub-interface for ShopeeUnbindFirstMileTrackingNumberResponse
 */
export interface ShopeeUnbindFirstMileTrackingNumberWarning {
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
 * ShopeeUnbindFirstMileTrackingNumberAllOrder sub-interface for ShopeeUnbindFirstMileTrackingNumberAllRequest
 */
export interface ShopeeUnbindFirstMileTrackingNumberAllOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should fill the field with empty string when there isn't a package number.
   */
  package_number?: string;
}

/**
 * Request parameters for unbind_first_mile_tracking_number_all
 *
 * Use this api to unbind orders from first mile tracking number or binding ID.
 */
export interface ShopeeUnbindFirstMileTrackingNumberAllRequest {
  /**
   * The list of order info you want to unbind from the first mile tracking number or binding ID. You can specify up to 50 order_sns in this call.
   */
  order_list: ShopeeUnbindFirstMileTrackingNumberAllOrder[];
}
