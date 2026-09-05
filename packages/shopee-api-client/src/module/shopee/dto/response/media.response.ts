import { ShopeeResponseCommon } from './config.response';

/** One uploaded image returned by Shopee v2.media.upload_image. */
interface UploadImageImage {
  /** Shopee-assigned image ID, usable in `image.image_id_list` for `addItem()`/`updateItem()`. */
  image_id?: string;
  /** Publicly accessible URL of the uploaded image. */
  image_url?: string;
}

interface UploadImage {
  image_list?: UploadImageImage[];
}

interface ResponseUploadImage extends ShopeeResponseCommon<UploadImage> {}

interface InitVideoUpload {
  /** Unique upload session ID, used by subsequent video upload calls. */
  video_upload_id?: string;
  /** Required byte size of every part except possibly the last one. */
  part_size?: number;
}

interface ResponseInitVideoUpload extends ShopeeResponseCommon<InitVideoUpload> {}

interface UploadVideoPart {
  /** Warning message from Shopee, when applicable. */
  warning?: string;
}

interface ResponseUploadVideoPart extends ShopeeResponseCommon<UploadVideoPart> {}

interface CompleteVideoUpload {
  warning?: string;
}

interface ResponseCompleteVideoUpload extends ShopeeResponseCommon<CompleteVideoUpload> {}

/**
 * Video upload task status. Matches Shopee's documented lifecycle:
 * INITIATED -> UPLOADING -> UPLOADED -> PROCESSING -> SUCCEEDED | FAILED | CANCELLED.
 */
type VideoUploadStatus = 'INITIATED' | 'UPLOADING' | 'UPLOADED' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | string;

interface VideoUploadResultVideoInfo {
  video_url?: string;
  video_thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  duration?: number;
  resolution?: string;
}

interface GetVideoUploadResult {
  status?: VideoUploadStatus;
  /** Failure/cancellation reason, present when `status` is FAILED or CANCELLED. */
  reason?: string;
  update_time?: number;
  /** Present when `status` is SUCCEEDED. */
  video_info?: VideoUploadResultVideoInfo;
}

interface ResponseGetVideoUploadResult extends ShopeeResponseCommon<GetVideoUploadResult> {}

interface CancelVideoUpload {
  warning?: string;
}

interface ResponseCancelVideoUpload extends ShopeeResponseCommon<CancelVideoUpload> {}

export {
  ResponseUploadImage as ShopeeResponseUploadImage,
  UploadImageImage as ShopeeUploadImageImage,
  ResponseInitVideoUpload as ShopeeResponseInitVideoUpload,
  ResponseUploadVideoPart as ShopeeResponseUploadVideoPart,
  ResponseCompleteVideoUpload as ShopeeResponseCompleteVideoUpload,
  ResponseGetVideoUploadResult as ShopeeResponseGetVideoUploadResult,
  ResponseCancelVideoUpload as ShopeeResponseCancelVideoUpload,
};
