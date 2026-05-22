export interface LazadaCountryUserInfo {
  country: string;
  user_id: string;
  seller_id: string;
  short_code: string;
}

export interface LazadaResponseAccessToken {
  expires_in: number;
  country: string;
  country_user_info: LazadaCountryUserInfo[];
  account_platform: string;
  access_token: string;
  account: string;
  refresh_expires_in: number;
  refresh_token: string;
  code: string;
  request_id?: string;
  _trace_id_?: string;
}
