export interface SponsoredSolutionsGetAccountSignInfo {
  result: Record<string, unknown>;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsGetAccountSignInfoResponse = SponsoredSolutionsGetAccountSignInfo;

export interface SponsoredSolutionsGetLatestSignInfo {
  result: Record<string, unknown>;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsGetLatestSignInfoResponse = SponsoredSolutionsGetLatestSignInfo;

export interface SponsoredSolutionsGetCampaignResult {
  endDate: string;
  onlineStatus: number;
  campaignObjective: number;
  campaignType: number;
  campaignId: number;
  budgetUsedAmount: number;
  autoItemSelect: number;
  haveAdCount: number;
  startDate: string;
  switchStatus: number;
  platform: number[];
  sceneId: number;
  autoCreative: number;
  campaignModel: number;
  maxBid: string;
  dayBudget: string;
  campaignName: string;
}

export interface SponsoredSolutionsGetCampaign {
  result: SponsoredSolutionsGetCampaignResult;
  success: string;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsGetCampaignResponse = SponsoredSolutionsGetCampaign;

export interface SponsoredSolutionsGetCampaignCount {
  result: number;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsGetCampaignCountResponse = SponsoredSolutionsGetCampaignCount;

export interface SponsoredSolutionsListCategoryResult {
  label?: string;
  value?: number;
  isLeaf?: boolean;
  selectable?: boolean;
}

export interface SponsoredSolutionsListCategory {
  result: SponsoredSolutionsListCategoryResult[];
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsListCategoryResponse = SponsoredSolutionsListCategory;

export interface SponsoredSolutionsListKeywordByAdgroupResult {
  keyword?: string;
  relevance?: number;
  historicalPV?: number;
  suggestedPrice?: string;
  currency?: string;
  reservePrice?: string;
  softLowerLimit?: string;
  softUpperLimit?: string;
  softUpperLimitType?: number;
}

export interface SponsoredSolutionsListKeywordByAdgroup {
  result: SponsoredSolutionsListKeywordByAdgroupResult[];
  success: string;
  analyseTraceId: string;
  totalCount: number;
  errorMsg: string;
}

export type SponsoredSolutionsListKeywordByAdgroupResponse = SponsoredSolutionsListKeywordByAdgroup;

export interface SponsoredSolutionsListKeywordByItemResult {
  keyword?: string;
  relevance?: number;
  historicalPV?: number;
  suggestedPrice?: string;
  currency?: string;
  reservePrice?: string;
  softLowerLimit?: string;
  softUpperLimit?: string;
  softUpperLimitType?: number;
}

export interface SponsoredSolutionsListKeywordByItem {
  result: SponsoredSolutionsListKeywordByItemResult[];
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsListKeywordByItemResponse = SponsoredSolutionsListKeywordByItem;

export interface SponsoredSolutionsGetDiscoveryReportAdgroupResultResult {
  dateRange: string;
  productUnitSold: number;
  productCvr: string;
  productOrders: number;
  adgroupId: number;
  adgroupName: string;
  cpc: string;
  spend: string;
  storeUnitSold: number;
  productA2c: number;
  productImageUrl: string;
  ctr: string;
  campaignId: number;
  storeRevenue: string;
  storeCvr: string;
  storeA2c: number;
  storeOrders: number;
  impressions: number;
  bidPrice: string;
  itemId: number;
  storeRoi: string;
  maxBid: number;
  clicks: number;
  productRevenue: string;
  campaignName: string;
}

export interface SponsoredSolutionsGetDiscoveryReportAdgroupResult {
  result: SponsoredSolutionsGetDiscoveryReportAdgroupResultResult[];
  errorKey: string;
  errorDTOList: Record<string, unknown>[];
  success: boolean;
  analyseTraceId: string;
  errorCode: string;
  totalCount: number;
  errorMsg: string;
}

export interface SponsoredSolutionsGetDiscoveryReportAdgroup {
  result: SponsoredSolutionsGetDiscoveryReportAdgroupResult;
}

export type SponsoredSolutionsGetDiscoveryReportAdgroupResponse = SponsoredSolutionsGetDiscoveryReportAdgroup;

export interface SponsoredSolutionsGetDiscoveryReportAudienceResultResult {
  productImageUrl: string;
  ctr: string;
  campaignId: number;
  storeRevenue: string;
  storeCvr: string;
  storeA2c: number;
  storeOrders: number;
  productUnitSold: number;
  impressions: number;
  productCvr: string;
  productOrders: number;
  audienceFakeId: string;
  storeRoi: string;
  adgroupId: number;
  audienceGroup: number;
  adgroupName: string;
  cpc: string;
  spend: string;
  clicks: number;
  productRevenue: string;
  storeUnitSold: number;
  campaignName: string;
  productA2c: number;
}

export interface SponsoredSolutionsGetDiscoveryReportAudienceResult {
  result: SponsoredSolutionsGetDiscoveryReportAudienceResultResult[];
  errorKey: string;
  errorDTOList: Record<string, unknown>[];
  success: boolean;
  analyseTraceId: string;
  errorCode: string;
  totalCount: number;
  errorMsg: string;
}

export interface SponsoredSolutionsGetDiscoveryReportAudience {
  result: SponsoredSolutionsGetDiscoveryReportAudienceResult;
}

export type SponsoredSolutionsGetDiscoveryReportAudienceResponse = SponsoredSolutionsGetDiscoveryReportAudience;

export interface SponsoredSolutionsGetDiscoveryReportCampaignResultResult {
  ctr: string;
  campaignObjective: string;
  campaignType: number;
  campaignId: number;
  storeRevenue: string;
  storeCvr: string;
  storeA2c: number;
  storeOrders: number;
  productUnitSold: number;
  impressions: number;
  productCvr: string;
  productOrders: number;
  storeRoi: string;
  cpc: string;
  spend: string;
  clicks: number;
  productRevenue: string;
  storeUnitSold: number;
  campaignName: string;
  productType: string;
  dayBudget: number;
  productA2c: number;
}

export interface SponsoredSolutionsGetDiscoveryReportCampaignResult {
  result: SponsoredSolutionsGetDiscoveryReportCampaignResultResult[];
  errorKey: string;
  errorDTOList: Record<string, unknown>[];
  success: boolean;
  analyseTraceId: string;
  errorCode: string;
  totalCount: number;
  errorMsg: string;
}

export interface SponsoredSolutionsGetDiscoveryReportCampaign {
  result: SponsoredSolutionsGetDiscoveryReportCampaignResult;
}

export type SponsoredSolutionsGetDiscoveryReportCampaignResponse = SponsoredSolutionsGetDiscoveryReportCampaign;

export interface SponsoredSolutionsGetDiscoveryReportKeywordResultResult {
  productImageUrl: string;
  ctr: string;
  keywordId: number;
  campaignId: number;
  storeRevenue: string;
  storeCvr: string;
  storeA2c: number;
  storeOrders: number;
  productUnitSold: number;
  impressions: number;
  productCvr: string;
  productOrders: number;
  storeRoi: string;
  adgroupId: number;
  adgroupName: string;
  cpc: string;
  spend: string;
  maxBid: string;
  storeUnitSold: number;
  clicks: number;
  productRevenue: string;
  keyword: string;
  campaignName: string;
  productA2c: number;
}

export interface SponsoredSolutionsGetDiscoveryReportKeywordResult {
  result: SponsoredSolutionsGetDiscoveryReportKeywordResultResult[];
  errorKey: string;
  errorDTOList: Record<string, unknown>[];
  success: boolean;
  analyseTraceId: string;
  errorCode: string;
  totalCount: number;
  errorMsg: string;
}

export interface SponsoredSolutionsGetDiscoveryReportKeyword {
  result: SponsoredSolutionsGetDiscoveryReportKeywordResult;
}

export type SponsoredSolutionsGetDiscoveryReportKeywordResponse = SponsoredSolutionsGetDiscoveryReportKeyword;

export interface SponsoredSolutionsGetReportCampaignOnFIrstSlotResultResult {
  ctr: string;
  campaignObjective: string;
  campaignType: number;
  firstImpShare: string;
  campaignId: number;
  storeRevenue: string;
  storeCvr: string;
  storeA2c: number;
  storeOrders: number;
  productUnitSold: number;
  impressions: number;
  productCvr: string;
  productOrders: number;
  storeRoi: string;
  cpc: string;
  spend: string;
  clicks: number;
  productRevenue: string;
  storeUnitSold: number;
  campaignName: string;
  productType: string;
  dayBudget: number;
  productA2c: number;
}

export interface SponsoredSolutionsGetReportCampaignOnFIrstSlotResult {
  result: SponsoredSolutionsGetReportCampaignOnFIrstSlotResultResult[];
  errorKey: string;
  errorDTOList: Record<string, unknown>[];
  success: boolean;
  analyseTraceId: string;
  errorCode: string;
  totalCount: number;
  errorMsg: string;
}

export interface SponsoredSolutionsGetReportCampaignOnFIrstSlot {
  result: SponsoredSolutionsGetReportCampaignOnFIrstSlotResult;
}

export type SponsoredSolutionsGetReportCampaignOnFIrstSlotResponse = SponsoredSolutionsGetReportCampaignOnFIrstSlot;

export interface SponsoredSolutionsGetReportOverviewResultReportOverviewDetailDTO {
  spend?: string;
  impressions?: number;
  clicks?: number;
  ctr?: string;
  unitsSold?: number;
  revenue?: string;
  cpc?: string;
  roi?: string;
}

export interface SponsoredSolutionsGetReportOverviewResultLastReportOverviewDetailDTO {
  spend?: string;
  impressions?: number;
  clicks?: number;
  ctr?: string;
  unitsSold?: number;
  revenue?: string;
  cpc?: string;
  roi?: string;
}

export interface SponsoredSolutionsGetReportOverviewResult {
  reportOverviewDetailDTO?: SponsoredSolutionsGetReportOverviewResultReportOverviewDetailDTO;
  lastReportOverviewDetailDTO?: SponsoredSolutionsGetReportOverviewResultLastReportOverviewDetailDTO;
}

export interface SponsoredSolutionsGetReportOverview {
  result: SponsoredSolutionsGetReportOverviewResult;
  success: string;
  analyseTraceId: string;
  errorMsg: string;
}

export type SponsoredSolutionsGetReportOverviewResponse = SponsoredSolutionsGetReportOverview;

export interface SponsoredSolutionsGetReportOverviewMetricResult {
  dateList?: number[];
  hourList?: number[];
  metricList?: string[];
}

export interface SponsoredSolutionsGetReportOverviewMetric {
  result: SponsoredSolutionsGetReportOverviewMetricResult;
  success: string;
  analyseTraceId: string;
  errorMsg: string;
}

export type SponsoredSolutionsGetReportOverviewMetricResponse = SponsoredSolutionsGetReportOverviewMetric;

export interface SponsoredSolutionsGetAutoTopUpOptionOneConfigResult {
  status?: number;
  limitAmount?: string;
  topUpAmount?: string;
}

export interface SponsoredSolutionsGetAutoTopUpOptionOneConfig {
  result: SponsoredSolutionsGetAutoTopUpOptionOneConfigResult;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsGetAutoTopUpOptionOneConfigResponse = SponsoredSolutionsGetAutoTopUpOptionOneConfig;

export interface SponsoredSolutionsClickserverResult {
  headers: Record<string, unknown>;
  success: boolean;
  model: Record<string, unknown>;
  biz_ext_map: Record<string, unknown>;
  mapping_code: string;
  msg_info: string;
  msg_code: string;
  http_status_code: number;
}

export interface SponsoredSolutionsClickserver {
  result: SponsoredSolutionsClickserverResult;
}

export type SponsoredSolutionsClickserverResponse = SponsoredSolutionsClickserver;

export interface SponsoredSolutionsSign {
  result: Record<string, unknown>;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsSignResponse = SponsoredSolutionsSign;

export interface SponsoredSolutionsAddSolution {
  success?: boolean;
  result?: Record<string, unknown>;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsAddSolutionResponse = SponsoredSolutionsAddSolution;

export interface SponsoredSolutionsAddAdgroupBatch {
  result: boolean;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsAddAdgroupBatchResponse = SponsoredSolutionsAddAdgroupBatch;

export interface SponsoredSolutionsDeleteAdgroupBatch {
  result: boolean;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsDeleteAdgroupBatchResponse = SponsoredSolutionsDeleteAdgroupBatch;

export interface SponsoredSolutionsSearchAdgroupListResultAudienceViewDTOList {
  adCrowdTag?: number;
  discount?: number;
}

export interface SponsoredSolutionsSearchAdgroupListResult {
  adgroupId?: number;
  adgroupName?: string;
  imageUrl?: string;
  bidPrice?: string;
  autoCreative?: number;
  audienceViewDTOList?: SponsoredSolutionsSearchAdgroupListResultAudienceViewDTOList[];
  spend?: string;
  impressions?: string;
  clicks?: string;
  ctr?: string;
  cpc?: string;
  storeUnitsSold?: string;
  storeRevenue?: string;
  storeRoi?: string;
  storeOrders?: string;
  productOrders?: string;
  unitsSold?: string;
  revenue?: string;
  status?: number;
  adAccountBalanceStatus?: number;
  adApproveStatus?: number;
  adSwitchStatus?: number;
  campaignDailyBudgetStatus?: number;
  campaignScheduleStatus?: number;
  campaignSwitchStatus?: number;
  productEligibleStatus?: number;
  productStockStatus?: number;
  sellerEligibleStatus?: number;
  itemId?: number;
}

export interface SponsoredSolutionsSearchAdgroupList {
  success: boolean;
  errorMsg: string;
  analyseTraceId: string;
  totalCount?: number;
  result?: SponsoredSolutionsSearchAdgroupListResult[];
}

export type SponsoredSolutionsSearchAdgroupListResponse = SponsoredSolutionsSearchAdgroupList;

export interface SponsoredSolutionsUpdateAdgroupBatch {
  result: boolean;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsUpdateAdgroupBatchResponse = SponsoredSolutionsUpdateAdgroupBatch;

export interface SponsoredSolutionsDeleteCampaign {
  result: number;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsDeleteCampaignResponse = SponsoredSolutionsDeleteCampaign;

export interface SponsoredSolutionsSearchCampaignListResult {
  impressions?: string;
  clicks?: string;
  ctr?: string;
  cpc?: string;
  storeUnitsSold?: string;
  storeOrders?: string;
  storeRevenue?: string;
  storeRoi?: string;
  campaignId?: number;
  campaignName?: string;
  dailyBudget?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  adAccountBalanceStatus?: string;
  campaignDailyBudgetStatus?: string;
  campaignScheduleStatus?: string;
  campaignSwitchStatus?: string;
  haveActiveAdStatus?: string;
  spend?: string;
}

export interface SponsoredSolutionsSearchCampaignList {
  success: boolean;
  totalCount: number;
  errorMsg?: string;
  analyseTraceId?: string;
  result: SponsoredSolutionsSearchCampaignListResult[];
}

export type SponsoredSolutionsSearchCampaignListResponse = SponsoredSolutionsSearchCampaignList;

export interface SponsoredSolutionsUpdateCampaign {
  result: Record<string, unknown>;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsUpdateCampaignResponse = SponsoredSolutionsUpdateCampaign;

export interface SponsoredSolutionsSearchKeywordResult {
  keyword?: string;
  relevance?: number;
  historicalPV?: number;
  suggestedPrice?: string;
  currency?: string;
  reservePrice?: string;
  softLowerLimit?: string;
  softUpperLimit?: string;
  softUpperLimitType?: number;
}

export interface SponsoredSolutionsSearchKeyword {
  result: SponsoredSolutionsSearchKeywordResult[];
  success: boolean;
  analyseTraceId: string;
  totalCount: number;
  errorMsg: string;
}

export type SponsoredSolutionsSearchKeywordResponse = SponsoredSolutionsSearchKeyword;

export interface SponsoredSolutionsSearchProductWithPageResult {
  itemId?: number;
  productName?: string;
  imageUrl?: string;
  pdpLink?: string;
  categoryId?: number;
  bidPrice?: string;
  competitionIndex?: number;
  avgSalesVolume?: number;
  retailPrice?: string;
  inventory?: number;
  ipv?: string;
  cvr?: string;
  contentScore?: number;
  isBan?: boolean;
  isDigitalUtilities?: boolean;
  tags?: string[];
}

export interface SponsoredSolutionsSearchProductWithPage {
  result: SponsoredSolutionsSearchProductWithPageResult[];
  success: boolean;
  analyseTraceId: string;
  totalCount: number;
  errorMsg: string;
}

export type SponsoredSolutionsSearchProductWithPageResponse = SponsoredSolutionsSearchProductWithPage;

export interface SponsoredSolutionsModifyAutoTopUpOptionOneConfig {
  result: boolean;
  success: boolean;
  errorMsg?: string;
  analyseTraceId?: string;
}

export type SponsoredSolutionsModifyAutoTopUpOptionOneConfigResponse = SponsoredSolutionsModifyAutoTopUpOptionOneConfig;
