import { TiktokConfig } from '../dto/request/config.request';
import {
  createAffiliatePartnerCampaign,
  editAffiliatePartnerCampaign,
  generateAffiliatePartnerCampaignProductLink,
  getAffiliateCampaignCreatorFulfillmentStatusInfo,
  getAffiliateCampaignCreatorFulfillmentStatusList,
  getAffiliateCampaignCreatorProductContentStatistics,
  getAffiliateCampaignCreatorProductSampleStatus,
  getAffiliatePartnerCampaignDetail,
  getAffiliatePartnerCampaignList,
  getAffiliatePartnerCampaignProductList,
  partnerGenerateMultiAffiliateCampaignProductLink,
  publishAffiliatePartnerCampaign,
  reviewAffiliatePartnerCampaign,
  searchCAPAffiliateOrders,
  searchTapAffiliateOrders,
} from '../api/affiliate-partner-v3.api';
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
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `AffiliatePartner` API namespace.
 *
 * Access via `tiktok.affiliatePartner.<method>()` on a `TiktokModule` instance.
 */
export class TiktokAffiliatePartner {
  constructor(private config: TiktokConfig) {}

  async createAffiliatePartnerCampaign(params: {
    body: TiktokCreateAffiliatePartnerCampaignBody;
}): Promise<TiktokResponseCommon<TiktokCreateAffiliatePartnerCampaignResponse>> {
    return await createAffiliatePartnerCampaign(params, this.config);
  }

  async editAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
    };
    body: TiktokEditAffiliatePartnerCampaignBody;
}): Promise<TiktokResponseCommon<TiktokEditAffiliatePartnerCampaignResponse>> {
    return await editAffiliatePartnerCampaign(params, this.config);
  }

  async publishAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
    };
}): Promise<TiktokResponseCommon<Record<string, never>>> {
    return await publishAffiliatePartnerCampaign(params, this.config);
  }

  async reviewAffiliatePartnerCampaign(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    body: TiktokReviewAffiliatePartnerCampaignProductBody;
}): Promise<TiktokResponseCommon<unknown>> {
    return await reviewAffiliatePartnerCampaign(params, this.config);
  }

  async generateAffiliatePartnerCampaignProductLink(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    body: TiktokGenerateAffiliatePartnerCampaignProductLinkBody;
}): Promise<TiktokResponseCommon<TiktokGenerateAffiliatePartnerCampaignProductLinkResponse>> {
    return await generateAffiliatePartnerCampaignProductLink(params, this.config);
  }

  async getAffiliatePartnerCampaignDetail(params: {
    path: {
        campaign_id: string;
    };
}): Promise<TiktokResponseCommon<TiktokAffiliatePartnerCampaignDetailResponse>> {
    return await getAffiliatePartnerCampaignDetail(params, this.config);
  }

  async getAffiliatePartnerCampaignList(params: {
    query: TiktokGetAffiliatePartnerCampaignListQuery;
}): Promise<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignListResponse>> {
    return await getAffiliatePartnerCampaignList(params, this.config);
  }

  async getAffiliatePartnerCampaignProductList(params: {
    path: {
        campaign_id: string;
    };
    query: TiktokGetAffiliatePartnerCampaignProductListQuery;
}): Promise<TiktokResponseCommon<TiktokGetAffiliatePartnerCampaignProductListResponse>> {
    return await getAffiliatePartnerCampaignProductList(params, this.config);
  }

  async searchTapAffiliateOrders(params: {
    query: {
        page_size: number;
        page_token: string;
    };
    body: TiktokSearchTapAffiliateOrdersBody;
}): Promise<TiktokResponseCommon<TiktokSearchTapAffiliateOrdersResponse>> {
    return await searchTapAffiliateOrders(params, this.config);
  }

  async getAffiliateCampaignCreatorFulfillmentStatusList(params: {
    path: {
        campaign_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorFulfillmentStatusList;
}): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusListResponse>> {
    return await getAffiliateCampaignCreatorFulfillmentStatusList(params, this.config);
  }

  async searchCAPAffiliateOrders(params: {
    query: {
        page_size: number;
        page_token: string;
    };
    body?: TiktokSearchCAPAffiliateOrdersBody;
}): Promise<TiktokResponseCommon<TiktokSearchCAPAffiliateOrdersResponse>> {
    return await searchCAPAffiliateOrders(params, this.config);
  }

  async partnerGenerateMultiAffiliateCampaignProductLink(params: {
    path: {
        campaign_id: string;
    };
    body: TiktokPartnerGenerateMultiAffiliateCampaignProductLinkBody;
}): Promise<TiktokResponseCommon<TiktokPartnerGenerateMultiAffiliateCampaignProductLinkResponse>> {
    return await partnerGenerateMultiAffiliateCampaignProductLink(params, this.config);
  }

  async getAffiliateCampaignCreatorFulfillmentStatusInfo(params: {
    path: {
        campaign_id: string;
        product_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoQuery;
}): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorFulfillmentStatusInfoResponse>> {
    return await getAffiliateCampaignCreatorFulfillmentStatusInfo(params, this.config);
  }

  async getAffiliateCampaignCreatorProductContentStatistics(params: {
    path: {
        campaign_id: string;
        product_id: string;
        creator_temp_id: string;
    };
    query?: TiktokGetAffiliateCampaignCreatorProductContentStatisticsQuery;
}): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductContentStatisticsResponse>> {
    return await getAffiliateCampaignCreatorProductContentStatistics(params, this.config);
  }

  async getAffiliateCampaignCreatorProductSampleStatus(params: {
    path: {
        campaign_id: string;
        product_id: string;
        creator_temp_id: string;
    };
}): Promise<TiktokResponseCommon<TiktokGetAffiliateCampaignCreatorProductSampleStatusResponse>> {
    return await getAffiliateCampaignCreatorProductSampleStatus(params, this.config);
  }
}
