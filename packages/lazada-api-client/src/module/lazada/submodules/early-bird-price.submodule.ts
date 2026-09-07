import { LazadaConfig } from '../dto/request/config.request';
import {
  createEarlyBirdActivity,
  earlyBirdActivityAddSkus,
  earlyBirdActivityDeactivateSkus,
} from '../api/early-bird-price.api';
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
 * Lazada `early-bird-price-api` API namespace.
 *
 * Access via `lazada.earlyBirdPrice.<method>()` on a `LazadaModule` instance.
 */
export class LazadaEarlyBirdPrice {
  constructor(private config: LazadaConfig) {}

  async earlyBirdActivityAddSkus(params: EarlyBirdPriceEarlyBirdActivityAddSkusRequest): Promise<EarlyBirdPriceEarlyBirdActivityAddSkusResponse> {
    return await earlyBirdActivityAddSkus(params, this.config);
  }

  async createEarlyBirdActivity(params: EarlyBirdPriceCreateEarlyBirdActivityRequest): Promise<EarlyBirdPriceCreateEarlyBirdActivityResponse> {
    return await createEarlyBirdActivity(params, this.config);
  }

  async earlyBirdActivityDeactivateSkus(params: EarlyBirdPriceEarlyBirdActivityDeactivateSkusRequest): Promise<EarlyBirdPriceEarlyBirdActivityDeactivateSkusResponse> {
    return await earlyBirdActivityDeactivateSkus(params, this.config);
  }
}
