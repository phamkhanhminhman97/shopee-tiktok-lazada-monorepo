import { ShopeeConfig } from '../dto/request/config.request';
import {
  bindCourierDeliveryFirstMileTrackingNumber,
  bindFirstMileTrackingNumber,
  generateAndBindFirstMileTrackingNumber,
  generateFirstMileTrackingNumber,
  getChannelList,
  getCourierDeliveryChannelList,
  getCourierDeliveryDetail,
  getCourierDeliveryTrackingNumberList,
  getCourierDeliveryWaybill,
  getDetail,
  getTrackingNumberList,
  getTransitWarehouseList,
  getUnbindOrderList,
  getWaybill,
  unbindFirstMileTrackingNumber,
  unbindFirstMileTrackingNumberAll,
} from '../api/first-mile.api';
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
 * Shopee `v2.first_mile.*` API namespace.
 *
 * Access via `shopee.firstMile.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeFirstMile {
  constructor(private config: ShopeeConfig) {}

  async bindCourierDeliveryFirstMileTrackingNumber(params: ShopeeBindCourierDeliveryFirstMileTrackingNumberRequest): Promise<ShopeeBindCourierDeliveryFirstMileTrackingNumberResponse> {
    return await bindCourierDeliveryFirstMileTrackingNumber(params, this.config);
  }

  async bindFirstMileTrackingNumber(params: ShopeeBindFirstMileTrackingNumberRequest): Promise<ShopeeBindFirstMileTrackingNumberResponse> {
    return await bindFirstMileTrackingNumber(params, this.config);
  }

  async generateAndBindFirstMileTrackingNumber(params: ShopeeGenerateAndBindFirstMileTrackingNumberRequest): Promise<ShopeeGenerateAndBindFirstMileTrackingNumberResponse> {
    return await generateAndBindFirstMileTrackingNumber(params, this.config);
  }

  async generateFirstMileTrackingNumber(params: ShopeeGenerateFirstMileTrackingNumberRequest): Promise<ShopeeGenerateFirstMileTrackingNumberResponse> {
    return await generateFirstMileTrackingNumber(params, this.config);
  }

  async getChannelList(params: ShopeeGetChannelListRequest = {}): Promise<ShopeeGetChannelListResponse> {
    return await getChannelList(params, this.config);
  }

  async getCourierDeliveryChannelList(params: ShopeeGetCourierDeliveryChannelListRequest = {}): Promise<ShopeeGetCourierDeliveryChannelListResponse> {
    return await getCourierDeliveryChannelList(params, this.config);
  }

  async getCourierDeliveryDetail(params: ShopeeGetCourierDeliveryDetailRequest): Promise<ShopeeGetCourierDeliveryDetailResponse> {
    return await getCourierDeliveryDetail(params, this.config);
  }

  async getCourierDeliveryTrackingNumberList(params: ShopeeGetCourierDeliveryTrackingNumberListRequest): Promise<ShopeeGetCourierDeliveryTrackingNumberListResponse> {
    return await getCourierDeliveryTrackingNumberList(params, this.config);
  }

  async getCourierDeliveryWaybill(params: ShopeeGetCourierDeliveryWaybillRequest): Promise<ShopeeGetCourierDeliveryWaybillResponse> {
    return await getCourierDeliveryWaybill(params, this.config);
  }

  async getDetail(params: ShopeeGetDetailRequest): Promise<ShopeeGetDetailResponse> {
    return await getDetail(params, this.config);
  }

  async getTrackingNumberList(params: ShopeeGetTrackingNumberListRequest): Promise<ShopeeGetTrackingNumberListResponse> {
    return await getTrackingNumberList(params, this.config);
  }

  async getTransitWarehouseList(params: ShopeeGetTransitWarehouseListRequest = {}): Promise<ShopeeGetTransitWarehouseListResponse> {
    return await getTransitWarehouseList(params, this.config);
  }

  async getUnbindOrderList(params: ShopeeGetUnbindOrderListRequest = {}): Promise<ShopeeGetUnbindOrderListResponse> {
    return await getUnbindOrderList(params, this.config);
  }

  async getWaybill(params: ShopeeGetWaybillRequest): Promise<ShopeeGetWaybillResponse> {
    return await getWaybill(params, this.config);
  }

  async unbindFirstMileTrackingNumber(params: ShopeeUnbindFirstMileTrackingNumberRequest): Promise<ShopeeUnbindFirstMileTrackingNumberResponse> {
    return await unbindFirstMileTrackingNumber(params, this.config);
  }

  async unbindFirstMileTrackingNumberAll(params: ShopeeUnbindFirstMileTrackingNumberAllRequest): Promise<ShopeeUnbindFirstMileTrackingNumberAllResponse> {
    return await unbindFirstMileTrackingNumberAll(params, this.config);
  }
}
