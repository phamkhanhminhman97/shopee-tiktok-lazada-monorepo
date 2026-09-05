import { ShopeeConfig } from '../dto/request/config.request';
import {
  addAddOnDeal,
  addAddOnDealMainItem,
  addAddOnDealSubItem,
  deleteAddOnDeal,
  deleteAddOnDealMainItem,
  deleteAddOnDealSubItem,
  endAddOnDeal,
  getAddOnDeal,
  getAddOnDealList,
  getAddOnDealMainItem,
  getAddOnDealSubItem,
  updateAddOnDeal,
  updateAddOnDealMainItem,
  updateAddOnDealSubItem,
} from '../api/add-on-deal.api';
import {
  ShopeeAddAddOnDealRequest,
  ShopeeAddAddOnDealMainItemRequest,
  ShopeeAddAddOnDealSubItemRequest,
  ShopeeDeleteAddOnDealRequest,
  ShopeeDeleteAddOnDealMainItemRequest,
  ShopeeDeleteAddOnDealSubItemRequest,
  ShopeeEndAddOnDealRequest,
  ShopeeGetAddOnDealRequest,
  ShopeeGetAddOnDealListRequest,
  ShopeeGetAddOnDealMainItemRequest,
  ShopeeGetAddOnDealSubItemRequest,
  ShopeeUpdateAddOnDealRequest,
  ShopeeUpdateAddOnDealMainItemRequest,
  ShopeeUpdateAddOnDealSubItemRequest,
} from '../dto/request/add-on-deal.request';
import {
  ShopeeAddAddOnDealResponse,
  ShopeeAddAddOnDealMainItemResponse,
  ShopeeAddAddOnDealSubItemResponse,
  ShopeeDeleteAddOnDealResponse,
  ShopeeDeleteAddOnDealMainItemResponse,
  ShopeeDeleteAddOnDealSubItemResponse,
  ShopeeEndAddOnDealResponse,
  ShopeeGetAddOnDealResponse,
  ShopeeGetAddOnDealListResponse,
  ShopeeGetAddOnDealMainItemResponse,
  ShopeeGetAddOnDealSubItemResponse,
  ShopeeUpdateAddOnDealResponse,
  ShopeeUpdateAddOnDealMainItemResponse,
  ShopeeUpdateAddOnDealSubItemResponse,
} from '../dto/response/add-on-deal.response';

/**
 * Shopee `v2.add_on_deal.*` API namespace.
 *
 * Access via `shopee.addOnDeal.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeAddOnDeal {
  constructor(private config: ShopeeConfig) {}

  async addAddOnDeal(params: ShopeeAddAddOnDealRequest): Promise<ShopeeAddAddOnDealResponse> {
    return await addAddOnDeal(params, this.config);
  }

  async addAddOnDealMainItem(params: ShopeeAddAddOnDealMainItemRequest): Promise<ShopeeAddAddOnDealMainItemResponse> {
    return await addAddOnDealMainItem(params, this.config);
  }

  async addAddOnDealSubItem(params: ShopeeAddAddOnDealSubItemRequest): Promise<ShopeeAddAddOnDealSubItemResponse> {
    return await addAddOnDealSubItem(params, this.config);
  }

  async deleteAddOnDeal(params: ShopeeDeleteAddOnDealRequest): Promise<ShopeeDeleteAddOnDealResponse> {
    return await deleteAddOnDeal(params, this.config);
  }

  async deleteAddOnDealMainItem(params: ShopeeDeleteAddOnDealMainItemRequest): Promise<ShopeeDeleteAddOnDealMainItemResponse> {
    return await deleteAddOnDealMainItem(params, this.config);
  }

  async deleteAddOnDealSubItem(params: ShopeeDeleteAddOnDealSubItemRequest): Promise<ShopeeDeleteAddOnDealSubItemResponse> {
    return await deleteAddOnDealSubItem(params, this.config);
  }

  async endAddOnDeal(params: ShopeeEndAddOnDealRequest): Promise<ShopeeEndAddOnDealResponse> {
    return await endAddOnDeal(params, this.config);
  }

  async getAddOnDeal(params: ShopeeGetAddOnDealRequest): Promise<ShopeeGetAddOnDealResponse> {
    return await getAddOnDeal(params, this.config);
  }

  async getAddOnDealList(params: ShopeeGetAddOnDealListRequest): Promise<ShopeeGetAddOnDealListResponse> {
    return await getAddOnDealList(params, this.config);
  }

  async getAddOnDealMainItem(params: ShopeeGetAddOnDealMainItemRequest): Promise<ShopeeGetAddOnDealMainItemResponse> {
    return await getAddOnDealMainItem(params, this.config);
  }

  async getAddOnDealSubItem(params: ShopeeGetAddOnDealSubItemRequest): Promise<ShopeeGetAddOnDealSubItemResponse> {
    return await getAddOnDealSubItem(params, this.config);
  }

  async updateAddOnDeal(params: ShopeeUpdateAddOnDealRequest): Promise<ShopeeUpdateAddOnDealResponse> {
    return await updateAddOnDeal(params, this.config);
  }

  async updateAddOnDealMainItem(params: ShopeeUpdateAddOnDealMainItemRequest): Promise<ShopeeUpdateAddOnDealMainItemResponse> {
    return await updateAddOnDealMainItem(params, this.config);
  }

  async updateAddOnDealSubItem(params: ShopeeUpdateAddOnDealSubItemRequest): Promise<ShopeeUpdateAddOnDealSubItemResponse> {
    return await updateAddOnDealSubItem(params, this.config);
  }
}
