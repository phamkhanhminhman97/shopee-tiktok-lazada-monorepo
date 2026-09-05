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
