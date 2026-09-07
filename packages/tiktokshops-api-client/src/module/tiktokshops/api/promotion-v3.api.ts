import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokCreateActivityBody,
  TiktokRemoveActivityProductInput,
  TiktokSearchActivityBody,
  TiktokSearchCouponBody,
  TiktokUpdateActivityBody,
  TiktokUpdateActivityProductBody,
} from '../dto/request/promotion-v3.request';
import {
  TiktokCreateActivityResponse,
  TiktokDeactivateActivityResponse,
  TiktokGetActivityResponse,
  TiktokGetCouponResponse,
  TiktokRemoveActivityProductResponse,
  TiktokSearchActivityResponse,
  TiktokSearchCouponResponse,
  TiktokUpdateActivityProductResponse,
  TiktokUpdateActivityResponse,
} from '../dto/response/promotion-v3.response';

/**
 * Create a new promotion activity.
 *
 * Supported promotion types include:
 * - FIXED_PRICE: Fixed price for products
 * - DIRECT_DISCOUNT: Percentage discount
 * - FLASHSALE: Flash sale event
 * - SHIPPING_DISCOUNT: Discount on shipping fees
 * - BUY_MORE_SAVE_MORE: Tiered discounts for bulk purchases
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/create-activity-202309
 */
export async function createActivity(params: TiktokCreateActivityBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateActivityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateActivityResponse>>(
    `/promotion/202309/activities`,
    'POST',
    { body: params },
    config,
    'createActivity',
  );
}

/**
 * Update an existing promotion activity.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/update-activity-202309
 */
export async function updateActivity(params: TiktokUpdateActivityBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateActivityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateActivityResponse>>(
    `/promotion/202309/activities/${params.activity_id}`,
    'PUT',
    { body: params },
    config,
    'updateActivity',
  );
}

/**
 * Deactivate an existing promotion activity.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/deactivate-activity-202309
 */
export async function deactivateActivity(activity_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokDeactivateActivityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokDeactivateActivityResponse>>(
    `/promotion/202309/activities/${activity_id}/deactivate`,
    'POST',
    {},
    config,
    'deactivateActivity',
  );
}

/**
 * Get a promotion activity by its ID.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/get-activity-202309
 */
export async function getActivity(activity_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetActivityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetActivityResponse>>(
    `/promotion/202309/activities/${activity_id}`,
    'GET',
    {},
    config,
    'getActivity',
  );
}

/**
 * Search promotion activities using filters such as type, status, and time range.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/search-activity-202309
 */
export async function searchActivity(body: TiktokSearchActivityBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchActivityResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchActivityResponse>>(
    `/promotion/202309/activities/search`,
    'POST',
    {},
    config,
    'searchActivity',
  );
}

/**
 * Update products under a promotion activity.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/update-activity-product-202309
 */
export async function updateActivityProduct(body: TiktokUpdateActivityProductBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateActivityProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateActivityProductResponse>>(
    `/promotion/202309/activities/${body.activity_id}/products`,
    'PUT',
    {},
    config,
    'updateActivityProduct',
  );
}

/**
 * Remove products from a promotion activity.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/remove-activity-product-202309
 */
export async function removeActivityProduct(params: TiktokRemoveActivityProductInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokRemoveActivityProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokRemoveActivityProductResponse>>(
    `/promotion/202309/activities/${params.activity_id}/products`,
    'DELETE',
    { body: params.body },
    config,
    'removeActivityProduct',
  );
}

/**
 * Retrieve a specific coupon by its ID.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/get-coupon-202406
 */
export async function getCoupon(coupon_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetCouponResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetCouponResponse>>(
    `/promotion/202406/coupons/${coupon_id}`,
    'GET',
    {},
    config,
    'getCoupon',
  );
}

/**
 * Search coupons using filter options such as title, status, and time range.
 *
 * Reference:
 * https://partner.tiktokshop.com/docv2/page/search-coupon-202406
 */
export async function searchCoupon(body: TiktokSearchCouponBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchCouponResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchCouponResponse>>(
    `/promotion/202406/coupons/search`,
    'DELETE',
    { body: body },
    config,
    'searchCoupon',
  );
}
