import {
  TiktokWithdrawalType,
} from '../response/finance-v3.response';

export type TiktokGetPaymentsQuery = {
    create_time_lt?: number;
    create_time_ge?: number;
    page_size?: number;
    timestamp?: number;
    page_token?: string;
    sort_field: string;
    sort_order?: 'ASC' | 'DESC';
};

export type TiktokGetStatementsQuery = {
    statement_time_ge?: number;
    statement_time_lt?: number;
    payment_status?: string;
    page_size?: number;
    timestamp?: number;
    page_token?: string;
    sort_field: string;
    sort_order?: 'ASC' | 'DESC';
};

export type TiktokGetTransactionsByStatementsInput = {
    statement_id: string;
    query: TiktokGetTransactionsByStatementsQuery;
};

export type TiktokGetTransactionsByStatementsQuery = {
    page_size?: number;
    timestamp?: number;
    page_token?: string;
    sort_field: string;
    sort_order?: 'ASC' | 'DESC';
};

export type TiktokGetWithdrawalsQuery = {
    create_time_lt?: number;
    create_time_ge?: number;
    page_size?: number;
    timestamp?: number;
    page_token?: string;
    types: TiktokWithdrawalType[];
};
