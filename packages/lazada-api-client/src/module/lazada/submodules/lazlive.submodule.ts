import { LazadaConfig } from '../dto/request/config.request';
import {
  highlightProduct,
} from '../api/lazlive.api';
import {
  LazliveHighlightProductRequest,
} from '../dto/request/lazlive.request';
import {
  LazliveHighlightProductResponse,
} from '../dto/response/lazlive.response';

/**
 * Lazada `lazlive-api` API namespace.
 *
 * Access via `lazada.lazlive.<method>()` on a `LazadaModule` instance.
 */
export class LazadaLazlive {
  constructor(private config: LazadaConfig) {}

  async highlightProduct(params: LazliveHighlightProductRequest): Promise<LazliveHighlightProductResponse> {
    return await highlightProduct(params, this.config);
  }
}
