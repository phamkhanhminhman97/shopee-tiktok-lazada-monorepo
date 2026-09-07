export interface ETicketsGetOrderItemsFromBarCodeRequest {
  code: string;
}

export interface ETicketsRedeemOrderItemsRequest {
  biz_type: number;
  code: string;
  outer_id: string;
  serial_num: string;
  consume_num: number;
  store_id?: string;
  pos_id?: string;
}

export interface ETicketsGlobalEticketMerchantMaAvailableRequest {
  biz_type: number;
  code: string;
  serial_num: string;
  pos_id?: string;
  outer_id: string;
  consume_num: number;
  consume_store_id: string;
}

export interface ETicketsGlobalEticketMerchantMaConsumeRequest {
  biz_type: number;
  serial_num: string;
  pos_id?: string;
  outer_id: string;
  consume_num: number;
  code: string;
  consume_store_id: string;
}

export interface ETicketsGlobalEticketMerchantMaFailsendRequest {
  biz_type: number;
  sub_code: string;
  outer_id: string;
  sub_msg: string;
}

export interface ETicketsGlobalEticketMerchantMaQueryRequest {
  code: string;
  seller_id: number;
  store_id?: number;
}

export interface ETicketsGlobalEticketMerchantMaQueryTbMaRequest {
  code: string;
}

export interface ETicketsGlobalEticketMerchantMaSendIsvMaList {
  code: string;
  num: number;
}

export interface ETicketsGlobalEticketMerchantMaSendRequest {
  biz_type: number;
  isv_ma_list: ETicketsGlobalEticketMerchantMaSendIsvMaList[];
  outer_id: string;
}
