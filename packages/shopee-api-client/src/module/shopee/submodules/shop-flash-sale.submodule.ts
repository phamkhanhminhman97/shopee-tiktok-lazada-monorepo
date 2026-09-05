import { ShopeeConfig } from '../dto/request/config.request';
import {
  addShopFlashSaleItems,
  createShopFlashSale,
  deleteShopFlashSale,
  deleteShopFlashSaleItems,
  getItemCriteria,
  getShopFlashSale,
  getShopFlashSaleItems,
  getShopFlashSaleList,
  getTimeSlotId,
  updateShopFlashSale,
  updateShopFlashSaleItems,
} from '../api/shop-flash-sale.api';
import {
  ShopeeAddShopFlashSaleItemsRequest,
  ShopeeCreateShopFlashSaleRequest,
  ShopeeDeleteShopFlashSaleRequest,
  ShopeeDeleteShopFlashSaleItemsRequest,
  ShopeeGetItemCriteriaRequest,
  ShopeeGetShopFlashSaleRequest,
  ShopeeGetShopFlashSaleItemsRequest,
  ShopeeGetShopFlashSaleListRequest,
  ShopeeGetTimeSlotIdRequest,
  ShopeeUpdateShopFlashSaleRequest,
  ShopeeUpdateShopFlashSaleItemsRequest,
} from '../dto/request/shop-flash-sale.request';
import {
  ShopeeAddShopFlashSaleItemsResponse,
  ShopeeCreateShopFlashSaleResponse,
  ShopeeDeleteShopFlashSaleResponse,
  ShopeeDeleteShopFlashSaleItemsResponse,
  ShopeeGetItemCriteriaResponse,
  ShopeeGetShopFlashSaleResponse,
  ShopeeGetShopFlashSaleItemsResponse,
  ShopeeGetShopFlashSaleListResponse,
  ShopeeGetTimeSlotIdResponse,
  ShopeeUpdateShopFlashSaleResponse,
  ShopeeUpdateShopFlashSaleItemsResponse,
} from '../dto/response/shop-flash-sale.response';

/**
 * Shopee `v2.shop_flash_sale.*` API namespace.
 *
 * Access via `shopee.shopFlashSale.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeShopFlashSale {
  constructor(private config: ShopeeConfig) {}

  async addShopFlashSaleItems(params: ShopeeAddShopFlashSaleItemsRequest): Promise<ShopeeAddShopFlashSaleItemsResponse> {
    return await addShopFlashSaleItems(params, this.config);
  }

  async createShopFlashSale(params: ShopeeCreateShopFlashSaleRequest): Promise<ShopeeCreateShopFlashSaleResponse> {
    return await createShopFlashSale(params, this.config);
  }

  async deleteShopFlashSale(params: ShopeeDeleteShopFlashSaleRequest): Promise<ShopeeDeleteShopFlashSaleResponse> {
    return await deleteShopFlashSale(params, this.config);
  }

  async deleteShopFlashSaleItems(params: ShopeeDeleteShopFlashSaleItemsRequest): Promise<ShopeeDeleteShopFlashSaleItemsResponse> {
    return await deleteShopFlashSaleItems(params, this.config);
  }

  async getItemCriteria(): Promise<ShopeeGetItemCriteriaResponse> {
    return await getItemCriteria(this.config);
  }

  async getShopFlashSale(params: ShopeeGetShopFlashSaleRequest): Promise<ShopeeGetShopFlashSaleResponse> {
    return await getShopFlashSale(params, this.config);
  }

  async getShopFlashSaleItems(params: ShopeeGetShopFlashSaleItemsRequest): Promise<ShopeeGetShopFlashSaleItemsResponse> {
    return await getShopFlashSaleItems(params, this.config);
  }

  async getShopFlashSaleList(params: ShopeeGetShopFlashSaleListRequest): Promise<ShopeeGetShopFlashSaleListResponse> {
    return await getShopFlashSaleList(params, this.config);
  }

  async getTimeSlotId(params: ShopeeGetTimeSlotIdRequest): Promise<ShopeeGetTimeSlotIdResponse> {
    return await getTimeSlotId(params, this.config);
  }

  async updateShopFlashSale(params: ShopeeUpdateShopFlashSaleRequest): Promise<ShopeeUpdateShopFlashSaleResponse> {
    return await updateShopFlashSale(params, this.config);
  }

  async updateShopFlashSaleItems(params: ShopeeUpdateShopFlashSaleItemsRequest): Promise<ShopeeUpdateShopFlashSaleItemsResponse> {
    return await updateShopFlashSaleItems(params, this.config);
  }
}
