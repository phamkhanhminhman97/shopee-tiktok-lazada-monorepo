import { LazadaConfig } from '../dto/request/config.request';
import {
  createCustomerAccountRelationshipByOTP,
  createCustomerAccountRelationshipForExternal,
  createOrUpdateCustomerWarehouse,
  episGetDeliveryOptions,
  episPackageCancellation,
  episPackageCancellationV3,
  episPackageConsignment,
  episPackageConsignmentV2,
  episPackageCreation,
  episPackageInfoUpdate,
  episPackagePrintAwb,
  episPackageReAttempt,
  episPackageReadyToBeShipped,
  episUploadAwbFulfillment,
  episXspaceCreate,
  episXspaceGetDetail,
  episXspaceQuery,
  episXspaceRateTicket,
  estimateShippingFee,
  getShippingFee,
} from '../api/lazada-own-logistics.api';
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
 * Lazada `lazada-logistics-api` API namespace.
 *
 * Access via `lazada.ownLogistics.<method>()` on a `LazadaModule` instance.
 */
export class LazadaOwnLogistics {
  constructor(private config: LazadaConfig) {}

  async getShippingFee(params: OwnLogisticsGetShippingFeeRequest): Promise<OwnLogisticsGetShippingFeeResponse> {
    return await getShippingFee(params, this.config);
  }

  async episPackagePrintAwb(params: OwnLogisticsEpisPackagePrintAwbRequest): Promise<OwnLogisticsEpisPackagePrintAwbResponse> {
    return await episPackagePrintAwb(params, this.config);
  }

  async episGetDeliveryOptions(params: OwnLogisticsEpisGetDeliveryOptionsRequest): Promise<OwnLogisticsEpisGetDeliveryOptionsResponse> {
    return await episGetDeliveryOptions(params, this.config);
  }

  async createCustomerAccountRelationshipForExternal(params: OwnLogisticsCreateCustomerAccountRelationshipForExternalRequest): Promise<OwnLogisticsCreateCustomerAccountRelationshipForExternalResponse> {
    return await createCustomerAccountRelationshipForExternal(params, this.config);
  }

  async createCustomerAccountRelationshipByOTP(params: OwnLogisticsCreateCustomerAccountRelationshipByOTPRequest): Promise<OwnLogisticsCreateCustomerAccountRelationshipByOTPResponse> {
    return await createCustomerAccountRelationshipByOTP(params, this.config);
  }

  async createOrUpdateCustomerWarehouse(params: OwnLogisticsCreateOrUpdateCustomerWarehouseRequest): Promise<OwnLogisticsCreateOrUpdateCustomerWarehouseResponse> {
    return await createOrUpdateCustomerWarehouse(params, this.config);
  }

  async estimateShippingFee(params: OwnLogisticsEstimateShippingFeeRequest): Promise<OwnLogisticsEstimateShippingFeeResponse> {
    return await estimateShippingFee(params, this.config);
  }

  async episUploadAwbFulfillment(params: OwnLogisticsEpisUploadAwbFulfillmentRequest): Promise<OwnLogisticsEpisUploadAwbFulfillmentResponse> {
    return await episUploadAwbFulfillment(params, this.config);
  }

  async episPackageCreation(params: OwnLogisticsEpisPackageCreationRequest): Promise<OwnLogisticsEpisPackageCreationResponse> {
    return await episPackageCreation(params, this.config);
  }

  async episPackageCancellation(params: OwnLogisticsEpisPackageCancellationRequest): Promise<OwnLogisticsEpisPackageCancellationResponse> {
    return await episPackageCancellation(params, this.config);
  }

  async episPackageCancellationV3(params: OwnLogisticsEpisPackageCancellationV3Request): Promise<OwnLogisticsEpisPackageCancellationV3Response> {
    return await episPackageCancellationV3(params, this.config);
  }

  async episPackageConsignment(params: OwnLogisticsEpisPackageConsignmentRequest): Promise<OwnLogisticsEpisPackageConsignmentResponse> {
    return await episPackageConsignment(params, this.config);
  }

  async episPackageConsignmentV2(params: OwnLogisticsEpisPackageConsignmentV2Request): Promise<OwnLogisticsEpisPackageConsignmentV2Response> {
    return await episPackageConsignmentV2(params, this.config);
  }

  async episPackageReAttempt(params: OwnLogisticsEpisPackageReAttemptRequest): Promise<OwnLogisticsEpisPackageReAttemptResponse> {
    return await episPackageReAttempt(params, this.config);
  }

  async episPackageReadyToBeShipped(params: OwnLogisticsEpisPackageReadyToBeShippedRequest): Promise<OwnLogisticsEpisPackageReadyToBeShippedResponse> {
    return await episPackageReadyToBeShipped(params, this.config);
  }

  async episPackageInfoUpdate(params: OwnLogisticsEpisPackageInfoUpdateRequest): Promise<OwnLogisticsEpisPackageInfoUpdateResponse> {
    return await episPackageInfoUpdate(params, this.config);
  }

  async episXspaceCreate(params: OwnLogisticsEpisXspaceCreateRequest): Promise<OwnLogisticsEpisXspaceCreateResponse> {
    return await episXspaceCreate(params, this.config);
  }

  async episXspaceGetDetail(params: OwnLogisticsEpisXspaceGetDetailRequest): Promise<OwnLogisticsEpisXspaceGetDetailResponse> {
    return await episXspaceGetDetail(params, this.config);
  }

  async episXspaceQuery(params: OwnLogisticsEpisXspaceQueryRequest): Promise<OwnLogisticsEpisXspaceQueryResponse> {
    return await episXspaceQuery(params, this.config);
  }

  async episXspaceRateTicket(params: OwnLogisticsEpisXspaceRateTicketRequest): Promise<OwnLogisticsEpisXspaceRateTicketResponse> {
    return await episXspaceRateTicket(params, this.config);
  }
}
