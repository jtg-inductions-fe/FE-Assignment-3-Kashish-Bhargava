import { API_CONSTANT } from '@app/apiConstant';
import { Movie } from '@models/movie';
import { baseApi } from '@services/BaseApi/baseApi';
import { capitalizeArray } from '@utils';

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
        getMovies: builder.query<MoviesResponse, MoviesQueryArgs>({
            query: ({ cursor, languages, genres, latest }) => ({
                url: API_CONSTANT.MOVIES,
                params: {
                    cursor,
                    latest,
                    languages,
                    genres,
                },
            }),
            providesTags: ['Movies'],
        }),

        //Fetch all genres for filters
        getMovieGenres: builder.query<string[], void>({
            query: () => ({ url: API_CONSTANT.GENRES }),
            transformResponse: (response: GenreResponse[]) =>
                capitalizeArray((response ?? []).map((genre) => genre.genre)),
        }),

        //Fetch all languages for filters
        getMovieLanguages: builder.query<string[], void>({
            query: () => ({ url: API_CONSTANT.LANGUAGES }),
            transformResponse: (response: LanguageResponse[]) =>
                capitalizeArray(
                    (response ?? []).map((language) => language.language),
                ),
        }),

        //Fetch single movie by slug
        getMovieBySlug: builder.query<Movie, string>({
            query: (slug) => ({
                url: `${API_CONSTANT.MOVIES}${slug}/`,
            }),
            providesTags: (result, error, slug) => [
                { type: 'Movies', id: slug },
            ],
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
    useGetMovieBySlugQuery,
} = movieApi;
