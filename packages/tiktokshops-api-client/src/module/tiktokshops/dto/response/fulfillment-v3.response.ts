export type TiktokCombinePackageResponse = {
    packages?: Array<{
        id?: string;
        order_ids?: string[];
    }>;
    errors?: Array<{
        code?: number;
        message?: string;
        detail?: {
            package_id?: string;
        };
    }>;
};

export type TiktokCreateFirstMileBundleResponse = {
    first_mile_bundle_id?: string;
    url?: string;
    errors?: {
        code?: number;
        message?: string;
        detail?: {
            order_id?: string;
        };
    }[];
};

export type TiktokCreatePackagesResponse = {
    order_id: string;
    order_line_item_ids: string[];
    dimension: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    shipping_service_info: {
        id: string;
        name: string;
        price: string;
        currency: string;
        earliest_delivery_days: number;
        latest_delivery_days: number;
        shipping_provider_id: string;
        shipping_provider_name: string;
    };
    package_id: string;
    weight: {
        value: string;
        unit: string;
    };
    create_time: number;
};

export type TiktokGetEligibleShippingServiceResponse = {
    order_id: string;
    order_line_id: string[];
    weight: {
        value: string;
        unit: 'GRAM' | 'POUND';
    };
    shipping_services: {
        id: string;
        name: string;
        price: string;
        currency: string;
        earliest_delivery_days: number;
        latest_delivery_days: number;
        is_default: boolean;
        shipping_provider_name: string;
        shipping_provider_id: string;
    }[];
    dimension: {
        length: string;
        width: string;
        height: string;
        unit: 'INCH' | 'CM' | 'MM';
    };
};

export type TiktokGetOrderSplitAttributesResponse = {
    split_attributes: {
        order_id: string;
        can_split: boolean;
        reason: string;
        must_split: boolean;
        must_split_reasons: {
            type: string;
            category_id: string;
            max_count: string;
        }[];
    }[];
};

export type TiktokGetPackageHandoverTimeSlotsResponse = {
    can_pickup?: boolean;
    can_drop_off?: boolean;
    can_van_collection?: boolean;
    drop_off_point_url?: string;
    pickup_slots?: Array<{
        start_time?: number;
        end_time?: number;
        avaliable?: boolean;
    }>;
};

export type TiktokSearchCombinablePackagesResponse = {
    combinable_packages?: Array<{
        id?: string;
        order_ids?: string[];
    }>;
    next_page_token?: string;
    total_count?: number;
};

export type TiktokSearchPackageResponse = {
    next_page_token?: string;
    total_count?: number;
    packages?: {
        id?: string;
        orders?: {
            id?: string;
            skus?: {
                id?: string;
                name?: string;
                image_url?: string;
                quantity?: number;
            }[];
        }[];
        create_time?: number;
        update_time?: number;
        status?: string;
        tracking_number?: string;
        shipping_provider_name?: string;
        shipping_provider_id?: string;
        order_line_item_ids?: string[];
    }[];
};

export type TiktokSplittableGroups = {
    id: string;
    order_line_item_ids: string[];
};

export type TiktokSplittableGroupsResponse = {
    packages?: TiktokSplittableGroups[];
};

export type TiktokUncombinePackagesResponse = {
    packages?: Array<{
        id?: string;
        order_ids?: string[];
    }>;
};
