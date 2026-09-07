import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  SystemGenerateAccessTokenRequest,
  SystemGenerateAccessTokenWithOpenIdRequest,
  SystemRefreshAccessTokenRequest,
  SystemStartExportByDatasetRequest,
} from '../dto/request/system.request';
import {
  SystemGenerateAccessTokenResponse,
  SystemGenerateAccessTokenWithOpenIdResponse,
  SystemRefreshAccessTokenResponse,
  SystemStartExportByDatasetResponse,
} from '../dto/response/system.response';

/**
 * GenerateAccessToken via Lazada `POST /auth/token/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function generateAccessToken(params: SystemGenerateAccessTokenRequest, config: LazadaConfig): Promise<SystemGenerateAccessTokenResponse> {
  return LazadaHelper.callLazadaApi<SystemGenerateAccessTokenResponse>('/auth/token/create', 'POST', params as unknown as Record<string, unknown>, config, 'generateAccessToken');
}

/**
 * GenerateAccessTokenWithOpenId via Lazada `POST /auth/token/createWithOpenId`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function generateAccessTokenWithOpenId(params: SystemGenerateAccessTokenWithOpenIdRequest, config: LazadaConfig): Promise<SystemGenerateAccessTokenWithOpenIdResponse> {
  return LazadaHelper.callLazadaApi<SystemGenerateAccessTokenWithOpenIdResponse>('/auth/token/createWithOpenId', 'POST', params as unknown as Record<string, unknown>, config, 'generateAccessTokenWithOpenId');
}

/**
 * RefreshAccessToken via Lazada `POST /auth/token/refresh`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function refreshAccessToken(params: SystemRefreshAccessTokenRequest, config: LazadaConfig): Promise<SystemRefreshAccessTokenResponse> {
  return LazadaHelper.callLazadaApi<SystemRefreshAccessTokenResponse>('/auth/token/refresh', 'POST', params as unknown as Record<string, unknown>, config, 'refreshAccessToken');
}

/**
 * startExportByDataset via Lazada `POST /fbi/download/startExportByDataset`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function startExportByDataset(params: SystemStartExportByDatasetRequest, config: LazadaConfig): Promise<SystemStartExportByDatasetResponse> {
  return LazadaHelper.callLazadaApi<SystemStartExportByDatasetResponse>('/fbi/download/startExportByDataset', 'POST', params as unknown as Record<string, unknown>, config, 'startExportByDataset');
}
