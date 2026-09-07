import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  MediaCenterCompleteCreateVideoRequest,
  MediaCenterGetVideoQuotaRequest,
  MediaCenterGetVideoRequest,
  MediaCenterInitCreateVideoRequest,
  MediaCenterRemoveVideoRequest,
  MediaCenterUploadVideoBlockRequest,
} from '../dto/request/media-center.request';
import {
  MediaCenterCompleteCreateVideoResponse,
  MediaCenterGetVideoQuotaResponse,
  MediaCenterGetVideoResponse,
  MediaCenterInitCreateVideoResponse,
  MediaCenterRemoveVideoResponse,
  MediaCenterUploadVideoBlockResponse,
} from '../dto/response/media-center.response';

/**
 * GetVideo via Lazada `GET /media/video/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getVideo(params: MediaCenterGetVideoRequest, config: LazadaConfig): Promise<MediaCenterGetVideoResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterGetVideoResponse>('/media/video/get', 'GET', params as unknown as Record<string, unknown>, config, 'getVideo');
}

/**
 * GetVideoQuota via Lazada `GET /media/video/quota/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getVideoQuota(config: LazadaConfig): Promise<MediaCenterGetVideoQuotaResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterGetVideoQuotaResponse>('/media/video/quota/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getVideoQuota');
}

/**
 * CompleteCreateVideo via Lazada `POST /media/video/block/commit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function completeCreateVideo(params: MediaCenterCompleteCreateVideoRequest, config: LazadaConfig): Promise<MediaCenterCompleteCreateVideoResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterCompleteCreateVideoResponse>('/media/video/block/commit', 'POST', params as unknown as Record<string, unknown>, config, 'completeCreateVideo');
}

/**
 * InitCreateVideo via Lazada `POST /media/video/block/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function initCreateVideo(params: MediaCenterInitCreateVideoRequest, config: LazadaConfig): Promise<MediaCenterInitCreateVideoResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterInitCreateVideoResponse>('/media/video/block/create', 'POST', params as unknown as Record<string, unknown>, config, 'initCreateVideo');
}

/**
 * UploadVideoBlock via Lazada `POST /media/video/block/upload`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function uploadVideoBlock(params: MediaCenterUploadVideoBlockRequest, config: LazadaConfig): Promise<MediaCenterUploadVideoBlockResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterUploadVideoBlockResponse>('/media/video/block/upload', 'POST', params as unknown as Record<string, unknown>, config, 'uploadVideoBlock');
}

/**
 * RemoveVideo via Lazada `POST /media/video/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function removeVideo(params: MediaCenterRemoveVideoRequest, config: LazadaConfig): Promise<MediaCenterRemoveVideoResponse> {
  return LazadaHelper.callLazadaApi<MediaCenterRemoveVideoResponse>('/media/video/remove', 'POST', params as unknown as Record<string, unknown>, config, 'removeVideo');
}
