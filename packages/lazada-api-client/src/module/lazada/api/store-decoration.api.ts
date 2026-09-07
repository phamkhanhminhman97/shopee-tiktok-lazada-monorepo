import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  StoreDecorationGetStoreCustomPageRequest,
} from '../dto/request/store-decoration.request';
import {
  StoreDecorationGetStoreCustomPageResponse,
} from '../dto/response/store-decoration.response';

/**
 * GetStoreCustomPage via Lazada `GET /store/custom/page/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getStoreCustomPage(params: StoreDecorationGetStoreCustomPageRequest, config: LazadaConfig): Promise<StoreDecorationGetStoreCustomPageResponse> {
  return LazadaHelper.callLazadaApi<StoreDecorationGetStoreCustomPageResponse>('/store/custom/page/get', 'GET', params as unknown as Record<string, unknown>, config, 'getStoreCustomPage');
}
