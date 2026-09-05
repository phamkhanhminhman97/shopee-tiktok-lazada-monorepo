import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeQueryBrShopBlockStatusResponseData sub-interface for ShopeeQueryBrShopBlockStatusResponse
 */
export interface ShopeeQueryBrShopBlockStatusResponseData {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * shop blocked status
   */
  is_block?: boolean;
}

/**
 * Response payload for query_br_shop_block_status
 *
 * This API checks whether an FBS shop is blocked due to invoice-related issues. When blocked, the shop cannot create new Inbound Requests, and its warehouse inventory is restricted from being sold.
 */
export type ShopeeQueryBrShopBlockStatusResponse = ShopeeResponseCommon<ShopeeQueryBrShopBlockStatusResponseData>;

/**
 * ShopeeQueryBrShopEnrollmentStatusResponseData sub-interface for ShopeeQueryBrShopEnrollmentStatusResponse
 */
export interface ShopeeQueryBrShopEnrollmentStatusResponseData {
  /**
   * Shopee's unique identifier for a shop
   */
  shop_id?: number;
  /**
   * 1: enable enrollment2: disable enrollment3: already enrollment
   */
  enrollment_status?: number;
  /**
   * The time of this shop able to enroll FBS.
   */
  enable_enrollment_time?: number;
}

/**
 * Response payload for query_br_shop_enrollment_status
 *
 * This API checks whether a given shop_id is eligible to enroll in the Brazil Fulfilled-by-Shopee (FBS) service.
 */
export type ShopeeQueryBrShopEnrollmentStatusResponse =
  ShopeeResponseCommon<ShopeeQueryBrShopEnrollmentStatusResponseData>;

/**
 * ShopeeQueryBrShopInvoiceErrorShopSku sub-interface for ShopeeQueryBrShopInvoiceErrorList
 */
export interface ShopeeQueryBrShopInvoiceErrorShopSku {
  /**
   * ID of item
   */
  shop_item_id?: number;
  /**
   * ID of model
   */
  shop_model_id?: number;
  /**
   * Name of item
   */
  shop_item_name?: string;
  /**
   * Name of model
   */
  shop_model_name?: string;
  /**
   * Invoice issuance failed reason.
   */
  fail_reason?: string;
}

/**
 * ShopeeQueryBrShopInvoiceErrorList sub-interface for ShopeeQueryBrShopInvoiceErrorResponseData
 */
export interface ShopeeQueryBrShopInvoiceErrorList {
  /**
   * Shopee's unique identifier for a shop.
   */
  shop_id?: number;
  /**
   * 1: Inbound2: Return From Warehouse3: Sales order invoice4: Move Transfer5：IA
   */
  biz_request_type?: number;
  /**
   * Return by default. The business FBS request order ID.
   */
  biz_request_id?: string;
  /**
   * Invoice issuance failed reason.
   */
  fail_reason?: string;
  /**
   * 1: sku tax info error2: seller tax info error
   */
  fail_type?: number;
  /**
   * The expired time of this failed invoice. If expired, then this request order would be cancelled.
   */
  invoice_deadline_time?: number;
  shop_sku_list?: ShopeeQueryBrShopInvoiceErrorShopSku[];
  /**
   * Invoice ID
   */
  invoice_id?: string;
  /**
   * remind seller if this block issue is not solved , it will block the shop or item
   */
  reminder_desc?: string;
}

/**
 * ShopeeQueryBrShopInvoiceErrorResponseData sub-interface for ShopeeQueryBrShopInvoiceErrorResponse
 */
export interface ShopeeQueryBrShopInvoiceErrorResponseData {
  total?: number;
  list?: ShopeeQueryBrShopInvoiceErrorList[];
}

/**
 * Response payload for query_br_shop_invoice_error
 *
 * This API handles failed invoice issuance for FBS-related processes, covering Inbound Requests, RTS Requests, Sales Orders, and Move Transfer Orders.
 */
export type ShopeeQueryBrShopInvoiceErrorResponse = ShopeeResponseCommon<ShopeeQueryBrShopInvoiceErrorResponseData>;

/**
 * ShopeeQueryBrSkuBlockStatusResponseData sub-interface for ShopeeQueryBrSkuBlockStatusResponse
 */
export interface ShopeeQueryBrSkuBlockStatusResponseData {
  /**
   * itemID_modelID
   */
  shop_sku_id?: string;
  /**
   * product is blocked and warehouse stock cannot be sold
   */
  is_block?: boolean;
  /**
   * ID of item
   */
  shop_item_id?: number;
  /**
   * ID of model
   */
  shop_model_id?: number;
  /**
   * Name of Item
   */
  shop_item_name?: string;
  /**
   * Name of model
   */
  shop_model_name?: string;
}

/**
 * Response payload for query_br_sku_block_status
 *
 * This API checks whether an FBS product is blocked due to invoice-related issues. When blocked, the product cannot be included in new Inbound Requests, and its warehouse inventory is restricted from being sold.
 */
export type ShopeeQueryBrSkuBlockStatusResponse = ShopeeResponseCommon<ShopeeQueryBrSkuBlockStatusResponseData>;
