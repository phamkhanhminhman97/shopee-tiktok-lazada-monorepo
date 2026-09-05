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

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeePisCofinsCst
 */
export enum ShopeePisCofinsCst {
  PIS = "PIS",
  COFINS = "Cofins",
}

/**
 * Enum generated for field ShopeeGtinCode
 */
export enum ShopeeGtinCode {
  ITEM = "item",
  MODEL = "model",
}

/**
 * Enum generated for field ShopeeLanguage
 */
export enum ShopeeLanguage {
  EN = "en",
  ES = "es",
}

/**
 * Enum generated for field ShopeeTierIndex
 */
export enum ShopeeTierIndex {
  TIER = "tier",
  TWO = "two",
}

/**
 * ShopeeAddKitItemImage sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemImage {
  /**
   * ID of image.
   */
  image_id_list: string[];
}

/**
 * ShopeeAddKitItemLongImage sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemLongImage {
  /**
   * ID of image.
   */
  image_id_list: string[];
}

/**
 * ShopeeAddKitItemImageInfo sub-interface for ShopeeAddKitItemField
 */
export interface ShopeeAddKitItemImageInfo {
  /**
   * Image id.
   */
  image_id: string;
}

/**
 * ShopeeAddKitItemField sub-interface for ShopeeAddKitItemExtendedDescription
 */
export interface ShopeeAddKitItemField {
  /**
   * Type of extended description field. See Data Definition- description_field_type (text , image).
   */
  field_type: string;
  /**
   * If field_type is text, text information will be set by this field.
   */
  text: string;
  /**
   * If field_type is image, image will be set by this field.
   */
  image_info?: ShopeeAddKitItemImageInfo;
}

/**
 * ShopeeAddKitItemExtendedDescription sub-interface for ShopeeAddKitItemDescriptionInfo
 */
export interface ShopeeAddKitItemExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list: ShopeeAddKitItemField[];
}

/**
 * ShopeeAddKitItemDescriptionInfo sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description: ShopeeAddKitItemExtendedDescription;
}

/**
 * ShopeeAddKitItemLogisticInfo sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemLogisticInfo {
  /**
   * ID of the channel.
   */
  logistic_id: number;
  /**
   * Whether channel is enabled for this kit item.
   */
  enabled: boolean;
  /**
   * Shipping fee. Only needed when logistics fee_type = CUSTOM_PRICE.
   */
  shipping_fee?: number;
  /**
   * Size ID. Only needed when logistic fee_type = SIZE_SELECTION.
   */
  size_id?: number;
  /**
   * Whether cover shipping fee for buyer.
   */
  is_free?: boolean;
}

/**
 * ShopeeAddKitItemDimension sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemDimension {
  /**
   * The length of package for this kit item, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this kit item, the unit is CM.
   */
  package_width: number;
  /**
   * The height of package for this kit item, the unit is CM.
   */
  package_height: number;
}

/**
 * ShopeeAddKitItemPreOrder sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemPreOrder {
  /**
   * Whether kit item is pre order.
   */
  is_pre_order: boolean;
  /**
   * The guaranteed days to ship orders. Please get the days_to_ship range from get_kit_item_limit api.
   */
  days_to_ship?: number;
}

/**
 * ShopeeAddKitItemComponent sub-interface for ShopeeAddKitItemModel
 */
export interface ShopeeAddKitItemComponent {
  /**
   * ID of the item that composes this kit model.
   */
  component_item_id: number;
  /**
   * ID of the model that composes this kit model.
   */
  component_model_id?: number;
  /**
   * The amount of the item/model that composes this kit model.
   */
  quantity: number;
  /**
   * Whether this item/model is the main component for this kit.One kit item can only have one item/model as main component.
   */
  main_component?: boolean;
}

/**
 * ShopeeAddKitItemModel sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemModel {
  /**
   * Tier index of this kit model.
   */
  tier_index: number[];
  /**
   * Seller SKU of this kit model, model_sku length information needs to be no more than 100 characters.
   */
  model_sku?: string;
  /**
   * Original price of this kit model.
   */
  original_price: number;
  /**
   * Please get the amount of item/model that one kit model support from get_kit_item_limit.
   */
  component_list: ShopeeAddKitItemComponent[];
}

/**
 * ShopeeAddKitItem_AddKitItemImage sub-interface for ShopeeAddKitItemOption
 */
export interface ShopeeAddKitItem_AddKitItemImage {
  /**
   * ID of image. If you choose to define, you need to define an image for all options.
   */
  image_id: string;
}

/**
 * ShopeeAddKitItemOption sub-interface for ShopeeAddKitItemTierVariation
 */
export interface ShopeeAddKitItemOption {
  /**
   * Option name.
   */
  option: string;
  /**
   * Option image.
   */
  image?: ShopeeAddKitItem_AddKitItemImage;
}

/**
 * ShopeeAddKitItemTierVariation sub-interface for ShopeeAddKitItemItemSetting
 */
export interface ShopeeAddKitItemTierVariation {
  /**
   * Tier variation name.
   */
  name?: string;
  /**
   * Tier variation option info list.
   */
  option_list: ShopeeAddKitItemOption[];
}

/**
 * ShopeeAddKitItemItemSetting sub-interface for ShopeeAddKitItemRequest
 */
export interface ShopeeAddKitItemItemSetting {
  /**
   * The name of this kit item.
   */
  item_name: string;
  /**
   * Item images with 1:1 ratio.
   */
  images: ShopeeAddKitItemImage;
  /**
   * Item images with 3:4 ratio.
   */
  long_images?: ShopeeAddKitItemLongImage;
  /**
   * Video upload ID returned from video uploading API. Only accept one video_upload_id.
   */
  video_upload_id?: string[];
  /**
   * If description_type is normal, description information should be set by this field.
   */
  description?: string;
  /**
   * Rich text description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeAddKitItemDescriptionInfo;
  /**
   * See Data Definition- description_type (normal , extended). If you want to use extended_description, this field must be inputed.
   */
  description_type: string;
  /**
   * Logistic channel setting.
   */
  logistic_info: ShopeeAddKitItemLogisticInfo[];
  /**
   * Unlist or not.
   */
  unlisted?: boolean;
  /**
   * SKU tag of item
   */
  item_sku?: string;
  /**
   * The weight of this kit item, the unit is KG.
   */
  weight: number;
  /**
   * The dimension of this kit item.
   */
  dimension?: ShopeeAddKitItemDimension;
  /**
   * Pre order setting.
   */
  pre_order?: ShopeeAddKitItemPreOrder;
  /**
   * Model info list, model number at most 9.
   */
  model_list: ShopeeAddKitItemModel[];
  /**
   * Tier variation info list. Only support one tier variation, and each kit item can have from 1 to 9 kit variations.
   */
  tier_variation_list: ShopeeAddKitItemTierVariation[];
}

/**
 * ShopeeAddKitItemSyncSetting sub-interface for ShopeeAddKitItemRequest
 */
export interface ShopeeAddKitItemSyncSetting {
  /**
   * Auto sync the pre_order setting from main component or not.
   */
  auto_sync_dts: boolean;
}

/**
 * Request parameters for add_kit_item
 *
 * Create the kit item by selecting multiple items and setting main component and quantity per kit.
 */
export interface ShopeeAddKitItemRequest {
  item_setting: ShopeeAddKitItemItemSetting;
  sync_setting?: ShopeeAddKitItemSyncSetting;
}

/**
 * ShopeeAddModelSellerStock sub-interface for ShopeeAddModelModel
 */
export interface ShopeeAddModelSellerStock {
  /**
   * location id, you can get the location id from v2.shop.get_warehouse_detail api, if seller don't have any warehouse, you don't need to upload this field.
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeAddModelDimension sub-interface for ShopeeAddModelModel
 */
export interface ShopeeAddModelDimension {
  /**
   * The height of package for this model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeAddModelPreOrder sub-interface for ShopeeAddModelModel
 */
export interface ShopeeAddModelPreOrder {
  /**
   * Whether the model is pre order.
   */
  is_pre_order: boolean;
  /**
   * Days to ship. Please get the days_to_ship range from the get_dts_limit API.
   */
  days_to_ship?: number;
}

/**
 * ShopeeAddModelModel sub-interface for ShopeeAddModelRequest
 */
export interface ShopeeAddModelModel {
  /**
   * Tier index of model
   */
  tier_index: number[];
  /**
   * Normal stock for price
   */
  original_price: number;
  /**
   * Seller sku, model_sku length information needs to be no more than 100 characters.
   */
  model_sku?: string;
  /**
   * new stock info for model（Please notice that stock(including Seller Stock and Shopee Stock) should be larger than or equal to real-time reserved stock）
   */
  seller_stock: ShopeeAddModelSellerStock[];
  /**
   * - GTIN is an identifier for trade items, developed by the international organization GS1.- They have 8 to 14 digits. The most common are UPC, EAN, JAN and ISBN.- GTIN will help boost positioning in online marketing channels like Google and Facebook.- That incorporation with GTIN will also aid in Search and Recommendation in Shopee itself allowing buyers to have higher likelihood of finding one's listing.Note: If you want to set “Item without GTIN”, please pass the gtin_code as "00".The validation rule is based on the value return in gtin_validation_rule" field in v2.product.get_item_limit API- Mandatory: This field is required and must contain a correctly formatted GTiN number.- Flexible: This field is required and must contain either a correctly formatted GTlN number or "00" to declare that the item/model has no valid GTlN.- Optional: This field is optional and can contain a correctly formatted GTiN number, "00" or be omitted entirely.
   */
  gtin_code?: ShopeeGtinCode | string | number;
  /**
   * The weight of this model, the unit is KG.If don't set the weight of this model, will use the weight of item by default.If set the dimension of this model, them must set the weight of this model.
   */
  weight?: number;
  /**
   * The dimension of this model.If don't set the dimension of this model, will use the dimension of item by default.
   */
  dimension?: ShopeeAddModelDimension;
  /**
   * Pre-order information of this model.Notes: If don't set the DTS of this model, will use the DTS of the item by default.
   */
  pre_order?: ShopeeAddModelPreOrder;
}

/**
 * Request parameters for add_model
 *
 * Add model. More detail please check: https://open.shopee.com/developer-guide/219
 */
export interface ShopeeAddModelRequest {
  /**
   * ID of item
   */
  item_id: number;
  /**
   * Model list
   */
  model_list: ShopeeAddModelModel[];
}

/**
 * ShopeeBatchAddItemDimension sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemDimension {
  /**
   * The height of package for this item, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this item, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this item, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeBatchAddItemLogisticInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemLogisticInfo {
  /**
   * Size ID, If specify logistic fee_type is SIZE_SELECTION size_id is required.
   */
  size_id?: number;
  /**
   * Shipping fee, Only needed when logistics fee_type = CUSTOM_PRICE.
   */
  shipping_fee?: number;
  /**
   * Whether channel is enabled for this item
   */
  enabled: boolean;
  /**
   * ID of the channel
   */
  logistic_id: number;
  /**
   * Whether cover shipping fee for buyer
   */
  is_free?: boolean;
}

/**
 * ShopeeBatchAddItemAttributeValue sub-interface for ShopeeBatchAddItemAttribute
 */
export interface ShopeeBatchAddItemAttributeValue {
  /**
   * Value ID. In the following cases, the value id needs to be uploaded as 0, and original_value_name is mandatory, needs to be filled in customized value. (1) AttributeInputType is TEXT_FILED; (2) AttributeInputType is COMBO_BOX or MULTIPLE_SELECT_COMBO_BOX, and the seller want to fill in a customized value.
   */
  value_id: number;
  /**
   * Value name. original_value_name from product.get_attributes api. If value id=0, this field is required. If AttributeType is DATE_TYPE or TIMESTAMP_TYPE, you can upload timestamp(string type) as the original_value_name.
   */
  original_value_name?: string;
  /**
   * Unit of attribute value (quantitative attribute only).
   */
  value_unit?: string;
}

/**
 * ShopeeBatchAddItemAttribute sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemAttribute {
  /**
   * ID of attribute
   */
  attribute_id: number;
  attribute_value_list?: ShopeeBatchAddItemAttributeValue[];
}

/**
 * ShopeeBatchAddItemImage sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemImage {
  /**
   * ID of image
   */
  image_id_list: string[];
  /**
   * Ratio of image, OptionalAllowed ratios :"1:1" (default) "3:4"only applicable to whitelisted seller.
   */
  image_ratio?: string;
}

/**
 * ShopeeBatchAddItemPreOrder sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemPreOrder {
  /**
   * Whether item is pre order
   */
  is_pre_order: boolean;
  /**
   * The guaranteed days to ship orders. Please get the days_to_ship range from get_dts_limit api
   */
  days_to_ship?: number;
}

/**
 * ShopeeBatchAddItemWholesale sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemWholesale {
  /**
   * Minimum count of this tier
   */
  min_count: number;
  /**
   * Maximum count of this tier
   */
  max_count: number;
  /**
   * Unit price of this tier
   */
  unit_price: number;
}

/**
 * ShopeeBatchAddItemBrand sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemBrand {
  /**
   * Id of brand.
   */
  brand_id: number;
  /**
   * Original name of brand( No Brand if not brand).
   */
  original_brand_name: string;
}

/**
 * ShopeeBatchAddItemGroupItemInfo sub-interface for ShopeeBatchAddItemTaxInfo
 */
export interface ShopeeBatchAddItemGroupItemInfo {
  /**
   * Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unit), enter 6.
   */
  group_qtd?: string;
  /**
   * Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unit), enter UNI for the individual can.
   */
  group_unit?: string;
  /**
   * Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unity), enter the value of the individual can.
   */
  group_unit_value?: string;
  /**
   * Example: The item is a package that contains 6 soda cans. Enter the price of the whole package.
   */
  original_group_price?: string;
  /**
   * Example: The item is a package that contains 6 soda cans. Please inform the GTIN SSCC code for the package.
   */
  group_gtin_sscc?: string;
  /**
   * Example: The item is box, that contain 6 packages. Each package contains 6 soda cans. Please inform the GRAI GTIN SSCC code for the Box.
   */
  group_grai_gtin_sscc?: string;
}

/**
 * ShopeeBatchAddItemTaxInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemTaxInfo {
  /**
   * Mercosur Common Nomenclature, it is a convention between Mercosur member countries to easily recognize goods, services and productive factors negotiated among themselves. (BR region)NCM must have 8 digits, OR, if your item doesn't have a NCM enter the value "00"
   */
  ncm?: string;
  /**
   * Tax Code of Operations and Installments for orders that seller and buyer are in the same state. It identifies a specific operation by category at the time of issuing the invoice.(BR region)
   */
  same_state_cfop?: string;
  /**
   * Tax Code of Operations and Installments for orders that seller and buyer are in different states. It identifies a specific operation by category at the time of issuing the invoice.(BR region)
   */
  diff_state_cfop?: string;
  /**
   * Code of Operation Status – Simples Nacional, code for company operations to identify the origin of the goods and the taxation regime of the operations.(BR region)
   */
  csosn?: string;
  /**
   * Product source, domestic or foreig (BR region).|0 - National, except for those indicated in codes 3, 4, 5, and 8|
   * |1 - Foreign: Direct import, except for that indicated in code 6|
   * |2 - Foreign: Acquired in the domestic market, except for that indicated in code 7|
   * |3 - National: Goods or products with Import Content greater than 40% and less than or equal to 70%|
   * |4 - National: Produced in compliance with the basic production processes outlined in the legislations cited in the Agreements|
   * |5 - National: Goods or products with Import Content less than or equal to 40%|
   * |6 - Foreign: Direct import, without a national equivalent, listed by CAMEX and natural gas|
   * |7 - Foreign: Acquired in the domestic market, without a national equivalent, listed by CAMEX and natural gas|
   * |8 - National: Goods or products with Import Content greater than 70%|
   */
  origin?: string;
  /**
   * Tax Replacement Specifying Code (CEST), to separate within the same NCM products that do or do not have ICMS tax substitution. (BR region)CEST must have 7 digits, OR, if your item doesn't have a CEST enter the value "00".
   */
  cest?: string;
  /**
   * (BR region)
   */
  measure_unit?: string;
  /**
   * tax_type only for TW whitelist shop. Shopee will referred Tax type when substitute sellers for issuing e-receipts to buyers. All variations share the same tax type. The meaning of value: 0: no tax type1: tax-able2: tax-free
   */
  tax_type?: number;
  /**
   * Only for BR shop.PIS - Programa de Integração Social (Social Integration Program). It is a government tax to collect resources for the payment of unemployment insurance and other employee related rights.PIS % - the tax applied to this product
   */
  pis?: string;
  /**
   * Only for BR shop.COFINS – Contribuição para Financiamento da Seguridade Social (Contribution for Social Security Funding). It is a government tax to collect resources for public health system and social security.COFINS % - the tax applied to this product
   */
  cofins?: string;
  /**
   * Only for BR shop.ICMS - Imposto sobre Circulação de Mercadorias e Serviços (Circulation of Goods and Services Tax). CST - Código da Situação Tributária (Tax Situation Code) is represented by a combination of 3 numbers with the purpose of demonstrating the origin of a product and determining the form of taxation that will apply to it. Therefore, each digit in the CST Table has a specific meaning: the first digit indicates the origin of the operation, the second digit represents the ICMS taxation on the operation and the third digit provides additional information about the form of taxation.
   */
  icms_cst?: string;
  /**
   * Only for BR shop.The CST PIS/Cofins is a code on the Electronic Invoice (NF-e) that identifies the tax situation of PIS (Programa de Integração Social) and Cofins (Contribuição para o Financiamento da Seguridade Social) in sales of goods.
   */
  pis_cofins_cst?: ShopeePisCofinsCst | string | number;
  /**
   * Only for BR shop.Enter the total percentage of the combination of federal, state, and municipal taxes, using up to two decimals.
   */
  federal_state_taxes?: string;
  /**
   * Only for BR shop.1: Retailer2: Manufacturer
   */
  operation_type?: string;
  /**
   * Only for BR shop.The EXTIPI field in the NF-e (Nota Fiscal Eletrônica) is used to indicate if there's an exception to the IPI (Imposto sobre Produtos Industrializados) tax rate for a specific product.
   */
  ex_tipi?: string;
  /**
   * Only for BR shop.The FCI Control Number is a unique identifier assigned to each import FCI (Import Content Form). It's mandatory on the corresponding NF-e (electronic invoice) to ensure compliance with Brazilian import tax regulations.
   */
  fci_num?: string;
  /**
   * Only for BR shop.RECOPI NACIONAL is a Brazilian government system that facilitates the registration and management of tax-exempt operations involving paper destined for printing books, newspapers, and periodicals (known as "papel imune" in Portuguese).
   */
  recopi_num?: string;
  /**
   * Only for BR shop.Include relevant information to display on Invoice.
   */
  additional_info?: string;
  /**
   * Only for BR shop.Required if the item is a group item.
   */
  group_item_info?: ShopeeBatchAddItemGroupItemInfo;
  /**
   * [BR region]7101 - for sales of self-produced goods7102 - resale of third-party goods
   */
  export_cfop?: string;
}

/**
 * ShopeeBatchAddItemComplaintPolicy sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemComplaintPolicy {
  /**
   * Value should be in one of ONE_YEAR TWO_YEARS OVER_TWO_YEARS.
   */
  warranty_time?: string;
  /**
   * Whether to exclude warranty complaints for entrepreneurs.If True means "I exclude warranty complaints for entrepreneur"
   */
  exclude_entrepreneur_warranty?: boolean;
  /**
   * Address for complaint. Fetch available addresses using v2.logistics.get_address_list, and use address_id  returned from it.
   */
  complaint_address_id?: number;
  /**
   * Additional information for warranty claim. Should be less than 1000 characters.
   */
  additional_information?: string;
}

/**
 * ShopeeBatchAddItemImageInfo sub-interface for ShopeeBatchAddItemField
 */
export interface ShopeeBatchAddItemImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
}

/**
 * ShopeeBatchAddItemField sub-interface for ShopeeBatchAddItemExtendedDescription
 */
export interface ShopeeBatchAddItemField {
  /**
   * Type of extended description field ：values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text， text information will be set by this field.
   */
  text?: string;
  /**
   * If field_type is image，image url will be set by this field.
   */
  image_info?: ShopeeBatchAddItemImageInfo;
}

/**
 * ShopeeBatchAddItemExtendedDescription sub-interface for ShopeeBatchAddItemDescriptionInfo
 */
export interface ShopeeBatchAddItemExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeBatchAddItemField[];
}

/**
 * ShopeeBatchAddItemDescriptionInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description?: ShopeeBatchAddItemExtendedDescription;
}

/**
 * ShopeeBatchAddItemSellerStock sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemSellerStock {
  /**
   * location id
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeBatchAddItemPromotionImage sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemPromotionImage {
  /**
   * Promotion Image
   */
  image_id_list?: string[];
}

/**
 * ShopeeBatchAddItemVehicleInfo sub-interface for ShopeeBatchAddItemCompatibilityInfo
 */
export interface ShopeeBatchAddItemVehicleInfo {
  /**
   * ID of the brand.
   */
  brand_id: number;
  /**
   * ID of the model.
   */
  model_id: number;
  /**
   * ID of the year.
   */
  year_id?: number;
  /**
   * ID of the version.
   */
  version_id?: number;
}

/**
 * ShopeeBatchAddItemCompatibilityInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemCompatibilityInfo {
  vehicle_info_list: ShopeeBatchAddItemVehicleInfo[];
}

/**
 * ShopeeBatchAddItemSizeChartInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemSizeChartInfo {
  /**
   * ID of size chart image. If you want to remove the image size chart of the item, please pass the "size_chart" empty. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Both CB shops and local shops are supported to set "size_chart".
   */
  size_chart?: string;
  /**
   * ID of template size chart. If you want to remove the template size chart of the item, please pass the "size_chart_id" as 0. You only need to fill out either the image or template. If both are filled, only the template will be kept.Notes: Only local shops are supported to set "size_chart_id", for CB shops please use "size_chart".
   */
  size_chart_id?: number;
}

/**
 * ShopeeBatchAddItemCertificationProof sub-interface for ShopeeBatchAddItemCertification
 */
export interface ShopeeBatchAddItemCertificationProof {
  /**
   * The name of the uploaded certification proof file.
   */
  file_name: string;
  /**
   * The unique image ID of the certification proof, returned by the image upload API.
   */
  image_id: number;
  /**
   * image weight/ image heightWill be optional in the future; can input 0.75 by default
   */
  ratio: number;
}

/**
 * ShopeeBatchAddItemCertification sub-interface for ShopeeBatchAddItemCertificationInfo
 */
export interface ShopeeBatchAddItemCertification {
  /**
   * Certification No.
   */
  certification_no: string;
  /**
   * Permit ID, get from v2.product.get_product_certification_rule
   */
  permit_id: number;
  /**
   * Expiry timestamp. Required for PH, but not needed for TW.
   */
  expiry_date?: number;
  /**
   * An array of proof documents for the certification; each element represents one proof file.<path></path>
   */
  certification_proofs: ShopeeBatchAddItemCertificationProof[];
}

/**
 * ShopeeBatchAddItemCertificationInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemCertificationInfo {
  /**
   * Array of certification records for the product, each containing type, certificate number, permit ID, and proof documents.
   */
  certification_list?: ShopeeBatchAddItemCertification[];
}

/**
 * ShopeeBatchAddItemMaxPurchaseLimit sub-interface for ShopeeBatchAddItemPurchaseLimitInfo
 */
export interface ShopeeBatchAddItemMaxPurchaseLimit {
  /**
   * maximum purchase limit for each order.
   */
  purchase_limit?: number;
}

/**
 * ShopeeBatchAddItemPurchaseLimitInfo sub-interface for ShopeeBatchAddItemItem
 */
export interface ShopeeBatchAddItemPurchaseLimitInfo {
  /**
   * minimum purchase count for each order
   */
  min_purchase_limit?: number;
  max_purchase_limit?: ShopeeBatchAddItemMaxPurchaseLimit;
}

/**
 * ShopeeBatchAddItemItem sub-interface for ShopeeBatchAddItemRequest
 */
export interface ShopeeBatchAddItemItem {
  /**
   * Item price
   */
  original_price: number;
  /**
   * if description_type is normal , Description information should be set by this field.
   */
  description: string;
  /**
   * The weight of this item, the unit is KG.
   */
  weight: number;
  /**
   * Item name
   */
  item_name: string;
  /**
   * Item status, could be UNLIST or NORMAL
   */
  item_status?: string;
  /**
   * The dimension of this item.
   */
  dimension?: ShopeeBatchAddItemDimension;
  /**
   * Logistic channel setting
   */
  logistic_info: ShopeeBatchAddItemLogisticInfo[];
  /**
   * This field is optional(expect Indonesia) depending on the specific attribute under different categories. Should call shopee.item.GetAttributes to get attribute first. Must contain all all mandatory attribute.
   */
  attribute_list?: ShopeeBatchAddItemAttribute[];
  /**
   * ID of category
   */
  category_id: number;
  /**
   * Item images
   */
  image: ShopeeBatchAddItemImage;
  /**
   * Pre order setting
   */
  pre_order?: ShopeeBatchAddItemPreOrder;
  /**
   * SKU tag of item
   */
  item_sku?: string;
  /**
   * Condition of item, could be USED or NEW
   */
  condition?: string;
  /**
   * Wholesale setting
   */
  wholesale?: ShopeeBatchAddItemWholesale[];
  /**
   * Video upload ID returned from video uploading API. Only accept one video_upload_id.
   */
  video_upload_id?: string[];
  brand?: ShopeeBatchAddItemBrand;
  /**
   * This field is only applicable for local sellers in Indonesia and Malaysia. Use this field to identify whether a product is a dangerous product. 0 for non-dangerous product and 1 for dangerous product. For more information, please visit the market's respective Seller Education Hub.
   */
  item_dangerous?: number;
  /**
   * Tax information
   */
  tax_info?: ShopeeBatchAddItemTaxInfo;
  /**
   * Complaint Policy for item. Only required for local PL sellers, ignored otherwise.
   */
  complaint_policy?: ShopeeBatchAddItemComplaintPolicy;
  /**
   * New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeBatchAddItemDescriptionInfo;
  /**
   * Values: See Data Definition- description_type (normal , extended). If you want to use extended_description, this field must be inputed
   */
  description_type?: string;
  /**
   * seller stock（Please notice that stock(including Seller Stock and Shopee Stock) should be larger than or equal to real-time reserved stock）
   */
  seller_stock?: ShopeeBatchAddItemSellerStock[];
  /**
   * - GTIN is an identifier for trade items, developed by the international organization GS1.- They have 8 to 14 digits. The most common are UPC, EAN, JAN and ISBN.- GTIN will help boost positioning in online marketing channels like Google and Facebook.- That incorporation with GTIN will also aid in Search and Recommendation in Shopee itself allowing buyers to have higher likelihood of finding one's listing.Note: If you want to set “Item without GTIN”, please pass the gtin_code as "00".The validation rule is based on the value return in gtin_validation_rule" field in v2.product.get_item_limit API- Mandatory: This field is required and must contain a correctly formatted GTiN number.- Flexible: This field is required and must contain either a correctly formatted GTlN number or "00" to declare that the item/model has no valid GTlN.- Optional: This field is optional and can contain a correctly formatted GTiN number, "00" or be omitted entirely.
   */
  gtin_code?: ShopeeGtinCode | string | number;
  /**
   * category recommendation service id
   */
  ds_cat_rcmd_id?: string;
  /**
   * Promotion ImageCurrently only allow one promoton imageYou could set promotion image only if the product images' ratio is 3:4
   */
  promotion_images?: ShopeeBatchAddItemPromotionImage;
  compatibility_info?: ShopeeBatchAddItemCompatibilityInfo;
  /**
   * Scheduled publish time of this item: 1) Can only set scheduled_publish_time for item with UNLIST status2) Can only set the time from current time +1hour to current time +90days, and the time is only allowed to be accurate to the minute
   */
  scheduled_publish_time?: number;
  /**
   * ID of authorised reseller brand.
   */
  authorised_brand_id?: number;
  size_chart_info?: ShopeeBatchAddItemSizeChartInfo;
  /**
   * For PH product certification inputRequired for some category and attribute option
   */
  certification_info?: ShopeeBatchAddItemCertificationInfo;
  /**
   * purchase limit info
   */
  purchase_limit_info?: ShopeeBatchAddItemPurchaseLimitInfo;
  /**
   * [Only for ID local sellers] as a unique identifier for each standardized medicine, the medicine id can only be obtained offline
   */
  medicine_id?: number;
}

/**
 * Request parameters for batch_add_item
 *
 * Create asynchronous task to batch add item
 */
export interface ShopeeBatchAddItemRequest {
  /**
   * The item list to batch add. The list size must be between 1 and 100.
   */
  item_list: ShopeeBatchAddItemItem[];
}

/**
 * ShopeeBatchPublishItemToOutletShopSellerStock sub-interface for ShopeeBatchPublishItemToOutletShopModel
 */
export interface ShopeeBatchPublishItemToOutletShopSellerStock {
  /**
   * The location ID.
   */
  location_id?: string;
  /**
   * The stock quantity of the location.
   */
  stock: number;
}

/**
 * ShopeeBatchPublishItemToOutletShopPreOrder sub-interface for ShopeeBatchPublishItemToOutletShopModel
 */
export interface ShopeeBatchPublishItemToOutletShopPreOrder {
  /**
   * Indicate whether the model is pre-order.
   */
  is_pre_order: boolean;
  /**
   * The days to ship for pre-order model.
   */
  days_to_ship?: number;
}

/**
 * ShopeeBatchPublishItemToOutletShopModel sub-interface for ShopeeBatchPublishItemToOutletShopPublishItem
 */
export interface ShopeeBatchPublishItemToOutletShopModel {
  /**
   * The related model ID of the product in the Mart shop.
   */
  relate_mart_model_id?: number;
  /**
   * The model status.
   */
  model_status?: string;
  /**
   * The original price of the outlet model.
   */
  original_price?: number;
  /**
   * The seller stock by location.
   */
  seller_stock?: ShopeeBatchPublishItemToOutletShopSellerStock[];
  /**
   * The pre-order setting of the model.
   */
  pre_order?: ShopeeBatchPublishItemToOutletShopPreOrder;
}

/**
 * ShopeeBatchPublishItemToOutletShopLogisticInfo sub-interface for ShopeeBatchPublishItemToOutletShopPublishItem
 */
export interface ShopeeBatchPublishItemToOutletShopLogisticInfo {
  /**
   * The logistics channel ID used for shipping the item.
   */
  logistic_id?: number;
  /**
   * Indicates whether the logistics channel is enabled for the item.
   */
  enabled: boolean;
  /**
   * The shipping fee charged to the buyer for this logistics channel.
   */
  shipping_fee?: number;
  /**
   * The parcel size ID used to calculate shipping fees.
   */
  size_id?: number;
  /**
   * Indicates whether free shipping is applied for this logistics channel.
   */
  is_free?: boolean;
}

/**
 * ShopeeBatchPublishItemToOutletShopMaxPurchaseLimit sub-interface for ShopeeBatchPublishItemToOutletShopPurchaseLimitInfo
 */
export interface ShopeeBatchPublishItemToOutletShopMaxPurchaseLimit {
  /**
   * The maximum quantity that a buyer is allowed to purchase per order.
   */
  purchase_limit?: number;
}

/**
 * ShopeeBatchPublishItemToOutletShopPurchaseLimitInfo sub-interface for ShopeeBatchPublishItemToOutletShopPublishItem
 */
export interface ShopeeBatchPublishItemToOutletShopPurchaseLimitInfo {
  /**
   * The minimum quantity that a buyer is allowed to purchase per order.
   */
  min_purchase_limit?: number;
  /**
   * The maximum purchase quantity configuration for the item.
   */
  max_purchase_limit?: ShopeeBatchPublishItemToOutletShopMaxPurchaseLimit;
}

/**
 * ShopeeBatchPublishItemToOutletShopPublishItem sub-interface for ShopeeBatchPublishItemToOutletShopItem
 */
export interface ShopeeBatchPublishItemToOutletShopPublishItem {
  /**
   * The item ID of the item in the Outlet shop.
   */
  outlet_item_id?: number;
  /**
   * The outlet model list.
   */
  model?: ShopeeBatchPublishItemToOutletShopModel[];
  /**
   * The logistic information of the outlet item.
   */
  logistic_info?: ShopeeBatchPublishItemToOutletShopLogisticInfo[];
  /**
   * The purchase limit information of the outlet item.
   */
  purchase_limit_info?: ShopeeBatchPublishItemToOutletShopPurchaseLimitInfo;
}

/**
 * ShopeeBatchPublishItemToOutletShopItem sub-interface for ShopeeBatchPublishItemToOutletShopRequest
 */
export interface ShopeeBatchPublishItemToOutletShopItem {
  /**
   * The item ID of the item in the Mart shop.
   */
  mart_item_id: number;
  /**
   * The shop ID of the Outlet shop.
   */
  outlet_shop_id: number;
  /**
   * The outlet item data to publish.
   */
  publish_item: ShopeeBatchPublishItemToOutletShopPublishItem;
}

/**
 * Request parameters for batch_publish_item_to_outlet_shop
 *
 * Create asynchronous task to batch publish outlet item
 */
export interface ShopeeBatchPublishItemToOutletShopRequest {
  /**
   * The item list to batch publish to Outlet shop. The list size must be between 1 and 100.
   */
  item_list: ShopeeBatchPublishItemToOutletShopItem[];
}

/**
 * ShopeeBatchUpdateOutletPricePrice sub-interface for ShopeeBatchUpdateOutletPriceItem
 */
export interface ShopeeBatchUpdateOutletPricePrice {
  /**
   * The model ID of the product. Empty for item without model.
   */
  model_id?: number;
  /**
   * The original price to update. The value must be greater than 0.
   */
  original_price: number;
}

/**
 * ShopeeBatchUpdateOutletPriceItem sub-interface for ShopeeBatchUpdateOutletPriceRequest
 */
export interface ShopeeBatchUpdateOutletPriceItem {
  /**
   * The shop ID of the Outlet shop.
   */
  outlet_shop_id: number;
  /**
   * The item ID of the item in the Outlet shop.
   */
  item_id: number;
  /**
   * The price list of item models. The list size must be at least 1.
   */
  price_list: ShopeeBatchUpdateOutletPricePrice[];
}

/**
 * Request parameters for batch_update_outlet_price
 *
 * Create asynchronous task to batch update outlet item's price
 */
export interface ShopeeBatchUpdateOutletPriceRequest {
  /**
   * The item list to batch update price. The list size must be between 1 and 100.
   */
  item_list: ShopeeBatchUpdateOutletPriceItem[];
}

/**
 * ShopeeBatchUpdateOutletStockSellerStock sub-interface for ShopeeBatchUpdateOutletStockStock
 */
export interface ShopeeBatchUpdateOutletStockSellerStock {
  /**
   * location id, you can get the location id from v2.shop.get_warehouse_detail api, if seller don't have any warehouse, you don't need to upload this field.
   */
  location_id?: string;
  /**
   * The stock quantity of the location.
   */
  stock: number;
}

/**
 * ShopeeBatchUpdateOutletStockStock sub-interface for ShopeeBatchUpdateOutletStockItem
 */
export interface ShopeeBatchUpdateOutletStockStock {
  /**
   * The model ID of the product. Empty for item without model.
   */
  model_id?: number;
  /**
   * The seller stock by location.
   */
  seller_stock: ShopeeBatchUpdateOutletStockSellerStock[];
}

/**
 * ShopeeBatchUpdateOutletStockItem sub-interface for ShopeeBatchUpdateOutletStockRequest
 */
export interface ShopeeBatchUpdateOutletStockItem {
  /**
   * The shop ID of the Outlet shop.
   */
  outlet_shop_id: number;
  /**
   * The item ID of the item in the Outlet shop.
   */
  item_id: number;
  /**
   * The stock list of item models. The list size must be at least 1.
   */
  stock_list: ShopeeBatchUpdateOutletStockStock[];
}

/**
 * Request parameters for batch_update_outlet_stock
 *
 * Create asynchronous task to batch update outlet stock
 */
export interface ShopeeBatchUpdateOutletStockRequest {
  /**
   * The item list to batch update stock. The list size must be between 1 and 100.
   */
  item_list: ShopeeBatchUpdateOutletStockItem[];
}

/**
 * Request parameters for boost_item
 *
 * Boost item.
 */
export interface ShopeeBoostItemRequest {
  /**
   * Shopee's unique identifier for an item, limit:[1,5]
   */
  item_id_list: number[];
}

/**
 * Request parameters for category_recommend
 *
 * Recommend category by item name.
 */
export interface ShopeeCategoryRecommendRequest {
  /**
   * name of item
   */
  item_name: string;
  /**
   * Please use the image id returned by v2.media_space.upload_image api, we will ignore if this field is empty string
   */
  product_cover_image?: string;
}

/**
 * Request parameters for delete_item
 *
 * Use this call to delete a product item.
 */
export interface ShopeeDeleteItemRequest {
  /**
   * The identity of product item.
   */
  item_id: number;
}

/**
 * Request parameters for delete_model
 *
 * Delete item model.
 */
export interface ShopeeDeleteModelRequest {
  /**
   * ID of item.
   */
  item_id: number;
  /**
   * ID of model.
   */
  model_id: number;
}

/**
 * ShopeeGenerateKitImageComponent sub-interface for ShopeeGenerateKitImageRequest
 */
export interface ShopeeGenerateKitImageComponent {
  /**
   * ID of the item that composes this kit model.
   */
  component_item_id: number;
  /**
   * ID of the model that composes this kit model.
   */
  component_model_id?: number;
}

/**
 * Request parameters for generate_kit_image
 *
 * This API generates a single consolidated image by combining the cover images of all selected items. It is typically used to create a unified product display image for kits or bundles.
 */
export interface ShopeeGenerateKitImageRequest {
  /**
   * Please send up until 9 components.
   */
  component_list: ShopeeGenerateKitImageComponent[];
}

/**
 * Request parameters for get_aitem_by_pitem_id
 *
 * Get the list of A Items under SIP Affiliate Shop corresponding to P Items under SIP Primary Shop.
 */
export interface ShopeeGetAitemByPitemIdRequest {
  /**
   * ID of item under SIP Primary Shop.
   */
  pitem_id: number;
}

/**
 * Request parameters for get_all_vehicle_list
 *
 * Use this Open API to get all vehicle list.
 */
export interface ShopeeGetAllVehicleListRequest {
  /**
   * The size of one page. Max=100
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call.
   */
  offset?: number;
  /**
   * If language is not uploaded, the default language=en, the following are the languages supported by different markets SG: en ; MY: en / ms-my / zh-hans ; TH: en / th ; VN: en / vi ; PH: en ; TW: en / zh-hant ; ID: en / id ; BR: en / pt-br ; MX: en / es-mx ; CO: en/es-CO ; CL: en/es-CL. Note: For markets that have already launched global tree, Crossboard shop only support returning en and zh-hans language data
   */
  language?: ShopeeLanguage | string | number;
}

/**
 * Request parameters for get_attribute_tree
 *
 * Get the attribute tree for categories
 */
export interface ShopeeGetAttributeTreeRequest {
  /**
   * max count is 20
   */
  category_id_list: number[];
  /**
   * LanguageSupport Lanuage:"SG": [        "en",        "zh-Hans",        "ms"      ], "MY": [        "en",        "zh-Hans",        "ms"      ], "PH": [        "en",        "zh-Hans"      ], "VN": [        "vn",        "en"      ], "ID": [        "id",        "en"      ], "TH": [        "th",        "en"      ], "BR": [        "pt-BR",        "en"      ], "MX": [        "es-MX",        "en"      ], "CO": [        "es-CO",        "en"      ], "CL": [        "es-CL",        "en"      ], "TW": [        "zh-Hant",        "zh-Hans",        "en"      ],"IN": [        "en",        "hi"      ]
   */
  language?: string;
}

/**
 * Request parameters for get_batch_task_result
 *
 * Query batch task result
 */
export interface ShopeeGetBatchTaskResultRequest {
  /**
   * The task type. 1: price; 2: stock; 3: publish outlet; 4: add item.
   */
  task_type: number;
  /**
   * The task ID to query.
   */
  task_id: number;
}

/**
 * Request parameters for get_boosted_list
 *
 * Get boosted item list.
 */
export type ShopeeGetBoostedListRequest = Record<string, never>;

/**
 * Request parameters for get_comment
 *
 * Use this api to get comment by shop_id, item_id, or comment_id, get up to 1000 comments.
 */
export interface ShopeeGetCommentRequest {
  /**
   * The identity of product item.
   */
  item_id?: number;
  /**
   * The identity of comment.
   */
  comment_id?: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the offset can be some entry to start next call.
   */
  cursor: string;
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100.
   */
  page_size: number;
}

/**
 * Request parameters for get_direct_item_list
 *
 * get direct item by main item.
 */
export interface ShopeeGetDirectItemListRequest {
  /**
   * Item id of main shop.
   */
  main_item_id: number[];
}

/**
 * ShopeeGetDirectShopRecommendedPriceModel sub-interface for ShopeeGetDirectShopRecommendedPriceRequest
 */
export interface ShopeeGetDirectShopRecommendedPriceModel {
  /**
   * Id of main model.
   */
  model_id?: number;
  /**
   * Tier index of main model. Index starts from 0.
   */
  tier_index?: number[];
  input_price?: number;
  weight?: number;
}

/**
 * Request parameters for get_direct_shop_recommended_price
 *
 * get recommend price for direct shop.
 */
export interface ShopeeGetDirectShopRecommendedPriceRequest {
  main_item_id: number;
  /**
   * Direct shop regions.
   */
  direct_shop_regions: string[];
  /**
   * Main_item's category.
   */
  category_id?: number;
  /**
   * Main model model info.
   */
  model_list?: ShopeeGetDirectShopRecommendedPriceModel[];
  /**
   * direct shop enabled channel
   */
  enabled_channel_id_list?: number[];
}

/**
 * Request parameters for get_item_content_diagnosis_result
 *
 * Get the content quality details (including content quality level, content issues, and system suggestions) for specific product list.
 */
export interface ShopeeGetItemContentDiagnosisResultRequest {
  /**
   * item_id list; limit [1,48]
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_item_extra_info
 *
 * Use this api to get extra info of item by item_id list.
 */
export interface ShopeeGetItemExtraInfoRequest {
  /**
   * item_id list, limit [0,50]
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_item_limit
 *
 * Get item upload control.
 */
export interface ShopeeGetItemLimitRequest {
  /**
   * Shopee's unique identifier for a category.
   */
  category_id?: number;
}

/**
 * Request parameters for get_item_list_by_content_diagnosis
 *
 * Query the list of products and their content quality details by content quality level or content issues.
 */
export interface ShopeeGetItemListByContentDiagnosisRequest {
  /**
   * the size of one page. Max=48
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is empty. if data is more than one page, the offset can be some entry to start next call.
   */
  offset?: string;
  /**
   * Item's latest content quality level. Applicable values:1: TO_BE_IMPROVED2: QUALIFIED3: EXCELLENT
   */
  quality_level?: number[];
  /**
   * Item's content issue. Applicable values: 1: TOO_FEW_IMAGES2: WRONG_CATEGORY3: TOO_FEW_ATTRIBUTES_FOR_QUALIFIED4: LACK_OF_SIZE_CHART5: LACK_OF_STANDARD_VARIATION6: LACK_BRAND7: TOO_SHORT_DESCRIPTION8: TOO_SHORT_OR_TOO_LONG_NAME9: WRONG_WEIGHT10: LACK_OF_VIDEO11: TOO_FEW_ATTRIBUTES_FOR_EXCELLENTIf you need to pass both quality_level and issue_type, the logic are as follows:- When quality_level is 1, issue_type can only be 1, 2, 3, 4, 5- When quality_level is 2, issue_type can only be 6, 7, 8, 9, 10, 11- When quality_level is 3, issue_type can only be empty
   */
  issue_type?: number[];
}

/**
 * Request parameters for get_item_promotion
 *
 * Get item promotion info.
 */
export interface ShopeeGetItemPromotionRequest {
  /**
   * Item ID list, can send 1 to 50 items.
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_item_violation_info
 *
 * get item violation info
 */
export interface ShopeeGetItemViolationInfoRequest {
  /**
   * item_id list; limit [0,50]
   */
  item_id_list: number[];
}

/**
 * Request parameters for get_kit_item_info
 *
 * Get the kit basic information and kit components.
 */
export interface ShopeeGetKitItemInfoRequest {
  /**
   * ID of kit item.
   */
  item_id: number;
}

/**
 * Request parameters for get_kit_item_limit
 *
 * Get the limit of Kit item.
 */
export interface ShopeeGetKitItemLimitRequest {
  /**
   * Shopee's unique identifier for a category.
   */
  category_id?: number;
}

/**
 * Request parameters for get_main_item_list
 *
 * get main item by direct item.
 */
export interface ShopeeGetMainItemListRequest {
  /**
   * Item id of direct shop.
   */
  direct_item_id: number[];
}

/**
 * Request parameters for get_mart_item_by_outlet_item_id
 *
 * Get the mapping information between a Mart item and its corresponding outlet item by outlet item ID.
 */
export interface ShopeeGetMartItemByOutletItemIdRequest {
  /**
   * The item ID of the item in the outlet shop.
   */
  outlet_item_id: number;
}

/**
 * Request parameters for get_mart_item_mapping_by_id
 *
 * Get the mapping information between a Mart item and its corresponding outlet item by item ID.
 */
export interface ShopeeGetMartItemMappingByIdRequest {
  /**
   * The item ID of the item in the Mart shop.
   */
  mart_item_id: number;
  /**
   * A list of outlet shop IDs used to filter the mapping results.
   */
  outlet_shop_id_list: number[];
}

/**
 * ShopeeGetProductCertificationRuleAttributeValue sub-interface for ShopeeGetProductCertificationRuleAttribute
 */
export interface ShopeeGetProductCertificationRuleAttributeValue {
  /**
   * ID of attribute value. In the following cases, the value id needs to be uploaded as 0, and original_value_name is mandatory, needs to be filled in customized value. (1) AttributeInputType is TEXT_FILED; (2) AttributeInputType is COMBO_BOX or MULTIPLE_SELECT_COMBO_BOX, and the seller want to fill in a customized value.
   */
  value_id: number;
  /**
   * Value name. original_value_name from produc.get_attributes api. If value id=0, this field is required. If AttributeType is DATE_TYPE or TIMESTAMP_TYPE, you can upload timestamp(string type) as the original_value_name.
   */
  original_value_name?: string;
  /**
   * Unit of attribute value (quantitative attribute only).
   */
  value_unit?: string;
}

/**
 * ShopeeGetProductCertificationRuleAttribute sub-interface for ShopeeGetProductCertificationRuleRequest
 */
export interface ShopeeGetProductCertificationRuleAttribute {
  /**
   * ID of attribute.
   */
  attribute_id: number;
  attribute_value_list?: ShopeeGetProductCertificationRuleAttributeValue[];
}

/**
 * Request parameters for get_product_certification_rule
 *
 * Get product certification rule
 */
export interface ShopeeGetProductCertificationRuleRequest {
  /**
   * Item attributes.
   */
  attribute_list?: ShopeeGetProductCertificationRuleAttribute[];
  /**
   * ID of category.
   */
  category_id?: number;
}

/**
 * Request parameters for get_recommend_attribute
 *
 * Get recommend attributes.
 */
export interface ShopeeGetRecommendAttributeRequest {
  /**
   * name of item
   */
  item_name: string;
  /**
   * Cover image id of item
   */
  cover_image_id?: number;
  /**
   * ID of category
   */
  category_id: number;
}

/**
 * Request parameters for get_size_chart_detail
 *
 * Get new size chart detail. Now only local shop support to use this api to get new size chart detail.
 */
export interface ShopeeGetSizeChartDetailRequest {
  /**
   * ID of new size chart
   */
  size_chart_id: number;
}

/**
 * Request parameters for get_size_chart_list
 *
 * Get new size chart list. Now only support local shop to use new size chart.
 */
export interface ShopeeGetSizeChartListRequest {
  /**
   * category id under this shop
   */
  category_id: string;
  /**
   * the size of one page. Max=50.
   */
  page_size: string;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the cursor can be some entry to start next call.
   */
  cursor?: string;
}

/**
 * Request parameters for get_variations
 *
 * Get the standardized tier variation defined by Shopee, which is currently a three-layer tree structure.
 * The top layer is variations, the second layer is groups, groups are used to divide options, and the third layer is options.
 */
export interface ShopeeGetVariationsRequest {
  /**
   * Leaf category id
   */
  category_id: number;
}

/**
 * Request parameters for get_vehicle_list_by_compatibility_detail
 *
 * Use this Open API to get vehicle list by brand, model, year, and version.
 */
export interface ShopeeGetVehicleListByCompatibilityDetailRequest {
  /**
   * To inform compatibility list, can be equal to Brand, Model, Year, or Version.Pass the compatibility_details="Brand" to get all brand list;Pass the compatibility_details="Model" and brand_id=1234 to get all model list under brand_id=1234;Pass the compatibility_details="Year" and brand_id=1234 and model_id=2345 to get all year list under brand_id=1234 and model_id=2345;Pass the compatibility_details="Version" and brand_id=1234 and model_id=2345 and year_id=3456 to get all version list under brand_id=1234 and model_id=2345 and year_id=3456.
   */
  compatibility_details: string;
  /**
   * ID of the brand.
   */
  brand_id?: number;
  /**
   * ID of the model.
   */
  model_id?: number;
  /**
   * ID of the year.
   */
  year_id?: number;
  /**
   * If language is not uploaded, the default language=en, the following are the languages supported by different markets SG: en ; MY: en / ms-my / zh-hans ; TH: en / th ; VN: en / vi ; PH: en ; TW: en / zh-hant ; ID: en / id ; BR: en / pt-br ; MX: en / es-mx ; CO: en/es-CO ; CL: en/es-CL. Note: For markets that have already launched global tree, Crossboard shop only support returning en and zh-hans language data.
   */
  language?: ShopeeLanguage | string | number;
}

/**
 * ShopeeGetWeightRecommendationAttributeValue sub-interface for ShopeeGetWeightRecommendationAttribute
 */
export interface ShopeeGetWeightRecommendationAttributeValue {
  /**
   * Unique identifier for value of this item attribute.
   */
  value_id: number;
  /**
   * Value name of this item attribute.
   */
  original_value_name?: string;
  /**
   * Value unit of this item attribute.
   */
  value_unit?: string;
}

/**
 * ShopeeGetWeightRecommendationAttribute sub-interface for ShopeeGetWeightRecommendationRequest
 */
export interface ShopeeGetWeightRecommendationAttribute {
  /**
   * The Identify of each attribute.
   */
  attribute_id: number;
  attribute_value_list: ShopeeGetWeightRecommendationAttributeValue[];
}

/**
 * ShopeeGetWeightRecommendationImageInfo sub-interface for ShopeeGetWeightRecommendationField
 */
export interface ShopeeGetWeightRecommendationImageInfo {
  /**
   * Image id.
   */
  image_id?: string;
}

/**
 * ShopeeGetWeightRecommendationField sub-interface for ShopeeGetWeightRecommendationExtendedDescription
 */
export interface ShopeeGetWeightRecommendationField {
  /**
   * Type of extended description field, values: See Data Definition- description_field_type (text , image).
   */
  field_type?: string;
  /**
   * If field_type is text, text information will be set by this field.
   */
  text?: string;
  /**
   * If field_type is image, image information will be set by this field.
   */
  image_info?: ShopeeGetWeightRecommendationImageInfo;
}

/**
 * ShopeeGetWeightRecommendationExtendedDescription sub-interface for ShopeeGetWeightRecommendationDescriptionInfo
 */
export interface ShopeeGetWeightRecommendationExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list?: ShopeeGetWeightRecommendationField[];
}

/**
 * ShopeeGetWeightRecommendationDescriptionInfo sub-interface for ShopeeGetWeightRecommendationRequest
 */
export interface ShopeeGetWeightRecommendationDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description?: ShopeeGetWeightRecommendationExtendedDescription;
}

/**
 * Request parameters for get_weight_recommendation
 *
 * Get recommended weight. Now only BR shop support to use this api to get recommended weight.
 */
export interface ShopeeGetWeightRecommendationRequest {
  /**
   * Name of the item in local language.
   */
  item_name: string;
  /**
   * Image id of first product image.
   */
  cover_image_id: string;
  /**
   * Shopee's unique identifier for a category.
   */
  category_id: number;
  attribute_list: ShopeeGetWeightRecommendationAttribute[];
  /**
   * Id of brand.
   */
  brand_id: number;
  /**
   * Type of description, values: See Data Definition- description_type (normal , extended).
   */
  description_type: string;
  /**
   * If description_type is normal , Description information should be set by this field.
   */
  description?: string;
  /**
   * New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended.
   */
  description_info?: ShopeeGetWeightRecommendationDescriptionInfo;
}

/**
 * ShopeeInitTierVariationSellerStock sub-interface for ShopeeInitTierVariationModel
 */
export interface ShopeeInitTierVariationSellerStock {
  /**
   * location id, you can get the location id from v2.shop.get_warehouse_detail api, if seller don't have any warehouse, you don't need to upload this field.
   */
  location_id?: string;
  /**
   * stock
   */
  stock: number;
}

/**
 * ShopeeInitTierVariationDimension sub-interface for ShopeeInitTierVariationModel
 */
export interface ShopeeInitTierVariationDimension {
  /**
   * The height of package for this model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeInitTierVariationPreOrder sub-interface for ShopeeInitTierVariationModel
 */
export interface ShopeeInitTierVariationPreOrder {
  /**
   * Whether the model is pre order.
   */
  is_pre_order: boolean;
  /**
   * Days to ship. Please get the days_to_ship range from the get_dts_limit API.
   */
  days_to_ship?: number;
}

/**
 * ShopeeInitTierVariationModel sub-interface for ShopeeInitTierVariationRequest
 */
export interface ShopeeInitTierVariationModel {
  /**
   * Tier index of this model.If you want to update one tier/two tier to no tier, can just pass the tier_variation and standardise_tier_variation as [], and pass the model >> tier_index as [], meanwhile pass the original_price, seller_stock, etc., to set the price and stock for the modified product with no tier structure.
   */
  tier_index: ShopeeTierIndex | string | number;
  /**
   * Original price of this model.For CO local VAT responsible seller：Please remember the price you set in here must be VAT inclusive. If you have any doubts on how to calculate VAT for your product please refer to the Seller Education Hub（https://seller.shopee.com.co/edu/article/13565）
   */
  original_price: number;
  /**
   * Seller SKU of this model, model_sku length information needs to be no more than 100 characters.
   */
  model_sku?: string;
  /**
   * new stock info（Please notice that stock(including Seller Stock and Shopee Stock) should be larger than or equal to real-time reserved stock）
   */
  seller_stock: ShopeeInitTierVariationSellerStock[];
  /**
   * - GTIN is an identifier for trade items, developed by the international organization GS1.- They have 8 to 14 digits. The most common are UPC, EAN, JAN and ISBN.- GTIN will help boost positioning in online marketing channels like Google and Facebook.- That incorporation with GTIN will also aid in Search and Recommendation in Shopee itself allowing buyers to have higher likelihood of finding one's listing.Note: If you want to set “Item without GTIN”, please pass the gtin_code as "00".The validation rule is based on the value return in gtin_validation_rule" field in v2.product.get_item_limit API- Mandatory: This field is required and must contain a correctly formatted GTiN number.- Flexible: This field is required and must contain either a correctly formatted GTlN number or "00" to declare that the item/model has no valid GTlN.- Optional: This field is optional and can contain a correctly formatted GTiN number, "00" or be omitted entirely.
   */
  gtin_code?: ShopeeGtinCode | string | number;
  /**
   * The weight of this model, the unit is KG.If don't set the weight of this model, will use the weight of item by default.If set the dimension of this model, them must set the weight of this model.
   */
  weight?: number;
  /**
   * The dimension of this model.If don't set the dimension of this model, will use the dimension of item by default.
   */
  dimension?: ShopeeInitTierVariationDimension;
  /**
   * Pre-order information of this model.Notes: If don't set the DTS of this model, will use the DTS of the item by default.
   */
  pre_order?: ShopeeInitTierVariationPreOrder;
}

/**
 * ShopeeInitTierVariationVariationOption sub-interface for ShopeeInitTierVariationStandardiseTierVariation
 */
export interface ShopeeInitTierVariationVariationOption {
  /**
   * standardise tier variation option ID.
   */
  variation_option_id?: number;
  /**
   * standardise tier variation option value
   */
  variation_option_name?: string;
  /**
   * standardise tier variation option image ID
   */
  image_id?: string;
}

/**
 * ShopeeInitTierVariationStandardiseTierVariation sub-interface for ShopeeInitTierVariationRequest
 */
export interface ShopeeInitTierVariationStandardiseTierVariation {
  /**
   * standardise tier variation ID.
   */
  variation_id: number;
  /**
   * standardise tier variation name
   */
  variation_name?: string;
  /**
   * standardise tier variation group ID
   */
  variation_group_id?: number;
  /**
   * standardise tier variation option list
   */
  variation_option_list: ShopeeInitTierVariationVariationOption[];
}

/**
 * Request parameters for init_tier_variation
 *
 * This API allows you to update the tier structure of a product. Defining only color creates one tier, while color + size creates two tiers (maximum supported). Supported changes include: no tier ↔ one/two tiers, one tier ↔ two/no tier, and two tiers ↔ one/no tier. For details, see Developer Guide.  Please wait at least 5 seconds after creating an item before creating variants, as processing may be delayed.
 */
export interface ShopeeInitTierVariationRequest {
  /**
   * ID of item
   */
  item_id: number;
  /**
   * Model info list, model number at most 50
   */
  model: ShopeeInitTierVariationModel[];
  /**
   * There is at least one standardise_tier_variation and tier_variation.If you want to update one tier/two tier to no tier, can just pass the tier_variation and standardise_tier_variation as [], and pass the model >> tier_index as [], meanwhile pass the original_price, seller_stock, etc., to set the price and stock for the modified product with no tier structure.
   */
  standardise_tier_variation?: ShopeeInitTierVariationStandardiseTierVariation[];
}

/**
 * ShopeePublishItemToOutletShopSellerStock sub-interface for ShopeePublishItemToOutletShopModel
 */
export interface ShopeePublishItemToOutletShopSellerStock {
  /**
   * The location ID where the stock is stored.
   */
  location_id?: string;
  /**
   * The available stock quantity for the model.
   */
  stock: number;
}

/**
 * ShopeePublishItemToOutletShopPreOrder sub-interface for ShopeePublishItemToOutletShopModel
 */
export interface ShopeePublishItemToOutletShopPreOrder {
  /**
   * Indicates whether the model is sold as a pre-order item.
   */
  is_pre_order: boolean;
  /**
   * The number of days required to ship the item after an order is placed.
   */
  days_to_ship?: number;
}

/**
 * ShopeePublishItemToOutletShopModel sub-interface for ShopeePublishItemToOutletShopPublishItem
 */
export interface ShopeePublishItemToOutletShopModel {
  /**
   * The model ID in the Mart shop that this outlet model is associated with.model_id=0 for items with only the default model(no variations)
   */
  relate_mart_model_id: number;
  /**
   * The status of model.
   */
  model_status?: string;
  /**
   * The original price of the model.
   */
  original_price?: number;
  /**
   * Stock information for the model, set in outlet sku level.
   */
  seller_stock?: ShopeePublishItemToOutletShopSellerStock[];
  /**
   * set in outlet sku level
   */
  pre_order?: ShopeePublishItemToOutletShopPreOrder;
}

/**
 * ShopeePublishItemToOutletShopLogisticInfo sub-interface for ShopeePublishItemToOutletShopPublishItem
 */
export interface ShopeePublishItemToOutletShopLogisticInfo {
  /**
   * The logistics channel ID used for shipping the item.
   */
  logistic_id: number;
  /**
   * Indicates whether the logistics channel is enabled for the item.
   */
  enabled: boolean;
  /**
   * The shipping fee charged to the buyer for this logistics channel.
   */
  shipping_fee?: number;
  /**
   * The parcel size ID used to calculate shipping fees.
   */
  size_id?: number;
  /**
   * Indicates whether free shipping is applied for this logistics channel.
   */
  is_free?: boolean;
}

/**
 * ShopeePublishItemToOutletShopMaxPurchaseLimit sub-interface for ShopeePublishItemToOutletShopPurchaseLimitInfo
 */
export interface ShopeePublishItemToOutletShopMaxPurchaseLimit {
  /**
   * The maximum quantity that a buyer is allowed to purchase per order.
   */
  purchase_limit: number;
}

/**
 * ShopeePublishItemToOutletShopPurchaseLimitInfo sub-interface for ShopeePublishItemToOutletShopPublishItem
 */
export interface ShopeePublishItemToOutletShopPurchaseLimitInfo {
  /**
   * The minimum quantity that a buyer is allowed to purchase per order.
   */
  min_purchase_limit: number;
  /**
   * The maximum purchase quantity configuration for the item.
   */
  max_purchase_limit: ShopeePublishItemToOutletShopMaxPurchaseLimit;
}

/**
 * ShopeePublishItemToOutletShopPublishItem sub-interface for ShopeePublishItemToOutletShopRequest
 */
export interface ShopeePublishItemToOutletShopPublishItem {
  outlet_item_id?: number;
  /**
   * A list of models to be published to the outlet shop, mapped from the corresponding Mart shop models.
   */
  model?: ShopeePublishItemToOutletShopModel[];
  /**
   * Logistic channel setting; can set for each outlet shop.
   */
  logistic_info?: ShopeePublishItemToOutletShopLogisticInfo[];
  /**
   * Purchase quantity limits applied to the item in the outlet shop.
   */
  purchase_limit_info?: ShopeePublishItemToOutletShopPurchaseLimitInfo;
}

/**
 * Request parameters for publish_item_to_outlet_shop
 *
 * This API supports publishing an existing item from the mart shop to an outlet shop.
 */
export interface ShopeePublishItemToOutletShopRequest {
  /**
   * The item ID of the product in the Mart shop to be published to the outlet shop.
   */
  mart_item_id: number;
  /**
   * The shop ID of the outlet shop where the product will be published.
   */
  outlet_shop_id: number;
  /**
   * Configuration details for publishing the product to the outlet shop, including model mapping, pricing, stock, logistics, and purchase limits.
   */
  publish_item: ShopeePublishItemToOutletShopPublishItem;
}

/**
 * ShopeeRegisterBrandProductImage sub-interface for ShopeeRegisterBrandRequest
 */
export interface ShopeeRegisterBrandProductImage {
  /**
   * Image Id of product image for this brand, max input num of file = 10 ,each file's length<=498. ID market is optional.
   */
  image_id_list: string[];
}

/**
 * ShopeeRegisterBrandLicense sub-interface for ShopeeRegisterBrandRequest
 */
export interface ShopeeRegisterBrandLicense {
  /**
   * Brand registration certificate image name, len < 254
   */
  file_name?: string;
  /**
   * Image id of brand registration certificate image , max input num of file = 1 , each file's length<=498
   */
  file_hash?: string;
}

/**
 * Request parameters for register_brand
 *
 * Use this call to register a brand.
 */
export interface ShopeeRegisterBrandRequest {
  /**
   * Brand name, length<=254.
   */
  original_brand_name: string;
  /**
   * Category_id list for this brand, please input category in L1 or L2. Max input num of category_id is 50.
   */
  category_list: number[];
  product_image: ShopeeRegisterBrandProductImage;
  /**
   * Image_id  of logo for  app client,please input hashcode of this picture.
   */
  app_logo_image_id?: string;
  /**
   * Official website of brand, length<=254.
   */
  brand_website?: string;
  /**
   * The description of this brand, can input the information, length<=254.
   */
  brand_description?: string;
  /**
   * Additional notes or comment can seller can add, length<=254.
   */
  additional_information?: string;
  /**
   * Image_id  of logo for  pc client,please input hashcode of this picture.
   */
  pc_logo_image_id?: string;
  /**
   * origin region of brand.
   */
  brand_region: string;
  /**
   * For appeal blacklisted brand data
   */
  licenses?: ShopeeRegisterBrandLicense[];
  /**
   * The link to brand registration website, It is mandatory when brand name hit blacklist.len<254
   */
  brand_registration_website?: string;
}

/**
 * ShopeeReplyCommentComment sub-interface for ShopeeReplyCommentRequest
 */
export interface ShopeeReplyCommentComment {
  /**
   * The identity of comment.
   */
  comment_id: number;
  /**
   * The content of the comment.
   */
  comment: string;
}

/**
 * Request parameters for reply_comment
 *
 * Use this api to reply comments from buyers in batch.
 */
export interface ShopeeReplyCommentRequest {
  /**
   * The list of comment. The limit is between 1 and 100.
   */
  comment_list: ShopeeReplyCommentComment[];
}

/**
 * Request parameters for search_attribute_value_list
 *
 * this api is for searching attribute value list for attribute with support_search_value flag
 */
export interface ShopeeSearchAttributeValueListRequest {
  attribute_id: number;
  /**
   * search the keywords of the attributes value
   */
  value_name?: string;
  cursor: number;
  /**
   * The range is 1 to 100
   */
  limit: number;
}

/**
 * Request parameters for search_unpackaged_model_list
 *
 * Use this API to retrieve Unpackaged SKU ID information for items that toggle on logistics channel 30029.
 */
export interface ShopeeSearchUnpackagedModelListRequest {
  /**
   * Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 48.
   */
  page_size: number;
  /**
   * Specifies the starting entry of data to return in the current call. Default is "". If data is more than one page, the cursor can be some entry to start next call.
   */
  cursor?: string;
  /**
   * Shopee's unique identifier for an item.
   */
  item_id?: number;
  /**
   * Name of the item.
   */
  item_name?: string;
  /**
   * Shopee's unique identifier for a model under item.
   */
  model_id?: number;
  /**
   * Unpackaged SKU ID of the model.
   */
  unpackaged_sku_id?: string;
}

/**
 * ShopeeUpdateKitItemImage sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemImage {
  /**
   * ID of image.
   */
  image_id_list: string[];
}

/**
 * ShopeeUpdateKitItemLongImage sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemLongImage {
  /**
   * ID of image.
   */
  image_id_list: string[];
}

/**
 * ShopeeUpdateKitItemImageInfo sub-interface for ShopeeUpdateKitItemField
 */
export interface ShopeeUpdateKitItemImageInfo {
  /**
   * Image id.
   */
  image_id: string;
}

/**
 * ShopeeUpdateKitItemField sub-interface for ShopeeUpdateKitItemExtendedDescription
 */
export interface ShopeeUpdateKitItemField {
  /**
   * Type of extended description field. See Data Definition- description_field_type (text , image).
   */
  field_type: string;
  /**
   * If field_type is text, text information will be set by this field.
   */
  text: string;
  /**
   * If field_type is image, image will be set by this field.
   */
  image_info?: ShopeeUpdateKitItemImageInfo;
}

/**
 * ShopeeUpdateKitItemExtendedDescription sub-interface for ShopeeUpdateKitItemDescriptionInfo
 */
export interface ShopeeUpdateKitItemExtendedDescription {
  /**
   * Field of extended description.
   */
  field_list: ShopeeUpdateKitItemField[];
}

/**
 * ShopeeUpdateKitItemDescriptionInfo sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemDescriptionInfo {
  /**
   * If description_type is extended , Description information should be set by this field.
   */
  extended_description: ShopeeUpdateKitItemExtendedDescription;
}

/**
 * ShopeeUpdateKitItemLogisticInfo sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemLogisticInfo {
  /**
   * ID of the channel.
   */
  logistic_id: number;
  /**
   * Whether channel is enabled for this kit item.
   */
  enabled: boolean;
  /**
   * Shipping fee. Only needed when logistics fee_type = CUSTOM_PRICE.
   */
  shipping_fee?: number;
  /**
   * Size ID. Only needed when logistic fee_type = SIZE_SELECTION.
   */
  size_id?: number;
  /**
   * Whether cover shipping fee for buyer.
   */
  is_free?: boolean;
}

/**
 * ShopeeUpdateKitItemDimension sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemDimension {
  /**
   * The length of package for this kit item, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this kit item, the unit is CM.
   */
  package_width: number;
  /**
   * The height of package for this kit item, the unit is CM.
   */
  package_height: number;
}

/**
 * ShopeeUpdateKitItemPreOrder sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemPreOrder {
  /**
   * Whether kit item is pre order.
   */
  is_pre_order: boolean;
  /**
   * The guaranteed days to ship orders. Please get the days_to_ship range from get_kit_item_limit api.
   */
  days_to_ship?: number;
}

/**
 * ShopeeUpdateKitItemComponent sub-interface for ShopeeUpdateKitItemModel
 */
export interface ShopeeUpdateKitItemComponent {
  /**
   * ID of the item that composes this kit model.
   */
  component_item_id: number;
  /**
   * ID of the model that composes this kit model.
   */
  component_model_id?: number;
  /**
   * The amount of the item/model that composes this kit model.
   */
  quantity: number;
  /**
   * Whether this item/model is the main component for this kit.One kit item can only have one item/model as main component.
   */
  main_component?: boolean;
}

/**
 * ShopeeUpdateKitItemModel sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemModel {
  /**
   * ID of this kit model.
   */
  model_id?: number;
  /**
   * Tier index of this kit model.
   */
  tier_index: number[];
  /**
   * Seller SKU of this kit model, model_sku length information needs to be no more than 100 characters.
   */
  model_sku?: string;
  /**
   * Original price of this kit model.
   */
  original_price?: number;
  /**
   * Please get the amount of item/model that one kit model support from get_kit_item_limit.
   */
  component_list?: ShopeeUpdateKitItemComponent[];
}

/**
 * ShopeeUpdateKitItem_UpdateKitItemImage sub-interface for ShopeeUpdateKitItemOption
 */
export interface ShopeeUpdateKitItem_UpdateKitItemImage {
  /**
   * ID of image. If you choose to define, you need to define an image for all options.
   */
  image_id: string;
}

/**
 * ShopeeUpdateKitItemOption sub-interface for ShopeeUpdateKitItemTierVariation
 */
export interface ShopeeUpdateKitItemOption {
  /**
   * Option name.
   */
  option: string;
  /**
   * Option image.
   */
  image?: ShopeeUpdateKitItem_UpdateKitItemImage;
}

/**
 * ShopeeUpdateKitItemTierVariation sub-interface for ShopeeUpdateKitItemItemSetting
 */
export interface ShopeeUpdateKitItemTierVariation {
  /**
   * Tier variation name.
   */
  name?: string;
  /**
   * Tier variation option info list.
   */
  option_list: ShopeeUpdateKitItemOption[];
}

/**
 * ShopeeUpdateKitItemItemSetting sub-interface for ShopeeUpdateKitItemRequest
 */
export interface ShopeeUpdateKitItemItemSetting {
  /**
   * The name of this kit item.
   */
  item_name?: string;
  /**
   * Item images with 1:1 ratio.
   */
  images?: ShopeeUpdateKitItemImage;
  /**
   * Item images with 3:4 ratio.
   */
  long_images?: ShopeeUpdateKitItemLongImage;
  /**
   * Video upload ID returned from video uploading API. Only accept one video_upload_id.
   */
  video_upload_id?: string[];
  /**
   * If description_type is normal, description information should be set by this field.
   */
  description?: string;
  /**
   * Rich text description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
   */
  description_info?: ShopeeUpdateKitItemDescriptionInfo;
  /**
   * See Data Definition- description_type (normal , extended). If you want to use extended_description, this field must be inputed.
   */
  description_type?: string;
  /**
   * Logistic channel setting.
   */
  logistic_info?: ShopeeUpdateKitItemLogisticInfo[];
  /**
   * Unlist or not.
   */
  unlisted?: boolean;
  /**
   * SKU tag of item
   */
  item_sku?: string;
  /**
   * The weight of this kit item, the unit is KG.
   */
  weight?: number;
  /**
   * The dimension of this kit item.
   */
  dimension?: ShopeeUpdateKitItemDimension;
  /**
   * Pre order setting.
   */
  pre_order?: ShopeeUpdateKitItemPreOrder;
  /**
   * Model info list, model number at most 9.
   */
  model_list?: ShopeeUpdateKitItemModel[];
  /**
   * Tier variation info list. Only support one tier variation, and each kit item can have from 1 to 9 kit variations.
   */
  tier_variation_list?: ShopeeUpdateKitItemTierVariation[];
}

/**
 * ShopeeUpdateKitItemSyncSetting sub-interface for ShopeeUpdateKitItemRequest
 */
export interface ShopeeUpdateKitItemSyncSetting {
  /**
   * Auto sync the pre_order setting from main component or not.
   */
  auto_sync_dts: boolean;
}

/**
 * Request parameters for update_kit_item
 *
 * Update the kit basic information and kit components, only support adding kit variations and updating existing kit variation’s image, price, and model_sku, don’t support deleting existing kit variations and updating the items, main component and quantity per kit of existing kit variations.
 */
export interface ShopeeUpdateKitItemRequest {
  /**
   * ID of kit item.
   */
  item_id: number;
  item_setting?: ShopeeUpdateKitItemItemSetting;
  sync_setting?: ShopeeUpdateKitItemSyncSetting;
}

/**
 * ShopeeUpdateModelPreOrder sub-interface for ShopeeUpdateModelModel
 */
export interface ShopeeUpdateModelPreOrder {
  /**
   * Pre-order
   */
  is_pre_order: boolean;
  /**
   * The days to ship. Only work for is_pre_order=true
   */
  days_to_ship: number;
}

/**
 * ShopeeUpdateModelDimension sub-interface for ShopeeUpdateModelModel
 */
export interface ShopeeUpdateModelDimension {
  /**
   * The height of package for this model, the unit is CM.
   */
  package_height: number;
  /**
   * The length of package for this model, the unit is CM.
   */
  package_length: number;
  /**
   * The width of package for this model, the unit is CM.
   */
  package_width: number;
}

/**
 * ShopeeUpdateModelModel sub-interface for ShopeeUpdateModelRequest
 */
export interface ShopeeUpdateModelModel {
  /**
   * ID of model
   */
  model_id: number;
  /**
   * Seller SKU for model, model_sku length information needs to be no more than 100 characters. CNSC and KRSC sellers are not allowed to update the MPSKU model sku.
   */
  model_sku: string;
  pre_order?: ShopeeUpdateModelPreOrder;
  /**
   * - GTIN is an identifier for trade items, developed by the international organization GS1.- They have 8 to 14 digits. The most common are UPC, EAN, JAN and ISBN.- GTIN will help boost positioning in online marketing channels like Google and Facebook.- That incorporation with GTIN will also aid in Search and Recommendation in Shopee itself allowing buyers to have higher likelihood of finding one's listing.Note: If you want to set “Item without GTIN”, please pass the gtin_code as "00".The validation rule is based on the value return in gtin_validation_rule" field in v2.product.get_item_limit API- Mandatory: This field is required and must contain a correctly formatted GTiN number.- Flexible: This field is required and must contain either a correctly formatted GTlN number or "00" to declare that the item/model has no valid GTlN.- Optional: This field is optional and can contain a correctly formatted GTiN number, "00" or be omitted entirely.
   */
  gtin_code?: ShopeeGtinCode | string | number;
  /**
   * can be "NORMAL" or "UNAVAILABLE". Only CNSC and KRSC sellers can set the model_status. Normal models can be sold on the buyer's side, and UNAVAILABLE models cannot be sold on the buyer's side.
   */
  model_status?: string;
  /**
   * The weight of this model, the unit is KG.If don't set the weight of this model, will use the weight of item by default.If set the dimension of this model, them must set the weight of this model.
   */
  weight?: number;
  /**
   * The dimension of this model.If don't set the dimension of this model, will use the dimension of item by default.
   */
  dimension?: ShopeeUpdateModelDimension;
}

/**
 * Request parameters for update_model
 *
 * Update seller sku/ pre order/ model status for model.
 */
export interface ShopeeUpdateModelRequest {
  /**
   * ID of item
   */
  item_id: number;
  /**
   * Length should be between 1 to 50
   */
  model: ShopeeUpdateModelModel[];
}

/**
 * ShopeeUpdateSipItemPriceSipItemPrice sub-interface for ShopeeUpdateSipItemPriceRequest
 */
export interface ShopeeUpdateSipItemPriceSipItemPrice {
  /**
   * 0 for no model item.
   */
  model_id?: number;
  /**
   * SIP item price.
   */
  sip_item_price: number;
}

/**
 * Request parameters for update_sip_item_price
 *
 * Update sip item price.
 */
export interface ShopeeUpdateSipItemPriceRequest {
  /**
   * ID of item.
   */
  item_id: number;
  sip_item_price?: ShopeeUpdateSipItemPriceSipItemPrice[];
}

/**
 * ShopeeUpdateTierVariationModel sub-interface for ShopeeUpdateTierVariationRequest
 */
export interface ShopeeUpdateTierVariationModel {
  /**
   * ID of model
   */
  model_id: number;
  /**
   * Model's tier_variation
   */
  tier_index: number[];
}

/**
 * ShopeeUpdateTierVariationVariationOption sub-interface for ShopeeUpdateTierVariationStandardiseTierVariation
 */
export interface ShopeeUpdateTierVariationVariationOption {
  /**
   * standardise tier variation option ID
   */
  variation_option_id: number;
  /**
   * standardise tier variation option value
   */
  variation_option_name?: string;
  /**
   * ID of image
   */
  image_id?: string;
}

/**
 * ShopeeUpdateTierVariationStandardiseTierVariation sub-interface for ShopeeUpdateTierVariationRequest
 */
export interface ShopeeUpdateTierVariationStandardiseTierVariation {
  /**
   * standardise tier variation ID
   */
  variation_id: number;
  /**
   * standardise tier variation name
   */
  variation_name?: string;
  /**
   * standardise tier variation group id
   */
  variation_group_id?: number;
  /**
   * standardise tier variation option list
   */
  variation_option_list: ShopeeUpdateTierVariationVariationOption[];
}

/**
 * Request parameters for update_tier_variation
 *
 * This api can only be used without changing the tier structure, you can add options, delete options, and update the option image by this api. More detail please check: https://open.shopee.com/developer-guide/219
 */
export interface ShopeeUpdateTierVariationRequest {
  /**
   * ID of item.
   */
  item_id: number;
  /**
   * Item's model list
   */
  model_list?: ShopeeUpdateTierVariationModel[];
  /**
   * item standardise tier variation There is at least one standardise_tier_variation and tier_variation
   */
  standardise_tier_variation?: ShopeeUpdateTierVariationStandardiseTierVariation[];
}
