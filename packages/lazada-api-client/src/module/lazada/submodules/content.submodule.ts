import { LazadaConfig } from '../dto/request/config.request';
import {
  cancelTask,
  changeFace,
  changeProductBackground,
  fixHand,
  getTaskStatus,
  productImageMatch,
  tryOnCloth,
} from '../api/content.api';
import {
  ContentCancelTaskRequest,
  ContentChangeFaceRequest,
  ContentChangeProductBackgroundRequest,
  ContentFixHandRequest,
  ContentGetTaskStatusRequest,
  ContentProductImageMatchRequest,
  ContentTryOnClothRequest,
} from '../dto/request/content.request';
import {
  ContentCancelTaskResponse,
  ContentChangeFaceResponse,
  ContentChangeProductBackgroundResponse,
  ContentFixHandResponse,
  ContentGetTaskStatusResponse,
  ContentProductImageMatchResponse,
  ContentTryOnClothResponse,
} from '../dto/response/content.response';

/**
 * Lazada `content-api` API namespace.
 *
 * Access via `lazada.content.<method>()` on a `LazadaModule` instance.
 */
export class LazadaContent {
  constructor(private config: LazadaConfig) {}

  async getTaskStatus(params: ContentGetTaskStatusRequest): Promise<ContentGetTaskStatusResponse> {
    return await getTaskStatus(params, this.config);
  }

  async cancelTask(params: ContentCancelTaskRequest): Promise<ContentCancelTaskResponse> {
    return await cancelTask(params, this.config);
  }

  async changeFace(params: ContentChangeFaceRequest): Promise<ContentChangeFaceResponse> {
    return await changeFace(params, this.config);
  }

  async changeProductBackground(params: ContentChangeProductBackgroundRequest): Promise<ContentChangeProductBackgroundResponse> {
    return await changeProductBackground(params, this.config);
  }

  async fixHand(params: ContentFixHandRequest): Promise<ContentFixHandResponse> {
    return await fixHand(params, this.config);
  }

  async productImageMatch(params: ContentProductImageMatchRequest): Promise<ContentProductImageMatchResponse> {
    return await productImageMatch(params, this.config);
  }

  async tryOnCloth(params: ContentTryOnClothRequest): Promise<ContentTryOnClothResponse> {
    return await tryOnCloth(params, this.config);
  }
}
