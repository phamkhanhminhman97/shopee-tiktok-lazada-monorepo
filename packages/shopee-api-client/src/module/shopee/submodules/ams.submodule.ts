import { ShopeeConfig } from '../dto/request/config.request';
import {
  addAllProductsToOpenCampaign,
  batchAddProductsToOpenCampaign,
  batchEditProductsOpenCampaignSetting,
  batchGetProductsSuggestedRate,
  batchRemoveProductsOpenCampaignSetting,
  createNewTargetedCampaign,
  editAffiliateListOfTargetedCampaign,
  editAllProductsOpenCampaignSetting,
  editProductListOfTargetedCampaign,
  getAffiliatePerformance,
  getAutoAddNewProductToggleStatus,
  getCampaignKeyMetricsPerformance,
  getContentPerformance,
  getConversionReport,
  getManagedAffiliateList,
  getOpenCampaignAddedProduct,
  getOpenCampaignBatchTaskResult,
  getOpenCampaignNotAddedProduct,
  getOpenCampaignPerformance,
  getOptimizationSuggestionProduct,
  getPerformanceDataUpdateTime,
  getProductPerformance,
  getRecommendedAffiliateList,
  getShopPerformance,
  getShopSuggestedRate,
  getTargetedCampaignAddableProductList,
  getTargetedCampaignList,
  getTargetedCampaignPerformance,
  getTargetedCampaignSettings,
  getValidationList,
  getValidationReport,
  queryAffiliateList,
  removeAllProductsOpenCampaignSetting,
  terminateTargetedCampaign,
  updateAutoAddNewProductSetting,
  updateBasicInfoOfTargetedCampaign,
} from '../api/ams.api';
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
 * Shopee `v2.ams.*` API namespace.
 *
 * Access via `shopee.ams.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeAms {
  constructor(private config: ShopeeConfig) {}

  async addAllProductsToOpenCampaign(params: ShopeeAddAllProductsToOpenCampaignRequest): Promise<ShopeeAddAllProductsToOpenCampaignResponse> {
    return await addAllProductsToOpenCampaign(params, this.config);
  }

  async batchAddProductsToOpenCampaign(params: ShopeeBatchAddProductsToOpenCampaignRequest): Promise<ShopeeBatchAddProductsToOpenCampaignResponse> {
    return await batchAddProductsToOpenCampaign(params, this.config);
  }

  async batchEditProductsOpenCampaignSetting(params: ShopeeBatchEditProductsOpenCampaignSettingRequest): Promise<ShopeeBatchEditProductsOpenCampaignSettingResponse> {
    return await batchEditProductsOpenCampaignSetting(params, this.config);
  }

  async batchGetProductsSuggestedRate(params: ShopeeBatchGetProductsSuggestedRateRequest): Promise<ShopeeBatchGetProductsSuggestedRateResponse> {
    return await batchGetProductsSuggestedRate(params, this.config);
  }

  async batchRemoveProductsOpenCampaignSetting(params: ShopeeBatchRemoveProductsOpenCampaignSettingRequest): Promise<ShopeeBatchRemoveProductsOpenCampaignSettingResponse> {
    return await batchRemoveProductsOpenCampaignSetting(params, this.config);
  }

  async createNewTargetedCampaign(params: ShopeeCreateNewTargetedCampaignRequest): Promise<ShopeeCreateNewTargetedCampaignResponse> {
    return await createNewTargetedCampaign(params, this.config);
  }

  async editAffiliateListOfTargetedCampaign(params: ShopeeEditAffiliateListOfTargetedCampaignRequest): Promise<ShopeeEditAffiliateListOfTargetedCampaignResponse> {
    return await editAffiliateListOfTargetedCampaign(params, this.config);
  }

  async editAllProductsOpenCampaignSetting(params: ShopeeEditAllProductsOpenCampaignSettingRequest = {}): Promise<ShopeeEditAllProductsOpenCampaignSettingResponse> {
    return await editAllProductsOpenCampaignSetting(params, this.config);
  }

  async editProductListOfTargetedCampaign(params: ShopeeEditProductListOfTargetedCampaignRequest): Promise<ShopeeEditProductListOfTargetedCampaignResponse> {
    return await editProductListOfTargetedCampaign(params, this.config);
  }

  async getAffiliatePerformance(params: ShopeeGetAffiliatePerformanceRequest): Promise<ShopeeGetAffiliatePerformanceResponse> {
    return await getAffiliatePerformance(params, this.config);
  }

  async getAutoAddNewProductToggleStatus(): Promise<ShopeeGetAutoAddNewProductToggleStatusResponse> {
    return await getAutoAddNewProductToggleStatus(this.config);
  }

  async getCampaignKeyMetricsPerformance(params: ShopeeGetCampaignKeyMetricsPerformanceRequest): Promise<ShopeeGetCampaignKeyMetricsPerformanceResponse> {
    return await getCampaignKeyMetricsPerformance(params, this.config);
  }

  async getContentPerformance(params: ShopeeGetContentPerformanceRequest): Promise<ShopeeGetContentPerformanceResponse> {
    return await getContentPerformance(params, this.config);
  }

  async getConversionReport(params: ShopeeGetConversionReportRequest): Promise<ShopeeGetConversionReportResponse> {
    return await getConversionReport(params, this.config);
  }

  async getManagedAffiliateList(params: ShopeeGetManagedAffiliateListRequest): Promise<ShopeeGetManagedAffiliateListResponse> {
    return await getManagedAffiliateList(params, this.config);
  }

  async getOpenCampaignAddedProduct(params: ShopeeGetOpenCampaignAddedProductRequest): Promise<ShopeeGetOpenCampaignAddedProductResponse> {
    return await getOpenCampaignAddedProduct(params, this.config);
  }

  async getOpenCampaignBatchTaskResult(params: ShopeeGetOpenCampaignBatchTaskResultRequest): Promise<ShopeeGetOpenCampaignBatchTaskResultResponse> {
    return await getOpenCampaignBatchTaskResult(params, this.config);
  }

  async getOpenCampaignNotAddedProduct(params: ShopeeGetOpenCampaignNotAddedProductRequest): Promise<ShopeeGetOpenCampaignNotAddedProductResponse> {
    return await getOpenCampaignNotAddedProduct(params, this.config);
  }

  async getOpenCampaignPerformance(params: ShopeeGetOpenCampaignPerformanceRequest): Promise<ShopeeGetOpenCampaignPerformanceResponse> {
    return await getOpenCampaignPerformance(params, this.config);
  }

  async getOptimizationSuggestionProduct(params: ShopeeGetOptimizationSuggestionProductRequest): Promise<ShopeeGetOptimizationSuggestionProductResponse> {
    return await getOptimizationSuggestionProduct(params, this.config);
  }

  async getPerformanceDataUpdateTime(params: ShopeeGetPerformanceDataUpdateTimeRequest): Promise<ShopeeGetPerformanceDataUpdateTimeResponse> {
    return await getPerformanceDataUpdateTime(params, this.config);
  }

  async getProductPerformance(params: ShopeeGetProductPerformanceRequest): Promise<ShopeeGetProductPerformanceResponse> {
    return await getProductPerformance(params, this.config);
  }

  async getRecommendedAffiliateList(params: ShopeeGetRecommendedAffiliateListRequest): Promise<ShopeeGetRecommendedAffiliateListResponse> {
    return await getRecommendedAffiliateList(params, this.config);
  }

  async getShopPerformance(params: ShopeeGetShopPerformanceRequest): Promise<ShopeeGetShopPerformanceResponse> {
    return await getShopPerformance(params, this.config);
  }

  async getShopSuggestedRate(): Promise<ShopeeGetShopSuggestedRateResponse> {
    return await getShopSuggestedRate(this.config);
  }

  async getTargetedCampaignAddableProductList(params: ShopeeGetTargetedCampaignAddableProductListRequest): Promise<ShopeeGetTargetedCampaignAddableProductListResponse> {
    return await getTargetedCampaignAddableProductList(params, this.config);
  }

  async getTargetedCampaignList(params: ShopeeGetTargetedCampaignListRequest): Promise<ShopeeGetTargetedCampaignListResponse> {
    return await getTargetedCampaignList(params, this.config);
  }

  async getTargetedCampaignPerformance(params: ShopeeGetTargetedCampaignPerformanceRequest): Promise<ShopeeGetTargetedCampaignPerformanceResponse> {
    return await getTargetedCampaignPerformance(params, this.config);
  }

  async getTargetedCampaignSettings(params: ShopeeGetTargetedCampaignSettingsRequest): Promise<ShopeeGetTargetedCampaignSettingsResponse> {
    return await getTargetedCampaignSettings(params, this.config);
  }

  async getValidationList(): Promise<ShopeeGetValidationListResponse> {
    return await getValidationList(this.config);
  }

  async getValidationReport(params: ShopeeGetValidationReportRequest): Promise<ShopeeGetValidationReportResponse> {
    return await getValidationReport(params, this.config);
  }

  async queryAffiliateList(params: ShopeeQueryAffiliateListRequest): Promise<ShopeeQueryAffiliateListResponse> {
    return await queryAffiliateList(params, this.config);
  }

  async removeAllProductsOpenCampaignSetting(): Promise<ShopeeRemoveAllProductsOpenCampaignSettingResponse> {
    return await removeAllProductsOpenCampaignSetting(this.config);
  }

  async terminateTargetedCampaign(params: ShopeeTerminateTargetedCampaignRequest): Promise<ShopeeTerminateTargetedCampaignResponse> {
    return await terminateTargetedCampaign(params, this.config);
  }

  async updateAutoAddNewProductSetting(params: ShopeeUpdateAutoAddNewProductSettingRequest): Promise<ShopeeUpdateAutoAddNewProductSettingResponse> {
    return await updateAutoAddNewProductSetting(params, this.config);
  }

  async updateBasicInfoOfTargetedCampaign(params: ShopeeUpdateBasicInfoOfTargetedCampaignRequest): Promise<ShopeeUpdateBasicInfoOfTargetedCampaignResponse> {
    return await updateBasicInfoOfTargetedCampaign(params, this.config);
  }
}
