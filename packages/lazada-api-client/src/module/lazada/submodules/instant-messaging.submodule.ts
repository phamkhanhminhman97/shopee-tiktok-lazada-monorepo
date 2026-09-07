import { LazadaConfig } from '../dto/request/config.request';
import {
  getMessages,
  getSessionDetail,
  getSessionList,
  messageRecall,
  openSession,
  readSession,
  sendMessage,
} from '../api/instant-messaging.api';
import {
  InstantMessagingGetMessagesRequest,
  InstantMessagingGetSessionDetailRequest,
  InstantMessagingGetSessionListRequest,
  InstantMessagingMessageRecallRequest,
  InstantMessagingOpenSessionRequest,
  InstantMessagingReadSessionRequest,
  InstantMessagingSendMessageRequest,
} from '../dto/request/instant-messaging.request';
import {
  InstantMessagingGetMessagesResponse,
  InstantMessagingGetSessionDetailResponse,
  InstantMessagingGetSessionListResponse,
  InstantMessagingMessageRecallResponse,
  InstantMessagingOpenSessionResponse,
  InstantMessagingReadSessionResponse,
  InstantMessagingSendMessageResponse,
} from '../dto/response/instant-messaging.response';

/**
 * Lazada `instant-messaging-api` API namespace.
 *
 * Access via `lazada.instantMessaging.<method>()` on a `LazadaModule` instance.
 */
export class LazadaInstantMessaging {
  constructor(private config: LazadaConfig) {}

  async getMessages(params: InstantMessagingGetMessagesRequest): Promise<InstantMessagingGetMessagesResponse> {
    return await getMessages(params, this.config);
  }

  async getSessionDetail(params: InstantMessagingGetSessionDetailRequest): Promise<InstantMessagingGetSessionDetailResponse> {
    return await getSessionDetail(params, this.config);
  }

  async getSessionList(params: InstantMessagingGetSessionListRequest): Promise<InstantMessagingGetSessionListResponse> {
    return await getSessionList(params, this.config);
  }

  async messageRecall(params: InstantMessagingMessageRecallRequest): Promise<InstantMessagingMessageRecallResponse> {
    return await messageRecall(params, this.config);
  }

  async sendMessage(params: InstantMessagingSendMessageRequest): Promise<InstantMessagingSendMessageResponse> {
    return await sendMessage(params, this.config);
  }

  async openSession(params: InstantMessagingOpenSessionRequest): Promise<InstantMessagingOpenSessionResponse> {
    return await openSession(params, this.config);
  }

  async readSession(params: InstantMessagingReadSessionRequest): Promise<InstantMessagingReadSessionResponse> {
    return await readSession(params, this.config);
  }
}
