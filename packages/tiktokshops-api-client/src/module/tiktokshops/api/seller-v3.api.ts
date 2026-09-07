import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokSellerPermissionsResponse,
  TiktokSellerShopsResponse,
} from '../dto/response/seller-v3.response';

/**
 * Fetches a list of shops that are currently authorized for the application.
 * This endpoint requires a valid `x-tts-access-token` header, which must be included automatically by the SDK.
 *
 * API Endpoint: GET /seller/202309/shops
 *
 * @returns A Promise that resolves to TikTokAPIResponse containing SellerShopsResponse data,
 * including shop IDs, names, regions, and more.
 */
export async function getActiveShops(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerShopsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerShopsResponse>>(
    '/seller/202309/shops',
    'GET',
    {},
    config,
    'getActiveShops',
  );
}

/**
 * Retrieves the permission assets for each shop, which detail what categories and features
 * the seller is allowed to access or use within the TikTok Shop ecosystem.
 *
 * API Endpoint: GET /seller/202309/permissions
 *
 * This data can be used to validate whether a seller can publish products in a specific category,
 * or whether certain features are unlocked for a given shop.
 *
 * @returns A Promise that resolves to TikTokAPIResponse containing SellerPermissionsResponse data.
 */
export async function getSellerPermissions(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerPermissionsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerPermissionsResponse>>(
    '/seller/202309/permissions',
    'GET',
    {},
    config,
    'getSellerPermissions',
  );
}
