import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * checkCreateGmsProductCampaignEligibility via Shopee `v2.ads.check_create_gms_product_campaign_eligibility`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function checkCreateGmsProductCampaignEligibility(config: ShopeeConfig): Promise<ShopeeCheckCreateGmsProductCampaignEligibilityResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCheckCreateGmsProductCampaignEligibilityResponse>('/ads/check_create_gms_product_campaign_eligibility', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'checkCreateGmsProductCampaignEligibility',
  });
}

/**
 * createAutoProductAds via Shopee `v2.ads.create_auto_product_ads`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createAutoProductAds(params: ShopeeCreateAutoProductAdsRequest, config: ShopeeConfig): Promise<ShopeeCreateAutoProductAdsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateAutoProductAdsResponse>('/ads/create_auto_product_ads', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createAutoProductAds',
  });
}

/**
 * createGmsProductCampaign via Shopee `v2.ads.create_gms_product_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createGmsProductCampaign(params: ShopeeCreateGmsProductCampaignRequest, config: ShopeeConfig): Promise<ShopeeCreateGmsProductCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateGmsProductCampaignResponse>('/ads/create_gms_product_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createGmsProductCampaign',
  });
}

/**
 * createManualProductAds via Shopee `v2.ads.create_manual_product_ads`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createManualProductAds(params: ShopeeCreateManualProductAdsRequest, config: ShopeeConfig): Promise<ShopeeCreateManualProductAdsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateManualProductAdsResponse>('/ads/create_manual_product_ads', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createManualProductAds',
  });
}

/**
 * editAutoProductAds via Shopee `v2.ads.edit_auto_product_ads`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editAutoProductAds(params: ShopeeEditAutoProductAdsRequest, config: ShopeeConfig): Promise<ShopeeEditAutoProductAdsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditAutoProductAdsResponse>('/ads/edit_auto_product_ads', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editAutoProductAds',
  });
}

/**
 * editGmsItemProductCampaign via Shopee `v2.ads.edit_gms_item_product_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editGmsItemProductCampaign(params: ShopeeEditGmsItemProductCampaignRequest, config: ShopeeConfig): Promise<ShopeeEditGmsItemProductCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditGmsItemProductCampaignResponse>('/ads/edit_gms_item_product_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editGmsItemProductCampaign',
  });
}

/**
 * editGmsProductCampaign via Shopee `v2.ads.edit_gms_product_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editGmsProductCampaign(params: ShopeeEditGmsProductCampaignRequest, config: ShopeeConfig): Promise<ShopeeEditGmsProductCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditGmsProductCampaignResponse>('/ads/edit_gms_product_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editGmsProductCampaign',
  });
}

/**
 * editManualProductAdKeywords via Shopee `v2.ads.edit_manual_product_ad_keywords`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editManualProductAdKeywords(params: ShopeeEditManualProductAdKeywordsRequest, config: ShopeeConfig): Promise<ShopeeEditManualProductAdKeywordsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditManualProductAdKeywordsResponse>('/ads/edit_manual_product_ad_keywords', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editManualProductAdKeywords',
  });
}

/**
 * editManualProductAds via Shopee `v2.ads.edit_manual_product_ads`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editManualProductAds(params: ShopeeEditManualProductAdsRequest, config: ShopeeConfig): Promise<ShopeeEditManualProductAdsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditManualProductAdsResponse>('/ads/edit_manual_product_ads', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editManualProductAds',
  });
}

/**
 * getAdsFacilShopRate via Shopee `v2.ads.get_ads_facil_shop_rate`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAdsFacilShopRate(config: ShopeeConfig): Promise<ShopeeGetAdsFacilShopRateResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAdsFacilShopRateResponse>('/ads/get_ads_facil_shop_rate', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAdsFacilShopRate',
  });
}

/**
 * getAllCpcAdsDailyPerformance via Shopee `v2.ads.get_all_cpc_ads_daily_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAllCpcAdsDailyPerformance(params: ShopeeGetAllCpcAdsDailyPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetAllCpcAdsDailyPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAllCpcAdsDailyPerformanceResponse>('/ads/get_all_cpc_ads_daily_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAllCpcAdsDailyPerformance',
  });
}

/**
 * getAllCpcAdsHourlyPerformance via Shopee `v2.ads.get_all_cpc_ads_hourly_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAllCpcAdsHourlyPerformance(params: ShopeeGetAllCpcAdsHourlyPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetAllCpcAdsHourlyPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAllCpcAdsHourlyPerformanceResponse>('/ads/get_all_cpc_ads_hourly_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAllCpcAdsHourlyPerformance',
  });
}

/**
 * getCreateProductAdBudgetSuggestion via Shopee `v2.ads.get_create_product_ad_budget_suggestion`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCreateProductAdBudgetSuggestion(params: ShopeeGetCreateProductAdBudgetSuggestionRequest, config: ShopeeConfig): Promise<ShopeeGetCreateProductAdBudgetSuggestionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCreateProductAdBudgetSuggestionResponse>('/ads/get_create_product_ad_budget_suggestion', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCreateProductAdBudgetSuggestion',
  });
}

/**
 * getGmsCampaignPerformance via Shopee `v2.ads.get_gms_campaign_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGmsCampaignPerformance(params: ShopeeGetGmsCampaignPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetGmsCampaignPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGmsCampaignPerformanceResponse>('/ads/get_gms_campaign_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGmsCampaignPerformance',
  });
}

/**
 * getGmsItemPerformance via Shopee `v2.ads.get_gms_item_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGmsItemPerformance(params: ShopeeGetGmsItemPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetGmsItemPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGmsItemPerformanceResponse>('/ads/get_gms_item_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGmsItemPerformance',
  });
}

/**
 * getProductCampaignDailyPerformance via Shopee `v2.ads.get_product_campaign_daily_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductCampaignDailyPerformance(params: ShopeeGetProductCampaignDailyPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetProductCampaignDailyPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductCampaignDailyPerformanceResponse>('/ads/get_product_campaign_daily_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductCampaignDailyPerformance',
  });
}

/**
 * getProductCampaignHourlyPerformance via Shopee `v2.ads.get_product_campaign_hourly_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductCampaignHourlyPerformance(params: ShopeeGetProductCampaignHourlyPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetProductCampaignHourlyPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductCampaignHourlyPerformanceResponse>('/ads/get_product_campaign_hourly_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductCampaignHourlyPerformance',
  });
}

/**
 * getProductLevelCampaignIdList via Shopee `v2.ads.get_product_level_campaign_id_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductLevelCampaignIdList(params: ShopeeGetProductLevelCampaignIdListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetProductLevelCampaignIdListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductLevelCampaignIdListResponse>('/ads/get_product_level_campaign_id_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductLevelCampaignIdList',
  });
}

/**
 * getProductLevelCampaignSettingInfo via Shopee `v2.ads.get_product_level_campaign_setting_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductLevelCampaignSettingInfo(params: ShopeeGetProductLevelCampaignSettingInfoRequest, config: ShopeeConfig): Promise<ShopeeGetProductLevelCampaignSettingInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductLevelCampaignSettingInfoResponse>('/ads/get_product_level_campaign_setting_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductLevelCampaignSettingInfo',
  });
}

/**
 * getProductRecommendedRoiTarget via Shopee `v2.ads.get_product_recommended_roi_target`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductRecommendedRoiTarget(params: ShopeeGetProductRecommendedRoiTargetRequest, config: ShopeeConfig): Promise<ShopeeGetProductRecommendedRoiTargetResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductRecommendedRoiTargetResponse>('/ads/get_product_recommended_roi_target', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductRecommendedRoiTarget',
  });
}

/**
 * getRecommendedItemList via Shopee `v2.ads.get_recommended_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecommendedItemList(config: ShopeeConfig): Promise<ShopeeGetRecommendedItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecommendedItemListResponse>('/ads/get_recommended_item_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecommendedItemList',
  });
}

/**
 * getRecommendedKeywordList via Shopee `v2.ads.get_recommended_keyword_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecommendedKeywordList(params: ShopeeGetRecommendedKeywordListRequest, config: ShopeeConfig): Promise<ShopeeGetRecommendedKeywordListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecommendedKeywordListResponse>('/ads/get_recommended_keyword_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecommendedKeywordList',
  });
}

/**
 * getShopToggleInfo via Shopee `v2.ads.get_shop_toggle_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopToggleInfo(config: ShopeeConfig): Promise<ShopeeGetShopToggleInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopToggleInfoResponse>('/ads/get_shop_toggle_info', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopToggleInfo',
  });
}

/**
 * getTotalBalance via Shopee `v2.ads.get_total_balance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTotalBalance(config: ShopeeConfig): Promise<ShopeeGetTotalBalanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTotalBalanceResponse>('/ads/get_total_balance', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTotalBalance',
  });
}

/**
 * listGmsUserDeletedItem via Shopee `v2.ads.list_gms_user_deleted_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function listGmsUserDeletedItem(params: ShopeeListGmsUserDeletedItemRequest = {}, config: ShopeeConfig): Promise<ShopeeListGmsUserDeletedItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeListGmsUserDeletedItemResponse>('/ads/list_gms_user_deleted_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'listGmsUserDeletedItem',
  });
}
