import { LazadaConfig } from '../dto/request/config.request';
import {
  getDocument,
  getMultipleOrderItems,
  getOVOOrders,
  getOrder,
  getOrderItems,
  getOrders,
  orderCancelValidate,
  setInvoiceNumber,
} from '../api/order-api-v2.api';
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
 * Lazada `order-api` API namespace.
 *
 * Access via `lazada.order.<method>()` on a `LazadaModule` instance.
 */
export class LazadaOrder {
  constructor(private config: LazadaConfig) {}

  async getDocument(params: OrderGetDocumentRequest): Promise<OrderGetDocumentResponse> {
    return await getDocument(params, this.config);
  }

  async getOrder(params: OrderGetOrderRequest): Promise<OrderGetOrderResponse> {
    return await getOrder(params, this.config);
  }

  async getOrderItems(params: OrderGetOrderItemsRequest): Promise<OrderGetOrderItemsResponse> {
    return await getOrderItems(params, this.config);
  }

  async orderCancelValidate(params: OrderOrderCancelValidateRequest): Promise<OrderOrderCancelValidateResponse> {
    return await orderCancelValidate(params, this.config);
  }

  async getOrders(params: OrderGetOrdersRequest): Promise<OrderGetOrdersResponse> {
    return await getOrders(params, this.config);
  }

  async getMultipleOrderItems(params: OrderGetMultipleOrderItemsRequest): Promise<OrderGetMultipleOrderItemsResponse> {
    return await getMultipleOrderItems(params, this.config);
  }

  async getOVOOrders(params: OrderGetOVOOrdersRequest): Promise<OrderGetOVOOrdersResponse> {
    return await getOVOOrders(params, this.config);
  }

  async setInvoiceNumber(params: OrderSetInvoiceNumberRequest): Promise<OrderSetInvoiceNumberResponse> {
    return await setInvoiceNumber(params, this.config);
  }
}
