export interface SellerQueryBuyboxHuntingInfoResultData {
  venture?: string;
  itemId?: string;
  skuId?: string;
  isValid?: string;
  priceRank?: string;
}

export interface SellerQueryBuyboxHuntingInfoResult {
  data?: SellerQueryBuyboxHuntingInfoResultData;
  retSuccess?: boolean;
}

export interface SellerQueryBuyboxHuntingInfo {
  result?: SellerQueryBuyboxHuntingInfoResult;
}

export type SellerQueryBuyboxHuntingInfoResponse = SellerQueryBuyboxHuntingInfo;

export interface SellerGetPickUpStoreListResult {
  headers: Record<string, unknown>;
  success: boolean;
  model: Record<string, unknown>;
  biz_ext_map: Record<string, unknown>;
  mapping_code: string;
  msg_info: string;
  msg_code: string;
  http_status_code: number;
}

export interface SellerGetPickUpStoreList {
  result: SellerGetPickUpStoreListResult;
}

export type SellerGetPickUpStoreListResponse = SellerGetPickUpStoreList;

export interface SellerQueryWarehouseDetailInfoBySellerIdResultModule {
  country: string;
  province: string;
  city: string;
  district: string;
  name: string;
  detail_address: string;
  post_code: string;
  warehouse_code: string;
  default_address: boolean;
  status: string;
}

export interface SellerQueryWarehouseDetailInfoBySellerIdResult {
  not_success: boolean;
  success: boolean;
  module: SellerQueryWarehouseDetailInfoBySellerIdResultModule;
  error_code: string;
  repeated: boolean;
  retry: boolean;
  class_name?: string;
}

export interface SellerQueryWarehouseDetailInfoBySellerId {
  result: SellerQueryWarehouseDetailInfoBySellerIdResult;
}

export type SellerQueryWarehouseDetailInfoBySellerIdResponse = SellerQueryWarehouseDetailInfoBySellerId;

export interface SellerGetWarehouseBySellerIdResult {
  not_success: boolean;
  success: Record<string, unknown>;
  module: Record<string, unknown>;
  error_code: string;
  repeated: boolean;
  retry: boolean;
}

export interface SellerGetWarehouseBySellerId {
  result: SellerGetWarehouseBySellerIdResult;
}

export type SellerGetWarehouseBySellerIdResponse = SellerGetWarehouseBySellerId;

export interface SellerGetCountryInfoData {
  label?: string;
  value?: string;
}

export interface SellerGetCountryInfo {
  data: SellerGetCountryInfoData[];
  success?: string;
}

export type SellerGetCountryInfoResponse = SellerGetCountryInfo;

export interface SellerGetSubAddressData {
  label?: string;
  value?: string;
}

export interface SellerGetSubAddress {
  data?: SellerGetSubAddressData[];
  success?: boolean;
}

export type SellerGetSubAddressResponse = SellerGetSubAddress;

export interface SellerGetSellerRegisterInfoDataBaseInfoList {
  email?: string;
  phone?: string;
  shopName?: string;
  status?: string;
  reqNo?: string;
  registerCountry?: string;
}

export interface SellerGetSellerRegisterInfoData {
  licenseNumber?: string;
  companyName?: string;
  baseInfoList?: SellerGetSellerRegisterInfoDataBaseInfoList[];
}

export interface SellerGetSellerRegisterInfo {
  data?: SellerGetSellerRegisterInfoData[];
  success?: string;
}

export type SellerGetSellerRegisterInfoResponse = SellerGetSellerRegisterInfo;

export interface SellerGetSellerData {
  name_company: string;
  seller_id: number;
  name: string;
  short_code: string;
  logo_url: string;
  email: string;
  cb: boolean;
  location?: string;
  status?: string;
  verified?: boolean;
  marketplaceEaseMode?: boolean;
}

export interface SellerGetSeller {
  data: SellerGetSellerData;
}

export type SellerGetSellerResponse = SellerGetSeller;

export interface SellerGetSellerMetricsByIdData {
  main_category_name: string;
  seller_id: number;
  response_rate: string;
  response_time: string;
  ship_on_time: string;
  main_category_id: number;
  positive_seller_rating: string;
}

export interface SellerGetSellerMetricsById {
  data: SellerGetSellerMetricsByIdData;
}

export type SellerGetSellerMetricsByIdResponse = SellerGetSellerMetricsById;

export interface SellerGetSellerPerformanceDataIndicators {
  type?: string;
  name?: string;
  tip?: string;
  score?: number;
  score_format?: string;
  formatted_score?: string;
  target?: number;
  target_format?: string;
  formatted_target?: string;
  target_respected?: boolean;
  action_url?: string;
}

export interface SellerGetSellerPerformanceData {
  seller_id?: number;
  main_category_id?: number;
  main_category_name?: string;
  indicators?: SellerGetSellerPerformanceDataIndicators[];
}

export interface SellerGetSellerPerformance {
  data: SellerGetSellerPerformanceData;
  success: boolean;
  error_code: string;
}

export type SellerGetSellerPerformanceResponse = SellerGetSellerPerformance;

export interface SellerSellerPolicyFetch {
  success?: string;
  data?: string;
}

export type SellerSellerPolicyFetchResponse = SellerSellerPolicyFetch;

export interface SellerSaveSellerWarehouseInfoResult {
  not_success: boolean;
  success: boolean;
  module: boolean;
  repeated: boolean;
  retry: boolean;
}

export interface SellerSaveSellerWarehouseInfo {
  result: SellerSaveSellerWarehouseInfoResult;
}

export type SellerSaveSellerWarehouseInfoResponse = SellerSaveSellerWarehouseInfo;

export interface SellerSynchronizeSellerItemArConfigModel {
  uid?: string;
}

export interface SellerSynchronizeSellerItemArConfig {
  success: boolean;
  errorCode: string;
  model: SellerSynchronizeSellerItemArConfigModel;
  errorMsg: string;
}

export type SellerSynchronizeSellerItemArConfigResponse = SellerSynchronizeSellerItemArConfig;

export interface SellerPaymentBindingData {
  result?: boolean;
  reason?: string;
  shortCode?: string;
}

export interface SellerPaymentBinding {
  data: SellerPaymentBindingData[];
  success?: boolean;
}

export type SellerPaymentBindingResponse = SellerPaymentBinding;

export interface SellerSellerFieldVerifyData {
  err_code?: string;
  result?: string;
  error_msg?: string;
  name?: string;
}

export interface SellerSellerFieldVerify {
  data?: SellerSellerFieldVerifyData[];
  success?: string;
}

export type SellerSellerFieldVerifyResponse = SellerSellerFieldVerify;

export interface SellerSellerCenterMsgListResultDataDataSourceMessageContent {
  title?: string;
  description?: string;
  categoryName?: string;
  picture?: string;
  webLink?: string;
  appLink?: string;
}

export interface SellerSellerCenterMsgListResultDataDataSource {
  id?: string;
  time?: string;
  message_content?: SellerSellerCenterMsgListResultDataDataSourceMessageContent;
}

export interface SellerSellerCenterMsgListResultDataPageInfo {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface SellerSellerCenterMsgListResultData {
  dataSource?: SellerSellerCenterMsgListResultDataDataSource[];
  pageInfo?: SellerSellerCenterMsgListResultDataPageInfo;
}

export interface SellerSellerCenterMsgListResult {
  success?: Record<string, unknown>;
  type?: string;
  errorCode?: string;
  error?: string;
  data?: SellerSellerCenterMsgListResultData;
}

export interface SellerSellerCenterMsgList {
  result?: SellerSellerCenterMsgListResult;
}

export type SellerSellerCenterMsgListResponse = SellerSellerCenterMsgList;

export interface SellerBatchQueryFollowStatusResult {
  success?: boolean;
  error?: Record<string, unknown>;
  result?: Record<string, unknown>[];
}

export interface SellerBatchQueryFollowStatus {
  result?: SellerBatchQueryFollowStatusResult;
}

export type SellerBatchQueryFollowStatusResponse = SellerBatchQueryFollowStatus;
