export interface SystemGenerateAccessTokenRequest {
  code: string;
  uuid?: string;
}

export interface SystemGenerateAccessTokenWithOpenIdRequest {
  code: string;
  uuid?: string;
}

export interface SystemRefreshAccessTokenRequest {
  refresh_token: string;
}

export interface SystemStartExportByDatasetRequest {
  oldSystemId?: string;
  useNewEngine?: string;
  appName: string;
  secret: string;
  workId: string;
  datasetId: string;
  fileType: string;
  uploadType: string;
  dispatchUserInfo?: string[];
}
