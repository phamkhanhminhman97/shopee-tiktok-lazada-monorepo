import { ShopeeConfig } from '../dto/request/config.request';
import {
  cancelVideoUpload,
  completeVideoUpload,
  getVideoUploadResult,
  initVideoUpload,
  uploadImage,
  uploadVideoPart,
} from '../api/media-space.api';
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
 * Shopee `v2.media_space.*` API namespace.
 *
 * Access via `shopee.mediaSpace.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeMediaSpace {
  constructor(private config: ShopeeConfig) {}

  async cancelVideoUpload(params: ShopeeCancelVideoUploadRequest): Promise<ShopeeCancelVideoUploadResponse> {
    return await cancelVideoUpload(params, this.config);
  }

  async completeVideoUpload(params: ShopeeCompleteVideoUploadRequest): Promise<ShopeeCompleteVideoUploadResponse> {
    return await completeVideoUpload(params, this.config);
  }

  async getVideoUploadResult(params: ShopeeGetVideoUploadResultRequest): Promise<ShopeeGetVideoUploadResultResponse> {
    return await getVideoUploadResult(params, this.config);
  }

  async initVideoUpload(params: ShopeeInitVideoUploadRequest): Promise<ShopeeInitVideoUploadResponse> {
    return await initVideoUpload(params, this.config);
  }

  async uploadImage(params: ShopeeUploadImageRequest): Promise<ShopeeUploadImageResponse> {
    return await uploadImage(params, this.config);
  }

  async uploadVideoPart(params: ShopeeUploadVideoPartRequest): Promise<ShopeeUploadVideoPartResponse> {
    return await uploadVideoPart(params, this.config);
  }
}
