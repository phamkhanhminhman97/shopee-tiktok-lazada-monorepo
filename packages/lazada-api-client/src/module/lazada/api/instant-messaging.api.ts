import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * GetMessages via Lazada `GET /im/message/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getMessages(params: InstantMessagingGetMessagesRequest, config: LazadaConfig): Promise<InstantMessagingGetMessagesResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingGetMessagesResponse>('/im/message/list', 'GET', params as unknown as Record<string, unknown>, config, 'getMessages');
}

/**
 * GetSessionDetail via Lazada `GET /im/session/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSessionDetail(params: InstantMessagingGetSessionDetailRequest, config: LazadaConfig): Promise<InstantMessagingGetSessionDetailResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingGetSessionDetailResponse>('/im/session/get', 'GET', params as unknown as Record<string, unknown>, config, 'getSessionDetail');
}

/**
 * GetSessionList via Lazada `GET /im/session/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSessionList(params: InstantMessagingGetSessionListRequest, config: LazadaConfig): Promise<InstantMessagingGetSessionListResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingGetSessionListResponse>('/im/session/list', 'GET', params as unknown as Record<string, unknown>, config, 'getSessionList');
}

/**
 * MessageRecall via Lazada `POST /im/message/recall`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function messageRecall(params: InstantMessagingMessageRecallRequest, config: LazadaConfig): Promise<InstantMessagingMessageRecallResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingMessageRecallResponse>('/im/message/recall', 'POST', params as unknown as Record<string, unknown>, config, 'messageRecall');
}

/**
 * SendMessage via Lazada `POST /im/message/send`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sendMessage(params: InstantMessagingSendMessageRequest, config: LazadaConfig): Promise<InstantMessagingSendMessageResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingSendMessageResponse>('/im/message/send', 'POST', params as unknown as Record<string, unknown>, config, 'sendMessage');
}

/**
 * OpenSession via Lazada `POST /im/session/open`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function openSession(params: InstantMessagingOpenSessionRequest, config: LazadaConfig): Promise<InstantMessagingOpenSessionResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingOpenSessionResponse>('/im/session/open', 'POST', params as unknown as Record<string, unknown>, config, 'openSession');
}

/**
 * ReadSession via Lazada `POST /im/session/read`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function readSession(params: InstantMessagingReadSessionRequest, config: LazadaConfig): Promise<InstantMessagingReadSessionResponse> {
  return LazadaHelper.callLazadaApi<InstantMessagingReadSessionResponse>('/im/session/read', 'POST', params as unknown as Record<string, unknown>, config, 'readSession');
}
