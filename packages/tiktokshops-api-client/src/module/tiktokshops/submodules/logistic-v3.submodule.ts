import { TiktokConfig } from '../dto/request/config.request';
import {
  getGlobalSellerWarehouse,
  getShippingProviders,
  getWarehouseDeliveryOptions,
  getWarehouseList,
} from '../api/logistic-v3.api';
import {
  TiktokGetGlobalSellerWarehousesResponse,
  TiktokGetWarehousesDeliveryOptionsResponse,
  TiktokGetWarehousesResponse,
} from '../dto/response/logistic-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Logistic` API namespace.
 *
 * Access via `tiktok.logistic.<method>()` on a `TiktokModule` instance.
 */
export class TiktokLogistic {
  constructor(private config: TiktokConfig) {}

  async getWarehouseList(): Promise<TiktokResponseCommon<TiktokGetWarehousesResponse>> {
    return await getWarehouseList(this.config);
  }

  async getGlobalSellerWarehouse(): Promise<TiktokResponseCommon<TiktokGetGlobalSellerWarehousesResponse>> {
    return await getGlobalSellerWarehouse(this.config);
  }

  async getWarehouseDeliveryOptions(warehouse_id: string): Promise<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>> {
    return await getWarehouseDeliveryOptions(warehouse_id, this.config);
  }

  async getShippingProviders(delivery_option_id: string): Promise<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>> {
    return await getShippingProviders(delivery_option_id, this.config);
  }
}
