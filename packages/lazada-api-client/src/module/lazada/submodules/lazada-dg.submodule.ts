import { LazadaConfig } from '../dto/request/config.request';
import {
  digitalInsuranceTestNotificationCopy,
  digitalServiceCdkCodeReceived,
  digitalTestInstallServiceCallBack,
  installServiceCallBack,
  installServiceCallBackForTest,
  inuranceNotication,
  inuranceNotifyLapse,
} from '../api/lazada-dg.api';
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
 * Lazada `lazada-dg-api` API namespace.
 *
 * Access via `lazada.dg.<method>()` on a `LazadaModule` instance.
 */
export class LazadaDg {
  constructor(private config: LazadaConfig) {}

  async installServiceCallBack(params: DgInstallServiceCallBackRequest): Promise<DgInstallServiceCallBackResponse> {
    return await installServiceCallBack(params, this.config);
  }

  async installServiceCallBackForTest(params: DgInstallServiceCallBackForTestRequest): Promise<DgInstallServiceCallBackForTestResponse> {
    return await installServiceCallBackForTest(params, this.config);
  }

  async inuranceNotication(params: DgInuranceNoticationRequest): Promise<DgInuranceNoticationResponse> {
    return await inuranceNotication(params, this.config);
  }

  async inuranceNotifyLapse(params: DgInuranceNotifyLapseRequest): Promise<DgInuranceNotifyLapseResponse> {
    return await inuranceNotifyLapse(params, this.config);
  }

  async digitalServiceCdkCodeReceived(params: DgDigitalServiceCdkCodeReceivedRequest): Promise<DgDigitalServiceCdkCodeReceivedResponse> {
    return await digitalServiceCdkCodeReceived(params, this.config);
  }

  async digitalTestInstallServiceCallBack(params: DgDigitalTestInstallServiceCallBackRequest): Promise<DgDigitalTestInstallServiceCallBackResponse> {
    return await digitalTestInstallServiceCallBack(params, this.config);
  }

  async digitalInsuranceTestNotificationCopy(params: DgDigitalInsuranceTestNotificationCopyRequest): Promise<DgDigitalInsuranceTestNotificationCopyResponse> {
    return await digitalInsuranceTestNotificationCopy(params, this.config);
  }
}
