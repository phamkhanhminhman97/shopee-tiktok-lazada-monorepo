export interface LogisticsStationDopGetInboundedParcelData {
  trackingNumber?: string;
  cageNumber?: string;
  status?: string;
  inboundedAt?: number;
  lostAt?: number;
  pickupTplSlug?: string;
  outboundedAt?: number;
}

export interface LogisticsStationDopGetInboundedParcel {
  success?: boolean;
  data?: LogisticsStationDopGetInboundedParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDopGetInboundedParcelResponse = LogisticsStationDopGetInboundedParcel;

export interface LogisticsStationDopGetScannedParcelData {
  trackingNumber?: string;
  stationCode?: string;
  cageNumber?: string;
  sellerName?: string;
  pickupTplSlug?: string;
  createdAt?: number;
}

export interface LogisticsStationDopGetScannedParcel {
  success?: boolean;
  data?: LogisticsStationDopGetScannedParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDopGetScannedParcelResponse = LogisticsStationDopGetScannedParcel;

export interface LogisticsStationGetListAccessStationData {
  stationName?: string;
  stationCode?: string;
  active?: boolean;
}

export interface LogisticsStationGetListAccessStation {
  success?: boolean;
  data?: LogisticsStationGetListAccessStationData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationGetListAccessStationResponse = LogisticsStationGetListAccessStation;

export interface LogisticsStationGetCpScheduledPuParcelData {
  trackingNumber?: string;
  dispatchedAt?: number;
}

export interface LogisticsStationGetCpScheduledPuParcel {
  success?: boolean;
  data?: LogisticsStationGetCpScheduledPuParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationGetCpScheduledPuParcelResponse = LogisticsStationGetCpScheduledPuParcel;

export interface LogisticsStationSearchCustomerReturnParcelData {
  trackingNumber?: string;
  maskedCustomerName?: string;
}

export interface LogisticsStationSearchCustomerReturnParcel {
  success?: boolean;
  data?: LogisticsStationSearchCustomerReturnParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationSearchCustomerReturnParcelResponse = LogisticsStationSearchCustomerReturnParcel;

export interface LogisticsStationGetInboundedParcelData {
  trackingNumber?: string;
  cageNumber?: string;
  pickupTplSlug?: string;
  lastmileTpl?: string;
  warningMessage?: string;
  serviceType?: string;
  inboundedAt?: string;
  outboundedAt?: string;
  lostAt?: string;
  status?: string;
}

export interface LogisticsStationGetInboundedParcel {
  success?: boolean;
  data?: LogisticsStationGetInboundedParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationGetInboundedParcelResponse = LogisticsStationGetInboundedParcel;

export interface LogisticsStationGetMetaDataDataRejectReasons {
  rejectCode?: string;
  text?: string;
}

export interface LogisticsStationGetMetaDataData {
  rejectReasons?: LogisticsStationGetMetaDataDataRejectReasons[];
}

export interface LogisticsStationGetMetaData {
  success?: boolean;
  data?: LogisticsStationGetMetaDataData;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationGetMetaDataResponse = LogisticsStationGetMetaData;

export interface LogisticsStationGetScannedParcelData {
  trackingNumber?: string;
  cageNumber?: string;
  sellerName?: string;
  pickupTplSlug?: string;
  createdAt?: number;
  lastmileTpl?: string;
  warningMessage?: string;
  serviceType?: string;
}

export interface LogisticsStationGetScannedParcel {
  success?: boolean;
  data?: LogisticsStationGetScannedParcelData[];
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationGetScannedParcelResponse = LogisticsStationGetScannedParcel;

export interface LogisticsStationCageValidation {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationCageValidationResponse = LogisticsStationCageValidation;

export interface LogisticsStationDopConfirmInbound {
  success?: boolean;
  data?: string;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDopConfirmInboundResponse = LogisticsStationDopConfirmInbound;

export interface LogisticsStationDopCreateScannedParcelData {
  trackingNumber?: string;
  stationCode?: string;
  cageNumber?: string;
  sellerName?: string;
  pickupTplSlug?: string;
  createdAt?: number;
}

export interface LogisticsStationDopCreateScannedParcel {
  success?: boolean;
  data?: LogisticsStationDopCreateScannedParcelData;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDopCreateScannedParcelResponse = LogisticsStationDopCreateScannedParcel;

export interface LogisticsStationDopDeleteScannedParcel {
  success?: boolean;
  data?: string;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDopDeleteScannedParcelResponse = LogisticsStationDopDeleteScannedParcel;

export interface LogisticsStationValidateCage {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationValidateCageResponse = LogisticsStationValidateCage;

export interface LogisticsStationConfirmInbound {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationConfirmInboundResponse = LogisticsStationConfirmInbound;

export interface LogisticsStationConfirmParcelCollection {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationConfirmParcelCollectionResponse = LogisticsStationConfirmParcelCollection;

export interface LogisticsStationValidateOTP {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationValidateOTPResponse = LogisticsStationValidateOTP;

export interface LogisticsStationCreateScannedParcelData {
  trackingNumber?: string;
  cageNumber?: string;
  sellerName?: string;
  pickupTplSlug?: string;
  createdAt?: number;
  lastmileTpl?: string;
  warningMessage?: string;
  serviceType?: string;
}

export interface LogisticsStationCreateScannedParcel {
  success?: boolean;
  data?: LogisticsStationCreateScannedParcelData;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationCreateScannedParcelResponse = LogisticsStationCreateScannedParcel;

export interface LogisticsStationDeleteScannedParcel {
  success?: boolean;
  data?: boolean;
  errorCode?: string;
  errorMsg?: string;
  traceId?: string;
}

export type LogisticsStationDeleteScannedParcelResponse = LogisticsStationDeleteScannedParcel;
