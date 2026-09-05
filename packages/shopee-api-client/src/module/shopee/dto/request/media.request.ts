/**
 * Request type for Shopee v2.media.upload_image.
 *
 * Uploads one or more images and returns Shopee-assigned `image_id` values
 * that can then be used in `image.image_id_list` for `addItem()`/`updateItem()`,
 * or in return-related flows.
 *
 * Shopee expects this request as `multipart/form-data`. This SDK builds the
 * multipart body internally; pass raw image buffers via `images`.
 */
interface RequestUploadImage {
  /**
   * Image files to upload as raw buffers (e.g. read via `fs.readFileSync`).
   * Shopee currently supports JPG, JPEG, and PNG. Check current Shopee docs
   * for per-scene limits on count and file size.
   */
  images: Buffer[];
  /**
   * Business scenario for this upload. Shopee docs currently document
   * `business = 2` for Returns-related image uploads. Omit for the default
   * product-image upload flow.
   */
  business?: number;
  /**
   * Purpose of the upload within the given `business` value. For example,
   * `business = 2` (Returns) currently supports `scene = 1` (Return Seller
   * Self Arrange Pickup Proof Image).
   */
  scene?: number;
}

/**
 * Request type for Shopee v2.media.init_video_upload.
 * Starts a video upload session for a product/Shopee Video upload flow.
 */
interface RequestInitVideoUpload {
  /** Business type of the uploaded video. Shopee docs currently use `3` for Video. */
  business: number;
  /** Purpose of the video under the given business type. For business = 3, `1` = Shopee Video. */
  scene: number;
  /** Original video file name, including extension. */
  file_name: string;
  /** Total video file size in bytes. */
  file_size: number;
  /** Video duration in seconds. */
  duration: number;
}

/**
 * Request type for Shopee v2.media.upload_video_part.
 * Uploads one chunk of a video previously initialized via `initVideoUpload()`.
 */
interface RequestUploadVideoPart {
  /** Upload session ID returned by `initVideoUpload()`. */
  video_upload_id: string;
  /** Sequence number of this part, starting from 0. */
  part_seq: number;
  /**
   * Raw bytes for this chunk. Must match the `part_size` returned by
   * `initVideoUpload()`, except for the final part.
   */
  part_content: Buffer;
  /** MD5 checksum (hex) of `part_content`, for Shopee-side integrity validation. */
  part_md5: string;
}

/**
 * Request type for Shopee v2.media.complete_video_upload.
 * Finalizes a video upload once all parts have been uploaded.
 */
interface RequestCompleteVideoUpload {
  /** Upload session ID returned by `initVideoUpload()`. */
  video_upload_id: string;
}

/**
 * Request type for Shopee v2.media.get_video_upload_result.
 * Polls the current status of a video upload/transcode task.
 */
interface RequestGetVideoUploadResult {
  /** Upload session ID returned by `initVideoUpload()`. */
  video_upload_id: string;
}

/**
 * Request type for Shopee v2.media.cancel_video_upload.
 * Cancels an in-progress video upload task.
 */
interface RequestCancelVideoUpload {
  /** Upload session ID returned by `initVideoUpload()`. */
  video_upload_id: string;
}

export {
  RequestUploadImage as ShopeeRequestUploadImage,
  RequestInitVideoUpload as ShopeeRequestInitVideoUpload,
  RequestUploadVideoPart as ShopeeRequestUploadVideoPart,
  RequestCompleteVideoUpload as ShopeeRequestCompleteVideoUpload,
  RequestGetVideoUploadResult as ShopeeRequestGetVideoUploadResult,
  RequestCancelVideoUpload as ShopeeRequestCancelVideoUpload,
};
