import { LazadaConfig } from '../dto/request/config.request';
import {
  freeShippingActivate,
  freeShippingAddSelectedProductSKU,
  freeShippingCreate,
  freeShippingDeactivate,
  freeShippingDeleteSelectedProductSKU,
  freeShippingDeliveryOptionsQuery,
  freeShippingGet,
  freeShippingList,
  freeShippingRegionsQuery,
  freeShippingSelectedProductList,
  freeShippingUpdate,
} from '../api/free-shipping.api';
import {
  FreeShippingFreeShippingActivateRequest,
  FreeShippingFreeShippingAddSelectedProductSKURequest,
  FreeShippingFreeShippingCreateRequest,
  FreeShippingFreeShippingDeactivateRequest,
  FreeShippingFreeShippingDeleteSelectedProductSKURequest,
  FreeShippingFreeShippingDeliveryOptionsQueryRequest,
  FreeShippingFreeShippingGetRequest,
  FreeShippingFreeShippingListRequest,
  FreeShippingFreeShippingRegionsQueryRequest,
  FreeShippingFreeShippingSelectedProductListRequest,
  FreeShippingFreeShippingUpdateRequest,
} from '../dto/request/free-shipping.request';
import {
  FreeShippingFreeShippingActivateResponse,
  FreeShippingFreeShippingAddSelectedProductSKUResponse,
  FreeShippingFreeShippingCreateResponse,
  FreeShippingFreeShippingDeactivateResponse,
  FreeShippingFreeShippingDeleteSelectedProductSKUResponse,
  FreeShippingFreeShippingDeliveryOptionsQueryResponse,
  FreeShippingFreeShippingGetResponse,
  FreeShippingFreeShippingListResponse,
  FreeShippingFreeShippingRegionsQueryResponse,
  FreeShippingFreeShippingSelectedProductListResponse,
  FreeShippingFreeShippingUpdateResponse,
} from '../dto/response/free-shipping.response';

/**
 * Lazada `free-shipping-api` API namespace.
 *
 * Access via `lazada.freeShipping.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFreeShipping {
  constructor(private config: LazadaConfig) {}

  async freeShippingDeliveryOptionsQuery(): Promise<FreeShippingFreeShippingDeliveryOptionsQueryResponse> {
    return await freeShippingDeliveryOptionsQuery(this.config);
  }

  async freeShippingGet(params: FreeShippingFreeShippingGetRequest): Promise<FreeShippingFreeShippingGetResponse> {
    return await freeShippingGet(params, this.config);
  }

  async freeShippingSelectedProductList(params: FreeShippingFreeShippingSelectedProductListRequest): Promise<FreeShippingFreeShippingSelectedProductListResponse> {
    return await freeShippingSelectedProductList(params, this.config);
  }

  async freeShippingRegionsQuery(): Promise<FreeShippingFreeShippingRegionsQueryResponse> {
    return await freeShippingRegionsQuery(this.config);
  }

  async freeShippingList(params: FreeShippingFreeShippingListRequest): Promise<FreeShippingFreeShippingListResponse> {
    return await freeShippingList(params, this.config);
  }

  async freeShippingActivate(params: FreeShippingFreeShippingActivateRequest): Promise<FreeShippingFreeShippingActivateResponse> {
    return await freeShippingActivate(params, this.config);
  }

  async freeShippingCreate(params: FreeShippingFreeShippingCreateRequest): Promise<FreeShippingFreeShippingCreateResponse> {
    return await freeShippingCreate(params, this.config);
  }

  async freeShippingDeactivate(params: FreeShippingFreeShippingDeactivateRequest): Promise<FreeShippingFreeShippingDeactivateResponse> {
    return await freeShippingDeactivate(params, this.config);
  }

  async freeShippingAddSelectedProductSKU(params: FreeShippingFreeShippingAddSelectedProductSKURequest): Promise<FreeShippingFreeShippingAddSelectedProductSKUResponse> {
    return await freeShippingAddSelectedProductSKU(params, this.config);
  }

  async freeShippingDeleteSelectedProductSKU(params: FreeShippingFreeShippingDeleteSelectedProductSKURequest): Promise<FreeShippingFreeShippingDeleteSelectedProductSKUResponse> {
    return await freeShippingDeleteSelectedProductSKU(params, this.config);
  }

  async freeShippingUpdate(params: FreeShippingFreeShippingUpdateRequest): Promise<FreeShippingFreeShippingUpdateResponse> {
    return await freeShippingUpdate(params, this.config);
  }
}
