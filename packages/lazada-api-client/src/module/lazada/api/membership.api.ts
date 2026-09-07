import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  MembershipGetLinkMemberListRequest,
  MembershipGetLinkMemberRequest,
  MembershipLinkMembershipRequest,
  MembershipPartnerLinkRequest,
  MembershipPartnerTransactionRequest,
  MembershipPartnerUnlinkRequest,
  MembershipPartnerUpdateRequest,
  MembershipUpdatePartnerUserIdRequest,
} from '../dto/request/membership.request';
import {
  MembershipGetLinkMemberListResponse,
  MembershipGetLinkMemberResponse,
  MembershipLinkMembershipResponse,
  MembershipPartnerLinkResponse,
  MembershipPartnerTransactionResponse,
  MembershipPartnerUnlinkResponse,
  MembershipPartnerUpdateResponse,
  MembershipUpdatePartnerUserIdResponse,
} from '../dto/response/membership.response';

/**
 * GetLinkMember via Lazada `GET /membership/linkmember/get`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getLinkMember(params: MembershipGetLinkMemberRequest, config: LazadaConfig): Promise<MembershipGetLinkMemberResponse> {
  return LazadaHelper.callLazadaApi<MembershipGetLinkMemberResponse>('/membership/linkmember/get', 'GET', params as unknown as Record<string, unknown>, config, 'getLinkMember');
}

/**
 * GetLinkMemberList via Lazada `GET /membership/linkmember/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getLinkMemberList(params: MembershipGetLinkMemberListRequest, config: LazadaConfig): Promise<MembershipGetLinkMemberListResponse> {
  return LazadaHelper.callLazadaApi<MembershipGetLinkMemberListResponse>('/membership/linkmember/list', 'GET', params as unknown as Record<string, unknown>, config, 'getLinkMemberList');
}

/**
 * LinkMembership via Lazada `POST /membership/link`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function linkMembership(params: MembershipLinkMembershipRequest, config: LazadaConfig): Promise<MembershipLinkMembershipResponse> {
  return LazadaHelper.callLazadaApi<MembershipLinkMembershipResponse>('/membership/link', 'POST', params as unknown as Record<string, unknown>, config, 'linkMembership');
}

/**
 * PartnerLink via Lazada `POST /partner/link`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function partnerLink(params: MembershipPartnerLinkRequest, config: LazadaConfig): Promise<MembershipPartnerLinkResponse> {
  return LazadaHelper.callLazadaApi<MembershipPartnerLinkResponse>('/partner/link', 'POST', params as unknown as Record<string, unknown>, config, 'partnerLink');
}

/**
 * PartnerTransaction via Lazada `POST /partner/transaction`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function partnerTransaction(params: MembershipPartnerTransactionRequest, config: LazadaConfig): Promise<MembershipPartnerTransactionResponse> {
  return LazadaHelper.callLazadaApi<MembershipPartnerTransactionResponse>('/partner/transaction', 'POST', params as unknown as Record<string, unknown>, config, 'partnerTransaction');
}

/**
 * PartnerUnlink via Lazada `POST /partner/unlink`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function partnerUnlink(params: MembershipPartnerUnlinkRequest, config: LazadaConfig): Promise<MembershipPartnerUnlinkResponse> {
  return LazadaHelper.callLazadaApi<MembershipPartnerUnlinkResponse>('/partner/unlink', 'POST', params as unknown as Record<string, unknown>, config, 'partnerUnlink');
}

/**
 * PartnerUpdate via Lazada `POST /partner/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function partnerUpdate(params: MembershipPartnerUpdateRequest, config: LazadaConfig): Promise<MembershipPartnerUpdateResponse> {
  return LazadaHelper.callLazadaApi<MembershipPartnerUpdateResponse>('/partner/update', 'POST', params as unknown as Record<string, unknown>, config, 'partnerUpdate');
}

/**
 * UpdatePartnerUserId via Lazada `POST /partner/updatePartnerUserId`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updatePartnerUserId(params: MembershipUpdatePartnerUserIdRequest, config: LazadaConfig): Promise<MembershipUpdatePartnerUserIdResponse> {
  return LazadaHelper.callLazadaApi<MembershipUpdatePartnerUserIdResponse>('/partner/updatePartnerUserId', 'POST', params as unknown as Record<string, unknown>, config, 'updatePartnerUserId');
}
