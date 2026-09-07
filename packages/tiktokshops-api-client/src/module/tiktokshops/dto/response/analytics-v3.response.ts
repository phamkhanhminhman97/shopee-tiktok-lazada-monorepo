export type TiktokGetShopPerformanceResponse = {
    performance?: {
        intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdowns?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            sku_orders?: number;
            orders?: number;
            avg_order_value?: {
                amount?: string;
                currency?: string;
            };
            units_sold?: number;
            buyers?: number;
            buyer_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            product_impressions?: number;
            product_impression_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            product_page_views?: number;
            product_page_view_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            avg_product_page_visitors?: number;
            avg_product_page_visitor_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            refunds?: {
                amount?: string;
                currency?: string;
            };
            cancellations_and_returns?: number;
        }[];
        comparison_intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdowns?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            sku_orders?: number;
            orders?: number;
            avg_order_value?: {
                amount?: string;
                currency?: string;
            };
            units_sold?: number;
            buyers?: number;
            buyer_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            product_impressions?: number;
            product_impression_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            product_page_views?: number;
            product_page_view_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            avg_product_page_visitors?: number;
            avg_product_page_visitor_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            refunds?: {
                amount?: string;
                currency?: string;
            };
            cancellations_and_returns?: number;
        }[];
    };
    latest_available_date?: string;
};

export type TiktokGetShopProductPerformanceListResponse = {
    products?: {
        id?: string;
        gmv?: {
            amount?: string;
            currency?: string;
        };
        orders?: number;
        units_sold?: number;
        click_through_rate?: string;
    }[];
    next_page_token?: string;
    total_count?: number;
    latest_available_date?: string;
};

export type TiktokGetShopProductPerformanceResponse = {
    performance?: {
        intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdowns?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            orders?: number;
            units_sold?: number;
            unit_sold_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            impressions?: number;
            impression_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            page_views?: number;
            page_view_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            avg_page_visitors?: number;
            avg_page_visitor_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            click_through_rate?: string;
            click_through_rate_breakdowns?: {
                amount?: string;
                type?: string;
            }[];
        }[];
        comparison_intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdowns?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            orders?: number;
            units_sold?: number;
            unit_sold_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            impressions?: number;
            impression_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            page_views?: number;
            page_view_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            avg_page_visitors?: number;
            avg_page_visitor_breakdowns?: {
                amount?: number;
                type?: string;
            }[];
            click_through_rate?: string;
            click_through_rate_breakdowns?: {
                amount?: string;
                type?: string;
            }[];
        }[];
    };
    latest_available_date?: string;
};

export type TiktokGetShopSKUPerformanceListResponse = {
    skus?: {
        id?: number;
        product_id?: number;
        gmv?: {
            amount?: string;
            currency?: string;
        };
        sku_orders?: number;
        units_sold?: number;
    }[];
    next_page_token?: string;
    total_count?: number;
    latest_available_date?: string;
};

export type TiktokGetShopSKUPerformanceParamsResponse = {
    latest_available_date?: string;
    performance?: {
        product_id?: number;
        intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdown?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            units_sold?: number;
            units_sold_breakdown?: {
                amount?: number;
                type?: string;
            }[];
            sku_orders?: number;
        }[];
        comparison_intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            gmv_breakdown?: {
                amount?: string;
                currency?: string;
                type?: string;
            }[];
            units_sold?: number;
            units_sold_breakdown?: {
                amount?: number;
                type?: string;
            }[];
            sku_orders?: number;
        }[];
    };
};

export type TiktokGetShopVideoPerformanceDetailsResponse = {
    performance?: {
        intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            click_through_rate?: string;
            daily_avg_buyers?: string;
            views?: number;
        }[];
        comparison_intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            click_through_rate?: string;
            daily_avg_buyers?: string;
            views?: number;
        }[];
        video_post_time?: string;
    };
    engagement_data?: {
        total_likes?: number;
        total_shares?: number;
        total_comments?: number;
        total_views?: number;
    };
    latest_available_date?: string;
};

export type TiktokGetShopVideoPerformanceListResponse = {
    videos?: {
        id?: string;
        title?: string;
        username?: string;
        gmv?: {
            amount?: string;
            currency?: string;
        };
        sku_orders?: number;
        units_sold?: number;
        views?: number;
        click_through_rate?: string;
        products?: {
            id?: string;
            name?: string;
        }[];
        video_post_time?: string;
    }[];
    latest_available_date?: string;
    next_page_token?: string;
    total_count?: number;
};

export type TiktokGetShopVideoPerformanceOverviewResponse = {
    performance?: {
        intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            click_through_rate?: string;
            sku_orders?: number;
            units_sold?: number;
        }[];
        comparison_intervals?: {
            start_date?: string;
            end_date?: string;
            gmv?: {
                amount?: string;
                currency?: string;
            };
            click_through_rate?: string;
            sku_orders?: number;
            units_sold?: number;
        }[];
    };
    latest_available_date?: string;
};

export type TiktokGetShopVideoProductPerformanceListResponse = {
    products?: {
        id?: string;
        name?: string;
        gmv?: {
            amount?: string;
            currency?: string;
        };
        units_sold?: number;
        daily_avg_buyers?: string;
    }[];
    latest_available_date?: string;
    next_page_token?: string;
    total_count?: number;
};
