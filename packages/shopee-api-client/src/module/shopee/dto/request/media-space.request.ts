/**
 * Enum generated for field ShopeeRequestId
 */
export enum ShopeeRequestId {
  AND = "and",
  OR = "or",
}

/**
 * Request parameters for cancel_video_upload
 *
 * Cancel a video upload session
 */
export interface ShopeeCancelVideoUploadRequest {
  /**
   * The ID of this upload session, returned in init_video_upload.
   */
  video_upload_id: string;
}

/**
 * ShopeeCompleteVideoUploadReportData sub-interface for ShopeeCompleteVideoUploadRequest
 */
export interface ShopeeCompleteVideoUploadReportData {
  /**
   * Time used for uploading the video file via upload_video_part api, in milliseconds. For video upload performance tracking purpose.
   */
  upload_cost: number;
}

/**
 * Request parameters for complete_video_upload
 *
 * Complete the video upload and starts the transcoding process when all parts are uploaded successfully.
 */
export interface ShopeeCompleteVideoUploadRequest {
  /**
   * The ID of this upload session, returned in init_video_upload.
   */
  video_upload_id: string;
  /**
   * All uploaded sequence number.
   */
  part_seq_list: number[];
  report_data: ShopeeCompleteVideoUploadReportData;
}

/**
 * Request parameters for get_video_upload_result
 *
 * Query the upload status and result of video upload.
 */
export interface ShopeeGetVideoUploadResultRequest {
  video_upload_id: string;
}

/**
 * Request parameters for init_video_upload
 *
 * Initiate video upload session.
 *
 * Video duration should be between 10s and 60s (inclusive).
 */
export interface ShopeeInitVideoUploadRequest {
  /**
   * md5 of video file
   */
  file_md5: string;
  /**
   * size of video file, in bytes, maximum is 30MB
   */
  file_size: number;
}

/**
 * Request parameters for upload_image
 *
 * Use this API to upload multiple image files (less than 9 images).
 */
export interface ShopeeUploadImageRequest {
  /**
   * image files. Max 10.0 MB each. Image format accepted: JPG, JPEG, PNG. image number should be less than 9
   */
  image: Buffer[];
  /**
   * The scene where the picture is used, The value range is normal or desc; normal: we will process the image as a square image, it is recommended to use when uploading item image; desc: we will not process the image, it is recommended to use when uploading the image of extend_description, if you do not upload this field, it will be normal.
   */
  scene?: string;
  /**
   * only applicable to whitelisted sellers.only support 1:1 and 3:4; 1:1 by default.
   */
  ratio?: string;
}

/**
 * Request parameters for upload_video_part
 *
 * Upload video file by part using the upload_id in initiate_video_upload.
 *
 * The request Content-Type of this API should be of multipart/form-data
 */
export interface ShopeeUploadVideoPartRequest {
  /**
   * The video_upload_id in the response of initiate_video_upload
   */
  video_upload_id: string;
  /**
   * Sequence of the current part, starts from 0
   */
  part_seq: number;
  /**
   * md5 of this part
   */
  content_md5: string;
  /**
   * The content of this part of file.  Part size should be exactly 4MB, except last part of file.
   */
  part_content: Buffer;
}
