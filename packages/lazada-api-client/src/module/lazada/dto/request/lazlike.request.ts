export type LazlikeMcnContentListCategoryRequest = Record<string, never>;

export interface LazlikeQueryContentReviewRecordsRequest {
  contentIds: string;
}

export interface LazlikeMcnProductValidatorRequest {
  lazOpAppKey?: string;
  itemIdList: string;
}

export interface LazlikeMcnContentCancelSchedulePublishRequest {
  contentId: number;
}

export interface LazlikeMcnContentCreateRequest {
  kolUserId?: number;
  contentType: string;
  description: string;
  imageList?: string;
  itemList?: string;
  videoId?: number;
  categoryId?: number;
  tags?: string;
  voiceLang: string;
  subtitleLang: string;
  descriptionLang?: string;
  publishTimeMillis?: number;
  shopId?: number;
  proxyFlag?: boolean;
  title?: string;
  extraTagIds?: string;
  channel?: string;
}

export interface LazlikeMCNQueryTagInfoByNameRequest {
  tagNames: string;
}

export interface LazlikeMcnContentReplySchedulePublishRequest {
  contentId: number;
  publishTimeMillis: number;
}

export interface LazlikeMcnContentUploadImageRequest {
  kolUserId: number;
  image: string[];
}

export type LazlikeMcnContentPropertyTagListRequest = Record<string, never>;

export interface LazlikeMcnSimilarProductSearchRequest {
  kolUserId?: number;
  imageUrlList?: string;
  shopId?: number;
}

export interface LazlikeMcnContentCompleteCreateVideoRequest {
  uploadId: string;
  parts: string;
  title: string;
  coverUrl?: string;
}

export interface LazlikeMcnContentInitCreateVideoRequest {
  kolUserId: number;
  fileName: string;
  fileBytes: number;
}

export interface LazlikeMcnContentUploadVideoBlockRequest {
  uploadId: string;
  blockNo: number;
  blockCount: number;
  file: string[];
}
