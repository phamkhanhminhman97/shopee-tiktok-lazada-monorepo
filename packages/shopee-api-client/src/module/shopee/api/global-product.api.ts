import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * addGlobalItem via Shopee `v2.global_product.add_global_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addGlobalItem(params: ShopeeAddGlobalItemRequest, config: ShopeeConfig): Promise<ShopeeAddGlobalItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddGlobalItemResponse>('/global_product/add_global_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addGlobalItem',
  });
}

/**
 * addGlobalModel via Shopee `v2.global_product.add_global_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addGlobalModel(params: ShopeeAddGlobalModelRequest, config: ShopeeConfig): Promise<ShopeeAddGlobalModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddGlobalModelResponse>('/global_product/add_global_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addGlobalModel',
  });
}

/**
 * categoryRecommend via Shopee `v2.global_product.category_recommend`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function categoryRecommend(params: ShopeeCategoryRecommendRequest, config: ShopeeConfig): Promise<ShopeeCategoryRecommendResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCategoryRecommendResponse>('/global_product/category_recommend', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'categoryRecommend',
  });
}

/**
 * createPublishTask via Shopee `v2.global_product.create_publish_task`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createPublishTask(params: ShopeeCreatePublishTaskRequest, config: ShopeeConfig): Promise<ShopeeCreatePublishTaskResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreatePublishTaskResponse>('/global_product/create_publish_task', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createPublishTask',
  });
}

/**
 * deleteGlobalItem via Shopee `v2.global_product.delete_global_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteGlobalItem(params: ShopeeDeleteGlobalItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteGlobalItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteGlobalItemResponse>('/global_product/delete_global_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteGlobalItem',
  });
}

/**
 * deleteGlobalModel via Shopee `v2.global_product.delete_global_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteGlobalModel(params: ShopeeDeleteGlobalModelRequest, config: ShopeeConfig): Promise<ShopeeDeleteGlobalModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteGlobalModelResponse>('/global_product/delete_global_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteGlobalModel',
  });
}

/**
 * getAttributeTree via Shopee `v2.global_product.get_attribute_tree`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAttributeTree(params: ShopeeGetAttributeTreeRequest, config: ShopeeConfig): Promise<ShopeeGetAttributeTreeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAttributeTreeResponse>('/global_product/get_attribute_tree', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAttributeTree',
  });
}

/**
 * getBrandList via Shopee `v2.global_product.get_brand_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBrandList(params: ShopeeGetBrandListRequest, config: ShopeeConfig): Promise<ShopeeGetBrandListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBrandListResponse>('/global_product/get_brand_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBrandList',
  });
}

/**
 * getCategory via Shopee `v2.global_product.get_category`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCategory(params: ShopeeGetCategoryRequest = {}, config: ShopeeConfig): Promise<ShopeeGetCategoryResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCategoryResponse>('/global_product/get_category', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCategory',
  });
}

/**
 * getGlobalItemId via Shopee `v2.global_product.get_global_item_id`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGlobalItemId(params: ShopeeGetGlobalItemIdRequest, config: ShopeeConfig): Promise<ShopeeGetGlobalItemIdResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGlobalItemIdResponse>('/global_product/get_global_item_id', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGlobalItemId',
  });
}

/**
 * getGlobalItemInfo via Shopee `v2.global_product.get_global_item_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGlobalItemInfo(params: ShopeeGetGlobalItemInfoRequest, config: ShopeeConfig): Promise<ShopeeGetGlobalItemInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGlobalItemInfoResponse>('/global_product/get_global_item_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGlobalItemInfo',
  });
}

/**
 * getGlobalItemLimit via Shopee `v2.global_product.get_global_item_limit`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGlobalItemLimit(params: ShopeeGetGlobalItemLimitRequest = {}, config: ShopeeConfig): Promise<ShopeeGetGlobalItemLimitResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGlobalItemLimitResponse>('/global_product/get_global_item_limit', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGlobalItemLimit',
  });
}

/**
 * getGlobalItemList via Shopee `v2.global_product.get_global_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGlobalItemList(params: ShopeeGetGlobalItemListRequest, config: ShopeeConfig): Promise<ShopeeGetGlobalItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGlobalItemListResponse>('/global_product/get_global_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGlobalItemList',
  });
}

/**
 * getGlobalModelList via Shopee `v2.global_product.get_global_model_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getGlobalModelList(params: ShopeeGetGlobalModelListRequest, config: ShopeeConfig): Promise<ShopeeGetGlobalModelListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetGlobalModelListResponse>('/global_product/get_global_model_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getGlobalModelList',
  });
}

/**
 * getLocalAdjustmentRate via Shopee `v2.global_product.get_local_adjustment_rate`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getLocalAdjustmentRate(params: ShopeeGetLocalAdjustmentRateRequest, config: ShopeeConfig): Promise<ShopeeGetLocalAdjustmentRateResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetLocalAdjustmentRateResponse>('/global_product/get_local_adjustment_rate', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getLocalAdjustmentRate',
  });
}

/**
 * getPublishTaskResult via Shopee `v2.global_product.get_publish_task_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPublishTaskResult(params: ShopeeGetPublishTaskResultRequest, config: ShopeeConfig): Promise<ShopeeGetPublishTaskResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPublishTaskResultResponse>('/global_product/get_publish_task_result', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPublishTaskResult',
  });
}

/**
 * getPublishableShop via Shopee `v2.global_product.get_publishable_shop`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPublishableShop(params: ShopeeGetPublishableShopRequest, config: ShopeeConfig): Promise<ShopeeGetPublishableShopResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPublishableShopResponse>('/global_product/get_publishable_shop', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPublishableShop',
  });
}

/**
 * getPublishedList via Shopee `v2.global_product.get_published_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPublishedList(params: ShopeeGetPublishedListRequest, config: ShopeeConfig): Promise<ShopeeGetPublishedListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPublishedListResponse>('/global_product/get_published_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPublishedList',
  });
}

/**
 * getRecommendAttribute via Shopee `v2.global_product.get_recommend_attribute`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecommendAttribute(params: ShopeeGetRecommendAttributeRequest, config: ShopeeConfig): Promise<ShopeeGetRecommendAttributeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecommendAttributeResponse>('/global_product/get_recommend_attribute', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecommendAttribute',
  });
}

/**
 * getShopPublishableStatus via Shopee `v2.global_product.get_shop_publishable_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopPublishableStatus(params: ShopeeGetShopPublishableStatusRequest, config: ShopeeConfig): Promise<ShopeeGetShopPublishableStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopPublishableStatusResponse>('/global_product/get_shop_publishable_status', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopPublishableStatus',
  });
}

/**
 * getSizeChartDetail via Shopee `v2.global_product.get_size_chart_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSizeChartDetail(params: ShopeeGetSizeChartDetailRequest, config: ShopeeConfig): Promise<ShopeeGetSizeChartDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSizeChartDetailResponse>('/global_product/get_size_chart_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSizeChartDetail',
  });
}

/**
 * getSizeChartList via Shopee `v2.global_product.get_size_chart_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSizeChartList(params: ShopeeGetSizeChartListRequest, config: ShopeeConfig): Promise<ShopeeGetSizeChartListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSizeChartListResponse>('/global_product/get_size_chart_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSizeChartList',
  });
}

/**
 * getVariations via Shopee `v2.global_product.get_variations`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVariations(params: ShopeeGetVariationsRequest, config: ShopeeConfig): Promise<ShopeeGetVariationsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVariationsResponse>('/global_product/get_variations', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVariations',
  });
}

/**
 * initTierVariation via Shopee `v2.global_product.init_tier_variation`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function initTierVariation(params: ShopeeInitTierVariationRequest, config: ShopeeConfig): Promise<ShopeeInitTierVariationResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeInitTierVariationResponse>('/global_product/init_tier_variation', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'initTierVariation',
  });
}

/**
 * searchGlobalAttributeValueList via Shopee `v2.global_product.search_global_attribute_value_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function searchGlobalAttributeValueList(params: ShopeeSearchGlobalAttributeValueListRequest, config: ShopeeConfig): Promise<ShopeeSearchGlobalAttributeValueListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSearchGlobalAttributeValueListResponse>('/global_product/search_global_attribute_value_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'searchGlobalAttributeValueList',
  });
}

/**
 * setSyncField via Shopee `v2.global_product.set_sync_field`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setSyncField(params: ShopeeSetSyncFieldRequest, config: ShopeeConfig): Promise<ShopeeSetSyncFieldResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetSyncFieldResponse>('/global_product/set_sync_field', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setSyncField',
  });
}

/**
 * supportSizeChart via Shopee `v2.global_product.support_size_chart`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function supportSizeChart(params: ShopeeSupportSizeChartRequest, config: ShopeeConfig): Promise<ShopeeSupportSizeChartResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSupportSizeChartResponse>('/global_product/support_size_chart', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'supportSizeChart',
  });
}

/**
 * updateGlobalItem via Shopee `v2.global_product.update_global_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateGlobalItem(params: ShopeeUpdateGlobalItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateGlobalItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateGlobalItemResponse>('/global_product/update_global_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateGlobalItem',
  });
}

/**
 * updateGlobalModel via Shopee `v2.global_product.update_global_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateGlobalModel(params: ShopeeUpdateGlobalModelRequest, config: ShopeeConfig): Promise<ShopeeUpdateGlobalModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateGlobalModelResponse>('/global_product/update_global_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateGlobalModel',
  });
}

/**
 * updateLocalAdjustmentRate via Shopee `v2.global_product.update_local_adjustment_rate`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateLocalAdjustmentRate(params: ShopeeUpdateLocalAdjustmentRateRequest, config: ShopeeConfig): Promise<ShopeeUpdateLocalAdjustmentRateResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateLocalAdjustmentRateResponse>('/global_product/update_local_adjustment_rate', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateLocalAdjustmentRate',
  });
}

/**
 * updatePrice via Shopee `v2.global_product.update_price`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updatePrice(params: ShopeeUpdatePriceRequest, config: ShopeeConfig): Promise<ShopeeUpdatePriceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdatePriceResponse>('/global_product/update_price', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updatePrice',
  });
}

/**
 * updateSizeChart via Shopee `v2.global_product.update_size_chart`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateSizeChart(params: ShopeeUpdateSizeChartRequest, config: ShopeeConfig): Promise<ShopeeUpdateSizeChartResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateSizeChartResponse>('/global_product/update_size_chart', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateSizeChart',
  });
}

/**
 * updateStock via Shopee `v2.global_product.update_stock`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateStock(params: ShopeeUpdateStockRequest, config: ShopeeConfig): Promise<ShopeeUpdateStockResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateStockResponse>('/global_product/update_stock', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateStock',
  });
}

/**
 * updateTierVariation via Shopee `v2.global_product.update_tier_variation`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateTierVariation(params: ShopeeUpdateTierVariationRequest, config: ShopeeConfig): Promise<ShopeeUpdateTierVariationResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateTierVariationResponse>('/global_product/update_tier_variation', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateTierVariation',
  });
}
