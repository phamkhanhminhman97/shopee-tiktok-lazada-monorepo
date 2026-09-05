import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import { ShopeeResponseReturnDetail } from '../dto/response/order.response';
import {
  ShopeeResponseGetReturnList,
  ShopeeResponseConfirmReturn,
  ShopeeResponseGetAvailableSolutions,
} from '../dto/response/return.response';
import {
  ShopeeRequestGetReturnList,
  ShopeeRequestConfirmReturn,
} from '../dto/request/return.request';

/**
 * List Shopee return/refund requests via `v2.returns.get_return_list`.
 *
 * `page_no` and `page_size` are required. Use `status`, `create_time_from`/
 * `create_time_to`, or `update_time_from`/`update_time_to` to narrow the
 * search. Check `response.more` to know whether another page is available.
 *
 * @param params - Pagination and filters for the return list query.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with matching return records.
 */
export async function getReturnList(
  params: ShopeeRequestGetReturnList,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetReturnList> {
  if (!Number.isInteger(params.page_no) || params.page_no < 0) {
    throw new Error('[Shopee API] getReturnList invalid request: `page_no` is required and must be a non-negative integer.');
  }
  if (!Number.isInteger(params.page_size) || params.page_size < 1 || params.page_size > 100) {
    throw new Error('[Shopee API] getReturnList invalid request: `page_size` must be an integer between 1 and 100.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.RETURN_LIST, config, timestamp);

  const additionalParams: Record<string, string | number | boolean> = {
    page_no: params.page_no,
    page_size: params.page_size,
  };

  if (params.create_time_from !== undefined) additionalParams.create_time_from = params.create_time_from;
  if (params.create_time_to !== undefined) additionalParams.create_time_to = params.create_time_to;
  if (params.update_time_from !== undefined) additionalParams.update_time_from = params.update_time_from;
  if (params.update_time_to !== undefined) additionalParams.update_time_to = params.update_time_to;
  if (params.status) additionalParams.status = params.status;
  if (params.negotiation_status) additionalParams.negotiation_status = params.negotiation_status;
  if (params.seller_proof_status) additionalParams.seller_proof_status = params.seller_proof_status;
  if (params.seller_compensation_status) additionalParams.seller_compensation_status = params.seller_compensation_status;

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.RETURN_LIST}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetReturnList>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getReturnList');
  }

  return result;
}

/**
 * Get one return/refund request detail via `v2.returns.get_return_detail`.
 *
 * @param returnSn - Shopee return serial number from `getReturnList()` or a
 * return-related Push Mechanism event.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the full return detail.
 */
export async function getReturnDetail(returnSn: string, config: ShopeeConfig): Promise<ShopeeResponseReturnDetail> {
  if (!returnSn) {
    throw new Error('[Shopee API] getReturnDetail invalid request: `returnSn` is required.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.RETURN_DETAIL, config, timestamp);
  const additionalParams: Record<string, string> = { return_sn: returnSn };
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.RETURN_DETAIL}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseReturnDetail>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getReturnDetail');
  }

  return result;
}

/**
 * Get the return/refund solutions available for a return via
 * `v2.returns.get_available_solutions`.
 *
 * @param returnSn - Shopee return serial number.
 * @param config - Shopee API configuration.
 * @returns Shopee API response with the list of available solutions.
 */
export async function getAvailableSolutions(
  returnSn: string,
  config: ShopeeConfig,
): Promise<ShopeeResponseGetAvailableSolutions> {
  if (!returnSn) {
    throw new Error('[Shopee API] getAvailableSolutions invalid request: `returnSn` is required.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.RETURN_SOLUTION, config, timestamp);
  const additionalParams: Record<string, string> = { return_sn: returnSn };
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.RETURN_SOLUTION}${commonParam}`;

  const result = await ShopeeHelper.httpGet<ShopeeResponseGetAvailableSolutions>(url, config);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'getAvailableSolutions');
  }

  return result;
}

/**
 * Confirm a buyer return/refund request via `v2.returns.confirm`.
 *
 * Seller-side confirmation that accepts the return/refund as requested by
 * the buyer. Use `getAvailableSolutions()` first if you need to check which
 * solutions Shopee allows before confirming.
 *
 * @param returnSn - Shopee return serial number.
 * @param config - Shopee API configuration.
 * @returns Shopee API response confirming the return.
 */
export async function confirmReturn(returnSn: string, config: ShopeeConfig): Promise<ShopeeResponseConfirmReturn> {
  if (!returnSn) {
    throw new Error('[Shopee API] confirmReturn invalid request: `returnSn` is required.');
  }

  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.RETURN_CONFIRM, config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.RETURN_CONFIRM}${commonParam}`;
  const headers = ShopeeHelper.getHeaders(config);
  const body: ShopeeRequestConfirmReturn = { return_sn: returnSn };

  const result = await ShopeeHelper.httpPost<ShopeeResponseConfirmReturn>(url, body, headers);

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'confirmReturn');
  }

  return result;
}

// ---- Appended: additional endpoints (batch 3) ----
import {
  ShopeeAcceptOfferRequest,
  ShopeeCancelDisputeRequest,
  ShopeeConvertImageRequest,
  ShopeeDisputeRequest,
  ShopeeGetReturnDisputeReasonRequest,
  ShopeeGetReverseTrackingInfoRequest,
  ShopeeGetShippingCarrierRequest,
  ShopeeOfferRequest,
  ShopeeQueryProofRequest,
  ShopeeUploadProofRequest,
  ShopeeUploadShippingProofRequest,
} from '../dto/request/return.request';
import {
  ShopeeAcceptOfferResponse,
  ShopeeCancelDisputeResponse,
  ShopeeConvertImageResponse,
  ShopeeDisputeResponse,
  ShopeeGetReturnDisputeReasonResponse,
  ShopeeGetReverseTrackingInfoResponse,
  ShopeeGetShippingCarrierResponse,
  ShopeeOfferResponse,
  ShopeeQueryProofResponse,
  ShopeeUploadProofResponse,
  ShopeeUploadShippingProofResponse,
} from '../dto/response/return.response';

/**
 * acceptOffer via Shopee `v2.returns.accept_offer`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function acceptOffer(params: ShopeeAcceptOfferRequest, config: ShopeeConfig): Promise<ShopeeAcceptOfferResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeAcceptOfferResponse>('/returns/accept_offer', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'acceptOffer',
  });
}

/**
 * cancelDispute via Shopee `v2.returns.cancel_dispute`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function cancelDispute(params: ShopeeCancelDisputeRequest, config: ShopeeConfig): Promise<ShopeeCancelDisputeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeCancelDisputeResponse>('/returns/cancel_dispute', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'cancelDispute',
  });
}

/**
 * convertImage via Shopee `v2.returns.convert_image`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function convertImage(params: ShopeeConvertImageRequest, config: ShopeeConfig): Promise<ShopeeConvertImageResponse> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest('/returns/convert_image', config, timestamp);
  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp);
  const url = `${ShopeeHelper.SHOPEE_END_POINT_V2}/returns/convert_image${commonParam}`;

  const result = await ShopeeHelper.httpPostMultipart<ShopeeConvertImageResponse>(
    url,
    { return_sn: params.return_sn, upload_image: params.upload_image },
    config,
  );

  if (result?.error) {
    ShopeeHelper.throwShopeeApiError(result, 'convertImage');
  }

  return result;
}

/**
 * dispute via Shopee `v2.returns.dispute`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function dispute(params: ShopeeDisputeRequest, config: ShopeeConfig): Promise<ShopeeDisputeResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeDisputeResponse>('/returns/dispute', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'dispute',
  });
}

/**
 * getReturnDisputeReason via Shopee `v2.returns.get_return_dispute_reason`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getReturnDisputeReason(params: ShopeeGetReturnDisputeReasonRequest, config: ShopeeConfig): Promise<ShopeeGetReturnDisputeReasonResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetReturnDisputeReasonResponse>('/returns/get_return_dispute_reason', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getReturnDisputeReason',
  });
}

/**
 * getReverseTrackingInfo via Shopee `v2.returns.get_reverse_tracking_info`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getReverseTrackingInfo(params: ShopeeGetReverseTrackingInfoRequest, config: ShopeeConfig): Promise<ShopeeGetReverseTrackingInfoResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetReverseTrackingInfoResponse>('/returns/get_reverse_tracking_info', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getReverseTrackingInfo',
  });
}

/**
 * getShippingCarrier via Shopee `v2.returns.get_shipping_carrier`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShippingCarrier(params: ShopeeGetShippingCarrierRequest, config: ShopeeConfig): Promise<ShopeeGetShippingCarrierResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShippingCarrierResponse>('/returns/get_shipping_carrier', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShippingCarrier',
  });
}

/**
 * offer via Shopee `v2.returns.offer`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function offer(params: ShopeeOfferRequest, config: ShopeeConfig): Promise<ShopeeOfferResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeOfferResponse>('/returns/offer', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'offer',
  });
}

/**
 * queryProof via Shopee `v2.returns.query_proof`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function queryProof(params: ShopeeQueryProofRequest, config: ShopeeConfig): Promise<ShopeeQueryProofResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeQueryProofResponse>('/returns/query_proof', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'queryProof',
  });
}

/**
 * uploadProof via Shopee `v2.returns.upload_proof`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadProof(params: ShopeeUploadProofRequest, config: ShopeeConfig): Promise<ShopeeUploadProofResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUploadProofResponse>('/returns/upload_proof', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'uploadProof',
  });
}

/**
 * uploadShippingProof via Shopee `v2.returns.upload_shipping_proof`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function uploadShippingProof(params: ShopeeUploadShippingProofRequest, config: ShopeeConfig): Promise<ShopeeUploadShippingProofResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeUploadShippingProofResponse>('/returns/upload_shipping_proof', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'uploadShippingProof',
  });
}
