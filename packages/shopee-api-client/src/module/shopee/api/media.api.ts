import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeRequestUploadImage,
  ShopeeRequestInitVideoUpload,
  ShopeeRequestUploadVideoPart,
  ShopeeRequestCompleteVideoUpload,
  ShopeeRequestGetVideoUploadResult,
  ShopeeRequestCancelVideoUpload,
} from '../dto/request/media.request';
import {
  ShopeeResponseUploadImage,
  ShopeeResponseInitVideoUpload,
  ShopeeResponseUploadVideoPart,
  ShopeeResponseCompleteVideoUpload,
  ShopeeResponseGetVideoUploadResult,
  ShopeeResponseCancelVideoUpload,
} from '../dto/response/media.response';

/**
 * Upload one or more images to Shopee via `v2.media.upload_image`.
 *
 * Use the returned `image_id` values in `image.image_id_list` when calling
 * `addItem()` or `updateItem()`, or for return-related image uploads.
 *
 * @param body - Image buffers plus optional `business`/`scene` selectors.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the uploaded image list.
 */
export async function uploadImage(
  body: ShopeeRequestUploadImage,
  config: ShopeeConfig,
): Promise<ShopeeResponseUploadImage> {
  if (!Array.isArray(body.images) || body.images.length === 0) {
    throw new Error('[Shopee API] uploadImage invalid request: `images` must contain at least one image buffer.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPLOAD_IMAGE, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPLOAD_IMAGE}${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeResponseUploadImage>(
    url,
    {
      images: body.images,
      business: body.business,
      scene: body.scene,
    },
    config,
  );

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadImage');
  }

  return result;
}

/**
 * Start a video upload session via `v2.media.init_video_upload`.
 *
 * @param body - Video metadata (business/scene/file name/size/duration).
 * @param config - Shopee API configuration.
 * @returns Shopee API response with `video_upload_id` and required `part_size`.
 */
export async function initVideoUpload(
  body: ShopeeRequestInitVideoUpload,
  config: ShopeeConfig,
): Promise<ShopeeResponseInitVideoUpload> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.INIT_VIDEO_UPLOAD, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.INIT_VIDEO_UPLOAD}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseInitVideoUpload>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'initVideoUpload');
  }

  return result;
}

/**
 * Upload one chunk of a video previously initialized via `initVideoUpload()`,
 * through `v2.media.upload_video_part`.
 *
 * @param body - Upload session ID, part sequence, raw bytes, and MD5 checksum.
 * @param config - Shopee API configuration.
 * @returns Shopee API response, possibly containing a `warning` message.
 */
export async function uploadVideoPart(
  body: ShopeeRequestUploadVideoPart,
  config: ShopeeConfig,
): Promise<ShopeeResponseUploadVideoPart> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPLOAD_VIDEO_PART, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPLOAD_VIDEO_PART}${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeResponseUploadVideoPart>(
    url,
    {
      video_upload_id: body.video_upload_id,
      part_seq: body.part_seq,
      part_content: body.part_content,
      part_md5: body.part_md5,
    },
    config,
  );

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadVideoPart');
  }

  return result;
}

/**
 * Finalize a video upload via `v2.media.complete_video_upload`, once every
 * part has been uploaded through `uploadVideoPart()`.
 *
 * @param body - The upload session ID to finalize.
 * @param config - Shopee API configuration.
 * @returns Shopee API response, possibly containing a `warning` message.
 */
export async function completeVideoUpload(
  body: ShopeeRequestCompleteVideoUpload,
  config: ShopeeConfig,
): Promise<ShopeeResponseCompleteVideoUpload> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.COMPLETE_VIDEO_UPLOAD, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.COMPLETE_VIDEO_UPLOAD}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseCompleteVideoUpload>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'completeVideoUpload');
  }

  return result;
}

/**
 * Poll the current status of a video upload/transcode task via
 * `v2.media.get_video_upload_result`.
 *
 * @param body - The upload session ID to check.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the current `status` and, once
 * `SUCCEEDED`, the transcoded `video_info`.
 */
export async function getVideoUploadResult(
  body: ShopeeRequestGetVideoUploadResult,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetVideoUploadResult> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_VIDEO_UPLOAD_RESULT, config, timestamp);
  const additionalParams: Record<string, string> = { video_upload_id: body.video_upload_id };
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_VIDEO_UPLOAD_RESULT}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetVideoUploadResult>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getVideoUploadResult');
  }

  return result;
}

/**
 * Cancel an in-progress video upload task via `v2.media.cancel_video_upload`.
 *
 * Fails if the upload has already succeeded, failed, or been cancelled.
 *
 * @param body - The upload session ID to cancel.
 * @param config - Shopee API configuration.
 * @returns Shopee API response, possibly containing a `warning` message.
 */
export async function cancelVideoUpload(
  body: ShopeeRequestCancelVideoUpload,
  config: ShopeeConfig,
): Promise<ShopeeResponseCancelVideoUpload> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.CANCEL_VIDEO_UPLOAD, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.CANCEL_VIDEO_UPLOAD}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const result = await ShopeeHelper.httpPost<ShopeeResponseCancelVideoUpload>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'cancelVideoUpload');
  }

  return result;
}
