export interface InstantMessagingGetMessagesDataMessageList {
  from_account_type: number;
  to_account_type: number;
  from_account_id: string;
  message_id: string;
  to_account_id: string;
  site_id: string;
  session_id: string;
  template_id: number;
  type: number;
  content: string;
  send_time: number;
  process_msg?: string;
  status?: number;
  auto_reply?: boolean;
}

export interface InstantMessagingGetMessagesData {
  message_list: InstantMessagingGetMessagesDataMessageList[];
  has_more: boolean;
  next_start_time: number;
  last_message_id?: string;
}

export interface InstantMessagingGetMessages {
  err_code: string;
  data: InstantMessagingGetMessagesData;
  success: boolean;
  err_message: string;
}

export type InstantMessagingGetMessagesResponse = InstantMessagingGetMessages;

export interface InstantMessagingGetSessionDetailData {
  summary: string;
  self_position: number;
  to_position: number;
  head_url: string;
  unread_count: number;
  last_message_time: number;
  last_message_id: string;
  session_id: string;
  title: string;
  buyer_id: number;
  tags?: string[];
  site_id?: string;
}

export interface InstantMessagingGetSessionDetail {
  err_code: string;
  data: InstantMessagingGetSessionDetailData;
  success: boolean;
  err_message: string;
}

export type InstantMessagingGetSessionDetailResponse = InstantMessagingGetSessionDetail;

export interface InstantMessagingGetSessionListDataSessionList {
  buyer_id: number;
  tags?: string[];
  site_id?: string;
  summary: string;
  self_position: string;
  to_position: string;
  head_url: string;
  unread_count: number;
  last_message_time: number;
  last_message_id: string;
  session_id: string;
  title: string;
}

export interface InstantMessagingGetSessionListData {
  has_more: boolean;
  next_start_time: number;
  last_session_id?: string;
  session_list: InstantMessagingGetSessionListDataSessionList[];
}

export interface InstantMessagingGetSessionList {
  success: boolean;
  err_message: string;
  err_code: string;
  data: InstantMessagingGetSessionListData;
}

export type InstantMessagingGetSessionListResponse = InstantMessagingGetSessionList;

export interface InstantMessagingMessageRecall {
  err_code?: string;
  success?: boolean;
  err_message?: string;
}

export type InstantMessagingMessageRecallResponse = InstantMessagingMessageRecall;

export interface InstantMessagingSendMessageData {
  current_time: number;
  message_id: string;
  template_id: number;
}

export interface InstantMessagingSendMessage {
  err_code: string;
  data: InstantMessagingSendMessageData;
  success: boolean;
  err_message: string;
}

export type InstantMessagingSendMessageResponse = InstantMessagingSendMessage;

export interface InstantMessagingOpenSession {
  session_id?: string;
}

export type InstantMessagingOpenSessionResponse = InstantMessagingOpenSession;

export interface InstantMessagingReadSession {
  err_code: string;
  success: boolean;
  err_message: string;
}

export type InstantMessagingReadSessionResponse = InstantMessagingReadSession;
