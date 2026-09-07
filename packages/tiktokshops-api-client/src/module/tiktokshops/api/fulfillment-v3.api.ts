import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
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

/**
 * Get whether an order can be split.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/get-order-split-attributes-202309
 */
export async function getOrderSplitAttributes(params: TiktokGetOrderSplitAttributesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOrderSplitAttributesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOrderSplitAttributesResponse>>(
    `/fulfillment/202309/orders/split_attributes`,
    'GET',
    { query: params },
    config,
    'getOrderSplitAttributes',
  );
}

/**
 * Split an order into multiple packages.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/split-orders-202309
 */
export async function splitOrders(params: TiktokSplitOrdersQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSplittableGroupsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSplittableGroupsResponse>>(
    `/fulfillment/202309/orders/${params.order_id}/split`,
    'POST',
    { body: params.body },
    config,
    'splitOrders',
  );
}

/**
 * Query eligible shipping services for an order.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/get-eligible-shipping-service-202309
 */
export async function getEligibleShippingService(params: TiktokGetEligibleShippingServiceInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetEligibleShippingServiceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetEligibleShippingServiceResponse>>(
    `/fulfillment/202309/orders/${params.order_id}/shipping_services/query`,
    'POST',
    { body: params.body },
    config,
    'getEligibleShippingService',
  );
}

/**
 * Search for packages by query.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/search-package-202309
 */
export async function searchPackage(params: TiktokSearchPackageInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchPackageResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchPackageResponse>>(
    `/fulfillment/202309/packages/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchPackage',
  );
}

/**
 * Create a shipping package for an order.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/create-packages-202309
 */
export async function createPackage(params: TiktokCreatePackageBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreatePackagesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreatePackagesResponse>>(
    `/fulfillment/202309/packages`,
    'POST',
    { body: params },
    config,
    'createPackage',
  );
}

/**
 * Create a first mile bundle.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/create-first-mile-bundle-202407
 */
export async function createFirstMileBundle(params: TiktokCreateFirstMileBundleBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateFirstMileBundleResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateFirstMileBundleResponse>>(
    `/fulfillment/202407/bundles`,
    'POST',
    { body: params },
    config,
    'createFirstMileBundle',
  );
}

/**
 * Search for packages that can be combined.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/search-combinable-packages-202309
 */
export async function searchCombinablePackages(params: TiktokSearchCombinablePackagesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchCombinablePackagesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchCombinablePackagesResponse>>(
    `/fulfillment/202309/combinable_packages/search`,
    'GET',
    { query: params },
    config,
    'searchCombinablePackages',
  );
}

/**
 * Combine multiple packages into one.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/combine-package-202309
 */
export async function combinablePackage(params: TiktokCombinablePackageBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCombinePackageResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCombinePackageResponse>>(
    `/fulfillment/202309/packages/combine`,
    'POST',
    { body: params },
    config,
    'combinablePackage',
  );
}

/**
 * Uncombine a previously combined package.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/uncombine-packages-202309
 */
export async function uncombinePackages(params: TiktokUncombinePackagesBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUncombinePackagesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUncombinePackagesResponse>>(
    `/fulfillment/202309/packages/${params.package_id}/uncombine`,
    'POST',
    { body: params.body },
    config,
    'uncombinePackages',
  );
}

/**
 * Get available handover time slots for a package.
 *
 * Reference: https://partner.tiktokshop.com/docv2/page/get-package-handover-time-slots-202309
 */
export async function getPackageHandoverTimeSlots(package_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetPackageHandoverTimeSlotsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetPackageHandoverTimeSlotsResponse>>(
    `/fulfillment/202309/packages/${package_id}/handover_time_slots`,
    'GET',
    {},
    config,
    'getPackageHandoverTimeSlots',
  );
}
