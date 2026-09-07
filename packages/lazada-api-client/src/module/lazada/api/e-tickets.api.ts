import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  ETicketsGetOrderItemsFromBarCodeRequest,
  ETicketsGlobalEticketMerchantMaAvailableRequest,
  ETicketsGlobalEticketMerchantMaConsumeRequest,
  ETicketsGlobalEticketMerchantMaFailsendRequest,
  ETicketsGlobalEticketMerchantMaQueryRequest,
  ETicketsGlobalEticketMerchantMaQueryTbMaRequest,
  ETicketsGlobalEticketMerchantMaSendRequest,
  ETicketsRedeemOrderItemsRequest,
} from '../dto/request/e-tickets.request';
import {
  ETicketsGetOrderItemsFromBarCodeResponse,
  ETicketsGlobalEticketMerchantMaAvailableResponse,
  ETicketsGlobalEticketMerchantMaConsumeResponse,
  ETicketsGlobalEticketMerchantMaFailsendResponse,
  ETicketsGlobalEticketMerchantMaQueryResponse,
  ETicketsGlobalEticketMerchantMaQueryTbMaResponse,
  ETicketsGlobalEticketMerchantMaSendResponse,
  ETicketsRedeemOrderItemsResponse,
} from '../dto/response/e-tickets.response';

/**
 * GetOrderItemsFromBarCode via Lazada `GET /eticket/code/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOrderItemsFromBarCode(params: ETicketsGetOrderItemsFromBarCodeRequest, config: LazadaConfig): Promise<ETicketsGetOrderItemsFromBarCodeResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGetOrderItemsFromBarCodeResponse>('/eticket/code/query', 'GET', params as unknown as Record<string, unknown>, config, 'getOrderItemsFromBarCode');
}

/**
 * RedeemOrderItems via Lazada `POST /eticket/code/consume`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function redeemOrderItems(params: ETicketsRedeemOrderItemsRequest, config: LazadaConfig): Promise<ETicketsRedeemOrderItemsResponse> {
  return LazadaHelper.callLazadaApi<ETicketsRedeemOrderItemsResponse>('/eticket/code/consume', 'POST', params as unknown as Record<string, unknown>, config, 'redeemOrderItems');
}

/**
 * GlobalEticketMerchantMaAvailable via Lazada `POST /eticket/ma/available`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaAvailable(params: ETicketsGlobalEticketMerchantMaAvailableRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaAvailableResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaAvailableResponse>('/eticket/ma/available', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaAvailable');
}

/**
 * GlobalEticketMerchantMaConsume via Lazada `POST /eticket/ma/consume`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaConsume(params: ETicketsGlobalEticketMerchantMaConsumeRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaConsumeResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaConsumeResponse>('/eticket/ma/consume', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaConsume');
}

/**
 * GlobalEticketMerchantMaFailsend via Lazada `POST /eticket/ma/failsend`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaFailsend(params: ETicketsGlobalEticketMerchantMaFailsendRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaFailsendResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaFailsendResponse>('/eticket/ma/failsend', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaFailsend');
}

/**
 * GlobalEticketMerchantMaQuery via Lazada `POST /eticket/ma/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaQuery(params: ETicketsGlobalEticketMerchantMaQueryRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaQueryResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaQueryResponse>('/eticket/ma/query', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaQuery');
}

/**
 * GlobalEticketMerchantMaQueryTbMa via Lazada `POST /eticket/ma/queryTbMa`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaQueryTbMa(params: ETicketsGlobalEticketMerchantMaQueryTbMaRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaQueryTbMaResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaQueryTbMaResponse>('/eticket/ma/queryTbMa', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaQueryTbMa');
}

/**
 * GlobalEticketMerchantMaSend via Lazada `POST /eticket/ma/send`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function globalEticketMerchantMaSend(params: ETicketsGlobalEticketMerchantMaSendRequest, config: LazadaConfig): Promise<ETicketsGlobalEticketMerchantMaSendResponse> {
  return LazadaHelper.callLazadaApi<ETicketsGlobalEticketMerchantMaSendResponse>('/eticket/ma/send', 'POST', params as unknown as Record<string, unknown>, config, 'globalEticketMerchantMaSend');
}
