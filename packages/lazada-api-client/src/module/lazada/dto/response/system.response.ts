export interface SystemGenerateAccessTokenCountryUserInfo {
  country: string;
  seller_id: string;
  user_id: string;
  short_code: string;
}

export interface SystemGenerateAccessToken {
  expires_in: number;
  account_id: string;
  country: string;
  country_user_info: SystemGenerateAccessTokenCountryUserInfo[];
  account_platform: string;
  access_token: string;
  account: string;
  refresh_expires_in: string;
  refresh_token: string;
}

export type SystemGenerateAccessTokenResponse = SystemGenerateAccessToken;

export interface SystemGenerateAccessTokenWithOpenIdCountryUserInfo {
  country: string;
  seller_id: string;
  user_id: string;
  short_code: string;
}

export interface SystemGenerateAccessTokenWithOpenId {
  expires_in: number;
  account_id: string;
  country: string;
  country_user_info: SystemGenerateAccessTokenWithOpenIdCountryUserInfo[];
  account_platform: string;
  access_token: string;
  account: string;
  refresh_expires_in: string;
  refresh_token: string;
}

export type SystemGenerateAccessTokenWithOpenIdResponse = SystemGenerateAccessTokenWithOpenId;

export interface SystemRefreshAccessTokenCountryUserInfoList {
  country: string;
  seller_id: string;
  user_id: string;
  short_code?: string;
}

export interface SystemRefreshAccessToken {
  expires_in: number;
  account_id: string;
  country: string;
  country_user_info_list: SystemRefreshAccessTokenCountryUserInfoList[];
  account_platform: string;
  access_token: string;
  account: string;
  refresh_expires_in: number;
  refresh_token: string;
}

export type SystemRefreshAccessTokenResponse = SystemRefreshAccessToken;

export interface SystemStartExportByDatasetResult {
  returnCode: number;
  returnValue: Record<string, unknown>;
  returnErrorStackTrace: string;
  returnMessage: string;
}

export interface SystemStartExportByDataset {
  result: SystemStartExportByDatasetResult;
}

export type SystemStartExportByDatasetResponse = SystemStartExportByDataset;
