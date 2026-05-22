export interface TiktokResponseCommon<T> {
  code: string | number;
  message: string;
  request_id: string;
  data: T;
}

export interface TiktokAccessToken {
  access_token: string;
  access_token_expire_in: number; //unix timestamp
  refresh_token: string;
  refresh_token_expire_in: number; //unix timestamp
  //The unique identity of the tts seller in this app, which is not equal to shop_id.
  //Please use our shop api to obtain your shop id
  open_id?: string;
  seller_name: string;
  seller_base_region?: string;
  user_type?: number;
}

export interface TiktokAuthorizedShop {
  region: string;
  shop_cipher: string;
  shop_code: string;
  shop_id: string;
  shop_name: string;
  type: number;
}

export type TiktokRefreshToken = TiktokAccessToken;

export type TiktokResponseAccessToken = TiktokResponseCommon<TiktokAccessToken>;
export type TiktokResponseAuthorized = TiktokResponseCommon<TiktokAuthorizedShop>;
export type TiktokResponseRefreshToken = TiktokResponseCommon<TiktokRefreshToken>;
