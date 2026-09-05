import { ShopeeConfig } from '../dto/request/config.request';
import {
  deleteVideo,
  editVideoInfo,
  getCoverList,
  getMetricTrend,
  getOverviewPerformance,
  getProdcutPerformanceList,
  getUserDemographics,
  getVideoDetail,
  getVideoDetailAudienceDistribution,
  getVideoDetailMetricTrend,
  getVideoDetailPerformance,
  getVideoDetailProductPerformance,
  getVideoList,
  getVideoPerformanceList,
  postVideo,
} from '../api/video.api';
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
 * Shopee `v2.video.*` API namespace.
 *
 * Access via `shopee.video.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeVideo {
  constructor(private config: ShopeeConfig) {}

  async deleteVideo(params: ShopeeDeleteVideoRequest = {}): Promise<ShopeeDeleteVideoResponse> {
    return await deleteVideo(params, this.config);
  }

  async editVideoInfo(params: ShopeeEditVideoInfoRequest): Promise<ShopeeEditVideoInfoResponse> {
    return await editVideoInfo(params, this.config);
  }

  async getCoverList(params: ShopeeGetCoverListRequest): Promise<ShopeeGetCoverListResponse> {
    return await getCoverList(params, this.config);
  }

  async getMetricTrend(params: ShopeeGetMetricTrendRequest): Promise<ShopeeGetMetricTrendResponse> {
    return await getMetricTrend(params, this.config);
  }

  async getOverviewPerformance(params: ShopeeGetOverviewPerformanceRequest): Promise<ShopeeGetOverviewPerformanceResponse> {
    return await getOverviewPerformance(params, this.config);
  }

  async getProdcutPerformanceList(params: ShopeeGetProdcutPerformanceListRequest): Promise<ShopeeGetProdcutPerformanceListResponse> {
    return await getProdcutPerformanceList(params, this.config);
  }

  async getUserDemographics(): Promise<ShopeeGetUserDemographicsResponse> {
    return await getUserDemographics(this.config);
  }

  async getVideoDetail(params: ShopeeGetVideoDetailRequest = {}): Promise<ShopeeGetVideoDetailResponse> {
    return await getVideoDetail(params, this.config);
  }

  async getVideoDetailAudienceDistribution(params: ShopeeGetVideoDetailAudienceDistributionRequest): Promise<ShopeeGetVideoDetailAudienceDistributionResponse> {
    return await getVideoDetailAudienceDistribution(params, this.config);
  }

  async getVideoDetailMetricTrend(params: ShopeeGetVideoDetailMetricTrendRequest): Promise<ShopeeGetVideoDetailMetricTrendResponse> {
    return await getVideoDetailMetricTrend(params, this.config);
  }

  async getVideoDetailPerformance(params: ShopeeGetVideoDetailPerformanceRequest): Promise<ShopeeGetVideoDetailPerformanceResponse> {
    return await getVideoDetailPerformance(params, this.config);
  }

  async getVideoDetailProductPerformance(params: ShopeeGetVideoDetailProductPerformanceRequest): Promise<ShopeeGetVideoDetailProductPerformanceResponse> {
    return await getVideoDetailProductPerformance(params, this.config);
  }

  async getVideoList(params: ShopeeGetVideoListRequest): Promise<ShopeeGetVideoListResponse> {
    return await getVideoList(params, this.config);
  }

  async getVideoPerformanceList(params: ShopeeGetVideoPerformanceListRequest): Promise<ShopeeGetVideoPerformanceListResponse> {
    return await getVideoPerformanceList(params, this.config);
  }

  async postVideo(params: ShopeePostVideoRequest): Promise<ShopeePostVideoResponse> {
    return await postVideo(params, this.config);
  }
}
