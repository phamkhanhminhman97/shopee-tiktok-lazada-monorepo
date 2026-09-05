import { SHOPEE_RETURN_STATUS } from '../../common/constant';

/**
 * Request type for Shopee v2.returns.get_return_list.
 *
 * `page_no` and `page_size` are required by Shopee. All other filters are
 * optional. `create_time_from`/`create_time_to` accept Unix timestamps in
 * seconds and, when both are provided, must not exceed a 15 day range.
 */
interface RequestGetReturnList {
  page_no: number;
  page_size: number;
  create_time_from?: number;
  create_time_to?: number;
  update_time_from?: number;
  update_time_to?: number;
  status?: keyof typeof SHOPEE_RETURN_STATUS;
  negotiation_status?: string;
  seller_proof_status?: string;
  seller_compensation_status?: string;
}

/**
 * Request type for Shopee v2.returns.get_return_detail.
 * `return_sn` is the Shopee return serial number, obtained from
 * `get_return_list()` or from a return-related Push Mechanism event.
 */
interface RequestGetReturnDetail {
  return_sn: string;
}

/**
 * Request type for Shopee v2.returns.confirm.
 * Seller-side confirmation of a buyer return/refund request.
 */
interface RequestConfirmReturn {
  return_sn: string;
}

/**
 * Request type for Shopee v2.returns.get_available_solutions.
 * Returns the return/refund solutions the seller may offer for a given return.
 */
interface RequestGetAvailableSolutions {
  return_sn: string;
}

export {
  RequestGetReturnList as ShopeeRequestGetReturnList,
  RequestGetReturnDetail as ShopeeRequestGetReturnDetail,
  RequestConfirmReturn as ShopeeRequestConfirmReturn,
  RequestGetAvailableSolutions as ShopeeRequestGetAvailableSolutions,
};

// ---- Appended: additional endpoints (batch 3) ----
import { ShopeeReturnSn } from '../response/return.response';

/**
 * Request parameters for accept_offer
 *
 * v2.returns.accept_offer
 */
export interface ShopeeAcceptOfferRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
}

/**
 * Request parameters for cancel_dispute
 *
 * Sellers can only cancel compensation disputes, not normal disputes. This means that sellers can only cancel disputes when the return_status is ACCEPTED and the compensation_status is COMPENSATION_REQUESTED.
 */
export interface ShopeeCancelDisputeRequest {
  /**
   * Shopee's unique serial number identifier for a Return Refund request.Note: Sellers can only cancel compensation disputes, not normal disputes. This means that sellers can only cancel disputes when the return_status is ACCEPTED and the compensation_status is COMPENSATION_REQUESTED.
   */
  return_sn: string;
  /**
   * The operator's email address. For operation record keeping purposes (same as v2.returns.dispute API).
   */
  email: string;
}

/**
 * Request parameters for convert_image
 *
 * Convert a specific format and pictures within 10M into url.
 */
export interface ShopeeConvertImageRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
  /**
   * The proof picture to be uploaded must be within 10MB in size, and the format only supports .jpg, .jpeg, and .png. Only one picture is allowed to be uploaded per request. If multiple pictures are uploaded, only the first picture will be processed.
  */
  upload_image: Buffer;
}

/**
 * ShopeeDisputeImage sub-interface for ShopeeDisputeRequest
 */
export interface ShopeeDisputeImage {
  /**
   * The module_index of current evidence module returned by get_return_dispute_reason API.
   */
  module_index: number;
  /**
   * The requirement content of current evidence module returned by get_return_dispute_reason API.
   */
  requirement: string;
  /**
   * The image URLs of current evidence module. It is recommended to pass in the URL returned by convert_image API.
   */
  image_url: string[];
}

/**
 * Request parameters for dispute
 *
 * Dispute return.
 *
 * Support to raise dispute when return_status in REQUESTED / PROCESSING/ACCEPTED
 */
export interface ShopeeDisputeRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
  /**
   * The email address.
   */
  email: string;
  /**
   * The dispute reason id.Please call v2.returns.get_return_dispute_reason to get it.
   */
  dispute_reason_id: number;
  /**
   * Determines whether image submission is mandatory for the dispute request - mandatory input field for all dispute reasons except "Did not receive the return product".
   */
  image_list?: ShopeeDisputeImage[];
  /**
   * The content of dispute reason.
   */
  dispute_text_reason?: string;
}

/**
 * Request parameters for get_return_dispute_reason
 *
 * To get the dispute return reason.
 */
export interface ShopeeGetReturnDisputeReasonRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
}

/**
 * Request parameters for get_reverse_tracking_info
 *
 * Get reverse and post-return logistics information of return request. For Normal RR, return complete reverse logistics information, for In-transit RR and Return-on-the-Spot, only return latest reverse logistics status, without providing complete reverse logistics information. For seller_validation, only one segment of reverse (buyer to seller), use tracking_info, for warehouse_validation, two segment of reverse (buyer to warehouse and warehouse to seller), use post_return_logistics_tracking_info.
 */
export interface ShopeeGetReverseTrackingInfoRequest {
  /**
   * Shopee's unique identifier for a return/refund request (serial number of return).
   */
  return_sn: ShopeeReturnSn | string | number;
}

/**
 * Request parameters for get_shipping_carrier
 *
 * Use this API to get the list of shipping carriers and request parameters needed before calling v2.returns.upload_shipping_proof. Only for TW and BR returns with is_seller_arrange = true.
 */
export interface ShopeeGetShippingCarrierRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
}

/**
 * Request parameters for offer
 *
 * v2.returns.offer
 */
export interface ShopeeOfferRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
  /**
   * The new solution to be offered. See "Data Definition - ReturnSolution"
   */
  proposed_solution: string;
  /**
   * The new refund amount to be offered
   */
  proposed_adjusted_refund_amount?: number;
}

/**
 * Request parameters for query_proof
 *
 * Support sellers to query the evidence uploaded through the upload evidence API.
 */
export interface ShopeeQueryProofRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
}

/**
 * ShopeeUploadProofPhoto sub-interface for ShopeeUploadProofRequest
 */
export interface ShopeeUploadProofPhoto {
  /**
   * Uploaded proof image link, it is recommended to pass in the return url of api called convert_image.
   */
  url: string;
  /**
   * The proof image thumbnail.
   */
  thumbnail: string;
}

/**
 * Request parameters for upload_proof
 *
 * Support sellers to upload evidence, including text and pictures and videos converted into URLs.
 */
export interface ShopeeUploadProofRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
  photo?: ShopeeUploadProofPhoto[];
  /**
   * text description in the dispute proof
   */
  description?: string;
}

/**
 * ShopeeUploadShippingProofImageId sub-interface for ShopeeUploadShippingProofRequest
 */
export interface ShopeeUploadShippingProofImageId {
  /**
   * Unique image_id.
   */
  image_id?: string;
}

/**
 * Request parameters for upload_shipping_proof
 *
 * Use this API to upload shipping proof (Only for TW and BR returns with is_seller_arrange = true). This is not to upload evidence for disputes.
 */
export interface ShopeeUploadShippingProofRequest {
  /**
   * The serial number of return.
   */
  return_sn: string;
  /**
   * Unique ID of non-integrated reverse logistics channel used by seller.
   */
  reverse_logistics_carrier_id: number;
  /**
   * Non-integrated reverse logistics channel name used by seller.
   */
  reverse_logistics_carrier_name?: string;
  /**
   * Tracking number used in seller arrange. Required when is_tracking_number_required = true in v2.returns.get_shipping_carrier.
   */
  tracking_number?: string;
  /**
   * List of image_id of shipping proof image. Required when is_shipping_image_file_mandatory = true in v2.returns.get_shipping_carrier. Max: 3.You can call the v2.media.upload_image to upload image and get the image_id, for this scenario, please pass the business = 2 and scene = 1.
   */
  image_id_list?: ShopeeUploadShippingProofImageId[];
  /**
   * Optional remarks
   */
  remarks?: string;
}
