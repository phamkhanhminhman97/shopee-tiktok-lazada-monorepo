import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  LazliveHighlightProductRequest,
} from '../dto/request/lazlive.request';
import {
  LazliveHighlightProductResponse,
} from '../dto/response/lazlive.response';

/**
 * HighlightProduct via Lazada `POST /lazlive/product/highlight`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function highlightProduct(params: LazliveHighlightProductRequest, config: LazadaConfig): Promise<LazliveHighlightProductResponse> {
  return LazadaHelper.callLazadaApi<LazliveHighlightProductResponse>('/lazlive/product/highlight', 'POST', params as unknown as Record<string, unknown>, config, 'highlightProduct');
}
