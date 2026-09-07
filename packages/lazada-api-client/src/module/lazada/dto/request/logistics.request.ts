export interface LogisticsGetOrderTraceRequest {
  order_id: string;
  locale?: string;
  ofcPackageIdList?: string[];
}

export interface LogisticsScanParcelRequest {
  cageNumber: string;
  trackingNumber: string;
}

export interface LogisticsCreateConsolidationServiceRequest {
  unitCodes: string[];
  properties: Record<string, unknown>;
}

export interface LogisticsUpdateLastMileRequest {
  unitCode: string;
  shippingProviderCode: string;
  trackingNumber: string;
}

export interface LogisticsAddOrUpdatePickupStopFailedVolumeList {
  volume: number;
  reason: string;
  type: string;
}

export interface LogisticsAddOrUpdatePickupStopRequest {
  stopId: string;
  sellerId: string;
  warehouseCode: string;
  dopStationId?: string;
  dopStationName?: string;
  pickupType: string;
  status: string;
  statusUpdateTime: number;
  dispatcherName?: string;
  dispatcherContact?: string;
  driverId?: string;
  driverName: string;
  driverContact?: string;
  eta?: number;
  successVolume?: string;
  failedVolume?: string;
  failedVolumeList?: LogisticsAddOrUpdatePickupStopFailedVolumeList[];
}

export interface LogisticsUpdatePickupTimeSlotRequest {
  sellerId: string;
  warehouseCode: string;
  pickupTimeslots: string[];
}

export interface LogisticsCreate3PLStationContact {
  name: string;
  phone: string;
  email?: string;
}

export interface LogisticsCreate3PLStationAddress {
  id: string;
  details: string;
  latitude: string;
  longitude: string;
}

export interface LogisticsCreate3PLStationSchedules {
  workDays: string[];
  startTime: string;
  endTime: string;
  cutOffTime: string;
}

export interface LogisticsCreate3PLStationConstraints {
  maxCapacity: number;
  maxWidth: number;
  maxHeight: number;
  maxLength: number;
  maxWeight: number;
  functionCode: string;
  maxCbm: string;
}

export interface LogisticsCreate3PLStationRequest {
  externalCode: string;
  modifier?: string;
  name: string;
  functionCodes: string[];
  subTypes: string[];
  codSupport: boolean;
  age?: number;
  firstMileTplSlugs: string[];
  lastMileTplSlugs: string[];
  contact: LogisticsCreate3PLStationContact;
  address: LogisticsCreate3PLStationAddress;
  timeZone?: string;
  schedules?: LogisticsCreate3PLStationSchedules[];
  constraints?: LogisticsCreate3PLStationConstraints[];
}

export interface LogisticsUpdate3PLStationContact {
  name: string;
  phone: string;
  email?: string;
}

export interface LogisticsUpdate3PLStationAddress {
  id: string;
  details: string;
  latitude: string;
  longitude: string;
}

export interface LogisticsUpdate3PLStationSchedules {
  workDays: string[];
  startTime: string;
  endTime: string;
  cutOffTime: string;
}

export interface LogisticsUpdate3PLStationConstraints {
  maxCapacity: number;
  maxWidth: number;
  maxHeight: number;
  maxLength: number;
  maxWeight: number;
  functionCode: string;
  maxCbm: string;
}

export interface LogisticsUpdate3PLStationRequest {
  externalCode: string;
  modifier?: string;
  enable: boolean;
  functionCodes: string[];
  subTypes: string[];
  codSupport: boolean;
  age?: number;
  firstMileTplSlugs: string[];
  lastMileTplSlugs: string[];
  contact: LogisticsUpdate3PLStationContact;
  address: LogisticsUpdate3PLStationAddress;
  timeZone?: string;
  schedules?: LogisticsUpdate3PLStationSchedules[];
  constraints?: LogisticsUpdate3PLStationConstraints[];
  name?: string;
}

export interface LogisticsStationDopScanRequest {
  cageNumber: string;
  trackingNumber: string;
}
