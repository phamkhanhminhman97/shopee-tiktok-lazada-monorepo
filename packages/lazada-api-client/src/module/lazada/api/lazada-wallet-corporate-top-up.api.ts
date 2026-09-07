import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * GiftCodeQuery via Lazada `POST /wallet/giftcode/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function giftCodeQuery(params: WalletCorporateTopUpGiftCodeQueryRequest, config: LazadaConfig): Promise<WalletCorporateTopUpGiftCodeQueryResponse> {
  return LazadaHelper.callLazadaApi<WalletCorporateTopUpGiftCodeQueryResponse>('/wallet/giftcode/query', 'POST', params as unknown as Record<string, unknown>, config, 'giftCodeQuery');
}

/**
 * GiftCodeRequest via Lazada `POST /wallet/giftcode/request`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function giftCodeRequest(params: WalletCorporateTopUpGiftCodeRequestRequest, config: LazadaConfig): Promise<WalletCorporateTopUpGiftCodeRequestResponse> {
  return LazadaHelper.callLazadaApi<WalletCorporateTopUpGiftCodeRequestResponse>('/wallet/giftcode/request', 'POST', params as unknown as Record<string, unknown>, config, 'giftCodeRequest');
}

/**
 * Reconciliation via Lazada `POST /wallet/open/reconciliation`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function reconciliation(params: WalletCorporateTopUpReconciliationRequest, config: LazadaConfig): Promise<WalletCorporateTopUpReconciliationResponse> {
  return LazadaHelper.callLazadaApi<WalletCorporateTopUpReconciliationResponse>('/wallet/open/reconciliation', 'POST', params as unknown as Record<string, unknown>, config, 'reconciliation');
}

/**
 * DirectTransferQuery via Lazada `POST /wallet/transfer/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function directTransferQuery(params: WalletCorporateTopUpDirectTransferQueryRequest, config: LazadaConfig): Promise<WalletCorporateTopUpDirectTransferQueryResponse> {
  return LazadaHelper.callLazadaApi<WalletCorporateTopUpDirectTransferQueryResponse>('/wallet/transfer/query', 'POST', params as unknown as Record<string, unknown>, config, 'directTransferQuery');
}

/**
 * DirectTransferRequest via Lazada `POST /wallet/transfer/request`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function directTransferRequest(params: WalletCorporateTopUpDirectTransferRequestRequest, config: LazadaConfig): Promise<WalletCorporateTopUpDirectTransferRequestResponse> {
  return LazadaHelper.callLazadaApi<WalletCorporateTopUpDirectTransferRequestResponse>('/wallet/transfer/request', 'POST', params as unknown as Record<string, unknown>, config, 'directTransferRequest');
}
