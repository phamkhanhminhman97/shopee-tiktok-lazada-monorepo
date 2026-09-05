import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeRequestAddShopCategory,
  ShopeeRequestUpdateShopCategory,
  ShopeeRequestGetShopCategoryList,
  ShopeeRequestAddShopCategoryItemList,
  ShopeeRequestDeleteShopCategoryItemList,
  ShopeeRequestGetShopCategoryItemList,
} from '../dto/request/shop-category.request';
import {
  ShopeeResponseAddShopCategory,
  ShopeeResponseUpdateShopCategory,
  ShopeeResponseDeleteShopCategory,
  ShopeeResponseGetShopCategoryList,
  ShopeeResponseAddShopCategoryItemList,
  ShopeeResponseDeleteShopCategoryItemList,
  ShopeeResponseGetShopCategoryItemList,
} from '../dto/response/shop-category.response';

/**
 * Create a new shop-level product category (collection) via
 * `v2.shop_category.add_shop_category`.
 *
 * @param body - Category name and optional sort weight.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the new `shop_category_id`.
 */
export async function addShopCategory(
  body: ShopeeRequestAddShopCategory,
  config: ShopeeConfig,
): Promise<ShopeeResponseAddShopCategory> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ADD_SHOP_CATEGORY, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ADD_SHOP_CATEGORY}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseAddShopCategory>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'addShopCategory');
  }

  return result;
}

/**
 * Update an existing shop-level product category via
 * `v2.shop_category.update_shop_category`.
 *
 * @param body - `shop_category_id` plus any fields to change.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the updated category fields.
 */
export async function updateShopCategory(
  body: ShopeeRequestUpdateShopCategory,
  config: ShopeeConfig,
): Promise<ShopeeResponseUpdateShopCategory> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_SHOP_CATEGORY, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_SHOP_CATEGORY}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUpdateShopCategory>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'updateShopCategory');
  }

  return result;
}

/**
 * Delete an existing shop-level product category via
 * `v2.shop_category.delete_shop_category`.
 *
 * @param shopCategoryId - The shop category to delete.
 * @param config - Shopee API configuration.
 * @returns Shopee API response confirming the deletion.
 */
export async function deleteShopCategory(
  shopCategoryId: number,
  config: ShopeeConfig,
): Promise<ShopeeResponseDeleteShopCategory> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.DELETE_SHOP_CATEGORY, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.DELETE_SHOP_CATEGORY}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);
  const body = { shop_category_id: shopCategoryId };

  const result = await ShopeeHelper.httpPost<ShopeeResponseDeleteShopCategory>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'deleteShopCategory');
  }

  return result;
}

/**
 * List shop-level product categories via
 * `v2.shop_category.get_shop_category_list`.
 *
 * @param params - Pagination (`page_size` 1-2147483647, `page_no` 1-100).
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the shop category list.
 */
export async function getShopCategoryList(
  params: ShopeeRequestGetShopCategoryList,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetShopCategoryList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_CATEGORY_LIST, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, {
    page_size: params.page_size,
    page_no: params.page_no,
  });
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_CATEGORY_LIST}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopCategoryList>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopCategoryList');
  }

  return result;
}

/**
 * Assign items to a shop category via `v2.shop_category.add_item_list`.
 *
 * @param body - Target `shop_category_id` and up to 100 item IDs.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with any invalid item IDs and the updated item count.
 */
export async function addShopCategoryItemList(
  body: ShopeeRequestAddShopCategoryItemList,
  config: ShopeeConfig,
): Promise<ShopeeResponseAddShopCategoryItemList> {
  if (!Array.isArray(body.item_list) || body.item_list.length === 0 || body.item_list.length > 100) {
    throw new Error('[Shopee API] addShopCategoryItemList invalid request: `item_list` must contain between 1 and 100 item IDs.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ADD_SHOP_CATEGORY_ITEM_LIST, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ADD_SHOP_CATEGORY_ITEM_LIST}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseAddShopCategoryItemList>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'addShopCategoryItemList');
  }

  return result;
}

/**
 * Remove items from a shop category via `v2.shop_category.delete_item_list`.
 *
 * @param body - Target `shop_category_id` and item IDs to remove.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with any invalid item IDs and the updated item count.
 */
export async function deleteShopCategoryItemList(
  body: ShopeeRequestDeleteShopCategoryItemList,
  config: ShopeeConfig,
): Promise<ShopeeResponseDeleteShopCategoryItemList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.DELETE_SHOP_CATEGORY_ITEM_LIST, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.DELETE_SHOP_CATEGORY_ITEM_LIST}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseDeleteShopCategoryItemList>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'deleteShopCategoryItemList');
  }

  return result;
}

/**
 * List items assigned to a shop category via `v2.shop_category.get_item_list`.
 *
 * @param params - Target `shop_category_id` plus optional pagination.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the item ID list for this category.
 */
export async function getShopCategoryItemList(
  params: ShopeeRequestGetShopCategoryItemList,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetShopCategoryItemList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_CATEGORY_ITEM_LIST, config, timestamp);
  const additionalParams: Record<string, string | number | boolean> = {
    shop_category_id: params.shop_category_id,
  };
  if (typeof params.page_size === 'number') {
    additionalParams.page_size = params.page_size;
  }
  if (typeof params.page_no === 'number') {
    additionalParams.page_no = params.page_no;
  }
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_CATEGORY_ITEM_LIST}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopCategoryItemList>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopCategoryItemList');
  }

  return result;
}
