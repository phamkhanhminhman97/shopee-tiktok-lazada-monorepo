import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
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
 * getClipVideoPerformance via Shopee `v2.principal.get_clip_video_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getClipVideoPerformance(params: ShopeeGetClipVideoPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetClipVideoPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetClipVideoPerformanceResponse>('/principal/get_clip_video_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getClipVideoPerformance',
  });
}

/**
 * getContentAffiliatePerformance via Shopee `v2.principal.get_content_affiliate_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getContentAffiliatePerformance(params: ShopeeGetContentAffiliatePerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetContentAffiliatePerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetContentAffiliatePerformanceResponse>('/principal/get_content_affiliate_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getContentAffiliatePerformance',
  });
}

/**
 * getPrincipalAffiliatePerformance via Shopee `v2.principal.get_principal_affiliate_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPrincipalAffiliatePerformance(params: ShopeeGetPrincipalAffiliatePerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetPrincipalAffiliatePerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPrincipalAffiliatePerformanceResponse>('/principal/get_principal_affiliate_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPrincipalAffiliatePerformance',
  });
}

/**
 * getPrincipalLivestreamPerformance via Shopee `v2.principal.get_principal_livestream_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPrincipalLivestreamPerformance(params: ShopeeGetPrincipalLivestreamPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetPrincipalLivestreamPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPrincipalLivestreamPerformanceResponse>('/principal/get_principal_livestream_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPrincipalLivestreamPerformance',
  });
}

/**
 * getPrincipalSalesPerformanceDetail via Shopee `v2.principal.get_principal_sales_performance_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPrincipalSalesPerformanceDetail(params: ShopeeGetPrincipalSalesPerformanceDetailRequest, config: ShopeeConfig): Promise<ShopeeGetPrincipalSalesPerformanceDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPrincipalSalesPerformanceDetailResponse>('/principal/get_principal_sales_performance_detail', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPrincipalSalesPerformanceDetail',
  });
}

/**
 * getPrincipalVideoPerformance via Shopee `v2.principal.get_principal_video_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getPrincipalVideoPerformance(params: ShopeeGetPrincipalVideoPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetPrincipalVideoPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetPrincipalVideoPerformanceResponse>('/principal/get_principal_video_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getPrincipalVideoPerformance',
  });
}

/**
 * getSessionLivestreamPerformance via Shopee `v2.principal.get_session_livestream_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getSessionLivestreamPerformance(params: ShopeeGetSessionLivestreamPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetSessionLivestreamPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetSessionLivestreamPerformanceResponse>('/principal/get_session_livestream_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getSessionLivestreamPerformance',
  });
}

/**
 * getShopAffiliatePerformance via Shopee `v2.principal.get_shop_affiliate_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopAffiliatePerformance(params: ShopeeGetShopAffiliatePerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetShopAffiliatePerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopAffiliatePerformanceResponse>('/principal/get_shop_affiliate_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopAffiliatePerformance',
  });
}

/**
 * getShopLivestreamPerformance via Shopee `v2.principal.get_shop_livestream_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopLivestreamPerformance(params: ShopeeGetShopLivestreamPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetShopLivestreamPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopLivestreamPerformanceResponse>('/principal/get_shop_livestream_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopLivestreamPerformance',
  });
}

/**
 * getShopSalesPerformanceDetail via Shopee `v2.principal.get_shop_sales_performance_detail`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopSalesPerformanceDetail(params: ShopeeGetShopSalesPerformanceDetailRequest, config: ShopeeConfig): Promise<ShopeeGetShopSalesPerformanceDetailResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopSalesPerformanceDetailResponse>('/principal/get_shop_sales_performance_detail', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopSalesPerformanceDetail',
  });
}

/**
 * getShopVideoPerformance via Shopee `v2.principal.get_shop_video_performance`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopVideoPerformance(params: ShopeeGetShopVideoPerformanceRequest, config: ShopeeConfig): Promise<ShopeeGetShopVideoPerformanceResponse> {
  return ShopeeHelper.callShopeeApi<ShopeeGetShopVideoPerformanceResponse>('/principal/get_shop_video_performance', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopVideoPerformance',
  });
}
