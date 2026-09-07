import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
import {
  TiktokCreateAffiliatePartnerCampaignBody,
  TiktokEditAffiliatePartnerCampaignBody,
  TiktokGenerateAffiliatePartnerCampaignProductLinkBody,
  TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoQuery,
  TiktokGetAffiliateCampaignCreatorFulfillmentStatusList,
  TiktokGetAffiliateCampaignCreatorProductContentStatisticsQuery,
  TiktokGetAffiliatePartnerCampaignListQuery,
  TiktokGetAffiliatePartnerCampaignProductListQuery,
  TiktokPartnerGenerateMultiAffiliateCampaignProductLinkBody,
  TiktokReviewAffiliatePartnerCampaignProductBody,
  TiktokSearchCAPAffiliateOrdersBody,
  TiktokSearchTapAffiliateOrdersBody,
} from '../dto/request/affiliate-partner-v3.request';
import {
  TiktokAffiliatePartnerCampaignDetailResponse,
  TiktokCreateAffiliatePartnerCampaignResponse,
  TiktokEditAffiliatePartnerCampaignResponse,
  TiktokGenerateAffiliatePartnerCampaignProductLinkResponse,
  TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoResponse,
  TiktokGetAffiliateCampaignCreatorFulfillmentStatusListResponse,
  TiktokGetAffiliateCampaignCreatorProductContentStatisticsResponse,
  TiktokGetAffiliateCampaignCreatorProductSampleStatusResponse,
  TiktokGetAffiliatePartnerCampaignListResponse,
  TiktokGetAffiliatePartnerCampaignProductListResponse,
  TiktokPartnerGenerateMultiAffiliateCampaignProductLinkResponse,
  TiktokSearchCAPAffiliateOrdersResponse,
  TiktokSearchTapAffiliateOrdersResponse,
} from '../dto/response/affiliate-partner-v3.response';

/**
 * Create a new affiliate partner campaign.
 */
export async function createAffiliatePartnerCampaign(params: {
    body: TiktokCreateAffiliatePartnerCampaignBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateAffiliatePartnerCampaignResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateAffiliatePartnerCampaignResponse>>(
    '/affiliate_partner/202405/campaigns',
    'POST',
    { body: params.body },
    config,
    'createAffiliatePartnerCampaign',
  );
}

/**
 * Partially update an existing affiliate partner campaign.
 */
export async function editAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
    };
    body: TiktokEditAffiliatePartnerCampaignBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokEditAffiliatePartnerCampaignResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokEditAffiliatePartnerCampaignResponse>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}/partial_edit`,
    'POST',
    { body: params.body },
    config,
    'editAffiliatePartnerCampaign',
  );
}

/**
 * Publish an affiliate partner campaign.
 */
export async function publishAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
    };
}, config: TiktokConfig): Promise<TiktokResponseCommon<Record<string, never>>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<Record<string, never>>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}/publish`,
    'POST',
    {},
    config,
    'publishAffiliatePartnerCampaign',
  );
}

/**
 * Review a product under a specific affiliate partner campaign.
 */
export async function reviewAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    body: TiktokReviewAffiliatePartnerCampaignProductBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<unknown>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<unknown>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}/products/${params.path.product_id}/review`,
    'POST',
    { body: params.body },
    config,
    'reviewAffiliatePartnerCampaign',
  );
}

/**
 * Generate a promotion link for a campaign product.
 */
export async function generateAffiliatePartnerCampaignProductLink(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    body: TiktokGenerateAffiliatePartnerCampaignProductLinkBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGenerateAffiliatePartnerCampaignProductLinkResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGenerateAffiliatePartnerCampaignProductLinkResponse>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}/products/${params.path.product_id}/promotion_link/generate`,
    'POST',
    { body: params.body },
    config,
    'generateAffiliatePartnerCampaignProductLink',
  );
}

/**
 * Retrieve detailed information for a specific campaign.
 */
export async function getAffiliatePartnerCampaignDetail(params: {
    path: {
        campaign_id: string;
    };
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokAffiliatePartnerCampaignDetailResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokAffiliatePartnerCampaignDetailResponse>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}`,
    'GET',
    {},
    config,
    'getAffiliatePartnerCampaignDetail',
  );
}

/**
 * Retrieve a paginated list of affiliate partner campaigns.
 */
export async function getAffiliatePartnerCampaignList(params: {
    query: TiktokGetAffiliatePartnerCampaignListQuery;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignListResponse>>(
    `/affiliate_partner/202405/campaigns`,
    'GET',
    { query: params.query },
    config,
    'getAffiliatePartnerCampaignList',
  );
}

/**
 * Retrieve the product list of a specific campaign.
 */
export async function getAffiliatePartnerCampaignProductList(params: {
    path: {
        campaign_id: string;
    };
    query: TiktokGetAffiliatePartnerCampaignProductListQuery;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignProductListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignProductListResponse>>(
    `/affiliate_partner/202405/campaigns/${params.path.campaign_id}/products`,
    'GET',
    { query: params.query },
    config,
    'getAffiliatePartnerCampaignProductList',
  );
}

/**
 * Search TAP affiliate orders.
 */
export async function searchTapAffiliateOrders(params: {
    query: {
        page_size: number;
        page_token: string;
    };
    body: TiktokSearchTapAffiliateOrdersBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchTapAffiliateOrdersResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchTapAffiliateOrdersResponse>>(
    `/affiliate_partner/202411/orders/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchTapAffiliateOrders',
  );
}

/**
 * Retrieve fulfillment and performance status for all products
 * under a specific campaign.
 */
export async function getAffiliateCampaignCreatorFulfillmentStatusList(params: {
    path: {
        campaign_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorFulfillmentStatusList;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusListResponse>>(
    `/affiliate_partner/202501/campaigns/${params.path.campaign_id}/products/performance`,
    'GET',
    { query: params.query },
    config,
    'getAffiliateCampaignCreatorFulfillmentStatusList',
  );
}

/**
 * Search CAP affiliate orders.
 */
export async function searchCAPAffiliateOrders(params: {
    query: {
        page_size: number;
        page_token: string;
    };
    body?: TiktokSearchCAPAffiliateOrdersBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchCAPAffiliateOrdersResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchCAPAffiliateOrdersResponse>>(
    `/affiliate_partner/202504/cap_order/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchCAPAffiliateOrders',
  );
}

/**
 * Generate promotion links for multiple products in a campaign (batch).
 */
export async function partnerGenerateMultiAffiliateCampaignProductLink(params: {
    path: {
        campaign_id: string;
    };
    body: TiktokPartnerGenerateMultiAffiliateCampaignProductLinkBody;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokPartnerGenerateMultiAffiliateCampaignProductLinkResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokPartnerGenerateMultiAffiliateCampaignProductLinkResponse>>(
    `/affiliate_partner/202505/campaigns/${params.path.campaign_id}/products/promotion_links/generate_batch`,
    'POST',
    { body: params.body },
    config,
    'partnerGenerateMultiAffiliateCampaignProductLink',
  );
}

/**
 * Retrieve fulfillment and performance details for a specific product
 * under a campaign.
 */
export async function getAffiliateCampaignCreatorFulfillmentStatusInfo(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoQuery;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoResponse>>(
    `/affiliate_partner/202508/campaigns/${params.path.campaign_id}/products/${params.path.product_id}/performance`,
    'GET',
    { query: params.query },
    config,
    'getAffiliateCampaignCreatorFulfillmentStatusInfo',
  );
}

/**
 * Retrieve content performance statistics for a creator
 * on a specific campaign product.
 */
export async function getAffiliateCampaignCreatorProductContentStatistics(params: {
    path: {
        campaign_id: string;
        product_id: string;
        creator_temp_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorProductContentStatisticsQuery;
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductContentStatisticsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductContentStatisticsResponse>>(
    `/affiliate_partner/202508/campaigns/${params.path.campaign_id}/products/${params.path.product_id}/creator/${params.path.creator_temp_id}/content/statistics`,
    'GET',
    { query: params.query },
    config,
    'getAffiliateCampaignCreatorProductContentStatistics',
  );
}

/**
 * Retrieve sample request status for a creator
 * on a specific campaign product.
 */
export async function getAffiliateCampaignCreatorProductSampleStatus(params: {
    path: {
        campaign_id: string;
        product_id: string;
        creator_temp_id: string;
    };
}, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductSampleStatusResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductSampleStatusResponse>>(
    `/affiliate_partner/202508/campaigns/${params.path.campaign_id}/products/${params.path.product_id}/creator/${params.path.creator_temp_id}/content/statistics/sample/status`,
    'GET',
    {},
    config,
    'getAffiliateCampaignCreatorProductSampleStatus',
  );
}
