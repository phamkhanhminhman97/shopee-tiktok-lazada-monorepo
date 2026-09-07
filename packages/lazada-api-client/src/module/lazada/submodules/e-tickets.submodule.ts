import { LazadaConfig } from '../dto/request/config.request';
import {
  getOrderItemsFromBarCode,
  globalEticketMerchantMaAvailable,
  globalEticketMerchantMaConsume,
  globalEticketMerchantMaFailsend,
  globalEticketMerchantMaQuery,
  globalEticketMerchantMaQueryTbMa,
  globalEticketMerchantMaSend,
  redeemOrderItems,
} from '../api/e-tickets.api';
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
 * Lazada `e-tickets-api` API namespace.
 *
 * Access via `lazada.eTickets.<method>()` on a `LazadaModule` instance.
 */
export class LazadaETickets {
  constructor(private config: LazadaConfig) {}

  async getOrderItemsFromBarCode(params: ETicketsGetOrderItemsFromBarCodeRequest): Promise<ETicketsGetOrderItemsFromBarCodeResponse> {
    return await getOrderItemsFromBarCode(params, this.config);
  }

  async redeemOrderItems(params: ETicketsRedeemOrderItemsRequest): Promise<ETicketsRedeemOrderItemsResponse> {
    return await redeemOrderItems(params, this.config);
  }

  async globalEticketMerchantMaAvailable(params: ETicketsGlobalEticketMerchantMaAvailableRequest): Promise<ETicketsGlobalEticketMerchantMaAvailableResponse> {
    return await globalEticketMerchantMaAvailable(params, this.config);
  }

  async globalEticketMerchantMaConsume(params: ETicketsGlobalEticketMerchantMaConsumeRequest): Promise<ETicketsGlobalEticketMerchantMaConsumeResponse> {
    return await globalEticketMerchantMaConsume(params, this.config);
  }

  async globalEticketMerchantMaFailsend(params: ETicketsGlobalEticketMerchantMaFailsendRequest): Promise<ETicketsGlobalEticketMerchantMaFailsendResponse> {
    return await globalEticketMerchantMaFailsend(params, this.config);
  }

  async globalEticketMerchantMaQuery(params: ETicketsGlobalEticketMerchantMaQueryRequest): Promise<ETicketsGlobalEticketMerchantMaQueryResponse> {
    return await globalEticketMerchantMaQuery(params, this.config);
  }

  async globalEticketMerchantMaQueryTbMa(params: ETicketsGlobalEticketMerchantMaQueryTbMaRequest): Promise<ETicketsGlobalEticketMerchantMaQueryTbMaResponse> {
    return await globalEticketMerchantMaQueryTbMa(params, this.config);
  }

  async globalEticketMerchantMaSend(params: ETicketsGlobalEticketMerchantMaSendRequest): Promise<ETicketsGlobalEticketMerchantMaSendResponse> {
    return await globalEticketMerchantMaSend(params, this.config);
  }
}
