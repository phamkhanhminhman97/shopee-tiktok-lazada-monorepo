import { LazadaConfig } from '../dto/request/config.request';
import {
  mCNQueryTagInfoByName,
  mcnContentCancelSchedulePublish,
  mcnContentCompleteCreateVideo,
  mcnContentCreate,
  mcnContentInitCreateVideo,
  mcnContentListCategory,
  mcnContentPropertyTagList,
  mcnContentReplySchedulePublish,
  mcnContentUploadImage,
  mcnContentUploadVideoBlock,
  mcnProductValidator,
  mcnSimilarProductSearch,
  queryContentReviewRecords,
} from '../api/lazlike.api';
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
 * Lazada `lazlike-api` API namespace.
 *
 * Access via `lazada.lazlike.<method>()` on a `LazadaModule` instance.
 */
export class LazadaLazlike {
  constructor(private config: LazadaConfig) {}

  async mcnContentListCategory(): Promise<LazlikeMcnContentListCategoryResponse> {
    return await mcnContentListCategory(this.config);
  }

  async queryContentReviewRecords(params: LazlikeQueryContentReviewRecordsRequest): Promise<LazlikeQueryContentReviewRecordsResponse> {
    return await queryContentReviewRecords(params, this.config);
  }

  async mcnProductValidator(params: LazlikeMcnProductValidatorRequest): Promise<LazlikeMcnProductValidatorResponse> {
    return await mcnProductValidator(params, this.config);
  }

  async mcnContentCancelSchedulePublish(params: LazlikeMcnContentCancelSchedulePublishRequest): Promise<LazlikeMcnContentCancelSchedulePublishResponse> {
    return await mcnContentCancelSchedulePublish(params, this.config);
  }

  async mcnContentCreate(params: LazlikeMcnContentCreateRequest): Promise<LazlikeMcnContentCreateResponse> {
    return await mcnContentCreate(params, this.config);
  }

  async mCNQueryTagInfoByName(params: LazlikeMCNQueryTagInfoByNameRequest): Promise<LazlikeMCNQueryTagInfoByNameResponse> {
    return await mCNQueryTagInfoByName(params, this.config);
  }

  async mcnContentReplySchedulePublish(params: LazlikeMcnContentReplySchedulePublishRequest): Promise<LazlikeMcnContentReplySchedulePublishResponse> {
    return await mcnContentReplySchedulePublish(params, this.config);
  }

  async mcnContentUploadImage(params: LazlikeMcnContentUploadImageRequest): Promise<LazlikeMcnContentUploadImageResponse> {
    return await mcnContentUploadImage(params, this.config);
  }

  async mcnContentPropertyTagList(): Promise<LazlikeMcnContentPropertyTagListResponse> {
    return await mcnContentPropertyTagList(this.config);
  }

  async mcnSimilarProductSearch(params: LazlikeMcnSimilarProductSearchRequest): Promise<LazlikeMcnSimilarProductSearchResponse> {
    return await mcnSimilarProductSearch(params, this.config);
  }

  async mcnContentCompleteCreateVideo(params: LazlikeMcnContentCompleteCreateVideoRequest): Promise<LazlikeMcnContentCompleteCreateVideoResponse> {
    return await mcnContentCompleteCreateVideo(params, this.config);
  }

  async mcnContentInitCreateVideo(params: LazlikeMcnContentInitCreateVideoRequest): Promise<LazlikeMcnContentInitCreateVideoResponse> {
    return await mcnContentInitCreateVideo(params, this.config);
  }

  async mcnContentUploadVideoBlock(params: LazlikeMcnContentUploadVideoBlockRequest): Promise<LazlikeMcnContentUploadVideoBlockResponse> {
    return await mcnContentUploadVideoBlock(params, this.config);
  }
}
