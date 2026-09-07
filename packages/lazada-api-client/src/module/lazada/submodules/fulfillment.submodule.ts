import { LazadaConfig } from '../dto/request/config.request';
import {
  confirmDeliveryForDBS,
  deliverDigital,
  failedDeliveryForDBS,
  getShipmentProvider,
  pack,
  packageStatusUpdateForDBS,
  printAWB,
  readyToShip,
  recreatePackage,
} from '../api/fulfillment.api';
import {
  FulfillmentConfirmDeliveryForDBSRequest,
  FulfillmentDeliverDigitalRequest,
  FulfillmentFailedDeliveryForDBSRequest,
  FulfillmentGetShipmentProviderRequest,
  FulfillmentPackRequest,
  FulfillmentPackageStatusUpdateForDBSRequest,
  FulfillmentPrintAWBRequest,
  FulfillmentReadyToShipRequest,
  FulfillmentRecreatePackageRequest,
} from '../dto/request/fulfillment.request';
import {
  FulfillmentConfirmDeliveryForDBSResponse,
  FulfillmentDeliverDigitalResponse,
  FulfillmentFailedDeliveryForDBSResponse,
  FulfillmentGetShipmentProviderResponse,
  FulfillmentPackResponse,
  FulfillmentPackageStatusUpdateForDBSResponse,
  FulfillmentPrintAWBResponse,
  FulfillmentReadyToShipResponse,
  FulfillmentRecreatePackageResponse,
} from '../dto/response/fulfillment.response';

/**
 * Lazada `fulfillment-api` API namespace.
 *
 * Access via `lazada.fulfillment.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFulfillment {
  constructor(private config: LazadaConfig) {}

  async getShipmentProvider(params: FulfillmentGetShipmentProviderRequest): Promise<FulfillmentGetShipmentProviderResponse> {
    return await getShipmentProvider(params, this.config);
  }

  async deliverDigital(params: FulfillmentDeliverDigitalRequest): Promise<FulfillmentDeliverDigitalResponse> {
    return await deliverDigital(params, this.config);
  }

  async pack(params: FulfillmentPackRequest): Promise<FulfillmentPackResponse> {
    return await pack(params, this.config);
  }

  async printAWB(params: FulfillmentPrintAWBRequest): Promise<FulfillmentPrintAWBResponse> {
    return await printAWB(params, this.config);
  }

  async recreatePackage(params: FulfillmentRecreatePackageRequest): Promise<FulfillmentRecreatePackageResponse> {
    return await recreatePackage(params, this.config);
  }

  async readyToShip(params: FulfillmentReadyToShipRequest): Promise<FulfillmentReadyToShipResponse> {
    return await readyToShip(params, this.config);
  }

  async confirmDeliveryForDBS(params: FulfillmentConfirmDeliveryForDBSRequest): Promise<FulfillmentConfirmDeliveryForDBSResponse> {
    return await confirmDeliveryForDBS(params, this.config);
  }

  async failedDeliveryForDBS(params: FulfillmentFailedDeliveryForDBSRequest): Promise<FulfillmentFailedDeliveryForDBSResponse> {
    return await failedDeliveryForDBS(params, this.config);
  }

  async packageStatusUpdateForDBS(params: FulfillmentPackageStatusUpdateForDBSRequest): Promise<FulfillmentPackageStatusUpdateForDBSResponse> {
    return await packageStatusUpdateForDBS(params, this.config);
  }
}
