/**
 * Request parameters for query_br_shop_block_status
 *
 * This API checks whether an FBS shop is blocked due to invoice-related issues. When blocked, the shop cannot create new Inbound Requests, and its warehouse inventory is restricted from being sold.
 */
export type ShopeeQueryBrShopBlockStatusRequest = Record<string, never>;

/**
 * Request parameters for query_br_shop_enrollment_status
 *
 * This API checks whether a given shop_id is eligible to enroll in the Brazil Fulfilled-by-Shopee (FBS) service.
 */
export type ShopeeQueryBrShopEnrollmentStatusRequest = Record<string, never>;

/**
 * Request parameters for query_br_shop_invoice_error
 *
 * This API handles failed invoice issuance for FBS-related processes, covering Inbound Requests, RTS Requests, Sales Orders, and Move Transfer Orders.
 */
export interface ShopeeQueryBrShopInvoiceErrorRequest {
  page_no?: number;
  /**
   * max: 100
   */
  page_size?: number;
}

/**
 * Request parameters for query_br_sku_block_status
 *
 * This API checks whether an FBS product is blocked due to invoice-related issues. When blocked, the product cannot be included in new Inbound Requests, and its warehouse inventory is restricted from being sold.
 */
export interface ShopeeQueryBrSkuBlockStatusRequest {
  shop_sku_id: string;
}
