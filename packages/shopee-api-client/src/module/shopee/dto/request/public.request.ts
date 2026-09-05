/**
 * Request parameters for get_access_token
 *
 * Use the code from the authorization step to call this API to obtain the authorized shop_id, merchant_id, supplier_id, or user_id, and its corresponding access_token and refresh_token.
 */
export interface ShopeeGetAccessTokenRequest {
  /**
   * The code in redirect url after the authorization. Valid for one-time use, expires in 10 minutes
   */
  code: string;
  /**
   * Partner ID is assigned upon registration is successful. Required for all requests.
   */
  partner_id: number;
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * The main_account_id of the seller that authorized the developer.
   */
  main_account_id?: number;
}

/**
 * Request parameters for get_merchants_by_partner
 *
 * Use this API to get basic info of merchants which have authorized to the partner.
 */
export interface ShopeeGetMerchantsByPartnerRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.
   */
  page_size?: number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no?: number;
}

/**
 * Request parameters for get_shopee_ip_ranges
 *
 * You can get shopee ip address ranges through this open api.
 */
export type ShopeeGetShopeeIpRangesRequest = Record<string, never>;

/**
 * Request parameters for get_shops_by_partner
 *
 * get basic info of shops which have authorized to the partner.
 */
export interface ShopeeGetShopsByPartnerRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.
   */
  page_size?: number;
  /**
   * Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call.
   */
  page_no?: number;
}

/**
 * Request parameters for get_token_by_resend_code
 *
 * Use the resend code to get access token and refresh token. When you lost your access token or refresh token, you can go to authorization management page to resend code by yourselves. You can only use this endpoint in live environment, we don't support in test-stable environment.
 */
export interface ShopeeGetTokenByResendCodeRequest {
  /**
   * the code in redirect url after you resend code in shop authorization management page. valid for one-time use, expires in 10minutes.
   */
  resend_code: string;
}

/**
 * Request parameters for refresh_access_token
 *
 * Use this API to refresh the access_token after it expires. Refresh_token can be used once only, this API will also return a new refresh_token. Please use the new refresh_token for the next RefreshAccessToken call
 */
export interface ShopeeRefreshAccessTokenRequest {
  /**
   * Use refresh_token to get a new access_token. Each refresh_token is valid for 30 days, and can only be used once by either a shop_id or merchant_id or supplier_id or user_id.
   */
  refresh_token: string;
  /**
   * The partner_id obtained from the App. This partner_id is inserted into the body.
   */
  partner_id: number;
  /**
   * The shop_id that granted authorization to your App. Only the shop_id or merchant_id or supplier_id or user_id can be selected as the input parameter, and they must be refreshed separately.
   */
  shop_id?: number;
  /**
   * The merchant_id that granted authorization to your App. Only the shop_id or merchant_id or supplier_id or user_id can be selected as the input parameter, and they must be refreshed separately.
   */
  merchant_id?: number;
  /**
   * The supplier_id that granted authorization to your App. Only the shop_id or merchant_id or supplier_id or user_id can be selected as the input parameter, and they must be refreshed separately.
   */
  supplier_id?: number;
  /**
   * The user_id that granted authorization to your App. Only the shop_id or merchant_id or supplier_id or user_id can be selected as the input parameter, and they must be refreshed separately.
   */
  user_id?: number;
  /**
   * Shopee's unique identifier for a principal.
   */
  principal_id?: number;
}
