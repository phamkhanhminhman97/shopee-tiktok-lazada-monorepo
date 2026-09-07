import { LazadaConfig } from '../dto/request/config.request';
import {
  completeCreateVideo,
  getVideo,
  getVideoQuota,
  initCreateVideo,
  removeVideo,
  uploadVideoBlock,
} from '../api/media-center.api';
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
 * Lazada `media-center-api` API namespace.
 *
 * Access via `lazada.mediaCenter.<method>()` on a `LazadaModule` instance.
 */
export class LazadaMediaCenter {
  constructor(private config: LazadaConfig) {}

  async getVideo(params: MediaCenterGetVideoRequest): Promise<MediaCenterGetVideoResponse> {
    return await getVideo(params, this.config);
  }

  async getVideoQuota(): Promise<MediaCenterGetVideoQuotaResponse> {
    return await getVideoQuota(this.config);
  }

  async completeCreateVideo(params: MediaCenterCompleteCreateVideoRequest): Promise<MediaCenterCompleteCreateVideoResponse> {
    return await completeCreateVideo(params, this.config);
  }

  async initCreateVideo(params: MediaCenterInitCreateVideoRequest): Promise<MediaCenterInitCreateVideoResponse> {
    return await initCreateVideo(params, this.config);
  }

  async uploadVideoBlock(params: MediaCenterUploadVideoBlockRequest): Promise<MediaCenterUploadVideoBlockResponse> {
    return await uploadVideoBlock(params, this.config);
  }

  async removeVideo(params: MediaCenterRemoveVideoRequest): Promise<MediaCenterRemoveVideoResponse> {
    return await removeVideo(params, this.config);
  }
}
