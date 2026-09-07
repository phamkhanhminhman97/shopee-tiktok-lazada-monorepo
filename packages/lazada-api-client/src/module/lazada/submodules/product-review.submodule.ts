import { LazadaConfig } from '../dto/request/config.request';
import {
  getHistoryReviewIdList,
  getReviewListByIdList,
  submitSellerReply,
} from '../api/product-review.api';
import {
  ProductReviewGetHistoryReviewIdListRequest,
  ProductReviewGetReviewListByIdListRequest,
  ProductReviewSubmitSellerReplyRequest,
} from '../dto/request/product-review.request';
import {
  ProductReviewGetHistoryReviewIdListResponse,
  ProductReviewGetReviewListByIdListResponse,
  ProductReviewSubmitSellerReplyResponse,
} from '../dto/response/product-review.response';

/**
 * Lazada `product-review-api` API namespace.
 *
 * Access via `lazada.productReview.<method>()` on a `LazadaModule` instance.
 */
export class LazadaProductReview {
  constructor(private config: LazadaConfig) {}

  async getHistoryReviewIdList(params: ProductReviewGetHistoryReviewIdListRequest): Promise<ProductReviewGetHistoryReviewIdListResponse> {
    return await getHistoryReviewIdList(params, this.config);
  }

  async getReviewListByIdList(params: ProductReviewGetReviewListByIdListRequest): Promise<ProductReviewGetReviewListByIdListResponse> {
    return await getReviewListByIdList(params, this.config);
  }

  async submitSellerReply(params: ProductReviewSubmitSellerReplyRequest): Promise<ProductReviewSubmitSellerReplyResponse> {
    return await submitSellerReply(params, this.config);
  }
}
