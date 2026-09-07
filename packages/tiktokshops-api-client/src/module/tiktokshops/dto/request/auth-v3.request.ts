export interface TiktokGetAccessTokenParams {
    auth_code: string;
    grant_type: 'authorized_code';
}

export interface TiktokRefreshAccessTokenParams {
    refresh_token: string;
    grant_type: 'refresh_token';
}
