import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  ReturnAndRefundGetReverseOrderDetailRequest,
  ReturnAndRefundGetReverseOrderHistoryListRequest,
  ReturnAndRefundGetReverseOrderReasonListRequest,
  ReturnAndRefundGetReverseOrdersForSellerRequest,
  ReturnAndRefundInitReverseOrderCancelDecideRequest,
  ReturnAndRefundInitReverseOrderCancelRequest,
  ReturnAndRefundReverseOrderOnlyRefundDecideRequest,
  ReturnAndRefundReverseOrderReturnUpdateRequest,
} from '../dto/request/return-and-refund.request';
import {
  ReturnAndRefundGetReverseOrderDetailResponse,
  ReturnAndRefundGetReverseOrderHistoryListResponse,
  ReturnAndRefundGetReverseOrderReasonListResponse,
  ReturnAndRefundGetReverseOrdersForSellerResponse,
  ReturnAndRefundInitReverseOrderCancelDecideResponse,
  ReturnAndRefundInitReverseOrderCancelResponse,
  ReturnAndRefundReverseOrderOnlyRefundDecideResponse,
  ReturnAndRefundReverseOrderReturnUpdateResponse,
} from '../dto/response/return-and-refund.response';

/**
 * InitReverseOrderCancel via Lazada `GET /order/reverse/cancel/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function initReverseOrderCancel(params: ReturnAndRefundInitReverseOrderCancelRequest, config: LazadaConfig): Promise<ReturnAndRefundInitReverseOrderCancelResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundInitReverseOrderCancelResponse>('/order/reverse/cancel/create', 'GET', params as unknown as Record<string, unknown>, config, 'initReverseOrderCancel');
}

/**
 * InitReverseOrderCancelDecide via Lazada `GET /order/reverse/cancel/seller/decide`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function initReverseOrderCancelDecide(params: ReturnAndRefundInitReverseOrderCancelDecideRequest, config: LazadaConfig): Promise<ReturnAndRefundInitReverseOrderCancelDecideResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundInitReverseOrderCancelDecideResponse>('/order/reverse/cancel/seller/decide', 'GET', params as unknown as Record<string, unknown>, config, 'initReverseOrderCancelDecide');
}

/**
 * ReverseOrderOnlyRefundDecide via Lazada `GET /order/reverse/onlyrefund/seller/decide`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function reverseOrderOnlyRefundDecide(params: ReturnAndRefundReverseOrderOnlyRefundDecideRequest, config: LazadaConfig): Promise<ReturnAndRefundReverseOrderOnlyRefundDecideResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundReverseOrderOnlyRefundDecideResponse>('/order/reverse/onlyrefund/seller/decide', 'GET', params as unknown as Record<string, unknown>, config, 'reverseOrderOnlyRefundDecide');
}

/**
 * GetReverseOrderReasonList via Lazada `GET /order/reverse/reason/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReverseOrderReasonList(params: ReturnAndRefundGetReverseOrderReasonListRequest, config: LazadaConfig): Promise<ReturnAndRefundGetReverseOrderReasonListResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundGetReverseOrderReasonListResponse>('/order/reverse/reason/list', 'GET', params as unknown as Record<string, unknown>, config, 'getReverseOrderReasonList');
}

/**
 * GetReverseOrderDetail via Lazada `GET /order/reverse/return/detail/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReverseOrderDetail(params: ReturnAndRefundGetReverseOrderDetailRequest, config: LazadaConfig): Promise<ReturnAndRefundGetReverseOrderDetailResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundGetReverseOrderDetailResponse>('/order/reverse/return/detail/list', 'GET', params as unknown as Record<string, unknown>, config, 'getReverseOrderDetail');
}

/**
 * GetReverseOrderHistoryList via Lazada `GET /order/reverse/return/history/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReverseOrderHistoryList(params: ReturnAndRefundGetReverseOrderHistoryListRequest, config: LazadaConfig): Promise<ReturnAndRefundGetReverseOrderHistoryListResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundGetReverseOrderHistoryListResponse>('/order/reverse/return/history/list', 'GET', params as unknown as Record<string, unknown>, config, 'getReverseOrderHistoryList');
}

/**
 * ReverseOrderReturnUpdate via Lazada `GET /order/reverse/return/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function reverseOrderReturnUpdate(params: ReturnAndRefundReverseOrderReturnUpdateRequest, config: LazadaConfig): Promise<ReturnAndRefundReverseOrderReturnUpdateResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundReverseOrderReturnUpdateResponse>('/order/reverse/return/update', 'GET', params as unknown as Record<string, unknown>, config, 'reverseOrderReturnUpdate');
}

/**
 * GetReverseOrdersForSeller via Lazada `GET /reverse/getreverseordersforseller`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReverseOrdersForSeller(params: ReturnAndRefundGetReverseOrdersForSellerRequest, config: LazadaConfig): Promise<ReturnAndRefundGetReverseOrdersForSellerResponse> {
  return LazadaHelper.callLazadaApi<ReturnAndRefundGetReverseOrdersForSellerResponse>('/reverse/getreverseordersforseller', 'GET', params as unknown as Record<string, unknown>, config, 'getReverseOrdersForSeller');
}
