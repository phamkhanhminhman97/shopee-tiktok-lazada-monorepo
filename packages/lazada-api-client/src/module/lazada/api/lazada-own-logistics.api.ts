import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  OwnLogisticsCreateCustomerAccountRelationshipByOTPRequest,
  OwnLogisticsCreateCustomerAccountRelationshipForExternalRequest,
  OwnLogisticsCreateOrUpdateCustomerWarehouseRequest,
  OwnLogisticsEpisGetDeliveryOptionsRequest,
  OwnLogisticsEpisPackageCancellationRequest,
  OwnLogisticsEpisPackageCancellationV3Request,
  OwnLogisticsEpisPackageConsignmentRequest,
  OwnLogisticsEpisPackageConsignmentV2Request,
  OwnLogisticsEpisPackageCreationRequest,
  OwnLogisticsEpisPackageInfoUpdateRequest,
  OwnLogisticsEpisPackagePrintAwbRequest,
  OwnLogisticsEpisPackageReAttemptRequest,
  OwnLogisticsEpisPackageReadyToBeShippedRequest,
  OwnLogisticsEpisUploadAwbFulfillmentRequest,
  OwnLogisticsEpisXspaceCreateRequest,
  OwnLogisticsEpisXspaceGetDetailRequest,
  OwnLogisticsEpisXspaceQueryRequest,
  OwnLogisticsEpisXspaceRateTicketRequest,
  OwnLogisticsEstimateShippingFeeRequest,
  OwnLogisticsGetShippingFeeRequest,
} from '../dto/request/lazada-own-logistics.request';
import {
  OwnLogisticsCreateCustomerAccountRelationshipByOTPResponse,
  OwnLogisticsCreateCustomerAccountRelationshipForExternalResponse,
  OwnLogisticsCreateOrUpdateCustomerWarehouseResponse,
  OwnLogisticsEpisGetDeliveryOptionsResponse,
  OwnLogisticsEpisPackageCancellationResponse,
  OwnLogisticsEpisPackageCancellationV3Response,
  OwnLogisticsEpisPackageConsignmentResponse,
  OwnLogisticsEpisPackageConsignmentV2Response,
  OwnLogisticsEpisPackageCreationResponse,
  OwnLogisticsEpisPackageInfoUpdateResponse,
  OwnLogisticsEpisPackagePrintAwbResponse,
  OwnLogisticsEpisPackageReAttemptResponse,
  OwnLogisticsEpisPackageReadyToBeShippedResponse,
  OwnLogisticsEpisUploadAwbFulfillmentResponse,
  OwnLogisticsEpisXspaceCreateResponse,
  OwnLogisticsEpisXspaceGetDetailResponse,
  OwnLogisticsEpisXspaceQueryResponse,
  OwnLogisticsEpisXspaceRateTicketResponse,
  OwnLogisticsEstimateShippingFeeResponse,
  OwnLogisticsGetShippingFeeResponse,
} from '../dto/response/lazada-own-logistics.response';

/**
 * GetShippingFee via Lazada `GET /logistics/epis/get_shipping_fee`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getShippingFee(params: OwnLogisticsGetShippingFeeRequest, config: LazadaConfig): Promise<OwnLogisticsGetShippingFeeResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsGetShippingFeeResponse>('/logistics/epis/get_shipping_fee', 'GET', params as unknown as Record<string, unknown>, config, 'getShippingFee');
}

/**
 * EpisPackagePrintAwb via Lazada `GET /logistics/epis/packages/awb`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackagePrintAwb(params: OwnLogisticsEpisPackagePrintAwbRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackagePrintAwbResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackagePrintAwbResponse>('/logistics/epis/packages/awb', 'GET', params as unknown as Record<string, unknown>, config, 'episPackagePrintAwb');
}

/**
 * EpisGetDeliveryOptions via Lazada `GET /logistics/epis/service/delivery_options`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episGetDeliveryOptions(params: OwnLogisticsEpisGetDeliveryOptionsRequest, config: LazadaConfig): Promise<OwnLogisticsEpisGetDeliveryOptionsResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisGetDeliveryOptionsResponse>('/logistics/epis/service/delivery_options', 'GET', params as unknown as Record<string, unknown>, config, 'episGetDeliveryOptions');
}

/**
 * CreateCustomerAccountRelationshipForExternal via Lazada `POST /logistics/epis/customers/external_relationships`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createCustomerAccountRelationshipForExternal(params: OwnLogisticsCreateCustomerAccountRelationshipForExternalRequest, config: LazadaConfig): Promise<OwnLogisticsCreateCustomerAccountRelationshipForExternalResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsCreateCustomerAccountRelationshipForExternalResponse>('/logistics/epis/customers/external_relationships', 'POST', params as unknown as Record<string, unknown>, config, 'createCustomerAccountRelationshipForExternal');
}

/**
 * CreateCustomerAccountRelationshipByOTP via Lazada `POST /logistics/epis/customers/external_relationships_bundle`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createCustomerAccountRelationshipByOTP(params: OwnLogisticsCreateCustomerAccountRelationshipByOTPRequest, config: LazadaConfig): Promise<OwnLogisticsCreateCustomerAccountRelationshipByOTPResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsCreateCustomerAccountRelationshipByOTPResponse>('/logistics/epis/customers/external_relationships_bundle', 'POST', params as unknown as Record<string, unknown>, config, 'createCustomerAccountRelationshipByOTP');
}

/**
 * CreateOrUpdateCustomerWarehouse via Lazada `POST /logistics/epis/customers/warehouses`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createOrUpdateCustomerWarehouse(params: OwnLogisticsCreateOrUpdateCustomerWarehouseRequest, config: LazadaConfig): Promise<OwnLogisticsCreateOrUpdateCustomerWarehouseResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsCreateOrUpdateCustomerWarehouseResponse>('/logistics/epis/customers/warehouses', 'POST', params as unknown as Record<string, unknown>, config, 'createOrUpdateCustomerWarehouse');
}

/**
 * EstimateShippingFee via Lazada `POST /logistics/epis/estimate_shipping_fee`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function estimateShippingFee(params: OwnLogisticsEstimateShippingFeeRequest, config: LazadaConfig): Promise<OwnLogisticsEstimateShippingFeeResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEstimateShippingFeeResponse>('/logistics/epis/estimate_shipping_fee', 'POST', params as unknown as Record<string, unknown>, config, 'estimateShippingFee');
}

/**
 * EpisUploadAwbFulfillment via Lazada `POST /logistics/epis/fulfillment/upload_awb`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episUploadAwbFulfillment(params: OwnLogisticsEpisUploadAwbFulfillmentRequest, config: LazadaConfig): Promise<OwnLogisticsEpisUploadAwbFulfillmentResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisUploadAwbFulfillmentResponse>('/logistics/epis/fulfillment/upload_awb', 'POST', params as unknown as Record<string, unknown>, config, 'episUploadAwbFulfillment');
}

/**
 * EpisPackageCreation via Lazada `POST /logistics/epis/packages`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageCreation(params: OwnLogisticsEpisPackageCreationRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageCreationResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageCreationResponse>('/logistics/epis/packages', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageCreation');
}

/**
 * EpisPackageCancellation via Lazada `POST /logistics/epis/packages/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageCancellation(params: OwnLogisticsEpisPackageCancellationRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageCancellationResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageCancellationResponse>('/logistics/epis/packages/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageCancellation');
}

/**
 * EpisPackageCancellationV3 via Lazada `POST /logistics/epis/packages/cancel/v3`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageCancellationV3(params: OwnLogisticsEpisPackageCancellationV3Request, config: LazadaConfig): Promise<OwnLogisticsEpisPackageCancellationV3Response> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageCancellationV3Response>('/logistics/epis/packages/cancel/v3', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageCancellationV3');
}

/**
 * EpisPackageConsignment via Lazada `POST /logistics/epis/packages/consign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageConsignment(params: OwnLogisticsEpisPackageConsignmentRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageConsignmentResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageConsignmentResponse>('/logistics/epis/packages/consign', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageConsignment');
}

/**
 * EpisPackageConsignmentV2 via Lazada `POST /logistics/epis/packages/consign/v2`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageConsignmentV2(params: OwnLogisticsEpisPackageConsignmentV2Request, config: LazadaConfig): Promise<OwnLogisticsEpisPackageConsignmentV2Response> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageConsignmentV2Response>('/logistics/epis/packages/consign/v2', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageConsignmentV2');
}

/**
 * EpisPackageReAttempt via Lazada `POST /logistics/epis/packages/reattempt`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageReAttempt(params: OwnLogisticsEpisPackageReAttemptRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageReAttemptResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageReAttemptResponse>('/logistics/epis/packages/reattempt', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageReAttempt');
}

/**
 * EpisPackageReadyToBeShipped via Lazada `POST /logistics/epis/packages/rts`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageReadyToBeShipped(params: OwnLogisticsEpisPackageReadyToBeShippedRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageReadyToBeShippedResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageReadyToBeShippedResponse>('/logistics/epis/packages/rts', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageReadyToBeShipped');
}

/**
 * EpisPackageInfoUpdate via Lazada `POST /logistics/epis/packages/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episPackageInfoUpdate(params: OwnLogisticsEpisPackageInfoUpdateRequest, config: LazadaConfig): Promise<OwnLogisticsEpisPackageInfoUpdateResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisPackageInfoUpdateResponse>('/logistics/epis/packages/update', 'POST', params as unknown as Record<string, unknown>, config, 'episPackageInfoUpdate');
}

/**
 * EpisXspaceCreate via Lazada `POST /logistics/epis/xspace/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episXspaceCreate(params: OwnLogisticsEpisXspaceCreateRequest, config: LazadaConfig): Promise<OwnLogisticsEpisXspaceCreateResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisXspaceCreateResponse>('/logistics/epis/xspace/create', 'POST', params as unknown as Record<string, unknown>, config, 'episXspaceCreate');
}

/**
 * EpisXspaceGetDetail via Lazada `POST /logistics/epis/xspace/detail`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episXspaceGetDetail(params: OwnLogisticsEpisXspaceGetDetailRequest, config: LazadaConfig): Promise<OwnLogisticsEpisXspaceGetDetailResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisXspaceGetDetailResponse>('/logistics/epis/xspace/detail', 'POST', params as unknown as Record<string, unknown>, config, 'episXspaceGetDetail');
}

/**
 * EpisXspaceQuery via Lazada `POST /logistics/epis/xspace/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episXspaceQuery(params: OwnLogisticsEpisXspaceQueryRequest, config: LazadaConfig): Promise<OwnLogisticsEpisXspaceQueryResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisXspaceQueryResponse>('/logistics/epis/xspace/query', 'POST', params as unknown as Record<string, unknown>, config, 'episXspaceQuery');
}

/**
 * EpisXspaceRateTicket via Lazada `POST /logistics/epis/xspace/rate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function episXspaceRateTicket(params: OwnLogisticsEpisXspaceRateTicketRequest, config: LazadaConfig): Promise<OwnLogisticsEpisXspaceRateTicketResponse> {
  return LazadaHelper.callLazadaApi<OwnLogisticsEpisXspaceRateTicketResponse>('/logistics/epis/xspace/rate', 'POST', params as unknown as Record<string, unknown>, config, 'episXspaceRateTicket');
}
