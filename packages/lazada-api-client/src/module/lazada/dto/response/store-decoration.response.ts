export interface StoreDecorationGetStoreCustomPageDataResultPageInfo {
  total_count?: string;
  current_page?: string;
}

export interface StoreDecorationGetStoreCustomPageDataResultPageList {
  publish_time?: string;
  wireless_end_time?: string;
  wireless_page_preview_url?: string;
  pc_page_preview_url?: string;
  qr_url?: string;
  pc_end_time?: string;
  timed_publish_time?: string;
  relate_page_id?: number;
  page_id?: number;
  page_name?: string;
  path?: string;
  client_type?: string;
  decorate_page_url?: string;
  wireless_page_view_url?: string;
  page_view_url?: string;
  status_key?: string;
  last_edit_time?: string;
}

export interface StoreDecorationGetStoreCustomPageDataResult {
  page_info?: StoreDecorationGetStoreCustomPageDataResultPageInfo;
  page_list?: StoreDecorationGetStoreCustomPageDataResultPageList[];
}

export interface StoreDecorationGetStoreCustomPageData {
  result?: StoreDecorationGetStoreCustomPageDataResult;
  success?: boolean;
  error?: string;
  error_message?: string;
}

export interface StoreDecorationGetStoreCustomPage {
  data?: StoreDecorationGetStoreCustomPageData;
}

export type StoreDecorationGetStoreCustomPageResponse = StoreDecorationGetStoreCustomPage;
