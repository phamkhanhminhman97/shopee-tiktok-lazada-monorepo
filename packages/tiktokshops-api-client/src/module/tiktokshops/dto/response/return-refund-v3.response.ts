export type TiktokCalculateCancellationResponse = {
    order_refund_amount?: {
        currency?: string;
        refund_total?: string;
        refund_subtotal?: string;
        refund_shipping_fee?: string;
        refund_tax?: string;
        retail_delivery_fee?: string;
    };
};

export type TiktokCancelOrderResponse = {
    cancel_id?: string;
    cancel_status?: string;
};

export interface TiktokCreateReturnResponse {
    order_id: string;
    skus: TiktokSku[];
    order_line_item_ids: string[];
    return_reason: string;
    return_type: 'REFUND' | 'RETURN_AND_REFUND';
    refund_total: string;
    currency: string;
    shipment_type: 'PLATFORM' | 'BUYER_ARRANGE';
    handover_method: 'DROP_OFF' | 'PICKUP';
}

export interface TiktokDiscountAmount {
    currency?: string;
    product_seller_discount?: string;
    shipping_fee_platform_discount?: string;
    shipping_fee_seller_discount?: string;
    product_platform_discount?: string;
}

export interface TiktokGetAftersaleEligibilityResponse {
    sku_eligibility: TiktokSKUEligibility[];
}

export type TiktokGetRejectReasonResponse = {
    reasons: {
        name?: string;
        text?: string;
    }[];
};

export interface TiktokGetReturnRecordResponse {
    records?: TiktokReturnRecord[];
}

export interface TiktokLineItemEligibility {
    request_type: 'REFUND' | 'RETURN' | string;
    order_line_items_ids: string[];
    eligible: boolean;
    ineligible_code?: number;
    ineligible_reason?: string;
}

export interface TiktokPartialRefund {
    currency?: string;
    amount?: string;
}

export interface TiktokRefundAmount {
    currency?: string;
    refund_total?: string;
    refund_subtotal?: string;
    refund_shipping_fee?: string;
    refund_tax?: string;
    retail_delivery_fee?: string;
    buyer_service_fee?: string;
}

export interface TiktokReturnImage {
    url?: string;
    width?: number;
    height?: number;
}

export interface TiktokReturnLineItem {
    return_line_item_id?: string;
    order_line_item_id?: string;
    sku_id?: string;
    sku_name?: string;
    product_name?: string;
    seller_sku?: string;
    product_image?: {
        url?: string;
        width?: number;
        height?: number;
    };
    refund_amount?: TiktokRefundAmount;
}

export interface TiktokReturnOrder {
    order_id?: string;
    return_id?: string;
    return_type?: string;
    return_status?: string;
    arbitration_status?: string;
    role?: string;
    return_reason?: string;
    return_reason_text?: string;
    shipment_type?: string;
    handover_method?: string;
    return_tracking_number?: string;
    return_provider_name?: string;
    return_provider_id?: string;
    pre_return_id?: string;
    next_return_id?: string;
    can_buyer_keep_item?: boolean;
    update_time?: number;
    seller_next_action_response?: TiktokSellerNextAction[];
    create_time?: number;
    return_line_items?: TiktokReturnLineItem[];
    discount_amount?: TiktokDiscountAmount[];
    shipping_fee_amount?: TiktokShippingFeeAmount[];
    refund_amount?: TiktokRefundAmount;
    return_shipping_document_type?: string;
    return_method?: string;
    is_combined_return?: string;
    combined_return_id?: string;
    seller_proposed_return_type?: string;
    partial_refund?: TiktokPartialRefund;
    buyer_rejected_partial_refund?: boolean;
    return_warehouse_address?: {
        full_address?: string;
    };
}

export interface TiktokReturnRecord {
    event?: string;
    role?: string;
    description?: string;
    reason_text?: string;
    note?: string;
    images?: TiktokReturnImage[];
    videos?: TiktokReturnVideo[];
    create_time?: number;
}

export interface TiktokReturnVideo {
    url?: string;
    cover?: string;
    width?: number;
    height?: number;
    duration_millis?: number;
}

export interface TiktokSKUEligibility {
    sku_id: string;
    line_item_eligibility: TiktokLineItemEligibility[];
}

export type TiktokSearchCancellationResponse = {
    cancellations?: {
        order_id?: string;
        cancel_type?: string;
        cancel_status?: string;
        role?: string;
        cancel_reason?: string;
        cancel_reason_text?: string;
        create_time?: number;
        update_time?: number;
        seller_next_action_response?: {
            action?: string;
            deadline?: number;
        }[];
        refund_amount?: {
            currency?: string;
            refund_total?: string;
            refund_subtotal?: string;
            refund_shipping_fee?: string;
            refund_tax?: string;
            retail_delivery_fee?: string;
            buyer_service_fee?: string;
        };
        cancel_line_items?: {
            cancel_line_item_id?: string;
            order_line_item_id?: string;
            sku_id?: string;
            sku_name?: string;
            product_image?: {
                url?: string;
                width?: number;
                height?: number;
            };
            product_name?: string;
            seller_sku?: string;
            refund_amount?: {
                currency?: string;
                refund_total?: string;
                refund_subtotal?: string;
                refund_shipping_fee?: string;
                refund_tax?: string;
                retail_delivery_fee?: string;
                buyer_service_fee?: string;
            };
        }[];
        cancel_id?: string;
    }[];
    total_count?: number;
    next_page_token?: string;
};

export interface TiktokSearchReturnResponse {
    return_orders?: TiktokReturnOrder[];
    total_count?: number;
    next_page_token?: string;
}

export interface TiktokSellerNextAction {
    action?: string;
    deadline?: number;
}

export interface TiktokShippingFeeAmount {
    currency?: string;
    seller_paid_return_shipping_fee?: string;
    platform_paid_return_shipping_fee?: string;
    buyer_paid_return_shipping_fee?: string;
}

export interface TiktokSku {
    sku_id: string;
    quantity: number;
}
