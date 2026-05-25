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
  return ShopeeHelper.httpGet(url, config);
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

  return ShopeeHelper.httpPost(url, body, headers);
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

  return ShopeeHelper.httpPost(url, body, headers);
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

  return ShopeeHelper.httpPost(url, body, headers);
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
  return ShopeeHelper.httpGet(url, config);
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
  return ShopeeHelper.httpGet(url, config);
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
  return ShopeeHelper.httpGet(url, config);
}
