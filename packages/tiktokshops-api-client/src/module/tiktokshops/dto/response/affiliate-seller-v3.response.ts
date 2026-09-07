export type TiktokCreateConversationWithCreatorResponse = {
    conversation_id?: string;
    is_new?: boolean;
    username?: string;
    avatar?: string;
    unread_count?: number;
    creator_im_id?: string;
};

export type TiktokCreateConversationwithCreatorResponse = {
    conversation_id?: string;
    is_new?: string;
    username?: string;
    avatar?: string;
    unread_count?: string;
    creator_im_id?: string;
};

export type TiktokCreateOpenCollaborationResponse = {
    open_collaboration?: {
        id?: string;
        product_id?: string;
        effective_time?: number;
    };
};

export type TiktokCreateTargetCollaborationResponse = {
    target_collaboration: {
        id: string;
    };
    target_collaboration_conflicts: {
        creator_user_id: string;
        product_id: string;
    }[];
};

export type TiktokEditOpenCollaborationSampleRuleResponse = object;

export type TiktokEditOpenCollaborationSettingsResponse = object;

export type TiktokGenerateAffiliateProductPromotionLinkParams = {
    product_id: string;
};

// type GenerateAffiliateProductPromotionLinkBody = {
//     creator_user_id: string;
//     product_id: string;
// }
export type TiktokGenerateAffiliateProductPromotionLinkResponse = {
    product_promotion_link?: string;
};

export type TiktokGetConversationListResponse = {
    has_more?: boolean;
    next_page_token?: string;
    conversations?: {
        id?: string;
        unread_count?: number;
        username?: string;
        avatar?: string;
        creator_im_id?: string;
    }[];
};

export type TiktokGetLatestUnreadMessagesResponse = {
    conversation_id: string;
    content: string;
    type: TiktokMessageType;
    sender_id: string;
    unread_message_count: number;
};

export type TiktokGetMarketplaceCreatorPerformanceResponse = {
    creator?: {
        username?: string;
        nickname?: string;
        avatar?: {
            url?: string;
        };
        selection_region?: string;
        bio_description?: string;
        follower_count?: number;
        profile_tt_uri?: string;
        category_ids?: string[];
        top_collaborated_brand_ids?: string[];
        brand_collaboration_count?: number;
        units_sold?: number;
        units_sold_range?: {
            minimum_amount?: number;
            maximum_amount?: number;
            formatted_range?: string;
        };
        gmv?: {
            currency?: string;
            amount?: string;
        };
        video_gmv?: {
            currency?: string;
            amount?: string;
        };
        live_gmv?: {
            currency?: string;
            amount?: string;
        };
        gmv_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        ec_live_engagement_rate?: string;
        category_gmv_distribution?: {
            category_id?: string;
            value?: string;
        }[];
        content_gmv_distribution?: {
            content_type?: string;
            value?: string;
        }[];
        product_original_price_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
        };
        gpm?: {
            currency?: string;
            amount?: string;
        };
        live_gpm?: {
            currency?: string;
            amount?: string;
        };
        video_gpm?: {
            currency?: string;
            amount?: string;
        };
        gpm_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        video_gpm_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        live_gpm_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        promoted_product_num?: number;
        ec_live_count?: number;
        ec_video_count?: number;
        avg_ec_video_play_count?: number;
        avg_commission_rate?: number;
        avg_commission_rate_range?: {
            minimum_amount?: number;
            maximum_amount?: number;
        };
        avg_gmv_per_buyer?: {
            currency?: string;
            amount?: string;
        };
        avg_gmv_per_buyer_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        avg_ec_live_view_count?: number;
        avg_ec_live_like_count?: number;
        avg_ec_live_comment_count?: number;
        avg_ec_live_share_count?: number;
        avg_ec_video_like_count?: number;
        avg_ec_video_comment_count?: number;
        avg_ec_video_share_count?: number;
    };
};

export type TiktokGetMessageInTheConversationResponse = {
    has_more?: boolean;
    next_page_token?: string;
    messages?: {
        conversation_index?: string;
        message_body?: {
            id?: string;
            conversation_id?: string;
            type?: string;
            content?: string;
            create_time?: number;
            sender_id?: string;
        };
    }[];
};

export type TiktokGetOpenCollaborationCreatorContentDetailResponse = {
    next_page_token?: string;
    total_count?: number;
    creator_content_details?: {
        creator_profile?: {
            username?: string;
            nickname?: string;
            follower_count?: number;
            avatar?: {
                url?: string;
            };
        };
        video_count?: number;
        live_count?: number;
        promotion_status?: string;
        promotion_end_time?: number;
    }[];
    product?: {
        id?: string;
        image_url?: string;
    };
};

export type TiktokGetOpenCollaborationSampleRulesResponse = {
    sample_rules?: {
        product_id?: string;
        sample_quota?: number;
        is_sample_time_unlimited?: boolean;
        status?: string;
        available_quantity?: number;
        start_time?: number;
        end_time?: number;
        thresholds?: {
            minimum_follower_count?: number;
            minimum_gmv?: number;
            avg_ec_video_views?: number;
            category_ids?: string[];
            predicted_fulfillment_rank?: string;
        };
    }[];
};

export type TiktokGetOpenCollaborationSettingsResponse = {
    open_collaboration_settings?: {
        auto_add_product?: {
            enable?: boolean;
            commission_rate?: number;
        };
    };
};

export type TiktokMarkConversationReadResponse = {
    failed_conversation_ids?: string[];
};

export type TiktokMessageType = 'TEXT' | 'IMAGE' | 'VIDEO' | 'CARD';

export type TiktokQueryTargetCollaborationDetailResponse = {
    target_collaboration?: {
        id?: string;
        name?: string;
        message?: string;
        seller_contact_info?: {
            email?: string;
        };
        start_time?: number;
        end_time?: number;
        update_time?: number;
        creator_invited_count?: number;
        showcase_creator_count?: number;
        content_creator_count?: number;
        product_count?: number;
        free_sample_rule?: {
            has_free_sample?: boolean;
            is_sample_approval_exempt?: boolean;
        };
        products?: {
            id?: string;
            main_image_url?: string;
            title?: string;
            original_price?: {
                currency?: string;
                minimum_amount?: string;
                maximum_amount?: string;
            };
            commission?: {
                rate?: number;
                effective_time?: string;
                currency?: string;
                minimum_amount?: string;
                maximum_amount?: string;
            };
            status?: string;
            commission_effective_status?: string;
            collaboration_status?: string;
        }[];
        creators?: {
            username?: string;
            nickname?: string;
            avatar?: {
                url?: string;
            };
            selection_region?: string;
            showcase_product_count?: number;
            content_product_count?: number;
            collaboration_status?: string;
            product_effective_status?: string;
        }[];
        type?: string;
    };
};

export type TiktokQueryTargetCollaborationDetailResponse222 = {
    next_page_token?: string;
    total_count?: number;
    creator_content_details?: {
        creator_profile?: {
            username?: string;
            nickname?: string;
            follower_count?: number;
            avatar?: {
                url?: string;
            };
        };
        video_count?: number;
        live_count?: number;
        promotion_status?: string;
        promotion_end_time?: number;
    }[];
    product?: {
        id?: string;
        image_url?: string;
    };
};

export type TiktokRemoveCreatorFromOpenCollaborationResponse = object;

export type TiktokRemoveOpenCollaborationResponse = {
    terminated_effective_time?: number;
};

export type TiktokSampleApplicationCreator = {
    user_id?: string;
    username?: string;
    nickname?: string;
    follower_count?: number;
    avatar_url?: string;
    gmv?: {
        amount?: string;
        currency?: string;
    };
    content_count?: number;
    fulfillment_percentage?: string;
    ec_video_view?: number;
};

export type TiktokSampleApplicationItem = {
    id?: string;
    commission_rate?: string;
    status?: string;
    order_id?: string;
    available_quantity?: number;
    approve_expiration_time?: number;
    shipment_expiration_time?: number;
    tracking_number?: string;
    fulfillment_status?: string;
    is_approvable?: boolean;
    disapprovable_reasons?: string[];
    partner_name?: string;
    creator?: TiktokSampleApplicationCreator;
    product?: TiktokSampleApplicationProduct;
};

export type TiktokSampleApplicationProduct = {
    id?: string;
    title?: string;
    sku_id?: string;
    sku_image_url?: string;
    sku_name?: string;
};

export type TiktokSearchOpenCollaborationResponse = {
    next_page_token?: string;
    total_count?: number;
    open_collaborations?: {
        id?: string;
        status?: string;
        current_commission?: {
            rate?: number;
            start_time?: number;
            end_time?: number;
        };
        showcase_creator_count?: number;
        content_creator_count?: number;
        product?: {
            id?: string;
            title?: string;
            main_image_url?: string;
            status?: string;
            inventory?: number;
            original_price?: {
                currency?: string;
                minimum_amount?: string;
                maximum_amount?: string;
            };
        };
    }[];
};

export type TiktokSearchSellerAffiliateOrdersResponse = {
    orders?: {
        id?: string;
        delivery_time?: number;
        create_time?: number;
        status?: string;
        skus?: {
            open_collaboration_id?: string;
            target_collaboration_id?: string;
            campaign_id?: string;
            creator_username?: string;
            price?: {
                amount?: string;
                currency?: string;
            };
            quantity?: number;
            content_type?: string;
            content_id?: string;
            product_id?: string;
            commission_rate?: string;
            shop_ads_commission_rate?: string;
            estimated_commission_base?: {
                amount?: string;
                currency?: string;
            };
            estimated_paid_shop_ads_commission?: {
                amount?: string;
                currency?: string;
            };
            estimated_paid_commission?: {
                amount?: string;
                currency?: string;
            };
            actual_commission_base?: {
                amount?: string;
                currency?: string;
            };
            actual_paid_commission?: {
                amount?: string;
                currency?: string;
            };
            actual_paid_shop_ads_commission?: {
                amount?: string;
                currency?: string;
            };
            refunded_quantity?: number;
            returned_quantity?: number;
            estimated_cofunded_creator_bonus_amount?: {
                amount?: string;
                currency?: string;
            };
            actual_cofunded_creator_bonus_amount?: {
                amount?: string;
                currency?: string;
            };
        }[];
    }[];
    next_page_token?: string;
    total_count?: number;
};

export type TiktokSearchTargetCollaborationsResponse = {
    total_count?: number;
    next_page_token?: string;
    target_collaborations?: {
        id?: string;
        name?: string;
        message?: string;
        start_time?: number;
        end_time?: number;
        update_time?: number;
        creator_inivited_count?: number;
        showcase_creator_count?: number;
        content_creator_count?: number;
        product_count?: number;
        free_sample_rule?: {
            has_free_sample?: boolean;
            is_sample_approval_exempt?: boolean;
        };
        type?: string;
    }[];
};

export type TiktokSellerReviewSampleApplicationsResponse = object;

export type TiktokSellerSearchAffiliateOpenCollaborationProductResponse = {
    products?: {
        shop?: {
            name?: string;
        };
        id?: string;
        has_inventory?: boolean;
        units_sold?: number;
        title?: string;
        sale_region?: string;
        main_image_url?: string;
        detail_link?: string;
        original_price?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
        };
        category_chains?: {
            id?: string;
            local_name?: string;
            is_leaf?: boolean;
            parent_id?: string;
        }[];
        commission?: {
            rate?: number;
            currency?: string;
            amount?: string;
        };
        sales_price?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
        };
    }[];
    next_page_token?: string;
    total_count?: number;
};

export type TiktokSellerSearchCreatorOnMarketplaceResponse = {
    next_page_token?: string;
    search_key?: string;
    creators?: {
        username?: string;
        nickname?: string;
        avatar?: {
            url?: string;
        };
        selection_region?: string;
        category_ids?: string[];
        avg_ec_live_uv?: number;
        avg_ec_video_view_count?: number;
        follower_count?: number;
        gmv?: {
            currency?: string;
            amount?: string;
        };
        live_gmv?: {
            currency?: string;
            amount?: string;
        };
        video_gmv?: {
            currency?: string;
            amount?: string;
        };
        gmv_range?: {
            currency?: string;
            minimum_amount?: string;
            maximum_amount?: string;
            formatted_range?: string;
        };
        units_sold_range?: {
            minimum_amount?: number;
            maximum_amount?: number;
            formatted_range?: string;
        };
        top_follower_demographics?: {
            age_ranges?: string[];
            major_gender?: {
                gender?: 'MALE' | 'FEMALE' | 'OTHER';
                percentage?: number;
            };
        };
    }[];
};

export type TiktokSellerSearchSampleApplicationsFulfillmentsResponse = {
    fulfillments?: {
        product?: {
            id?: string;
            main_image_url?: string;
        };
        content?: {
            id?: string;
            format?: string;
            url?: string;
            view_count?: number;
            like_count?: number;
            comment_count?: number;
            paid_order_count?: number;
            page_link?: string;
            description?: string;
            create_time?: number;
            live_end_time?: number;
        };
    }[];
};

export type TiktokSellerSearchSampleApplicationsResponse = {
    next_page_token?: string;
    total_count?: number;
    sample_applications?: TiktokSampleApplicationItem[];
};

export type TiktokSendImMessageResponse = {
    msg_type: string | 'TEXT' | 'PRODUCT_CARD' | 'TARGET_COLLABORATION_CARD' | 'FREE_SAMPLE_CARD';
    content: string;
};

export type TiktokUpdateTargetCollaborationResponse = {
    target_collaboration_conflicts?: {
        creator_user_id?: string;
        product_id?: string;
    }[];
    update_failed?: {
        remove_creator_ids?: string[];
        remove_product_ids?: string[];
        add_creator_ids?: string[];
        add_products?: {
            id?: string;
            commission_rate?: number;
        };
        change_commissions?: {
            product_id?: string;
            commission_rate?: number;
        };
        end_time?: number;
        seller_contact_info?: {
            email?: string;
        };
        name?: string;
    };
};
