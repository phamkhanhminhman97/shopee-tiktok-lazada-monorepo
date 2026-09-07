export interface FulfillmentGetShipmentProviderRequest {
  getShipmentProvidersReq: Record<string, unknown>;
}

export interface FulfillmentDeliverDigitalDigitalDeliveryReqOrders {
  order_item_list: number[];
  order_id: number;
}

export interface FulfillmentDeliverDigitalDigitalDeliveryReq {
  orders: FulfillmentDeliverDigitalDigitalDeliveryReqOrders[];
}

export interface FulfillmentDeliverDigitalRequest {
  digitalDeliveryReq: FulfillmentDeliverDigitalDigitalDeliveryReq;
}

export interface FulfillmentPackPackReqPackOrderList {
  order_item_list: number[];
  order_id: number;
}

export interface FulfillmentPackPackReq {
  pack_order_list: FulfillmentPackPackReqPackOrderList[];
  delivery_type: string;
  shipment_provider_code?: string;
  shipping_allocate_type: string;
}

export interface FulfillmentPackRequest {
  packReq: FulfillmentPackPackReq;
}

export interface FulfillmentPrintAWBGetDocumentReqPackages {
  package_id: string;
}

export interface FulfillmentPrintAWBGetDocumentReq {
  doc_type: string;
  packages: FulfillmentPrintAWBGetDocumentReqPackages[];
  print_item_list?: boolean;
}

export interface FulfillmentPrintAWBRequest {
  getDocumentReq: FulfillmentPrintAWBGetDocumentReq;
}

export interface FulfillmentRecreatePackageRePackReqPackages {
  package_id: string;
}

export interface FulfillmentRecreatePackageRePackReq {
  packages: FulfillmentRecreatePackageRePackReqPackages[];
}

export interface FulfillmentRecreatePackageRequest {
  rePackReq: FulfillmentRecreatePackageRePackReq;
}

export interface FulfillmentReadyToShipReadyToShipReqPackages {
  package_id: string;
}

export interface FulfillmentReadyToShipReadyToShipReq {
  packages: FulfillmentReadyToShipReadyToShipReqPackages[];
}

export interface FulfillmentReadyToShipRequest {
  readyToShipReq: FulfillmentReadyToShipReadyToShipReq;
}

export interface FulfillmentConfirmDeliveryForDBSDbsDeliveryReqPackages {
  package_id: string;
}

export interface FulfillmentConfirmDeliveryForDBSDbsDeliveryReq {
  packages: FulfillmentConfirmDeliveryForDBSDbsDeliveryReqPackages[];
}

export interface FulfillmentConfirmDeliveryForDBSRequest {
  dbsDeliveryReq: FulfillmentConfirmDeliveryForDBSDbsDeliveryReq;
}

export interface FulfillmentFailedDeliveryForDBSDbsFailedDeliveryReqPackages {
  package_id: string;
}

export interface FulfillmentFailedDeliveryForDBSDbsFailedDeliveryReq {
  packages: FulfillmentFailedDeliveryForDBSDbsFailedDeliveryReqPackages[];
}

export interface FulfillmentFailedDeliveryForDBSRequest {
  dbsFailedDeliveryReq: FulfillmentFailedDeliveryForDBSDbsFailedDeliveryReq;
}

export interface FulfillmentPackageStatusUpdateForDBSTrackInfoLatestStatus {
  status: string;
  subStatus: string;
  subStatusDesc?: string;
}

export interface FulfillmentPackageStatusUpdateForDBSTrackInfoLatestEvent {
  eventTime: number;
  description?: string;
  location?: string;
  stage?: string;
}

export interface FulfillmentPackageStatusUpdateForDBSTrackInfo {
  latestStatus: FulfillmentPackageStatusUpdateForDBSTrackInfoLatestStatus;
  latestEvent: FulfillmentPackageStatusUpdateForDBSTrackInfoLatestEvent;
}

export interface FulfillmentPackageStatusUpdateForDBSRequest {
  trackingNumber: string;
  source: string;
  carrierCode?: string;
  tag: string;
  trackInfo: FulfillmentPackageStatusUpdateForDBSTrackInfo;
}
