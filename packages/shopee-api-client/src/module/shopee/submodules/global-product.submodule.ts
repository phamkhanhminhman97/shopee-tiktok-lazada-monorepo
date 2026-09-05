import { ShopeeConfig } from '../dto/request/config.request';
import {
  addGlobalItem,
  addGlobalModel,
  categoryRecommend,
  createPublishTask,
  deleteGlobalItem,
  deleteGlobalModel,
  getAttributeTree,
  getBrandList,
  getCategory,
  getGlobalItemId,
  getGlobalItemInfo,
  getGlobalItemLimit,
  getGlobalItemList,
  getGlobalModelList,
  getLocalAdjustmentRate,
  getPublishTaskResult,
  getPublishableShop,
  getPublishedList,
  getRecommendAttribute,
  getShopPublishableStatus,
  getSizeChartDetail,
  getSizeChartList,
  getVariations,
  initTierVariation,
  searchGlobalAttributeValueList,
  setSyncField,
  supportSizeChart,
  updateGlobalItem,
  updateGlobalModel,
  updateLocalAdjustmentRate,
  updatePrice,
  updateSizeChart,
  updateStock,
  updateTierVariation,
} from '../api/global-product.api';
import {
  ShopeeAddGlobalItemRequest,
  ShopeeAddGlobalModelRequest,
  ShopeeCategoryRecommendRequest,
  ShopeeCreatePublishTaskRequest,
  ShopeeDeleteGlobalItemRequest,
  ShopeeDeleteGlobalModelRequest,
  ShopeeGetAttributeTreeRequest,
  ShopeeGetBrandListRequest,
  ShopeeGetCategoryRequest,
  ShopeeGetGlobalItemIdRequest,
  ShopeeGetGlobalItemInfoRequest,
  ShopeeGetGlobalItemLimitRequest,
  ShopeeGetGlobalItemListRequest,
  ShopeeGetGlobalModelListRequest,
  ShopeeGetLocalAdjustmentRateRequest,
  ShopeeGetPublishTaskResultRequest,
  ShopeeGetPublishableShopRequest,
  ShopeeGetPublishedListRequest,
  ShopeeGetRecommendAttributeRequest,
  ShopeeGetShopPublishableStatusRequest,
  ShopeeGetSizeChartDetailRequest,
  ShopeeGetSizeChartListRequest,
  ShopeeGetVariationsRequest,
  ShopeeInitTierVariationRequest,
  ShopeeSearchGlobalAttributeValueListRequest,
  ShopeeSetSyncFieldRequest,
  ShopeeSupportSizeChartRequest,
  ShopeeUpdateGlobalItemRequest,
  ShopeeUpdateGlobalModelRequest,
  ShopeeUpdateLocalAdjustmentRateRequest,
  ShopeeUpdatePriceRequest,
  ShopeeUpdateSizeChartRequest,
  ShopeeUpdateStockRequest,
  ShopeeUpdateTierVariationRequest,
} from '../dto/request/global-product.request';
import {
  ShopeeAddGlobalItemResponse,
  ShopeeAddGlobalModelResponse,
  ShopeeCategoryRecommendResponse,
  ShopeeCreatePublishTaskResponse,
  ShopeeDeleteGlobalItemResponse,
  ShopeeDeleteGlobalModelResponse,
  ShopeeGetAttributeTreeResponse,
  ShopeeGetBrandListResponse,
  ShopeeGetCategoryResponse,
  ShopeeGetGlobalItemIdResponse,
  ShopeeGetGlobalItemInfoResponse,
  ShopeeGetGlobalItemLimitResponse,
  ShopeeGetGlobalItemListResponse,
  ShopeeGetGlobalModelListResponse,
  ShopeeGetLocalAdjustmentRateResponse,
  ShopeeGetPublishTaskResultResponse,
  ShopeeGetPublishableShopResponse,
  ShopeeGetPublishedListResponse,
  ShopeeGetRecommendAttributeResponse,
  ShopeeGetShopPublishableStatusResponse,
  ShopeeGetSizeChartDetailResponse,
  ShopeeGetSizeChartListResponse,
  ShopeeGetVariationsResponse,
  ShopeeInitTierVariationResponse,
  ShopeeSearchGlobalAttributeValueListResponse,
  ShopeeSetSyncFieldResponse,
  ShopeeSupportSizeChartResponse,
  ShopeeUpdateGlobalItemResponse,
  ShopeeUpdateGlobalModelResponse,
  ShopeeUpdateLocalAdjustmentRateResponse,
  ShopeeUpdatePriceResponse,
  ShopeeUpdateSizeChartResponse,
  ShopeeUpdateStockResponse,
  ShopeeUpdateTierVariationResponse,
} from '../dto/response/global-product.response';

/**
 * Shopee `v2.global_product.*` API namespace.
 *
 * Access via `shopee.globalProduct.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeGlobalProduct {
  constructor(private config: ShopeeConfig) {}

  async addGlobalItem(params: ShopeeAddGlobalItemRequest): Promise<ShopeeAddGlobalItemResponse> {
    return await addGlobalItem(params, this.config);
  }

  async addGlobalModel(params: ShopeeAddGlobalModelRequest): Promise<ShopeeAddGlobalModelResponse> {
    return await addGlobalModel(params, this.config);
  }

  async categoryRecommend(params: ShopeeCategoryRecommendRequest): Promise<ShopeeCategoryRecommendResponse> {
    return await categoryRecommend(params, this.config);
  }

  async createPublishTask(params: ShopeeCreatePublishTaskRequest): Promise<ShopeeCreatePublishTaskResponse> {
    return await createPublishTask(params, this.config);
  }

  async deleteGlobalItem(params: ShopeeDeleteGlobalItemRequest): Promise<ShopeeDeleteGlobalItemResponse> {
    return await deleteGlobalItem(params, this.config);
  }

  async deleteGlobalModel(params: ShopeeDeleteGlobalModelRequest): Promise<ShopeeDeleteGlobalModelResponse> {
    return await deleteGlobalModel(params, this.config);
  }

  async getAttributeTree(params: ShopeeGetAttributeTreeRequest): Promise<ShopeeGetAttributeTreeResponse> {
    return await getAttributeTree(params, this.config);
  }

  async getBrandList(params: ShopeeGetBrandListRequest): Promise<ShopeeGetBrandListResponse> {
    return await getBrandList(params, this.config);
  }

  async getCategory(params: ShopeeGetCategoryRequest = {}): Promise<ShopeeGetCategoryResponse> {
    return await getCategory(params, this.config);
  }

  async getGlobalItemId(params: ShopeeGetGlobalItemIdRequest): Promise<ShopeeGetGlobalItemIdResponse> {
    return await getGlobalItemId(params, this.config);
  }

  async getGlobalItemInfo(params: ShopeeGetGlobalItemInfoRequest): Promise<ShopeeGetGlobalItemInfoResponse> {
    return await getGlobalItemInfo(params, this.config);
  }

  async getGlobalItemLimit(params: ShopeeGetGlobalItemLimitRequest = {}): Promise<ShopeeGetGlobalItemLimitResponse> {
    return await getGlobalItemLimit(params, this.config);
  }

  async getGlobalItemList(params: ShopeeGetGlobalItemListRequest): Promise<ShopeeGetGlobalItemListResponse> {
    return await getGlobalItemList(params, this.config);
  }

  async getGlobalModelList(params: ShopeeGetGlobalModelListRequest): Promise<ShopeeGetGlobalModelListResponse> {
    return await getGlobalModelList(params, this.config);
  }

  async getLocalAdjustmentRate(params: ShopeeGetLocalAdjustmentRateRequest): Promise<ShopeeGetLocalAdjustmentRateResponse> {
    return await getLocalAdjustmentRate(params, this.config);
  }

  async getPublishTaskResult(params: ShopeeGetPublishTaskResultRequest): Promise<ShopeeGetPublishTaskResultResponse> {
    return await getPublishTaskResult(params, this.config);
  }

  async getPublishableShop(params: ShopeeGetPublishableShopRequest): Promise<ShopeeGetPublishableShopResponse> {
    return await getPublishableShop(params, this.config);
  }

  async getPublishedList(params: ShopeeGetPublishedListRequest): Promise<ShopeeGetPublishedListResponse> {
    return await getPublishedList(params, this.config);
  }

  async getRecommendAttribute(params: ShopeeGetRecommendAttributeRequest): Promise<ShopeeGetRecommendAttributeResponse> {
    return await getRecommendAttribute(params, this.config);
  }

  async getShopPublishableStatus(params: ShopeeGetShopPublishableStatusRequest): Promise<ShopeeGetShopPublishableStatusResponse> {
    return await getShopPublishableStatus(params, this.config);
  }

  async getSizeChartDetail(params: ShopeeGetSizeChartDetailRequest): Promise<ShopeeGetSizeChartDetailResponse> {
    return await getSizeChartDetail(params, this.config);
  }

  async getSizeChartList(params: ShopeeGetSizeChartListRequest): Promise<ShopeeGetSizeChartListResponse> {
    return await getSizeChartList(params, this.config);
  }

  async getVariations(params: ShopeeGetVariationsRequest): Promise<ShopeeGetVariationsResponse> {
    return await getVariations(params, this.config);
  }

  async initTierVariation(params: ShopeeInitTierVariationRequest): Promise<ShopeeInitTierVariationResponse> {
    return await initTierVariation(params, this.config);
  }

  async searchGlobalAttributeValueList(params: ShopeeSearchGlobalAttributeValueListRequest): Promise<ShopeeSearchGlobalAttributeValueListResponse> {
    return await searchGlobalAttributeValueList(params, this.config);
  }

  async setSyncField(params: ShopeeSetSyncFieldRequest): Promise<ShopeeSetSyncFieldResponse> {
    return await setSyncField(params, this.config);
  }

  async supportSizeChart(params: ShopeeSupportSizeChartRequest): Promise<ShopeeSupportSizeChartResponse> {
    return await supportSizeChart(params, this.config);
  }

  async updateGlobalItem(params: ShopeeUpdateGlobalItemRequest): Promise<ShopeeUpdateGlobalItemResponse> {
    return await updateGlobalItem(params, this.config);
  }

  async updateGlobalModel(params: ShopeeUpdateGlobalModelRequest): Promise<ShopeeUpdateGlobalModelResponse> {
    return await updateGlobalModel(params, this.config);
  }

  async updateLocalAdjustmentRate(params: ShopeeUpdateLocalAdjustmentRateRequest): Promise<ShopeeUpdateLocalAdjustmentRateResponse> {
    return await updateLocalAdjustmentRate(params, this.config);
  }

  async updatePrice(params: ShopeeUpdatePriceRequest): Promise<ShopeeUpdatePriceResponse> {
    return await updatePrice(params, this.config);
  }

  async updateSizeChart(params: ShopeeUpdateSizeChartRequest): Promise<ShopeeUpdateSizeChartResponse> {
    return await updateSizeChart(params, this.config);
  }

  async updateStock(params: ShopeeUpdateStockRequest): Promise<ShopeeUpdateStockResponse> {
    return await updateStock(params, this.config);
  }

  async updateTierVariation(params: ShopeeUpdateTierVariationRequest): Promise<ShopeeUpdateTierVariationResponse> {
    return await updateTierVariation(params, this.config);
  }
}
