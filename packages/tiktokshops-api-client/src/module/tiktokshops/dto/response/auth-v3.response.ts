export interface TiktokAccessTokenResponse {
    access_token?: string;
    refresh_token?: string;
    access_token_expire_in?: number;
    refresh_token_expire_in?: number;
    open_id?: string;
    seller_name?: string;
}

export interface TiktokAuthErrorResponse {
    code?: number;
    message?: string;
    request_id?: string;
}

export interface TiktokAuthRequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
}

export type TiktokAuthResponse = TiktokAccessTokenResponse | TiktokAuthErrorResponse;
