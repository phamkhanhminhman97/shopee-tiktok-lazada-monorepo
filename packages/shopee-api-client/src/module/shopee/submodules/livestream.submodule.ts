import { ShopeeConfig } from '../dto/request/config.request';
import {
  addItemList,
  applyItemSet,
  banUserComment,
  createSession,
  deleteItemList,
  deleteShowItem,
  endSession,
  getItemCount,
  getItemList,
  getItemSetItemList,
  getItemSetList,
  getLatestCommentList,
  getLikeItemList,
  getRecentItemList,
  getSessionDetail,
  getSessionItemMetric,
  getSessionMetric,
  getShowItem,
  postComment,
  startSession,
  unbanUserComment,
  updateItemList,
  updateSession,
  updateShowItem,
  uploadImage,
} from '../api/livestream.api';
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
 * Shopee `v2.livestream.*` API namespace.
 *
 * Access via `shopee.livestream.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeLivestream {
  constructor(private config: ShopeeConfig) {}

  async addItemList(params: ShopeeAddItemListRequest): Promise<ShopeeAddItemListResponse> {
    return await addItemList(params, this.config);
  }

  async applyItemSet(params: ShopeeApplyItemSetRequest): Promise<ShopeeApplyItemSetResponse> {
    return await applyItemSet(params, this.config);
  }

  async banUserComment(params: ShopeeBanUserCommentRequest): Promise<ShopeeBanUserCommentResponse> {
    return await banUserComment(params, this.config);
  }

  async createSession(params: ShopeeCreateSessionRequest): Promise<ShopeeCreateSessionResponse> {
    return await createSession(params, this.config);
  }

  async deleteItemList(params: ShopeeDeleteItemListRequest): Promise<ShopeeDeleteItemListResponse> {
    return await deleteItemList(params, this.config);
  }

  async deleteShowItem(params: ShopeeDeleteShowItemRequest): Promise<ShopeeDeleteShowItemResponse> {
    return await deleteShowItem(params, this.config);
  }

  async endSession(params: ShopeeEndSessionRequest): Promise<ShopeeEndSessionResponse> {
    return await endSession(params, this.config);
  }

  async getItemCount(params: ShopeeGetItemCountRequest): Promise<ShopeeGetItemCountResponse> {
    return await getItemCount(params, this.config);
  }

  async getItemList(params: ShopeeGetItemListRequest): Promise<ShopeeGetItemListResponse> {
    return await getItemList(params, this.config);
  }

  async getItemSetItemList(params: ShopeeGetItemSetItemListRequest): Promise<ShopeeGetItemSetItemListResponse> {
    return await getItemSetItemList(params, this.config);
  }

  async getItemSetList(params: ShopeeGetItemSetListRequest): Promise<ShopeeGetItemSetListResponse> {
    return await getItemSetList(params, this.config);
  }

  async getLatestCommentList(params: ShopeeGetLatestCommentListRequest): Promise<ShopeeGetLatestCommentListResponse> {
    return await getLatestCommentList(params, this.config);
  }

  async getLikeItemList(params: ShopeeGetLikeItemListRequest): Promise<ShopeeGetLikeItemListResponse> {
    return await getLikeItemList(params, this.config);
  }

  async getRecentItemList(params: ShopeeGetRecentItemListRequest): Promise<ShopeeGetRecentItemListResponse> {
    return await getRecentItemList(params, this.config);
  }

  async getSessionDetail(params: ShopeeGetSessionDetailRequest): Promise<ShopeeGetSessionDetailResponse> {
    return await getSessionDetail(params, this.config);
  }

  async getSessionItemMetric(params: ShopeeGetSessionItemMetricRequest): Promise<ShopeeGetSessionItemMetricResponse> {
    return await getSessionItemMetric(params, this.config);
  }

  async getSessionMetric(params: ShopeeGetSessionMetricRequest): Promise<ShopeeGetSessionMetricResponse> {
    return await getSessionMetric(params, this.config);
  }

  async getShowItem(params: ShopeeGetShowItemRequest): Promise<ShopeeGetShowItemResponse> {
    return await getShowItem(params, this.config);
  }

  async postComment(params: ShopeePostCommentRequest): Promise<ShopeePostCommentResponse> {
    return await postComment(params, this.config);
  }

  async startSession(params: ShopeeStartSessionRequest): Promise<ShopeeStartSessionResponse> {
    return await startSession(params, this.config);
  }

  async unbanUserComment(params: ShopeeUnbanUserCommentRequest): Promise<ShopeeUnbanUserCommentResponse> {
    return await unbanUserComment(params, this.config);
  }

  async updateItemList(params: ShopeeUpdateItemListRequest): Promise<ShopeeUpdateItemListResponse> {
    return await updateItemList(params, this.config);
  }

  async updateSession(params: ShopeeUpdateSessionRequest): Promise<ShopeeUpdateSessionResponse> {
    return await updateSession(params, this.config);
  }

  async updateShowItem(params: ShopeeUpdateShowItemRequest): Promise<ShopeeUpdateShowItemResponse> {
    return await updateShowItem(params, this.config);
  }

  async uploadImage(params: ShopeeUploadImageRequest): Promise<ShopeeUploadImageResponse> {
    return await uploadImage(params, this.config);
  }
}
