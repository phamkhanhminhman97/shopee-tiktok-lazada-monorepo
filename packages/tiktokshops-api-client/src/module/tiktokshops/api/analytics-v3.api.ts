import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
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

/**
 * Retrieve overall performance metrics for the authorized shops.
 *
 * @returns A promise resolving to performance data of the shops.
 * Endpoint: `GET /analytics/202405/shop/performance`
 */
export async function getShopPerformance(query: TiktokGetShopPerformanceQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopPerformanceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopPerformanceResponse>>(
    '/analytics/202405/shop/performance',
    'GET',
    {},
    config,
    'getShopPerformance',
  );
}

/**
 * Retrieve performance metrics of a specific product within the authorized shop.
 * Requires replacing `{product_id}` in the path with a valid product ID.
 *
 * @returns A promise resolving to product performance data.
 * Endpoint: `GET /analytics/202405/shop_products/{product_id}/performance`
 */
export async function getShopProductPerformance(params: TiktokGetShopProductPerformanceParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopProductPerformanceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopProductPerformanceResponse>>(
    `/analytics/202405/shop_products/${params.product_id}/performance`,
    'GET',
    { query: params.query },
    config,
    'getShopProductPerformance',
  );
}

/**
 * Retrieve a list of performance metrics for all products in the authorized shop.
 *
 * @returns A promise resolving to performance data of multiple products.
 * Endpoint: `GET /analytics/202405/shop_products/performance`
 */
export async function getShopProductPerformanceList(query: TiktokGetShopProductPerformanceListQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopProductPerformanceListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopProductPerformanceListResponse>>(
    '/analytics/202405/shop_products/performance',
    'GET',
    {},
    config,
    'getShopProductPerformanceList',
  );
}

/**
 * Retrieve performance data of a specific SKU.
 * Requires replacing `{sku_id}` in the path with a valid SKU ID.
 *
 * @returns A promise resolving to SKU performance data.
 * Endpoint: `GET /analytics/202406/shop_skus/{sku_id}/performance`
 */
export async function getShopSKUPerformance(params: TiktokGetShopSKUPerformanceParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopSKUPerformanceParamsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopSKUPerformanceParamsResponse>>(
    `/analytics/202406/shop_skus/${params.sku_id}/performance`,
    'GET',
    { query: params.query },
    config,
    'getShopSKUPerformance',
  );
}

/**
 * Retrieve performance metrics for all SKUs in the authorized shop.
 *
 * @returns A promise resolving to performance data of multiple SKUs.
 * Endpoint: `GET /analytics/202406/shop_skus/performance`
 */
export async function getShopSKUPerformanceList(query: TiktokGetShopSKUPerformanceListQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopSKUPerformanceListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopSKUPerformanceListResponse>>(
    '/analytics/202406/shop_skus/performance',
    'GET',
    {},
    config,
    'getShopSKUPerformanceList',
  );
}

/**
 * Retrieve performance data for all shop videos.
 *
 * @returns A promise resolving to performance metrics for shop videos.
 * Endpoint: `GET /analytics/202409/shop_videos/performance`
 */
export async function getShopVideoPerformanceList(query: TiktokGetShopVideoPerformanceListQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopVideoPerformanceListResponse>>(
    '/analytics/202409/shop_videos/performance',
    'GET',
    {},
    config,
    'getShopVideoPerformanceList',
  );
}

/**
 * Retrieve overview performance metrics across all shop videos.
 *
 * @returns A promise resolving to summarized video performance data.
 * Endpoint: `GET /analytics/202409/shop_videos/overview_performance`
 */
export async function getShopVideoPerformanceOverview(query: TiktokGetShopVideoPerformanceOverviewQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceOverviewResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopVideoPerformanceOverviewResponse>>(
    '/analytics/202409/shop_videos/overview_performance',
    'GET',
    {},
    config,
    'getShopVideoPerformanceOverview',
  );
}

/**
 * Retrieve performance metrics for a specific video.
 * Requires replacing `{video_id}` in the path with a valid video ID.
 *
 * @returns A promise resolving to detailed video performance data.
 * Endpoint: `GET /analytics/202409/shop_videos/{video_id}/performance`
 */
export async function getShopVideoPerformanceDetails(params: TiktokGetShopVideoPerformanceDetailsParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopVideoPerformanceDetailsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopVideoPerformanceDetailsResponse>>(
    `/analytics/202409/shop_videos/${params.video_id}/performance`,
    'GET',
    { query: params.query },
    config,
    'getShopVideoPerformanceDetails',
  );
}

/**
 * Retrieve performance data of products featured in a specific video.
 * Requires replacing `{video_id}` in the path with a valid video ID.
 *
 * @returns A promise resolving to performance metrics of products shown in the video.
 * Endpoint: `GET /analytics/202409/shop_videos/{video_id}/products/performance`
 */
export async function getShopVideoProductPerformanceList(params: TiktokGetShopVideoProductPerformanceListParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetShopVideoProductPerformanceListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetShopVideoProductPerformanceListResponse>>(
    `/analytics/202409/shop_videos/${params.video_id}/products/performance`,
    'GET',
    { query: params.query },
    config,
    'getShopVideoProductPerformanceList',
  );
}
