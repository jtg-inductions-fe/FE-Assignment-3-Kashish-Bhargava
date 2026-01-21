import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { logout } from '@features/Auth/authSlice';
import type { RootState } from '@models/store';

import { BaseQueryWithReauth } from './baseApi.types';

const rawBaseQuery = fetchBaseQuery({
    baseUrl:
        //Backend base URL
        import.meta.env.VITE_API_BASE_URL ||
        (() => {
            throw new Error(
                'VITE_API_BASE_URL environment variable is not defined',
            );
        })(),
    //Include cookies in requests
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // Extract the access token from the Redux auth state
        const token = (getState() as RootState).auth.accessToken;

        // Attach access token to all authenticated requests
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

//Base Query to handle token refresh on 401
export const baseQueryWithReauth: BaseQueryWithReauth = async (
    args,
    api,
    extraOptions,
) => {
    //Execute original API request
    const result = await rawBaseQuery(args, api, extraOptions);
    //If token is expired
    if (result.error?.status === 401) {
        api.dispatch(logout());
    }

    return result;
};

//RTK Query API instance
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    //Tags used for automatic cache management (invalidate/refetch)
    tagTypes: ['Movies', 'Cinemas', 'Bookings', 'User'],
    endpoints: () => ({}),
});
