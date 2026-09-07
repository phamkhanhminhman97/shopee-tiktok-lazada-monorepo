import { TiktokConfig } from '../dto/request/config.request';
import {
  createConversationWithCreator,
  createConversationwithCreator,
  createOpenCollaboration,
  createTargetCollaboration,
  editOpenCollaborationSampleRule,
  editOpenCollaborationSettings,
  generateAffiliateProductPromotionLink,
  getConversationList,
  getLatestUnreadMessages,
  getMarketplaceCreatorPerformance,
  getMessageInTheConversation,
  getOpenCollaborationCreatorContentDetail,
  getOpenCollaborationSampleRules,
  getOpenCollaborationSettings,
  markConversationRead,
  queryTargetCollaborationDetail,
  removeCreatorFromOpenCollaboration,
  removeOpenCollaboration,
  removeTargetCollaboration,
  searchOpenCollaboration,
  searchSellerAffiliateOrders,
  searchTargetCollaborations,
  sellerReviewSampleApplications,
  sellerSearchAffiliateOpenCollaborationProduct,
  sellerSearchCreatorOnMarketplace,
  sellerSearchSampleApplications,
  sellerSearchSampleApplicationsFulfillments,
  sendImMessage,
  updateTargetCollaboration,
} from '../api/affiliate-seller-v3.api';
import {
  TiktokCreateConversationWithCreatorBody,
  TiktokCreateConversationwithCreatorBody,
  TiktokCreateOpenCollaborationBody,
  TiktokCreateTargetCollaborationBody,
  TiktokEditOpenCollaborationSampleRuleBody,
  TiktokEditOpenCollaborationSettingsBody,
  TiktokGetConversationListParams,
  TiktokGetMessageInTheConversationParams,
  TiktokGetOpenCollaborationCreatorContentDetailQuery,
  TiktokGetOpenCollaborationSampleRulesQuery,
  TiktokMarkConversationReadBody,
  TiktokRemoveCreatorFromOpenCollaborationParams,
  TiktokSearchOpenCollaborationParams,
  TiktokSearchSellerAffiliateOrdersParams,
  TiktokSearchTargetCollaborationsParams,
  TiktokSellerReviewSampleApplicationsParams,
  TiktokSellerSearchAffiliateOpenCollaborationProductParams,
  TiktokSellerSearchCreatorOnMarketplaceParams,
  TiktokSellerSearchSampleApplicationsFulfillmentsParams,
  TiktokSellerSearchSampleApplicationsParams,
  TiktokSendImMessageParams,
  TiktokUpdateTargetCollaborationParams,
} from '../dto/request/affiliate-seller-v3.request';
import {
  TiktokCreateConversationWithCreatorResponse,
  TiktokCreateConversationwithCreatorResponse,
  TiktokCreateOpenCollaborationResponse,
  TiktokCreateTargetCollaborationResponse,
  TiktokEditOpenCollaborationSampleRuleResponse,
  TiktokEditOpenCollaborationSettingsResponse,
  TiktokGenerateAffiliateProductPromotionLinkResponse,
  TiktokGetConversationListResponse,
  TiktokGetLatestUnreadMessagesResponse,
  TiktokGetMarketplaceCreatorPerformanceResponse,
  TiktokGetMessageInTheConversationResponse,
  TiktokGetOpenCollaborationCreatorContentDetailResponse,
  TiktokGetOpenCollaborationSampleRulesResponse,
  TiktokGetOpenCollaborationSettingsResponse,
  TiktokMarkConversationReadResponse,
  TiktokQueryTargetCollaborationDetailResponse,
  TiktokRemoveCreatorFromOpenCollaborationResponse,
  TiktokRemoveOpenCollaborationResponse,
  TiktokSearchOpenCollaborationResponse,
  TiktokSearchSellerAffiliateOrdersResponse,
  TiktokSearchTargetCollaborationsResponse,
  TiktokSellerReviewSampleApplicationsResponse,
  TiktokSellerSearchAffiliateOpenCollaborationProductResponse,
  TiktokSellerSearchCreatorOnMarketplaceResponse,
  TiktokSellerSearchSampleApplicationsFulfillmentsResponse,
  TiktokSellerSearchSampleApplicationsResponse,
  TiktokSendImMessageResponse,
  TiktokUpdateTargetCollaborationResponse,
} from '../dto/response/affiliate-seller-v3.response';
import { TiktokResponseCommon } from '../dto/response/config.response';

/**
 * TikTok Shop `AffiliateSeller` API namespace.
 *
 * Access via `tiktok.affiliateSeller.<method>()` on a `TiktokModule` instance.
 */
export class TiktokAffiliateSeller {
  constructor(private config: TiktokConfig) {}

  async createConversationwithCreator(body: TiktokCreateConversationwithCreatorBody): Promise<TiktokResponseCommon<TiktokCreateConversationwithCreatorResponse>> {
    return await createConversationwithCreator(body, this.config);
  }

  async createTargetCollaboration(body: TiktokCreateTargetCollaborationBody): Promise<TiktokResponseCommon<TiktokCreateTargetCollaborationResponse>> {
    return await createTargetCollaboration(body, this.config);
  }

  async editOpenCollaborationSettings(body: TiktokEditOpenCollaborationSettingsBody): Promise<TiktokResponseCommon<TiktokEditOpenCollaborationSettingsResponse>> {
    return await editOpenCollaborationSettings(body, this.config);
  }

  async removeCreatorFromOpenCollaboration(params: TiktokRemoveCreatorFromOpenCollaborationParams): Promise<TiktokResponseCommon<TiktokRemoveCreatorFromOpenCollaborationResponse>> {
    return await removeCreatorFromOpenCollaboration(params, this.config);
  }

  async generateAffiliateProductPromotionLink(product_id: string): Promise<TiktokResponseCommon<TiktokGenerateAffiliateProductPromotionLinkResponse>> {
    return await generateAffiliateProductPromotionLink(product_id, this.config);
  }

  async sellerSearchAffiliateOpenCollaborationProduct(params: TiktokSellerSearchAffiliateOpenCollaborationProductParams): Promise<TiktokResponseCommon<TiktokSellerSearchAffiliateOpenCollaborationProductResponse>> {
    return await sellerSearchAffiliateOpenCollaborationProduct(params, this.config);
  }

  async searchSellerAffiliateOrders(params: TiktokSearchSellerAffiliateOrdersParams): Promise<TiktokResponseCommon<TiktokSearchSellerAffiliateOrdersResponse>> {
    return await searchSellerAffiliateOrders(params, this.config);
  }

  async sellerSearchSampleApplicationsFulfillments(params: TiktokSellerSearchSampleApplicationsFulfillmentsParams): Promise<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsFulfillmentsResponse>> {
    return await sellerSearchSampleApplicationsFulfillments(params, this.config);
  }

  async sellerReviewSampleApplications(params: TiktokSellerReviewSampleApplicationsParams): Promise<TiktokResponseCommon<TiktokSellerReviewSampleApplicationsResponse>> {
    return await sellerReviewSampleApplications(params, this.config);
  }

  async getOpenCollaborationSampleRules(query: TiktokGetOpenCollaborationSampleRulesQuery): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationSampleRulesResponse>> {
    return await getOpenCollaborationSampleRules(query, this.config);
  }

  async sellerSearchSampleApplications(params: TiktokSellerSearchSampleApplicationsParams): Promise<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsResponse>> {
    return await sellerSearchSampleApplications(params, this.config);
  }

  async editOpenCollaborationSampleRule(body: TiktokEditOpenCollaborationSampleRuleBody): Promise<TiktokResponseCommon<TiktokEditOpenCollaborationSampleRuleResponse>> {
    return await editOpenCollaborationSampleRule(body, this.config);
  }

  async removeTargetCollaboration(target_collaboration_id: string): Promise<TiktokResponseCommon<object>> {
    return await removeTargetCollaboration(target_collaboration_id, this.config);
  }

  async searchTargetCollaborations(params: TiktokSearchTargetCollaborationsParams): Promise<TiktokResponseCommon<TiktokSearchTargetCollaborationsResponse>> {
    return await searchTargetCollaborations(params, this.config);
  }

  async updateTargetCollaboration(params: TiktokUpdateTargetCollaborationParams): Promise<TiktokResponseCommon<TiktokUpdateTargetCollaborationResponse>> {
    return await updateTargetCollaboration(params, this.config);
  }

  async getOpenCollaborationSettings(): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationSettingsResponse>> {
    return await getOpenCollaborationSettings(this.config);
  }

  async removeOpenCollaboration(product_id: string): Promise<TiktokResponseCommon<TiktokRemoveOpenCollaborationResponse>> {
    return await removeOpenCollaboration(product_id, this.config);
  }

  async queryTargetCollaborationDetail(target_collaboration_id: string): Promise<TiktokResponseCommon<TiktokQueryTargetCollaborationDetailResponse>> {
    return await queryTargetCollaborationDetail(target_collaboration_id, this.config);
  }

  async getOpenCollaborationCreatorContentDetail(query: TiktokGetOpenCollaborationCreatorContentDetailQuery): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationCreatorContentDetailResponse>> {
    return await getOpenCollaborationCreatorContentDetail(query, this.config);
  }

  async searchOpenCollaboration(params: TiktokSearchOpenCollaborationParams): Promise<TiktokResponseCommon<TiktokSearchOpenCollaborationResponse>> {
    return await searchOpenCollaboration(params, this.config);
  }

  async createOpenCollaboration(body: TiktokCreateOpenCollaborationBody): Promise<TiktokResponseCommon<TiktokCreateOpenCollaborationResponse>> {
    return await createOpenCollaboration(body, this.config);
  }

  async getMessageInTheConversation(params: TiktokGetMessageInTheConversationParams): Promise<TiktokResponseCommon<TiktokGetMessageInTheConversationResponse>> {
    return await getMessageInTheConversation(params, this.config);
  }

  async getConversationList(params: TiktokGetConversationListParams): Promise<TiktokResponseCommon<TiktokGetConversationListResponse>> {
    return await getConversationList(params, this.config);
  }

  async sendImMessage(params: TiktokSendImMessageParams): Promise<TiktokResponseCommon<TiktokSendImMessageResponse>> {
    return await sendImMessage(params, this.config);
  }

  async createConversationWithCreator(body: TiktokCreateConversationWithCreatorBody): Promise<TiktokResponseCommon<TiktokCreateConversationWithCreatorResponse>> {
    return await createConversationWithCreator(body, this.config);
  }

  async markConversationRead(body: TiktokMarkConversationReadBody): Promise<TiktokResponseCommon<TiktokMarkConversationReadResponse>> {
    return await markConversationRead(body, this.config);
  }

  async getLatestUnreadMessages(): Promise<TiktokResponseCommon<TiktokGetLatestUnreadMessagesResponse>> {
    return await getLatestUnreadMessages(this.config);
  }

  async sellerSearchCreatorOnMarketplace(params: TiktokSellerSearchCreatorOnMarketplaceParams): Promise<TiktokResponseCommon<TiktokSellerSearchCreatorOnMarketplaceResponse>> {
    return await sellerSearchCreatorOnMarketplace(params, this.config);
  }

  async getMarketplaceCreatorPerformance(creator_user_id: string): Promise<TiktokResponseCommon<TiktokGetMarketplaceCreatorPerformanceResponse>> {
    return await getMarketplaceCreatorPerformance(creator_user_id, this.config);
  }
}
