export interface ServiceMarketServiceMarketAppKeyOrderQueryRequest {
  endCreated?: string;
  bizType?: number;
  bizOrderId?: number;
  orderId?: number;
  pageNo: number;
  itemCode?: string;
  pageSize: number;
  startCreated?: string;
  articleCode: string;
  shortCode?: string;
}

export interface ServiceMarketServiceMarketAppKeySubQueryRequest {
  articleCode: string;
  shortCode: string;
}
