import { TiktokConfig } from '../dto/request/config.request';
import { TiktokResponseCommon } from '../dto/response/config.response';
import * as TiktokHelper from '../common/helper';
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

/**
 * Initiate a direct conversation with a creator.
 *
 * This API allows sellers to send a message and start a chat with a creator
 * to initiate affiliate cooperation. The message content must be provided in the request.
 *
 * @returns A promise resolving to the result of the conversation initiation.
 * Endpoint: `POST /affiliate_seller/202412/conversations`
 */
export async function createConversationwithCreator(body: TiktokCreateConversationwithCreatorBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateConversationwithCreatorResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateConversationwithCreatorResponse>>(
    '/affiliate_seller/202412/conversations',
    'POST',
    {},
    config,
    'createConversationwithCreator',
  );
}

/**
 * Create a target collaboration with creators.
 *
 * Sellers initiate targeted affiliate partnerships by specifying goals and collaboration terms in the request body.
 *
 * @returns A promise resolving to the created collaboration result.
 * Endpoint: `POST /affiliate_seller/202405/target_collaborations`
 */
export async function createTargetCollaboration(body: TiktokCreateTargetCollaborationBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateTargetCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateTargetCollaborationResponse>>(
    '/affiliate_seller/202405/target_collaborations',
    'POST',
    {},
    config,
    'createTargetCollaboration',
  );
}

/**
 * Edit open collaboration settings.
 *
 * Sellers update configuration options like eligibility rules, application limits, or pricing visibility.
 *
 * @returns A promise resolving to the updated settings.
 * Endpoint: `POST /affiliate_seller/202405/open_collaboration_settings`
 */
export async function editOpenCollaborationSettings(body: TiktokEditOpenCollaborationSettingsBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokEditOpenCollaborationSettingsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokEditOpenCollaborationSettingsResponse>>(
    '/affiliate_seller/202405/open_collaboration_settings',
    'POST',
    {},
    config,
    'editOpenCollaborationSettings',
  );
}

/**
 * Remove a creator from an open collaboration.
 *
 * Excludes a selected creator from a collaboration, using the open_collaboration_id and request payload.
 *
 * @returns A promise indicating removal status.
 * Endpoint: `POST /affiliate_seller/202405/open_collaborations/{open_collaboration_id}/remove_creator`
 */
export async function removeCreatorFromOpenCollaboration(params: TiktokRemoveCreatorFromOpenCollaborationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokRemoveCreatorFromOpenCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokRemoveCreatorFromOpenCollaborationResponse>>(
    `/affiliate_seller/202405/open_collaborations/${params.open_collaboration_id}/remove_creator`,
    'POST',
    { body: params.body },
    config,
    'removeCreatorFromOpenCollaboration',
  );
}

/**
 * Generate a promotion link for a product.
 *
 * Sellers generate an affiliate link to promote a product through creators.
 *
 * @returns A promise resolving to the promotion link.
 * Endpoint: `POST /affiliate_seller/202405/products/{product_id}/promotion_link/generate`
 */
export async function generateAffiliateProductPromotionLink(product_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGenerateAffiliateProductPromotionLinkResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGenerateAffiliateProductPromotionLinkResponse>>(
    `/affiliate_seller/202405/products/${product_id}/promotion_link/generate`,
    'POST',
    {},
    config,
    'generateAffiliateProductPromotionLink',
  );
}

/**
 * Search products open for affiliate collaboration.
 *
 * Enables product discovery based on filters provided via query and body.
 *
 * @returns A promise with search results.
 * Endpoint: `POST /affiliate_seller/202405/open_collaborations/products/search`
 */
export async function sellerSearchAffiliateOpenCollaborationProduct(params: TiktokSellerSearchAffiliateOpenCollaborationProductParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerSearchAffiliateOpenCollaborationProductResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerSearchAffiliateOpenCollaborationProductResponse>>(
    `/affiliate_seller/202405/open_collaborations/products/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'sellerSearchAffiliateOpenCollaborationProduct',
  );
}

/**
 * Search affiliate orders placed through seller collaborations.
 *
 * Retrieves orders made via affiliate campaigns using filter criteria such as status, time range, or product identifiers.
 *
 * @returns A promise resolving to the search result of affiliate orders.
 * Endpoint: `POST /affiliate_seller/202410/orders/search`
 */
export async function searchSellerAffiliateOrders(params: TiktokSearchSellerAffiliateOrdersParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchSellerAffiliateOrdersResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchSellerAffiliateOrdersResponse>>(
    `/affiliate_seller/202410/orders/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchSellerAffiliateOrders',
  );
}

/**
 * Search fulfillments of sample applications.
 *
 * Allows sellers to fetch the fulfillment status of a submitted sample application using its application ID.
 *
 * @returns A promise resolving to fulfillment details.
 * Endpoint: `POST /affiliate_seller/202409/sample_applications/{application_id}/fulfillments/search`
 */
export async function sellerSearchSampleApplicationsFulfillments(params: TiktokSellerSearchSampleApplicationsFulfillmentsParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsFulfillmentsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsFulfillmentsResponse>>(
    `/affiliate_seller/202409/sample_applications/${params.application_id}/fulfillments/search`,
    'POST',
    { body: params.body },
    config,
    'sellerSearchSampleApplicationsFulfillments',
  );
}

/**
 * Review a sample application submitted by a creator.
 *
 * Enables sellers to approve or reject a sample application, including optional feedback message.
 *
 * @returns A promise resolving to the review result.
 * Endpoint: `POST /affiliate_seller/202409/sample_applications/{application_id}/review`
 */
export async function sellerReviewSampleApplications(params: TiktokSellerReviewSampleApplicationsParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerReviewSampleApplicationsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerReviewSampleApplicationsResponse>>(
    `/affiliate_seller/202409/sample_applications/${params.application_id}/review`,
    'POST',
    { body: params.body },
    config,
    'sellerReviewSampleApplications',
  );
}

/**
 * Get current sample rules for open collaborations.
 *
 * Retrieves defined sample offer requirements for creators in open collaborations.
 *
 * @returns A promise resolving to the sample rules.
 * Endpoint: `GET /affiliate_seller/202410/open_collaborations/sample_rules`
 */
export async function getOpenCollaborationSampleRules(query: TiktokGetOpenCollaborationSampleRulesQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationSampleRulesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOpenCollaborationSampleRulesResponse>>(
    `/affiliate_seller/202410/open_collaborations/sample_rules`,
    'GET',
    { query: query },
    config,
    'getOpenCollaborationSampleRules',
  );
}

/**
 * Search submitted sample applications.
 *
 * Enables sellers to find sample applications using filtering criteria via query and body payload.
 *
 * @returns A promise resolving to the list of sample applications.
 * Endpoint: `POST /affiliate_seller/202409/sample_applications/search`
 */
export async function sellerSearchSampleApplications(params: TiktokSellerSearchSampleApplicationsParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerSearchSampleApplicationsResponse>>(
    `/affiliate_seller/202409/sample_applications/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'sellerSearchSampleApplications',
  );
}

/**
 * Edit sample rules for open collaborations.
 *
 * Sellers modify eligibility requirements, sample limits, or content expectations via this API.
 *
 * @returns A promise resolving to the updated rule configuration.
 * Endpoint: `POST /affiliate_seller/202410/open_collaborations/sample_rules`
 */
export async function editOpenCollaborationSampleRule(body: TiktokEditOpenCollaborationSampleRuleBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokEditOpenCollaborationSampleRuleResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokEditOpenCollaborationSampleRuleResponse>>(
    `/affiliate_seller/202410/open_collaborations/sample_rules`,
    'POST',
    { body: body },
    config,
    'editOpenCollaborationSampleRule',
  );
}

/**
 * Remove a target collaboration.
 *
 * Deletes an existing target collaboration specified by its ID.
 *
 * @returns A promise confirming the removal.
 * Endpoint: `DELETE /affiliate_seller/202409/target_collaborations/{target_collaboration_id}`
 */
export async function removeTargetCollaboration(target_collaboration_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<object>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<object>>(
    `/affiliate_seller/202409/target_collaborations/${target_collaboration_id}`,
    'DELETE',
    {},
    config,
    'removeTargetCollaboration',
  );
}

/**
 * Search target collaborations.
 *
 * Filters and retrieves target collaborations based on the provided criteria in query and body.
 *
 * @returns A promise resolving to the list of target collaborations.
 * Endpoint: `POST /affiliate_seller/202409/target_collaborations/search`
 */
export async function searchTargetCollaborations(params: TiktokSearchTargetCollaborationsParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchTargetCollaborationsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchTargetCollaborationsResponse>>(
    `/affiliate_seller/202409/target_collaborations/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchTargetCollaborations',
  );
}

/**
 * Update a target collaboration.
 *
 * Modifies attributes of an existing target collaboration identified by its ID.
 *
 * @returns A promise resolving to the updated collaboration details.
 * Endpoint: `PUT /affiliate_seller/202409/target_collaborations/{target_collaboration_id}`
 */
export async function updateTargetCollaboration(params: TiktokUpdateTargetCollaborationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokUpdateTargetCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokUpdateTargetCollaborationResponse>>(
    `/affiliate_seller/202409/target_collaborations/${params.target_collaboration_id}`,
    'PUT',
    { body: params.body },
    config,
    'updateTargetCollaboration',
  );
}

/**
 * Get open collaboration settings.
 *
 * Retrieves current configuration settings for open collaborations.
 *
 * @returns A promise resolving to the settings data.
 * Endpoint: `GET /affiliate_seller/202409/open_collaboration_settings`
 */
export async function getOpenCollaborationSettings(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationSettingsResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOpenCollaborationSettingsResponse>>(
    `/affiliate_seller/202409/open_collaboration_settings`,
    'GET',
    {},
    config,
    'getOpenCollaborationSettings',
  );
}

/**
 * Remove a product from open collaboration.
 *
 * Deletes a product listing from open collaboration offerings using the product ID.
 *
 * @returns A promise confirming removal success.
 * Endpoint: `DELETE /affiliate_seller/202409/open_collaborations/products/{product_id}`
 */
export async function removeOpenCollaboration(product_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokRemoveOpenCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokRemoveOpenCollaborationResponse>>(
    `/affiliate_seller/202409/open_collaborations/products/${product_id}`,
    'DELETE',
    {},
    config,
    'removeOpenCollaboration',
  );
}

/**
 * Get details of a target collaboration.
 *
 * Fetches complete information about a target collaboration using its unique ID.
 *
 * @returns A promise resolving to the target collaboration details.
 * Endpoint: `GET /affiliate_seller/202412/target_collaborations/{target_collaboration_id}`
 */
export async function queryTargetCollaborationDetail(target_collaboration_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokQueryTargetCollaborationDetailResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokQueryTargetCollaborationDetailResponse>>(
    `/affiliate_seller/202412/target_collaborations/${target_collaboration_id}`,
    'GET',
    {},
    config,
    'queryTargetCollaborationDetail',
  );
}

/**
 * Get creator content detail in open collaborations.
 *
 * Retrieves submitted content by creators involved in active open collaboration campaigns.
 *
 * @returns A promise resolving to the creator content details.
 * Endpoint: `GET /affiliate_seller/202412/open_collaborations/creator_content_details`
 */
export async function getOpenCollaborationCreatorContentDetail(query: TiktokGetOpenCollaborationCreatorContentDetailQuery, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetOpenCollaborationCreatorContentDetailResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetOpenCollaborationCreatorContentDetailResponse>>(
    `/affiliate_seller/202412/open_collaborations/creator_content_details`,
    'GET',
    {},
    config,
    'getOpenCollaborationCreatorContentDetail',
  );
}

/**
 * Search open collaborations.
 *
 * Allows sellers to browse open collaboration campaigns using filtering options via body and query.
 *
 * @returns A promise resolving to the list of open collaborations.
 * Endpoint: `POST /affiliate_seller/202412/open_collaborations/search`
 */
export async function searchOpenCollaboration(params: TiktokSearchOpenCollaborationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSearchOpenCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSearchOpenCollaborationResponse>>(
    `/affiliate_seller/202412/open_collaborations/search`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'searchOpenCollaboration',
  );
}

/**
 * Create an open collaboration campaign.
 *
 * Sellers launch a public collaboration invitation for creators by defining campaign details in the request body.
 *
 * @returns A promise resolving to the newly created collaboration.
 * Endpoint: `POST /affiliate_seller/202412/open_collaborations`
 */
export async function createOpenCollaboration(body: TiktokCreateOpenCollaborationBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateOpenCollaborationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateOpenCollaborationResponse>>(
    `/affiliate_seller/202412/open_collaborations`,
    'POST',
    { body: body },
    config,
    'createOpenCollaboration',
  );
}

/**
 * Get messages within a conversation.
 *
 * Retrieves message history from a conversation between seller and creator based on conversation ID.
 *
 * @returns A promise resolving to the conversation messages.
 * Endpoint: `GET /affiliate_seller/202412/conversation/{conversation_id}/messages`
 */
export async function getMessageInTheConversation(params: TiktokGetMessageInTheConversationParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetMessageInTheConversationResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetMessageInTheConversationResponse>>(
    `/affiliate_seller/202412/conversation/${params.conversation_id}/messages`,
    'GET',
    { query: params.query },
    config,
    'getMessageInTheConversation',
  );
}

/**
 * Get list of active conversations.
 *
 * Provides a paginated list of seller-creator conversations with optional filters via query and body.
 *
 * @returns A promise resolving to the list of conversations.
 * Endpoint: `GET /affiliate_seller/202412/conversations`
 */
export async function getConversationList(params: TiktokGetConversationListParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetConversationListResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetConversationListResponse>>(
    `/affiliate_seller/202412/conversations`,
    'GET',
    { query: params.query, body: params.body },
    config,
    'getConversationList',
  );
}

/**
 * Send a message in a conversation thread.
 *
 * Allows sellers to send a new message to a creator within an existing conversation.
 *
 * @returns A promise resolving to the sent message confirmation.
 * Endpoint: `POST /affiliate_seller/202412/conversations/{conversation_id}/messages`
 */
export async function sendImMessage(params: TiktokSendImMessageParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSendImMessageResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSendImMessageResponse>>(
    `/affiliate_seller/202412/conversations/${params.conversation_id}/messages`,
    'POST',
    { body: params.body },
    config,
    'sendImMessage',
  );
}

/**
 * Start a direct conversation with a creator.
 *
 * Initiates a new messaging thread with a creator to discuss affiliate collaboration opportunities.
 *
 * @returns A promise resolving to the newly created conversation.
 * Endpoint: `POST /affiliate_seller/202412/conversations`
 */
export async function createConversationWithCreator(body: TiktokCreateConversationWithCreatorBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokCreateConversationWithCreatorResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokCreateConversationWithCreatorResponse>>(
    `/affiliate_seller/202412/conversations`,
    'POST',
    { body: body },
    config,
    'createConversationWithCreator',
  );
}

/**
 * Mark messages as read in a conversation.
 *
 * Updates the message status in a specific conversation so that unread messages are acknowledged.
 *
 * @returns A promise confirming the read status update.
 * Endpoint: `POST /affiliate_seller/202412/conversatons/read`
 */
export async function markConversationRead(body: TiktokMarkConversationReadBody, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokMarkConversationReadResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokMarkConversationReadResponse>>(
    `/affiliate_seller/202412/conversatons/read`,
    'POST',
    { body: body },
    config,
    'markConversationRead',
  );
}

/**
 * Get the latest unread messages across all conversations.
 *
 * Returns the most recent unread messages received by the seller from various creators.
 *
 * @returns A promise resolving to a list of unread messages.
 * Endpoint: `GET /affiliate_seller/202412/conversations/messages/list/newest`
 */
export async function getLatestUnreadMessages(config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetLatestUnreadMessagesResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetLatestUnreadMessagesResponse>>(
    `/affiliate_seller/202412/conversations/messages/list/newest`,
    'GET',
    {},
    config,
    'getLatestUnreadMessages',
  );
}

/**
 * Search for creators on the affiliate marketplace.
 *
 * Filters and retrieves creator profiles based on search parameters including demographics, performance, and niches.
 *
 * @returns A promise resolving to the list of matching creators.
 * Endpoint: `POST /affiliate_seller/202412/conversations/messages/list/newest`
 */
export async function sellerSearchCreatorOnMarketplace(params: TiktokSellerSearchCreatorOnMarketplaceParams, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokSellerSearchCreatorOnMarketplaceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokSellerSearchCreatorOnMarketplaceResponse>>(
    `/affiliate_seller/202412/conversations/messages/list/newest`,
    'POST',
    { query: params.query, body: params.body },
    config,
    'sellerSearchCreatorOnMarketplace',
  );
}

/**
 * Get performance data of a marketplace creator.
 *
 * Retrieves creator metrics such as conversion rates, engagement, and sales to evaluate potential collaboration.
 *
 * @returns A promise resolving to the creator's performance report.
 * Endpoint: `GET /affiliate_seller/202505/marketplace_creators/{creator_user_id}`
 */
export async function getMarketplaceCreatorPerformance(creator_user_id: string, config: TiktokConfig): Promise<TiktokResponseCommon<TiktokGetMarketplaceCreatorPerformanceResponse>> {
  return TiktokHelper.callTiktokApi<TiktokResponseCommon<TiktokGetMarketplaceCreatorPerformanceResponse>>(
    `/affiliate_seller/202505/marketplace_creators/${creator_user_id}`,
    'GET',
    {},
    config,
    'getMarketplaceCreatorPerformance',
  );
}
