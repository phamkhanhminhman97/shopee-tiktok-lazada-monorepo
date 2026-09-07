export interface FinanceGetPayoutStatusRequest {
  created_after: string;
}

export interface FinanceQueryTransactionDetailsRequest {
  offset?: string;
  trans_type?: string;
  trade_order_id?: string;
  limit?: string;
  start_time: string;
  end_time: string;
  trade_order_line_id?: string;
}

export interface FinanceQueryLogisticsFeeDetailRequest {
  seller_id: string;
  request_type: string;
  trade_order_id?: string;
  trade_order_line_id?: string;
  fee_type?: string;
  biz_flow_type?: string;
  bill_start_time?: number;
  bill_end_time?: number;
  page_no?: number;
  page_size?: number;
  total_records?: number;
}

export interface FinanceQueryAccountTransactionsRequest {
  transaction_type?: string;
  sub_transaction_type?: string;
  transaction_number?: string;
  page_size: number;
  start_time: string;
  end_time: string;
  page_num: number;
}
