export interface DgInstallServiceCallBack {
  resultCode?: string;
  resultMsg?: string;
  transactionId?: string;
  extendInfo?: string;
}

export type DgInstallServiceCallBackResponse = DgInstallServiceCallBack;

export interface DgInstallServiceCallBackForTest {
  resultCode?: string;
  resultMsg?: string;
  transactionId?: string;
  extendInfo?: string;
}

export type DgInstallServiceCallBackForTestResponse = DgInstallServiceCallBackForTest;

export interface DgInuranceNotication {
  errorCode?: string;
  errorMsg?: string;
  transactionId?: string;
  extendInfo?: string;
}

export type DgInuranceNoticationResponse = DgInuranceNotication;

export interface DgInuranceNotifyLapse {
  transactionId?: string;
  extendInfo?: string;
  errorCode?: string;
  errorMsg?: string;
}

export type DgInuranceNotifyLapseResponse = DgInuranceNotifyLapse;

export interface DgDigitalServiceCdkCodeReceived {
  result_code: string;
  result_msg: string;
}

export type DgDigitalServiceCdkCodeReceivedResponse = DgDigitalServiceCdkCodeReceived;
