export interface WalletCorporateTopUpGiftCodeQuery {
  records?: string[];
  total_page?: number;
  current_page?: number;
  page_size?: number;
  transfer_order_id?: string;
  total_number?: string;
  create_status?: string;
  deposit?: string;
}

export type WalletCorporateTopUpGiftCodeQueryResponse = WalletCorporateTopUpGiftCodeQuery;

export interface WalletCorporateTopUpGiftCodeRequest {
  transfer_order_id?: string;
  total_number?: number;
  create_status?: string;
  deposit?: string;
}

export type WalletCorporateTopUpGiftCodeRequestResponse = WalletCorporateTopUpGiftCodeRequest;

export interface WalletCorporateTopUpReconciliation {
  res?: string;
}

export type WalletCorporateTopUpReconciliationResponse = WalletCorporateTopUpReconciliation;

export interface WalletCorporateTopUpDirectTransferQuery {
  amount?: string;
  account_number?: string;
  transfer_order_id?: string;
  transfer_request_id?: string;
  deposit?: string;
}

export type WalletCorporateTopUpDirectTransferQueryResponse = WalletCorporateTopUpDirectTransferQuery;

export interface WalletCorporateTopUpDirectTransferRequest {
  account_number?: string;
  transfer_order_id?: string;
  transfer_request_id?: string;
  amount?: string;
  deposit?: string;
  withdrawable?: boolean;
}

export type WalletCorporateTopUpDirectTransferRequestResponse = WalletCorporateTopUpDirectTransferRequest;
