export interface LogisticsGetOrderTraceResultErrorCode {
  displayMessage?: string;
}

export interface LogisticsGetOrderTraceResultModulePackageDetailInfoListLogisticDetailInfoList {
  package_location_name: string;
  event_date: string;
  detail_type: string;
  proof_images: Record<string, unknown>[];
  receive_time: number;
  status_code: string;
  icon: string;
  event_time: number;
  description: string;
  title: string;
}

export interface LogisticsGetOrderTraceResultModulePackageDetailInfoList {
  order_line_info_list: string;
  tracking_number: string;
  ofc_package_id: string;
  logistic_detail_info_list: LogisticsGetOrderTraceResultModulePackageDetailInfoListLogisticDetailInfoList[];
}

export interface LogisticsGetOrderTraceResultModule {
  warehouse_detail_info: string;
  ofc_order_id: string;
  package_detail_info_list: LogisticsGetOrderTraceResultModulePackageDetailInfoList[];
}

export interface LogisticsGetOrderTraceResult {
  error_code: LogisticsGetOrderTraceResultErrorCode;
  repeated: boolean;
  retry: boolean;
  not_success: boolean;
  success: boolean;
  module: LogisticsGetOrderTraceResultModule[];
}

export interface LogisticsGetOrderTrace {
  result: LogisticsGetOrderTraceResult;
}

export type LogisticsGetOrderTraceResponse = LogisticsGetOrderTrace;

export interface LogisticsScanParcel {
  trackingNumber?: string;
}

export type LogisticsScanParcelResponse = LogisticsScanParcel;

export interface LogisticsCreateConsolidationService {
  data: string;
  success: boolean;
  errorCode: string;
  errorMsg: string;
}

export type LogisticsCreateConsolidationServiceResponse = LogisticsCreateConsolidationService;

export interface LogisticsUpdateLastMile {
  success?: boolean;
  data?: string;
  errorCode?: string;
  errorMsg?: string;
}

export type LogisticsUpdateLastMileResponse = LogisticsUpdateLastMile;

export interface LogisticsAddOrUpdatePickupStopErrors {
  errorMessage?: string;
  errorCode?: string;
  field?: string;
}

export interface LogisticsAddOrUpdatePickupStop {
  retryable: boolean;
  success: boolean;
  errors: LogisticsAddOrUpdatePickupStopErrors[];
  errorMessage: string;
  errorCode?: string;
}

export type LogisticsAddOrUpdatePickupStopResponse = LogisticsAddOrUpdatePickupStop;

export interface LogisticsUpdatePickupTimeSlotErrors {
  errorMessage?: string;
  errorCode?: string;
  field?: string;
}

export interface LogisticsUpdatePickupTimeSlot {
  retryable: boolean;
  success: boolean;
  errors: LogisticsUpdatePickupTimeSlotErrors[];
  errorMessage: string;
  errorCode?: string;
}

export type LogisticsUpdatePickupTimeSlotResponse = LogisticsUpdatePickupTimeSlot;

export interface LogisticsCreate3PLStationErrors {
  errorMessage?: string;
  errorCode?: string;
  field?: string;
}

export interface LogisticsCreate3PLStation {
  success?: boolean;
  retryable?: boolean;
  errorMessage?: string;
  errorCode?: string;
  errors?: LogisticsCreate3PLStationErrors[];
}

export type LogisticsCreate3PLStationResponse = LogisticsCreate3PLStation;

export interface LogisticsUpdate3PLStationErrors {
  errorMessage?: string;
  errorCode?: string;
  field?: string;
}

export interface LogisticsUpdate3PLStation {
  success?: boolean;
  retryable?: boolean;
  errorMessage?: string;
  errorCode?: string;
  errors?: LogisticsUpdate3PLStationErrors[];
}

export type LogisticsUpdate3PLStationResponse = LogisticsUpdate3PLStation;

export interface LogisticsStationDopScanData {
  trackingNumber?: string;
}

export interface LogisticsStationDopScanError {
  errorCode?: string;
}

export interface LogisticsStationDopScan {
  success?: boolean;
  data?: LogisticsStationDopScanData;
  error?: LogisticsStationDopScanError;
}

export type LogisticsStationDopScanResponse = LogisticsStationDopScan;
