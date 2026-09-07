import { LazadaConfig } from '../dto/request/config.request';
import {
  addOrUpdatePickupStop,
  create3PLStation,
  createConsolidationService,
  getOrderTrace,
  scanParcel,
  stationDopScan,
  update3PLStation,
  updateLastMile,
  updatePickupTimeSlot,
} from '../api/logistics.api';
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
 * Lazada `logistics-api` API namespace.
 *
 * Access via `lazada.logistics.<method>()` on a `LazadaModule` instance.
 */
export class LazadaLogistics {
  constructor(private config: LazadaConfig) {}

  async getOrderTrace(params: LogisticsGetOrderTraceRequest): Promise<LogisticsGetOrderTraceResponse> {
    return await getOrderTrace(params, this.config);
  }

  async scanParcel(params: LogisticsScanParcelRequest): Promise<LogisticsScanParcelResponse> {
    return await scanParcel(params, this.config);
  }

  async createConsolidationService(params: LogisticsCreateConsolidationServiceRequest): Promise<LogisticsCreateConsolidationServiceResponse> {
    return await createConsolidationService(params, this.config);
  }

  async updateLastMile(params: LogisticsUpdateLastMileRequest): Promise<LogisticsUpdateLastMileResponse> {
    return await updateLastMile(params, this.config);
  }

  async addOrUpdatePickupStop(params: LogisticsAddOrUpdatePickupStopRequest): Promise<LogisticsAddOrUpdatePickupStopResponse> {
    return await addOrUpdatePickupStop(params, this.config);
  }

  async updatePickupTimeSlot(params: LogisticsUpdatePickupTimeSlotRequest): Promise<LogisticsUpdatePickupTimeSlotResponse> {
    return await updatePickupTimeSlot(params, this.config);
  }

  async create3PLStation(params: LogisticsCreate3PLStationRequest): Promise<LogisticsCreate3PLStationResponse> {
    return await create3PLStation(params, this.config);
  }

  async update3PLStation(params: LogisticsUpdate3PLStationRequest): Promise<LogisticsUpdate3PLStationResponse> {
    return await update3PLStation(params, this.config);
  }

  async stationDopScan(params: LogisticsStationDopScanRequest): Promise<LogisticsStationDopScanResponse> {
    return await stationDopScan(params, this.config);
  }
}
