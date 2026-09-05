import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeDeleteVideoRequest,
  ShopeeEditVideoInfoRequest,
  ShopeeGetCoverListRequest,
  ShopeeGetMetricTrendRequest,
  ShopeeGetOverviewPerformanceRequest,
  ShopeeGetProdcutPerformanceListRequest,
  ShopeeGetUserDemographicsRequest,
  ShopeeGetVideoDetailRequest,
  ShopeeGetVideoDetailAudienceDistributionRequest,
  ShopeeGetVideoDetailMetricTrendRequest,
  ShopeeGetVideoDetailPerformanceRequest,
  ShopeeGetVideoDetailProductPerformanceRequest,
  ShopeeGetVideoListRequest,
  ShopeeGetVideoPerformanceListRequest,
  ShopeePostVideoRequest,
} from '../dto/request/video.request';
import {
  ShopeeDeleteVideoResponse,
  ShopeeEditVideoInfoResponse,
  ShopeeGetCoverListResponse,
  ShopeeGetMetricTrendResponse,
  ShopeeGetOverviewPerformanceResponse,
  ShopeeGetProdcutPerformanceListResponse,
  ShopeeGetUserDemographicsResponse,
  ShopeeGetVideoDetailResponse,
  ShopeeGetVideoDetailAudienceDistributionResponse,
  ShopeeGetVideoDetailMetricTrendResponse,
  ShopeeGetVideoDetailPerformanceResponse,
  ShopeeGetVideoDetailProductPerformanceResponse,
  ShopeeGetVideoListResponse,
  ShopeeGetVideoPerformanceListResponse,
  ShopeePostVideoResponse,
} from '../dto/response/video.response';

/**
 * deleteVideo via Shopee `v2.video.delete_video`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteVideo(params: ShopeeDeleteVideoRequest = {}, config: ShopeeConfig): Promise<ShopeeDeleteVideoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteVideoResponse>('/video/delete_video', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteVideo',
  });
}

/**
 * editVideoInfo via Shopee `v2.video.edit_video_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editVideoInfo(params: ShopeeEditVideoInfoRequest, config: ShopeeConfig): Promise<ShopeeEditVideoInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditVideoInfoResponse>('/video/edit_video_info', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editVideoInfo',
  });
}

/**
 * getCoverList via Shopee `v2.video.get_cover_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCoverList(params: ShopeeGetCoverListRequest, config: ShopeeConfig): Promise<ShopeeGetCoverListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCoverListResponse>('/video/get_cover_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCoverList',
  });
}

/**
 * getMetricTrend via Shopee `v2.video.get_metric_trend`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMetricTrend(params: ShopeeGetMetricTrendRequest, config: ShopeeConfig): Promise<ShopeeGetMetricTrendResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMetricTrendResponse>('/video/get_metric_trend', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMetricTrend',
  });
}

/**
 * getOverviewPerformance via Shopee `v2.video.get_overview_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOverviewPerformance(params: ShopeeGetOverviewPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetOverviewPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOverviewPerformanceResponse>('/video/get_overview_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOverviewPerformance',
  });
}

/**
 * getProdcutPerformanceList via Shopee `v2.video.get_prodcut_performance_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProdcutPerformanceList(params: ShopeeGetProdcutPerformanceListRequest, config: ShopeeConfig): Promise<ShopeeGetProdcutPerformanceListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProdcutPerformanceListResponse>('/video/get_prodcut_performance_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProdcutPerformanceList',
  });
}

/**
 * getUserDemographics via Shopee `v2.video.get_user_demographics`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getUserDemographics(config: ShopeeConfig): Promise<ShopeeGetUserDemographicsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetUserDemographicsResponse>('/video/get_user_demographics', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getUserDemographics',
  });
}

/**
 * getVideoDetail via Shopee `v2.video.get_video_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoDetail(params: ShopeeGetVideoDetailRequest = {}, config: ShopeeConfig): Promise<ShopeeGetVideoDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoDetailResponse>('/video/get_video_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoDetail',
  });
}

/**
 * getVideoDetailAudienceDistribution via Shopee `v2.video.get_video_detail_audience_distribution`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoDetailAudienceDistribution(params: ShopeeGetVideoDetailAudienceDistributionRequest, config: ShopeeConfig): Promise<ShopeeGetVideoDetailAudienceDistributionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoDetailAudienceDistributionResponse>('/video/get_video_detail_audience_distribution', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoDetailAudienceDistribution',
  });
}

/**
 * getVideoDetailMetricTrend via Shopee `v2.video.get_video_detail_metric_trend`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoDetailMetricTrend(params: ShopeeGetVideoDetailMetricTrendRequest, config: ShopeeConfig): Promise<ShopeeGetVideoDetailMetricTrendResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoDetailMetricTrendResponse>('/video/get_video_detail_metric_trend', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoDetailMetricTrend',
  });
}

/**
 * getVideoDetailPerformance via Shopee `v2.video.get_video_detail_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoDetailPerformance(params: ShopeeGetVideoDetailPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetVideoDetailPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoDetailPerformanceResponse>('/video/get_video_detail_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoDetailPerformance',
  });
}

/**
 * getVideoDetailProductPerformance via Shopee `v2.video.get_video_detail_product_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoDetailProductPerformance(params: ShopeeGetVideoDetailProductPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetVideoDetailProductPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoDetailProductPerformanceResponse>('/video/get_video_detail_product_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoDetailProductPerformance',
  });
}

/**
 * getVideoList via Shopee `v2.video.get_video_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoList(params: ShopeeGetVideoListRequest, config: ShopeeConfig): Promise<ShopeeGetVideoListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoListResponse>('/video/get_video_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoList',
  });
}

/**
 * getVideoPerformanceList via Shopee `v2.video.get_video_performance_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoPerformanceList(params: ShopeeGetVideoPerformanceListRequest, config: ShopeeConfig): Promise<ShopeeGetVideoPerformanceListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoPerformanceListResponse>('/video/get_video_performance_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoPerformanceList',
  });
}

/**
 * postVideo via Shopee `v2.video.post_video`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function postVideo(params: ShopeePostVideoRequest, config: ShopeeConfig): Promise<ShopeePostVideoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeePostVideoResponse>('/video/post_video', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'postVideo',
  });
}
