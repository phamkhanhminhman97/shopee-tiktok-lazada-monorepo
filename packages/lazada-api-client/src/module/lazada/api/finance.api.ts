import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  FinanceGetPayoutStatusRequest,
  FinanceQueryAccountTransactionsRequest,
  FinanceQueryLogisticsFeeDetailRequest,
  FinanceQueryTransactionDetailsRequest,
} from '../dto/request/finance.request';
import {
  FinanceGetPayoutStatusResponse,
  FinanceQueryAccountTransactionsResponse,
  FinanceQueryLogisticsFeeDetailResponse,
  FinanceQueryTransactionDetailsResponse,
} from '../dto/response/finance.response';

/**
 * GetPayoutStatus via Lazada `GET /finance/payout/status/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getPayoutStatus(params: FinanceGetPayoutStatusRequest, config: LazadaConfig): Promise<FinanceGetPayoutStatusResponse> {
  return LazadaHelper.callLazadaApi<FinanceGetPayoutStatusResponse>('/finance/payout/status/get', 'GET', params as unknown as Record<string, unknown>, config, 'getPayoutStatus');
}

/**
 * QueryTransactionDetails via Lazada `GET /finance/transaction/details/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryTransactionDetails(params: FinanceQueryTransactionDetailsRequest, config: LazadaConfig): Promise<FinanceQueryTransactionDetailsResponse> {
  return LazadaHelper.callLazadaApi<FinanceQueryTransactionDetailsResponse>('/finance/transaction/details/get', 'GET', params as unknown as Record<string, unknown>, config, 'queryTransactionDetails');
}

/**
 * QueryLogisticsFeeDetail via Lazada `GET /lbs/slb/queryLogisticsFeeDetail`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryLogisticsFeeDetail(params: FinanceQueryLogisticsFeeDetailRequest, config: LazadaConfig): Promise<FinanceQueryLogisticsFeeDetailResponse> {
  return LazadaHelper.callLazadaApi<FinanceQueryLogisticsFeeDetailResponse>('/lbs/slb/queryLogisticsFeeDetail', 'GET', params as unknown as Record<string, unknown>, config, 'queryLogisticsFeeDetail');
}

/**
 * QueryAccountTransactions via Lazada `POST /finance/transaction/accountTransactions/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryAccountTransactions(params: FinanceQueryAccountTransactionsRequest, config: LazadaConfig): Promise<FinanceQueryAccountTransactionsResponse> {
  return LazadaHelper.callLazadaApi<FinanceQueryAccountTransactionsResponse>('/finance/transaction/accountTransactions/query', 'POST', params as unknown as Record<string, unknown>, config, 'queryAccountTransactions');
}
