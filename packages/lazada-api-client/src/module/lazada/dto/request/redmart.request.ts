export interface RedmartRssGetPickupLocationsRequest {
  storeId: number;
  page: number;
  pageSize: number;
}

export interface RedmartRssGetProductRequest {
  storeId: number;
  productId: number;
}

export interface RedmartRssGetProductsRequest {
  storeId: number;
  pickupLocationIds?: number[];
  page: number;
  pageSize: number;
}

export interface RedmartRssGetStockLotRequest {
  storeId: number;
  pickupLocationId: number;
  productId: number;
  stockLotId: string;
}

export interface RedmartRssGetStockLotsRequest {
  storeId: number;
  pickupLocationId: number;
  productId: number;
}

export interface RedmartRssGetOnePickupJobRequest {
  storeId: number;
  pickupJobId: number;
}

export interface RedmartRssGetPickupJobsRequest {
  storeId: number;
  from: number;
  till: number;
  statuses?: string;
}

export interface RedmartRssUpdateStockLotStockLotUpdateDTO {
  quantityAtPickupLocation: number;
}

export interface RedmartRssUpdateStockLotRequest {
  storeId: number;
  pickupLocationId: number;
  productId: number;
  stockLotId: string;
  stockLotUpdateDTO: RedmartRssUpdateStockLotStockLotUpdateDTO;
}
