import { LazadaConfig } from '../dto/request/config.request';
import {
  getPayoutStatus,
  queryAccountTransactions,
  queryLogisticsFeeDetail,
  queryTransactionDetails,
} from '../api/finance.api';
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
 * Lazada `finance-api` API namespace.
 *
 * Access via `lazada.finance.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFinance {
  constructor(private config: LazadaConfig) {}

  async getPayoutStatus(params: FinanceGetPayoutStatusRequest): Promise<FinanceGetPayoutStatusResponse> {
    return await getPayoutStatus(params, this.config);
  }

  async queryTransactionDetails(params: FinanceQueryTransactionDetailsRequest): Promise<FinanceQueryTransactionDetailsResponse> {
    return await queryTransactionDetails(params, this.config);
  }

  async queryLogisticsFeeDetail(params: FinanceQueryLogisticsFeeDetailRequest): Promise<FinanceQueryLogisticsFeeDetailResponse> {
    return await queryLogisticsFeeDetail(params, this.config);
  }

  async queryAccountTransactions(params: FinanceQueryAccountTransactionsRequest): Promise<FinanceQueryAccountTransactionsResponse> {
    return await queryAccountTransactions(params, this.config);
  }
}
