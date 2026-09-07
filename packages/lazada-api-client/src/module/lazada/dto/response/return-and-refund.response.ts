export interface ReturnAndRefundInitReverseOrderCancelData {
  tip_content?: string;
  tip_type?: string;
}

export interface ReturnAndRefundInitReverseOrderCancel {
  data?: ReturnAndRefundInitReverseOrderCancelData;
}

export type ReturnAndRefundInitReverseOrderCancelResponse = ReturnAndRefundInitReverseOrderCancel;

export interface ReturnAndRefundInitReverseOrderCancelDecide {
  data?: Record<string, unknown>;
}

export type ReturnAndRefundInitReverseOrderCancelDecideResponse = ReturnAndRefundInitReverseOrderCancelDecide;

export interface ReturnAndRefundReverseOrderOnlyRefundDecide {
  data?: Record<string, unknown>;
}

export type ReturnAndRefundReverseOrderOnlyRefundDecideResponse = ReturnAndRefundReverseOrderOnlyRefundDecide;

export interface ReturnAndRefundGetReverseOrderReasonListData {
  reason_id?: number;
  muti_language_text?: string;
  text?: string;
}

export interface ReturnAndRefundGetReverseOrderReasonList {
  data?: ReturnAndRefundGetReverseOrderReasonListData[];
}

export type ReturnAndRefundGetReverseOrderReasonListResponse = ReturnAndRefundGetReverseOrderReasonList;

export interface ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOListBuyer {
  user_id?: number;
}

export interface ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOListProductDTO {
  product_id?: number;
  sku?: string;
}

export interface ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOList {
  reverse_order_line_id?: number;
  trade_order_line_id?: number;
  buyer?: ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOListBuyer;
  reverse_status?: string;
  productDTO?: ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOListProductDTO;
  is_need_refund?: boolean;
  ofc_status?: string;
  trade_order_gmt_create?: number;
  refund_amount?: number;
  reason_text?: string;
  reason_code?: number;
  refund_payment_method?: string;
  whqc_decision?: string;
  return_order_line_gmt_create?: number;
  return_order_line_gmt_modified?: number;
  is_dispute?: boolean;
  seller_sku_id?: string;
  item_unit_price?: number;
  platform_sku_id?: string;
  tracking_number?: string;
  sla?: number;
}

export interface ReturnAndRefundGetReverseOrderDetailData {
  reverse_order_id?: number;
  trade_order_id?: number;
  request_type?: string;
  shipping_type?: string;
  is_rtm?: boolean;
  reverseOrderLineDTOList?: ReturnAndRefundGetReverseOrderDetailDataReverseOrderLineDTOList[];
}

export interface ReturnAndRefundGetReverseOrderDetail {
  data?: ReturnAndRefundGetReverseOrderDetailData;
}

export type ReturnAndRefundGetReverseOrderDetailResponse = ReturnAndRefundGetReverseOrderDetail;

export interface ReturnAndRefundGetReverseOrderHistoryListDataList {
  operator?: string;
  picture?: string[];
  time?: number;
}

export interface ReturnAndRefundGetReverseOrderHistoryListDataPageInfo {
  page_size?: number;
  current_page_number?: number;
  total?: number;
}

export interface ReturnAndRefundGetReverseOrderHistoryListData {
  list?: ReturnAndRefundGetReverseOrderHistoryListDataList[];
  page_info?: ReturnAndRefundGetReverseOrderHistoryListDataPageInfo;
}

export interface ReturnAndRefundGetReverseOrderHistoryList {
  data?: ReturnAndRefundGetReverseOrderHistoryListData;
}

export type ReturnAndRefundGetReverseOrderHistoryListResponse = ReturnAndRefundGetReverseOrderHistoryList;

export interface ReturnAndRefundReverseOrderReturnUpdateDataReverseOrderLine {
  reverse_order_line_id?: number;
  reason_source?: string;
  reason_type?: string;
  reason_id?: number;
  reason_name?: string;
  reason_desc?: string;
  refund_amount?: number;
  is_cancel?: boolean;
  order_id?: number;
  seller_sku?: string;
  paid_price?: number;
  apply_reason?: string;
  order_line_id?: number;
}

export interface ReturnAndRefundReverseOrderReturnUpdateDataReasonInfo {
  reason_id?: number;
  reason_name?: string;
}

export interface ReturnAndRefundReverseOrderReturnUpdateData {
  reverse_order_line?: ReturnAndRefundReverseOrderReturnUpdateDataReverseOrderLine[];
  reverse_order_id?: number;
  reason_info?: ReturnAndRefundReverseOrderReturnUpdateDataReasonInfo[];
  total_refund?: string;
}

export interface ReturnAndRefundReverseOrderReturnUpdate {
  data?: ReturnAndRefundReverseOrderReturnUpdateData;
}

export type ReturnAndRefundReverseOrderReturnUpdateResponse = ReturnAndRefundReverseOrderReturnUpdate;

export interface ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLinesProduct {
  product_id?: number;
  product_sku?: string;
}

export interface ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLinesBuyer {
  buyer_id?: number;
}

export interface ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLines {
  ofc_status?: string;
  product?: ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLinesProduct;
  buyer?: ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLinesBuyer;
  trade_order_gmt_create?: number;
  refund_amount?: number;
  reason_text?: string;
  reason_code?: number;
  refund_payment_method?: string;
  whqc_decision?: string;
  return_order_line_gmt_create?: number;
  return_order_line_gmt_modified?: number;
  is_dispute?: boolean;
  seller_sku_id?: string;
  item_unit_price?: number;
  platform_sku_id?: string;
  tracking_number?: string;
  receiver_address?: string;
  sla?: number;
  reverse_order_line_id?: number;
  trade_order_line_id?: number;
  reverse_status?: string;
  is_need_refund?: string;
}

export interface ReturnAndRefundGetReverseOrdersForSellerResultItems {
  reverse_order_id?: number;
  trade_order_id?: number;
  request_type?: string;
  is_rtm?: boolean;
  shipping_type?: string;
  reverse_order_lines?: ReturnAndRefundGetReverseOrdersForSellerResultItemsReverseOrderLines[];
}

export interface ReturnAndRefundGetReverseOrdersForSellerResult {
  page_no: number;
  success: boolean;
  page_size: number;
  total: number;
  items: ReturnAndRefundGetReverseOrdersForSellerResultItems[];
}

export interface ReturnAndRefundGetReverseOrdersForSeller {
  result: ReturnAndRefundGetReverseOrdersForSellerResult;
}

export type ReturnAndRefundGetReverseOrdersForSellerResponse = ReturnAndRefundGetReverseOrdersForSeller;
