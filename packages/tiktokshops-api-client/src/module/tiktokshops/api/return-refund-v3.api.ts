import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokApproveCancellationParams,
  TiktokApproveReturnParams,
  TiktokCalculateCancellationParams,
  TiktokCancelOrderBody,
  TiktokCreateReturnParams,
  TiktokGetAftersaleEligibilityParams,
  TiktokGetRejectReasonQuery,
  TiktokGetReturnRecordParams,
  TiktokRejectCancellationParams,
  TiktokRejectReturnParams,
  TiktokSearchCancellationParams,
  TiktokSearchReturnParams,
} from '../dto/request/return-refund-v3.request';
import {
  TiktokCalculateCancellationResponse,
  TiktokCancelOrderResponse,
  TiktokCreateReturnResponse,
  TiktokGetAftersaleEligibilityResponse,
  TiktokGetRejectReasonResponse,
  TiktokGetReturnRecordResponse,
  TiktokSearchCancellationResponse,
  TiktokSearchReturnResponse,
} from '../dto/response/return-refund-v3.response';

/**
 * Get aftersale eligibility information for a given order.
 *
 * GET /return_refund/202309/orders/{order_id}/aftersale_eligibility
 */
export async function getAftersaleEligibility(params: TiktokGetAftersaleEligibilityParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAftersaleEligibilityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAftersaleEligibilityResponse>>(
    `/return_refund/202309/orders/${params.order_id}/aftersale_eligibility`,
    'GET',
    { query: params.query },
    config,
    'getAftersaleEligibility',
  );
}

/**
 * Get reasons for rejecting a return request.
 *
 * GET /return_refund/202309/reject_reasons
 */
export async function getRejectReasons(query: TiktokGetRejectReasonQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetRejectReasonResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetRejectReasonResponse>>(
    `/return_refund/202309/reject_reasons`,
    'GET',
    { query: query },
    config,
    'getRejectReasons',
  );
}

/**
 * Create a new return request.
 *
 * POST /return_refund/202309/returns
 */
export async function createReturn(params: TiktokCreateReturnParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateReturnResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateReturnResponse>>(
    `/return_refund/202309/returns`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'createReturn',
  );
}

/**
 * Search for return/refund requests.
 *
 * POST /return_refund/202309/returns/search
 */
export async function searchReturn(params: TiktokSearchReturnParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchReturnResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchReturnResponse>>(
    `/return_refund/202309/returns/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchReturn',
  );
}

/**
 * Get the operation record history of a return/refund request.
 *
 * GET /return_refund/202309/returns/{return_id}/records
 */
export async function getReturnRecord(params: TiktokGetReturnRecordParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetReturnRecordResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetReturnRecordResponse>>(
    `/return_refund/202309/returns/${params.return_id}/records`,
    'GET',
    { query: params.query },
    config,
    'getReturnRecord',
  );
}

/**
 * Reject a return/refund request submitted by the buyer.
 *
 * POST /return_refund/202309/returns/{return_id}/reject
 */
export async function rejectReturn(params: TiktokRejectReturnParams, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/return_refund/202309/returns/${params.return_id}/reject`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'rejectReturn',
  );
}

/**
 * Approve a return/refund request submitted by the buyer.
 *
 * POST /return_refund/202309/returns/{return_id}/approve
 *
 * Seller can choose to:
 * - Approve full return (`APPROVE_RETURN`)
 * - Approve refund without return (`APPROVE_REFUND`)
 * - Offer partial refund (`OFFER_PARTIAL_REFUND`)
 * - Approve replacement or received package, etc.
 *
 * Refer to the `decision` field for available options:
 * - APPROVE_REFUND
 * - APPROVE_RETURN
 * - APPROVE_RECEIVED_PACKAGE
 * - APPROVE_REPLACEMENT
 * - ISSUE_REPLACEMENT_REFUND
 * - OFFER_PARTIAL_REFUND
 *
 * Note:
 * - For return-and-refund requests (`return_type = RETURN_AND_REFUND`), use `APPROVE_RETURN`.
 * - For refund-only requests, use `APPROVE_REFUND`.
 * - For partial refund, provide `partial_refund.amount` and `currency`, and set `decision = OFFER_PARTIAL_REFUND`.
 * - Use `buyer_keep_item = true` if you wish to refund without requiring the buyer to return the item.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/650b2001bace3e02b76db38a
 */
export async function approveReturn(params: TiktokApproveReturnParams, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/return_refund/202309/returns/${params.return_id}/approve`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'approveReturn',
  );
}

/**
 * Cancel an order by providing a cancellation reason and order_id.
 *
 * POST /return_refund/202309/cancellations
 *
 * This API is used by sellers to request cancellation before the order is shipped.
 * Cancellation may be rejected by the buyer depending on the status and reason.
 */
export async function cancelOrder(body: TiktokCancelOrderBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCancelOrderResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCancelOrderResponse>>(
    `/return_refund/202309/cancellations`,
    'POST',
    { body: body },
    config,
    'cancelOrder',
  );
}

/**
 * Approve a buyer's cancellation request.
 *
 * POST /return_refund/202309/cancellations/{cancel_id}/approve
 *
 * This method is used by sellers to accept the buyer's request to cancel the order.
 */
export async function approveCancellation(params: TiktokApproveCancellationParams, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/return_refund/202309/cancellations/${params.cancel_id}/approve`,
    'POST',
    { query: params.query },
    config,
    'approveCancellation',
  );
}

/**
 * Reject a buyer's cancellation request.
 *
 * POST /return_refund/202309/cancellations/{cancel_id}/reject
 *
 * Sellers can reject the cancellation request with a specific reason.
 */
export async function rejectCancellation(params: TiktokRejectCancellationParams, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/return_refund/202309/cancellations/${params.cancel_id}/reject`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'rejectCancellation',
  );
}

/**
 * Search cancellation requests made by buyers.
 *
 * POST /return_refund/202309/cancellations/search
 *
 * This method retrieves a list of cancellations based on filter criteria like time range, order ID, and status.
 */
export async function searchCancellation(params: TiktokSearchCancellationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchCancellationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchCancellationResponse>>(
    `/return_refund/202309/cancellations/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchCancellation',
  );
}

/**
 * Calculate the refund amount for an order cancellation before submitting the request.
 *
 * POST /return_refund/202309/refunds/calculate
 *
 * Useful to preview how much will be refunded if the order is canceled.
 */
export async function calculateCancellation(body: TiktokCalculateCancellationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCalculateCancellationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCalculateCancellationResponse>>(
    `/return_refund/202309/refunds/calculate`,
    'POST',
    { body: body },
    config,
    'calculateCancellation',
  );
}
