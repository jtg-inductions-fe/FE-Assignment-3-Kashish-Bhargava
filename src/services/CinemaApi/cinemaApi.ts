import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

import type { CinemaResponse } from './cinemaApi.types';

/**
 * Cinema API service for fetching cinema-related data.
 */
export const cinemaApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCinemas: builder.query<
            CinemaResponse,
            { cursor?: string | null; location?: string }
        >({
            query: ({ cursor, location }) => {
                const params = new URLSearchParams();
                if (cursor) params.append('cursor', cursor);
                if (location) params.append('location', location);
                const queryString = params.toString();

                return {
                    url: queryString
                        ? `${API_CONSTANT.CINEMAS}?${queryString}`
                        : API_CONSTANT.CINEMAS,
                };
            },
            providesTags: ['Cinemas'],
        }),
    }),
});

export const { useGetCinemasQuery } = cinemaApi;
