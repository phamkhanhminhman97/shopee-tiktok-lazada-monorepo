export interface SellerVoucherSellerVoucherDetailQueryData {
  criteria_over_money: string;
  apply: string;
  voucher_type: string;
  collect_start: number;
  display_area: string;
  period_end_time: number;
  voucher_name: string;
  voucher_discount_type: string;
  offering_money_value_off: string;
  period_start_time: number;
  limit: number;
  order_used_budget: string;
  currency: string;
  id: number;
  issued: number;
  max_discount_offering_money_value: string;
  voucher_code: string;
  offering_percentage_discount_off: string;
  status: string;
}

export interface SellerVoucherSellerVoucherDetailQuery {
  data: SellerVoucherSellerVoucherDetailQueryData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type SellerVoucherSellerVoucherDetailQueryResponse = SellerVoucherSellerVoucherDetailQuery;

export interface SellerVoucherSellerVoucherSelectedProductListDataDataList {
  product_id: number;
  sku_ids: number[];
}

export interface SellerVoucherSellerVoucherSelectedProductListData {
  total: number;
  current: number;
  data_list: SellerVoucherSellerVoucherSelectedProductListDataDataList[];
  page_size: number;
}

export interface SellerVoucherSellerVoucherSelectedProductList {
  data: SellerVoucherSellerVoucherSelectedProductListData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type SellerVoucherSellerVoucherSelectedProductListResponse = SellerVoucherSellerVoucherSelectedProductList;

export interface SellerVoucherSellerVoucherListDataDataList {
  criteria_over_money: string;
  apply: string;
  voucher_type: string;
  collect_start: number;
  display_area: string;
  period_end_time: number;
  voucher_name: string;
  voucher_discount_type: string;
  offering_money_value_off: string;
  period_start_time: number;
  limit: number;
  order_used_budget: number;
  currency: string;
  id: number;
  issued: number;
  max_discount_offering_money_value: string;
  voucher_code: string;
  offering_percentage_discount_off: string;
  status: string;
}

export interface SellerVoucherSellerVoucherListData {
  total: number;
  current: number;
  data_list: SellerVoucherSellerVoucherListDataDataList[];
  page_size: number;
}

export interface SellerVoucherSellerVoucherList {
  data: SellerVoucherSellerVoucherListData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export type SellerVoucherSellerVoucherListResponse = SellerVoucherSellerVoucherList;

export interface SellerVoucherSellerVoucherActivate {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucherActivateResponse = SellerVoucherSellerVoucherActivate;

export interface SellerVoucherSellerVoucherCreate {
  data: number;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucherCreateResponse = SellerVoucherSellerVoucherCreate;

export interface SellerVoucherSellerVoucherDeactivate {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucherDeactivateResponse = SellerVoucherSellerVoucherDeactivate;

export interface SellerVoucherSellerVoucherAddSelectedProductSKU {
  data: Record<string, unknown>;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucherAddSelectedProductSKUResponse = SellerVoucherSellerVoucherAddSelectedProductSKU;

export interface SellerVoucherSellerVoucheDeleteSelectedProductSKU {
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse = SellerVoucherSellerVoucheDeleteSelectedProductSKU;

export interface SellerVoucherSellerVoucherUpdate {
  data: number;
  success: boolean;
  error_code: number;
  error_msg: string;
}

export type SellerVoucherSellerVoucherUpdateResponse = SellerVoucherSellerVoucherUpdate;
