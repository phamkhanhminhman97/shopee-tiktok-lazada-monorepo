export interface DgInstallServiceCallBackRequest {
  orderNo: string;
  thirdOrderNo: string;
  type: string;
  servicePrice?: string;
  serviceDate?: string;
  jobStatus?: string;
  jobReason?: string;
  extendInfo?: string;
}

export interface DgInstallServiceCallBackForTestRequest {
  orderNo: string;
  thirdOrderNo: string;
  type: string;
  servicePrice?: string;
  serviceDate?: string;
  jobStatus: string;
  jobReason?: string;
  extendInfo?: string;
}

export interface DgInuranceNoticationRequest {
  orderNo: string;
  thirdOrderNo: string;
  premium: string;
  ePolicyLink: string;
  policyNo: string;
  underwritingStatus: string;
  underwritingReason?: string;
  expirationDate: string;
}

export interface DgInuranceNotifyLapseRequest {
  orderNo: string;
  thirdOrderNo: string;
  policyNo: string;
  lapseTime: string;
  lapseType: string;
  message?: string;
}

export interface DgDigitalServiceCdkCodeReceivedRequest {
  tb_order_id: string;
  cdk_name?: string;
  tb_order_line_id: string;
  valid_from?: string;
  cdk_code_key: string[];
  cdk_code_number: string;
  valid_end?: string;
  terms_use?: string;
}
