import { TiktokConfig } from '../dto/request/config.request';
import {
  createActivity,
  deactivateActivity,
  getActivity,
  getCoupon,
  removeActivityProduct,
  searchActivity,
  searchCoupon,
  updateActivity,
  updateActivityProduct,
} from '../api/promotion-v3.api';
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
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Promotion` API namespace.
 *
 * Access via `tiktok.promotion.<method>()` on a `TiktokModule` instance.
 */
export class TiktokPromotion {
  constructor(private config: TiktokConfig) {}

  async createActivity(params: TiktokCreateActivityBody): Promise<TiktokResponseCommon<TiktokCreateActivityResponse>> {
    return await createActivity(params, this.config);
  }

  async updateActivity(params: TiktokUpdateActivityBody): Promise<TiktokResponseCommon<TiktokUpdateActivityResponse>> {
    return await updateActivity(params, this.config);
  }

  async deactivateActivity(activity_id: string): Promise<TiktokResponseCommon<TiktokDeactivateActivityResponse>> {
    return await deactivateActivity(activity_id, this.config);
  }

  async getActivity(activity_id: string): Promise<TiktokResponseCommon<TiktokGetActivityResponse>> {
    return await getActivity(activity_id, this.config);
  }

  async searchActivity(body: TiktokSearchActivityBody): Promise<TiktokResponseCommon<TiktokSearchActivityResponse>> {
    return await searchActivity(body, this.config);
  }

  async updateActivityProduct(body: TiktokUpdateActivityProductBody): Promise<TiktokResponseCommon<TiktokUpdateActivityProductResponse>> {
    return await updateActivityProduct(body, this.config);
  }

  async removeActivityProduct(params: TiktokRemoveActivityProductInput): Promise<TiktokResponseCommon<TiktokRemoveActivityProductResponse>> {
    return await removeActivityProduct(params, this.config);
  }

  async getCoupon(coupon_id: string): Promise<TiktokResponseCommon<TiktokGetCouponResponse>> {
    return await getCoupon(coupon_id, this.config);
  }

  async searchCoupon(body: TiktokSearchCouponBody): Promise<TiktokResponseCommon<TiktokSearchCouponResponse>> {
    return await searchCoupon(body, this.config);
  }
}
