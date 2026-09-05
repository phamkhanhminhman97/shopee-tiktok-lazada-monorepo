import { ShopeeConfig } from '../dto/request/config.request';
import {
  addTopPicks,
  deleteTopPicks,
  getTopPicksList,
  updateTopPicks,
} from '../api/top-picks.api';
import {
  ShopeeAddTopPicksRequest,
  ShopeeDeleteTopPicksRequest,
  ShopeeGetTopPicksListRequest,
  ShopeeUpdateTopPicksRequest,
} from '../dto/request/top-picks.request';
import {
  ShopeeAddTopPicksResponse,
  ShopeeDeleteTopPicksResponse,
  ShopeeGetTopPicksListResponse,
  ShopeeUpdateTopPicksResponse,
} from '../dto/response/top-picks.response';

/**
 * Shopee `v2.top_picks.*` API namespace.
 *
 * Access via `shopee.topPicks.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeTopPicks {
  constructor(private config: ShopeeConfig) {}

  async addTopPicks(params: ShopeeAddTopPicksRequest): Promise<ShopeeAddTopPicksResponse> {
    return await addTopPicks(params, this.config);
  }

  async deleteTopPicks(params: ShopeeDeleteTopPicksRequest): Promise<ShopeeDeleteTopPicksResponse> {
    return await deleteTopPicks(params, this.config);
  }

  async getTopPicksList(): Promise<ShopeeGetTopPicksListResponse> {
    return await getTopPicksList(this.config);
  }

  async updateTopPicks(params: ShopeeUpdateTopPicksRequest): Promise<ShopeeUpdateTopPicksResponse> {
    return await updateTopPicks(params, this.config);
  }
}
