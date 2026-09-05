import { ShopeeConfig } from '../dto/request/config.request';
import {
  getMerchantsByPartner,
  getShopeeIpRanges,
  getShopsByPartner,
  getTokenByResendCode,
} from '../api/public.api';
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
 * Shopee `v2.public.*` API namespace.
 *
 * Access via `shopee.publicApi.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeePublicApi {
  constructor(private config: ShopeeConfig) {}

  async getMerchantsByPartner(params: ShopeeGetMerchantsByPartnerRequest = {}): Promise<ShopeeGetMerchantsByPartnerResponse> {
    return await getMerchantsByPartner(params, this.config);
  }

  async getShopeeIpRanges(): Promise<ShopeeGetShopeeIpRangesResponse> {
    return await getShopeeIpRanges(this.config);
  }

  async getShopsByPartner(params: ShopeeGetShopsByPartnerRequest = {}): Promise<ShopeeGetShopsByPartnerResponse> {
    return await getShopsByPartner(params, this.config);
  }

  async getTokenByResendCode(params: ShopeeGetTokenByResendCodeRequest): Promise<ShopeeGetTokenByResendCodeResponse> {
    return await getTokenByResendCode(params, this.config);
  }
}
