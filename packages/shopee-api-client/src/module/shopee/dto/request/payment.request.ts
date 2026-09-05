
// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeTransactionType
 */
export enum ShopeeTransactionType {
  CANCELED = "canceled",
  INVALID = "invalid",
}

/**
 * Request parameters for generate_income_report
 *
 * Trigger income report generation.
 */
export interface ShopeeGenerateIncomeReportRequest {
  /**
   * Start time in epoch
   */
  release_time_from: number;
  /**
   * End time in epoch
   */
  release_time_to: number;
}

/**
 * Request parameters for generate_income_statement
 *
 * Trigger income statement generation.
 */
export interface ShopeeGenerateIncomeStatementRequest {
  /**
   * The release_time_from must be- Monday (local time) for a weekly report- The 1st day (local time) of a Month for a monthly report
   */
  release_time_from: number;
  /**
   * The release_time_to must be- Sunday (local time) for a weekly report- The last day (local time) of a Month for a monthly report
   */
  release_time_to: number;
  /**
   * STATEMENT_TYPE_WEEKLY = 1;STATEMENT_TYPE_MONTHLY = 2;Local seller Income statement requires this value to be set.CB seller income statement does not require this.
   */
  statement_type: number;
}

/**
 * Request parameters for get_billing_transaction_info
 *
 * This API is applicable for Cross Border (CB) sellers only to get the detailed payout transaction data, both released and to-be released transaction can be found in here
 */
export interface ShopeeGetBillingTransactionInfoRequest {
  /**
   * Billing transaction types: 1: TO_RELEASE, 2: RELEASED
   */
  billing_transaction_info_type: number;
  /**
   * encrypted_payout_id get from API: v2.get_payout_infowhen encrypted_payout_id provided and billing_transaction_info_type=2, we will return the "released" billing items under this payout.when encrypted_payout_id not provided, we will return the "to release" billing items under hasn't form payout yetMax length: 100
   */
  encrypted_payout_ids?: string[];
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor: string;
  /**
   * Number of pages returned max:100
   */
  page_size: number;
}

/**
 * Request parameters for get_escrow_detail_batch
 *
 * Use this API to fetch the details of order income by batch.
 */
export interface ShopeeGetEscrowDetailBatchRequest {
  /**
   * Shopee's unique identifier for an order.limit [1,50] The number of recommended requests ranges from 1 to 20 orders.
   */
  order_sn_list: string[];
}

/**
 * Request parameters for get_escrow_list
 *
 * Use this API to fetch the accounting list of order.
 */
export interface ShopeeGetEscrowListRequest {
  /**
   * Query start time
   */
  release_time_from: number;
  /**
   * Query end time
   */
  release_time_to: number;
  /**
   * Number of pages returned  max:100  default:40
   */
  page_size?: number;
  /**
   * The page number  min:1  default:1
   */
  page_no?: number;
}

/**
 * Request parameters for get_income_detail
 *
 * Retrieves detailed order-level income information across various income statuses for a specified time period. This API enables partners to display granular transaction-level income data consistent with Seller Center’s “Income Details” view, segmented by income status and payout stage.
 *
 * The API dynamically adapts data fields based on the seller’s shop type (Local or Cross Border) and the selected income status (e.g., Pending, To Release, Released).
 */
export interface ShopeeGetIncomeDetailRequest {
  /**
   * Start date (YYYY-MM-DD) of the income reference period. This field is only used for Income ShopeeStatus = Released, the other statuses will display all records currently in that status.For income ShopeeStatus = Released, For Released → Payout released date:1. date_to must be later than date_from2. date range cannot exceed 14 days3. Input must follow valid date format.
   */
  date_from: string;
  /**
   * End date (YYYY-MM-DD) of the income reference period. Must be later than date_from. This field is only used for Income ShopeeStatus = Released, the other statuses will display all records currently in that status.For income ShopeeStatus = Released, For Released → Payout released date:1. date_to must be later than date_from2. date range cannot exceed 14 days3. Input must follow valid date format.
   */
  date_to: string;
  /**
   * ShopeeStatus of Seller Income payout (Enum - Desc)Local1 -Released2 - PendingCB0 - To Release1 - Released2 - Pending
   */
  income_status: number;
  /**
   * Pagination token for the next set of results. Use an empty string "" for the first request.
   */
  cursor?: string;
  /**
   * Number of income detail records to retrieve per page
   */
  page_size: number;
}

/**
 * Request parameters for get_income_overview
 *
 * Retrieves a consolidated snapshot of the seller’s income amounts categorized by income status for a specified shop. This API provides a holistic overview similar to Seller Center’s “Income Overview” section, allowing external systems to reflect the same current payout view.
 *
 * Data is dynamically determined based on the shop type (Local or Cross Border) and the income status requested. Historical income results are not retrievable, providing consistent information as Seller Centre.
 */
export interface ShopeeGetIncomeOverviewRequest {
  /**
   * ShopeeStatus of Seller Income payout (Enum - Desc)Local Shop1 -Released2 - PendingCB Shop0 - To Release1 - Released2 - PendingNote: By default, if Income ShopeeStatus was not provided in the request params (non mandatory), API response will return all values for all Income status based on either Local/CB
   */
  income_status?: number;
}

/**
 * Request parameters for get_income_report
 *
 * To query income report status and provide file link if the income report is ready to be downloaded.
 */
export interface ShopeeGetIncomeReportRequest {
  /**
   * The identifier for income report file request.
   */
  income_report_id: number;
}

/**
 * Request parameters for get_income_statement
 *
 * To query income statement status and provide file link if the income statement is ready to be downloaded.
 */
export interface ShopeeGetIncomeStatementRequest {
  /**
   * The identifier for income statement file request.return from the API v2.payment.generate_income_statement
   */
  income_statement_id: number;
}

/**
 * Request parameters for get_item_installment_status
 *
 * Get item installment tenures.Only for TH、TW.
 */
export interface ShopeeGetItemInstallmentStatusRequest {
  /**
   * Item id array, Max :100
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_payment_method_list
 *
 * Obtain payment method (no authentication required)
 */
export type ShopeeGetPaymentMethodListRequest = Record<string, never>;

/**
 * Request parameters for get_payout_detail
 *
 * This API is applicable for Cross Border (CB) sellers only to get the shop's payout data, such as the payout amount, currency, FX rate, the payout's associated order income and adjustment records etc.
 */
export interface ShopeeGetPayoutDetailRequest {
  /**
   * Number of pages returned  max:100
   */
  page_size: number;
  /**
   * The page number  min:1  default:1
   */
  page_no: number;
  /**
   * Strat time. Maximum time range is 15 days
   */
  payout_time_from: number;
  /**
   * End time
   */
  payout_time_to: number;
}

/**
 * Request parameters for get_payout_info
 *
 * This is a new API which applicable for Cross Border (CB) sellers only to get the shop's payout data, will be used for the original API v2.get_payout_details replacement, we provide data such as the payout amount, currency, FX rate, the payout's associated order income and adjustment records etc.
 */
export interface ShopeeGetPayoutInfoRequest {
  /**
   * Start time. Maximum time range is 15 days
   */
  payout_time_from: number;
  /**
   * Payout End time
   */
  payout_time_to: number;
  /**
   * Number of pages returned max:100
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor: string;
}

/**
 * Request parameters for get_shop_installment_status
 *
 * Get the installment state of shop.
 */
export type ShopeeGetShopInstallmentStatusRequest = Record<string, never>;

/**
 * Request parameters for get_wallet_transaction_list
 *
 * Use this API to get the transaction records of wallet. Only applicable for local shops
 */
export interface ShopeeGetWalletTransactionListRequest {
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0. if data is more than one page, the offset can be some entry to start next call.
   */
  page_no: number;
  /**
   * If many transactions are available to retrieve, you may need to call GetTransactionList multiple times to retrieve all the data. Each result set is returned as a page of entries. Default is 40. Use the Pagination filters to control the maximum number of entries (<= 100) to retrieve per page (i.e., per call), the offset number to start next call. This integer value is usUed to specify the maximum number of entries to return in a single ""page"" of data.
   */
  page_size: number;
  /**
   * The create_time_from field is the starting date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days.
   */
  create_time_from?: number;
  /**
   * The create_time_to field is the ending date range. The maximum date range that may be specified with the create_time_from and create_time_to fields is 15 days.
   */
  create_time_to?: number;
  /**
   * This field indicates the wallet type.
   */
  wallet_type?: string;
  /**
   * Transaction type APIs: ESCROW_VERIFIED_ADD = 101;  // Escrow has been verified and paid to seller     ESCROW_VERIFIED_MINUS = 102; // Escrow has been verified and charged from seller as escrow amount is negative    WITHDRAWAL_CREATED = 201; // The seller has created a withdrawal, so it’s deducted from balance      WITHDRAWAL_COMPLETED = 202; // The withdrawal has been completed, so the ongoing amount decreases.        WITHDRAWAL_CANCELLED = 203; // The withdrawal has been canceled, so the amount is added back to the seller balance. Ongoing amount decreases as well.      ADJUSTMENT_ADD = 401; // One adjustment item has been paid to seller     ADJUSTMENT_MINUS = 402; // One adjustment item has been charged from seller      FBS_ADJUSTMENT_ADD = 404; //One adjustment item related to Shopee fulfillment order is added to seller      FBS_ADJUSTMENT_MINUS = 405; // One adjustment item related to Shopee fulfillment order is deducted from seller      ADJUSTMENT_CENTER_ADD = 406; // One adjustment item has been added to seller wallet     ADJUSTMENT_CENTER_DEDUCT = 407; // One adjustment item has been deducted from seller wallet     FSF_COST_PASSING_DEDUCT = 408; FSF cost passing for canceled/invalid orders     PERCEPTION_VAT_TAX_DEDUCT = 409; Extra charge for perception regime VAT tax (Argentina)     PERCEPTION_TURNOVER_TAX_DEDUCT = 410; Extra charge for perception regime turnover tax (Argentina)     PAID_ADS_CHARGE = 450; // Paid ads are charged from seller     PAID_ADS_REFUND = 451; // Paid ads are refunded to seller     FAST_ESCROW_DISBURSE = 452; // ADD. // The first disbursement of fast escrow has been paid to seller     AFFILIATE_ADS_SELLER_FEE = 455; // DEDUCT // Affiliate ads seller fee is charged from seller     AFFILIATE_ADS_SELLER_FEE_REFUND = 456; // ADD // Affiliate ads seller fee is refunded to sellerFAST_ESCROW_DEDUCT = 458; // Fast escrow is deducted from seller balance in the event of return and refund FAST_ESCROW_DISBURSE_REMAIN = 459; // The second disbursement of fast escrow has been paid to seller     AFFILIATE_FEE_DEDUCT = 460; // Affiliate MKT fee is charged from seller for using affiliate MKT services
   */
  transaction_type?: ShopeeTransactionType | string | number;
  /**
   * It's to indicate whether user wants to only return : MONEY_IN = addition MONEY_OUT = Deductionif not specified, we will return allNote special case for TW JKO Pay, we will ignore Money_flow
   */
  money_flow?: string;
  /**
   * NOTE: Only 1 'transaction tab type' value should be passed in.Passing in more than 1 value (eg: comma separated values) will return default response. This is because the request param treats the value passed in as a single string.This to indicates the updated filtering type that client can use to specify which transaction type we want to return. it will have : Defaultwallet_order_incomewallet_adjustment_filterwallet_wallet_paymentwallet_refund_from_orderwallet_withdrawalsfast_escrow_repaymentfast_payseller_loancorporate_loanpix_transactions_filteropen_finance_transactions_filter Note for BR, wallet txn type that linked to pix_transactions_filter  and open_finance_transactions_filter are classified as default  type tab instead. therefore for Open API client who wants to query these 2 trx can put default as the filter in this type
   */
  transaction_tab_type?: string;
}

/**
 * Request parameters for set_item_installment_status
 *
 * Set item installment.Only for TH、TW.
 */
export interface ShopeeSetItemInstallmentStatusRequest {
  /**
   * The id array of the item, Max :100
   */
  item_id_list: number[];
  /**
   * Staged array, TH must be [3,6,10], TW region tenures must be in [3,6,12,24], [] means closed
   */
  tenure_list: number[];
  /**
   * Only applicable and required for local AR sellers.
   */
  participate_plan_ahora?: boolean;
}

/**
 * Request parameters for set_shop_installment_status
 *
 * Sets the staging capability of shop level.
 */
export interface ShopeeSetShopInstallmentStatusRequest {
  /**
   * The status of installment contains 1 and 0.
   */
  installment_status: number;
}
