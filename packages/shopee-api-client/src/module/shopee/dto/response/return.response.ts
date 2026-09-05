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
