import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi/baseApi';

import { MoviesQueryArgs, MoviesResponse } from './movieApi.types';

/**
 * Movie API service for fetching movie-related data.
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, MoviesQueryArgs | void>({
            query: (args) => {
                const { latest, cursor } = args ?? {};

                const searchParams = new URLSearchParams();
                if (cursor) searchParams.append('cursor', cursor);
                if (latest) searchParams.set('latest', 'true');

                return {
                    url: `${API_CONSTANT.MOVIES}?${searchParams.toString()}`,
                };
            },
            providesTags: ['Movies'],
        }),
    }),
});

export const { useGetMoviesQuery } = movieApi;
