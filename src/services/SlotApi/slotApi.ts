import { baseApi } from '@services/baseApi';

import type {
    CinemaMovieSlotArgs,
    CinemaMovieSlotResponse,
    MovieCinemaSlotArgs,
    MovieCinemaSlotResponse,
} from './slotApi.types';

export const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /** Movie Cinema slots */
        getMovieCinemaSlots: builder.query<
            MovieCinemaSlotResponse,
            MovieCinemaSlotArgs
        >({
            query: ({ movieId, date }) => ({
                url: `movies/${movieId}/slots/`,
                params: { date },
            }),
        }),

        /** Cinema Movie slots */
        getCinemaMovieSlots: builder.query<
            CinemaMovieSlotResponse,
            CinemaMovieSlotArgs
        >({
            query: ({ cinemaId, date }) => ({
                url: `cinemas/${cinemaId}/slots/`,
                params: { date },
            }),
        }),
    }),
});

export const { useGetMovieCinemaSlotsQuery, useGetCinemaMovieSlotsQuery } =
    slotApi;
