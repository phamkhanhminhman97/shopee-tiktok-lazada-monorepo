import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * RssGetPickupLocations via Lazada `GET /rss/pickupLocations/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetPickupLocations(params: RedmartRssGetPickupLocationsRequest, config: LazadaConfig): Promise<RedmartRssGetPickupLocationsResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetPickupLocationsResponse>('/rss/pickupLocations/get', 'GET', params as unknown as Record<string, unknown>, config, 'rssGetPickupLocations');
}

/**
 * RssGetProduct via Lazada `GET /rss/product/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetProduct(params: RedmartRssGetProductRequest, config: LazadaConfig): Promise<RedmartRssGetProductResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetProductResponse>('/rss/product/get', 'GET', params as unknown as Record<string, unknown>, config, 'rssGetProduct');
}

/**
 * RssGetProducts via Lazada `GET /rss/products/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetProducts(params: RedmartRssGetProductsRequest, config: LazadaConfig): Promise<RedmartRssGetProductsResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetProductsResponse>('/rss/products/get', 'GET', params as unknown as Record<string, unknown>, config, 'rssGetProducts');
}

/**
 * RssGetStockLot via Lazada `GET /rss/stockLot/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetStockLot(params: RedmartRssGetStockLotRequest, config: LazadaConfig): Promise<RedmartRssGetStockLotResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetStockLotResponse>('/rss/stockLot/get', 'GET', params as unknown as Record<string, unknown>, config, 'rssGetStockLot');
}

/**
 * RssGetStockLots via Lazada `GET /rss/stockLots/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetStockLots(params: RedmartRssGetStockLotsRequest, config: LazadaConfig): Promise<RedmartRssGetStockLotsResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetStockLotsResponse>('/rss/stockLots/get', 'GET', params as unknown as Record<string, unknown>, config, 'rssGetStockLots');
}

/**
 * RssGetOnePickupJob via Lazada `POST /rss/pickup-job/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetOnePickupJob(params: RedmartRssGetOnePickupJobRequest, config: LazadaConfig): Promise<RedmartRssGetOnePickupJobResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetOnePickupJobResponse>('/rss/pickup-job/get', 'POST', params as unknown as Record<string, unknown>, config, 'rssGetOnePickupJob');
}

/**
 * RssGetPickupJobs via Lazada `POST /rss/pickup-jobs/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssGetPickupJobs(params: RedmartRssGetPickupJobsRequest, config: LazadaConfig): Promise<RedmartRssGetPickupJobsResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssGetPickupJobsResponse>('/rss/pickup-jobs/get', 'POST', params as unknown as Record<string, unknown>, config, 'rssGetPickupJobs');
}

/**
 * RssUpdateStockLot via Lazada `POST /rss/stockLot/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function rssUpdateStockLot(params: RedmartRssUpdateStockLotRequest, config: LazadaConfig): Promise<RedmartRssUpdateStockLotResponse> {
  return LazadaHelper.callLazadaApi<RedmartRssUpdateStockLotResponse>('/rss/stockLot/update', 'POST', params as unknown as Record<string, unknown>, config, 'rssUpdateStockLot');
}
