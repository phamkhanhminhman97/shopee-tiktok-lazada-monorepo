import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  FblBuildFulfillmentSkuRelationRequest,
  FblCancelFulfillmentOrderForMCLRequest,
  FblCancelInboundReservationRequest,
  FblCancelOutboundOrderRequest,
  FblCancelVasOrder4FBLRequest,
  FblCancelnBoundOrderRequest,
  FblCheckInboundReservationSlotRequest,
  FblCreateFulfillmentOrderForMCLRequest,
  FblCreateFulfillmentOrderForMCLV2PNFRequest,
  FblCreateFulfillmentSkuDecoupleRequest,
  FblCreateFulfillmentSkuForFBLRequest,
  FblCreateInboundOrderRequest,
  FblCreateInboundReservationRequest,
  FblCreateOutBoundOrderRequest,
  FblCreateProductReinboundOrderForMCLRequest,
  FblCreateVasOrder4FBLRequest,
  FblGetChannelStocksForMCLRequest,
  FblGetFulfillmentProductDetailRequest,
  FblGetFulfillmentSkuListForMCLRequest,
  FblGetFulfillmentSkuRelationByScItemRequest,
  FblGetFulfillmentSkuRelationBySkuRequest,
  FblGetFulfillmentSkuRelationsByScItemsRequest,
  FblGetFulfillmentSkuRelationsBySkusRequest,
  FblGetIcpOrderFileRequest,
  FblGetInboundOrderDetailRequest,
  FblGetInboundOrderListRequest,
  FblGetInboundReservationFileRequest,
  FblGetInventoryChangedSKURequest,
  FblGetInventoryOccupyDetailsRequest,
  FblGetInventoryOperateLogRequest,
  FblGetOutboundOrderDetailRequest,
  FblGetOutboundOrderListRequest,
  FblGetPlatformProductsV2Request,
  FblGetShipperInfoRequest,
  FblGetStockRuleRequest,
  FblGetVasOrderByNo4FBLRequest,
  FblGetWarehouseListForMCLRequest,
  FblGetWarehouseStockRequest,
  FblGetWarehouseStockV3Request,
  FblListIcpWarehouseRequest,
  FblQueryFulfillmentOrderForMCLRequest,
  FblQueryInboundReservationOrderRequest,
  FblQueryReverseOrderForMCLRequest,
  FblRemoveFulfillmentSkuRelationRequest,
  FblReturnCancellationRequest,
  FblReturnOrderCreationRequest,
  FblSetStockRuleRequest,
  FblUpdateFulfillmentSkuDecoupleRequest,
  FblUploadWaybillRequest,
} from '../dto/request/fbl.request';
import {
  FblBuildFulfillmentSkuRelationResponse,
  FblCancelFulfillmentOrderForMCLResponse,
  FblCancelInboundReservationResponse,
  FblCancelOutboundOrderResponse,
  FblCancelVasOrder4FBLResponse,
  FblCancelnBoundOrderResponse,
  FblCheckInboundReservationSlotResponse,
  FblCreateFulfillmentOrderForMCLResponse,
  FblCreateFulfillmentOrderForMCLV2PNFResponse,
  FblCreateFulfillmentSkuDecoupleResponse,
  FblCreateFulfillmentSkuForFBLResponse,
  FblCreateInboundOrderResponse,
  FblCreateInboundReservationResponse,
  FblCreateOutBoundOrderResponse,
  FblCreateProductReinboundOrderForMCLResponse,
  FblCreateVasOrder4FBLResponse,
  FblGetChannelStocksForMCLResponse,
  FblGetFulfillmentProductDetailResponse,
  FblGetFulfillmentSkuListForMCLResponse,
  FblGetFulfillmentSkuRelationByScItemResponse,
  FblGetFulfillmentSkuRelationBySkuResponse,
  FblGetFulfillmentSkuRelationsByScItemsResponse,
  FblGetFulfillmentSkuRelationsBySkusResponse,
  FblGetIcpOrderFileResponse,
  FblGetInboundOrderDetailResponse,
  FblGetInboundOrderListResponse,
  FblGetInboundReservationFileResponse,
  FblGetInventoryChangedSKUResponse,
  FblGetInventoryOccupyDetailsResponse,
  FblGetInventoryOperateLogResponse,
  FblGetOutboundOrderDetailResponse,
  FblGetOutboundOrderListResponse,
  FblGetPlatformProductsV2Response,
  FblGetShipperInfoResponse,
  FblGetStockRuleResponse,
  FblGetVasOrderByNo4FBLResponse,
  FblGetWarehouseListForMCLResponse,
  FblGetWarehouseStockResponse,
  FblGetWarehouseStockV3Response,
  FblListIcpWarehouseResponse,
  FblQueryFulfillmentOrderForMCLResponse,
  FblQueryInboundReservationOrderResponse,
  FblQueryReverseOrderForMCLResponse,
  FblRemoveFulfillmentSkuRelationResponse,
  FblReturnCancellationResponse,
  FblReturnOrderCreationResponse,
  FblSetStockRuleResponse,
  FblUpdateFulfillmentSkuDecoupleResponse,
  FblUploadWaybillResponse,
} from '../dto/response/fbl.response';

/**
 * GetChannelStocksForMCL via Lazada `GET /fbl/channel_stocks/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChannelStocksForMCL(params: FblGetChannelStocksForMCLRequest, config: LazadaConfig): Promise<FblGetChannelStocksForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblGetChannelStocksForMCLResponse>('/fbl/channel_stocks/get', 'GET', params as unknown as Record<string, unknown>, config, 'getChannelStocksForMCL');
}

/**
 * QueryFulfillmentOrderForMCL via Lazada `GET /fbl/fulfillment_order_list/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryFulfillmentOrderForMCL(params: FblQueryFulfillmentOrderForMCLRequest, config: LazadaConfig): Promise<FblQueryFulfillmentOrderForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblQueryFulfillmentOrderForMCLResponse>('/fbl/fulfillment_order_list/get', 'GET', params as unknown as Record<string, unknown>, config, 'queryFulfillmentOrderForMCL');
}

/**
 * GetFulfillmentProductDetail via Lazada `GET /fbl/fulfillment_products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentProductDetail(params: FblGetFulfillmentProductDetailRequest, config: LazadaConfig): Promise<FblGetFulfillmentProductDetailResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentProductDetailResponse>('/fbl/fulfillment_products/get', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentProductDetail');
}

/**
 * GetFulfillmentSkuListForMCL via Lazada `GET /fbl/fulfillment_sku_list/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentSkuListForMCL(params: FblGetFulfillmentSkuListForMCLRequest, config: LazadaConfig): Promise<FblGetFulfillmentSkuListForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentSkuListForMCLResponse>('/fbl/fulfillment_sku_list/get', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentSkuListForMCL');
}

/**
 * GetFulfillmentSkuRelationByScItem via Lazada `GET /fbl/fulfillment_sku_relation/get_by_sc_item`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentSkuRelationByScItem(params: FblGetFulfillmentSkuRelationByScItemRequest, config: LazadaConfig): Promise<FblGetFulfillmentSkuRelationByScItemResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentSkuRelationByScItemResponse>('/fbl/fulfillment_sku_relation/get_by_sc_item', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentSkuRelationByScItem');
}

/**
 * GetFulfillmentSkuRelationsByScItems via Lazada `GET /fbl/fulfillment_sku_relation/get_by_sc_items`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentSkuRelationsByScItems(params: FblGetFulfillmentSkuRelationsByScItemsRequest, config: LazadaConfig): Promise<FblGetFulfillmentSkuRelationsByScItemsResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentSkuRelationsByScItemsResponse>('/fbl/fulfillment_sku_relation/get_by_sc_items', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentSkuRelationsByScItems');
}

/**
 * GetFulfillmentSkuRelationBySku via Lazada `GET /fbl/fulfillment_sku_relation/get_by_sku`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentSkuRelationBySku(params: FblGetFulfillmentSkuRelationBySkuRequest, config: LazadaConfig): Promise<FblGetFulfillmentSkuRelationBySkuResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentSkuRelationBySkuResponse>('/fbl/fulfillment_sku_relation/get_by_sku', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentSkuRelationBySku');
}

/**
 * GetFulfillmentSkuRelationsBySkus via Lazada `GET /fbl/fulfillment_sku_relation/get_by_skus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFulfillmentSkuRelationsBySkus(params: FblGetFulfillmentSkuRelationsBySkusRequest, config: LazadaConfig): Promise<FblGetFulfillmentSkuRelationsBySkusResponse> {
  return LazadaHelper.callLazadaApi<FblGetFulfillmentSkuRelationsBySkusResponse>('/fbl/fulfillment_sku_relation/get_by_skus', 'GET', params as unknown as Record<string, unknown>, config, 'getFulfillmentSkuRelationsBySkus');
}

/**
 * GetIcpOrderFile via Lazada `GET /fbl/icp_order/file`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getIcpOrderFile(params: FblGetIcpOrderFileRequest, config: LazadaConfig): Promise<FblGetIcpOrderFileResponse> {
  return LazadaHelper.callLazadaApi<FblGetIcpOrderFileResponse>('/fbl/icp_order/file', 'GET', params as unknown as Record<string, unknown>, config, 'getIcpOrderFile');
}

/**
 * ListIcpWarehouse via Lazada `GET /fbl/icp_warehouse/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listIcpWarehouse(params: FblListIcpWarehouseRequest, config: LazadaConfig): Promise<FblListIcpWarehouseResponse> {
  return LazadaHelper.callLazadaApi<FblListIcpWarehouseResponse>('/fbl/icp_warehouse/list', 'GET', params as unknown as Record<string, unknown>, config, 'listIcpWarehouse');
}

/**
 * GetInboundOrderDetail via Lazada `GET /fbl/inbound_order_detail/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInboundOrderDetail(params: FblGetInboundOrderDetailRequest, config: LazadaConfig): Promise<FblGetInboundOrderDetailResponse> {
  return LazadaHelper.callLazadaApi<FblGetInboundOrderDetailResponse>('/fbl/inbound_order_detail/get', 'GET', params as unknown as Record<string, unknown>, config, 'getInboundOrderDetail');
}

/**
 * GetInboundOrderList via Lazada `GET /fbl/inbound_orders/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInboundOrderList(params: FblGetInboundOrderListRequest, config: LazadaConfig): Promise<FblGetInboundOrderListResponse> {
  return LazadaHelper.callLazadaApi<FblGetInboundOrderListResponse>('/fbl/inbound_orders/get', 'GET', params as unknown as Record<string, unknown>, config, 'getInboundOrderList');
}

/**
 * CheckInboundReservationSlot via Lazada `GET /fbl/inbound_reservation/check`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function checkInboundReservationSlot(params: FblCheckInboundReservationSlotRequest, config: LazadaConfig): Promise<FblCheckInboundReservationSlotResponse> {
  return LazadaHelper.callLazadaApi<FblCheckInboundReservationSlotResponse>('/fbl/inbound_reservation/check', 'GET', params as unknown as Record<string, unknown>, config, 'checkInboundReservationSlot');
}

/**
 * GetInboundReservationFile via Lazada `GET /fbl/inbound_reservation/file`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInboundReservationFile(params: FblGetInboundReservationFileRequest, config: LazadaConfig): Promise<FblGetInboundReservationFileResponse> {
  return LazadaHelper.callLazadaApi<FblGetInboundReservationFileResponse>('/fbl/inbound_reservation/file', 'GET', params as unknown as Record<string, unknown>, config, 'getInboundReservationFile');
}

/**
 * QueryInboundReservationOrder via Lazada `GET /fbl/inbound_reservation/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryInboundReservationOrder(params: FblQueryInboundReservationOrderRequest, config: LazadaConfig): Promise<FblQueryInboundReservationOrderResponse> {
  return LazadaHelper.callLazadaApi<FblQueryInboundReservationOrderResponse>('/fbl/inbound_reservation/get', 'GET', params as unknown as Record<string, unknown>, config, 'queryInboundReservationOrder');
}

/**
 * GetInventoryChangedSKU via Lazada `GET /fbl/inventory_changed_sku/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInventoryChangedSKU(params: FblGetInventoryChangedSKURequest, config: LazadaConfig): Promise<FblGetInventoryChangedSKUResponse> {
  return LazadaHelper.callLazadaApi<FblGetInventoryChangedSKUResponse>('/fbl/inventory_changed_sku/get', 'GET', params as unknown as Record<string, unknown>, config, 'getInventoryChangedSKU');
}

/**
 * GetInventoryOccupyDetails via Lazada `GET /fbl/inventory_occupy_details/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInventoryOccupyDetails(params: FblGetInventoryOccupyDetailsRequest, config: LazadaConfig): Promise<FblGetInventoryOccupyDetailsResponse> {
  return LazadaHelper.callLazadaApi<FblGetInventoryOccupyDetailsResponse>('/fbl/inventory_occupy_details/get', 'GET', params as unknown as Record<string, unknown>, config, 'getInventoryOccupyDetails');
}

/**
 * GetInventoryOperateLog via Lazada `GET /fbl/inventory_operate_log/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getInventoryOperateLog(params: FblGetInventoryOperateLogRequest, config: LazadaConfig): Promise<FblGetInventoryOperateLogResponse> {
  return LazadaHelper.callLazadaApi<FblGetInventoryOperateLogResponse>('/fbl/inventory_operate_log/get', 'GET', params as unknown as Record<string, unknown>, config, 'getInventoryOperateLog');
}

/**
 * GetOutboundOrderDetail via Lazada `GET /fbl/outbound_order_detail/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOutboundOrderDetail(params: FblGetOutboundOrderDetailRequest, config: LazadaConfig): Promise<FblGetOutboundOrderDetailResponse> {
  return LazadaHelper.callLazadaApi<FblGetOutboundOrderDetailResponse>('/fbl/outbound_order_detail/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOutboundOrderDetail');
}

/**
 * GetOutboundOrderList via Lazada `GET /fbl/outbound_orders/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getOutboundOrderList(params: FblGetOutboundOrderListRequest, config: LazadaConfig): Promise<FblGetOutboundOrderListResponse> {
  return LazadaHelper.callLazadaApi<FblGetOutboundOrderListResponse>('/fbl/outbound_orders/get', 'GET', params as unknown as Record<string, unknown>, config, 'getOutboundOrderList');
}

/**
 * GetPlatformProductsV2 via Lazada `GET /fbl/platform_products/get2`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getPlatformProductsV2(params: FblGetPlatformProductsV2Request, config: LazadaConfig): Promise<FblGetPlatformProductsV2Response> {
  return LazadaHelper.callLazadaApi<FblGetPlatformProductsV2Response>('/fbl/platform_products/get2', 'GET', params as unknown as Record<string, unknown>, config, 'getPlatformProductsV2');
}

/**
 * QueryReverseOrderForMCL via Lazada `GET /fbl/reverse_order/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryReverseOrderForMCL(params: FblQueryReverseOrderForMCLRequest, config: LazadaConfig): Promise<FblQueryReverseOrderForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblQueryReverseOrderForMCLResponse>('/fbl/reverse_order/get', 'GET', params as unknown as Record<string, unknown>, config, 'queryReverseOrderForMCL');
}

/**
 * GetShipperInfo via Lazada `GET /fbl/shipper/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getShipperInfo(config: LazadaConfig): Promise<FblGetShipperInfoResponse> {
  return LazadaHelper.callLazadaApi<FblGetShipperInfoResponse>('/fbl/shipper/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getShipperInfo');
}

/**
 * GetStockRule via Lazada `GET /fbl/stock_rule/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getStockRule(params: FblGetStockRuleRequest, config: LazadaConfig): Promise<FblGetStockRuleResponse> {
  return LazadaHelper.callLazadaApi<FblGetStockRuleResponse>('/fbl/stock_rule/get', 'GET', params as unknown as Record<string, unknown>, config, 'getStockRule');
}

/**
 * GetWarehouseStock via Lazada `GET /fbl/stocks/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getWarehouseStock(params: FblGetWarehouseStockRequest, config: LazadaConfig): Promise<FblGetWarehouseStockResponse> {
  return LazadaHelper.callLazadaApi<FblGetWarehouseStockResponse>('/fbl/stocks/get', 'GET', params as unknown as Record<string, unknown>, config, 'getWarehouseStock');
}

/**
 * GetWarehouseStockV3 via Lazada `GET /fbl/stocks/getV3`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getWarehouseStockV3(params: FblGetWarehouseStockV3Request, config: LazadaConfig): Promise<FblGetWarehouseStockV3Response> {
  return LazadaHelper.callLazadaApi<FblGetWarehouseStockV3Response>('/fbl/stocks/getV3', 'GET', params as unknown as Record<string, unknown>, config, 'getWarehouseStockV3');
}

/**
 * GetVasOrderByNo4FBL via Lazada `GET /fbl/vas/getVasOrderByNo`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getVasOrderByNo4FBL(params: FblGetVasOrderByNo4FBLRequest, config: LazadaConfig): Promise<FblGetVasOrderByNo4FBLResponse> {
  return LazadaHelper.callLazadaApi<FblGetVasOrderByNo4FBLResponse>('/fbl/vas/getVasOrderByNo', 'GET', params as unknown as Record<string, unknown>, config, 'getVasOrderByNo4FBL');
}

/**
 * GetWarehouseListForMCL via Lazada `GET /fbl/warehouses/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getWarehouseListForMCL(params: FblGetWarehouseListForMCLRequest, config: LazadaConfig): Promise<FblGetWarehouseListForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblGetWarehouseListForMCLResponse>('/fbl/warehouses/get', 'GET', params as unknown as Record<string, unknown>, config, 'getWarehouseListForMCL');
}

/**
 * CancelFulfillmentOrderForMCL via Lazada `POST /fbl/fulfillment_order/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelFulfillmentOrderForMCL(params: FblCancelFulfillmentOrderForMCLRequest, config: LazadaConfig): Promise<FblCancelFulfillmentOrderForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblCancelFulfillmentOrderForMCLResponse>('/fbl/fulfillment_order/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'cancelFulfillmentOrderForMCL');
}

/**
 * CreateFulfillmentOrderForMCL via Lazada `POST /fbl/fulfillment_order/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createFulfillmentOrderForMCL(params: FblCreateFulfillmentOrderForMCLRequest, config: LazadaConfig): Promise<FblCreateFulfillmentOrderForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblCreateFulfillmentOrderForMCLResponse>('/fbl/fulfillment_order/create', 'POST', params as unknown as Record<string, unknown>, config, 'createFulfillmentOrderForMCL');
}

/**
 * CreateFulfillmentOrderForMCLV2PNF via Lazada `POST /fbl/fulfillment_order_pnf/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createFulfillmentOrderForMCLV2PNF(params: FblCreateFulfillmentOrderForMCLV2PNFRequest, config: LazadaConfig): Promise<FblCreateFulfillmentOrderForMCLV2PNFResponse> {
  return LazadaHelper.callLazadaApi<FblCreateFulfillmentOrderForMCLV2PNFResponse>('/fbl/fulfillment_order_pnf/create', 'POST', params as unknown as Record<string, unknown>, config, 'createFulfillmentOrderForMCLV2PNF');
}

/**
 * CreateFulfillmentSkuDecouple via Lazada `POST /fbl/fulfillment_sku/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createFulfillmentSkuDecouple(params: FblCreateFulfillmentSkuDecoupleRequest, config: LazadaConfig): Promise<FblCreateFulfillmentSkuDecoupleResponse> {
  return LazadaHelper.callLazadaApi<FblCreateFulfillmentSkuDecoupleResponse>('/fbl/fulfillment_sku/create', 'POST', params as unknown as Record<string, unknown>, config, 'createFulfillmentSkuDecouple');
}

/**
 * UpdateFulfillmentSkuDecouple via Lazada `POST /fbl/fulfillment_sku/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateFulfillmentSkuDecouple(params: FblUpdateFulfillmentSkuDecoupleRequest, config: LazadaConfig): Promise<FblUpdateFulfillmentSkuDecoupleResponse> {
  return LazadaHelper.callLazadaApi<FblUpdateFulfillmentSkuDecoupleResponse>('/fbl/fulfillment_sku/update', 'POST', params as unknown as Record<string, unknown>, config, 'updateFulfillmentSkuDecouple');
}

/**
 * CreateFulfillmentSkuForFBL via Lazada `POST /fbl/fulfillment_sku_fbl/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createFulfillmentSkuForFBL(params: FblCreateFulfillmentSkuForFBLRequest, config: LazadaConfig): Promise<FblCreateFulfillmentSkuForFBLResponse> {
  return LazadaHelper.callLazadaApi<FblCreateFulfillmentSkuForFBLResponse>('/fbl/fulfillment_sku_fbl/create', 'POST', params as unknown as Record<string, unknown>, config, 'createFulfillmentSkuForFBL');
}

/**
 * RemoveFulfillmentSkuRelation via Lazada `POST /fbl/fulfillment_sku_relation/remove`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function removeFulfillmentSkuRelation(params: FblRemoveFulfillmentSkuRelationRequest, config: LazadaConfig): Promise<FblRemoveFulfillmentSkuRelationResponse> {
  return LazadaHelper.callLazadaApi<FblRemoveFulfillmentSkuRelationResponse>('/fbl/fulfillment_sku_relation/remove', 'POST', params as unknown as Record<string, unknown>, config, 'removeFulfillmentSkuRelation');
}

/**
 * BuildFulfillmentSkuRelation via Lazada `POST /fbl/fulfillment_sku_relation/write`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function buildFulfillmentSkuRelation(params: FblBuildFulfillmentSkuRelationRequest, config: LazadaConfig): Promise<FblBuildFulfillmentSkuRelationResponse> {
  return LazadaHelper.callLazadaApi<FblBuildFulfillmentSkuRelationResponse>('/fbl/fulfillment_sku_relation/write', 'POST', params as unknown as Record<string, unknown>, config, 'buildFulfillmentSkuRelation');
}

/**
 * CancelnBoundOrder via Lazada `POST /fbl/inbound_order/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelnBoundOrder(params: FblCancelnBoundOrderRequest, config: LazadaConfig): Promise<FblCancelnBoundOrderResponse> {
  return LazadaHelper.callLazadaApi<FblCancelnBoundOrderResponse>('/fbl/inbound_order/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'cancelnBoundOrder');
}

/**
 * CreateInboundOrder via Lazada `POST /fbl/inbound_order/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createInboundOrder(params: FblCreateInboundOrderRequest, config: LazadaConfig): Promise<FblCreateInboundOrderResponse> {
  return LazadaHelper.callLazadaApi<FblCreateInboundOrderResponse>('/fbl/inbound_order/create', 'POST', params as unknown as Record<string, unknown>, config, 'createInboundOrder');
}

/**
 * CancelInboundReservation via Lazada `POST /fbl/inbound_reservation/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelInboundReservation(params: FblCancelInboundReservationRequest, config: LazadaConfig): Promise<FblCancelInboundReservationResponse> {
  return LazadaHelper.callLazadaApi<FblCancelInboundReservationResponse>('/fbl/inbound_reservation/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'cancelInboundReservation');
}

/**
 * CreateInboundReservation via Lazada `POST /fbl/inbound_reservation/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createInboundReservation(params: FblCreateInboundReservationRequest, config: LazadaConfig): Promise<FblCreateInboundReservationResponse> {
  return LazadaHelper.callLazadaApi<FblCreateInboundReservationResponse>('/fbl/inbound_reservation/create', 'POST', params as unknown as Record<string, unknown>, config, 'createInboundReservation');
}

/**
 * CancelOutboundOrder via Lazada `POST /fbl/outbound_order/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelOutboundOrder(params: FblCancelOutboundOrderRequest, config: LazadaConfig): Promise<FblCancelOutboundOrderResponse> {
  return LazadaHelper.callLazadaApi<FblCancelOutboundOrderResponse>('/fbl/outbound_order/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'cancelOutboundOrder');
}

/**
 * CreateOutBoundOrder via Lazada `POST /fbl/outbound_order/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createOutBoundOrder(params: FblCreateOutBoundOrderRequest, config: LazadaConfig): Promise<FblCreateOutBoundOrderResponse> {
  return LazadaHelper.callLazadaApi<FblCreateOutBoundOrderResponse>('/fbl/outbound_order/create', 'POST', params as unknown as Record<string, unknown>, config, 'createOutBoundOrder');
}

/**
 * CreateProductReinboundOrderForMCL via Lazada `POST /fbl/product_reinbound/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createProductReinboundOrderForMCL(params: FblCreateProductReinboundOrderForMCLRequest, config: LazadaConfig): Promise<FblCreateProductReinboundOrderForMCLResponse> {
  return LazadaHelper.callLazadaApi<FblCreateProductReinboundOrderForMCLResponse>('/fbl/product_reinbound/create', 'POST', params as unknown as Record<string, unknown>, config, 'createProductReinboundOrderForMCL');
}

/**
 * ReturnCancellation via Lazada `POST /fbl/returns/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function returnCancellation(params: FblReturnCancellationRequest, config: LazadaConfig): Promise<FblReturnCancellationResponse> {
  return LazadaHelper.callLazadaApi<FblReturnCancellationResponse>('/fbl/returns/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'returnCancellation');
}

/**
 * ReturnOrderCreation via Lazada `POST /fbl/returns/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function returnOrderCreation(params: FblReturnOrderCreationRequest, config: LazadaConfig): Promise<FblReturnOrderCreationResponse> {
  return LazadaHelper.callLazadaApi<FblReturnOrderCreationResponse>('/fbl/returns/create', 'POST', params as unknown as Record<string, unknown>, config, 'returnOrderCreation');
}

/**
 * SetStockRule via Lazada `POST /fbl/stock_rule/set`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function setStockRule(params: FblSetStockRuleRequest, config: LazadaConfig): Promise<FblSetStockRuleResponse> {
  return LazadaHelper.callLazadaApi<FblSetStockRuleResponse>('/fbl/stock_rule/set', 'POST', params as unknown as Record<string, unknown>, config, 'setStockRule');
}

/**
 * CancelVasOrder4FBL via Lazada `POST /fbl/vas/cancelVasOrder`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function cancelVasOrder4FBL(params: FblCancelVasOrder4FBLRequest, config: LazadaConfig): Promise<FblCancelVasOrder4FBLResponse> {
  return LazadaHelper.callLazadaApi<FblCancelVasOrder4FBLResponse>('/fbl/vas/cancelVasOrder', 'POST', params as unknown as Record<string, unknown>, config, 'cancelVasOrder4FBL');
}

/**
 * CreateVasOrder4FBL via Lazada `POST /fbl/vas/createVasOrder`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createVasOrder4FBL(params: FblCreateVasOrder4FBLRequest, config: LazadaConfig): Promise<FblCreateVasOrder4FBLResponse> {
  return LazadaHelper.callLazadaApi<FblCreateVasOrder4FBLResponse>('/fbl/vas/createVasOrder', 'POST', params as unknown as Record<string, unknown>, config, 'createVasOrder4FBL');
}

/**
 * UploadWaybill via Lazada `POST /fbl/waybill/upload`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function uploadWaybill(params: FblUploadWaybillRequest, config: LazadaConfig): Promise<FblUploadWaybillResponse> {
  return LazadaHelper.callLazadaApi<FblUploadWaybillResponse>('/fbl/waybill/upload', 'POST', params as unknown as Record<string, unknown>, config, 'uploadWaybill');
}
