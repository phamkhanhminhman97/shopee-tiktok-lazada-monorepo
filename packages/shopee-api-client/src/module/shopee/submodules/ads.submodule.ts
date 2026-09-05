import { ShopeeConfig } from '../dto/request/config.request';
import {
  checkCreateGmsProductCampaignEligibility,
  createAutoProductAds,
  createGmsProductCampaign,
  createManualProductAds,
  editAutoProductAds,
  editGmsItemProductCampaign,
  editGmsProductCampaign,
  editManualProductAdKeywords,
  editManualProductAds,
  getAdsFacilShopRate,
  getAllCpcAdsDailyPerformance,
  getAllCpcAdsHourlyPerformance,
  getCreateProductAdBudgetSuggestion,
  getGmsCampaignPerformance,
  getGmsItemPerformance,
  getProductCampaignDailyPerformance,
  getProductCampaignHourlyPerformance,
  getProductLevelCampaignIdList,
  getProductLevelCampaignSettingInfo,
  getProductRecommendedRoiTarget,
  getRecommendedItemList,
  getRecommendedKeywordList,
  getShopToggleInfo,
  getTotalBalance,
  listGmsUserDeletedItem,
} from '../api/ads.api';
import {
  ShopeeCheckCreateGmsProductCampaignEligibilityRequest,
  ShopeeCreateAutoProductAdsRequest,
  ShopeeCreateGmsProductCampaignRequest,
  ShopeeCreateManualProductAdsRequest,
  ShopeeEditAutoProductAdsRequest,
  ShopeeEditGmsItemProductCampaignRequest,
  ShopeeEditGmsProductCampaignRequest,
  ShopeeEditManualProductAdKeywordsRequest,
  ShopeeEditManualProductAdsRequest,
  ShopeeGetAdsFacilShopRateRequest,
  ShopeeGetAllCpcAdsDailyPerformanceRequest,
  ShopeeGetAllCpcAdsHourlyPerformanceRequest,
  ShopeeGetCreateProductAdBudgetSuggestionRequest,
  ShopeeGetGmsCampaignPerformanceRequest,
  ShopeeGetGmsItemPerformanceRequest,
  ShopeeGetProductCampaignDailyPerformanceRequest,
  ShopeeGetProductCampaignHourlyPerformanceRequest,
  ShopeeGetProductLevelCampaignIdListRequest,
  ShopeeGetProductLevelCampaignSettingInfoRequest,
  ShopeeGetProductRecommendedRoiTargetRequest,
  ShopeeGetRecommendedItemListRequest,
  ShopeeGetRecommendedKeywordListRequest,
  ShopeeGetShopToggleInfoRequest,
  ShopeeGetTotalBalanceRequest,
  ShopeeListGmsUserDeletedItemRequest,
} from '../dto/request/ads.request';
import {
  ShopeeCheckCreateGmsProductCampaignEligibilityResponse,
  ShopeeCreateAutoProductAdsResponse,
  ShopeeCreateGmsProductCampaignResponse,
  ShopeeCreateManualProductAdsResponse,
  ShopeeEditAutoProductAdsResponse,
  ShopeeEditGmsItemProductCampaignResponse,
  ShopeeEditGmsProductCampaignResponse,
  ShopeeEditManualProductAdKeywordsResponse,
  ShopeeEditManualProductAdsResponse,
  ShopeeGetAdsFacilShopRateResponse,
  ShopeeGetAllCpcAdsDailyPerformanceResponse,
  ShopeeGetAllCpcAdsHourlyPerformanceResponse,
  ShopeeGetCreateProductAdBudgetSuggestionResponse,
  ShopeeGetGmsCampaignPerformanceResponse,
  ShopeeGetGmsItemPerformanceResponse,
  ShopeeGetProductCampaignDailyPerformanceResponse,
  ShopeeGetProductCampaignHourlyPerformanceResponse,
  ShopeeGetProductLevelCampaignIdListResponse,
  ShopeeGetProductLevelCampaignSettingInfoResponse,
  ShopeeGetProductRecommendedRoiTargetResponse,
  ShopeeGetRecommendedItemListResponse,
  ShopeeGetRecommendedKeywordListResponse,
  ShopeeGetShopToggleInfoResponse,
  ShopeeGetTotalBalanceResponse,
  ShopeeListGmsUserDeletedItemResponse,
} from '../dto/response/ads.response';

/**
 * Shopee `v2.ads.*` API namespace.
 *
 * Access via `shopee.ads.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeAds {
  constructor(private config: ShopeeConfig) {}

  async checkCreateGmsProductCampaignEligibility(): Promise<ShopeeCheckCreateGmsProductCampaignEligibilityResponse> {
    return await checkCreateGmsProductCampaignEligibility(this.config);
  }

  async createAutoProductAds(params: ShopeeCreateAutoProductAdsRequest): Promise<ShopeeCreateAutoProductAdsResponse> {
    return await createAutoProductAds(params, this.config);
  }

  async createGmsProductCampaign(params: ShopeeCreateGmsProductCampaignRequest): Promise<ShopeeCreateGmsProductCampaignResponse> {
    return await createGmsProductCampaign(params, this.config);
  }

  async createManualProductAds(params: ShopeeCreateManualProductAdsRequest): Promise<ShopeeCreateManualProductAdsResponse> {
    return await createManualProductAds(params, this.config);
  }

  async editAutoProductAds(params: ShopeeEditAutoProductAdsRequest): Promise<ShopeeEditAutoProductAdsResponse> {
    return await editAutoProductAds(params, this.config);
  }

  async editGmsItemProductCampaign(params: ShopeeEditGmsItemProductCampaignRequest): Promise<ShopeeEditGmsItemProductCampaignResponse> {
    return await editGmsItemProductCampaign(params, this.config);
  }

  async editGmsProductCampaign(params: ShopeeEditGmsProductCampaignRequest): Promise<ShopeeEditGmsProductCampaignResponse> {
    return await editGmsProductCampaign(params, this.config);
  }

  async editManualProductAdKeywords(params: ShopeeEditManualProductAdKeywordsRequest): Promise<ShopeeEditManualProductAdKeywordsResponse> {
    return await editManualProductAdKeywords(params, this.config);
  }

  async editManualProductAds(params: ShopeeEditManualProductAdsRequest): Promise<ShopeeEditManualProductAdsResponse> {
    return await editManualProductAds(params, this.config);
  }

  async getAdsFacilShopRate(): Promise<ShopeeGetAdsFacilShopRateResponse> {
    return await getAdsFacilShopRate(this.config);
  }

  async getAllCpcAdsDailyPerformance(params: ShopeeGetAllCpcAdsDailyPerformanceRequest): Promise<ShopeeGetAllCpcAdsDailyPerformanceResponse> {
    return await getAllCpcAdsDailyPerformance(params, this.config);
  }

  async getAllCpcAdsHourlyPerformance(params: ShopeeGetAllCpcAdsHourlyPerformanceRequest): Promise<ShopeeGetAllCpcAdsHourlyPerformanceResponse> {
    return await getAllCpcAdsHourlyPerformance(params, this.config);
  }

  async getCreateProductAdBudgetSuggestion(params: ShopeeGetCreateProductAdBudgetSuggestionRequest): Promise<ShopeeGetCreateProductAdBudgetSuggestionResponse> {
    return await getCreateProductAdBudgetSuggestion(params, this.config);
  }

  async getGmsCampaignPerformance(params: ShopeeGetGmsCampaignPerformanceRequest): Promise<ShopeeGetGmsCampaignPerformanceResponse> {
    return await getGmsCampaignPerformance(params, this.config);
  }

  async getGmsItemPerformance(params: ShopeeGetGmsItemPerformanceRequest): Promise<ShopeeGetGmsItemPerformanceResponse> {
    return await getGmsItemPerformance(params, this.config);
  }

  async getProductCampaignDailyPerformance(params: ShopeeGetProductCampaignDailyPerformanceRequest): Promise<ShopeeGetProductCampaignDailyPerformanceResponse> {
    return await getProductCampaignDailyPerformance(params, this.config);
  }

  async getProductCampaignHourlyPerformance(params: ShopeeGetProductCampaignHourlyPerformanceRequest): Promise<ShopeeGetProductCampaignHourlyPerformanceResponse> {
    return await getProductCampaignHourlyPerformance(params, this.config);
  }

  async getProductLevelCampaignIdList(params: ShopeeGetProductLevelCampaignIdListRequest = {}): Promise<ShopeeGetProductLevelCampaignIdListResponse> {
    return await getProductLevelCampaignIdList(params, this.config);
  }

  async getProductLevelCampaignSettingInfo(params: ShopeeGetProductLevelCampaignSettingInfoRequest): Promise<ShopeeGetProductLevelCampaignSettingInfoResponse> {
    return await getProductLevelCampaignSettingInfo(params, this.config);
  }

  async getProductRecommendedRoiTarget(params: ShopeeGetProductRecommendedRoiTargetRequest): Promise<ShopeeGetProductRecommendedRoiTargetResponse> {
    return await getProductRecommendedRoiTarget(params, this.config);
  }

  async getRecommendedItemList(): Promise<ShopeeGetRecommendedItemListResponse> {
    return await getRecommendedItemList(this.config);
  }

  async getRecommendedKeywordList(params: ShopeeGetRecommendedKeywordListRequest): Promise<ShopeeGetRecommendedKeywordListResponse> {
    return await getRecommendedKeywordList(params, this.config);
  }

  async getShopToggleInfo(): Promise<ShopeeGetShopToggleInfoResponse> {
    return await getShopToggleInfo(this.config);
  }

  async getTotalBalance(): Promise<ShopeeGetTotalBalanceResponse> {
    return await getTotalBalance(this.config);
  }

  async listGmsUserDeletedItem(params: ShopeeListGmsUserDeletedItemRequest = {}): Promise<ShopeeListGmsUserDeletedItemResponse> {
    return await listGmsUserDeletedItem(params, this.config);
  }
}
