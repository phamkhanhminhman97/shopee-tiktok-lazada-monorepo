export interface TiktokAuthorizedShop {
    cipher: string;
    code: string;
    id: string;
    name: string;
    region: string;
    seller_type: string;
}

export interface TiktokAuthorizedShopList {
    shop_id: string;
    region: string;
    authorize_time: number;
}

export interface TiktokAuthorizedShopsResponse {
    shops: TiktokAuthorizedShop[];
}

export interface TiktokCategoryAsset {
    cipher: string;
    target_market: string;
    category: {
        id: number;
        name: string;
    };
}

export interface TiktokCategoryAssetsResponse {
    category_assets: TiktokCategoryAsset[];
}

export interface TiktokGetAuthorizedShopListParams {
    page_size?: number;
    page_number?: number;
}

export interface TiktokGetAuthorizedShopListResponse {
    total: number;
    shop_list: TiktokAuthorizedShopList[];
}
