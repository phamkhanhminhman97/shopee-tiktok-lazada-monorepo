import { ShopeeResponseCommon } from './config.response';

/**
 * Enum generated for field ShopeeMerchantCurrency
 */
export enum ShopeeMerchantCurrency {
  CNSC = "CNSC",
  KRSC = "KRSC",
}

/**
 * Response data payload for get_merchant_info
 */
export interface ShopeeGetMerchantInfoResponseData {
  /**
   * Name of the merchant.
   */
  merchant_name?: string;
  /**
   * The timestamp when the merchant was authorized to the partner.
   */
  auth_time?: number;
  /**
   * Use this field to indicate the expiration date for merchant authorization.
   */
  expire_time?: number;
  /**
   * The three-digit code representing the currency unit used for the item in this merchant. If currency haven't been setting in CNSC/KRSC, it will be empty.China merchant support CNY and USD currently.Korea merchant support KRW and USD currently. Hong kong merchant support USD currently, will support HKD later.
   */
  merchant_currency?: ShopeeMerchantCurrency | string | number;
  /**
   * Region of the merchant. Including KR, HK and CN.
   */
  merchant_region?: string;
  /**
   * Use this filed to indicate whether this merchant is upgraded to cbsc.
   */
  is_upgraded_cbsc?: boolean;
}

/**
 * Response payload for get_merchant_info
 *
 * Use this call to get information of merchant
 */
export type ShopeeGetMerchantInfoResponse = ShopeeResponseCommon<ShopeeGetMerchantInfoResponseData>;

/**
 * ShopeeGetMerchantPrepaidAccountListList sub-interface for ShopeeGetMerchantPrepaidAccountListResponseData
 */
export interface ShopeeGetMerchantPrepaidAccountListList {
  /**
   * Record ID
   */
  prepaid_account_id?: number;
  /**
   * Courier Company Key (快递公司编码).
   */
  prepaid_account_courier_key?: string;
  /**
   * Courier Company Name (快递公司名称).
   */
  prepaid_account_courier_name?: string;
  /**
   * Prepaid Account Number (电子面单账户号码).
   */
  prepaid_account_partner_id?: string;
  /**
   * Prepaid Account Password (电子面单账户密码).
   */
  prepaid_account_partner_key?: string;
  /**
   * Partner Secret (电子面单密钥).
   */
  prepaid_account_partner_secret?: string;
  /**
   * Partner Name (电子面单客户账户名称).
   */
  prepaid_account_partner_name?: string;
  /**
   * Branch Name (网点名称).
   */
  prepaid_account_partner_net?: string;
  /**
   * Partner Code (电子面单承载编号).
   */
  prepaid_account_partner_code?: string;
  /**
   * Delivery Agent Name (电子面单承载快递员名).
   */
  prepaid_account_check_man?: string;
  /**
   * This is to indicate whether the prepaid account is Default Prepaid Account.
   */
  prepaid_account_is_default?: boolean;
}

/**
 * ShopeeGetMerchantPrepaidAccountListResponseData sub-interface for ShopeeGetMerchantPrepaidAccountListResponse
 */
export interface ShopeeGetMerchantPrepaidAccountListResponseData {
  total?: number;
  list?: ShopeeGetMerchantPrepaidAccountListList[];
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  more?: boolean;
}

/**
 * Response payload for get_merchant_prepaid_account_list
 *
 * Use this api to get seller’s courier prepaid account.
 */
export type ShopeeGetMerchantPrepaidAccountListResponse =
  ShopeeResponseCommon<ShopeeGetMerchantPrepaidAccountListResponseData>;

/**
 * ShopeeGetMerchantWarehouseListAddress sub-interface for ShopeeGetMerchantWarehouseListWarehouse
 */
export interface ShopeeGetMerchantWarehouseListAddress {
  /**
   * The address name filled in when creating the warehouse.
   */
  address_name?: string;
  /**
   * Region of your warehouse address.
   */
  region?: string;
  /**
   * Detail address of your warehouse address.
   */
  address?: string;
  /**
   * City of your warehouse address.
   */
  city?: string;
  /**
   * Distinct of your warehouse address.
   */
  district?: string;
  /**
   * State of your warehouse address.
   */
  state?: string;
  /**
   * Town of your warehouse address.
   */
  town?: string;
  /**
   * Zipcode of your warehouse address.
   */
  zip_code?: string;
}

/**
 * ShopeeGetMerchantWarehouseListEnterpriseInfo sub-interface for ShopeeGetMerchantWarehouseListWarehouse
 */
export interface ShopeeGetMerchantWarehouseListEnterpriseInfo {
  company_name?: string;
  cnpj?: string;
  state_registration_number?: string;
  is_freight_payer?: boolean;
}

/**
 * ShopeeGetMerchantWarehouseListWarehouse sub-interface for ShopeeGetMerchantWarehouseListResponseData
 */
export interface ShopeeGetMerchantWarehouseListWarehouse {
  /**
   * Warehouse address identifier.
   */
  warehouse_id?: number;
  /**
   * The warehouse name filled in when creating the warehouse.
   */
  warehouse_name?: string;
  /**
   * 1 means pickup warehouse2 means return warehouse
   */
  warehouse_type?: number;
  /**
   * Region of your warehouse.
   */
  warehouse_region?: string;
  /**
   * Location identifier for stocks. Different location_ids represent that your addresses are in different item stocks.
   */
  location_id?: string;
  address?: ShopeeGetMerchantWarehouseListAddress;
  enterprise_info?: ShopeeGetMerchantWarehouseListEnterpriseInfo;
}

/**
 * ShopeeGetMerchantWarehouseList_GetMerchantWarehouseListCursor sub-interface for ShopeeGetMerchantWarehouseListResponseData
 */
export interface ShopeeGetMerchantWarehouseList_GetMerchantWarehouseListCursor {
  next_id?: number;
  prev_id?: number;
  page_size?: number;
}

/**
 * ShopeeGetMerchantWarehouseListResponseData sub-interface for ShopeeGetMerchantWarehouseListResponse
 */
export interface ShopeeGetMerchantWarehouseListResponseData {
  /**
   * Total count of all warehouses.
   */
  total_count?: number;
  warehouse_list?: ShopeeGetMerchantWarehouseListWarehouse[];
  cursor?: ShopeeGetMerchantWarehouseList_GetMerchantWarehouseListCursor;
}

/**
 * Response payload for get_merchant_warehouse_list
 *
 * Get merchant warehouse with page
 */
export type ShopeeGetMerchantWarehouseListResponse = ShopeeResponseCommon<ShopeeGetMerchantWarehouseListResponseData>;

/**
 * ShopeeGetMerchantWarehouseLocationListResponseDataItem sub-interface for ShopeeGetMerchantWarehouseLocationListResponse
 */
export interface ShopeeGetMerchantWarehouseLocationListResponseDataItem {
  /**
   * Location identifier for stocks. Different location_ids represent that your addresses are in different item stocks
   */
  location_id?: string;
  /**
   * The warehouse name filled in when creating the warehouse address
   */
  warehouse_name?: string;
}

/**
 * Response data payload for get_merchant_warehouse_location_list
 */
export type ShopeeGetMerchantWarehouseLocationListResponseData =
  ShopeeGetMerchantWarehouseLocationListResponseDataItem[];

/**
 * Response payload for get_merchant_warehouse_location_list
 *
 * get merchant warehouse location list
 */
export type ShopeeGetMerchantWarehouseLocationListResponse =
  ShopeeResponseCommon<ShopeeGetMerchantWarehouseLocationListResponseData>;

/**
 * ShopeeGetShopListByMerchantSipAffiShop sub-interface for ShopeeGetShopListByMerchantShop
 */
export interface ShopeeGetShopListByMerchantSipAffiShop {
  /**
   * Affiliate shop's id.
   */
  affi_shop_id?: number;
}

/**
 * ShopeeGetShopListByMerchantShop sub-interface for ShopeeGetShopListByMerchantResponse
 */
export interface ShopeeGetShopListByMerchantShop {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * List of SIP affiliate shops.Only primary shop will return this parameter
   */
  sip_affi_shops?: ShopeeGetShopListByMerchantSipAffiShop[];
}

/**
 * Response data payload for get_shop_list_by_merchant
 */
export interface ShopeeGetShopListByMerchantResponseData {
  /**
   * list of shop authorized to the partner and bound to the merchant.
   */
  shop_list?: ShopeeGetShopListByMerchantShop[];
  /**
   * This is to indicate whether the list is more than one page. If this value is true, you may want to continue to check next page to retrieve the rest of datas.
   */
  more?: boolean;
}

/**
 * Response payload for get_shop_list_by_merchant
 *
 * Use this call to get shop_list bound to merchant_id.
 */
export type ShopeeGetShopListByMerchantResponse = ShopeeResponseCommon<ShopeeGetShopListByMerchantResponseData>;

/**
 * ShopeeGetWarehouseEligibleShopListShop sub-interface for ShopeeGetWarehouseEligibleShopListResponseData
 */
export interface ShopeeGetWarehouseEligibleShopListShop {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * Name of the shop.
   */
  shop_name?: string;
}

/**
 * ShopeeGetWarehouseEligibleShopList_GetWarehouseEligibleShopListCursor sub-interface for ShopeeGetWarehouseEligibleShopListResponseData
 */
export interface ShopeeGetWarehouseEligibleShopList_GetWarehouseEligibleShopListCursor {
  next_id?: number;
  prev_id?: number;
  page_size?: number;
}

/**
 * ShopeeGetWarehouseEligibleShopListResponseData sub-interface for ShopeeGetWarehouseEligibleShopListResponse
 */
export interface ShopeeGetWarehouseEligibleShopListResponseData {
  /**
   * Eligible shop list of the warehouse
   */
  shop_list?: ShopeeGetWarehouseEligibleShopListShop[];
  cursor?: ShopeeGetWarehouseEligibleShopList_GetWarehouseEligibleShopListCursor;
}

/**
 * Response payload for get_warehouse_eligible_shop_list
 *
 * Get eligible shop list by warehouse id
 */
export type ShopeeGetWarehouseEligibleShopListResponse =
  ShopeeResponseCommon<ShopeeGetWarehouseEligibleShopListResponseData>;
