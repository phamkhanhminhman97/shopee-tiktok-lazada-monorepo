export interface TiktokSellerPermissionsResponse {
    permissions: string[];
}

export interface TiktokSellerShop {
    id: string;
    region: string;
    [key: string]: unknown;
}

export interface TiktokSellerShopsResponse {
    shops: TiktokSellerShop[];
}
