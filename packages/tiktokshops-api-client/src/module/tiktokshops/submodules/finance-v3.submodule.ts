import { TiktokConfig } from '../dto/request/config.request';
import {
  getPayments,
  getStatements,
  getTransactionsByOrder,
  getTransactionsByStatement,
  getWithdrawals,
} from '../api/finance-v3.api';
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
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Finance` API namespace.
 *
 * Access via `tiktok.finance.<method>()` on a `TiktokModule` instance.
 */
export class TiktokFinance {
  constructor(private config: TiktokConfig) {}

  async getStatements(params: TiktokGetStatementsQuery): Promise<TiktokResponseCommon<TiktokGetStatementsResponse>> {
    return await getStatements(params, this.config);
  }

  async getPayments(params: TiktokGetPaymentsQuery): Promise<TiktokResponseCommon<TiktokGetPaymentsResponse>> {
    return await getPayments(params, this.config);
  }

  async getWithdrawals(params: TiktokGetWithdrawalsQuery): Promise<TiktokResponseCommon<TiktokGetWithdrawalsResponse>> {
    return await getWithdrawals(params, this.config);
  }

  async getTransactionsByOrder(order_id: string): Promise<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>> {
    return await getTransactionsByOrder(order_id, this.config);
  }

  async getTransactionsByStatement(params: TiktokGetTransactionsByStatementsInput): Promise<TiktokResponseCommon<TiktokGetTransactionsByOrderResponse>> {
    return await getTransactionsByStatement(params, this.config);
  }
}
