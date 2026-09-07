import { LazadaConfig } from '../dto/request/config.request';
import {
  cageValidation,
  confirmInbound,
  confirmParcelCollection,
  createScannedParcel,
  deleteScannedParcel,
  dopConfirmInbound,
  dopCreateScannedParcel,
  dopDeleteScannedParcel,
  dopGetInboundedParcel,
  dopGetScannedParcel,
  getCpScheduledPuParcel,
  getInboundedParcel,
  getListAccessStation,
  getMetaData,
  getScannedParcel,
  searchCustomerReturnParcel,
  validateCage,
  validateOTP,
} from '../api/logistics-station.api';
import {
  LogisticsStationCageValidationRequest,
  LogisticsStationConfirmInboundRequest,
  LogisticsStationConfirmParcelCollectionRequest,
  LogisticsStationCreateScannedParcelRequest,
  LogisticsStationDeleteScannedParcelRequest,
  LogisticsStationDopConfirmInboundRequest,
  LogisticsStationDopCreateScannedParcelRequest,
  LogisticsStationDopDeleteScannedParcelRequest,
  LogisticsStationDopGetInboundedParcelRequest,
  LogisticsStationDopGetScannedParcelRequest,
  LogisticsStationGetCpScheduledPuParcelRequest,
  LogisticsStationGetInboundedParcelRequest,
  LogisticsStationGetListAccessStationRequest,
  LogisticsStationGetMetaDataRequest,
  LogisticsStationGetScannedParcelRequest,
  LogisticsStationSearchCustomerReturnParcelRequest,
  LogisticsStationValidateCageRequest,
  LogisticsStationValidateOTPRequest,
} from '../dto/request/logistics-station.request';
import {
  LogisticsStationCageValidationResponse,
  LogisticsStationConfirmInboundResponse,
  LogisticsStationConfirmParcelCollectionResponse,
  LogisticsStationCreateScannedParcelResponse,
  LogisticsStationDeleteScannedParcelResponse,
  LogisticsStationDopConfirmInboundResponse,
  LogisticsStationDopCreateScannedParcelResponse,
  LogisticsStationDopDeleteScannedParcelResponse,
  LogisticsStationDopGetInboundedParcelResponse,
  LogisticsStationDopGetScannedParcelResponse,
  LogisticsStationGetCpScheduledPuParcelResponse,
  LogisticsStationGetInboundedParcelResponse,
  LogisticsStationGetListAccessStationResponse,
  LogisticsStationGetMetaDataResponse,
  LogisticsStationGetScannedParcelResponse,
  LogisticsStationSearchCustomerReturnParcelResponse,
  LogisticsStationValidateCageResponse,
  LogisticsStationValidateOTPResponse,
} from '../dto/response/logistics-station.response';

/**
 * Lazada `logistics-station-api` API namespace.
 *
 * Access via `lazada.logisticsStation.<method>()` on a `LazadaModule` instance.
 */
export class LazadaLogisticsStation {
  constructor(private config: LazadaConfig) {}

  async dopGetInboundedParcel(params: LogisticsStationDopGetInboundedParcelRequest): Promise<LogisticsStationDopGetInboundedParcelResponse> {
    return await dopGetInboundedParcel(params, this.config);
  }

  async dopGetScannedParcel(params: LogisticsStationDopGetScannedParcelRequest): Promise<LogisticsStationDopGetScannedParcelResponse> {
    return await dopGetScannedParcel(params, this.config);
  }

  async getListAccessStation(): Promise<LogisticsStationGetListAccessStationResponse> {
    return await getListAccessStation(this.config);
  }

  async getCpScheduledPuParcel(params: LogisticsStationGetCpScheduledPuParcelRequest): Promise<LogisticsStationGetCpScheduledPuParcelResponse> {
    return await getCpScheduledPuParcel(params, this.config);
  }

  async searchCustomerReturnParcel(params: LogisticsStationSearchCustomerReturnParcelRequest): Promise<LogisticsStationSearchCustomerReturnParcelResponse> {
    return await searchCustomerReturnParcel(params, this.config);
  }

  async getInboundedParcel(params: LogisticsStationGetInboundedParcelRequest): Promise<LogisticsStationGetInboundedParcelResponse> {
    return await getInboundedParcel(params, this.config);
  }

  async getMetaData(): Promise<LogisticsStationGetMetaDataResponse> {
    return await getMetaData(this.config);
  }

  async getScannedParcel(params: LogisticsStationGetScannedParcelRequest): Promise<LogisticsStationGetScannedParcelResponse> {
    return await getScannedParcel(params, this.config);
  }

  async cageValidation(params: LogisticsStationCageValidationRequest): Promise<LogisticsStationCageValidationResponse> {
    return await cageValidation(params, this.config);
  }

  async dopConfirmInbound(params: LogisticsStationDopConfirmInboundRequest): Promise<LogisticsStationDopConfirmInboundResponse> {
    return await dopConfirmInbound(params, this.config);
  }

  async dopCreateScannedParcel(params: LogisticsStationDopCreateScannedParcelRequest): Promise<LogisticsStationDopCreateScannedParcelResponse> {
    return await dopCreateScannedParcel(params, this.config);
  }

  async dopDeleteScannedParcel(params: LogisticsStationDopDeleteScannedParcelRequest): Promise<LogisticsStationDopDeleteScannedParcelResponse> {
    return await dopDeleteScannedParcel(params, this.config);
  }

  async validateCage(params: LogisticsStationValidateCageRequest): Promise<LogisticsStationValidateCageResponse> {
    return await validateCage(params, this.config);
  }

  async confirmInbound(params: LogisticsStationConfirmInboundRequest): Promise<LogisticsStationConfirmInboundResponse> {
    return await confirmInbound(params, this.config);
  }

  async confirmParcelCollection(params: LogisticsStationConfirmParcelCollectionRequest): Promise<LogisticsStationConfirmParcelCollectionResponse> {
    return await confirmParcelCollection(params, this.config);
  }

  async validateOTP(params: LogisticsStationValidateOTPRequest): Promise<LogisticsStationValidateOTPResponse> {
    return await validateOTP(params, this.config);
  }

  async createScannedParcel(params: LogisticsStationCreateScannedParcelRequest): Promise<LogisticsStationCreateScannedParcelResponse> {
    return await createScannedParcel(params, this.config);
  }

  async deleteScannedParcel(params: LogisticsStationDeleteScannedParcelRequest): Promise<LogisticsStationDeleteScannedParcelResponse> {
    return await deleteScannedParcel(params, this.config);
  }
}
