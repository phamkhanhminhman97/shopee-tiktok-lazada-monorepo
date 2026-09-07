import { TiktokConfig } from '../dto/request/config.request';
import {
  addExternalOrderReferences,
  getExternalOrderReferences,
  getOrderDetail,
  getOrderList,
  getPriceDetail,
  searchOrderByExternalOrderReference,
} from '../api/order-v3.api';
import {
  TiktokAddExternalOrderReferencesBody,
  TiktokGetExternalOrderReferencesParams,
  TiktokGetOrderDetailParams,
  TiktokGetOrderListParams,
  TiktokGetPriceDetailParams,
  TiktokSearchOrderByExternalOrderReferenceQuery,
} from '../dto/request/order-v3.request';
import {
  TiktokGetExternalOrderReferencesResponse,
  TiktokGetOrderDetailResponse,
  TiktokGetOrderListResponse,
  TiktokGetPriceDetailResponse,
  TiktokSearchOrderByExternalOrderReferenceResponse,
} from '../dto/response/order-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Order` API namespace.
 *
 * Access via `tiktok.order.<method>()` on a `TiktokModule` instance.
 */
export class TiktokOrder {
  constructor(private config: TiktokConfig) {}

  async getOrderList(params: TiktokGetOrderListParams): Promise<TiktokResponseCommon<TiktokGetOrderListResponse>> {
    return await getOrderList(params, this.config);
  }

  async getOrderDetail(params: TiktokGetOrderDetailParams): Promise<TiktokResponseCommon<TiktokGetOrderDetailResponse>> {
    return await getOrderDetail(params, this.config);
  }

  async getPriceDetail(params: TiktokGetPriceDetailParams): Promise<TiktokResponseCommon<TiktokGetPriceDetailResponse>> {
    return await getPriceDetail(params, this.config);
  }

  async addExternalOrderReferences(body: TiktokAddExternalOrderReferencesBody): Promise<TiktokResponseCommon<object>> {
    return await addExternalOrderReferences(body, this.config);
  }

  async getExternalOrderReferences(params: TiktokGetExternalOrderReferencesParams): Promise<TiktokResponseCommon<TiktokGetExternalOrderReferencesResponse>> {
    return await getExternalOrderReferences(params, this.config);
  }

  async searchOrderByExternalOrderReference(query: TiktokSearchOrderByExternalOrderReferenceQuery): Promise<TiktokResponseCommon<TiktokSearchOrderByExternalOrderReferenceResponse>> {
    return await searchOrderByExternalOrderReference(query, this.config);
  }
}
