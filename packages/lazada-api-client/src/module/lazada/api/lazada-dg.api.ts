import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  DgDigitalInsuranceTestNotificationCopyRequest,
  DgDigitalServiceCdkCodeReceivedRequest,
  DgDigitalTestInstallServiceCallBackRequest,
  DgInstallServiceCallBackForTestRequest,
  DgInstallServiceCallBackRequest,
  DgInuranceNoticationRequest,
  DgInuranceNotifyLapseRequest,
} from '../dto/request/lazada-dg.request';
import {
  DgDigitalInsuranceTestNotificationCopyResponse,
  DgDigitalServiceCdkCodeReceivedResponse,
  DgDigitalTestInstallServiceCallBackResponse,
  DgInstallServiceCallBackForTestResponse,
  DgInstallServiceCallBackResponse,
  DgInuranceNoticationResponse,
  DgInuranceNotifyLapseResponse,
} from '../dto/response/lazada-dg.response';

/**
 * InstallServiceCallBack via Lazada `POST /digital/install/servicecallback`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function installServiceCallBack(params: DgInstallServiceCallBackRequest, config: LazadaConfig): Promise<DgInstallServiceCallBackResponse> {
  return LazadaHelper.callLazadaApi<DgInstallServiceCallBackResponse>('/digital/install/servicecallback', 'POST', params as unknown as Record<string, unknown>, config, 'installServiceCallBack');
}

/**
 * InstallServiceCallBackForTest via Lazada `POST /digital/install/test/servicecallback`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function installServiceCallBackForTest(params: DgInstallServiceCallBackForTestRequest, config: LazadaConfig): Promise<DgInstallServiceCallBackForTestResponse> {
  return LazadaHelper.callLazadaApi<DgInstallServiceCallBackForTestResponse>('/digital/install/test/servicecallback', 'POST', params as unknown as Record<string, unknown>, config, 'installServiceCallBackForTest');
}

/**
 * InuranceNotication via Lazada `POST /digital/insurance/notification`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function inuranceNotication(params: DgInuranceNoticationRequest, config: LazadaConfig): Promise<DgInuranceNoticationResponse> {
  return LazadaHelper.callLazadaApi<DgInuranceNoticationResponse>('/digital/insurance/notification', 'POST', params as unknown as Record<string, unknown>, config, 'inuranceNotication');
}

/**
 * InuranceNotifyLapse via Lazada `POST /digital/insurance/notificationlapse`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function inuranceNotifyLapse(params: DgInuranceNotifyLapseRequest, config: LazadaConfig): Promise<DgInuranceNotifyLapseResponse> {
  return LazadaHelper.callLazadaApi<DgInuranceNotifyLapseResponse>('/digital/insurance/notificationlapse', 'POST', params as unknown as Record<string, unknown>, config, 'inuranceNotifyLapse');
}

/**
 * digitalServiceCdkCodeReceived via Lazada `POST /digital/service/cdkCodeReceived`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalServiceCdkCodeReceived(params: DgDigitalServiceCdkCodeReceivedRequest, config: LazadaConfig): Promise<DgDigitalServiceCdkCodeReceivedResponse> {
  return LazadaHelper.callLazadaApi<DgDigitalServiceCdkCodeReceivedResponse>('/digital/service/cdkCodeReceived', 'POST', params as unknown as Record<string, unknown>, config, 'digitalServiceCdkCodeReceived');
}

/**
 * InstallServiceCallBack (test path) via Lazada `POST /digital/test/install/servicecallback`.
 *
 * Distinct from `installServiceCallBackForTest()` (`/digital/install/test/servicecallback`).
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalTestInstallServiceCallBack(params: DgDigitalTestInstallServiceCallBackRequest, config: LazadaConfig): Promise<DgDigitalTestInstallServiceCallBackResponse> {
  return LazadaHelper.callLazadaApi<DgDigitalTestInstallServiceCallBackResponse>('/digital/test/install/servicecallback', 'POST', params as unknown as Record<string, unknown>, config, 'digitalTestInstallServiceCallBack');
}

/**
 * InuranceNotication (test path) via Lazada `POST /digital/insurance/test/notificationcopy`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function digitalInsuranceTestNotificationCopy(params: DgDigitalInsuranceTestNotificationCopyRequest, config: LazadaConfig): Promise<DgDigitalInsuranceTestNotificationCopyResponse> {
  return LazadaHelper.callLazadaApi<DgDigitalInsuranceTestNotificationCopyResponse>('/digital/insurance/test/notificationcopy', 'POST', params as unknown as Record<string, unknown>, config, 'digitalInsuranceTestNotificationCopy');
}
