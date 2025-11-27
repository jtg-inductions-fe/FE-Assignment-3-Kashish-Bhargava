import type { RootState } from '@app';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/', //Backend base URL
        prepareHeaders: (headers, { getState }) => {
            //Extract the access token from the Redux auth state
            const token = (getState() as RootState).auth.accessToken;
            //Attach token to all authenticated requests
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
