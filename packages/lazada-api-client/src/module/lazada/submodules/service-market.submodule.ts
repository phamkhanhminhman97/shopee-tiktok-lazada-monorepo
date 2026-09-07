import { LazadaConfig } from '../dto/request/config.request';
import {
  serviceMarketAppKeyOrderQuery,
  serviceMarketAppKeySubQuery,
} from '../api/service-market.api';
import {
  ServiceMarketServiceMarketAppKeyOrderQueryRequest,
  ServiceMarketServiceMarketAppKeySubQueryRequest,
} from '../dto/request/service-market.request';
import {
  ServiceMarketServiceMarketAppKeyOrderQueryResponse,
  ServiceMarketServiceMarketAppKeySubQueryResponse,
} from '../dto/response/service-market.response';

/**
 * Lazada `service-market-api` API namespace.
 *
 * Access via `lazada.serviceMarket.<method>()` on a `LazadaModule` instance.
 */
export class LazadaServiceMarket {
  constructor(private config: LazadaConfig) {}

  async serviceMarketAppKeyOrderQuery(params: ServiceMarketServiceMarketAppKeyOrderQueryRequest): Promise<ServiceMarketServiceMarketAppKeyOrderQueryResponse> {
    return await serviceMarketAppKeyOrderQuery(params, this.config);
  }

  async serviceMarketAppKeySubQuery(params: ServiceMarketServiceMarketAppKeySubQueryRequest): Promise<ServiceMarketServiceMarketAppKeySubQueryResponse> {
    return await serviceMarketAppKeySubQuery(params, this.config);
  }
}
