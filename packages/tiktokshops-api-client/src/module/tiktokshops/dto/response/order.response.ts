import { TiktokResponseCommon } from './config.response';

interface RecipentAddress {
  full_address: string;
  phone: string;
  name: string;
  zipcode: string;
  address_detail;
  region_code: string;
  region: string;
  city: string;
  district: string;
  town: string;
  addressline1: string;
  addressline2: string;
  addressline3: string;
  addressline4: string;
}

interface PaymentInfo {
  currency: string;
  original_shipping_fee: string; //Shipping fee before discount
  original_total_product_price: string; //Total original price of products.
  platform_discount: string;
  seller_discount: string;
  shipping_fee: string; //Buyer paid shipping fee. Shipping_fee = original_shipping_fee - shipping_fee_seller_discount - shipping_fee_platform_discount
  shipping_fee_platform_discount: string;
  shipping_fee_seller_discount: string;
  sub_total: string; //sub_total = original_total_product_price - seller_discount - platform_discount
  tax: string;
  total_amount: string; //total_amount=sub_total+shipping_fee+taxes+retail_delivery_fee.
}

interface LineItems {
  id: string;
  sku_id: string;
  display_status: string;
  product_id: string;
  product_name: string;
  sku_name: string;
  sku_image: string;
  original_price: string;
  sale_price: string;
  platform_discount: string;
  seller_discount: string;
  cancel_user: string;
  sku_type: string;
  seller_sku: string;
  shipping_provider_id: string;
  shipping_provider_name: string;
  currency: string;
  package_id: string;
  rts_time: number;
  package_status: string;
  tracking_number: string;
  is_gift: boolean;
  cancel_reason: string;
}

interface Packages {
  id: string;
}

interface OrderListItem {
  id: string;
  status?: string;
  create_time?: number;
  update_time?: number;
  payment_method_name?: string;
  fulfillment_type?: number;
  is_on_hold_order?: boolean;
  is_sample_order?: boolean;
  delivery_option_type?: number;
  delivery_option_name?: string;
  warehouse_id?: string;
  buyer_user_id?: string;
  package_ids?: string[];
}

interface OrderList {
  orders: OrderListItem[];
  next_page_token?: string;
  total_count?: number;
}

interface PriceDetailBase {
  /**
   * Currency code in ISO 4217 format.
   */
  currency: string;
  /**
   * Original total amount. Calculation: sku_list_price + shipping_list_price.
   */
  total: string;
  /**
   * Buyer payment amount. Calculation: sku_sale_price + shipping_sale_price + tax_amount + small_order_fee.
   */
  payment: string;
  /**
   * Total MSRP/list price of SKUs.
   */
  sku_list_price: string;
  /**
   * Total SKU sale price. Calculation: sku_list_price - subtotal_deduction_seller - subtotal_deduction_platform.
   */
  sku_sale_price: string;
  /**
   * SKU sale price including subtotal tax. Calculation: sku_sale_price + subtotal_tax_amount.
   */
  subtotal: string;
  /**
   * Product discount funded by seller.
   */
  subtotal_deduction_seller: string;
  /**
   * Product discount funded by platform.
   */
  subtotal_deduction_platform: string;
  /**
   * Tax amount charged on products.
   */
  subtotal_tax_amount: string;
  /**
   * Platform voucher deduction for products.
   */
  voucher_deduction_platform: string;
  /**
   * Seller voucher deduction for products.
   */
  voucher_deduction_seller: string;
  /**
   * Original shipping fee.
   */
  shipping_list_price: string;
  /**
   * Shipping fee after promotion. Calculation: shipping_list_price - shipping_fee_deduction - shipping_fee_deduction_platform.
   */
  shipping_sale_price: string;
  /**
   * Shipping discount funded by seller.
   */
  shipping_fee_deduction_seller: string;
  /**
   * Shipping discount funded by platform.
   */
  shipping_fee_deduction_platform: string;
  /**
   * Shipping discount funded by platform voucher.
   */
  shipping_fee_deduction_platform_voucher: string;
  /**
   * Total tax amount.
   */
  tax_amount: string;
  /**
   * Tax rate.
   */
  tax_rate: string;
  /**
   * Price after tax.
   */
  net_price_amount: string;
  /**
   * COD fee charged by logistics partners.
   */
  cod_fee: string;
  /**
   * COD fee including tax.
   */
  cod_fee_net_amount: string;
  /**
   * Original price of seller gift SKU.
   */
  sku_gift_original_price: string;
  /**
   * Net price of seller gift SKU.
   */
  sku_gift_net_price: string;
  /**
   * Distance shipping fee for eligible Horizon+ orders.
   */
  distance_shipping_fee: string;
  /**
   * Total distance fee for Horizon+.
   */
  distance_fee: string;
}

interface PriceDetailLineItem extends PriceDetailBase {
  /**
   * Line item ID.
   */
  id: string;
}

interface PriceDetail extends PriceDetailBase {
  /**
   * Detailed pricing calculation per line item.
   */
  line_items: PriceDetailLineItem[];
}

interface OrderDetail {
  id: string;
  status: string;
  is_cod?: boolean;
  has_updated_recipient_address: boolean;
  shipping_provider: string;
  shipping_provider_id: string;
  create_time: number; //The date and time that the order was created. Unix timestamp for second.
  paid_time: number; //The date and time that the order was paid. Unix timestamp for second.
  cancel_order_sla_time: number; //The automatic cancellation time for orders specified by the platform.
  collection_due_time: number; //	If the order hasn't updated its status to "IN_TRANSIT" before this time, the order will be canceled by TikTok Shop
  shipping_due_time: number; //If the order hasn't updated its status to "AWAITING_COLLECTION" before this time, the order will be canceled by TikTok Shop.
  delivery_due_time: number; //If the order hasn't updated its status to "DELIVERED" before this time, the order will be canceled by TikTok Shop
  collection_time: number; //The timestamp of the order's status update to "IN_TRANSIT".
  delivery_time: number; //The timestamp of the order's status update to "DELIVERED".
  cancel_time: number; //The timestamp of the order's status update to "CANCELLED".
  tracking_number: string; //Tracking number. Available after ship pacakge.
  rts_time: number; //The time seller shipped order(call ShipOrder successfully).
  rts_sla: number; //The latest shipping time specified by the platform.
  tts_sla: number; //The latest collection time specified by the platform.
  cancel_order_sla: number; //The automatic cancellation time for orders specified by the platform.
  update_time: number; //Time of order status changes.
  rts_sla_time: number; //The latest shipping time specified by the platform. Unix timestamp.
  tts_sla_time: number; //The latest collection time specified by the platform.
  request_cancel_time: number; //Buyer request cancel time
  delivery_sla?: number; //Delivery SLA time
  is_buyer_request_cancel: boolean; //True when the buyer has a pending cancellation request
  buyer_message: string;
  buyer_email: string;
  payment_info: PaymentInfo;
  recipient_address: RecipentAddress;
  cancel_reason: string;
  cancellation_initiator: string; // SELLER/BUYER/SYSTEM
  cancel_user: string;
  receiver_address_updated?: number; //0:no update, 1:updated;
  buyer_uid: string;
  split_or_combine_tag?: string;
  fulfillment_type: number; // Only orders with fulfillment type = 0 can be shipped by merchants.
  seller_note?: string;
  warehouse_id: string;
  payment_method: string;
  payment_method_type: number;
  payment_method_name: string;
  delivery_option_type?: number; //PLATFORM=1 (platform logistics mode), SELLER=2 (merchant self-shipping mode)
  delivery_option_description?: string;
  delivery_option_id?: string;
  delivery_option_name: string;
  is_on_hold_order: boolean;
  is_sample_order: boolean;
  line_items: Array<LineItems>;
  packages: Array<Packages>;
}

interface ResponseOrderList extends TiktokResponseCommon<OrderList> {}
interface ResponseOrderDetail extends TiktokResponseCommon<OrderDetail> {}
interface ResponsePriceDetail extends TiktokResponseCommon<PriceDetail> {}

export {
  OrderListItem as TiktokOrderListItem,
  PriceDetail as TiktokPriceDetail,
  PriceDetailLineItem as TiktokPriceDetailLineItem,
  ResponsePriceDetail as TiktokResponsePriceDetail,
  ResponseOrderList as TiktokResponseOrderList,
  ResponseOrderDetail as TiktokResponseOrderDetail,
};
