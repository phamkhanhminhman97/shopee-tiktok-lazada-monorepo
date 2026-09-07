export interface SellerVoucherSellerVoucherDetailQueryRequest {
  voucher_type: string;
  id: number;
}

export interface SellerVoucherSellerVoucherSelectedProductListRequest {
  voucher_type: string;
  id: number;
  cur_page?: number;
  page_size?: number;
}

export interface SellerVoucherSellerVoucherListRequest {
  cur_page?: number;
  voucher_type: string;
  name?: string;
  page_size?: number;
  status?: string;
}

export interface SellerVoucherSellerVoucherActivateRequest {
  voucher_type: string;
  id: number;
}

export interface SellerVoucherSellerVoucherCreateRequest {
  criteria_over_money: string;
  voucher_type: string;
  apply: string;
  collect_start?: number;
  display_area: string;
  period_end_time: number;
  voucher_name: string;
  voucher_discount_type: string;
  offering_money_value_off?: string;
  period_start_time: number;
  limit: number;
  issued: number;
  max_discount_offering_money_value?: string;
  offering_percentage_discount_off?: number;
}

export interface SellerVoucherSellerVoucherDeactivateRequest {
  voucher_type: string;
  id: number;
}

export interface SellerVoucherSellerVoucherAddSelectedProductSKURequest {
  voucher_type: string;
  id: number;
  sku_ids: number[];
}

export interface SellerVoucherSellerVoucheDeleteSelectedProductSKURequest {
  voucher_type: string;
  id: number;
  sku_ids: number[];
}

export interface SellerVoucherSellerVoucherUpdateRequest {
  max_discount_offering_money_value?: string;
  offering_percentage_discount_off?: number;
  id: string;
  criteria_over_money: string;
  voucher_type: string;
  apply: string;
  collect_start?: number;
  display_area: string;
  period_end_time: number;
  voucher_name: string;
  voucher_discount_type: string;
  offering_money_value_off: string;
  period_start_time: number;
  limit: number;
  issued: number;
}
