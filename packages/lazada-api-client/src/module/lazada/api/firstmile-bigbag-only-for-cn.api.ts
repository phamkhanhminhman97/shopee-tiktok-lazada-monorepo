import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoRequest,
  FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableRequest,
  FirstmileBigbagOnlyForCnLazadaBigbagCancelRequest,
  FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsRequest,
  FirstmileBigbagOnlyForCnLazadaBigbagCommitRequest,
  FirstmileBigbagOnlyForCnLazadaBigbagUpdateRequest,
  FirstmileBigbagOnlyForCnLazadaSellerAccountBindRequest,
  FirstmileBigbagOnlyForCnQueryAddressInformaitonRequest,
  FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoRequest,
} from '../dto/request/firstmile-bigbag-only-for-cn.request';
import {
  FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResponse,
  FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResponse,
  FirstmileBigbagOnlyForCnLazadaBigbagCancelResponse,
  FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResponse,
  FirstmileBigbagOnlyForCnLazadaBigbagCommitResponse,
  FirstmileBigbagOnlyForCnLazadaBigbagUpdateResponse,
  FirstmileBigbagOnlyForCnLazadaSellerAccountBindResponse,
  FirstmileBigbagOnlyForCnQueryAddressInformaitonResponse,
  FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResponse,
} from '../dto/response/firstmile-bigbag-only-for-cn.response';

/**
 * GetChannelcodeByFirstMileNo via Lazada `GET /logistics/cngfc/fulfill/getchannelcode`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getChannelcodeByFirstMileNo(params: FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResponse>('/logistics/cngfc/fulfill/getchannelcode', 'GET', params as unknown as Record<string, unknown>, config, 'getChannelcodeByFirstMileNo');
}

/**
 * QueryAddressInformaiton via Lazada `GET /logistics/cnpms/address/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryAddressInformaiton(params: FirstmileBigbagOnlyForCnQueryAddressInformaitonRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnQueryAddressInformaitonResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnQueryAddressInformaitonResponse>('/logistics/cnpms/address/query', 'GET', params as unknown as Record<string, unknown>, config, 'queryAddressInformaiton');
}

/**
 * GetLazadaBigbagPDFLable via Lazada `GET /logistics/cnpms/bigbag/lable/getPdf`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getLazadaBigbagPDFLable(params: FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResponse>('/logistics/cnpms/bigbag/lable/getPdf', 'GET', params as unknown as Record<string, unknown>, config, 'getLazadaBigbagPDFLable');
}

/**
 * QueryLazadaBigbagInfo via Lazada `GET /logistics/cnpms/bigbag/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryLazadaBigbagInfo(params: FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResponse>('/logistics/cnpms/bigbag/query', 'GET', params as unknown as Record<string, unknown>, config, 'queryLazadaBigbagInfo');
}

/**
 * LazadaSellerAccountBind via Lazada `POST /logistics/cnpms/account/bind`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaSellerAccountBind(params: FirstmileBigbagOnlyForCnLazadaSellerAccountBindRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnLazadaSellerAccountBindResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnLazadaSellerAccountBindResponse>('/logistics/cnpms/account/bind', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaSellerAccountBind');
}

/**
 * LazadaBigbagCancel via Lazada `POST /logistics/cnpms/bigbag/cancel`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaBigbagCancel(params: FirstmileBigbagOnlyForCnLazadaBigbagCancelRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCancelResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnLazadaBigbagCancelResponse>('/logistics/cnpms/bigbag/cancel', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaBigbagCancel');
}

/**
 * LazadaBigbagCommit via Lazada `POST /logistics/cnpms/bigbag/commit`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaBigbagCommit(params: FirstmileBigbagOnlyForCnLazadaBigbagCommitRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCommitResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnLazadaBigbagCommitResponse>('/logistics/cnpms/bigbag/commit', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaBigbagCommit');
}

/**
 * LazadaBigbagCollectionPoints via Lazada `POST /logistics/cnpms/bigbag/querycollection`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaBigbagCollectionPoints(params: FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResponse>('/logistics/cnpms/bigbag/querycollection', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaBigbagCollectionPoints');
}

/**
 * LazadaBigbagUpdate via Lazada `POST /logistics/cnpms/bigbag/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function lazadaBigbagUpdate(params: FirstmileBigbagOnlyForCnLazadaBigbagUpdateRequest, config: LazadaConfig): Promise<FirstmileBigbagOnlyForCnLazadaBigbagUpdateResponse> {
  return LazadaHelper.callLazadaApi<FirstmileBigbagOnlyForCnLazadaBigbagUpdateResponse>('/logistics/cnpms/bigbag/update', 'POST', params as unknown as Record<string, unknown>, config, 'lazadaBigbagUpdate');
}
