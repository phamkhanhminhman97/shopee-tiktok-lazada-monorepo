import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  ChoiceCustomizedBatchDeliverJitPurchaseOrderRequest,
  ChoiceCustomizedEditChoiceSkuStockRequest,
  ChoiceCustomizedGetChoiceProductItemRequest,
  ChoiceCustomizedGetChoiceProductsRequest,
  ChoiceCustomizedGetChoiceSellerRequest,
  ChoiceCustomizedGetChoiceSkuItemRelationBySkuRequest,
  ChoiceCustomizedPackageJitPurchaseOrderRequest,
  ChoiceCustomizedPrintJitPurchaseOrderAndItemRequest,
  ChoiceCustomizedPrintPickuoOrderRequest,
  ChoiceCustomizedQueryListJitPurchaseOrderRequest,
  ChoiceCustomizedQueryListPurchaseItemRequest,
  ChoiceCustomizedQueryPickupOrderRequest,
} from '../dto/request/choice-customized.request';
import {
  ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse,
  ChoiceCustomizedEditChoiceSkuStockResponse,
  ChoiceCustomizedGetChoiceProductItemResponse,
  ChoiceCustomizedGetChoiceProductsResponse,
  ChoiceCustomizedGetChoiceSellerResponse,
  ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse,
  ChoiceCustomizedPackageJitPurchaseOrderResponse,
  ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse,
  ChoiceCustomizedPrintPickuoOrderResponse,
  ChoiceCustomizedQueryListJitPurchaseOrderResponse,
  ChoiceCustomizedQueryListPurchaseItemResponse,
  ChoiceCustomizedQueryPickupOrderResponse,
} from '../dto/response/choice-customized.response';

/**
 * GetChoiceProductItem via Lazada `GET /choice/product/item/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChoiceProductItem(params: ChoiceCustomizedGetChoiceProductItemRequest, config: LazadaConfig): Promise<ChoiceCustomizedGetChoiceProductItemResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedGetChoiceProductItemResponse>('/choice/product/item/get', 'GET', params as unknown as Record<string, unknown>, config, 'getChoiceProductItem');
}

/**
 * GetChoiceProducts via Lazada `GET /choice/products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChoiceProducts(params: ChoiceCustomizedGetChoiceProductsRequest, config: LazadaConfig): Promise<ChoiceCustomizedGetChoiceProductsResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedGetChoiceProductsResponse>('/choice/products/get', 'GET', params as unknown as Record<string, unknown>, config, 'getChoiceProducts');
}

/**
 * GetChoiceSeller via Lazada `GET /choice/seller/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChoiceSeller(params: ChoiceCustomizedGetChoiceSellerRequest, config: LazadaConfig): Promise<ChoiceCustomizedGetChoiceSellerResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedGetChoiceSellerResponse>('/choice/seller/get', 'GET', params as unknown as Record<string, unknown>, config, 'getChoiceSeller');
}

/**
 * GetChoiceSkuItemRelationBySku via Lazada `GET /choice/sku_item_relation/get_by_sku`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChoiceSkuItemRelationBySku(params: ChoiceCustomizedGetChoiceSkuItemRelationBySkuRequest, config: LazadaConfig): Promise<ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse>('/choice/sku_item_relation/get_by_sku', 'GET', params as unknown as Record<string, unknown>, config, 'getChoiceSkuItemRelationBySku');
}

/**
 * QueryListJitPurchaseOrder via Lazada `GET /jit/purchase_order/query_list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryListJitPurchaseOrder(params: ChoiceCustomizedQueryListJitPurchaseOrderRequest, config: LazadaConfig): Promise<ChoiceCustomizedQueryListJitPurchaseOrderResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedQueryListJitPurchaseOrderResponse>('/jit/purchase_order/query_list', 'GET', params as unknown as Record<string, unknown>, config, 'queryListJitPurchaseOrder');
}

/**
 * QueryListPurchaseItem via Lazada `GET /jit/purchase_order/query_list_purchase_item`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryListPurchaseItem(params: ChoiceCustomizedQueryListPurchaseItemRequest, config: LazadaConfig): Promise<ChoiceCustomizedQueryListPurchaseItemResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedQueryListPurchaseItemResponse>('/jit/purchase_order/query_list_purchase_item', 'GET', params as unknown as Record<string, unknown>, config, 'queryListPurchaseItem');
}

/**
 * QueryPickupOrder via Lazada `GET /pickup_order/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryPickupOrder(params: ChoiceCustomizedQueryPickupOrderRequest, config: LazadaConfig): Promise<ChoiceCustomizedQueryPickupOrderResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedQueryPickupOrderResponse>('/pickup_order/query', 'GET', params as unknown as Record<string, unknown>, config, 'queryPickupOrder');
}

/**
 * EditChoiceSkuStock via Lazada `POST /choice/stock/edit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function editChoiceSkuStock(params: ChoiceCustomizedEditChoiceSkuStockRequest, config: LazadaConfig): Promise<ChoiceCustomizedEditChoiceSkuStockResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedEditChoiceSkuStockResponse>('/choice/stock/edit', 'POST', params as unknown as Record<string, unknown>, config, 'editChoiceSkuStock');
}

/**
 * BatchDeliverJitPurchaseOrder via Lazada `POST /jit/purchase_order/batch_pickup_deliver`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function batchDeliverJitPurchaseOrder(params: ChoiceCustomizedBatchDeliverJitPurchaseOrderRequest, config: LazadaConfig): Promise<ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse>('/jit/purchase_order/batch_pickup_deliver', 'POST', params as unknown as Record<string, unknown>, config, 'batchDeliverJitPurchaseOrder');
}

/**
 * PackageJitPurchaseOrder via Lazada `POST /jit/purchase_order/package`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function packageJitPurchaseOrder(params: ChoiceCustomizedPackageJitPurchaseOrderRequest, config: LazadaConfig): Promise<ChoiceCustomizedPackageJitPurchaseOrderResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedPackageJitPurchaseOrderResponse>('/jit/purchase_order/package', 'POST', params as unknown as Record<string, unknown>, config, 'packageJitPurchaseOrder');
}

/**
 * PrintJitPurchaseOrderAndItem via Lazada `POST /jit/purchase_order/print`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function printJitPurchaseOrderAndItem(params: ChoiceCustomizedPrintJitPurchaseOrderAndItemRequest, config: LazadaConfig): Promise<ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse>('/jit/purchase_order/print', 'POST', params as unknown as Record<string, unknown>, config, 'printJitPurchaseOrderAndItem');
}

/**
 * PrintPickuoOrder via Lazada `POST /pickup_order/print`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function printPickuoOrder(params: ChoiceCustomizedPrintPickuoOrderRequest, config: LazadaConfig): Promise<ChoiceCustomizedPrintPickuoOrderResponse> {
  return LazadaHelper.callLazadaApi<ChoiceCustomizedPrintPickuoOrderResponse>('/pickup_order/print', 'POST', params as unknown as Record<string, unknown>, config, 'printPickuoOrder');
}
