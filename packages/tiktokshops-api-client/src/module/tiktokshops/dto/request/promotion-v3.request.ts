export type TiktokActivityType = 'FIXED_PRICE' | 'DIRECT_DISCOUNT' | 'FLASHSALE' | 'SHIPPING_DISCOUNT' | 'BUY_MORE_SAVE_MORE';

export type TiktokCreateActivityBody = {
    title: string;
    activity_type: TiktokActivityType;
    product_level: TiktokProductLevel;
    begin_time: number;
    end_time: number;
    participation_limit: {
        type: TiktokParticipationLimitType;
    }[];
    duration_type?: TiktokDurationType;
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
                specific_areas?: string[];
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

export type TiktokDurationType = 'NORMAL' | 'INDEFINITE';

export type TiktokParticipationLimitType = 'BUYER_NO_LIMIT' | 'BUYER_LIMIT_ONLY_ONE';

export type TiktokProductLevel = 'PRODUCT' | 'VARIATION' | 'SHOP';

export type TiktokRemoveActivityProductBody = {
    product_ids: string[];
    sku_ids: string[];
};

export type TiktokRemoveActivityProductInput = {
    activity_id: string;
    body: TiktokRemoveActivityProductBody;
};

export type TiktokSearchActivityBody = {
    status?: 'DRAFT' | 'NOT_START' | 'ONGOING' | 'EXPIRED' | 'DEACTIVATED' | 'NOT_EFFECTIVE';
    activity_title?: string;
    page_size?: number;
    page_token?: string;
    activity_type?: TiktokActivityType;
};

export type TiktokSearchCouponBody = {
    status: ('NOT_START' | 'ONGOING' | 'EXPIRED' | 'DEACTIVATED')[];
    title_keyword: string;
    display_type: ('REGULAR' | 'LIVE' | 'CREATOR_EXCLUSIVE' | 'CHAT' | 'PROMO_CODE')[];
};

export type TiktokUpdateActivityBody = TiktokCreateActivityBody & {
    activity_id: string;
};

export type TiktokUpdateActivityProductBody = {
    activity_id: string;
    products: {
        id: string;
        quantity_per_user: number;
        quantity_limit: number;
        activity_price_amount?: string;
        discount?: string;
        skus?: {
            id: string;
            quantity_per_user: number;
            quantity_limit: number;
            activity_price_amount?: string;
            discount?: string;
        }[];
    }[];
};
