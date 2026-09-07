export interface OwnLogisticsGetShippingFeeRequest {
  externalSellerId: string;
  platformName: string;
  trackingNumber: string;
}

export interface OwnLogisticsEpisPackagePrintAwbRequest {
  packageCode: string;
  type: string;
}

export interface OwnLogisticsEpisGetDeliveryOptionsRequest {
  fromLocation?: Record<string, unknown>;
  toLocation?: Record<string, unknown>;
  shipper: Record<string, unknown>;
  dimWeight: Record<string, unknown>;
  origin: Record<string, unknown>;
  destination: Record<string, unknown>;
  payment: Record<string, unknown>;
  packageType?: string;
  deliveryOption?: string;
  externalOrderId?: string;
}

export interface OwnLogisticsCreateCustomerAccountRelationshipForExternalRequest {
  externalSellerId: string;
  platformName: string;
  customerId: string;
}

export interface OwnLogisticsCreateCustomerAccountRelationshipByOTPRequest {
  externalSellerId: string;
  platformName: string;
  otp: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseAddress {
  id: string;
  details: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseConfigurationServices {
  serviceName: string;
  enable: boolean;
  properties?: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseConfiguration {
  deliveryNote?: string;
  services?: OwnLogisticsCreateOrUpdateCustomerWarehouseConfigurationServices[];
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseDropshippingInfo {
  originPartnerName?: string;
  originPlatformName?: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseRequest {
  externalSellerId: string;
  platformName: string;
  warehouseCode: string;
  warehouseName: string;
  contactName: string;
  phone: string;
  email?: string;
  type: string;
  address: OwnLogisticsCreateOrUpdateCustomerWarehouseAddress;
  solutionCodes: string[];
  configuration?: OwnLogisticsCreateOrUpdateCustomerWarehouseConfiguration;
  dropshippingInfo?: OwnLogisticsCreateOrUpdateCustomerWarehouseDropshippingInfo;
}

export interface OwnLogisticsEstimateShippingFeeChargeFactor {
  packageType?: string;
  deliveryOption?: string;
  fulfillmentMethod?: string;
  paymentType: string;
  weight: string;
  insuranceAmount?: string;
}

export interface OwnLogisticsEstimateShippingFeeFromLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEstimateShippingFeeToLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEstimateShippingFeeRequest {
  externalSellerId: string;
  platformName: string;
  fromAddressId?: string;
  toAddressId?: string;
  chargeFactor: OwnLogisticsEstimateShippingFeeChargeFactor;
  fromLocation?: OwnLogisticsEstimateShippingFeeFromLocation;
  toLocation?: OwnLogisticsEstimateShippingFeeToLocation;
  packageCode?: string;
}

export interface OwnLogisticsEpisUploadAwbFulfillmentRequest {
  logisticsOrderId: string;
  trackingNumber?: string;
  waybill?: string[];
}

export interface OwnLogisticsEpisPackageCreationShipper {
  externalSellerId: string;
  platformName?: string;
  externalWarehouseCode?: string;
  warehouseName?: string;
}

export interface OwnLogisticsEpisPackageCreationDimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageCreationOriginAddress {
  details: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageCreationOriginGeoLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEpisPackageCreationOrigin {
  address: OwnLogisticsEpisPackageCreationOriginAddress;
  phone: string;
  geoLocation?: OwnLogisticsEpisPackageCreationOriginGeoLocation;
  name: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageCreationDestinationAddress {
  details: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageCreationDestinationGeoLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEpisPackageCreationDestination {
  address: OwnLogisticsEpisPackageCreationDestinationAddress;
  phone: string;
  geoLocation?: OwnLogisticsEpisPackageCreationDestinationGeoLocation;
  name: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageCreationPayment {
  totalAmount: string;
  insuranceAmount?: string;
  currency: string;
  paymentType: string;
  paidEstimatedShippingFeeAmount?: string;
}

export interface OwnLogisticsEpisPackageCreationItemsDimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageCreationItems {
  unitPrice: string;
  quantity: number;
  dimWeight?: OwnLogisticsEpisPackageCreationItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
}

export interface OwnLogisticsEpisPackageCreationOptions {
  directReturnToMerchant?: boolean;
  forwardPackageCode?: string;
  openBox?: boolean;
  deliveryNote?: string;
  vasPartialDeliveryOption?: boolean;
  vasFdStorageOption?: boolean;
  orderSource?: string;
  vasFdCallOption?: boolean;
  vasExchangeOrderOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  parcelCategories?: string[];
  parcelDescription?: string;
  scheduledPickupTime?: number;
}

export interface OwnLogisticsEpisPackageCreationExchangeOrderItemsDimWeight {
  length: string;
  width: string;
  height: string;
  weight: string;
}

export interface OwnLogisticsEpisPackageCreationExchangeOrderItems {
  unitPrice: string;
  quantity: string;
  dimWeight?: OwnLogisticsEpisPackageCreationExchangeOrderItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
}

export interface OwnLogisticsEpisPackageCreationExchangeOrder {
  insuranceAmount?: string;
  items?: OwnLogisticsEpisPackageCreationExchangeOrderItems[];
}

export interface OwnLogisticsEpisPackageCreationPlanInfo {
  trackingNumber?: string;
}

export interface OwnLogisticsEpisPackageCreationMultiParcel {
  uniqueKey: string;
  sequenceNumber: string;
  totalParcel: number;
  sameTimeDelivery?: string;
}

export interface OwnLogisticsEpisPackageCreationRequest {
  dangerousGood: boolean;
  shipper: OwnLogisticsEpisPackageCreationShipper;
  dimWeight: OwnLogisticsEpisPackageCreationDimWeight;
  origin: OwnLogisticsEpisPackageCreationOrigin;
  destination: OwnLogisticsEpisPackageCreationDestination;
  payment: OwnLogisticsEpisPackageCreationPayment;
  externalOrderId: string;
  platformOrderCreationTime?: number;
  packageType?: string;
  deliveryOption?: string;
  items: OwnLogisticsEpisPackageCreationItems[];
  options?: OwnLogisticsEpisPackageCreationOptions;
  exchangeOrder?: OwnLogisticsEpisPackageCreationExchangeOrder;
  planInfo?: OwnLogisticsEpisPackageCreationPlanInfo;
  multiParcel?: OwnLogisticsEpisPackageCreationMultiParcel;
}

export interface OwnLogisticsEpisPackageCancellationRequest {
  reason: string;
  packageCode: string;
}

export interface OwnLogisticsEpisPackageCancellationV3Request {
  reason: string;
  packageCode: string;
  logisticsOrderId: string;
}

export interface OwnLogisticsEpisPackageConsignmentMultiParcel {
  uniqueKey: string;
  sequenceNumber: number;
  totalParcel: number;
  sameTimeDelivery?: boolean;
}

export interface OwnLogisticsEpisPackageConsignmentShipper {
  externalSellerId: string;
  platformName?: string;
  externalWarehouseCode?: string;
  warehouseName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageConsignmentOriginAddress {
  details: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentOriginGeoLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEpisPackageConsignmentOrigin {
  address: OwnLogisticsEpisPackageConsignmentOriginAddress;
  phone: string;
  geoLocation?: OwnLogisticsEpisPackageConsignmentOriginGeoLocation;
  name: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDestinationAddress {
  details: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDestinationGeoLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEpisPackageConsignmentDestination {
  address: OwnLogisticsEpisPackageConsignmentDestinationAddress;
  phone: string;
  geoLocation?: OwnLogisticsEpisPackageConsignmentDestinationGeoLocation;
  name: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageConsignmentPayment {
  totalAmount: string;
  insuranceAmount?: string;
  currency: string;
  paymentType: string;
  paidEstimatedShippingFeeAmount?: string;
}

export interface OwnLogisticsEpisPackageConsignmentItemsDimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageConsignmentItems {
  unitPrice: string;
  quantity: number;
  dimWeight?: OwnLogisticsEpisPackageConsignmentItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
}

export interface OwnLogisticsEpisPackageConsignmentOptions {
  directReturnToMerchant?: boolean;
  forwardPackageCode?: string;
  openBox?: boolean;
  deliveryNote?: string;
  vasPartialDeliveryOption?: boolean;
  vasFdStorageOption?: boolean;
  orderSource?: string;
  partnerOrderId?: string;
  vasFdCallOption?: boolean;
  vasExchangeOrderOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  parcelCategories?: string[];
  parcelDescription?: string;
  scheduledPickupTime?: number;
}

export interface OwnLogisticsEpisPackageConsignmentExchangeOrderItemsDimWeight {
  length: string;
  width: string;
  height: string;
  weight: string;
}

export interface OwnLogisticsEpisPackageConsignmentExchangeOrderItems {
  unitPrice: string;
  quantity: number;
  dimWeight?: OwnLogisticsEpisPackageConsignmentExchangeOrderItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
}

export interface OwnLogisticsEpisPackageConsignmentExchangeOrder {
  insuranceAmount?: string;
  items?: OwnLogisticsEpisPackageConsignmentExchangeOrderItems[];
}

export interface OwnLogisticsEpisPackageConsignmentPlanInfo {
  trackingNumber?: string;
}

export interface OwnLogisticsEpisPackageConsignmentRequest {
  multiParcel?: OwnLogisticsEpisPackageConsignmentMultiParcel;
  dangerousGood: boolean;
  shipper: OwnLogisticsEpisPackageConsignmentShipper;
  dimWeight: OwnLogisticsEpisPackageConsignmentDimWeight;
  origin: OwnLogisticsEpisPackageConsignmentOrigin;
  destination: OwnLogisticsEpisPackageConsignmentDestination;
  payment: OwnLogisticsEpisPackageConsignmentPayment;
  externalOrderId: string;
  platformOrderCreationTime?: number;
  packageType?: string;
  deliveryOption?: string;
  items: OwnLogisticsEpisPackageConsignmentItems[];
  options?: OwnLogisticsEpisPackageConsignmentOptions;
  exchangeOrder?: OwnLogisticsEpisPackageConsignmentExchangeOrder;
  planInfo?: OwnLogisticsEpisPackageConsignmentPlanInfo;
}

export interface OwnLogisticsEpisPackageConsignmentV2ExchangeOrderItemsDimWeight {
  length: string;
  width: string;
  height: string;
  weight: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2ExchangeOrderItems {
  unitPrice: string;
  quantity: number;
  dimWeight?: OwnLogisticsEpisPackageConsignmentV2ExchangeOrderItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
  fulfillmentSkuId?: string;
  forwardTrackingNumber?: string;
  forwardLogisticsOrderId?: string;
  forwardExternalOrderId?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2ExchangeOrder {
  insuranceAmount?: string;
  items?: OwnLogisticsEpisPackageConsignmentV2ExchangeOrderItems[];
  returnUsingRms?: boolean;
}

export interface OwnLogisticsEpisPackageConsignmentV2PlanInfo {
  trackingNumber?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2FulfillmentInfo {
  fulfillmentFinishTime?: string;
  outOrderCreationTime?: string;
  isPlatformNominatedFleet?: boolean;
  remark?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Shipper {
  externalSellerId: string;
  platformName?: string;
  externalWarehouseCode?: string;
  warehouseName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2OriginAddress {
  details: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2OriginGeoLocation {
  latitude: string;
  longitude: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Origin {
  address: OwnLogisticsEpisPackageConsignmentV2OriginAddress;
  phone: string;
  geoLocation?: OwnLogisticsEpisPackageConsignmentV2OriginGeoLocation;
  name: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DestinationAddress {
  details?: string;
  id?: string;
  type?: string;
  city?: string;
  postcode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DestinationGeoLocation {
  latitude?: string;
  longitude?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Destination {
  address?: OwnLogisticsEpisPackageConsignmentV2DestinationAddress;
  phone?: string;
  geoLocation?: OwnLogisticsEpisPackageConsignmentV2DestinationGeoLocation;
  name?: string;
  email?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Payment {
  totalAmount: string;
  insuranceAmount?: string;
  currency: string;
  paymentType: string;
  paidEstimatedShippingFeeAmount?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2ItemsDimWeight {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Items {
  unitPrice: string;
  quantity: number;
  dimWeight?: OwnLogisticsEpisPackageConsignmentV2ItemsDimWeight;
  name: string;
  id?: string;
  sku?: string;
  category?: string;
  paidPrice: string;
  fulfillmentSkuId: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Options {
  openBox?: boolean;
  deliveryNote?: string;
  vasPartialDeliveryOption?: boolean;
  vasFdStorageOption?: boolean;
  orderSource?: string;
  partnerOrderId?: string;
  vasFdCallOption?: boolean;
  vasExchangeOrderOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  parcelCategories?: string[];
  parcelDescription?: string;
  scheduledPickupTime?: number;
  directReturnToMerchant?: boolean;
  forwardPackageCode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Request {
  exchangeOrder?: OwnLogisticsEpisPackageConsignmentV2ExchangeOrder;
  planInfo?: OwnLogisticsEpisPackageConsignmentV2PlanInfo;
  packageServices: string[];
  fulfillmentInfo?: OwnLogisticsEpisPackageConsignmentV2FulfillmentInfo;
  dangerousGood: boolean;
  shipper: OwnLogisticsEpisPackageConsignmentV2Shipper;
  dimWeight: OwnLogisticsEpisPackageConsignmentV2DimWeight;
  origin: OwnLogisticsEpisPackageConsignmentV2Origin;
  destination?: OwnLogisticsEpisPackageConsignmentV2Destination;
  payment: OwnLogisticsEpisPackageConsignmentV2Payment;
  externalOrderId: string;
  platformOrderCreationTime?: number;
  packageType?: string;
  deliveryOption?: string;
  items: OwnLogisticsEpisPackageConsignmentV2Items[];
  options?: OwnLogisticsEpisPackageConsignmentV2Options;
}

export interface OwnLogisticsEpisPackageReAttemptRequest {
  packageCode: string;
  reAttemptDateTime?: number;
  sellerNote?: string;
  feedbackType: string;
}

export interface OwnLogisticsEpisPackageReadyToBeShippedRequest {
  trackingNumber: string;
  paidEstimatedShippingFee?: string;
}

export interface OwnLogisticsEpisPackageInfoUpdateReceiverAddress {
  id?: string;
  details?: string;
  type?: string;
}

export interface OwnLogisticsEpisPackageInfoUpdateRequest {
  packageCode: string;
  receiverName: string;
  receiverPhone: string;
  totalAmount?: string;
  insuranceAmount?: string;
  deliveryNote?: string;
  receiverAddress?: OwnLogisticsEpisPackageInfoUpdateReceiverAddress;
}

export interface OwnLogisticsEpisXspaceCreateRequest {
  caseTemplateId?: number;
  categoryId?: number;
  subject: string;
  description: string;
  sellerName?: string;
  sellerEmail?: string;
  sellerPhoneNo?: string;
  buyerName?: string;
  buyerEmail?: string;
  trackingNumber?: string;
  orderId?: string;
  casePriority?: string;
  attachments?: string;
  attributes?: string;
  platformName?: string;
  externalSellerId?: string;
}

export interface OwnLogisticsEpisXspaceGetDetailRequest {
  caseId?: number;
  platformName?: string;
  externalSellerId?: string;
}

export interface OwnLogisticsEpisXspaceQueryRequest {
  caseIds?: string[];
  trackingNumbers?: string[];
  createTimeFrom?: string;
  createTimeTo?: string;
  pageSize?: string;
  pageNo?: string;
  sortBy?: string;
  sortOrder?: string;
  statuses?: string[];
  platformName?: string;
  externalSellerId?: string;
}

export interface OwnLogisticsEpisXspaceRateTicketRequest {
  platformName: string;
  externalSellerId: string;
  caseId: number;
  ratingStar: number;
  ratingReasons?: string[];
  ratingRemark?: string;
}
