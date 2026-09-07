import { TiktokConfig } from '../dto/request/config.request';
import {
  approveCancellation,
  approveReturn,
  calculateCancellation,
  cancelOrder,
  createReturn,
  getAftersaleEligibility,
  getRejectReasons,
  getReturnRecord,
  rejectCancellation,
  rejectReturn,
  searchCancellation,
  searchReturn,
} from '../api/return-refund-v3.api';
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
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `ReturnRefund` API namespace.
 *
 * Access via `tiktok.returnRefund.<method>()` on a `TiktokModule` instance.
 */
export class TiktokReturnRefund {
  constructor(private config: TiktokConfig) {}

  async getAftersaleEligibility(params: TiktokGetAftersaleEligibilityParams): Promise<TiktokResponseCommon<TiktokGetAftersaleEligibilityResponse>> {
    return await getAftersaleEligibility(params, this.config);
  }

  async getRejectReasons(query: TiktokGetRejectReasonQuery): Promise<TiktokResponseCommon<TiktokGetRejectReasonResponse>> {
    return await getRejectReasons(query, this.config);
  }

  async createReturn(params: TiktokCreateReturnParams): Promise<TiktokResponseCommon<TiktokCreateReturnResponse>> {
    return await createReturn(params, this.config);
  }

  async searchReturn(params: TiktokSearchReturnParams): Promise<TiktokResponseCommon<TiktokSearchReturnResponse>> {
    return await searchReturn(params, this.config);
  }

  async getReturnRecord(params: TiktokGetReturnRecordParams): Promise<TiktokResponseCommon<TiktokGetReturnRecordResponse>> {
    return await getReturnRecord(params, this.config);
  }

  async rejectReturn(params: TiktokRejectReturnParams): Promise<TiktokResponseCommon<object>> {
    return await rejectReturn(params, this.config);
  }

  async approveReturn(params: TiktokApproveReturnParams): Promise<TiktokResponseCommon<object>> {
    return await approveReturn(params, this.config);
  }

  async cancelOrder(body: TiktokCancelOrderBody): Promise<TiktokResponseCommon<TiktokCancelOrderResponse>> {
    return await cancelOrder(body, this.config);
  }

  async approveCancellation(params: TiktokApproveCancellationParams): Promise<TiktokResponseCommon<object>> {
    return await approveCancellation(params, this.config);
  }

  async rejectCancellation(params: TiktokRejectCancellationParams): Promise<TiktokResponseCommon<object>> {
    return await rejectCancellation(params, this.config);
  }

  async searchCancellation(params: TiktokSearchCancellationParams): Promise<TiktokResponseCommon<TiktokSearchCancellationResponse>> {
    return await searchCancellation(params, this.config);
  }

  async calculateCancellation(body: TiktokCalculateCancellationParams): Promise<TiktokResponseCommon<TiktokCalculateCancellationResponse>> {
    return await calculateCancellation(body, this.config);
  }
}
