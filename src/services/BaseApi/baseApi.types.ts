import { BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

/**
 * Arguments supported by baseQueryWithReauth
 */
export type BaseQueryArgs =
    | string
    | {
          url: string;
          method?: string;
          body?: unknown;
      };

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
