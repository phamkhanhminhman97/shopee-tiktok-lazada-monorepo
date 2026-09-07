import { LazadaConfig } from '../dto/request/config.request';
import {
  collectBenefit,
  consultPayment,
  createSubscriptionToFusion,
  dGUtiityPreCreateOrder,
  dGUtilityPreGetPaymentStatus,
  dGUtilityPreUpdateFulfillemtStatus,
  digitalAlterOrderStatus,
  digitalCreateOrder,
  digitalQueryOrder,
  getSubscriptionToFusion,
  insuranceAlterOrderStatus,
  insuranceCreateOrder,
  insuranceGetPromotions,
  insuranceQueryOrder,
  insuranceRealTimeCDP,
  lazadaCFOInvoiceRpaCallback,
  openServiceBalanceQuery,
  openServiceKycQuery,
  openServiceWithdrawApply,
  openServiceWithdrawQuery,
  queryAddonOrder,
  queryBenefit,
  reconciliation,
} from '../api/lazpay.api';
import {
  LazpayCollectBenefitRequest,
  LazpayConsultPaymentRequest,
  LazpayCreateSubscriptionToFusionRequest,
  LazpayDGUtiityPreCreateOrderRequest,
  LazpayDGUtilityPreGetPaymentStatusRequest,
  LazpayDGUtilityPreUpdateFulfillemtStatusRequest,
  LazpayDigitalAlterOrderStatusRequest,
  LazpayDigitalCreateOrderRequest,
  LazpayDigitalQueryOrderRequest,
  LazpayGetSubscriptionToFusionRequest,
  LazpayInsuranceAlterOrderStatusRequest,
  LazpayInsuranceCreateOrderRequest,
  LazpayInsuranceGetPromotionsRequest,
  LazpayInsuranceQueryOrderRequest,
  LazpayInsuranceRealTimeCDPRequest,
  LazpayLazadaCFOInvoiceRpaCallbackRequest,
  LazpayOpenServiceBalanceQueryRequest,
  LazpayOpenServiceKycQueryRequest,
  LazpayOpenServiceWithdrawApplyRequest,
  LazpayOpenServiceWithdrawQueryRequest,
  LazpayQueryAddonOrderRequest,
  LazpayQueryBenefitRequest,
  LazpayReconciliationRequest,
} from '../dto/request/lazpay.request';
import {
  LazpayCollectBenefitResponse,
  LazpayConsultPaymentResponse,
  LazpayCreateSubscriptionToFusionResponse,
  LazpayDGUtiityPreCreateOrderResponse,
  LazpayDGUtilityPreGetPaymentStatusResponse,
  LazpayDGUtilityPreUpdateFulfillemtStatusResponse,
  LazpayDigitalAlterOrderStatusResponse,
  LazpayDigitalCreateOrderResponse,
  LazpayDigitalQueryOrderResponse,
  LazpayGetSubscriptionToFusionResponse,
  LazpayInsuranceAlterOrderStatusResponse,
  LazpayInsuranceCreateOrderResponse,
  LazpayInsuranceGetPromotionsResponse,
  LazpayInsuranceQueryOrderResponse,
  LazpayInsuranceRealTimeCDPResponse,
  LazpayLazadaCFOInvoiceRpaCallbackResponse,
  LazpayOpenServiceBalanceQueryResponse,
  LazpayOpenServiceKycQueryResponse,
  LazpayOpenServiceWithdrawApplyResponse,
  LazpayOpenServiceWithdrawQueryResponse,
  LazpayQueryAddonOrderResponse,
  LazpayQueryBenefitResponse,
  LazpayReconciliationResponse,
} from '../dto/response/lazpay.response';

/**
 * Lazada `lazpay-api` API namespace.
 *
 * Access via `lazada.lazpay.<method>()` on a `LazadaModule` instance.
 */
export class LazadaLazpay {
  constructor(private config: LazadaConfig) {}

  async queryAddonOrder(params: LazpayQueryAddonOrderRequest): Promise<LazpayQueryAddonOrderResponse> {
    return await queryAddonOrder(params, this.config);
  }

  async queryBenefit(params: LazpayQueryBenefitRequest): Promise<LazpayQueryBenefitResponse> {
    return await queryBenefit(params, this.config);
  }

  async getSubscriptionToFusion(params: LazpayGetSubscriptionToFusionRequest): Promise<LazpayGetSubscriptionToFusionResponse> {
    return await getSubscriptionToFusion(params, this.config);
  }

  async digitalAlterOrderStatus(params: LazpayDigitalAlterOrderStatusRequest): Promise<LazpayDigitalAlterOrderStatusResponse> {
    return await digitalAlterOrderStatus(params, this.config);
  }

  async digitalCreateOrder(params: LazpayDigitalCreateOrderRequest): Promise<LazpayDigitalCreateOrderResponse> {
    return await digitalCreateOrder(params, this.config);
  }

  async digitalQueryOrder(params: LazpayDigitalQueryOrderRequest): Promise<LazpayDigitalQueryOrderResponse> {
    return await digitalQueryOrder(params, this.config);
  }

  async dGUtiityPreCreateOrder(params: LazpayDGUtiityPreCreateOrderRequest): Promise<LazpayDGUtiityPreCreateOrderResponse> {
    return await dGUtiityPreCreateOrder(params, this.config);
  }

  async dGUtilityPreGetPaymentStatus(params: LazpayDGUtilityPreGetPaymentStatusRequest): Promise<LazpayDGUtilityPreGetPaymentStatusResponse> {
    return await dGUtilityPreGetPaymentStatus(params, this.config);
  }

  async dGUtilityPreUpdateFulfillemtStatus(params: LazpayDGUtilityPreUpdateFulfillemtStatusRequest): Promise<LazpayDGUtilityPreUpdateFulfillemtStatusResponse> {
    return await dGUtilityPreUpdateFulfillemtStatus(params, this.config);
  }

  async insuranceAlterOrderStatus(params: LazpayInsuranceAlterOrderStatusRequest): Promise<LazpayInsuranceAlterOrderStatusResponse> {
    return await insuranceAlterOrderStatus(params, this.config);
  }

  async insuranceCreateOrder(params: LazpayInsuranceCreateOrderRequest): Promise<LazpayInsuranceCreateOrderResponse> {
    return await insuranceCreateOrder(params, this.config);
  }

  async insuranceQueryOrder(params: LazpayInsuranceQueryOrderRequest): Promise<LazpayInsuranceQueryOrderResponse> {
    return await insuranceQueryOrder(params, this.config);
  }

  async collectBenefit(params: LazpayCollectBenefitRequest): Promise<LazpayCollectBenefitResponse> {
    return await collectBenefit(params, this.config);
  }

  async insuranceGetPromotions(params: LazpayInsuranceGetPromotionsRequest): Promise<LazpayInsuranceGetPromotionsResponse> {
    return await insuranceGetPromotions(params, this.config);
  }

  async createSubscriptionToFusion(params: LazpayCreateSubscriptionToFusionRequest): Promise<LazpayCreateSubscriptionToFusionResponse> {
    return await createSubscriptionToFusion(params, this.config);
  }

  async insuranceRealTimeCDP(params: LazpayInsuranceRealTimeCDPRequest): Promise<LazpayInsuranceRealTimeCDPResponse> {
    return await insuranceRealTimeCDP(params, this.config);
  }

  async consultPayment(params: LazpayConsultPaymentRequest): Promise<LazpayConsultPaymentResponse> {
    return await consultPayment(params, this.config);
  }

  async lazadaCFOInvoiceRpaCallback(params: LazpayLazadaCFOInvoiceRpaCallbackRequest): Promise<LazpayLazadaCFOInvoiceRpaCallbackResponse> {
    return await lazadaCFOInvoiceRpaCallback(params, this.config);
  }

  async openServiceBalanceQuery(): Promise<LazpayOpenServiceBalanceQueryResponse> {
    return await openServiceBalanceQuery(this.config);
  }

  async openServiceKycQuery(params: LazpayOpenServiceKycQueryRequest): Promise<LazpayOpenServiceKycQueryResponse> {
    return await openServiceKycQuery(params, this.config);
  }

  async reconciliation(params: LazpayReconciliationRequest): Promise<LazpayReconciliationResponse> {
    return await reconciliation(params, this.config);
  }

  async openServiceWithdrawApply(params: LazpayOpenServiceWithdrawApplyRequest): Promise<LazpayOpenServiceWithdrawApplyResponse> {
    return await openServiceWithdrawApply(params, this.config);
  }

  async openServiceWithdrawQuery(params: LazpayOpenServiceWithdrawQueryRequest): Promise<LazpayOpenServiceWithdrawQueryResponse> {
    return await openServiceWithdrawQuery(params, this.config);
  }
}
