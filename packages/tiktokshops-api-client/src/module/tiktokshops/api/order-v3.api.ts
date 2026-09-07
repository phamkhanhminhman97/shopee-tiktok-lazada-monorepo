import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokAddExternalOrderReferencesBody,
  TiktokGetExternalOrderReferencesParams,
  TiktokGetOrderDetailParams,
  TiktokGetOrderListParams,
  TiktokGetPriceDetailParams,
  TiktokSearchOrderByExternalOrderReferenceQuery,
} from '../dto/request/order-v3.request';
import {
  TiktokGetExternalOrderReferencesResponse,
  TiktokGetOrderDetailResponse,
  TiktokGetOrderListResponse,
  TiktokGetPriceDetailResponse,
  TiktokSearchOrderByExternalOrderReferenceResponse,
} from '../dto/response/order-v3.response';

/**
 * Retrieves the list of orders. (POST /order/list)
 *
 * @param params Parameters for filtering and pagination.
 * @returns Promise resolving to the order list.
 */
export async function getOrderList(params: TiktokGetOrderListParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOrderListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOrderListResponse>>(
    '/order/202309/orders/search',
    'POST',
    { query: params.query, body: params.body },
    config,
    'getOrderList',
  );
}

/**
 * Retrieves order details by ID. (GET /order/detail)
 *
 * @param params Parameters containing the order_id.
 * @returns Promise resolving to the order details.
 */
export async function getOrderDetail(params: TiktokGetOrderDetailParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOrderDetailResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOrderDetailResponse>>(
    `/order/202309/orders`,
    'GET',
    { query: params },
    config,
    'getOrderDetail',
  );
}

/**
 * Retrieves the price details of an order. (GET /order/price_detail)
 *
 * @param params Parameters containing the order_id.
 * @returns Promise resolving to the price details.
 */
export async function getPriceDetail(params: TiktokGetPriceDetailParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetPriceDetailResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetPriceDetailResponse>>(
    `/order/202407/orders/${params.order_id}/price_detail`,
    'GET',
    {},
    config,
    'getPriceDetail',
  );
}

/**
 * Adds external order references. (POST /order/add_external_references)
 *
 * @param body Data to add external order references.
 * @returns Promise resolving to a generic API response.
 */
export async function addExternalOrderReferences(body: TiktokAddExternalOrderReferencesBody, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    '/order/202406/orders/external_orders',
    'POST',
    { body: body },
    config,
    'addExternalOrderReferences',
  );
}

/**
 * Retrieves external order references. (GET /order/get_external_references)
 *
 * @param params Search parameters for external references.
 * @returns Promise resolving to a list of external references.
 */
export async function getExternalOrderReferences(params: TiktokGetExternalOrderReferencesParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetExternalOrderReferencesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetExternalOrderReferencesResponse>>(
    `/order/202406/orders/${params.order_id}/external_orders`,
    'GET',
    { query: params.query },
    config,
    'getExternalOrderReferences',
  );
}

/**
 * Searches for an order by external order reference. (POST /order/search_by_external_reference)
 *
 * @param query Data used to search for an order using an external reference.
 * @returns Promise resolving to the found order details.
 */
export async function searchOrderByExternalOrderReference(query: TiktokSearchOrderByExternalOrderReferenceQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchOrderByExternalOrderReferenceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchOrderByExternalOrderReferenceResponse>>(
    '/order/202406/orders/external_order_search',
    'POST',
    { query: query },
    config,
    'searchOrderByExternalOrderReference',
  );
}
