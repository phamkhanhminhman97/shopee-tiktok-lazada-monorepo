import { LazadaConfig } from '../dto/request/config.request';
import {
  rssGetOnePickupJob,
  rssGetPickupJobs,
  rssGetPickupLocations,
  rssGetProduct,
  rssGetProducts,
  rssGetStockLot,
  rssGetStockLots,
  rssUpdateStockLot,
} from '../api/redmart.api';
import {
  RedmartRssGetOnePickupJobRequest,
  RedmartRssGetPickupJobsRequest,
  RedmartRssGetPickupLocationsRequest,
  RedmartRssGetProductRequest,
  RedmartRssGetProductsRequest,
  RedmartRssGetStockLotRequest,
  RedmartRssGetStockLotsRequest,
  RedmartRssUpdateStockLotRequest,
} from '../dto/request/redmart.request';
import {
  RedmartRssGetOnePickupJobResponse,
  RedmartRssGetPickupJobsResponse,
  RedmartRssGetPickupLocationsResponse,
  RedmartRssGetProductResponse,
  RedmartRssGetProductsResponse,
  RedmartRssGetStockLotResponse,
  RedmartRssGetStockLotsResponse,
  RedmartRssUpdateStockLotResponse,
} from '../dto/response/redmart.response';

/**
 * Lazada `redmart-api` API namespace.
 *
 * Access via `lazada.redmart.<method>()` on a `LazadaModule` instance.
 */
export class LazadaRedmart {
  constructor(private config: LazadaConfig) {}

  async rssGetPickupLocations(params: RedmartRssGetPickupLocationsRequest): Promise<RedmartRssGetPickupLocationsResponse> {
    return await rssGetPickupLocations(params, this.config);
  }

  async rssGetProduct(params: RedmartRssGetProductRequest): Promise<RedmartRssGetProductResponse> {
    return await rssGetProduct(params, this.config);
  }

  async rssGetProducts(params: RedmartRssGetProductsRequest): Promise<RedmartRssGetProductsResponse> {
    return await rssGetProducts(params, this.config);
  }

  async rssGetStockLot(params: RedmartRssGetStockLotRequest): Promise<RedmartRssGetStockLotResponse> {
    return await rssGetStockLot(params, this.config);
  }

  async rssGetStockLots(params: RedmartRssGetStockLotsRequest): Promise<RedmartRssGetStockLotsResponse> {
    return await rssGetStockLots(params, this.config);
  }

  async rssGetOnePickupJob(params: RedmartRssGetOnePickupJobRequest): Promise<RedmartRssGetOnePickupJobResponse> {
    return await rssGetOnePickupJob(params, this.config);
  }

  async rssGetPickupJobs(params: RedmartRssGetPickupJobsRequest): Promise<RedmartRssGetPickupJobsResponse> {
    return await rssGetPickupJobs(params, this.config);
  }

  async rssUpdateStockLot(params: RedmartRssUpdateStockLotRequest): Promise<RedmartRssUpdateStockLotResponse> {
    return await rssUpdateStockLot(params, this.config);
  }
}
