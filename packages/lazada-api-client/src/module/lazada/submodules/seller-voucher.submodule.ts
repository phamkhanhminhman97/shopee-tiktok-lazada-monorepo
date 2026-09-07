import { LazadaConfig } from '../dto/request/config.request';
import {
  sellerVoucheDeleteSelectedProductSKU,
  sellerVoucherActivate,
  sellerVoucherAddSelectedProductSKU,
  sellerVoucherCreate,
  sellerVoucherDeactivate,
  sellerVoucherDetailQuery,
  sellerVoucherList,
  sellerVoucherSelectedProductList,
  sellerVoucherUpdate,
} from '../api/seller-voucher.api';
import {
  SellerVoucherSellerVoucheDeleteSelectedProductSKURequest,
  SellerVoucherSellerVoucherActivateRequest,
  SellerVoucherSellerVoucherAddSelectedProductSKURequest,
  SellerVoucherSellerVoucherCreateRequest,
  SellerVoucherSellerVoucherDeactivateRequest,
  SellerVoucherSellerVoucherDetailQueryRequest,
  SellerVoucherSellerVoucherListRequest,
  SellerVoucherSellerVoucherSelectedProductListRequest,
  SellerVoucherSellerVoucherUpdateRequest,
} from '../dto/request/seller-voucher.request';
import {
  SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse,
  SellerVoucherSellerVoucherActivateResponse,
  SellerVoucherSellerVoucherAddSelectedProductSKUResponse,
  SellerVoucherSellerVoucherCreateResponse,
  SellerVoucherSellerVoucherDeactivateResponse,
  SellerVoucherSellerVoucherDetailQueryResponse,
  SellerVoucherSellerVoucherListResponse,
  SellerVoucherSellerVoucherSelectedProductListResponse,
  SellerVoucherSellerVoucherUpdateResponse,
} from '../dto/response/seller-voucher.response';

/**
 * Lazada `seller-voucher-api` API namespace.
 *
 * Access via `lazada.sellerVoucher.<method>()` on a `LazadaModule` instance.
 */
export class LazadaSellerVoucher {
  constructor(private config: LazadaConfig) {}

  async sellerVoucherDetailQuery(params: SellerVoucherSellerVoucherDetailQueryRequest): Promise<SellerVoucherSellerVoucherDetailQueryResponse> {
    return await sellerVoucherDetailQuery(params, this.config);
  }

  async sellerVoucherSelectedProductList(params: SellerVoucherSellerVoucherSelectedProductListRequest): Promise<SellerVoucherSellerVoucherSelectedProductListResponse> {
    return await sellerVoucherSelectedProductList(params, this.config);
  }

  async sellerVoucherList(params: SellerVoucherSellerVoucherListRequest): Promise<SellerVoucherSellerVoucherListResponse> {
    return await sellerVoucherList(params, this.config);
  }

  async sellerVoucherActivate(params: SellerVoucherSellerVoucherActivateRequest): Promise<SellerVoucherSellerVoucherActivateResponse> {
    return await sellerVoucherActivate(params, this.config);
  }

  async sellerVoucherCreate(params: SellerVoucherSellerVoucherCreateRequest): Promise<SellerVoucherSellerVoucherCreateResponse> {
    return await sellerVoucherCreate(params, this.config);
  }

  async sellerVoucherDeactivate(params: SellerVoucherSellerVoucherDeactivateRequest): Promise<SellerVoucherSellerVoucherDeactivateResponse> {
    return await sellerVoucherDeactivate(params, this.config);
  }

  async sellerVoucherAddSelectedProductSKU(params: SellerVoucherSellerVoucherAddSelectedProductSKURequest): Promise<SellerVoucherSellerVoucherAddSelectedProductSKUResponse> {
    return await sellerVoucherAddSelectedProductSKU(params, this.config);
  }

  async sellerVoucheDeleteSelectedProductSKU(params: SellerVoucherSellerVoucheDeleteSelectedProductSKURequest): Promise<SellerVoucherSellerVoucheDeleteSelectedProductSKUResponse> {
    return await sellerVoucheDeleteSelectedProductSKU(params, this.config);
  }

  async sellerVoucherUpdate(params: SellerVoucherSellerVoucherUpdateRequest): Promise<SellerVoucherSellerVoucherUpdateResponse> {
    return await sellerVoucherUpdate(params, this.config);
  }
}
