import { ShopeeConfig } from './dto/request/config.request';
import { getOrderDetail, getOrderList, getOrders, getShipmentList, searchPackageList, getPackageDetail, cancelOrder } from './api/order.api';
import {
  getProductItemBaseInfo,
  getProductItemList,
  unListItem,
  updatePrice,
  updateStock,
  addItem,
  getCategory,
  getAttributes,
  getBrandList,
} from './api/product.api';
import {
  ShopeeResponseOrderDetail,
  ShopeeOrderListItem,
  ShopeeResponseOrderList,
  ShopeeResponseSearchPackageList,
  ShopeeResponseGetPackageDetail,
  ShopeeResponseCancelOrder,
} from './dto/response/order.response';
import { ShopeeResponseEscrowDetail } from './dto/response/payment.response';
import { ShopeeRequestSearchPackageList, ShopeeRequestCancelOrder, ShopeeGetOrdersOptions } from './dto/request/order.request';
import {
  ShopeeResponseGetAttributes,
  ShopeeResponseGetBrandList,
  ShopeeResponseGetCategories,
  ShopeeResponseProductBaseItemInfo,
  ShopeeResponseUnlistItem,
  ShopeeResponseUpdatePrice,
  ShopeeResponseUpdateStock,
} from './dto/response/product.response';
import {
  getChannelList,
  shipOrder,
  shippingParameter,
  getTrackingNumber,
  createShippingDocument,
  getShippingDocumentResult,
  downloadShippingDocument,
  getTrackingInfo,
  massShipOrder,
  getMassShippingParameter,
  updateShippingOrder,
  getMassTrackingNumber,
  getShippingDocumentParameter,
  getAddressList,
} from './api/logistic.api';
import {
  ShopeeResponseLogisticChannelList,
  ShopeeResponseShipOrder,
  ShopeeResponseShippingParameter,
  ShopeeResponseTrackingNumber,
  ShopeeResponseCreateShippingDocument,
  ShopeeResponseGetShippingDocumentResult,
  ShopeeResponseTrackingInfo,
  ShopeeResponseMassShipOrder,
  ShopeeResponseGetMassShippingParameter,
  ShopeeResponseUpdateShippingOrder,
  ShopeeResponseGetMassTrackingNumber,
  ShopeeResponseGetShippingDocumentParameter,
  ShopeeResponseGetAddressList,
} from './dto/response/logistic.reponse';
import {
  ShopeeRequestCreateShippingDocument,
  ShopeeRequestGetShippingDocumentResult,
  ShopeeRequestDownloadShippingDocument,
  ShopeeRequestMassShipOrder,
  ShopeeRequestGetMassShippingParameter,
  ShopeeRequestUpdateShippingOrder,
  ShopeeRequestGetMassTrackingNumber,
  ShopeeRequestGetShippingDocumentParameter,
} from './dto/request/logistic.request';
import { fetchTokenWithAuthCode, fetchTokenWithRefreshToken, generateAuthLink } from './api/authorization.api';
import { ShopeeResponseGetAccessToken, ShopeeResponseRefreshAccessToken } from './dto/response/config.response';
import { getEscrowDetail } from './api/payment.api';

export class ShopeeModule {
  private config: ShopeeConfig;

  /**
   * Create a Shopee API client.
   *
   * IDE IntelliSense will show the required and optional fields from `ShopeeConfig`
   * when you type `new ShopeeModule({ ... })`.
   *
   * @param config Shopee client configuration such as `partnerId`, `partnerKey`,
   * `shopId`, `mainAccountId`, `accessToken`, and `refreshToken`.
   */
  constructor(config: ShopeeConfig) {
    this.config = config;
  }

  setConfig(config: ShopeeConfig) {
    this.config.accessToken = config.accessToken;
    this.config.refreshToken = config.refreshToken;
  }

  getConfig() {
    return this.config;
  }

  /**
   * Get Shopee orders with automatic pagination.
   *
   * This is the convenience method for most use cases. It keeps calling
   * Shopee `v2.order.get_order_list` while `response.more` is true, merges
   * every page, and returns only the final `response.order_list` items.
   *
   * Use this when you only need order numbers/statuses and do not need Shopee's
   * raw pagination metadata such as `request_id`, `response.more`, or
   * `response.next_cursor`.
   *
   * Legacy usage:
   *   getOrders(60)
   *
   * Extended usage:
   *   getOrders({
   *     beforeMinutes: 60,
   *     orderStatus: 'READY_TO_SHIP',
   *     responseOptionalFields: ['order_status'],
   *   })
   *
   * orderStatus defaults to ALL, which means order_status is not sent to Shopee.
   *
   * @returns A flattened array of order-list items from all fetched pages.
   * @see getOrderList Use this instead when you need the raw Shopee response for one page.
   */
  async getOrders(beforeMinutesOrOptions: number | ShopeeGetOrdersOptions = {}): Promise<ShopeeOrderListItem[]> {
    return await getOrders(beforeMinutesOrOptions, this.config);
  }

  /**
   * Get one Shopee order-list page and keep Shopee's raw response metadata.
   *
   * This is the lower-level method that maps directly to Shopee
   * `v2.order.get_order_list`. It does not auto-paginate. You receive Shopee's
   * response exactly for the requested page, including `request_id`,
   * `response.more`, `response.next_cursor`, and `response.order_list`.
   *
   * Use this when you want to control pagination yourself, store cursors,
   * inspect request IDs for debugging, or mirror Shopee's API response shape.
   *
   * @returns Raw Shopee order-list response for one page.
   * @see getOrders Use this instead when you want auto-pagination and only need order items.
   */
  async getOrderList(options: ShopeeGetOrdersOptions = {}): Promise<ShopeeResponseOrderList> {
    return await getOrderList(options, this.config);
  }

  async getOrderDetail(orderNumber: string): Promise<ShopeeResponseOrderDetail> {
    return await getOrderDetail(orderNumber, this.config);
  }

  async getShipmentList(): Promise<{ order_sn: string; package_number: string }[]> {
    return await getShipmentList(this.config);
  }

  async searchPackageList(body: ShopeeRequestSearchPackageList): Promise<ShopeeResponseSearchPackageList> {
    return await searchPackageList(body, this.config);
  }

  async getPackageDetail(packageNumberList: string | string[]): Promise<ShopeeResponseGetPackageDetail> {
    return await getPackageDetail(packageNumberList, this.config);
  }

  async cancelOrder(body: ShopeeRequestCancelOrder): Promise<ShopeeResponseCancelOrder> {
    return await cancelOrder(body, this.config);
  }

  async getEscrowDetail(orderSn: string): Promise<ShopeeResponseEscrowDetail> {
    return await getEscrowDetail(orderSn, this.config);
  }

  async getProductItemList(): Promise<any> {
    return await getProductItemList(this.config);
  }

  async getProductItemBaseInfo(itemIds: string[]): Promise<ShopeeResponseProductBaseItemInfo> {
    return await getProductItemBaseInfo(itemIds, this.config);
  }

  async updateStock(itemId: number, stock: number): Promise<ShopeeResponseUpdateStock> {
    return await updateStock(itemId, undefined, stock, this.config);
  }

  async unListItem(itemId: string, statusUnlist: boolean): Promise<ShopeeResponseUnlistItem> {
    return await unListItem(itemId, statusUnlist, this.config);
  }

  async updatePrice(itemId: string, price: number): Promise<ShopeeResponseUpdatePrice> {
    return await updatePrice(itemId, price, this.config);
  }

  async addItem(body: any): Promise<any> {
    return await addItem(body, this.config);
  }

  async getChannelList(): Promise<ShopeeResponseLogisticChannelList> {
    return await getChannelList(this.config);
  }

  async fetchToken(authCode: string): Promise<ShopeeResponseGetAccessToken> {
    return await fetchTokenWithAuthCode(authCode, this.config);
  }

  async getCategory(): Promise<ShopeeResponseGetCategories> {
    return await getCategory(this.config);
  }

  async getAttributes(categoryId: number): Promise<ShopeeResponseGetAttributes> {
    return await getAttributes(categoryId, this.config);
  }

  async getBrandList(categoryId: number): Promise<ShopeeResponseGetBrandList> {
    return await getBrandList(categoryId, this.config);
  }

  async shippingParameter(orderNumber: string): Promise<ShopeeResponseShippingParameter> {
    return await shippingParameter(orderNumber, this.config);
  }

  async shipOrder(orderNumber: string, addressId: number, timeSlot: string): Promise<ShopeeResponseShipOrder> {
    return await shipOrder(orderNumber, addressId, timeSlot, this.config);
  }

  async getTrackingNumber(orderSn: string, packageNumber?: string, responseOptionalFields?: string): Promise<ShopeeResponseTrackingNumber> {
    return await getTrackingNumber(orderSn, this.config, packageNumber, responseOptionalFields);
  }

  async createShippingDocument(body: ShopeeRequestCreateShippingDocument): Promise<ShopeeResponseCreateShippingDocument> {
    return await createShippingDocument(body, this.config);
  }

  async getShippingDocumentResult(body: ShopeeRequestGetShippingDocumentResult): Promise<ShopeeResponseGetShippingDocumentResult> {
    return await getShippingDocumentResult(body, this.config);
  }

  async downloadShippingDocument(body: ShopeeRequestDownloadShippingDocument): Promise<Buffer> {
    return await downloadShippingDocument(body, this.config);
  }

  async getTrackingInfo(orderSn: string, packageNumber?: string): Promise<ShopeeResponseTrackingInfo> {
    return await getTrackingInfo(orderSn, this.config, packageNumber);
  }

  async massShipOrder(body: ShopeeRequestMassShipOrder): Promise<ShopeeResponseMassShipOrder> {
    return await massShipOrder(body, this.config);
  }

  async getMassShippingParameter(body: ShopeeRequestGetMassShippingParameter): Promise<ShopeeResponseGetMassShippingParameter> {
    return await getMassShippingParameter(body, this.config);
  }

  async updateShippingOrder(body: ShopeeRequestUpdateShippingOrder): Promise<ShopeeResponseUpdateShippingOrder> {
    return await updateShippingOrder(body, this.config);
  }

  async getMassTrackingNumber(body: ShopeeRequestGetMassTrackingNumber): Promise<ShopeeResponseGetMassTrackingNumber> {
    return await getMassTrackingNumber(body, this.config);
  }

  async getShippingDocumentParameter(body: ShopeeRequestGetShippingDocumentParameter): Promise<ShopeeResponseGetShippingDocumentParameter> {
    return await getShippingDocumentParameter(body, this.config);
  }

  async getAddressList(): Promise<ShopeeResponseGetAddressList> {
    return await getAddressList(this.config);
  }

  async refreshToken(): Promise<ShopeeResponseRefreshAccessToken> {
    return await fetchTokenWithRefreshToken(this.config);
  }

  async generateAuthLink(redirectURL: string): Promise<{ url: string; redirect: string }> {
    return await generateAuthLink(redirectURL, this.config);
  }
}
