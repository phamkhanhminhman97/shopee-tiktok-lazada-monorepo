export interface FlexicomboGetFlexiComboDetailsDataSampleSkus {
  product_id?: number;
  sku_id?: number;
  tier?: number;
}

export interface FlexicomboGetFlexiComboDetailsDataGiftSkus {
  product_id?: number;
  sku_id?: number;
  tier?: number;
}

export interface FlexicomboGetFlexiComboDetailsData {
  order_used_numbers?: number;
  apply: string;
  sample_skus: FlexicomboGetFlexiComboDetailsDataSampleSkus[];
  criteria_type: string;
  type: string;
  criteria_value: string[];
  order_numbers: number;
  platform_channel: string;
  name: string;
  gift_skus: FlexicomboGetFlexiComboDetailsDataGiftSkus[];
  discount_type: string;
  start_time: number;
  end_time: number;
  id: number;
  discount_value: string[];
  status: string;
  stackable?: boolean;
  gift_buy_limit_value?: string[];
}

export interface FlexicomboGetFlexiComboDetails {
  data: FlexicomboGetFlexiComboDetailsData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboGetFlexiComboDetailsResponse = FlexicomboGetFlexiComboDetails;

export interface FlexicomboListFlexiComboDataDataListGiftSkus {
  product_id: number;
  sku_id: number;
}

export interface FlexicomboListFlexiComboDataDataListSampleSkus {
  product_id: number;
  sku_id: number;
}

export interface FlexicomboListFlexiComboDataDataList {
  order_numbers: number;
  platform_channel: string;
  name: string;
  gift_skus: FlexicomboListFlexiComboDataDataListGiftSkus[];
  start_time: number;
  order_used_numbers?: number;
  discount_type: string;
  end_time: number;
  id: number;
  discount_value: string[];
  status: string;
  apply: string;
  sample_skus: FlexicomboListFlexiComboDataDataListSampleSkus[];
  criteria_type: string;
  type: string;
  criteria_value: string[];
  stackable?: boolean;
}

export interface FlexicomboListFlexiComboData {
  page_size: number;
  total: number;
  current: number;
  data_list: FlexicomboListFlexiComboDataDataList[];
}

export interface FlexicomboListFlexiCombo {
  success: boolean;
  error_code: string;
  error_msg: string;
  data: FlexicomboListFlexiComboData;
}

export type FlexicomboListFlexiComboResponse = FlexicomboListFlexiCombo;

export interface FlexicomboListFlexiComboProductsData {
  total: number;
  current: number;
  data_list: number[];
  page_size: number;
}

export interface FlexicomboListFlexiComboProducts {
  data: FlexicomboListFlexiComboProductsData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboListFlexiComboProductsResponse = FlexicomboListFlexiComboProducts;

export interface FlexicomboActivateFlexiCombo {
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboActivateFlexiComboResponse = FlexicomboActivateFlexiCombo;

export interface FlexicomboCreateFlexiCombo {
  data: number;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboCreateFlexiComboResponse = FlexicomboCreateFlexiCombo;

export interface FlexicomboDeactivateFlexiCombo {
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboDeactivateFlexiComboResponse = FlexicomboDeactivateFlexiCombo;

export interface FlexicomboAddFlexiComboProducts {
  data: Record<string, unknown>;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboAddFlexiComboProductsResponse = FlexicomboAddFlexiComboProducts;

export interface FlexicomboDeleteFlexiComboProducts {
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboDeleteFlexiComboProductsResponse = FlexicomboDeleteFlexiComboProducts;

export interface FlexicomboUpdateFlexiCombo {
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type FlexicomboUpdateFlexiComboResponse = FlexicomboUpdateFlexiCombo;
