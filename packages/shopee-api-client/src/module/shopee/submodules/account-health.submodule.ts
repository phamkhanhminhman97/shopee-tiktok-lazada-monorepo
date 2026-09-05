import { ShopeeConfig } from '../dto/request/config.request';
import {
  getLateOrders,
  getListingsWithIssues,
  getMetricSourceDetail,
  getPenaltyPointHistory,
  getPunishmentHistory,
  getShopPerformance,
} from '../api/account-health.api';
import {
  ShopeeGetLateOrdersRequest,
  ShopeeGetListingsWithIssuesRequest,
  ShopeeGetMetricSourceDetailRequest,
  ShopeeGetPenaltyPointHistoryRequest,
  ShopeeGetPunishmentHistoryRequest,
  ShopeeGetShopPerformanceRequest,
} from '../dto/request/account-health.request';
import {
  ShopeeGetLateOrdersResponse,
  ShopeeGetListingsWithIssuesResponse,
  ShopeeGetMetricSourceDetailResponse,
  ShopeeGetPenaltyPointHistoryResponse,
  ShopeeGetPunishmentHistoryResponse,
  ShopeeGetShopPerformanceResponse,
} from '../dto/response/account-health.response';

/**
 * Shopee `v2.account_health.*` API namespace.
 *
 * Access via `shopee.accountHealth.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeAccountHealth {
  constructor(private config: ShopeeConfig) {}

  async getLateOrders(params: ShopeeGetLateOrdersRequest = {}): Promise<ShopeeGetLateOrdersResponse> {
    return await getLateOrders(params, this.config);
  }

  async getListingsWithIssues(params: ShopeeGetListingsWithIssuesRequest = {}): Promise<ShopeeGetListingsWithIssuesResponse> {
    return await getListingsWithIssues(params, this.config);
  }

  async getMetricSourceDetail(params: ShopeeGetMetricSourceDetailRequest): Promise<ShopeeGetMetricSourceDetailResponse> {
    return await getMetricSourceDetail(params, this.config);
  }

  async getPenaltyPointHistory(params: ShopeeGetPenaltyPointHistoryRequest = {}): Promise<ShopeeGetPenaltyPointHistoryResponse> {
    return await getPenaltyPointHistory(params, this.config);
  }

  async getPunishmentHistory(params: ShopeeGetPunishmentHistoryRequest): Promise<ShopeeGetPunishmentHistoryResponse> {
    return await getPunishmentHistory(params, this.config);
  }

  async getShopPerformance(): Promise<ShopeeGetShopPerformanceResponse> {
    return await getShopPerformance(this.config);
  }
}
