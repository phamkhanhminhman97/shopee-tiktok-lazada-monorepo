import { LazadaConfig } from '../dto/request/config.request';
import {
  buildFulfillmentSkuRelation,
  cancelFulfillmentOrderForMCL,
  cancelInboundReservation,
  cancelOutboundOrder,
  cancelVasOrder4FBL,
  cancelnBoundOrder,
  checkInboundReservationSlot,
  createFulfillmentOrderForMCL,
  createFulfillmentOrderForMCLV2PNF,
  createFulfillmentSkuDecouple,
  createFulfillmentSkuForFBL,
  createInboundOrder,
  createInboundReservation,
  createOutBoundOrder,
  createProductReinboundOrderForMCL,
  createVasOrder4FBL,
  getChannelStocksForMCL,
  getFulfillmentProductDetail,
  getFulfillmentSkuListForMCL,
  getFulfillmentSkuRelationByScItem,
  getFulfillmentSkuRelationBySku,
  getFulfillmentSkuRelationsByScItems,
  getFulfillmentSkuRelationsBySkus,
  getIcpOrderFile,
  getInboundOrderDetail,
  getInboundOrderList,
  getInboundReservationFile,
  getInventoryChangedSKU,
  getInventoryOccupyDetails,
  getInventoryOperateLog,
  getOutboundOrderDetail,
  getOutboundOrderList,
  getPlatformProductsV2,
  getShipperInfo,
  getStockRule,
  getVasOrderByNo4FBL,
  getWarehouseListForMCL,
  getWarehouseStock,
  getWarehouseStockV3,
  listIcpWarehouse,
  queryFulfillmentOrderForMCL,
  queryInboundReservationOrder,
  queryReverseOrderForMCL,
  removeFulfillmentSkuRelation,
  returnCancellation,
  returnOrderCreation,
  setStockRule,
  updateFulfillmentSkuDecouple,
  uploadWaybill,
} from '../api/fbl.api';
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
 * Lazada `fbl-api` API namespace.
 *
 * Access via `lazada.fbl.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFbl {
  constructor(private config: LazadaConfig) {}

  async getChannelStocksForMCL(params: FblGetChannelStocksForMCLRequest): Promise<FblGetChannelStocksForMCLResponse> {
    return await getChannelStocksForMCL(params, this.config);
  }

  async queryFulfillmentOrderForMCL(params: FblQueryFulfillmentOrderForMCLRequest): Promise<FblQueryFulfillmentOrderForMCLResponse> {
    return await queryFulfillmentOrderForMCL(params, this.config);
  }

  async getFulfillmentProductDetail(params: FblGetFulfillmentProductDetailRequest): Promise<FblGetFulfillmentProductDetailResponse> {
    return await getFulfillmentProductDetail(params, this.config);
  }

  async getFulfillmentSkuListForMCL(params: FblGetFulfillmentSkuListForMCLRequest): Promise<FblGetFulfillmentSkuListForMCLResponse> {
    return await getFulfillmentSkuListForMCL(params, this.config);
  }

  async getFulfillmentSkuRelationByScItem(params: FblGetFulfillmentSkuRelationByScItemRequest): Promise<FblGetFulfillmentSkuRelationByScItemResponse> {
    return await getFulfillmentSkuRelationByScItem(params, this.config);
  }

  async getFulfillmentSkuRelationsByScItems(params: FblGetFulfillmentSkuRelationsByScItemsRequest): Promise<FblGetFulfillmentSkuRelationsByScItemsResponse> {
    return await getFulfillmentSkuRelationsByScItems(params, this.config);
  }

  async getFulfillmentSkuRelationBySku(params: FblGetFulfillmentSkuRelationBySkuRequest): Promise<FblGetFulfillmentSkuRelationBySkuResponse> {
    return await getFulfillmentSkuRelationBySku(params, this.config);
  }

  async getFulfillmentSkuRelationsBySkus(params: FblGetFulfillmentSkuRelationsBySkusRequest): Promise<FblGetFulfillmentSkuRelationsBySkusResponse> {
    return await getFulfillmentSkuRelationsBySkus(params, this.config);
  }

  async getIcpOrderFile(params: FblGetIcpOrderFileRequest): Promise<FblGetIcpOrderFileResponse> {
    return await getIcpOrderFile(params, this.config);
  }

  async listIcpWarehouse(params: FblListIcpWarehouseRequest): Promise<FblListIcpWarehouseResponse> {
    return await listIcpWarehouse(params, this.config);
  }

  async getInboundOrderDetail(params: FblGetInboundOrderDetailRequest): Promise<FblGetInboundOrderDetailResponse> {
    return await getInboundOrderDetail(params, this.config);
  }

  async getInboundOrderList(params: FblGetInboundOrderListRequest): Promise<FblGetInboundOrderListResponse> {
    return await getInboundOrderList(params, this.config);
  }

  async checkInboundReservationSlot(params: FblCheckInboundReservationSlotRequest): Promise<FblCheckInboundReservationSlotResponse> {
    return await checkInboundReservationSlot(params, this.config);
  }

  async getInboundReservationFile(params: FblGetInboundReservationFileRequest): Promise<FblGetInboundReservationFileResponse> {
    return await getInboundReservationFile(params, this.config);
  }

  async queryInboundReservationOrder(params: FblQueryInboundReservationOrderRequest): Promise<FblQueryInboundReservationOrderResponse> {
    return await queryInboundReservationOrder(params, this.config);
  }

  async getInventoryChangedSKU(params: FblGetInventoryChangedSKURequest): Promise<FblGetInventoryChangedSKUResponse> {
    return await getInventoryChangedSKU(params, this.config);
  }

  async getInventoryOccupyDetails(params: FblGetInventoryOccupyDetailsRequest): Promise<FblGetInventoryOccupyDetailsResponse> {
    return await getInventoryOccupyDetails(params, this.config);
  }

  async getInventoryOperateLog(params: FblGetInventoryOperateLogRequest): Promise<FblGetInventoryOperateLogResponse> {
    return await getInventoryOperateLog(params, this.config);
  }

  async getOutboundOrderDetail(params: FblGetOutboundOrderDetailRequest): Promise<FblGetOutboundOrderDetailResponse> {
    return await getOutboundOrderDetail(params, this.config);
  }

  async getOutboundOrderList(params: FblGetOutboundOrderListRequest): Promise<FblGetOutboundOrderListResponse> {
    return await getOutboundOrderList(params, this.config);
  }

  async getPlatformProductsV2(params: FblGetPlatformProductsV2Request): Promise<FblGetPlatformProductsV2Response> {
    return await getPlatformProductsV2(params, this.config);
  }

  async queryReverseOrderForMCL(params: FblQueryReverseOrderForMCLRequest): Promise<FblQueryReverseOrderForMCLResponse> {
    return await queryReverseOrderForMCL(params, this.config);
  }

  async getShipperInfo(): Promise<FblGetShipperInfoResponse> {
    return await getShipperInfo(this.config);
  }

  async getStockRule(params: FblGetStockRuleRequest): Promise<FblGetStockRuleResponse> {
    return await getStockRule(params, this.config);
  }

  async getWarehouseStock(params: FblGetWarehouseStockRequest): Promise<FblGetWarehouseStockResponse> {
    return await getWarehouseStock(params, this.config);
  }

  async getWarehouseStockV3(params: FblGetWarehouseStockV3Request): Promise<FblGetWarehouseStockV3Response> {
    return await getWarehouseStockV3(params, this.config);
  }

  async getVasOrderByNo4FBL(params: FblGetVasOrderByNo4FBLRequest): Promise<FblGetVasOrderByNo4FBLResponse> {
    return await getVasOrderByNo4FBL(params, this.config);
  }

  async getWarehouseListForMCL(params: FblGetWarehouseListForMCLRequest): Promise<FblGetWarehouseListForMCLResponse> {
    return await getWarehouseListForMCL(params, this.config);
  }

  async cancelFulfillmentOrderForMCL(params: FblCancelFulfillmentOrderForMCLRequest): Promise<FblCancelFulfillmentOrderForMCLResponse> {
    return await cancelFulfillmentOrderForMCL(params, this.config);
  }

  async createFulfillmentOrderForMCL(params: FblCreateFulfillmentOrderForMCLRequest): Promise<FblCreateFulfillmentOrderForMCLResponse> {
    return await createFulfillmentOrderForMCL(params, this.config);
  }

  async createFulfillmentOrderForMCLV2PNF(params: FblCreateFulfillmentOrderForMCLV2PNFRequest): Promise<FblCreateFulfillmentOrderForMCLV2PNFResponse> {
    return await createFulfillmentOrderForMCLV2PNF(params, this.config);
  }

  async createFulfillmentSkuDecouple(params: FblCreateFulfillmentSkuDecoupleRequest): Promise<FblCreateFulfillmentSkuDecoupleResponse> {
    return await createFulfillmentSkuDecouple(params, this.config);
  }

  async updateFulfillmentSkuDecouple(params: FblUpdateFulfillmentSkuDecoupleRequest): Promise<FblUpdateFulfillmentSkuDecoupleResponse> {
    return await updateFulfillmentSkuDecouple(params, this.config);
  }

  async createFulfillmentSkuForFBL(params: FblCreateFulfillmentSkuForFBLRequest): Promise<FblCreateFulfillmentSkuForFBLResponse> {
    return await createFulfillmentSkuForFBL(params, this.config);
  }

  async removeFulfillmentSkuRelation(params: FblRemoveFulfillmentSkuRelationRequest): Promise<FblRemoveFulfillmentSkuRelationResponse> {
    return await removeFulfillmentSkuRelation(params, this.config);
  }

  async buildFulfillmentSkuRelation(params: FblBuildFulfillmentSkuRelationRequest): Promise<FblBuildFulfillmentSkuRelationResponse> {
    return await buildFulfillmentSkuRelation(params, this.config);
  }

  async cancelnBoundOrder(params: FblCancelnBoundOrderRequest): Promise<FblCancelnBoundOrderResponse> {
    return await cancelnBoundOrder(params, this.config);
  }

  async createInboundOrder(params: FblCreateInboundOrderRequest): Promise<FblCreateInboundOrderResponse> {
    return await createInboundOrder(params, this.config);
  }

  async cancelInboundReservation(params: FblCancelInboundReservationRequest): Promise<FblCancelInboundReservationResponse> {
    return await cancelInboundReservation(params, this.config);
  }

  async createInboundReservation(params: FblCreateInboundReservationRequest): Promise<FblCreateInboundReservationResponse> {
    return await createInboundReservation(params, this.config);
  }

  async cancelOutboundOrder(params: FblCancelOutboundOrderRequest): Promise<FblCancelOutboundOrderResponse> {
    return await cancelOutboundOrder(params, this.config);
  }

  async createOutBoundOrder(params: FblCreateOutBoundOrderRequest): Promise<FblCreateOutBoundOrderResponse> {
    return await createOutBoundOrder(params, this.config);
  }

  async createProductReinboundOrderForMCL(params: FblCreateProductReinboundOrderForMCLRequest): Promise<FblCreateProductReinboundOrderForMCLResponse> {
    return await createProductReinboundOrderForMCL(params, this.config);
  }

  async returnCancellation(params: FblReturnCancellationRequest): Promise<FblReturnCancellationResponse> {
    return await returnCancellation(params, this.config);
  }

  async returnOrderCreation(params: FblReturnOrderCreationRequest): Promise<FblReturnOrderCreationResponse> {
    return await returnOrderCreation(params, this.config);
  }

  async setStockRule(params: FblSetStockRuleRequest): Promise<FblSetStockRuleResponse> {
    return await setStockRule(params, this.config);
  }

  async cancelVasOrder4FBL(params: FblCancelVasOrder4FBLRequest): Promise<FblCancelVasOrder4FBLResponse> {
    return await cancelVasOrder4FBL(params, this.config);
  }

  async createVasOrder4FBL(params: FblCreateVasOrder4FBLRequest): Promise<FblCreateVasOrder4FBLResponse> {
    return await createVasOrder4FBL(params, this.config);
  }

  async uploadWaybill(params: FblUploadWaybillRequest): Promise<FblUploadWaybillResponse> {
    return await uploadWaybill(params, this.config);
  }
}
