import * as ShopeeHelper from '../common/helper';
import { ShopeeConfig } from '../dto/request/config.request';
import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import axios from 'axios';
import {
  ShopeeResponseGetAttributes,
  ShopeeResponseGetBrandList,
  ShopeeResponseGetCategories,
  ShopeeResponseProductBaseItemInfo,
  ShopeeResponseUnlistItem,
  ShopeeResponseUpdatePrice,
  ShopeeResponseUpdateStock,
  ShopeeResponseAddItem,
  ShopeeResponseUpdateItem,
  ShopeeResponseGetModelList,
  ShopeeResponseSearchItem,
} from '../dto/response/product.response';
import {
  ShopeeRequestGetBrandList,
  ShopeeRequestUnlistItem,
  ShopeeRequestUpdatePrice,
  ShopeeRequestAddItem,
  ShopeeRequestUpdateItem,
  ShopeeRequestSearchItem,
} from '../dto/request/product.request';

/**
 *
 * @param config
 * @returns
 */
const MAX_GET_ITEM_ITERATIONS = 500;

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function assertAddItem(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[Shopee API] product request invalid: ${message}`);
  }
}

function validateAddItemRequest(body: ShopeeRequestAddItem): void {
  assertAddItem(body && typeof body === 'object', '`body` is required.');
  assertAddItem(isFiniteNumber(body.original_price), '`original_price` is required and must be a number.');
  assertAddItem(typeof body.description === 'string' && body.description.length > 0, '`description` is required.');
  assertAddItem(isFiniteNumber(body.weight), '`weight` is required and must be a number.');
  assertAddItem(typeof body.item_name === 'string' && body.item_name.length > 0, '`item_name` is required.');
  assertAddItem(isFiniteNumber(body.category_id), '`category_id` is required and must be a number.');
  assertAddItem(body.dimension, '`dimension` is required by Shopee for product package size.');
  assertAddItem(isFiniteNumber(body.dimension.package_height), '`dimension.package_height` is required and must be a number.');
  assertAddItem(isFiniteNumber(body.dimension.package_length), '`dimension.package_length` is required and must be a number.');
  assertAddItem(isFiniteNumber(body.dimension.package_width), '`dimension.package_width` is required and must be a number.');
  assertAddItem(Array.isArray(body.logistic_info) && body.logistic_info.length > 0, '`logistic_info` must contain at least one logistics channel.');
  body.logistic_info.forEach((logistic, index) => {
    assertAddItem(isFiniteNumber(logistic.logistic_id), `logistic_info[${index}].logistic_id is required and must be a number.`);
    assertAddItem(typeof logistic.enabled === 'boolean', `logistic_info[${index}].enabled is required and must be a boolean.`);
  });
  assertAddItem(body.image && Array.isArray(body.image.image_id_list) && body.image.image_id_list.length > 0, '`image.image_id_list` must contain at least one image ID.');

  if (body.description_info) {
    assertAddItem(body.description_type === 'extended', '`description_type` must be `extended` when `description_info` is provided.');
    assertAddItem(
      Array.isArray(body.description_info.extended_description?.field_list) &&
        body.description_info.extended_description.field_list.length > 0,
      '`description_info.extended_description.field_list` must contain at least one field.',
    );
  }

  if (body.video_upload_id) {
    assertAddItem(Array.isArray(body.video_upload_id), '`video_upload_id` must be an array.');
    assertAddItem(body.video_upload_id.length <= 1, '`video_upload_id` accepts only one video ID for v2.product.add_item.');
  }
}

function validateUpdateItemRequest(body: ShopeeRequestUpdateItem): void {
  assertAddItem(body && typeof body === 'object', '`body` is required.');
  assertAddItem(isFiniteNumber(body.item_id), '`item_id` is required and must be a number.');

  if (body.weight !== undefined) {
    assertAddItem(isFiniteNumber(body.weight), '`weight` must be a number.');
  }
  if (body.category_id !== undefined) {
    assertAddItem(isFiniteNumber(body.category_id), '`category_id` must be a number.');
  }
  if (body.item_name !== undefined) {
    assertAddItem(typeof body.item_name === 'string' && body.item_name.length > 0, '`item_name` must be a non-empty string.');
  }
  if (body.description !== undefined) {
    assertAddItem(typeof body.description === 'string', '`description` must be a string.');
  }

  if (body.dimension) {
    assertAddItem(isFiniteNumber(body.dimension.package_height), '`dimension.package_height` must be a number.');
    assertAddItem(isFiniteNumber(body.dimension.package_length), '`dimension.package_length` must be a number.');
    assertAddItem(isFiniteNumber(body.dimension.package_width), '`dimension.package_width` must be a number.');
  }

  if (body.logistic_info) {
    assertAddItem(Array.isArray(body.logistic_info), '`logistic_info` must be an array.');
    body.logistic_info.forEach((logistic, index) => {
      assertAddItem(isFiniteNumber(logistic.logistic_id), `logistic_info[${index}].logistic_id is required and must be a number.`);
      assertAddItem(typeof logistic.enabled === 'boolean', `logistic_info[${index}].enabled is required and must be a boolean.`);
    });
  }

  if (body.image) {
    assertAddItem(Array.isArray(body.image.image_id_list), '`image.image_id_list` must be an array.');
  }

  if (body.description_info) {
    assertAddItem(body.description_type === 'extended', '`description_type` must be `extended` when `description_info` is provided.');
    assertAddItem(
      Array.isArray(body.description_info.extended_description?.field_list),
      '`description_info.extended_description.field_list` must be an array.',
    );
  }

  if (body.video_upload_id) {
    assertAddItem(Array.isArray(body.video_upload_id), '`video_upload_id` must be an array.');
    assertAddItem(body.video_upload_id.length <= 1, '`video_upload_id` accepts only one video ID for v2.product.update_item.');
  }
}

function validateSearchItemRequest(params: ShopeeRequestSearchItem): void {
  assertAddItem(params && typeof params === 'object', '`params` is required.');
  assertAddItem(isFiniteNumber(params.page_size) && params.page_size > 0, '`page_size` is required and must be greater than 0.');

  const hasSearchFilter = Boolean(
    params.item_name ||
      params.attribute_status !== undefined ||
      params.item_sku ||
      (params.item_status && params.item_status.length > 0) ||
      params.deboost_only !== undefined,
  );
  assertAddItem(hasSearchFilter, 'At least one search filter is required.');

  if (params.item_status) {
    assertAddItem(Array.isArray(params.item_status), '`item_status` must be an array.');
  }
}

export async function getProductItemList(config: ShopeeConfig): Promise<Record<string, unknown>[]> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_ITEM_LIST, config, timestamp);

  const productItems: Record<string, unknown>[] = [];
  let offset = 0;
  let hasNextPage = true;
  let iterationCount = 0;

  while (hasNextPage) {
    if (++iterationCount > MAX_GET_ITEM_ITERATIONS) {
      throw new Error(`[Shopee API] getProductItemList exceeded max iterations (${MAX_GET_ITEM_ITERATIONS}). Possible infinite loop.`);
    }

    const commonParam = `${ShopeeHelper.commonParameter(config, signature, timestamp)}&page_size=100&item_status=NORMAL&offset=${offset}`;
    const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_ITEM_LIST}${commonParam}`;
    const { data } = await axios.get<{
      response: {
        item: Record<string, unknown>[];
        next_offset: number;
        has_next_page: boolean;
      };
    }>(url);

    if (data.response.item && Array.isArray(data.response.item)) {
      productItems.push(...data.response.item);
    }
    offset = data.response.next_offset;
    hasNextPage = data.response.has_next_page;
  }

  return productItems;
}

/**
 *
 * @param itemIds - Product IDs.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseProductBaseItemInfo>}
 */
export async function getProductItemBaseInfo(itemIds: string[], config: ShopeeConfig): Promise<ShopeeResponseProductBaseItemInfo> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_ITEM_BASE, config, timestamp);
  const commonParam = `${ShopeeHelper.commonParameter(config, signature, timestamp)}&item_id_list=${itemIds.toString()}`;

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_ITEM_BASE}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseProductBaseItemInfo>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getProductItemBaseInfo');
  }

  return result;
}

/**
 * Get model/variation list for a Shopee item.
 *
 * @see docs/product_get_model_list.md for full response schema and field details.
 *
 * @param itemId - Shopee item ID.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with tier variations and model list.
 */
export async function getModelList(itemId: string | number, config: ShopeeConfig): Promise<ShopeeResponseGetModelList> {
  const numericItemId = typeof itemId === 'string' ? Number(itemId) : itemId;
  if (!Number.isFinite(numericItemId)) {
    throw new Error('[Shopee API] getModelList invalid request: `itemId` is required and must be a number.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_MODEL_LIST, config, timestamp);
  const additionalParams: Record<string, string | number | boolean> = {
    item_id: numericItemId,
  };
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_MODEL_LIST}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseGetModelList>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getModelList');
  }

  return result;
}

/**
 * Search Shopee items by name, SKU, attribute completion status, item status,
 * or deboost flag.
 *
 * @see docs/product_search_item.md for full request schema and field details.
 *
 * @param params - Search filters and pagination.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with matching item IDs.
 */
export async function searchItem(params: ShopeeRequestSearchItem, config: ShopeeConfig): Promise<ShopeeResponseSearchItem> {
  validateSearchItemRequest(params);

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.SEARCH_ITEM, config, timestamp);
  const additionalParams: Record<string, string | number | boolean> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || key === 'item_status') {
      return;
    }
    additionalParams[key] = value;
  });

  let commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  params.item_status?.forEach((status) => {
    commonParam += `&item_status=${encodeURIComponent(status)}`;
  });
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.SEARCH_ITEM}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseSearchItem>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'searchItem');
  }

  return result;
}

/**
 *
 * @param shopeeItemId
 * @param shopeeModelId
 * @param stock
 * @param config
 * @returns
 */
export async function updateStock(
  shopeeItemId: string | number,
  shopeeModelId: number = 0,
  stock: number,
  config: ShopeeConfig,
): Promise<ShopeeResponseUpdateStock> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_STOCK, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const body = {
    item_id: typeof shopeeItemId === 'string' ? parseInt(shopeeItemId) : shopeeItemId,
    stock_list: [
      {
        model_id: shopeeModelId,
        seller_stock: [
          {
            stock,
          },
        ],
      },
    ],
  };
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_STOCK}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUpdateStock>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'updateStock');
  }

  return result;
}

/**
 *
 * @param itemIds - Shopee Item ID.
 * @param statusUnlist - Unlist status.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetCategories>}
 */
export async function unListItem(itemId: string, statusUnlist: boolean, config: ShopeeConfig): Promise<ShopeeResponseUnlistItem> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UNLIST_ITEM, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);

  const body: ShopeeRequestUnlistItem = {
    item_list: [
      {
        item_id: parseInt(itemId),
        unlist: statusUnlist,
      },
    ],
  };

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UNLIST_ITEM}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUnlistItem>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'unListItem');
  }

  return result;
}

/**
 *
 * @param itemId - Shopee Item ID.
 * @param price - Price.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseUpdatePrice>}
 */
export async function updatePrice(itemId: string, price: number, config: ShopeeConfig): Promise<ShopeeResponseUpdatePrice> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_PRICE, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);

  const body: ShopeeRequestUpdatePrice = {
    item_id: parseInt(itemId),
    price_list: [
      {
        model_id: 0,
        original_price: price,
      },
    ],
  };

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_PRICE}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUpdatePrice>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'updatePrice');
  }

  return result;
}

/**
 * Create a new product item on Shopee.
 *
 * @see docs/product_add_item.md for full request schema and field details.
 *
 * @param body - The product payload matching Shopee v2.product.add_item schema.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the created item details.
 */
export async function addItem(
  body: ShopeeRequestAddItem,
  config: ShopeeConfig,
): Promise<ShopeeResponseAddItem> {
  validateAddItemRequest(body);

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ADD_ITEM, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ADD_ITEM}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseAddItem>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'addItem');
  }

  return result;
}

/**
 * Update an existing product item on Shopee.
 *
 * @see docs/product_update_item.md for full request schema and field details.
 *
 * @param body - The partial product payload matching Shopee v2.product.update_item schema.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the updated item details.
 */
export async function updateItem(
  body: ShopeeRequestUpdateItem,
  config: ShopeeConfig,
): Promise<ShopeeResponseUpdateItem> {
  validateUpdateItemRequest(body);

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_ITEM, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_ITEM}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUpdateItem>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'updateItem');
  }

  return result;
}

/**
 *
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetCategories>}
 */
export async function getCategory(config: ShopeeConfig): Promise<ShopeeResponseGetCategories> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_CATEGORY, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_CATEGORY}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseGetCategories>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getCategory');
  }

  return result;
}

/**
 *
 * @param categoryId - Category ID.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetCategories>}
 */
export async function getAttributes(categoryId: number, config: ShopeeConfig): Promise<ShopeeResponseGetAttributes> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_ATTRIBUTES, config, timestamp);
  const additionalParams = {
    category_id: categoryId,
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_ATTRIBUTES}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseGetAttributes>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getAttributes');
  }

  return result;
}

/**
 *
 * @param categoryId - Category ID.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetBrandList>}
 */
export async function getBrandList(categoryId: number, config: ShopeeConfig): Promise<ShopeeResponseGetBrandList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_BRAND_LIST, config, timestamp);

  const offset = 1;
  const pageSize = 100;
  const status = 1;
  const additionalParams: Record<string, string | number | boolean> = {
    category_id: categoryId,
    offset,
    page_size: pageSize,
    status,
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_BRAND_LIST}${commonParam}`;
  const result = await ShopeeHelper.httpGet<ShopeeResponseGetBrandList>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getBrandList');
  }

  return result;
}

// ---- Appended: additional endpoints (batch 3) ----
import {
  ShopeeAddKitItemRequest,
  ShopeeAddModelRequest,
  ShopeeBatchAddItemRequest,
  ShopeeBatchPublishItemToOutletShopRequest,
  ShopeeBatchUpdateOutletPriceRequest,
  ShopeeBatchUpdateOutletStockRequest,
  ShopeeBoostItemRequest,
  ShopeeCategoryRecommendRequest,
  ShopeeDeleteItemRequest,
  ShopeeDeleteModelRequest,
  ShopeeGenerateKitImageRequest,
  ShopeeGetAitemByPitemIdRequest,
  ShopeeGetAllVehicleListRequest,
  ShopeeGetAttributeTreeRequest,
  ShopeeGetBatchTaskResultRequest,
  ShopeeGetBoostedListRequest,
  ShopeeGetCommentRequest,
  ShopeeGetDirectItemListRequest,
  ShopeeGetDirectShopRecommendedPriceRequest,
  ShopeeGetItemContentDiagnosisResultRequest,
  ShopeeGetItemExtraInfoRequest,
  ShopeeGetItemLimitRequest,
  ShopeeGetItemListByContentDiagnosisRequest,
  ShopeeGetItemPromotionRequest,
  ShopeeGetItemViolationInfoRequest,
  ShopeeGetKitItemInfoRequest,
  ShopeeGetKitItemLimitRequest,
  ShopeeGetMainItemListRequest,
  ShopeeGetMartItemByOutletItemIdRequest,
  ShopeeGetMartItemMappingByIdRequest,
  ShopeeGetProductCertificationRuleRequest,
  ShopeeGetRecommendAttributeRequest,
  ShopeeGetSizeChartDetailRequest,
  ShopeeGetSizeChartListRequest,
  ShopeeGetVariationsRequest,
  ShopeeGetVehicleListByCompatibilityDetailRequest,
  ShopeeGetWeightRecommendationRequest,
  ShopeeInitTierVariationRequest,
  ShopeePublishItemToOutletShopRequest,
  ShopeeRegisterBrandRequest,
  ShopeeReplyCommentRequest,
  ShopeeSearchAttributeValueListRequest,
  ShopeeSearchUnpackagedModelListRequest,
  ShopeeUpdateKitItemRequest,
  ShopeeUpdateModelRequest,
  ShopeeUpdateSipItemPriceRequest,
  ShopeeUpdateTierVariationRequest,
} from '../dto/request/product.request';
import {
  ShopeeAddKitItemResponse,
  ShopeeAddModelResponse,
  ShopeeBatchAddItemResponse,
  ShopeeBatchPublishItemToOutletShopResponse,
  ShopeeBatchUpdateOutletPriceResponse,
  ShopeeBatchUpdateOutletStockResponse,
  ShopeeBoostItemResponse,
  ShopeeCategoryRecommendResponse,
  ShopeeDeleteItemResponse,
  ShopeeDeleteModelResponse,
  ShopeeGenerateKitImageResponse,
  ShopeeGetAitemByPitemIdResponse,
  ShopeeGetAllVehicleListResponse,
  ShopeeGetAttributeTreeResponse,
  ShopeeGetBatchTaskResultResponse,
  ShopeeGetBoostedListResponse,
  ShopeeGetCommentResponse,
  ShopeeGetDirectItemListResponse,
  ShopeeGetDirectShopRecommendedPriceResponse,
  ShopeeGetItemContentDiagnosisResultResponse,
  ShopeeGetItemExtraInfoResponse,
  ShopeeGetItemLimitResponse,
  ShopeeGetItemListByContentDiagnosisResponse,
  ShopeeGetItemPromotionResponse,
  ShopeeGetItemViolationInfoResponse,
  ShopeeGetKitItemInfoResponse,
  ShopeeGetKitItemLimitResponse,
  ShopeeGetMainItemListResponse,
  ShopeeGetMartItemByOutletItemIdResponse,
  ShopeeGetMartItemMappingByIdResponse,
  ShopeeGetProductCertificationRuleResponse,
  ShopeeGetRecommendAttributeResponse,
  ShopeeGetSizeChartDetailResponse,
  ShopeeGetSizeChartListResponse,
  ShopeeGetVariationsResponse,
  ShopeeGetVehicleListByCompatibilityDetailResponse,
  ShopeeGetWeightRecommendationResponse,
  ShopeeInitTierVariationResponse,
  ShopeePublishItemToOutletShopResponse,
  ShopeeRegisterBrandResponse,
  ShopeeReplyCommentResponse,
  ShopeeSearchAttributeValueListResponse,
  ShopeeSearchUnpackagedModelListResponse,
  ShopeeUpdateKitItemResponse,
  ShopeeUpdateModelResponse,
  ShopeeUpdateSipItemPriceResponse,
  ShopeeUpdateTierVariationResponse,
} from '../dto/response/product.response';

/**
 * addKitItem via Shopee `v2.product.add_kit_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addKitItem(params: ShopeeAddKitItemRequest, config: ShopeeConfig): Promise<ShopeeAddKitItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddKitItemResponse>('/product/add_kit_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addKitItem',
  });
}

/**
 * addModel via Shopee `v2.product.add_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addModel(params: ShopeeAddModelRequest, config: ShopeeConfig): Promise<ShopeeAddModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddModelResponse>('/product/add_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addModel',
  });
}

/**
 * batchAddItem via Shopee `v2.product.batch_add_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchAddItem(params: ShopeeBatchAddItemRequest, config: ShopeeConfig): Promise<ShopeeBatchAddItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchAddItemResponse>('/product/batch_add_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchAddItem',
  });
}

/**
 * batchPublishItemToOutletShop via Shopee `v2.product.batch_publish_item_to_outlet_shop`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchPublishItemToOutletShop(params: ShopeeBatchPublishItemToOutletShopRequest, config: ShopeeConfig): Promise<ShopeeBatchPublishItemToOutletShopResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchPublishItemToOutletShopResponse>('/product/batch_publish_item_to_outlet_shop', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchPublishItemToOutletShop',
  });
}

/**
 * batchUpdateOutletPrice via Shopee `v2.product.batch_update_outlet_price`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchUpdateOutletPrice(params: ShopeeBatchUpdateOutletPriceRequest, config: ShopeeConfig): Promise<ShopeeBatchUpdateOutletPriceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchUpdateOutletPriceResponse>('/product/batch_update_outlet_price', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchUpdateOutletPrice',
  });
}

/**
 * batchUpdateOutletStock via Shopee `v2.product.batch_update_outlet_stock`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchUpdateOutletStock(params: ShopeeBatchUpdateOutletStockRequest, config: ShopeeConfig): Promise<ShopeeBatchUpdateOutletStockResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchUpdateOutletStockResponse>('/product/batch_update_outlet_stock', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchUpdateOutletStock',
  });
}

/**
 * boostItem via Shopee `v2.product.boost_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function boostItem(params: ShopeeBoostItemRequest, config: ShopeeConfig): Promise<ShopeeBoostItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBoostItemResponse>('/product/boost_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'boostItem',
  });
}

/**
 * categoryRecommend via Shopee `v2.product.category_recommend`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function categoryRecommend(params: ShopeeCategoryRecommendRequest, config: ShopeeConfig): Promise<ShopeeCategoryRecommendResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCategoryRecommendResponse>('/product/category_recommend', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'categoryRecommend',
  });
}

/**
 * deleteItem via Shopee `v2.product.delete_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteItem(params: ShopeeDeleteItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteItemResponse>('/product/delete_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteItem',
  });
}

/**
 * deleteModel via Shopee `v2.product.delete_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteModel(params: ShopeeDeleteModelRequest, config: ShopeeConfig): Promise<ShopeeDeleteModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteModelResponse>('/product/delete_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteModel',
  });
}

/**
 * generateKitImage via Shopee `v2.product.generate_kit_image`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function generateKitImage(params: ShopeeGenerateKitImageRequest, config: ShopeeConfig): Promise<ShopeeGenerateKitImageResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGenerateKitImageResponse>('/product/generate_kit_image', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'generateKitImage',
  });
}

/**
 * getAitemByPitemId via Shopee `v2.product.get_aitem_by_pitem_id`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAitemByPitemId(params: ShopeeGetAitemByPitemIdRequest, config: ShopeeConfig): Promise<ShopeeGetAitemByPitemIdResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAitemByPitemIdResponse>('/product/get_aitem_by_pitem_id', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAitemByPitemId',
  });
}

/**
 * getAllVehicleList via Shopee `v2.product.get_all_vehicle_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAllVehicleList(params: ShopeeGetAllVehicleListRequest, config: ShopeeConfig): Promise<ShopeeGetAllVehicleListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAllVehicleListResponse>('/product/get_all_vehicle_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAllVehicleList',
  });
}

/**
 * getAttributeTree via Shopee `v2.product.get_attribute_tree`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getAttributeTree(params: ShopeeGetAttributeTreeRequest, config: ShopeeConfig): Promise<ShopeeGetAttributeTreeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetAttributeTreeResponse>('/product/get_attribute_tree', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getAttributeTree',
  });
}

/**
 * getBatchTaskResult via Shopee `v2.product.get_batch_task_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBatchTaskResult(params: ShopeeGetBatchTaskResultRequest, config: ShopeeConfig): Promise<ShopeeGetBatchTaskResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBatchTaskResultResponse>('/product/get_batch_task_result', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBatchTaskResult',
  });
}

/**
 * getBoostedList via Shopee `v2.product.get_boosted_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBoostedList(config: ShopeeConfig): Promise<ShopeeGetBoostedListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBoostedListResponse>('/product/get_boosted_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBoostedList',
  });
}

/**
 * getComment via Shopee `v2.product.get_comment`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getComment(params: ShopeeGetCommentRequest, config: ShopeeConfig): Promise<ShopeeGetCommentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCommentResponse>('/product/get_comment', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getComment',
  });
}

/**
 * getDirectItemList via Shopee `v2.product.get_direct_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getDirectItemList(params: ShopeeGetDirectItemListRequest, config: ShopeeConfig): Promise<ShopeeGetDirectItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetDirectItemListResponse>('/product/get_direct_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getDirectItemList',
  });
}

/**
 * getDirectShopRecommendedPrice via Shopee `v2.product.get_direct_shop_recommended_price`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getDirectShopRecommendedPrice(params: ShopeeGetDirectShopRecommendedPriceRequest, config: ShopeeConfig): Promise<ShopeeGetDirectShopRecommendedPriceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetDirectShopRecommendedPriceResponse>('/product/get_direct_shop_recommended_price', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getDirectShopRecommendedPrice',
  });
}

/**
 * getItemContentDiagnosisResult via Shopee `v2.product.get_item_content_diagnosis_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemContentDiagnosisResult(params: ShopeeGetItemContentDiagnosisResultRequest, config: ShopeeConfig): Promise<ShopeeGetItemContentDiagnosisResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemContentDiagnosisResultResponse>('/product/get_item_content_diagnosis_result', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemContentDiagnosisResult',
  });
}

/**
 * getItemExtraInfo via Shopee `v2.product.get_item_extra_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemExtraInfo(params: ShopeeGetItemExtraInfoRequest, config: ShopeeConfig): Promise<ShopeeGetItemExtraInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemExtraInfoResponse>('/product/get_item_extra_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemExtraInfo',
  });
}

/**
 * getItemLimit via Shopee `v2.product.get_item_limit`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemLimit(params: ShopeeGetItemLimitRequest = {}, config: ShopeeConfig): Promise<ShopeeGetItemLimitResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemLimitResponse>('/product/get_item_limit', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemLimit',
  });
}

/**
 * getItemListByContentDiagnosis via Shopee `v2.product.get_item_list_by_content_diagnosis`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemListByContentDiagnosis(params: ShopeeGetItemListByContentDiagnosisRequest, config: ShopeeConfig): Promise<ShopeeGetItemListByContentDiagnosisResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemListByContentDiagnosisResponse>('/product/get_item_list_by_content_diagnosis', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemListByContentDiagnosis',
  });
}

/**
 * getItemPromotion via Shopee `v2.product.get_item_promotion`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemPromotion(params: ShopeeGetItemPromotionRequest, config: ShopeeConfig): Promise<ShopeeGetItemPromotionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemPromotionResponse>('/product/get_item_promotion', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemPromotion',
  });
}

/**
 * getItemViolationInfo via Shopee `v2.product.get_item_violation_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemViolationInfo(params: ShopeeGetItemViolationInfoRequest, config: ShopeeConfig): Promise<ShopeeGetItemViolationInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemViolationInfoResponse>('/product/get_item_violation_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemViolationInfo',
  });
}

/**
 * getKitItemInfo via Shopee `v2.product.get_kit_item_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getKitItemInfo(params: ShopeeGetKitItemInfoRequest, config: ShopeeConfig): Promise<ShopeeGetKitItemInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetKitItemInfoResponse>('/product/get_kit_item_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getKitItemInfo',
  });
}

/**
 * getKitItemLimit via Shopee `v2.product.get_kit_item_limit`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getKitItemLimit(params: ShopeeGetKitItemLimitRequest = {}, config: ShopeeConfig): Promise<ShopeeGetKitItemLimitResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetKitItemLimitResponse>('/product/get_kit_item_limit', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getKitItemLimit',
  });
}

/**
 * getMainItemList via Shopee `v2.product.get_main_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMainItemList(params: ShopeeGetMainItemListRequest, config: ShopeeConfig): Promise<ShopeeGetMainItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMainItemListResponse>('/product/get_main_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMainItemList',
  });
}

/**
 * getMartItemByOutletItemId via Shopee `v2.product.get_mart_item_by_outlet_item_id`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMartItemByOutletItemId(params: ShopeeGetMartItemByOutletItemIdRequest, config: ShopeeConfig): Promise<ShopeeGetMartItemByOutletItemIdResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMartItemByOutletItemIdResponse>('/product/get_mart_item_by_outlet_item_id', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMartItemByOutletItemId',
  });
}

/**
 * getMartItemMappingById via Shopee `v2.product.get_mart_item_mapping_by_id`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMartItemMappingById(params: ShopeeGetMartItemMappingByIdRequest, config: ShopeeConfig): Promise<ShopeeGetMartItemMappingByIdResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMartItemMappingByIdResponse>('/product/get_mart_item_mapping_by_id', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMartItemMappingById',
  });
}

/**
 * getProductCertificationRule via Shopee `v2.product.get_product_certification_rule`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getProductCertificationRule(params: ShopeeGetProductCertificationRuleRequest = {}, config: ShopeeConfig): Promise<ShopeeGetProductCertificationRuleResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetProductCertificationRuleResponse>('/product/get_product_certification_rule', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getProductCertificationRule',
  });
}

/**
 * getRecommendAttribute via Shopee `v2.product.get_recommend_attribute`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecommendAttribute(params: ShopeeGetRecommendAttributeRequest, config: ShopeeConfig): Promise<ShopeeGetRecommendAttributeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecommendAttributeResponse>('/product/get_recommend_attribute', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecommendAttribute',
  });
}

/**
 * getSizeChartDetail via Shopee `v2.product.get_size_chart_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSizeChartDetail(params: ShopeeGetSizeChartDetailRequest, config: ShopeeConfig): Promise<ShopeeGetSizeChartDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSizeChartDetailResponse>('/product/get_size_chart_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSizeChartDetail',
  });
}

/**
 * getSizeChartList via Shopee `v2.product.get_size_chart_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSizeChartList(params: ShopeeGetSizeChartListRequest, config: ShopeeConfig): Promise<ShopeeGetSizeChartListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSizeChartListResponse>('/product/get_size_chart_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSizeChartList',
  });
}

/**
 * getVariations via Shopee `v2.product.get_variation_tree`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVariations(params: ShopeeGetVariationsRequest, config: ShopeeConfig): Promise<ShopeeGetVariationsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVariationsResponse>('/product/get_variation_tree', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVariations',
  });
}

/**
 * getVehicleListByCompatibilityDetail via Shopee `v2.product.get_vehicle_list_by_compatibility_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVehicleListByCompatibilityDetail(params: ShopeeGetVehicleListByCompatibilityDetailRequest, config: ShopeeConfig): Promise<ShopeeGetVehicleListByCompatibilityDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVehicleListByCompatibilityDetailResponse>('/product/get_vehicle_list_by_compatibility_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVehicleListByCompatibilityDetail',
  });
}

/**
 * getWeightRecommendation via Shopee `v2.product.get_weight_recommendation`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getWeightRecommendation(params: ShopeeGetWeightRecommendationRequest, config: ShopeeConfig): Promise<ShopeeGetWeightRecommendationResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetWeightRecommendationResponse>('/product/get_weight_recommendation', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getWeightRecommendation',
  });
}

/**
 * initTierVariation via Shopee `v2.product.init_tier_variation`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function initTierVariation(params: ShopeeInitTierVariationRequest, config: ShopeeConfig): Promise<ShopeeInitTierVariationResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeInitTierVariationResponse>('/product/init_tier_variation', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'initTierVariation',
  });
}

/**
 * publishItemToOutletShop via Shopee `v2.product.publish_item_to_outlet_shop`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function publishItemToOutletShop(params: ShopeePublishItemToOutletShopRequest, config: ShopeeConfig): Promise<ShopeePublishItemToOutletShopResponse> {
  return ShopeeHelper.callShopeeApi<ShopeePublishItemToOutletShopResponse>('/product/publish_item_to_outlet_shop', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'publishItemToOutletShop',
  });
}

/**
 * registerBrand via Shopee `v2.product.register_brand`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function registerBrand(params: ShopeeRegisterBrandRequest, config: ShopeeConfig): Promise<ShopeeRegisterBrandResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeRegisterBrandResponse>('/product/register_brand', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'registerBrand',
  });
}

/**
 * replyComment via Shopee `v2.product.reply_comment`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function replyComment(params: ShopeeReplyCommentRequest, config: ShopeeConfig): Promise<ShopeeReplyCommentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeReplyCommentResponse>('/product/reply_comment', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'replyComment',
  });
}

/**
 * searchAttributeValueList via Shopee `v2.product.search_attribute_value_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function searchAttributeValueList(params: ShopeeSearchAttributeValueListRequest, config: ShopeeConfig): Promise<ShopeeSearchAttributeValueListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSearchAttributeValueListResponse>('/product/search_attribute_value_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'searchAttributeValueList',
  });
}

/**
 * searchUnpackagedModelList via Shopee `v2.product.search_unpackaged_model_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function searchUnpackagedModelList(params: ShopeeSearchUnpackagedModelListRequest, config: ShopeeConfig): Promise<ShopeeSearchUnpackagedModelListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSearchUnpackagedModelListResponse>('/product/search_unpackaged_model_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'searchUnpackagedModelList',
  });
}

/**
 * updateKitItem via Shopee `v2.product.update_kit_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateKitItem(params: ShopeeUpdateKitItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateKitItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateKitItemResponse>('/product/update_kit_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateKitItem',
  });
}

/**
 * updateModel via Shopee `v2.product.update_model`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateModel(params: ShopeeUpdateModelRequest, config: ShopeeConfig): Promise<ShopeeUpdateModelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateModelResponse>('/product/update_model', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateModel',
  });
}

/**
 * updateSipItemPrice via Shopee `v2.product.update_sip_item_price`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateSipItemPrice(params: ShopeeUpdateSipItemPriceRequest, config: ShopeeConfig): Promise<ShopeeUpdateSipItemPriceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateSipItemPriceResponse>('/product/update_sip_item_price', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateSipItemPrice',
  });
}

/**
 * updateTierVariation via Shopee `v2.product.update_tier_variation`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateTierVariation(params: ShopeeUpdateTierVariationRequest, config: ShopeeConfig): Promise<ShopeeUpdateTierVariationResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateTierVariationResponse>('/product/update_tier_variation', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateTierVariation',
  });
}
