import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import { ShopeeResponseEscrowDetail } from '../dto/response/payment.response';

/**
 * Get escrow detail
 * @param orderSn Shopee order serial number
 * @param config ShopeeConfig
 * @returns ShopeeResponseEscrowDetail
 */
export async function getEscrowDetail(orderSn: string, config: ShopeeConfig): Promise<ShopeeResponseEscrowDetail> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_ESCROW, config, timestamp);

  const additionalParams = {
    order_sn: orderSn,
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_ESCROW}${commonParam}`;

  const res = await ShopeeHelper.httpGet<ShopeeResponseEscrowDetail>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getEscrowDetail');
  }

  return res;
}

// ---- Appended: additional endpoints (batch 3) ----
import {
  ShopeeGenerateIncomeReportRequest,
  ShopeeGenerateIncomeStatementRequest,
  ShopeeGetBillingTransactionInfoRequest,
  ShopeeGetEscrowDetailBatchRequest,
  ShopeeGetEscrowListRequest,
  ShopeeGetIncomeDetailRequest,
  ShopeeGetIncomeOverviewRequest,
  ShopeeGetIncomeReportRequest,
  ShopeeGetIncomeStatementRequest,
  ShopeeGetItemInstallmentStatusRequest,
  ShopeeGetPaymentMethodListRequest,
  ShopeeGetPayoutDetailRequest,
  ShopeeGetPayoutInfoRequest,
  ShopeeGetShopInstallmentStatusRequest,
  ShopeeGetWalletTransactionListRequest,
  ShopeeSetItemInstallmentStatusRequest,
  ShopeeSetShopInstallmentStatusRequest,
} from '../dto/request/payment.request';
import {
  ShopeeGenerateIncomeReportResponse,
  ShopeeGenerateIncomeStatementResponse,
  ShopeeGetBillingTransactionInfoResponse,
  ShopeeGetEscrowDetailBatchResponse,
  ShopeeGetEscrowListResponse,
  ShopeeGetIncomeDetailResponse,
  ShopeeGetIncomeOverviewResponse,
  ShopeeGetIncomeReportResponse,
  ShopeeGetIncomeStatementResponse,
  ShopeeGetItemInstallmentStatusResponse,
  ShopeeGetPaymentMethodListResponse,
  ShopeeGetPayoutDetailResponse,
  ShopeeGetPayoutInfoResponse,
  ShopeeGetShopInstallmentStatusResponse,
  ShopeeGetWalletTransactionListResponse,
  ShopeeSetItemInstallmentStatusResponse,
  ShopeeSetShopInstallmentStatusResponse,
} from '../dto/response/payment.response';

/**
 * generateIncomeReport via Shopee `v2.payment.generate_income_report`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function generateIncomeReport(params: ShopeeGenerateIncomeReportRequest, config: ShopeeConfig): Promise<ShopeeGenerateIncomeReportResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGenerateIncomeReportResponse>('/payment/generate_income_report', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'generateIncomeReport',
  });
}

/**
 * generateIncomeStatement via Shopee `v2.payment.generate_income_statement`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function generateIncomeStatement(params: ShopeeGenerateIncomeStatementRequest, config: ShopeeConfig): Promise<ShopeeGenerateIncomeStatementResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGenerateIncomeStatementResponse>('/payment/generate_income_statement', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'generateIncomeStatement',
  });
}

/**
 * getBillingTransactionInfo via Shopee `v2.payment.get_billing_transaction_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBillingTransactionInfo(params: ShopeeGetBillingTransactionInfoRequest, config: ShopeeConfig): Promise<ShopeeGetBillingTransactionInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBillingTransactionInfoResponse>('/payment/get_billing_transaction_info', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBillingTransactionInfo',
  });
}

/**
 * getEscrowDetailBatch via Shopee `v2.payment.get_escrow_detail_batch`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getEscrowDetailBatch(params: ShopeeGetEscrowDetailBatchRequest, config: ShopeeConfig): Promise<ShopeeGetEscrowDetailBatchResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetEscrowDetailBatchResponse>('/payment/get_escrow_detail_batch', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getEscrowDetailBatch',
  });
}

/**
 * getEscrowList via Shopee `v2.payment.get_escrow_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getEscrowList(params: ShopeeGetEscrowListRequest, config: ShopeeConfig): Promise<ShopeeGetEscrowListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetEscrowListResponse>('/payment/get_escrow_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getEscrowList',
  });
}

/**
 * getIncomeDetail via Shopee `v2.payment.get_income_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getIncomeDetail(params: ShopeeGetIncomeDetailRequest, config: ShopeeConfig): Promise<ShopeeGetIncomeDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetIncomeDetailResponse>('/payment/get_income_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getIncomeDetail',
  });
}

/**
 * getIncomeOverview via Shopee `v2.payment.get_income_overview`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getIncomeOverview(params: ShopeeGetIncomeOverviewRequest = {}, config: ShopeeConfig): Promise<ShopeeGetIncomeOverviewResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetIncomeOverviewResponse>('/payment/get_income_overview', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getIncomeOverview',
  });
}

/**
 * getIncomeReport via Shopee `v2.payment.get_income_report`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getIncomeReport(params: ShopeeGetIncomeReportRequest, config: ShopeeConfig): Promise<ShopeeGetIncomeReportResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetIncomeReportResponse>('/payment/get_income_report', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getIncomeReport',
  });
}

/**
 * getIncomeStatement via Shopee `v2.payment.get_income_statement`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getIncomeStatement(params: ShopeeGetIncomeStatementRequest, config: ShopeeConfig): Promise<ShopeeGetIncomeStatementResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetIncomeStatementResponse>('/payment/get_income_statement', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getIncomeStatement',
  });
}

/**
 * getItemInstallmentStatus via Shopee `v2.payment.get_item_installment_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getItemInstallmentStatus(params: ShopeeGetItemInstallmentStatusRequest, config: ShopeeConfig): Promise<ShopeeGetItemInstallmentStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetItemInstallmentStatusResponse>('/payment/get_item_installment_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getItemInstallmentStatus',
  });
}

/**
 * getPaymentMethodList via Shopee `v2.payment.get_payment_method_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPaymentMethodList(config: ShopeeConfig): Promise<ShopeeGetPaymentMethodListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPaymentMethodListResponse>('/payment/get_payment_method_list', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPaymentMethodList',
  });
}

/**
 * getPayoutDetail via Shopee `v2.payment.get_payout_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPayoutDetail(params: ShopeeGetPayoutDetailRequest, config: ShopeeConfig): Promise<ShopeeGetPayoutDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPayoutDetailResponse>('/payment/get_payout_detail', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPayoutDetail',
  });
}

/**
 * getPayoutInfo via Shopee `v2.payment.get_payout_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPayoutInfo(params: ShopeeGetPayoutInfoRequest, config: ShopeeConfig): Promise<ShopeeGetPayoutInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPayoutInfoResponse>('/payment/get_payout_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPayoutInfo',
  });
}

/**
 * getShopInstallmentStatus via Shopee `v2.payment.get_shop_installment_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopInstallmentStatus(config: ShopeeConfig): Promise<ShopeeGetShopInstallmentStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopInstallmentStatusResponse>('/payment/get_shop_installment_status', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopInstallmentStatus',
  });
}

/**
 * getWalletTransactionList via Shopee `v2.payment.get_wallet_transaction_list`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getWalletTransactionList(params: ShopeeGetWalletTransactionListRequest, config: ShopeeConfig): Promise<ShopeeGetWalletTransactionListResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetWalletTransactionListResponse>('/payment/get_wallet_transaction_list', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getWalletTransactionList',
  });
}

/**
 * setItemInstallmentStatus via Shopee `v2.payment.set_item_installment_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setItemInstallmentStatus(params: ShopeeSetItemInstallmentStatusRequest, config: ShopeeConfig): Promise<ShopeeSetItemInstallmentStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetItemInstallmentStatusResponse>('/payment/set_item_installment_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setItemInstallmentStatus',
  });
}

/**
 * setShopInstallmentStatus via Shopee `v2.payment.set_shop_installment_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setShopInstallmentStatus(params: ShopeeSetShopInstallmentStatusRequest, config: ShopeeConfig): Promise<ShopeeSetShopInstallmentStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetShopInstallmentStatusResponse>('/payment/set_shop_installment_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setShopInstallmentStatus',
  });
}
