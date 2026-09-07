import { LazadaConfig } from '../dto/request/config.request';
import {
  getStoreCustomPage,
} from '../api/store-decoration.api';
import {
  StoreDecorationGetStoreCustomPageRequest,
} from '../dto/request/store-decoration.request';
import {
  StoreDecorationGetStoreCustomPageResponse,
} from '../dto/response/store-decoration.response';

/**
 * Lazada `store-decoration-api` API namespace.
 *
 * Access via `lazada.storeDecoration.<method>()` on a `LazadaModule` instance.
 */
export class LazadaStoreDecoration {
  constructor(private config: LazadaConfig) {}

  async getStoreCustomPage(params: StoreDecorationGetStoreCustomPageRequest): Promise<StoreDecorationGetStoreCustomPageResponse> {
    return await getStoreCustomPage(params, this.config);
  }
}
