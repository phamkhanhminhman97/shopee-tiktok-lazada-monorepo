interface RequestGetAuthorisedResellerBrand {
  /** Page number, starting from 1. */
  page_no: number;
  /** Items per page, between 1 and 30. */
  page_size: number;
}

/** Request type for Shopee v2.shop.get_br_shop_onboarding_info. No parameters required. */
type RequestGetBrShopOnboardingInfo = Record<string, never>;

/** Request type for Shopee v2.shop.get_profile. No parameters required. */
type RequestGetShopProfile = Record<string, never>;

/** Request type for Shopee v2.shop.get_shop_holiday_mode. No parameters required. */
type RequestGetShopHolidayMode = Record<string, never>;

/** Request type for Shopee v2.shop.get_shop_info. No parameters required. */
type RequestGetShopInfo = Record<string, never>;

interface RequestGetShopNotification {
  /** Cursor from a previous call; omit to get the latest notification. */
  cursor?: number;
  /** Page size, default 10, maximum 50. */
  page_size?: number;
}

interface RequestGetWarehouseDetail {
  /** Warehouse type: 1 = Pickup Warehouse (default), 2 = Return Warehouse. */
  warehouse_type?: number;
}

/**
 * Request type for Shopee v2.shop.set_shop_holiday_mode.
 *
 * `holiday_mode_start_time`/`holiday_mode_end_time` must fall on whole-hour
 * boundaries per Shopee's documented rules.
 */
interface RequestSetShopHolidayMode {
  /** `true` turns holiday mode ON, `false` turns it OFF. */
  holiday_mode_on: boolean;
  /**
   * 0 = Full holiday (no new orders accepted).
   * 1 = Partial holiday (orders accepted, Ship-By-Date auto-extended).
   */
  holiday_mode_type?: number;
  /** Unix timestamp (seconds), must fall on a whole hour. */
  holiday_mode_start_time?: number;
  /** Unix timestamp (seconds), must fall on a whole hour minus one second, and be later than `holiday_mode_start_time`. */
  holiday_mode_end_time?: number;
  holiday_mode_description?: string;
}

interface RequestUpdateShopProfile {
  shop_name?: string;
  /** New shop logo, expressed as a Shopee `image_id` (see `uploadImage()`). */
  shop_logo?: string;
  description?: string;
}

export {
  RequestGetAuthorisedResellerBrand as ShopeeRequestGetAuthorisedResellerBrand,
  RequestGetBrShopOnboardingInfo as ShopeeRequestGetBrShopOnboardingInfo,
  RequestGetShopProfile as ShopeeRequestGetShopProfile,
  RequestGetShopHolidayMode as ShopeeRequestGetShopHolidayMode,
  RequestGetShopInfo as ShopeeRequestGetShopInfo,
  RequestGetShopNotification as ShopeeRequestGetShopNotification,
  RequestGetWarehouseDetail as ShopeeRequestGetWarehouseDetail,
  RequestSetShopHolidayMode as ShopeeRequestSetShopHolidayMode,
  RequestUpdateShopProfile as ShopeeRequestUpdateShopProfile,
};
