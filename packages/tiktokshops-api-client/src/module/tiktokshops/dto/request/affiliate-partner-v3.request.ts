import {
  TiktokContactInfo,
} from '../response/affiliate-partner-v3.response';

export type TiktokCreateAffiliatePartnerCampaignBody = {
    name: string;
    description: string;
    campaign_start_time: number;
    campaign_end_time: number;
    registration_start_time: number;
    registration_end_time: number;
    commission_rate: number;
    contact_info: TiktokContactInfo;
    target_shop_codes?: string[];
    target_seller_types?: ('LOCAL' | 'CROSS_BORDER')[];
};

export type TiktokEditAffiliatePartnerCampaignBody = {
    name?: string;
    description?: string;
    campaign_start_time?: number;
    campaign_end_time?: number;
    registration_start_time?: number;
    registration_end_time?: number;
    commission_rate?: number;
    contact_info?: TiktokContactInfo;
    target_shop_codes?: string[];
    target_seller_types?: ('LOCAL' | 'CROSS_BORDER')[];
};

export type TiktokGenerateAffiliatePartnerCampaignProductLinkBody = {
    creator_commission_rate: number;
};

export type TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoQuery = {
    page_size?: number;
    page_token?: string;
};

export type TiktokGetAffiliateCampaignCreatorFulfillmentStatusList = {
    page_size?: number;
    page_token?: string;
};

export type TiktokGetAffiliateCampaignCreatorProductContentStatisticsQuery = {
    affiliate_product_id: string;
    content_type?: '1' | '2'; // 1 = VIDEO, 2 = LIVE_ROOM
};

export type TiktokGetAffiliatePartnerCampaignListQuery = {
    page_size: number;
    page_token?: string;
    status?: 'READY' | 'UPCOMING' | 'ONGOING' | 'CLOSED' | 'UNSPECIFIED';
    type?: 'MY_CAMPAIGNS' | 'GS_SELLING_CAMPAIGNS' | 'SELLER_CAMPAIGNS' | 'EXCLUSIVE_TIKTOK_SHOP';
    query_type_filter?: 'MARKETPLACE' | 'JOINED' | 'AVAILABLE' | 'Default';
};

export type TiktokGetAffiliatePartnerCampaignProductListQuery = {
    page_size: number;
    page_token?: string;
    review_status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'PENDING_CLOSED' | 'CLOSED';
    product_name?: string;
    product_id?: string;
    shop_name?: string;
    category_id?: string;
};

export type TiktokPartnerGenerateMultiAffiliateCampaignProductLinkBody = {
    product_ids: string[];
};

export type TiktokReviewAffiliatePartnerCampaignProductBody = {
    review_result: 'APPROVE' | 'REJECT' | 'REJECT_FOREVER';
    reject_reasons?: ('COMMISSION_TOO_LOW' | 'PRODUCT_HARD_TO_PROMOTE' | 'PRODUCT_TOO_EXPENSIVE' | 'NO_SUITABLE_CREATOR')[];
};

export type TiktokSearchCAPAffiliateOrdersBody = {
    order_id?: string;
    order_status?: number;
    product_id?: string;
    create_time_ge?: number;
    create_time_lt?: number;
};

export type TiktokSearchTapAffiliateOrdersBody = {
    create_time_ge?: number;
    create_time_lt?: number;
    campaign_id?: string;
};
