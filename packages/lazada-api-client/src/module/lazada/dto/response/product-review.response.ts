export interface ProductReviewGetHistoryReviewIdListData {
  current: number;
  total: number;
  page_size: number;
  id_list: number[];
}

export interface ProductReviewGetHistoryReviewIdList {
  data: ProductReviewGetHistoryReviewIdListData;
  success: boolean;
  error_code?: string;
  error_msg?: string;
}

export type ProductReviewGetHistoryReviewIdListResponse = ProductReviewGetHistoryReviewIdList;

export interface ProductReviewGetReviewListByIdListDataReviewListReviewVideos {
  video_cover_url: string;
  video_url: string;
}

export interface ProductReviewGetReviewListByIdListDataReviewListRatings {
  logistics_rating: number;
  overall_rating: number;
  seller_rating: number;
  product_rating: number;
}

export interface ProductReviewGetReviewListByIdListDataReviewList {
  submit_time: number;
  can_reply: boolean;
  product_id: number;
  order_id: number;
  review_videos: ProductReviewGetReviewListByIdListDataReviewListReviewVideos[];
  review_content: string;
  ratings: ProductReviewGetReviewListByIdListDataReviewListRatings;
  review_type: string;
  id: number;
  review_images: string[];
  seller_reply: string;
  create_time?: number;
}

export interface ProductReviewGetReviewListByIdListData {
  review_list: ProductReviewGetReviewListByIdListDataReviewList[];
  outdated_reviews: number[];
}

export interface ProductReviewGetReviewListByIdList {
  data: ProductReviewGetReviewListByIdListData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type ProductReviewGetReviewListByIdListResponse = ProductReviewGetReviewListByIdList;

export interface ProductReviewSubmitSellerReply {
  data?: boolean;
  success?: boolean;
  error_code?: string;
  error_msg?: string;
}

export type ProductReviewSubmitSellerReplyResponse = ProductReviewSubmitSellerReply;
