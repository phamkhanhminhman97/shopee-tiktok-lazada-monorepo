import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeBindCourierDeliveryFirstMileTrackingNumberRequest,
  ShopeeBindFirstMileTrackingNumberRequest,
  ShopeeGenerateAndBindFirstMileTrackingNumberRequest,
  ShopeeGenerateFirstMileTrackingNumberRequest,
  ShopeeGetChannelListRequest,
  ShopeeGetCourierDeliveryChannelListRequest,
  ShopeeGetCourierDeliveryDetailRequest,
  ShopeeGetCourierDeliveryTrackingNumberListRequest,
  ShopeeGetCourierDeliveryWaybillRequest,
  ShopeeGetDetailRequest,
  ShopeeGetTrackingNumberListRequest,
  ShopeeGetTransitWarehouseListRequest,
  ShopeeGetUnbindOrderListRequest,
  ShopeeGetWaybillRequest,
  ShopeeUnbindFirstMileTrackingNumberRequest,
  ShopeeUnbindFirstMileTrackingNumberAllRequest,
} from '../dto/request/first-mile.request';
import {
  ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse,
  ShopeeBindFirstMileTrackingNumberResponse,
  ShopeeGenerateAndBindFirstMileTrackingNumberResponse,
  ShopeeGenerateFirstMileTrackingNumberResponse,
  ShopeeGetChannelListResponse,
  ShopeeGetCourierDeliveryChannelListResponse,
  ShopeeGetCourierDeliveryDetailResponse,
  ShopeeGetCourierDeliveryTrackingNumberListResponse,
  ShopeeGetCourierDeliveryWaybillResponse,
  ShopeeGetDetailResponse,
  ShopeeGetTrackingNumberListResponse,
  ShopeeGetTransitWarehouseListResponse,
  ShopeeGetUnbindOrderListResponse,
  ShopeeGetWaybillResponse,
  ShopeeUnbindFirstMileTrackingNumberResponse,
  ShopeeUnbindFirstMileTrackingNumberAllResponse,
} from '../dto/response/first-mile.response';

/**
 * bindCourierDeliveryFirstMileTrackingNumber via Shopee `v2.first_mile.bind_courier_delivery_first_mile_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function bindCourierDeliveryFirstMileTrackingNumber(params: ShopeeBindCourierDeliveryFirstMileTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse>('/first_mile/bind_courier_delivery_first_mile_tracking_number', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'bindCourierDeliveryFirstMileTrackingNumber',
  });
}

/**
 * bindFirstMileTrackingNumber via Shopee `v2.first_mile.bind_first_mile_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function bindFirstMileTrackingNumber(params: ShopeeBindFirstMileTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeBindFirstMileTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBindFirstMileTrackingNumberResponse>('/first_mile/bind_first_mile_tracking_number', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'bindFirstMileTrackingNumber',
  });
}

/**
 * generateAndBindFirstMileTrackingNumber via Shopee `v2.first_mile.generate_and_bind_first_mile_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function generateAndBindFirstMileTrackingNumber(params: ShopeeGenerateAndBindFirstMileTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeGenerateAndBindFirstMileTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGenerateAndBindFirstMileTrackingNumberResponse>('/first_mile/generate_and_bind_first_mile_tracking_number', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'generateAndBindFirstMileTrackingNumber',
  });
}

/**
 * generateFirstMileTrackingNumber via Shopee `v2.first_mile.generate_first_mile_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function generateFirstMileTrackingNumber(params: ShopeeGenerateFirstMileTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeGenerateFirstMileTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGenerateFirstMileTrackingNumberResponse>('/first_mile/generate_first_mile_tracking_number', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'generateFirstMileTrackingNumber',
  });
}

/**
 * getChannelList via Shopee `v2.first_mile.get_channel_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getChannelList(params: ShopeeGetChannelListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetChannelListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetChannelListResponse>('/first_mile/get_channel_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getChannelList',
  });
}

/**
 * getCourierDeliveryChannelList via Shopee `v2.first_mile.get_courier_delivery_channel_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCourierDeliveryChannelList(params: ShopeeGetCourierDeliveryChannelListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetCourierDeliveryChannelListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCourierDeliveryChannelListResponse>('/first_mile/get_courier_delivery_channel_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCourierDeliveryChannelList',
  });
}

/**
 * getCourierDeliveryDetail via Shopee `v2.first_mile.get_courier_delivery_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCourierDeliveryDetail(params: ShopeeGetCourierDeliveryDetailRequest, config: ShopeeConfig): Promise<ShopeeGetCourierDeliveryDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCourierDeliveryDetailResponse>('/first_mile/get_courier_delivery_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCourierDeliveryDetail',
  });
}

/**
 * getCourierDeliveryTrackingNumberList via Shopee `v2.first_mile.get_courier_delivery_tracking_number_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCourierDeliveryTrackingNumberList(params: ShopeeGetCourierDeliveryTrackingNumberListRequest, config: ShopeeConfig): Promise<ShopeeGetCourierDeliveryTrackingNumberListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCourierDeliveryTrackingNumberListResponse>('/first_mile/get_courier_delivery_tracking_number_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCourierDeliveryTrackingNumberList',
  });
}

/**
 * getCourierDeliveryWaybill via Shopee `v2.first_mile.get_courier_delivery_waybill`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getCourierDeliveryWaybill(params: ShopeeGetCourierDeliveryWaybillRequest, config: ShopeeConfig): Promise<ShopeeGetCourierDeliveryWaybillResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetCourierDeliveryWaybillResponse>('/first_mile/get_courier_delivery_waybill', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getCourierDeliveryWaybill',
  });
}

/**
 * getDetail via Shopee `v2.first_mile.get_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getDetail(params: ShopeeGetDetailRequest, config: ShopeeConfig): Promise<ShopeeGetDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetDetailResponse>('/first_mile/get_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getDetail',
  });
}

/**
 * getTrackingNumberList via Shopee `v2.first_mile.get_tracking_number_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTrackingNumberList(params: ShopeeGetTrackingNumberListRequest, config: ShopeeConfig): Promise<ShopeeGetTrackingNumberListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTrackingNumberListResponse>('/first_mile/get_tracking_number_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTrackingNumberList',
  });
}

/**
 * getTransitWarehouseList via Shopee `v2.first_mile.get_transit_warehouse_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTransitWarehouseList(params: ShopeeGetTransitWarehouseListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetTransitWarehouseListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTransitWarehouseListResponse>('/first_mile/get_transit_warehouse_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTransitWarehouseList',
  });
}

/**
 * getUnbindOrderList via Shopee `v2.first_mile.get_unbind_order_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getUnbindOrderList(params: ShopeeGetUnbindOrderListRequest = {}, config: ShopeeConfig): Promise<ShopeeGetUnbindOrderListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetUnbindOrderListResponse>('/first_mile/get_unbind_order_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getUnbindOrderList',
  });
}

/**
 * getWaybill via Shopee `v2.first_mile.get_waybill`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getWaybill(params: ShopeeGetWaybillRequest, config: ShopeeConfig): Promise<ShopeeGetWaybillResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetWaybillResponse>('/first_mile/get_waybill', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getWaybill',
  });
}

/**
 * unbindFirstMileTrackingNumber via Shopee `v2.first_mile.unbind_first_mile_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function unbindFirstMileTrackingNumber(params: ShopeeUnbindFirstMileTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeUnbindFirstMileTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUnbindFirstMileTrackingNumberResponse>('/first_mile/unbind_first_mile_tracking_number', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'unbindFirstMileTrackingNumber',
  });
}

/**
 * unbindFirstMileTrackingNumberAll via Shopee `v2.first_mile.unbind_first_mile_tracking_number_all`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function unbindFirstMileTrackingNumberAll(params: ShopeeUnbindFirstMileTrackingNumberAllRequest, config: ShopeeConfig): Promise<ShopeeUnbindFirstMileTrackingNumberAllResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUnbindFirstMileTrackingNumberAllResponse>('/first_mile/unbind_first_mile_tracking_number_all', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'unbindFirstMileTrackingNumberAll',
  });
}
