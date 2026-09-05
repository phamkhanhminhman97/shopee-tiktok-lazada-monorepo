import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddTopPicksRequest,
  ShopeeDeleteTopPicksRequest,
  ShopeeGetTopPicksListRequest,
  ShopeeUpdateTopPicksRequest,
} from '../dto/request/top-picks.request';
import {
  ShopeeAddTopPicksResponse,
  ShopeeDeleteTopPicksResponse,
  ShopeeGetTopPicksListResponse,
  ShopeeUpdateTopPicksResponse,
} from '../dto/response/top-picks.response';

/**
 * addTopPicks via Shopee `v2.top_picks.add_top_picks`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addTopPicks(params: ShopeeAddTopPicksRequest, config: ShopeeConfig): Promise<ShopeeAddTopPicksResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddTopPicksResponse>('/top_picks/add_top_picks', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addTopPicks',
  });
}

/**
 * deleteTopPicks via Shopee `v2.top_picks.delete_top_picks`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteTopPicks(params: ShopeeDeleteTopPicksRequest, config: ShopeeConfig): Promise<ShopeeDeleteTopPicksResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteTopPicksResponse>('/top_picks/delete_top_picks', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteTopPicks',
  });
}

/**
 * getTopPicksList via Shopee `v2.top_picks.get_top_picks_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTopPicksList(config: ShopeeConfig): Promise<ShopeeGetTopPicksListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetTopPicksListResponse>('/top_picks/get_top_picks_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTopPicksList',
  });
}

/**
 * updateTopPicks via Shopee `v2.top_picks.update_top_picks`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateTopPicks(params: ShopeeUpdateTopPicksRequest, config: ShopeeConfig): Promise<ShopeeUpdateTopPicksResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateTopPicksResponse>('/top_picks/update_top_picks', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateTopPicks',
  });
}
