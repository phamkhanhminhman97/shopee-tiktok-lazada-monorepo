export interface TiktokDeliveryOption {
    id?: string;
    name?: string;
    type?: 'STANDARD' | 'EXPRESS' | string;
    description?: string;
    dimension_limit?: TiktokDimensionLimit;
    weight_limit?: TiktokWeightLimit;
    platform?: ('TOKOPEDIA' | 'TIKTOK_SHOP' | string)[];
}

export type TiktokDeliveryOptions = TiktokDeliveryOption[];

export interface TiktokDimensionLimit {
    max_height: number;
    max_length: number;
    max_width: number;
    unit: 'INCH' | 'CM' | string;
}

export interface TiktokGeolocation {
    latitude: string;
    longitude: string;
}

export interface TiktokGetGlobalSellerWarehousesResponse {
    global_warehouses: TiktokGlobalSellerWarehouse[];
}

export interface TiktokGetShippingProvidersResponse {
    shipping_providers: TiktokShippingProviders[];
}

export interface TiktokGetWarehousesDeliveryOptionsResponse {
    delivery_options: TiktokDeliveryOption[];
}

export type TiktokGetWarehousesResponse = {
    warehouses: TiktokWarehouse[];
};

export interface TiktokGlobalSellerWarehouse {
    id?: string;
    name?: string;
    ownership?: string;
}

export interface TiktokShippingProviders {
    id: string;
    name: string;
}

export interface TiktokWarehouse {
    id?: string;
    name?: string;
    effect_status?: string;
    type?: 'SALES_WAREHOUSE' | string;
    sub_type?: 'DOMESTIC_WAREHOUSE' | string;
    is_default?: boolean;
    address?: TiktokWarehouseAddress;
}

export interface TiktokWarehouseAddress {
    region: string;
    state: string;
    city: string;
    distict: string;
    town: string;
    contact_person: string;
    first_name: string;
    last_name: string;
    first_name_local_script: string;
    last_name_local_script: string;
    postal_code: string;
    full_address: string;
    region_code: string;
    phone_number: string;
    address_line1: string;
    address_line2: string;
    address_line3: string;
    address_line4: string;
    geolocation: TiktokGeolocation;
}

export interface TiktokWeightLimit {
    max_weight: number;
    min_weight: number;
    unit: 'GRAM' | 'KG' | string;
}
