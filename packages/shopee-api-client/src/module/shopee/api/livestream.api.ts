import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeAddItemListRequest,
  ShopeeApplyItemSetRequest,
  ShopeeBanUserCommentRequest,
  ShopeeCreateSessionRequest,
  ShopeeDeleteItemListRequest,
  ShopeeDeleteShowItemRequest,
  ShopeeEndSessionRequest,
  ShopeeGetItemCountRequest,
  ShopeeGetItemListRequest,
  ShopeeGetItemSetItemListRequest,
  ShopeeGetItemSetListRequest,
  ShopeeGetLatestCommentListRequest,
  ShopeeGetLikeItemListRequest,
  ShopeeGetRecentItemListRequest,
  ShopeeGetSessionDetailRequest,
  ShopeeGetSessionItemMetricRequest,
  ShopeeGetSessionMetricRequest,
  ShopeeGetShowItemRequest,
  ShopeePostCommentRequest,
  ShopeeStartSessionRequest,
  ShopeeUnbanUserCommentRequest,
  ShopeeUpdateItemListRequest,
  ShopeeUpdateSessionRequest,
  ShopeeUpdateShowItemRequest,
  ShopeeUploadImageRequest,
} from '../dto/request/livestream.request';
import {
  ShopeeAddItemListResponse,
  ShopeeApplyItemSetResponse,
  ShopeeBanUserCommentResponse,
  ShopeeCreateSessionResponse,
  ShopeeDeleteItemListResponse,
  ShopeeDeleteShowItemResponse,
  ShopeeEndSessionResponse,
  ShopeeGetItemCountResponse,
  ShopeeGetItemListResponse,
  ShopeeGetItemSetItemListResponse,
  ShopeeGetItemSetListResponse,
  ShopeeGetLatestCommentListResponse,
  ShopeeGetLikeItemListResponse,
  ShopeeGetRecentItemListResponse,
  ShopeeGetSessionDetailResponse,
  ShopeeGetSessionItemMetricResponse,
  ShopeeGetSessionMetricResponse,
  ShopeeGetShowItemResponse,
  ShopeePostCommentResponse,
  ShopeeStartSessionResponse,
  ShopeeUnbanUserCommentResponse,
  ShopeeUpdateItemListResponse,
  ShopeeUpdateSessionResponse,
  ShopeeUpdateShowItemResponse,
  ShopeeUploadImageResponse,
} from '../dto/response/livestream.response';

/**
 * addItemList via Shopee `v2.livestream.add_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function addItemList(params: ShopeeAddItemListRequest, config: ShopeeConfig): Promise<ShopeeAddItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAddItemListResponse>('/livestream/add_item_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'addItemList',
  });
}

/**
 * applyItemSet via Shopee `v2.livestream.apply_item_set`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function applyItemSet(params: ShopeeApplyItemSetRequest, config: ShopeeConfig): Promise<ShopeeApplyItemSetResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeApplyItemSetResponse>('/livestream/apply_item_set', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'applyItemSet',
  });
}

/**
 * banUserComment via Shopee `v2.livestream.ban_user_comment`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function banUserComment(params: ShopeeBanUserCommentRequest, config: ShopeeConfig): Promise<ShopeeBanUserCommentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBanUserCommentResponse>('/livestream/ban_user_comment', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'banUserComment',
  });
}

/**
 * createSession via Shopee `v2.livestream.create_session`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createSession(params: ShopeeCreateSessionRequest, config: ShopeeConfig): Promise<ShopeeCreateSessionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateSessionResponse>('/livestream/create_session', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createSession',
  });
}

/**
 * deleteItemList via Shopee `v2.livestream.delete_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteItemList(params: ShopeeDeleteItemListRequest, config: ShopeeConfig): Promise<ShopeeDeleteItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteItemListResponse>('/livestream/delete_item_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteItemList',
  });
}

/**
 * deleteShowItem via Shopee `v2.livestream.delete_show_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteShowItem(params: ShopeeDeleteShowItemRequest, config: ShopeeConfig): Promise<ShopeeDeleteShowItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteShowItemResponse>('/livestream/delete_show_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteShowItem',
  });
}

/**
 * endSession via Shopee `v2.livestream.end_session`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function endSession(params: ShopeeEndSessionRequest, config: ShopeeConfig): Promise<ShopeeEndSessionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeEndSessionResponse>('/livestream/end_session', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'endSession',
  });
}

/**
 * getItemCount via Shopee `v2.livestream.get_item_count`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemCount(params: ShopeeGetItemCountRequest, config: ShopeeConfig): Promise<ShopeeGetItemCountResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemCountResponse>('/livestream/get_item_count', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemCount',
  });
}

/**
 * getItemList via Shopee `v2.livestream.get_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemList(params: ShopeeGetItemListRequest, config: ShopeeConfig): Promise<ShopeeGetItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemListResponse>('/livestream/get_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemList',
  });
}

/**
 * getItemSetItemList via Shopee `v2.livestream.get_item_set_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemSetItemList(params: ShopeeGetItemSetItemListRequest, config: ShopeeConfig): Promise<ShopeeGetItemSetItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemSetItemListResponse>('/livestream/get_item_set_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemSetItemList',
  });
}

/**
 * getItemSetList via Shopee `v2.livestream.get_item_set_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemSetList(params: ShopeeGetItemSetListRequest, config: ShopeeConfig): Promise<ShopeeGetItemSetListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemSetListResponse>('/livestream/get_item_set_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemSetList',
  });
}

/**
 * getLatestCommentList via Shopee `v2.livestream.get_latest_comment_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getLatestCommentList(params: ShopeeGetLatestCommentListRequest, config: ShopeeConfig): Promise<ShopeeGetLatestCommentListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetLatestCommentListResponse>('/livestream/get_latest_comment_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getLatestCommentList',
  });
}

/**
 * getLikeItemList via Shopee `v2.livestream.get_like_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getLikeItemList(params: ShopeeGetLikeItemListRequest, config: ShopeeConfig): Promise<ShopeeGetLikeItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetLikeItemListResponse>('/livestream/get_like_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getLikeItemList',
  });
}

/**
 * getRecentItemList via Shopee `v2.livestream.get_recent_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getRecentItemList(params: ShopeeGetRecentItemListRequest, config: ShopeeConfig): Promise<ShopeeGetRecentItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetRecentItemListResponse>('/livestream/get_recent_item_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getRecentItemList',
  });
}

/**
 * getSessionDetail via Shopee `v2.livestream.get_session_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSessionDetail(params: ShopeeGetSessionDetailRequest, config: ShopeeConfig): Promise<ShopeeGetSessionDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSessionDetailResponse>('/livestream/get_session_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSessionDetail',
  });
}

/**
 * getSessionItemMetric via Shopee `v2.livestream.get_session_item_metric`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSessionItemMetric(params: ShopeeGetSessionItemMetricRequest, config: ShopeeConfig): Promise<ShopeeGetSessionItemMetricResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSessionItemMetricResponse>('/livestream/get_session_item_metric', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSessionItemMetric',
  });
}

/**
 * getSessionMetric via Shopee `v2.livestream.get_session_metric`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSessionMetric(params: ShopeeGetSessionMetricRequest, config: ShopeeConfig): Promise<ShopeeGetSessionMetricResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSessionMetricResponse>('/livestream/get_session_metric', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSessionMetric',
  });
}

/**
 * getShowItem via Shopee `v2.livestream.get_show_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShowItem(params: ShopeeGetShowItemRequest, config: ShopeeConfig): Promise<ShopeeGetShowItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShowItemResponse>('/livestream/get_show_item', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShowItem',
  });
}

/**
 * postComment via Shopee `v2.livestream.post_comment`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function postComment(params: ShopeePostCommentRequest, config: ShopeeConfig): Promise<ShopeePostCommentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeePostCommentResponse>('/livestream/post_comment', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'postComment',
  });
}

/**
 * startSession via Shopee `v2.livestream.start_session`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function startSession(params: ShopeeStartSessionRequest, config: ShopeeConfig): Promise<ShopeeStartSessionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeStartSessionResponse>('/livestream/start_session', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'startSession',
  });
}

/**
 * unbanUserComment via Shopee `v2.livestream.unban_user_comment`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function unbanUserComment(params: ShopeeUnbanUserCommentRequest, config: ShopeeConfig): Promise<ShopeeUnbanUserCommentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUnbanUserCommentResponse>('/livestream/unban_user_comment', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'unbanUserComment',
  });
}

/**
 * updateItemList via Shopee `v2.livestream.update_item_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateItemList(params: ShopeeUpdateItemListRequest, config: ShopeeConfig): Promise<ShopeeUpdateItemListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateItemListResponse>('/livestream/update_item_list', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateItemList',
  });
}

/**
 * updateSession via Shopee `v2.livestream.update_session`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateSession(params: ShopeeUpdateSessionRequest, config: ShopeeConfig): Promise<ShopeeUpdateSessionResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateSessionResponse>('/livestream/update_session', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateSession',
  });
}

/**
 * updateShowItem via Shopee `v2.livestream.update_show_item`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateShowItem(params: ShopeeUpdateShowItemRequest, config: ShopeeConfig): Promise<ShopeeUpdateShowItemResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateShowItemResponse>('/livestream/update_show_item', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateShowItem',
  });
}

/**
 * uploadImage via Shopee `v2.livestream.upload_image`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadImage(params: ShopeeUploadImageRequest, config: ShopeeConfig): Promise<ShopeeUploadImageResponse> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest('/livestream/upload_image', config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${ShopeeHelper.SHOPEE_END_POINT_V2}/livestream/upload_image${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeUploadImageResponse>(url, { image: params.image }, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadImage');
  }

  return result;
}
