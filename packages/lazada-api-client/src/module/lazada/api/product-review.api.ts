import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * GetHistoryReviewIdList via Lazada `GET /review/seller/history/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getHistoryReviewIdList(params: ProductReviewGetHistoryReviewIdListRequest, config: LazadaConfig): Promise<ProductReviewGetHistoryReviewIdListResponse> {
  return LazadaHelper.callLazadaApi<ProductReviewGetHistoryReviewIdListResponse>('/review/seller/history/list', 'GET', params as unknown as Record<string, unknown>, config, 'getHistoryReviewIdList');
}

/**
 * GetReviewListByIdList via Lazada `GET /review/seller/list/v2`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReviewListByIdList(params: ProductReviewGetReviewListByIdListRequest, config: LazadaConfig): Promise<ProductReviewGetReviewListByIdListResponse> {
  return LazadaHelper.callLazadaApi<ProductReviewGetReviewListByIdListResponse>('/review/seller/list/v2', 'GET', params as unknown as Record<string, unknown>, config, 'getReviewListByIdList');
}

/**
 * SubmitSellerReply via Lazada `GET /review/seller/reply/add`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function submitSellerReply(params: ProductReviewSubmitSellerReplyRequest, config: LazadaConfig): Promise<ProductReviewSubmitSellerReplyResponse> {
  return LazadaHelper.callLazadaApi<ProductReviewSubmitSellerReplyResponse>('/review/seller/reply/add', 'GET', params as unknown as Record<string, unknown>, config, 'submitSellerReply');
}
