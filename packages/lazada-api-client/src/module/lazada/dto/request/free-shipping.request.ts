export type FreeShippingFreeShippingDeliveryOptionsQueryRequest = Record<string, never>;

export interface FreeShippingFreeShippingGetRequest {
  id: number;
}

export interface FreeShippingFreeShippingSelectedProductListRequest {
  curPage?: number;
  pageSize?: number;
  id: number;
}

export type FreeShippingFreeShippingRegionsQueryRequest = Record<string, never>;

export interface FreeShippingFreeShippingListRequest {
  curPage?: number;
  name?: string;
  pageSize?: number;
  status?: string;
}

export interface FreeShippingFreeShippingActivateRequest {
  id: number;
}

export interface FreeShippingFreeShippingCreateTiers {
  filter: string;
  result?: string;
}

export interface FreeShippingFreeShippingCreateRequest {
  budget_type: string;
  template_type?: string;
  apply: string;
  period_end_time: number;
  template_code?: string;
  category_name?: string;
  budget_value?: string;
  promotion_name: string;
  period_type: string;
  region_type: string;
  period_start_time: number;
  campaign_tag?: string;
  region_value?: string[];
  delivery_option: string;
  tiers: FreeShippingFreeShippingCreateTiers[];
  discount_type: string;
  deal_criteria: string;
}

export interface FreeShippingFreeShippingDeactivateRequest {
  id: number;
}

export interface FreeShippingFreeShippingAddSelectedProductSKURequest {
  id: number;
  sku_ids: number[];
}

export interface FreeShippingFreeShippingDeleteSelectedProductSKURequest {
  id: number;
  sku_ids: number[];
}

export interface FreeShippingFreeShippingUpdateTiers {
  filter: string;
  result?: string;
}

export interface FreeShippingFreeShippingUpdateRequest {
  budget_type: string;
  template_type: string;
  apply: string;
  period_end_time: number;
  template_code?: string;
  category_name?: string;
  budget_value?: string;
  promotion_name: string;
  period_type: string;
  region_type: string;
  period_start_time: number;
  campaign_tag?: string;
  region_value?: string[];
  id: number;
  delivery_option: string;
  discount_type: string;
  deal_criteria: string;
  tiers: FreeShippingFreeShippingUpdateTiers[];
}
