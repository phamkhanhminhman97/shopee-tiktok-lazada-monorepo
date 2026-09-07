export type SponsoredSolutionsGetAccountSignInfoRequest = Record<string, never>;

export type SponsoredSolutionsGetLatestSignInfoRequest = Record<string, never>;

export interface SponsoredSolutionsGetCampaignRequest {
  bizCode: string;
  campaignId: number;
}

export interface SponsoredSolutionsGetCampaignCountRequest {
  bizCode: string;
}

export interface SponsoredSolutionsListCategoryRequest {
  parentId?: number;
}

export interface SponsoredSolutionsListKeywordByAdgroupRequest {
  campaignObjective: number;
  campaignType: number;
  bizCode: string;
  itemId: number;
  adgroupId: number;
}

export interface SponsoredSolutionsListKeywordByItemRequest {
  campaignObjective: number;
  campaignType: number;
  bizCode: string;
  itemId: number;
}

export interface SponsoredSolutionsGetDiscoveryReportAdgroupRequest {
  campaignType?: string;
  campaignName?: string;
  campaignId?: string;
  adgroupName?: string;
  adgroupId?: string;
  itemId?: string;
  useRtTable?: boolean;
  sort?: string;
  pageNo: string;
  pageSize: string;
  order?: string;
  startDate: string;
  endDate: string;
}

export interface SponsoredSolutionsGetDiscoveryReportAudienceRequest {
  campaignName?: string;
  campaignId?: number;
  audienceGroup?: number;
  sort?: string;
  order?: string;
  pageNo: number;
  pageSize: number;
  startDate: string;
  endDate: string;
}

export interface SponsoredSolutionsGetDiscoveryReportCampaignRequest {
  campaignId?: number;
  useRtTable?: boolean;
  sort?: string;
  order?: string;
  startDate: string;
  endDate: string;
  pageNo: string;
  pageSize: string;
  campaignType?: number;
  productType?: string;
  campaignName?: string;
}

export interface SponsoredSolutionsGetDiscoveryReportKeywordRequest {
  adgroupName?: string;
  adgroupId?: string;
  keyword?: string;
  useRtTable?: boolean;
  sort?: string;
  order?: string;
  pageNo: string;
  pageSize: string;
  startDate: string;
  endDate: string;
  campaignName?: string;
  campaignId?: string;
}

export interface SponsoredSolutionsGetReportCampaignOnFIrstSlotRequest {
  sort?: string;
  order?: string;
  pageNo: number;
  pageSize: number;
  startDate: string;
  endDate: string;
  campaignName?: string;
  campaignId?: number;
  productType?: string;
  useRtTable?: boolean;
}

export interface SponsoredSolutionsGetReportOverviewRequest {
  lastStartDate: string;
  endDate: string;
  useRtTable: boolean;
  bizCode: string;
  lastEndDate: string;
  startDate: string;
}

export interface SponsoredSolutionsGetReportOverviewMetricRequest {
  metricType: number;
  endDate: string;
  useRtTable: boolean;
  bizCode: string;
  startDate: string;
}

export type SponsoredSolutionsGetAutoTopUpOptionOneConfigRequest = Record<string, never>;

export interface SponsoredSolutionsClickserverCpcClickDO {
  ext?: string;
  referer?: string;
  e: string;
  utdId: string;
  ip: string;
  utkey?: string;
  utsid?: string;
  clickid?: string;
  userAgent?: string;
  accept?: string;
  cna?: string;
  host?: string;
}

export interface SponsoredSolutionsClickserverRequest {
  cpcClickDO?: SponsoredSolutionsClickserverCpcClickDO;
}

export type SponsoredSolutionsSignRequest = Record<string, never>;

export interface SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeedAudienceViewDTOList {
  adCrowdTag?: number;
  discount?: number;
}

export interface SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeedBidwordViewDTOList {
  keyword?: string;
  bidPrice?: string;
}

export interface SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeed {
  adgroupName: string;
  bidPrice?: string;
  autoKeyword: number;
  audienceViewDTOList?: SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeedAudienceViewDTOList[];
  itemId: number;
  bidwordViewDTOList?: SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeedBidwordViewDTOList[];
  autoItemSelect: number;
  autoCreative: number;
}

export interface SponsoredSolutionsAddSolutionRequest {
  bizCode: string;
  autoKeyword?: number;
  endDate: string;
  platform: number[];
  autoCreative: number;
  campaignObjective: number;
  campaignType: number;
  campaignModel: number;
  maxBid: string;
  autoItemSelect: number;
  dayBudget: string;
  campaignName: string;
  startDate: string;
  adgroupViewDTOlistWithFeed: SponsoredSolutionsAddSolutionAdgroupViewDTOlistWithFeed[];
}

export interface SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOListBidwordViewDTOList {
  keyword?: string;
  bidPrice?: string;
}

export interface SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOListAudienceViewDTOList {
  adCrowdTag?: number;
  discount?: number;
}

export interface SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOList {
  adgroupName: string;
  autoItemSelect: string;
  bidPrice: string;
  itemId: number;
  autoCreative: number;
  autoKeyword: number;
  bidwordViewDTOList?: SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOListBidwordViewDTOList[];
  audienceViewDTOList?: SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOListAudienceViewDTOList[];
}

export interface SponsoredSolutionsAddAdgroupBatchRequest {
  campaignId: number;
  bizCode: string;
  adgroupViewDTOList: SponsoredSolutionsAddAdgroupBatchAdgroupViewDTOList[];
}

export interface SponsoredSolutionsDeleteAdgroupBatchRequest {
  bizCode: string;
  adgroupIdList: number[];
}

export interface SponsoredSolutionsSearchAdgroupListRequest {
  pageSize: number;
  endDate: string;
  campaignId: number;
  pageNo: number;
  bizCode: string;
  adgroupName?: string;
  startDate: string;
  onlineStatus?: number;
}

export interface SponsoredSolutionsUpdateAdgroupBatchAdgroupViewDTOList {
  adgroupId: number;
  switchStatus: string;
}

export interface SponsoredSolutionsUpdateAdgroupBatchRequest {
  bizCode: string;
  adgroupViewDTOList: SponsoredSolutionsUpdateAdgroupBatchAdgroupViewDTOList[];
}

export interface SponsoredSolutionsDeleteCampaignRequest {
  campaignIdList: number[];
  bizCode: string;
}

export interface SponsoredSolutionsSearchCampaignListRequest {
  bizCode: string;
  onlineStatus?: number;
  startDate: string;
  endDate: string;
  pageNo: string;
  pageSize: string;
}

export interface SponsoredSolutionsUpdateCampaignRequest {
  campaignId: number;
  campaignName?: string;
  startDate?: string;
  endDate?: string;
  dayBudget?: string;
  bizCode: string;
  switchStatus?: number;
}

export interface SponsoredSolutionsSearchKeywordRequest {
  campaignObjective: number;
  campaignType: number;
  bizCode: string;
  itemQuery: string;
  itemId: number;
  searchWord: string;
}

export interface SponsoredSolutionsSearchProductWithPageRequest {
  brandName?: string;
  campaignType: number;
  pageSize: number;
  bizCode: string;
  placementList: number[];
  productName?: string;
  campaignObjectLive: number;
  eligible: number;
  pageNo: number;
  sellerSku?: string;
  maxCpc: string;
  categoryId?: number;
  itemIdBlackList?: number[];
}

export interface SponsoredSolutionsModifyAutoTopUpOptionOneConfigRequest {
  status: number;
  limitAmount: string;
  topupAmount: string;
}
