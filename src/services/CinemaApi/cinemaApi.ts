import { baseApi } from '@services/baseApi';

import type { CinemaResponse } from './cinemaApi.types';

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
                return { url: `cinemas/?${params.toString()}` };
            },
            providesTags: ['Cinemas'],
        }),
    }),
});

export const { useGetCinemasQuery } = cinemaApi;
