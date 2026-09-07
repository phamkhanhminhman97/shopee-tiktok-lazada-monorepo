import { TiktokConfig } from '../dto/request/config.request';
import {
  deleteShopWebhook,
  getShopWebhooks,
  updateShopWebhook,
} from '../api/event-v3.api';
import {
  TiktokDeleteShopWebhookBody,
  TiktokUpdateShopWebhookBody,
} from '../dto/request/event-v3.request';
import {
  TiktokApiResponse,
  TiktokGetWebhooksResponse,
} from '../dto/response/event-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `Event` API namespace.
 *
 * Access via `tiktok.event.<method>()` on a `TiktokModule` instance.
 */
export class TiktokEvent {
  constructor(private config: TiktokConfig) {}

  async getShopWebhooks(): Promise<TiktokResponseCommon<TiktokGetWebhooksResponse>> {
    return await getShopWebhooks(this.config);
  }

  async updateShopWebhook(body: TiktokUpdateShopWebhookBody): Promise<TiktokResponseCommon<TiktokApiResponse>> {
    return await updateShopWebhook(body, this.config);
  }

  async deleteShopWebhook(body: TiktokDeleteShopWebhookBody): Promise<TiktokResponseCommon<TiktokApiResponse>> {
    return await deleteShopWebhook(body, this.config);
  }
}
