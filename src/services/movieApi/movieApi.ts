import { Movie } from '@models/movie';
import { baseApi } from '@services/baseApi';

import { MoviesResponse } from './movieApi.types';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLatestMovies: builder.query<Movie[], void>({
            query: () => ({
                url: 'movies/',
                params: { latest: 'true' },
            }),
            transformResponse: (response: MoviesResponse | Movie[]) =>
                Array.isArray(response) ? response : (response.results ?? []),
            providesTags: ['Movies'],
        }),
    }),
});

export const { useGetLatestMoviesQuery } = movieApi;
