import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  OrderGetDocumentRequest,
  OrderGetMultipleOrderItemsRequest,
  OrderGetOVOOrdersRequest,
  OrderGetOrderItemsRequest,
  OrderGetOrderRequest,
  OrderGetOrdersRequest,
  OrderOrderCancelValidateRequest,
  OrderSetInvoiceNumberRequest,
} from '../dto/request/order-api-v2.request';
import {
  OrderGetDocumentResponse,
  OrderGetMultipleOrderItemsResponse,
  OrderGetOVOOrdersResponse,
  OrderGetOrderItemsResponse,
  OrderGetOrderResponse,
  OrderGetOrdersResponse,
  OrderOrderCancelValidateResponse,
  OrderSetInvoiceNumberResponse,
} from '../dto/response/order-api-v2.response';

/**
 * GetDocument via Lazada `GET /order/document/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getDocument(params: OrderGetDocumentRequest, config: LazadaConfig): Promise<OrderGetDocumentResponse> {
  return LazadaHelper.callLazadaApi<OrderGetDocumentResponse>('/order/document/get', 'GET', params as unknown as Record<string, unknown>, config, 'getDocument');
}

/**
 * GetOrder via Lazada `GET /order/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOrder(params: OrderGetOrderRequest, config: LazadaConfig): Promise<OrderGetOrderResponse> {
  return LazadaHelper.callLazadaApi<OrderGetOrderResponse>('/order/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOrder');
}

/**
 * GetOrderItems via Lazada `GET /order/items/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOrderItems(params: OrderGetOrderItemsRequest, config: LazadaConfig): Promise<OrderGetOrderItemsResponse> {
  return LazadaHelper.callLazadaApi<OrderGetOrderItemsResponse>('/order/items/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOrderItems');
}

/**
 * OrderCancelValidate via Lazada `GET /order/reverse/cancel/validate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function orderCancelValidate(params: OrderOrderCancelValidateRequest, config: LazadaConfig): Promise<OrderOrderCancelValidateResponse> {
  return LazadaHelper.callLazadaApi<OrderOrderCancelValidateResponse>('/order/reverse/cancel/validate', 'GET', params as unknown as Record<string, unknown>, config, 'orderCancelValidate');
}

/**
 * GetOrders via Lazada `GET /orders/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOrders(params: OrderGetOrdersRequest, config: LazadaConfig): Promise<OrderGetOrdersResponse> {
  return LazadaHelper.callLazadaApi<OrderGetOrdersResponse>('/orders/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOrders');
}

/**
 * GetMultipleOrderItems via Lazada `GET /orders/items/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getMultipleOrderItems(params: OrderGetMultipleOrderItemsRequest, config: LazadaConfig): Promise<OrderGetMultipleOrderItemsResponse> {
  return LazadaHelper.callLazadaApi<OrderGetMultipleOrderItemsResponse>('/orders/items/get', 'GET', params as unknown as Record<string, unknown>, config, 'getMultipleOrderItems');
}

/**
 * GetOVOOrders via Lazada `GET /orders/ovo/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOVOOrders(params: OrderGetOVOOrdersRequest, config: LazadaConfig): Promise<OrderGetOVOOrdersResponse> {
  return LazadaHelper.callLazadaApi<OrderGetOVOOrdersResponse>('/orders/ovo/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOVOOrders');
}

/**
 * SetInvoiceNumber via Lazada `POST /order/invoice_number/set`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function setInvoiceNumber(params: OrderSetInvoiceNumberRequest, config: LazadaConfig): Promise<OrderSetInvoiceNumberResponse> {
  return LazadaHelper.callLazadaApi<OrderSetInvoiceNumberResponse>('/order/invoice_number/set', 'POST', params as unknown as Record<string, unknown>, config, 'setInvoiceNumber');
}
