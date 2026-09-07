export interface FinanceGetPayoutStatusData {
  closing_balance?: string;
  guarantee_deposit?: string;
  payout?: string;
  paid?: string;
  statement_number?: string;
  created_at?: string;
  updated_at?: string;
  opening_balance?: string;
  item_revenue?: string;
  shipment_fee?: string;
  shipment_fee_credit?: string;
  other_revenue_total?: string;
  fees_total?: string;
  subtotal1?: string;
  refunds?: string;
  fees_on_refunds_total?: string;
  subtotal2?: string;
}

export interface FinanceGetPayoutStatus {
  data: FinanceGetPayoutStatusData[];
}

export type FinanceGetPayoutStatusResponse = FinanceGetPayoutStatus;

export interface FinanceQueryTransactionDetailsData {
  fee_type?: string;
  details?: string;
  seller_sku?: string;
  lazada_sku?: string;
  amount?: string;
  VAT_in_amount?: string;
  WHT_amount?: string;
  WHT_included_in_amount?: string;
  statement?: string;
  paid_status?: string;
  order_no?: string;
  orderItem_no?: string;
  orderItem_status?: string;
  shipping_provider?: string;
  shipping_speed?: string;
  shipment_type?: string;
  reference?: string;
  comment?: string;
  payment_ref_id?: string;
  fee_name?: string;
  transaction_date?: string;
  transaction_type?: string;
  transaction_number?: string;
}

export interface FinanceQueryTransactionDetails {
  data: FinanceQueryTransactionDetailsData[];
}

export type FinanceQueryTransactionDetailsResponse = FinanceQueryTransactionDetails;

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDateOffsetRules {
  fixed_offset: boolean;
  transition_rules: Record<string, unknown>[];
  transitions: Record<string, unknown>[];
}

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDateOffset {
  total_seconds: number;
  rules: FinanceQueryLogisticsFeeDetailDataFeeCreationDateOffsetRules;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDateChronology {
  calendar_type: string;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDateZoneRules {
  fixed_offset: boolean;
  transition_rules: Record<string, unknown>[];
  transitions: Record<string, unknown>[];
}

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDateZone {
  rules: FinanceQueryLogisticsFeeDetailDataFeeCreationDateZoneRules;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataFeeCreationDate {
  offset: FinanceQueryLogisticsFeeDetailDataFeeCreationDateOffset;
  year: number;
  day_of_year: number;
  nano: number;
  chronology: FinanceQueryLogisticsFeeDetailDataFeeCreationDateChronology;
  minute: number;
  second: number;
  day_of_week: string;
  month: string;
  hour: number;
  zone: FinanceQueryLogisticsFeeDetailDataFeeCreationDateZone;
  day_of_month: number;
  month_value: number;
}

export interface FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDateZoneRules {
  fixed_offset: boolean;
  transition_rules: Record<string, unknown>[];
  transitions: Record<string, unknown>[];
}

export interface FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDateZone {
  rules: FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDateZoneRules;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDate {
  offset: string;
  year: number;
  day_of_year: number;
  nano: number;
  chronology: string;
  minute: number;
  second: number;
  day_of_week: string;
  month: string;
  hour: number;
  zone: FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDateZone;
  day_of_month: number;
  month_value: number;
}

export interface FinanceQueryLogisticsFeeDetailDataOrderInfo {
  order_item_status: string;
  order_creation_date: FinanceQueryLogisticsFeeDetailDataOrderInfoOrderCreationDate;
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDateZoneRules {
  fixed_offset: boolean;
  transition_rules: Record<string, unknown>[];
  transitions: Record<string, unknown>[];
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDateZone {
  rules: FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDateZoneRules;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDate {
  offset: string;
  year: number;
  day_of_year: number;
  nano: number;
  chronology: string;
  minute: number;
  second: number;
  day_of_week: string;
  month: string;
  hour: number;
  zone: FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDateZone;
  day_of_month: number;
  month_value: number;
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDateZoneRules {
  fixed_offset: boolean;
  transition_rules: Record<string, unknown>[];
  transitions: Record<string, unknown>[];
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDateZone {
  rules: FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDateZoneRules;
  id: string;
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDate {
  offset: string;
  year: number;
  day_of_year: number;
  nano: number;
  chronology: string;
  minute: number;
  second: number;
  day_of_week: string;
  month: string;
  hour: number;
  zone: FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDateZone;
  day_of_month: number;
  month_value: number;
}

export interface FinanceQueryLogisticsFeeDetailDataPackageInfo {
  billing_date: FinanceQueryLogisticsFeeDetailDataPackageInfoBillingDate;
  destination_address: string;
  origin_address: string;
  package_chargeable_weight: string;
  delivery_date: FinanceQueryLogisticsFeeDetailDataPackageInfoDeliveryDate;
  tracking_number?: string;
}

export interface FinanceQueryLogisticsFeeDetailDataSkuInfo {
  lazada_sku: string;
  item_details: string;
  seller_sku: string;
}

export interface FinanceQueryLogisticsFeeDetailData {
  statement_period: string;
  amount: Record<string, unknown>;
  tax_in_amount: Record<string, unknown>;
  trade_order_id: string;
  seller_short_code: string;
  seller_id: string;
  fee_code: string;
  fee_name: string;
  fee_creation_date: FinanceQueryLogisticsFeeDetailDataFeeCreationDate;
  order_info: FinanceQueryLogisticsFeeDetailDataOrderInfo;
  statement_id: string;
  tenant_id: string;
  currency: string;
  package_info: FinanceQueryLogisticsFeeDetailDataPackageInfo;
  sku_info: FinanceQueryLogisticsFeeDetailDataSkuInfo;
  trade_order_line_id: string;
}

export interface FinanceQueryLogisticsFeeDetail {
  data: FinanceQueryLogisticsFeeDetailData[];
  success: boolean;
  remark: string;
}

export type FinanceQueryLogisticsFeeDetailResponse = FinanceQueryLogisticsFeeDetail;

export interface FinanceQueryAccountTransactionsDataPageInfo {
  page_num?: number;
  page_size?: number;
  total_page?: number;
  total_count?: number;
}

export interface FinanceQueryAccountTransactionsDataTransactionsPayeeAccount {
  account?: string;
  description?: string;
}

export interface FinanceQueryAccountTransactionsDataTransactionsTrackingList {
  name?: string;
  status?: string;
  update_time?: string;
  remark?: string;
}

export interface FinanceQueryAccountTransactionsDataTransactions {
  pmt_reference?: string;
  transaction_number?: string;
  transaction_time?: string;
  type?: string;
  sub_type?: string;
  payee_account?: FinanceQueryAccountTransactionsDataTransactionsPayeeAccount;
  amount?: string;
  currency?: string;
  remarks?: string;
  tracking_list?: FinanceQueryAccountTransactionsDataTransactionsTrackingList[];
}

export interface FinanceQueryAccountTransactionsData {
  page_info?: FinanceQueryAccountTransactionsDataPageInfo;
  transactions?: FinanceQueryAccountTransactionsDataTransactions[];
}

export interface FinanceQueryAccountTransactions {
  msg: string;
  data: FinanceQueryAccountTransactionsData;
  success: boolean;
  error_code: string;
}

export type FinanceQueryAccountTransactionsResponse = FinanceQueryAccountTransactions;
