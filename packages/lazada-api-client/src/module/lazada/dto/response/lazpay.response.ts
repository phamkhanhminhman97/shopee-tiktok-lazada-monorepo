export interface LazpayQueryAddonOrderDataOrderList {
  premium: string;
  expireTime: number;
  effectiveTime: number;
  insuranceName: string;
  orderStatus: string;
  policyLink: string;
  paidPremium: string;
  transactionId: string;
  productName: string;
  insuredName?: string;
  zoneId?: string;
  orderDetailLink?: string;
}

export interface LazpayQueryAddonOrderData {
  total: number;
  totalPages: number;
  pageSize: number;
  orderList: LazpayQueryAddonOrderDataOrderList[];
  pageNum: number;
  traceId?: string;
}

export interface LazpayQueryAddonOrder {
  redirectUrl: string;
  resultCode: string;
  data: LazpayQueryAddonOrderData;
  success: boolean;
  resultMessage: string;
}

export type LazpayQueryAddonOrderResponse = LazpayQueryAddonOrder;

export interface LazpayQueryBenefit {
  trace_id: string;
  resultCode: number;
  resultMessage: string;
  data?: string;
}

export type LazpayQueryBenefitResponse = LazpayQueryBenefit;

export interface LazpayGetSubscriptionToFusion {
  subscriptionStatus?: string;
  subscribeTime?: number;
  unsubscribeTime?: number;
}

export type LazpayGetSubscriptionToFusionResponse = LazpayGetSubscriptionToFusion;

export interface LazpayDigitalAlterOrderStatus {
  traceId?: string;
  transactionId?: number;
  orderStatus?: string;
  paymentStatus?: string;
  resultCode?: number;
}

export type LazpayDigitalAlterOrderStatusResponse = LazpayDigitalAlterOrderStatus;

export interface LazpayDigitalCreateOrder {
  transactionId?: number;
  paymentLink?: string;
  resultCode?: number;
  tradeOrderLineId?: string;
  traceId?: string;
}

export type LazpayDigitalCreateOrderResponse = LazpayDigitalCreateOrder;

export interface LazpayDigitalQueryOrder {
  transactionId?: number;
  orderStatus?: string;
  paymentStatus?: string;
  resultCode?: number;
  traceId?: string;
}

export type LazpayDigitalQueryOrderResponse = LazpayDigitalQueryOrder;

export interface LazpayDGUtiityPreCreateOrder {
  success?: boolean;
  resultCode?: string;
  resultMsg?: string;
  tradeNo?: string;
}

export type LazpayDGUtiityPreCreateOrderResponse = LazpayDGUtiityPreCreateOrder;

export interface LazpayDGUtilityPreGetPaymentStatus {
  success?: boolean;
  resultCode?: string;
  resultMsg?: string;
}

export type LazpayDGUtilityPreGetPaymentStatusResponse = LazpayDGUtilityPreGetPaymentStatus;

export interface LazpayDGUtilityPreUpdateFulfillemtStatus {
  success?: boolean;
  resultCode?: string;
  resultMsg?: string;
}

export type LazpayDGUtilityPreUpdateFulfillemtStatusResponse = LazpayDGUtilityPreUpdateFulfillemtStatus;

export interface LazpayInsuranceAlterOrderStatus {
  transactionId?: number;
  orderStatus?: string;
  paymentStatus?: string;
  resultCode?: number;
  traceId?: string;
}

export type LazpayInsuranceAlterOrderStatusResponse = LazpayInsuranceAlterOrderStatus;

export interface LazpayInsuranceCreateOrder {
  tradeOrderLineId?: string;
  transactionId?: number;
  paymentLink?: string;
  resultCode?: number;
  traceId?: string;
}

export type LazpayInsuranceCreateOrderResponse = LazpayInsuranceCreateOrder;

export interface LazpayInsuranceQueryOrder {
  transactionId?: number;
  orderStatus?: string;
  paymentStatus?: string;
  resultCode?: number;
  traceId?: string;
}

export type LazpayInsuranceQueryOrderResponse = LazpayInsuranceQueryOrder;

export interface LazpayCollectBenefit {
  trace_id: string;
  resultCode: number;
  resultMessage: string;
  data?: string;
}

export type LazpayCollectBenefitResponse = LazpayCollectBenefit;

export interface LazpayInsuranceGetPromotions {
  traceId?: string;
  data?: string;
  resultCode?: number;
  resultMessage?: string;
}

export type LazpayInsuranceGetPromotionsResponse = LazpayInsuranceGetPromotions;

export interface LazpayCreateSubscriptionToFusion {
  subscriptionStatus?: string;
  subscribeTime?: number;
  unsubscribeTime?: number;
}

export type LazpayCreateSubscriptionToFusionResponse = LazpayCreateSubscriptionToFusion;

export interface LazpayInsuranceRealTimeCDP {
  success?: string;
  resultCode?: string;
  resultMessage?: string;
  data?: boolean;
  redirectUrl?: string;
}

export type LazpayInsuranceRealTimeCDPResponse = LazpayInsuranceRealTimeCDP;

export interface LazpayConsultPaymentPayOptionsPayAssetDetails {
  payAssetType: string;
  card: Record<string, unknown>;
  externalAccount?: Record<string, unknown>;
  storeValue?: Record<string, unknown>;
  coupon?: Record<string, unknown>;
  rebate?: Record<string, unknown>;
  bankAccount?: Record<string, unknown>;
  discount?: Record<string, unknown>;
  additionalInfo?: string;
}

export interface LazpayConsultPaymentPayOptions {
  supportedCurrencies: string[];
  payMethod: string;
  additionalInfo: string;
  payOption: string;
  rank: number;
  payAssetDetails: LazpayConsultPaymentPayOptionsPayAssetDetails[];
  preferred: boolean;
  disableReasonCode: string;
  disableReasonDesc: string;
  amountLimitMap: Record<string, unknown>;
  payOptionInfo: Record<string, unknown>;
  enabled: boolean;
  payCategory: string;
}

export interface LazpayConsultPayment {
  responseMessage: string;
  responseCode: string;
  errorCode?: string;
  additionalInfo: string;
  payOptions: LazpayConsultPaymentPayOptions[];
}

export type LazpayConsultPaymentResponse = LazpayConsultPayment;

export interface LazpayLazadaCFOInvoiceRpaCallback {
  is_success?: boolean;
  res_code?: string;
  content?: string;
  res_msg?: string;
}

export type LazpayLazadaCFOInvoiceRpaCallbackResponse = LazpayLazadaCFOInvoiceRpaCallback;

export interface LazpayOpenServiceBalanceQuery {
  date_time: number;
  available_amount: string;
  available_amount_cent: number;
  currency: string;
}

export type LazpayOpenServiceBalanceQueryResponse = LazpayOpenServiceBalanceQuery;

export interface LazpayOpenServiceKycQuery {
  phone?: string;
  prefix?: string;
  userId?: string;
  birthday?: string;
  full_name?: string;
  cert_front_image?: string;
  cert_type?: string;
  full_kyc_status?: boolean;
  kyc_jump_url?: string;
  extend_info?: string;
}

export type LazpayOpenServiceKycQueryResponse = LazpayOpenServiceKycQuery;

export interface LazpayReconciliation {
  res?: string;
}

export type LazpayReconciliationResponse = LazpayReconciliation;

export interface LazpayOpenServiceWithdrawApply {
  withdraw_request_id?: string;
  withdraw_id?: string;
  withdraw_amount?: string;
  withdrawable?: string;
  currency?: string;
  partner_deposit?: string;
}

export type LazpayOpenServiceWithdrawApplyResponse = LazpayOpenServiceWithdrawApply;

export interface LazpayOpenServiceWithdrawQuery {
  withdraw_request_id?: string;
  withdraw_id?: string;
  withdraw_amount?: string;
  withdrawable?: string;
  currency?: string;
  partner_deposit?: string;
}

export type LazpayOpenServiceWithdrawQueryResponse = LazpayOpenServiceWithdrawQuery;
