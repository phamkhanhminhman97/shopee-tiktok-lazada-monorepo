export interface ServiceMarketServiceMarketAppKeyOrderQueryResultDataArticleBizOrders {
  orderCycleStart: string;
  refundFee: string;
  articleItemName: string;
  bizType: string;
  articleName: string;
  totalPayFee: string;
  orderId: string;
  orderCycleEnd: string;
  itemCode: string;
  fee: string;
  nick: string;
  activityCode: string;
  itemName: string;
  orderCycle: string;
  bizOrderId: string;
  promFee: string;
  create: string;
  articleCode: string;
  userId?: string;
}

export interface ServiceMarketServiceMarketAppKeyOrderQueryResultData {
  totalItem: string;
  articleBizOrders: ServiceMarketServiceMarketAppKeyOrderQueryResultDataArticleBizOrders[];
}

export interface ServiceMarketServiceMarketAppKeyOrderQueryResult {
  data: ServiceMarketServiceMarketAppKeyOrderQueryResultData;
  success: boolean;
  resultCode: string;
  remark: string;
}

export interface ServiceMarketServiceMarketAppKeyOrderQuery {
  result: ServiceMarketServiceMarketAppKeyOrderQueryResult;
}

export type ServiceMarketServiceMarketAppKeyOrderQueryResponse = ServiceMarketServiceMarketAppKeyOrderQuery;

export interface ServiceMarketServiceMarketAppKeySubQueryResultData {
  nick: string;
  item_name: string;
  article_name: string;
  expire_notice: boolean;
  item_code: string;
  autosub: boolean;
  end_time: number;
  article_code: string;
  status: number;
}

export interface ServiceMarketServiceMarketAppKeySubQueryResult {
  data: ServiceMarketServiceMarketAppKeySubQueryResultData[];
  success: boolean;
}

export interface ServiceMarketServiceMarketAppKeySubQuery {
  result: ServiceMarketServiceMarketAppKeySubQueryResult;
}

export type ServiceMarketServiceMarketAppKeySubQueryResponse = ServiceMarketServiceMarketAppKeySubQuery;
