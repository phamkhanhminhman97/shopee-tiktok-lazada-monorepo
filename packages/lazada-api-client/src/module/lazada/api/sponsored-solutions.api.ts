import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
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
 * getAccountSignInfo via Lazada `GET /sponsor/solutions/account/getAccountSignInfo`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getAccountSignInfo(config: LazadaConfig): Promise<SponsoredSolutionsGetAccountSignInfoResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetAccountSignInfoResponse>('/sponsor/solutions/account/getAccountSignInfo', 'GET', {} as unknown as Record<string, unknown>, config, 'getAccountSignInfo');
}

/**
 * getLatestSignInfo via Lazada `GET /sponsor/solutions/account/getLatestSignInfo`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getLatestSignInfo(config: LazadaConfig): Promise<SponsoredSolutionsGetLatestSignInfoResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetLatestSignInfoResponse>('/sponsor/solutions/account/getLatestSignInfo', 'GET', {} as unknown as Record<string, unknown>, config, 'getLatestSignInfo');
}

/**
 * getCampaign via Lazada `GET /sponsor/solutions/campaign/getCampaign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCampaign(params: SponsoredSolutionsGetCampaignRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetCampaignResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetCampaignResponse>('/sponsor/solutions/campaign/getCampaign', 'GET', params as unknown as Record<string, unknown>, config, 'getCampaign');
}

/**
 * getCampaignCount via Lazada `GET /sponsor/solutions/campaign/getCampaignCount`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getCampaignCount(params: SponsoredSolutionsGetCampaignCountRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetCampaignCountResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetCampaignCountResponse>('/sponsor/solutions/campaign/getCampaignCount', 'GET', params as unknown as Record<string, unknown>, config, 'getCampaignCount');
}

/**
 * listCategory via Lazada `GET /sponsor/solutions/category/listCategory`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listCategory(params: SponsoredSolutionsListCategoryRequest, config: LazadaConfig): Promise<SponsoredSolutionsListCategoryResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsListCategoryResponse>('/sponsor/solutions/category/listCategory', 'GET', params as unknown as Record<string, unknown>, config, 'listCategory');
}

/**
 * listKeywordByAdgroup via Lazada `GET /sponsor/solutions/keyword/listKeywordByAdgroup`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listKeywordByAdgroup(params: SponsoredSolutionsListKeywordByAdgroupRequest, config: LazadaConfig): Promise<SponsoredSolutionsListKeywordByAdgroupResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsListKeywordByAdgroupResponse>('/sponsor/solutions/keyword/listKeywordByAdgroup', 'GET', params as unknown as Record<string, unknown>, config, 'listKeywordByAdgroup');
}

/**
 * listKeywordByItem via Lazada `GET /sponsor/solutions/keyword/listKeywordByItem`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listKeywordByItem(params: SponsoredSolutionsListKeywordByItemRequest, config: LazadaConfig): Promise<SponsoredSolutionsListKeywordByItemResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsListKeywordByItemResponse>('/sponsor/solutions/keyword/listKeywordByItem', 'GET', params as unknown as Record<string, unknown>, config, 'listKeywordByItem');
}

/**
 * getDiscoveryReportAdgroup via Lazada `GET /sponsor/solutions/report/getDiscoveryReportAdgroup`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getDiscoveryReportAdgroup(params: SponsoredSolutionsGetDiscoveryReportAdgroupRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetDiscoveryReportAdgroupResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetDiscoveryReportAdgroupResponse>('/sponsor/solutions/report/getDiscoveryReportAdgroup', 'GET', params as unknown as Record<string, unknown>, config, 'getDiscoveryReportAdgroup');
}

/**
 * getDiscoveryReportAudience via Lazada `GET /sponsor/solutions/report/getDiscoveryReportAudience`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getDiscoveryReportAudience(params: SponsoredSolutionsGetDiscoveryReportAudienceRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetDiscoveryReportAudienceResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetDiscoveryReportAudienceResponse>('/sponsor/solutions/report/getDiscoveryReportAudience', 'GET', params as unknown as Record<string, unknown>, config, 'getDiscoveryReportAudience');
}

/**
 * getDiscoveryReportCampaign via Lazada `GET /sponsor/solutions/report/getDiscoveryReportCampaign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getDiscoveryReportCampaign(params: SponsoredSolutionsGetDiscoveryReportCampaignRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetDiscoveryReportCampaignResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetDiscoveryReportCampaignResponse>('/sponsor/solutions/report/getDiscoveryReportCampaign', 'GET', params as unknown as Record<string, unknown>, config, 'getDiscoveryReportCampaign');
}

/**
 * getDiscoveryReportKeyword via Lazada `GET /sponsor/solutions/report/getDiscoveryReportKeyword`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getDiscoveryReportKeyword(params: SponsoredSolutionsGetDiscoveryReportKeywordRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetDiscoveryReportKeywordResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetDiscoveryReportKeywordResponse>('/sponsor/solutions/report/getDiscoveryReportKeyword', 'GET', params as unknown as Record<string, unknown>, config, 'getDiscoveryReportKeyword');
}

/**
 * getReportCampaignOnFIrstSlot via Lazada `GET /sponsor/solutions/report/getReportCampaignOnPrePlacement`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReportCampaignOnFIrstSlot(params: SponsoredSolutionsGetReportCampaignOnFIrstSlotRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetReportCampaignOnFIrstSlotResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetReportCampaignOnFIrstSlotResponse>('/sponsor/solutions/report/getReportCampaignOnPrePlacement', 'GET', params as unknown as Record<string, unknown>, config, 'getReportCampaignOnFIrstSlot');
}

/**
 * getReportOverview via Lazada `GET /sponsor/solutions/report/getReportOverview`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReportOverview(params: SponsoredSolutionsGetReportOverviewRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetReportOverviewResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetReportOverviewResponse>('/sponsor/solutions/report/getReportOverview', 'GET', params as unknown as Record<string, unknown>, config, 'getReportOverview');
}

/**
 * getReportOverviewMetric via Lazada `GET /sponsor/solutions/report/getReportOverviewMetric`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getReportOverviewMetric(params: SponsoredSolutionsGetReportOverviewMetricRequest, config: LazadaConfig): Promise<SponsoredSolutionsGetReportOverviewMetricResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetReportOverviewMetricResponse>('/sponsor/solutions/report/getReportOverviewMetric', 'GET', params as unknown as Record<string, unknown>, config, 'getReportOverviewMetric');
}

/**
 * getAutoTopUpOptionOneConfig via Lazada `GET /sponsor/solutions/wallet/getAutoTopUpOptionOneConfig`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getAutoTopUpOptionOneConfig(config: LazadaConfig): Promise<SponsoredSolutionsGetAutoTopUpOptionOneConfigResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsGetAutoTopUpOptionOneConfigResponse>('/sponsor/solutions/wallet/getAutoTopUpOptionOneConfig', 'GET', {} as unknown as Record<string, unknown>, config, 'getAutoTopUpOptionOneConfig');
}

/**
 * clickserver via Lazada `POST /gproject/ads/aidc/click`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function clickserver(params: SponsoredSolutionsClickserverRequest, config: LazadaConfig): Promise<SponsoredSolutionsClickserverResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsClickserverResponse>('/gproject/ads/aidc/click', 'POST', params as unknown as Record<string, unknown>, config, 'clickserver');
}

/**
 * sign via Lazada `POST /sponsor/solutions/account/sign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function sign(config: LazadaConfig): Promise<SponsoredSolutionsSignResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsSignResponse>('/sponsor/solutions/account/sign', 'POST', {} as unknown as Record<string, unknown>, config, 'sign');
}

/**
 * addSolution via Lazada `POST /sponsor/solutions/addSolution`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function addSolution(params: SponsoredSolutionsAddSolutionRequest, config: LazadaConfig): Promise<SponsoredSolutionsAddSolutionResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsAddSolutionResponse>('/sponsor/solutions/addSolution', 'POST', params as unknown as Record<string, unknown>, config, 'addSolution');
}

/**
 * addAdgroupBatch via Lazada `POST /sponsor/solutions/adgroup/addAdgroupBatch`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function addAdgroupBatch(params: SponsoredSolutionsAddAdgroupBatchRequest, config: LazadaConfig): Promise<SponsoredSolutionsAddAdgroupBatchResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsAddAdgroupBatchResponse>('/sponsor/solutions/adgroup/addAdgroupBatch', 'POST', params as unknown as Record<string, unknown>, config, 'addAdgroupBatch');
}

/**
 * deleteAdgroupBatch via Lazada `POST /sponsor/solutions/adgroup/deleteAdgroupBatch`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deleteAdgroupBatch(params: SponsoredSolutionsDeleteAdgroupBatchRequest, config: LazadaConfig): Promise<SponsoredSolutionsDeleteAdgroupBatchResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsDeleteAdgroupBatchResponse>('/sponsor/solutions/adgroup/deleteAdgroupBatch', 'POST', params as unknown as Record<string, unknown>, config, 'deleteAdgroupBatch');
}

/**
 * searchAdgroupList via Lazada `POST /sponsor/solutions/adgroup/searchAdgroupList`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function searchAdgroupList(params: SponsoredSolutionsSearchAdgroupListRequest, config: LazadaConfig): Promise<SponsoredSolutionsSearchAdgroupListResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsSearchAdgroupListResponse>('/sponsor/solutions/adgroup/searchAdgroupList', 'POST', params as unknown as Record<string, unknown>, config, 'searchAdgroupList');
}

/**
 * updateAdgroupBatch via Lazada `POST /sponsor/solutions/adgroup/updateAdgroupBatch`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateAdgroupBatch(params: SponsoredSolutionsUpdateAdgroupBatchRequest, config: LazadaConfig): Promise<SponsoredSolutionsUpdateAdgroupBatchResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsUpdateAdgroupBatchResponse>('/sponsor/solutions/adgroup/updateAdgroupBatch', 'POST', params as unknown as Record<string, unknown>, config, 'updateAdgroupBatch');
}

/**
 * deleteCampaign via Lazada `POST /sponsor/solutions/campaign/deleteCampaign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deleteCampaign(params: SponsoredSolutionsDeleteCampaignRequest, config: LazadaConfig): Promise<SponsoredSolutionsDeleteCampaignResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsDeleteCampaignResponse>('/sponsor/solutions/campaign/deleteCampaign', 'POST', params as unknown as Record<string, unknown>, config, 'deleteCampaign');
}

/**
 * searchCampaignList via Lazada `POST /sponsor/solutions/campaign/searchCampaignList`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function searchCampaignList(params: SponsoredSolutionsSearchCampaignListRequest, config: LazadaConfig): Promise<SponsoredSolutionsSearchCampaignListResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsSearchCampaignListResponse>('/sponsor/solutions/campaign/searchCampaignList', 'POST', params as unknown as Record<string, unknown>, config, 'searchCampaignList');
}

/**
 * updateCampaign via Lazada `POST /sponsor/solutions/campaign/updateCampaign`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateCampaign(params: SponsoredSolutionsUpdateCampaignRequest, config: LazadaConfig): Promise<SponsoredSolutionsUpdateCampaignResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsUpdateCampaignResponse>('/sponsor/solutions/campaign/updateCampaign', 'POST', params as unknown as Record<string, unknown>, config, 'updateCampaign');
}

/**
 * searchKeyword via Lazada `POST /sponsor/solutions/keyword/searchKeyword`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function searchKeyword(params: SponsoredSolutionsSearchKeywordRequest, config: LazadaConfig): Promise<SponsoredSolutionsSearchKeywordResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsSearchKeywordResponse>('/sponsor/solutions/keyword/searchKeyword', 'POST', params as unknown as Record<string, unknown>, config, 'searchKeyword');
}

/**
 * searchProductWithPage via Lazada `POST /sponsor/solutions/product/searchProductWithPage`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function searchProductWithPage(params: SponsoredSolutionsSearchProductWithPageRequest, config: LazadaConfig): Promise<SponsoredSolutionsSearchProductWithPageResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsSearchProductWithPageResponse>('/sponsor/solutions/product/searchProductWithPage', 'POST', params as unknown as Record<string, unknown>, config, 'searchProductWithPage');
}

/**
 * modifyAutoTopUpOptionOneConfig via Lazada `POST /sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function modifyAutoTopUpOptionOneConfig(params: SponsoredSolutionsModifyAutoTopUpOptionOneConfigRequest, config: LazadaConfig): Promise<SponsoredSolutionsModifyAutoTopUpOptionOneConfigResponse> {
  return LazadaHelper.callLazadaApi<SponsoredSolutionsModifyAutoTopUpOptionOneConfigResponse>('/sponsor/solutions/wallet/modifyAutoTopUpOptionOneConfig', 'POST', params as unknown as Record<string, unknown>, config, 'modifyAutoTopUpOptionOneConfig');
}
