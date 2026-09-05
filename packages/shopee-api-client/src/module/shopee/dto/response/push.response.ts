import { ShopeeResponseCommon } from './config.response';

/**
 * Response data payload for confirm_consumed_lost_push_message
 */
export interface ShopeeConfirmConsumedLostPushMessageResponseData {
  /**
   * Indicate waring details if hit waring. Empty if no waring happened.
   */
  warning?: string;
}

/**
 * Response payload for confirm_consumed_lost_push_message
 *
 * Confirm consumed lost push message
 */
export type ShopeeConfirmConsumedLostPushMessageResponse =
  ShopeeResponseCommon<ShopeeConfirmConsumedLostPushMessageResponseData>;

/**
 * ShopeeGetAppPushConfigResponseData sub-interface for ShopeeGetAppPushConfigResponse
 */
export interface ShopeeGetAppPushConfigResponseData {
  /**
   * The callback url of push mechanism. It is the address where the Shopee will send the push message to. If you don't set any callback_url before, this parameters is required.
   */
  callback_url?: string;
  /**
   * live push status:Normal,Warning,Suspended
   */
  live_push_status?: string;
  /**
   * The live push suspended time caused by low successful rate of push mechanism.Only when live push status is suspended, this parameters will response.
   */
  suspended_time?: number;
  /**
   * Use this filed to indicate that Shopee won't send any push message created by this shop.
   */
  blocked_shop_id?: number[];
  /**
   * Use this field to indicate which push config turn on, and you can receive the push message.1=Shop authorization for partners2=Shop deauthorization for partners3=Order status update push4=TrackingNo push5=Shopee Updates6=Banned item push7=item promotion push8=reserved stock change push9=promotionn update push10=webchat push11=video upload push12=openapi authorization expiry push13=brand register result
   */
  push_config_on_list?: number[];
  /**
   * Use this field to indicate which push config turn on, and you can receive the push message.1=Shop authorization for partners2=Shop deauthorization for partners3=Order status update push4=TrackingNo push5=Shopee Updates6=Banned item push7=item promotion push8=reserved stock change push9=promotionn update push10=webchat push11=video upload push12=openapi authorization expiry push13=brand register result
   */
  push_config_off_list?: number[];
}

/**
 * Response payload for get_app_push_config
 *
 * you can get your app current push config setting through this api
 */
export type ShopeeGetAppPushConfigResponse = ShopeeResponseCommon<ShopeeGetAppPushConfigResponseData>;

/**
 * ShopeeGetLostPushMessagePushMessage sub-interface for ShopeeGetLostPushMessageResponseData
 */
export interface ShopeeGetLostPushMessagePushMessage {
  /**
   * Shopee's unique identifier for a shop. If it's a partner level push (such as code: 1, 2, 12), shop_id will not be returned.
   */
  shop_id?: number;
  /**
   * Shopee's unique identifier for a push notification.
   */
  code?: number;
  /**
   * Timestamp that indicates the message was lost.
   */
  timestamp?: number;
  /**
   * Main Push message data.
   */
  data?: string;
}

/**
 * ShopeeGetLostPushMessageResponseData sub-interface for ShopeeGetLostPushMessageResponse
 */
export interface ShopeeGetLostPushMessageResponseData {
  /**
   * Returns the earliest 100 lost push messages that were lost within 3 days of the current time and not confirmed to have been consumed.
   */
  push_message_list?: ShopeeGetLostPushMessagePushMessage[];
  /**
   * This is to indicate whether the lost push message to be consumed is more than 100. If this value is true, you may need to continue calling to get the remaining lost push messages to be consumed.
   */
  has_next_page?: boolean;
  /**
   * Specifies the end entry of data returned in the current call.
   */
  last_message_id?: number;
}

/**
 * Response payload for get_lost_push_message
 *
 * Get the lost push messages that were lost within 3 days of the current time and not confirmed to have been consumed
 */
export type ShopeeGetLostPushMessageResponse = ShopeeResponseCommon<ShopeeGetLostPushMessageResponseData>;

/**
 * ShopeeSetAppPushConfigResponseData sub-interface for ShopeeSetAppPushConfigResponse
 */
export interface ShopeeSetAppPushConfigResponseData {
  /**
   * Use this field to indicate whether the configuration is set successfully.
   */
  result?: string;
}

/**
 * Response payload for set_app_push_config
 *
 * you can turn on or turn off your app push config setting through this open api
 */
export type ShopeeSetAppPushConfigResponse = ShopeeResponseCommon<ShopeeSetAppPushConfigResponseData>;
