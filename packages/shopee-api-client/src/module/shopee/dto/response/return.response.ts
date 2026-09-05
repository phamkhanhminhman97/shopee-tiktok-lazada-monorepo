import { ShopeeResponseCommon } from './config.response';

/**
 * Response type for Shopee v2.returns.get_return_list.
 *
 * Field names follow the `_list` + `more` pagination convention used by
 * every other Shopee list endpoint in this SDK (order list, package list).
 * Cross-checked against community Shopee SDK documentation; verify against
 * the official Shopee Open Platform docs before relying on optional fields
 * not listed here.
 */
interface ReturnListItem {
  return_sn: string;
  order_sn: string;
  status: string;
  reason: string;
  refund_amount: number;
  currency: string;
  create_time: number;
  update_time: number;
  negotiation_status?: string;
  seller_proof_status?: string;
  seller_compensation_status?: string;
  due_date?: number;
}

interface ReturnList {
  return: ReturnListItem[];
  more: boolean;
}

interface ResponseGetReturnList extends ShopeeResponseCommon<ReturnList> {}

/** Response type for Shopee v2.returns.confirm. */
interface ConfirmReturn {
  return_sn: string;
}

interface ResponseConfirmReturn extends ShopeeResponseCommon<ConfirmReturn> {}

/** One available return/refund solution the seller may offer. */
interface AvailableSolution {
  solution: string;
  refund_amount?: number;
}

interface AvailableSolutions {
  solution: AvailableSolution[];
}

interface ResponseGetAvailableSolutions extends ShopeeResponseCommon<AvailableSolutions> {}

export {
  ReturnListItem as ShopeeReturnListItem,
  ResponseGetReturnList as ShopeeResponseGetReturnList,
  ResponseConfirmReturn as ShopeeResponseConfirmReturn,
  AvailableSolution as ShopeeAvailableSolution,
  ResponseGetAvailableSolutions as ShopeeResponseGetAvailableSolutions,
};

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeReturnSn
 */
export enum ShopeeReturnSn {
  RETURN = "return",
  REFUND = "refund",
}

/**
 * Enum generated for field ShopeeTrackingDescription
 */
export enum ShopeeTrackingDescription {
  RETURN = "return",
  REFUND = "refund",
}

/**
 * ShopeeAcceptOfferResponseData sub-interface for ShopeeAcceptOfferResponse
 */
export interface ShopeeAcceptOfferResponseData {
  /**
   * The serial number of return.
   */
  return_sn?: string;
}

/**
 * Response payload for accept_offer
 *
 * v2.returns.accept_offer
 */
export type ShopeeAcceptOfferResponse = ShopeeResponseCommon<ShopeeAcceptOfferResponseData>;

/**
 * ShopeeCancelDisputeResponseData sub-interface for ShopeeCancelDisputeResponse
 */
export interface ShopeeCancelDisputeResponseData {
  /**
   * Shopee's unique serial number identifier for a Return Refund request.
   */
  return_sn?: string;
  /**
   * To indicate whether the cancel dispute operation is successful or failed.
   */
  message?: string;
}

/**
 * Response payload for cancel_dispute
 *
 * Sellers can only cancel compensation disputes, not normal disputes. This means that sellers can only cancel disputes when the return_status is ACCEPTED and the compensation_status is COMPENSATION_REQUESTED.
 */
export type ShopeeCancelDisputeResponse = ShopeeResponseCommon<ShopeeCancelDisputeResponseData>;

/**
 * ShopeeConvertImageResponseData sub-interface for ShopeeConvertImageResponse
 */
export interface ShopeeConvertImageResponseData {
  /**
   * The link uploaded to the image server can be used with the upload_proof interface.
   */
  url?: string;
  /**
   * The image thumbnail.
   */
  thumbnail?: string;
}

/**
 * Response payload for convert_image
 *
 * Convert a specific format and pictures within 10M into url.
 */
export type ShopeeConvertImageResponse = ShopeeResponseCommon<ShopeeConvertImageResponseData>;

/**
 * ShopeeDisputeResponseData sub-interface for ShopeeDisputeResponse
 */
export interface ShopeeDisputeResponseData {
  /**
   * The serial number of return.
   */
  return_sn?: string;
  msg?: string;
}

/**
 * Response payload for dispute
 *
 * Dispute return.
 *
 * Support to raise dispute when return_status in REQUESTED / PROCESSING/ACCEPTED
 */
export type ShopeeDisputeResponse = ShopeeResponseCommon<ShopeeDisputeResponseData>;

/**
 * ShopeeGetReturnDisputeReasonSampleEvidence sub-interface for ShopeeGetReturnDisputeReasonDisputeReason
 */
export interface ShopeeGetReturnDisputeReasonSampleEvidence {
  /**
   * The type of sample evidence. Applicable value: - 1: Image
   */
  type?: number;
  /**
   * The link of sample evidence.
   */
  url?: string;
  /**
   * The link of the thumbnail of sample evidence.
   */
  thumbnail?: string;
}

/**
 * ShopeeGetReturnDisputeReasonEvidenceModule sub-interface for ShopeeGetReturnDisputeReasonDisputeReason
 */
export interface ShopeeGetReturnDisputeReasonEvidenceModule {
  /**
   * The index of current evidence module.
   */
  module_index?: number;
  /**
   * The specific requirement of current evidence module.
   */
  requirement?: string;
  /**
   * Indicate if current evidence module is mandatory or not.
   */
  is_required?: boolean;
}

/**
 * ShopeeGetReturnDisputeReasonDisputeReason sub-interface for ShopeeGetReturnDisputeReasonResponseData
 */
export interface ShopeeGetReturnDisputeReasonDisputeReason {
  /**
   * The dispute_reason for one specific case. See Data Definition - DisputeReason.
   */
  dispute_reason?: string;
  /**
   * Indicate the importance of uploading required proof.
   */
  dispute_requirement?: string;
  /**
   * The URL of sample evidence to upload.
   */
  sample_evidence?: ShopeeGetReturnDisputeReasonSampleEvidence[];
  /**
   * The associated evidence module list for current dispute reason.
   */
  evidence_module_list?: ShopeeGetReturnDisputeReasonEvidenceModule[];
}

/**
 * ShopeeGetReturnDisputeReasonResponseData sub-interface for ShopeeGetReturnDisputeReasonResponse
 */
export interface ShopeeGetReturnDisputeReasonResponseData {
  /**
   * The dispute_reason and associated evidence list.
   */
  dispute_reason_list?: ShopeeGetReturnDisputeReasonDisputeReason[];
}

/**
 * Response payload for get_return_dispute_reason
 *
 * To get the dispute return reason.
 */
export type ShopeeGetReturnDisputeReasonResponse = ShopeeResponseCommon<ShopeeGetReturnDisputeReasonResponseData>;

/**
 * ShopeeGetReverseTrackingInfoTrackingInfo sub-interface for ShopeeGetReverseTrackingInfoResponseData
 */
export interface ShopeeGetReverseTrackingInfoTrackingInfo {
  /**
   * The timestamps when reverse logistics info has been updated for Normal RR, pushed from third party logistics provider to Shopee.
   */
  update_time?: number;
  /**
   * The description of reverse logistics tracking info for Normal RR, pushed by third party logistics provider to Shopee.
   */
  tracking_description?: string;
  /**
   * Image URLs of electronic proof of pickup (ePOP) after return parcel has been picked up from the buyer for Normal RR.
   */
  epop_image_list?: string[];
  /**
   * Image URLs of electronic proof of delivery (ePOD) after return parcel has been delivered to the seller for Normal RR.
   */
  epod_image_list?: string[];
}

/**
 * ShopeeGetReverseTrackingInfoPostReturnLogisticsTrackingInfo sub-interface for ShopeeGetReverseTrackingInfoResponseData
 */
export interface ShopeeGetReverseTrackingInfoPostReturnLogisticsTrackingInfo {
  /**
   * The timestamps when reverse logistics info has been updated for Normal RR from warehouse to seller, pushed from third party logistics provider to Shopee.
   */
  update_time?: number;
  /**
   * The description of reverse logistics tracking info for Normal RR from warehouse to seller, pushed by third party logistics provider to Shopee.These would match the tracking description displayed to sellers on Seller Center return/refund detail page.
   */
  tracking_description?: ShopeeTrackingDescription | string | number;
  /**
   * Image URLs of electronic proof of pickup (ePOP) after return parcel has been picked up from the warehouse for Normal RR with warehouse validation.
   */
  epop_image_list?: string[];
  /**
   * Image URLs of electronic proof of delivery (ePOD) after return parcel has been delivered to the seller for Normal RR with warehouse validation.
   */
  epod_image_list?: string[];
}

/**
 * ShopeeGetReverseTrackingInfoResponseData sub-interface for ShopeeGetReverseTrackingInfoResponse
 */
export interface ShopeeGetReverseTrackingInfoResponseData {
  /**
   * Shopee's unique identifier for a return/refund request (serial number of return).
   */
  return_sn?: ShopeeReturnSn | string | number;
  /**
   * To indicate the type of return refund request, whether it is a Normal RR request, an In-transit RR request, and a Return on the Spot: 0: Normal RR (RR is raised by the buyer after delivery done / estimated delivery date)1: In-transit RR (RR is raised by the buyer while item is still in-transit to buyer)2: Return-on-the-Spot (RR is raised by the driver after buyer rejected parcel at delivery)For more details, see Data Definition- Return Refund Request Type.
   */
  return_refund_request_type?: number;
  /**
   * To indicate whether seller or warehouse will expect to receive the return parcel from buyer and validate the condition of the parcel: - seller_validation - warehouse_validationFor more details, see Data Definition- ValidationType.
   */
  validation_type?: string;
  /**
   * To indicate the latest reverse logistic status of a return, referring to the current status of the buyer shipping the return parcel back to the validation point (seller or warehouse), including Normal RR, In-transit RR, and Return-on-the-Spot.See "Data Definition - ReverseLogisticsStatus" as status displayed for Normal RR and In-transit RR or Return-on-the-Spot are different.Note: If validation_type = seller_validation, there is only one segment of reverse logistics (The buyer ships the return parcel directly back to the seller). Please use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain the reverse logistics tracking information.
   */
  reverse_logistics_status?: string;
  /**
   * The last update time of the reverse logistics status including Normal RR, In-transit RR, and Return-on-the-Spot.Note: If validation_type = seller_validation, there is only one segment of reverse logistics (The buyer ships the return parcel directly back to the seller). Please use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain the reverse logistics tracking information.
   */
  reverse_logistics_update_time?: number;
  /**
   * The maximum estimated delivery date for the reverse logistics. This is calculated by Shopee Logistics Services once buyer ships out if there is historical tracking data available from third party logistics provider. Note: Only available for Normal RR with integrated reverse logistics.
   */
  estimated_delivery_date_max?: number;
  /**
   * The minimum estimated delivery date for the reverse logistics. This is calculated by Shopee Logistics Services once buyer ships out if there is historical tracking data available from third party logistics provider.Note: Only available for Normal RR with integrated reverse logistics.
   */
  estimated_delivery_date_min?: number;
  /**
   * The collection Pin Code to enter for seller to collect parcel in collection point or locker.Note: Only available for TW region.
   */
  collection_pin_code?: string;
  /**
   * The tracking number for the reverse logistics (the logistics tracking number provided when the buyer ships the item back).Note: - Only available for Normal RR with integrated reverse logistics.- If validation_type = seller_validation, there is only one segment of reverse logistics (The buyer ships the return parcel directly back to the seller). Please use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain the reverse logistics tracking information.
   */
  tracking_number?: string;
  /**
   * The detailed tracking information list for the reverse logistics.Note: - Only available for Normal RR with integrated reverse logistics, with the tracking information pushed by third party logistics provider to Shopee.- If validation_type = seller_validation, there is only one segment of reverse logistics (The buyer ships the return parcel directly back to the seller). Please use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain the reverse logistics tracking information.
   */
  tracking_info?: ShopeeGetReverseTrackingInfoTrackingInfo[];
  /**
   * Post-return logistics status, referring to the current status of the warehouse shipping the return parcel back to the seller in warehouse validation mode. See "Data Definition - Post Return Logistics Status".Note: - Only available for Normal RR with return_solution = 0 (Return and Refund) and validation_type = warehouse_validation, and the warehouse ships the return parcel back to seller using integrated reverse logistics.- If validation_type = warehouse_validation AND the warehouse uses an integrated logistics channel to ship the return parcel back to the seller, there are two segments of reverse logistics: - The buyer first ships the return parcel back to the warehouse. Use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain tracking information for this first segment.- The warehouse then ships the return parcel back to the seller. Use the fields post_return_logistics_status, post_return_logistics_update_time, rts_tracking_number, and post_return_logistics_tracking_info to obtain tracking information for this second segment (post-return logistics).- For Cross-Border Returns, if the second segment exists, the API returns information for both the first and second segments. For Local Returns, if the second segment exists, the API prioritizes and returns only the second segment information.
   */
  post_return_logistics_status?: string;
  /**
   * The last update time of the post-return logistics status where warehouse sends return parcel from warehouse to seller.Note: - Only available for Normal RR with return_solution = 0 (Return and Refund) and validation_type = warehouse_validation, and the warehouse ships the return parcel back to seller using integrated reverse logistics.- If validation_type = warehouse_validation AND the warehouse uses an integrated logistics channel to ship the return parcel back to the seller, there are two segments of reverse logistics: - The buyer first ships the return parcel back to the warehouse. Use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain tracking information for this first segment.- The warehouse then ships the return parcel back to the seller. Use the fields post_return_logistics_status, post_return_logistics_update_time, rts_tracking_number, and post_return_logistics_tracking_info to obtain tracking information for this second segment (post-return logistics).- For Cross-Border Returns, if the second segment exists, the API returns information for both the first and second segments. For Local Returns, if the second segment exists, the API prioritizes and returns only the second segment information.
   */
  post_return_logistics_update_time?: number;
  /**
   * The tracking number for the post-return logistics (the logistics tracking number used when the warehouse ships the parcel back to the seller). RTS stands for "Return to Seller".Note: - Only available for Normal RR with return_solution = 0 (Return and Refund) and validation_type = warehouse_validation, and the warehouse ships the return parcel back to seller using integrated reverse logistics.- If validation_type = warehouse_validation AND the warehouse uses an integrated logistics channel to ship the return parcel back to the seller, there are two segments of reverse logistics: - The buyer first ships the return parcel back to the warehouse. Use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain tracking information for this first segment.- The warehouse then ships the return parcel back to the seller. Use the fields post_return_logistics_status, post_return_logistics_update_time, rts_tracking_number, and post_return_logistics_tracking_info to obtain tracking information for this second segment (post-return logistics).- For Cross-Border Returns, if the second segment exists, the API returns information for both the first and second segments. For Local Returns, if the second segment exists, the API prioritizes and returns only the second segment information.
   */
  rts_tracking_number?: string;
  /**
   * Only available for Normal RR with return_solution = 0 (Return and Refund) and validation_type = warehouse_validation, and the warehouse ships the return parcel back to seller using integrated reverse logistics.In this scenario, the tracking logistics from warehouse to seller is called "post-return logistics", with the tracking information pushed by third party logistics provider to Shopee.Note: - If validation_type = warehouse_validation AND the warehouse uses an integrated logistics channel to ship the return parcel back to the seller, there are two segments of reverse logistics: - The buyer first ships the return parcel back to the warehouse. Use the fields reverse_logistics_status, reverse_logistics_update_time, tracking_number, and tracking_info to obtain tracking information for this first segment.- The warehouse then ships the return parcel back to the seller. Use the fields post_return_logistics_status, post_return_logistics_update_time, rts_tracking_number, and post_return_logistics_tracking_info to obtain tracking information for this second segment (post-return logistics).- For Cross-Border Returns, if the second segment exists, the API returns information for both the first and second segments. For Local Returns, if the second segment exists, the API prioritizes and returns only the second segment information.
   */
  post_return_logistics_tracking_info?: ShopeeGetReverseTrackingInfoPostReturnLogisticsTrackingInfo[];
}

/**
 * Response payload for get_reverse_tracking_info
 *
 * Get reverse and post-return logistics information of return request. For Normal RR, return complete reverse logistics information, for In-transit RR and Return-on-the-Spot, only return latest reverse logistics status, without providing complete reverse logistics information. For seller_validation, only one segment of reverse (buyer to seller), use tracking_info, for warehouse_validation, two segment of reverse (buyer to warehouse and warehouse to seller), use post_return_logistics_tracking_info.
 */
export type ShopeeGetReverseTrackingInfoResponse = ShopeeResponseCommon<ShopeeGetReverseTrackingInfoResponseData>;

/**
 * ShopeeGetShippingCarrierShippingProofTemplate sub-interface for ShopeeGetShippingCarrierResponseData
 */
export interface ShopeeGetShippingCarrierShippingProofTemplate {
  /**
   * To indicate whether it is mandatory to provide tracking number when uploading shipping proof.
   */
  is_tracking_number_required?: boolean;
  /**
   * To indicate whether it is mandatory to provide shipping image file(s) when uploading shipping proof.
   */
  is_shipping_image_file_mandatory?: boolean;
}

/**
 * ShopeeGetShippingCarrierReverseLogisticsCarrier sub-interface for ShopeeGetShippingCarrierResponseData
 */
export interface ShopeeGetShippingCarrierReverseLogisticsCarrier {
  /**
   * To indicate the id of the non-integrated reverse logistics channel used by seller.
   */
  reverse_logistics_carrier_id?: number;
  /**
   * To indicate the selected carrier name from the list of carrier names provided.
   */
  reverse_logistics_carrier_name?: string;
}

/**
 * ShopeeGetShippingCarrierResponseData sub-interface for ShopeeGetShippingCarrierResponse
 */
export interface ShopeeGetShippingCarrierResponseData {
  /**
   * To indicate whether uploading shipping proof is mandatory for seller to confirm "Arrange Pickup" when is_seller_arrange = true.
   */
  is_shipping_proof_mandatory?: boolean;
  /**
   * To indicate whether seller has already uploaded shipping proof for this return.
   */
  has_uploaded_seller_arrange_proof?: boolean;
  /**
   * To display list of request parameters needed to upload shipping proof.
   */
  shipping_proof_template?: ShopeeGetShippingCarrierShippingProofTemplate[];
  /**
   * The list of logistics carriers available for sellers to choose.
   */
  reverse_logistics_carrier_list?: ShopeeGetShippingCarrierReverseLogisticsCarrier[];
}

/**
 * Response payload for get_shipping_carrier
 *
 * Use this API to get the list of shipping carriers and request parameters needed before calling v2.returns.upload_shipping_proof. Only for TW and BR returns with is_seller_arrange = true.
 */
export type ShopeeGetShippingCarrierResponse = ShopeeResponseCommon<ShopeeGetShippingCarrierResponseData>;

/**
 * ShopeeOfferResponseData sub-interface for ShopeeOfferResponse
 */
export interface ShopeeOfferResponseData {
  /**
   * The serial number of return.
   */
  return_sn?: string;
}

/**
 * Response payload for offer
 *
 * v2.returns.offer
 */
export type ShopeeOfferResponse = ShopeeResponseCommon<ShopeeOfferResponseData>;

/**
 * ShopeeQueryProofImage sub-interface for ShopeeQueryProofResponseData
 */
export interface ShopeeQueryProofImage {
  /**
   * The image url in dispute proof.
   */
  url?: string;
  /**
   * The thumbnail of image.
   */
  thumbnail?: string;
}

/**
 * ShopeeQueryProofVideo sub-interface for ShopeeQueryProofResponseData
 */
export interface ShopeeQueryProofVideo {
  /**
   * The video url in dispute proof.
   */
  url?: string;
  /**
   * The thumbnail of video
   */
  thumbnail?: string;
}

/**
 * ShopeeQueryProofResponseData sub-interface for ShopeeQueryProofResponse
 */
export interface ShopeeQueryProofResponseData {
  image?: ShopeeQueryProofImage[];
  video?: ShopeeQueryProofVideo[];
  /**
   * The text description in the dispute proof.
   */
  description?: string;
}

/**
 * Response payload for query_proof
 *
 * Support sellers to query the evidence uploaded through the upload evidence API.
 */
export type ShopeeQueryProofResponse = ShopeeResponseCommon<ShopeeQueryProofResponseData>;

/**
 * Response data payload for upload_proof
 */
export type ShopeeUploadProofResponseData = any;

/**
 * Response payload for upload_proof
 *
 * Support sellers to upload evidence, including text and pictures and videos converted into URLs.
 */
export type ShopeeUploadProofResponse = ShopeeResponseCommon<ShopeeUploadProofResponseData>;

/**
 * Response data payload for upload_shipping_proof
 */
export type ShopeeUploadShippingProofResponseData = any;

/**
 * Response payload for upload_shipping_proof
 *
 * Use this API to upload shipping proof (Only for TW and BR returns with is_seller_arrange = true). This is not to upload evidence for disputes.
 */
export type ShopeeUploadShippingProofResponse = ShopeeResponseCommon<ShopeeUploadShippingProofResponseData>;
