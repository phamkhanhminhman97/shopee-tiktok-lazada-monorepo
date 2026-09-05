import { ShopeeResponseCommon } from './config.response';

interface OrderListItem {
  /** Shopee's unique identifier for an order. */
  order_sn: string;
  /**
   * Order status. Returned when response_optional_fields includes order_status.
   * Available values include UNPAID, READY_TO_SHIP, PROCESSED, SHIPPED, COMPLETED, IN_CANCEL, CANCELLED.
   */
  order_status?: string;
  /**
   * Shopee's unique identifier for a booking.
   * Only returned for advance fulfilment matched order only.
   */
  booking_sn?: string;
}

interface OrderList {
  more: boolean;
  order_list: OrderListItem[];
  next_cursor: string;
}

interface OrderDetail {
  /**
   * Shopee `v2.order.get_order_detail` returns 50+ possible fields per
   * order, many gated behind `response_optional_fields`. Modeling every
   * combination precisely is out of scope here, so each order is typed as
   * a loose record instead of `any` to keep basic safety (e.g. no implicit
   * `any` leaking into consumer code) without fabricating an inaccurate
   * shape. Narrow this with your own interface for the fields you request.
   */
  order_list: Array<Record<string, unknown>>;
}

interface ReturnDetail {
  image: Array<string>;
  /** Buyer-submitted evidence video URLs for this return. */
  buyer_videos: string[];
  reason: string;
  text_reason: string;
  return_sn: string;
  refund_amount: number;
  currency: string;
  create_time: number;
  update_time: number;
  status: string;
  due_date: number;
  tracking_number: string;
  needs_logistics: true;
  amount_before_discount: number;
  user: {
    username: string;
    email: string;
    portrait: string;
  };
  /**
   * Item-level detail for this return. Shopee does not publicly document
   * an exact schema for this field, so it is intentionally left as a loose
   * record instead of a fabricated shape. Inspect the raw response if you
   * need specific item fields.
   */
  item: Array<Record<string, unknown>>;
  order_sn: string;
  return_ship_due_date: number;
  return_seller_due_date: number;
  /**
   * Return status change history. Shopee does not publicly document an
   * exact schema for this field, so it is intentionally left as a loose
   * record instead of a fabricated shape.
   */
  activity: Array<Record<string, unknown>>;
  seller_proof: {
    seller_proof_status: string;
    seller_evidence_deadline: number;
  };
  seller_compensation: {
    seller_compensation_status: string;
    seller_compensation_due_date: number;
    compensation_amount: number;
  };
  negotiation: {
    negotiation_status: string;
    latest_solution: string;
    latest_offer_amount: number;
    latest_offer_creator: string;
    counter_limit: number;
    offer_due_date: number;
  };
  logistics_status: string;
  return_pickup_address: {
    address: string;
    name: string;
    phone: string;
    town: string;
    district: string;
    city: string;
    state: string;
    region: string;
    zipcode: string;
  };
}

interface ResponseOrderList extends ShopeeResponseCommon<OrderList> {}
interface ResponseOrderDetail extends ShopeeResponseCommon<OrderDetail> {}
interface ResponseReturnDetail extends ShopeeResponseCommon<ReturnDetail> {}

interface ResponseSearchPackageListPackage {
  order_sn: string;
  package_number: string;
  logistics_channel_id: number;
  product_location_id: string;
  sorting_group?: string;
  is_shipment_arranged: boolean;
}

interface ResponseSearchPackageListPagination {
  total_count: number;
  next_cursor?: string;
  more: boolean;
}

interface ResponseSearchPackageListSort {
  sort_type: number;
  is_asc: boolean;
}

interface ResponseSearchPackageListResponse {
  packages_list: ResponseSearchPackageListPackage[];
  pagination: ResponseSearchPackageListPagination;
  sort?: ResponseSearchPackageListSort;
}

interface ResponseSearchPackageList extends ShopeeResponseCommon<ResponseSearchPackageListResponse> {}

interface ResponseGetPackageDetailItem {
  item_id: number;
  model_id: number;
  item_sku?: string;
  model_sku?: string;
  model_quantity: number;
  order_item_id: number;
  promotion_group_id?: number;
  product_location_id?: string;
  consultation_id?: string;
}

interface ResponseGetPackageDetailRecipientAddress {
  name?: string;
  phone?: string;
  town?: string;
  district?: string;
  city?: string;
  state?: string;
  region?: string;
  zipcode?: string;
  full_address?: string;
  geolocation?: {
    latitude?: number;
    longitude?: number;
  };
}

interface ResponseGetPackageDetailPackage {
  order_sn: string;
  package_number: string;
  fulfillment_status: string;
  update_time: number;
  logistics_channel_id: number;
  shipping_carrier?: string;
  allow_self_design_awb: boolean;
  days_to_ship: number;
  ship_by_date: number;
  pending_terms?: string[];
  pending_description?: string[];
  tracking_number?: string;
  tracking_number_expiration_date?: number;
  pickup_done_time?: number;
  is_split_up: boolean;
  item_list: ResponseGetPackageDetailItem[];
  recipient_address?: ResponseGetPackageDetailRecipientAddress;
  parcel_chargeable_weight_gram?: number;
  group_shipment_id?: number;
  virtual_contact_number?: string;
  package_query_number?: string;
  sorting_group?: string;
  is_shipment_arranged: boolean;
  status_info_tag?: {
    tag_id: number;
    timestamp: number;
  };
  can_split_order: boolean;
  can_unsplit_order: boolean;
  is_pre_order: boolean;
  prescription_images?: string[];
  pharmacist_name?: string;
  prescription_approval_time?: number;
  prescription_rejection_time?: number;
  is_buyer_shop_collection?: boolean;
  buyer_proof_of_collection?: string[];
  preparation_end_time?: number;
  driver_info?: {
    driver_name?: string;
    driver_phone?: string;
    vehicle_type?: string;
    license_plate?: string;
    courier_photo?: string;
    eta_start_time?: number;
    eta_end_time?: number;
    driver_status?: string;
  };
}

interface ResponseGetPackageDetailResponse {
  package_list: ResponseGetPackageDetailPackage[];
}

interface ResponseGetPackageDetail extends ShopeeResponseCommon<ResponseGetPackageDetailResponse> {
  warning?: string;
}

interface ResponseCancelOrder extends ShopeeResponseCommon<{ update_time: number }> {}

export {
  ResponseOrderList as ShopeeResponseOrderList,
  OrderListItem as ShopeeOrderListItem,
  ResponseOrderDetail as ShopeeResponseOrderDetail,
  ResponseReturnDetail as ShopeeResponseReturnDetail,
  ResponseSearchPackageList as ShopeeResponseSearchPackageList,
  ResponseGetPackageDetail as ShopeeResponseGetPackageDetail,
  ResponseCancelOrder as ShopeeResponseCancelOrder,
};

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeBookingStatus
 */
export enum ShopeeBookingStatus {
  READY_TO_SHIP = "READY_TO_SHIP",
  PROCESSED = "PROCESSED",
  SHIPPED = "SHIPPED",
  CANCELLED = "CANCELLED",
  MATCHED = "MATCHED",
}

/**
 * Enum generated for field ShopeeMatchStatus
 */
export enum ShopeeMatchStatus {
  MATCH_PENDING = "MATCH_PENDING",
  MATCH_SUCCESSFUL = "MATCH_SUCCESSFUL",
  MATCH_FAILED = "MATCH_FAILED",
}

/**
 * Enum generated for field ShopeeTown
 */
export enum ShopeeTown {
  AND = "and",
  OR = "or",
}

/**
 * Enum generated for field ShopeeDistrict
 */
export enum ShopeeDistrict {
  AND = "and",
  OR = "or",
}

/**
 * Enum generated for field ShopeeCity
 */
export enum ShopeeCity {
  AND = "and",
  OR = "or",
}

/**
 * Enum generated for field ShopeeState
 */
export enum ShopeeState {
  STATE = "state",
  PROVINCE = "province",
}

/**
 * ShopeeDownloadFbsInvoicesResponseData sub-interface for ShopeeDownloadFbsInvoicesResponse
 */
export interface ShopeeDownloadFbsInvoicesResponseData {
  request_id?: number;
  file_link?: string;
}

/**
 * Response payload for download_fbs_invoices
 *
 * This API allows you to download FBS invoices. To use this API, the client must first call v2.order.generate_fbs_invoices to create a new shipping document task, followed by calling v2.order.get_fbs_invoices_result to check the task status. The document can only be downloaded once the task status is "READY."
 */
export type ShopeeDownloadFbsInvoicesResponse = ShopeeResponseCommon<ShopeeDownloadFbsInvoicesResponseData>;

/**
 * Response data payload for download_invoice_doc
 */
export interface ShopeeDownloadInvoiceDocResponseData {
  /** Downloaded invoice document. Shopee does not document an exact shape; treat as opaque. */
  invoice_doc?: unknown;
}

/**
 * Response payload for download_invoice_doc
 *
 * This endpoint only for PH and BR local seller. Seller can download the invoice uploaded before through this endpoint.
 */
export type ShopeeDownloadInvoiceDocResponse = ShopeeResponseCommon<ShopeeDownloadInvoiceDocResponseData>;

/**
 * ShopeeGenerateFbsInvoicesResult sub-interface for ShopeeGenerateFbsInvoicesResponse
 */
export interface ShopeeGenerateFbsInvoicesResult {
  /**
   * Unique task identifier that includes one or more tax documents to be downloaded according to the filters sent in the request.
   */
  request_id?: number;
  /**
   * Indicate error type if one element hit error. Empty if no error happened.
   */
  fail_error?: string;
  /**
   * Indicate error details if one element hit error. Empty if no error happened.
   */
  fail_message?: string;
}

/**
 * Response data payload for generate_fbs_invoices
 */
export interface ShopeeGenerateFbsInvoicesResponseData {
  /**
   * Error messages
   */
  error_msg?: string;
  result_list?: ShopeeGenerateFbsInvoicesResult[];
}

/**
 * Response payload for generate_fbs_invoices
 *
 * This API creates a task to download a specific tax document (e.g., sales invoice, remessa invoice) for the seller's account, available only after the document is issued by the system as part of the Fulfilled by Shopee (FBS) process.
 * The workflow is as follows: (1) v2.order.generate_fbs_invoices; (2) v2.order.get_fbs_invoices_result; (3) v2.order.download_fbs_invoices.
 * Please note: The download link for the document will expire 30 minutes after being generated.
 */
export type ShopeeGenerateFbsInvoicesResponse = ShopeeResponseCommon<ShopeeGenerateFbsInvoicesResponseData>;

/**
 * ShopeeGetBookingDetailRecipientAddress sub-interface for ShopeeGetBookingDetailBooking
 */
export interface ShopeeGetBookingDetailRecipientAddress {
  /**
   * Recipient's name for the address.
   */
  name?: string;
  /**
   * Recipient's phone number input when booking was placed.
   */
  phone?: string;
  /**
   * The town of the recipient's address. Whether there is a town will depend on the region and/or country.
   */
  town?: ShopeeTown | string | number;
  /**
   * The district of the recipient's address. Whether there is a district will depend on the region and/or country.
   */
  district?: ShopeeDistrict | string | number;
  /**
   * The city of the recipient's address. Whether there is a city will depend on the region and/or country.
   */
  city?: ShopeeCity | string | number;
  /**
   * The state/province of the recipient's address. Whether there is a state/province will depend on the region and/or country.
   */
  state?: ShopeeState | string | number;
  /**
   * The two-digit code representing the region of the Recipient.
   */
  region?: string;
  /**
   * Recipient's postal code.
   */
  zipcode?: string;
  /**
   * The full address of the recipient, including country, state, even street, and etc.
   */
  full_address?: string;
}

/**
 * ShopeeGetBookingDetailImageInfo sub-interface for ShopeeGetBookingDetailItem
 */
export interface ShopeeGetBookingDetailImageInfo {
  /**
   * The image url of the product. Default to be variation image, if the model does not have a variation image, will use an item main image instead.
   */
  image_url?: string;
}

/**
 * ShopeeGetBookingDetailItem sub-interface for ShopeeGetBookingDetailBooking
 */
export interface ShopeeGetBookingDetailItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * The name of the item.
   */
  item_name?: string;
  /**
   * A item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku?: string;
  /**
   * ID of the model that belongs to the same item.
   */
  model_id?: number;
  /**
   * Name of the model that belongs to the same item. A seller can offer models of the same item. For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size combination is a separate model. Each model can have a different quantity and price.
   */
  model_name?: string;
  /**
   * A model SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are models of one item in Shopee Listings.
   */
  model_sku?: string;
  /**
   * The number of identical items from one listing/item in the same booking.
   */
  model_quantity_purchased?: number;
  /**
   * The weight of the item
   */
  weight?: number;
  /**
   * The fulfilment warehouse ID(s) of the items in the booking. (Multi-Warehouse sellers only)
   */
  product_location_id?: string;
  /**
   * Image info of the product.
   */
  image_info?: ShopeeGetBookingDetailImageInfo;
}

/**
 * ShopeeGetBookingDetailBooking sub-interface for ShopeeGetBookingDetailResponseData
 */
export interface ShopeeGetBookingDetailBooking {
  /**
   * Return by default. Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
  /**
   * Shopee's unique identifier for an order. Only return if booking_status is MATCHED.
   */
  order_sn?: string;
  /**
   * Return by default. The two-digit code representing the region where the booking was made.
   */
  region?: string;
  /**
   * Return by default. Enumerated type that defines the current status of the booking. Available value: READY_TO_SHIP/PROCESSED/SHIPPED/CANCELLED/MATCHED
   */
  booking_status?: ShopeeBookingStatus | string | number;
  /**
   * MATCH_PENDING/MATCH_SUCCESSFUL/MATCH_FAILED
   */
  match_status?: ShopeeMatchStatus | string | number;
  /**
   * The logistics service provider that will deliver the booking.
   */
  shipping_carrier?: string;
  /**
   * Return by default. Timestamp that indicates the date and time that the booking was created.
   */
  create_time?: number;
  /**
   * Return by default. Timestamp that indicates the last time that there was a change in value of booking, such as booking status changed from 'Processed' to 'Shipped'.
   */
  update_time?: number;
  /**
   * Return by default. The deadline to ship out the parcel.
   */
  ship_by_date?: number;
  /**
   * This object contains detailed breakdown for the recipient address.
   */
  recipient_address?: ShopeeGetBookingDetailRecipientAddress;
  /**
   * This object contains the detailed breakdown for the result of this API call.
   */
  item_list?: ShopeeGetBookingDetailItem[];
  /**
   * For Indonesia bookings only. The name of the dropshipper.
   */
  dropshipper?: string;
  /**
   * The phone number of dropshipper, could be empty.
   */
  dropshipper_phone?: string;
  /**
   * Could be one of buyer, seller, system or Ops.
   */
  cancel_by?: string;
  /**
   * Use this field to get reason for buyer, seller, and system cancellation.
   */
  cancel_reason?: string;
  /**
   * Use this field to indicate the booking is fulfilled by shopee or seller. Applicable values: fulfilled_by_shopee, fulfilled_by_cb_seller, fulfilled_by_local_seller.
   */
  fulfillment_flag?: string;
  /**
   * The timestamp when pickup is done.
   */
  pickup_done_time?: number;
}

/**
 * ShopeeGetBookingDetailResponseData sub-interface for ShopeeGetBookingDetailResponse
 */
export interface ShopeeGetBookingDetailResponseData {
  /**
   * The list of bookings.
   */
  booking_list?: ShopeeGetBookingDetailBooking[];
}

/**
 * Response payload for get_booking_detail
 *
 * Use this api to get booking detail.
 */
export type ShopeeGetBookingDetailResponse = ShopeeResponseCommon<ShopeeGetBookingDetailResponseData>;

/**
 * ShopeeGetBookingListBooking sub-interface for ShopeeGetBookingListResponseData
 */
export interface ShopeeGetBookingListBooking {
  /**
   * Shopee's unique identifier for a booking.
   */
  booking_sn?: string;
  /**
   * Shopee's unique identifier for an order. Only return if booking_status is MATCHED.
   */
  order_sn?: string;
  /**
   * The booking_status filter for retrieving booking and each one only every request. Available value: READY_TO_SHIP/PROCESSED/SHIPPED/CANCELLED/MATCHED
   */
  booking_status?: ShopeeBookingStatus | string | number;
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
}

/**
 * ShopeeGetBookingListResponseData sub-interface for ShopeeGetBookingListResponse
 */
export interface ShopeeGetBookingListResponseData {
  /**
   * This is to indicate whether the booking list is more than one page. If this value is true, you may want to continue to check next page to retrieve bookings.
   */
  more?: boolean;
  booking_list?: ShopeeGetBookingListBooking[];
}

/**
 * Response payload for get_booking_list
 *
 * Use this api to search bookings. You may also filter them by status, if needed.
 */
export type ShopeeGetBookingListResponse = ShopeeResponseCommon<ShopeeGetBookingListResponseData>;

/**
 * ShopeeGetBuyerInvoiceInfoAddressBreakdown sub-interface for ShopeeGetBuyerInvoiceInfoInvoiceDetail
 */
export interface ShopeeGetBuyerInvoiceInfoAddressBreakdown {
  /**
   * Return region value- PH, TH only
   */
  region?: string;
  /**
   * Return value- TH: Province
   */
  state?: string;
  /**
   * Return value- TH: ShopeeDistrict
   */
  city?: string;
  /**
   * Return value- TH: Sub district
   */
  town?: string;
  /**
   * Return value- TH: Postal code- PH: Postal code
   */
  postcode?: string;
  /**
   * Return value- PH: Additional details, i.e. street name, building- TH: Additional details, i.e. house number
   */
  detailed_address?: string;
  /**
   * Return value:- Empty for PH, TH
   */
  additional_info?: string;
  /**
   * - only has value when invoice_type is personal- Buyer address in format "detailed_address, town, district, state, postcode, additional_info" for all regions--- for TH: leave the 'additional_info' as empty
   */
  full_address?: string;
}

/**
 * ShopeeGetBuyerInvoiceInfoCompanyAddressBreakdown sub-interface for ShopeeGetBuyerInvoiceInfoInvoiceDetail
 */
export interface ShopeeGetBuyerInvoiceInfoCompanyAddressBreakdown {
  /**
   * Return region value- PH, TH only
   */
  company_region?: string;
  /**
   * Return value- PH: Province- TH: Province
   */
  company_state?: string;
  /**
   * Return value- PH: ShopeeCity
   */
  company_city?: string;
  /**
   * Return value- PH: Barangay- TH: ShopeeDistrict
   */
  company_district?: string;
  /**
   * Return value- TH: Sub district
   */
  company_town?: string;
  /**
   * Return postal code- TH, PH only
   */
  company_postcode?: string;
  /**
   * Return value- PH: Detailed address- TH: Detailed address
   */
  company_detailed_address?: string;
  /**
   * Return value:- Empty for PH, TH
   */
  company_additional_info?: string;
  /**
   * Concatenation of company address breakdown- only has value when invoice_type is company
   */
  company_full_address?: string;
}

/**
 * ShopeeGetBuyerInvoiceInfoHouseholdAddressBreakdown sub-interface for ShopeeGetBuyerInvoiceInfoInvoiceDetail
 */
export interface ShopeeGetBuyerInvoiceInfoHouseholdAddressBreakdown {
  /**
   * Region of the household address.
   */
  household_region?: string;
  /**
   * ShopeeState of the household address.
   */
  household_state?: string;
  /**
   * ShopeeCity of the household address.
   */
  household_city?: string;
  /**
   * Province of the household address.
   */
  household_province?: string;
  /**
   * ShopeeDistrict of the household address.
   */
  household_district?: string;
  /**
   * ShopeeTown of the household address.
   */
  household_town?: string;
  /**
   * Barangay of the household address.
   */
  household_barangay?: string;
  /**
   * Postal code of the household address.
   */
  household_postcode?: string;
  /**
   * Detailed street address of the household.
   */
  household_detailed_address?: string;
  /**
   * Additional address information provided by the buyer.
   */
  household_additional_info?: string;
  /**
   * Full formatted household address.
   */
  household_full_address?: string;
}

/**
 * ShopeeGetBuyerInvoiceInfoInvoiceDetail sub-interface for ShopeeGetBuyerInvoiceInfoInvoiceInfo
 */
export interface ShopeeGetBuyerInvoiceInfoInvoiceDetail {
  /**
   * Buyer name (has value when invoice_type is personal, household, or company)- VN, TH, PH only
   */
  name?: string;
  /**
   * Buyer email address (has value when invoice_type is personal and household)- VN, TH, PH only
   */
  email?: string;
  /**
   * Buyer phone number- TH only
   */
  phone_number?: string;
  /**
   * has value when invoice_type is personal and household. - VN, TH, PH only
   */
  tax_id?: string;
  /**
   * Buyer address in format "Street & number, city, zipcode, any additional info provided by buyer" (has value when invoice_type is personal and household)- PH, VN only
   */
  address?: string;
  /**
   * Same function as the address, only having a different field name for TH.Buyer address in format "Street & number, city, zipcode, any additional info provided by buyer" (only has value when invoice_type is personal).
   */
  id_card_address?: string;
  /**
   * Buyer address breakdown.- TH, PH only
   */
  address_breakdown?: ShopeeGetBuyerInvoiceInfoAddressBreakdown;
  /**
   * - return value for TH only (only has value when invoice_type is company)
   */
  company_head_office?: string;
  /**
   * - Only return value when invoice type is company- VN, TH, PH only
   */
  company_name?: string;
  /**
   * - Only return value when invoice type is company- TH only
   */
  company_branch_name?: string;
  /**
   * - Only return value when invoice type is company- TH only
   */
  company_branch_id?: string;
  /**
   * - Only return value when invoice type is company- TH only
   */
  company_type?: string;
  /**
   * - Only return value when invoice type is company- VN, TH, PH only
   */
  company_email?: string;
  /**
   * - Only return value when invoice type is company- VN, TH, PH only
   */
  company_tax_id?: string;
  /**
   * Buyer address in format "Street & number,city, zipcode, any additional info provided by buyer" (only has value when invoice_type is company)- VN, TH only
   */
  company_address?: string;
  /**
   * Company address breakdown- PH, TH only
   */
  company_address_breakdown?: ShopeeGetBuyerInvoiceInfoCompanyAddressBreakdown;
  /**
   * Household address breakdown-Only for VN
   */
  household_address_breakdown?: ShopeeGetBuyerInvoiceInfoHouseholdAddressBreakdown;
  /**
   * National ID information provided by the buyer.- Only return value when invoice_type is personal- VN only
   */
  national_id?: string;
}

/**
 * ShopeeGetBuyerInvoiceInfoInvoiceInfo sub-interface for ShopeeGetBuyerInvoiceInfoResponse
 */
export interface ShopeeGetBuyerInvoiceInfoInvoiceInfo {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Type of invoice requested: {1: personal, 2: company, 3: household}.
   */
  invoice_type?: string;
  /**
   * Invoice info submitted by buyer. Might be masked, e.g. A****b, depending on order status.
   */
  invoice_detail?: ShopeeGetBuyerInvoiceInfoInvoiceDetail;
  /**
   * Error in retrieving the receipt setting of a particular order.
   */
  error?: string;
  /**
   * To identify order with and without buyer request, applicable to PL.
   */
  is_requested?: boolean;
}

/**
 * Response data payload for get_buyer_invoice_info
 */
export interface ShopeeGetBuyerInvoiceInfoResponseData {
  invoice_info_list?: ShopeeGetBuyerInvoiceInfoInvoiceInfo[];
}

/**
 * Response payload for get_buyer_invoice_info
 *
 * API to obtain buyer submitted invoice info for VN, TH and PH local sellers only.
 */
export type ShopeeGetBuyerInvoiceInfoResponse = ShopeeResponseCommon<ShopeeGetBuyerInvoiceInfoResponseData>;

/**
 * Response data payload for get_estimate_cancel_value
 */
export interface ShopeeGetEstimateCancelValueResponseData {
  /**
   * The estimated cancellation value for the selected item quantities. This value is calculated before the actual cancellation is submitted and can be used by sellers to preview the expected cancellation amount and support partial cancellation confirmation.
   */
  cancel_value_price?: string;
}

/**
 * Response payload for get_estimate_cancel_value
 *
 * Returns the estimated refund value for a partial order cancellation given the specified items to cancel.
 */
export type ShopeeGetEstimateCancelValueResponse = ShopeeResponseCommon<ShopeeGetEstimateCancelValueResponseData>;

/**
 * ShopeeGetFbsInvoicesResultResult sub-interface for ShopeeGetFbsInvoicesResultResponse
 */
export interface ShopeeGetFbsInvoicesResultResult {
  /**
   * Represents the current status of the request
   */
  request_id?: number;
  /**
   * Name of the file to be downloaded
   */
  file_name?: string;
  /**
   * Represents the current status of the request
   */
  status?: string;
}

/**
 * Response data payload for get_fbs_invoices_result
 */
export interface ShopeeGetFbsInvoicesResultResponseData {
  /**
   * Indicate error details if hit error. Empty if no error happened.
   */
  error_msg?: string;
  result_list?: ShopeeGetFbsInvoicesResultResult[];
}

/**
 * Response payload for get_fbs_invoices_result
 *
 * This API allows you to consult the status of a previously requested batch download for FBS tax documents.
 */
export type ShopeeGetFbsInvoicesResultResponse = ShopeeResponseCommon<ShopeeGetFbsInvoicesResultResponseData>;

/**
 * ShopeeGetPendingBuyerInvoiceOrderListOrder sub-interface for ShopeeGetPendingBuyerInvoiceOrderListResponseData
 */
export interface ShopeeGetPendingBuyerInvoiceOrderListOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
}

/**
 * ShopeeGetPendingBuyerInvoiceOrderListResponseData sub-interface for ShopeeGetPendingBuyerInvoiceOrderListResponse
 */
export interface ShopeeGetPendingBuyerInvoiceOrderListResponseData {
  /**
   * This is to indicate whether the order list is more than one page. If this value is true, you may want to continue to check next page to retrieve orders.
   */
  more?: boolean;
  /**
   * If more is true, you should pass the next_cursor in the next request as cursor. The value of next_cursor will be empty string when more is false.
   */
  next_cursor?: string;
  order_list?: ShopeeGetPendingBuyerInvoiceOrderListOrder[];
}

/**
 * Response payload for get_pending_buyer_invoice_order_list
 *
 * This endpoint only for PH and BR local sellers only. This API is used for seller to retrieve a list of order IDs that are pending invoice upload.
 */
export type ShopeeGetPendingBuyerInvoiceOrderListResponse =
  ShopeeResponseCommon<ShopeeGetPendingBuyerInvoiceOrderListResponseData>;

/**
 * ShopeeGetWarehouseFilterConfigWarehouseFilter sub-interface for ShopeeGetWarehouseFilterConfigResponseData
 */
export interface ShopeeGetWarehouseFilterConfigWarehouseFilter {
  /**
   * The warehouse name filled in when creating the warehouse address.
   */
  warehouse_name?: string;
  /**
   * Type of warehouse. Applicable values:- 1: Local Warehouse- 2: CB Warehouse
   */
  warehouse_type?: number;
  /**
   * Location identifier for stocks. Different location_ids represent that your addresses are in different item stocks.
   */
  product_location_id?: string;
  /**
   * Identity of address.
   */
  address_id?: number;
  /**
   * Detail address of your warehouse.
   */
  address?: string;
}

/**
 * ShopeeGetWarehouseFilterConfigResponseData sub-interface for ShopeeGetWarehouseFilterConfigResponse
 */
export interface ShopeeGetWarehouseFilterConfigResponseData {
  warehouse_filters?: ShopeeGetWarehouseFilterConfigWarehouseFilter[];
}

/**
 * Response payload for get_warehouse_filter_config
 *
 * For multi-warehouse shops, return all warehouses with packages that have not been SHIPPED including product_location_id and address_id. Compared to v2.shop.get_warehouse_detail, it covers some edge cases like warehouse that have been unlinked but still retain packages that have not been SHIPPED, and does not cover some cases like single warehouse with default product_location_id and FBS shop.
 */
export type ShopeeGetWarehouseFilterConfigResponse = ShopeeResponseCommon<ShopeeGetWarehouseFilterConfigResponseData>;

/**
 * ShopeeHandleBuyerCancellationResponseData sub-interface for ShopeeHandleBuyerCancellationResponse
 */
export interface ShopeeHandleBuyerCancellationResponseData {
  /**
   * The time when the order is updated.
   */
  update_time?: number;
}

/**
 * Response payload for handle_buyer_cancellation
 *
 * Use this api to handle buyer's cancellation application.
 */
export type ShopeeHandleBuyerCancellationResponse = ShopeeResponseCommon<ShopeeHandleBuyerCancellationResponseData>;

/**
 * ShopeeHandlePrescriptionCheckResponseData sub-interface for ShopeeHandlePrescriptionCheckResponse
 */
export interface ShopeeHandlePrescriptionCheckResponseData {
  /**
   * This is to indicate whether the request has been executed successfully.
   */
  is_success?: boolean;
}

/**
 * Response payload for handle_prescription_check
 *
 * Use this API to approve or reject a prescription
 */
export type ShopeeHandlePrescriptionCheckResponse = ShopeeResponseCommon<ShopeeHandlePrescriptionCheckResponseData>;

/**
 * Response data payload for set_note
 */
export type ShopeeSetNoteResponseData = Record<string, never>;

/**
 * Response payload for set_note
 *
 * Use this api to set note for an order.
 */
export type ShopeeSetNoteResponse = ShopeeResponseCommon<ShopeeSetNoteResponseData>;

/**
 * ShopeeSplitOrder_SplitOrderItem sub-interface for ShopeeSplitOrder_SplitOrderPackage
 */
export interface ShopeeSplitOrder_SplitOrderItem {
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Shopee's unique identifier for a model.
   */
  model_id?: number;
  /**
   * The identify of order item. For items in one same bundle deal promotion, the order_item_id should share the same id, such as 1,2. For items not in bundle deal promotion, the order_item_id should be the same as item_id.
   */
  order_item_id?: number;
  /**
   * The identify of product promotion. For items in one same add on deal promotion, the promotion_group_id should share the same id. For items not in add on deal promotion, the promotion_group_id should be 0. And the data is from group_id of shopee.orders.GetOrderDetails.
   */
  promotion_group_id?: number;
  /**
   * The number of identical items put in the package.
   */
  model_quantity?: number;
}

/**
 * ShopeeSplitOrder_SplitOrderPackage sub-interface for ShopeeSplitOrderResponseData
 */
export interface ShopeeSplitOrder_SplitOrderPackage {
  /**
   * Shopee's unique identifier for the package under an order.
   */
  package_number?: string;
  /**
   * The list of items under this package.
   */
  item_list?: ShopeeSplitOrder_SplitOrderItem[];
}

/**
 * ShopeeSplitOrderResponseData sub-interface for ShopeeSplitOrderResponse
 */
export interface ShopeeSplitOrderResponseData {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * The list of package under this order you have split.
   */
  package_list?: ShopeeSplitOrder_SplitOrderPackage[];
}

/**
 * Response payload for split_order
 *
 * Use this api to split an order into multiple packages. Orders that include installation services cannot be split by quantity.
 */
export type ShopeeSplitOrderResponse = ShopeeResponseCommon<ShopeeSplitOrderResponseData>;

/**
 * Response data payload for unsplit_order
 */
export type ShopeeUnsplitOrderResponseData = Record<string, never>;

/**
 * Response payload for unsplit_order
 *
 * Use this ai to undo split of order. After undo split, the order will have only one package. It can only be used when order status still at READY_TO_SHIP.
 */
export type ShopeeUnsplitOrderResponse = ShopeeResponseCommon<ShopeeUnsplitOrderResponseData>;

/**
 * Response data payload for upload_invoice_doc
 */
export type ShopeeUploadInvoiceDocResponseData = Record<string, never>;

/**
 * Response payload for upload_invoice_doc
 *
 * This endpoint is for PH and BR local seller. Upload the invoice document
 */
export type ShopeeUploadInvoiceDocResponse = ShopeeResponseCommon<ShopeeUploadInvoiceDocResponseData>;
