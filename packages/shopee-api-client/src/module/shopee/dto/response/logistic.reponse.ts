import { ShopeeResponseCommon } from './config.response';

interface ItemMaxDimension {
  dimension_sum: number;
  height: number;
  length: number;
  unit: string;
  width: number;
}

interface LogisticsCapability {
  seller_logistics: boolean;
}

interface VolumeLimit {
  item_max_volume: number;
  item_min_volume: number;
}

interface WeightLimit {
  item_max_weight: number;
  item_min_weight: number;
}

interface LogisticsChannel {
  block_seller_cover_shipping_fee: boolean;
  cod_enabled: boolean;
  enabled: boolean;
  fee_type: string;
  force_enable: boolean;
  item_max_dimension: ItemMaxDimension;
  logistics_capability: LogisticsCapability;
  logistics_channel_id: number;
  logistics_channel_name: string;
  logistics_description: string;
  mask_channel_id: number;
  /** Whether the seller has configured custom settings for this logistics channel. */
  seller_logistic_has_configuration: boolean;
  /**
   * Package size options accepted by this logistics channel (e.g. size ID
   * and name). Shopee does not publicly document an exact schema for this
   * field, so it is intentionally left as a loose record instead of a
   * fabricated shape. Inspect the raw response if you need specific fields.
   */
  size_list: Array<Record<string, unknown>>;
  support_cross_border: boolean;
  volume_limit: VolumeLimit;
  weight_limit: WeightLimit;
}

interface LogisticChannelList {
  logistics_channel_list: LogisticsChannel[];
}
interface InfoNeeded {
  dropoff: string[];
  pickup: string[];
  non_integrated: string[];
}

interface Dropoff {
  branch_list: Branch[];
  slug_list?: Slug[];
}

interface Branch {
  branch_id: number;
  region: string;
  state: string;
  city: string;
  address: string;
  zipcode: string;
  district: string;
  town: string;
}

interface Slug {
  slug: string;
  slug_name: string;
}

interface Pickup {
  address_list: PickupAddress[];
}

interface PickupAddress {
  address_id: number;
  region: string;
  state: string;
  city: string;
  district: string;
  town: string;
  address: string;
  zipcode: string;
  address_flag: string[];
  time_slot_list: PickupTime[] | null;
}

interface PickupTime {
  date: number; // timestamp
  time_text?: string;
  pickup_time_id: string;
}

interface ShippingParameter {
  info_needed: InfoNeeded;
  dropoff: Dropoff | null;
  pickup: Pickup;
}

interface ShipOrder {
  error: string;
}

type ResponseShippingParameter = ShopeeResponseCommon<ShippingParameter>;
type ResponseLogisticChannelList = ShopeeResponseCommon<LogisticChannelList>;
type ResponseShipOrder = ShopeeResponseCommon<ShipOrder>;

interface TrackingNumber {
  tracking_number: string;
  plp_number?: string;
  first_mile_tracking_number?: string;
  last_mile_tracking_number?: string;
  hint?: string;
  pickup_code?: string;
}
type ResponseTrackingNumber = ShopeeResponseCommon<TrackingNumber>;

interface CreateShippingDocumentResult {
  order_sn: string;
  package_number?: string;
  fail_error?: string;
  fail_message?: string;
}

interface CreateShippingDocument {
  result_list: CreateShippingDocumentResult[];
}
type ResponseCreateShippingDocument = ShopeeResponseCommon<CreateShippingDocument>;

interface GetShippingDocumentResultItem {
  order_sn: string;
  package_number?: string;
  status?: string;
  fail_error?: string;
  fail_message?: string;
}

interface GetShippingDocumentResult {
  result_list: GetShippingDocumentResultItem[];
}

interface WarningItem {
  order_sn: string;
  package_number?: string;
}

interface ResponseGetShippingDocumentResult extends ShopeeResponseCommon<GetShippingDocumentResult> {
  warning?: WarningItem[];
}

interface TrackingInfoItem {
  update_time: number;
  description: string;
  logistics_status?: string;
  return_code?: string;
}

interface ReversedTrackingInfoItem {
  update_time: number;
  description: string;
}

interface TrackingInfo {
  order_sn: string;
  package_number?: string;
  logistics_status?: string;
  tracking_info?: TrackingInfoItem[];
  reversed_tracking_number?: string;
  reversed_courier_name?: string;
  reversed_tracking_info?: ReversedTrackingInfoItem[];
}
type ResponseTrackingInfo = ShopeeResponseCommon<TrackingInfo>;

interface MassShipOrderSuccessItem {
  package_number: string;
}

interface MassShipOrderFailItem {
  package_number: string;
  fail_reason: string;
}

interface MassShipOrder {
  success_list?: MassShipOrderSuccessItem[];
  fail_list?: MassShipOrderFailItem[];
}
type ResponseMassShipOrder = ShopeeResponseCommon<MassShipOrder>;

interface GetMassShippingParameter extends ShippingParameter {
  success_list?: MassShipOrderSuccessItem[];
  fail_list?: MassShipOrderFailItem[];
}
type ResponseGetMassShippingParameter = ShopeeResponseCommon<GetMassShippingParameter>;

/**
 * Shopee `v2.logistics.update_shipping_order` returns an empty or
 * minimal `response` object on success. Typed as a loose record instead
 * of `any` to avoid fabricating an inaccurate shape.
 */
type ResponseUpdateShippingOrder = ShopeeResponseCommon<Record<string, unknown>>;

interface MassTrackingNumberSuccessItem {
  package_number: string;
  tracking_number?: string;
  plp_number?: string;
  first_mile_tracking_number?: string;
  last_mile_tracking_number?: string;
  hint?: string;
  pickup_code?: string;
}

interface MassTrackingNumberFailItem {
  package_number: string;
  fail_reason: string;
}

interface MassTrackingNumber {
  success_list?: MassTrackingNumberSuccessItem[];
  fail_list?: MassTrackingNumberFailItem[];
}
type ResponseGetMassTrackingNumber = ShopeeResponseCommon<MassTrackingNumber>;

interface GetShippingDocumentParameterResultItem {
  order_sn: string;
  package_number?: string;
  suggest_shipping_document_type?: string;
  selectable_shipping_document_type?: string[];
  fail_error?: string;
  fail_message?: string;
}

interface GetShippingDocumentParameter {
  result_list: GetShippingDocumentParameterResultItem[];
}

interface ResponseGetShippingDocumentParameter extends ShopeeResponseCommon<GetShippingDocumentParameter> {
  warning?: WarningItem[];
}

interface AddressItem {
  address_id: number;
  region: string;
  state: string;
  city: string;
  address: string;
  zipcode: string;
  district: string;
  town: string;
  address_type: string[];
}

interface AddressList {
  show_pickup_address: boolean;
  address_list: AddressItem[];
}
type ResponseGetAddressList = ShopeeResponseCommon<AddressList>;

export {
  ResponseLogisticChannelList as ShopeeResponseLogisticChannelList,
  ResponseShippingParameter as ShopeeResponseShippingParameter,
  ResponseShipOrder as ShopeeResponseShipOrder,
  ResponseTrackingNumber as ShopeeResponseTrackingNumber,
  ResponseCreateShippingDocument as ShopeeResponseCreateShippingDocument,
  ResponseGetShippingDocumentResult as ShopeeResponseGetShippingDocumentResult,
  ResponseTrackingInfo as ShopeeResponseTrackingInfo,
  ResponseMassShipOrder as ShopeeResponseMassShipOrder,
  ResponseGetMassShippingParameter as ShopeeResponseGetMassShippingParameter,
  ResponseUpdateShippingOrder as ShopeeResponseUpdateShippingOrder,
  ResponseGetMassTrackingNumber as ShopeeResponseGetMassTrackingNumber,
  ResponseGetShippingDocumentParameter as ShopeeResponseGetShippingDocumentParameter,
  ResponseGetAddressList as ShopeeResponseGetAddressList,
};
