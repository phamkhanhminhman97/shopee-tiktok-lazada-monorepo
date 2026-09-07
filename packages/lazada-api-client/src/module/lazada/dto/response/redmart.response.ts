export interface RedmartRssGetPickupLocationsResult {
  data?: Record<string, unknown>[];
  page?: number;
  pageSize?: number;
  total?: number;
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetPickupLocations {
  result?: RedmartRssGetPickupLocationsResult;
}

export type RedmartRssGetPickupLocationsResponse = RedmartRssGetPickupLocations;

export interface RedmartRssGetProductResult {
  data?: Record<string, unknown>;
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetProduct {
  result?: RedmartRssGetProductResult;
}

export type RedmartRssGetProductResponse = RedmartRssGetProduct;

export interface RedmartRssGetProductsResult {
  data?: Record<string, unknown>[];
  page?: number;
  pageSize?: number;
  total?: number;
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetProducts {
  result?: RedmartRssGetProductsResult;
}

export type RedmartRssGetProductsResponse = RedmartRssGetProducts;

export interface RedmartRssGetStockLotResult {
  data?: Record<string, unknown>;
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetStockLot {
  result?: RedmartRssGetStockLotResult;
}

export type RedmartRssGetStockLotResponse = RedmartRssGetStockLot;

export interface RedmartRssGetStockLotsResult {
  data?: Record<string, unknown>[];
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetStockLots {
  result?: RedmartRssGetStockLotsResult;
}

export type RedmartRssGetStockLotsResponse = RedmartRssGetStockLots;

export interface RedmartRssGetOnePickupJobResult {
  data?: Record<string, unknown>;
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetOnePickupJob {
  result?: RedmartRssGetOnePickupJobResult;
}

export type RedmartRssGetOnePickupJobResponse = RedmartRssGetOnePickupJob;

export interface RedmartRssGetPickupJobsResult {
  data?: Record<string, unknown>[];
  success?: boolean;
  errorMessage?: string;
}

export interface RedmartRssGetPickupJobs {
  result?: RedmartRssGetPickupJobsResult;
}

export type RedmartRssGetPickupJobsResponse = RedmartRssGetPickupJobs;

export interface RedmartRssUpdateStockLotResult {
  success?: boolean;
  errorMessage?: string;
  data?: Record<string, unknown>;
}

export interface RedmartRssUpdateStockLot {
  result?: RedmartRssUpdateStockLotResult;
}

export type RedmartRssUpdateStockLotResponse = RedmartRssUpdateStockLot;
