import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * addFollowPrize via Shopee `v2.follow_prize.add_follow_prize`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addFollowPrize(params: ShopeeAddFollowPrizeRequest, config: ShopeeConfig): Promise<ShopeeAddFollowPrizeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddFollowPrizeResponse>('/follow_prize/add_follow_prize', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addFollowPrize',
  });
}

/**
 * deleteFollowPrize via Shopee `v2.follow_prize.delete_follow_prize`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteFollowPrize(params: ShopeeDeleteFollowPrizeRequest, config: ShopeeConfig): Promise<ShopeeDeleteFollowPrizeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteFollowPrizeResponse>('/follow_prize/delete_follow_prize', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteFollowPrize',
  });
}

/**
 * endFollowPrize via Shopee `v2.follow_prize.end_follow_prize`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endFollowPrize(params: ShopeeEndFollowPrizeRequest, config: ShopeeConfig): Promise<ShopeeEndFollowPrizeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndFollowPrizeResponse>('/follow_prize/end_follow_prize', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endFollowPrize',
  });
}

/**
 * getFollowPrizeDetail via Shopee `v2.follow_prize.get_follow_prize_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getFollowPrizeDetail(params: ShopeeGetFollowPrizeDetailRequest = {}, config: ShopeeConfig): Promise<ShopeeGetFollowPrizeDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetFollowPrizeDetailResponse>('/follow_prize/get_follow_prize_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getFollowPrizeDetail',
  });
}

/**
 * getFollowPrizeList via Shopee `v2.follow_prize.get_follow_prize_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getFollowPrizeList(params: ShopeeGetFollowPrizeListRequest, config: ShopeeConfig): Promise<ShopeeGetFollowPrizeListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetFollowPrizeListResponse>('/follow_prize/get_follow_prize_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getFollowPrizeList',
  });
}

/**
 * updateFollowPrize via Shopee `v2.follow_prize.update_follow_prize`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateFollowPrize(params: ShopeeUpdateFollowPrizeRequest, config: ShopeeConfig): Promise<ShopeeUpdateFollowPrizeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateFollowPrizeResponse>('/follow_prize/update_follow_prize', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateFollowPrize',
  });
}
