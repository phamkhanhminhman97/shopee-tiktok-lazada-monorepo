import { ShopeeConfig } from '../dto/request/config.request';
import {
  addDiscount,
  addDiscountItem,
  deleteDiscount,
  deleteDiscountItem,
  deleteSipDiscount,
  endDiscount,
  getDiscount,
  getDiscountList,
  getSipDiscounts,
  setSipDiscount,
  updateDiscount,
  updateDiscountItem,
} from '../api/discount.api';
import {
  ShopeeAddDiscountRequest,
  ShopeeAddDiscountItemRequest,
  ShopeeDeleteDiscountRequest,
  ShopeeDeleteDiscountItemRequest,
  ShopeeDeleteSipDiscountRequest,
  ShopeeEndDiscountRequest,
  ShopeeGetDiscountRequest,
  ShopeeGetDiscountListRequest,
  ShopeeGetSipDiscountsRequest,
  ShopeeSetSipDiscountRequest,
  ShopeeUpdateDiscountRequest,
  ShopeeUpdateDiscountItemRequest,
} from '../dto/request/discount.request';
import {
  ShopeeAddDiscountResponse,
  ShopeeAddDiscountItemResponse,
  ShopeeDeleteDiscountResponse,
  ShopeeDeleteDiscountItemResponse,
  ShopeeDeleteSipDiscountResponse,
  ShopeeEndDiscountResponse,
  ShopeeGetDiscountResponse,
  ShopeeGetDiscountListResponse,
  ShopeeGetSipDiscountsResponse,
  ShopeeSetSipDiscountResponse,
  ShopeeUpdateDiscountResponse,
  ShopeeUpdateDiscountItemResponse,
} from '../dto/response/discount.response';

/**
 * Shopee `v2.discount.*` API namespace.
 *
 * Access via `shopee.discount.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeDiscount {
  constructor(private config: ShopeeConfig) {}

  async addDiscount(params: ShopeeAddDiscountRequest): Promise<ShopeeAddDiscountResponse> {
    return await addDiscount(params, this.config);
  }

  async addDiscountItem(params: ShopeeAddDiscountItemRequest): Promise<ShopeeAddDiscountItemResponse> {
    return await addDiscountItem(params, this.config);
  }

  async deleteDiscount(params: ShopeeDeleteDiscountRequest): Promise<ShopeeDeleteDiscountResponse> {
    return await deleteDiscount(params, this.config);
  }

  async deleteDiscountItem(params: ShopeeDeleteDiscountItemRequest): Promise<ShopeeDeleteDiscountItemResponse> {
    return await deleteDiscountItem(params, this.config);
  }

  async deleteSipDiscount(params: ShopeeDeleteSipDiscountRequest): Promise<ShopeeDeleteSipDiscountResponse> {
    return await deleteSipDiscount(params, this.config);
  }

  async endDiscount(params: ShopeeEndDiscountRequest): Promise<ShopeeEndDiscountResponse> {
    return await endDiscount(params, this.config);
  }

  async getDiscount(params: ShopeeGetDiscountRequest): Promise<ShopeeGetDiscountResponse> {
    return await getDiscount(params, this.config);
  }

  async getDiscountList(params: ShopeeGetDiscountListRequest): Promise<ShopeeGetDiscountListResponse> {
    return await getDiscountList(params, this.config);
  }

  async getSipDiscounts(params: ShopeeGetSipDiscountsRequest = {}): Promise<ShopeeGetSipDiscountsResponse> {
    return await getSipDiscounts(params, this.config);
  }

  async setSipDiscount(params: ShopeeSetSipDiscountRequest): Promise<ShopeeSetSipDiscountResponse> {
    return await setSipDiscount(params, this.config);
  }

  async updateDiscount(params: ShopeeUpdateDiscountRequest): Promise<ShopeeUpdateDiscountResponse> {
    return await updateDiscount(params, this.config);
  }

  async updateDiscountItem(params: ShopeeUpdateDiscountItemRequest): Promise<ShopeeUpdateDiscountItemResponse> {
    return await updateDiscountItem(params, this.config);
  }
}
