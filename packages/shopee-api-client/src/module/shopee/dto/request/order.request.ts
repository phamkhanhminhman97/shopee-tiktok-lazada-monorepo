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

// ---- Appended: additional endpoints (batch 3) ----
import { ShopeeBookingStatus } from '../response/order.response';

/**
 * Enum generated for field ShopeeResponseOptionalFields
 */
export enum ShopeeResponseOptionalFields {
  BUYER_USER_ID = "buyer_user_id",
  BUYER_USERNAME = "buyer_username",
  ESTIMATED_SHIPPING_FEE = "estimated_shipping_fee",
  RECIPIENT_ADDRESS = "recipient_address",
  ACTUAL_SHIPPING_FEE = "actual_shipping_fee",
  GOODS_TO_DECLARE = "goods_to_declare",
  NOTE = "note",
  NOTE_UPDATE_TIME = "note_update_time",
  ITEM_LIST = "item_list",
  PAY_TIME = "pay_time",
  DROPSHIPPER = "dropshipper",
  DROPSHIPPER_PHONE = "dropshipper_phone",
  SPLIT_UP = "split_up",
  BUYER_CANCEL_REASON = "buyer_cancel_reason",
  CANCEL_BY = "cancel_by",
  CANCEL_REASON = "cancel_reason",
  ACTUAL_SHIPPING_FEE_CONFIRMED = "actual_shipping_fee_confirmed",
  BUYER_CPF_ID = "buyer_cpf_id",
  FULFILLMENT_FLAG = "fulfillment_flag",
  PICKUP_DONE_TIME = "pickup_done_time",
  PACKAGE_LIST = "package_list",
  SHIPPING_CARRIER = "shipping_carrier",
  PAYMENT_METHOD = "payment_method",
  TOTAL_AMOUNT = "total_amount",
  INVOICE_DATA = "invoice_data",
  ORDER_CHARGEABLE_WEIGHT_GRAM = "order_chargeable_weight_gram",
  RETURN_REQUEST_DUE_DATE = "return_request_due_date",
  EDT = "edt",
  PAYMENT_INFO = "payment_info",
  INTERNATIONAL_LABEL = "international_label",
}

/**
 * Enum generated for field ShopeeTimeRangeField
 */
export enum ShopeeTimeRangeField {
  CREATE_TIME = "create_time",
  UPDATE_TIME = "update_time",
}

/**
 * ShopeeDownloadFbsInvoicesRequestId sub-interface for ShopeeDownloadFbsInvoicesRequest
 */
export interface ShopeeDownloadFbsInvoicesRequestId {
  request_id: number[];
}

/**
 * Request parameters for download_fbs_invoices
 *
 * This API allows you to download FBS invoices. To use this API, the client must first call v2.order.generate_fbs_invoices to create a new shipping document task, followed by calling v2.order.get_fbs_invoices_result to check the task status. The document can only be downloaded once the task status is "READY."
 */
export interface ShopeeDownloadFbsInvoicesRequest {
  /**
   * list of request id (task identifiers)
   */
  request_id_list?: ShopeeDownloadFbsInvoicesRequestId[];
}

/**
 * Request parameters for download_invoice_doc
 *
 * This endpoint only for PH and BR local seller. Seller can download the invoice uploaded before through this endpoint.
 */
export interface ShopeeDownloadInvoiceDocRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
}

/**
 * ShopeeGenerateFbsInvoicesBatchDownload sub-interface for ShopeeGenerateFbsInvoicesRequest
 */
export interface ShopeeGenerateFbsInvoicesBatchDownload {
  /**
   * Format YYYYMMDDe.g. 20240101
   */
  start: number;
  /**
   * Format YYYYMMDDe.g. 20240101
   */
  end: number;
  /**
   * 1 = Remessa2 = Return3 = Symbolic Return4 = Sale5 = Entrada6 = Symbolic Remessa7 = all
   */
  document_type: number;
  /**
   * 1 = xml only2 = pdf only3 = both
   */
  file_type: number;
  /**
   * 1= authorized only2= cancelledDefault: If document_status not passed or passed empty, means documents under ALL status (both authorized and cancelled) must be included
   */
  document_status?: number;
}

/**
 * Request parameters for generate_fbs_invoices
 *
 * This API creates a task to download a specific tax document (e.g., sales invoice, remessa invoice) for the seller's account, available only after the document is issued by the system as part of the Fulfilled by Shopee (FBS) process.
 * The workflow is as follows: (1) v2.order.generate_fbs_invoices; (2) v2.order.get_fbs_invoices_result; (3) v2.order.download_fbs_invoices.
 * Please note: The download link for the document will expire 30 minutes after being generated.
 */
export interface ShopeeGenerateFbsInvoicesRequest {
  batch_download?: ShopeeGenerateFbsInvoicesBatchDownload;
}

/**
 * Request parameters for get_booking_detail
 *
 * Use this api to get booking detail.
 */
export interface ShopeeGetBookingDetailRequest {
  /**
   * The set of booking_sn. If there are multiple booking_sn, you need to use English comma to connect them. limit [1,50]
   */
  booking_sn_list: string[];
  /**
   * The response fields you want to get. Please select from the below response parameters. If you input an object field, all the params under it will be included automatically in the response. If there are multiple response fields you want to get, you need to use English comma to connect them. Available values: item_list,cancel_by,cancel_reason,fulfillment_flag,pickup_done_time,shipping_carrier, recipient_address, dropshipper, dropshipper_phone
   */
  response_optional_fields?: ShopeeResponseOptionalFields | string | number;
}

/**
 * Request parameters for get_booking_list
 *
 * Use this api to search bookings. You may also filter them by status, if needed.
 */
export interface ShopeeGetBookingListRequest {
  /**
   * The kind of time_from and time_to. Available value: create_time, update_time.
   */
  time_range_field: ShopeeTimeRangeField | string | number;
  /**
   * The time_from and time_to fields specify a date range for retrieving bookings (based on the time_range_field). The time_from field is the starting date range. The maximum date range that may be specified with the time_from and time_to fields is 15 days.
   */
  time_from: number;
  /**
   * The time_from and time_to fields specify a date range for retrieving bookings (based on the time_range_field). The time_from field is the starting date range. The maximum date range that may be specified with the time_from and time_to fields is 15 days.
   */
  time_to: number;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data.The limit of page_size if between 1 and 100.
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
  /**
   * The booking_status filter for retrieving bookings and each one only every request. Available value: READY_TO_SHIP/PROCESSED/SHIPPED/CANCELLED/MATCHED
   */
  booking_status?: ShopeeBookingStatus | string | number;
}

/**
 * ShopeeGetBuyerInvoiceInfoQuerie sub-interface for ShopeeGetBuyerInvoiceInfoRequest
 */
export interface ShopeeGetBuyerInvoiceInfoQuerie {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
}

/**
 * Request parameters for get_buyer_invoice_info
 *
 * API to obtain buyer submitted invoice info for VN, TH and PH local sellers only.
 */
export interface ShopeeGetBuyerInvoiceInfoRequest {
  queries: ShopeeGetBuyerInvoiceInfoQuerie[];
}

/**
 * ShopeeGetEstimateCancelValuePartialCancelItem sub-interface for ShopeeGetEstimateCancelValueRequest
 */
export interface ShopeeGetEstimateCancelValuePartialCancelItem {
  /**
   * The unique identifier of the item to be included in the estimated cancellation value calculation.
   */
  item_id: number;
  /**
   * The unique identifier of the model to be included in the estimated cancellation value calculation.
   */
  model_id: number;
  /**
   * The identify of order item. For items in one same bundle deal promotion, the order_item_id should share the same id, such as 1,2. For items not in bundle deal promotion, the order_item_id should be the same as item_id.
   */
  order_item_id?: number;
  /**
   * The identify of product promotion.It's required for add on deal and bundle deal items.For items in one same add on deal or bundle deal promotion, the promotion_group_id should share the same id. For items not in add on deal or bundle deal promotion, the promotion_group_id should be 0. And the data is from promotion_group_id of v2,order.get_order_detail.
   */
  promotion_group_id?: number;
  /**
   * The quantity of the specified item model to be included in the estimated cancellation value calculation.
   */
  model_quantity: number;
}

/**
 * Request parameters for get_estimate_cancel_value
 *
 * Returns the estimated refund value for a partial order cancellation given the specified items to cancel.
 */
export interface ShopeeGetEstimateCancelValueRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * The list of item models and quantities for which the seller wants to estimate the cancellation value before submitting the actual partial cancellation request.
   */
  partial_cancel_item_list: ShopeeGetEstimateCancelValuePartialCancelItem[];
}

/**
 * ShopeeGetFbsInvoicesResultRequestId sub-interface for ShopeeGetFbsInvoicesResultRequest
 */
export interface ShopeeGetFbsInvoicesResultRequestId {
  /**
   * A list of integers representing the request IDs to be queried.
   */
  request_id: number[];
}

/**
 * Request parameters for get_fbs_invoices_result
 *
 * This API allows you to consult the status of a previously requested batch download for FBS tax documents.
 */
export interface ShopeeGetFbsInvoicesResultRequest {
  /**
   * -
   */
  request_id_list: ShopeeGetFbsInvoicesResultRequestId[];
}

/**
 * Request parameters for get_pending_buyer_invoice_order_list
 *
 * This endpoint only for PH and BR local sellers only. This API is used for seller to retrieve a list of order IDs that are pending invoice upload.
 */
export interface ShopeeGetPendingBuyerInvoiceOrderListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data.The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_warehouse_filter_config
 *
 * For multi-warehouse shops, return all warehouses with packages that have not been SHIPPED including product_location_id and address_id. Compared to v2.shop.get_warehouse_detail, it covers some edge cases like warehouse that have been unlinked but still retain packages that have not been SHIPPED, and does not cover some cases like single warehouse with default product_location_id and FBS shop.
 */
export type ShopeeGetWarehouseFilterConfigRequest = Record<string, never>;

/**
 * Request parameters for handle_buyer_cancellation
 *
 * Use this api to handle buyer's cancellation application.
 */
export interface ShopeeHandleBuyerCancellationRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * The operation you want to handle.Avaiable value: ACCEPT, REJECT
   */
  operation: string;
}

/**
 * ShopeeHandlePrescriptionCheckItem sub-interface for ShopeeHandlePrescriptionCheckRequest
 */
export interface ShopeeHandlePrescriptionCheckItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * Shopee's unique identifier for a model of an item.
   */
  model_id: number;
  /**
   * The identify of product promotion. For items in one same add on deal promotion, the group_id should share the same id. For items not in add on deal promotion, the group_id should be 0. And the data is from group_id of shopee.orders.GetOrderDetails.
   */
  group_id: number;
}

/**
 * Request parameters for handle_prescription_check
 *
 * Use this API to approve or reject a prescription
 */
export interface ShopeeHandlePrescriptionCheckRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * Approve or reject the prescription. Available values: TRUE, FALSE.
   */
  is_approved: boolean;
  /**
   * Reject reason code. Available values: 1 = Invalid Prescription (counterfeit/incorrect format)2 = Incorrect Dosage3 = No Prescription4 = Unclear Image5 = Free Text
   */
  reject_reason_code?: number;
  /**
   * The list of invalid items that make the prescription get rejected
   */
  items?: ShopeeHandlePrescriptionCheckItem[];
  /**
   * Full name of the pharmacist. Required for PH and ID Prescription Orders.
   */
  pharmacist_name?: string;
  /**
   * The reason for rejecting the prescription. Only usable when the reject_reason_code = 5.
   */
  free_text?: string;
}

/**
 * Request parameters for set_note
 *
 * Use this api to set note for an order.
 */
export interface ShopeeSetNoteRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * The note seller add for reference.
   */
  note: string;
}

/**
 * ShopeeSplitOrderItem sub-interface for ShopeeSplitOrderPackage
 */
export interface ShopeeSplitOrderItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id: number;
  /**
   * Shopee's unique identifier for a model of an item. For single item without variation, you can set model_id as 0.
   */
  model_id: number;
  /**
   * The identify of order item. For items in one same bundle deal promotion, the order_item_id should share the same id, such as 1,2. For items not in bundle deal promotion, the order_item_id should be the same as item_id.
   */
  order_item_id?: number;
  /**
   * The identify of product promotion.It's required for add on deal and bundle deal items.For items in one same add on deal or bundle deal promotion, the promotion_group_id should share the same id. For items not in add on deal or bundle deal promotion, the promotion_group_id should be 0. And the data is from promotion_group_id of v2,order.get_order_detail.
   */
  promotion_group_id?: number;
  /**
   * The number of identical items put in the package, the quantity sum of the same item from each parcel must be the full item quantity of the whole order.This field is only eligible for the shop whitelisted to the unit-level split in SG/TH/TW/MY markets.
   */
  model_quantity?: number;
}

/**
 * ShopeeSplitOrderPackage sub-interface for ShopeeSplitOrderRequest
 */
export interface ShopeeSplitOrderPackage {
  /**
   * The list of items under the same package.
   */
  item_list: ShopeeSplitOrderItem[];
}

/**
 * Request parameters for split_order
 *
 * Use this api to split an order into multiple packages. Orders that include installation services cannot be split by quantity.
 */
export interface ShopeeSplitOrderRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * The list of packages that you want to split. Note: - Orders that include installation services cannot be split by quantity.- When splitting the order, must contain all items in the order in one request.- You can split the order into 30 parcels at most in TW and 5 parcels at most in other regions.
   */
  package_list: ShopeeSplitOrderPackage[];
}

/**
 * Request parameters for unsplit_order
 *
 * Use this ai to undo split of order. After undo split, the order will have only one package. It can only be used when order status still at READY_TO_SHIP.
 */
export interface ShopeeUnsplitOrderRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
}

/**
 * Request parameters for upload_invoice_doc
 *
 * This endpoint is for PH and BR local seller. Upload the invoice document
 */
export interface ShopeeUploadInvoiceDocRequest {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn: string;
  /**
   * the type of invoice file. 1:pdf 2.jpeg 3.png. 4.xml
   */
  file_type: number;
  /**
   * invoice file. File size limit to 1MB.
   */
  file: Buffer;
}
