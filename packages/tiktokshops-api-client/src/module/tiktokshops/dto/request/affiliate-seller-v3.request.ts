export type TiktokCreateConversationWithCreatorBody = {
    creator_id: string;
    only_need_conversation_id?: boolean;
};

export type TiktokCreateConversationwithCreatorBody = {
    creator_id: string;
    only_need_conversation_id?: boolean;
};

export type TiktokCreateOpenCollaborationBody = {
    product_id: string;
    commission_rate: number;
};

export type TiktokCreateTargetCollaborationBody = {
    name: string;
    message: string;
    end_time: string;
    products: {
        id: string;
        target_commission_rate: number;
    }[];
    creator_user_ids: string[];
    seller_contact_info: {
        email: string;
    };
    free_sample_rule: {
        has_free_sample: boolean;
        is_sample_approval_exempt: boolean;
    };
};

export type TiktokEditOpenCollaborationSampleRuleBody = {
    product_id: string;
    sample_rule?: TiktokSampleRule;
};

export type TiktokEditOpenCollaborationSettingsBody = {
    auto_add_product?: {
        enable: boolean;
        commission_rate: number;
    };
};

export type TiktokGetConversationListBody = {
    only_need_conversation_id?: boolean;
};

export type TiktokGetConversationListParams = {
    query: TiktokGetConversationListQuery;
    body: TiktokGetConversationListBody;
};

export type TiktokGetConversationListQuery = {
    page_size: number;
    page_token?: string;
    only_need_conversation_id?: boolean;
    conversation_status?: string | 'ALL' | 'UNREAD';
};

export type TiktokGetMessageInTheConversationParams = {
    conversation_id: string;
    query: TiktokGetMessageInTheConversationQuery;
};

export type TiktokGetMessageInTheConversationQuery = {
    page_size: number;
    page_token?: string;
};

export type TiktokGetOpenCollaborationCreatorContentDetailQuery = {
    page_token?: string;
    page_size: number;
    product_id: string;
};

export type TiktokGetOpenCollaborationSampleRulesQuery = {
    product_ids: string[];
};

export type TiktokMarkConversationReadBody = {
    conversation_ids: string[];
};

export type TiktokRemoveCreatorFromOpenCollaborationBody = {
    creator_user_id: string;
    product_id: string;
};

export type TiktokRemoveCreatorFromOpenCollaborationParams = {
    open_collaboration_id: string;
    body: TiktokRemoveCreatorFromOpenCollaborationBody;
};

export type TiktokSampleApplicationStatus = 'PENDING' | 'AWAITING_SHIPMENT' | 'SHIPPED' | 'CONTENT_PENDING' | 'REJECT_CANCELLED' | 'OVERDUE_CANCELLED' | 'UNFULFILL_CANCELLED' | 'DEL_OPEN_COLLAB' | 'SELLER_NOT_SHIP_CANCELLED' | 'WITHDRAW_CANCELLED' | 'UNFULFILLABLE_CANCELLED' | 'OPS_CANCELLED' | 'OPS_FAILED' | 'OPS_COMPLETED' | 'COMPLETED';

export type TiktokSampleRule = {
    sample_quota?: number;
    is_sample_time_unlimited?: boolean;
    start_time?: number;
    end_time?: number;
    thresholds?: TiktokSampleThresholds;
    activate_status: 'ACTIVATE' | 'DEACTIVATE';
};

export type TiktokSampleThresholds = {
    minimum_follower_count?: number;
    minimum_gmv?: number;
    avg_ec_video_views?: number;
    category_ids?: string[];
    predicted_fulfillment_rank?: 'LOW' | 'MEDIUM' | 'HIGH' | 'ALL';
};

export type TiktokSearchOpenCollaborationBody = {
    keyword_type?: string | 'PRODUCT_ID' | 'PRODUCT_NAME';
    keyword?: string;
    top_level_category_id?: string;
};

export type TiktokSearchOpenCollaborationParams = {
    query: TiktokSearchOpenCollaborationQuery;
    body?: TiktokSearchOpenCollaborationBody;
};

export type TiktokSearchOpenCollaborationQuery = {
    page_size: number;
    page_token?: string;
    sort_order?: 'ASC' | 'DESC';
    sort_field?: string | 'product_original_price';
};

export type TiktokSearchSellerAffiliateOrdersBody = {
    create_time_lt: number;
    create_time_ge: number;
    program_id: string;
};

export type TiktokSearchSellerAffiliateOrdersParams = {
    query: TiktokSearchSellerAffiliateOrdersQuery;
    body?: TiktokSearchSellerAffiliateOrdersBody;
};

export type TiktokSearchSellerAffiliateOrdersQuery = {
    page_token?: string;
    page_size: number;
};

export type TiktokSearchTargetCollaborationsBody = {
    creator_accept_status?: string;
    free_sample_setting?: string;
    search_param?: {
        keyword_type: string;
        keyword: string;
    };
    creator_user_id?: string;
    collaboration_status: string;
};

export type TiktokSearchTargetCollaborationsParams = {
    query: TiktokSearchTargetCollaborationsQuery;
    body: TiktokSearchTargetCollaborationsBody;
};

export type TiktokSearchTargetCollaborationsQuery = {
    page_size?: string;
    page_token?: string;
};

export type TiktokSellerReviewSampleApplicationsBody = {
    review_result: 'APPROVE' | 'REJECT';
    reject_reason?: 'NOT_MATCH' | 'OFFLINE' | 'OUT_OF_STOCK' | 'OTHER';
};

export type TiktokSellerReviewSampleApplicationsParams = {
    application_id: string;
    body?: TiktokSellerReviewSampleApplicationsBody;
};

export type TiktokSellerSearchAffiliateOpenCollaborationProductBody = {
    title_keywords: string[];
    sales_price_range: {
        amount_ge: string;
        amount_lt: string;
    };
    category: {
        id: string;
    };
    commission_rate_range: {
        rate_ge: number;
        rate_lt: number;
    };
};

export type TiktokSellerSearchAffiliateOpenCollaborationProductParams = {
    query: TiktokSellerSearchAffiliateOpenCollaborationProductQuery;
    body?: TiktokSellerSearchAffiliateOpenCollaborationProductBody;
};

export type TiktokSellerSearchAffiliateOpenCollaborationProductQuery = {
    sort_order?: 'ASC' | 'DESC';
    sort_field?: 'commission_rate' | 'product_sales_price' | 'commission' | 'units_sold';
    page_token?: string;
    page_size: number;
};

export type TiktokSellerSearchCreatorOnMarketplaceBody = {
    search_key: string;
    keyword: string;
    follower_demographics: {
        age_ranges: string[];
        count_range: {
            count_ge: number;
            count_le: number;
        };
        gender_distribution: {
            gender: 'MALE' | 'FEMALE' | 'OTHER';
            percentage_ge: number;
        };
    };
    gmv_ranges: string[];
    units_sold_ranges: string[];
};

export type TiktokSellerSearchCreatorOnMarketplaceParams = {
    query: TiktokSellerSearchCreatorOnMarketplaceQuery;
    body: TiktokSellerSearchCreatorOnMarketplaceBody;
};

export type TiktokSellerSearchCreatorOnMarketplaceQuery = {
    page_size: number;
    page_token?: string;
};

export type TiktokSellerSearchSampleApplicationsBody = {
    product_id?: string;
    title?: string;
    creator_user_id?: string;
    username?: string;
    target_collabration_id?: string;
    order_id?: string;
    status?: TiktokSampleApplicationStatus;
};

export type TiktokSellerSearchSampleApplicationsFulfillmentsBody = {
    content_format?: 'LIVE' | 'VIDEO';
};

export type TiktokSellerSearchSampleApplicationsFulfillmentsParams = {
    application_id: string;
    body?: TiktokSellerSearchSampleApplicationsFulfillmentsBody;
};

export type TiktokSellerSearchSampleApplicationsParams = {
    query: TiktokSellerSearchSampleApplicationsQuery;
    body: TiktokSellerSearchSampleApplicationsBody;
};

export type TiktokSellerSearchSampleApplicationsQuery = {
    page_token?: string;
    page_size?: string;
};

export type TiktokSendImMessageBody = {
    only_need_conversation_id?: boolean;
};

export type TiktokSendImMessageParams = {
    conversation_id: string;
    body: TiktokSendImMessageBody;
};

export type TiktokUpdateTargetCollaborationBody = {
    name: string;
    end_time: string;
    products: {
        id: string;
        commission_rate: number;
    }[];
    creator_user_ids: string[];
    seller_contact_info: {
        email: string;
    };
    free_sample_rule: {
        has_free_sample: boolean;
        is_sample_approval_exempt: boolean;
    };
};

export type TiktokUpdateTargetCollaborationParams = {
    target_collaboration_id: string;
    body: TiktokUpdateTargetCollaborationBody;
};
