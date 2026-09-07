export interface InstantMessagingGetMessagesRequest {
  session_id: string;
  start_time: number;
  page_size: number;
  last_message_id?: string;
}

export interface InstantMessagingGetSessionDetailRequest {
  session_id: string;
}

export interface InstantMessagingGetSessionListRequest {
  last_session_id?: string;
  start_time: string;
  page_size: string;
}

export interface InstantMessagingMessageRecallRequest {
  session_id: string;
  message_id: string;
}

export interface InstantMessagingSendMessageRequest {
  session_id: string;
  template_id: string;
  txt?: string;
  img_url?: string;
  width?: number;
  height?: number;
  item_id?: string;
  order_id?: string;
  promotion_id?: string;
  video_id?: string;
}

export interface InstantMessagingOpenSessionRequest {
  order_id: number;
}

export interface InstantMessagingReadSessionRequest {
  session_id: string;
  last_read_message_id: string;
}
