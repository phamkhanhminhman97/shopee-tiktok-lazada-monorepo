import { ShopeeRequestCommon } from './config.request';

interface ItemList {
  item_id: number;
  unlist: boolean;
}

interface RequestUnlistItem extends ShopeeRequestCommon {
  item_list: Array<ItemList>;
}

interface SellerStock {
  location_id?: string; //you can get the location id from v2.shop.get_warehouse_detail api
  stock: number;
}

interface StockList {
  model_id?: number; //0 for no model item.
  seller_stock: Array<SellerStock>;
}

interface RequestUpdateStock extends ShopeeRequestCommon {
  item_id: number;
  stock_list: Array<StockList>;
}

interface PriceList {
  model_id?: number;
  original_price: number;
}
interface RequestUpdatePrice extends ShopeeRequestCommon {
  item_id: number;
  price_list: Array<PriceList>;
}

interface RequestGetItemList extends ShopeeRequestCommon {
  offset: number;
  page_size: number; //	the size of one page Max=100.
  update_time_from?: number; //unix timestamp
  update_time_to?: number;
  item_status: string[]; //NORMAL/BANNED/DELETED/UNLIST example:item_status=NORMAL&item_status=BANNED
}

interface RequestGetModelList {
  item_id: number;
}

type SearchItemStatus = 'NORMAL' | 'BANNED' | 'UNLIST' | 'REVIEWING' | 'SELLER_DELETE' | 'SHOPEE_DELETE';

/**
 * Request type for Shopee v2.product.search_item.
 *
 * `page_size` is required. At least one filter should be provided; Shopee docs
 * specifically mention `item_name` or `attribute_status`, and newer docs also
 * support `item_sku`, `item_status`, and `deboost_only`.
 *
 * @see docs/product_search_item.md for the full API reference.
 */
interface RequestSearchItem {
  page_size: number;
  offset?: string;
  item_name?: string;
  /**
   * 1 = lack required attributes, 2 = lack optional attributes.
   */
  attribute_status?: 1 | 2 | number;
  item_sku?: string;
  item_status?: SearchItemStatus[];
  deboost_only?: boolean;
}

interface RequestGetBrandList {
  offset: number;
  page_size: number;
  category_id: number;
  status: number; //Brand status , 1: normal brand, 2: pending brand
  language?: string;
}

type AddItemCondition = 'NEW' | 'USED';
type AddItemDescriptionType = 'normal' | 'extended';
type AddItemImageRatio = '1:1' | '3:4';
type AddItemItemStatus = 'UNLIST' | 'NORMAL';
type AddItemWarrantyTime = 'ONE_YEAR' | 'TWO_YEARS' | 'OVER_TWO_YEARS';

interface AddItemDimension {
  package_height: number;
  package_length: number;
  package_width: number;
}

interface AddItemLogisticInfo {
  logistic_id: number;
  enabled: boolean;
  size_id?: number;
  shipping_fee?: number;
  is_free?: boolean;
}

interface AddItemImage {
  image_id_list: string[];
  image_ratio?: AddItemImageRatio;
}

interface AddItemBrand {
  brand_id: number;
  original_brand_name: string;
}

interface AddItemDescriptionInfo {
  extended_description: {
    field_list: Array<{
      field_type: 'text' | 'image';
      text?: string;
      image_info?: { image_id: string };
    }>;
  };
}

interface AddItemPreOrder {
  is_pre_order: boolean;
  days_to_ship?: number;
}

interface AddItemWholesale {
  min_count: number;
  max_count: number;
  unit_price: number;
}

interface AddItemAttribute {
  attribute_id: number;
  attribute_value_list?: Array<{
    value_id: number;
    original_value_name?: string;
    value_unit?: string;
  }>;
}

interface AddItemSellerStock {
  /**
   * Warehouse location ID. Omit when the shop does not use multi-warehouse stock.
   */
  location_id?: string;
  stock: number;
}

interface AddItemComplaintPolicy {
  warranty_time?: AddItemWarrantyTime;
  exclude_entrepreneur_warranty?: boolean;
  complaint_address_id?: number;
  additional_information?: string;
}

interface AddItemGroupItemInfo {
  group_qtd?: string;
  group_unit?: string;
  group_unit_value?: string;
  original_group_price?: string;
  group_gtin_sscc?: string;
  group_grai_gtin_sscc?: string;
}

interface AddItemTaxInfo {
  ncm?: string;
  same_state_cfop?: string;
  diff_state_cfop?: string;
  csosn?: string;
  origin?: string;
  cest?: string;
  measure_unit?: string;
  invoice_option?: string;
  vat_rate?: string;
  hs_code?: string;
  tax_code?: string;
  tax_type?: number;
  pis?: string;
  cofins?: string;
  icms_cst?: string;
  pis_cofins_cst?: string;
  federal_state_taxes?: string;
  operation_type?: string;
  ex_tipi?: string;
  fci_num?: string;
  recopi_num?: string;
  additional_info?: string;
  group_item_info?: AddItemGroupItemInfo;
  export_cfop?: string;
}

interface AddItemCertificationInfo {
  certification_list: Array<{
    certification_no: string;
    permit_id: number;
    expiry_date?: number;
    certification_proofs: Array<{
      file_name: string;
      image_id: string | number;
      ratio: number;
    }>;
  }>;
}

interface AddItemPurchaseLimitInfo {
  min_purchase_limit?: number;
  max_purchase_limit?: { purchase_limit: number };
}

interface AddItemCompatibilityInfo {
  vehicle_info_list: Array<{
    brand_id: number;
    model_id: number;
    year_id?: number;
    version_id?: number;
  }>;
}

/**
 * Request type for Shopee v2.product.add_item.
 *
 * Required by Shopee: `original_price`, `description`, `weight`, `item_name`,
 * `category_id`, `dimension`, at least one `logistic_info`, and at least one
 * image ID in `image.image_id_list`.
 *
 * If `description_info` is used, set `description_type` to `extended`.
 *
 * @see docs/product_add_item.md for the full API reference.
 */
interface RequestAddItem {
  original_price: number;
  description: string;
  weight: number;
  item_name: string;
  item_status?: AddItemItemStatus;
  category_id: number;
  dimension: AddItemDimension;
  logistic_info: AddItemLogisticInfo[];
  image: AddItemImage;
  brand?: AddItemBrand;
  item_sku?: string;
  condition?: AddItemCondition;
  description_type?: AddItemDescriptionType;
  description_info?: AddItemDescriptionInfo;
  pre_order?: AddItemPreOrder;
  wholesale?: AddItemWholesale[];
  attribute_list?: AddItemAttribute[];
  /**
   * Shopee accepts only one video_upload_id for this endpoint.
   */
  video_upload_id?: string[];
  seller_stock?: AddItemSellerStock[];
  /**
   * 0 = not dangerous, 1 = dangerous.
   */
  item_dangerous?: 0 | 1 | number;
  gtin_code?: string;
  /**
   * Data Science category recommendation ID from Shopee recommendation flow.
   */
  ds_cat_rcmd_id?: string;
  complaint_policy?: AddItemComplaintPolicy;
  promotion_images?: AddItemImage;
  size_chart_info?: {
    size_chart?: string;
    size_chart_id?: number;
  };
  certification_info?: AddItemCertificationInfo;
  purchase_limit_info?: AddItemPurchaseLimitInfo;
  authorised_brand_id?: number;
  scheduled_publish_time?: number;
  compatibility_info?: AddItemCompatibilityInfo;
  tax_info?: AddItemTaxInfo;
  /**
   * Optional medicine ID, only for ID local sellers when required by category.
   */
  medicine_id?: number;
}

/**
 * Request type for Shopee v2.product.update_item.
 *
 * `item_id` is required. All other fields are optional and only the submitted
 * fields are updated by Shopee. Product price and stock are not updated through
 * this endpoint; use `updatePrice()` and `updateStock()` for those flows.
 *
 * If `description_info` is used, set `description_type` to `extended`.
 *
 * @see docs/product_update_item.md for the full API reference.
 */
interface RequestUpdateItem extends Partial<Omit<RequestAddItem, 'original_price' | 'seller_stock'>> {
  item_id: number;
}

export {
  RequestUnlistItem as ShopeeRequestUnlistItem,
  RequestUpdateStock as ShopeeRequestUpdateStock,
  RequestGetItemList as ShopeeRequestGetItemList,
  RequestGetModelList as ShopeeRequestGetModelList,
  RequestSearchItem as ShopeeRequestSearchItem,
  RequestGetBrandList as ShopeeRequestGetBrandList,
  RequestUpdatePrice as ShopeeRequestUpdatePrice,
  RequestAddItem as ShopeeRequestAddItem,
  RequestUpdateItem as ShopeeRequestUpdateItem,
};
