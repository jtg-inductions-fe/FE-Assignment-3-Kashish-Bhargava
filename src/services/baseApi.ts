import {
    BaseQueryFn,
    createApi,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { API_CONSTANT } from '@app/apiConstant';
import { setAccessToken } from '@features/Auth/authSlice';
import type { RootState } from '@models/store';

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

        // Attach token to all authenticated requests
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | { url: string; method?: string; body?: unknown },
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshResult = await rawBaseQuery(
            {
                url: API_CONSTANT.TOKEN_REFRESH,
                method: 'POST',
            },
            api,
            extraOptions,
        );

        if (refreshResult.data) {
            const { access } = refreshResult.data as { access: string };

            api.dispatch(
                setAccessToken({
                    accessToken: access,
                }),
            );
            result = await rawBaseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    //Tags used for automatic cache management (invalidate/refetch)
    tagTypes: ['Movies', 'Cinemas', 'Bookings', 'User'],
    endpoints: () => ({}),
});
