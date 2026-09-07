import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  LazlikeMCNQueryTagInfoByNameRequest,
  LazlikeMcnContentCancelSchedulePublishRequest,
  LazlikeMcnContentCompleteCreateVideoRequest,
  LazlikeMcnContentCreateRequest,
  LazlikeMcnContentInitCreateVideoRequest,
  LazlikeMcnContentListCategoryRequest,
  LazlikeMcnContentPropertyTagListRequest,
  LazlikeMcnContentReplySchedulePublishRequest,
  LazlikeMcnContentUploadImageRequest,
  LazlikeMcnContentUploadVideoBlockRequest,
  LazlikeMcnProductValidatorRequest,
  LazlikeMcnSimilarProductSearchRequest,
  LazlikeQueryContentReviewRecordsRequest,
} from '../dto/request/lazlike.request';
import {
  LazlikeMCNQueryTagInfoByNameResponse,
  LazlikeMcnContentCancelSchedulePublishResponse,
  LazlikeMcnContentCompleteCreateVideoResponse,
  LazlikeMcnContentCreateResponse,
  LazlikeMcnContentInitCreateVideoResponse,
  LazlikeMcnContentListCategoryResponse,
  LazlikeMcnContentPropertyTagListResponse,
  LazlikeMcnContentReplySchedulePublishResponse,
  LazlikeMcnContentUploadImageResponse,
  LazlikeMcnContentUploadVideoBlockResponse,
  LazlikeMcnProductValidatorResponse,
  LazlikeMcnSimilarProductSearchResponse,
  LazlikeQueryContentReviewRecordsResponse,
} from '../dto/response/lazlike.response';

/**
 * McnContentListCategory via Lazada `GET /content/mcn/category/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentListCategory(config: LazadaConfig): Promise<LazlikeMcnContentListCategoryResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentListCategoryResponse>('/content/mcn/category/list', 'GET', {} as unknown as Record<string, unknown>, config, 'mcnContentListCategory');
}

/**
 * queryContentReviewRecords via Lazada `GET /content/mcn/content/queryReviewRecords`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryContentReviewRecords(params: LazlikeQueryContentReviewRecordsRequest, config: LazadaConfig): Promise<LazlikeQueryContentReviewRecordsResponse> {
  return LazadaHelper.callLazadaApi<LazlikeQueryContentReviewRecordsResponse>('/content/mcn/content/queryReviewRecords', 'GET', params as unknown as Record<string, unknown>, config, 'queryContentReviewRecords');
}

/**
 * McnProductValidator via Lazada `GET /content/mcn/product/validate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnProductValidator(params: LazlikeMcnProductValidatorRequest, config: LazadaConfig): Promise<LazlikeMcnProductValidatorResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnProductValidatorResponse>('/content/mcn/product/validate', 'GET', params as unknown as Record<string, unknown>, config, 'mcnProductValidator');
}

/**
 * McnContentCancelSchedulePublish via Lazada `POST /content/mcn/content/cancelScheduled`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentCancelSchedulePublish(params: LazlikeMcnContentCancelSchedulePublishRequest, config: LazadaConfig): Promise<LazlikeMcnContentCancelSchedulePublishResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentCancelSchedulePublishResponse>('/content/mcn/content/cancelScheduled', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentCancelSchedulePublish');
}

/**
 * McnContentCreate via Lazada `POST /content/mcn/content/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentCreate(params: LazlikeMcnContentCreateRequest, config: LazadaConfig): Promise<LazlikeMcnContentCreateResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentCreateResponse>('/content/mcn/content/create', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentCreate');
}

/**
 * MCNQueryTagInfoByName via Lazada `POST /content/mcn/content/queryTagInfosByName`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mCNQueryTagInfoByName(params: LazlikeMCNQueryTagInfoByNameRequest, config: LazadaConfig): Promise<LazlikeMCNQueryTagInfoByNameResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMCNQueryTagInfoByNameResponse>('/content/mcn/content/queryTagInfosByName', 'POST', params as unknown as Record<string, unknown>, config, 'mCNQueryTagInfoByName');
}

/**
 * McnContentReplySchedulePublish via Lazada `POST /content/mcn/content/replySchedulePublish`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentReplySchedulePublish(params: LazlikeMcnContentReplySchedulePublishRequest, config: LazadaConfig): Promise<LazlikeMcnContentReplySchedulePublishResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentReplySchedulePublishResponse>('/content/mcn/content/replySchedulePublish', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentReplySchedulePublish');
}

/**
 * McnContentUploadImage via Lazada `POST /content/mcn/image/upload`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentUploadImage(params: LazlikeMcnContentUploadImageRequest, config: LazadaConfig): Promise<LazlikeMcnContentUploadImageResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentUploadImageResponse>('/content/mcn/image/upload', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentUploadImage');
}

/**
 * McnContentPropertyTagList via Lazada `POST /content/mcn/property/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentPropertyTagList(config: LazadaConfig): Promise<LazlikeMcnContentPropertyTagListResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentPropertyTagListResponse>('/content/mcn/property/list', 'POST', {} as unknown as Record<string, unknown>, config, 'mcnContentPropertyTagList');
}

/**
 * McnSimilarProductSearch via Lazada `POST /content/mcn/similar/product/search`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnSimilarProductSearch(params: LazlikeMcnSimilarProductSearchRequest, config: LazadaConfig): Promise<LazlikeMcnSimilarProductSearchResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnSimilarProductSearchResponse>('/content/mcn/similar/product/search', 'POST', params as unknown as Record<string, unknown>, config, 'mcnSimilarProductSearch');
}

/**
 * McnContentCompleteCreateVideo via Lazada `POST /content/mcn/video/block/commit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentCompleteCreateVideo(params: LazlikeMcnContentCompleteCreateVideoRequest, config: LazadaConfig): Promise<LazlikeMcnContentCompleteCreateVideoResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentCompleteCreateVideoResponse>('/content/mcn/video/block/commit', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentCompleteCreateVideo');
}

/**
 * McnContentInitCreateVideo via Lazada `POST /content/mcn/video/block/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentInitCreateVideo(params: LazlikeMcnContentInitCreateVideoRequest, config: LazadaConfig): Promise<LazlikeMcnContentInitCreateVideoResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentInitCreateVideoResponse>('/content/mcn/video/block/create', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentInitCreateVideo');
}

/**
 * McnContentUploadVideoBlock via Lazada `POST /content/mcn/video/block/upload`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function mcnContentUploadVideoBlock(params: LazlikeMcnContentUploadVideoBlockRequest, config: LazadaConfig): Promise<LazlikeMcnContentUploadVideoBlockResponse> {
  return LazadaHelper.callLazadaApi<LazlikeMcnContentUploadVideoBlockResponse>('/content/mcn/video/block/upload', 'POST', params as unknown as Record<string, unknown>, config, 'mcnContentUploadVideoBlock');
}
