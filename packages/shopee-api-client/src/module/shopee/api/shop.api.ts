import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeRequestGetAuthorisedResellerBrand,
  ShopeeRequestGetShopNotification,
  ShopeeRequestGetWarehouseDetail,
  ShopeeRequestSetShopHolidayMode,
  ShopeeRequestUpdateShopProfile,
} from '../dto/request/shop.request';
import {
  ShopeeResponseGetAuthorisedResellerBrand,
  ShopeeResponseGetBrShopOnboardingInfo,
  ShopeeResponseGetShopProfile,
  ShopeeResponseGetShopHolidayMode,
  ShopeeResponseGetShopInfo,
  ShopeeResponseGetShopNotification,
  ShopeeResponseGetWarehouseDetail,
  ShopeeResponseSetShopHolidayMode,
  ShopeeResponseUpdateShopProfile,
} from '../dto/response/shop.response';

/**
 * Get shop profile (name, logo, description) via `v2.shop.get_profile`.
 *
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the shop's profile fields.
 */
export async function getShopProfile(config: ShopeeConfig): Promise<ShopeeResponseGetShopProfile> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_PROFILE, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_PROFILE}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopProfile>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopProfile');
  }

  return result;
}

/**
 * Update the shop name, logo, and/or description via `v2.shop.update_profile`.
 *
 * @param body - Fields to update. Omitted fields are left unchanged.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the shop's updated profile fields.
 */
export async function updateShopProfile(
  body: ShopeeRequestUpdateShopProfile,
  config: ShopeeConfig,
): Promise<ShopeeResponseUpdateShopProfile> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_SHOP_PROFILE, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_SHOP_PROFILE}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseUpdateShopProfile>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'updateShopProfile');
  }

  return result;
}

/**
 * Get shop-level metadata (region, status, cross-border flags, fulfillment
 * type, auth/expire time, etc.) via `v2.shop.get_shop_info`.
 *
 * @param config - Shopee API configuration.
 * @returns Shopee API response with shop info.
 */
export async function getShopInfo(config: ShopeeConfig): Promise<ShopeeResponseGetShopInfo> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_INFO, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_INFO}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopInfo>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopInfo');
  }

  return result;
}

/**
 * Get Seller Center notifications via `v2.shop.get_shop_notification`.
 * Permission is controlled by app type.
 *
 * @param config - Shopee API configuration.
 * @param cursor - Last `notification_id` seen; omit to get the latest notification.
 * @param pageSize - Notifications per page. Default 10, maximum 50.
 * @returns Shopee API response with the notification content and next cursor.
 */
export async function getShopNotification(
  config: ShopeeConfig,
  cursor?: number,
  pageSize?: number,
): Promise<ShopeeResponseGetShopNotification> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_NOTIFICATION, config, timestamp);
  const additionalParams: Record<string, string | number | boolean> = {};
  if (typeof cursor === 'number') {
    additionalParams.cursor = cursor;
  }
  if (typeof pageSize === 'number') {
    additionalParams.page_size = pageSize;
  }
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_NOTIFICATION}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopNotification>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopNotification');
  }

  return result;
}

/**
 * Get warehouse address details via `v2.shop.get_warehouse_detail`.
 *
 * @param config - Shopee API configuration.
 * @param warehouseType - 1 = Pickup Warehouse (default), 2 = Return Warehouse.
 * @returns Shopee API response with all matching warehouse records.
 */
export async function getWarehouseDetail(
  config: ShopeeConfig,
  warehouseType?: number,
): Promise<ShopeeResponseGetWarehouseDetail> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_WAREHOUSE_DETAIL, config, timestamp);
  const additionalParams: Record<string, string | number | boolean> = {};
  if (typeof warehouseType === 'number') {
    additionalParams.warehouse_type = warehouseType;
  }
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_WAREHOUSE_DETAIL}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetWarehouseDetail>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getWarehouseDetail');
  }

  return result;
}

/**
 * Check whether holiday mode is enabled and its scheduled period via
 * `v2.shop.get_shop_holiday_mode`.
 *
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the holiday mode state and schedule.
 */
export async function getShopHolidayMode(config: ShopeeConfig): Promise<ShopeeResponseGetShopHolidayMode> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHOP_HOLIDAY_MODE, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHOP_HOLIDAY_MODE}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetShopHolidayMode>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getShopHolidayMode');
  }

  return result;
}

/**
 * Schedule holiday mode ON/OFF periods via `v2.shop.set_shop_holiday_mode`.
 *
 * `holiday_mode_start_time`/`holiday_mode_end_time` must be whole-hour Unix
 * timestamps in seconds, and `holiday_mode_end_time` must be later than
 * `holiday_mode_start_time`.
 *
 * @param body - Holiday mode toggle, type, schedule, and description.
 * @param config - Shopee API configuration.
 * @returns Shopee API response, possibly containing a `debug_msg`.
 */
export async function setShopHolidayMode(
  body: ShopeeRequestSetShopHolidayMode,
  config: ShopeeConfig,
): Promise<ShopeeResponseSetShopHolidayMode> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.SET_SHOP_HOLIDAY_MODE, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.SET_SHOP_HOLIDAY_MODE}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseSetShopHolidayMode>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'setShopHolidayMode');
  }

  return result;
}

/**
 * Get the authorised reseller brand list for the shop via
 * `v2.shop.get_authorised_reseller_brand`.
 *
 * @param params - Pagination (`page_no` from 1, `page_size` 1-30).
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the authorised brand list.
 */
export async function getAuthorisedResellerBrand(
  params: ShopeeRequestGetAuthorisedResellerBrand,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetAuthorisedResellerBrand> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_AUTHORISED_RESELLER_BRAND, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, {
    page_no: params.page_no,
    page_size: params.page_size,
  });
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_AUTHORISED_RESELLER_BRAND}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetAuthorisedResellerBrand>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getAuthorisedResellerBrand');
  }

  return result;
}

/**
 * [BR shops only] Get shop KYC registration and qualification information
 * via `v2.shop.get_br_shop_onboarding_info`.
 *
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the BR onboarding/KYC details.
 */
export async function getBrShopOnboardingInfo(config: ShopeeConfig): Promise<ShopeeResponseGetBrShopOnboardingInfo> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_BR_SHOP_ONBOARDING_INFO, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_BR_SHOP_ONBOARDING_INFO}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetBrShopOnboardingInfo>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getBrShopOnboardingInfo');
  }

  return result;
}
