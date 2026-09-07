import { LazadaConfig } from '../dto/request/config.request';
import {
  getChannelcodeByFirstMileNo,
  getLazadaBigbagPDFLable,
  lazadaBigbagCancel,
  lazadaBigbagCollectionPoints,
  lazadaBigbagCommit,
  lazadaBigbagUpdate,
  lazadaSellerAccountBind,
  queryAddressInformaiton,
  queryLazadaBigbagInfo,
} from '../api/firstmile-bigbag-only-for-cn.api';
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
 * Lazada `firstmile-bigbag-only-for-cn` API namespace.
 *
 * Access via `lazada.firstmileBigbagOnlyForCn.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFirstmileBigbagOnlyForCn {
  constructor(private config: LazadaConfig) {}

  async getChannelcodeByFirstMileNo(params: FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoRequest): Promise<FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoResponse> {
    return await getChannelcodeByFirstMileNo(params, this.config);
  }

  async queryAddressInformaiton(params: FirstmileBigbagOnlyForCnQueryAddressInformaitonRequest): Promise<FirstmileBigbagOnlyForCnQueryAddressInformaitonResponse> {
    return await queryAddressInformaiton(params, this.config);
  }

  async getLazadaBigbagPDFLable(params: FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableRequest): Promise<FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableResponse> {
    return await getLazadaBigbagPDFLable(params, this.config);
  }

  async queryLazadaBigbagInfo(params: FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoRequest): Promise<FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoResponse> {
    return await queryLazadaBigbagInfo(params, this.config);
  }

  async lazadaSellerAccountBind(params: FirstmileBigbagOnlyForCnLazadaSellerAccountBindRequest): Promise<FirstmileBigbagOnlyForCnLazadaSellerAccountBindResponse> {
    return await lazadaSellerAccountBind(params, this.config);
  }

  async lazadaBigbagCancel(params: FirstmileBigbagOnlyForCnLazadaBigbagCancelRequest): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCancelResponse> {
    return await lazadaBigbagCancel(params, this.config);
  }

  async lazadaBigbagCommit(params: FirstmileBigbagOnlyForCnLazadaBigbagCommitRequest): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCommitResponse> {
    return await lazadaBigbagCommit(params, this.config);
  }

  async lazadaBigbagCollectionPoints(params: FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsRequest): Promise<FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsResponse> {
    return await lazadaBigbagCollectionPoints(params, this.config);
  }

  async lazadaBigbagUpdate(params: FirstmileBigbagOnlyForCnLazadaBigbagUpdateRequest): Promise<FirstmileBigbagOnlyForCnLazadaBigbagUpdateResponse> {
    return await lazadaBigbagUpdate(params, this.config);
  }
}
