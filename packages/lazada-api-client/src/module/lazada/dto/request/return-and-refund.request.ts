export interface ReturnAndRefundInitReverseOrderCancelRequest {
  order_item_id_list: string[];
  order_id: number;
  reason_id: string;
}

export interface ReturnAndRefundInitReverseOrderCancelDecideRequest {
  reverse_order_id: number;
  agree_cancel: boolean;
  reason_code?: number;
}

export interface ReturnAndRefundReverseOrderOnlyRefundDecideRequest {
  action: string;
  reverse_order_id: number;
  reverse_order_item_ids: number[];
  comment?: string;
  image_info_list?: Record<string, unknown>[];
  video_info_list?: Record<string, unknown>[];
}

export interface ReturnAndRefundGetReverseOrderReasonListRequest {
  reverse_order_line_id: number;
}

export interface ReturnAndRefundGetReverseOrderDetailRequest {
  reverse_order_id: number;
}

export interface ReturnAndRefundGetReverseOrderHistoryListRequest {
  reverse_order_line_id: number;
  page_size?: number;
  page_number?: number;
}

export interface ReturnAndRefundReverseOrderReturnUpdateRequest {
  action: string;
  reverse_order_id: number;
  reverse_order_item_ids: number[];
  reason_id?: number;
  comment?: string;
  image_info?: Record<string, unknown>[];
}

export interface ReturnAndRefundGetReverseOrdersForSellerRequest {
  request_type_list?: string[];
  ofc_status_list?: string[];
  reverse_order_id?: number;
  trade_order_id?: number;
  page_size: number;
  reverse_status_list?: string[];
  page_no: number;
  return_to_type?: string;
  dispute_in_progress?: boolean;
  TradeOrderLineCreatedTimeRangeStart?: number;
  TradeOrderLineCreatedTimeRangeEnd?: number;
  ReverseOrderLineTimeRangeStart?: number;
  ReverseOrderLineTimeRangeEnd?: number;
  ReverseOrderLineModifiedTimeRangeStart?: number;
  ReverseOrderLineModifiedTimeRangeEnd?: number;
  QC_Decision?: string;
}
