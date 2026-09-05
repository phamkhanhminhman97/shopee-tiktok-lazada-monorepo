import { ShopeeResponseCommon } from './config.response';

interface AuthorisedBrand {
  brand_id?: number;
  brand_name?: string;
}

interface GetAuthorisedResellerBrand {
  is_authorised_reseller?: boolean;
  total_count?: number;
  more?: boolean;
  authorised_brand_list?: AuthorisedBrand[];
}

interface ResponseGetAuthorisedResellerBrand extends ShopeeResponseCommon<GetAuthorisedResellerBrand> {}

interface BrShopOnboardingBillingAddress {
  state?: string;
  city?: string;
  address?: string;
  zipcode?: string;
  neighborhood?: string;
}

/**
 * `tax_id_type`: 1 = Personal seller (CPF), 2 = Company seller (CNPJ).
 * `onboarding_status`: 0 None, 1 Regis Processing, 2 Regis Validated,
 * 3 Regis Rejected, 4 KYC Pending, 5 KYC Processing, 6 KYC Processing
 * Manually, 7 KYC Validated, 8 KYC Rejected.
 */
interface GetBrShopOnboardingInfo {
  tax_id_type?: number;
  tax_id?: string;
  cpf_id?: string;
  cnpj_id?: string;
  name?: string;
  legal_entity_name?: string;
  birthday?: number;
  birthday_str?: string;
  state_registration?: string;
  billing_address?: BrShopOnboardingBillingAddress;
  onboarding_status?: number;
  submission_time?: number;
  nationality?: string;
  cnae_main?: string;
  cnae_secondary?: string;
  mei_check?: string;
  onboarding_passed?: boolean;
}

interface ResponseGetBrShopOnboardingInfo extends ShopeeResponseCommon<GetBrShopOnboardingInfo> {}

interface GetShopProfile {
  shop_logo?: string;
  description?: string;
  shop_name?: string;
  /** For BR CNPJ sellers only: 'Shopee' or 'Other'. */
  invoice_issuer?: string;
}

interface ResponseGetShopProfile extends ShopeeResponseCommon<GetShopProfile> {}

interface GetShopHolidayMode {
  holiday_mode_on?: boolean;
  holiday_mode_mtime?: number;
  /** 1 = Partial Holiday (orders still accepted), 0 = Full Holiday. Only meaningful when `holiday_mode_on` is true. */
  holiday_mode_type?: number;
  holiday_mode_start_time?: number;
  holiday_mode_end_time?: number;
  holiday_mode_description?: string;
  debug_msg?: string;
}

interface ResponseGetShopHolidayMode extends ShopeeResponseCommon<GetShopHolidayMode> {}

interface ShopInfoSipAffiShop {
  affi_shop_id?: number;
  region?: string;
}

interface ShopInfoLinkedDirectShop {
  direct_shop_id?: number;
  direct_shop_region?: string;
}

interface ShopInfoOutletShopInfo {
  outlet_shop_id?: number;
}

/** `status`: BANNED, FROZEN, or NORMAL. */
interface GetShopInfo {
  shop_name?: string;
  region?: string;
  status?: 'BANNED' | 'FROZEN' | 'NORMAL' | string;
  sip_affi_shops?: ShopInfoSipAffiShop[];
  is_cb?: boolean;
  auth_time?: number;
  expire_time?: number;
  is_sip?: boolean;
  is_upgraded_cbsc?: boolean;
  merchant_id?: number;
  shop_fulfillment_flag?: string;
  is_main_shop?: boolean;
  is_direct_shop?: boolean;
  linked_main_shop_id?: number;
  linked_direct_shop_list?: ShopInfoLinkedDirectShop[];
  is_one_awb?: boolean;
  is_mart_shop?: boolean;
  is_outlet_shop?: boolean;
  mart_shop_id?: number;
  outlet_shop_info_list?: ShopInfoOutletShopInfo[];
  mart_outlet_structure_type?: string;
}

interface ResponseGetShopInfo extends ShopeeResponseCommon<GetShopInfo> {}

interface ShopNotificationData {
  create_time?: number;
  content?: string;
  title?: string;
  url?: string;
}

interface GetShopNotification {
  cursor?: number;
  data?: ShopNotificationData;
}

interface ResponseGetShopNotification extends ShopeeResponseCommon<GetShopNotification> {}

interface WarehouseDetailItem {
  warehouse_id?: number;
  warehouse_name?: string;
  warehouse_type?: number;
  location_id?: string;
  address_id?: number;
  region?: string;
  state?: string;
  city?: string;
  address?: string;
  zipcode?: string;
  district?: string;
  town?: string;
  state_code?: string;
  /** 0 not in holiday mode, 1 active, 2 turning off, 3 turning on. */
  holiday_mode_state?: number;
}

interface ResponseGetWarehouseDetail extends ShopeeResponseCommon<WarehouseDetailItem[]> {}

interface SetShopHolidayMode {
  debug_msg?: string;
}

interface ResponseSetShopHolidayMode extends ShopeeResponseCommon<SetShopHolidayMode> {}

interface UpdateShopProfile {
  shop_logo?: string;
  description?: string;
  shop_name?: string;
}

interface ResponseUpdateShopProfile extends ShopeeResponseCommon<UpdateShopProfile> {}

export {
  AuthorisedBrand as ShopeeAuthorisedBrand,
  ResponseGetAuthorisedResellerBrand as ShopeeResponseGetAuthorisedResellerBrand,
  ResponseGetBrShopOnboardingInfo as ShopeeResponseGetBrShopOnboardingInfo,
  ResponseGetShopProfile as ShopeeResponseGetShopProfile,
  ResponseGetShopHolidayMode as ShopeeResponseGetShopHolidayMode,
  ResponseGetShopInfo as ShopeeResponseGetShopInfo,
  ResponseGetShopNotification as ShopeeResponseGetShopNotification,
  WarehouseDetailItem as ShopeeWarehouseDetailItem,
  ResponseGetWarehouseDetail as ShopeeResponseGetWarehouseDetail,
  ResponseSetShopHolidayMode as ShopeeResponseSetShopHolidayMode,
  ResponseUpdateShopProfile as ShopeeResponseUpdateShopProfile,
};
