import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokGetGlobalSellerWarehousesResponse,
  TiktokGetWarehousesDeliveryOptionsResponse,
  TiktokGetWarehousesResponse,
} from '../dto/response/logistic-v3.response';

/**
 * Get a list of warehouses bound to the current shop.
 *
 * GET /logistics/202309/warehouses
 */
export async function getWarehouseList(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetWarehousesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetWarehousesResponse>>(
    '/logistics/202309/warehouses',
    'GET',
    {},
    config,
    'getWarehouseList',
  );
}

/**
 * Get global seller warehouses, typically used for cross-border sellers.
 *
 * GET /logistics/202309/global_warehouses
 */
export async function getGlobalSellerWarehouse(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetGlobalSellerWarehousesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetGlobalSellerWarehousesResponse>>(
    '/logistics/202309/global_warehouses',
    'GET',
    {},
    config,
    'getGlobalSellerWarehouse',
  );
}

/**
 * Get delivery options available for the specified warehouse.
 *
 * GET /logistics/202309/warehouses/{warehouse_id}/delivery_options
 *
 * @param warehouse_id - The ID of the warehouse
 */
export async function getWarehouseDeliveryOptions(warehouse_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>>(
    `/logistics/202309/warehouses/${warehouse_id}/delivery_options`,
    'GET',
    {},
    config,
    'getWarehouseDeliveryOptions',
  );
}

/**
 * Get available shipping providers for the specified delivery option.
 *
 * GET /logistics/202309/delivery_options/{delivery_option_id}/shipping_providers
 *
 * @param delivery_option_id - The ID of the delivery option
 */
export async function getShippingProviders(delivery_option_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetWarehousesDeliveryOptionsResponse>>(
    `/logistics/202309/delivery_options/${delivery_option_id}/shipping_providers`,
    'GET',
    {},
    config,
    'getShippingProviders',
  );
}
