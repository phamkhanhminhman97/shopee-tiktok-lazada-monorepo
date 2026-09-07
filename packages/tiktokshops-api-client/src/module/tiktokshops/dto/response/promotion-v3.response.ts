export type TiktokActivity = {
    id?: string;
    title?: string;
    activity_type?: string;
    duration_type?: string;
    begin_time?: number;
    end_time?: number;
    status?: string;
    create_time?: number;
    update_time?: number;
    product_level?: string;
    activity_commands?: string;
    participation_limit?: {
        type?: string;
    }[];
    discount?: {
        shipping_discount?: {
            threshold_type?: string;
            threshold_value?: string;
            type?: string;
            value?: string;
            shipping_method?: string;
            inventory_type?: string;
            area_scope?: {
                type?: string;
                specific_areas?: string;
            };
        };
        bmsm_discount?: {
            details?: {
                tier?: number;
                threshold_type?: string;
                threshold_value?: string;
                type?: string;
                value?: string;
            }[];
        };
    };
};

export type TiktokCreateActivityResponse = {
    activity_id?: string;
    create_time?: string;
    update_time?: string;
    status?: string;
};

export type TiktokDeactivateActivityResponse = {
    activity_id?: string;
    title?: string;
    status?: string;
    update_time?: number;
};

export type TiktokGetActivityResponse = {
    activity_id?: string;
    title?: string;
    activity_type?: string;
    duration_type?: string;
    begin_time?: number;
    end_time?: number;
    participation_limit?: {
        type?: string;
    }[];
    products?: {
        id?: string;
        activity_price?: {
            amount?: string;
            currency?: string;
        };
        quantity_limit?: number;
        quantity_per_user?: number;
        discount?: string;
        skus?: {
            id?: string;
            discount?: string;
            quantity_limit?: number;
            quantity_per_user?: number;
            activity_price?: {
                amount?: string;
                currency?: string;
            };
        }[];
    }[];
    status?: string;
    create_time?: number;
    update_time?: number;
    product_level?: string;
    activity_commands?: string;
    discount?: {
        shipping_discount?: {
            threshold_type?: string;
            threshold_value?: string;
            type?: string;
            value?: string;
            shipping_method?: string;
            inventory_type?: string;
            area_scope?: {
                type?: string;
                specific_areas?: string;
            };
        };
        bmsm_discount?: {
            details?: {
                tier?: number;
                threshold_type?: string;
                threshold_value?: string;
                type?: string;
                value?: string;
            }[];
        };
    };
};

export type TiktokGetCouponResponse = {
    coupon?: {
        id?: string;
        title?: string;
        display_type?: string;
        status?: string;
        create_time?: number;
        update_time?: number;
        claim_duration?: {
            start_time?: number;
            end_time?: number;
        };
        redemption_duration?: {
            type?: string;
            start_time?: number;
            end_time?: number;
            relative_time?: number;
        };
        display_channels?: string[];
        promo_code?: string;
        target_buyer_segment?: string;
        usage_limits?: {
            single_buyer_claim_limit?: number;
            total_claim_limit?: number;
            redemption_limit?: number;
        };
        usage_stats?: {
            claimed_count?: number;
            redeemed_count?: number;
        };
        discount?: {
            type?: string;
            reduction_amount?: {
                amount?: string;
                currency?: string;
            };
            percentage?: string;
            max_discount?: {
                amount?: string;
                currency?: string;
            };
        };
        threshold?: {
            type?: string;
            min_spend?: {
                amount?: string;
                currency?: string;
            };
        };
        product_scope?: string;
        product_ids?: string[];
        seller_tnc?: string;
        creation_source?: string;
        live_tasks?: {
            type?: string;
            min_watch_time?: string;
        }[];
    };
};

export type TiktokRemoveActivityProductResponse = {
    activity_id?: string;
    status?: string;
    update_time?: number;
};

export type TiktokSearchActivityResponse = {
    total_count?: number;
    next_page_token?: string;
    activities?: TiktokActivity[];
};

export type TiktokSearchCouponResponse = {
    total_count?: number;
    next_page_token?: string;
    coupons?: {
        id?: string;
        title?: string;
        display_type?: string;
        status?: string;
        create_time?: number;
        update_time?: number;
        claim_duration?: {
            start_time?: number;
            end_time?: number;
        };
        redemption_duration?: {
            type?: string;
            start_time?: number;
            end_time?: number;
            relative_time?: number;
        };
        promo_code?: string;
        target_buyer_segment?: string;
        usage_limits?: {
            single_buyer_claim_limit?: number;
            total_claim_limit?: number;
            redemption_limit?: number;
        };
        discount?: {
            type?: string;
            reduction_amount?: {
                amount?: string;
                currency?: string;
            };
            percentage?: string;
            max_discount?: {
                amount?: string;
                currency?: string;
            };
        };
        threshold?: {
            type?: string;
            min_spend?: {
                amount?: string;
                currency?: string;
            };
        };
        product_scope?: string;
        creation_source?: string;
    }[];
};

export type TiktokUpdateActivityProductResponse = {
    activity_id?: string;
    title?: string;
    update_time?: number;
    status?: string;
    total_count?: number;
};

export interface TiktokUpdateActivityResponse {
    activity_id: string;
    title: string;
    update_time: number;
}
