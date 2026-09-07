import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  ServiceMarketServiceMarketAppKeyOrderQueryRequest,
  ServiceMarketServiceMarketAppKeySubQueryRequest,
} from '../dto/request/service-market.request';
import {
  ServiceMarketServiceMarketAppKeyOrderQueryResponse,
  ServiceMarketServiceMarketAppKeySubQueryResponse,
} from '../dto/response/service-market.response';

/**
 * ServiceMarketAppKeyOrderQuery via Lazada `POST /service/market/order/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function serviceMarketAppKeyOrderQuery(params: ServiceMarketServiceMarketAppKeyOrderQueryRequest, config: LazadaConfig): Promise<ServiceMarketServiceMarketAppKeyOrderQueryResponse> {
  return LazadaHelper.callLazadaApi<ServiceMarketServiceMarketAppKeyOrderQueryResponse>('/service/market/order/query', 'POST', params as unknown as Record<string, unknown>, config, 'serviceMarketAppKeyOrderQuery');
}

/**
 * ServiceMarketAppKeySubQuery via Lazada `POST /service/market/subs/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function serviceMarketAppKeySubQuery(params: ServiceMarketServiceMarketAppKeySubQueryRequest, config: LazadaConfig): Promise<ServiceMarketServiceMarketAppKeySubQueryResponse> {
  return LazadaHelper.callLazadaApi<ServiceMarketServiceMarketAppKeySubQueryResponse>('/service/market/subs/query', 'POST', params as unknown as Record<string, unknown>, config, 'serviceMarketAppKeySubQuery');
}
