// ============================================================
// Address Types
// ============================================================

export interface AddressInfo {
  /** Detailed address */
  address1?: string;
  /** Not used for now */
  address2?: string;
  /** State name */
  address3?: string;
  /** City name */
  address4?: string;
  /** Third-level address */
  address5?: string;
  /** City name */
  city?: string;
  /** Country */
  country?: string;
  /** Customer first name */
  first_name?: string;
  /** Customer last name */
  last_name?: string;
  /** Phone number */
  phone?: string;
  /** Backup phone number */
  phone2?: string;
  /** Post code */
  post_code?: string;
  /** District */
  addressDsitrict?: string;
}

export interface AddressBilling extends AddressInfo {}
export interface AddressShipping extends AddressInfo {}

// ============================================================
// Recipient Info
// ============================================================

export interface RecipientInfo {
  /** Passport number */
  passport_no?: string;
  /** Identify card number */
  identify_no?: string;
  /** Recipient address */
  detail_address?: string;
}

// ============================================================
// Order Detail (used in both GetOrders and GetOrder responses)
// ============================================================

export interface LazadaOrderDetail {
  /** Represents the order ID (numeric) */
  order_id?: number;
  /** Represents the order ID (string) */
  order_number?: string;
  /** Date and time when the order was placed */
  created_at?: string;
  /** Date and time of the last change to the order */
  updated_at?: string;
  /** Address updated at */
  address_updated_at?: string;

  /** Total amount for this order (excluding voucher and shipping_fee) */
  price?: string;
  /** The actual shipping cost paid by the seller */
  shipping_fee?: string;
  /** The original shipping fee before promotions */
  shipping_fee_original?: string;
  /** Shipping fee discount from seller */
  shipping_fee_discount_seller?: string;
  /** Shipping fee discount from platform */
  shipping_fee_discount_platform?: string;
  /** Total voucher for this order */
  voucher?: string;
  /** The voucher that is issued by Lazada */
  voucher_platform?: string;
  /** The voucher that is issued by the seller */
  voucher_seller?: string;
  /** The returned value is Voucher id */
  voucher_code?: string;

  /** Customer first name */
  customer_first_name?: string;
  /** Customer last name (empty for now) */
  customer_last_name?: string;
  /** The method of the payment */
  payment_method?: string;
  /** Remarks */
  remarks?: string;
  /** Buyer note */
  buyer_note?: string;

  /** An array of unique status of the items in the order */
  statuses?: string[];

  /** Number of items in order */
  items_count?: number;

  /** 1 if item is a gift, and 0 if it is not */
  gift_option?: string;
  /** Gift message as specified by the customer */
  gift_message?: string;

  /** Warehouse Code of multi-wh sellers */
  warehouse_code?: string;

  /** (For Thailand only) The tax branch code for corporate customers */
  branch_number?: string;
  /** (For Thailand and Vietnam only) The customer's VAT tax code */
  tax_code?: string;
  /** National registration number. Required in some countries. */
  national_registration_number?: string;

  /** Extra attributes passed to Seller Center on getMarketPlaceOrders call */
  extra_attributes?: string;

  /** Target shipping time for the soonest order item */
  promised_shipping_times?: string;

  /** Delivery information */
  delivery_info?: string;

  /** Shipping address */
  address_shipping?: AddressShipping;
  /** Billing address */
  address_billing?: AddressBilling;

  /** Information filled in by the buyer when placing an order */
  recipient_info?: RecipientInfo;

  /** true: seller needs to respond to the cancellation request from buyer */
  need_cancel_confirm?: boolean;
  /** true: seller agrees the cancellation request, waiting for logistic system */
  is_cancel_pending?: string;
}

// ============================================================
// GetOrders API Response (/orders/get)
// ============================================================

export interface GetOrdersData {
  /** Total number of all orders for the current filter set in the database */
  countTotal?: number;
  /** Number of orders returned (included offset and limit) */
  count?: number;
  /** List of orders */
  orders?: LazadaOrderDetail[];
}

export interface LazadaResponseGetOrders {
  code?: string;
  request_id?: string;
  data?: GetOrdersData;
}

// ============================================================
// GetOrder API Response (/order/get)
// ============================================================

export interface LazadaResponseGetOrder {
  code?: string;
  request_id?: string;
  data?: LazadaOrderDetail;
}

// ============================================================
// OrderItem - chi tiết sản phẩm trong đơn hàng
// Dùng chung cho GetOrderItems & GetMultipleOrderItems
// ============================================================

export interface OrderItem {
  /** Order item ID */
  order_item_id?: number;
  /** Order ID */
  order_id?: number;
  /** Order number */
  order_number?: number;
  /** The ID of the shop */
  shop_id?: number;
  /** The ID of the product item */
  item_id?: number;
  /** The SKU ID */
  sku_id?: string;
  /** Product ID */
  product_id?: string;
  /** Seller SKU */
  seller_sku?: string;
  /** Shop SKU */
  shop_sku?: string;
  /** SKU */
  sku?: string;
  /** Name of the product */
  name?: string;
  /** Variation of the product */
  variation?: string;
  /** Product detail URL */
  product_detail_url?: string;
  /** Product main image URL */
  product_main_image?: string;
  /** Sku image URL */
  sku_image?: string;

  // ----- Pricing -----
  /** Original price */
  original_price?: string;
  /** Paid price (after discounts) */
  paid_price?: string;
  /** Item price */
  item_price?: string;
  /** Currency (ISO 4217) */
  currency?: string;
  /** Tax amount */
  tax_amount?: string;
  /** Tax code */
  tax_code?: string;
  /** Supply price for MP3 order */
  supply_price?: string;
  /** Supply price currency for MP3 order */
  supply_price_currency?: string;

  // ----- Shipping -----
  /** Shipping fee */
  shipping_fee?: string;
  /** Shipping fee original */
  shipping_fee_original?: string;
  /** Shipping fee discount from seller */
  shipping_fee_discount_seller?: string;
  /** Shipping fee discount from platform */
  shipping_fee_discount_platform?: string;
  /** Shipping amount */
  shipping_amount?: string;
  /** Shipping service cost */
  shipping_service_cost?: number;
  /** Shipping type: Drop-shipping or Warehouse */
  shipping_type?: string;
  /** Shipping provider type: Express, Standard, or Economy */
  shipping_provider_type?: string;
  /** Shipment provider */
  shipment_provider?: string;
  /** Tracking code */
  tracking_code?: string;
  /** Tracking code pre (not used) */
  tracking_code_pre?: string;
  /** Tracking number */
  tracking_number?: string;
  /** Package source ID */
  package_id?: string;

  // ----- Voucher & Credits -----
  /** Voucher amount */
  voucher?: string;
  /** Voucher amount (alternative field name) */
  voucher_amount?: string;
  /** Voucher from platform */
  voucher_platform?: string;
  /** Voucher from seller */
  voucher_seller?: string;
  /** Voucher code */
  voucher_code?: string;
  /** Voucher code from seller */
  voucher_code_seller?: string;
  /** Voucher code from platform */
  voucher_code_platform?: string;
  /** Wallet credits */
  wallet_credits?: string;
  /** Lazada Bonus sponsored by seller */
  voucher_seller_lpi?: string;
  /** Lazada Bonus sponsored by Lazada */
  voucher_platform_lpi?: string;

  // ----- Status & Fulfillment -----
  /** Status of this order item */
  status?: string;
  /** Return status */
  return_status?: string;
  /** Order type: Normal or PreSale */
  order_type?: string;
  /** Order flag: GUARANTEE, NORMAL, GLOBAL_COLLECTION */
  order_flag?: string;
  /** Fulfillment SLA info */
  fulfillment_sla?: string;
  /** Priority fulfillment tag */
  priority_fulfillment_tag?: string;
  /** Is digital goods (1 = yes, 0 = no) */
  is_digital?: number;
  /** Is Fulfilled by Lazada (1 = yes, 0 = no) */
  is_fbl?: string;
  /** Is secondary sale / reroute (1 = yes, 0 = no) */
  is_reroute?: string;
  /** Is MP3 order */
  mp3_order?: boolean;
  /** Is semi-managed order */
  semi_managed?: string;
  /** Biz group: 70100 = MP (JIT), 70020 = choice warehouse */
  biz_group?: number;
  /** The mark of whether is seller own fleet (1 or 0) */
  delivery_option_sof?: string;

  // ----- Digital & Gift -----
  /** Digital delivery info */
  digital_delivery_info?: string;
  /** Whether this item is a gift */
  is_gift?: boolean;
  /** Gift wrapping display copywriting */
  gift_wrapping?: string;
  /** Does the gift label show through */
  show_gift_wrapping_tag?: boolean;
  /** Personalization / burning custom copywriting */
  personalization?: string;
  /** Whether to reveal the engraved service mark */
  show_personalization_tag?: boolean;

  // ----- Reason / Cancel / Return -----
  /** Cancel, Return or other reason */
  reason?: string;
  /** Reason detail */
  reason_detail?: string;
  /** Cancel/Return initiator */
  cancel_return_initiator?: string;
  /** Need seller to respond to cancellation request */
  need_cancel_confirm?: boolean;
  /** Seller agrees cancellation, waiting for logistic system */
  is_cancel_pending?: boolean;
  /** Auto-cancel trigger timestamp if seller doesn't respond */
  cancel_trigger_time?: number;
  /** Reverse order ID (cancel order main ID) */
  reverse_order_id?: number;

  // ----- Dates & Times -----
  /** Created at (ISO 8601) */
  created_at?: string;
  /** Updated at (ISO 8601) */
  updated_at?: string;
  /** Promised shipping time (ISO 8601) */
  promised_shipping_time?: string;
  /** SLA timestamp (ISO 8601) */
  sla_time_stamp?: string;
  /** Payment time in milliseconds (local time) */
  payment_time?: string;
  /** Schedule delivery start timeslot */
  schedule_delivery_start_timeslot?: number;
  /** Schedule delivery end timeslot */
  schedule_delivery_end_timeslot?: number;

  // ----- Buyer / Seller Info -----
  /** Buyer ID */
  buyer_id?: string;
  /** Invoice number */
  invoice_number?: string;
  /** Purchase order ID (returned by SetPackedByMarketPlace) */
  purchase_order_id?: string;
  /** Purchase order number (returned by SetPackedByMarketPlace) */
  purchase_order_number?: string;

  // ----- Stage Pay (PreSale) -----
  /** Stage paid */
  stage_pay?: string;
  /** Stage pay status for Presale */
  stage_pay_status?: string;

  // ----- Warehouse & Address -----
  /** Warehouse code */
  warehouse_code?: string;
  /** Shipping address type */
  shipping_address_type?: string;

  // ----- Extra -----
  /** Extra attributes (JSON encoded string) */
  extra_attributes?: string;
  /** Sku original price before discount */
  sku_original_price?: number;
  /** Pick-up Store info */
  pick_up_store_info?: object;
  /** Can urge logistics to pick up parcels */
  can_escalate_pickup?: boolean;
}

export interface GetOrderItemsData {
  /** List of order items */
  items?: OrderItem[];
  /** Total number of items */
  total?: number;
}

export interface LazadaResponseGetOrderItems {
  code?: string;
  request_id?: string;
  data?: GetOrderItemsData;
}

// ============================================================
// GetMultipleOrderItems API Response (GET /orders/items/get)
// data is an array of objects each containing order_items[]
// ============================================================

export interface MultipleOrderItemsData {
  /** Order ID */
  order_id?: number;
  /** Order number */
  order_number?: number;
  /** List of order items for this order */
  order_items?: OrderItem[];
}

export interface LazadaResponseGetMultipleOrderItems {
  code?: string;
  request_id?: string;
  data?: MultipleOrderItemsData[];
}

// ============================================================
// PackOrder API Response (/order/fulfill/pack)
// ============================================================

export interface PackItemResult {
  order_item_id: number;
  msg: string;
  item_err_code: string;
  tracking_number: string;
  shipment_provider: string;
  package_id: string;
  retry: boolean;
}

export interface PackOrderResult {
  order_item_list: Array<PackItemResult>;
  order_id: number;
}

export interface PackOrderData {
  pack_order_list: Array<PackOrderResult>;
}

export interface LazadaResponsePackOrder {
  code?: string;
  request_id?: string;
  result?: {
    data?: PackOrderData;
    success?: boolean;
  };
}

// ============================================================
// ReadyToShip (SetRTS) API Response (/order/package/rts)
// ============================================================

export interface RtsPackageResult {
  msg: string;
  item_err_code: string;
  package_id: string;
  retry: boolean;
}

export interface RtsOrderData {
  packages: Array<RtsPackageResult>;
}

export interface LazadaResponseRTSOrder {
  code?: string;
  request_id?: string;
  result?: {
    data?: RtsOrderData;
    success?: boolean;
  };
}

// ============================================================
// GetShipmentProviders API Response (/order/shipment/providers/get)
// ============================================================

export interface ShipmentProvider {
  /** Shipment provider code */
  code?: string;
  /** Shipment provider name */
  name?: string;
  /** Tax code */
  tax_code?: string;
  /** Is cod supported */
  cod?: boolean;
  /** Enabled */
  enabled?: boolean;
  /** Shipping fee */
  shipping_fee?: number;
  /** Estimated delivery time */
  estimated_delivery_time?: string;
}

export interface LazadaResponseShipmentProviders {
  code?: string;
  request_id?: string;
  data?: ShipmentProvider[];
}

// ============================================================
// PrintAWB / Shipping Label Response (/order/document/awb/pdf/get)
// ============================================================

export interface LazadaResponsePrintAWB {
  code?: string;
  request_id?: string;
  data?: {
    /** Base64 encoded PDF content */
    file?: string;
    /** File name */
    file_name?: string;
    /** MIME type */
    mime_type?: string;
  };
}

// ============================================================
// Shipping Label V2 Response (/order/package/document/get)
// ============================================================

export interface LazadaResponseShippingLabel {
  code?: string;
  request_id?: string;
  data?: {
    /** List of package documents */
    package_documents?: {
      /** Package ID */
      package_id?: string;
      /** Base64 encoded PDF content */
      file?: string;
      /** File name */
      file_name?: string;
    }[];
  };
}

// ============================================================
// TraceOrder API Response (/logistic/order/trace)
// ============================================================

export interface LogisticDetailInfo {
  status_code: string;
  proof_images: string[];
  detail_type: string;
  receive_time: number;
  description: string;
  title: string;
  event_time: number;
  package_location_name: string;
}

export interface TracePackageDetail {
  ofc_package_id: string;
  tracking_number: string;
  logistic_detail_info_list: LogisticDetailInfo[];
}

export interface TraceOrderData {
  packages: TracePackageDetail[];
}

export interface LazadaResponseTraceOrder {
  code?: string;
  request_id?: string;
  result?: {
    not_success?: boolean;
    success?: boolean;
    module?: TracePackageDetail[];
    error_code?: any;
    repeated?: boolean;
    retry?: boolean;
  };
}

// ============================================================
// ConfirmDeliveryForDBS API Response
// ============================================================

export interface DeliveryActionResult {
  order_item_id: number;
  msg: string;
  retry: boolean;
}

export interface LazadaResponseConfirmDeliveryDBS {
  code?: string;
  request_id?: string;
  data?: {
    result?: DeliveryActionResult[];
  };
}

// ============================================================
// FailedDeliveryForDBS API Response
// ============================================================

export interface LazadaResponseFailedDeliveryDBS {
  code?: string;
  request_id?: string;
  data?: {
    result?: DeliveryActionResult[];
  };
}

// ============================================================
// RecreatePackage (Repack) API Response
// ============================================================

export interface LazadaResponseRecreatePackage {
  code?: string;
  request_id?: string;
  result?: {
    data?: {
      repack_result?: {
        order_id?: number;
        order_item_ids?: number[];
        msg?: string;
        success?: boolean;
      };
    };
    success?: boolean;
  };
}
