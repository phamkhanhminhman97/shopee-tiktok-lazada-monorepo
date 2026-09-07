import { LazadaConfig } from '../dto/request/config.request';
import {
  directTransferQuery,
  directTransferRequest,
  giftCodeQuery,
  giftCodeRequest,
  reconciliation,
} from '../api/lazada-wallet-corporate-top-up.api';
import {
  WalletCorporateTopUpDirectTransferQueryRequest,
  WalletCorporateTopUpDirectTransferRequestRequest,
  WalletCorporateTopUpGiftCodeQueryRequest,
  WalletCorporateTopUpGiftCodeRequestRequest,
  WalletCorporateTopUpReconciliationRequest,
} from '../dto/request/lazada-wallet-corporate-top-up.request';
import {
  WalletCorporateTopUpDirectTransferQueryResponse,
  WalletCorporateTopUpDirectTransferRequestResponse,
  WalletCorporateTopUpGiftCodeQueryResponse,
  WalletCorporateTopUpGiftCodeRequestResponse,
  WalletCorporateTopUpReconciliationResponse,
} from '../dto/response/lazada-wallet-corporate-top-up.response';

/**
 * Lazada `lazada-wallet-corporate-top-up-api` API namespace.
 *
 * Access via `lazada.walletCorporateTopUp.<method>()` on a `LazadaModule` instance.
 */
export class LazadaWalletCorporateTopUp {
  constructor(private config: LazadaConfig) {}

  async giftCodeQuery(params: WalletCorporateTopUpGiftCodeQueryRequest): Promise<WalletCorporateTopUpGiftCodeQueryResponse> {
    return await giftCodeQuery(params, this.config);
  }

  async giftCodeRequest(params: WalletCorporateTopUpGiftCodeRequestRequest): Promise<WalletCorporateTopUpGiftCodeRequestResponse> {
    return await giftCodeRequest(params, this.config);
  }

  async reconciliation(params: WalletCorporateTopUpReconciliationRequest): Promise<WalletCorporateTopUpReconciliationResponse> {
    return await reconciliation(params, this.config);
  }

  async directTransferQuery(params: WalletCorporateTopUpDirectTransferQueryRequest): Promise<WalletCorporateTopUpDirectTransferQueryResponse> {
    return await directTransferQuery(params, this.config);
  }

  async directTransferRequest(params: WalletCorporateTopUpDirectTransferRequestRequest): Promise<WalletCorporateTopUpDirectTransferRequestResponse> {
    return await directTransferRequest(params, this.config);
  }
}
