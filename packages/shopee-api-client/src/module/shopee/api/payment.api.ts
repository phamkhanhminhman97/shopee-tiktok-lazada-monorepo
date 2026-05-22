import { SHOPEE_END_POINT, SHOPEE_PATH } from '../common/constant';
import { ShopeeConfig } from '../dto/request/config.request';
import * as ShopeeHelper from '../common/helper';
import { ShopeeResponseEscrowDetail } from '../dto/response/payment.response';

/**
 * Get escrow detail
 * @param orderSn Shopee order serial number
 * @param config ShopeeConfig
 * @returns ShopeeResponseEscrowDetail
 */
export async function getEscrowDetail(orderSn: string, config: ShopeeConfig): Promise<ShopeeResponseEscrowDetail> {
  const timestamp = ShopeeHelper.getTimestampNow();
  const signature = ShopeeHelper.signRequest(SHOPEE_PATH.GET_ESCROW, config, timestamp);

  const additionalParams = {
    order_sn: orderSn,
  };

  const commonParam = ShopeeHelper.buildCommonParams(config, signature, timestamp, additionalParams);
  const url = `${SHOPEE_END_POINT}${SHOPEE_PATH.GET_ESCROW}${commonParam}`;

  const res: any = await ShopeeHelper.httpGet(url, config);

  if (res?.error) {
    throw new Error(`[Shopee API Error - getEscrowDetail] ${res.error}: ${res.message}`);
  }

  return res;
}
