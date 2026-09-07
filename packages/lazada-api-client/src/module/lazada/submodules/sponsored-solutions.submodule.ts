import { LazadaConfig } from '../dto/request/config.request';
import {
  addAdgroupBatch,
  addSolution,
  clickserver,
  deleteAdgroupBatch,
  deleteCampaign,
  getAccountSignInfo,
  getAutoTopUpOptionOneConfig,
  getCampaign,
  getCampaignCount,
  getDiscoveryReportAdgroup,
  getDiscoveryReportAudience,
  getDiscoveryReportCampaign,
  getDiscoveryReportKeyword,
  getLatestSignInfo,
  getReportCampaignOnFIrstSlot,
  getReportOverview,
  getReportOverviewMetric,
  listCategory,
  listKeywordByAdgroup,
  listKeywordByItem,
  modifyAutoTopUpOptionOneConfig,
  searchAdgroupList,
  searchCampaignList,
  searchKeyword,
  searchProductWithPage,
  sign,
  updateAdgroupBatch,
  updateCampaign,
} from '../api/sponsored-solutions.api';
import {
  SponsoredSolutionsAddAdgroupBatchRequest,
  SponsoredSolutionsAddSolutionRequest,
  SponsoredSolutionsClickserverRequest,
  SponsoredSolutionsDeleteAdgroupBatchRequest,
  SponsoredSolutionsDeleteCampaignRequest,
  SponsoredSolutionsGetAccountSignInfoRequest,
  SponsoredSolutionsGetAutoTopUpOptionOneConfigRequest,
  SponsoredSolutionsGetCampaignCountRequest,
  SponsoredSolutionsGetCampaignRequest,
  SponsoredSolutionsGetDiscoveryReportAdgroupRequest,
  SponsoredSolutionsGetDiscoveryReportAudienceRequest,
  SponsoredSolutionsGetDiscoveryReportCampaignRequest,
  SponsoredSolutionsGetDiscoveryReportKeywordRequest,
  SponsoredSolutionsGetLatestSignInfoRequest,
  SponsoredSolutionsGetReportCampaignOnFIrstSlotRequest,
  SponsoredSolutionsGetReportOverviewMetricRequest,
  SponsoredSolutionsGetReportOverviewRequest,
  SponsoredSolutionsListCategoryRequest,
  SponsoredSolutionsListKeywordByAdgroupRequest,
  SponsoredSolutionsListKeywordByItemRequest,
  SponsoredSolutionsModifyAutoTopUpOptionOneConfigRequest,
  SponsoredSolutionsSearchAdgroupListRequest,
  SponsoredSolutionsSearchCampaignListRequest,
  SponsoredSolutionsSearchKeywordRequest,
  SponsoredSolutionsSearchProductWithPageRequest,
  SponsoredSolutionsSignRequest,
  SponsoredSolutionsUpdateAdgroupBatchRequest,
  SponsoredSolutionsUpdateCampaignRequest,
} from '../dto/request/sponsored-solutions.request';
import {
  SponsoredSolutionsAddAdgroupBatchResponse,
  SponsoredSolutionsAddSolutionResponse,
  SponsoredSolutionsClickserverResponse,
  SponsoredSolutionsDeleteAdgroupBatchResponse,
  SponsoredSolutionsDeleteCampaignResponse,
  SponsoredSolutionsGetAccountSignInfoResponse,
  SponsoredSolutionsGetAutoTopUpOptionOneConfigResponse,
  SponsoredSolutionsGetCampaignCountResponse,
  SponsoredSolutionsGetCampaignResponse,
  SponsoredSolutionsGetDiscoveryReportAdgroupResponse,
  SponsoredSolutionsGetDiscoveryReportAudienceResponse,
  SponsoredSolutionsGetDiscoveryReportCampaignResponse,
  SponsoredSolutionsGetDiscoveryReportKeywordResponse,
  SponsoredSolutionsGetLatestSignInfoResponse,
  SponsoredSolutionsGetReportCampaignOnFIrstSlotResponse,
  SponsoredSolutionsGetReportOverviewMetricResponse,
  SponsoredSolutionsGetReportOverviewResponse,
  SponsoredSolutionsListCategoryResponse,
  SponsoredSolutionsListKeywordByAdgroupResponse,
  SponsoredSolutionsListKeywordByItemResponse,
  SponsoredSolutionsModifyAutoTopUpOptionOneConfigResponse,
  SponsoredSolutionsSearchAdgroupListResponse,
  SponsoredSolutionsSearchCampaignListResponse,
  SponsoredSolutionsSearchKeywordResponse,
  SponsoredSolutionsSearchProductWithPageResponse,
  SponsoredSolutionsSignResponse,
  SponsoredSolutionsUpdateAdgroupBatchResponse,
  SponsoredSolutionsUpdateCampaignResponse,
} from '../dto/response/sponsored-solutions.response';

/**
 * Lazada `sponsored-solutions-api` API namespace.
 *
 * Access via `lazada.sponsoredSolutions.<method>()` on a `LazadaModule` instance.
 */
export class LazadaSponsoredSolutions {
  constructor(private config: LazadaConfig) {}

  async getAccountSignInfo(): Promise<SponsoredSolutionsGetAccountSignInfoResponse> {
    return await getAccountSignInfo(this.config);
  }

  async getLatestSignInfo(): Promise<SponsoredSolutionsGetLatestSignInfoResponse> {
    return await getLatestSignInfo(this.config);
  }

  async getCampaign(params: SponsoredSolutionsGetCampaignRequest): Promise<SponsoredSolutionsGetCampaignResponse> {
    return await getCampaign(params, this.config);
  }

  async getCampaignCount(params: SponsoredSolutionsGetCampaignCountRequest): Promise<SponsoredSolutionsGetCampaignCountResponse> {
    return await getCampaignCount(params, this.config);
  }

  async listCategory(params: SponsoredSolutionsListCategoryRequest): Promise<SponsoredSolutionsListCategoryResponse> {
    return await listCategory(params, this.config);
  }

  async listKeywordByAdgroup(params: SponsoredSolutionsListKeywordByAdgroupRequest): Promise<SponsoredSolutionsListKeywordByAdgroupResponse> {
    return await listKeywordByAdgroup(params, this.config);
  }

  async listKeywordByItem(params: SponsoredSolutionsListKeywordByItemRequest): Promise<SponsoredSolutionsListKeywordByItemResponse> {
    return await listKeywordByItem(params, this.config);
  }

  async getDiscoveryReportAdgroup(params: SponsoredSolutionsGetDiscoveryReportAdgroupRequest): Promise<SponsoredSolutionsGetDiscoveryReportAdgroupResponse> {
    return await getDiscoveryReportAdgroup(params, this.config);
  }

  async getDiscoveryReportAudience(params: SponsoredSolutionsGetDiscoveryReportAudienceRequest): Promise<SponsoredSolutionsGetDiscoveryReportAudienceResponse> {
    return await getDiscoveryReportAudience(params, this.config);
  }

  async getDiscoveryReportCampaign(params: SponsoredSolutionsGetDiscoveryReportCampaignRequest): Promise<SponsoredSolutionsGetDiscoveryReportCampaignResponse> {
    return await getDiscoveryReportCampaign(params, this.config);
  }

  async getDiscoveryReportKeyword(params: SponsoredSolutionsGetDiscoveryReportKeywordRequest): Promise<SponsoredSolutionsGetDiscoveryReportKeywordResponse> {
    return await getDiscoveryReportKeyword(params, this.config);
  }

  async getReportCampaignOnFIrstSlot(params: SponsoredSolutionsGetReportCampaignOnFIrstSlotRequest): Promise<SponsoredSolutionsGetReportCampaignOnFIrstSlotResponse> {
    return await getReportCampaignOnFIrstSlot(params, this.config);
  }

  async getReportOverview(params: SponsoredSolutionsGetReportOverviewRequest): Promise<SponsoredSolutionsGetReportOverviewResponse> {
    return await getReportOverview(params, this.config);
  }

  async getReportOverviewMetric(params: SponsoredSolutionsGetReportOverviewMetricRequest): Promise<SponsoredSolutionsGetReportOverviewMetricResponse> {
    return await getReportOverviewMetric(params, this.config);
  }

  async getAutoTopUpOptionOneConfig(): Promise<SponsoredSolutionsGetAutoTopUpOptionOneConfigResponse> {
    return await getAutoTopUpOptionOneConfig(this.config);
  }

  async clickserver(params: SponsoredSolutionsClickserverRequest): Promise<SponsoredSolutionsClickserverResponse> {
    return await clickserver(params, this.config);
  }

  async sign(): Promise<SponsoredSolutionsSignResponse> {
    return await sign(this.config);
  }

  async addSolution(params: SponsoredSolutionsAddSolutionRequest): Promise<SponsoredSolutionsAddSolutionResponse> {
    return await addSolution(params, this.config);
  }

  async addAdgroupBatch(params: SponsoredSolutionsAddAdgroupBatchRequest): Promise<SponsoredSolutionsAddAdgroupBatchResponse> {
    return await addAdgroupBatch(params, this.config);
  }

  async deleteAdgroupBatch(params: SponsoredSolutionsDeleteAdgroupBatchRequest): Promise<SponsoredSolutionsDeleteAdgroupBatchResponse> {
    return await deleteAdgroupBatch(params, this.config);
  }

  async searchAdgroupList(params: SponsoredSolutionsSearchAdgroupListRequest): Promise<SponsoredSolutionsSearchAdgroupListResponse> {
    return await searchAdgroupList(params, this.config);
  }

  async updateAdgroupBatch(params: SponsoredSolutionsUpdateAdgroupBatchRequest): Promise<SponsoredSolutionsUpdateAdgroupBatchResponse> {
    return await updateAdgroupBatch(params, this.config);
  }

  async deleteCampaign(params: SponsoredSolutionsDeleteCampaignRequest): Promise<SponsoredSolutionsDeleteCampaignResponse> {
    return await deleteCampaign(params, this.config);
  }

  async searchCampaignList(params: SponsoredSolutionsSearchCampaignListRequest): Promise<SponsoredSolutionsSearchCampaignListResponse> {
    return await searchCampaignList(params, this.config);
  }

  async updateCampaign(params: SponsoredSolutionsUpdateCampaignRequest): Promise<SponsoredSolutionsUpdateCampaignResponse> {
    return await updateCampaign(params, this.config);
  }

  async searchKeyword(params: SponsoredSolutionsSearchKeywordRequest): Promise<SponsoredSolutionsSearchKeywordResponse> {
    return await searchKeyword(params, this.config);
  }

  async searchProductWithPage(params: SponsoredSolutionsSearchProductWithPageRequest): Promise<SponsoredSolutionsSearchProductWithPageResponse> {
    return await searchProductWithPage(params, this.config);
  }

  async modifyAutoTopUpOptionOneConfig(params: SponsoredSolutionsModifyAutoTopUpOptionOneConfigRequest): Promise<SponsoredSolutionsModifyAutoTopUpOptionOneConfigResponse> {
    return await modifyAutoTopUpOptionOneConfig(params, this.config);
  }
}
