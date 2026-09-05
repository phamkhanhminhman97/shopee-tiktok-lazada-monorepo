type PushCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 15;

interface PushPayload<TCode extends PushCode = PushCode, TData = unknown> {
  /** Shopee Push Mechanism notification code. */
  code: TCode;
  /** Timestamp in seconds indicating when Shopee sent this push message. */
  timestamp: number;
  /** Partner ID. Usually present for authorization pushes. */
  partner_id?: number;
  /** Shop ID related to this push. Usually present for order pushes. */
  shop_id?: number;
  /** Merchant ID related to this push, when Shopee includes it. */
  merchant_id?: number;
  /** Event-specific payload. Shape depends on the push code. */
  data: TData;
}

interface ShopAuthorizationPushData {
  /** Authorized shop ID. Present for single-shop authorization. */
  shop_id?: number;
  /** Authorized shop IDs. Present when a main account authorizes multiple shops. */
  shop_id_list?: number[];
  /** Authorized merchant ID. Present for merchant authorization. */
  merchant_id?: number;
  /** Authorized merchant IDs. Present when a main account authorizes multiple merchants. */
  merchant_id_list?: number[];
  /** Main account ID used for authorization, when applicable. */
  main_account_id?: number;
  /** Authorization source/type returned by Shopee. */
  authorize_type: string;
  /** Human-readable event details from Shopee. */
  extra: string;
  /** 1 means the push event succeeded. */
  success: number;
}

interface ShopAuthorizationCanceledPushData {
  /** Deauthorized shop ID. Shopee examples sometimes use `shopid` instead of `shop_id`. */
  shop_id?: number;
  /** Backward-compatible field name observed in Shopee examples. */
  shopid?: number;
  /** Deauthorized shop IDs. */
  shop_id_list?: number[];
  /** Deauthorized merchant ID. */
  merchant_id?: number;
  /** Deauthorized merchant IDs. */
  merchant_id_list?: number[];
  /** Deauthorized user ID. */
  user_id?: number;
  /** Deauthorized user IDs. */
  user_id_list?: number[];
  /** Main account ID used for cancellation, when applicable. */
  main_account_id?: number;
  /** Cancellation reason/type returned by Shopee. */
  authorize_type: string;
  /** Human-readable event details from Shopee. */
  extra: string;
  /** 1 means the push event succeeded. */
  success: number;
}

interface OpenApiAuthorizationExpiryPushData {
  /** Merchant IDs whose authorization expires within one week. */
  merchant_expire_soon?: number[];
  /** Shop IDs whose authorization expires within one week. */
  shop_expire_soon?: number[];
  /** User IDs whose authorization expires within one week. */
  user_expire_soon?: number[];
  /** Expiration cutoff timestamp. */
  expire_before: number;
  /** Page number for this push payload. */
  page_no: number;
  /** Total pages for this push payload. */
  total_page: number;
}

interface OrderStatusPushData {
  /** Shopee order SN. Shopee Push docs use `ordersn` for this event. */
  ordersn: string;
  /** Current order status, for example PROCESSED, COMPLETED, CANCELLED. */
  status: string;
  /**
   * COMPLETED scenario.
   * NORMAL means the order completed normally.
   * RRAOC means raise return/refund after order completed has completed.
   */
  completed_scenario?: '' | 'NORMAL' | 'RRAOC' | string;
  /** Order update timestamp in seconds. */
  update_time: number;
  /** Shopee may include item-level event data. */
  items?: unknown[];
}

interface OrderTrackingNoPushData {
  /** Shopee order SN. Shopee Push docs use `ordersn` for this event. */
  ordersn: string;
  /** Legacy/offline fulfillment order ID from Shopee docs. */
  forder_id?: string;
  /** Shopee package number under the order. */
  package_number: string;
  /** Tracking number for this order/package. */
  tracking_no: string;
}

interface ShippingDocumentStatusPushData {
  /**
   * Shopee order SN.
   * Docs list `order_sn`, while the sample payload uses `ordersn`, so both are typed.
   */
  order_sn?: string;
  /** Sample payload field name from Shopee docs. */
  ordersn?: string;
  /** Shopee package number under the order. */
  package_number: string;
  /** Shipping document generation status. */
  status: 'READY' | 'FAILED' | string;
}

interface VerifyPushSignatureOptions {
  /**
   * Full callback URL exactly as Shopee calls it.
   * Example: https://your-app.com/shopee/webhook
   */
  callbackUrl: string;
  /**
   * Raw HTTP request body from Shopee. Do not use JSON.stringify(req.body)
   * because Shopee signs the original raw request content.
   */
  rawBody: string | Buffer;
  /** Partner key from Shopee Open Platform Console. */
  partnerKey: string;
  /** Authorization header value sent by Shopee. */
  authorization: string;
}

type ShopAuthorizationPushPayload = PushPayload<1, ShopAuthorizationPushData>;
type ShopAuthorizationCanceledPushPayload = PushPayload<2, ShopAuthorizationCanceledPushData>;
type OpenApiAuthorizationExpiryPushPayload = PushPayload<12, OpenApiAuthorizationExpiryPushData>;
type OrderStatusPushPayload = PushPayload<3, OrderStatusPushData>;
type OrderTrackingNoPushPayload = PushPayload<4, OrderTrackingNoPushData>;
type ShippingDocumentStatusPushPayload = PushPayload<15, ShippingDocumentStatusPushData>;

type KnownPushPayload =
  | ShopAuthorizationPushPayload
  | ShopAuthorizationCanceledPushPayload
  | OpenApiAuthorizationExpiryPushPayload
  | OrderStatusPushPayload
  | OrderTrackingNoPushPayload
  | ShippingDocumentStatusPushPayload;

export {
  PushCode as ShopeePushCode,
  PushPayload as ShopeePushPayload,
  ShopAuthorizationPushData as ShopeeShopAuthorizationPushData,
  ShopAuthorizationCanceledPushData as ShopeeShopAuthorizationCanceledPushData,
  OpenApiAuthorizationExpiryPushData as ShopeeOpenApiAuthorizationExpiryPushData,
  OrderStatusPushData as ShopeeOrderStatusPushData,
  OrderTrackingNoPushData as ShopeeOrderTrackingNoPushData,
  ShippingDocumentStatusPushData as ShopeeShippingDocumentStatusPushData,
  ShopAuthorizationPushPayload as ShopeeShopAuthorizationPushPayload,
  ShopAuthorizationCanceledPushPayload as ShopeeShopAuthorizationCanceledPushPayload,
  OpenApiAuthorizationExpiryPushPayload as ShopeeOpenApiAuthorizationExpiryPushPayload,
  OrderStatusPushPayload as ShopeeOrderStatusPushPayload,
  OrderTrackingNoPushPayload as ShopeeOrderTrackingNoPushPayload,
  ShippingDocumentStatusPushPayload as ShopeeShippingDocumentStatusPushPayload,
  KnownPushPayload as ShopeeKnownPushPayload,
  VerifyPushSignatureOptions as ShopeeVerifyPushSignatureOptions,
};

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Request parameters for confirm_consumed_lost_push_message
 *
 * Confirm consumed lost push message
 */
export interface ShopeeConfirmConsumedLostPushMessageRequest {
  /**
   * The last_message_id returned by v2.push.get_lost_push_message.
   */
  last_message_id: number;
}

/**
 * Request parameters for get_app_push_config
 *
 * you can get your app current push config setting through this api
 */
export type ShopeeGetAppPushConfigRequest = Record<string, never>;

/**
 * Request parameters for get_lost_push_message
 *
 * Get the lost push messages that were lost within 3 days of the current time and not confirmed to have been consumed
 */
export type ShopeeGetLostPushMessageRequest = Record<string, never>;

/**
 * Request parameters for set_app_push_config
 *
 * you can turn on or turn off your app push config setting through this open api
 */
export interface ShopeeSetAppPushConfigRequest {
  /**
   * The callback url of push mechanism. It is the address where the Shopee will send the push message to. If you don't set any callback_url before, this parameters is required.
   */
  callback_url?: string;
  /**
   * Turn on push config, Shopee will send the push message into the callback url.1=Shop authorization for partners2=Shop deauthorization for partners3=Order status update push4=TrackingNo push5=Shopee Updates6=Banned item push7=item promotion push8=reserved stock change push9=promotionn update push10=webchat push11=video upload push12=openapi authorization expiry push13=brand register result
   */
  set_push_config_on?: number[];
  /**
   * Turn off Push config, Shopee won't send the push message into the callback url.1=Shop authorization for partners2=Shop deauthorization for partners3=Order status update push4=TrackingNo push5=Shopee Updates6=Banned item push7=item promotion push8=reserved stock change push9=promotionn update push10=webchat push11=video upload push12=openapi authorization expiry push13=brand register result
   */
  set_push_config_off?: number[];
  /**
   * Use this filed to set shops that need to be blocked.Please input no more than 500 shop id.
   */
  blocked_shop_id_list?: number[];
}
