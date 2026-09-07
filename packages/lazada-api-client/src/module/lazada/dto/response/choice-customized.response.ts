export interface ChoiceCustomizedGetChoiceProductItemDataVariationVariation1 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ChoiceCustomizedGetChoiceProductItemDataVariationVariation2 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ChoiceCustomizedGetChoiceProductItemDataVariationVariation3 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ChoiceCustomizedGetChoiceProductItemDataVariationVariation4 {
  name?: string;
  has_image?: boolean;
  customize?: boolean;
  options?: string[];
  label?: string;
}

export interface ChoiceCustomizedGetChoiceProductItemDataVariation {
  variation1?: ChoiceCustomizedGetChoiceProductItemDataVariationVariation1;
  variation2?: ChoiceCustomizedGetChoiceProductItemDataVariationVariation2;
  variation3?: ChoiceCustomizedGetChoiceProductItemDataVariationVariation3;
  variation4?: ChoiceCustomizedGetChoiceProductItemDataVariationVariation4;
}

export interface ChoiceCustomizedGetChoiceProductItemData {
  subStatus?: string;
  suspendedSkus?: Record<string, unknown>[];
  variation?: ChoiceCustomizedGetChoiceProductItemDataVariation;
  primary_category?: number;
  attributes?: Record<string, unknown>;
  skus?: Record<string, unknown>[];
  item_id?: number;
  created_time?: string;
  updated_time?: string;
  images?: string;
  marketImages?: string;
  status?: string;
  trialProduct?: boolean;
  rejectReason?: Record<string, unknown>[];
  hiddenReason?: string;
  hiddenStatus?: string;
  bizSupplement?: Record<string, unknown>;
}

export interface ChoiceCustomizedGetChoiceProductItem {
  data: ChoiceCustomizedGetChoiceProductItemData;
}

export type ChoiceCustomizedGetChoiceProductItemResponse = ChoiceCustomizedGetChoiceProductItem;

export interface ChoiceCustomizedGetChoiceProductsDataProducts {
  primary_category?: number;
  attributes?: Record<string, unknown>;
  skus?: Record<string, unknown>[];
  item_id?: number;
  created_time?: string;
  updated_time?: string;
  images?: string;
  marketImages?: string;
  status?: string;
  subStatus?: string;
  suspendedSkus?: Record<string, unknown>[];
  trialProduct?: boolean;
  rejectReason?: Record<string, unknown>[];
  hiddenReason?: string;
  hiddenStatus?: string;
  bizSupplement?: Record<string, unknown>;
}

export interface ChoiceCustomizedGetChoiceProductsData {
  total_products?: number;
  products?: ChoiceCustomizedGetChoiceProductsDataProducts[];
}

export interface ChoiceCustomizedGetChoiceProducts {
  data?: ChoiceCustomizedGetChoiceProductsData;
}

export type ChoiceCustomizedGetChoiceProductsResponse = ChoiceCustomizedGetChoiceProducts;

export interface ChoiceCustomizedGetChoiceSellerData {
  name_company?: string;
  name?: string;
  seller_id?: string;
  verified?: string;
  email?: string;
  short_code?: string;
  cb?: string;
  location?: string;
  status?: string;
}

export interface ChoiceCustomizedGetChoiceSeller {
  data?: ChoiceCustomizedGetChoiceSellerData;
}

export type ChoiceCustomizedGetChoiceSellerResponse = ChoiceCustomizedGetChoiceSeller;

export interface ChoiceCustomizedGetChoiceSkuItemRelationBySkuData {
  item_id: number;
  site: string;
  seller_id: number;
  sc_item_user_id: string;
  sc_item_id: number;
  source: string;
  sku_id: number;
  barcode?: string;
}

export interface ChoiceCustomizedGetChoiceSkuItemRelationBySku {
  data: ChoiceCustomizedGetChoiceSkuItemRelationBySkuData;
}

export type ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse = ChoiceCustomizedGetChoiceSkuItemRelationBySku;

export interface ChoiceCustomizedQueryListJitPurchaseOrderResultData {
  supplier_name: string;
  consign_order_no_list: string;
  gmt_modified: number;
  creator: string;
  supplier_id: number;
  delivery_method: string;
  store_contact_name: string;
  supplier_code: string;
  gmt_create: number;
  gmt_except_arrive_time: number;
  purchase_order_no: string;
  gmt_arrive_time: number;
  trade_order_id_list: string[];
  pickup_order_no: string;
  store_contact_phone: string;
  logistics_no_list: string;
  seller_id: string;
  total_quantity: number;
  store_address: string;
  total_sku_count: number;
  site_id: string;
  store_name: string;
  biz_status: string;
  store_code: string;
  fulfillment_cancel_status?: string;
  ext_fields?: string;
}

export interface ChoiceCustomizedQueryListJitPurchaseOrderResult {
  data: ChoiceCustomizedQueryListJitPurchaseOrderResultData[];
  page_index: number;
  total_page: number;
  success: boolean;
  error_message: string;
  page_size: number;
  error_code: string;
  total_count: number;
}

export interface ChoiceCustomizedQueryListJitPurchaseOrder {
  result: ChoiceCustomizedQueryListJitPurchaseOrderResult;
}

export type ChoiceCustomizedQueryListJitPurchaseOrderResponse = ChoiceCustomizedQueryListJitPurchaseOrder;

export interface ChoiceCustomizedQueryListPurchaseItemResultData {
  product_id: string;
  sc_item_code: string;
  buyer_qty: number;
  sc_item_id: number;
  barcodes: string[];
  received_normal_qty: number;
  img_url: string;
  purchase_order_no: string;
  product_title: string;
  sc_item_name: string;
  seller_sku: string;
  sku_id: string;
  received_defective_qty: number;
}

export interface ChoiceCustomizedQueryListPurchaseItemResult {
  data: ChoiceCustomizedQueryListPurchaseItemResultData[];
  page_index: number;
  total_page: number;
  success: boolean;
  error_message: string;
  page_size: number;
  error_code: string;
  total_count: number;
}

export interface ChoiceCustomizedQueryListPurchaseItem {
  result: ChoiceCustomizedQueryListPurchaseItemResult;
}

export type ChoiceCustomizedQueryListPurchaseItemResponse = ChoiceCustomizedQueryListPurchaseItem;

export interface ChoiceCustomizedQueryPickupOrderResultData {
  reason: string;
  actual_arrive_time: string;
  shipper_name: string;
  update_time: number;
  car_driver_name: string;
  receive_store_code: string;
  estimated_volume: string;
  shipper_address: string;
  actual_pickup_time: string;
  car_number: string;
  pickup_order_no: string;
  actual_weight: string;
  purchase_order_no_list: string[];
  shipper_phone: string;
  estimated_weight: string;
  create_time: number;
  estimated_box_number: number;
  logistics_no_list: string[];
  estimated_pickup_time: number;
  receive_store_address: string;
  car_driver_phone: string;
  status: string;
  actual_logistics_no_list?: string[];
}

export interface ChoiceCustomizedQueryPickupOrderResult {
  data: ChoiceCustomizedQueryPickupOrderResultData;
  success: boolean;
  error_message: string;
  error_code: string;
}

export interface ChoiceCustomizedQueryPickupOrder {
  result: ChoiceCustomizedQueryPickupOrderResult;
}

export type ChoiceCustomizedQueryPickupOrderResponse = ChoiceCustomizedQueryPickupOrder;

export interface ChoiceCustomizedEditChoiceSkuStockData {
  success_sku?: number[];
  failed_sku?: Record<string, unknown>[];
}

export interface ChoiceCustomizedEditChoiceSkuStock {
  data?: ChoiceCustomizedEditChoiceSkuStockData;
  success?: boolean;
  error_code?: string;
  error_msg?: string;
}

export type ChoiceCustomizedEditChoiceSkuStockResponse = ChoiceCustomizedEditChoiceSkuStock;

export interface ChoiceCustomizedBatchDeliverJitPurchaseOrderResultData {
  status?: string;
  pickup_no?: string;
  allow_date_range?: string[];
  purchase_order_no?: string;
  error_message?: string;
}

export interface ChoiceCustomizedBatchDeliverJitPurchaseOrderResult {
  data?: ChoiceCustomizedBatchDeliverJitPurchaseOrderResultData[];
  success?: boolean;
  error_message?: string;
  error_code?: string;
}

export interface ChoiceCustomizedBatchDeliverJitPurchaseOrder {
  result?: ChoiceCustomizedBatchDeliverJitPurchaseOrderResult;
}

export type ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse = ChoiceCustomizedBatchDeliverJitPurchaseOrder;

export interface ChoiceCustomizedPackageJitPurchaseOrderResultData {
  status: string;
}

export interface ChoiceCustomizedPackageJitPurchaseOrderResult {
  data: ChoiceCustomizedPackageJitPurchaseOrderResultData;
  success: boolean;
  error_message: string;
  error_code: string;
}

export interface ChoiceCustomizedPackageJitPurchaseOrder {
  result: ChoiceCustomizedPackageJitPurchaseOrderResult;
}

export type ChoiceCustomizedPackageJitPurchaseOrderResponse = ChoiceCustomizedPackageJitPurchaseOrder;

export interface ChoiceCustomizedPrintJitPurchaseOrderAndItemResultData {
  file: string;
}

export interface ChoiceCustomizedPrintJitPurchaseOrderAndItemResult {
  data: ChoiceCustomizedPrintJitPurchaseOrderAndItemResultData;
  success: boolean;
  error_message: string;
  error_code: string;
}

export interface ChoiceCustomizedPrintJitPurchaseOrderAndItem {
  result: ChoiceCustomizedPrintJitPurchaseOrderAndItemResult;
}

export type ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse = ChoiceCustomizedPrintJitPurchaseOrderAndItem;

export interface ChoiceCustomizedPrintPickuoOrderResultData {
  file: string;
}

export interface ChoiceCustomizedPrintPickuoOrderResult {
  data: ChoiceCustomizedPrintPickuoOrderResultData;
  success: boolean;
  error_message: string;
  error_code: string;
}

export interface ChoiceCustomizedPrintPickuoOrder {
  result: ChoiceCustomizedPrintPickuoOrderResult;
}

export type ChoiceCustomizedPrintPickuoOrderResponse = ChoiceCustomizedPrintPickuoOrder;
