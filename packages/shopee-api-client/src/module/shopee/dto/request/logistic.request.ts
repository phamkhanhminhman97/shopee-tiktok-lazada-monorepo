interface RequestShipOrder {
  order_sn: string;
  package_number?: string;
  pickup?: {
    address_id: number;
    pickup_time_id?: string;
    tracking_number?: string;
  };
  dropoff?: {
    branch_id?: number;
    sender_real_name?: string;
    slug?: string;
  };
  non_integrated?: {
    tracking_number?: string;
  };
}

interface RequestCreateShippingDocumentOrder {
  order_sn: string;
  package_number?: string;
  tracking_number?: string;
  shipping_document_type?: string;
}

interface RequestCreateShippingDocument {
  order_list: RequestCreateShippingDocumentOrder[];
}

interface RequestGetShippingDocumentResultOrder {
  order_sn: string;
  package_number?: string;
  shipping_document_type?: string;
}

interface RequestGetShippingDocumentResult {
  order_list: RequestGetShippingDocumentResultOrder[];
}

interface RequestDownloadShippingDocumentOrder {
  order_sn: string;
  package_number?: string;
}

interface RequestDownloadShippingDocument {
  shipping_document_type?: string;
  order_list: RequestDownloadShippingDocumentOrder[];
}

interface RequestMassShipOrderPackage {
  package_number: string;
}

interface RequestMassShipOrderPickup {
  address_id?: number;
  pickup_time_id?: string;
}

interface RequestMassShipOrderDropoff {
  branch_id?: number;
  sender_real_name?: string;
  tracking_number?: string;
}

interface RequestMassShipOrderNonIntegratedTracking {
  package_number: string;
  tracking_number: string;
}

interface RequestMassShipOrderNonIntegrated {
  tracking_number?: RequestMassShipOrderNonIntegratedTracking[];
}

interface RequestMassShipOrder {
  logistics_channel_id?: number;
  product_location_id?: string;
  package_list: RequestMassShipOrderPackage[];
  pickup?: RequestMassShipOrderPickup;
  dropoff?: RequestMassShipOrderDropoff;
  non_integrated?: RequestMassShipOrderNonIntegrated;
}

interface RequestGetMassShippingParameterPackage {
  package_number: string;
}

interface RequestGetMassShippingParameter {
  logistics_channel_id?: number;
  product_location_id?: string;
  package_list: RequestGetMassShippingParameterPackage[];
}

interface RequestUpdateShippingOrderPickup {
  address_id: number;
  pickup_time_id: string;
}

interface RequestUpdateShippingOrder {
  order_sn: string;
  package_number?: string;
  pickup: RequestUpdateShippingOrderPickup;
}

interface RequestGetMassTrackingNumberPackage {
  package_number: string;
}

interface RequestGetMassTrackingNumber {
  package_list: RequestGetMassTrackingNumberPackage[];
  response_optional_fields?: string;
}

interface RequestGetShippingDocumentParameterOrder {
  order_sn: string;
  package_number?: string;
}

interface RequestGetShippingDocumentParameter {
  order_list: RequestGetShippingDocumentParameterOrder[];
}

export {
  RequestShipOrder as ShopeeRequestShipOrder,
  RequestCreateShippingDocument as ShopeeRequestCreateShippingDocument,
  RequestGetShippingDocumentResult as ShopeeRequestGetShippingDocumentResult,
  RequestDownloadShippingDocument as ShopeeRequestDownloadShippingDocument,
  RequestMassShipOrder as ShopeeRequestMassShipOrder,
  RequestGetMassShippingParameter as ShopeeRequestGetMassShippingParameter,
  RequestUpdateShippingOrder as ShopeeRequestUpdateShippingOrder,
  RequestGetMassTrackingNumber as ShopeeRequestGetMassTrackingNumber,
  RequestGetShippingDocumentParameter as ShopeeRequestGetShippingDocumentParameter,
};

// ---- Appended: additional endpoints (batch 3) ----
import { ShopeeUpdateChannelAutoCallDriverSetting } from '../response/logistic.reponse';

/**
 * Enum generated for field ShopeeShippingDocumentType
 */
export enum ShopeeShippingDocumentType {
  NORMAL_AIR_WAYBILL = "NORMAL_AIR_WAYBILL",
  THERMAL_AIR_WAYBILL = "THERMAL_AIR_WAYBILL",
  NORMAL_JOB_AIR_WAYBILL = "NORMAL_JOB_AIR_WAYBILL",
  THERMAL_JOB_AIR_WAYBILL = "THERMAL_JOB_AIR_WAYBILL",
  THERMAL_UNPACKAGED_LABEL = "THERMAL_UNPACKAGED_LABEL",
}

/**
 * Enum generated for field ShopeeAddressType
 */
export enum ShopeeAddressType {
  DEFAULT_ADDRESS = "DEFAULT_ADDRESS",
  PICKUP_ADDRESS = "PICKUP_ADDRESS",
  RETURN_ADDRESS = "RETURN_ADDRESS",
  INBOUND_PICKUP_ADDRESS = "INBOUND_PICKUP_ADDRESS",
}

/**
 * ShopeeBatchShipOrderOrder sub-interface for ShopeeBatchShipOrderRequest
 */
export interface ShopeeBatchShipOrderOrder {
  /**
   * Shopee's unique identifier for an order. Limit 150.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You should't fill the field with empty string when there is't a package number.
   */
  package_number?: string;
}

/**
 * ShopeeBatchShipOrderPickup sub-interface for ShopeeBatchShipOrderRequest
 */
export interface ShopeeBatchShipOrderPickup {
  /**
   * The identity of address. Retrieved from shopee.logistics.GetAddress.
   */
  address_id?: number;
  /**
   * The pickup time id. Retrieved from shopee.logistics.GetTimeSlot.
   */
  pickup_time_id?: string;
  /**
   * Need input this field when "tracking_number" is returned from "info_need". Please note that this tracking number is assigned by third-party shipping carrier for item shipment.
   */
  tracking_number?: string;
}

/**
 * ShopeeBatchShipOrderDropoff sub-interface for ShopeeBatchShipOrderRequest
 */
export interface ShopeeBatchShipOrderDropoff {
  /**
   * The identity of branch. Retrieved from shopee.logistics.GetBranch branch.
   */
  branch_id?: number;
  /**
   * The real name of sender.
   */
  sender_real_name?: string;
  /**
   * Need input this field when "tracking_number" is returned from "info_need". Please note that this tracking number is assigned by third-party shipping carrier for item shipment.
   */
  tracking_number?: string;
}

/**
 * ShopeeBatchShipOrderNonIntegrated sub-interface for ShopeeBatchShipOrderRequest
 */
export interface ShopeeBatchShipOrderNonIntegrated {
  /**
   * Optional parameter for non-integrated channel order. The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_number?: string;
}

/**
 * Request parameters for batch_ship_order
 *
 * Use this api to batch initiate logistics including arrange pickup, dropoff or shipment for non-integrated logistic channels. Should call v2.logistics.get_shipping_parameter to fetch all required param first. It's recommended to initiate logistics one hour after the orders were placed since there is one-hour window buyer can cancel any order without request to seller.Only channel 90003 - Padrão in Brazil has the permission of this API.
 */
export interface ShopeeBatchShipOrderRequest {
  /**
   * The list of order.
   */
  order_list: ShopeeBatchShipOrderOrder[];
  /**
   * Required parameter ONLY if GetParameterForInit returns "pickup" or if GetLogisticsInfo returns "pickup" under "info_needed" for the same order. Developer should still include "pickup" field in the call even if "pickup" has empty value.
   */
  pickup?: ShopeeBatchShipOrderPickup;
  /**
   * Required parameter ONLY if GetParameterForInit returns "dropoff" or if GetLogisticsInfo returns "dropoff" under "info_needed" for the same order. Developer should still include "dropoff" field in the call even if "dropoff" has empty value. For logistic_id 80003 and 80004, both Regular and JOB shipping methods are supported. If you choose Regular shipping method, please use "tracking_no" to call Init API. If you choose JOB shipping method, please use "sender_real_name" to call Init API. Note that only one of "tracking_no" and "sender_real_name" can be selected.
   */
  dropoff?: ShopeeBatchShipOrderDropoff;
  /**
   * Optional parameter when GetParameterForInit returns "non-integrated" or GetLogisticsInfo returns "non-integrated" under "info_needed".
   */
  non_integrated?: ShopeeBatchShipOrderNonIntegrated;
}

/**
 * ShopeeBatchUpdateTpfWarehouseTrackingStatusPackage sub-interface for ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest
 */
export interface ShopeeBatchUpdateTpfWarehouseTrackingStatusPackage {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * This is to indicate timestamp of the 3PF tracking status.Timestamp should be within order create time and order pick up by 3PL time.
   */
  update_time: number;
}

/**
 * Request parameters for batch_update_tpf_warehouse_tracking_status
 *
 * For CB orders that fulfilled by 3PF, support 3PF Warehouse Vendors to update the tpf_tracking_status when 3PF warehouse receive the order and complete the outbound of the package.
 * CB orders that fulfilled by 3PF：
 * v2.shop.get_shop_info  - shop_fulfillment_flag in {Pure - 3PF Shop,PFF - 3PF Shop,LFF Hybrid Shop}
 * And
 * v2.order.get_order_detail -  fulfillment_flag = fulfilled_by_local_seller
 */
export interface ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest {
  /**
   * The name of 3PF Warehouse Vendor. Prohibit pure numbers and excessive abbreviations. Standardize naming for easy business recognition. Input priority: warehouse English name > full pinyin of warehouse brand name > warehouse Chinese name > other officially recognized and prominent names.
   */
  tpf_name: string;
  /**
   * The 3PF tracking status for the timestamp. All statuses are in lower case. List of status: - 3pf_warehouse_order_created- 3pf_warehouse_outbound_done
   */
  tpf_tracking_status: string;
  package_list: ShopeeBatchUpdateTpfWarehouseTrackingStatusPackage[];
}

/**
 * Request parameters for check_polygon_update_status
 *
 * Only available for Brazil sellers. Use this API to check the status of polygon file uploaded for BR Entrega Turbo channel (Channel ID: 90026) by querying the task_id returned via the v2.logistics.upload_serviceable_polygon.
 */
export interface ShopeeCheckPolygonUpdateStatusRequest {
  /**
   * ID that needs to be checked. Please pass the task_id returned via the v2.logistics.upload_serviceable_polygon.
   */
  task_id: string;
}

/**
 * ShopeeCreateBookingShippingDocumentBooking sub-interface for ShopeeCreateBookingShippingDocumentRequest
 */
export interface ShopeeCreateBookingShippingDocumentBooking {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
  /**
   * The tracking number of booking. Required except for the channel allow print before arrange shipment.
   */
  tracking_number?: string;
  /**
   * The type of shipping document. Available values: NORMAL_AIR_WAYBILL,THERMAL_AIR_WAYBILL,NORMAL_JOB_AIR_WAYBILL,THERMAL_JOB_AIR_WAYBILL
   */
  shipping_document_type?: ShopeeShippingDocumentType | string | number;
}

/**
 * Request parameters for create_booking_shipping_document
 *
 * Use this api to create shipping document task for each booking and this API is only available after retrieving the tracking number.
 */
export interface ShopeeCreateBookingShippingDocumentRequest {
  /**
   * The list of bookings you want to get. limit [1,50]
   */
  booking_list: ShopeeCreateBookingShippingDocumentBooking[];
}

/**
 * ShopeeCreateShippingDocumentJobUnpackagedSkuRequest sub-interface for ShopeeCreateShippingDocumentJobRequest
 */
export interface ShopeeCreateShippingDocumentJobUnpackagedSkuRequest {
  /**
   * Unpackaged SKU ID of the model.
   */
  unpackaged_sku_id?: string;
  /**
   * Number of copies for the generated labels (maximum 600 total across all requested SKUs).
   */
  quantity?: number;
}

/**
 * Request parameters for create_shipping_document_job
 *
 * This API creates a shipping document job for selected documents. The system receives requests and returns a job ID along with success and failure details.
 */
export interface ShopeeCreateShippingDocumentJobRequest {
  /**
   * The type of shipping document. Available values: THERMAL_UNPACKAGED_LABEL
   */
  shipping_document_type: string;
  /**
   * List of Unpackaged SKUs to generate labels for.Note: The unpackaged_sku_requests and package_list cannot be populated at the same time, please select one.
   */
  unpackaged_sku_requests?: ShopeeCreateShippingDocumentJobUnpackagedSkuRequest[];
  /**
   * List of Package Numbers to generate labels for. (maximum 600 total)Note: The unpackaged_sku_requests and package_list cannot be populated at the same time, please select one.
   */
  package_list?: string[];
}

/**
 * Request parameters for delete_address
 *
 * Use this api to delete address.
 */
export interface ShopeeDeleteAddressRequest {
  /**
   * The identity of address you want to delete.
   */
  address_id: number;
}

/**
 * Request parameters for delete_special_operating_hour
 *
 * This API is used to delete a specific special operating hour for a seller. This API allows sellers to manage their operating hours by removing any special operating hours that are no longer needed. To use this API, the name of the special operating hour to be deleted should be obtained from the v2.logistics.get_operating_hours API.
 */
export interface ShopeeDeleteSpecialOperatingHourRequest {
  /**
   * Name of the special operating hour which can be retrieved from v2.logistics.get_operating_hours
   */
  name: string;
}

/**
 * ShopeeDownloadBookingShippingDocumentBooking sub-interface for ShopeeDownloadBookingShippingDocumentRequest
 */
export interface ShopeeDownloadBookingShippingDocumentBooking {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
}

/**
 * Request parameters for download_booking_shipping_document
 *
 * Use this api to download shipping_document. You have to call v2.logistics.create_booking_shipping_document to create a new shipping document task first and call v2.logistics.get_booking_shipping_document_result to get the task status second. If the task is READY, you can download this shipping document.
 */
export interface ShopeeDownloadBookingShippingDocumentRequest {
  /**
   * The type of shipping document. Available values: NORMAL_AIR_WAYBILL,THERMAL_AIR_WAYBILL
   */
  shipping_document_type?: ShopeeShippingDocumentType | string | number;
  /**
   * The list of bookings you want to get. limit [1,50]
   */
  booking_list: ShopeeDownloadBookingShippingDocumentBooking[];
}

/**
 * Request parameters for download_shipping_document_job
 *
 * This API allows users to download the shipping document associated with a specific job ID. It checks the job status before proceeding with the download.
 */
export interface ShopeeDownloadShippingDocumentJobRequest {
  /**
   * Generated Job ID for status tracking and download the Shipping Document
   */
  job_id: string;
}

/**
 * Request parameters for download_to_label
 *
 * Use the API to download the TO label that should be attached to the carton before drop-off at the warehouse (Only for TW channel_id:30029).
 */
export interface ShopeeDownloadToLabelRequest {
  /**
   * Sorting Group of the TO. Available value:1:North2:South
   */
  sorting_group: number;
  /**
   * Specifies the TO quantity, up to a maximum of 20 per request. If not specified, the default value is 1
   */
  quantity?: number;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoStyle sub-interface for ShopeeGetBookingShippingDocumentDataInfoRecipientAddressInfo
 */
export interface ShopeeGetBookingShippingDocumentDataInfoStyle {
  /**
   * supports bold and italic
   */
  text_style?: string[];
  /**
   * supports 1 - 108
   */
  font_size?: number;
  /**
   * color string like "#AbCd12"
   */
  text_color?: string;
  /**
   * supports 0.1-30, in centimeters
   */
  image_width?: number;
  /**
   * text horizontal align, supports left, center and right.
   */
  h_align?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoRecipientAddressInfo sub-interface for ShopeeGetBookingShippingDocumentDataInfoRequest
 */
export interface ShopeeGetBookingShippingDocumentDataInfoRecipientAddressInfo {
  /**
   * fields to query in the recipient address, should be name, phone, full_address, town, district, city, state, region, zipcode.
   */
  key: string;
  /**
   * image style
   */
  style?: ShopeeGetBookingShippingDocumentDataInfoStyle;
}

/**
 * Request parameters for get_booking_shipping_document_data_info
 *
 * Use this api to fetch the logistics information of a booking these info can be used for airwaybill printing. Dedicated for crossborder SLS order airwaybill. May not be applicable for local channel airwaybill. Besides, this api supports returning personal info as images.
 */
export interface ShopeeGetBookingShippingDocumentDataInfoRequest {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
  /**
   * recipient address to query as image
   */
  recipient_address_info?: ShopeeGetBookingShippingDocumentDataInfoRecipientAddressInfo[];
}

/**
 * ShopeeGetBookingShippingDocumentParameterBooking sub-interface for ShopeeGetBookingShippingDocumentParameterRequest
 */
export interface ShopeeGetBookingShippingDocumentParameterBooking {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
}

/**
 * Request parameters for get_booking_shipping_document_parameter
 *
 * Use this api to get the selectable shipping_document_type and suggested shipping_document_type.
 */
export interface ShopeeGetBookingShippingDocumentParameterRequest {
  /**
   * The list of bookings you want to get. limit [1,50]
   */
  booking_list: ShopeeGetBookingShippingDocumentParameterBooking[];
}

/**
 * ShopeeGetBookingShippingDocumentResultBooking sub-interface for ShopeeGetBookingShippingDocumentResultRequest
 */
export interface ShopeeGetBookingShippingDocumentResultBooking {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
  /**
   * The type of shipping document. Available values: NORMAL_AIR_WAYBILL,THERMAL_AIR_WAYBILL
   */
  shipping_document_type?: ShopeeShippingDocumentType | string | number;
}

/**
 * Request parameters for get_booking_shipping_document_result
 *
 * Use this api to retrieve the status of the shipping document task. Document will be available for download only after the status change to 'READY'.
 */
export interface ShopeeGetBookingShippingDocumentResultRequest {
  /**
   * The list of bookings you want to get. limit [1,50]
   */
  booking_list: ShopeeGetBookingShippingDocumentResultBooking[];
}

/**
 * Request parameters for get_booking_shipping_parameter
 *
 * Use this api to get the parameter "info_needed" from the response to check if the booking has pickup or dropoff. This api will also return the addresses and pickup time id options for the pickup method. For dropoff, it can return branch id, sender real name etc, depending on the 3PL requirements.
 */
export interface ShopeeGetBookingShippingParameterRequest {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
}

/**
 * Request parameters for get_booking_tracking_info
 *
 * Use this api to get the logistics tracking information of a booking.
 */
export interface ShopeeGetBookingTrackingInfoRequest {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
}

/**
 * Request parameters for get_booking_tracking_number
 *
 * After arranging shipment (v2.logistics.ship_booking) for the integrated channel, use this api to get the tracking_number, which is a required parameter for creating shipping labels. The api response can return tracking_number empty, since this info is dependent from the 3PL, due to this it is allowed to keep calling the api within 5 minutes interval, until the tracking_number is returned.
 */
export interface ShopeeGetBookingTrackingNumberRequest {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
}

/**
 * Request parameters for get_mart_packaging_info
 *
 * [Only for ID mart seller] The API allows sellers to retrieve their current packaging fee settings.
 */
export type ShopeeGetMartPackagingInfoRequest = Record<string, never>;

/**
 * Request parameters for get_operating_hour_restrictions
 *
 * This API is designed to retrieve all restrictions related to inputting operating hours for the v2.logistics.update_operating_hours function. This API ensures that user are aware of any limitations or conditions that may affect their operating hours.
 */
export type ShopeeGetOperatingHourRestrictionsRequest = Record<string, never>;

/**
 * Request parameters for get_operating_hours
 *
 * This API is utilized to retrieve the existing operating hours of sellers including Pickup Operating Hours,  Special Hours, Instant Operating Hours, and Shop Collection Operating Hours.
 */
export type ShopeeGetOperatingHoursRequest = Record<string, never>;

/**
 * Request parameters for get_pause_status
 *
 * This API returns the pause status of logistics channels under the shop. Pausing allows the shop to temporarily prevent buyers from placing orders through specific logistics channels. The response includes whether a pause is currently active, the pause end time (if active), and the remaining daily pause quota in seconds (if inactive). Sellers need to refer to the support_pause field in v2.logistics.get_channel_list response to determine which channels are actually paused.
 */
export type ShopeeGetPauseStatusRequest = Record<string, never>;

/**
 * ShopeeGetShippingDocumentDataInfoStyle sub-interface for ShopeeGetShippingDocumentDataInfoRecipientAddressInfo
 */
export interface ShopeeGetShippingDocumentDataInfoStyle {
  /**
   * supports bold and italic
   */
  text_style?: string[];
  /**
   * supports 1 - 108
   */
  font_size?: number;
  /**
   * color string like "#AbCd12"
   */
  text_color?: string;
  /**
   * supports 0.1-30, in centimeters
   */
  image_width?: number;
  /**
   * text horizontal align, supports left, center and right.
   */
  h_align?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoRecipientAddressInfo sub-interface for ShopeeGetShippingDocumentDataInfoRequest
 */
export interface ShopeeGetShippingDocumentDataInfoRecipientAddressInfo {
  /**
   * fields to query in the recipient address, should be name, phone, full_address, town, district, city, state, region, zipcode.
   */
  key: string;
  /**
   * image style
   */
  style?: ShopeeGetShippingDocumentDataInfoStyle;
}

/**
 * Request parameters for get_shipping_document_data_info
 *
 * Use this api to fetch the logistics information of an order, these info can be used for self-design AWB printing. Besides, this api supports returning personal info as images.
 */
export interface ShopeeGetShippingDocumentDataInfoRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Shopee's unique identifier for the package under an order. You shouldn't fill the field with empty string when there isn't a package number.
   */
  package_number?: string;
  /**
   * recipient address to query as image
   */
  recipient_address_info?: ShopeeGetShippingDocumentDataInfoRecipientAddressInfo[];
}

/**
 * Request parameters for get_shipping_document_job_status
 *
 * This API retrieves the status of a shipping document job using the job ID provided.
 */
export interface ShopeeGetShippingDocumentJobStatusRequest {
  /**
   * Generated Job ID for status tracking and download the Shipping Document
   */
  job_id: string;
}

/**
 * ShopeeSetAddressConfigAddressTypeConfig sub-interface for ShopeeSetAddressConfigRequest
 */
export interface ShopeeSetAddressConfigAddressTypeConfig {
  /**
   * The identifier id of the address.
   */
  address_id?: number;
  /**
   * The type of address. Available values: DEFAULT_ADDRESS, PICKUP_ADDRESS, RETURN_ADDRESS, INBOUND_PICKUP_ADDRESS.
   */
  address_type?: ShopeeAddressType | string | number;
}

/**
 * Request parameters for set_address_config
 *
 * Use this API to set address config of your shop.
 */
export interface ShopeeSetAddressConfigRequest {
  /**
   * Definite show pickup address or not.
   */
  show_pickup_address?: boolean;
  /**
   * The config of your shop addres.
   */
  address_type_config?: ShopeeSetAddressConfigAddressTypeConfig;
}

/**
 * ShopeeSetMartPackagingInfoDimension sub-interface for ShopeeSetMartPackagingInfoRequest
 */
export interface ShopeeSetMartPackagingInfoDimension {
  /**
   * The length of the packaging in centimetres (cm).
   */
  length: number;
  /**
   * The width of the packaging in centimetres (cm).
   */
  width: number;
  /**
   * The height of the packaging in centimetres (cm).
   */
  height: number;
}

/**
 * ShopeeSetMartPackagingInfoPackagingFee sub-interface for ShopeeSetMartPackagingInfoRequest
 */
export interface ShopeeSetMartPackagingInfoPackagingFee {
  /**
   * The packaging fee price in your region's local currency.For SG/MY/BR/MX seller: Sellers can set the price with two decimal place, other regions can only set the price as an integer.
   */
  value: number;
}

/**
 * Request parameters for set_mart_packaging_info
 *
 * [Only for ID mart seller] This API allows sellers to set up their packaging fee info. Through this API, sellers can enable or disable packaging fees, and if enabled, specify the dimensions of the packaging and the associated fee. This ensures that sellers can configure their shipping costs accurately based on their packaging requirements.
 */
export interface ShopeeSetMartPackagingInfoRequest {
  /**
   * Indicates whether the seller has enabled or disabled the packaging fee configuration.True: The seller charges a packaging fee.False: The seller does not charge a packaging fee.
   */
  enable: boolean;
  /**
   * Required if enabled is set to True.
   */
  dimension?: ShopeeSetMartPackagingInfoDimension;
  /**
   * Required if enabled is set to True.
   */
  packaging_fee?: ShopeeSetMartPackagingInfoPackagingFee;
}

/**
 * Request parameters for set_pause_status
 *
 * Use this API to set the pause status of logistics channels under the shop. Pausing allows the shop to temporarily prevent buyers from placing orders through specific logistics channels. The response includes whether a pause is currently active, the pause end time (if active), and the remaining daily pause quota in seconds (if inactive). Note: The pause may take a few moments to take effect. Please check for any additional orders that may still be placed during this window.
 */
export interface ShopeeSetPauseStatusRequest {
  /**
   * The target pause status that seller wants to update to. Applicable values: - true: Trigger pause. All relevant channels will be paused and will not have any new incoming orders (fulfillment of existing orders will not be affected). Meanwhile, the system will start deducting the daily pause quota and automatically calculate the pause end time based on the remaining quota.- false: Trigger manual resume. No channels are paused and may have new incoming orders. The remaining daily quota will stop being consumed and be retained until reset the next day.Note: Due to the system cache synchronization mechanism, there may be an approximately 15-second delay before the pause/resume operation takes effect. It is recommended to call the v2.logistics.get_pause_status for confirmation after the update.
   */
  is_paused: boolean;
}

/**
 * ShopeeShipBookingPickup sub-interface for ShopeeShipBookingRequest
 */
export interface ShopeeShipBookingPickup {
  /**
   * The identity of address. Retrieved from v2.logistics.get_booking_shipping_parameter.
   */
  address_id: number;
  /**
   * The pickup time id. Retrieved from v2.logistics.get_shipping_booking_parameter, you can only select one from the time_slot_list.Some logistics channels may not return any date or time for pickup time slots. In such cases, sellers can arrange shipment without selecting any time slot, and Shopee will arrange a suitable timing for these situations.
   */
  pickup_time_id?: string;
}

/**
 * Request parameters for ship_booking
 *
 * Use this api to initiate logistics including arrange pickup, dropoff. Should call v2.logistics.get_booking_shipping_parameter to fetch all required param first.
 */
export interface ShopeeShipBookingRequest {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn: string;
  /**
   * Required parameter ONLY if get_shipping_parameter returns "pickup" under "info_needed". Developer should still include "pickup" field in the call even if "pickup" has empty value.
   */
  pickup?: ShopeeShipBookingPickup;
  /**
   * Required parameter ONLY if get_shipping_parameter returns "dropoff" under "info_needed". Developer should still include "dropoff" field in the call even if "dropoff" has empty value. If you choose Regular shipping method, please use "tracking_no" to call Init API. If you choose JOB shipping method, please use "sender_real_name" to call Init API. Note that only one of "tracking_no" and "sender_real_name" can be selected.
   */
  dropoff?: Record<string, unknown>;
}

/**
 * Request parameters for update_address
 *
 * Use this API to update the address of a shop.
 */
export interface ShopeeUpdateAddressRequest {
  /**
   * Unique identifier for the address. You can get the address_id via v2.logistics.get_address_list.
   */
  address_id: number;
  /**
   * The region of the address.Note: Do not allow to update the region of the address.
   */
  region?: string;
  /**
   * The state of the address.
   */
  state?: string;
  /**
   * The city of the address.
   */
  city?: string;
  /**
   * The district of the address.
   */
  district?: string;
  /**
   * The town of the address.
   */
  town?: string;
  /**
   * The detailed address description of the address.
   */
  address?: string;
  /**
   * The zipcode of the address.
   */
  zipcode?: string;
  /**
   * Recipient’s name at this address.
   */
  name?: string;
  /**
   * Contact phone number for the recipient.
   */
  phone?: string;
  /**
   * Geolocation information for the address. Type: JSON stringNote: 1) To clear existing geo info, pass "" or {}.2) To keep existing geo info, do not include this field.3) The JSON may include optional fields:- formattedAddress (string): full formatted address.- region (object) – contains latitude and longitude as floats.- user_verified (boolean) – whether the geolocation is verified by the user.- user_adjusted (boolean) – whether the geolocation was adjusted by the user.
   */
  geo_info?: string;
}

/**
 * Request parameters for update_channel
 *
 * Use this api to update shop level logistics channel's configuration.
 */
export interface ShopeeUpdateChannelRequest {
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id: number;
  /**
   * Whether to enable this logistic channel.
   */
  enabled?: boolean;
  /**
   * Whether to enable COD for this logistic channel. Only COD supported channels are applicable.
   */
  cod_enabled?: boolean;
  auto_call_driver_setting?: ShopeeUpdateChannelAutoCallDriverSetting;
}

/**
 * ShopeeUpdateOperatingHoursMonday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursMonday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursTuesday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursTuesday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursWednesday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursWednesday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursThursday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursThursday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursFriday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursFriday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursSaturday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursSaturday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursSunday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursSunday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursPublicHoliday sub-interface for ShopeeUpdateOperatingHoursRegularOperatingHour
 */
export interface ShopeeUpdateOperatingHoursPublicHoliday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursRegularOperatingHour sub-interface for ShopeeUpdateOperatingHoursRequest
 */
export interface ShopeeUpdateOperatingHoursRegularOperatingHour {
  /**
   * Operating hours for Monday: You can skip this information if you want to mark the day as closed.
   */
  monday?: ShopeeUpdateOperatingHoursMonday;
  /**
   * Operating hours for Tuesday: You can skip this information if you want to mark the day as closed.
   */
  tuesday?: ShopeeUpdateOperatingHoursTuesday;
  /**
   * Operating hours for Wednesday: You can skip this information if you want to mark the day as closed.
   */
  wednesday?: ShopeeUpdateOperatingHoursWednesday;
  /**
   * Operating hours for Thursday: You can skip this information if you want to mark the day as closed.
   */
  thursday?: ShopeeUpdateOperatingHoursThursday;
  /**
   * Operating hours for Friday: You can skip this information if you want to mark the day as closed.
   */
  friday?: ShopeeUpdateOperatingHoursFriday;
  /**
   * Operating hours for Saturday: You can skip this information if you want to mark the day as closed.
   */
  saturday?: ShopeeUpdateOperatingHoursSaturday;
  /**
   * Operating hours for Sunday: You can skip this information if you want to mark the day as closed.
   */
  sunday?: ShopeeUpdateOperatingHoursSunday;
  /**
   * Operating hours for public holiday: You can skip this information if you want to mark the day as closed.
   */
  public_holiday?: ShopeeUpdateOperatingHoursPublicHoliday;
}

/**
 * ShopeeUpdateOperatingHoursOperatingHour sub-interface for ShopeeUpdateOperatingHoursSpecialOperatingHour
 */
export interface ShopeeUpdateOperatingHoursOperatingHour {
  /**
   * Date: it should be include all date from start_date until end_date
   */
  date: string;
  /**
   * Start time for operating hours on that date:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
  /**
   * To specify this value as False if you're not operate on that date (close)
   */
  enable: boolean;
}

/**
 * ShopeeUpdateOperatingHoursSpecialOperatingHour sub-interface for ShopeeUpdateOperatingHoursRequest
 */
export interface ShopeeUpdateOperatingHoursSpecialOperatingHour {
  /**
   * The name of Special Operating Hours
   */
  name: string;
  /**
   * The start date of the Special Operating Hours. The value should be within [today + 1] and [today + 365 days].
   */
  start_date: string;
  /**
   * The end date of the Special Operating Hours. The value should be within [start_date + 30 days]
   */
  end_date: string;
  /**
   * To specify the operating hours for each date
   */
  operating_hours: ShopeeUpdateOperatingHoursOperatingHour[];
}

/**
 * ShopeeUpdateOperatingHoursThrusday sub-interface for ShopeeUpdateOperatingHoursInstantOperatingHour
 */
export interface ShopeeUpdateOperatingHoursThrusday {
  /**
   * Start time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.
   */
  start_time: string;
  /**
   * End time for operating hours on that day:The time should be in the format XX:YY, where YY is either 00 or 30.Except for a 24-hour, you can input a start_time of 00:00 and an end_time of 23:59
   */
  end_time: string;
}

/**
 * ShopeeUpdateOperatingHoursInstantOperatingHour sub-interface for ShopeeUpdateOperatingHoursRequest
 */
export interface ShopeeUpdateOperatingHoursInstantOperatingHour {
  /**
   * Operating hours for Monday: You can skip this information if you want to mark the day as closed.
   */
  monday?: ShopeeUpdateOperatingHoursMonday;
  /**
   * Operating hours for Tuesday: You can skip this information if you want to mark the day as closed.
   */
  tuesday?: ShopeeUpdateOperatingHoursTuesday;
  /**
   * Operating hours for Wednesday: You can skip this information if you want to mark the day as closed.
   */
  wednesday?: ShopeeUpdateOperatingHoursWednesday;
  /**
   * Operating hours for Thursday: You can skip this information if you want to mark the day as closed.
   */
  thrusday?: ShopeeUpdateOperatingHoursThrusday;
  /**
   * Operating hours for Friday: You can skip this information if you want to mark the day as closed.
   */
  friday?: ShopeeUpdateOperatingHoursFriday;
  /**
   * Operating hours for Saturday: You can skip this information if you want to mark the day as closed.
   */
  saturday?: ShopeeUpdateOperatingHoursSaturday;
  /**
   * Operating hours for Sunday: You can skip this information if you want to mark the day as closed.
   */
  sunday?: ShopeeUpdateOperatingHoursSunday;
  /**
   * Operating hours for public holiday: You can skip this information if you want to mark the day as closed.
   */
  public_holiday?: ShopeeUpdateOperatingHoursPublicHoliday;
}

/**
 * ShopeeUpdateOperatingHoursShopCollectionOperatingHour sub-interface for ShopeeUpdateOperatingHoursRequest
 */
export interface ShopeeUpdateOperatingHoursShopCollectionOperatingHour {
  /**
   * Operating hours for Monday: You can skip this information if you want to mark the day as closed.
   */
  monday?: ShopeeUpdateOperatingHoursMonday;
  /**
   * Operating hours for Tuesday: You can skip this information if you want to mark the day as closed.
   */
  tuesday?: ShopeeUpdateOperatingHoursTuesday;
  /**
   * Operating hours for Wednesday: You can skip this information if you want to mark the day as closed.
   */
  wednesday?: ShopeeUpdateOperatingHoursWednesday;
  /**
   * Operating hours for Thursday: You can skip this information if you want to mark the day as closed.
   */
  thursday?: ShopeeUpdateOperatingHoursThursday;
  /**
   * Operating hours for Friday: You can skip this information if you want to mark the day as closed.
   */
  friday?: ShopeeUpdateOperatingHoursFriday;
  /**
   * Operating hours for Saturday: You can skip this information if you want to mark the day as closed.
   */
  saturday?: ShopeeUpdateOperatingHoursSaturday;
  /**
   * Operating hours for Sunday: You can skip this information if you want to mark the day as closed.
   */
  sunday?: ShopeeUpdateOperatingHoursSunday;
  /**
   * Operating hours for Public Holiday: You can skip this information if you want to mark the day as closed.
   */
  public_holiday?: ShopeeUpdateOperatingHoursPublicHoliday;
}

/**
 * Request parameters for update_operating_hours
 *
 * This API is designed to allow sellers to update their operating hours. It is essential that the values provided in this API align with the restrictions retrieved from the v2.logistics.get_operating_hour_restrictions API to ensure compliance with platform requirements. This API uses overwriting updates, when updating pickup operating hours, still need to include all parts even those not needing changes.
 */
export interface ShopeeUpdateOperatingHoursRequest {
  /**
   * Details of Pickup Operating Hours / Preferred Pickup Hours: You can skip this parameter if you are not updating the Pickup Operating Hours / Preferred Pickup Hours
   */
  regular_operating_hour?: ShopeeUpdateOperatingHoursRegularOperatingHour;
  /**
   * Details of Special Operating Hours : You can skip this parameter if you are not creating Special Operating Hours or if you do not have access to create Special Operating Hours
   */
  special_operating_hour?: ShopeeUpdateOperatingHoursSpecialOperatingHour;
  /**
   * Details of Instant Operating Hours : You can skip this parameter if you are not creating/updating Instant Operating Hours or if you do not have access to create/update Instant Operating Hours
   */
  instant_operating_hour?: ShopeeUpdateOperatingHoursInstantOperatingHour;
  /**
   * Details of Shop Collection Operating Hours : You can skip this parameter if you are not creating/updating Shop Collection Operating Hours or if you do not have access to create/update Shop Collection Operating Hours
   */
  shop_collection_operating_hour?: ShopeeUpdateOperatingHoursShopCollectionOperatingHour;
}

/**
 * Request parameters for update_self_collection_order_logistics
 *
 * Use this api to update the order status for buyer to collect the orders directly from your pharmacy. This includes indicating that order is ready for collection, and that the order has been picked up by the buyer. You should call v2.logistics.get_order_detail or v2.logistics.get_package_detail first to get the package_number of such orders.
 */
export interface ShopeeUpdateSelfCollectionOrderLogisticsRequest {
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number: string;
  /**
   * Order logistics action. available values:- ready_for_collection- order_collected
   */
  self_collection_logistics_action: string;
  /**
   * List of image_id for the proof that buyer already collected the order at the store. Required when self_collection_logistics_action is order_collected. Max: 3.You can call the v2.media.upload_image to upload image and get the image_id, for this scenario, please pass the business = 1 and scene = 1.
   */
  epoc_image_list?: string[];
  /**
   * PIN code required for prescription orders when buyer collects at your shop.
   */
  pin?: string;
}

/**
 * Request parameters for update_tracking_status
 *
 * Only available for Brazil sellers. This API is only available for orders/parcels which are fulfilled by BR Seller Logistics channel (logistics_channel_id: 90021), Samsung (logistics_channel_id: 90025) and BR Instant Delivery channel (logistics_channel_id: 90026). The logistics_status will become LOGISTICS_REQUEST_CREATED after arrange shipment, and can call this API to update to: LOGISTICS_PICKUP_DONE, LOGISTICS_DELIVERY_DONE, LOGISTICS_DELIVERY_FAILED.
 */
export interface ShopeeUpdateTrackingStatusRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Order tracking number, might help seller to identify his order on the tracking_URL.Can only be sent when updating logistics_status to "logistic_pickup_done".
   */
  tracking_number?: string;
  /**
   * Website's URL for order tracking with maximum length of 2048 characters.Can only be sent when updating logistics_status to "logistic_pickup_done".
   */
  tracking_url?: string;
  /**
   * Order status update support:- logistics_pickup_done- logistics_delivery_done- logistics_delivery_failed
   */
  logistics_status: string;
  /**
   * Only required when updating logistics_status to "logistics_delivery_failed". Only required for BR Instant Delivery channel (logistics_channel_id: 90026). Only accept the following values. - buyer_unreachable- buyer_unresponsive- no_delivery_location_consensus
   */
  failed_reason?: string;
}

/**
 * Request parameters for upload_serviceable_polygon
 *
 * Only available for Brazil sellers. Use this API to upload KML file for shop level serviceability setting for BR Entrega Turbo channel (Channel ID: 90026). Please note that multiple Outlet Shops under the same Mart Shop cannot have overlapping service areas.
 */
export interface ShopeeUploadServiceablePolygonRequest {
  /**
   * The .kml file to be uploaded to denote the serviceability area of the shops.Note: Please refer to “KML file format for v2.logistics.upload_serviceable_polygon” to understand the structure specifications and upload requirements for KML files.
  */
  file: Buffer;
}
