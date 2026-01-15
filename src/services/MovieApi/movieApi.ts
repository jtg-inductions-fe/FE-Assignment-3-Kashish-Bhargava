import { API_CONSTANT } from '@constant';
import { Movie } from '@models/movie';
import { baseApi } from '@services/baseApi';

import { MoviesResponse } from './movieApi.types';

/**
 * Movie API service for fetching movie-related data.
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLatestMovies: builder.query<Movie[], void>({
            query: () => ({
                url: API_CONSTANT.MOVIES,
                params: { latest: 'true' },
            }),
            transformResponse: (response: MoviesResponse | Movie[]) =>
                Array.isArray(response) ? response : (response.results ?? []),
            providesTags: ['Movies'],
        }),
    }),
});

export const { useGetLatestMoviesQuery } = movieApi;
