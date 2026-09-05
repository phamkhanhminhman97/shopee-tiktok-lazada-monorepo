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
