import { ShopeeConfig } from '../dto/request/config.request';
import {
  addVoucher,
  deleteVoucher,
  endVoucher,
  getVoucher,
  getVoucherList,
  updateVoucher,
} from '../api/voucher.api';
import {
  ShopeeAddVoucherRequest,
  ShopeeDeleteVoucherRequest,
  ShopeeEndVoucherRequest,
  ShopeeGetVoucherRequest,
  ShopeeGetVoucherListRequest,
  ShopeeUpdateVoucherRequest,
} from '../dto/request/voucher.request';
import {
  ShopeeAddVoucherResponse,
  ShopeeDeleteVoucherResponse,
  ShopeeEndVoucherResponse,
  ShopeeGetVoucherResponse,
  ShopeeGetVoucherListResponse,
  ShopeeUpdateVoucherResponse,
} from '../dto/response/voucher.response';

/**
 * Shopee `v2.voucher.*` API namespace.
 *
 * Access via `shopee.voucher.<method>()` on a `ShopeeModule` instance.
 */
export class ShopeeVoucher {
  constructor(private config: ShopeeConfig) {}

  async addVoucher(params: ShopeeAddVoucherRequest): Promise<ShopeeAddVoucherResponse> {
    return await addVoucher(params, this.config);
  }

  async deleteVoucher(params: ShopeeDeleteVoucherRequest): Promise<ShopeeDeleteVoucherResponse> {
    return await deleteVoucher(params, this.config);
  }

  async endVoucher(params: ShopeeEndVoucherRequest): Promise<ShopeeEndVoucherResponse> {
    return await endVoucher(params, this.config);
  }

  async getVoucher(params: ShopeeGetVoucherRequest): Promise<ShopeeGetVoucherResponse> {
    return await getVoucher(params, this.config);
  }

  async getVoucherList(params: ShopeeGetVoucherListRequest): Promise<ShopeeGetVoucherListResponse> {
    return await getVoucherList(params, this.config);
  }

  async updateVoucher(params: ShopeeUpdateVoucherRequest): Promise<ShopeeUpdateVoucherResponse> {
    return await updateVoucher(params, this.config);
  }
}
