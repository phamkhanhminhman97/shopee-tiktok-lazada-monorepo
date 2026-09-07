import { TiktokConfig } from '../dto/request/config.request';
import {
  combinablePackage,
  createFirstMileBundle,
  createPackage,
  getEligibleShippingService,
  getOrderSplitAttributes,
  getPackageHandoverTimeSlots,
  searchCombinablePackages,
  searchPackage,
  splitOrders,
  uncombinePackages,
} from '../api/fulfillment-v3.api';
import {
  TiktokCombinablePackageBody,
  TiktokCreateFirstMileBundleBody,
  TiktokCreatePackageBody,
  TiktokGetEligibleShippingServiceInput,
  TiktokGetOrderSplitAttributesQuery,
  TiktokSearchCombinablePackagesQuery,
  TiktokSearchPackageInput,
  TiktokSplitOrdersQuery,
  TiktokUncombinePackagesBody,
} from '../dto/request/fulfillment-v3.request';
import {
  TiktokCombinePackageResponse,
  TiktokCreateFirstMileBundleResponse,
  TiktokCreatePackagesResponse,
  TiktokGetEligibleShippingServiceResponse,
  TiktokGetOrderSplitAttributesResponse,
  TiktokGetPackageHandoverTimeSlotsResponse,
  TiktokSearchCombinablePackagesResponse,
  TiktokSearchPackageResponse,
  TiktokSplittableGroupsResponse,
  TiktokUncombinePackagesResponse,
} from '../dto/response/fulfillment-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Fulfillment` API namespace.
 *
 * Access via `tiktok.fulfillment.<method>()` on a `TiktokModule` instance.
 */
export class TiktokFulfillment {
  constructor(private config: TiktokConfig) {}

  async getOrderSplitAttributes(params: TiktokGetOrderSplitAttributesQuery): Promise<TiktokResponseCommon<TiktokGetOrderSplitAttributesResponse>> {
    return await getOrderSplitAttributes(params, this.config);
  }

  async splitOrders(params: TiktokSplitOrdersQuery): Promise<TiktokResponseCommon<TiktokSplittableGroupsResponse>> {
    return await splitOrders(params, this.config);
  }

  async getEligibleShippingService(params: TiktokGetEligibleShippingServiceInput): Promise<TiktokResponseCommon<TiktokGetEligibleShippingServiceResponse>> {
    return await getEligibleShippingService(params, this.config);
  }

  async searchPackage(params: TiktokSearchPackageInput): Promise<TiktokResponseCommon<TiktokSearchPackageResponse>> {
    return await searchPackage(params, this.config);
  }

  async createPackage(params: TiktokCreatePackageBody): Promise<TiktokResponseCommon<TiktokCreatePackagesResponse>> {
    return await createPackage(params, this.config);
  }

  async createFirstMileBundle(params: TiktokCreateFirstMileBundleBody): Promise<TiktokResponseCommon<TiktokCreateFirstMileBundleResponse>> {
    return await createFirstMileBundle(params, this.config);
  }

  async searchCombinablePackages(params: TiktokSearchCombinablePackagesQuery): Promise<TiktokResponseCommon<TiktokSearchCombinablePackagesResponse>> {
    return await searchCombinablePackages(params, this.config);
  }

  async combinablePackage(params: TiktokCombinablePackageBody): Promise<TiktokResponseCommon<TiktokCombinePackageResponse>> {
    return await combinablePackage(params, this.config);
  }

  async uncombinePackages(params: TiktokUncombinePackagesBody): Promise<TiktokResponseCommon<TiktokUncombinePackagesResponse>> {
    return await uncombinePackages(params, this.config);
  }

  async getPackageHandoverTimeSlots(package_id: string): Promise<TiktokResponseCommon<TiktokGetPackageHandoverTimeSlotsResponse>> {
    return await getPackageHandoverTimeSlots(package_id, this.config);
  }
}
