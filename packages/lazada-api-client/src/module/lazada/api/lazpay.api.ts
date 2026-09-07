import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * queryAddonOrder via Lazada `GET /insurance/addon/orders/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryAddonOrder(params: LazpayQueryAddonOrderRequest, config: LazadaConfig): Promise<LazpayQueryAddonOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayQueryAddonOrderResponse>('/insurance/addon/orders/query', 'GET', params as unknown as Record<string, unknown>, config, 'queryAddonOrder');
}

/**
 * queryBenefit via Lazada `GET /insurance/promotion/queryBenefit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryBenefit(params: LazpayQueryBenefitRequest, config: LazadaConfig): Promise<LazpayQueryBenefitResponse> {
  return LazadaHelper.callLazadaApi<LazpayQueryBenefitResponse>('/insurance/promotion/queryBenefit', 'GET', params as unknown as Record<string, unknown>, config, 'queryBenefit');
}

/**
 * GetSubscriptionToFusion via Lazada `GET /insurance/subscription/getSubscription`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSubscriptionToFusion(params: LazpayGetSubscriptionToFusionRequest, config: LazadaConfig): Promise<LazpayGetSubscriptionToFusionResponse> {
  return LazadaHelper.callLazadaApi<LazpayGetSubscriptionToFusionResponse>('/insurance/subscription/getSubscription', 'GET', params as unknown as Record<string, unknown>, config, 'getSubscriptionToFusion');
}

/**
 * DigitalAlterOrderStatus via Lazada `POST /digital/order/alterStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalAlterOrderStatus(params: LazpayDigitalAlterOrderStatusRequest, config: LazadaConfig): Promise<LazpayDigitalAlterOrderStatusResponse> {
  return LazadaHelper.callLazadaApi<LazpayDigitalAlterOrderStatusResponse>('/digital/order/alterStatus', 'POST', params as unknown as Record<string, unknown>, config, 'digitalAlterOrderStatus');
}

/**
 * DigitalCreateOrder via Lazada `POST /digital/order/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalCreateOrder(params: LazpayDigitalCreateOrderRequest, config: LazadaConfig): Promise<LazpayDigitalCreateOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayDigitalCreateOrderResponse>('/digital/order/create', 'POST', params as unknown as Record<string, unknown>, config, 'digitalCreateOrder');
}

/**
 * DigitalQueryOrder via Lazada `POST /digital/order/getStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalQueryOrder(params: LazpayDigitalQueryOrderRequest, config: LazadaConfig): Promise<LazpayDigitalQueryOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayDigitalQueryOrderResponse>('/digital/order/getStatus', 'POST', params as unknown as Record<string, unknown>, config, 'digitalQueryOrder');
}

/**
 * DGUtiityPreCreateOrder via Lazada `POST /digital/service/createorder`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dGUtiityPreCreateOrder(params: LazpayDGUtiityPreCreateOrderRequest, config: LazadaConfig): Promise<LazpayDGUtiityPreCreateOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayDGUtiityPreCreateOrderResponse>('/digital/service/createorder', 'POST', params as unknown as Record<string, unknown>, config, 'dGUtiityPreCreateOrder');
}

/**
 * DGUtilityPreGetPaymentStatus via Lazada `POST /digital/service/getPaymentStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dGUtilityPreGetPaymentStatus(params: LazpayDGUtilityPreGetPaymentStatusRequest, config: LazadaConfig): Promise<LazpayDGUtilityPreGetPaymentStatusResponse> {
  return LazadaHelper.callLazadaApi<LazpayDGUtilityPreGetPaymentStatusResponse>('/digital/service/getPaymentStatus', 'POST', params as unknown as Record<string, unknown>, config, 'dGUtilityPreGetPaymentStatus');
}

/**
 * DGUtilityPreUpdateFulfillemtStatus via Lazada `POST /digital/service/updateFulfillemtStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dGUtilityPreUpdateFulfillemtStatus(params: LazpayDGUtilityPreUpdateFulfillemtStatusRequest, config: LazadaConfig): Promise<LazpayDGUtilityPreUpdateFulfillemtStatusResponse> {
  return LazadaHelper.callLazadaApi<LazpayDGUtilityPreUpdateFulfillemtStatusResponse>('/digital/service/updateFulfillemtStatus', 'POST', params as unknown as Record<string, unknown>, config, 'dGUtilityPreUpdateFulfillemtStatus');
}

/**
 * InsuranceAlterOrderStatus via Lazada `POST /insurance/order/alterStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function insuranceAlterOrderStatus(params: LazpayInsuranceAlterOrderStatusRequest, config: LazadaConfig): Promise<LazpayInsuranceAlterOrderStatusResponse> {
  return LazadaHelper.callLazadaApi<LazpayInsuranceAlterOrderStatusResponse>('/insurance/order/alterStatus', 'POST', params as unknown as Record<string, unknown>, config, 'insuranceAlterOrderStatus');
}

/**
 * InsuranceCreateOrder via Lazada `POST /insurance/order/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function insuranceCreateOrder(params: LazpayInsuranceCreateOrderRequest, config: LazadaConfig): Promise<LazpayInsuranceCreateOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayInsuranceCreateOrderResponse>('/insurance/order/create', 'POST', params as unknown as Record<string, unknown>, config, 'insuranceCreateOrder');
}

/**
 * InsuranceQueryOrder via Lazada `POST /insurance/order/getStatus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function insuranceQueryOrder(params: LazpayInsuranceQueryOrderRequest, config: LazadaConfig): Promise<LazpayInsuranceQueryOrderResponse> {
  return LazadaHelper.callLazadaApi<LazpayInsuranceQueryOrderResponse>('/insurance/order/getStatus', 'POST', params as unknown as Record<string, unknown>, config, 'insuranceQueryOrder');
}

/**
 * collectBenefit via Lazada `POST /insurance/promotion/collectBenefit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function collectBenefit(params: LazpayCollectBenefitRequest, config: LazadaConfig): Promise<LazpayCollectBenefitResponse> {
  return LazadaHelper.callLazadaApi<LazpayCollectBenefitResponse>('/insurance/promotion/collectBenefit', 'POST', params as unknown as Record<string, unknown>, config, 'collectBenefit');
}

/**
 * InsuranceGetPromotions via Lazada `POST /insurance/promotion/getPromotions`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function insuranceGetPromotions(params: LazpayInsuranceGetPromotionsRequest, config: LazadaConfig): Promise<LazpayInsuranceGetPromotionsResponse> {
  return LazadaHelper.callLazadaApi<LazpayInsuranceGetPromotionsResponse>('/insurance/promotion/getPromotions', 'POST', params as unknown as Record<string, unknown>, config, 'insuranceGetPromotions');
}

/**
 * CreateSubscriptionToFusion via Lazada `POST /insurance/subscription/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createSubscriptionToFusion(params: LazpayCreateSubscriptionToFusionRequest, config: LazadaConfig): Promise<LazpayCreateSubscriptionToFusionResponse> {
  return LazadaHelper.callLazadaApi<LazpayCreateSubscriptionToFusionResponse>('/insurance/subscription/create', 'POST', params as unknown as Record<string, unknown>, config, 'createSubscriptionToFusion');
}

/**
 * insuranceRealTimeCDP via Lazada `POST /insurance/syncCDP`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function insuranceRealTimeCDP(params: LazpayInsuranceRealTimeCDPRequest, config: LazadaConfig): Promise<LazpayInsuranceRealTimeCDPResponse> {
  return LazadaHelper.callLazadaApi<LazpayInsuranceRealTimeCDPResponse>('/insurance/syncCDP', 'POST', params as unknown as Record<string, unknown>, config, 'insuranceRealTimeCDP');
}

/**
 * ConsultPayment via Lazada `POST /lazadapay/v1/debit/consult_payment`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function consultPayment(params: LazpayConsultPaymentRequest, config: LazadaConfig): Promise<LazpayConsultPaymentResponse> {
  return LazadaHelper.callLazadaApi<LazpayConsultPaymentResponse>('/lazadapay/v1/debit/consult_payment', 'POST', params as unknown as Record<string, unknown>, config, 'consultPayment');
}

/**
 * LazadaCFOInvoiceRpaCallback via Lazada `POST /rpa/id/tax/callback`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaCFOInvoiceRpaCallback(params: LazpayLazadaCFOInvoiceRpaCallbackRequest, config: LazadaConfig): Promise<LazpayLazadaCFOInvoiceRpaCallbackResponse> {
  return LazadaHelper.callLazadaApi<LazpayLazadaCFOInvoiceRpaCallbackResponse>('/rpa/id/tax/callback', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaCFOInvoiceRpaCallback');
}

/**
 * OpenServiceBalanceQuery via Lazada `POST /wallet/open/service/balance/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function openServiceBalanceQuery(config: LazadaConfig): Promise<LazpayOpenServiceBalanceQueryResponse> {
  return LazadaHelper.callLazadaApi<LazpayOpenServiceBalanceQueryResponse>('/wallet/open/service/balance/query', 'POST', {} as unknown as Record<string, unknown>, config, 'openServiceBalanceQuery');
}

/**
 * OpenServiceKycQuery via Lazada `POST /wallet/open/service/kyc/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function openServiceKycQuery(params: LazpayOpenServiceKycQueryRequest, config: LazadaConfig): Promise<LazpayOpenServiceKycQueryResponse> {
  return LazadaHelper.callLazadaApi<LazpayOpenServiceKycQueryResponse>('/wallet/open/service/kyc/query', 'POST', params as unknown as Record<string, unknown>, config, 'openServiceKycQuery');
}

/**
 * Reconciliation via Lazada `POST /wallet/open/service/reconciliation`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function reconciliation(params: LazpayReconciliationRequest, config: LazadaConfig): Promise<LazpayReconciliationResponse> {
  return LazadaHelper.callLazadaApi<LazpayReconciliationResponse>('/wallet/open/service/reconciliation', 'POST', params as unknown as Record<string, unknown>, config, 'reconciliation');
}

/**
 * OpenServiceWithdrawApply via Lazada `POST /wallet/open/service/withdraw`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function openServiceWithdrawApply(params: LazpayOpenServiceWithdrawApplyRequest, config: LazadaConfig): Promise<LazpayOpenServiceWithdrawApplyResponse> {
  return LazadaHelper.callLazadaApi<LazpayOpenServiceWithdrawApplyResponse>('/wallet/open/service/withdraw', 'POST', params as unknown as Record<string, unknown>, config, 'openServiceWithdrawApply');
}

/**
 * OpenServiceWithdrawQuery via Lazada `POST /wallet/open/service/withdraw/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function openServiceWithdrawQuery(params: LazpayOpenServiceWithdrawQueryRequest, config: LazadaConfig): Promise<LazpayOpenServiceWithdrawQueryResponse> {
  return LazadaHelper.callLazadaApi<LazpayOpenServiceWithdrawQueryResponse>('/wallet/open/service/withdraw/query', 'POST', params as unknown as Record<string, unknown>, config, 'openServiceWithdrawQuery');
}
