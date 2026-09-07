import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * queryBuyboxHuntingInfo via Lazada `GET /hunting/buybox/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryBuyboxHuntingInfo(params: SellerQueryBuyboxHuntingInfoRequest, config: LazadaConfig): Promise<SellerQueryBuyboxHuntingInfoResponse> {
  return LazadaHelper.callLazadaApi<SellerQueryBuyboxHuntingInfoResponse>('/hunting/buybox/get', 'GET', params as unknown as Record<string, unknown>, config, 'queryBuyboxHuntingInfo');
}

/**
 * GetPickUpStoreList via Lazada `GET /rc/store/list/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getPickUpStoreList(config: LazadaConfig): Promise<SellerGetPickUpStoreListResponse> {
  return LazadaHelper.callLazadaApi<SellerGetPickUpStoreListResponse>('/rc/store/list/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getPickUpStoreList');
}

/**
 * QueryWarehouseDetailInfoBySellerId via Lazada `GET /rc/warehouse/detail/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function queryWarehouseDetailInfoBySellerId(config: LazadaConfig): Promise<SellerQueryWarehouseDetailInfoBySellerIdResponse> {
  return LazadaHelper.callLazadaApi<SellerQueryWarehouseDetailInfoBySellerIdResponse>('/rc/warehouse/detail/get', 'GET', {} as unknown as Record<string, unknown>, config, 'queryWarehouseDetailInfoBySellerId');
}

/**
 * GetWarehouseBySellerId via Lazada `GET /rc/warehouse/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getWarehouseBySellerId(config: LazadaConfig): Promise<SellerGetWarehouseBySellerIdResponse> {
  return LazadaHelper.callLazadaApi<SellerGetWarehouseBySellerIdResponse>('/rc/warehouse/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getWarehouseBySellerId');
}

/**
 * getCountryInfo via Lazada `GET /seller/cb/country/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCountryInfo(params: SellerGetCountryInfoRequest, config: LazadaConfig): Promise<SellerGetCountryInfoResponse> {
  return LazadaHelper.callLazadaApi<SellerGetCountryInfoResponse>('/seller/cb/country/get', 'GET', params as unknown as Record<string, unknown>, config, 'getCountryInfo');
}

/**
 * getSubAddress via Lazada `GET /seller/cb/country/location/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSubAddress(params: SellerGetSubAddressRequest, config: LazadaConfig): Promise<SellerGetSubAddressResponse> {
  return LazadaHelper.callLazadaApi<SellerGetSubAddressResponse>('/seller/cb/country/location/get', 'GET', params as unknown as Record<string, unknown>, config, 'getSubAddress');
}

/**
 * getSellerRegisterInfo via Lazada `GET /seller/cb/register/info`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSellerRegisterInfo(params: SellerGetSellerRegisterInfoRequest, config: LazadaConfig): Promise<SellerGetSellerRegisterInfoResponse> {
  return LazadaHelper.callLazadaApi<SellerGetSellerRegisterInfoResponse>('/seller/cb/register/info', 'GET', params as unknown as Record<string, unknown>, config, 'getSellerRegisterInfo');
}

/**
 * GetSeller via Lazada `GET /seller/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSeller(config: LazadaConfig): Promise<SellerGetSellerResponse> {
  return LazadaHelper.callLazadaApi<SellerGetSellerResponse>('/seller/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getSeller');
}

/**
 * GetSellerMetricsById via Lazada `GET /seller/metrics/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSellerMetricsById(config: LazadaConfig): Promise<SellerGetSellerMetricsByIdResponse> {
  return LazadaHelper.callLazadaApi<SellerGetSellerMetricsByIdResponse>('/seller/metrics/get', 'GET', {} as unknown as Record<string, unknown>, config, 'getSellerMetricsById');
}

/**
 * GetSellerPerformance via Lazada `GET /seller/performance/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getSellerPerformance(params: SellerGetSellerPerformanceRequest, config: LazadaConfig): Promise<SellerGetSellerPerformanceResponse> {
  return LazadaHelper.callLazadaApi<SellerGetSellerPerformanceResponse>('/seller/performance/get', 'GET', params as unknown as Record<string, unknown>, config, 'getSellerPerformance');
}

/**
 * SellerPolicyFetch via Lazada `GET /seller/policy/fetch`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerPolicyFetch(params: SellerSellerPolicyFetchRequest, config: LazadaConfig): Promise<SellerSellerPolicyFetchResponse> {
  return LazadaHelper.callLazadaApi<SellerSellerPolicyFetchResponse>('/seller/policy/fetch', 'GET', params as unknown as Record<string, unknown>, config, 'sellerPolicyFetch');
}

/**
 * saveSellerWarehouseInfo via Lazada `POST /rc/sellerWarehouse/saveWarehouseInfo`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function saveSellerWarehouseInfo(params: SellerSaveSellerWarehouseInfoRequest, config: LazadaConfig): Promise<SellerSaveSellerWarehouseInfoResponse> {
  return LazadaHelper.callLazadaApi<SellerSaveSellerWarehouseInfoResponse>('/rc/sellerWarehouse/saveWarehouseInfo', 'POST', params as unknown as Record<string, unknown>, config, 'saveSellerWarehouseInfo');
}

/**
 * SynchronizeSellerItemArConfig via Lazada `POST /seller/ar/config/syn`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function synchronizeSellerItemArConfig(params: SellerSynchronizeSellerItemArConfigRequest, config: LazadaConfig): Promise<SellerSynchronizeSellerItemArConfigResponse> {
  return LazadaHelper.callLazadaApi<SellerSynchronizeSellerItemArConfigResponse>('/seller/ar/config/syn', 'POST', params as unknown as Record<string, unknown>, config, 'synchronizeSellerItemArConfig');
}

/**
 * paymentBinding via Lazada `POST /seller/cb/payment/config`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function paymentBinding(params: SellerPaymentBindingRequest, config: LazadaConfig): Promise<SellerPaymentBindingResponse> {
  return LazadaHelper.callLazadaApi<SellerPaymentBindingResponse>('/seller/cb/payment/config', 'POST', params as unknown as Record<string, unknown>, config, 'paymentBinding');
}

/**
 * sellerFieldVerify via Lazada `POST /seller/cb/register/fieldcheck`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerFieldVerify(params: SellerSellerFieldVerifyRequest, config: LazadaConfig): Promise<SellerSellerFieldVerifyResponse> {
  return LazadaHelper.callLazadaApi<SellerSellerFieldVerifyResponse>('/seller/cb/register/fieldcheck', 'POST', params as unknown as Record<string, unknown>, config, 'sellerFieldVerify');
}

/**
 * SellerCenterMsgList via Lazada `POST /sellercenter/msg/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sellerCenterMsgList(params: SellerSellerCenterMsgListRequest, config: LazadaConfig): Promise<SellerSellerCenterMsgListResponse> {
  return LazadaHelper.callLazadaApi<SellerSellerCenterMsgListResponse>('/sellercenter/msg/list', 'POST', params as unknown as Record<string, unknown>, config, 'sellerCenterMsgList');
}

/**
 * BatchQueryFollowStatus via Lazada `POST /shop/follow/status/batch/query`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function batchQueryFollowStatus(params: SellerBatchQueryFollowStatusRequest, config: LazadaConfig): Promise<SellerBatchQueryFollowStatusResponse> {
  return LazadaHelper.callLazadaApi<SellerBatchQueryFollowStatusResponse>('/shop/follow/status/batch/query', 'POST', params as unknown as Record<string, unknown>, config, 'batchQueryFollowStatus');
}
