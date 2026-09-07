export type TiktokGetShopPerformanceQuery = {
    start_date_ge: string;
    end_date_lt: string;
    with_comparison?: boolean;
    granularity?: string | 'ALL' | '1D';
    currency?: string | 'USD' | 'LOCAL';
};

export type TiktokGetShopProductPerformanceListQuery = {
    start_date_ge: string;
    end_date_lt: string;
    page_size?: number;
    sort_field?: 'gmv' | 'order_count' | 'unit_sold_count' | 'click_through_rate';
    sort_order?: 'ASC' | 'DESC';
    currency?: 'USD' | 'LOCAL';
    page_token?: string;
};

export type TiktokGetShopProductPerformanceParams = {
    product_id: string;
    query: TiktokGetShopPerformanceQuery;
};

export type TiktokGetShopSKUPerformanceListQuery = {
    start_date_ge: string;
    end_date_lt: string;
    page_size?: number;
    sort_field?: 'gmv' | 'sku_orders' | 'units_sold';
    sort_order?: 'DESC' | 'ASC';
    page_token?: string;
    product_id?: string;
    currency?: 'USD' | 'LOCAL';
};

export type TiktokGetShopSKUPerformanceParams = {
    sku_id: string;
    query: TiktokGetShopPerformanceQuery;
};

export type TiktokGetShopVideoPerformanceDetailsParams = {
    video_id: string;
    query: TiktokGetShopVideoPerformanceDetailsQuery;
};

export type TiktokGetShopVideoPerformanceDetailsQuery = {
    start_date_ge: string;
    end_date_lt: string;
    with_comparison?: boolean;
    granularity?: 'ALL' | '1D';
    currency?: 'USD' | 'LOCAL';
};

export type TiktokGetShopVideoPerformanceListQuery = {
    start_date_ge: string;
    end_date_lt: string;
    page_size?: number;
    sort_field?: 'gmv' | 'sku_orders' | 'units_sold' | 'views' | 'click_through_rate';
    sort_order?: 'ASC' | 'DESC';
    currency?: 'USD' | 'LOCAL';
    page_token?: string;
    account_type?: 'ALL' | 'LINKED_ACCOUNTS' | 'AFFILIATES';
};

export type TiktokGetShopVideoPerformanceOverviewQuery = {
    start_date_ge: string;
    end_date_lt: string;
    with_comparison?: boolean;
    granularity?: 'ALL' | '1D';
    currency?: 'USD' | 'LOCAL';
    account_type?: 'ALL' | 'LINKED_ACCOUNTS' | 'AFFILIATES';
};

export type TiktokGetShopVideoProductPerformanceListParams = {
    video_id: string;
    query: TiktokGetShopVideoProductPerformanceListQuery;
};

export type TiktokGetShopVideoProductPerformanceListQuery = {
    start_date_ge: string;
    end_date_lt: string;
    page_size?: number;
    sort_field?: 'gmv' | 'units_sold' | 'daily_avg_buyers';
    sort_order?: 'ASC' | 'DESC';
    currency?: 'USD' | 'LOCAL';
    page_token?: string;
};
