export interface OwnLogisticsGetShippingFeeData {
  estimatedShippingFee?: string;
  actualShippingFee?: string;
  currency?: string;
  originEstimatedShippingFee?: string;
}

export interface OwnLogisticsGetShippingFeeErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsGetShippingFee {
  retryable: boolean;
  traceId: string;
  data: OwnLogisticsGetShippingFeeData;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsGetShippingFeeErrors[];
}

export type OwnLogisticsGetShippingFeeResponse = OwnLogisticsGetShippingFee;

export interface OwnLogisticsEpisPackagePrintAwbData {
  url?: string;
}

export interface OwnLogisticsEpisPackagePrintAwbErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackagePrintAwb {
  retryable: boolean;
  traceId: string;
  data: OwnLogisticsEpisPackagePrintAwbData;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackagePrintAwbErrors[];
}

export type OwnLogisticsEpisPackagePrintAwbResponse = OwnLogisticsEpisPackagePrintAwb;

export interface OwnLogisticsEpisGetDeliveryOptionsData {
  deliveryOption?: string;
  firstMileDeliveryType?: string;
  pickupTargetCutoffTime?: string;
  firstMileShippingProvider?: string;
  firstMileShippingProviderSlug?: string;
  lastMileShippingProvider?: string;
  lastMileShippingProviderSlug?: string;
}

export interface OwnLogisticsEpisGetDeliveryOptionsErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisGetDeliveryOptions {
  data?: OwnLogisticsEpisGetDeliveryOptionsData[];
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisGetDeliveryOptionsErrors[];
}

export type OwnLogisticsEpisGetDeliveryOptionsResponse = OwnLogisticsEpisGetDeliveryOptions;

export interface OwnLogisticsCreateCustomerAccountRelationshipForExternalErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsCreateCustomerAccountRelationshipForExternal {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsCreateCustomerAccountRelationshipForExternalErrors[];
}

export type OwnLogisticsCreateCustomerAccountRelationshipForExternalResponse = OwnLogisticsCreateCustomerAccountRelationshipForExternal;

export interface OwnLogisticsCreateCustomerAccountRelationshipByOTPErrors {
  field?: string;
  errorMessage?: string;
}

export interface OwnLogisticsCreateCustomerAccountRelationshipByOTP {
  success?: boolean;
  retryable?: boolean;
  traceId?: string;
  errorMessage?: string;
  errorCode?: string;
  errors?: OwnLogisticsCreateCustomerAccountRelationshipByOTPErrors[];
}

export type OwnLogisticsCreateCustomerAccountRelationshipByOTPResponse = OwnLogisticsCreateCustomerAccountRelationshipByOTP;

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseDataConvertedAddress {
  id?: string;
  details?: string;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouseData {
  convertedAddress?: OwnLogisticsCreateOrUpdateCustomerWarehouseDataConvertedAddress;
}

export interface OwnLogisticsCreateOrUpdateCustomerWarehouse {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsCreateOrUpdateCustomerWarehouseErrors[];
  data?: OwnLogisticsCreateOrUpdateCustomerWarehouseData;
}

export type OwnLogisticsCreateOrUpdateCustomerWarehouseResponse = OwnLogisticsCreateOrUpdateCustomerWarehouse;

export interface OwnLogisticsEstimateShippingFeeData {
  transactionId?: string;
  transactionType?: string;
  transactionName?: string;
  amount?: string;
  taxAmount?: string;
  currency?: string;
}

export interface OwnLogisticsEstimateShippingFeeErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEstimateShippingFee {
  retryable: boolean;
  traceId: string;
  data: OwnLogisticsEstimateShippingFeeData[];
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEstimateShippingFeeErrors[];
}

export type OwnLogisticsEstimateShippingFeeResponse = OwnLogisticsEstimateShippingFee;

export interface OwnLogisticsEpisUploadAwbFulfillmentErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisUploadAwbFulfillment {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisUploadAwbFulfillmentErrors[];
}

export type OwnLogisticsEpisUploadAwbFulfillmentResponse = OwnLogisticsEpisUploadAwbFulfillment;

export interface OwnLogisticsEpisPackageCreationErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackageCreationDataFirstMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageCreationDataLastMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageCreationDataOptions {
  vasPartialDeliveryOptionNotAvailable?: boolean;
  promotionCode?: string;
}

export interface OwnLogisticsEpisPackageCreationDataAppliedVas {
  vasFdStorageOption?: boolean;
  vasFdCallOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  openBox?: boolean;
  vasPartialDeliveryOption?: boolean;
  vasExchangeOrderOption?: boolean;
}

export interface OwnLogisticsEpisPackageCreationDataOrigin {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageCreationDataDestination {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageCreationData {
  packageCode?: string;
  trackingNumber?: string;
  portCode?: string;
  routeCode?: string;
  firstMileShippingProvider?: OwnLogisticsEpisPackageCreationDataFirstMileShippingProvider;
  lastMileShippingProvider?: OwnLogisticsEpisPackageCreationDataLastMileShippingProvider;
  minEta?: number;
  maxEta?: number;
  options?: OwnLogisticsEpisPackageCreationDataOptions;
  appliedVas?: OwnLogisticsEpisPackageCreationDataAppliedVas;
  aoiName?: string;
  origin?: OwnLogisticsEpisPackageCreationDataOrigin;
  destination?: OwnLogisticsEpisPackageCreationDataDestination;
}

export interface OwnLogisticsEpisPackageCreation {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageCreationErrors[];
  data?: OwnLogisticsEpisPackageCreationData;
}

export type OwnLogisticsEpisPackageCreationResponse = OwnLogisticsEpisPackageCreation;

export interface OwnLogisticsEpisPackageCancellationErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackageCancellation {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageCancellationErrors[];
}

export type OwnLogisticsEpisPackageCancellationResponse = OwnLogisticsEpisPackageCancellation;

export interface OwnLogisticsEpisPackageCancellationV3Errors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackageCancellationV3 {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageCancellationV3Errors[];
}

export type OwnLogisticsEpisPackageCancellationV3Response = OwnLogisticsEpisPackageCancellationV3;

export interface OwnLogisticsEpisPackageConsignmentErrors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackageConsignmentDataFirstMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDataLastMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDataOptions {
  vasPartialDeliveryOptionNotAvailable?: boolean;
  promotionCode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDataAppliedVas {
  vasFdStorageOption?: boolean;
  vasFdCallOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  openBox?: boolean;
  vasPartialDeliveryOption?: boolean;
  vasExchangeOrderOption?: boolean;
}

export interface OwnLogisticsEpisPackageConsignmentDataOrigin {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageConsignmentDataDestination {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageConsignmentData {
  trackingNumber?: string;
  portCode?: string;
  firstMileShippingProvider?: OwnLogisticsEpisPackageConsignmentDataFirstMileShippingProvider;
  lastMileShippingProvider?: OwnLogisticsEpisPackageConsignmentDataLastMileShippingProvider;
  options?: OwnLogisticsEpisPackageConsignmentDataOptions;
  routeCode?: string;
  appliedVas?: OwnLogisticsEpisPackageConsignmentDataAppliedVas;
  aoiName?: string;
  origin?: OwnLogisticsEpisPackageConsignmentDataOrigin;
  destination?: OwnLogisticsEpisPackageConsignmentDataDestination;
}

export interface OwnLogisticsEpisPackageConsignment {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageConsignmentErrors[];
  data?: OwnLogisticsEpisPackageConsignmentData;
}

export type OwnLogisticsEpisPackageConsignmentResponse = OwnLogisticsEpisPackageConsignment;

export interface OwnLogisticsEpisPackageConsignmentV2Errors {
  field: string;
  errorMessage: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataFirstMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataLastMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataOptions {
  vasPartialDeliveryOptionNotAvailable?: boolean;
  promotionCode?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataAppliedVas {
  vasFdStorageOption?: boolean;
  vasFdCallOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  openBox?: boolean;
  vasPartialDeliveryOption?: boolean;
  vasExchangeOrderOption?: boolean;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataOrigin {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2DataDestination {
  id?: string;
  details?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2Data {
  trackingNumber?: string;
  portCode?: string;
  firstMileShippingProvider?: OwnLogisticsEpisPackageConsignmentV2DataFirstMileShippingProvider;
  lastMileShippingProvider?: OwnLogisticsEpisPackageConsignmentV2DataLastMileShippingProvider;
  options?: OwnLogisticsEpisPackageConsignmentV2DataOptions;
  routeCode?: string;
  appliedVas?: OwnLogisticsEpisPackageConsignmentV2DataAppliedVas;
  aoiName?: string;
  origin?: OwnLogisticsEpisPackageConsignmentV2DataOrigin;
  destination?: OwnLogisticsEpisPackageConsignmentV2DataDestination;
  logisticsOrderId?: string;
}

export interface OwnLogisticsEpisPackageConsignmentV2 {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageConsignmentV2Errors[];
  data?: OwnLogisticsEpisPackageConsignmentV2Data;
}

export type OwnLogisticsEpisPackageConsignmentV2Response = OwnLogisticsEpisPackageConsignmentV2;

export interface OwnLogisticsEpisPackageReAttempt {
  retryable?: boolean;
  traceId?: string;
  success?: string;
  errorMessage?: string;
  errorCode?: string;
}

export type OwnLogisticsEpisPackageReAttemptResponse = OwnLogisticsEpisPackageReAttempt;

export interface OwnLogisticsEpisPackageReadyToBeShippedErrors {
  field: string;
}

export interface OwnLogisticsEpisPackageReadyToBeShippedDataFirstMileShippingProvider {
  tplCode?: string;
  tplSlug?: string;
  tplName?: string;
}

export interface OwnLogisticsEpisPackageReadyToBeShippedDataOptions {
  vasPartialDeliveryOptionNotAvailable?: boolean;
  promotionCode?: string;
}

export interface OwnLogisticsEpisPackageReadyToBeShippedDataAppliedVas {
  vasFdStorageOption?: boolean;
  vasFdCallOption?: boolean;
  vasFdCollectShippingFeeOption?: boolean;
  openBox?: boolean;
  vasPartialDeliveryOption?: boolean;
  vasExchangeOrderOption?: boolean;
}

export interface OwnLogisticsEpisPackageReadyToBeShippedData {
  packageCode?: string;
  trackingNumber?: string;
  portCode?: string;
  routeCode?: string;
  firstMileShippingProvider?: OwnLogisticsEpisPackageReadyToBeShippedDataFirstMileShippingProvider;
  lastMileShippingProvider?: Record<string, unknown>;
  minEta?: number;
  maxEta?: number;
  options?: OwnLogisticsEpisPackageReadyToBeShippedDataOptions;
  appliedVas?: OwnLogisticsEpisPackageReadyToBeShippedDataAppliedVas;
}

export interface OwnLogisticsEpisPackageReadyToBeShipped {
  retryable: boolean;
  traceId: string;
  success: boolean;
  errorMessage: string;
  errorCode: string;
  errors: OwnLogisticsEpisPackageReadyToBeShippedErrors[];
  data?: OwnLogisticsEpisPackageReadyToBeShippedData;
}

export type OwnLogisticsEpisPackageReadyToBeShippedResponse = OwnLogisticsEpisPackageReadyToBeShipped;

export interface OwnLogisticsEpisPackageInfoUpdateErrors {
  field?: string;
  errorMessage?: string;
  errorCode?: string;
}

export interface OwnLogisticsEpisPackageInfoUpdateDataConvertedAddress {
  id?: string;
  details?: string;
  type?: string;
}

export interface OwnLogisticsEpisPackageInfoUpdateData {
  convertedAddress?: OwnLogisticsEpisPackageInfoUpdateDataConvertedAddress;
}

export interface OwnLogisticsEpisPackageInfoUpdate {
  retryable?: boolean;
  traceId?: string;
  success?: boolean;
  errorMessage?: string;
  errorCode?: string;
  errors?: OwnLogisticsEpisPackageInfoUpdateErrors[];
  data?: OwnLogisticsEpisPackageInfoUpdateData;
}

export type OwnLogisticsEpisPackageInfoUpdateResponse = OwnLogisticsEpisPackageInfoUpdate;

export interface OwnLogisticsEpisXspaceCreateData {
  caseId?: number;
}

export interface OwnLogisticsEpisXspaceCreate {
  retryable?: boolean;
  success?: boolean;
  traceId?: string;
  errorMessage?: string;
  errorCode?: string;
  data?: OwnLogisticsEpisXspaceCreateData;
}

export type OwnLogisticsEpisXspaceCreateResponse = OwnLogisticsEpisXspaceCreate;

export interface OwnLogisticsEpisXspaceGetDetailData {
  gmtDeleted?: number;
  actions?: Record<string, unknown>[];
  mails?: Record<string, unknown>[];
  caseId?: number;
  caseTemplateId?: number;
  categoryId?: number;
  ratingStar?: number;
  merchantId?: number;
  ratingReasons?: string[];
  subject?: string;
  ratingRemark?: string;
  description?: string;
  contactName?: string;
  sellerName?: string;
  sellerPhoneNo?: string;
  buyerName?: string;
  buyerEmail?: string;
  trackingNumber?: string;
  orderId?: string;
  attachments?: string;
  status?: string;
  attributes?: string;
  gmtCreate?: number;
  gmtModified?: number;
}

export interface OwnLogisticsEpisXspaceGetDetail {
  retryable?: boolean;
  success?: boolean;
  traceId?: string;
  errorMessage?: string;
  errorCode?: string;
  data?: OwnLogisticsEpisXspaceGetDetailData;
}

export type OwnLogisticsEpisXspaceGetDetailResponse = OwnLogisticsEpisXspaceGetDetail;

export interface OwnLogisticsEpisXspaceQueryDataContent {
  id?: string;
  caseId?: string;
  caseTemplateId?: string;
  categoryId?: string;
  merchantId?: string;
  subject?: string;
  description?: string;
  contactName?: string;
  sellerName?: string;
  sellerEmail?: string;
  sellerPhoneNo?: string;
  buyerName?: string;
  buyerEmail?: string;
  trackingNumber?: string;
  orderId?: string;
  attachments?: string;
  status?: string;
  attributes?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtDeleted?: string;
  ratingStar?: number;
  ratingReasons?: string[];
  ratingRemark?: string;
}

export interface OwnLogisticsEpisXspaceQueryDataPage {
  pageNo?: string;
  pageSize?: string;
  totalRecords?: string;
}

export interface OwnLogisticsEpisXspaceQueryData {
  content?: OwnLogisticsEpisXspaceQueryDataContent[];
  page?: OwnLogisticsEpisXspaceQueryDataPage;
}

export interface OwnLogisticsEpisXspaceQuery {
  retryable?: boolean;
  success?: boolean;
  traceId?: string;
  errorCode?: string;
  errorMessage?: string;
  data?: OwnLogisticsEpisXspaceQueryData;
}

export type OwnLogisticsEpisXspaceQueryResponse = OwnLogisticsEpisXspaceQuery;

export interface OwnLogisticsEpisXspaceRateTicket {
  retryable?: boolean;
  success?: boolean;
  traceId?: string;
  errorCode?: string;
  errorMessage?: string;
}

export type OwnLogisticsEpisXspaceRateTicketResponse = OwnLogisticsEpisXspaceRateTicket;
