export interface FlexicomboGetFlexiComboDetailsRequest {
  id: number;
}

export interface FlexicomboListFlexiComboRequest {
  cur_page: number;
  name?: string;
  page_size: number;
  status?: string;
}

export interface FlexicomboListFlexiComboProductsRequest {
  cur_page: number;
  page_size: number;
  id: number;
}

export interface FlexicomboActivateFlexiComboRequest {
  id: number;
}

export interface FlexicomboCreateFlexiComboSampleSkus {
  productId?: number;
  skuId?: number;
}

export interface FlexicomboCreateFlexiComboGiftSkus {
  productId?: number;
  skuId?: number;
}

export interface FlexicomboCreateFlexiComboRequest {
  apply: string;
  sample_skus?: FlexicomboCreateFlexiComboSampleSkus[];
  criteria_type: string;
  criteria_value: string[];
  order_numbers: number;
  name: string;
  platform_channel?: string;
  gift_skus?: FlexicomboCreateFlexiComboGiftSkus[];
  start_time: number;
  discount_type: string;
  end_time: number;
  discount_value: string[];
  stackable?: string;
  gift_buy_limit_value?: string[];
}

export interface FlexicomboDeactivateFlexiComboRequest {
  id: number;
}

export interface FlexicomboAddFlexiComboProductsRequest {
  id: number;
  sku_ids: number[];
}

export interface FlexicomboDeleteFlexiComboProductsRequest {
  id: number;
  sku_ids: number[];
}

export interface FlexicomboUpdateFlexiComboSampleSkus {
  productId?: number;
  skuId?: number;
}

export interface FlexicomboUpdateFlexiComboGiftSkus {
  productId?: number;
  skuId?: number;
}

export interface FlexicomboUpdateFlexiComboRequest {
  apply: string;
  sample_skus?: FlexicomboUpdateFlexiComboSampleSkus[];
  criteria_type: string;
  criteria_value: string[];
  order_numbers: number;
  name: string;
  platform_channel?: string;
  gift_skus?: FlexicomboUpdateFlexiComboGiftSkus[];
  start_time: number;
  discount_type: string;
  id: number;
  end_time: number;
  discount_value: string[];
  stackable?: string;
  gift_buy_limit_value?: string[];
}
