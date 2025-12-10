import { Movie } from '@models/movie';
import { baseApi } from '@services/baseApi';

import {
    GenreResponse,
    LanguageResponse,
    MoviesQueryArgs,
    MoviesResponse,
} from './movieApi.types';

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
        getMovies: builder.query<MoviesResponse, MoviesQueryArgs | void>({
            query: (args) => {
                const { cursor, languages = [], genres = [] } = args ?? {};

                const searchParams = new URLSearchParams();
                if (cursor) searchParams.append('cursor', cursor);
                languages.forEach((lang) =>
                    searchParams.append('languages', lang),
                );
                genres.forEach((genre) => searchParams.append('genres', genre));

                return {
                    url: `movies/?${searchParams.toString()}`,
                };
            },
            providesTags: ['Movies'],
        }),

        getMovieGenres: builder.query<string[], void>({
            query: () => ({ url: 'movies/genres/' }),
            transformResponse: (response: GenreResponse[]) =>
                response.map((g) => g.genre),
        }),

        getMovieLanguages: builder.query<string[], void>({
            query: () => ({ url: 'movies/languages/' }),
            transformResponse: (response: LanguageResponse[]) =>
                response.map((l) => l.language),
        }),
    }),
});

export const {
    useGetLatestMoviesQuery,
    useGetMoviesQuery,
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
} = movieApi;
