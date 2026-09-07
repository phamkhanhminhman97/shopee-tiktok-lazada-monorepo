import {
  TiktokPartialRefund,
  TiktokSku,
} from '../response/return-refund-v3.response';
import {
  Tiktoklocale,
} from '../response/product-v3.response';

export type TiktokApproveCancellationParams = {
    cancel_id: string;
    query: {
        idempotency_key?: string;
    };
};

export type TiktokApproveReturnBody = {
    decision: 'APPROVE_REFUND' | 'APPROVE_RETURN' | 'APPROVE_RECEIVED_PACKAGE' | 'APPROVE_REPLACEMENT' | 'ISSUE_REPLACEMENT_REFUND' | 'OFFER_PARTIAL_REFUND';
    buyer_keep_item?: boolean;
    partial_refund?: TiktokPartialRefund;
};

export type TiktokApproveReturnParams = {
    return_id: string;
    query: {
        idempotency_key: string;
    };
    body: TiktokApproveReturnBody;
};

export type TiktokArbitrationStatus = 'IN_PROGRESS' | 'SUPPORT_BUYER' | 'SUPPORT_SELLER' | 'CLOSED';

export type TiktokCalculateCancellationParams = {
    order_id: string;
    request_type: 'CANCEL' | 'REFUND' | 'RETURN_AND_REFUND';
    shipment_type?: string;
    handover_method?: string;
    reason_name: string;
    order_line_item_ids?: string[];
    skus?: {
        sku_id: string;
        quantity: number;
    }[];
};

export type TiktokCancelOrderBody = {
    order_id: string;
    skus?: {
        sku_id: string;
        quantity: number;
    }[];
    order_line_item_ids: string[];
    cancel_reason: string;
};

export type TiktokCreateReturnParams = {
    query: TiktokReturnRequestQuery;
    body: TiktokReturnRequestInput;
};

export type TiktokGetAftersaleEligibilityParams = {
    order_id: string;
    query?: {
        initiate_aftersale_user: 'SELLER' | 'BUYER';
    };
};

export type TiktokGetRejectReasonQuery = {
    locale?: Tiktoklocale;
    return_or_cancel_id: string;
};

export type TiktokGetReturnRecordParams = {
    return_id: string;
    query?: {
        locale: Tiktoklocale;
    };
};

export type TiktokRejectCancellationParams = {
    cancel_id: string;
    query?: {
        idempotency_key?: string;
    };
    body: {
        reject_reason: string;
        comment?: string;
        images: {
            image_id: string;
            mime_type?: string;
            height?: number;
            width?: number;
        }[];
    };
};

export interface TiktokRejectImage {
    image_id: string;
    mime_type?: string;
    height?: number;
    width?: number;
}

export interface TiktokRejectReturnBody extends Record<string, unknown> {
    decision: 'REJECT_REFUND' | 'REJECT_RETURN' | 'REJECT_RECEIVED_PACKAGE' | 'REJECT_REPLACEMENT';
    reject_reason: string;
    comment?: string;
    images?: TiktokRejectImage[];
}

export type TiktokRejectReturnParams = {
    return_id: string;
    query: {
        idempotency_key: string;
    };
    body: TiktokRejectReturnBody;
};

export type TiktokReturnRequestInput = {
    order_id: string;
    skus?: TiktokSku[];
    order_line_item_ids?: string[];
    return_reason: string;
    return_type: 'REFUND' | 'RETURN_AND_REFUND';
    refund_total?: string;
    currency?: string;
    shipment_type?: 'PLATFORM' | 'BUYER_ARRANGE';
    handover_method?: 'DROP_OFF' | 'PICKUP';
};

export type TiktokReturnRequestQuery = {
    idempotency_key?: string;
};

export type TiktokReturnStatus = 'RETURN_OR_REFUND_REQUEST_PENDING' | 'RETURN_OR_REFUND_REQUEST_REJECT' | 'AWAITING_BUYER_SHIP' | 'BUYER_SHIPPED_ITEM' | 'REJECT_RECEIVE_PACKAGE' | 'RETURN_OR_REFUND_REQUEST_SUCCESS' | 'RETURN_OR_REFUND_REQUEST_CANCEL' | 'RETURN_OR_REFUND_REQUEST_COMPLETE' | 'AWAITING_BUYER_RESPONSE';

export type TiktokSearchCancellationParams = {
    cancel_id: string;
    query?: {
        sort_field?: string;
        sort_order?: string;
        page_size?: string;
        page_token?: string;
    };
    body: {
        cancel_ids: string[];
        order_ids: string[];
        buyer_user_ids: string[];
        cancel_types: string[];
        cancel_status: ('CANCELLATION_REQUEST_PENDING' | 'CANCELLATION_REQUEST_SUCCESS' | 'CANCELLATION_REQUEST_CANCEL' | 'CANCELLATION_REQUEST_COMPLETE')[];
        create_time_ge: number;
        create_time_lt: number;
        update_time_ge: number;
        update_time_lt: number;
        locale: string;
    };
};

export type TiktokSearchReturnParams = {
    query: {
        sort_field?: 'create_time' | 'update_time';
        sort_order?: 'ASC' | 'DESC';
        page_size?: number;
        page_token?: string;
    };
    body: {
        return_ids?: string[];
        order_ids?: string[];
        buyer_user_ids?: string[];
        return_types?: ('REFUND' | 'RETURN_AND_REFUND' | 'REPLACEMENT')[];
        return_status?: TiktokReturnStatus[];
        seller_proposed_return_type?: TiktokSellerProposedReturnType[];
        create_time_ge?: number;
        update_time_lt?: number;
        arbitration_status?: TiktokArbitrationStatus[];
        update_time_ge?: number;
        locale?: Tiktoklocale;
        create_time_lt?: number;
    };
};

export type TiktokSellerProposedReturnType = 'PARTIAL_REFUND';
