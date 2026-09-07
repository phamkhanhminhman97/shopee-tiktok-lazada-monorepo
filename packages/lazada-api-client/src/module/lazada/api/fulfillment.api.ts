import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * GetShipmentProvider via Lazada `GET /order/shipment/providers/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getShipmentProvider(params: FulfillmentGetShipmentProviderRequest, config: LazadaConfig): Promise<FulfillmentGetShipmentProviderResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentGetShipmentProviderResponse>('/order/shipment/providers/get', 'GET', params as unknown as Record<string, unknown>, config, 'getShipmentProvider');
}

/**
 * DeliverDigital via Lazada `POST /order/digital/delivered`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deliverDigital(params: FulfillmentDeliverDigitalRequest, config: LazadaConfig): Promise<FulfillmentDeliverDigitalResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentDeliverDigitalResponse>('/order/digital/delivered', 'POST', params as unknown as Record<string, unknown>, config, 'deliverDigital');
}

/**
 * Pack via Lazada `POST /order/fulfill/pack`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function pack(params: FulfillmentPackRequest, config: LazadaConfig): Promise<FulfillmentPackResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentPackResponse>('/order/fulfill/pack', 'POST', params as unknown as Record<string, unknown>, config, 'pack');
}

/**
 * PrintAWB via Lazada `POST /order/package/document/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function printAWB(params: FulfillmentPrintAWBRequest, config: LazadaConfig): Promise<FulfillmentPrintAWBResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentPrintAWBResponse>('/order/package/document/get', 'POST', params as unknown as Record<string, unknown>, config, 'printAWB');
}

/**
 * RecreatePackage via Lazada `POST /order/package/repack`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function recreatePackage(params: FulfillmentRecreatePackageRequest, config: LazadaConfig): Promise<FulfillmentRecreatePackageResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentRecreatePackageResponse>('/order/package/repack', 'POST', params as unknown as Record<string, unknown>, config, 'recreatePackage');
}

/**
 * ReadyToShip via Lazada `POST /order/package/rts`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function readyToShip(params: FulfillmentReadyToShipRequest, config: LazadaConfig): Promise<FulfillmentReadyToShipResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentReadyToShipResponse>('/order/package/rts', 'POST', params as unknown as Record<string, unknown>, config, 'readyToShip');
}

/**
 * ConfirmDeliveryForDBS via Lazada `POST /order/package/sof/delivered`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function confirmDeliveryForDBS(params: FulfillmentConfirmDeliveryForDBSRequest, config: LazadaConfig): Promise<FulfillmentConfirmDeliveryForDBSResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentConfirmDeliveryForDBSResponse>('/order/package/sof/delivered', 'POST', params as unknown as Record<string, unknown>, config, 'confirmDeliveryForDBS');
}

/**
 * FailedDeliveryForDBS via Lazada `POST /order/package/sof/failed_delivery`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function failedDeliveryForDBS(params: FulfillmentFailedDeliveryForDBSRequest, config: LazadaConfig): Promise<FulfillmentFailedDeliveryForDBSResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentFailedDeliveryForDBSResponse>('/order/package/sof/failed_delivery', 'POST', params as unknown as Record<string, unknown>, config, 'failedDeliveryForDBS');
}

/**
 * PackageStatusUpdateForDBS via Lazada `POST /order/package/sof/status/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function packageStatusUpdateForDBS(params: FulfillmentPackageStatusUpdateForDBSRequest, config: LazadaConfig): Promise<FulfillmentPackageStatusUpdateForDBSResponse> {
  return LazadaHelper.callLazadaApi<FulfillmentPackageStatusUpdateForDBSResponse>('/order/package/sof/status/update', 'POST', params as unknown as Record<string, unknown>, config, 'packageStatusUpdateForDBS');
}
