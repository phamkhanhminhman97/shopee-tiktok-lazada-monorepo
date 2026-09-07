import { LazadaConfig } from '../dto/request/config.request';
import {
  getReverseOrderDetail,
  getReverseOrderHistoryList,
  getReverseOrderReasonList,
  getReverseOrdersForSeller,
  initReverseOrderCancel,
  initReverseOrderCancelDecide,
  reverseOrderOnlyRefundDecide,
  reverseOrderReturnUpdate,
} from '../api/return-and-refund.api';
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
 * Lazada `return-and-refund-api` API namespace.
 *
 * Access via `lazada.returnAndRefund.<method>()` on a `LazadaModule` instance.
 */
export class LazadaReturnAndRefund {
  constructor(private config: LazadaConfig) {}

  async initReverseOrderCancel(params: ReturnAndRefundInitReverseOrderCancelRequest): Promise<ReturnAndRefundInitReverseOrderCancelResponse> {
    return await initReverseOrderCancel(params, this.config);
  }

  async initReverseOrderCancelDecide(params: ReturnAndRefundInitReverseOrderCancelDecideRequest): Promise<ReturnAndRefundInitReverseOrderCancelDecideResponse> {
    return await initReverseOrderCancelDecide(params, this.config);
  }

  async reverseOrderOnlyRefundDecide(params: ReturnAndRefundReverseOrderOnlyRefundDecideRequest): Promise<ReturnAndRefundReverseOrderOnlyRefundDecideResponse> {
    return await reverseOrderOnlyRefundDecide(params, this.config);
  }

  async getReverseOrderReasonList(params: ReturnAndRefundGetReverseOrderReasonListRequest): Promise<ReturnAndRefundGetReverseOrderReasonListResponse> {
    return await getReverseOrderReasonList(params, this.config);
  }

  async getReverseOrderDetail(params: ReturnAndRefundGetReverseOrderDetailRequest): Promise<ReturnAndRefundGetReverseOrderDetailResponse> {
    return await getReverseOrderDetail(params, this.config);
  }

  async getReverseOrderHistoryList(params: ReturnAndRefundGetReverseOrderHistoryListRequest): Promise<ReturnAndRefundGetReverseOrderHistoryListResponse> {
    return await getReverseOrderHistoryList(params, this.config);
  }

  async reverseOrderReturnUpdate(params: ReturnAndRefundReverseOrderReturnUpdateRequest): Promise<ReturnAndRefundReverseOrderReturnUpdateResponse> {
    return await reverseOrderReturnUpdate(params, this.config);
  }

  async getReverseOrdersForSeller(params: ReturnAndRefundGetReverseOrdersForSellerRequest): Promise<ReturnAndRefundGetReverseOrdersForSellerResponse> {
    return await getReverseOrdersForSeller(params, this.config);
  }
}
