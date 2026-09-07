export interface ChoiceCustomizedGetChoiceProductItemRequest {
  item_id?: number;
  seller_sku?: string;
  site: string;
}

export interface ChoiceCustomizedGetChoiceProductsRequest {
  filter?: string;
  update_before?: string;
  create_before?: string;
  offset?: string;
  create_after?: string;
  update_after?: string;
  limit?: string;
  options?: string;
  sku_seller_list?: string;
  site: string;
}

export interface ChoiceCustomizedGetChoiceSellerRequest {
  site: string;
}

export interface ChoiceCustomizedGetChoiceSkuItemRelationBySkuRequest {
  item_id: string;
  sku_id: string;
  site: string;
}

export interface ChoiceCustomizedQueryListJitPurchaseOrderRequest {
  gmt_create_begin?: string;
  gmt_create_end?: string;
  purchase_order_no_list?: string[];
  logistics_no_list?: string[];
  order_status?: string;
  page_index?: number;
  page_size?: number;
}

export interface ChoiceCustomizedQueryListPurchaseItemRequest {
  purchase_order_no: string;
  page_index?: number;
  page_size?: number;
}

export interface ChoiceCustomizedQueryPickupOrderRequest {
  pickup_order_no: string;
}

export interface ChoiceCustomizedEditChoiceSkuStockRequest {
  item_id: number;
  site: string;
  sku_edit_stock: string;
}

export interface ChoiceCustomizedBatchDeliverJitPurchaseOrderRequest {
  purchaseOrderNoList: string[];
  shipperAreaCode: string;
  shipperAddressId: number;
  shipperAddressDetail: string;
  shipperMobilePhone: string;
  shipperName: string;
  estimatedPickupDate?: string;
}

export interface ChoiceCustomizedPackageJitPurchaseOrderRequest {
  purchase_order_no_list: string[];
}

export interface ChoiceCustomizedPrintJitPurchaseOrderAndItemRequest {
  purchase_order_no_list: string[];
  print_order: boolean;
  print_barcode: string;
  pdf_size: string;
}

export interface ChoiceCustomizedPrintPickuoOrderRequest {
  pickup_order_no: string;
  pdf_size: string;
  box_number: string;
}
