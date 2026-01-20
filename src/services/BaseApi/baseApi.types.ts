import type { FetchArgs } from '@reduxjs/toolkit/query';
import { BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

/**
 * Arguments supported by baseQueryWithReauth
 */
export type BaseQueryArgs = string | FetchArgs;

/**
 * Base query type with refresh token functionality
 */
export type BaseQueryWithReauth = BaseQueryFn<
    BaseQueryArgs,
    unknown,
    FetchBaseQueryError
>;

/**
 * Refresh token response structure
 */
export interface RefreshTokenResponse {
    access: string;
}
