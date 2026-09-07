export interface MediaCenterGetVideo {
  cover_url: string;
  video_url: string;
  success: boolean;
  result_code: string;
  state: string;
  title: string;
  result_message: string;
}

export type MediaCenterGetVideoResponse = MediaCenterGetVideo;

export interface MediaCenterGetVideoQuota {
  capacity_size: number;
  used_size: number;
  success: boolean;
  result_code: string;
  result_message: string;
}

export type MediaCenterGetVideoQuotaResponse = MediaCenterGetVideoQuota;

export interface MediaCenterCompleteCreateVideo {
  success: boolean;
  result_code: string;
  video_id: string;
  result_message: string;
}

export type MediaCenterCompleteCreateVideoResponse = MediaCenterCompleteCreateVideo;

export interface MediaCenterInitCreateVideo {
  upload_id: string;
  success: boolean;
  result_code: string;
  result_message: string;
}

export type MediaCenterInitCreateVideoResponse = MediaCenterInitCreateVideo;

export interface MediaCenterUploadVideoBlock {
  success: boolean;
  result_code: string;
  e_tag: string;
  result_message: string;
}

export type MediaCenterUploadVideoBlockResponse = MediaCenterUploadVideoBlock;

export interface MediaCenterRemoveVideo {
  success: boolean;
  result_code: string;
  result_message: string;
}

export type MediaCenterRemoveVideoResponse = MediaCenterRemoveVideo;
