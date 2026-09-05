import { ShopeeConfig } from '../dto/request/config.request';
import {
  addFollowPrize,
  deleteFollowPrize,
  endFollowPrize,
  getFollowPrizeDetail,
  getFollowPrizeList,
  updateFollowPrize,
} from '../api/follow-prize.api';
import {
  ShopeeAddFollowPrizeRequest,
  ShopeeDeleteFollowPrizeRequest,
  ShopeeEndFollowPrizeRequest,
  ShopeeGetFollowPrizeDetailRequest,
  ShopeeGetFollowPrizeListRequest,
  ShopeeUpdateFollowPrizeRequest,
} from '../dto/request/follow-prize.request';
import {
  ShopeeAddFollowPrizeResponse,
  ShopeeDeleteFollowPrizeResponse,
  ShopeeEndFollowPrizeResponse,
  ShopeeGetFollowPrizeDetailResponse,
  ShopeeGetFollowPrizeListResponse,
  ShopeeUpdateFollowPrizeResponse,
} from '../dto/response/follow-prize.response';

/**
 * Shopee `v2.follow_prize.*` API namespace.
 *
 * Access via `shopee.followPrize.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeFollowPrize {
  constructor(private config: ShopeeConfig) {}

  async addFollowPrize(params: ShopeeAddFollowPrizeRequest): Promise<ShopeeAddFollowPrizeResponse> {
    return await addFollowPrize(params, this.config);
  }

  async deleteFollowPrize(params: ShopeeDeleteFollowPrizeRequest): Promise<ShopeeDeleteFollowPrizeResponse> {
    return await deleteFollowPrize(params, this.config);
  }

  async endFollowPrize(params: ShopeeEndFollowPrizeRequest): Promise<ShopeeEndFollowPrizeResponse> {
    return await endFollowPrize(params, this.config);
  }

  async getFollowPrizeDetail(params: ShopeeGetFollowPrizeDetailRequest = {}): Promise<ShopeeGetFollowPrizeDetailResponse> {
    return await getFollowPrizeDetail(params, this.config);
  }

  async getFollowPrizeList(params: ShopeeGetFollowPrizeListRequest): Promise<ShopeeGetFollowPrizeListResponse> {
    return await getFollowPrizeList(params, this.config);
  }

  async updateFollowPrize(params: ShopeeUpdateFollowPrizeRequest): Promise<ShopeeUpdateFollowPrizeResponse> {
    return await updateFollowPrize(params, this.config);
  }
}
