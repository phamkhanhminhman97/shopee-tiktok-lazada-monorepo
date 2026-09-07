import {
  TiktokExternalOrder,
  TiktokExternalOrderLineItem,
  TiktokExternalOrderReference,
} from '../response/order-v3.response';

export interface TiktokAddExternalOrderReferencesBody extends Record<string, unknown> {
    orders: TiktokExternalOrderReference[];
}

export type TiktokExternalPlatform = 'SHOPIFY' | 'WOOCOMMERCE' | 'MAGENTO' | 'OTHERS';

export interface TiktokGetExternalOrderReferencesParams extends Record<string, unknown> {
    order_id: string;
    query: {
        platform: string;
    };
}

export interface TiktokGetOrderDetailParams extends Record<string, unknown> {
    ids: string[];
}

export interface TiktokGetOrderListBody extends Record<string, unknown> {
    order_status?: 'UNPAID' | 'ON_HOLD' | 'AWAITING_SHIPMENT' | 'PARTIALLY_SHIPPING' | 'AWAITING_COLLECTION' | 'IN_TRANSIT' | 'DELIVERED' | 'COMPLETED' | 'CANCELLED';
    create_time_ge?: number;
    create_time_lt?: number;
    update_time_ge?: number;
    update_time_lt?: string;
    shipping_type?: string | 'TIKTOK' | 'SELLER';
    buyer_user_id?: string;
    is_buyer_request_cancel?: boolean;
    warehouse_ids?: string[];
}

export type TiktokGetOrderListParams = {
    query: {
        page_size: number;
        sort_order?: string;
        page_token?: string;
        sort_field?: string;
    };
    body: TiktokGetOrderListBody;
};

export interface TiktokGetPriceDetailParams extends Record<string, unknown> {
    order_id: string;
}

export type TiktokSearchOrderByExternalOrderReferenceQuery = {
    platform: TiktokExternalPlatform;
    external_order_id: string;
};
