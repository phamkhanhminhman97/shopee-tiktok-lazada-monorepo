import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import {
  ShopeeGetMerchantsByPartnerRequest,
  ShopeeGetShopeeIpRangesRequest,
  ShopeeGetShopsByPartnerRequest,
  ShopeeGetTokenByResendCodeRequest,
} from '../dto/request/public.request';
import {
  ShopeeGetMerchantsByPartnerResponse,
  ShopeeGetShopeeIpRangesResponse,
  ShopeeGetShopsByPartnerResponse,
  ShopeeGetTokenByResendCodeResponse,
} from '../dto/response/public.response';

/**
 * getMerchantsByPartner via Shopee `v2.public.get_merchants_by_partner`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getMerchantsByPartner(params: ShopeeGetMerchantsByPartnerRequest = {}, config: ShopeeConfig): Promise<ShopeeGetMerchantsByPartnerResponse> {
  return ShopeeHelper.callShopeePublicApi<ShopeeGetMerchantsByPartnerResponse>('/public/get_merchants_by_partner', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getMerchantsByPartner',
  });
}

/**
 * getShopeeIpRanges via Shopee `v2.public.get_shopee_ip_ranges`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopeeIpRanges(config: ShopeeConfig): Promise<ShopeeGetShopeeIpRangesResponse> {
  return ShopeeHelper.callShopeePublicApi<ShopeeGetShopeeIpRangesResponse>('/public/get_shopee_ip_ranges', config, {
    method: 'GET',
    params: undefined as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopeeIpRanges',
  });
}

/**
 * getShopsByPartner via Shopee `v2.public.get_shops_by_partner`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getShopsByPartner(params: ShopeeGetShopsByPartnerRequest = {}, config: ShopeeConfig): Promise<ShopeeGetShopsByPartnerResponse> {
  return ShopeeHelper.callShopeePublicApi<ShopeeGetShopsByPartnerResponse>('/public/get_shops_by_partner', config, {
    method: 'GET',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getShopsByPartner',
  });
}

/**
 * getTokenByResendCode via Shopee `v2.public.get_token_by_resend_code`.
 *
 * @see https://open.shopee.com for the official Shopee Open Platform API reference.
 */
export async function getTokenByResendCode(params: ShopeeGetTokenByResendCodeRequest, config: ShopeeConfig): Promise<ShopeeGetTokenByResendCodeResponse> {
  return ShopeeHelper.callShopeePublicApi<ShopeeGetTokenByResendCodeResponse>('/public/get_token_by_resend_code', config, {
    method: 'POST',
    params: params as unknown as Record<string, string | number | boolean | Array<string | number | boolean> | undefined> | undefined,
    context: 'getTokenByResendCode',
  });
}
