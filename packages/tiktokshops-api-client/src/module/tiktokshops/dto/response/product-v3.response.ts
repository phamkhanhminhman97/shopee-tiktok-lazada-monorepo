export interface TiktokAttribute {
    id?: string;
    name?: string;
    type?: string;
    is_requried?: boolean;
    values?: TiktokAttributeValue[];
    value_data_format?: string;
    is_customizable?: boolean;
    requirement_conditions?: TiktokRequirementCondition[];
    is_multiple_selection?: boolean;
}

export interface TiktokAttributeValue {
    id: string;
    name: string;
}

export interface TiktokBrandCreateResponse {
    id: string;
}

export type TiktokCategoriesResponse = {
    categories: TiktokCategory[];
};

export interface TiktokCategory {
    id: string;
    parent_id: string;
    local_name: string;
    is_leaf: boolean;
    permission_statuses: TiktokPermissionStatus[];
}

export interface TiktokCertificationItemDetail {
    id?: string;
    title?: string;
    files?: {
        id?: string;
        name?: string;
        format?: string;
        urls?: string[];
    }[];
    images?: TiktokImage[];
}

// Main response structure for "Check Listing Prerequisites"
export type TiktokCheckListingPrerequisitesResponse = {
    shop: {
        status: string | TiktokPrerequisiteField;
        tax_info: string | TiktokPrerequisiteField;
        gne: {
            product_quantity_limit: string | TiktokPrerequisiteField;
            epr: string | TiktokPrerequisiteField;
        };
        logistics: {
            pickup_warehouse: string | TiktokPrerequisiteField;
            return_warehouse: string | TiktokPrerequisiteField;
            shipping_template: string | TiktokPrerequisiteField;
            delivery_option: string | TiktokPrerequisiteField;
        };
        contact_info: string | TiktokPrerequisiteField;
        bank_account: string | TiktokPrerequisiteField;
    };
};

export interface TiktokCheckProductListingResponse {
    check_result?: 'PASSED' | 'FAILED';
    fail_reasons?: TiktokFailReason[];
    warnings?: {
        message?: string;
    };
    listing_quality?: {
        current_tier?: 'EXCELLENT' | 'GOOD' | 'POOR';
        remaining_recommendations?: number;
    };
    diagnoses?: TiktokDiagnosis[];
}

// Represents the result of a prerequisite check
export type TiktokCheckResult = {
    is_failed: boolean;
    fail_reasons?: string[];
};

export interface TiktokCreateGlobalProductResponse {
    global_product_id?: string;
    global_skus?: {
        id?: string;
        seller_sku?: string;
        sales_attributes?: {
            id?: string;
            value_id?: string;
        }[];
        external_global_sku_id?: string;
    }[];
}

export interface TiktokCreateImageTranslationTasksResponse {
    translation_tasks?: {
        image_uri?: string;
        target_language?: string;
        id?: string;
    }[];
}

export interface TiktokCreateManufacturerResponse {
    manufacturer_id?: string;
}

export type TiktokCreateProductResponse = {
    product_id: string;
    skus: {
        id: string;
        seller_sku: string;
        sales_attributes: {
            id: string;
            value_id: string;
        }[];
        external_sku_id: string;
    }[];
    warnings?: {
        message: string;
    }[];
};

export interface TiktokCreateResponsiblePersonResponse {
    responsible_person_id: string;
}

export type TiktokCurrency = 'BRL' | 'EUR' | 'GBP' | 'IDR' | 'JPY' | 'MXN' | 'MYR' | 'PHP' | 'SGD' | 'THB' | 'USD' | 'VND';

export interface TiktokDeleteGlobalProductsResponse {
    errors?: {
        message?: string;
        code?: number;
        detail?: {
            global_product_id?: string;
        };
    }[];
}

export interface TiktokDiagnosedProduct {
    id: string;
    listing_quality: TiktokListingQuality;
    diagnoses: TiktokDiagnosis[];
}

export interface TiktokDiagnosis {
    field: string;
    diagnosis_results: TiktokDiagnosisResult[];
    suggestion: TiktokSuggestion;
}

export interface TiktokDiagnosisResult {
    code: string;
    how_to_solve: string;
    quality_tier: string;
}

export interface TiktokDimensionsWithUnit {
    length?: string;
    width?: string;
    height?: string;
    unit?: string;
}

export interface TiktokEditGlobalProductResponse {
    global_skus?: {
        id?: string;
        seller_sku?: string;
        sales_attributes?: {
            id?: string;
            value_id?: string;
        }[];
        external_global_sku_id?: string;
    }[];
    publish_results?: {
        region?: string;
        status?: 'SUCCESS' | 'FAILURE';
        fail_reasons?: {
            message?: string;
        }[];
    }[];
}

export type TiktokEditProductResponse = {
    product_id?: string;
    skus?: {
        id?: string;
        seller_sku?: string;
        sales_attributes?: {
            id?: string;
            value_id?: string;
        }[];
        external_sku_id?: string;
    }[];
    warnings?: {
        message?: string;
    }[];
    audit?: {
        status?: string | 'AUDITING' | 'REJECTED' | 'APPROVED';
    };
};

export interface TiktokFailReason {
    code?: number;
    message?: string;
}

export interface TiktokGetAttributesResponse {
    attributes: TiktokAttribute[];
}

export type TiktokGetBrandsResponse = {
    brands: {
        id: string;
        name: string;
        authorized_status: string | 'AUTHORIZED' | 'UNAUTHORIZED';
        is_t1_brand: boolean;
        brand_status: string | 'AVAILABLE' | 'UNAVAILABLE';
    }[];
    total_count: number;
    next_page_token: string;
};

export interface TiktokGetCategoryRulesResponse {
    product_certifications: TiktokProductCertification[];
    size_chart: {
        is_supported: boolean;
        is_required: boolean;
    };
    cod: {
        is_supported: boolean;
    };
    package_dimension: {
        is_required: boolean;
    };
    epr: {
        is_required: boolean;
    };
    responsible_person: {
        is_required: boolean;
    };
    manufacturer: {
        is_required: boolean;
    };
    allowed_special_product_types: string[];
}

export interface TiktokGetGlobalAttributeResponse {
    attributes: TiktokGetGlobalAttributes[];
}

export interface TiktokGetGlobalAttributes {
    id: string;
    name: string;
    type: string;
    is_requried: boolean;
    values: TiktokAttributeValue[];
    is_multiple_selection: boolean;
    is_customizable: boolean;
    requirement_conditions: TiktokRequirementConditionGlobal[];
    optional_regions: string[];
    required_regions: string[];
}

export interface TiktokGetGlobalCategoriesResponse {
    categories: TiktokCategory[];
}

export interface TiktokGetGlobalCategoryRulesResponse {
    product_certifications?: TiktokProductCertificationGlobal[];
    size_chart?: {
        is_supported?: boolean;
        is_required?: boolean;
    };
    responsible_person?: TiktokRegionRequirement;
    manufacturer?: TiktokRegionRequirement;
}

export interface TiktokGetGlobalProductInput {
    global_product_id: string;
}

export interface TiktokGetGlobalProductResponse {
    id?: string;
    title?: string;
    main_images?: TiktokImage[];
    video?: {
        id?: string;
    };
    description?: string;
    package_dimensions?: TiktokDimensionsWithUnit;
    package_weight?: TiktokMeasurement;
    certifications?: TiktokCertificationItemDetail[];
    skus?: TiktokGlobalSKU[];
    update_time?: number;
    create_time?: number;
    product_attributes?: TiktokProductAttributeDetail[];
    size_chart?: {
        image?: TiktokImage;
        template?: {
            id?: string;
        };
    };
    products?: TiktokRegionProduct[];
    global_seller_id?: string;
    brand?: {
        id?: string;
    };
    category?: {
        id?: string;
    };
    manufacturer?: TiktokManufacturerDetails;
    responsible_person_ids?: string[];
    manufacturer_ids?: string[];
    source_locale?: string;
    external_global_product_id?: string;
}

export interface TiktokGetImageTranslationTasksResponse {
    translation_tasks?: TiktokTranslationTask[];
}

export interface TiktokGetManufacturersResponse {
    manufacturers: TiktokManufacturer[];
    total_count: number;
    next_page_token: string;
}

export type TiktokGetProductResponse = {
    id: string;
    status: string;
    title: string;
    category_chains: {
        id: string;
        parent_id: string;
        local_name: string;
        is_leaf: boolean;
    }[];
    brand: {
        id: string;
        name: string;
    };
    main_images: {
        height: number;
        width: number;
        thumb_urls: string[];
        uri: string;
        urls: string[];
    }[];
    video: {
        id: string;
        cover_url: string;
        format: string;
        url: string;
        width: number;
        height: number;
        size: number;
    };
    description: string;
    package_dimensions: {
        length: string;
        width: string;
        height: string;
        unit: string;
    };
    package_weight: {
        value: string;
        unit: string;
    };
    skus: {
        id: string;
        seller_sku: string;
        price: {
            tax_exclusive_price: string;
            sale_price: string;
            currency: string;
            unit_price: string;
        };
        inventory: {
            warehouse_id: string;
            quantity: number;
        }[];
        identifier_code: {
            code: string;
            type: string;
        };
        sales_attributes: {
            id: string;
            name: string;
            value_id: string;
            value_name: string;
            sku_img: {
                height: number;
                width: number;
                thumb_urls: string[];
                uri: string;
                urls: string[];
            };
            supplementary_sku_images: {
                uri: string;
                height: number;
                width: number;
                thumb_urls: string[];
                urls: string[];
            }[];
        }[];
        external_sku_id: string;
        combined_skus: {
            product_id: string;
            sku_id: string;
            sku_count: number;
        }[];
        global_listing_policy: {
            price_sync: boolean;
            inventory_type: string;
            replicate_source: {
                product_id: string;
                shop_id: string;
                sku_id: string;
            };
        };
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
    certifications: {
        id: string;
        title: string;
        files: {
            id: string;
            urls: string[];
            name: string;
            format: string;
        }[];
        images: {
            height: number;
            width: number;
            thumb_urls: string[];
            uri: string;
            urls: string[];
        }[];
        expiration_date: number;
    }[];
    size_chart: {
        image: {
            height: number;
            width: number;
            thumb_urls: string[];
            uri: string;
            urls: string[];
        };
        template: {
            id: string;
        };
    };
    is_cod_allowed: boolean;
    product_attributes: {
        id: string;
        name: string;
        values: {
            id: string;
            name: string;
        }[];
    }[];
    audit_failed_reasons: {
        position: string;
        reasons: string[];
        suggestions: string[];
        listing_platform: string;
    }[];
    update_time: number;
    create_time: number;
    delivery_options: {
        id: string;
        name: string;
        is_available: boolean;
    }[];
    external_product_id: string;
    product_types: string[];
    is_not_for_sale: boolean;
    recommended_categories: {
        id: string;
        local_name: string;
    }[];
    manufacturer_ids: string[];
    responsible_person_ids: string[];
    listing_quality_tier: string;
    integrated_platform_statuses: {
        platform: string;
        status: string;
    }[];
    shipping_insurance_requirement: string;
    minimum_order_quantity: number;
    is_pre_owned: boolean;
    audit: {
        status: string;
        pre_approved_reasons: string[];
    };
    global_product_association: {
        global_product_id: string;
        sku_mappings: {
            global_sku_id: string;
            local_sku_id: string;
            sales_attribute_mappings: {
                local_attribute_id: string;
                global_attribute_id: string;
                local_value_id: string;
                global_value_id: string;
            }[];
        }[];
    };
    prescription_requirement: {
        needs_prescription: boolean;
    };
    product_families: {
        id: string;
        products: {
            id: string;
        }[];
    }[];
};

export type TiktokGetProductSEOWordsResponse = {
    products: {
        id: string;
        seo_words: {
            text: string;
        }[];
    }[];
};

export interface TiktokGetRecommendedProductTitleAndDescriptionResponse {
    products: {
        id: string;
        suggestions: {
            field: string;
            items: {
                text: string;
            }[];
        }[];
    }[];
}

export interface TiktokGlobalProductResponse {
    global_product_id: string;
    global_skus: {
        id: string;
        seller_sku: string;
        sales_attributes: {
            id: string;
            value_id: string;
        }[];
        external_global_sku_id: string;
    }[];
}

export interface TiktokGlobalSKU {
    id?: string;
    seller_sku?: string;
    price?: {
        amount?: string;
        currency?: string;
        unit_price?: string;
    };
    global_quantity?: number;
    identifier_code?: {
        code?: string;
        type?: string;
    };
    sales_attributes?: {
        id?: string;
        name?: string;
        value_id?: string;
        value_name?: string;
        sku_img?: TiktokImage;
    }[];
    inventory?: {
        global_warehouse_id?: string;
        quantity?: number;
    }[];
    sku_unit_count?: string;
    extra_identifier_codes?: string[];
    external_global_sku_id?: string;
}

export interface TiktokImage {
    height?: number;
    width?: number;
    uri?: string;
    urls?: string[];
    thumb_urls?: string[];
}

export interface TiktokImageData {
    uri?: string;
    url?: string;
}

export interface TiktokImageItem {
    height: number;
    width: number;
    uri: string;
    url: string;
    optimized_uri: string;
    optimized_url: string;
}

export interface TiktokInventoryDistribution {
    campaign_inventory?: {
        quantity?: number;
        campaign_name?: string;
    }[];
    creator_inventory?: {
        quantity?: number;
        creator_name?: string;
    }[];
    in_shop_inventory?: {
        quantity?: number;
    };
}

export interface TiktokInventoryUpdateError {
    code?: number;
    message?: string;
    detail?: {
        sku_id?: string;
        extra_errors?: {
            warehouse_id?: string;
            code?: number;
            message?: string;
        }[];
    };
}

export interface TiktokListingQuality {
    current_tier: string;
    remaining_recommendations: number;
}

export interface TiktokManufacturer {
    id: string;
    regional_profiles: TiktokRegionalProfile[];
}

export interface TiktokManufacturerDetails {
    name?: string;
    address?: string;
    phone_number?: string;
    email?: string;
}

export interface TiktokMeasurement {
    value?: number;
    unit?: TiktokPackageWeight;
}

export type TiktokOptimizedImage = {
    height: number;
    width: number;
    original_uri: string;
    original_url: string;
    optimized_uri: string;
    optimized_url: string;
    optimize_status: 'SUCCESS' | 'FAIL' | string;
};

export type TiktokOptimizedImagesResponse = {
    images: TiktokOptimizedImage[];
};

export type TiktokPackageWeight = 'GRAM' | 'KILOGRAM' | 'POUND';

export type TiktokPartialEditProductResponse = {
    product_id?: string;
    skus?: {
        id?: string;
        seller_sku?: string;
        sales_attributes?: {
            id?: string;
            value_id?: string;
        }[];
        external_sku_id?: string;
    }[];
    warnings?: {
        message?: string;
    }[];
    audit?: {
        status?: string | 'AUDITING' | 'REJECTED' | 'APPROVED';
    };
};

export type TiktokPermissionStatus = 'AVAILABLE' | 'UNAVAILABLE' | string;

export interface TiktokPhoneNumber {
    country_code: string;
    local_number: string;
}

// Represents a single checkable field
export type TiktokPrerequisiteField = {
    id: string;
    name: string;
    check_result: TiktokCheckResult;
};

export interface TiktokProductAttributeDetail {
    id?: string;
    name?: string;
    values?: {
        id?: string;
        name?: string;
    }[];
}

export interface TiktokProductCertification {
    id: string;
    name: string;
    is_required: boolean;
    document_details: string;
    sample_image_url: string;
    requirement_conditions: TiktokRequirementCondition[];
    expiration_date: {
        is_required: boolean;
    };
}

export interface TiktokProductCertificationGlobal {
    id?: string;
    name?: string;
    is_required?: boolean;
    sample_image_url?: string;
    required_regions?: string[];
    optional_regions?: string[];
    requirement_conditions?: TiktokRequirementConditionGlobal[];
}

export interface TiktokProductDiagnosisResponse {
    products: TiktokDiagnosedProduct[];
}

export interface TiktokProductInventory {
    product_id?: string;
    skus?: TiktokSKUInventory[];
}

export interface TiktokPublishGlobalProductResponse {
    products?: {
        region?: string;
        shop_id?: string;
        id?: string;
        skus?: {
            related_global_sku_id?: string;
            id?: string;
            seller_sku?: string;
            sale_attributes?: {
                id?: string;
                value_id?: string;
            }[];
        }[];
    }[];
    publish_result?: {
        region?: string;
        status?: 'SUCCESS' | 'FAILURE';
        fail_reasons?: {
            message?: string;
        }[];
    }[];
}

export interface TiktokRecommendCategoryByProductResponse {
    leaf_category_id: string;
    categories: {
        id: string;
        name: string;
        level: number;
        is_leaf: boolean;
        permission_statuses: string[];
    }[];
}

export interface TiktokRecommendGlobalCategoryResponse {
    recommended_categories?: {
        category_id?: string;
        category_name?: string;
        level?: number;
        score?: number;
        full_path?: string;
    }[];
}

export interface TiktokRegionProduct {
    region?: string;
    id?: string;
    sku_mappings?: {
        global_sku_id?: string;
        local_sku_id?: string;
        sales_attribute_mappings?: {
            global_attribute_id?: string;
            local_attribute_id?: string;
            global_value_id?: string;
            local_value_id?: string;
        }[];
    }[];
}

export interface TiktokRegionRequirement {
    is_required?: boolean;
    optional_regions?: string[];
    required_regions?: string[];
}

export interface TiktokRegionalProfile {
    locale: string;
    name: string;
    registered_trade_name: string;
    email: string;
    phone_number: TiktokPhoneNumber;
    address: string;
}

export interface TiktokRequirementCondition {
    condition_type: string;
    attribute_id: string;
    attribute_value_id: string;
}

export interface TiktokRequirementConditionGlobal {
    region: string;
    condition_type: string;
    attribute_id: string;
    attribute_value_id: string;
}

export interface TiktokSKUInput {
    id: string;
    price: {
        amount?: string;
        currency: TiktokCurrency;
        sale_price?: string;
        list_price: {
            amount: string;
            currency: string;
        };
        external_list_prices: {
            source: string;
            amount: string;
            currency: string | 'USD';
        };
    };
}

export interface TiktokSKUInventory {
    id?: string;
    seller_sku?: string;
    total_available_quantity?: number;
    total_committed_quantity?: number;
    warehouse_inventory?: TiktokWarehouseStock[];
    total_available_inventory_distribution?: TiktokInventoryDistribution;
}

export interface TiktokSearchGlobalProductsResponse {
    next_page_token?: string;
    total_count?: number;
    global_products?: {
        id?: string;
        title?: string;
        status?: string;
        skus?: {
            id?: string;
            seller_sku?: string;
        }[];
        create_time?: number;
        update_time?: number;
    }[];
}

export interface TiktokSearchInventoryResponse {
    inventory?: TiktokProductInventory[];
}

export interface TiktokSearchProductsResponse {
    total_count: number;
    products: {
        id: string;
        title: string;
        status: string;
        skus: {
            id: string;
            seller_sku: string;
            price: {
                currency: string;
                tax_exclusive_price: string;
                sale_price: string;
            };
            inventory: {
                warehouse_id: string;
                quantity: number;
            }[];
            list_price: {
                amount: string;
                currency: string;
            };
            external_list_prices: {
                source: string;
                amount: string;
                currency: string;
            }[];
            pre_sale: {
                type: string;
                fulfillment_type: {
                    handling_duration_days: number;
                    release_date: number;
                };
            };
        }[];
        sales_regions: string[];
        create_time: number;
        update_time: number;
        product_sync_fail_reasons: string[];
        is_not_for_sale: boolean;
        recommended_categories: {
            id: string;
            local_name: string;
        }[];
        listing_quality_tier: string;
        integrated_platform_statuses: {
            platform: string;
            status: string;
        }[];
        audit: {
            status: string;
            pre_approved_reasons: string[];
        };
        product_families: {
            id: string;
            products: {
                id: string;
            }[];
        }[];
    }[];
    next_page_token?: string;
}

export type TiktokSearchResponsiblePersonsResponse = {
    responsible_persons: {
        id: string;
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
    }[];
    total_count: number;
    next_page_token: string;
};

export type TiktokSearchSizeChartResponse = {
    size_chart: {
        template_id: string;
        template_name: string;
        images: {
            uri: string;
            url: string;
            locale: string;
        }[];
    }[];
    next_page_token: string;
    total_count: number;
};

export interface TiktokSuggestion {
    seo_words: TiktokTextItem[];
    smart_texts: TiktokTextItem[];
    images: TiktokImageItem[];
}

export interface TiktokTextItem {
    text: string;
}

export interface TiktokTranslationTask {
    id?: string;
    target_language?: string;
    status?: 'COMPLETED' | 'FAILED' | 'IN_PROGRESS' | string;
    fail_reason?: string;
    original_image?: TiktokImageData;
    translated_image?: TiktokImageData;
}

export interface TiktokUpdateGlobalInventoryResponse {
    errors?: {
        code?: number;
        message?: string;
        detail?: {
            global_sku_id?: string;
            extra_errors?: {
                global_warehouse_id?: string;
                code?: number;
                message?: string;
            }[];
        };
    }[];
}

export type TiktokUpdatePriceQuery = {
    product_id: string;
    body: {
        skus: TiktokSKUInput[];
    };
};

export interface TiktokUpdateProductInventoryResponse {
    errors?: TiktokInventoryUpdateError[];
}

export type TiktokUpdateProductPriceResponse = object;

export interface TiktokUploadImageResponse {
    uri: string;
    url: string;
    height: number;
    width: number;
    use_case: Tiktokuse_case;
}

export interface TiktokUploadProductFileResponse {
    id?: string;
    url?: string;
    name?: string;
    format?: string;
}

export interface TiktokWarehouseStock {
    warehouse_id?: string;
    available_quantity?: number;
    committed_quantity?: number;
}

export type Tiktoklocale = string | 'de-DE' | 'en-GB' | 'en-IE' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ms-MY' | 'pt-BR' | 'th-TH' | 'vi-VN' | 'zh-CN';

export type Tiktokuse_case = 'MAIN_IMAGE' | 'ATTRIBUTE_IMAGE' | 'DESCRIPTION_IMAGE' | 'CERTIFICATION_IMAGE';
