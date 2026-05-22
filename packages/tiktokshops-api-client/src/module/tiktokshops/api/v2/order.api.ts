import { TiktokConfig } from '../../dto/request/config.request';
import { TIKTOK_PATH_202309, TIKTOK_PATH_202407, TIKTOK_PATH_PLACEHOLDER } from '../../common/constant';
import * as TiktokHelper from '../../common/helper';
import { TiktokResponseOrderDetail, TiktokResponseOrderList, TiktokResponsePriceDetail } from '../../dto/response/order.response';
import { TiktokRequestShipPackage } from '../../dto/request/fulfillment.request';
import { TiktokRequestOrderList } from '../../dto/request/order.request';

/**
 *
 * @param orderNumber The order number.
 * @param config Tiktok API configuration.
 * @returns The response containing the order detail.
 */
export async function getOrderDetail(orderNumber: string, config: TiktokConfig): Promise<TiktokResponseOrderDetail> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}&ids=${orderNumber}`;

  const url = TiktokHelper.genURLwithSignature(TIKTOK_PATH_202309.ORDER_DETAIL, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

function buildOrderListQuery(options: TiktokRequestOrderList) {
  const queryParams: Record<string, string | number> = {
    page_size: options.pageSize ?? 20,
  };

  if (options.pageToken) {
    queryParams.page_token = options.pageToken;
  }

  if (options.sortOrder) {
    queryParams.sort_order = options.sortOrder;
  }

  if (options.sortField) {
    queryParams.sort_field = options.sortField;
  }

  return Object.entries(queryParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
}

function assertPositiveInteger(value: unknown, field: string): asserts value is number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
    throw new Error(`Invalid input: ${field} must be a positive integer`);
  }
}

function validateOrderListOptions(options: TiktokRequestOrderList) {
  if (!options || typeof options !== 'object') {
    throw new Error('Invalid input: options are required');
  }

  if (options.pageSize !== undefined) {
    assertPositiveInteger(options.pageSize, 'pageSize');
  }

  if (options.beforeHours !== undefined) {
    assertPositiveInteger(options.beforeHours, 'beforeHours');
  }

  for (const field of ['createTimeGe', 'createTimeLt', 'updateTimeGe', 'updateTimeLt'] as const) {
    if (options[field] !== undefined) {
      assertPositiveInteger(options[field], field);
    }
  }
}

function buildOrderListBody(options: TiktokRequestOrderList) {
  const body: Record<string, string | number | boolean | string[]> = {};
  const timestamp = Math.floor(Date.now() / 1000);

  if (options.orderStatus && options.orderStatus !== 'ALL') {
    body.order_status = options.orderStatus;
  }

  if (typeof options.createTimeGe === 'number') {
    body.create_time_ge = options.createTimeGe;
  }

  if (typeof options.createTimeLt === 'number') {
    body.create_time_lt = options.createTimeLt;
  }

  if (typeof options.updateTimeGe === 'number') {
    body.update_time_ge = options.updateTimeGe;
  }

  if (typeof options.updateTimeLt === 'number') {
    body.update_time_lt = options.updateTimeLt;
  }

  if (
    typeof options.beforeHours === 'number' &&
    typeof options.createTimeGe !== 'number' &&
    typeof options.createTimeLt !== 'number' &&
    typeof options.updateTimeGe !== 'number' &&
    typeof options.updateTimeLt !== 'number'
  ) {
    body.create_time_ge = TiktokHelper.getTimestampHoursAgo(options.beforeHours);
    body.create_time_lt = timestamp;
  }

  if (options.shippingType) {
    body.shipping_type = options.shippingType;
  }

  if (options.buyerUserId) {
    body.buyer_user_id = options.buyerUserId;
  }

  if (typeof options.isBuyerRequestCancel === 'boolean') {
    body.is_buyer_request_cancel = options.isBuyerRequestCancel;
  }

  if (options.warehouseIds?.length) {
    body.warehouse_ids = options.warehouseIds;
  }

  return body;
}

/**
 * Search orders from TikTok Shop v2 Get Order List.
 *
 * Usage:
 *   getOrderList({
 *     beforeHours: 24,
 *     orderStatus: 'UNPAID',
 *     sortField: 'create_time',
 *     sortOrder: 'ASC',
 *     pageSize: 20,
 *   }, config)
 *
 * If orderStatus is omitted or set to ALL, the SDK will not send order_status.
 *
 * @param options Query/filter options.
 * @param config TikTok Shop API configuration.
 * @returns The response containing the order list.
 */
export async function getOrderList(options: TiktokRequestOrderList, config: TiktokConfig): Promise<TiktokResponseOrderList> {
  validateOrderListOptions(options);

  const timestamp = Math.floor(Date.now() / 1000);

  const orderListQuery = buildOrderListQuery(options);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}&${orderListQuery}`;
  const body = buildOrderListBody(options);

  const url = TiktokHelper.genURLwithSignature(TIKTOK_PATH_202309.ORDER_LIST, commonParam, config, body);

  const headers = TiktokHelper.getHeaders(config);

  return TiktokHelper.httpPost(url, body, headers);
}

function buildShopCipherCommonParam(config: TiktokConfig, timestamp: number) {
  if (!config.shopCipher) {
    throw new Error('Invalid config: shopCipher is required');
  }

  const queryParams = new URLSearchParams({
    app_key: config.appKey,
    sign: '',
    timestamp: String(timestamp),
    shop_cipher: config.shopCipher,
  });

  return `?${queryParams.toString()}`;
}

/**
 * Get the detailed pricing calculation information of an order, including vouchers and tax.
 *
 * @param orderId TikTok Shop order ID.
 * @param config TikTok Shop API configuration.
 * @returns The response containing order price detail.
 */
export async function getPriceDetail(orderId: string, config: TiktokConfig): Promise<TiktokResponsePriceDetail> {
  if (!orderId) {
    throw new Error('Invalid input: orderId is required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = buildShopCipherCommonParam(config, timestamp);
  const path = TIKTOK_PATH_202407.ORDER_PRICE_DETAIL.replace('{order_id}', encodeURIComponent(orderId));
  const url = TiktokHelper.genURLwithSignature(path, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param packageId - Package ID.
 * @param payload - Payload.
 * @param config - Tiktok API configuration.
 * @returns {Promise<any>}
 */
export async function shipPackage(packageId: string, payload: TiktokRequestShipPackage, config: TiktokConfig): Promise<any> {
  if (!packageId) {
    throw new Error('Invalid input: packageId are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);
  const pathTimeSlot = TiktokHelper.replacePlaceholder(TIKTOK_PATH_202309.SHIP_PACKAGE, TIKTOK_PATH_PLACEHOLDER.PACKAGE, packageId);

  const url = TiktokHelper.genURLwithSignature(pathTimeSlot, commonParam, config);

  const body: TiktokRequestShipPackage = {
    handover_method: payload.handover_method,
    pickup_slot: {
      start_time: payload.pickup_slot.start_time,
      end_time: payload.pickup_slot.end_time,
    },
  };

  const headers = TiktokHelper.getHeaders(config);

  return TiktokHelper.httpPost(url, body, headers);
}
