import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_CONSTANT } from '@app/apiConstant';
import { logout, setAccessToken } from '@features/Auth/authSlice';
import type { RootState } from '@models/store';

import { BaseQueryWithReauth, RefreshTokenResponse } from './baseApi.types';

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
    let result = await rawBaseQuery(args, api, extraOptions);

    //If access token is expired
    if (result.error?.status === 401) {
        //Request new access token using refresh token
        const refreshResult = await rawBaseQuery(
            {
                url: API_CONSTANT.TOKEN_REFRESH,
                method: 'POST',
            },
            api,
            extraOptions,
        );

        //If refresh succeeds, update store and retry request
        if (refreshResult.data) {
            const { access } = refreshResult.data as RefreshTokenResponse;

            api.dispatch(
                setAccessToken({
                    accessToken: access,
                }),
            );
            //Retry original request with new token
            result = await rawBaseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
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
