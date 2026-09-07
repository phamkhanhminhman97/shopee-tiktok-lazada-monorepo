export interface OrderGetDocumentDataDocument {
  file: string;
  mime_type: string;
  document_type: string;
}

export interface OrderGetDocumentData {
  document: OrderGetDocumentDataDocument;
}

export interface OrderGetDocument {
  data: OrderGetDocumentData;
}

export type OrderGetDocumentResponse = OrderGetDocument;

export interface OrderGetOrderDataAddressShipping {
  address5: string;
  post_code: string;
  address4: string;
  last_name: string;
  country: string;
  address3: string;
  address2: string;
  city: string;
  address1: string;
  phone2: string;
  first_name: string;
  phone: string;
  addressDistrict?: string;
}

export interface OrderGetOrderDataAddressBilling {
  address3: string;
  address2: string;
  city: string;
  address1: string;
  phone2: string;
  first_name: string;
  phone: string;
  address5: string;
  post_code: string;
  address4: string;
  last_name: string;
  country: string;
  addressDistrict?: string;
}

export interface OrderGetOrderDataRecipientInfo {
  passport_no?: string;
  identify_no?: string;
  detail_address?: string;
}

export interface OrderGetOrderData {
  address_shipping: OrderGetOrderDataAddressShipping;
  customer_last_name: string;
  gift_option: boolean;
  voucher_code: string;
  updated_at: string;
  delivery_info: string;
  gift_message: string;
  branch_number: string;
  tax_code: string;
  extra_attributes: string;
  shipping_fee: string;
  customer_first_name: string;
  payment_method: string;
  statuses: string[];
  remarks: string;
  order_number: number;
  order_id: number;
  voucher: string;
  national_registration_number: string;
  promised_shipping_times: string;
  items_count: number;
  created_at: string;
  price: string;
  address_billing: OrderGetOrderDataAddressBilling;
  warehouse_code?: string;
  shipping_fee_original?: string;
  shipping_fee_discount_seller?: string;
  shipping_fee_discount_platform?: string;
  buyer_note?: string;
  recipient_info?: OrderGetOrderDataRecipientInfo;
  need_cancel_confirm?: boolean;
  is_cancel_pending?: boolean;
}

export interface OrderGetOrder {
  data: OrderGetOrderData;
}

export type OrderGetOrderResponse = OrderGetOrder;

export interface OrderGetOrderItemsDataPickUpStoreInfo {
  pick_up_store_name?: string;
  pick_up_store_address?: string;
  pick_up_store_code?: string;
  pick_up_store_open_hour?: string[];
}

export interface OrderGetOrderItemsData {
  pick_up_store_info?: OrderGetOrderItemsDataPickUpStoreInfo;
  purchase_order_number: string;
  name: string;
  product_main_image: string;
  item_price: string;
  tax_amount: string;
  status: string;
  cancel_return_initiator?: string;
  voucher_platform?: string;
  voucher_seller?: string;
  order_type?: string;
  stage_pay_status?: string;
  warehouse_code?: string;
  voucher_seller_lpi?: string;
  voucher_platform_lpi?: string;
  buyer_id?: string;
  shipping_fee_original?: string;
  shipping_fee_discount_seller?: string;
  shipping_fee_discount_platform?: string;
  voucher_code_seller?: string;
  voucher_code_platform?: string;
  delivery_option_sof?: string;
  is_fbl?: string;
  is_reroute?: string;
  reason: string;
  digital_delivery_info: string;
  promised_shipping_time: string;
  order_id: string;
  voucher_amount: string;
  return_status: string;
  shipping_type: string;
  shipment_provider: string;
  variation: string;
  created_at: string;
  invoice_number: string;
  shipping_amount: string;
  currency: string;
  order_flag?: string;
  shop_id: string;
  sla_time_stamp?: string;
  sku: string;
  voucher_code: string;
  wallet_credits: string;
  updated_at: string;
  is_digital: number;
  tracking_code_pre: string;
  order_item_id: number;
  package_id: string;
  tracking_code: string;
  shipping_service_cost: number;
  extra_attributes: string;
  paid_price: string;
  shipping_provider_type: string;
  product_detail_url: string;
  shop_sku: string;
  reason_detail: string;
  purchase_order_id: string;
  sku_id?: string;
  product_id?: string;
  fulfillment_sla?: string;
  priority_fulfillment_tag?: string;
  gift_wrapping?: string;
  show_giftwrapping_tag?: boolean;
  personalization?: string;
  show_personalization_tag?: boolean;
  payment_time?: number;
  supply_price?: string;
  supply_price_currency?: string;
  mp3_order?: boolean;
  semi_managed?: boolean;
  biz_group?: number;
  schedule_delivery_start_timeslot?: number;
  schedule_delivery_end_timeslot?: number;
  need_cancel_confirm?: boolean;
  is_cancel_pending?: boolean;
  cancel_trigger_time?: number;
  reverse_order_id?: number;
  can_escalate_pickup?: boolean;
}

export interface OrderGetOrderItems {
  data: OrderGetOrderItemsData[];
}

export type OrderGetOrderItemsResponse = OrderGetOrderItems;

export interface OrderOrderCancelValidateDataReasonOptions {
  reason_name?: string;
  reason_id?: string;
}

export interface OrderOrderCancelValidateData {
  tip_content?: string;
  tip_type?: string;
  reason_options?: OrderOrderCancelValidateDataReasonOptions[];
}

export interface OrderOrderCancelValidate {
  data?: OrderOrderCancelValidateData;
}

export type OrderOrderCancelValidateResponse = OrderOrderCancelValidate;

export interface OrderGetOrdersDataOrdersAddressBilling {
  address1: string;
  phone2: string;
  first_name: string;
  phone: string;
  address5: string;
  post_code: string;
  address4: string;
  last_name: string;
  country: string;
  address3: string;
  address2: string;
  city: string;
  addressDsitrict?: string;
}

export interface OrderGetOrdersDataOrdersAddressShipping {
  address1: string;
  phone2: string;
  first_name: string;
  phone: string;
  address5: string;
  post_code: string;
  address4: string;
  last_name: string;
  country: string;
  address3: string;
  address2: string;
  city: string;
  addressDsitrict?: string;
}

export interface OrderGetOrdersDataOrdersRecipientInfo {
  passport_no?: string;
  identify_no?: string;
  detail_address?: string;
}

export interface OrderGetOrdersDataOrders {
  branch_number: string;
  tax_code: string;
  extra_attributes: string;
  address_updated_at: string;
  shipping_fee: string;
  customer_first_name: string;
  payment_method: string;
  statuses: string[];
  remarks: string;
  order_number: string;
  order_id: string;
  voucher: string;
  national_registration_number: string;
  promised_shipping_times: string;
  items_count: number;
  voucher_platform?: string;
  voucher_seller?: string;
  created_at: string;
  price: string;
  address_billing: OrderGetOrdersDataOrdersAddressBilling;
  warehouse_code?: string;
  shipping_fee_original?: string;
  shipping_fee_discount_seller?: string;
  shipping_fee_discount_platform?: string;
  address_shipping: OrderGetOrdersDataOrdersAddressShipping;
  customer_last_name: string;
  gift_option: string;
  voucher_code: string;
  updated_at: string;
  delivery_info: string;
  gift_message: string;
  buyer_note?: string;
  recipient_info?: OrderGetOrdersDataOrdersRecipientInfo;
  need_cancel_confirm?: boolean;
  is_cancel_pending?: string;
}

export interface OrderGetOrdersData {
  countTotal?: number;
  count: number;
  orders: OrderGetOrdersDataOrders[];
}

export interface OrderGetOrders {
  data: OrderGetOrdersData;
}

export type OrderGetOrdersResponse = OrderGetOrders;

export interface OrderGetMultipleOrderItemsDataOrderItemsPickUpStoreInfo {
  pick_up_store_name?: string;
  pick_up_store_address?: string;
  pick_up_store_code?: string;
  pick_up_store_open_hour?: string[];
}

export interface OrderGetMultipleOrderItemsDataOrderItems {
  reason: string;
  digital_delivery_info: string;
  promised_shipping_time: string;
  order_id: number;
  voucher_amount: string;
  return_status: string;
  shipping_type: string;
  shipment_provider: string;
  cancel_return_initiator?: string;
  variation: string;
  created_at: string;
  invoice_number: string;
  shipping_amount: string;
  currency: string;
  shop_id: string;
  sku: string;
  voucher_code: string;
  wallet_credits: string;
  updated_at: string;
  is_digital: number;
  tracking_code_pre: string;
  order_item_id: number;
  package_id: string;
  tracking_code: string;
  shipping_service_cost: number;
  extra_attributes: string;
  paid_price: string;
  shipping_provider_type: string;
  product_detail_url: string;
  shop_sku: string;
  reason_detail: string;
  purchase_order_id: string;
  purchase_order_number: string;
  name: string;
  product_main_image: string;
  item_price: string;
  tax_amount: string;
  status: string;
  voucher_platform?: string;
  voucher_seller?: string;
  order_type?: string;
  stage_pay_status?: string;
  order_flag?: string;
  sla_time_stamp?: string;
  warehouse_code?: string;
  shipping_fee_original?: string;
  shipping_fee_discount_seller?: string;
  shipping_fee_discount_platform?: string;
  voucher_code_seller?: string;
  voucher_code_platform?: string;
  delivery_option_sof?: string;
  is_fbl?: string;
  is_reroute?: string;
  voucher_seller_lpi?: string;
  voucher_platform_lpi?: string;
  buyer_id?: string;
  pick_up_store_info?: OrderGetMultipleOrderItemsDataOrderItemsPickUpStoreInfo;
  sku_id?: string;
  fulfillment_sla?: string;
  priority_fulfillment_tag?: string;
  gift_wrapping?: string;
  show_gift_wrapping_tag?: boolean;
  personalization?: string;
  show_personalization_tag?: boolean;
  payment_time?: string;
  supply_price?: string;
  supply_price_currency?: string;
  mp3_order?: boolean;
  semi_managed?: string;
  biz_group?: number;
  schedule_delivery_start_timeslot?: number;
  schedule_delivery_end_timeslot?: number;
  need_cancel_confirm?: boolean;
  is_cancel_pending?: boolean;
  cancel_trigger_time?: number;
  reverse_order_id?: number;
  can_escalate_pickup?: boolean;
}

export interface OrderGetMultipleOrderItemsData {
  order_items: OrderGetMultipleOrderItemsDataOrderItems[];
  order_number: number;
  order_id: number;
}

export interface OrderGetMultipleOrderItems {
  data: OrderGetMultipleOrderItemsData[];
}

export type OrderGetMultipleOrderItemsResponse = OrderGetMultipleOrderItems;

export interface OrderGetOVOOrdersResultTradeOrdersTradeOrderLines {
  tradeOrderLineId?: number;
  deliveryStatus?: string;
  reverseStatus?: string;
  deliveredTime?: string;
}

export interface OrderGetOVOOrdersResultTradeOrders {
  tradeOrderId?: number;
  paymentMethod?: string;
  paidTime?: string;
  tradeOrderLines?: OrderGetOVOOrdersResultTradeOrdersTradeOrderLines[];
}

export interface OrderGetOVOOrdersResult {
  success?: string;
  tradeOrders?: OrderGetOVOOrdersResultTradeOrders[];
  errorCode?: string;
}

export interface OrderGetOVOOrders {
  result: OrderGetOVOOrdersResult;
}

export type OrderGetOVOOrdersResponse = OrderGetOVOOrders;

export interface OrderSetInvoiceNumberData {
  order_item_id?: number;
  invoice_number?: string;
}

export interface OrderSetInvoiceNumber {
  data: OrderSetInvoiceNumberData;
}

export type OrderSetInvoiceNumberResponse = OrderSetInvoiceNumber;
