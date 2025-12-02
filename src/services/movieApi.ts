import { baseApi } from '@services';

interface Movie {
    id: number;
    name: string;
    genres: string[];
    languages: string[];
    description: string;
    duration: string;
    release_date: string;
}

interface MoviesResponse {
    next: string | null;
    previous: string | null;
    results: Movie[];
}

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
