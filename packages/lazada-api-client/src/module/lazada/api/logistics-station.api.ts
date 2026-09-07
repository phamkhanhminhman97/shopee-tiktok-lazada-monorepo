import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * DopGetInboundedParcel via Lazada `GET /logistics/station/dop/inbounded-parcels/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dopGetInboundedParcel(params: LogisticsStationDopGetInboundedParcelRequest, config: LazadaConfig): Promise<LogisticsStationDopGetInboundedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopGetInboundedParcelResponse>('/logistics/station/dop/inbounded-parcels/list', 'GET', params as unknown as Record<string, unknown>, config, 'dopGetInboundedParcel');
}

/**
 * DopGetScannedParcel via Lazada `GET /logistics/station/dop/scanned-parcels/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dopGetScannedParcel(params: LogisticsStationDopGetScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationDopGetScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopGetScannedParcelResponse>('/logistics/station/dop/scanned-parcels/list', 'GET', params as unknown as Record<string, unknown>, config, 'dopGetScannedParcel');
}

/**
 * GetListAccessStation via Lazada `GET /logistics/station/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getListAccessStation(config: LazadaConfig): Promise<LogisticsStationGetListAccessStationResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationGetListAccessStationResponse>('/logistics/station/list', 'GET', {} as unknown as Record<string, unknown>, config, 'getListAccessStation');
}

/**
 * GetCpScheduledPuParcel via Lazada `GET /logistics/station/v1/cp/scheduled-pu-parcels/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCpScheduledPuParcel(params: LogisticsStationGetCpScheduledPuParcelRequest, config: LazadaConfig): Promise<LogisticsStationGetCpScheduledPuParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationGetCpScheduledPuParcelResponse>('/logistics/station/v1/cp/scheduled-pu-parcels/list', 'GET', params as unknown as Record<string, unknown>, config, 'getCpScheduledPuParcel');
}

/**
 * SearchCustomerReturnParcel via Lazada `GET /logistics/station/v1/dop/cr-parcels/search`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function searchCustomerReturnParcel(params: LogisticsStationSearchCustomerReturnParcelRequest, config: LazadaConfig): Promise<LogisticsStationSearchCustomerReturnParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationSearchCustomerReturnParcelResponse>('/logistics/station/v1/dop/cr-parcels/search', 'GET', params as unknown as Record<string, unknown>, config, 'searchCustomerReturnParcel');
}

/**
 * GetInboundedParcel via Lazada `GET /logistics/station/v1/inbounded-parcels/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInboundedParcel(params: LogisticsStationGetInboundedParcelRequest, config: LazadaConfig): Promise<LogisticsStationGetInboundedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationGetInboundedParcelResponse>('/logistics/station/v1/inbounded-parcels/list', 'GET', params as unknown as Record<string, unknown>, config, 'getInboundedParcel');
}

/**
 * GetMetaData via Lazada `GET /logistics/station/v1/metadata`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getMetaData(config: LazadaConfig): Promise<LogisticsStationGetMetaDataResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationGetMetaDataResponse>('/logistics/station/v1/metadata', 'GET', {} as unknown as Record<string, unknown>, config, 'getMetaData');
}

/**
 * GetScannedParcel via Lazada `GET /logistics/station/v1/scanned-parcels/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getScannedParcel(params: LogisticsStationGetScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationGetScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationGetScannedParcelResponse>('/logistics/station/v1/scanned-parcels/list', 'GET', params as unknown as Record<string, unknown>, config, 'getScannedParcel');
}

/**
 * CageValidation via Lazada `POST /logistics/station/cages/validate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cageValidation(params: LogisticsStationCageValidationRequest, config: LazadaConfig): Promise<LogisticsStationCageValidationResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationCageValidationResponse>('/logistics/station/cages/validate', 'POST', params as unknown as Record<string, unknown>, config, 'cageValidation');
}

/**
 * DopConfirmInbound via Lazada `POST /logistics/station/dop/confirm-inbound`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dopConfirmInbound(params: LogisticsStationDopConfirmInboundRequest, config: LazadaConfig): Promise<LogisticsStationDopConfirmInboundResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopConfirmInboundResponse>('/logistics/station/dop/confirm-inbound', 'POST', params as unknown as Record<string, unknown>, config, 'dopConfirmInbound');
}

/**
 * DopCreateScannedParcel via Lazada `POST /logistics/station/dop/scanned-parcels`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dopCreateScannedParcel(params: LogisticsStationDopCreateScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationDopCreateScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopCreateScannedParcelResponse>('/logistics/station/dop/scanned-parcels', 'POST', params as unknown as Record<string, unknown>, config, 'dopCreateScannedParcel');
}

/**
 * DopDeleteScannedParcel via Lazada `POST /logistics/station/dop/scanned-parcels/delete`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function dopDeleteScannedParcel(params: LogisticsStationDopDeleteScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationDopDeleteScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDopDeleteScannedParcelResponse>('/logistics/station/dop/scanned-parcels/delete', 'POST', params as unknown as Record<string, unknown>, config, 'dopDeleteScannedParcel');
}

/**
 * ValidateCage via Lazada `POST /logistics/station/v1/cages/validate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function validateCage(params: LogisticsStationValidateCageRequest, config: LazadaConfig): Promise<LogisticsStationValidateCageResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationValidateCageResponse>('/logistics/station/v1/cages/validate', 'POST', params as unknown as Record<string, unknown>, config, 'validateCage');
}

/**
 * ConfirmInbound via Lazada `POST /logistics/station/v1/confirm-inbound`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function confirmInbound(params: LogisticsStationConfirmInboundRequest, config: LazadaConfig): Promise<LogisticsStationConfirmInboundResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationConfirmInboundResponse>('/logistics/station/v1/confirm-inbound', 'POST', params as unknown as Record<string, unknown>, config, 'confirmInbound');
}

/**
 * ConfirmParcelCollection via Lazada `POST /logistics/station/v1/cp/confirm-parcel-collection`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function confirmParcelCollection(params: LogisticsStationConfirmParcelCollectionRequest, config: LazadaConfig): Promise<LogisticsStationConfirmParcelCollectionResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationConfirmParcelCollectionResponse>('/logistics/station/v1/cp/confirm-parcel-collection', 'POST', params as unknown as Record<string, unknown>, config, 'confirmParcelCollection');
}

/**
 * ValidateOTP via Lazada `POST /logistics/station/v1/cp/validate-otp`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function validateOTP(params: LogisticsStationValidateOTPRequest, config: LazadaConfig): Promise<LogisticsStationValidateOTPResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationValidateOTPResponse>('/logistics/station/v1/cp/validate-otp', 'POST', params as unknown as Record<string, unknown>, config, 'validateOTP');
}

/**
 * CreateScannedParcel via Lazada `POST /logistics/station/v1/scanned-parcels/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createScannedParcel(params: LogisticsStationCreateScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationCreateScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationCreateScannedParcelResponse>('/logistics/station/v1/scanned-parcels/create', 'POST', params as unknown as Record<string, unknown>, config, 'createScannedParcel');
}

/**
 * DeleteScannedParcel via Lazada `POST /logistics/station/v1/scanned-parcels/delete`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deleteScannedParcel(params: LogisticsStationDeleteScannedParcelRequest, config: LazadaConfig): Promise<LogisticsStationDeleteScannedParcelResponse> {
  return LazadaHelper.callLazadaApi<LogisticsStationDeleteScannedParcelResponse>('/logistics/station/v1/scanned-parcels/delete', 'POST', params as unknown as Record<string, unknown>, config, 'deleteScannedParcel');
}
