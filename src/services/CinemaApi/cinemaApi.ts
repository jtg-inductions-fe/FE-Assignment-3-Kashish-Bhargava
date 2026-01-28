import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

import type { CinemaQueryArgs, CinemaResponse } from './cinemaApi.types';

/**
 * Cinema API service for fetching cinema-related data.
 */
export const cinemaApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCinemas: builder.query<CinemaResponse, CinemaQueryArgs>({
            query: ({ cursor, location }) => {
                const params: Record<string, unknown> = {};
                if (cursor) params.cursor = cursor;
                if (location) params.location = location;

                return {
                    url: API_CONSTANT.CINEMAS,
                    params,
                };
            },
            providesTags: ['Cinemas'],
        }),
    }),
});

export const { useGetCinemasQuery } = cinemaApi;
