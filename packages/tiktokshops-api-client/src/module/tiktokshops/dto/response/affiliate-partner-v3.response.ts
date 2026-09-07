export type TiktokAffiliatePartnerCampaignDetailResponse = {
    campaign_id: string;
    name: string;
    description: string;
    campaign_start_time: number;
    campaign_end_time: number;
    registration_start_time: number;
    registration_end_time: number;
    commission_rate: number;
    contact_info: TiktokContactInfo;
    target_shop_codes: string[];
    target_seller_types: ('LOCAL' | 'CROSS_BORDER')[];
    status: 'READY' | 'UPCOMING' | 'CLOSED' | string;
};

export type TiktokAffiliatePartnerCampaignProduct = {
    id: string;
    review_status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'PENDING_CLOSED' | 'CLOSED';
    name: string;
    main_image_url: string;
    lowest_price: TiktokPrice;
    highest_price: TiktokPrice;
    inventory: number;
    shop_name: string;
    total_commission_rate: number;
    creator_commission_rate: number;
    partner_commission_rate: number;
    open_collaboration_commission_rate: number;
    is_available: boolean;
    product_sales: number;
    category: {
        id: string;
        name: string;
    };
    sample_quota: number;
    sku_information_list: TiktokSKUInformation[];
    product_description: string;
};

export type TiktokAffiliatePartnerCampaignSummary = {
    id: string;
    name: string;
    status: 'READY' | 'UPCOMING' | 'ONGOING' | 'CLOSED';
    registration_start_time: number;
    registration_end_time: number;
    campaign_start_time: number;
    campaign_end_time: number;
};

export type TiktokCAPAffiliateOrder = {
    id: string;
    tags: string;
    create_time: number;
    delivery_time: number;
    status: 'COMPLETED' | string;
    skus: TiktokCAPAffiliateOrderSKU;
};

export type TiktokCAPAffiliateOrderSKU = {
    id: string;
    open_collaboration_id: string;
    target_collaboration_id: string;
    creator_username: string;
    product_name: string;
    product_id: string;
    price: TiktokCurrencyAmount;
    quantity: number;
    shop_name: string;
    content_type: 'VIDEO' | string;
    content_id: string;
    attribution_type: string;
    commission_tier_setting: string;
    commission_model: string;
    commission_rate: string;
    commission_bonus_rate: string;
    shop_ads_commission_rate: string;
    estimated_commission_base: TiktokCurrencyAmount;
    estimated_commission: TiktokCurrencyAmount;
    estimated_bonus_commission: TiktokCurrencyAmount;
    estimated_shop_ads_commission: TiktokCurrencyAmount;
    actual_commission_base: TiktokCurrencyAmount;
    actual_commission: TiktokCurrencyAmount;
    actual_bonus_commission: TiktokCurrencyAmount;
    actual_shop_ads_commission: TiktokCurrencyAmount;
    agency_commission: TiktokCurrencyAmount;
    agency_bonus_commission: TiktokCurrencyAmount;
    agency_shop_ads_commission: TiktokCurrencyAmount;
    total_agency_commission: TiktokCurrencyAmount;
    agency_commission_rate: string;
    iva: string;
    isr: string;
    returned_quantity: number;
    refunded_quantity: number;
};

export type TiktokCampaignProductDetail = {
    product_id: string;
    product_status: 'PRODUCT_UNSPECIFIED' | string;
    product_name: string;
    product_stock_count: string;
    total_commission_percent: string;
    creator_commission_percent: string;
    partner_commission_percent: string;
    plan_commission_percent: string;
    product_price: TiktokProductPrice;
    product_thumbnail: TiktokProductThumbnail;
    indicator_data: TiktokIndicatorData;
};

export type TiktokCampaignProductStatistic = {
    data_update_time: string;
    creator_sales_num: number;
    collaborated_creators_num: number;
    promoted_creator_num: number;
    sample_requested_creator_num: number;
    campaign_product_detail: TiktokCampaignProductDetail;
};

export type TiktokContactInfo = {
    whatsapp?: string;
    email: string;
    phone?: string;
    zalo?: string;
    viber?: string;
    line?: string;
};

export type TiktokCreateAffiliatePartnerCampaignResponse = {
    campaign_id: string;
};

export type TiktokCreatorContentStatistic = {
    content_type?: 'VIDEO' | 'LIVE_ROOM';
    cover_img_url?: string;
    source_url?: string;
    view_count?: string;
    like_count?: string;
    comment_num?: string;
    paid_order_num?: string;
    paid_amount?: string;
    linked_tiktok_video?: string;
    published_date?: string; // format: YYYY_MM_DD
    content_end_date?: string; // format: YYYY_MM_DD or undefined for VIDEO
};

export type TiktokCurrencyAmount = {
    amount: string;
    currency: string;
};

export type TiktokEditAffiliatePartnerCampaignResponse = object;

export type TiktokFreeSampleStatus = 'NOT_REQUESTED' | 'PENDING' | 'AWAITING_SHIPMENT' | 'AWAITING_COLLECTION' | 'SHIPPED' | 'CONTENT_PENDING' | 'REJECT_CANCELLED' | 'OVERDUE_CANCELLED' | 'UNFULFIL_CANCELLED' | 'DEL_PLAN_CANCELLED' | 'SELLER_NOT_SHIP_CANCELLED' | 'WITHDRAW_CANCELLED' | 'UNFULFILLABLE_CANCELLED' | 'OPERATOR_MANUAL_CANCELLED' | 'OPERATOR_MANUAL_FAILED' | 'OPERATOR_MANUAL_COMPLETED' | 'COMPLETED';

export type TiktokGenerateAffiliatePartnerCampaignProductLinkResponse = {
    product_promotion_link: string;
};

export type TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoResponse = {
    total_creator_count?: number;
    promotion_creators?: TiktokPromotionCreator[];
    paid_amount?: TiktokCurrencyAmount;
    room_count?: number;
    video_count?: number;
    free_sample_status?: TiktokFreeSampleStatus;
    commission?: string;
    effective_start_time?: string;
    effective_end_time?: string;
    next_page_token?: string;
};

export type TiktokGetAffiliateCampaignCreatorFulfillmentStatusListResponse = {
    total_count: number;
    campaign_product_statistics: TiktokCampaignProductStatistic[];
    next_page_token?: string;
};

export type TiktokGetAffiliateCampaignCreatorProductContentStatisticsResponse = {
    creator_content_statistics?: TiktokCreatorContentStatistic[];
};

export type TiktokGetAffiliateCampaignCreatorProductSampleStatusResponse = {
    sample_status?: TiktokSampleStatus;
};

export type TiktokGetAffiliatePartnerCampaignListResponse = {
    campaigns: TiktokAffiliatePartnerCampaignSummary[];
    next_page_token?: string;
    total_count: number;
};

export type TiktokGetAffiliatePartnerCampaignProductListResponse = {
    products: TiktokAffiliatePartnerCampaignProduct[];
    next_page_token?: string;
    total_count: number;
};

export type TiktokIndicatorData = {
    paid_order_num: string;
    actual_order_num: string;
    estimated_amount: string;
    actual_amount: string;
    estimated_partner_commission: string;
    actual_partner_commission: string;
    creator_sales_num: string;
    collaborated_creators_num: string;
    promoted_creator_num: string;
    sample_requested_creator_num: string;
};

export type TiktokPartnerGenerateMultiAffiliateCampaignProductLinkResponse = {
    product_promotion_links: TiktokProductPromotionLink[];
    failed_product_ids: string[];
};

export type TiktokPrice = {
    currency: string;
    amount: string;
};

export type TiktokProductPrice = {
    min_price: string;
    max_price: string;
    currency: string;
};

export type TiktokProductPromotionLink = {
    product_id: string;
    link: string;
};

export type TiktokProductThumbnail = {
    uri: string;
    url_list: string[];
};

export type TiktokPromotionCreator = {
    paid_amount?: {
        currency: string;
        amount: string;
    };
    room_count?: number;
    video_count?: number;
    free_sample_status?: TiktokFreeSampleStatus | string;
    commission?: string;
    effective_end_time?: string;
    effective_start_time?: string;
    creator?: {
        nick_name?: string;
        avatar_url?: string;
        follower_num?: number;
        user_name?: string;
        creator_open_id?: string;
    };
    affiliate_product_id?: string;
};

export type TiktokRegionPrice = {
    region_code: string;
    currency: string;
    list_price: string;
    sale_price: string;
    localized_dutiable_price: string;
};

export type TiktokSKUInformation = {
    sku_name: string;
    sku_id: string;
    inventory: {
        available_quantity: string;
    };
    base_price: TiktokRegionPrice;
    region_prices: TiktokRegionPrice[];
    properties: TiktokSKUProperty[];
};

export type TiktokSKUProperty = {
    name: string;
    value_name: string;
};

export type TiktokSampleStatus = {
    shipping_provider_name?: string;
    delivery_option?: 'ECONOMY_SHIPPING' | 'PREMIUM_SHIPPING' | string;
    estimated_earliest_delivery_date?: string; // Unix epoch format
    estimated_latest_delivery_date?: string; // Unix epoch format
    quantity?: number;
    tracking_results?: TiktokTrackingEvent[];
};

export type TiktokSearchCAPAffiliateOrdersResponse = {
    orders: TiktokCAPAffiliateOrder[];
    next_page_token?: string;
    total_count: number;
};

export type TiktokSearchTapAffiliateOrdersResponse = {
    orders: TiktokTapAffiliateOrder[];
    next_page_token?: string;
    total_count: number;
};

export type TiktokTapAffiliateOrder = {
    id: string;
    create_time: number;
    delivery_time: number;
    status: 'COMPLETED' | string;
    skus: TiktokTapAffiliateOrderSKU;
};

export type TiktokTapAffiliateOrderSKU = {
    id: string;
    campaign_id: string;
    creator_username: string;
    product_name: string;
    product_id: string;
    price: TiktokCurrencyAmount;
    quantity: number;
    content_type: 'VIDEO' | string;
    content_id: string;
    creator_commission_rate: number;
    tap_commission_rate: number;
    estimated_commission_base: TiktokCurrencyAmount;
    estimated_creator_commission: TiktokCurrencyAmount;
    estimated_tap_commission: TiktokCurrencyAmount;
    actual_commission_base: TiktokCurrencyAmount;
    actual_creator_commission: TiktokCurrencyAmount;
    actual_tap_commission: TiktokCurrencyAmount;
    refunded_quantity: number;
    returned_quantity: number;
    partner_commission_reward_rate: number;
    estimated_partner_commission_reward_fee: TiktokCurrencyAmount;
    actual_partner_commission_reward_fee: TiktokCurrencyAmount;
    creator_commission_reward_rate: number;
    estimated_creator_commission_reward_fee: TiktokCurrencyAmount;
    actual_creator_commission_reward_fee: TiktokCurrencyAmount;
};

export type TiktokTrackingEvent = {
    tracking_event_update_date?: string; // Unix epoch format
    tracking_event_description?: TiktokTrackingEventDescription | string;
    tracking_event_description_extended?: string;
};

export type TiktokTrackingEventDescription = 'THE_PACKAGE_HAS_BEEN_DELIVERED' | 'OUT_FOR_DELIVERY' | 'ORDER_PACKED_AND_READY_FOR_DROP_OFF_AT_CARRIERS_FACILITY' | 'ORDER_PLACED';
