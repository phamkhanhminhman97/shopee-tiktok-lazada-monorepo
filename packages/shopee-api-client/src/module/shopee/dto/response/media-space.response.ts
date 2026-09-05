import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeStatus
 */
export enum ShopeeStatus {
  AND = "and",
  OR = "or",
}

/**
 * Enum generated for field ShopeeMessage
 */
export enum ShopeeMessage {
  UPLOADING = "uploading",
  TRANSCODING = "transcoding",
}

/**
 * Enum generated for field ShopeeVideoUploadId
 */
export enum ShopeeVideoUploadId {
  AND = "and",
  OR = "or",
}

/**
 * Response data payload for cancel_video_upload
 */
export interface ShopeeCancelVideoUploadResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for cancel_video_upload
 *
 * Cancel a video upload session
 */
export type ShopeeCancelVideoUploadResponse = ShopeeResponseCommon<ShopeeCancelVideoUploadResponseData>;

/**
 * Response data payload for complete_video_upload
 */
export interface ShopeeCompleteVideoUploadResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for complete_video_upload
 *
 * Complete the video upload and starts the transcoding process when all parts are uploaded successfully.
 */
export type ShopeeCompleteVideoUploadResponse = ShopeeResponseCommon<ShopeeCompleteVideoUploadResponseData>;

/**
 * ShopeeGetVideoUploadResultVideoUrl sub-interface for ShopeeGetVideoUploadResultVideoInfo
 */
export interface ShopeeGetVideoUploadResultVideoUrl {
  /**
   * The region of this video URL.
   */
  video_url_region?: string;
  /**
   * Video playback URL.
   */
  video_url?: string;
}

/**
 * ShopeeGetVideoUploadResultThumbnailUrl sub-interface for ShopeeGetVideoUploadResultVideoInfo
 */
export interface ShopeeGetVideoUploadResultThumbnailUrl {
  /**
   * The region of this image URL.
   */
  image_url_region?: string;
  /**
   * Image display URL.
   */
  image_url?: string;
}

/**
 * ShopeeGetVideoUploadResultVideoInfo sub-interface for ShopeeGetVideoUploadResultResponseData
 */
export interface ShopeeGetVideoUploadResultVideoInfo {
  /**
   * Video playback URL list.
   */
  video_url_list?: ShopeeGetVideoUploadResultVideoUrl[];
  /**
   * Video thumbnail image URL list.
   */
  thumbnail_url_list?: ShopeeGetVideoUploadResultThumbnailUrl[];
  /**
   * Duration of this video, in seconds.
   */
  duration?: number;
}

/**
 * ShopeeGetVideoUploadResultResponseData sub-interface for ShopeeGetVideoUploadResultResponse
 */
export interface ShopeeGetVideoUploadResultResponseData {
  /**
   * Current status of this video upload session. could be: INITIATED(waiting for part uploading and/or the complete_video_upload API call), TRANSCODING(has received all video parts, and is transcoding the video file), SUCCEEDED(transcoding completed, and this upload_id can now be used for item adding/updating), FAILED(this upload failed, see the message filed for some info), CANCELLED(this upload is cancelled)
   */
  status?: ShopeeStatus | string | number;
  /**
   * Transcoded video info, will be present if status is SUCCEEDED.
   */
  video_info?: ShopeeGetVideoUploadResultVideoInfo;
  /**
   * Detail error message if video uploading/transcoding failed.
   */
  message?: ShopeeMessage | string | number;
}

/**
 * Response payload for get_video_upload_result
 *
 * Query the upload status and result of video upload.
 */
export type ShopeeGetVideoUploadResultResponse = ShopeeResponseCommon<ShopeeGetVideoUploadResultResponseData>;

/**
 * ShopeeInitVideoUploadResponseData sub-interface for ShopeeInitVideoUploadResponse
 */
export interface ShopeeInitVideoUploadResponseData {
  /**
   * The identifier of this upload session, used in following video upload request and item creating and/or updating
   */
  video_upload_id?: ShopeeVideoUploadId | string | number;
}

/**
 * Response payload for init_video_upload
 *
 * Initiate video upload session.
 *
 * Video duration should be between 10s and 60s (inclusive).
 */
export type ShopeeInitVideoUploadResponse = ShopeeResponseCommon<ShopeeInitVideoUploadResponseData>;

/**
 * ShopeeUploadImageImageUrl sub-interface for ShopeeUploadImageImageInfo
 */
export interface ShopeeUploadImageImageUrl {
  /**
   * Region of image url
   */
  image_url_region?: string;
  /**
   * image url
   */
  image_url?: string;
}

/**
 * ShopeeUploadImageImageInfo sub-interface for ShopeeUploadImageResponseData
 */
export interface ShopeeUploadImageImageInfo {
  /**
   * Id of image
   */
  image_id?: string;
  /**
   * Image URL of each region
   */
  image_url_list?: ShopeeUploadImageImageUrl[];
}

/**
 * ShopeeUploadImage_UploadImageImageInfo sub-interface for ShopeeUploadImageResponseData
 */
export interface ShopeeUploadImage_UploadImageImageInfo {
  /**
   * the index of images
   */
  id?: number;
  /**
   * Indicate error type if this index's image upload processing hit error. Empty if no error happened for this index's image .
   */
  error?: string;
  /**
   * Indicate error detail if this index's image upload processing hit error. Empty if no error happened for this index's image .
   */
  message?: string;
  image_info?: ShopeeUploadImageImageInfo;
}

/**
 * ShopeeUploadImageResponseData sub-interface for ShopeeUploadImageResponse
 */
export interface ShopeeUploadImageResponseData {
  image_info?: ShopeeUploadImageImageInfo;
  image_info_list?: ShopeeUploadImage_UploadImageImageInfo[];
}

/**
 * Response payload for upload_image
 *
 * Use this API to upload multiple image files (less than 9 images).
 */
export type ShopeeUploadImageResponse = ShopeeResponseCommon<ShopeeUploadImageResponseData>;

/**
 * Response data payload for upload_video_part
 */
export interface ShopeeUploadVideoPartResponseData {
  /**
   * Warning message.
   */
  warning?: string;
}

/**
 * Response payload for upload_video_part
 *
 * Upload video file by part using the upload_id in initiate_video_upload.
 *
 * The request Content-Type of this API should be of multipart/form-data
 */
export type ShopeeUploadVideoPartResponse = ShopeeResponseCommon<ShopeeUploadVideoPartResponseData>;
