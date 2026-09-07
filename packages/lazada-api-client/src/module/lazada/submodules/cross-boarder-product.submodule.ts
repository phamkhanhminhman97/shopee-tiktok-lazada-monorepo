import { LazadaConfig } from '../dto/request/config.request';
import {
  createGlobalProduct,
  deleteMerchantProduct,
  getGlobalProductExtension,
  getGlobalProductStatus,
  getRecommendPrice,
  getUnfilledAttribute,
  getUpgradableGlobalPlusProductList,
  semiProductUpdate,
  semiProductUpgrade,
  updateGlobalProductAttribute,
  updateProductStatus,
} from '../api/cross-boarder-product.api';
import {
  CrossBoarderProductCreateGlobalProductRequest,
  CrossBoarderProductDeleteMerchantProductRequest,
  CrossBoarderProductGetGlobalProductExtensionRequest,
  CrossBoarderProductGetGlobalProductStatusRequest,
  CrossBoarderProductGetRecommendPriceRequest,
  CrossBoarderProductGetUnfilledAttributeRequest,
  CrossBoarderProductGetUpgradableGlobalPlusProductListRequest,
  CrossBoarderProductSemiProductUpdateRequest,
  CrossBoarderProductSemiProductUpgradeRequest,
  CrossBoarderProductUpdateGlobalProductAttributeRequest,
  CrossBoarderProductUpdateProductStatusRequest,
} from '../dto/request/cross-boarder-product.request';
import {
  CrossBoarderProductCreateGlobalProductResponse,
  CrossBoarderProductDeleteMerchantProductResponse,
  CrossBoarderProductGetGlobalProductExtensionResponse,
  CrossBoarderProductGetGlobalProductStatusResponse,
  CrossBoarderProductGetRecommendPriceResponse,
  CrossBoarderProductGetUnfilledAttributeResponse,
  CrossBoarderProductGetUpgradableGlobalPlusProductListResponse,
  CrossBoarderProductSemiProductUpdateResponse,
  CrossBoarderProductSemiProductUpgradeResponse,
  CrossBoarderProductUpdateGlobalProductAttributeResponse,
  CrossBoarderProductUpdateProductStatusResponse,
} from '../dto/response/cross-boarder-product.response';

/**
 * Lazada `cross-boarder-product-api` API namespace.
 *
 * Access via `lazada.crossBoarderProduct.<method>()` on a `LazadaModule` instance.
 */
export class LazadaCrossBoarderProduct {
  constructor(private config: LazadaConfig) {}

  async getGlobalProductExtension(params: CrossBoarderProductGetGlobalProductExtensionRequest): Promise<CrossBoarderProductGetGlobalProductExtensionResponse> {
    return await getGlobalProductExtension(params, this.config);
  }

  async getUpgradableGlobalPlusProductList(params: CrossBoarderProductGetUpgradableGlobalPlusProductListRequest): Promise<CrossBoarderProductGetUpgradableGlobalPlusProductListResponse> {
    return await getUpgradableGlobalPlusProductList(params, this.config);
  }

  async getRecommendPrice(params: CrossBoarderProductGetRecommendPriceRequest): Promise<CrossBoarderProductGetRecommendPriceResponse> {
    return await getRecommendPrice(params, this.config);
  }

  async getGlobalProductStatus(params: CrossBoarderProductGetGlobalProductStatusRequest): Promise<CrossBoarderProductGetGlobalProductStatusResponse> {
    return await getGlobalProductStatus(params, this.config);
  }

  async getUnfilledAttribute(params: CrossBoarderProductGetUnfilledAttributeRequest): Promise<CrossBoarderProductGetUnfilledAttributeResponse> {
    return await getUnfilledAttribute(params, this.config);
  }

  async updateGlobalProductAttribute(params: CrossBoarderProductUpdateGlobalProductAttributeRequest): Promise<CrossBoarderProductUpdateGlobalProductAttributeResponse> {
    return await updateGlobalProductAttribute(params, this.config);
  }

  async createGlobalProduct(params: CrossBoarderProductCreateGlobalProductRequest): Promise<CrossBoarderProductCreateGlobalProductResponse> {
    return await createGlobalProduct(params, this.config);
  }

  async deleteMerchantProduct(params: CrossBoarderProductDeleteMerchantProductRequest): Promise<CrossBoarderProductDeleteMerchantProductResponse> {
    return await deleteMerchantProduct(params, this.config);
  }

  async semiProductUpdate(params: CrossBoarderProductSemiProductUpdateRequest): Promise<CrossBoarderProductSemiProductUpdateResponse> {
    return await semiProductUpdate(params, this.config);
  }

  async semiProductUpgrade(params: CrossBoarderProductSemiProductUpgradeRequest): Promise<CrossBoarderProductSemiProductUpgradeResponse> {
    return await semiProductUpgrade(params, this.config);
  }

  async updateProductStatus(params: CrossBoarderProductUpdateProductStatusRequest): Promise<CrossBoarderProductUpdateProductStatusResponse> {
    return await updateProductStatus(params, this.config);
  }
}
