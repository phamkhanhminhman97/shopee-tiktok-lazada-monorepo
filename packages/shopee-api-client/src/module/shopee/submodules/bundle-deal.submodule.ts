import { ShopeeConfig } from '../dto/request/config.request';
import {
  addBundleDeal,
  addBundleDealItem,
  deleteBundleDeal,
  deleteBundleDealItem,
  endBundleDeal,
  getBundleDeal,
  getBundleDealItem,
  getBundleDealList,
  updateBundleDeal,
  updateBundleDealItem,
} from '../api/bundle-deal.api';
import {
  ShopeeAddBundleDealRequest,
  ShopeeAddBundleDealItemRequest,
  ShopeeDeleteBundleDealRequest,
  ShopeeDeleteBundleDealItemRequest,
  ShopeeEndBundleDealRequest,
  ShopeeGetBundleDealRequest,
  ShopeeGetBundleDealItemRequest,
  ShopeeGetBundleDealListRequest,
  ShopeeUpdateBundleDealRequest,
  ShopeeUpdateBundleDealItemRequest,
} from '../dto/request/bundle-deal.request';
import {
  ShopeeAddBundleDealResponse,
  ShopeeAddBundleDealItemResponse,
  ShopeeDeleteBundleDealResponse,
  ShopeeDeleteBundleDealItemResponse,
  ShopeeEndBundleDealResponse,
  ShopeeGetBundleDealResponse,
  ShopeeGetBundleDealItemResponse,
  ShopeeGetBundleDealListResponse,
  ShopeeUpdateBundleDealResponse,
  ShopeeUpdateBundleDealItemResponse,
} from '../dto/response/bundle-deal.response';

/**
 * Shopee `v2.bundle_deal.*` API namespace.
 *
 * Access via `shopee.bundleDeal.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeBundleDeal {
  constructor(private config: ShopeeConfig) {}

  async addBundleDeal(params: ShopeeAddBundleDealRequest): Promise<ShopeeAddBundleDealResponse> {
    return await addBundleDeal(params, this.config);
  }

  async addBundleDealItem(params: ShopeeAddBundleDealItemRequest): Promise<ShopeeAddBundleDealItemResponse> {
    return await addBundleDealItem(params, this.config);
  }

  async deleteBundleDeal(params: ShopeeDeleteBundleDealRequest): Promise<ShopeeDeleteBundleDealResponse> {
    return await deleteBundleDeal(params, this.config);
  }

  async deleteBundleDealItem(params: ShopeeDeleteBundleDealItemRequest): Promise<ShopeeDeleteBundleDealItemResponse> {
    return await deleteBundleDealItem(params, this.config);
  }

  async endBundleDeal(params: ShopeeEndBundleDealRequest): Promise<ShopeeEndBundleDealResponse> {
    return await endBundleDeal(params, this.config);
  }

  async getBundleDeal(params: ShopeeGetBundleDealRequest): Promise<ShopeeGetBundleDealResponse> {
    return await getBundleDeal(params, this.config);
  }

  async getBundleDealItem(params: ShopeeGetBundleDealItemRequest): Promise<ShopeeGetBundleDealItemResponse> {
    return await getBundleDealItem(params, this.config);
  }

  async getBundleDealList(params: ShopeeGetBundleDealListRequest = {}): Promise<ShopeeGetBundleDealListResponse> {
    return await getBundleDealList(params, this.config);
  }

  async updateBundleDeal(params: ShopeeUpdateBundleDealRequest): Promise<ShopeeUpdateBundleDealResponse> {
    return await updateBundleDeal(params, this.config);
  }

  async updateBundleDealItem(params: ShopeeUpdateBundleDealItemRequest): Promise<ShopeeUpdateBundleDealItemResponse> {
    return await updateBundleDealItem(params, this.config);
  }
}
