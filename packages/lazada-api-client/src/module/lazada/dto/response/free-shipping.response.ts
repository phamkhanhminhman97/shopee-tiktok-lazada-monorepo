export interface FreeShippingFreeShippingDeliveryOptionsQueryData {
  name: string;
  value: string;
}

export interface FreeShippingFreeShippingDeliveryOptionsQuery {
  data: FreeShippingFreeShippingDeliveryOptionsQueryData[];
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingDeliveryOptionsQueryResponse = FreeShippingFreeShippingDeliveryOptionsQuery;

export interface FreeShippingFreeShippingGetDataPromoTierTiers {
  filter: string;
  result: string;
}

export interface FreeShippingFreeShippingGetDataPromoTier {
  tiers: FreeShippingFreeShippingGetDataPromoTierTiers[];
  discount_type: string;
  deal_criteria: string;
}

export interface FreeShippingFreeShippingGetData {
  template_type: string;
  budget_type: string;
  used_budget_value: string;
  apply: string;
  period_end_time: number;
  template_code: string;
  category_name: string;
  budget_value: string;
  promotion_name: string;
  period_type: string;
  region_type: string;
  period_start_time: number;
  platform_channel: string;
  campaign_tag: string;
  region_value: string[];
  currency: string;
  id: number;
  delivery_option: string;
  promo_tier: FreeShippingFreeShippingGetDataPromoTier;
  status: string;
}

export interface FreeShippingFreeShippingGet {
  data: FreeShippingFreeShippingGetData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FreeShippingFreeShippingGetResponse = FreeShippingFreeShippingGet;

export interface FreeShippingFreeShippingSelectedProductListDataDataList {
  product_id: number;
  sku_ids: number[];
}

export interface FreeShippingFreeShippingSelectedProductListData {
  total: number;
  current: number;
  data_list: FreeShippingFreeShippingSelectedProductListDataDataList[];
  page_size: number;
}

export interface FreeShippingFreeShippingSelectedProductList {
  data: FreeShippingFreeShippingSelectedProductListData;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingSelectedProductListResponse = FreeShippingFreeShippingSelectedProductList;

export interface FreeShippingFreeShippingRegionsQueryData {
  name: string;
  value: string;
}

export interface FreeShippingFreeShippingRegionsQuery {
  data: FreeShippingFreeShippingRegionsQueryData[];
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingRegionsQueryResponse = FreeShippingFreeShippingRegionsQuery;

export interface FreeShippingFreeShippingListDataDataListPromoTierTiers {
  filter: string;
  result: string;
}

export interface FreeShippingFreeShippingListDataDataListPromoTier {
  tiers: FreeShippingFreeShippingListDataDataListPromoTierTiers[];
  discount_type: string;
  deal_criteria: string;
}

export interface FreeShippingFreeShippingListDataDataList {
  budget_type: string;
  template_type: string;
  used_budget_value: string;
  apply: string;
  period_end_time: number;
  template_code: string;
  category_name: string;
  budget_value: string;
  promotion_name: string;
  period_type: string;
  region_type: string;
  period_start_time: number;
  platform_channel: string;
  campaign_tag: string;
  region_value: string[];
  currency: string;
  id: number;
  delivery_option: string;
  promo_tier: FreeShippingFreeShippingListDataDataListPromoTier;
  status: string;
}

export interface FreeShippingFreeShippingListData {
  total: number;
  current: number;
  data_list: FreeShippingFreeShippingListDataDataList[];
  page_size: number;
}

export interface FreeShippingFreeShippingList {
  data: FreeShippingFreeShippingListData;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingListResponse = FreeShippingFreeShippingList;

export interface FreeShippingFreeShippingActivate {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingActivateResponse = FreeShippingFreeShippingActivate;

export interface FreeShippingFreeShippingCreate {
  data: number;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingCreateResponse = FreeShippingFreeShippingCreate;

export interface FreeShippingFreeShippingDeactivate {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingDeactivateResponse = FreeShippingFreeShippingDeactivate;

export interface FreeShippingFreeShippingAddSelectedProductSKU {
  data: Record<string, unknown>;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingAddSelectedProductSKUResponse = FreeShippingFreeShippingAddSelectedProductSKU;

export interface FreeShippingFreeShippingDeleteSelectedProductSKU {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingDeleteSelectedProductSKUResponse = FreeShippingFreeShippingDeleteSelectedProductSKU;

export interface FreeShippingFreeShippingUpdate {
  data: number;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type FreeShippingFreeShippingUpdateResponse = FreeShippingFreeShippingUpdate;
