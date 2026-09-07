import { LazadaConfig } from '../dto/request/config.request';
import {
  getLinkMember,
  getLinkMemberList,
  linkMembership,
  partnerLink,
  partnerTransaction,
  partnerUnlink,
  partnerUpdate,
  updatePartnerUserId,
} from '../api/membership.api';
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
 * Lazada `membership-api` API namespace.
 *
 * Access via `lazada.membership.<method>()` on a `LazadaModule` instance.
 */
export class LazadaMembership {
  constructor(private config: LazadaConfig) {}

  async getLinkMember(params: MembershipGetLinkMemberRequest): Promise<MembershipGetLinkMemberResponse> {
    return await getLinkMember(params, this.config);
  }

  async getLinkMemberList(params: MembershipGetLinkMemberListRequest): Promise<MembershipGetLinkMemberListResponse> {
    return await getLinkMemberList(params, this.config);
  }

  async linkMembership(params: MembershipLinkMembershipRequest): Promise<MembershipLinkMembershipResponse> {
    return await linkMembership(params, this.config);
  }

  async partnerLink(params: MembershipPartnerLinkRequest): Promise<MembershipPartnerLinkResponse> {
    return await partnerLink(params, this.config);
  }

  async partnerTransaction(params: MembershipPartnerTransactionRequest): Promise<MembershipPartnerTransactionResponse> {
    return await partnerTransaction(params, this.config);
  }

  async partnerUnlink(params: MembershipPartnerUnlinkRequest): Promise<MembershipPartnerUnlinkResponse> {
    return await partnerUnlink(params, this.config);
  }

  async partnerUpdate(params: MembershipPartnerUpdateRequest): Promise<MembershipPartnerUpdateResponse> {
    return await partnerUpdate(params, this.config);
  }

  async updatePartnerUserId(params: MembershipUpdatePartnerUserIdRequest): Promise<MembershipUpdatePartnerUserIdResponse> {
    return await updatePartnerUserId(params, this.config);
  }
}
