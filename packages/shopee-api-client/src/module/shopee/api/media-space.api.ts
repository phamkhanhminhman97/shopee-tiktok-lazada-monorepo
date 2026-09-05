import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeCancelVideoUploadRequest,
  ShopeeCompleteVideoUploadRequest,
  ShopeeGetVideoUploadResultRequest,
  ShopeeInitVideoUploadRequest,
  ShopeeUploadImageRequest,
  ShopeeUploadVideoPartRequest,
} from '../dto/request/media-space.request';
import {
  ShopeeCancelVideoUploadResponse,
  ShopeeCompleteVideoUploadResponse,
  ShopeeGetVideoUploadResultResponse,
  ShopeeInitVideoUploadResponse,
  ShopeeUploadImageResponse,
  ShopeeUploadVideoPartResponse,
} from '../dto/response/media-space.response';

/**
 * cancelVideoUpload via Shopee `v2.media_space.cancel_video_upload`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function cancelVideoUpload(params: ShopeeCancelVideoUploadRequest, config: ShopeeConfig): Promise<ShopeeCancelVideoUploadResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCancelVideoUploadResponse>('/media_space/cancel_video_upload', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'cancelVideoUpload',
  });
}

/**
 * completeVideoUpload via Shopee `v2.media_space.complete_video_upload`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function completeVideoUpload(params: ShopeeCompleteVideoUploadRequest, config: ShopeeConfig): Promise<ShopeeCompleteVideoUploadResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCompleteVideoUploadResponse>('/media_space/complete_video_upload', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'completeVideoUpload',
  });
}

/**
 * getVideoUploadResult via Shopee `v2.media_space.get_video_upload_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getVideoUploadResult(params: ShopeeGetVideoUploadResultRequest, config: ShopeeConfig): Promise<ShopeeGetVideoUploadResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetVideoUploadResultResponse>('/media_space/get_video_upload_result', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getVideoUploadResult',
  });
}

/**
 * initVideoUpload via Shopee `v2.media_space.init_video_upload`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function initVideoUpload(params: ShopeeInitVideoUploadRequest, config: ShopeeConfig): Promise<ShopeeInitVideoUploadResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeInitVideoUploadResponse>('/media_space/init_video_upload', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'initVideoUpload',
  });
}

/**
 * uploadImage via Shopee `v2.media_space.upload_image`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadImage(params: ShopeeUploadImageRequest, config: ShopeeConfig): Promise<ShopeeUploadImageResponse> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest('/media_space/upload_image', config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${ShopeeHelper.SHOPEE_END_POINT_V2}/media_space/upload_image${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeUploadImageResponse>(
    url,
    { image: params.image, scene: params.scene, ratio: params.ratio },
    config,
  );

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadImage');
  }

  return result;
}

/**
 * uploadVideoPart via Shopee `v2.media_space.upload_video_part`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadVideoPart(params: ShopeeUploadVideoPartRequest, config: ShopeeConfig): Promise<ShopeeUploadVideoPartResponse> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest('/media_space/upload_video_part', config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${ShopeeHelper.SHOPEE_END_POINT_V2}/media_space/upload_video_part${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeUploadVideoPartResponse>(
    url,
    {
      video_upload_id: params.video_upload_id,
      part_seq: params.part_seq,
      content_md5: params.content_md5,
      part_content: params.part_content,
    },
    config,
  );

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadVideoPart');
  }

  return result;
}
