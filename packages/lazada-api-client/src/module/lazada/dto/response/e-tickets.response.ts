export interface ETicketsGetOrderItemsFromBarCodeDataItemList {
  item_id?: string;
  item_name?: string;
  item_img?: string;
  unit_fee?: string;
  unit_fee_currency?: string;
  actual_fee?: string;
  actual_fee_currency?: string;
}

export interface ETicketsGetOrderItemsFromBarCodeData {
  biz_type?: number;
  certificate_code?: string;
  code_status?: string;
  outer_id?: string;
  strart_time?: number;
  end_time?: number;
  trade_order_id?: number;
  serial_num?: string;
  item_list?: ETicketsGetOrderItemsFromBarCodeDataItemList[];
}

export interface ETicketsGetOrderItemsFromBarCode {
  data: ETicketsGetOrderItemsFromBarCodeData;
}

export type ETicketsGetOrderItemsFromBarCodeResponse = ETicketsGetOrderItemsFromBarCode;

export interface ETicketsRedeemOrderItemsData {
  outer_id?: string;
  serial_num?: string;
  left_num?: number;
}

export interface ETicketsRedeemOrderItems {
  data: ETicketsRedeemOrderItemsData;
}

export type ETicketsRedeemOrderItemsResponse = ETicketsRedeemOrderItems;

export interface ETicketsGlobalEticketMerchantMaAvailableRespBody {
  attribute_map?: Record<string, unknown>;
}

export interface ETicketsGlobalEticketMerchantMaAvailable {
  resp_body: ETicketsGlobalEticketMerchantMaAvailableRespBody;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaAvailableResponse = ETicketsGlobalEticketMerchantMaAvailable;

export interface ETicketsGlobalEticketMerchantMaConsumeRespBody {
  attribute_map?: Record<string, unknown>;
}

export interface ETicketsGlobalEticketMerchantMaConsume {
  resp_body: ETicketsGlobalEticketMerchantMaConsumeRespBody;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaConsumeResponse = ETicketsGlobalEticketMerchantMaConsume;

export interface ETicketsGlobalEticketMerchantMaFailsend {
  resp_body: Record<string, unknown>;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaFailsendResponse = ETicketsGlobalEticketMerchantMaFailsend;

export interface ETicketsGlobalEticketMerchantMaQueryRespBodyCertificate {
  locked_num: number;
  biz_type: number;
  certificate_code: string;
  initial_num: number;
  available_num: number;
  consume_status: string;
  code_status: string;
  qr_code_url: string;
  outer_id: string;
  start_time: number;
  end_time: number;
  used_num: number;
  attributes?: Record<string, unknown>;
}

export interface ETicketsGlobalEticketMerchantMaQueryRespBody {
  certificate: ETicketsGlobalEticketMerchantMaQueryRespBodyCertificate;
}

export interface ETicketsGlobalEticketMerchantMaQuery {
  resp_body: ETicketsGlobalEticketMerchantMaQueryRespBody;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaQueryResponse = ETicketsGlobalEticketMerchantMaQuery;

export interface ETicketsGlobalEticketMerchantMaQueryTbMa {
  resp_body: Record<string, unknown>;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaQueryTbMaResponse = ETicketsGlobalEticketMerchantMaQueryTbMa;

export interface ETicketsGlobalEticketMerchantMaSend {
  resp_body: Record<string, unknown>;
  ret_code: string;
  ret_msg: string;
}

export type ETicketsGlobalEticketMerchantMaSendResponse = ETicketsGlobalEticketMerchantMaSend;
