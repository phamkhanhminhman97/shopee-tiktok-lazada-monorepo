import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * getLateOrders via Shopee `v2.account_health.get_late_orders`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getLateOrders(params: ShopeeGetLateOrdersRequest = {}, config: ShopeeConfig): Promise<ShopeeGetLateOrdersResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetLateOrdersResponse>('/account_health/get_late_orders', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getLateOrders',
  });
}

/**
 * getListingsWithIssues via Shopee `v2.account_health.get_listings_with_issues`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getListingsWithIssues(params: ShopeeGetListingsWithIssuesRequest = {}, config: ShopeeConfig): Promise<ShopeeGetListingsWithIssuesResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetListingsWithIssuesResponse>('/account_health/get_listings_with_issues', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getListingsWithIssues',
  });
}

/**
 * getMetricSourceDetail via Shopee `v2.account_health.get_metric_source_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMetricSourceDetail(params: ShopeeGetMetricSourceDetailRequest, config: ShopeeConfig): Promise<ShopeeGetMetricSourceDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMetricSourceDetailResponse>('/account_health/get_metric_source_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMetricSourceDetail',
  });
}

/**
 * getPenaltyPointHistory via Shopee `v2.account_health.get_penalty_point_history`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPenaltyPointHistory(params: ShopeeGetPenaltyPointHistoryRequest = {}, config: ShopeeConfig): Promise<ShopeeGetPenaltyPointHistoryResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPenaltyPointHistoryResponse>('/account_health/get_penalty_point_history', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPenaltyPointHistory',
  });
}

/**
 * getPunishmentHistory via Shopee `v2.account_health.get_punishment_history`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPunishmentHistory(params: ShopeeGetPunishmentHistoryRequest, config: ShopeeConfig): Promise<ShopeeGetPunishmentHistoryResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPunishmentHistoryResponse>('/account_health/get_punishment_history', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPunishmentHistory',
  });
}

/**
 * getShopPerformance via Shopee `v2.account_health.get_shop_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopPerformance(config: ShopeeConfig): Promise<ShopeeGetShopPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopPerformanceResponse>('/account_health/get_shop_performance', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopPerformance',
  });
}
