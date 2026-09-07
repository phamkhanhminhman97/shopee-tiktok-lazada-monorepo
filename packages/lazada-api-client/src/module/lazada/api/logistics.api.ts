import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  LogisticsAddOrUpdatePickupStopRequest,
  LogisticsCreate3PLStationRequest,
  LogisticsCreateConsolidationServiceRequest,
  LogisticsGetOrderTraceRequest,
  LogisticsScanParcelRequest,
  LogisticsStationDopScanRequest,
  LogisticsUpdate3PLStationRequest,
  LogisticsUpdateLastMileRequest,
  LogisticsUpdatePickupTimeSlotRequest,
} from '../dto/request/logistics.request';
import {
  LogisticsAddOrUpdatePickupStopResponse,
  LogisticsCreate3PLStationResponse,
  LogisticsCreateConsolidationServiceResponse,
  LogisticsGetOrderTraceResponse,
  LogisticsScanParcelResponse,
  LogisticsStationDopScanResponse,
  LogisticsUpdate3PLStationResponse,
  LogisticsUpdateLastMileResponse,
  LogisticsUpdatePickupTimeSlotResponse,
} from '../dto/response/logistics.response';

/**
 * GetOrderTrace via Lazada `GET /logistic/order/trace`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOrderTrace(params: LogisticsGetOrderTraceRequest, config: LazadaConfig): Promise<LogisticsGetOrderTraceResponse> {
  return LazadaHelper.callLazadaApi<LogisticsGetOrderTraceResponse>('/logistic/order/trace', 'GET', params as unknown as Record<string, unknown>, config, 'getOrderTrace');
}

/**
 * ScanParcel via Lazada `POST /dop/scan`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function scanParcel(params: LogisticsScanParcelRequest, config: LazadaConfig): Promise<LogisticsScanParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsScanParcelResponse>('/dop/scan', 'POST', params as unknown as Record<string, unknown>, config, 'scanParcel');
}

/**
 * createConsolidationService via Lazada `POST /logistics/ldp/createConsolidationService`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createConsolidationService(params: LogisticsCreateConsolidationServiceRequest, config: LazadaConfig): Promise<LogisticsCreateConsolidationServiceResponse> {
  return LazadaHelper.callLazadaApi<LogisticsCreateConsolidationServiceResponse>('/logistics/ldp/createConsolidationService', 'POST', params as unknown as Record<string, unknown>, config, 'createConsolidationService');
}

/**
 * updateLastMile via Lazada `POST /logistics/ldp/updateLastmile`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateLastMile(params: LogisticsUpdateLastMileRequest, config: LazadaConfig): Promise<LogisticsUpdateLastMileResponse> {
  return LazadaHelper.callLazadaApi<LogisticsUpdateLastMileResponse>('/logistics/ldp/updateLastmile', 'POST', params as unknown as Record<string, unknown>, config, 'updateLastMile');
}

/**
 * AddOrUpdatePickupStop via Lazada `POST /logistics/tps/runsheets/stops`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function addOrUpdatePickupStop(params: LogisticsAddOrUpdatePickupStopRequest, config: LazadaConfig): Promise<LogisticsAddOrUpdatePickupStopResponse> {
  return LazadaHelper.callLazadaApi<LogisticsAddOrUpdatePickupStopResponse>('/logistics/tps/runsheets/stops', 'POST', params as unknown as Record<string, unknown>, config, 'addOrUpdatePickupStop');
}

/**
 * UpdatePickupTimeSlot via Lazada `POST /logistics/tps/sellers/pickup_timeslot`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updatePickupTimeSlot(params: LogisticsUpdatePickupTimeSlotRequest, config: LazadaConfig): Promise<LogisticsUpdatePickupTimeSlotResponse> {
  return LazadaHelper.callLazadaApi<LogisticsUpdatePickupTimeSlotResponse>('/logistics/tps/sellers/pickup_timeslot', 'POST', params as unknown as Record<string, unknown>, config, 'updatePickupTimeSlot');
}

/**
 * Create3PLStation via Lazada `POST /logistics/tps/stations/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function create3PLStation(params: LogisticsCreate3PLStationRequest, config: LazadaConfig): Promise<LogisticsCreate3PLStationResponse> {
  return LazadaHelper.callLazadaApi<LogisticsCreate3PLStationResponse>('/logistics/tps/stations/create', 'POST', params as unknown as Record<string, unknown>, config, 'create3PLStation');
}

/**
 * Update3PLStation via Lazada `POST /logistics/tps/stations/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function update3PLStation(params: LogisticsUpdate3PLStationRequest, config: LazadaConfig): Promise<LogisticsUpdate3PLStationResponse> {
  return LazadaHelper.callLazadaApi<LogisticsUpdate3PLStationResponse>('/logistics/tps/stations/update', 'POST', params as unknown as Record<string, unknown>, config, 'update3PLStation');
}

/**
 * StationDopScan via Lazada `POST /stations/dop/scan`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function stationDopScan(params: LogisticsStationDopScanRequest, config: LazadaConfig): Promise<LogisticsStationDopScanResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopScanResponse>('/stations/dop/scan', 'POST', params as unknown as Record<string, unknown>, config, 'stationDopScan');
}
