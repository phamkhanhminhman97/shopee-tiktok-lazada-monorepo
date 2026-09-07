export interface FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResult {
  success: boolean;
  module: Record<string, unknown>[];
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNo {
  result: FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResult;
}

export type FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResponse = FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNo;

export interface FirstmileBigbagOnlyForCnQueryAddressInformaitonResult {
  data: Record<string, unknown>;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnQueryAddressInformaiton {
  result: FirstmileBigbagOnlyForCnQueryAddressInformaitonResult;
}

export type FirstmileBigbagOnlyForCnQueryAddressInformaitonResponse = FirstmileBigbagOnlyForCnQueryAddressInformaiton;

export interface FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResult {
  data: Record<string, unknown>;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLable {
  result: FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResult;
}

export type FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResponse = FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLable;

export interface FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResult {
  data: Record<string, unknown>;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnQueryLazadaBigbagInfo {
  result: FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResult;
}

export type FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResponse = FirstmileBigbagOnlyForCnQueryLazadaBigbagInfo;

export interface FirstmileBigbagOnlyForCnLazadaSellerAccountBindResult {
  data: Record<string, unknown>;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnLazadaSellerAccountBind {
  result: FirstmileBigbagOnlyForCnLazadaSellerAccountBindResult;
}

export type FirstmileBigbagOnlyForCnLazadaSellerAccountBindResponse = FirstmileBigbagOnlyForCnLazadaSellerAccountBind;

export interface FirstmileBigbagOnlyForCnLazadaBigbagCancelResult {
  data: Record<string, unknown>;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCancel {
  result: FirstmileBigbagOnlyForCnLazadaBigbagCancelResult;
}

export type FirstmileBigbagOnlyForCnLazadaBigbagCancelResponse = FirstmileBigbagOnlyForCnLazadaBigbagCancel;

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitResultData {
  handoverOrderId?: number;
  handoverContentId?: number;
  handoverContentCode?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitResult {
  data: FirstmileBigbagOnlyForCnLazadaBigbagCommitResultData;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommit {
  result: FirstmileBigbagOnlyForCnLazadaBigbagCommitResult;
}

export type FirstmileBigbagOnlyForCnLazadaBigbagCommitResponse = FirstmileBigbagOnlyForCnLazadaBigbagCommit;

export interface FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResultData {
  currentPageIndex?: number;
  pageTotalNum?: number;
  pageSize?: number;
  totalCount?: number;
  itemList?: Record<string, unknown>[];
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResult {
  data: FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResultData;
  success: boolean;
  errorCode: string;
  erroMsg: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCollectionPoints {
  result: FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResult;
}

export type FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResponse = FirstmileBigbagOnlyForCnLazadaBigbagCollectionPoints;

export interface FirstmileBigbagOnlyForCnLazadaBigbagUpdateResult {
  data: Record<string, unknown>;
  success: boolean;
  errorCode: string;
  erroMsg: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagUpdate {
  result: FirstmileBigbagOnlyForCnLazadaBigbagUpdateResult;
}

export type FirstmileBigbagOnlyForCnLazadaBigbagUpdateResponse = FirstmileBigbagOnlyForCnLazadaBigbagUpdate;
