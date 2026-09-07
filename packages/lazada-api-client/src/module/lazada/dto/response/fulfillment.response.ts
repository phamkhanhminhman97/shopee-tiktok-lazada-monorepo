export interface FulfillmentGetShipmentProviderResultDataShipmentProviders {
  name?: string;
  provider_code?: string;
}

export interface FulfillmentGetShipmentProviderResultData {
  platform_default: number;
  shipment_providers: FulfillmentGetShipmentProviderResultDataShipmentProviders[];
  shipping_allocate_type?: string;
}

export interface FulfillmentGetShipmentProviderResult {
  data: FulfillmentGetShipmentProviderResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentGetShipmentProvider {
  result: FulfillmentGetShipmentProviderResult;
}

export type FulfillmentGetShipmentProviderResponse = FulfillmentGetShipmentProvider;

export interface FulfillmentDeliverDigitalResultDataOrdersOrderItemList {
  msg: string;
  order_item_id: number;
  item_err_code: string;
  retry: boolean;
}

export interface FulfillmentDeliverDigitalResultDataOrders {
  order_item_list: FulfillmentDeliverDigitalResultDataOrdersOrderItemList[];
  order_id: number;
}

export interface FulfillmentDeliverDigitalResultData {
  orders: FulfillmentDeliverDigitalResultDataOrders[];
}

export interface FulfillmentDeliverDigitalResult {
  data: FulfillmentDeliverDigitalResultData;
  success: boolean;
  errorCode?: string;
  errorMsg?: string;
}

export interface FulfillmentDeliverDigital {
  result: FulfillmentDeliverDigitalResult;
}

export type FulfillmentDeliverDigitalResponse = FulfillmentDeliverDigital;

export interface FulfillmentPackResultDataPackOrderListOrderItemList {
  order_item_id: number;
  msg: string;
  item_err_code: string;
  tracking_number: string;
  shipment_provider: string;
  package_id: string;
  retry: boolean;
}

export interface FulfillmentPackResultDataPackOrderList {
  order_item_list: FulfillmentPackResultDataPackOrderListOrderItemList[];
  order_id: number;
}

export interface FulfillmentPackResultData {
  pack_order_list: FulfillmentPackResultDataPackOrderList[];
}

export interface FulfillmentPackResult {
  data: FulfillmentPackResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentPack {
  result: FulfillmentPackResult;
}

export type FulfillmentPackResponse = FulfillmentPack;

export interface FulfillmentPrintAWBResultData {
  file: string;
  doc_type: string;
  pdf_url?: string;
}

export interface FulfillmentPrintAWBResult {
  data: FulfillmentPrintAWBResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentPrintAWB {
  result: FulfillmentPrintAWBResult;
}

export type FulfillmentPrintAWBResponse = FulfillmentPrintAWB;

export interface FulfillmentRecreatePackageResultDataPackages {
  msg: string;
  item_err_code: string;
  package_id: string;
  retry?: boolean;
}

export interface FulfillmentRecreatePackageResultData {
  packages: FulfillmentRecreatePackageResultDataPackages[];
}

export interface FulfillmentRecreatePackageResult {
  data: FulfillmentRecreatePackageResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentRecreatePackage {
  result: FulfillmentRecreatePackageResult;
}

export type FulfillmentRecreatePackageResponse = FulfillmentRecreatePackage;

export interface FulfillmentReadyToShipResultDataPackages {
  msg: string;
  item_err_code: string;
  package_id: string;
  retry?: string;
}

export interface FulfillmentReadyToShipResultData {
  packages: FulfillmentReadyToShipResultDataPackages[];
}

export interface FulfillmentReadyToShipResult {
  data: FulfillmentReadyToShipResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentReadyToShip {
  result: FulfillmentReadyToShipResult;
}

export type FulfillmentReadyToShipResponse = FulfillmentReadyToShip;

export interface FulfillmentConfirmDeliveryForDBSResultDataPackages {
  msg: string;
  item_err_code: string;
  package_id: string;
  retry?: boolean;
}

export interface FulfillmentConfirmDeliveryForDBSResultData {
  packages: FulfillmentConfirmDeliveryForDBSResultDataPackages[];
}

export interface FulfillmentConfirmDeliveryForDBSResult {
  data: FulfillmentConfirmDeliveryForDBSResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentConfirmDeliveryForDBS {
  result: FulfillmentConfirmDeliveryForDBSResult;
}

export type FulfillmentConfirmDeliveryForDBSResponse = FulfillmentConfirmDeliveryForDBS;

export interface FulfillmentFailedDeliveryForDBSResultDataPackages {
  msg: string;
  item_err_code: string;
  package_id: string;
  retry?: boolean;
}

export interface FulfillmentFailedDeliveryForDBSResultData {
  packages: FulfillmentFailedDeliveryForDBSResultDataPackages[];
}

export interface FulfillmentFailedDeliveryForDBSResult {
  data: FulfillmentFailedDeliveryForDBSResultData;
  success: boolean;
  error_code: string;
  error_msg: string;
}

export interface FulfillmentFailedDeliveryForDBS {
  result: FulfillmentFailedDeliveryForDBSResult;
}

export type FulfillmentFailedDeliveryForDBSResponse = FulfillmentFailedDeliveryForDBS;

export interface FulfillmentPackageStatusUpdateForDBSModule {
  result?: boolean;
}

export interface FulfillmentPackageStatusUpdateForDBSErrorCode {
  displayMessage?: string;
}

export interface FulfillmentPackageStatusUpdateForDBS {
  success?: boolean;
  module?: FulfillmentPackageStatusUpdateForDBSModule;
  errorCode?: FulfillmentPackageStatusUpdateForDBSErrorCode;
}

export type FulfillmentPackageStatusUpdateForDBSResponse = FulfillmentPackageStatusUpdateForDBS;
