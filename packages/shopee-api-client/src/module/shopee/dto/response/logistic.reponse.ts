import { ShopeeResponseCommon } from './config.response';

interface ItemMaxDimension {
  dimension_sum: number;
  height: number;
  length: number;
  unit: string;
  width: number;
}

interface LogisticsCapability {
  seller_logistics: boolean;
}

interface VolumeLimit {
  item_max_volume: number;
  item_min_volume: number;
}

interface WeightLimit {
  item_max_weight: number;
  item_min_weight: number;
}

interface LogisticsChannel {
  block_seller_cover_shipping_fee: boolean;
  cod_enabled: boolean;
  enabled: boolean;
  fee_type: string;
  force_enable: boolean;
  item_max_dimension: ItemMaxDimension;
  logistics_capability: LogisticsCapability;
  logistics_channel_id: number;
  logistics_channel_name: string;
  logistics_description: string;
  mask_channel_id: number;
  /** Whether the seller has configured custom settings for this logistics channel. */
  seller_logistic_has_configuration: boolean;
  /**
   * Package size options accepted by this logistics channel (e.g. size ID
   * and name). Shopee does not publicly document an exact schema for this
   * field, so it is intentionally left as a loose record instead of a
   * fabricated shape. Inspect the raw response if you need specific fields.
   */
  size_list: Array<Record<string, unknown>>;
  support_cross_border: boolean;
  volume_limit: VolumeLimit;
  weight_limit: WeightLimit;
}

interface LogisticChannelList {
  logistics_channel_list: LogisticsChannel[];
}
interface InfoNeeded {
  dropoff: string[];
  pickup: string[];
  non_integrated: string[];
}

interface Dropoff {
  branch_list: Branch[];
  slug_list?: Slug[];
}

interface Branch {
  branch_id: number;
  region: string;
  state: string;
  city: string;
  address: string;
  zipcode: string;
  district: string;
  town: string;
}

interface Slug {
  slug: string;
  slug_name: string;
}

interface Pickup {
  address_list: PickupAddress[];
}

interface PickupAddress {
  address_id: number;
  region: string;
  state: string;
  city: string;
  district: string;
  town: string;
  address: string;
  zipcode: string;
  address_flag: string[];
  time_slot_list: PickupTime[] | null;
}

interface PickupTime {
  date: number; // timestamp
  time_text?: string;
  pickup_time_id: string;
}

interface ShippingParameter {
  info_needed: InfoNeeded;
  dropoff: Dropoff | null;
  pickup: Pickup;
}

interface ShipOrder {
  error: string;
}

type ResponseShippingParameter = ShopeeResponseCommon<ShippingParameter>;
type ResponseLogisticChannelList = ShopeeResponseCommon<LogisticChannelList>;
type ResponseShipOrder = ShopeeResponseCommon<ShipOrder>;

interface TrackingNumber {
  tracking_number: string;
  plp_number?: string;
  first_mile_tracking_number?: string;
  last_mile_tracking_number?: string;
  hint?: string;
  pickup_code?: string;
}
type ResponseTrackingNumber = ShopeeResponseCommon<TrackingNumber>;

interface CreateShippingDocumentResult {
  order_sn: string;
  package_number?: string;
  fail_error?: string;
  fail_message?: string;
}

interface CreateShippingDocument {
  result_list: CreateShippingDocumentResult[];
}
type ResponseCreateShippingDocument = ShopeeResponseCommon<CreateShippingDocument>;

interface GetShippingDocumentResultItem {
  order_sn: string;
  package_number?: string;
  status?: string;
  fail_error?: string;
  fail_message?: string;
}

interface GetShippingDocumentResult {
  result_list: GetShippingDocumentResultItem[];
}

interface WarningItem {
  order_sn: string;
  package_number?: string;
}

interface ResponseGetShippingDocumentResult extends ShopeeResponseCommon<GetShippingDocumentResult> {
  warning?: WarningItem[];
}

interface TrackingInfoItem {
  update_time: number;
  description: string;
  logistics_status?: string;
  return_code?: string;
}

interface ReversedTrackingInfoItem {
  update_time: number;
  description: string;
}

interface TrackingInfo {
  order_sn: string;
  package_number?: string;
  logistics_status?: string;
  tracking_info?: TrackingInfoItem[];
  reversed_tracking_number?: string;
  reversed_courier_name?: string;
  reversed_tracking_info?: ReversedTrackingInfoItem[];
}
type ResponseTrackingInfo = ShopeeResponseCommon<TrackingInfo>;

interface MassShipOrderSuccessItem {
  package_number: string;
}

interface MassShipOrderFailItem {
  package_number: string;
  fail_reason: string;
}

interface MassShipOrder {
  success_list?: MassShipOrderSuccessItem[];
  fail_list?: MassShipOrderFailItem[];
}
type ResponseMassShipOrder = ShopeeResponseCommon<MassShipOrder>;

interface GetMassShippingParameter extends ShippingParameter {
  success_list?: MassShipOrderSuccessItem[];
  fail_list?: MassShipOrderFailItem[];
}
type ResponseGetMassShippingParameter = ShopeeResponseCommon<GetMassShippingParameter>;

/**
 * Shopee `v2.logistics.update_shipping_order` returns an empty or
 * minimal `response` object on success. Typed as a loose record instead
 * of `any` to avoid fabricating an inaccurate shape.
 */
type ResponseUpdateShippingOrder = ShopeeResponseCommon<Record<string, unknown>>;

interface MassTrackingNumberSuccessItem {
  package_number: string;
  tracking_number?: string;
  plp_number?: string;
  first_mile_tracking_number?: string;
  last_mile_tracking_number?: string;
  hint?: string;
  pickup_code?: string;
}

interface MassTrackingNumberFailItem {
  package_number: string;
  fail_reason: string;
}

interface MassTrackingNumber {
  success_list?: MassTrackingNumberSuccessItem[];
  fail_list?: MassTrackingNumberFailItem[];
}
type ResponseGetMassTrackingNumber = ShopeeResponseCommon<MassTrackingNumber>;

interface GetShippingDocumentParameterResultItem {
  order_sn: string;
  package_number?: string;
  suggest_shipping_document_type?: string;
  selectable_shipping_document_type?: string[];
  fail_error?: string;
  fail_message?: string;
}

interface GetShippingDocumentParameter {
  result_list: GetShippingDocumentParameterResultItem[];
}

interface ResponseGetShippingDocumentParameter extends ShopeeResponseCommon<GetShippingDocumentParameter> {
  warning?: WarningItem[];
}

interface AddressItem {
  address_id: number;
  region: string;
  state: string;
  city: string;
  address: string;
  zipcode: string;
  district: string;
  town: string;
  address_type: string[];
}

interface AddressList {
  show_pickup_address: boolean;
  address_list: AddressItem[];
}
type ResponseGetAddressList = ShopeeResponseCommon<AddressList>;

export {
  ResponseLogisticChannelList as ShopeeResponseLogisticChannelList,
  ResponseShippingParameter as ShopeeResponseShippingParameter,
  ResponseShipOrder as ShopeeResponseShipOrder,
  ResponseTrackingNumber as ShopeeResponseTrackingNumber,
  ResponseCreateShippingDocument as ShopeeResponseCreateShippingDocument,
  ResponseGetShippingDocumentResult as ShopeeResponseGetShippingDocumentResult,
  ResponseTrackingInfo as ShopeeResponseTrackingInfo,
  ResponseMassShipOrder as ShopeeResponseMassShipOrder,
  ResponseGetMassShippingParameter as ShopeeResponseGetMassShippingParameter,
  ResponseUpdateShippingOrder as ShopeeResponseUpdateShippingOrder,
  ResponseGetMassTrackingNumber as ShopeeResponseGetMassTrackingNumber,
  ResponseGetShippingDocumentParameter as ShopeeResponseGetShippingDocumentParameter,
  ResponseGetAddressList as ShopeeResponseGetAddressList,
};

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeStatus
 */
export enum ShopeeStatus {
  READY = "READY",
  FAILED = "FAILED",
  PROCESSING = "PROCESSING",
}

/**
 * Enum generated for field ShopeeJobStatus
 */
export enum ShopeeJobStatus {
  PROCESSING = "PROCESSING",
  READY = "READY",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
}

/**
 * ShopeeBatchShipOrderResult sub-interface for ShopeeBatchShipOrderResponseData
 */
export interface ShopeeBatchShipOrderResult {
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
 * ShopeeBatchShipOrderResponseData sub-interface for ShopeeBatchShipOrderResponse
 */
export interface ShopeeBatchShipOrderResponseData {
  result_list?: ShopeeBatchShipOrderResult[];
}

/**
 * Response payload for batch_ship_order
 *
 * Use this api to batch initiate logistics including arrange pickup, dropoff or shipment for non-integrated logistic channels. Should call v2.logistics.get_shipping_parameter to fetch all required param first. It's recommended to initiate logistics one hour after the orders were placed since there is one-hour window buyer can cancel any order without request to seller.Only channel 90003 - Padrão in Brazil has the permission of this API.
 */
export type ShopeeBatchShipOrderResponse = ShopeeResponseCommon<ShopeeBatchShipOrderResponseData>;

/**
 * ShopeeBatchUpdateTpfWarehouseTrackingStatusSuccess sub-interface for ShopeeBatchUpdateTpfWarehouseTrackingStatusResponseData
 */
export interface ShopeeBatchUpdateTpfWarehouseTrackingStatusSuccess {
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
 * ShopeeBatchUpdateTpfWarehouseTrackingStatusFail sub-interface for ShopeeBatchUpdateTpfWarehouseTrackingStatusResponseData
 */
export interface ShopeeBatchUpdateTpfWarehouseTrackingStatusFail {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * Reason for failure.
   */
  fail_error?: string;
  /**
   * Reason for failure.
   */
  fail_message?: string;
}

/**
 * ShopeeBatchUpdateTpfWarehouseTrackingStatusResponseData sub-interface for ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse
 */
export interface ShopeeBatchUpdateTpfWarehouseTrackingStatusResponseData {
  /**
   * Update success order list.
   */
  success_list?: ShopeeBatchUpdateTpfWarehouseTrackingStatusSuccess[];
  /**
   * Update fail order list.
   */
  fail_list?: ShopeeBatchUpdateTpfWarehouseTrackingStatusFail[];
}

/**
 * Response payload for batch_update_tpf_warehouse_tracking_status
 *
 * For CB orders that fulfilled by 3PF, support 3PF Warehouse Vendors to update the tpf_tracking_status when 3PF warehouse receive the order and complete the outbound of the package.
 * CB orders that fulfilled by 3PF：
 * v2.shop.get_shop_info  - shop_fulfillment_flag in {Pure - 3PF Shop,PFF - 3PF Shop,LFF Hybrid Shop}
 * And
 * v2.order.get_order_detail -  fulfillment_flag = fulfilled_by_local_seller
 */
export type ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse =
  ShopeeResponseCommon<ShopeeBatchUpdateTpfWarehouseTrackingStatusResponseData>;

/**
 * ShopeeCheckPolygonUpdateStatusResponseData sub-interface for ShopeeCheckPolygonUpdateStatusResponse
 */
export interface ShopeeCheckPolygonUpdateStatusResponseData {
  /**
   * Serviceable polygon file upload status. Applicable values: 0: Task completed1: Task in progress2: KML file related errors
   */
  status?: number;
  /**
   * Details of the upload status, e.g "task in progress".
   */
  message?: string;
}

/**
 * Response payload for check_polygon_update_status
 *
 * Only available for Brazil sellers. Use this API to check the status of polygon file uploaded for BR Entrega Turbo channel (Channel ID: 90026) by querying the task_id returned via the v2.logistics.upload_serviceable_polygon.
 */
export type ShopeeCheckPolygonUpdateStatusResponse = ShopeeResponseCommon<ShopeeCheckPolygonUpdateStatusResponseData>;

/**
 * ShopeeCreateBookingShippingDocumentResult sub-interface for ShopeeCreateBookingShippingDocumentResponseData
 */
export interface ShopeeCreateBookingShippingDocumentResult {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
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
 * ShopeeCreateBookingShippingDocumentResponseData sub-interface for ShopeeCreateBookingShippingDocumentResponse
 */
export interface ShopeeCreateBookingShippingDocumentResponseData {
  /**
   * The list of the result data.
   */
  result_list?: ShopeeCreateBookingShippingDocumentResult[];
}

/**
 * Response payload for create_booking_shipping_document
 *
 * Use this api to create shipping document task for each booking and this API is only available after retrieving the tracking number.
 */
export type ShopeeCreateBookingShippingDocumentResponse =
  ShopeeResponseCommon<ShopeeCreateBookingShippingDocumentResponseData>;

/**
 * ShopeeCreateShippingDocumentJobFail sub-interface for ShopeeCreateShippingDocumentJobResponseData
 */
export interface ShopeeCreateShippingDocumentJobFail {
  /**
   * Package Number or Unpackaged SKU ID that failed in generating Shipping Document
   */
  id?: string;
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
 * ShopeeCreateShippingDocumentJobResponseData sub-interface for ShopeeCreateShippingDocumentJobResponse
 */
export interface ShopeeCreateShippingDocumentJobResponseData {
  /**
   * Generated Job ID which will be used for status tracking and download the Shipping Document
   */
  job_id?: string;
  /**
   * List of Package Number or Unpackaged SKU ID that succeeds in generating Shipping Document
   */
  success_id_list?: string[];
  /**
   * List of Package Numbers or Unpackaged SKUs that failed in generating Shipping Document
   */
  fail_list?: ShopeeCreateShippingDocumentJobFail[];
}

/**
 * Response payload for create_shipping_document_job
 *
 * This API creates a shipping document job for selected documents. The system receives requests and returns a job ID along with success and failure details.
 */
export type ShopeeCreateShippingDocumentJobResponse =
  ShopeeResponseCommon<ShopeeCreateShippingDocumentJobResponseData>;

/**
 * Response data payload for delete_address
 */
export type ShopeeDeleteAddressResponseData = Record<string, never>;

/**
 * Response payload for delete_address
 *
 * Use this api to delete address.
 */
export type ShopeeDeleteAddressResponse = ShopeeResponseCommon<ShopeeDeleteAddressResponseData>;

/**
 * Response data payload for delete_special_operating_hour
 */
export type ShopeeDeleteSpecialOperatingHourResponseData = Record<string, never>;

/**
 * Response payload for delete_special_operating_hour
 *
 * This API is used to delete a specific special operating hour for a seller. This API allows sellers to manage their operating hours by removing any special operating hours that are no longer needed. To use this API, the name of the special operating hour to be deleted should be obtained from the v2.logistics.get_operating_hours API.
 */
export type ShopeeDeleteSpecialOperatingHourResponse =
  ShopeeResponseCommon<ShopeeDeleteSpecialOperatingHourResponseData>;

/**
 * Response data payload for download_booking_shipping_document
 */
export interface ShopeeDownloadBookingShippingDocumentResponseData {
  /**
   * The waybill file.
   */
  waybill?: unknown;
}

/**
 * Response payload for download_booking_shipping_document
 *
 * Use this api to download shipping_document. You have to call v2.logistics.create_booking_shipping_document to create a new shipping document task first and call v2.logistics.get_booking_shipping_document_result to get the task status second. If the task is READY, you can download this shipping document.
 */
export type ShopeeDownloadBookingShippingDocumentResponse =
  ShopeeResponseCommon<ShopeeDownloadBookingShippingDocumentResponseData>;

/**
 * Response data payload for download_shipping_document_job
 */
export interface ShopeeDownloadShippingDocumentJobResponseData {
  /** Downloaded document content. Shopee does not document an exact shape; treat as opaque. */
  file?: unknown;
}

/**
 * Response payload for download_shipping_document_job
 *
 * This API allows users to download the shipping document associated with a specific job ID. It checks the job status before proceeding with the download.
 */
export type ShopeeDownloadShippingDocumentJobResponse =
  ShopeeResponseCommon<ShopeeDownloadShippingDocumentJobResponseData>;

/**
 * Response data payload for download_to_label
 */
export interface ShopeeDownloadToLabelResponseData {
  /**
   * The waybill file.
   */
  waybill?: unknown;
}

/**
 * Response payload for download_to_label
 *
 * Use the API to download the TO label that should be attached to the carton before drop-off at the warehouse (Only for TW channel_id:30029).
 */
export type ShopeeDownloadToLabelResponse = ShopeeResponseCommon<ShopeeDownloadToLabelResponseData>;

/**
 * ShopeeGetBookingShippingDocumentDataInfo_GetBookingShippingDocumentDataInfoRecipientAddressInfo sub-interface for ShopeeGetBookingShippingDocumentDataInfoResponseData
 */
export interface ShopeeGetBookingShippingDocumentDataInfo_GetBookingShippingDocumentDataInfoRecipientAddressInfo {
  /**
   * queried field in recipient address
   */
  key?: string;
  /**
   * base64 encoded png data string
   */
  image?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoRecipientSortCode sub-interface for ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetBookingShippingDocumentDataInfoRecipientSortCode {
  /**
   * The first-level sort_code of recipient.
   */
  first_recipient_sort_code?: string;
  /**
   * The second-level sort_code of recipient.
   */
  second_recipient_sort_code?: string;
  /**
   * The third-level sort_code of recipient.
   */
  third_recipient_sort_code?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoSenderSortCode sub-interface for ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetBookingShippingDocumentDataInfoSenderSortCode {
  /**
   * The first-level sort_code of sender.
   */
  first_sender_sort_code?: string;
  /**
   * The second-level sort_code of sender.
   */
  second_sender_sort_code?: string;
  /**
   * The third-level sort_code of sender.
   */
  third_sender_sort_code?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoReturnSortCode sub-interface for ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetBookingShippingDocumentDataInfoReturnSortCode {
  /**
   * The first-level sort code for 3PL doing RTS.
   */
  return_first_sort_code?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoSpxReceiveStation sub-interface for ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetBookingShippingDocumentDataInfoSpxReceiveStation {
  /**
   * The first pickup station.
   */
  spx_first_receive_station?: string;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo sub-interface for ShopeeGetBookingShippingDocumentDataInfoResponseData
 */
export interface ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo {
  /**
   * Use this field to indicate booking weight when calculate the shipping fee. The unit of weigh is gram.
   */
  booking_weight?: number;
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id?: number;
  /**
   * The logistics service provider for the booking.
   */
  shipping_carrier?: string;
  /**
   * The sort_code of recipient.
   */
  recipient_sort_code?: ShopeeGetBookingShippingDocumentDataInfoRecipientSortCode;
  /**
   * The sort_code of sender.
   */
  sender_sort_code?: ShopeeGetBookingShippingDocumentDataInfoSenderSortCode;
  /**
   * The sort code for 3PL doing RTS.
   */
  return_sort_code?: ShopeeGetBookingShippingDocumentDataInfoReturnSortCode;
  /**
   * The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_number?: string;
  /**
   * The name of pickup hub.
   */
  pickup_hub?: string;
  /**
   * The name of delivery hub.
   */
  delivery_hub?: string;
  /**
   * Zone name.
   */
  deliver_area?: string;
  /**
   * The name of ec booing.
   */
  ec_booking_no?: string;
  /**
   * The date of create shipment booking.
   */
  create_date_ymd_sl?: string;
  /**
   * The name of manufacturer.
   */
  manufacturers_name?: string;
  /**
   * The website of manufacturer.
   */
  manufacturers_website?: string;
  /**
   * Use this field to indicate order contains dangerous goods or not.0: Non-dangerous good1: Dangerous good2: Prohibited
   */
  is_lm_dg_bool?: number;
  /**
   * The sub-district of recipient's address.
   */
  spx_sub_district?: string;
  /**
   * The spx receive station.
   */
  spx_receive_station?: ShopeeGetBookingShippingDocumentDataInfoSpxReceiveStation;
  /**
   * The zone of this booking.
   */
  zone?: string;
  /**
   * Delivery Sub Zone.
   */
  zone_code?: string;
  /**
   * Distribution Center Code.
   */
  destination_base_code?: string;
  /**
   * Currently only applicable for Brazil, Indonesia, Vietnam, Philippines.For orders with Dangerous Goods, this value indicates the severity of the danger and requires special handling by the logistics provider. 0 = Not classified / no DG sub-type1 = DG_A2 = DG_B3 = DG_C4 = DG_D
   */
  dg_specific_type?: number;
}

/**
 * ShopeeGetBookingShippingDocumentDataInfoResponseData sub-interface for ShopeeGetBookingShippingDocumentDataInfoResponse
 */
export interface ShopeeGetBookingShippingDocumentDataInfoResponseData {
  recipient_address_info?: ShopeeGetBookingShippingDocumentDataInfo_GetBookingShippingDocumentDataInfoRecipientAddressInfo;
  shipping_document_info?: ShopeeGetBookingShippingDocumentDataInfoShippingDocumentInfo;
}

/**
 * Response payload for get_booking_shipping_document_data_info
 *
 * Use this api to fetch the logistics information of a booking these info can be used for airwaybill printing. Dedicated for crossborder SLS order airwaybill. May not be applicable for local channel airwaybill. Besides, this api supports returning personal info as images.
 */
export type ShopeeGetBookingShippingDocumentDataInfoResponse =
  ShopeeResponseCommon<ShopeeGetBookingShippingDocumentDataInfoResponseData>;

/**
 * ShopeeGetBookingShippingDocumentParameterResult sub-interface for ShopeeGetBookingShippingDocumentParameterResponseData
 */
export interface ShopeeGetBookingShippingDocumentParameterResult {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
  /**
   * The shipping document type Shopee suggests. If you don't select any shipping document type, Shopee will use this as default shipping document type.
   */
  suggest_shipping_document_type?: string;
  /**
   * The shipping document type you can select of this booking.
   */
  selectable_shipping_document_type?: string[];
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
 * ShopeeGetBookingShippingDocumentParameterResponseData sub-interface for ShopeeGetBookingShippingDocumentParameterResponse
 */
export interface ShopeeGetBookingShippingDocumentParameterResponseData {
  /**
   * The list of the result data.
   */
  result_list?: ShopeeGetBookingShippingDocumentParameterResult[];
}

/**
 * Response payload for get_booking_shipping_document_parameter
 *
 * Use this api to get the selectable shipping_document_type and suggested shipping_document_type.
 */
export type ShopeeGetBookingShippingDocumentParameterResponse =
  ShopeeResponseCommon<ShopeeGetBookingShippingDocumentParameterResponseData>;

/**
 * ShopeeGetBookingShippingDocumentResultResult sub-interface for ShopeeGetBookingShippingDocumentResultResponseData
 */
export interface ShopeeGetBookingShippingDocumentResultResult {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
  /**
   * The status of the shipping document task you querying with booking_sn. Available values: READY/FAILED/PROCESSING
   */
  status?: ShopeeStatus | string | number;
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
 * ShopeeGetBookingShippingDocumentResultResponseData sub-interface for ShopeeGetBookingShippingDocumentResultResponse
 */
export interface ShopeeGetBookingShippingDocumentResultResponseData {
  /**
   * The list of the result data.
   */
  result_list?: ShopeeGetBookingShippingDocumentResultResult[];
}

/**
 * Response payload for get_booking_shipping_document_result
 *
 * Use this api to retrieve the status of the shipping document task. Document will be available for download only after the status change to 'READY'.
 */
export type ShopeeGetBookingShippingDocumentResultResponse =
  ShopeeResponseCommon<ShopeeGetBookingShippingDocumentResultResponseData>;

/**
 * ShopeeGetBookingShippingParameterInfoNeeded sub-interface for ShopeeGetBookingShippingParameterResponseData
 */
export interface ShopeeGetBookingShippingParameterInfoNeeded {
  /**
   * Could contain 'branch_id', 'sender_real_name' or 'tracking_no'. If it contains 'branch_id', choose one to Init. If it contains 'sender_real_name' or 'tracking_no', should manually input these values in Init API. If it has empty value, developer should still include "dropoff" field in Init API.
   */
  dropoff?: string[];
  /**
   * Could contain 'address_id' and 'pickup_time_id'. Choose one address_id and its corresponding pickup_time_id to Init. If it has empty value, developer should still include "pickup" field in Init API.It could contains "tracking_number" returned from "info_need"for some channels, please also add it when init.
   */
  pickup?: string[];
}

/**
 * ShopeeGetBookingShippingParameterTimeSlot sub-interface for ShopeeGetBookingShippingParameterAddress
 */
export interface ShopeeGetBookingShippingParameterTimeSlot {
  /**
   * The date of pickup time. In timestamp.
   */
  date?: number;
  /**
   * The text description of pickup time. Only applicable for certain channels.
   */
  time_text?: string;
  /**
   * The identity of pickuptime.
   */
  pickup_time_id?: string;
  /**
   * This field will have the value “recommended” for the time slot that Shopee suggests sellers choose. While it is advisable for sellers to choose the recommended time slot, they can also choose other time slots that do not have the recommended flag.
   */
  flags?: string[];
  /**
   * return if error getting pickup time, otherwise omitted
   */
  error?: string;
  /**
   * return if error getting pickup time, otherwise omitted
   */
  msg?: string;
}

/**
 * ShopeeGetBookingShippingParameterAddress sub-interface for ShopeeGetBookingShippingParameterPickup
 */
export interface ShopeeGetBookingShippingParameterAddress {
  /**
   * The identity of address.
   */
  address_id?: number;
  /**
   * The region of specify address.
   */
  region?: string;
  /**
   * The state of specify address.
   */
  state?: string;
  /**
   * The city of specify address.
   */
  city?: string;
  /**
   * The district of specify address.
   */
  district?: string;
  /**
   * The town of specify address.
   */
  town?: string;
  /**
   * The address description of specify address.
   */
  address?: string;
  /**
   * The zipcode of specify address.
   */
  zipcode?: string;
  /**
   * The flag of shop address, applicable values: default_address, pickup_address, return_address, current_address(only for multi-warehouse sellers)
   */
  address_flag?: string[];
  /**
   * List of pickup_time information corresponding to the address_id.Some logistics channels may not return any date or time for pickup time slots. In such cases, sellers can arrange shipment without selecting any time slot, and Shopee will arrange a suitable timing for these situations.
   */
  time_slot_list?: ShopeeGetBookingShippingParameterTimeSlot[];
}

/**
 * ShopeeGetBookingShippingParameterPickup sub-interface for ShopeeGetBookingShippingParameterResponseData
 */
export interface ShopeeGetBookingShippingParameterPickup {
  /**
   * List of available pickup address info.
   */
  address_list?: ShopeeGetBookingShippingParameterAddress[];
}

/**
 * ShopeeGetBookingShippingParameterResponseData sub-interface for ShopeeGetBookingShippingParameterResponse
 */
export interface ShopeeGetBookingShippingParameterResponseData {
  /**
   * The parameters required based on each specific booking to Init. Must use the fields included under info_needed to call Init.
   */
  info_needed?: ShopeeGetBookingShippingParameterInfoNeeded;
  /**
   * Logistics information for pickup mode booking.
   */
  pickup?: ShopeeGetBookingShippingParameterPickup;
}

/**
 * Response payload for get_booking_shipping_parameter
 *
 * Use this api to get the parameter "info_needed" from the response to check if the booking has pickup or dropoff. This api will also return the addresses and pickup time id options for the pickup method. For dropoff, it can return branch id, sender real name etc, depending on the 3PL requirements.
 */
export type ShopeeGetBookingShippingParameterResponse =
  ShopeeResponseCommon<ShopeeGetBookingShippingParameterResponseData>;

/**
 * ShopeeGetBookingTrackingInfoTrackingInfo sub-interface for ShopeeGetBookingTrackingInfoResponseData
 */
export interface ShopeeGetBookingTrackingInfoTrackingInfo {
  /**
   * The time when logistics info has been updated.
   */
  update_time?: number;
  /**
   * The description of booking logistics tracking info.logistics_status
   */
  description?: string;
  /**
   * The Shopee logistics status for the booking. TrackingLogisticsStatus:INITIALORDER_INITORDER_SUBMITTEDORDER_CREATEDPICKUP_REQUESTEDPICKUP_PENDINGPICKED_UPDELIVERY_PENDINGDELIVEREDLOSTUPDATEUPDATE_SUBMITTEDUPDATE_CREATEDRETURN_STARTEDRETURN_PENDINGCANCELCANCEL_CREATEDCANCELEDFAILED_ORDER_SUBMITTEDFAILED_ORDER_CREATEDFAILED_PICKUP_REQUESTEDFAILED_PICKED_UPFAILED_DELIVEREDFAILED_UPDATE_SUBMITTEDFAILED_UPDATE_CREATEDFAILED_RETURNEDFAILED_CANCEL_CREATEDFAILED_CANCELEDRETURNEDRETURN_INTIATED
   */
  logistics_status?: string;
}

/**
 * ShopeeGetBookingTrackingInfoResponseData sub-interface for ShopeeGetBookingTrackingInfoResponse
 */
export interface ShopeeGetBookingTrackingInfoResponseData {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
  /**
   * The Shopee logistics status for the booking. Applicable values.LOGISTICS_REQUEST_CREATED:booking arranged shipmentLOGISTICS_PICKUP_DONE:booking handed over to 3PLLOGISTICS_PICKUP_FAILED:booking cancelled by 3PL due to failed pickup or picked up but not able to proceed with deliveryLOGISTICS_DELIVERY_DONE:successfully deliveredLOGISTICS_REQUEST_CANCELED:cancelled when booking at LOGISTICS_REQUEST_CREATEDLOGISTICS_READY:booking ready for fulfilmentLOGISTICS_INVALID:cancelled when booking at LOGISTICS_READYLOGISTICS_LOST:booking cancelled due to 3PL lost the parcel
   */
  logistics_status?: string;
  /**
   * The tracking info of the booking.
   */
  tracking_info?: ShopeeGetBookingTrackingInfoTrackingInfo[];
}

/**
 * Response payload for get_booking_tracking_info
 *
 * Use this api to get the logistics tracking information of a booking.
 */
export type ShopeeGetBookingTrackingInfoResponse = ShopeeResponseCommon<ShopeeGetBookingTrackingInfoResponseData>;

/**
 * Response data payload for get_booking_tracking_number
 */
export interface ShopeeGetBookingTrackingNumberResponseData {
  /**
   * The tracking number of this booking.
   */
  tracking_number?: string;
}

/**
 * Response payload for get_booking_tracking_number
 *
 * After arranging shipment (v2.logistics.ship_booking) for the integrated channel, use this api to get the tracking_number, which is a required parameter for creating shipping labels. The api response can return tracking_number empty, since this info is dependent from the 3PL, due to this it is allowed to keep calling the api within 5 minutes interval, until the tracking_number is returned.
 */
export type ShopeeGetBookingTrackingNumberResponse = ShopeeResponseCommon<ShopeeGetBookingTrackingNumberResponseData>;

/**
 * ShopeeGetMartPackagingInfoDimension sub-interface for ShopeeGetMartPackagingInfoResponseData
 */
export interface ShopeeGetMartPackagingInfoDimension {
  /**
   * The length of the packaging in centimetres (cm).
   */
  length?: number;
  /**
   * The width of the packaging in centimetres (cm).
   */
  width?: number;
  /**
   * The height of the packaging in centimetres (cm).
   */
  height?: number;
}

/**
 * ShopeeGetMartPackagingInfoPackagingFee sub-interface for ShopeeGetMartPackagingInfoResponseData
 */
export interface ShopeeGetMartPackagingInfoPackagingFee {
  /**
   * The packaging fee price in the seller's local currency.
   */
  value?: number;
}

/**
 * ShopeeGetMartPackagingInfoResponseData sub-interface for ShopeeGetMartPackagingInfoResponse
 */
export interface ShopeeGetMartPackagingInfoResponseData {
  /**
   * Indicates whether the seller has enabled or disabled the packaging fee configuration.True: The seller charges a packaging fee.False: The seller does not charge a packaging fee.
   */
  enable?: boolean;
  /**
   * Returned only if enabled is set to True.
   */
  dimension?: ShopeeGetMartPackagingInfoDimension;
  /**
   * Returned only if enabled is set to True.
   */
  packaging_fee?: ShopeeGetMartPackagingInfoPackagingFee;
}

/**
 * Response payload for get_mart_packaging_info
 *
 * [Only for ID mart seller] The API allows sellers to retrieve their current packaging fee settings.
 */
export type ShopeeGetMartPackagingInfoResponse = ShopeeResponseCommon<ShopeeGetMartPackagingInfoResponseData>;

/**
 * ShopeeGetOperatingHourRestrictionsMonday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsMonday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsTuesday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsTuesday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsWednesday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsWednesday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsThursday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsThursday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsFriday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsFriday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsSaturday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsSaturday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsSunday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsSunday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsPublicHoliday sub-interface for ShopeeGetOperatingHourRestrictionsWorkingDayConfig
 */
export interface ShopeeGetOperatingHourRestrictionsPublicHoliday {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsWorkingDayConfig sub-interface for ShopeeGetOperatingHourRestrictionsRegularOperatingHourRestriction
 */
export interface ShopeeGetOperatingHourRestrictionsWorkingDayConfig {
  /**
   * The restrictions specific for Monday
   */
  monday?: ShopeeGetOperatingHourRestrictionsMonday;
  /**
   * The restrictions specific for Tuesday
   */
  tuesday?: ShopeeGetOperatingHourRestrictionsTuesday;
  /**
   * The restrictions specific for Wednesday
   */
  wednesday?: ShopeeGetOperatingHourRestrictionsWednesday;
  /**
   * The restrictions specific for Thursday
   */
  thursday?: ShopeeGetOperatingHourRestrictionsThursday;
  /**
   * The restrictions specific for Friday
   */
  friday?: ShopeeGetOperatingHourRestrictionsFriday;
  /**
   * The restrictions specific for Saturday
   */
  saturday?: ShopeeGetOperatingHourRestrictionsSaturday;
  /**
   * The restrictions specific for Sunday
   */
  sunday?: ShopeeGetOperatingHourRestrictionsSunday;
  /**
   * The restrictions specific for public holiday
   */
  public_holiday?: ShopeeGetOperatingHourRestrictionsPublicHoliday;
}

/**
 * ShopeeGetOperatingHourRestrictionsRegularOperatingHourRestriction sub-interface for ShopeeGetOperatingHourRestrictionsResponseData
 */
export interface ShopeeGetOperatingHourRestrictionsRegularOperatingHourRestriction {
  /**
   * Minimum number of days the seller needs to designate as working days per week (including Monday to Sunday, but excluding public holidays from the count).
   */
  minimum_working_days_in_week?: number;
  /**
   * The restrictions specific to each day
   */
  working_day_config?: ShopeeGetOperatingHourRestrictionsWorkingDayConfig;
}

/**
 * ShopeeGetOperatingHourRestrictionsInstantOperatingHourRestriction sub-interface for ShopeeGetOperatingHourRestrictionsResponseData
 */
export interface ShopeeGetOperatingHourRestrictionsInstantOperatingHourRestriction {
  /**
   * Minimum number of days the seller needs to designate as working days per week (including Monday to Sunday, but excluding public holidays from the count).
   */
  minimum_working_days_in_week?: number;
  /**
   * The restrictions specific to each day
   */
  working_day_config?: ShopeeGetOperatingHourRestrictionsWorkingDayConfig;
}

/**
 * ShopeeGetOperatingHourRestrictionsSpecialDay sub-interface for ShopeeGetOperatingHourRestrictionsSpecialOperatingHourRestriction
 */
export interface ShopeeGetOperatingHourRestrictionsSpecialDay {
  /**
   * If the value is true, this day must be marked as open.
   */
  mandatory?: boolean;
  /**
   * Minimum number of hours required for the seller to operate on that day.
   */
  minimum_operating_hour?: number;
  /**
   * The start hour for that day should not be set earlier than this time.
   */
  minimum_start_time?: string;
  /**
   * The start hour for that day should not be set later than this time.
   */
  maximum_start_time?: string;
  /**
   * The end hour for that day should not be set earlier than this time.
   */
  minimum_end_time?: string;
  /**
   * The end hour for that day should not be set later than this time.
   */
  maximum_end_time?: string;
  /**
   * If the toggle value is true, the user can set the start_time to 00:00 and the end_time to 23:59 to indicate that the shop is operating 24 hours a day.
   */
  operating_24_hour_toggle?: boolean;
}

/**
 * ShopeeGetOperatingHourRestrictionsSpecialOperatingHourRestriction sub-interface for ShopeeGetOperatingHourRestrictionsResponseData
 */
export interface ShopeeGetOperatingHourRestrictionsSpecialOperatingHourRestriction {
  special_day?: ShopeeGetOperatingHourRestrictionsSpecialDay;
}

/**
 * ShopeeGetOperatingHourRestrictionsShopCollectionOperatingHourRestriction sub-interface for ShopeeGetOperatingHourRestrictionsResponseData
 */
export interface ShopeeGetOperatingHourRestrictionsShopCollectionOperatingHourRestriction {
  /**
   * Minimum number of days the seller needs to designate as working days per week (including Monday to Sunday, but excluding public holidays from the count).
   */
  minimum_working_days_in_week?: number;
  /**
   * The restrictions specific to each day
   */
  working_day_config?: ShopeeGetOperatingHourRestrictionsWorkingDayConfig;
}

/**
 * ShopeeGetOperatingHourRestrictionsResponseData sub-interface for ShopeeGetOperatingHourRestrictionsResponse
 */
export interface ShopeeGetOperatingHourRestrictionsResponseData {
  /**
   * The restrictions for Pickup Operating Hours / Preferred Pickup Hours
   */
  regular_operating_hour_restrictions?: ShopeeGetOperatingHourRestrictionsRegularOperatingHourRestriction;
  /**
   * The restrictions for Instant Operating Hours
   */
  instant_operating_hour_restrictions?: ShopeeGetOperatingHourRestrictionsInstantOperatingHourRestriction;
  /**
   * The restrictions for Special Operating Hours
   */
  special_operating_hour_restrictions?: ShopeeGetOperatingHourRestrictionsSpecialOperatingHourRestriction;
  /**
   * The restrictions for Shop Collection Operating Hours
   */
  shop_collection_operating_hour_restrictions?: ShopeeGetOperatingHourRestrictionsShopCollectionOperatingHourRestriction;
}

/**
 * Response payload for get_operating_hour_restrictions
 *
 * This API is designed to retrieve all restrictions related to inputting operating hours for the v2.logistics.update_operating_hours function. This API ensures that user are aware of any limitations or conditions that may affect their operating hours.
 */
export type ShopeeGetOperatingHourRestrictionsResponse =
  ShopeeResponseCommon<ShopeeGetOperatingHourRestrictionsResponseData>;

/**
 * ShopeeGetOperatingHoursMonday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursMonday {
  /**
   * Start time for Monday
   */
  start_time?: string;
  /**
   * End time for Monday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursTuesday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursTuesday {
  /**
   * Start time for Tuesday
   */
  start_time?: string;
  /**
   * End time for Tuesday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursWednesday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursWednesday {
  /**
   * Start time for Wednesday
   */
  start_time?: string;
  /**
   * End time for Wednesday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursThursday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursThursday {
  /**
   * Start time for Thursday
   */
  start_time?: string;
  /**
   * End time for Thursday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursFriday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursFriday {
  /**
   * Start time for Friday
   */
  start_time?: string;
  /**
   * End time for Friday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursSaturday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursSaturday {
  /**
   * Start time for Saturday
   */
  start_time?: string;
  /**
   * End time for Saturday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursSunday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursSunday {
  /**
   * Start time for Sunday
   */
  start_time?: string;
  /**
   * End time for Sunday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursPublicHoliday sub-interface for ShopeeGetOperatingHoursRegularOperatingHour
 */
export interface ShopeeGetOperatingHoursPublicHoliday {
  /**
   * Start time for Public Holiday
   */
  start_time?: string;
  /**
   * End time for Public Holiday
   */
  end_time?: string;
}

/**
 * ShopeeGetOperatingHoursRegularOperatingHour sub-interface for ShopeeGetOperatingHoursRepsonse
 */
export interface ShopeeGetOperatingHoursRegularOperatingHour {
  /**
   * The Operating hours for Monday
   */
  monday?: ShopeeGetOperatingHoursMonday;
  /**
   * The Operating hours for Tuesday
   */
  tuesday?: ShopeeGetOperatingHoursTuesday;
  /**
   * The Operating hours for Wednesday
   */
  wednesday?: ShopeeGetOperatingHoursWednesday;
  /**
   * The Operating hours for Thursday
   */
  thursday?: ShopeeGetOperatingHoursThursday;
  /**
   * The Operating hours for Friday
   */
  friday?: ShopeeGetOperatingHoursFriday;
  /**
   * The Operating hours for Saturday
   */
  saturday?: ShopeeGetOperatingHoursSaturday;
  /**
   * The Operating hours for Sunday
   */
  sunday?: ShopeeGetOperatingHoursSunday;
  /**
   * The Operating hours for Public Holiday
   */
  public_holiday?: ShopeeGetOperatingHoursPublicHoliday;
}

/**
 * ShopeeGetOperatingHoursInstantOperatingHour sub-interface for ShopeeGetOperatingHoursRepsonse
 */
export interface ShopeeGetOperatingHoursInstantOperatingHour {
  /**
   * The Operating hours for Monday
   */
  monday?: ShopeeGetOperatingHoursMonday;
  /**
   * The Operating hours for Tuesday
   */
  tuesday?: ShopeeGetOperatingHoursTuesday;
  /**
   * The Operating hours for Wednesday
   */
  wednesday?: ShopeeGetOperatingHoursWednesday;
  /**
   * The Operating hours for Thursday
   */
  thursday?: ShopeeGetOperatingHoursThursday;
  /**
   * The Operating hours for Friday
   */
  friday?: ShopeeGetOperatingHoursFriday;
  /**
   * The Operating hours for Saturday
   */
  saturday?: ShopeeGetOperatingHoursSaturday;
  /**
   * The Operating hours for Sunday
   */
  sunday?: ShopeeGetOperatingHoursSunday;
  /**
   * The Operating hours for Public Holiday
   */
  public_holiday?: ShopeeGetOperatingHoursPublicHoliday;
}

/**
 * ShopeeGetOperatingHoursOperatingHour sub-interface for ShopeeGetOperatingHoursSpecialOperatingHour
 */
export interface ShopeeGetOperatingHoursOperatingHour {
  /**
   * Date: it should include all date from start_date until end_date
   */
  date?: string;
  /**
   * Start time for that date<path></path>
   */
  start_time?: string;
  /**
   * End time for that date
   */
  end_time?: string;
  /**
   * True: If it is open on that date.False: If it is closed on that date.
   */
  enable?: boolean;
}

/**
 * ShopeeGetOperatingHoursSpecialOperatingHour sub-interface for ShopeeGetOperatingHoursRepsonse
 */
export interface ShopeeGetOperatingHoursSpecialOperatingHour {
  /**
   * The name of Special Operating Hours
   */
  name?: string;
  /**
   * The start date of special operating hours
   */
  start_date?: string;
  /**
   * The end date of special operating hours
   */
  end_date?: string;
  operating_hours?: ShopeeGetOperatingHoursOperatingHour[];
}

/**
 * ShopeeGetOperatingHoursShopCollectionOperatingHour sub-interface for ShopeeGetOperatingHoursRepsonse
 */
export interface ShopeeGetOperatingHoursShopCollectionOperatingHour {
  /**
   * The Operating hours for Monday
   */
  monday?: ShopeeGetOperatingHoursMonday;
  /**
   * The Operating hours for Tuesday
   */
  tuesday?: ShopeeGetOperatingHoursTuesday;
  /**
   * The Operating hours for Wednesday
   */
  wednesday?: ShopeeGetOperatingHoursWednesday;
  /**
   * The Operating hours for Thursday
   */
  thursday?: ShopeeGetOperatingHoursThursday;
  /**
   * The Operating hours for Friday
   */
  friday?: ShopeeGetOperatingHoursFriday;
  /**
   * The Operating hours for Saturday
   */
  saturday?: ShopeeGetOperatingHoursSaturday;
  /**
   * The Operating hours for Sunday
   */
  sunday?: ShopeeGetOperatingHoursSunday;
  /**
   * The Operating hours for Public Holiday
   */
  public_holiday?: ShopeeGetOperatingHoursPublicHoliday;
}

/**
 * ShopeeGetOperatingHoursRepsonse sub-interface for ShopeeGetOperatingHoursResponse
 */
export interface ShopeeGetOperatingHoursRepsonse {
  /**
   * The details of Pickup Operating Hours/Preferred Pickup Hours
   */
  regular_operating_hour?: ShopeeGetOperatingHoursRegularOperatingHour;
  /**
   * The details of Instant Operating Hours
   */
  instant_operating_hour?: ShopeeGetOperatingHoursInstantOperatingHour;
  /**
   * The details of Special Operating Hours<path></path>
   */
  special_operating_hour?: ShopeeGetOperatingHoursSpecialOperatingHour;
  /**
   * The details of Shop Collection Operating Hours
   */
  shop_collection_operating_hour?: ShopeeGetOperatingHoursShopCollectionOperatingHour;
}

/**
 * Response data payload for get_operating_hours
 */
export interface ShopeeGetOperatingHoursResponseData {
  repsonse?: ShopeeGetOperatingHoursRepsonse;
}

/**
 * Response payload for get_operating_hours
 *
 * This API is utilized to retrieve the existing operating hours of sellers including Pickup Operating Hours,  Special Hours, Instant Operating Hours, and Shop Collection Operating Hours.
 */
export type ShopeeGetOperatingHoursResponse = ShopeeResponseCommon<ShopeeGetOperatingHoursResponseData>;

/**
 * ShopeeGetPauseStatusResponseData sub-interface for ShopeeGetPauseStatusResponse
 */
export interface ShopeeGetPauseStatusResponseData {
  /**
   * Indicate the current pause status of logistics channels under the shop. Applicable values: - true: All relevant channels are currently paused and will not have any new incoming orders- false: No channels are paused and may have new incoming ordersNote: Please first call v2.logistics.get_pause_status to query the current suspension status of instant orders for the store. If is_paused = true, then call v2.logistics.get_channel_list and identify the range of channels affected by the pause function through support_pause = true.
   */
  is_paused?: boolean;
  /**
   * Time at which the relevant paused channels will automatically resume, returned only when is_paused = true, indicating the estimated time when the system will automatically resume order acceptance after the daily remaining quota is exhausted.Note: During the pause period, the seller may call the v2.logistics.set_pause_status at any time with is_paused = false to manually resume order acceptance. After resumption, the consumption of the daily remaining quota will stop and it will be retained until reset the next day.
   */
  pause_end_time?: number;
  /**
   * The remaining pause quota of the shop on the current day, in seconds, returned only when is_paused = false.
   */
  remaining_pause_quota?: number;
}

/**
 * Response payload for get_pause_status
 *
 * This API returns the pause status of logistics channels under the shop. Pausing allows the shop to temporarily prevent buyers from placing orders through specific logistics channels. The response includes whether a pause is currently active, the pause end time (if active), and the remaining daily pause quota in seconds (if inactive). Sellers need to refer to the support_pause field in v2.logistics.get_channel_list response to determine which channels are actually paused.
 */
export type ShopeeGetPauseStatusResponse = ShopeeResponseCommon<ShopeeGetPauseStatusResponseData>;

/**
 * ShopeeGetShippingDocumentDataInfo_GetShippingDocumentDataInfoRecipientAddressInfo sub-interface for ShopeeGetShippingDocumentDataInfoResponseData
 */
export interface ShopeeGetShippingDocumentDataInfo_GetShippingDocumentDataInfoRecipientAddressInfo {
  /**
   * queried field in recipient address
   */
  key?: string;
  /**
   * base64 encoded png data string
   */
  image?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoRecipientSortCode sub-interface for ShopeeGetShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetShippingDocumentDataInfoRecipientSortCode {
  /**
   * The first-level sort_code of recipient.
   */
  first_recipient_sort_code?: string;
  /**
   * The second-level sort_code of recipient.
   */
  second_recipient_sort_code?: string;
  /**
   * The third-level sort_code of recipient.
   */
  third_recipient_sort_code?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoSenderSortCode sub-interface for ShopeeGetShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetShippingDocumentDataInfoSenderSortCode {
  /**
   * The first-level sort_code of sender.
   */
  first_sender_sort_code?: string;
  /**
   * The second-level sort_code of sender.
   */
  second_sender_sort_code?: string;
  /**
   * The third-level sort_code of sender.
   */
  third_sender_sort_code?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoReturnSortCode sub-interface for ShopeeGetShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetShippingDocumentDataInfoReturnSortCode {
  /**
   * The first-level sort code for 3PL doing RTS.
   */
  return_first_sort_code?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoBuyerPreferDeliveryTime sub-interface for ShopeeGetShippingDocumentDataInfoThirdPartyLogisticInfo
 */
export interface ShopeeGetShippingDocumentDataInfoBuyerPreferDeliveryTime {
  /**
   * The slot which buyer choose
   */
  slot_id?: string;
  /**
   * The start time of a day buyer prefer to receive the packages
   */
  start_time?: string;
  /**
   * The end time of a day buyer prefer to receive the packages.
   */
  end_time?: string;
  /**
   * The detailed instructions of the package delivering.
   */
  description?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoThirdPartyLogisticInfo sub-interface for ShopeeGetShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetShippingDocumentDataInfoThirdPartyLogisticInfo {
  /**
   * Use this field to indicate the order category.
   */
  service_description?: string;
  /**
   * The manufacturer barcode.
   */
  barcode?: string;
  /**
   * The purchase_time of the store.
   */
  purchase_time?: string;
  /**
   * The return_time of the store.
   */
  return_time?: string;
  /**
   * The name of manufacturers.
   */
  manufacturers_name?: string;
  /**
   * The website of manufacturers.
   */
  manufacturers_website?: string;
  /**
   * The identification of recipient area.
   */
  recipient_area?: string;
  /**
   * The route code of the waybill.
   */
  route_step?: string;
  /**
   * The tally code of the waybill.
   */
  suda5_code?: string;
  /**
   * The code of large logistics.
   */
  large_logistics_id?: string;
  /**
   * The parent code of the waybill.
   */
  parent_id?: string;
  /**
   * Use this field to indicate the return cycle.
   */
  return_cycle?: string;
  /**
   * Use this field to indicate the return mode.
   */
  return_mode?: string;
  /**
   * The reminder of stork work.
   */
  prompt?: string;
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * The QR code of the waybill.
   */
  qrcode?: string;
  /**
   * The supplier name of channel.
   */
  ec_supplier_name?: string;
  /**
   * Use this field to indicate the first barcode.
   */
  ec_bar_code16?: string;
  /**
   * The device code.
   */
  equipment_id?: string;
  /**
   * The child code for B2C Family-mart.
   */
  eshop_id?: string;
  /**
   * Use this field to indicate the pick barcode.
   */
  ec_bar_code9?: string;
  /**
   * The tracking number of Shopee Delivery.
   */
  pelican_tracking_no?: string;
  /**
   * The date of printing the wayBill.
   */
  print_date?: string;
  /**
   * The sort code of the order.
   */
  pzip?: string;
  /**
   * The barcode of the sort code.
   */
  pzip_c?: string;
  /**
   * The code of the delivery area.
   */
  deliver_area_txt?: string;
  /**
   * Expected delivery date of the order.
   */
  deliver_date_ymd?: string;
  /**
   * Lorry driver code of the order.
   */
  sd_driver_code?: string;
  /**
   * Motorcycle driver code of the order.
   */
  md_driver_code?: string;
  /**
   * Stacking area of the order.
   */
  putorder_stackzone_code?: string;
  /**
   * The customer code of Shopee.
   */
  customer_code?: string;
  /**
   * Use this field to indicate the delivery router.
   */
  deliver_router?: string;
  /**
   * Use this field to indicate the store type.
   */
  store_type?: string;
  /**
   * Use this field to indicate the pick router.
   */
  pick_router?: string;
  /**
   * The main logistic barcode of the waybill.
   */
  barcode_dc?: string;
  /**
   * Use this field to indicate the logistics order number.
   */
  ec_order_number?: string;
  /**
   * The sorting barcode of the waybill.
   */
  barcode_pr?: string;
  /**
   * The first pick barcode of the waybill.
   */
  first_pick_barcode?: string;
  /**
   * The second pick barcode of the waybill.
   */
  second_pick_barcode?: string;
  /**
   * Use this field to indicate the service type.
   */
  is_cod_bool?: string;
  /**
   * Use this field to indicate the receiver name.
   */
  receiver_name?: string;
  /**
   * Use this field to indicate the receiver store name.
   */
  rcv_store_name?: string;
  /**
   * Use this field indicates destination service point code.
   */
  branch_code?: string;
  /**
   * Use this field indicates destination service point name.
   */
  branch_name?: string;
  /**
   * Use this field indicates buyer phone number (last 3 digits).
   */
  last_third_digits_recipient_phone?: string;
  /**
   * Use this field indicates seller phone number (last 3 digits).
   */
  last_third_digits_sender_phone?: string;
  /**
   * First barcode no. sacnned when seller drop off
   */
  barcode_no1?: string;
  /**
   * Second barcode no. sacnned when seller drop off
   */
  barcode_no2?: string;
  /**
   * AWB Print date and time
   */
  print_datetime?: string;
  /**
   * Middle type used in OK Mart SOC
   */
  ok_mid_type?: string;
  /**
   * Aisle no. used in OK Mart SOC
   */
  ok_aisle_no?: string;
  /**
   * Grid no used in OK Mart SOC
   */
  ok_grid_no?: string;
  /**
   * The tracking number of OK Mart.
   */
  ok_tracking_number?: string;
  /**
   * OK SOC received no.
   */
  barcode_no3?: string;
  /**
   * Ship type used by OK Mart
   */
  ship_type?: string;
  /**
   * The area of the collect OK branch used for OK sorting
   */
  area?: string;
  /**
   * First barcode no. sacnned when buyer collect
   */
  barcode_no4?: string;
  /**
   * Second barcode no. sacnned when buyer collect
   */
  barcode_no5?: string;
  /**
   * [Only for local TW orders] Last 3 digits of buyer's phone number, apply for channel_id: 30005, 30006, 30007,30014,30015
   */
  tw_last_three_digits_buyer_phone?: string;
  /**
   * [Only for TW channel_id:30005 ] Store name for 7-ELEVEN orders.
   */
  tw_store_name?: string;
  /**
   * [Only for TW channel_id:30005 ]Store number for 7-ELEVEN orders.
   */
  tw_store_number?: string;
  /**
   * [Only for TW channel:30017] The time buyer prefers to receive the packages.
   */
  buyer_prefer_delivery_time?: ShopeeGetShippingDocumentDataInfoBuyerPreferDeliveryTime;
}

/**
 * ShopeeGetShippingDocumentDataInfoSpxReceiveStation sub-interface for ShopeeGetShippingDocumentDataInfoShippingDocumentInfo
 */
export interface ShopeeGetShippingDocumentDataInfoSpxReceiveStation {
  /**
   * The first pickup station.
   */
  spx_first_receive_station?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoShippingDocumentInfo sub-interface for ShopeeGetShippingDocumentDataInfoResponseData
 */
export interface ShopeeGetShippingDocumentDataInfoShippingDocumentInfo {
  /**
   * This value indicates whether the order was a COD (cash on delivery) order.
   */
  cod?: boolean;
  /**
   * Use this field to indicate cod amount.
   */
  cod_amount?: string;
  /**
   * Use this field to indicate order weight when calculate the shipping fee. The unit of weigh is gram.
   */
  order_weight?: number;
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id?: number;
  /**
   * The logistics service provider that the buyer selected for the order to deliver items.
   */
  shipping_carrier?: string;
  /**
   * Only work for cross-border order. This code is required at some sorting hub. Please ensure the service_code is INCLUDED on your shipping label, otherwise the parcel cannot be processed by the warehouse. If you didn't retrieve service_code after you first called this API, please try few more times within 30 minutes.
   */
  service_code?: string;
  /**
   * Only work for cross-border order.The name of the carrier ships cross country or region.
   */
  first_mile_name?: string;
  /**
   * Only work for cross-border order.The name of the carrier delivers the parcels in local country or region.
   */
  last_mile_name?: string;
  /**
   * Only work for cross-border order.This value indicates whether the order contains goods that are required to declare at customs. "T" means true and it will mark as "T" on the shipping label; "F" means false and it will mark as "P" on the shipping label. This value is accurate ONLY AFTER the order trackingNo is generated, please capture this value AFTER your retrieve the trackingNo.
   */
  goods_to_declare?: boolean;
  /**
   * Only work for cross-border order. The string use for waybill printing. The format is "S - region_code and lane_number". For example, S-TH01, S-TH02
   */
  lane_code?: string;
  /**
   * Only work for cross-border order in some special shop. The address info of the warehouse.
   */
  warehouse_address?: string;
  /**
   * Only work for cross-border order in some special shop. The ID of the warehouse.
   */
  warehouse_id?: string;
  /**
   * The sort_code of recipient.
   */
  recipient_sort_code?: ShopeeGetShippingDocumentDataInfoRecipientSortCode;
  /**
   * The sort_code of sender.
   */
  sender_sort_code?: ShopeeGetShippingDocumentDataInfoSenderSortCode;
  /**
   * The sort code for 3PL doing RTS.
   */
  return_sort_code?: ShopeeGetShippingDocumentDataInfoReturnSortCode;
  /**
   * Only used for TW sellers.
   */
  third_party_logistic_info?: ShopeeGetShippingDocumentDataInfoThirdPartyLogisticInfo;
  /**
   * The tracking number assigned by the shipping carrier for item shipment.
   */
  tracking_number?: string;
  /**
   * First mile tracking NO. for CrossBoard BR seller can be used to self-design CB Brazil AWB.
   */
  shopee_tracking_number?: string;
  /**
   * The last-mile tracking number. Only for Cross Board BR seller.
   */
  last_mile_tracking_number?: string;
  /**
   * The name of pickup hub.
   */
  pickup_hub?: string;
  /**
   * The name of delivery hub.
   */
  delivery_hub?: string;
  /**
   * Zone name.
   */
  deliver_area?: string;
  /**
   * The name of ec order.
   */
  ec_order_no?: string;
  /**
   * The date of create shipment order.
   */
  create_date_ymd_sl?: string;
  /**
   * The name of manufacturer.
   */
  manufacturers_name?: string;
  /**
   * The website of manufacturer.
   */
  manufacturers_website?: string;
  /**
   * Use this field to indicate order contains dangerous goods or not.0: Non-dangerous good1: Dangerous good2: Prohibited
   */
  is_lm_dg_bool?: number;
  /**
   * Use this field to indicate delivery address is residential or office address.0: not configured1: office address2: residential address
   */
  preferred_delivery_option?: number;
  /**
   * The sub-district of recipient's address.
   */
  spx_sub_district?: string;
  /**
   * The spx receive station.
   */
  spx_receive_station?: ShopeeGetShippingDocumentDataInfoSpxReceiveStation;
  /**
   * The zone of this order.
   */
  zone?: string;
  /**
   * Delivery Sub Zone.
   */
  zone_code?: string;
  /**
   * Distribution Center Code.
   */
  destination_base_code?: string;
  /**
   * Use this field indicates buyer phone number (last 3 digits). For non-TW local sellers
   */
  last_third_digits_buyer_phone?: string;
  /**
   * corresponding locker sizing for self-collection locker channels [only available for specific logistic channels: 148003 and 140006]
   */
  parcel_size?: string;
  /**
   * this value indicates whether the buyer select "scan on delivery" payment channel at checkout.
   */
  sod?: boolean;
  /**
   * Buyer's CPF number for taxation and invoice purposes. Only for Brazil order.
   */
  buyer_cpf_id?: string;
  /**
   * only apply for ID/VN shops.mutual_check indicates whether the parcel is eligible for Return-on-the-Spot (RoS) co-check. If mutual_check=1, then the parcel is RoS eligible, where drivers and buyers can co-check the parcel. Buyer can then choose to accept or reject the parcel on the spot.If mutual_check=0, then the parcel is ineligible for RoS.
   */
  mutual_check?: number;
  /**
   * Probability of Successful Friday Delivery.The value of L(low), M(medium), H(high) represent the chances of successful delivery attempts on Friday.
   */
  dely_fri_label?: string;
  /**
   * Probability of Successful Saturday DeliveryThe value of L(low), M(medium), H(high) represent the chances of successful delivery attempts on Saturday.
   */
  dely_sat_label?: string;
  /**
   * Probability of Successful Sunday Delivery.The value of L(low), M(medium), H(high) represent the chances of successful delivery attempts on Sunday.
   */
  dely_sun_label?: string;
  /**
   * For drivers to quickly identify parcel to be picked up. Only returned for ID and TH local orders which use instant+sameday for delivery.
   */
  pickup_code?: string;
  /**
   * [Only for TW 30029 channel] This field indicate the sorting group value of the package. Available values: - North- South
   */
  sorting_group?: string;
  /**
   * [Only for TW 30029 channel] Please refer to this number instead of tracking number for this this channel. This field will be empty for other channels.
   */
  unpackaged_sku_id?: string;
  /**
   * [Only for TW 30029 channel] Please refer to this field to generate the QR code for the shipping document for this channel. This field will be empty for other channels.
   */
  unpackaged_sku_id_qrcode?: string;
  /**
   * This value indicates whether the order is considered a “high value” item and requires special handling by the logistics provider. The threshold to be considered "high value" item differs by region, and is only applicable to SPX channels. For regions other than Malaysia and Thailand, this field will always return empty.
   */
  high_value?: boolean;
  /**
   * Currently only applicable for Brazil, Indonesia, Vietnam, Philippines.For orders with Dangerous Goods, this value indicates the severity of the danger and requires special handling by the logistics provider. 0 = Not classified / no DG sub-type1 = DG_A2 = DG_B3 = DG_C4 = DG_D
   */
  dg_specific_type?: number;
  /**
   * This ID is used by 3PL to determine parcel routing. For regions other than Malaysia and Thailand, this field will always return empty.
   */
  hotspot_id?: string;
  /**
   * This value indicates whether an order has a high / medium / low delivery success rate on each weekend (e.g. sat and sun respectively). For regions other than Malaysia, this field will always return empty.High = HMedium = MLow = L
   */
  weekend1_delivery_success_label?: string;
  /**
   * This value indicates whether an order has a high / medium / low delivery success rate on each weekend (e.g. sat and sun respectively). For regions other than Malaysia, this field will always return empty.High = HMedium = MLow = L
   */
  weekend2_delivery_success_label?: string;
}

/**
 * ShopeeGetShippingDocumentDataInfoResponseData sub-interface for ShopeeGetShippingDocumentDataInfoResponse
 */
export interface ShopeeGetShippingDocumentDataInfoResponseData {
  recipient_address_info?: ShopeeGetShippingDocumentDataInfo_GetShippingDocumentDataInfoRecipientAddressInfo;
  shipping_document_info?: ShopeeGetShippingDocumentDataInfoShippingDocumentInfo;
}

/**
 * Response payload for get_shipping_document_data_info
 *
 * Use this api to fetch the logistics information of an order, these info can be used for self-design AWB printing. Besides, this api supports returning personal info as images.
 */
export type ShopeeGetShippingDocumentDataInfoResponse =
  ShopeeResponseCommon<ShopeeGetShippingDocumentDataInfoResponseData>;

/**
 * ShopeeGetShippingDocumentJobStatusResponseData sub-interface for ShopeeGetShippingDocumentJobStatusResponse
 */
export interface ShopeeGetShippingDocumentJobStatusResponseData {
  /**
   * Generated Job ID for status tracking and download the Shipping Document
   */
  job_id?: string;
  /**
   * Generated Shipping Document file name.
   */
  job_name?: string;
  /**
   * Requested Shipping Document current status. Available values: PROCESSING, READY, EXPIRED, FAILED
   */
  job_status?: ShopeeJobStatus | string | number;
}

/**
 * Response payload for get_shipping_document_job_status
 *
 * This API retrieves the status of a shipping document job using the job ID provided.
 */
export type ShopeeGetShippingDocumentJobStatusResponse =
  ShopeeResponseCommon<ShopeeGetShippingDocumentJobStatusResponseData>;

/**
 * Response data payload for set_address_config
 */
export type ShopeeSetAddressConfigResponseData = Record<string, never>;

/**
 * Response payload for set_address_config
 *
 * Use this API to set address config of your shop.
 */
export type ShopeeSetAddressConfigResponse = ShopeeResponseCommon<ShopeeSetAddressConfigResponseData>;

/**
 * ShopeeSetMartPackagingInfo_SetMartPackagingInfoDimension sub-interface for ShopeeSetMartPackagingInfoResponseData
 */
export interface ShopeeSetMartPackagingInfo_SetMartPackagingInfoDimension {
  /**
   * The length of the packaging in centimetres (cm).
   */
  length?: number;
  /**
   * The width of the packaging in centimetres (cm).
   */
  width?: number;
  /**
   * The height of the packaging in centimetres (cm).
   */
  height?: number;
}

/**
 * ShopeeSetMartPackagingInfo_SetMartPackagingInfoPackagingFee sub-interface for ShopeeSetMartPackagingInfoResponseData
 */
export interface ShopeeSetMartPackagingInfo_SetMartPackagingInfoPackagingFee {
  /**
   * The packaging fee price in the seller's local currency.
   */
  value?: number;
}

/**
 * ShopeeSetMartPackagingInfoResponseData sub-interface for ShopeeSetMartPackagingInfoResponse
 */
export interface ShopeeSetMartPackagingInfoResponseData {
  /**
   * Indicates whether the seller has enabled or disabled the packaging fee configuration.True: The seller charges a packaging fee.False: The seller does not charge a packaging fee.
   */
  enable?: boolean;
  /**
   * Returned only if enabled is set to True.
   */
  dimension?: ShopeeSetMartPackagingInfo_SetMartPackagingInfoDimension;
  /**
   * Returned only if enabled is set to True.
   */
  packaging_fee?: ShopeeSetMartPackagingInfo_SetMartPackagingInfoPackagingFee;
}

/**
 * Response payload for set_mart_packaging_info
 *
 * [Only for ID mart seller] This API allows sellers to set up their packaging fee info. Through this API, sellers can enable or disable packaging fees, and if enabled, specify the dimensions of the packaging and the associated fee. This ensures that sellers can configure their shipping costs accurately based on their packaging requirements.
 */
export type ShopeeSetMartPackagingInfoResponse = ShopeeResponseCommon<ShopeeSetMartPackagingInfoResponseData>;

/**
 * ShopeeSetPauseStatusResponseData sub-interface for ShopeeSetPauseStatusResponse
 */
export interface ShopeeSetPauseStatusResponseData {
  /**
   * Indicate the current pause status of logistics channels under the shop. Applicable values: - true: All relevant channels are currently paused and will not have any new incoming orders- false: No channels are paused and may have new incoming ordersNote: Please first call v2.logistics.get_pause_status to query the current suspension status of instant orders for the store. If is_paused = true, then call v2.logistics.get_channel_list and identify the range of channels affected by the pause function through support_pause = true.
   */
  is_paused?: boolean;
  /**
   * Time at which the relevant paused channels will automatically resume, returned only when is_paused = true, indicating the estimated time when the system will automatically resume order acceptance after the daily remaining quota is exhausted.Note: During the pause period, the seller may call the v2.logistics.set_pause_status at any time with is_paused = false to manually resume order acceptance. After resumption, the consumption of the daily remaining quota will stop and it will be retained until reset the next day.
   */
  pause_end_time?: number;
  /**
   * The remaining pause quota of the shop on the current day, in seconds, returned only when is_paused = false.
   */
  remaining_pause_quota?: number;
}

/**
 * Response payload for set_pause_status
 *
 * Use this API to set the pause status of logistics channels under the shop. Pausing allows the shop to temporarily prevent buyers from placing orders through specific logistics channels. The response includes whether a pause is currently active, the pause end time (if active), and the remaining daily pause quota in seconds (if inactive). Note: The pause may take a few moments to take effect. Please check for any additional orders that may still be placed during this window.
 */
export type ShopeeSetPauseStatusResponse = ShopeeResponseCommon<ShopeeSetPauseStatusResponseData>;

/**
 * Response data payload for ship_booking
 */
export type ShopeeShipBookingResponseData = Record<string, never>;

/**
 * Response payload for ship_booking
 *
 * Use this api to initiate logistics including arrange pickup, dropoff. Should call v2.logistics.get_booking_shipping_parameter to fetch all required param first.
 */
export type ShopeeShipBookingResponse = ShopeeResponseCommon<ShopeeShipBookingResponseData>;

/**
 * Response data payload for update_address
 */
export type ShopeeUpdateAddressResponseData = Record<string, never>;

/**
 * Response payload for update_address
 *
 * Use this API to update the address of a shop.
 */
export type ShopeeUpdateAddressResponse = ShopeeResponseCommon<ShopeeUpdateAddressResponseData>;

/**
 * ShopeeUpdateChannelAutoCallDriverSetting sub-interface for ShopeeUpdateChannelRequest
 */
export interface ShopeeUpdateChannelAutoCallDriverSetting {
  /**
   * Whether to enable Auto Call Driver for this logistic channel.
   */
  auto_call_driver_enabled?: boolean;
  /**
   * Used to set the Preparation Time for this channel, in minutes. Required when auto_call_driver_enabled = true.Note: Please ensure the passed preparation_time value falls within the preparation_time_limit range returned by v2.logistics.get_channel_list.
   */
  preparation_time?: number;
}

/**
 * ShopeeUpdateChannelUnsupportWarehouse sub-interface for ShopeeUpdateChannelUpdatedChannel
 */
export interface ShopeeUpdateChannelUnsupportWarehouse {
  /**
   * Unsupported warehouse ID
   */
  warehouse_id?: number;
  /**
   * Unsupported warehouse name
   */
  warehouse_name?: string;
}

/**
 * ShopeeUpdateChannelUpdatedChannel sub-interface for ShopeeUpdateChannelResponseData
 */
export interface ShopeeUpdateChannelUpdatedChannel {
  /**
   * Logistics channel ID
   */
  channel_id?: number;
  /**
   * Logistics channel name
   */
  channel_display_name?: string;
  /**
   * List details of unsupported warehouses
   */
  unsupport_warehouse?: ShopeeUpdateChannelUnsupportWarehouse[];
}

/**
 * ShopeeUpdateChannelResponseData sub-interface for ShopeeUpdateChannelResponse
 */
export interface ShopeeUpdateChannelResponseData {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * Whether this logistic channel is enabled.
   */
  enabled?: boolean;
  /**
   * Whether COD is enabled for this channel.
   */
  cod_enabled?: boolean;
  /**
   * The identity of logistic channel.
   */
  logistics_channel_id?: number;
  /**
   * List of channels that are updated in the operation (inclusive of dependent logistics channels)
   */
  updated_channels?: ShopeeUpdateChannelUpdatedChannel[];
  is_multi_warehouse?: boolean;
  auto_call_driver_setting?: ShopeeUpdateChannelAutoCallDriverSetting;
}

/**
 * Response payload for update_channel
 *
 * Use this api to update shop level logistics channel's configuration.
 */
export type ShopeeUpdateChannelResponse = ShopeeResponseCommon<ShopeeUpdateChannelResponseData>;

/**
 * ShopeeUpdateOperatingHours_UpdateOperatingHoursRegularOperatingHour sub-interface for ShopeeUpdateOperatingHoursResult
 */
export interface ShopeeUpdateOperatingHours_UpdateOperatingHoursRegularOperatingHour {
  /**
   * The system will return "Failed" if there are any validation errors. Otherwise, it will return a blank response.
   */
  status?: string;
  /**
   * Fail reason
   */
  fail_message?: string;
}

/**
 * ShopeeUpdateOperatingHours_UpdateOperatingHoursSpecialOperatingHour sub-interface for ShopeeUpdateOperatingHoursResult
 */
export interface ShopeeUpdateOperatingHours_UpdateOperatingHoursSpecialOperatingHour {
  /**
   * The system will return "Failed" if there are any validation errors. Otherwise, it will return a blank response.
   */
  status?: string;
  /**
   * Fail reason
   */
  fail_message?: string;
}

/**
 * ShopeeUpdateOperatingHours_UpdateOperatingHoursInstantOperatingHour sub-interface for ShopeeUpdateOperatingHoursResult
 */
export interface ShopeeUpdateOperatingHours_UpdateOperatingHoursInstantOperatingHour {
  /**
   * The system will return "Failed" if there are any validation errors. Otherwise, it will return a blank response.
   */
  status?: string;
  /**
   * Fail reason
   */
  fail_message?: string;
}

/**
 * ShopeeUpdateOperatingHours_UpdateOperatingHoursShopCollectionOperatingHour sub-interface for ShopeeUpdateOperatingHoursResult
 */
export interface ShopeeUpdateOperatingHours_UpdateOperatingHoursShopCollectionOperatingHour {
  /**
   * The system will return "Failed" if there are any validation errors. Otherwise, it will return a blank response.
   */
  status?: string;
  /**
   * Fail reason
   */
  fail_message?: string;
}

/**
 * ShopeeUpdateOperatingHoursResult sub-interface for ShopeeUpdateOperatingHoursResponseData
 */
export interface ShopeeUpdateOperatingHoursResult {
  /**
   * The result of create/update regular_operating_hour.
   */
  regular_operating_hour?: ShopeeUpdateOperatingHours_UpdateOperatingHoursRegularOperatingHour;
  /**
   * The result of create/update speicial_operating_hour.
   */
  special_operating_hour?: ShopeeUpdateOperatingHours_UpdateOperatingHoursSpecialOperatingHour;
  /**
   * The result of create/update instant_operating_hour.
   */
  instant_operating_hour?: ShopeeUpdateOperatingHours_UpdateOperatingHoursInstantOperatingHour;
  /**
   * The result of create/update shop_collection_operating_hour.
   */
  shop_collection_operating_hour?: ShopeeUpdateOperatingHours_UpdateOperatingHoursShopCollectionOperatingHour;
}

/**
 * ShopeeUpdateOperatingHoursResponseData sub-interface for ShopeeUpdateOperatingHoursResponse
 */
export interface ShopeeUpdateOperatingHoursResponseData {
  result_list?: ShopeeUpdateOperatingHoursResult[];
}

/**
 * Response payload for update_operating_hours
 *
 * This API is designed to allow sellers to update their operating hours. It is essential that the values provided in this API align with the restrictions retrieved from the v2.logistics.get_operating_hour_restrictions API to ensure compliance with platform requirements. This API uses overwriting updates, when updating pickup operating hours, still need to include all parts even those not needing changes.
 */
export type ShopeeUpdateOperatingHoursResponse = ShopeeResponseCommon<ShopeeUpdateOperatingHoursResponseData>;

/**
 * Response data payload for update_self_collection_order_logistics
 */
export type ShopeeUpdateSelfCollectionOrderLogisticsResponseData = Record<string, never>;

/**
 * Response payload for update_self_collection_order_logistics
 *
 * Use this api to update the order status for buyer to collect the orders directly from your pharmacy. This includes indicating that order is ready for collection, and that the order has been picked up by the buyer. You should call v2.logistics.get_order_detail or v2.logistics.get_package_detail first to get the package_number of such orders.
 */
export type ShopeeUpdateSelfCollectionOrderLogisticsResponse =
  ShopeeResponseCommon<ShopeeUpdateSelfCollectionOrderLogisticsResponseData>;

/**
 * ShopeeUpdateTrackingStatusResponseData sub-interface for ShopeeUpdateTrackingStatusResponse
 */
export interface ShopeeUpdateTrackingStatusResponseData {
  /**
   * Update results:- succeed- failed
   */
  update_result?: string;
}

/**
 * Response payload for update_tracking_status
 *
 * Only available for Brazil sellers. This API is only available for orders/parcels which are fulfilled by BR Seller Logistics channel (logistics_channel_id: 90021), Samsung (logistics_channel_id: 90025) and BR Instant Delivery channel (logistics_channel_id: 90026). The logistics_status will become LOGISTICS_REQUEST_CREATED after arrange shipment, and can call this API to update to: LOGISTICS_PICKUP_DONE, LOGISTICS_DELIVERY_DONE, LOGISTICS_DELIVERY_FAILED.
 */
export type ShopeeUpdateTrackingStatusResponse = ShopeeResponseCommon<ShopeeUpdateTrackingStatusResponseData>;

/**
 * ShopeeUploadServiceablePolygonResponseData sub-interface for ShopeeUploadServiceablePolygonResponse
 */
export interface ShopeeUploadServiceablePolygonResponseData {
  /**
   * Use the task_id to call v2.logistics.check_polygon_update_status to check if the upload job has been completed.
   */
  task_id?: string;
}

/**
 * Response payload for upload_serviceable_polygon
 *
 * Only available for Brazil sellers. Use this API to upload KML file for shop level serviceability setting for BR Entrega Turbo channel (Channel ID: 90026). Please note that multiple Outlet Shops under the same Mart Shop cannot have overlapping service areas.
 */
export type ShopeeUploadServiceablePolygonResponse = ShopeeResponseCommon<ShopeeUploadServiceablePolygonResponseData>;
