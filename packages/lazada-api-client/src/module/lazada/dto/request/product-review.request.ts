export interface ProductReviewGetHistoryReviewIdListRequest {
  item_id: string;
  order_id?: number;
  start_time: number;
  end_time: number;
  current: number;
}

export interface ProductReviewGetReviewListByIdListRequest {
  id_list: number[];
}

export interface ProductReviewSubmitSellerReplyRequest {
  id: number;
  content: string;
}
