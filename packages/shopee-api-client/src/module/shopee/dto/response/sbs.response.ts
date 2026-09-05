import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeGetBoundWhsInfoBoundWh sub-interface for ShopeeGetBoundWhsInfoList
 */
export interface ShopeeGetBoundWhsInfoBoundWh {
  /**
   * the warehouse region bound with the shop
   */
  whs_region?: string;
  /**
   * the warehouse id bound with the shop
   */
  whs_ids?: string[];
}

/**
 * ShopeeGetBoundWhsInfoList sub-interface for ShopeeGetBoundWhsInfoResponseData
 */
export interface ShopeeGetBoundWhsInfoList {
  shop_id?: number;
  bound_whs?: ShopeeGetBoundWhsInfoBoundWh[];
}

/**
 * ShopeeGetBoundWhsInfoResponseData sub-interface for ShopeeGetBoundWhsInfoResponse
 */
export interface ShopeeGetBoundWhsInfoResponseData {
  list?: ShopeeGetBoundWhsInfoList[];
}

/**
 * Response payload for get_bound_whs_info
 *
 * get bound warehouse by shop id
 */
export type ShopeeGetBoundWhsInfoResponse = ShopeeResponseCommon<ShopeeGetBoundWhsInfoResponseData>;

/**
 * ShopeeGetCurrentInventoryWhs sub-interface for ShopeeGetCurrentInventorySku
 */
export interface ShopeeGetCurrentInventoryWhs {
  /**
   * Warehouse ID
   */
  whs_id?: string;
  /**
   * -1-No need to calculate stock level；0-None；1-Low Stock & No Sellable stock; 2-Low Stock & To replenish; 3-Low Stock & Replenished; 4-Excess
   */
  stock_level?: number;
  /**
   * IR approval but no ASN generated will be included
   */
  ir_approval_qty?: number;
  /**
   * ASN in-transit，ASN pending putaway, Move transfer in transit and Move transfer pending putaway will be included
   */
  in_transit_pending_putaway_qty?: number;
  /**
   * Stocks that are available for sale. This includes warehouse sellable stock, move transfer & rack transfer reserved stock that available for sale, pre-order stock.This quantity may be greater than qty displayed to buyers as it includes stock reserved for upcoming promotions.
   */
  sellable_qty?: number;
  /**
   * Stocks reserved by buyer order, RTS. And also includes rack transfer reserved stock that are not available for sale
   */
  reserved_qty?: number;
  /**
   * Stocks in the warehouse that are not available for sale. This includes damaged stocks, isolated stock due to expired/near expiring, in warehouse staging location, missing, etc.
   */
  unsellable_qty?: number;
  /**
   * Number of units that are above 6 days of sales coverage Days.
   */
  excess_stock?: number;
  /**
   * Days that the current sellable and pending inbound inventory are expected to last based on current selling speed.
   */
  coverage_days?: number;
  /**
   * Days that the current sellable inventory are expected to last based on current selling speed.
   */
  in_whs_coverage_days?: number;
  /**
   * Average daily sold quantity
   */
  selling_speed?: number;
  /**
   * Sales qty last 7 days
   */
  last_7_sold?: number;
  /**
   * Sales qty last 15 days
   */
  last_15_sold?: number;
  /**
   * Sales qty last 30 days
   */
  last_30_sold?: number;
  /**
   * Sales qty last 60 days
   */
  last_60_sold?: number;
  /**
   * Sales qty last 90 days
   */
  last_90_sold?: number;
}

/**
 * ShopeeGetCurrentInventoryShopSku sub-interface for ShopeeGetCurrentInventorySku
 */
export interface ShopeeGetCurrentInventoryShopSku {
  /**
   * shop level sku_idshop_sku_id="item_id" _ "model_id"
   */
  shop_sku_id?: string;
  /**
   * shop_item_id="item_id" in Product ModuleFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_item_id?: string;
  /**
   * shop_model_id= item level model_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_model_id?: string;
}

/**
 * ShopeeGetCurrentInventorySku sub-interface for ShopeeGetCurrentInventoryItem
 */
export interface ShopeeGetCurrentInventorySku {
  /**
   * mtsku id
   */
  mtsku_id?: string;
  /**
   * Warehouse model SKU IDFor CB global items, this is equal to the global model_id.
   *
   *
   *
   *
   *
   * For local items, it differs from model_id; use shop_model_id to match the model_id
   */
  model_id?: string;
  /**
   * 0-Null；1-Bundle SKU；2-Parent SKU
   */
  fulfill_mapping_mode?: number;
  /**
   * model name
   */
  model_name?: string;
  not_moving_tag?: number;
  /**
   * Info of whs
   */
  whs_list?: ShopeeGetCurrentInventoryWhs[];
  shop_sku_list?: ShopeeGetCurrentInventoryShopSku[];
}

/**
 * ShopeeGetCurrentInventoryItem sub-interface for ShopeeGetCurrentInventoryResponseData
 */
export interface ShopeeGetCurrentInventoryItem {
  /**
   * Warehouse item id; To indicate an unique item in a warehouseone warehouse item id can match with multiple shop_item_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  warehouse_item_id?: string;
  /**
   * item name
   */
  item_name?: string;
  /**
   * item image
   */
  item_image?: string;
  /**
   * Data list of mtsku
   */
  sku_list?: ShopeeGetCurrentInventorySku[];
}

/**
 * ShopeeGetCurrentInventoryResponseData sub-interface for ShopeeGetCurrentInventoryResponse
 */
export interface ShopeeGetCurrentInventoryResponseData {
  /**
   * Data list of item sku
   */
  item_list?: ShopeeGetCurrentInventoryItem[];
}

/**
 * Response payload for get_current_inventory
 *
 * Get Seller Center Current Inventory Page Data
 */
export type ShopeeGetCurrentInventoryResponse = ShopeeResponseCommon<ShopeeGetCurrentInventoryResponseData>;

/**
 * ShopeeGetExpiryReportShopSku sub-interface for ShopeeGetExpiryReportSku
 */
export interface ShopeeGetExpiryReportShopSku {
  /**
   * shop level sku_idshop_sku_id="item_id" _ "model_id"
   */
  shop_sku_id?: string;
  /**
   * shop_item_id="item_id" in Product ModuleFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_item_id?: string;
  /**
   * shop_model_id= item level model_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_model_id?: string;
}

/**
 * ShopeeGetExpiryReportWhs sub-interface for ShopeeGetExpiryReportSku
 */
export interface ShopeeGetExpiryReportWhs {
  /**
   * warehouse ID
   */
  whs_id?: string;
  /**
   * Stocks that are expiring soon and should be sold as soon as possible.
   */
  expiring_qty?: number;
  /**
   * Stock past expiry date.
   */
  expired_qty?: number;
  /**
   * Stocks that are too near to expiry and cannot be sold any more.
   */
  expiry_blocked_qty?: number;
  /**
   * Stock in damaged condition and cannot be sold.
   */
  damaged_qty?: number;
  /**
   * Stocks that are normal.
   */
  normal_qty?: number;
  /**
   * Total stocks on hand.
   */
  total_qty?: number;
}

/**
 * ShopeeGetExpiryReportSku sub-interface for ShopeeGetExpiryReportItem
 */
export interface ShopeeGetExpiryReportSku {
  /**
   * Unique ID for a warehouse SKU"warehouse_item_id"_"warehouse_model_id"
   */
  mtsku_id?: string;
  /**
   * Warehouse model SKU IDFor CB global items, this is equal to the global model_id.For local items, it differs from model_id; use shop_model_id to match the model_id
   */
  model_id?: string;
  /**
   * 0-Null；1-Bundle SKU；2-Parent SKU
   */
  fulfill_mapping_mode?: number;
  variation?: string;
  shop_sku_list?: ShopeeGetExpiryReportShopSku[];
  whs_list?: ShopeeGetExpiryReportWhs[];
}

/**
 * ShopeeGetExpiryReportItem sub-interface for ShopeeGetExpiryReportResponseData
 */
export interface ShopeeGetExpiryReportItem {
  /**
   * Warehouse item id; To indicate an unique item in a warehouseone warehouse item id can match with multiple shop_item_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  warehouse_item_id?: string;
  item_name?: string;
  item_image?: string;
  sku_list?: ShopeeGetExpiryReportSku[];
}

/**
 * ShopeeGetExpiryReportResponseData sub-interface for ShopeeGetExpiryReportResponse
 */
export interface ShopeeGetExpiryReportResponseData {
  item_list?: ShopeeGetExpiryReportItem[];
}

/**
 * Response payload for get_expiry_report
 *
 * Seller Center Expiry Report page data
 */
export type ShopeeGetExpiryReportResponse = ShopeeResponseCommon<ShopeeGetExpiryReportResponseData>;

/**
 * ShopeeGetFulfillmentMappingInventoryListParentMtsku sub-interface for ShopeeGetFulfillmentMappingInventoryListStockContext
 */
export interface ShopeeGetFulfillmentMappingInventoryListParentMtsku {
  /**
   * The MTSKU ID of a Parent SKU involved in the fulfillment mapping relationship.
   */
  parent_mtsku_id?: string;
  /**
   * Physical sellable stock of the parent MTSKU in the specified warehouse. It is the original quantity, not multiplied by mapping_formula. Example: mapping_formula = 2*MTSKU_A + 1*MTSKU_B; MTSKU_A stock = 14; returned parent_mtsku_stock = 14. Each Bundle SKU needs two MTSKU_A, so it supports floor(14/2)=7 bundles. The returned stock remains 14, not 28.
   */
  parent_mtsku_stock?: number;
}

/**
 * ShopeeGetFulfillmentMappingInventoryListStockContext sub-interface for ShopeeGetFulfillmentMappingInventoryListList
 */
export interface ShopeeGetFulfillmentMappingInventoryListStockContext {
  /**
   * The physical sellable stock for bundle MTSKU without any mapping convert stock.
   */
  physical_sellable_stock?: number;
  /**
   * The calculated mapping sellable stock that convert from Parent MTSKUs.
   */
  mapping_sellable_stock?: number;
  parent_mtsku_list?: ShopeeGetFulfillmentMappingInventoryListParentMtsku[];
}

/**
 * ShopeeGetFulfillmentMappingInventoryListList sub-interface for ShopeeGetFulfillmentMappingInventoryListResponseData
 */
export interface ShopeeGetFulfillmentMappingInventoryListList {
  /**
   * Bundle SKU.
   */
  bundle_mtsku_id?: string;
  /**
   * Fulfillment mapping type. (Enum:1-group; 2-lucky bag; 3-mapping list).
   */
  mapping_type?: number;
  /**
   * Shopee warehouse id.
   */
  whs_id?: string;
  /**
   * Stock detail.
   */
  stock_context?: ShopeeGetFulfillmentMappingInventoryListStockContext;
  /**
   * The fulfillment mapping formula of the Bundle MTSKU. It describes the Parent MTSKU composition or alternative mapping relationships.Formatting rules:- The quantity before an MTSKU ID indicates the required quantity of that Parent MTSKU.- Within one mapping formula, + indicates that all listed Parent MTSKUs are required together.- For a Mapping List, [] encloses alternative mapping formulas, and , separates each alternative formula.Examples:- Group: 2 * MTSKU_A + 1 * MTSKU_B- Mapping List: [2 * MTSKU_A + 1 * MTSKU_B, 1 * MTSKU_C]- Lucky Bag: 2 * MTSKU_A
   */
  mapping_formula?: string;
}

/**
 * ShopeeGetFulfillmentMappingInventoryListResponseData sub-interface for ShopeeGetFulfillmentMappingInventoryListResponse
 */
export interface ShopeeGetFulfillmentMappingInventoryListResponseData {
  list?: ShopeeGetFulfillmentMappingInventoryListList[];
  /**
   * The amount of data that meets the query conditions.
   */
  total?: number;
  /**
   * If the returned value is a non-empty string, it indicates that there is more data available. Include this returned value in the next query request to continue retrieving data starting from the corresponding position indicated by the cursor.
   */
  next_cursor?: string;
}

/**
 * Response payload for get_fulfillment_mapping_inventory_list
 *
 * This API is designed for sellers using Fulfillment Mapping and their ERP systems.It allows callers to query the corresponding mapping and inventory information using the MTSKU ID of either a Bundle SKU or a Parent SKU, supporting automated inventory reconciliation and planning, improving Parent SKU inventory visibility, and reducing manual operations and cross-channel overselling risks.
 */
export type ShopeeGetFulfillmentMappingInventoryListResponse =
  ShopeeResponseCommon<ShopeeGetFulfillmentMappingInventoryListResponseData>;

/**
 * ShopeeGetStockAgingWhs sub-interface for ShopeeGetStockAgingSku
 */
export interface ShopeeGetStockAgingWhs {
  /**
   * Whs id
   */
  whs_id?: string;
  /**
   * 0-30Days
   */
  qty_of_stock_age_one?: number;
  /**
   * 31-60Days
   */
  qty_of_stock_age_two?: number;
  /**
   * 61-90Days
   */
  qty_of_stock_age_three?: number;
  /**
   * 91-120Days
   */
  qty_of_stock_age_four?: number;
  /**
   * 121-180Days
   */
  qty_of_stock_age_five?: number;
  /**
   * >180Days
   */
  qty_of_stock_age_six?: number;
  /**
   * expired stock
   */
  excess_stock?: number;
  aging_storage_tag?: number;
}

/**
 * ShopeeGetStockAgingShopSku sub-interface for ShopeeGetStockAgingSku
 */
export interface ShopeeGetStockAgingShopSku {
  /**
   * shop level sku_idshop_sku_id="item_id" _ "model_id"
   */
  shop_sku_id?: string;
  /**
   * shop_item_id="item_id" in Product ModuleFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_item_id?: string;
  /**
   * shop_model_id= item level model_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  shop_model_id?: string;
}

/**
 * ShopeeGetStockAgingSku sub-interface for ShopeeGetStockAgingItem
 */
export interface ShopeeGetStockAgingSku {
  /**
   * mtsku id
   */
  mtsku_id?: string;
  /**
   * Warehouse model SKU IDFor CB global items, this is equal to the global model_id.For local items, it differs from model_id; use shop_model_id to match the model_id
   */
  model_id?: string;
  /**
   * 0-Null；1-Bundle SKU；2-Parent SKU
   */
  fulfill_mapping_mode?: number;
  /**
   * model name
   */
  model_name?: string;
  barcode?: string;
  /**
   * Info of whs
   */
  whs_list?: ShopeeGetStockAgingWhs[];
  shop_sku_list?: ShopeeGetStockAgingShopSku[];
}

/**
 * ShopeeGetStockAgingItem sub-interface for ShopeeGetStockAgingResponseData
 */
export interface ShopeeGetStockAgingItem {
  /**
   * Warehouse item id; To indicate an unique item in a warehouseone warehouse item id can match with multiple shop_item_idFor Global Item, warehouse_item_id=Global Item idFor Local Item, shop_item_id=item_id
   */
  warehouse_item_id?: string;
  /**
   * item name
   */
  item_name?: string;
  /**
   * item image
   */
  item_image?: string;
  /**
   * Data list of mtsku
   */
  sku_list?: ShopeeGetStockAgingSku[];
}

/**
 * ShopeeGetStockAgingResponseData sub-interface for ShopeeGetStockAgingResponse
 */
export interface ShopeeGetStockAgingResponseData {
  /**
   * Data list of item sku
   */
  item_list?: ShopeeGetStockAgingItem[];
}

/**
 * Response payload for get_stock_aging
 *
 * Get Seller Center Stock Aging page data
 */
export type ShopeeGetStockAgingResponse = ShopeeResponseCommon<ShopeeGetStockAgingResponseData>;

/**
 * ShopeeGetStockMovementWhs sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementWhs {
  /**
   * Whs id
   */
  whs_id?: string;
  /**
   * Total warehouse inventory at the start time
   */
  start_on_hand_total?: number;
  /**
   * Inbound quantity to the warehouse during the selected time period.
   */
  inbound_total?: number;
  /**
   * Outbound quantity from the warehouse during the selected time period
   */
  outbound_total?: number;
  /**
   * Inventory adjustment quantity in the warehouse during the selected time period
   */
  adjust_total?: number;
  /**
   * Total warehouse inventory at the end time.
   */
  end_on_hand_total?: number;
}

/**
 * ShopeeGetStockMovementStartQty sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementStartQty {
  /**
   * sku number at the start time
   */
  start_on_hand_total?: number;
  /**
   * Number of sellable SKUs at the start time
   */
  start_sellable?: number;
  /**
   * Number of reserved SKUs at the start time.
   */
  start_reserved?: number;
  start_unsellable?: number;
}

/**
 * ShopeeGetStockMovementEndQty sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementEndQty {
  /**
   * Total inventory at the end time.
   */
  end_on_hand_total?: number;
  end_sellable?: number;
  end_reserved?: number;
  end_unsellable?: number;
}

/**
 * ShopeeGetStockMovementInboundQty sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementInboundQty {
  /**
   * Total inbound quantity during the selected time period
   */
  inbound_total?: number;
  /**
   * Total merchant procurement quantity during the selected time period.
   */
  inbound_my?: number;
  /**
   * Total number of SKUs returned by buyers and received into the warehouse during the selected time period.
   */
  inbound_returned?: number;
}

/**
 * ShopeeGetStockMovementOutboundQty sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementOutboundQty {
  /**
   * Total outbound quantity during the selected time period.
   */
  outbound_total?: number;
  /**
   * "Total sold quantity during the selected time period."
   */
  outbound_sold?: number;
  /**
   * Total merchant return quantity during the selected time period.
   */
  outbound_returned?: number;
  /**
   * Total disposal quantity during the selected time period.
   */
  outbound_disposed?: number;
}

/**
 * ShopeeGetStockMovementAdjustQty sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementAdjustQty {
  /**
   * "Total number of SKU changes during the selected time period."
   */
  adjust_total?: number;
  /**
   * "Total quantity of lost or recovered items during the selected time period."
   */
  adjust_lost_found?: number;
  /**
   * Total quantity of transfer orders created by the warehouse during the selected time period
   */
  adjust_trans_whs?: number;
}

/**
 * ShopeeGetStockMovementShopSku sub-interface for ShopeeGetStockMovementSku
 */
export interface ShopeeGetStockMovementShopSku {
  /**
   * shop level sku_id  shop_sku_id="item_id" _ "model_id"
   */
  shop_sku_id?: string;
  /**
   * shop_item_id="item_id" in Product Module
   */
  shop_item_id?: string;
  /**
   * shop_model_id= item level model_id
   */
  shop_model_id?: string;
}

/**
 * ShopeeGetStockMovementSku sub-interface for ShopeeGetStockMovementItem
 */
export interface ShopeeGetStockMovementSku {
  /**
   * mtsku id
   */
  mtsku_id?: string;
  /**
   * model sku id
   */
  model_id?: string;
  variation?: string;
  /**
   * 0-Null；1-Bundle SKU；2-Parent SKU
   */
  fulfill_mapping_mode?: number;
  barcode?: string;
  /**
   * Info of whs
   */
  whs_list?: ShopeeGetStockMovementWhs[];
  /**
   * Inventory information at the start time.
   */
  start_qty?: ShopeeGetStockMovementStartQty;
  end_qty?: ShopeeGetStockMovementEndQty;
  /**
   * Inbound information during the selected time period
   */
  inbound_qty?: ShopeeGetStockMovementInboundQty;
  outbound_qty?: ShopeeGetStockMovementOutboundQty;
  /**
   * "SKU change information during the selected time period."
   */
  adjust_qty?: ShopeeGetStockMovementAdjustQty;
  shop_sku_list?: ShopeeGetStockMovementShopSku[];
}

/**
 * ShopeeGetStockMovementItem sub-interface for ShopeeGetStockMovementResponseData
 */
export interface ShopeeGetStockMovementItem {
  /**
   * Warehouse item id; To indicate an unique item in a warehouseone warehouse item id can match with multiple shop_item_id
   */
  warehouse_item_id?: string;
  /**
   * item name
   */
  item_name?: string;
  /**
   * item image
   */
  item_image?: string;
  /**
   * Data list of mtsku
   */
  sku_list?: ShopeeGetStockMovementSku[];
}

/**
 * ShopeeGetStockMovementResponseData sub-interface for ShopeeGetStockMovementResponse
 */
export interface ShopeeGetStockMovementResponseData {
  total?: number;
  start_time?: string;
  end_time?: string;
  query_end_time?: string;
  /**
   * Data list of item sku
   */
  item_list?: ShopeeGetStockMovementItem[];
}

/**
 * Response payload for get_stock_movement
 *
 * Get Seller Center，Stock Movement page data
 */
export type ShopeeGetStockMovementResponse = ShopeeResponseCommon<ShopeeGetStockMovementResponseData>;
