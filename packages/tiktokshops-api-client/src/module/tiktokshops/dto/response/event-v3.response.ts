export type TiktokApiResponse = object;

export type TiktokGetWebhooksResponse = {
    webhooks: {
        event_type: string;
        address: string;
        create_time: number;
        update_time: number;
    }[];
    total_count: number;
};
