import { TiktokConfig } from '../dto/request/config.request';
import {
  getShopPerformance,
  getShopProductPerformance,
  getShopProductPerformanceList,
  getShopSKUPerformance,
  getShopSKUPerformanceList,
  getShopVideoPerformanceDetails,
  getShopVideoPerformanceList,
  getShopVideoPerformanceOverview,
  getShopVideoProductPerformanceList,
} from '../api/analytics-v3.api';
import {
  TiktokGetShopPerformanceQuery,
  TiktokGetShopProductPerformanceListQuery,
  TiktokGetShopProductPerformanceParams,
  TiktokGetShopSKUPerformanceListQuery,
  TiktokGetShopSKUPerformanceParams,
  TiktokGetShopVideoPerformanceDetailsParams,
  TiktokGetShopVideoPerformanceListQuery,
  TiktokGetShopVideoPerformanceOverviewQuery,
  TiktokGetShopVideoProductPerformanceListParams,
} from '../dto/request/analytics-v3.request';
import {
  TiktokGetShopPerformanceResponse,
  TiktokGetShopProductPerformanceListResponse,
  TiktokGetShopProductPerformanceResponse,
  TiktokGetShopSKUPerformanceListResponse,
  TiktokGetShopSKUPerformanceParamsResponse,
  TiktokGetShopVideoPerformanceDetailsResponse,
  TiktokGetShopVideoPerformanceListResponse,
  TiktokGetShopVideoPerformanceOverviewResponse,
  TiktokGetShopVideoProductPerformanceListResponse,
} from '../dto/response/analytics-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Analytics` API namespace.
 *
 * Access via `tiktok.analytics.<method>()` on a `TiktokModule` instance.
 */
export class TiktokAnalytics {
  constructor(private config: TiktokConfig) {}

  async getShopPerformance(query: TiktokGetShopPerformanceQuery): Promise<TiktokResponseCommon<TiktokGetShopPerformanceResponse>> {
    return await getShopPerformance(query, this.config);
  }

  async getShopProductPerformance(params: TiktokGetShopProductPerformanceParams): Promise<TiktokResponseCommon<TiktokGetShopProductPerformanceResponse>> {
    return await getShopProductPerformance(params, this.config);
  }

  async getShopProductPerformanceList(query: TiktokGetShopProductPerformanceListQuery): Promise<TiktokResponseCommon<TiktokGetShopProductPerformanceListResponse>> {
    return await getShopProductPerformanceList(query, this.config);
  }

  async getShopSKUPerformance(params: TiktokGetShopSKUPerformanceParams): Promise<TiktokResponseCommon<TiktokGetShopSKUPerformanceParamsResponse>> {
    return await getShopSKUPerformance(params, this.config);
  }

  async getShopSKUPerformanceList(query: TiktokGetShopSKUPerformanceListQuery): Promise<TiktokResponseCommon<TiktokGetShopSKUPerformanceListResponse>> {
    return await getShopSKUPerformanceList(query, this.config);
  }

  async getShopVideoPerformanceList(query: TiktokGetShopVideoPerformanceListQuery): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceListResponse>> {
    return await getShopVideoPerformanceList(query, this.config);
  }

  async getShopVideoPerformanceOverview(query: TiktokGetShopVideoPerformanceOverviewQuery): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceOverviewResponse>> {
    return await getShopVideoPerformanceOverview(query, this.config);
  }

  async getShopVideoPerformanceDetails(params: TiktokGetShopVideoPerformanceDetailsParams): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceDetailsResponse>> {
    return await getShopVideoPerformanceDetails(params, this.config);
  }

  async getShopVideoProductPerformanceList(params: TiktokGetShopVideoProductPerformanceListParams): Promise<TiktokResponseCommon<TiktokGetShopVideoProductPerformanceListResponse>> {
    return await getShopVideoProductPerformanceList(params, this.config);
  }
}
