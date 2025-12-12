import { Movie } from '@models/movie';
import { baseApi } from '@services/baseApi';
import { capitalizeArray } from '@utils';

import {
    GenreResponse,
    LanguageResponse,
    MoviesQueryArgs,
    MoviesResponse,
} from './movieApi.types';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //Fetch latest movies for homepage
        getLatestMovies: builder.query<Movie[], void>({
            query: () => ({
                url: 'movies/',
                params: { latest: 'true' },
            }),
            transformResponse: (response: MoviesResponse | Movie[]) =>
                Array.isArray(response) ? response : (response.results ?? []),
            providesTags: ['Movies'],
        }),
        //Fetch movies with filters and pagination
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
        //Fetch all genres for filters
        getMovieGenres: builder.query<string[], void>({
            query: () => ({ url: 'movies/genres/' }),
            transformResponse: (response: GenreResponse[]) =>
                capitalizeArray(response.map((g) => g.genre)),
        }),
        //Fetch all languages for filters
        getMovieLanguages: builder.query<string[], void>({
            query: () => ({ url: 'movies/languages/' }),
            transformResponse: (response: LanguageResponse[]) =>
                capitalizeArray(response.map((l) => l.language)),
        }),
        //Fetch single movie by slug
        getMovieBySlug: builder.query<Movie, string>({
            query: (slug) => ({
                url: `movies/${slug}/`,
            }),
            providesTags: (result, error, slug) => [
                { type: 'Movies', id: slug },
            ],
        }),
    }),
});

export const {
    useGetLatestMoviesQuery,
    useGetMoviesQuery,
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
    useGetMovieBySlugQuery,
} = movieApi;
