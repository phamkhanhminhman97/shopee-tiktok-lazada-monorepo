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
