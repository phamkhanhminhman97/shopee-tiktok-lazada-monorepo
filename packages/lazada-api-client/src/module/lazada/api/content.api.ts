import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * getTaskStatus via Lazada `GET /content/ai/getTaskStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getTaskStatus(params: ContentGetTaskStatusRequest, config: LazadaConfig): Promise<ContentGetTaskStatusResponse> {
  return LazadaHelper.callLazadaApi<ContentGetTaskStatusResponse>('/content/ai/getTaskStatus', 'GET', params as unknown as Record<string, unknown>, config, 'getTaskStatus');
}

/**
 * cancelTask via Lazada `POST /content/ai/cancelTask`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelTask(params: ContentCancelTaskRequest, config: LazadaConfig): Promise<ContentCancelTaskResponse> {
  return LazadaHelper.callLazadaApi<ContentCancelTaskResponse>('/content/ai/cancelTask', 'POST', params as unknown as Record<string, unknown>, config, 'cancelTask');
}

/**
 * changeFace via Lazada `POST /content/ai/changeFace`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function changeFace(params: ContentChangeFaceRequest, config: LazadaConfig): Promise<ContentChangeFaceResponse> {
  return LazadaHelper.callLazadaApi<ContentChangeFaceResponse>('/content/ai/changeFace', 'POST', params as unknown as Record<string, unknown>, config, 'changeFace');
}

/**
 * changeProductBackground via Lazada `POST /content/ai/changeProductBackground`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function changeProductBackground(params: ContentChangeProductBackgroundRequest, config: LazadaConfig): Promise<ContentChangeProductBackgroundResponse> {
  return LazadaHelper.callLazadaApi<ContentChangeProductBackgroundResponse>('/content/ai/changeProductBackground', 'POST', params as unknown as Record<string, unknown>, config, 'changeProductBackground');
}

/**
 * fixHand via Lazada `POST /content/ai/fixHand`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function fixHand(params: ContentFixHandRequest, config: LazadaConfig): Promise<ContentFixHandResponse> {
  return LazadaHelper.callLazadaApi<ContentFixHandResponse>('/content/ai/fixHand', 'POST', params as unknown as Record<string, unknown>, config, 'fixHand');
}

/**
 * productImageMatch via Lazada `POST /content/ai/productImageMatch`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function productImageMatch(params: ContentProductImageMatchRequest, config: LazadaConfig): Promise<ContentProductImageMatchResponse> {
  return LazadaHelper.callLazadaApi<ContentProductImageMatchResponse>('/content/ai/productImageMatch', 'POST', params as unknown as Record<string, unknown>, config, 'productImageMatch');
}

/**
 * tryOnCloth via Lazada `POST /content/ai/tryOnCloth`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function tryOnCloth(params: ContentTryOnClothRequest, config: LazadaConfig): Promise<ContentTryOnClothResponse> {
  return LazadaHelper.callLazadaApi<ContentTryOnClothResponse>('/content/ai/tryOnCloth', 'POST', params as unknown as Record<string, unknown>, config, 'tryOnCloth');
}
