import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokDeleteShopWebhookBody,
  TiktokUpdateShopWebhookBody,
} from '../dto/request/event-v3.request';
import {
  TiktokApiResponse,
  TiktokGetWebhooksResponse,
} from '../dto/response/event-v3.response';

/**
 * Retrieve a list of webhooks registered for the current shop.
 * Requires a valid `x-tts-access-token` header to be set.
 *
 * @returns A promise resolving to the webhook list and metadata.
 */
export async function getShopWebhooks(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetWebhooksResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetWebhooksResponse>>(
    '/event/202309/webhooks',
    'GET',
    {},
    config,
    'getShopWebhooks',
  );
}

/**
 * Register or update a shop webhook.
 * Requires a valid access token and properly formatted request body.
 *
 * @param body - The webhook configuration to update.
 * @returns A generic API response indicating success or failure.
 */
export async function updateShopWebhook(body: TiktokUpdateShopWebhookBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokApiResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokApiResponse>>(
    '/event/202309/webhooks',
    'PUT',
    {},
    config,
    'updateShopWebhook',
  );
}

/**
 * Delete a registered shop webhook.
 * Requires the webhook identifier or relevant body data to be passed.
 *
 * @param body - The deletion parameters (e.g., event_type or address).
 * @returns A generic API response confirming deletion.
 */
export async function deleteShopWebhook(body: TiktokDeleteShopWebhookBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokApiResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokApiResponse>>(
    '/event/202309/webhooks',
    'DELETE',
    {},
    config,
    'deleteShopWebhook',
  );
}
