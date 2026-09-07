export interface WalletCorporateTopUpGiftCodeQueryRequest {
  page: number;
  transfer_order_id: string;
}

export interface WalletCorporateTopUpGiftCodeRequestRequest {
  amount: string;
  quantity: number;
  transfer_order_id: string;
  end_timestamp: number;
  start_timestamp: number;
}

export interface WalletCorporateTopUpReconciliationRequest {
  date: string;
}

export interface WalletCorporateTopUpDirectTransferQueryRequest {
  transfer_order_id: string;
}

export interface WalletCorporateTopUpDirectTransferRequestRequest {
  amount: string;
  transfer_order_id: string;
  account_number: string;
  withdrawable?: boolean;
}
