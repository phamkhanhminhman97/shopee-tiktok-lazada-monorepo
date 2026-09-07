import { LazadaConfig } from '../dto/request/config.request';
import {
  batchQueryFollowStatus,
  getCountryInfo,
  getPickUpStoreList,
  getSeller,
  getSellerMetricsById,
  getSellerPerformance,
  getSellerRegisterInfo,
  getSubAddress,
  getWarehouseBySellerId,
  paymentBinding,
  queryBuyboxHuntingInfo,
  queryWarehouseDetailInfoBySellerId,
  saveSellerWarehouseInfo,
  sellerCenterMsgList,
  sellerFieldVerify,
  sellerPolicyFetch,
  synchronizeSellerItemArConfig,
} from '../api/seller.api';
import {
  SellerBatchQueryFollowStatusRequest,
  SellerGetCountryInfoRequest,
  SellerGetPickUpStoreListRequest,
  SellerGetSellerMetricsByIdRequest,
  SellerGetSellerPerformanceRequest,
  SellerGetSellerRegisterInfoRequest,
  SellerGetSellerRequest,
  SellerGetSubAddressRequest,
  SellerGetWarehouseBySellerIdRequest,
  SellerPaymentBindingRequest,
  SellerQueryBuyboxHuntingInfoRequest,
  SellerQueryWarehouseDetailInfoBySellerIdRequest,
  SellerSaveSellerWarehouseInfoRequest,
  SellerSellerCenterMsgListRequest,
  SellerSellerFieldVerifyRequest,
  SellerSellerPolicyFetchRequest,
  SellerSynchronizeSellerItemArConfigRequest,
} from '../dto/request/seller.request';
import {
  SellerBatchQueryFollowStatusResponse,
  SellerGetCountryInfoResponse,
  SellerGetPickUpStoreListResponse,
  SellerGetSellerMetricsByIdResponse,
  SellerGetSellerPerformanceResponse,
  SellerGetSellerRegisterInfoResponse,
  SellerGetSellerResponse,
  SellerGetSubAddressResponse,
  SellerGetWarehouseBySellerIdResponse,
  SellerPaymentBindingResponse,
  SellerQueryBuyboxHuntingInfoResponse,
  SellerQueryWarehouseDetailInfoBySellerIdResponse,
  SellerSaveSellerWarehouseInfoResponse,
  SellerSellerCenterMsgListResponse,
  SellerSellerFieldVerifyResponse,
  SellerSellerPolicyFetchResponse,
  SellerSynchronizeSellerItemArConfigResponse,
} from '../dto/response/seller.response';

/**
 * Lazada `seller-api` API namespace.
 *
 * Access via `lazada.seller.<method>()` on a `LazadaModule` instance.
 */
export class LazadaSeller {
  constructor(private config: LazadaConfig) {}

  async queryBuyboxHuntingInfo(params: SellerQueryBuyboxHuntingInfoRequest): Promise<SellerQueryBuyboxHuntingInfoResponse> {
    return await queryBuyboxHuntingInfo(params, this.config);
  }

  async getPickUpStoreList(): Promise<SellerGetPickUpStoreListResponse> {
    return await getPickUpStoreList(this.config);
  }

  async queryWarehouseDetailInfoBySellerId(): Promise<SellerQueryWarehouseDetailInfoBySellerIdResponse> {
    return await queryWarehouseDetailInfoBySellerId(this.config);
  }

  async getWarehouseBySellerId(): Promise<SellerGetWarehouseBySellerIdResponse> {
    return await getWarehouseBySellerId(this.config);
  }

  async getCountryInfo(params: SellerGetCountryInfoRequest): Promise<SellerGetCountryInfoResponse> {
    return await getCountryInfo(params, this.config);
  }

  async getSubAddress(params: SellerGetSubAddressRequest): Promise<SellerGetSubAddressResponse> {
    return await getSubAddress(params, this.config);
  }

  async getSellerRegisterInfo(params: SellerGetSellerRegisterInfoRequest): Promise<SellerGetSellerRegisterInfoResponse> {
    return await getSellerRegisterInfo(params, this.config);
  }

  async getSeller(): Promise<SellerGetSellerResponse> {
    return await getSeller(this.config);
  }

  async getSellerMetricsById(): Promise<SellerGetSellerMetricsByIdResponse> {
    return await getSellerMetricsById(this.config);
  }

  async getSellerPerformance(params: SellerGetSellerPerformanceRequest): Promise<SellerGetSellerPerformanceResponse> {
    return await getSellerPerformance(params, this.config);
  }

  async sellerPolicyFetch(params: SellerSellerPolicyFetchRequest): Promise<SellerSellerPolicyFetchResponse> {
    return await sellerPolicyFetch(params, this.config);
  }

  async saveSellerWarehouseInfo(params: SellerSaveSellerWarehouseInfoRequest): Promise<SellerSaveSellerWarehouseInfoResponse> {
    return await saveSellerWarehouseInfo(params, this.config);
  }

  async synchronizeSellerItemArConfig(params: SellerSynchronizeSellerItemArConfigRequest): Promise<SellerSynchronizeSellerItemArConfigResponse> {
    return await synchronizeSellerItemArConfig(params, this.config);
  }

  async paymentBinding(params: SellerPaymentBindingRequest): Promise<SellerPaymentBindingResponse> {
    return await paymentBinding(params, this.config);
  }

  async sellerFieldVerify(params: SellerSellerFieldVerifyRequest): Promise<SellerSellerFieldVerifyResponse> {
    return await sellerFieldVerify(params, this.config);
  }

  async sellerCenterMsgList(params: SellerSellerCenterMsgListRequest): Promise<SellerSellerCenterMsgListResponse> {
    return await sellerCenterMsgList(params, this.config);
  }

  async batchQueryFollowStatus(params: SellerBatchQueryFollowStatusRequest): Promise<SellerBatchQueryFollowStatusResponse> {
    return await batchQueryFollowStatus(params, this.config);
  }
}
