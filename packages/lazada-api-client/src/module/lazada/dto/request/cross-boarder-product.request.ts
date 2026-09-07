export interface CrossBoarderProductGetGlobalProductExtensionRequest {
  global_item_ids?: number[];
  item_ids?: number[];
  country?: string;
}

export interface CrossBoarderProductGetUpgradableGlobalPlusProductListRequest {
  type: string;
  country?: string;
  pageNo: string;
  pageSize: string;
  currentIndex: string;
  itemIds?: number[];
}

export interface CrossBoarderProductGetRecommendPriceRequest {
  payload: Record<string, unknown>;
}

export interface CrossBoarderProductGetGlobalProductStatusRequest {
  params: Record<string, unknown>;
}

export interface CrossBoarderProductGetUnfilledAttributeRequest {
  offset: number;
  limit: number;
  attributeTag: string;
}

export interface CrossBoarderProductUpdateGlobalProductAttributeRequest {
  payload: Record<string, unknown>;
}

export interface CrossBoarderProductCreateGlobalProductRequest {
  payload: Record<string, unknown>;
}

export interface CrossBoarderProductDeleteMerchantProductRequest {
  type: string;
  country?: string;
  product_id: number;
}

export interface CrossBoarderProductSemiProductUpdateRequest {
  payload: string;
}

export interface CrossBoarderProductSemiProductUpgradeRequest {
  payload: Record<string, unknown>;
}

export interface CrossBoarderProductUpdateProductStatusRequest {
  type: string;
  country?: string;
  product_id: number;
  status: string;
}
