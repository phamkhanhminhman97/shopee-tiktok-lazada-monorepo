import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeResponseOrderDetail,
  ShopeeOrderListItem,
  ShopeeResponseOrderList,
  ShopeeResponseSearchPackageList,
  ShopeeResponseGetPackageDetail,
  ShopeeResponseCancelOrder,
} from '../dto/response/order.response';
import { ShopeeRequestSearchPackageList, ShopeeRequestCancelOrder, ShopeeGetOrdersOptions } from '../dto/request/order.request';

const FIFTEEN_DAYS_IN_MINUTES = 15 * 24 * 60;

interface NormalizedGetOrdersOptions {
  timeRangeField: 'create_time' | 'update_time';
  timeFrom: number;
  timeTo: number;
  pageSize: number;
  cursor: string;
  orderStatus: ShopeeGetOrdersOptions['orderStatus'];
  responseOptionalFields?: string;
  requestOrderStatusPending?: boolean;
  logisticsChannelId?: number;
}

function normalizeGetOrdersOptions(options: ShopeeGetOrdersOptions = {}): NormalizedGetOrdersOptions {
  const pageSize = options.pageSize ?? 100;
  if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new Error(`[Shopee API] pageSize must be an integer between 1 and 100. You provided ${pageSize}.`);
  }

  const timeTo = options.timeTo ?? ShopeeHelper.getTimestampNow();
  const timeFrom = options.timeFrom ?? ShopeeHelper.getTimestampMinutesAgo(options.beforeMinutes ?? FIFTEEN_DAYS_IN_MINUTES);

  if (!Number.isInteger(timeFrom) || !Number.isInteger(timeTo) || timeFrom <= 0 || timeTo <= 0) {
    throw new Error('[Shopee API] timeFrom and timeTo must be valid Unix timestamps in seconds.');
  }

  if (timeFrom >= timeTo) {
    throw new Error('[Shopee API] timeFrom must be earlier than timeTo.');
  }

  const rangeMinutes = Math.ceil((timeTo - timeFrom) / 60);
  if (rangeMinutes > FIFTEEN_DAYS_IN_MINUTES) {
    throw new Error(`[Shopee API] The maximum date range is 15 days (${FIFTEEN_DAYS_IN_MINUTES} minutes). Please reduce the query range.`);
  }

  if (typeof options.logisticsChannelId === 'number' && !Number.isInteger(options.logisticsChannelId)) {
    throw new Error(`[Shopee API] logisticsChannelId must be an integer. You provided ${options.logisticsChannelId}.`);
  }

  const responseOptionalFields = Array.isArray(options.responseOptionalFields)
    ? options.responseOptionalFields.join(',')
    : options.responseOptionalFields;

  return {
    timeRangeField: options.timeRangeField ?? 'create_time',
    timeFrom,
    timeTo,
    pageSize,
    cursor: options.cursor ?? '',
    orderStatus: options.orderStatus ?? 'ALL',
    responseOptionalFields,
    requestOrderStatusPending: options.requestOrderStatusPending,
    logisticsChannelId: options.logisticsChannelId,
  };
}

/**
 * Get one page from Shopee v2.order.get_order_list and return the raw Shopee response.
 *
 * Use this when you need Shopee pagination metadata such as `more`,
 * `next_cursor`, and `request_id`.
 *
 * @param options Shopee order list query options.
 * @param config Shopee API configuration.
 * @returns Raw Shopee response for one page.
 */
export async function getOrderList(options: ShopeeGetOrdersOptions, config: ShopeeConfig): Promise<ShopeeResponseOrderList> {
  const normalized = normalizeGetOrdersOptions(options);
  const requestTimestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ORDER_LIST, config, requestTimestamp);

  const additionalParams: Record<string, string | number | boolean> = {
    time_range_field: normalized.timeRangeField,
    time_from: normalized.timeFrom,
    time_to: normalized.timeTo,
    page_size: normalized.pageSize,
    cursor: normalized.cursor,
  };

  if (normalized.orderStatus !== 'ALL') {
    additionalParams.order_status = normalized.orderStatus!;
  }

  if (normalized.responseOptionalFields) {
    additionalParams.response_optional_fields = normalized.responseOptionalFields;
  }

  if (typeof normalized.requestOrderStatusPending === 'boolean') {
    additionalParams.request_order_status_pending = normalized.requestOrderStatusPending;
  }

  if (typeof normalized.logisticsChannelId === 'number') {
    additionalParams.logistics_channel_id = normalized.logisticsChannelId;
  }

  const commonParams = ShopeeHelper.buildCommonParams(config, signature, requestTimestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ORDER_LIST}${commonParams}`;

  const res: ShopeeResponseOrderList = await ShopeeHelper.httpGet(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getOrderList');
  }

  return res;
}

/**
 * Get orders from Shopee v2.order.get_order_list.
 *
 * Backward compatible usage:
 *   getOrders(60, config)
 *
 * Extended usage:
 *   getOrders({
 *     beforeMinutes: 60,
 *     orderStatus: 'READY_TO_SHIP',
 *     timeRangeField: 'update_time',
 *     responseOptionalFields: ['order_status'],
 *   }, config)
 *
 * If orderStatus is omitted or set to ALL, the SDK will not send order_status,
 * so Shopee returns all statuses in the selected time range.
 *
 * @param beforeMinutesOrOptions Number of minutes before now, or query options.
 * @param config Shopee API configuration.
 * @returns Array of Shopee order list items.
 */
export async function getOrders(
  beforeMinutesOrOptions: number | ShopeeGetOrdersOptions,
  config: ShopeeConfig,
): Promise<ShopeeOrderListItem[]> {
  const options: ShopeeGetOrdersOptions =
    typeof beforeMinutesOrOptions === 'number' ? { beforeMinutes: beforeMinutesOrOptions } : beforeMinutesOrOptions;
  const normalized = normalizeGetOrdersOptions(options);
  let cursor = normalized.cursor;
  const orderList: ShopeeOrderListItem[] = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const res = await getOrderList(
      {
        ...options,
        timeFrom: normalized.timeFrom,
        timeTo: normalized.timeTo,
        pageSize: normalized.pageSize,
        cursor,
      },
      config,
    );

    // Break gracefully if no data
    if (!res?.response?.order_list || res.response.order_list.length === 0) {
      break;
    }

    orderList.push(...res.response.order_list);

    cursor = res.response.next_cursor || '';
    hasMoreData = Boolean(res.response.more);
  }

  return orderList;
}

/**
 * Get order detail
 * @param orderSnList - Single order_sn or an array of order_sn. Max 50.
 * @param config
 * @returns ShopeeResponseOrderDetail
 */
export async function getOrderDetail(orderSnList: string | string[], config: ShopeeConfig): Promise<ShopeeResponseOrderDetail> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ORDER_DETAIL, config, timestamp);

  const orderSns = Array.isArray(orderSnList) ? orderSnList.join(',') : orderSnList;

  // API Limit validation: max 50 orders per request
  const snCount = orderSns.split(',').length;
  if (snCount > 50) {
    throw new Error(`[Shopee API] The maximum limit for order_sn_list is 50. You provided ${snCount} orders.`);
  }

  // Get base optional fields from helper and ensure new fields from latest doc are included
  const optionalField = ShopeeHelper.optionalField();
  const newFields = ['return_request_due_date', 'edt', 'payment_info', 'international_label'];
  const allOptionalFields = Array.from(new Set([...optionalField, ...newFields]));

  const additionalParams = {
    order_sn_list: orderSns,
    response_optional_fields: allOptionalFields.join(','),
    request_order_status_pending: true, // Enable new logic to support PENDING status and return pending_terms
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ORDER_DETAIL}${commonParam}`;

  const res: any = await ShopeeHelper.httpGet(url, config);

  // Handle API Error explicitly
  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getOrderDetail');
  }

  return res;
}

/**
 * Get shipment list (Orders with status READY_TO_SHIP or RETRY_SHIP)
 * @param config ShopeeConfig
 * @returns Array of { order_sn, package_number }
 */
export async function getShipmentList(config: ShopeeConfig): Promise<{ order_sn: string; package_number: string }[]> {
  let cursor = '';
  const shipmentList: { order_sn: string; package_number: string }[] = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const requestTimestamp = ShopeeHelper.getTimestampNow();
    const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHIPMENT_LIST, config, requestTimestamp);

    const additionalParams = {
      page_size: 100, // API allows up to 100
      cursor: cursor,
    };

    const commonParams = ShopeeHelper.buildCommonParams(config, signature, requestTimestamp, additionalParams);
    const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHIPMENT_LIST}${commonParams}`;

    const res: any = await ShopeeHelper.httpGet(url, config);

    // Handle API Error explicitly
    if (res?.error) {
      ShopeeHelper.throwShopeeApiError(res, 'getShipmentList');
    }

    if (!res?.response?.order_list || res.response.order_list.length === 0) {
      break;
    }

    shipmentList.push(...res.response.order_list);

    cursor = res.response.next_cursor || '';
    hasMoreData = Boolean(res.response.more);
  }

  return shipmentList.map(item => ({
    order_sn: item.order_sn,
    package_number: item.package_number,
  }));
}

/**
 * Search package list
 * @param body ShopeeRequestSearchPackageList
 * @param config ShopeeConfig
 * @returns ShopeeResponseSearchPackageList
 */
export async function searchPackageList(
  body: ShopeeRequestSearchPackageList,
  config: ShopeeConfig,
): Promise<ShopeeResponseSearchPackageList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.SEARCH_PACKAGE_LIST, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.SEARCH_PACKAGE_LIST}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const res: any = await ShopeeHelper.httpPost(url, body, headers);

  // Handle API Error explicitly
  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'searchPackageList');
  }

  return res;
}

/**
 * Get package detail
 * @param packageNumberList - Single package_number or an array of package_number. Max 50.
 * @param config
 * @returns ShopeeResponseGetPackageDetail
 */
export async function getPackageDetail(
  packageNumberList: string | string[],
  config: ShopeeConfig,
): Promise<ShopeeResponseGetPackageDetail> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_PACKAGE_DETAIL, config, timestamp);

  const packageNumbers = Array.isArray(packageNumberList) ? packageNumberList.join(',') : packageNumberList;

  // API Limit validation: max 50 package numbers per request
  const count = packageNumbers.split(',').length;
  if (count > 50) {
    throw new Error(`[Shopee API] The maximum limit for package_number_list is 50. You provided ${count} package numbers.`);
  }

  const additionalParams = {
    package_number_list: packageNumbers,
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_PACKAGE_DETAIL}${commonParam}`;

  const res: any = await ShopeeHelper.httpGet(url, config);

  // Handle API Error explicitly
  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getPackageDetail');
  }

  return res;
}

/**
 * Cancel order
 * @param body ShopeeRequestCancelOrder
 * @param config ShopeeConfig
 * @returns ShopeeResponseCancelOrder
 */
export async function cancelOrder(body: ShopeeRequestCancelOrder, config: ShopeeConfig): Promise<ShopeeResponseCancelOrder> {
  if (body.cancel_reason === 'OUT_OF_STOCK' && (!body.item_list || body.item_list.length === 0)) {
    throw new Error('[Shopee API] item_list is required when cancel_reason is OUT_OF_STOCK.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.CANCEL_ORDER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.CANCEL_ORDER}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const res: any = await ShopeeHelper.httpPost(url, body, headers);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'cancelOrder');
  }

  return res;
}
