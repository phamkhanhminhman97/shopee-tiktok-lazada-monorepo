export interface MembershipGetLinkMemberRequest {
  seller_id: string;
  buyer_id: string;
}

export interface MembershipGetLinkMemberListRequest {
  page_num: string;
  page_size: string;
  seller_id: string;
}

export interface MembershipLinkMembershipRequest {
  p_uid: string;
  member_name?: string;
  tier?: string;
  tier_expiry?: string;
  balance?: number;
  valid_from?: string;
  valid_to?: string;
  linking_token: string;
}

export interface MembershipPartnerLinkRequest {
  member_name?: string;
  valid_from?: string;
  linking_token: string;
  tier?: string;
  balance?: number;
  tier_expiry?: string;
  p_uid: string;
  valid_to?: string;
  from_source?: string;
}

export interface MembershipPartnerTransactionRequest {
  status?: string;
  update_before?: string;
  sort_direction?: string;
  offset?: number;
  limit?: number;
  update_after?: string;
  sort_by?: string;
  created_before?: string;
  created_after?: string;
}

export interface MembershipPartnerUnlinkRequest {
  p_uid: string;
}

export interface MembershipPartnerUpdateRequest {
  tier?: string;
  balance: number;
  tier_expiry?: string;
  p_uid: string;
  member_name?: string;
  valid_from?: string;
  status: string;
  valid_to?: string;
}

export interface MembershipUpdatePartnerUserIdRequest {
  old_p_uid: string;
  new_p_uid: string;
}
