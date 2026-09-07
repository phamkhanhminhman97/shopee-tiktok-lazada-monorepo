export interface LazlikeMcnContentListCategoryResult {
  categoryList: Record<string, unknown>[];
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentListCategory {
  result: LazlikeMcnContentListCategoryResult;
}

export type LazlikeMcnContentListCategoryResponse = LazlikeMcnContentListCategory;

export interface LazlikeQueryContentReviewRecordsResultReviewRecords {
  reviewedType?: string;
  reason?: string;
  reviewedTime?: number;
  contentId?: number;
  currentContentBaseState?: number;
}

export interface LazlikeQueryContentReviewRecordsResult {
  success?: boolean;
  resultCode?: string;
  resultMessage?: string;
  reviewRecords?: LazlikeQueryContentReviewRecordsResultReviewRecords[];
}

export interface LazlikeQueryContentReviewRecords {
  result?: LazlikeQueryContentReviewRecordsResult;
}

export type LazlikeQueryContentReviewRecordsResponse = LazlikeQueryContentReviewRecords;

export interface LazlikeMcnProductValidatorResult {
  normalItemList?: number[];
  highRiskItemList?: number[];
  success?: boolean;
  result_code?: string;
  result_message?: string;
}

export interface LazlikeMcnProductValidator {
  result?: LazlikeMcnProductValidatorResult;
}

export type LazlikeMcnProductValidatorResponse = LazlikeMcnProductValidator;

export interface LazlikeMcnContentCancelSchedulePublishApiResult {
  result?: boolean;
  success?: boolean;
  errorMessage?: string;
  errorCode?: number;
}

export interface LazlikeMcnContentCancelSchedulePublish {
  api_result?: LazlikeMcnContentCancelSchedulePublishApiResult;
}

export type LazlikeMcnContentCancelSchedulePublishResponse = LazlikeMcnContentCancelSchedulePublish;

export interface LazlikeMcnContentCreateResult {
  contentId: number;
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentCreate {
  result: LazlikeMcnContentCreateResult;
}

export type LazlikeMcnContentCreateResponse = LazlikeMcnContentCreate;

export interface LazlikeMCNQueryTagInfoByNameApiResult {
  success?: string;
  resultCode?: string;
  resultMessage?: string;
  tagDTOList?: Record<string, unknown>[];
}

export interface LazlikeMCNQueryTagInfoByName {
  api_result?: LazlikeMCNQueryTagInfoByNameApiResult;
}

export type LazlikeMCNQueryTagInfoByNameResponse = LazlikeMCNQueryTagInfoByName;

export interface LazlikeMcnContentReplySchedulePublishApiResult {
  result?: boolean;
  success?: boolean;
  errorMessage?: string;
  errorCode?: number;
}

export interface LazlikeMcnContentReplySchedulePublish {
  api_result?: LazlikeMcnContentReplySchedulePublishApiResult;
}

export type LazlikeMcnContentReplySchedulePublishResponse = LazlikeMcnContentReplySchedulePublish;

export interface LazlikeMcnContentUploadImageResult {
  url: string;
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentUploadImage {
  result: LazlikeMcnContentUploadImageResult;
}

export type LazlikeMcnContentUploadImageResponse = LazlikeMcnContentUploadImage;

export interface LazlikeMcnContentPropertyTagList {
  success?: boolean;
  resultMessage?: string;
  resultCode?: string;
  tagList?: Record<string, unknown>[];
}

export type LazlikeMcnContentPropertyTagListResponse = LazlikeMcnContentPropertyTagList;

export interface LazlikeMcnSimilarProductSearch {
  productList?: Record<string, unknown>[];
  confidentialityStatement?: string;
  success?: boolean;
  result_code?: string;
  result_message?: string;
}

export type LazlikeMcnSimilarProductSearchResponse = LazlikeMcnSimilarProductSearch;

export interface LazlikeMcnContentCompleteCreateVideoResult {
  videoId: number;
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentCompleteCreateVideo {
  result: LazlikeMcnContentCompleteCreateVideoResult;
}

export type LazlikeMcnContentCompleteCreateVideoResponse = LazlikeMcnContentCompleteCreateVideo;

export interface LazlikeMcnContentInitCreateVideoResult {
  upload_id: string;
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentInitCreateVideo {
  result: LazlikeMcnContentInitCreateVideoResult;
}

export type LazlikeMcnContentInitCreateVideoResponse = LazlikeMcnContentInitCreateVideo;

export interface LazlikeMcnContentUploadVideoBlockResult {
  eTag: string;
  success: boolean;
  result_code: string;
  result_message: string;
}

export interface LazlikeMcnContentUploadVideoBlock {
  result: LazlikeMcnContentUploadVideoBlockResult;
}

export type LazlikeMcnContentUploadVideoBlockResponse = LazlikeMcnContentUploadVideoBlock;
