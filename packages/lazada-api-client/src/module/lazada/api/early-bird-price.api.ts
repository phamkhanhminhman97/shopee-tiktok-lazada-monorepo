import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  EarlyBirdPriceCreateEarlyBirdActivityRequest,
  EarlyBirdPriceEarlyBirdActivityAddSkusRequest,
  EarlyBirdPriceEarlyBirdActivityDeactivateSkusRequest,
} from '../dto/request/early-bird-price.request';
import {
  EarlyBirdPriceCreateEarlyBirdActivityResponse,
  EarlyBirdPriceEarlyBirdActivityAddSkusResponse,
  EarlyBirdPriceEarlyBirdActivityDeactivateSkusResponse,
} from '../dto/response/early-bird-price.response';

/**
 * EarlyBirdActivityAddSkus via Lazada `POST /activity/early/bird/addSkus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function earlyBirdActivityAddSkus(params: EarlyBirdPriceEarlyBirdActivityAddSkusRequest, config: LazadaConfig): Promise<EarlyBirdPriceEarlyBirdActivityAddSkusResponse> {
  return LazadaHelper.callLazadaApi<EarlyBirdPriceEarlyBirdActivityAddSkusResponse>('/activity/early/bird/addSkus', 'POST', params as unknown as Record<string, unknown>, config, 'earlyBirdActivityAddSkus');
}

/**
 * CreateEarlyBirdActivity via Lazada `POST /activity/early/bird/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createEarlyBirdActivity(params: EarlyBirdPriceCreateEarlyBirdActivityRequest, config: LazadaConfig): Promise<EarlyBirdPriceCreateEarlyBirdActivityResponse> {
  return LazadaHelper.callLazadaApi<EarlyBirdPriceCreateEarlyBirdActivityResponse>('/activity/early/bird/create', 'POST', params as unknown as Record<string, unknown>, config, 'createEarlyBirdActivity');
}

/**
 * EarlyBirdActivityDeactivateSkus via Lazada `POST /activity/early/bird/deactivateSkus`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function earlyBirdActivityDeactivateSkus(params: EarlyBirdPriceEarlyBirdActivityDeactivateSkusRequest, config: LazadaConfig): Promise<EarlyBirdPriceEarlyBirdActivityDeactivateSkusResponse> {
  return LazadaHelper.callLazadaApi<EarlyBirdPriceEarlyBirdActivityDeactivateSkusResponse>('/activity/early/bird/deactivateSkus', 'POST', params as unknown as Record<string, unknown>, config, 'earlyBirdActivityDeactivateSkus');
}
