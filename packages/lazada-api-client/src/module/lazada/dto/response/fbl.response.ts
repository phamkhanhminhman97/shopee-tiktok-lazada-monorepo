export interface FblGetChannelStocksForMCLDataStocksChannelStocks {
  quantity?: number;
  channel?: string;
}

export interface FblGetChannelStocksForMCLDataStocks {
  warehouse_code?: string;
  channel_stocks?: FblGetChannelStocksForMCLDataStocksChannelStocks[];
}

export interface FblGetChannelStocksForMCLData {
  fulfillment_sku_id?: number;
  stocks?: FblGetChannelStocksForMCLDataStocks[];
}

export interface FblGetChannelStocksForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblGetChannelStocksForMCLData;
}

export type FblGetChannelStocksForMCLResponse = FblGetChannelStocksForMCL;

export interface FblQueryFulfillmentOrderForMCLDataItems {
  platform_item_id?: string;
  fulfillment_sku_id?: string;
  status?: string;
}

export interface FblQueryFulfillmentOrderForMCLData {
  sales_order_number?: string;
  platform_order_id?: string;
  create_time?: string;
  items?: FblQueryFulfillmentOrderForMCLDataItems[];
}

export interface FblQueryFulfillmentOrderForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  per_page?: number;
  page?: number;
  total_count?: number;
  data?: FblQueryFulfillmentOrderForMCLData[];
}

export type FblQueryFulfillmentOrderForMCLResponse = FblQueryFulfillmentOrderForMCL;

export interface FblGetFulfillmentProductDetailDataSnSampleListSampleRuleList {
  rule_regular_expression: string;
  rule_desc: string;
  rule_img_url: string;
  rule_sample: string;
}

export interface FblGetFulfillmentProductDetailDataSnSampleList {
  sample_seq: string;
  sample_desc: string;
  sample_rule_list: FblGetFulfillmentProductDetailDataSnSampleListSampleRuleList[];
}

export interface FblGetFulfillmentProductDetailData {
  shelf_life_days: number;
  color: string;
  fulfillment_sku: string;
  serial_number_flag: boolean;
  length: number;
  offline_shelf_live: number;
  barcodes: string;
  net_weight: number;
  alert_shelf_live: number;
  shelf_life_flag: boolean;
  reject_shelf_live: number;
  sn_sample_list: FblGetFulfillmentProductDetailDataSnSampleList[];
  width: number;
  shipper_id: string;
  serial_number_mode: string;
  fulfillment_sku_name: string;
  gross_weight: number;
  height: number;
  hygroscopic?: string;
  precious?: string;
  product_type?: string;
  seller_skus?: string[];
  temperature_requirement?: string;
}

export interface FblGetFulfillmentProductDetail {
  data: FblGetFulfillmentProductDetailData[];
}

export type FblGetFulfillmentProductDetailResponse = FblGetFulfillmentProductDetail;

export interface FblGetFulfillmentSkuListForMCLData {
  seller_id?: number;
  platform_name?: string;
  owner_id?: number;
  seller_skus?: string;
  fulfillment_sku_code?: string;
  fulfillment_sku_name?: string;
  fulfillment_sku_id?: number;
  barcodes?: string;
  serial_num_flag?: boolean;
  shelf_life_flag?: boolean;
  has_stock?: boolean;
  min_stock_alert?: boolean;
  platform_sku_status?: string;
  sale_price?: string;
  currency?: string;
  pic_urls?: string;
}

export interface FblGetFulfillmentSkuListForMCL {
  error_message?: string;
  page?: number;
  per_page?: number;
  total_count?: number;
  data?: FblGetFulfillmentSkuListForMCLData[];
  success?: boolean;
  error_code?: string;
}

export type FblGetFulfillmentSkuListForMCLResponse = FblGetFulfillmentSkuListForMCL;

export interface FblGetFulfillmentSkuRelationByScItemResultData {
  item_id: number;
  site: string;
  seller_id: number;
  sc_item_user_id: number;
  sc_item_id: number;
  source: string;
  sku_id: number;
  fulfillment_sku?: string;
}

export interface FblGetFulfillmentSkuRelationByScItemResult {
  data: FblGetFulfillmentSkuRelationByScItemResultData[];
  failure: boolean;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblGetFulfillmentSkuRelationByScItem {
  result: FblGetFulfillmentSkuRelationByScItemResult;
}

export type FblGetFulfillmentSkuRelationByScItemResponse = FblGetFulfillmentSkuRelationByScItem;

export interface FblGetFulfillmentSkuRelationsByScItemsResultData {
  item_id: number;
  site: string;
  seller_id: number;
  sc_item_user_id: number;
  sc_item_id: number;
  source: string;
  fulfillment_sku: string;
  sku_id: number;
}

export interface FblGetFulfillmentSkuRelationsByScItemsResult {
  data: FblGetFulfillmentSkuRelationsByScItemsResultData[];
  failure: boolean;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblGetFulfillmentSkuRelationsByScItems {
  result: FblGetFulfillmentSkuRelationsByScItemsResult;
}

export type FblGetFulfillmentSkuRelationsByScItemsResponse = FblGetFulfillmentSkuRelationsByScItems;

export interface FblGetFulfillmentSkuRelationBySkuResultData {
  item_id: number;
  site: string;
  seller_id: number;
  sc_item_user_id: string;
  sc_item_id: number;
  source: string;
  sku_id: number;
  fulfillment_sku?: string;
}

export interface FblGetFulfillmentSkuRelationBySkuResult {
  data: FblGetFulfillmentSkuRelationBySkuResultData;
  failure: boolean;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblGetFulfillmentSkuRelationBySku {
  result: FblGetFulfillmentSkuRelationBySkuResult;
}

export type FblGetFulfillmentSkuRelationBySkuResponse = FblGetFulfillmentSkuRelationBySku;

export interface FblGetFulfillmentSkuRelationsBySkusResultData {
  item_id: number;
  site: string;
  seller_id: number;
  sc_item_user_id: number;
  sc_item_id: number;
  source: string;
  fulfillment_sku: string;
  sku_id: number;
}

export interface FblGetFulfillmentSkuRelationsBySkusResult {
  data: FblGetFulfillmentSkuRelationsBySkusResultData[];
  failure: boolean;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblGetFulfillmentSkuRelationsBySkus {
  result: FblGetFulfillmentSkuRelationsBySkusResult;
}

export type FblGetFulfillmentSkuRelationsBySkusResponse = FblGetFulfillmentSkuRelationsBySkus;

export interface FblGetIcpOrderFileData {
  url?: string;
}

export interface FblGetIcpOrderFile {
  error_code?: string;
  error_message?: string;
  data?: FblGetIcpOrderFileData;
  success?: boolean;
}

export type FblGetIcpOrderFileResponse = FblGetIcpOrderFile;

export interface FblListIcpWarehouseData {
  warehouse_code?: string;
  warehouse_name?: string;
}

export interface FblListIcpWarehouse {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblListIcpWarehouseData[];
}

export type FblListIcpWarehouseResponse = FblListIcpWarehouse;

export interface FblGetInboundOrderDetailDataSkus {
  item_inbounded_expired?: string;
  seller_sku: string[];
  item_inbounded_good: number;
  serial_number_flag: boolean;
  sku_status: string;
  item_inbounded_damaged: number;
  fulfillment_sku_name: string;
  requested_quantity: number;
  shelf_life_flag: boolean;
  barcodes: string[];
  fulfillment_sku: string;
  comments?: string;
}

export interface FblGetInboundOrderDetailData {
  reservation_status?: string;
  reservation_order?: string;
  seller_city?: string;
  seller_address?: string;
  seller_postcode?: string;
  seller_country?: string;
  seller_contact?: string;
  seller_mobile?: string;
  fulfillment_order_number?: string;
  inbound_warehouse_code?: string;
  inbound_time: string;
  skus: FblGetInboundOrderDetailDataSkus[];
  comments: string;
  io_number: string;
  estimate_time: string;
  marketplace: string;
  delivery_type: string;
  created_at: string;
  inbound_warehouse: string;
  reference_number: string;
  updated_at: string;
  io_status: string;
  shop_name?: string;
  io_type?: string;
  warehouse_name?: string;
  warehouse_address?: string;
  seller_warehouse_name?: string;
  need_reservation?: boolean;
}

export interface FblGetInboundOrderDetail {
  data: FblGetInboundOrderDetailData;
}

export type FblGetInboundOrderDetailResponse = FblGetInboundOrderDetail;

export interface FblGetInboundOrderListResultData {
  sku_approved: number;
  inbound_time: string;
  io_number: string;
  estimate_time: string;
  marketplace: string;
  item_inbounded_good: number;
  delivery_type: string;
  item_requested: number;
  created_at: string;
  sku_inbounded: number;
  sku_requested: number;
  inbound_warehouse: string;
  reference_number: string;
  item_inbounded_damaged: number;
  updated_at: string;
  status: string;
  shop_name?: string;
  io_type?: string;
  inbound_warehouse_code?: string;
  need_reservation?: boolean;
  reservation_status?: string;
  reservation_order?: string;
  item_inbounded_expired?: string;
}

export interface FblGetInboundOrderListResult {
  per_page: number;
  data: FblGetInboundOrderListResultData[];
  page: number;
  total_count: number;
}

export interface FblGetInboundOrderList {
  result: FblGetInboundOrderListResult;
}

export type FblGetInboundOrderListResponse = FblGetInboundOrderList;

export interface FblCheckInboundReservationSlotData {
  slots?: string[];
}

export interface FblCheckInboundReservationSlot {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblCheckInboundReservationSlotData;
}

export type FblCheckInboundReservationSlotResponse = FblCheckInboundReservationSlot;

export interface FblGetInboundReservationFileData {
  url?: string;
}

export interface FblGetInboundReservationFile {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblGetInboundReservationFileData;
}

export type FblGetInboundReservationFileResponse = FblGetInboundReservationFile;

export interface FblQueryInboundReservationOrderData {
  reservation_order?: string;
  slot?: string;
  status?: string;
  inbound_orders?: string[];
}

export interface FblQueryInboundReservationOrder {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblQueryInboundReservationOrderData;
}

export type FblQueryInboundReservationOrderResponse = FblQueryInboundReservationOrder;

export interface FblGetInventoryChangedSKUSkuList {
  fulfillment_sku_id?: string;
  operate_log_count?: number;
}

export interface FblGetInventoryChangedSKU {
  per_page?: number;
  page?: number;
  total_count?: number;
  sku_list?: FblGetInventoryChangedSKUSkuList[];
  success?: string;
  errMessage?: string;
  errCode?: string;
}

export type FblGetInventoryChangedSKUResponse = FblGetInventoryChangedSKU;

export interface FblGetInventoryOccupyDetailsInventoryOccupyDetails {
  orderCode?: string;
  quantity?: number;
  orderType?: string;
  inventoryType?: string;
}

export interface FblGetInventoryOccupyDetails {
  inventoryOccupyDetails?: FblGetInventoryOccupyDetailsInventoryOccupyDetails[];
}

export type FblGetInventoryOccupyDetailsResponse = FblGetInventoryOccupyDetails;

export interface FblGetInventoryOperateLogInventoryOperateLogRefOrderCode {
  type?: string;
  order_code?: string;
}

export interface FblGetInventoryOperateLogInventoryOperateLog {
  ref_order_code?: FblGetInventoryOperateLogInventoryOperateLogRefOrderCode[];
  warehouse_code?: string;
  warehouse_name?: string;
  order_type?: string;
  inventory_type?: string;
  change_quantity?: string;
  result_quantity?: string;
  operate_time?: string;
  order_type_code?: string;
  fulfillment_sku_id?: string;
  customer_order?: string;
}

export interface FblGetInventoryOperateLog {
  inventory_operate_log?: FblGetInventoryOperateLogInventoryOperateLog[];
  success?: string;
  errMessage?: string;
  errCode?: string;
  page?: number;
  per_page?: number;
  total_count?: number;
}

export type FblGetInventoryOperateLogResponse = FblGetInventoryOperateLog;

export interface FblGetOutboundOrderDetailDataSkus {
  seller_sku: string[];
  item_outbounded: number;
  serial_number_flag: boolean;
  sku_status: string;
  requested_quantity: number;
  fulfillment_sku_name: string;
  shelf_life_flag: boolean;
  barcodes: string[];
  fulfillment_sku: string;
  comments?: string;
}

export interface FblGetOutboundOrderDetailData {
  outbound_time: string;
  comments: string;
  skus: FblGetOutboundOrderDetailDataSkus[];
  estimate_time: string;
  marketplace: string;
  outbound_warehouse: string;
  delivery_type: string;
  created_at: string;
  reference_number: string;
  item_outbounded: number;
  outbound_order_no: string;
  updated_at: string;
  status: string;
  shop_name?: string;
  created_by?: string;
  outbound_reason?: string;
  inventory_type?: string;
  warehouse_name?: string;
  warehouse_address?: string;
  seller_warehouse_name?: string;
  seller_city?: string;
  seller_address?: string;
  seller_postcode?: string;
  seller_country?: string;
  seller_contact?: string;
  seller_mobile?: string;
  fulfillment_order_number?: string;
  outbound_warehouse_code?: string;
}

export interface FblGetOutboundOrderDetail {
  data: FblGetOutboundOrderDetailData;
}

export type FblGetOutboundOrderDetailResponse = FblGetOutboundOrderDetail;

export interface FblGetOutboundOrderListResultData {
  sku_approved: number;
  outbound_time: string;
  oo_number: string;
  estimate_time: string;
  marketplace: string;
  delivery_type: string;
  item_requested: number;
  created_at: string;
  sku_outbounded: number;
  sku_requested: number;
  outbound_warehouse: string;
  reference_number: string;
  item_outbounded: number;
  updated_at: string;
  status: string;
  shop_name?: string;
  created_by?: string;
  outbound_reason?: string;
  fulfillment_order_number?: string;
  outbound_warehouse_code?: string;
}

export interface FblGetOutboundOrderListResult {
  per_page: number;
  data: FblGetOutboundOrderListResultData[];
  page: number;
  total_count: number;
}

export interface FblGetOutboundOrderList {
  result: FblGetOutboundOrderListResult;
}

export type FblGetOutboundOrderListResponse = FblGetOutboundOrderList;

export interface FblGetPlatformProductsV2DataSkus {
  fulfillment_sku_name?: string;
  fulfillment_sku?: string;
  sku_status?: string;
  platform_sku?: string;
  seller_sku?: string;
  extend_fields?: string;
}

export interface FblGetPlatformProductsV2Data {
  platform_sku_name: string;
  status: string;
  marketplace: string;
  source: string;
  product_id: string;
  skus: FblGetPlatformProductsV2DataSkus[];
}

export interface FblGetPlatformProductsV2 {
  data: FblGetPlatformProductsV2Data[];
}

export type FblGetPlatformProductsV2Response = FblGetPlatformProductsV2;

export interface FblQueryReverseOrderForMCLDataItems {
  fulfillment_sku_id?: number;
  fulfillment_sku_code?: string;
  quantity?: number;
}

export interface FblQueryReverseOrderForMCLData {
  sales_order_number?: string;
  create_time?: string;
  type?: string;
  status?: string;
  items?: FblQueryReverseOrderForMCLDataItems[];
}

export interface FblQueryReverseOrderForMCL {
  success?: boolean;
  error_message?: string;
  data?: FblQueryReverseOrderForMCLData[];
}

export type FblQueryReverseOrderForMCLResponse = FblQueryReverseOrderForMCL;

export interface FblGetShipperInfoData {
  shipper_id?: string;
  is_mcl?: boolean;
  partner_name?: string;
  is_cb?: boolean;
  main_seller_id?: string;
  main_seller_site?: string;
  main_shipper_id?: string;
}

export interface FblGetShipperInfo {
  error_message?: string;
  data?: FblGetShipperInfoData;
  success?: boolean;
  error_code?: string;
}

export type FblGetShipperInfoResponse = FblGetShipperInfo;

export interface FblGetStockRuleDataChannelRatio {
  ratio?: number;
  channel_code?: string;
}

export interface FblGetStockRuleData {
  fulfillment_sku_id?: string;
  store_code?: string;
  auto_balancing?: boolean;
  channel_ratio?: FblGetStockRuleDataChannelRatio[];
}

export interface FblGetStockRule {
  success?: string;
  error_code?: string;
  error_message?: string;
  page?: number;
  per_page?: number;
  total_count?: number;
  data?: FblGetStockRuleData[];
}

export type FblGetStockRuleResponse = FblGetStockRule;

export interface FblGetWarehouseStockDataStoreStocksStocksSellable {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockDataStoreStocksStocksUnsellable {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockDataStoreStocksStocksPending {
  reserved?: number;
  available?: number;
}

export interface FblGetWarehouseStockDataStoreStocksStocks {
  sellable?: FblGetWarehouseStockDataStoreStocksStocksSellable;
  unsellable?: FblGetWarehouseStockDataStoreStocksStocksUnsellable;
  pending?: FblGetWarehouseStockDataStoreStocksStocksPending;
}

export interface FblGetWarehouseStockDataStoreStocks {
  store_code?: string;
  stocks?: FblGetWarehouseStockDataStoreStocksStocks;
}

export interface FblGetWarehouseStockData {
  fulfilment_sku?: string;
  store_stocks?: FblGetWarehouseStockDataStoreStocks[];
}

export interface FblGetWarehouseStock {
  data?: FblGetWarehouseStockData[];
}

export type FblGetWarehouseStockResponse = FblGetWarehouseStock;

export interface FblGetWarehouseStockV3DataStoreStocksStocksExpiredUnsellable {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocksSellable {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocksUnsellable {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocksPending {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocksTransfer {
  available?: number;
  reserved?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocksDamagedUnsellable {
  reserved?: number;
  available?: number;
}

export interface FblGetWarehouseStockV3DataStoreStocksStocks {
  expiredUnsellable?: FblGetWarehouseStockV3DataStoreStocksStocksExpiredUnsellable;
  sellable?: FblGetWarehouseStockV3DataStoreStocksStocksSellable;
  unsellable?: FblGetWarehouseStockV3DataStoreStocksStocksUnsellable;
  pending?: FblGetWarehouseStockV3DataStoreStocksStocksPending;
  transfer?: FblGetWarehouseStockV3DataStoreStocksStocksTransfer;
  damagedUnsellable?: FblGetWarehouseStockV3DataStoreStocksStocksDamagedUnsellable;
}

export interface FblGetWarehouseStockV3DataStoreStocks {
  store_code?: string;
  stocks?: FblGetWarehouseStockV3DataStoreStocksStocks;
}

export interface FblGetWarehouseStockV3Data {
  fulfilment_sku?: string;
  store_stocks?: FblGetWarehouseStockV3DataStoreStocks[];
}

export interface FblGetWarehouseStockV3 {
  data?: FblGetWarehouseStockV3Data[];
}

export type FblGetWarehouseStockV3Response = FblGetWarehouseStockV3;

export interface FblGetVasOrderByNo4FBL {
  data?: string;
}

export type FblGetVasOrderByNo4FBLResponse = FblGetVasOrderByNo4FBL;

export interface FblGetWarehouseListForMCLData {
  warehouse_name?: string;
  warehouse_code?: string;
  platform_name?: string;
  country_code?: string;
  area_code?: string;
  city_code?: string;
  town_code?: string;
  division_id?: string;
  longitude?: string;
  latitude?: string;
  zip_code?: string;
  multi_channel?: boolean;
}

export interface FblGetWarehouseListForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  page?: number;
  per_page?: number;
  total_count?: number;
  total_page?: number;
  data?: FblGetWarehouseListForMCLData[];
}

export type FblGetWarehouseListForMCLResponse = FblGetWarehouseListForMCL;

export interface FblCancelFulfillmentOrderForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCancelFulfillmentOrderForMCLResponse = FblCancelFulfillmentOrderForMCL;

export interface FblCreateFulfillmentOrderForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCreateFulfillmentOrderForMCLResponse = FblCreateFulfillmentOrderForMCL;

export interface FblCreateFulfillmentOrderForMCLV2PNF {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCreateFulfillmentOrderForMCLV2PNFResponse = FblCreateFulfillmentOrderForMCLV2PNF;

export interface FblCreateFulfillmentSkuDecoupleData {
  fulfillment_sku_id?: number;
  fulfillment_sku_code?: string;
}

export interface FblCreateFulfillmentSkuDecouple {
  data?: FblCreateFulfillmentSkuDecoupleData;
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCreateFulfillmentSkuDecoupleResponse = FblCreateFulfillmentSkuDecouple;

export interface FblUpdateFulfillmentSkuDecouple {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: boolean;
}

export type FblUpdateFulfillmentSkuDecoupleResponse = FblUpdateFulfillmentSkuDecouple;

export interface FblCreateFulfillmentSkuForFBLData {
  fulfillment_sku_id?: number;
  fulfillment_sku_code?: string;
}

export interface FblCreateFulfillmentSkuForFBL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  data?: FblCreateFulfillmentSkuForFBLData;
}

export type FblCreateFulfillmentSkuForFBLResponse = FblCreateFulfillmentSkuForFBL;

export interface FblRemoveFulfillmentSkuRelationResult {
  success: boolean;
  failure: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblRemoveFulfillmentSkuRelation {
  result: FblRemoveFulfillmentSkuRelationResult;
}

export type FblRemoveFulfillmentSkuRelationResponse = FblRemoveFulfillmentSkuRelation;

export interface FblBuildFulfillmentSkuRelationResult {
  success: boolean;
  failure: boolean;
  error_code: string;
  error_msg: string;
}

export interface FblBuildFulfillmentSkuRelation {
  result: FblBuildFulfillmentSkuRelationResult;
}

export type FblBuildFulfillmentSkuRelationResponse = FblBuildFulfillmentSkuRelation;

export interface FblCancelnBoundOrder {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCancelnBoundOrderResponse = FblCancelnBoundOrder;

export interface FblCreateInboundOrder {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  inbound_order_no?: string;
}

export type FblCreateInboundOrderResponse = FblCreateInboundOrder;

export interface FblCancelInboundReservation {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCancelInboundReservationResponse = FblCancelInboundReservation;

export interface FblCreateInboundReservationData {
  reservation_order?: string;
}

export interface FblCreateInboundReservation {
  error_code?: string;
  error_message?: string;
  data?: FblCreateInboundReservationData;
  success?: boolean;
}

export type FblCreateInboundReservationResponse = FblCreateInboundReservation;

export interface FblCancelOutboundOrder {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCancelOutboundOrderResponse = FblCancelOutboundOrder;

export interface FblCreateOutBoundOrder {
  success?: boolean;
  error_code?: string;
  error_message?: string;
  outbound_order_no?: string;
}

export type FblCreateOutBoundOrderResponse = FblCreateOutBoundOrder;

export interface FblCreateProductReinboundOrderForMCL {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblCreateProductReinboundOrderForMCLResponse = FblCreateProductReinboundOrderForMCL;

export interface FblReturnCancellation {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblReturnCancellationResponse = FblReturnCancellation;

export interface FblReturnOrderCreationData {
  return_id?: string;
}

export interface FblReturnOrderCreation {
  data?: FblReturnOrderCreationData;
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblReturnOrderCreationResponse = FblReturnOrderCreation;

export interface FblSetStockRule {
  success?: boolean;
  error_code?: string;
  error_message?: string;
}

export type FblSetStockRuleResponse = FblSetStockRule;

export interface FblCancelVasOrder4FBL {
  data?: string;
}

export type FblCancelVasOrder4FBLResponse = FblCancelVasOrder4FBL;

export interface FblCreateVasOrder4FBL {
  data?: string;
}

export type FblCreateVasOrder4FBLResponse = FblCreateVasOrder4FBL;

export interface FblUploadWaybill {
  success: boolean;
  error_message: string;
  error_code: string;
}

export type FblUploadWaybillResponse = FblUploadWaybill;
