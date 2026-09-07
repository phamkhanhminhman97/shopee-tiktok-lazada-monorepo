export interface OrderGetDocumentRequest {
  doc_type: string;
  order_item_ids: string;
}

export interface OrderGetOrderRequest {
  order_id: number;
}

export interface OrderGetOrderItemsRequest {
  order_id: number;
}

export interface OrderOrderCancelValidateRequest {
  order_id: string;
  order_item_id_list: string[];
}

export interface OrderGetOrdersRequest {
  update_before?: string;
  sort_direction?: string;
  offset?: number;
  limit?: number;
  update_after?: string;
  sort_by?: string;
  created_before?: string;
  created_after?: string;
  status?: string;
}

export interface OrderGetMultipleOrderItemsRequest {
  order_ids: number[];
}

export interface OrderGetOVOOrdersRequest {
  tradeOrderIds: string;
}

export interface OrderSetInvoiceNumberRequest {
  order_item_id: number;
  invoice_number: string;
}
