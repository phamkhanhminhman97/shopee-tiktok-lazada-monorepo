import { ShopeeConfig } from '../dto/request/config.request';
import {
  getBoundWhsInfo,
  getCurrentInventory,
  getExpiryReport,
  getFulfillmentMappingInventoryList,
  getStockAging,
  getStockMovement,
} from '../api/sbs.api';
import {
  ShopeeGetBoundWhsInfoRequest,
  ShopeeGetCurrentInventoryRequest,
  ShopeeGetExpiryReportRequest,
  ShopeeGetFulfillmentMappingInventoryListRequest,
  ShopeeGetStockAgingRequest,
  ShopeeGetStockMovementRequest,
} from '../dto/request/sbs.request';
import {
  ShopeeGetBoundWhsInfoResponse,
  ShopeeGetCurrentInventoryResponse,
  ShopeeGetExpiryReportResponse,
  ShopeeGetFulfillmentMappingInventoryListResponse,
  ShopeeGetStockAgingResponse,
  ShopeeGetStockMovementResponse,
} from '../dto/response/sbs.response';

/**
 * Shopee `v2.sbs.*` API namespace.
 *
 * Access via `shopee.sbs.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeSbs {
  constructor(private config: ShopeeConfig) {}

  async getBoundWhsInfo(): Promise<ShopeeGetBoundWhsInfoResponse> {
    return await getBoundWhsInfo(this.config);
  }

  async getCurrentInventory(params: ShopeeGetCurrentInventoryRequest): Promise<ShopeeGetCurrentInventoryResponse> {
    return await getCurrentInventory(params, this.config);
  }

  async getExpiryReport(params: ShopeeGetExpiryReportRequest): Promise<ShopeeGetExpiryReportResponse> {
    return await getExpiryReport(params, this.config);
  }

  async getFulfillmentMappingInventoryList(params: ShopeeGetFulfillmentMappingInventoryListRequest = {}): Promise<ShopeeGetFulfillmentMappingInventoryListResponse> {
    return await getFulfillmentMappingInventoryList(params, this.config);
  }

  async getStockAging(params: ShopeeGetStockAgingRequest): Promise<ShopeeGetStockAgingResponse> {
    return await getStockAging(params, this.config);
  }

  async getStockMovement(params: ShopeeGetStockMovementRequest): Promise<ShopeeGetStockMovementResponse> {
    return await getStockMovement(params, this.config);
  }
}
