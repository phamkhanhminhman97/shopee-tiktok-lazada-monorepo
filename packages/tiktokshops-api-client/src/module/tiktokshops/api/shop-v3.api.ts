import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokAuthorizedShopsResponse,
  TiktokCategoryAssetsResponse,
} from '../dto/response/shop-v3.response';

/**
 * Retrieve a list of shops authorized for the current app and access token.
 * Requires a valid `x-tts-access-token` header to be set.
 *
 * @returns A promise resolving to a list of authorized shop details.
 */
export async function getAuthorizedShops(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokAuthorizedShopsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokAuthorizedShopsResponse>>(
    '/authorization/202309/shops',
    'GET',
    {},
    config,
    'getAuthorizedShops',
  );
}

/**
 * Retrieve a list of available category assets for the authorized shops.
 * These assets are used to guide content or listing decisions within each shop.
 *
 * @returns A promise resolving to the category assets data.
 */
export async function getCategoryAssets(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCategoryAssetsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCategoryAssetsResponse>>(
    '/authorization/202405/category_assets',
    'GET',
    {},
    config,
    'getCategoryAssets',
  );
}
