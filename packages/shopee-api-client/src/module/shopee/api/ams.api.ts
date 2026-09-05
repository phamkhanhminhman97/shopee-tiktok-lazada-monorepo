import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddAllProductsToOpenCampaignRequest,
  ShopeeBatchAddProductsToOpenCampaignRequest,
  ShopeeBatchEditProductsOpenCampaignSettingRequest,
  ShopeeBatchGetProductsSuggestedRateRequest,
  ShopeeBatchRemoveProductsOpenCampaignSettingRequest,
  ShopeeCreateNewTargetedCampaignRequest,
  ShopeeEditAffiliateListOfTargetedCampaignRequest,
  ShopeeEditAllProductsOpenCampaignSettingRequest,
  ShopeeEditProductListOfTargetedCampaignRequest,
  ShopeeGetAffiliatePerformanceRequest,
  ShopeeGetAutoAddNewProductToggleStatusRequest,
  ShopeeGetCampaignKeyMetricsPerformanceRequest,
  ShopeeGetContentPerformanceRequest,
  ShopeeGetConversionReportRequest,
  ShopeeGetManagedAffiliateListRequest,
  ShopeeGetOpenCampaignAddedProductRequest,
  ShopeeGetOpenCampaignBatchTaskResultRequest,
  ShopeeGetOpenCampaignNotAddedProductRequest,
  ShopeeGetOpenCampaignPerformanceRequest,
  ShopeeGetOptimizationSuggestionProductRequest,
  ShopeeGetPerformanceDataUpdateTimeRequest,
  ShopeeGetProductPerformanceRequest,
  ShopeeGetRecommendedAffiliateListRequest,
  ShopeeGetShopPerformanceRequest,
  ShopeeGetShopSuggestedRateRequest,
  ShopeeGetTargetedCampaignAddableProductListRequest,
  ShopeeGetTargetedCampaignListRequest,
  ShopeeGetTargetedCampaignPerformanceRequest,
  ShopeeGetTargetedCampaignSettingsRequest,
  ShopeeGetValidationListRequest,
  ShopeeGetValidationReportRequest,
  ShopeeQueryAffiliateListRequest,
  ShopeeRemoveAllProductsOpenCampaignSettingRequest,
  ShopeeTerminateTargetedCampaignRequest,
  ShopeeUpdateAutoAddNewProductSettingRequest,
  ShopeeUpdateBasicInfoOfTargetedCampaignRequest,
} from '../dto/request/ams.request';
import {
  ShopeeAddAllProductsToOpenCampaignResponse,
  ShopeeBatchAddProductsToOpenCampaignResponse,
  ShopeeBatchEditProductsOpenCampaignSettingResponse,
  ShopeeBatchGetProductsSuggestedRateResponse,
  ShopeeBatchRemoveProductsOpenCampaignSettingResponse,
  ShopeeCreateNewTargetedCampaignResponse,
  ShopeeEditAffiliateListOfTargetedCampaignResponse,
  ShopeeEditAllProductsOpenCampaignSettingResponse,
  ShopeeEditProductListOfTargetedCampaignResponse,
  ShopeeGetAffiliatePerformanceResponse,
  ShopeeGetAutoAddNewProductToggleStatusResponse,
  ShopeeGetCampaignKeyMetricsPerformanceResponse,
  ShopeeGetContentPerformanceResponse,
  ShopeeGetConversionReportResponse,
  ShopeeGetManagedAffiliateListResponse,
  ShopeeGetOpenCampaignAddedProductResponse,
  ShopeeGetOpenCampaignBatchTaskResultResponse,
  ShopeeGetOpenCampaignNotAddedProductResponse,
  ShopeeGetOpenCampaignPerformanceResponse,
  ShopeeGetOptimizationSuggestionProductResponse,
  ShopeeGetPerformanceDataUpdateTimeResponse,
  ShopeeGetProductPerformanceResponse,
  ShopeeGetRecommendedAffiliateListResponse,
  ShopeeGetShopPerformanceResponse,
  ShopeeGetShopSuggestedRateResponse,
  ShopeeGetTargetedCampaignAddableProductListResponse,
  ShopeeGetTargetedCampaignListResponse,
  ShopeeGetTargetedCampaignPerformanceResponse,
  ShopeeGetTargetedCampaignSettingsResponse,
  ShopeeGetValidationListResponse,
  ShopeeGetValidationReportResponse,
  ShopeeQueryAffiliateListResponse,
  ShopeeRemoveAllProductsOpenCampaignSettingResponse,
  ShopeeTerminateTargetedCampaignResponse,
  ShopeeUpdateAutoAddNewProductSettingResponse,
  ShopeeUpdateBasicInfoOfTargetedCampaignResponse,
} from '../dto/response/ams.response';

/**
 * addAllProductsToOpenCampaign via Shopee `v2.ams.add_all_products_to_open_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addAllProductsToOpenCampaign(params: ShopeeAddAllProductsToOpenCampaignRequest, config: ShopeeConfig): Promise<ShopeeAddAllProductsToOpenCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddAllProductsToOpenCampaignResponse>('/ams/add_all_products_to_open_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addAllProductsToOpenCampaign',
  });
}

/**
 * batchAddProductsToOpenCampaign via Shopee `v2.ams.batch_add_products_to_open_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchAddProductsToOpenCampaign(params: ShopeeBatchAddProductsToOpenCampaignRequest, config: ShopeeConfig): Promise<ShopeeBatchAddProductsToOpenCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchAddProductsToOpenCampaignResponse>('/ams/batch_add_products_to_open_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchAddProductsToOpenCampaign',
  });
}

/**
 * batchEditProductsOpenCampaignSetting via Shopee `v2.ams.batch_edit_products_open_campaign_setting`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchEditProductsOpenCampaignSetting(params: ShopeeBatchEditProductsOpenCampaignSettingRequest, config: ShopeeConfig): Promise<ShopeeBatchEditProductsOpenCampaignSettingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchEditProductsOpenCampaignSettingResponse>('/ams/batch_edit_products_open_campaign_setting', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchEditProductsOpenCampaignSetting',
  });
}

/**
 * batchGetProductsSuggestedRate via Shopee `v2.ams.batch_get_products_suggested_rate`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchGetProductsSuggestedRate(params: ShopeeBatchGetProductsSuggestedRateRequest, config: ShopeeConfig): Promise<ShopeeBatchGetProductsSuggestedRateResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchGetProductsSuggestedRateResponse>('/ams/batch_get_products_suggested_rate', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchGetProductsSuggestedRate',
  });
}

/**
 * batchRemoveProductsOpenCampaignSetting via Shopee `v2.ams.batch_remove_products_open_campaign_setting`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchRemoveProductsOpenCampaignSetting(params: ShopeeBatchRemoveProductsOpenCampaignSettingRequest, config: ShopeeConfig): Promise<ShopeeBatchRemoveProductsOpenCampaignSettingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchRemoveProductsOpenCampaignSettingResponse>('/ams/batch_remove_products_open_campaign_setting', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchRemoveProductsOpenCampaignSetting',
  });
}

/**
 * createNewTargetedCampaign via Shopee `v2.ams.create_new_targeted_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createNewTargetedCampaign(params: ShopeeCreateNewTargetedCampaignRequest, config: ShopeeConfig): Promise<ShopeeCreateNewTargetedCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateNewTargetedCampaignResponse>('/ams/create_new_targeted_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createNewTargetedCampaign',
  });
}

/**
 * editAffiliateListOfTargetedCampaign via Shopee `v2.ams.edit_affiliate_list_of_targeted_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editAffiliateListOfTargetedCampaign(params: ShopeeEditAffiliateListOfTargetedCampaignRequest, config: ShopeeConfig): Promise<ShopeeEditAffiliateListOfTargetedCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditAffiliateListOfTargetedCampaignResponse>('/ams/edit_affiliate_list_of_targeted_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editAffiliateListOfTargetedCampaign',
  });
}

/**
 * editAllProductsOpenCampaignSetting via Shopee `v2.ams.edit_all_products_open_campaign_setting`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editAllProductsOpenCampaignSetting(params: ShopeeEditAllProductsOpenCampaignSettingRequest = {}, config: ShopeeConfig): Promise<ShopeeEditAllProductsOpenCampaignSettingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditAllProductsOpenCampaignSettingResponse>('/ams/edit_all_products_open_campaign_setting', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editAllProductsOpenCampaignSetting',
  });
}

/**
 * editProductListOfTargetedCampaign via Shopee `v2.ams.edit_product_list_of_targeted_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function editProductListOfTargetedCampaign(params: ShopeeEditProductListOfTargetedCampaignRequest, config: ShopeeConfig): Promise<ShopeeEditProductListOfTargetedCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEditProductListOfTargetedCampaignResponse>('/ams/edit_product_list_of_targeted_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'editProductListOfTargetedCampaign',
  });
}

/**
 * getAffiliatePerformance via Shopee `v2.ams.get_affiliate_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAffiliatePerformance(params: ShopeeGetAffiliatePerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetAffiliatePerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAffiliatePerformanceResponse>('/ams/get_affiliate_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAffiliatePerformance',
  });
}

/**
 * getAutoAddNewProductToggleStatus via Shopee `v2.ams.get_auto_add_new_product_toggle_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAutoAddNewProductToggleStatus(config: ShopeeConfig): Promise<ShopeeGetAutoAddNewProductToggleStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAutoAddNewProductToggleStatusResponse>('/ams/get_auto_add_new_product_toggle_status', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAutoAddNewProductToggleStatus',
  });
}

/**
 * getCampaignKeyMetricsPerformance via Shopee `v2.ams.get_campaign_key_metrics_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCampaignKeyMetricsPerformance(params: ShopeeGetCampaignKeyMetricsPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetCampaignKeyMetricsPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCampaignKeyMetricsPerformanceResponse>('/ams/get_campaign_key_metrics_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCampaignKeyMetricsPerformance',
  });
}

/**
 * getContentPerformance via Shopee `v2.ams.get_content_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getContentPerformance(params: ShopeeGetContentPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetContentPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetContentPerformanceResponse>('/ams/get_content_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getContentPerformance',
  });
}

/**
 * getConversionReport via Shopee `v2.ams.get_conversion_report`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getConversionReport(params: ShopeeGetConversionReportRequest, config: ShopeeConfig): Promise<ShopeeGetConversionReportResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetConversionReportResponse>('/ams/get_conversion_report', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getConversionReport',
  });
}

/**
 * getManagedAffiliateList via Shopee `v2.ams.get_managed_affiliate_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getManagedAffiliateList(params: ShopeeGetManagedAffiliateListRequest, config: ShopeeConfig): Promise<ShopeeGetManagedAffiliateListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetManagedAffiliateListResponse>('/ams/get_managed_affiliate_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getManagedAffiliateList',
  });
}

/**
 * getOpenCampaignAddedProduct via Shopee `v2.ams.get_open_campaign_added_product`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOpenCampaignAddedProduct(params: ShopeeGetOpenCampaignAddedProductRequest, config: ShopeeConfig): Promise<ShopeeGetOpenCampaignAddedProductResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOpenCampaignAddedProductResponse>('/ams/get_open_campaign_added_product', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOpenCampaignAddedProduct',
  });
}

/**
 * getOpenCampaignBatchTaskResult via Shopee `v2.ams.get_open_campaign_batch_task_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOpenCampaignBatchTaskResult(params: ShopeeGetOpenCampaignBatchTaskResultRequest, config: ShopeeConfig): Promise<ShopeeGetOpenCampaignBatchTaskResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOpenCampaignBatchTaskResultResponse>('/ams/get_open_campaign_batch_task_result', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOpenCampaignBatchTaskResult',
  });
}

/**
 * getOpenCampaignNotAddedProduct via Shopee `v2.ams.get_open_campaign_not_added_product`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOpenCampaignNotAddedProduct(params: ShopeeGetOpenCampaignNotAddedProductRequest, config: ShopeeConfig): Promise<ShopeeGetOpenCampaignNotAddedProductResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOpenCampaignNotAddedProductResponse>('/ams/get_open_campaign_not_added_product', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOpenCampaignNotAddedProduct',
  });
}

/**
 * getOpenCampaignPerformance via Shopee `v2.ams.get_open_campaign_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOpenCampaignPerformance(params: ShopeeGetOpenCampaignPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetOpenCampaignPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOpenCampaignPerformanceResponse>('/ams/get_open_campaign_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOpenCampaignPerformance',
  });
}

/**
 * getOptimizationSuggestionProduct via Shopee `v2.ams.get_optimization_suggestion_product`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOptimizationSuggestionProduct(params: ShopeeGetOptimizationSuggestionProductRequest, config: ShopeeConfig): Promise<ShopeeGetOptimizationSuggestionProductResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOptimizationSuggestionProductResponse>('/ams/get_optimization_suggestion_product', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOptimizationSuggestionProduct',
  });
}

/**
 * getPerformanceDataUpdateTime via Shopee `v2.ams.get_performance_data_update_time`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPerformanceDataUpdateTime(params: ShopeeGetPerformanceDataUpdateTimeRequest, config: ShopeeConfig): Promise<ShopeeGetPerformanceDataUpdateTimeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPerformanceDataUpdateTimeResponse>('/ams/get_performance_data_update_time', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPerformanceDataUpdateTime',
  });
}

/**
 * getProductPerformance via Shopee `v2.ams.get_product_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductPerformance(params: ShopeeGetProductPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetProductPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductPerformanceResponse>('/ams/get_product_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductPerformance',
  });
}

/**
 * getRecommendedAffiliateList via Shopee `v2.ams.get_recommended_affiliate_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecommendedAffiliateList(params: ShopeeGetRecommendedAffiliateListRequest, config: ShopeeConfig): Promise<ShopeeGetRecommendedAffiliateListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecommendedAffiliateListResponse>('/ams/get_recommended_affiliate_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecommendedAffiliateList',
  });
}

/**
 * getShopPerformance via Shopee `v2.ams.get_shop_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopPerformance(params: ShopeeGetShopPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetShopPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopPerformanceResponse>('/ams/get_shop_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopPerformance',
  });
}

/**
 * getShopSuggestedRate via Shopee `v2.ams.get_shop_suggested_rate`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopSuggestedRate(config: ShopeeConfig): Promise<ShopeeGetShopSuggestedRateResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopSuggestedRateResponse>('/ams/get_shop_suggested_rate', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopSuggestedRate',
  });
}

/**
 * getTargetedCampaignAddableProductList via Shopee `v2.ams.get_targeted_campaign_addable_product_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTargetedCampaignAddableProductList(params: ShopeeGetTargetedCampaignAddableProductListRequest, config: ShopeeConfig): Promise<ShopeeGetTargetedCampaignAddableProductListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTargetedCampaignAddableProductListResponse>('/ams/get_targeted_campaign_addable_product_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTargetedCampaignAddableProductList',
  });
}

/**
 * getTargetedCampaignList via Shopee `v2.ams.get_targeted_campaign_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTargetedCampaignList(params: ShopeeGetTargetedCampaignListRequest, config: ShopeeConfig): Promise<ShopeeGetTargetedCampaignListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTargetedCampaignListResponse>('/ams/get_targeted_campaign_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTargetedCampaignList',
  });
}

/**
 * getTargetedCampaignPerformance via Shopee `v2.ams.get_targeted_campaign_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTargetedCampaignPerformance(params: ShopeeGetTargetedCampaignPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetTargetedCampaignPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTargetedCampaignPerformanceResponse>('/ams/get_targeted_campaign_performance', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTargetedCampaignPerformance',
  });
}

/**
 * getTargetedCampaignSettings via Shopee `v2.ams.get_targeted_campaign_settings`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTargetedCampaignSettings(params: ShopeeGetTargetedCampaignSettingsRequest, config: ShopeeConfig): Promise<ShopeeGetTargetedCampaignSettingsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTargetedCampaignSettingsResponse>('/ams/get_targeted_campaign_settings', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTargetedCampaignSettings',
  });
}

/**
 * getValidationList via Shopee `v2.ams.get_validation_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getValidationList(config: ShopeeConfig): Promise<ShopeeGetValidationListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetValidationListResponse>('/ams/get_validation_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getValidationList',
  });
}

/**
 * getValidationReport via Shopee `v2.ams.get_validation_report`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getValidationReport(params: ShopeeGetValidationReportRequest, config: ShopeeConfig): Promise<ShopeeGetValidationReportResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetValidationReportResponse>('/ams/get_validation_report', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getValidationReport',
  });
}

/**
 * queryAffiliateList via Shopee `v2.ams.query_affiliate_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryAffiliateList(params: ShopeeQueryAffiliateListRequest, config: ShopeeConfig): Promise<ShopeeQueryAffiliateListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryAffiliateListResponse>('/ams/query_affiliate_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryAffiliateList',
  });
}

/**
 * removeAllProductsOpenCampaignSetting via Shopee `v2.ams.remove_all_products_open_campaign_setting`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function removeAllProductsOpenCampaignSetting(config: ShopeeConfig): Promise<ShopeeRemoveAllProductsOpenCampaignSettingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeRemoveAllProductsOpenCampaignSettingResponse>('/ams/remove_all_products_open_campaign_setting', config, {
    method: 'POST',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'removeAllProductsOpenCampaignSetting',
  });
}

/**
 * terminateTargetedCampaign via Shopee `v2.ams.terminate_targeted_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function terminateTargetedCampaign(params: ShopeeTerminateTargetedCampaignRequest, config: ShopeeConfig): Promise<ShopeeTerminateTargetedCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeTerminateTargetedCampaignResponse>('/ams/terminate_targeted_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'terminateTargetedCampaign',
  });
}

/**
 * updateAutoAddNewProductSetting via Shopee `v2.ams.update_auto_add_new_product_setting`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateAutoAddNewProductSetting(params: ShopeeUpdateAutoAddNewProductSettingRequest, config: ShopeeConfig): Promise<ShopeeUpdateAutoAddNewProductSettingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateAutoAddNewProductSettingResponse>('/ams/update_auto_add_new_product_setting', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateAutoAddNewProductSetting',
  });
}

/**
 * updateBasicInfoOfTargetedCampaign via Shopee `v2.ams.update_basic_info_of_targeted_campaign`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateBasicInfoOfTargetedCampaign(params: ShopeeUpdateBasicInfoOfTargetedCampaignRequest, config: ShopeeConfig): Promise<ShopeeUpdateBasicInfoOfTargetedCampaignResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateBasicInfoOfTargetedCampaignResponse>('/ams/update_basic_info_of_targeted_campaign', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateBasicInfoOfTargetedCampaign',
  });
}
