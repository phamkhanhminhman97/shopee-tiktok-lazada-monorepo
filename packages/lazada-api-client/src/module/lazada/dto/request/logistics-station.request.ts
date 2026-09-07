export interface LogisticsStationDopGetInboundedParcelRequest {
  stationCode: string;
  trackingNumbers: string[];
}

export interface LogisticsStationDopGetScannedParcelRequest {
  stationCode: string;
  cageNumber?: string;
}

export type LogisticsStationGetListAccessStationRequest = Record<string, never>;

export interface LogisticsStationGetCpScheduledPuParcelRequest {
  stationId: string;
}

export interface LogisticsStationSearchCustomerReturnParcelRequest {
  stationId: string;
  searchText: string;
}

export interface LogisticsStationGetInboundedParcelRequest {
  stationId: string;
  trackingNumbers: string[];
  serviceType: string;
}

export type LogisticsStationGetMetaDataRequest = Record<string, never>;

export interface LogisticsStationGetScannedParcelRequest {
  cageNumber?: string;
  serviceType: string;
  stationId: string;
}

export interface LogisticsStationCageValidationRequest {
  cageNumber: string;
  stationCode: string;
}

export interface LogisticsStationDopConfirmInboundScannedParcels {
  cageNumber: string;
  trackingNumber: string;
}

export interface LogisticsStationDopConfirmInboundRequest {
  stationCode: string;
  scannedParcels: LogisticsStationDopConfirmInboundScannedParcels[];
}

export interface LogisticsStationDopCreateScannedParcelRequest {
  stationCode: string;
  cageNumber: string;
  trackingNumber: string;
}

export interface LogisticsStationDopDeleteScannedParcelRequest {
  stationCode: string;
  trackingNumbers: string[];
}

export interface LogisticsStationValidateCageRequest {
  stationId: string;
  cageNumber: string;
}

export interface LogisticsStationConfirmInboundRequest {
  stationId: string;
  cageNumber?: string;
  trackingNumbers: string[];
  serviceType: string;
}

export interface LogisticsStationConfirmParcelCollectionRequest {
  stationId: string;
  trackingNumber: string;
  otp: string;
  action: string;
  rejectCode?: string;
}

export interface LogisticsStationValidateOTPRequest {
  stationId: string;
  trackingNumber: string;
  otp: string;
}

export interface LogisticsStationCreateScannedParcelRequest {
  stationId: string;
  cageNumber?: string;
  trackingNumber: string;
  serviceType: string;
}

export interface LogisticsStationDeleteScannedParcelRequest {
  stationId: string;
  trackingNumbers: string[];
  serviceType: string;
}
