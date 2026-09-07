import {
  LazadaCountryCode,
  LazadaPaymentMethod,
  getPaymentMethodsByCountry,
  isPaymentMethodAvailableInCountry,
  getAllPaymentMethods,
  getCountriesByPaymentMethod,
} from './common/payment-options';
import { fetchTokenWithAuthCode, generateAuthLink, refreshToken } from './api/authorization.api';
import {
  getOrderById,
  getOrders,
  getAllOrders,
  getOrderItems,
  getMultipleOrderItems,
  getShipmentProviders,
  packOrder,
  recreatePackage,
  setReadyToShip,
  printAWB,
  getShippingLabel,
  traceOrder,
  confirmDeliveryForDBS,
  failedDeliveryForDBS,
} from './api/order.api';
import {
  createProduct,
  getBrandByPages,
  getCategoryTree,
  getProductItem,
  getProducts,
  updatePrice,
  updateSellableQuantity,
  updateStatusProduct,
} from './api/product.api';
import { LazadaConfig } from './dto/request/config.request';
import {
  GetOrdersRequest,
  PackOrderRequest,
  RecreatePackageRequest,
  ReadyToShipRequest,
  PrintAWBRequest,
  GetShippingLabelRequest,
  TraceOrderRequest,
  ConfirmDeliveryForDBSRequest,
  FailedDeliveryForDBSRequest,
} from './dto/request/order.request';
import { LZD_UPDATE_SELLABLE_QUANTITY, LZD_UPDATE_STATUS_PRODUCT, LZD_UPDATE_PRICE_PRODUCT } from './dto/request/product.request';
import { LazadaResponseAccessToken } from './dto/response/config.response';
import {
  LazadaResponseGetOrders,
  LazadaResponseGetOrder,
  LazadaResponseGetOrderItems,
  LazadaResponseGetMultipleOrderItems,
  LazadaResponsePackOrder,
  LazadaResponseRTSOrder,
  LazadaResponseShipmentProviders,
  LazadaResponsePrintAWB,
  LazadaResponseShippingLabel,
  LazadaResponseTraceOrder,
  LazadaResponseConfirmDeliveryDBS,
  LazadaResponseFailedDeliveryDBS,
  LazadaResponseRecreatePackage,
} from './dto/response/order.response';


// ---- Additional domain submodule imports (full shopee-sdk-parity-style API expansion) ----
import { LazadaChoiceCustomized } from './submodules/choice-customized.submodule';
import { LazadaContent } from './submodules/content.submodule';
import { LazadaCrossBoarderProduct } from './submodules/cross-boarder-product.submodule';
import { LazadaETickets } from './submodules/e-tickets.submodule';
import { LazadaEarlyBirdPrice } from './submodules/early-bird-price.submodule';
import { LazadaFbl } from './submodules/fbl.submodule';
import { LazadaFinance } from './submodules/finance.submodule';
import { LazadaFirstmileBigbagOnlyForCn } from './submodules/firstmile-bigbag-only-for-cn.submodule';
import { LazadaFlexicombo } from './submodules/flexicombo.submodule';
import { LazadaFreeShipping } from './submodules/free-shipping.submodule';
import { LazadaFulfillment } from './submodules/fulfillment.submodule';
import { LazadaInstantMessaging } from './submodules/instant-messaging.submodule';
import { LazadaDg } from './submodules/lazada-dg.submodule';
import { LazadaOwnLogistics } from './submodules/lazada-own-logistics.submodule';
import { LazadaWalletCorporateTopUp } from './submodules/lazada-wallet-corporate-top-up.submodule';
import { LazadaLazlike } from './submodules/lazlike.submodule';
import { LazadaLazlive } from './submodules/lazlive.submodule';
import { LazadaLazpay } from './submodules/lazpay.submodule';
import { LazadaLogistics } from './submodules/logistics.submodule';
import { LazadaLogisticsStation } from './submodules/logistics-station.submodule';
import { LazadaMediaCenter } from './submodules/media-center.submodule';
import { LazadaMembership } from './submodules/membership.submodule';
import { LazadaOrder } from './submodules/order-api-v2.submodule';
import { LazadaProduct } from './submodules/product-api-v2.submodule';
import { LazadaProductReview } from './submodules/product-review.submodule';
import { LazadaRedmart } from './submodules/redmart.submodule';
import { LazadaReturnAndRefund } from './submodules/return-and-refund.submodule';
import { LazadaSeller } from './submodules/seller.submodule';
import { LazadaSellerVoucher } from './submodules/seller-voucher.submodule';
import { LazadaServiceMarket } from './submodules/service-market.submodule';
import { LazadaSponsoredSolutions } from './submodules/sponsored-solutions.submodule';
import { LazadaStoreDecoration } from './submodules/store-decoration.submodule';
import { LazadaSystem } from './submodules/system.submodule';

export class LazadaModule {
  private config: LazadaConfig;

  /** Lazada `choice-customized-api` API namespace. */
  readonly choiceCustomized: LazadaChoiceCustomized;
  /** Lazada `content-api` API namespace. */
  readonly content: LazadaContent;
  /** Lazada `cross-boarder-product-api` API namespace. */
  readonly crossBoarderProduct: LazadaCrossBoarderProduct;
  /** Lazada `e-tickets-api` API namespace. */
  readonly eTickets: LazadaETickets;
  /** Lazada `early-bird-price-api` API namespace. */
  readonly earlyBirdPrice: LazadaEarlyBirdPrice;
  /** Lazada `fbl-api` API namespace. */
  readonly fbl: LazadaFbl;
  /** Lazada `finance-api` API namespace. */
  readonly finance: LazadaFinance;
  /** Lazada `firstmile-bigbag-only-for-cn` API namespace. */
  readonly firstmileBigbagOnlyForCn: LazadaFirstmileBigbagOnlyForCn;
  /** Lazada `flexicombo-api` API namespace. */
  readonly flexicombo: LazadaFlexicombo;
  /** Lazada `free-shipping-api` API namespace. */
  readonly freeShipping: LazadaFreeShipping;
  /** Lazada `fulfillment-api` API namespace. */
  readonly fulfillment: LazadaFulfillment;
  /** Lazada `instant-messaging-api` API namespace. */
  readonly instantMessaging: LazadaInstantMessaging;
  /** Lazada `lazada-dg-api` API namespace. */
  readonly dg: LazadaDg;
  /** Lazada `lazada-logistics-api` API namespace. */
  readonly ownLogistics: LazadaOwnLogistics;
  /** Lazada `lazada-wallet-corporate-top-up-api` API namespace. */
  readonly walletCorporateTopUp: LazadaWalletCorporateTopUp;
  /** Lazada `lazlike-api` API namespace. */
  readonly lazlike: LazadaLazlike;
  /** Lazada `lazlive-api` API namespace. */
  readonly lazlive: LazadaLazlive;
  /** Lazada `lazpay-api` API namespace. */
  readonly lazpay: LazadaLazpay;
  /** Lazada `logistics-api` API namespace. */
  readonly logistics: LazadaLogistics;
  /** Lazada `logistics-station-api` API namespace. */
  readonly logisticsStation: LazadaLogisticsStation;
  /** Lazada `media-center-api` API namespace. */
  readonly mediaCenter: LazadaMediaCenter;
  /** Lazada `membership-api` API namespace. */
  readonly membership: LazadaMembership;
  /** Lazada `order-api` API namespace. */
  readonly order: LazadaOrder;
  /** Lazada `product-api` API namespace. */
  readonly product: LazadaProduct;
  /** Lazada `product-review-api` API namespace. */
  readonly productReview: LazadaProductReview;
  /** Lazada `redmart-api` API namespace. */
  readonly redmart: LazadaRedmart;
  /** Lazada `return-and-refund-api` API namespace. */
  readonly returnAndRefund: LazadaReturnAndRefund;
  /** Lazada `seller-api` API namespace. */
  readonly seller: LazadaSeller;
  /** Lazada `seller-voucher-api` API namespace. */
  readonly sellerVoucher: LazadaSellerVoucher;
  /** Lazada `service-market-api` API namespace. */
  readonly serviceMarket: LazadaServiceMarket;
  /** Lazada `sponsored-solutions-api` API namespace. */
  readonly sponsoredSolutions: LazadaSponsoredSolutions;
  /** Lazada `store-decoration-api` API namespace. */
  readonly storeDecoration: LazadaStoreDecoration;
  /** Lazada `system-api` API namespace. */
  readonly system: LazadaSystem;

  /**
   * Create a Lazada API client.
   *
   * IDE IntelliSense will show the required and optional fields from `LazadaConfig`
   * when you type `new LazadaModule({ ... })`.
   *
   * @param config Lazada client configuration such as `appKey`, `appSecret`,
   * `appAccessToken`, `refreshToken`, and `countryCode`.
   */
  constructor(config: LazadaConfig) {
    this.config = config;

    this.choiceCustomized = new LazadaChoiceCustomized(this.config);
    this.content = new LazadaContent(this.config);
    this.crossBoarderProduct = new LazadaCrossBoarderProduct(this.config);
    this.eTickets = new LazadaETickets(this.config);
    this.earlyBirdPrice = new LazadaEarlyBirdPrice(this.config);
    this.fbl = new LazadaFbl(this.config);
    this.finance = new LazadaFinance(this.config);
    this.firstmileBigbagOnlyForCn = new LazadaFirstmileBigbagOnlyForCn(this.config);
    this.flexicombo = new LazadaFlexicombo(this.config);
    this.freeShipping = new LazadaFreeShipping(this.config);
    this.fulfillment = new LazadaFulfillment(this.config);
    this.instantMessaging = new LazadaInstantMessaging(this.config);
    this.dg = new LazadaDg(this.config);
    this.ownLogistics = new LazadaOwnLogistics(this.config);
    this.walletCorporateTopUp = new LazadaWalletCorporateTopUp(this.config);
    this.lazlike = new LazadaLazlike(this.config);
    this.lazlive = new LazadaLazlive(this.config);
    this.lazpay = new LazadaLazpay(this.config);
    this.logistics = new LazadaLogistics(this.config);
    this.logisticsStation = new LazadaLogisticsStation(this.config);
    this.mediaCenter = new LazadaMediaCenter(this.config);
    this.membership = new LazadaMembership(this.config);
    this.order = new LazadaOrder(this.config);
    this.product = new LazadaProduct(this.config);
    this.productReview = new LazadaProductReview(this.config);
    this.redmart = new LazadaRedmart(this.config);
    this.returnAndRefund = new LazadaReturnAndRefund(this.config);
    this.seller = new LazadaSeller(this.config);
    this.sellerVoucher = new LazadaSellerVoucher(this.config);
    this.serviceMarket = new LazadaServiceMarket(this.config);
    this.sponsoredSolutions = new LazadaSponsoredSolutions(this.config);
    this.storeDecoration = new LazadaStoreDecoration(this.config);
    this.system = new LazadaSystem(this.config);
  }

  setConfig(config: LazadaConfig) {
    this.config.appAccessToken = config.appAccessToken;
    this.config.refreshToken = config.refreshToken;
    this.config.expiresIn = config.expiresIn;
    this.config.refreshExpiresIn = config.refreshExpiresIn;
  }

  getConfig() {
    return this.config;
  }

  // ============================================================
  // Order APIs
  // ============================================================

  /**
   * Get a list of orders with optional filters.
   *
   * Either `update_after` or `created_after` is mandatory.
   * Maximum limit is 100 per request. Use offset for pagination.
   */
  async getOrders(params?: GetOrdersRequest): Promise<LazadaResponseGetOrders> {
    return await getOrders(this.config, params);
  }

  /**
   * Get all orders by automatically paginating through all pages.
   *
   * @param params - Optional filter parameters (offset and limit are auto-managed)
   * @param onProgress - Optional callback receiving (page, total, countSoFar)
   */
  async getAllOrders(
    params?: Omit<GetOrdersRequest, 'offset' | 'limit'>,
    onProgress?: (page: number, total: number, countSoFar: number) => void
  ) {
    return await getAllOrders(this.config, params, onProgress);
  }

  /**
   * Get details of a single order by its order number/ID.
   */
  async getOrderDetail(orderNumber: string | number): Promise<LazadaResponseGetOrder> {
    return await getOrderById(this.config, orderNumber);
  }

  /**
   * Get order items for a specific order.
   *
   * **Important**: Must call this before `packOrder` to get order item IDs.
   */
  async getOrderItems(orderId: string | number): Promise<LazadaResponseGetOrderItems> {
    return await getOrderItems(this.config, orderId);
  }

  /**
   * Get order items for multiple orders.
   *
   * @param orderIds - Comma-separated string of order IDs
   */
  async getMultipleOrderItems(orderIds: string): Promise<LazadaResponseGetMultipleOrderItems> {
    return await getMultipleOrderItems(this.config, orderIds);
  }

  /**
   * Get available shipment/logistics providers for a specific order.
   *
   * Must be called before `packOrder` to determine the appropriate provider.
   */
  async getShipmentProviders(orderId: string | number): Promise<LazadaResponseShipmentProviders> {
    return await getShipmentProviders(this.config, orderId);
  }

  /**
   * Pack order items (action: SetToPack).
   *
   * Creates packages for the specified items. Must call `getOrderItems`
   * first to get order item IDs.
   */
  async packOrder(params: PackOrderRequest): Promise<LazadaResponsePackOrder> {
    return await packOrder(this.config, params);
  }

  /**
   * Request to repack order items when modifications are needed (action: SetRepack).
   *
   * When an order is in `packed` status and needs changes, use this to
   * revert to `repacked`, then call `packOrder` again.
   */
  async recreatePackage(params: RecreatePackageRequest): Promise<LazadaResponseRecreatePackage> {
    return await recreatePackage(this.config, params);
  }

  /**
   * Set a package as ready to ship (action: SetRTS).
   *
   * Updates order status from `packed` → `ready_to_ship_pending` → `ready_to_ship`.
   */
  async setReadyToShip(params: ReadyToShipRequest): Promise<LazadaResponseRTSOrder> {
    return await setReadyToShip(this.config, params);
  }

  /**
   * Get AWB (Air Waybill) PDF shipping label for a package.
   */
  async printAWB(params: PrintAWBRequest): Promise<LazadaResponsePrintAWB> {
    return await printAWB(this.config, params);
  }

  /**
   * Get shipping labels for multiple packages (V2 API).
   */
  async getShippingLabel(params: GetShippingLabelRequest): Promise<LazadaResponseShippingLabel> {
    return await getShippingLabel(this.config, params);
  }

  /**
   * Trace the logistics status of an order/package.
   *
   * Provides detailed tracking info including timestamps, locations, and status codes.
   */
  async traceOrder(params: TraceOrderRequest): Promise<LazadaResponseTraceOrder> {
    return await traceOrder(this.config, params);
  }

  /**
   * Confirm successful delivery for Delivered by Seller (DBS) model.
   */
  async confirmDeliveryForDBS(params: ConfirmDeliveryForDBSRequest): Promise<LazadaResponseConfirmDeliveryDBS> {
    return await confirmDeliveryForDBS(this.config, params);
  }

  /**
   * Confirm failed delivery for Delivered by Seller (DBS) model.
   */
  async failedDeliveryForDBS(params: FailedDeliveryForDBSRequest): Promise<LazadaResponseFailedDeliveryDBS> {
    return await failedDeliveryForDBS(this.config, params);
  }

  // ============================================================
  // Payment Options (static helpers)
  // ============================================================

  /**
   * Get the list of available payment methods for a given country.
   *
   * @param country - Country code (SG, PH, MY, TH, VN, ID)
   * @returns Array of payment method strings, or undefined if country is not supported
   */
  static getPaymentMethodsByCountry(country: LazadaCountryCode | string): LazadaPaymentMethod[] | undefined {
    return getPaymentMethodsByCountry(country);
  }

  /**
   * Check if a payment method is available in a given country.
   */
  static isPaymentMethodAvailableInCountry(
    country: LazadaCountryCode | string,
    paymentMethod: LazadaPaymentMethod | string
  ): boolean {
    return isPaymentMethodAvailableInCountry(country, paymentMethod);
  }

  /**
   * Get all unique payment methods across all countries.
   */
  static getAllPaymentMethods(): LazadaPaymentMethod[] {
    return getAllPaymentMethods();
  }

  /**
   * Get the list of countries that support a given payment method.
   */
  static getCountriesByPaymentMethod(paymentMethod: LazadaPaymentMethod | string): LazadaCountryCode[] {
    return getCountriesByPaymentMethod(paymentMethod);
  }

  // ============================================================
  // Product APIs
  // ============================================================

  /**
   * Get the list of products from the authorized store.
   * Automatically paginates through all pages.
   */
  async getProducts() {
    return await getProducts(this.config);
  }

  /**
   * Get a single product item by its item ID.
   */
  async getProductItem(itemId: number) {
    return await getProductItem(this.config, itemId);
  }

  /**
   * Update the sellable quantity of a product SKU.
   */
  async updateSellableQuantity(itemId: number, payload: LZD_UPDATE_SELLABLE_QUANTITY) {
    return await updateSellableQuantity(this.config, itemId, [payload]);
  }

  /**
   * Update the status of a product (active/inactive/deleted).
   */
  async updateStatusProduct(itemId: number, payload: LZD_UPDATE_STATUS_PRODUCT) {
    return await updateStatusProduct(this.config, itemId, [payload]);
  }

  /**
   * Update the price of a product SKU.
   */
  async updatePrice(itemId: number, payload: LZD_UPDATE_PRICE_PRODUCT) {
    return await updatePrice(this.config, itemId, [payload]);
  }

  /**
   * Get the full category tree from Lazada.
   */
  async getCategoryTree() {
    return await getCategoryTree(this.config);
  }

  /**
   * Create a new product on Lazada.
   */
  async createProduct(payload) {
    return createProduct(payload, this.config);
  }

  /**
   * Get brands (paginated).
   */
  async getBrands() {
    return getBrandByPages(this.config);
  }

  // ============================================================
  // Authorization APIs
  // ============================================================

  /**
   * Generate a Lazada authorization URL.
   *
   * The third parameter used to be called `uuid` in older package versions.
   * Lazada's current docs call this optional parameter `state`.
   */
  generateAuthLink(redirectURL: string, appKey = this.config.appKey, state?: string) {
    return generateAuthLink(redirectURL, appKey, state);
  }

  /**
   * Exchange the authorization code returned by Lazada for access and refresh tokens.
   *
   * The second parameter is optional and kept only for backward compatibility.
   * Lazada's current token API does not require it.
   */
  async fetchTokenWithAuthCode(authCode: string, legacyStateOrUuid?: string): Promise<LazadaResponseAccessToken> {
    return fetchTokenWithAuthCode(authCode, legacyStateOrUuid, this.config);
  }

  /**
   * Refresh the current access token.
   */
  async refreshToken(): Promise<LazadaResponseAccessToken> {
    return refreshToken(this.config);
  }
}
