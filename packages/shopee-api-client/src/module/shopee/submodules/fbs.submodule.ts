import { ShopeeConfig } from '../dto/request/config.request';
import {
  queryBrShopBlockStatus,
  queryBrShopEnrollmentStatus,
  queryBrShopInvoiceError,
  queryBrSkuBlockStatus,
} from '../api/fbs.api';
import {
  ShopeeQueryBrShopBlockStatusRequest,
  ShopeeQueryBrShopEnrollmentStatusRequest,
  ShopeeQueryBrShopInvoiceErrorRequest,
  ShopeeQueryBrSkuBlockStatusRequest,
} from '../dto/request/fbs.request';
import {
  ShopeeQueryBrShopBlockStatusResponse,
  ShopeeQueryBrShopEnrollmentStatusResponse,
  ShopeeQueryBrShopInvoiceErrorResponse,
  ShopeeQueryBrSkuBlockStatusResponse,
} from '../dto/response/fbs.response';

/**
 * Shopee `v2.fbs.*` API namespace.
 *
 * Access via `shopee.fbs.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeFbs {
  constructor(private config: ShopeeConfig) {}

  async queryBrShopBlockStatus(): Promise<ShopeeQueryBrShopBlockStatusResponse> {
    return await queryBrShopBlockStatus(this.config);
  }

  async queryBrShopEnrollmentStatus(): Promise<ShopeeQueryBrShopEnrollmentStatusResponse> {
    return await queryBrShopEnrollmentStatus(this.config);
  }

  async queryBrShopInvoiceError(params: ShopeeQueryBrShopInvoiceErrorRequest = {}): Promise<ShopeeQueryBrShopInvoiceErrorResponse> {
    return await queryBrShopInvoiceError(params, this.config);
  }

  async queryBrSkuBlockStatus(params: ShopeeQueryBrSkuBlockStatusRequest): Promise<ShopeeQueryBrSkuBlockStatusResponse> {
    return await queryBrSkuBlockStatus(params, this.config);
  }
}
