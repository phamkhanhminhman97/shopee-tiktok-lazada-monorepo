import { ShopeeConfig } from '../dto/request/config.request';
import {
  getClipVideoPerformance,
  getContentAffiliatePerformance,
  getPrincipalAffiliatePerformance,
  getPrincipalLivestreamPerformance,
  getPrincipalSalesPerformanceDetail,
  getPrincipalVideoPerformance,
  getSessionLivestreamPerformance,
  getShopAffiliatePerformance,
  getShopLivestreamPerformance,
  getShopSalesPerformanceDetail,
  getShopVideoPerformance,
} from '../api/principal.api';
import {
  ShopeeGetClipVideoPerformanceRequest,
  ShopeeGetContentAffiliatePerformanceRequest,
  ShopeeGetPrincipalAffiliatePerformanceRequest,
  ShopeeGetPrincipalLivestreamPerformanceRequest,
  ShopeeGetPrincipalSalesPerformanceDetailRequest,
  ShopeeGetPrincipalVideoPerformanceRequest,
  ShopeeGetSessionLivestreamPerformanceRequest,
  ShopeeGetShopAffiliatePerformanceRequest,
  ShopeeGetShopLivestreamPerformanceRequest,
  ShopeeGetShopSalesPerformanceDetailRequest,
  ShopeeGetShopVideoPerformanceRequest,
} from '../dto/request/principal.request';
import {
  ShopeeGetClipVideoPerformanceResponse,
  ShopeeGetContentAffiliatePerformanceResponse,
  ShopeeGetPrincipalAffiliatePerformanceResponse,
  ShopeeGetPrincipalLivestreamPerformanceResponse,
  ShopeeGetPrincipalSalesPerformanceDetailResponse,
  ShopeeGetPrincipalVideoPerformanceResponse,
  ShopeeGetSessionLivestreamPerformanceResponse,
  ShopeeGetShopAffiliatePerformanceResponse,
  ShopeeGetShopLivestreamPerformanceResponse,
  ShopeeGetShopSalesPerformanceDetailResponse,
  ShopeeGetShopVideoPerformanceResponse,
} from '../dto/response/principal.response';

/**
 * Shopee `v2.principal.*` API namespace.
 *
 * Access via `shopee.principal.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeePrincipal {
  constructor(private config: ShopeeConfig) {}

  async getClipVideoPerformance(params: ShopeeGetClipVideoPerformanceRequest): Promise<ShopeeGetClipVideoPerformanceResponse> {
    return await getClipVideoPerformance(params, this.config);
  }

  async getContentAffiliatePerformance(params: ShopeeGetContentAffiliatePerformanceRequest): Promise<ShopeeGetContentAffiliatePerformanceResponse> {
    return await getContentAffiliatePerformance(params, this.config);
  }

  async getPrincipalAffiliatePerformance(params: ShopeeGetPrincipalAffiliatePerformanceRequest): Promise<ShopeeGetPrincipalAffiliatePerformanceResponse> {
    return await getPrincipalAffiliatePerformance(params, this.config);
  }

  async getPrincipalLivestreamPerformance(params: ShopeeGetPrincipalLivestreamPerformanceRequest): Promise<ShopeeGetPrincipalLivestreamPerformanceResponse> {
    return await getPrincipalLivestreamPerformance(params, this.config);
  }

  async getPrincipalSalesPerformanceDetail(params: ShopeeGetPrincipalSalesPerformanceDetailRequest): Promise<ShopeeGetPrincipalSalesPerformanceDetailResponse> {
    return await getPrincipalSalesPerformanceDetail(params, this.config);
  }

  async getPrincipalVideoPerformance(params: ShopeeGetPrincipalVideoPerformanceRequest): Promise<ShopeeGetPrincipalVideoPerformanceResponse> {
    return await getPrincipalVideoPerformance(params, this.config);
  }

  async getSessionLivestreamPerformance(params: ShopeeGetSessionLivestreamPerformanceRequest): Promise<ShopeeGetSessionLivestreamPerformanceResponse> {
    return await getSessionLivestreamPerformance(params, this.config);
  }

  async getShopAffiliatePerformance(params: ShopeeGetShopAffiliatePerformanceRequest): Promise<ShopeeGetShopAffiliatePerformanceResponse> {
    return await getShopAffiliatePerformance(params, this.config);
  }

  async getShopLivestreamPerformance(params: ShopeeGetShopLivestreamPerformanceRequest): Promise<ShopeeGetShopLivestreamPerformanceResponse> {
    return await getShopLivestreamPerformance(params, this.config);
  }

  async getShopSalesPerformanceDetail(params: ShopeeGetShopSalesPerformanceDetailRequest): Promise<ShopeeGetShopSalesPerformanceDetailResponse> {
    return await getShopSalesPerformanceDetail(params, this.config);
  }

  async getShopVideoPerformance(params: ShopeeGetShopVideoPerformanceRequest): Promise<ShopeeGetShopVideoPerformanceResponse> {
    return await getShopVideoPerformance(params, this.config);
  }
}
