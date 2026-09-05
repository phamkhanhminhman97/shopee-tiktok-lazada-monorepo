import * as ShopeeHelper from '../common/helper';
import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import {
  ShopeeResponseLogisticChannelList,
  ShopeeResponseShipOrder,
  ShopeeResponseShippingParameter,
  ShopeeResponseTrackingNumber,
  ShopeeResponseCreateShippingDocument,
  ShopeeResponseGetShippingDocumentResult,
  ShopeeResponseTrackingInfo,
  ShopeeResponseMassShipOrder,
  ShopeeResponseGetMassShippingParameter,
  ShopeeResponseUpdateShippingOrder,
  ShopeeResponseGetMassTrackingNumber,
  ShopeeResponseGetShippingDocumentParameter,
  ShopeeResponseGetAddressList,
} from '../dto/response/logistic.reponse';
import {
  ShopeeRequestShipOrder,
  ShopeeRequestCreateShippingDocument,
  ShopeeRequestGetShippingDocumentResult,
  ShopeeRequestDownloadShippingDocument,
  ShopeeRequestMassShipOrder,
  ShopeeRequestGetMassShippingParameter,
  ShopeeRequestUpdateShippingOrder,
  ShopeeRequestGetMassTrackingNumber,
  ShopeeRequestGetShippingDocumentParameter,
} from '../dto/request/logistic.request';

/**
 *
 * @param itemIds - Product IDs.
 * @param statusUnlist - Unlist status.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetCategories>}
 */
export async function getChannelList(config: ShopeeConfig): Promise<ShopeeResponseLogisticChannelList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.CHANNEL_LIST, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.CHANNEL_LIST}${commonParam}`;
  const res = await ShopeeHelper.httpGet<ShopeeResponseLogisticChannelList>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getChannelList');
  }

  return res;
}

/**
 *
 * @param orderNumber - Order number.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetCategories>}
 */
export async function shippingParameter(orderNumber: string, config: ShopeeConfig): Promise<ShopeeResponseShippingParameter> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.SHIPPING_PARAMS, config, timestamp);

  const additionalParams = {
    order_sn: orderNumber,
  };
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.SHIPPING_PARAMS}${commonParam}`;

  const res = await ShopeeHelper.httpGet<ShopeeResponseShippingParameter>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'shippingParameter');
  }

  return res;
}

/**
 *
 * @param orderNumber - Order number.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseShipOrder>}
 */
export async function shipOrder(
  orderNumber: string,
  addressId: number,
  timeSlot: string,
  config: ShopeeConfig,
): Promise<ShopeeResponseShipOrder> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.SHIP_ORDER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);

  const body: ShopeeRequestShipOrder = {
    order_sn: orderNumber,
    pickup: {
      address_id: addressId,
      pickup_time_id: timeSlot,
    },
  };

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.SHIP_ORDER}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseShipOrder>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'shipOrder');
  }

  return res;
}

/**
 *
 * @param orderNumber - Order number.
 * @param config - Shopee API configuration.
 * @param packageNumber - Package number (optional).
 * @param responseOptionalFields - Optional response fields (optional).
 * @returns {Promise<ShopeeResponseTrackingNumber>}
 */
export async function getTrackingNumber(
  orderNumber: string,
  config: ShopeeConfig,
  packageNumber?: string,
  responseOptionalFields?: string,
): Promise<ShopeeResponseTrackingNumber> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.TRACKING_NUMBER, config, timestamp);

  const additionalParams: Record<string, string | number | boolean> = {
    order_sn: orderNumber,
  };
  if (packageNumber) {
    additionalParams.package_number = packageNumber;
  }
  if (responseOptionalFields) {
    additionalParams.response_optional_fields = responseOptionalFields;
  }

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.TRACKING_NUMBER}${commonParam}`;

  const res = await ShopeeHelper.httpGet<ShopeeResponseTrackingNumber>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getTrackingNumber');
  }

  return res;
}

/**
 *
 * @param body - The payload for creating shipping document.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseCreateShippingDocument>}
 */
export async function createShippingDocument(
  body: ShopeeRequestCreateShippingDocument,
  config: ShopeeConfig,
): Promise<ShopeeResponseCreateShippingDocument> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.CREATE_SHIPPING_DOCUMENTS, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.CREATE_SHIPPING_DOCUMENTS}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseCreateShippingDocument>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'createShippingDocument');
  }

  return res;
}

/**
 *
 * @param body - The payload for getting shipping document result.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetShippingDocumentResult>}
 */
export async function getShippingDocumentResult(
  body: ShopeeRequestGetShippingDocumentResult,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetShippingDocumentResult> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHIPPING_DOCUMENTS, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHIPPING_DOCUMENTS}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseGetShippingDocumentResult>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getShippingDocumentResult');
  }

  return res;
}

/**
 *
 * @param body - The payload for downloading shipping document.
 * @param config - Shopee API configuration.
 * @returns {Promise<ArrayBuffer>} The waybill file as a binary buffer.
 */
export async function downloadShippingDocument(
  body: ShopeeRequestDownloadShippingDocument,
  config: ShopeeConfig,
): Promise<ArrayBuffer> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.DOWNLOAD_SHIPPING_DOCUMENT, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.DOWNLOAD_SHIPPING_DOCUMENT}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);

  const res = await ShopeeHelper.httpPostDownload(url, body, headers);

  // httpPostDownload throws on network errors via handleError.
  // For downloads, Shopee returns binary data on success or HTTP error on failure.
  return res;
}

/**
 *
 * @param orderNumber - Order number.
 * @param config - Shopee API configuration.
 * @param packageNumber - Package number (optional).
 * @returns {Promise<ShopeeResponseTrackingInfo>}
 */
export async function getTrackingInfo(
  orderNumber: string,
  config: ShopeeConfig,
  packageNumber?: string,
): Promise<ShopeeResponseTrackingInfo> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.TRACKING_INFO, config, timestamp);

  const additionalParams: Record<string, string | number | boolean> = {
    order_sn: orderNumber,
  };
  if (packageNumber) {
    additionalParams.package_number = packageNumber;
  }

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.TRACKING_INFO}${commonParam}`;

  const res = await ShopeeHelper.httpGet<ShopeeResponseTrackingInfo>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getTrackingInfo');
  }

  return res;
}

/**
 *
 * @param body - The payload for mass shipping order.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseMassShipOrder>}
 */
export async function massShipOrder(
  body: ShopeeRequestMassShipOrder,
  config: ShopeeConfig,
): Promise<ShopeeResponseMassShipOrder> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.MASS_SHIP_ORDER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.MASS_SHIP_ORDER}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseMassShipOrder>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'massShipOrder');
  }

  return res;
}

/**
 *
 * @param body - The payload for getting mass shipping parameter.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetMassShippingParameter>}
 */
export async function getMassShippingParameter(
  body: ShopeeRequestGetMassShippingParameter,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetMassShippingParameter> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.MASS_SHIPPING_PARAMS, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.MASS_SHIPPING_PARAMS}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseGetMassShippingParameter>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getMassShippingParameter');
  }

  return res;
}

/**
 *
 * @param body - The payload for updating shipping order.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseUpdateShippingOrder>}
 */
export async function updateShippingOrder(
  body: ShopeeRequestUpdateShippingOrder,
  config: ShopeeConfig,
): Promise<ShopeeResponseUpdateShippingOrder> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.UPDATE_SHIPPING_ORDER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.UPDATE_SHIPPING_ORDER}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseUpdateShippingOrder>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'updateShippingOrder');
  }

  return res;
}

/**
 *
 * @param body - The payload for getting mass tracking number.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetMassTrackingNumber>}
 */
export async function getMassTrackingNumber(
  body: ShopeeRequestGetMassTrackingNumber,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetMassTrackingNumber> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.MASS_TRACKING_NUMBER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.MASS_TRACKING_NUMBER}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseGetMassTrackingNumber>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getMassTrackingNumber');
  }

  return res;
}

/**
 *
 * @param body - The payload for getting shipping document parameters.
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetShippingDocumentParameter>}
 */
export async function getShippingDocumentParameter(
  body: ShopeeRequestGetShippingDocumentParameter,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetShippingDocumentParameter> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_SHIPPING_DOCUMENT_PARAMETER, config, timestamp);

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_SHIPPING_DOCUMENT_PARAMETER}${commonParam}`;

  const res = await ShopeeHelper.httpPost<ShopeeResponseGetShippingDocumentParameter>(url, body, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getShippingDocumentParameter');
  }

  return res;
}

/**
 *
 * @param config - Shopee API configuration.
 * @returns {Promise<ShopeeResponseGetAddressList>}
 */
export async function getAddressList(config: ShopeeConfig): Promise<ShopeeResponseGetAddressList> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.ADDRESS_LIST, config, timestamp);
  const commonParam = ShopeeHelper.commonParameter(config, signature, timestamp);

  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.ADDRESS_LIST}${commonParam}`;
  const res = await ShopeeHelper.httpGet<ShopeeResponseGetAddressList>(url, config);

  if (res?.error) {
    ShopeeHelper.throwShopeeApiError(res, 'getAddressList');
  }

  return res;
}

// ---- Appended: additional endpoints (batch 3) ----
import {
  ShopeeBatchShipOrderRequest,
  ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest,
  ShopeeCheckPolygonUpdateStatusRequest,
  ShopeeCreateBookingShippingDocumentRequest,
  ShopeeCreateShippingDocumentJobRequest,
  ShopeeDeleteAddressRequest,
  ShopeeDeleteSpecialOperatingHourRequest,
  ShopeeDownloadBookingShippingDocumentRequest,
  ShopeeDownloadShippingDocumentJobRequest,
  ShopeeDownloadToLabelRequest,
  ShopeeGetBookingShippingDocumentDataInfoRequest,
  ShopeeGetBookingShippingDocumentParameterRequest,
  ShopeeGetBookingShippingDocumentResultRequest,
  ShopeeGetBookingShippingParameterRequest,
  ShopeeGetBookingTrackingInfoRequest,
  ShopeeGetBookingTrackingNumberRequest,
  ShopeeGetMartPackagingInfoRequest,
  ShopeeGetOperatingHourRestrictionsRequest,
  ShopeeGetOperatingHoursRequest,
  ShopeeGetPauseStatusRequest,
  ShopeeGetShippingDocumentDataInfoRequest,
  ShopeeGetShippingDocumentJobStatusRequest,
  ShopeeSetAddressConfigRequest,
  ShopeeSetMartPackagingInfoRequest,
  ShopeeSetPauseStatusRequest,
  ShopeeShipBookingRequest,
  ShopeeUpdateAddressRequest,
  ShopeeUpdateChannelRequest,
  ShopeeUpdateOperatingHoursRequest,
  ShopeeUpdateSelfCollectionOrderLogisticsRequest,
  ShopeeUpdateTrackingStatusRequest,
  ShopeeUploadServiceablePolygonRequest,
} from '../dto/request/logistic.request';
import {
  ShopeeBatchShipOrderResponse,
  ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse,
  ShopeeCheckPolygonUpdateStatusResponse,
  ShopeeCreateBookingShippingDocumentResponse,
  ShopeeCreateShippingDocumentJobResponse,
  ShopeeDeleteAddressResponse,
  ShopeeDeleteSpecialOperatingHourResponse,
  ShopeeDownloadBookingShippingDocumentResponse,
  ShopeeDownloadShippingDocumentJobResponse,
  ShopeeDownloadToLabelResponse,
  ShopeeGetBookingShippingDocumentDataInfoResponse,
  ShopeeGetBookingShippingDocumentParameterResponse,
  ShopeeGetBookingShippingDocumentResultResponse,
  ShopeeGetBookingShippingParameterResponse,
  ShopeeGetBookingTrackingInfoResponse,
  ShopeeGetBookingTrackingNumberResponse,
  ShopeeGetMartPackagingInfoResponse,
  ShopeeGetOperatingHourRestrictionsResponse,
  ShopeeGetOperatingHoursResponse,
  ShopeeGetPauseStatusResponse,
  ShopeeGetShippingDocumentDataInfoResponse,
  ShopeeGetShippingDocumentJobStatusResponse,
  ShopeeSetAddressConfigResponse,
  ShopeeSetMartPackagingInfoResponse,
  ShopeeSetPauseStatusResponse,
  ShopeeShipBookingResponse,
  ShopeeUpdateAddressResponse,
  ShopeeUpdateChannelResponse,
  ShopeeUpdateOperatingHoursResponse,
  ShopeeUpdateSelfCollectionOrderLogisticsResponse,
  ShopeeUpdateTrackingStatusResponse,
  ShopeeUploadServiceablePolygonResponse,
} from '../dto/response/logistic.reponse';

/**
 * batchShipOrder via Shopee `v2.logistics.batch_ship_order`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchShipOrder(params: ShopeeBatchShipOrderRequest, config: ShopeeConfig): Promise<ShopeeBatchShipOrderResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchShipOrderResponse>('/logistics/batch_ship_order', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchShipOrder',
  });
}

/**
 * batchUpdateTpfWarehouseTrackingStatus via Shopee `v2.logistics.batch_update_tpf_warehouse_tracking_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function batchUpdateTpfWarehouseTrackingStatus(params: ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest, config: ShopeeConfig): Promise<ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse>('/logistics/batch_update_tpf_warehouse_tracking_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'batchUpdateTpfWarehouseTrackingStatus',
  });
}

/**
 * checkPolygonUpdateStatus via Shopee `v2.logistics.check_polygon_update_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function checkPolygonUpdateStatus(params: ShopeeCheckPolygonUpdateStatusRequest, config: ShopeeConfig): Promise<ShopeeCheckPolygonUpdateStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCheckPolygonUpdateStatusResponse>('/logistics/check_polygon_update_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'checkPolygonUpdateStatus',
  });
}

/**
 * createBookingShippingDocument via Shopee `v2.logistics.create_booking_shipping_document`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createBookingShippingDocument(params: ShopeeCreateBookingShippingDocumentRequest, config: ShopeeConfig): Promise<ShopeeCreateBookingShippingDocumentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateBookingShippingDocumentResponse>('/logistics/create_booking_shipping_document', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createBookingShippingDocument',
  });
}

/**
 * createShippingDocumentJob via Shopee `v2.logistics.create_shipping_document_job`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function createShippingDocumentJob(params: ShopeeCreateShippingDocumentJobRequest, config: ShopeeConfig): Promise<ShopeeCreateShippingDocumentJobResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCreateShippingDocumentJobResponse>('/logistics/create_shipping_document_job', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'createShippingDocumentJob',
  });
}

/**
 * deleteAddress via Shopee `v2.logistics.delete_address`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteAddress(params: ShopeeDeleteAddressRequest, config: ShopeeConfig): Promise<ShopeeDeleteAddressResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteAddressResponse>('/logistics/delete_address', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteAddress',
  });
}

/**
 * deleteSpecialOperatingHour via Shopee `v2.logistics.delete_special_operating_hour`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function deleteSpecialOperatingHour(params: ShopeeDeleteSpecialOperatingHourRequest, config: ShopeeConfig): Promise<ShopeeDeleteSpecialOperatingHourResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDeleteSpecialOperatingHourResponse>('/logistics/delete_special_operating_hour', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'deleteSpecialOperatingHour',
  });
}

/**
 * downloadBookingShippingDocument via Shopee `v2.logistics.download_booking_shipping_document`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function downloadBookingShippingDocument(params: ShopeeDownloadBookingShippingDocumentRequest, config: ShopeeConfig): Promise<ShopeeDownloadBookingShippingDocumentResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDownloadBookingShippingDocumentResponse>('/logistics/download_booking_shipping_document', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'downloadBookingShippingDocument',
  });
}

/**
 * downloadShippingDocumentJob via Shopee `v2.logistics.download_shipping_document_job`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function downloadShippingDocumentJob(params: ShopeeDownloadShippingDocumentJobRequest, config: ShopeeConfig): Promise<ShopeeDownloadShippingDocumentJobResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDownloadShippingDocumentJobResponse>('/logistics/download_shipping_document_job', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'downloadShippingDocumentJob',
  });
}

/**
 * downloadToLabel via Shopee `v2.logistics.download_to_label`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function downloadToLabel(params: ShopeeDownloadToLabelRequest, config: ShopeeConfig): Promise<ShopeeDownloadToLabelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDownloadToLabelResponse>('/logistics/download_to_label', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'downloadToLabel',
  });
}

/**
 * getBookingShippingDocumentDataInfo via Shopee `v2.logistics.get_booking_shipping_document_data_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingShippingDocumentDataInfo(params: ShopeeGetBookingShippingDocumentDataInfoRequest, config: ShopeeConfig): Promise<ShopeeGetBookingShippingDocumentDataInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingShippingDocumentDataInfoResponse>('/logistics/get_booking_shipping_document_data_info', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingShippingDocumentDataInfo',
  });
}

/**
 * getBookingShippingDocumentParameter via Shopee `v2.logistics.get_booking_shipping_document_parameter`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingShippingDocumentParameter(params: ShopeeGetBookingShippingDocumentParameterRequest, config: ShopeeConfig): Promise<ShopeeGetBookingShippingDocumentParameterResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingShippingDocumentParameterResponse>('/logistics/get_booking_shipping_document_parameter', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingShippingDocumentParameter',
  });
}

/**
 * getBookingShippingDocumentResult via Shopee `v2.logistics.get_booking_shipping_document_result`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingShippingDocumentResult(params: ShopeeGetBookingShippingDocumentResultRequest, config: ShopeeConfig): Promise<ShopeeGetBookingShippingDocumentResultResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingShippingDocumentResultResponse>('/logistics/get_booking_shipping_document_result', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingShippingDocumentResult',
  });
}

/**
 * getBookingShippingParameter via Shopee `v2.logistics.get_booking_shipping_parameter`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingShippingParameter(params: ShopeeGetBookingShippingParameterRequest, config: ShopeeConfig): Promise<ShopeeGetBookingShippingParameterResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingShippingParameterResponse>('/logistics/get_booking_shipping_parameter', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingShippingParameter',
  });
}

/**
 * getBookingTrackingInfo via Shopee `v2.logistics.get_booking_tracking_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingTrackingInfo(params: ShopeeGetBookingTrackingInfoRequest, config: ShopeeConfig): Promise<ShopeeGetBookingTrackingInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingTrackingInfoResponse>('/logistics/get_booking_tracking_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingTrackingInfo',
  });
}

/**
 * getBookingTrackingNumber via Shopee `v2.logistics.get_booking_tracking_number`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getBookingTrackingNumber(params: ShopeeGetBookingTrackingNumberRequest, config: ShopeeConfig): Promise<ShopeeGetBookingTrackingNumberResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetBookingTrackingNumberResponse>('/logistics/get_booking_tracking_number', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getBookingTrackingNumber',
  });
}

/**
 * getMartPackagingInfo via Shopee `v2.logistics.get_mart_packaging_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMartPackagingInfo(config: ShopeeConfig): Promise<ShopeeGetMartPackagingInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetMartPackagingInfoResponse>('/logistics/get_mart_packaging_info', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMartPackagingInfo',
  });
}

/**
 * getOperatingHourRestrictions via Shopee `v2.logistics.get_operating_hour_restrictions`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOperatingHourRestrictions(config: ShopeeConfig): Promise<ShopeeGetOperatingHourRestrictionsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOperatingHourRestrictionsResponse>('/logistics/get_operating_hour_restrictions', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOperatingHourRestrictions',
  });
}

/**
 * getOperatingHours via Shopee `v2.logistics.get_operating_hours`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getOperatingHours(config: ShopeeConfig): Promise<ShopeeGetOperatingHoursResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetOperatingHoursResponse>('/logistics/get_operating_hours', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getOperatingHours',
  });
}

/**
 * getPauseStatus via Shopee `v2.logistics.get_pause_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPauseStatus(config: ShopeeConfig): Promise<ShopeeGetPauseStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPauseStatusResponse>('/logistics/get_pause_status', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPauseStatus',
  });
}

/**
 * getShippingDocumentDataInfo via Shopee `v2.logistics.get_shipping_document_data_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShippingDocumentDataInfo(params: ShopeeGetShippingDocumentDataInfoRequest, config: ShopeeConfig): Promise<ShopeeGetShippingDocumentDataInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShippingDocumentDataInfoResponse>('/logistics/get_shipping_document_data_info', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShippingDocumentDataInfo',
  });
}

/**
 * getShippingDocumentJobStatus via Shopee `v2.logistics.get_shipping_document_job_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShippingDocumentJobStatus(params: ShopeeGetShippingDocumentJobStatusRequest, config: ShopeeConfig): Promise<ShopeeGetShippingDocumentJobStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShippingDocumentJobStatusResponse>('/logistics/get_shipping_document_job_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShippingDocumentJobStatus',
  });
}

/**
 * setAddressConfig via Shopee `v2.logistics.set_address_config`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setAddressConfig(params: ShopeeSetAddressConfigRequest = {}, config: ShopeeConfig): Promise<ShopeeSetAddressConfigResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetAddressConfigResponse>('/logistics/set_address_config', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setAddressConfig',
  });
}

/**
 * setMartPackagingInfo via Shopee `v2.logistics.set_mart_packaging_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setMartPackagingInfo(params: ShopeeSetMartPackagingInfoRequest, config: ShopeeConfig): Promise<ShopeeSetMartPackagingInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetMartPackagingInfoResponse>('/logistics/set_mart_packaging_info', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setMartPackagingInfo',
  });
}

/**
 * setPauseStatus via Shopee `v2.logistics.set_pause_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function setPauseStatus(params: ShopeeSetPauseStatusRequest, config: ShopeeConfig): Promise<ShopeeSetPauseStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeSetPauseStatusResponse>('/logistics/set_pause_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'setPauseStatus',
  });
}

/**
 * shipBooking via Shopee `v2.logistics.ship_booking`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function shipBooking(params: ShopeeShipBookingRequest, config: ShopeeConfig): Promise<ShopeeShipBookingResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeShipBookingResponse>('/logistics/ship_booking', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'shipBooking',
  });
}

/**
 * updateAddress via Shopee `v2.logistics.update_address`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateAddress(params: ShopeeUpdateAddressRequest, config: ShopeeConfig): Promise<ShopeeUpdateAddressResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateAddressResponse>('/logistics/update_address', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateAddress',
  });
}

/**
 * updateChannel via Shopee `v2.logistics.update_channel`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateChannel(params: ShopeeUpdateChannelRequest, config: ShopeeConfig): Promise<ShopeeUpdateChannelResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateChannelResponse>('/logistics/update_channel', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateChannel',
  });
}

/**
 * updateOperatingHours via Shopee `v2.logistics.update_operating_hours`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateOperatingHours(params: ShopeeUpdateOperatingHoursRequest = {}, config: ShopeeConfig): Promise<ShopeeUpdateOperatingHoursResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateOperatingHoursResponse>('/logistics/update_operating_hours', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateOperatingHours',
  });
}

/**
 * updateSelfCollectionOrderLogistics via Shopee `v2.logistics.update_self_collection_order_logistics`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateSelfCollectionOrderLogistics(params: ShopeeUpdateSelfCollectionOrderLogisticsRequest, config: ShopeeConfig): Promise<ShopeeUpdateSelfCollectionOrderLogisticsResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateSelfCollectionOrderLogisticsResponse>('/logistics/update_self_collection_order_logistics', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateSelfCollectionOrderLogistics',
  });
}

/**
 * updateTrackingStatus via Shopee `v2.logistics.update_tracking_status`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function updateTrackingStatus(params: ShopeeUpdateTrackingStatusRequest, config: ShopeeConfig): Promise<ShopeeUpdateTrackingStatusResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUpdateTrackingStatusResponse>('/logistics/update_tracking_status', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'updateTrackingStatus',
  });
}

/**
 * uploadServiceablePolygon via Shopee `v2.logistics.upload_serviceable_polygon`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadServiceablePolygon(params: ShopeeUploadServiceablePolygonRequest, config: ShopeeConfig): Promise<ShopeeUploadServiceablePolygonResponse> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest('/logistics/upload_serviceable_polygon', config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${ShopeeHelper.SHOPEE_END_POINT_V2}/logistics/upload_serviceable_polygon${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeUploadServiceablePolygonResponse>(url, { file: params.file }, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'uploadServiceablePolygon');
  }

  return result;
}
