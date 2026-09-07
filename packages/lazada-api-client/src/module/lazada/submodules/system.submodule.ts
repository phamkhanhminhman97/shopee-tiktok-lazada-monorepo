import { LazadaConfig } from '../dto/request/config.request';
import {
  generateAccessToken,
  generateAccessTokenWithOpenId,
  refreshAccessToken,
  startExportByDataset,
} from '../api/system.api';
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
 * Lazada `system-api` API namespace.
 *
 * Access via `lazada.system.<method>()` on a `LazadaModule` instance.
 */
export class LazadaSystem {
  constructor(private config: LazadaConfig) {}

  async generateAccessToken(params: SystemGenerateAccessTokenRequest): Promise<SystemGenerateAccessTokenResponse> {
    return await generateAccessToken(params, this.config);
  }

  async generateAccessTokenWithOpenId(params: SystemGenerateAccessTokenWithOpenIdRequest): Promise<SystemGenerateAccessTokenWithOpenIdResponse> {
    return await generateAccessTokenWithOpenId(params, this.config);
  }

  async refreshAccessToken(params: SystemRefreshAccessTokenRequest): Promise<SystemRefreshAccessTokenResponse> {
    return await refreshAccessToken(params, this.config);
  }

  async startExportByDataset(params: SystemStartExportByDatasetRequest): Promise<SystemStartExportByDatasetResponse> {
    return await startExportByDataset(params, this.config);
  }
}
