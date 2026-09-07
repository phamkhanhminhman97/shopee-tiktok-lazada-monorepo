export interface FblGetChannelStocksForMCLRequest {
  platform_name: string;
  fulfillment_sku_id: number;
  warehouse_code?: string;
}

export interface FblQueryFulfillmentOrderForMCLRequest {
  platform_order_id?: string;
  platform_name: string;
  per_page: number;
  page: number;
  sales_order_number?: string;
  status?: string;
  create_start_time: string;
  create_end_time: string;
  delivery_type?: string;
}

export interface FblGetFulfillmentProductDetailRequest {
  per_page?: number;
  shelf_life_flag?: boolean;
  marketplace: string;
  fulfillment_sku?: string;
  serial_number_flag?: boolean;
  page?: number;
  fulfillment_sku_name?: string;
  barcode?: string;
}

export interface FblGetFulfillmentSkuListForMCLRequest {
  page: number;
  per_page: string;
  platform_name: string;
  fulfillment_sku_name?: string;
  seller_sku?: string;
  fulfillment_sku_code?: string;
  barcode?: string;
  fulfillment_sku_codes?: string;
}

export interface FblGetFulfillmentSkuRelationByScItemRequest {
  site: string;
  sc_item_id?: number;
  fulfillment_sku?: string;
}

export interface FblGetFulfillmentSkuRelationsByScItemsRequest {
  biz_name: string;
  seller_ids: number[];
  sc_item_ids?: number[];
  fulfillment_skus?: string[];
}

export interface FblGetFulfillmentSkuRelationBySkuRequest {
  site: string;
  item_id: number;
  sku_id: number;
}

export interface FblGetFulfillmentSkuRelationsBySkusRequest {
  site: string;
  item_sku: Record<string, unknown>;
}

export interface FblGetIcpOrderFileRequest {
  order_number: string;
}

export interface FblListIcpWarehouseRequest {
  warehouse_type: string;
}

export interface FblGetInboundOrderDetailRequest {
  inbound_order_no: string;
  marketplace: string;
}

export interface FblGetInboundOrderListRequest {
  inbound_order_no?: string;
  creation_time_From?: string;
  creation_time_To?: string;
  inbound_warehouse?: string;
  seller_sku?: string;
  fulfillment_sku?: string;
  marketplace: string;
  page?: string;
  per_page?: string;
  reservation_status?: string;
  reservation_order?: string;
  reference_number?: string;
}

export interface FblCheckInboundReservationSlotRequest {
  inbound_orders: string;
  date: string;
}

export interface FblGetInboundReservationFileRequest {
  reservation_order: string;
}

export interface FblQueryInboundReservationOrderRequest {
  reservation_order?: string;
  inbound_order?: string;
}

export interface FblGetInventoryChangedSKURequest {
  warehouse_code?: string;
  page?: number;
  per_page?: number;
  market_place: string;
  operate_Time_From?: string;
  operate_Time_To?: string;
}

export interface FblGetInventoryOccupyDetailsRequest {
  fulfillmentSku: string;
  storeCode: string;
  marketplace: string;
  pageNum?: number;
  pageSize?: number;
}

export interface FblGetInventoryOperateLogRequest {
  page?: number;
  per_page?: number;
  market_place: string;
  operate_time_from?: string;
  operate_time_to?: string;
  warehouse_code?: string;
  fulfillment_sku_id?: string;
  order_type_code?: string;
}

export interface FblGetOutboundOrderDetailRequest {
  outbound_order_no: string;
  marketplace: string;
}

export interface FblGetOutboundOrderListRequest {
  outbound_order_no?: string;
  creation_time_from?: string;
  creation_time_to?: string;
  outbound_warehouse?: string;
  seller_sku?: string;
  fulfillment_sku?: string;
  marketplace: string;
  page?: string;
  per_page?: string;
  reference_number?: string;
}

export interface FblGetPlatformProductsV2Request {
  per_page?: number;
  seller_id: number;
  marketplace: string;
  seller_sku?: string;
  platform_sku_name?: string;
  ready_for_inbound?: boolean;
  platform_sku?: string;
  page?: number;
}

export interface FblQueryReverseOrderForMCLRequest {
  sales_order_number: string;
}

export type FblGetShipperInfoRequest = Record<string, never>;

export interface FblGetStockRuleRequest {
  fulfillment_sku_ids?: string;
  store_code: string;
  page?: string;
  per_page?: string;
}

export interface FblGetWarehouseStockRequest {
  seller_sku?: string;
  marketplace: string;
  fulfilment_sku?: string;
  store_code?: string;
}

export interface FblGetWarehouseStockV3Request {
  seller_sku?: string;
  marketplace: string;
  fulfilment_sku?: string;
  store_code?: string;
}

export interface FblGetVasOrderByNo4FBLRequest {
  platform_name: string;
  vas_order_code: string;
}

export interface FblGetWarehouseListForMCLRequest {
  country_code: string;
  page: number;
  per_page: number;
}

export interface FblCancelFulfillmentOrderForMCLItems {
  platform_item_id: string;
}

export interface FblCancelFulfillmentOrderForMCLRequest {
  platform_order_id: string;
  platform_name: string;
  cancel_reason?: string;
  items: FblCancelFulfillmentOrderForMCLItems[];
}

export interface FblCreateFulfillmentOrderForMCLItems {
  paid_price: string;
  platform_delivery_type: string;
  platform_item_id: string;
  sku?: string;
  owner_id: string;
  shipping_type: string;
  fulfillment_sku_id: string;
  quantity: number;
  store_code: string;
  unit_price: string;
  warehouse_promised_time?: string;
  promised_max_time?: string;
  promised_min_time?: string;
  platform_sub_trade_id?: string;
  category_name?: string;
  fulfillment_priority?: boolean;
}

export interface FblCreateFulfillmentOrderForMCLReceiver {
  zip_code?: string;
  country_iso: string;
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  town?: string;
  detail_address: string;
  area_id?: string;
  division_id?: string;
  address_id: string;
  mobile_phone: string;
  telephone?: string;
  company_name?: string;
  contact_name: string;
  email: string;
}

export interface FblCreateFulfillmentOrderForMCLRequest {
  platform_payment_method: string;
  remark?: string;
  currency: string;
  items: FblCreateFulfillmentOrderForMCLItems[];
  receiver: FblCreateFulfillmentOrderForMCLReceiver;
  platform_name: string;
  fulfillment_finish_time?: string;
  platform_order_creation_time: string;
  sales_order_number: string;
  platform_order_id: string;
  out_order_creation_time?: string;
  is_platform_nominated_fleet?: boolean;
  seller_store_id?: string;
  seller_store_name?: string;
}

export interface FblCreateFulfillmentOrderForMCLV2PNFItems {
  paid_price: string;
  platform_delivery_type: string;
  platform_item_id: string;
  sku?: string;
  owner_id: string;
  shipping_type: string;
  fulfillment_sku_id: string;
  quantity: number;
  store_code: string;
  unit_price: string;
  warehouse_promised_time?: string;
  promised_max_time?: string;
  promised_min_time?: string;
  platform_sub_trade_id?: string;
  category_name?: string;
  fulfillment_priority?: boolean;
}

export interface FblCreateFulfillmentOrderForMCLV2PNFRequest {
  platform_payment_method: string;
  remark?: string;
  currency: string;
  items: FblCreateFulfillmentOrderForMCLV2PNFItems[];
  platform_name: string;
  fulfillment_finish_time?: string;
  platform_order_creation_time: string;
  sales_order_number: string;
  platform_order_id: string;
  out_order_creation_time?: string;
  seller_store_id?: string;
  seller_store_name?: string;
}

export interface FblCreateFulfillmentSkuDecoupleRequest {
  fulfillment_sku_name: string;
  barcodes: string[];
  hygroscopic: boolean;
  precious: boolean;
  product_type: string;
  temperature_requirement: string;
  pic_urls: string[];
  serial_number_flag: boolean;
  shelf_life_flag: boolean;
  shelf_life_days?: number;
  reject_shelf_live?: number;
  alert_shelf_live?: number;
  offline_shelf_live?: number;
  seller_sku: string;
  sale_price: string;
  length?: number;
  width?: number;
  height?: number;
  weight?: number;
}

export interface FblUpdateFulfillmentSkuDecoupleRequest {
  barcodes?: string[];
  hygroscopic?: boolean;
  precious?: boolean;
  product_type?: string;
  temperature_requirement?: string;
  pic_urls?: string[];
  serial_number_flag?: boolean;
  shelf_life_flag?: boolean;
  shelf_life_days?: number;
  reject_shelf_live?: number;
  alert_shelf_live?: number;
  offline_shelf_live?: number;
  sale_price?: string;
  fulfillment_sku_id: number;
}

export interface FblCreateFulfillmentSkuForFBLRequest {
  sku_id: number;
  barcodes: string[];
  hygroscopic: boolean;
  product_type: string;
  temperature_requirement: string;
  serial_number_flag: boolean;
  shelf_life_flag: boolean;
  shelf_life_days?: number;
  reject_shelf_live?: number;
  alert_shelf_live?: number;
  offline_shelf_live?: number;
}

export interface FblRemoveFulfillmentSkuRelationRequest {
  site: string;
  item_id: number;
  sku_id: number;
  sc_item_id?: number;
  fulfillment_sku?: string;
}

export interface FblBuildFulfillmentSkuRelationRequest {
  site: string;
  item_id: number;
  sku_id: number;
  sc_item_id?: number;
  fulfillment_sku?: string;
}

export interface FblCancelnBoundOrderRequest {
  inbound_order_no: string;
}

export interface FblCreateInboundOrderSkus {
  seller_sku?: string;
  fulfillment_sku?: string;
  requested_quantity: number;
}

export interface FblCreateInboundOrderRequest {
  warehouse_code: string;
  delivery_type?: string;
  seller_warehouse_code?: string;
  estimate_time: string;
  comment?: string;
  reference_number?: string;
  skus: FblCreateInboundOrderSkus[];
}

export interface FblCancelInboundReservationRequest {
  reservation_order: string;
}

export interface FblCreateInboundReservationRequest {
  inbound_orders: string[];
  slot: string;
}

export interface FblCancelOutboundOrderRequest {
  outbound_order_no: string;
}

export interface FblCreateOutBoundOrderSkus {
  fulfillment_sku?: string;
  requested_quantity: number;
  seller_sku?: string;
}

export interface FblCreateOutBoundOrderRequest {
  reference_number?: string;
  warehouse_code: string;
  delivery_type?: string;
  seller_warehouse_code?: string;
  estimate_time: string;
  comment?: string;
  inventory_type: number;
  skus: FblCreateOutBoundOrderSkus[];
}

export interface FblCreateProductReinboundOrderForMCLRequest {
  platform_name: string;
  sales_order_number: string;
  platform_order_id: string;
  reinbound_order_id: string;
  tracking_number: string;
  reason?: string;
}

export interface FblReturnCancellationRequest {
  return_id: string;
}

export interface FblReturnOrderCreationTrackingOriginLocation {
  address: string;
  address_id: string;
  details?: string;
}

export interface FblReturnOrderCreationTrackingOrigin {
  location: FblReturnOrderCreationTrackingOriginLocation;
}

export interface FblReturnOrderCreationTracking {
  origin: FblReturnOrderCreationTrackingOrigin;
  tracking_number: string;
}

export interface FblReturnOrderCreationCustomer {
  phone: string;
  email?: string;
  name: string;
}

export interface FblReturnOrderCreationParcelItems {
  name: string;
  paid_price?: string;
  platform_item_id: string;
  quantity: number;
  return_reason: string;
  return_type: string;
  seller_return_policy: string;
  sku: string;
  unit_price: string;
  weight: string;
  width: string;
  delivery_package_id: string;
  fulfillment_type: string;
  height: string;
  length: string;
}

export interface FblReturnOrderCreationParcel {
  items: FblReturnOrderCreationParcelItems[];
}

export interface FblReturnOrderCreationRequest {
  tracking: FblReturnOrderCreationTracking;
  platform_name: string;
  platform_order_creation_time: string;
  return_comment: string;
  return_delivery_type: string;
  return_order_number: string;
  sales_order_number: string;
  currency: string;
  customer: FblReturnOrderCreationCustomer;
  platform_order_id: string;
  parcel: FblReturnOrderCreationParcel;
}

export interface FblSetStockRuleSkus {
  fulfillment_sku_id: string;
  store_code: string;
  ratio: number;
  auto_balancing: boolean;
}

export interface FblSetStockRuleRequest {
  skus: FblSetStockRuleSkus[];
}

export interface FblCancelVasOrder4FBLRequest {
  platform_name: string;
  vas_order_no: string;
  cancel_reason?: string;
}

export interface FblCreateVasOrder4FBLLines {
  quantity: number;
  scItem_id: number;
  bundle_quantity?: number;
}

export interface FblCreateVasOrder4FBLRequest {
  platform_name: string;
  idempotent_key: string;
  service_provider_no?: string;
  target_order_no?: string;
  target_order_type?: string;
  vas_code: string;
  warehouse_code: string;
  lines: FblCreateVasOrder4FBLLines[];
}

export interface FblUploadWaybillRequest {
  waybill: string[];
  package_code: string;
  tracking_number: string;
  extends_field?: string;
  store_code: string;
}
