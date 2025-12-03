import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '@models/store';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:
            import.meta.env.VITE_API_BASE_URL ||
            (() => {
                throw new Error(
                    'VITE_API_BASE_URL environment variable is not defined',
                );
            })(), //Backend base URL
        prepareHeaders: (headers, { getState }) => {
            // Extract the access token from the Redux auth state
            const token = (getState() as RootState).auth.accessToken;
            // Attach token to all authenticated requests
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    //Tags used for automatic cache management (invalidate/refetch)
    tagTypes: ['Movies', 'Cinemas', 'Bookings', 'User'],
    endpoints: () => ({}),
});
