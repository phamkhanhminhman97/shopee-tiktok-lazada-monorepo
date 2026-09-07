import { getOrderDetail, getOrderList, getPriceDetail } from './api/v2/order.api';
import { TiktokConfig } from './dto/request/config.request';
import { fetchTokenWithAuthCode, generateAuthLink, getAuthorizedShop, refreshToken } from './api/v2/authorization.api';
import { createProduct, getAttributes, getBrands, getCategories, getProductDetail } from './api/v2/product.api';
import { TiktokGetProductResponse } from './dto/response/product-v3.response';
import { getPackageShippingDocument, getPackageTimeSlots, shipPackage } from './api/v2/fulfillment.api';
import { TiktokRequestShipPackage } from './dto/request/fulfillment.request';
import { TIKTOK_DOCUMENT_TYPE } from './common/constant';
import { TiktokResponseAttributes, TiktokResponseBrands, TiktokResponseCategories } from './dto/response/product.response';
import { TiktokResponseAccessToken, TiktokResponseAuthorized, TiktokResponseCommon, TiktokResponseRefreshToken } from './dto/response/config.response';
import { TiktokResponsePackageTimeSlot } from './dto/response/fulfillment.response';
import { TiktokResponseOrderDetail, TiktokResponseOrderList, TiktokResponsePriceDetail } from './dto/response/order.response';
import { TiktokRequestCreateProduct } from './dto/request/product.request';
import { TiktokRequestOrderList } from './dto/request/order.request';
import { TiktokAffiliatePartner } from './submodules/affiliate-partner-v3.submodule';
import { TiktokAffiliateSeller } from './submodules/affiliate-seller-v3.submodule';
import { TiktokAnalytics } from './submodules/analytics-v3.submodule';
import { TiktokAuth } from './submodules/auth-v3.submodule';
import { TiktokEvent } from './submodules/event-v3.submodule';
import { TiktokFinance } from './submodules/finance-v3.submodule';
import { TiktokFulfillment } from './submodules/fulfillment-v3.submodule';
import { TiktokLogistic } from './submodules/logistic-v3.submodule';
import { TiktokOrder } from './submodules/order-v3.submodule';
import { TiktokProduct } from './submodules/product-v3.submodule';
import { TiktokPromotion } from './submodules/promotion-v3.submodule';
import { TiktokReturnRefund } from './submodules/return-refund-v3.submodule';
import { TiktokSeller } from './submodules/seller-v3.submodule';
import { TiktokShop } from './submodules/shop-v3.submodule';

export class TiktokModule {
  private config: TiktokConfig;

  // ============================================================
  // Full-parity domain submodules (155 endpoints across 14 domains, added to
  // reach production-grade API coverage). Exposed as namespaces
  // (e.g. 'tiktok.order.getOrderList()') rather than flat methods, since
  // several method names here collide with the pre-existing flat methods
  // below (getOrderList, getOrderDetail, getPriceDetail, getCategories,
  // getAttributes, getBrands, createProduct) - the flat methods remain
  // untouched for backward compatibility.
  // ============================================================
  readonly affiliatePartner: TiktokAffiliatePartner;
  readonly affiliateSeller: TiktokAffiliateSeller;
  readonly analytics: TiktokAnalytics;
  readonly auth: TiktokAuth;
  readonly event: TiktokEvent;
  readonly finance: TiktokFinance;
  readonly fulfillment: TiktokFulfillment;
  readonly logistic: TiktokLogistic;
  readonly order: TiktokOrder;
  readonly product: TiktokProduct;
  readonly promotion: TiktokPromotion;
  readonly returnRefund: TiktokReturnRefund;
  readonly seller: TiktokSeller;
  readonly shop: TiktokShop;

  /**
   * Create a TikTok Shop API client.
   *
   * IDE IntelliSense will show the required and optional fields from `TiktokConfig`
   * when you type `new TiktokModule({ ... })`.
   */
  constructor(config: TiktokConfig) {
    this.config = config;

    this.affiliatePartner = new TiktokAffiliatePartner(this.config);
    this.affiliateSeller = new TiktokAffiliateSeller(this.config);
    this.analytics = new TiktokAnalytics(this.config);
    this.auth = new TiktokAuth(this.config);
    this.event = new TiktokEvent(this.config);
    this.finance = new TiktokFinance(this.config);
    this.fulfillment = new TiktokFulfillment(this.config);
    this.logistic = new TiktokLogistic(this.config);
    this.order = new TiktokOrder(this.config);
    this.product = new TiktokProduct(this.config);
    this.promotion = new TiktokPromotion(this.config);
    this.returnRefund = new TiktokReturnRefund(this.config);
    this.seller = new TiktokSeller(this.config);
    this.shop = new TiktokShop(this.config);
  }

  setConfig(config: TiktokConfig) {
    this.config.accessToken = config.accessToken;
    this.config.refreshToken = config.refreshToken;
    this.config.accessTokenExpire = config.accessTokenExpire;
    this.config.refreshTokenExipre = config.refreshTokenExipre;
  }

  getConfig(): TiktokConfig {
    return this.config;
  }

  /**
   * Generate a seller authorization URL.
   *
   * Pass `useUsDomain = true` for US Partner Center authorization links.
   */
  generateAuthLink(serviceId = this.config.serviceId || '', state?: string, useUsDomain = false) {
    if (!serviceId) {
      throw new Error('serviceId is required to generate a TikTok Shop authorization link.');
    }

    return generateAuthLink(serviceId, state, useUsDomain);
  }

  /**
   * Search TikTok Shop orders.
   *
   * Usage:
   *   getOrderList({
   *     beforeHours: 24,
   *     orderStatus: 'UNPAID',
   *     sortField: 'create_time',
   *     sortOrder: 'ASC',
   *     pageSize: 20,
   *   })
   *
   * orderStatus defaults to ALL, which means order_status is not sent to TikTok Shop.
   */
  async getOrderList(options: TiktokRequestOrderList): Promise<TiktokResponseOrderList> {
    return await getOrderList(options, this.config);
  }

  async getOrderDetail(orderNumber: string): Promise<TiktokResponseOrderDetail> {
    return await getOrderDetail(orderNumber, this.config);
  }

  async getPriceDetail(orderId: string): Promise<TiktokResponsePriceDetail> {
    return await getPriceDetail(orderId, this.config);
  }

  async getProductDetail(productId: string): Promise<TiktokResponseCommon<TiktokGetProductResponse>> {
    return await getProductDetail(productId, this.config);
  }

  async getAuthorizedShop(): Promise<TiktokResponseAuthorized> {
    return await getAuthorizedShop(this.config);
  }

  async getPackageTimeSlots(packageId: string): Promise<TiktokResponsePackageTimeSlot> {
    return await getPackageTimeSlots(packageId, this.config);
  }

  async shipPackage(packageId: string, payload: TiktokRequestShipPackage) {
    return await shipPackage(packageId, payload, this.config);
  }

  async getShippingDocument(packageId: string, documentType: TIKTOK_DOCUMENT_TYPE): Promise<unknown> {
    return await getPackageShippingDocument(packageId, documentType, this.config);
  }

  async getCategories(): Promise<TiktokResponseCategories> {
    return await getCategories(this.config);
  }

  async getBrands(categoryId: string): Promise<TiktokResponseBrands> {
    return await getBrands(categoryId, this.config);
  }

  async getAttributes(categoryId: string): Promise<TiktokResponseAttributes> {
    return await getAttributes(categoryId, this.config);
  }

  async createProduct(payload: TiktokRequestCreateProduct) {
    return await createProduct(payload, this.config);
  }

  async refreshToken(): Promise<TiktokResponseRefreshToken> {
    return await refreshToken(this.config);
  }

  async fetchTokenWithAuthCode(authCode: string): Promise<TiktokResponseAccessToken> {
    return await fetchTokenWithAuthCode(authCode, this.config);
  }
}
