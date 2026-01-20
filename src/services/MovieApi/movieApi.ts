import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi/baseApi';

import {
    GenreResponse,
    LanguageResponse,
    MoviesQueryArgs,
    MoviesResponse,
} from './movieApi.types';

/**
 * Movie API service for fetching movie-related data.
 */
export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, MoviesQueryArgs | void>({
            query: (args) => {
                const {
                    cursor,
                    languages = [],
                    genres = [],
                    latest,
                } = args ?? {};

                const searchParams = new URLSearchParams();
                if (cursor) searchParams.append('cursor', cursor);
                if (latest) searchParams.set('latest', 'true');
                languages.forEach((lang) =>
                    searchParams.append('languages', lang),
                );
                genres.forEach((genre) => searchParams.append('genres', genre));

                return {
                    url: `${API_CONSTANT.MOVIES}?${searchParams.toString()}`,
                };
            },
            providesTags: ['Movies'],
        }),

        getMovieGenres: builder.query<string[], void>({
            query: () => ({ url: API_CONSTANT.GENRES }),
            transformResponse: (response: GenreResponse[]) =>
                response.map((g) => g.genre),
        }),

        getMovieLanguages: builder.query<string[], void>({
            query: () => ({ url: API_CONSTANT.LANGUAGES }),
            transformResponse: (response: LanguageResponse[]) =>
                response.map((l) => l.language),
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
} = movieApi;
