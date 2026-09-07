import {
  TiktokCurrency,
  TiktokManufacturerDetails,
  TiktokPackageWeight,
  Tiktoklocale,
  Tiktokuse_case,
} from '../response/product-v3.response';

export type TiktokActivateProductInput = {
    product_ids: string[];
    listing_platforms?: TiktokPlatforms[];
};

export type TiktokAuditStatus = 'AUDITING' | 'REJECTED' | 'PASSED';

export type TiktokBrandFilterInput = {
    category_id?: string;
    is_authorized?: boolean;
    brand_name?: string;
    page_size: number;
    page_token?: string;
    category_version?: 'v1' | 'v2';
};

export type TiktokBrandInput = {
    name: string;
};

export interface TiktokCertificationItem {
    id?: string;
    images?: {
        uri: string;
    }[];
    files?: {
        id?: string;
        name?: string;
        format?: string;
    }[];
}

export type TiktokCheckProductListingBody = {
    category_id: string;
    description: string;
    main_images: {
        uri: string;
    }[];
    title: string;
    brand_id?: string;
    skus?: {
        sales_attributes: {
            id: string;
            name: string;
            value_id: string;
            value_name: string;
            sku_img: {
                uri: string;
            };
            supplementary_sku_images: {
                uri: string;
            }[];
        }[];
        seller_sku: string;
        price: {
            amount: string;
            currency: string;
        };
        external_sku_id: string;
        identifier_code: {
            code: string;
            type: string;
        };
        inventory: {
            warehouse_id: string;
            quantity: number;
        }[];
        combined_skus: {
            product_id: string;
            sku_id: string;
            sku_count: number;
        }[];
        sku_unit_count: string;
        external_urls: string[];
        extra_identifier_codes: string[];
        pre_sale: {
            type: string;
            fulfillment_type: {
                handling_duration_days: number;
                release_date: number;
            };
        };
        list_price: {
            amount: string;
            currency: string;
        };
        external_list_prices: {
            source: string;
            amount: string;
            currency: string;
        }[];
    }[];
    is_cod_allowed?: boolean;
    certifications?: {
        id: string;
        images: {
            uri: string;
        }[];
        files: {
            id: string;
            name: string;
            format: string;
        }[];
        expiration_date: number;
    }[];
    package_weight?: {
        value: string;
        unit: string;
    };
    product_attributes?: {
        id: string;
        values: {
            id: string;
            name: string;
        }[];
    }[];
    size_chart?: {
        image: {
            uri: string;
        };
        template: {
            id: string;
        };
    };
    package_dimensions?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    external_product_id?: string;
    delivery_option_ids?: string[];
    video?: {
        id: string;
    };
    primary_combined_product_id?: string;
    manufacturer_ids?: string[];
    responsible_person_ids?: string[];
    listing_platforms?: string[];
    shipping_insurance_requirement?: string;
    is_pre_owned?: boolean;
    minimum_order_quantity?: number;
};

export type TiktokCreateGlobalProductInput = {
    title: string;
    description?: string;
    category_id: string;
    brand_id?: string;
    main_images: {
        uri: string;
    }[];
    skus: TiktokGlobalProductSKU[];
    package_weight: TiktokPackageW;
    certifications?: TiktokCertificationItem[];
    package_dimensions?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    product_attributes?: TiktokProductAttributeInput[];
    size_chart?: {
        image?: {
            uri: string;
        };
        template?: {
            id: string;
        };
    };
    video?: {
        id: string;
    };
    manufacturer?: TiktokManufacturerDetails;
    category_version?: string;
    responsible_person_ids?: string[];
    manufacturer_ids?: string[];
    source_locale?: string;
    external_global_product_id?: string;
};

export type TiktokCreateImageTranslationTasksInput = {
    images: {
        image_uri: string;
        target_languages: string[]; // e.g. ["it-IT", "fr-FR"]
    }[];
};

export type TiktokCreateManufacturerInput = {
    name: string;
    email: string;
    registered_trade_name?: string;
    phone_number: {
        country_code: string;
        local_number: string;
    };
    address: string;
    locale?: Tiktoklocale;
};

export type TiktokCreateProductInput = {
    title: string;
    description: string;
    category_id: string;
    brand_id?: string;
    save_mode?: 'LISTING' | 'DRAFT';
    main_images: {
        uri: string;
    }[];
    skus: {
        sales_attributes: {
            id: string;
            value_id: string;
            value_name: string;
            sku_img?: {
                uri: string;
            };
            name?: string;
            supplementary_sku_images?: {
                uri: string;
            }[];
        }[];
        inventory: {
            warehouse_id: string;
            quantity: number;
        }[];
        seller_sku?: string;
        price: {
            amount: string;
            currency: string;
        };
        external_sku_id?: string;
        identifier_code?: {
            code: string;
            type: string;
        };
        combined_skus?: {
            product_id: string;
            sku_id: string;
            sku_count: number;
        }[];
        sku_unit_count?: string;
        external_urls?: string[];
        extra_identifier_codes?: string[];
        pre_sale?: {
            type: string;
            fulfillment_type: {
                handling_duration_days: number;
                release_date: number;
            };
        };
        list_price?: {
            amount: string;
            currency: string;
        };
        external_list_prices?: {
            source: string;
            amount: string;
            currency: string;
        }[];
    }[];
    is_cod_allowed?: boolean;
    certifications?: {
        id: string;
        images?: {
            uri: string;
        }[];
        files?: {
            id: string;
            name: string;
            format: string;
        }[];
        expiration_date?: number;
    }[];
    package_dimensions?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    package_weight: {
        value: string;
        unit: string;
    };
    product_attributes?: {
        id: string;
        values: {
            id: string;
            name: string;
        }[];
    }[];
    video?: {
        id: string;
    };
    external_product_id?: string;
    delivery_option_ids?: string[];
    size_chart?: {
        image: {
            uri: string;
        };
        template?: {
            id: string;
        };
    };
    primary_combined_product_id?: string;
    is_not_for_sale?: boolean;
    category_version?: string;
    manufacturer_ids?: string[];
    responsible_person_ids?: string[];
    listing_platforms?: string[];
    shipping_insurance_requirement?: 'REQUIRED' | 'NOT_REQUIRED';
    minimum_order_quantity?: number;
    is_pre_owned?: boolean;
    idempotency_key?: string;
};

export type TiktokCreateResponsiblePersonInput = {
    name: string;
    email: string;
    phone_number: {
        country_code: string;
        local_number: string;
    };
    address: {
        street_address_line1: string;
        street_address_line2?: string;
        district?: string;
        city?: string;
        postal_code: string;
        province?: string;
        country: string;
    };
    locale?: string;
};

export type TiktokDeactivateProductInput = {
    product_ids: string[];
    listing_platforms?: TiktokPlatforms[];
};

export type TiktokDeleteGlobalProductsInput = {
    global_product_ids: string[];
};

export type TiktokDeleteProductInput = {
    product_ids: string[];
};

export interface TiktokEditGlobalProductInput {
    global_product_id: string;
    body: TiktokCreateGlobalProductInput;
}

export type TiktokEditPartialManufacturerParam = {
    manufacturer_id: string;
    body: TiktokCreateManufacturerInput;
};

export type TiktokEditProductBody = {
    description: string;
    category_id: string;
    main_images: {
        uri: string;
    }[];
    skus: {
        id: string;
        sales_attributes: {
            id: string;
            name: string;
            value_id: string;
            value_name: string;
            sku_img: {
                uri: string;
            };
            supplementary_sku_images: {
                uri: string;
            }[];
        }[];
        seller_sku: string;
        price: {
            amount: string;
            currency: string;
            sale_price: string;
        };
        external_sku_id: string;
        identifier_code: {
            code: string;
            type: string;
        };
        inventory?: {
            warehouse_id: string;
            quantity?: number;
        }[];
        combined_skus?: {
            product_id: string;
            sku_id: string;
            sku_count: number;
        }[];
        sku_unit_count?: string;
        external_urls?: string[];
        extra_identifier_codes?: string[];
        pre_sale?: {
            type: string;
            fulfillment_type: {
                handling_duration_days: number;
                release_date: number;
            };
        };
        list_price?: {
            amount: string;
            currency: string;
        };
        external_list_prices?: {
            source: string;
            amount: string;
            currency: string;
        }[];
    }[];
    title: string;
    package_weight: {
        value: string;
        unit: string;
    };
    brand_id?: string;
    is_cod_allowed?: boolean;
    certifications?: {
        id: string;
        images: {
            uri: string;
        }[];
        files: {
            id: string;
            name: string;
            format: string;
        }[];
        expiration_date: number;
    }[];
    product_attributes?: {
        id: string;
        values: {
            id: string;
            name: string;
        }[];
    }[];
    size_chart?: {
        image: {
            uri: string;
        };
        template?: {
            id: string;
        };
    };
    package_dimensions?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    external_product_id?: string;
    delivery_option_ids?: string[];
    video?: {
        id: string;
    };
    category_version?: string;
    manufacturer_ids?: string[];
    responsible_person_ids?: string[];
    listing_platforms?: string[];
    shipping_insurance_requirement?: string;
    is_pre_owned?: boolean;
    minimum_order_quantity?: number;
};

export type TiktokEditProductParams = {
    product_id: string;
    body: TiktokEditProductBody;
};

export type TiktokEditResponsiblePersonInput = {
    responsible_person_id: string;
    body: TiktokCreateResponsiblePersonInput;
};

export interface TiktokExternalListPrice {
    source: string;
    amount: string;
    currency: string;
}

export type TiktokGetCategoriesQuery = {
    locale?: Tiktoklocale;
    keyword?: string;
    category_version?: string | 'v1' | 'v2';
    listing_platform?: string | 'TIKTOK_SHOP' | 'TOKOPEDIA';
    include_prohibited_categories?: boolean;
};

export type TiktokGetCategoryAttributes = TiktokGetCategoryInput;

export type TiktokGetCategoryInput = {
    category_id: string;
    query: TiktokGetCategoryRules;
};

export type TiktokGetCategoryRules = {
    category_version?: 'v1' | 'v2';
    locale?: Tiktoklocale;
};

export type TiktokGetCategoryRulesQuery = TiktokGetCategoryInput;

export type TiktokGetGlobalAttributesInput = {
    locale?: Tiktoklocale;
    category_version?: 'v1' | 'v2';
};

export type TiktokGetGlobalAttributesQuery = {
    category_id: string;
    query?: TiktokGetGlobalAttributesInput;
};

export type TiktokGetGlobalCategoriesQuery = {
    locale?: Tiktoklocale;
    keyword?: string;
    category_version?: 'v1' | 'v2';
};

export interface TiktokGetGlobalCategoryRulesParams {
    category_id: string;
    query?: TiktokGetGlobalCategoryRulesQuery;
}

export type TiktokGetGlobalCategoryRulesQuery = {
    locale?: string;
    category_version?: string;
};

export type TiktokGetImageTranslationTasksQuery = {
    translation_task_ids?: string[];
};

export type TiktokGetProductParams = {
    product_id: string;
    query: {
        return_under_review_version?: boolean;
    };
};

export type TiktokGetRecommendedProductTitleAndDescriptionQuery = {
    product_ids: string[];
};

export interface TiktokGlobalProductSKU {
    id?: string;
    global_quantity: number;
    sales_attributes?: TiktokSalesAttributeInput[];
    seller_sku?: string;
    price?: {
        amount: string;
        currency: TiktokCurrency;
    };
    identifier_code?: {
        code?: string;
        type?: string;
    };
    inventory?: {
        global_warehouse_id?: string;
        quantity?: number;
    }[];
    sku_unit_count?: string;
    extra_identifier_codes?: string[];
    external_global_sku_id?: string;
    sale_prices?: {
        region: string;
        amount: string;
    }[];
}

export type TiktokListingPlatform = 'TIKTOK_SHOP';

export type TiktokListingQualityTier = 'POOR' | 'FAIR' | 'GOOD';

export type TiktokManufacturerInputBody = {
    manufacturer_ids?: string[];
    keyword?: string;
    locales?: Tiktoklocale;
};

export type TiktokOptimizedImagesInput = {
    images: {
        uri: string;
        optimization_mode: 'WHITE_BACKGROUND'[];
    }[];
};

export interface TiktokPackageW {
    value?: string;
    unit?: TiktokPackageWeight;
}

export type TiktokPartialEditProductBody = {
    title?: string;
    description?: string;
    category_id?: string;
    brand_id?: string;
    main_images?: {
        uri: string;
    }[];
    skus?: {
        id: string;
        sales_attributes?: {
            id: string;
            name: string;
            value_id: string;
            value_name: string;
            sku_img?: {
                uri: string;
            };
            supplementary_sku_images?: {
                uri: string;
            }[];
        }[];
        seller_sku?: string;
        price?: {
            amount?: string;
            currency?: string;
            sale_price?: string;
        };
        external_sku_id?: string;
        identifier_code?: {
            code: string;
            type: string;
        };
        inventory?: {
            warehouse_id: string;
            quantity?: number;
        }[];
        combined_skus?: {
            product_id: string;
            sku_id: string;
            sku_count: number;
        }[];
        sku_unit_count?: string;
        external_urls?: string[];
        extra_identifier_codes?: string[];
        pre_sale?: {
            type: string;
            fulfillment_type: {
                handling_duration_days: number;
                release_date: number;
            };
        };
        list_price?: {
            amount: string;
            currency: string;
        };
        external_list_prices?: {
            source: string;
            amount: string;
            currency: string;
        }[];
    }[];
    package_weight?: {
        value: string;
        unit: string;
    };
    is_cod_allowed?: boolean;
    certifications?: {
        id: string;
        images?: {
            uri: string;
        }[];
        files?: {
            id: string;
            name: string;
            format: string;
        }[];
        expiration_date?: number;
    }[];
    product_attributes?: {
        id: string;
        values: {
            id: string;
            name: string;
        }[];
    }[];
    size_chart?: {
        image: {
            uri: string;
        };
        template?: {
            id: string;
        };
    };
    package_dimensions?: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    external_product_id?: string;
    delivery_option_ids?: string[];
    video?: {
        id: string;
    };
    category_version?: string;
    manufacturer_ids?: string[];
    responsible_person_ids?: string[];
    listing_platforms?: string[];
    shipping_insurance_requirement?: string;
    is_pre_owned?: boolean;
    minimum_order_quantity?: number;
};

export type TiktokPartialEditProductParams = {
    product_id: string;
    body: TiktokPartialEditProductBody;
};

export type TiktokPlatforms = 'TOKOPEDIA' | 'TIKTOK_SHOP';

export interface TiktokProductAttributeInput {
    id?: string;
    values?: {
        id?: string;
        name?: string;
    }[];
}

export type TiktokProductStatus = 'ALL' | 'DRAFT' | 'PENDING' | 'FAILED' | 'ACTIVATE' | 'SELLER_DEACTIVATED' | 'PLATFORM_DEACTIVATED' | 'FREEZE' | 'DELETED';

export interface TiktokPublishGlobalProductInput {
    global_product_id: string;
    body: {
        publish_target: TiktokPublishTarget[];
    };
}

export interface TiktokPublishSKU {
    related_global_sku_id: string;
    price?: {
        amount?: string;
        currency: TiktokCurrency;
        sale_price?: string;
    };
    inventory?: {
        warehouse_id?: string;
        quantity?: number;
    };
}

// Mexico
export interface TiktokPublishTarget {
    region: TiktokRegion;
    responsible_person_ids?: string[];
    manufacturer_ids?: string[];
    skus: TiktokPublishSKU[];
}

export type TiktokRecommendCategoryByProductParams = {
    product_title: string;
    description?: string;
    images?: {
        url: string;
        width?: number;
        height?: number;
    }[];
    category_version?: 'v1' | 'v2';
    listing_platform?: 'TIKTOK_SHOP' | 'TOKOPEDIA';
    include_prohibited_categories?: boolean;
};

export type TiktokRecommendGlobalCategoryInput = {
    product_title: string;
    description?: string;
    images?: {
        uri: string;
    }[];
    category_version?: string;
};

export type TiktokRecoverProductBody = {
    product_ids: string[];
};

export type TiktokRegion = 'DE' // Germany
 | 'ES' // Spain
 | 'FR' // France
 | 'GB' // United Kingdom
 | 'ID' // Indonesia
 | 'IE' // Ireland
 | 'IT' // Italy
 | 'JP' // Japan
 | 'MY' // Malaysia
 | 'PH' // Philippines
 | 'SG' // Singapore
 | 'TH' // Thailand
 | 'US' // United States
 | 'VN' // Vietnam
 | 'MX';

export interface TiktokSKUPriceUpdate {
    id: string;
    price: {
        amount?: string;
        currency: TiktokCurrency;
        sale_price?: string;
    };
    list_price?: {
        amount: string;
        currency: string;
    };
    external_list_prices?: TiktokExternalListPrice[];
}

export interface TiktokSalesAttributeInput {
    id?: string;
    name?: string;
    value_id?: string;
    value_name?: string;
    sku_img?: {
        uri: string;
    };
}

export type TiktokSearchGlobalProductsBody = {
    status?: 'PUBLISHED' | 'DRAFT' | string;
    seller_skus?: string[];
    create_time_ge?: number;
    create_time_le?: number;
    update_time_ge?: number;
    update_time_le?: number;
};

export interface TiktokSearchGlobalProductsInput {
    query: TiktokSearchGlobalProductsQuery;
    body: TiktokSearchGlobalProductsBody;
}

export type TiktokSearchGlobalProductsQuery = {
    page_token?: string;
    page_size: number;
};

export type TiktokSearchInventoryBody = {
    product_ids?: string[];
    sku_ids?: string[];
};

export type TiktokSearchManufacturerQuery = {
    body: TiktokManufacturerInputBody;
    query: TiktokSearchProductsQuery;
};

export type TiktokSearchProductInput = {
    query: TiktokSearchProductsQuery;
    body: TiktokSearchProductsBody;
};

export type TiktokSearchProductsBody = {
    status?: TiktokProductStatus;
    seller_skus?: string[];
    create_time_ge?: number;
    create_time_le?: number;
    update_time_ge?: number;
    update_time_le?: number;
    category_version?: string;
    listing_quality_tiers?: TiktokListingQualityTier[];
    listing_platforms?: TiktokListingPlatform[];
    audit_status?: TiktokAuditStatus[];
    sku_ids?: string[];
};

export type TiktokSearchProductsQuery = {
    page_size: number;
    page_token?: string;
};

export type TiktokSearchResponsiblePersonsInput = {
    responsible_person_ids?: string[];
    keyword?: string;
};

export type TiktokSearchResponsiblePersonsParam = {
    query: TiktokSearchResponsiblePersonsQuery;
    body: TiktokSearchResponsiblePersonsInput;
};

export type TiktokSearchResponsiblePersonsQuery = {
    page_size: number;
    page_token?: string;
};

export type TiktokSearchSizeChartsBody = {
    ids?: string[];
    keyword?: string;
};

export type TiktokSearchSizeChartsFilter = {
    page_size: number;
    page_token?: string;
    locale?: Tiktoklocale;
};

export type TiktokSearchSizeChartsInput = {
    query: TiktokSearchSizeChartsFilter;
    body?: TiktokSearchSizeChartsBody;
};

export interface TiktokUpdateGlobalInventoryInput {
    global_product_id: string;
    body: {
        global_skus: {
            id: string;
            inventory: {
                global_warehouse_id: string;
                quantity: number;
            }[];
        }[];
    };
}

export interface TiktokUpdateProductInventoryInput {
    product_id: string;
    body: {
        skus: {
            id: string;
            inventory: {
                quantity: number;
                warehouse_id?: string;
            }[];
        }[];
    };
}

export type TiktokUpdateProductPriceInput = {
    product_id: string;
    body: {
        skus: TiktokSKUPriceUpdate[];
    };
};

export interface TiktokUploadImageParams extends Record<string, unknown> {
    data: Buffer;
    use_case: Tiktokuse_case;
}

export interface TiktokUploadProductFileParams {
    data: Buffer;
    name: string;
    required?: boolean;
}
