import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokGetPaymentsQuery,
  TiktokGetStatementsQuery,
  TiktokGetTransactionsByStatementsInput,
  TiktokGetWithdrawalsQuery,
} from '../dto/request/finance-v3.request';
import {
  TiktokGetPaymentsResponse,
  TiktokGetStatementsResponse,
  TiktokGetTransactionsByOrderResponse,
  TiktokGetWithdrawalsResponse,
} from '../dto/response/finance-v3.response';

/**
 * Get settlement statements for the shop.
 *
 * TikTok API Reference: https://partner.tiktokshop.com/docv2/page/get-statements-202309
 *
 * @param params - Query parameters for filtering statements.
 * @returns A promise resolving to the list of financial statements.
 */
export async function getStatements(params: TiktokGetStatementsQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetStatementsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetStatementsResponse>>(
    `/finance/202309/statements`,
    'GET',
    { query: params },
    config,
    'getStatements',
  );
}

/**
 * Get payment records made to the shop.
 *
 * TikTok API Reference: https://partner.tiktokshop.com/docv2/page/get-payments-202309
 *
 * @param params - Query parameters for filtering payments.
 * @returns A promise resolving to the list of payments.
 */
export async function getPayments(params: TiktokGetPaymentsQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetPaymentsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetPaymentsResponse>>(
    `/finance/202309/payments`,
    'GET',
    { query: params },
    config,
    'getPayments',
  );
}

/**
 * Get withdrawal records from the shop's balance.
 *
 * TikTok API Reference: https://partner.tiktokshop.com/docv2/page/get-withdrawals-202309
 *
 * @param params - Query parameters for filtering withdrawals.
 * @returns A promise resolving to the list of withdrawals.
 */
export async function getWithdrawals(params: TiktokGetWithdrawalsQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetWithdrawalsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetWithdrawalsResponse>>(
    `/finance/202309/withdrawals`,
    'GET',
    { query: params },
    config,
    'getWithdrawals',
  );
}

/**
 * Get transaction breakdowns associated with a specific order ID.
 *
 * TikTok API Reference: https://partner.tiktokshop.com/docv2/page/get-transactions-by-order-202501
 *
 * @param order_id - The ID of the order.
 * @returns A promise resolving to the transaction breakdown details.
 */
export async function getTransactionsByOrder(order_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>>(
    `/finance/202501/orders/${order_id}/statement_transactions`,
    'GET',
    {},
    config,
    'getTransactionsByOrder',
  );
}

/**
 * Get transaction breakdowns associated with a specific settlement statement ID.
 *
 * TikTok API Reference: https://partner.tiktokshop.com/docv2/page/get-transactions-by-statement-202501
 *
 * @param params - Object containing `statement_id` and optional query parameters like page size or page token.
 * @returns A promise resolving to the list of transactions.
 */
export async function getTransactionsByStatement(params: TiktokGetTransactionsByStatementsInput, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>>(
    `/finance/202501/statements/${params.statement_id}/statement_transactions`,
    'GET',
    { query: params.query },
    config,
    'getTransactionsByStatement',
  );
}
