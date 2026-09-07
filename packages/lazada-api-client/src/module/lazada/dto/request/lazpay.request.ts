export interface LazpayQueryAddonOrderRequest {
  pageNum: number;
  pageSize: number;
  userToken: string;
  orderStatus?: string;
}

export interface LazpayQueryBenefitRequest {
  data: string;
  userToken: string;
  serviceName: string;
}

export interface LazpayGetSubscriptionToFusionRequest {
  userToken: string;
}

export interface LazpayDigitalAlterOrderStatusRequest {
  requestId: string;
  transactionId: number;
  sellerId?: number;
  cancelCode?: number;
  cancelMsg?: string;
  userToken: string;
  serviceName: string;
}

export interface LazpayDigitalCreateOrderRequest {
  requestId: string;
  itemPrice: number;
  currency: string;
  transactionId: number;
  sellerId?: number;
  userToken: string;
  serviceName: string;
  skuId: number;
  itemId: number;
}

export interface LazpayDigitalQueryOrderRequest {
  requestId: string;
  transactionId: number;
  sellerId?: number;
  serviceName: string;
  userToken: string;
}

export interface LazpayDGUtiityPreCreateOrderRequest {
  miniToken: string;
  miniappId: string;
  paymentRequestId: string;
  extendInfo?: string;
  signature?: string;
  value: string;
  currency: string;
}

export interface LazpayDGUtilityPreGetPaymentStatusRequest {
  paymentRequestId: string;
  miniappId: string;
  signature: string;
}

export interface LazpayDGUtilityPreUpdateFulfillemtStatusRequest {
  paymentRequestId: string;
  miniappId: string;
  signature: string;
}

export interface LazpayInsuranceAlterOrderStatusRequest {
  requestId: string;
  transactionId: number;
  sellerId?: number;
  cancelCode?: number;
  cancelMsg?: string;
  userToken: string;
  serviceName: string;
}

export interface LazpayInsuranceCreateOrderRequest {
  requestId: string;
  productCode: string;
  itemPrice: number;
  sstFee: number;
  stampDuty: number;
  currency: string;
  transactionId: number;
  sellerId?: number;
  serviceName: string;
  userToken: string;
  orderExistTime?: string;
  subProductCode?: string;
  subItemPrice?: string;
  subServiceFee?: string;
  subTransactionId?: string;
  insuranceType?: string;
  partnerCode?: string;
  plateNo?: string;
  planCode?: string;
  subPlanCode?: string;
}

export interface LazpayInsuranceQueryOrderRequest {
  requestId: string;
  transactionId: number;
  sellerId?: number;
  serviceName: string;
  userToken: string;
}

export interface LazpayCollectBenefitRequest {
  data: string;
  userToken: string;
  serviceName: string;
}

export interface LazpayInsuranceGetPromotionsRequest {
  data: string;
  userToken: string;
  serviceName: string;
}

export interface LazpayCreateSubscriptionToFusionRequest {
  subscriptionStatus: string;
  subscribeTime?: number;
  unsubscribeTime?: number;
  subscribeSource?: string;
  unsubscribeSource?: string;
  userToken: string;
}

export interface LazpayInsuranceRealTimeCDPRequest {
  userToken: string;
  bizCode: string;
  serviceName: string;
}

export interface LazpayConsultPaymentPayFromTransAmount {
  currency: string;
  value: string;
}

export interface LazpayConsultPaymentPayFrom {
  custIdMercghost: string;
  transAmount: LazpayConsultPaymentPayFromTransAmount;
  additionalInfo?: string;
}

export interface LazpayConsultPaymentPayTosPayToAmount {
  currency: string;
  value: string;
}

export interface LazpayConsultPaymentPayTos {
  customerId: string;
  payToAmount: LazpayConsultPaymentPayTosPayToAmount;
  additionalInfo?: string;
}

export interface LazpayConsultPaymentRequest {
  serviceCode: string;
  payFrom: LazpayConsultPaymentPayFrom;
  payTos?: LazpayConsultPaymentPayTos[];
  orderGroup?: Record<string, unknown>;
  envInfo?: string;
  payOptions?: string[];
  productExt?: string;
  additionalInfo?: string;
}

export interface LazpayLazadaCFOInvoiceRpaCallbackRequest {
  country: string;
  batch_id: string;
  status: string;
}

export type LazpayOpenServiceBalanceQueryRequest = Record<string, never>;

export interface LazpayOpenServiceKycQueryRequest {
  need_cert_info?: boolean;
}

export interface LazpayReconciliationRequest {
  date: string;
  business_type: string;
}

export interface LazpayOpenServiceWithdrawApplyRequest {
  withdraw_request_id: string;
  withdrawable: boolean;
  withdraw_amount: string;
  user_id: string;
  need_verify_full_kyc?: boolean;
}

export interface LazpayOpenServiceWithdrawQueryRequest {
  withdraw_request_id: string;
}
