import { LazadaConfig } from '../dto/request/config.request';
import {
  batchDeliverJitPurchaseOrder,
  editChoiceSkuStock,
  getChoiceProductItem,
  getChoiceProducts,
  getChoiceSeller,
  getChoiceSkuItemRelationBySku,
  packageJitPurchaseOrder,
  printJitPurchaseOrderAndItem,
  printPickuoOrder,
  queryListJitPurchaseOrder,
  queryListPurchaseItem,
  queryPickupOrder,
} from '../api/choice-customized.api';
import {
  ChoiceCustomizedBatchDeliverJitPurchaseOrderRequest,
  ChoiceCustomizedEditChoiceSkuStockRequest,
  ChoiceCustomizedGetChoiceProductItemRequest,
  ChoiceCustomizedGetChoiceProductsRequest,
  ChoiceCustomizedGetChoiceSellerRequest,
  ChoiceCustomizedGetChoiceSkuItemRelationBySkuRequest,
  ChoiceCustomizedPackageJitPurchaseOrderRequest,
  ChoiceCustomizedPrintJitPurchaseOrderAndItemRequest,
  ChoiceCustomizedPrintPickuoOrderRequest,
  ChoiceCustomizedQueryListJitPurchaseOrderRequest,
  ChoiceCustomizedQueryListPurchaseItemRequest,
  ChoiceCustomizedQueryPickupOrderRequest,
} from '../dto/request/choice-customized.request';
import {
  ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse,
  ChoiceCustomizedEditChoiceSkuStockResponse,
  ChoiceCustomizedGetChoiceProductItemResponse,
  ChoiceCustomizedGetChoiceProductsResponse,
  ChoiceCustomizedGetChoiceSellerResponse,
  ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse,
  ChoiceCustomizedPackageJitPurchaseOrderResponse,
  ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse,
  ChoiceCustomizedPrintPickuoOrderResponse,
  ChoiceCustomizedQueryListJitPurchaseOrderResponse,
  ChoiceCustomizedQueryListPurchaseItemResponse,
  ChoiceCustomizedQueryPickupOrderResponse,
} from '../dto/response/choice-customized.response';

/**
 * Lazada `choice-customized-api` API namespace.
 *
 * Access via `lazada.choiceCustomized.<method>()` on a `LazadaModule` instance.
 */
export class LazadaChoiceCustomized {
  constructor(private config: LazadaConfig) {}

  async getChoiceProductItem(params: ChoiceCustomizedGetChoiceProductItemRequest): Promise<ChoiceCustomizedGetChoiceProductItemResponse> {
    return await getChoiceProductItem(params, this.config);
  }

  async getChoiceProducts(params: ChoiceCustomizedGetChoiceProductsRequest): Promise<ChoiceCustomizedGetChoiceProductsResponse> {
    return await getChoiceProducts(params, this.config);
  }

  async getChoiceSeller(params: ChoiceCustomizedGetChoiceSellerRequest): Promise<ChoiceCustomizedGetChoiceSellerResponse> {
    return await getChoiceSeller(params, this.config);
  }

  async getChoiceSkuItemRelationBySku(params: ChoiceCustomizedGetChoiceSkuItemRelationBySkuRequest): Promise<ChoiceCustomizedGetChoiceSkuItemRelationBySkuResponse> {
    return await getChoiceSkuItemRelationBySku(params, this.config);
  }

  async queryListJitPurchaseOrder(params: ChoiceCustomizedQueryListJitPurchaseOrderRequest): Promise<ChoiceCustomizedQueryListJitPurchaseOrderResponse> {
    return await queryListJitPurchaseOrder(params, this.config);
  }

  async queryListPurchaseItem(params: ChoiceCustomizedQueryListPurchaseItemRequest): Promise<ChoiceCustomizedQueryListPurchaseItemResponse> {
    return await queryListPurchaseItem(params, this.config);
  }

  async queryPickupOrder(params: ChoiceCustomizedQueryPickupOrderRequest): Promise<ChoiceCustomizedQueryPickupOrderResponse> {
    return await queryPickupOrder(params, this.config);
  }

  async editChoiceSkuStock(params: ChoiceCustomizedEditChoiceSkuStockRequest): Promise<ChoiceCustomizedEditChoiceSkuStockResponse> {
    return await editChoiceSkuStock(params, this.config);
  }

  async batchDeliverJitPurchaseOrder(params: ChoiceCustomizedBatchDeliverJitPurchaseOrderRequest): Promise<ChoiceCustomizedBatchDeliverJitPurchaseOrderResponse> {
    return await batchDeliverJitPurchaseOrder(params, this.config);
  }

  async packageJitPurchaseOrder(params: ChoiceCustomizedPackageJitPurchaseOrderRequest): Promise<ChoiceCustomizedPackageJitPurchaseOrderResponse> {
    return await packageJitPurchaseOrder(params, this.config);
  }

  async printJitPurchaseOrderAndItem(params: ChoiceCustomizedPrintJitPurchaseOrderAndItemRequest): Promise<ChoiceCustomizedPrintJitPurchaseOrderAndItemResponse> {
    return await printJitPurchaseOrderAndItem(params, this.config);
  }

  async printPickuoOrder(params: ChoiceCustomizedPrintPickuoOrderRequest): Promise<ChoiceCustomizedPrintPickuoOrderResponse> {
    return await printPickuoOrder(params, this.config);
  }
}
