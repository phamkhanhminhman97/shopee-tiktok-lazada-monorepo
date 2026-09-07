import {
  TiktokSplittableGroups,
} from '../response/fulfillment-v3.response';

export type TiktokCombinablePackageBody = {
    combinable_packages: {
        id: string;
        order_ids: string[];
    }[];
};

export type TiktokCreateFirstMileBundleBody = {
    order_ids: string[];
    handover_method: 'PICKUP' | 'DROP_OFF';
    shipping_provider_id?: string;
    tracking_number?: string;
    phone_tail_number?: string;
};

export type TiktokCreatePackageBody = {
    order_id: string;
    order_line_item_ids?: string[];
    weight?: {
        value: string;
        unit: 'GRAM' | 'POUND';
    };
    shipping_service_id?: string;
    dimension?: {
        length: string;
        width: string;
        height: string;
        unit: 'CM' | 'INCH';
    };
};

export type TiktokGetEligibleShippingServiceBody = {
    order_line_item_ids: string[];
    weight?: {
        value: string;
        unit: string;
    };
    dimension?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
};

export type TiktokGetEligibleShippingServiceInput = {
    order_id: string;
    body: TiktokGetEligibleShippingServiceBody;
};

export type TiktokGetOrderSplitAttributesQuery = {
    order_ids: string[];
};

export type TiktokSearchCombinablePackagesQuery = {
    page_size: number;
    page_token?: string;
};

export type TiktokSearchPackageBody = {
    create_time_ge?: number;
    create_time_lt?: number;
    update_time_ge?: number;
    update_time_lt?: number;
    package_status?: 'PROCESSING' | 'FULFILLING' | 'COMPLETED' | 'CANCELLED';
};

export type TiktokSearchPackageInput = {
    query: TiktokSearchPackageQuery;
    body?: TiktokSearchPackageBody;
};

export type TiktokSearchPackageQuery = {
    page_size: number;
    sort_field?: 'create_time' | 'update_time' | 'order_pay_time';
    sort_order?: 'ASC' | 'DESC';
    page_token?: string;
};

export type TiktokSplitOrdersQuery = {
    order_id: string;
    body: {
        splittable_groups: TiktokSplittableGroups[];
    };
};

export type TiktokUncombinePackagesBody = {
    package_id: string;
    body: {
        order_ids: string[];
    };
};
