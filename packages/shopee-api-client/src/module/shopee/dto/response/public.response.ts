import { ShopeeResponseCommon } from './config.response';

/**
 * Response data payload for get_access_token
 */
export interface ShopeeGetAccessTokenResponseData {
  /**
   * Returned all shop_ids authorized this time.
   */
  shop_id_list?: number[];
  /**
   * Returned all merchant_ids authorized this time.
   */
  merchant_id_list?: number[];
  /**
   * Returned all supplier_ids authorized this time.
   */
  supplier_id_list?: number[];
  /**
   * Returned all user_ids authorized this time.
   */
  user_id_list?: number[];
  /**
   * If the authorized role is principal administrator, return all principal_id under this authorization.
   */
  principal_id_list?: number[];
  /**
   * Returned when the API call is successful. A dynamic token that can be used multiple times and expires after 4 hours.
   */
  access_token?: string;
  /**
   * Returned when the API call is successful. Use refresh_token to get a new access_token. Valid for each shop_id, merchant_id, supplier_id, or user_id respectively, for 30 days.
   */
  refresh_token?: string;
  /**
   * Returned when the API call is successful. The validity period of the access_token, in seconds.
   */
  expire_in?: number;
}

/**
 * Response payload for get_access_token
 *
 * Use the code from the authorization step to call this API to obtain the authorized shop_id, merchant_id, supplier_id, or user_id, and its corresponding access_token and refresh_token.
 */
export type ShopeeGetAccessTokenResponse = ShopeeResponseCommon<ShopeeGetAccessTokenResponseData>;

/**
 * ShopeeGetMerchantsByPartnerAuthedMerchant sub-interface for ShopeeGetMerchantsByPartnerResponse
 */
export interface ShopeeGetMerchantsByPartnerAuthedMerchant {
  /**
   * Merchant's area
   */
  region?: string;
  /**
   * Shopee's unique identifier for a merchant.
   */
  merchant_id?: number;
  /**
   * The timestamp when the merchant was authorized to the partner.
   */
  auth_time?: number;
  /**
   * Use this field to indicate the expiration date for merchant authorization.
   */
  expire_time?: number;
}

/**
 * Response data payload for get_merchants_by_partner
 */
export interface ShopeeGetMerchantsByPartnerResponseData {
  /**
   * A list of merchants authorized to the partner.
   */
  authed_merchant_list?: ShopeeGetMerchantsByPartnerAuthedMerchant[];
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  more?: boolean;
}

/**
 * Response payload for get_merchants_by_partner
 *
 * Use this API to get basic info of merchants which have authorized to the partner.
 */
export type ShopeeGetMerchantsByPartnerResponse = ShopeeResponseCommon<ShopeeGetMerchantsByPartnerResponseData>;

/**
 * Response data payload for get_shopee_ip_ranges
 */
export interface ShopeeGetShopeeIpRangesResponseData {
  /**
   * IP address ranges of Shopee
   */
  ip_list?: string[];
}

/**
 * Response payload for get_shopee_ip_ranges
 *
 * You can get shopee ip address ranges through this open api.
 */
export type ShopeeGetShopeeIpRangesResponse = ShopeeResponseCommon<ShopeeGetShopeeIpRangesResponseData>;

/**
 * ShopeeGetShopsByPartnerSipAffiShop sub-interface for ShopeeGetShopsByPartnerAuthedShop
 */
export interface ShopeeGetShopsByPartnerSipAffiShop {
  /**
   * Affiliate Shop's area
   */
  region?: string;
  /**
   * Affiliate shop's id
   */
  affi_shop_id?: number;
}

/**
 * ShopeeGetShopsByPartnerAuthedShop sub-interface for ShopeeGetShopsByPartnerResponse
 */
export interface ShopeeGetShopsByPartnerAuthedShop {
  /**
   * Shop's area
   */
  region?: string;
  /**
   * Shop id
   */
  shop_id?: number;
  /**
   * The timestamp when the shop was authorized to the partner.
   */
  auth_time?: number;
  /**
   * Use this field to indicate the expiration date for shop authorization.
   */
  expire_time?: number;
  /**
   * SIP affiliate shops info list
   */
  sip_affi_shop_list?: ShopeeGetShopsByPartnerSipAffiShop[];
}

/**
 * Response data payload for get_shops_by_partner
 */
export interface ShopeeGetShopsByPartnerResponseData {
  /**
   * A list of shops authorized to the partner.
   */
  authed_shop_list?: ShopeeGetShopsByPartnerAuthedShop[];
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  more?: boolean;
}

/**
 * Response payload for get_shops_by_partner
 *
 * get basic info of shops which have authorized to the partner.
 */
export type ShopeeGetShopsByPartnerResponse = ShopeeResponseCommon<ShopeeGetShopsByPartnerResponseData>;

/**
 * Response data payload for get_token_by_resend_code
 */
export interface ShopeeGetTokenByResendCodeResponseData {
  /**
   * Return when resend code in shop module
   */
  shop_id_list?: number[];
  /**
   * Return when resend code in merchant module
   */
  merchant_id_list?: number[];
  /**
   * Use refresh_token to obtain new access_token. Valid for each shop_id and merchant_id respectively one-time use, expires in 30 days.
   */
  refresh_token?: string;
  /**
   * The token for API access, using to identify your permission to the api. Valid for multiple use and expires in 4 hours.
   */
  access_token?: string;
  /**
   * Access_token expiration time, unit is second.
   */
  expire_in?: number;
}

/**
 * Response payload for get_token_by_resend_code
 *
 * Use the resend code to get access token and refresh token. When you lost your access token or refresh token, you can go to authorization management page to resend code by yourselves. You can only use this endpoint in live environment, we don't support in test-stable environment.
 */
export type ShopeeGetTokenByResendCodeResponse = ShopeeResponseCommon<ShopeeGetTokenByResendCodeResponseData>;

/**
 * Response data payload for refresh_access_token
 */
export interface ShopeeRefreshAccessTokenResponseData {
  /**
   * Returned when the API call is successful. The partner_id you used for this refresh.
   */
  partner_id?: number;
  /**
   * Returned when the API call is successful.The principal_id for this refresh.
   */
  principal_id?: number;
  /**
   * Returned when the API call is successful. The shop_id for this refresh.
   */
  shop_id?: number;
  /**
   * Returned when the API call is successful. The merchant_id for this refresh.
   */
  merchant_id?: number;
  /**
   * Returned when the API call is successful. The supplier_id for this refresh.
   */
  supplier_id?: number;
  /**
   * Returned when the API call is successful. The user_id for this refresh.
   */
  user_id?: number;
  /**
   * Returned when the API call is successful. Each new access_token is a dynamic token that can be used multiple times. It expires after 4 hours.
   */
  access_token?: string;
  /**
   * New refresh_tokenReturned when the API call is successful. Use a refresh_token to get a new access_token. Each refresh_token is valid for 30 days, and can only be used once by either a shop_id or merchant_id or supplier_id or user_id.
   */
  refresh_token?: string;
  /**
   * Returned when the API call is successful. The validity period of the access_token, in seconds.
   */
  expire_in?: number;
}

/**
 * Response payload for refresh_access_token
 *
 * Use this API to refresh the access_token after it expires. Refresh_token can be used once only, this API will also return a new refresh_token. Please use the new refresh_token for the next RefreshAccessToken call
 */
export type ShopeeRefreshAccessTokenResponse = ShopeeResponseCommon<ShopeeRefreshAccessTokenResponseData>;
