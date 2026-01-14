import { baseApi } from '@services/baseApi';

import type {
    CinemaMovieSlotResponse,
    MovieCinemaSlotResponse,
    SlotQueryArgs,
} from './slotApi.types';

export const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /** Movie Cinema slots */
        getMovieCinemaSlots: builder.query<
            MovieCinemaSlotResponse,
            { movieId: number } & SlotQueryArgs //check
        >({
            query: ({ movieId, date }) => ({
                url: `movies/${movieId}/slots/`,
                params: { date },
            }),
        }),

        /** Cinema Movie slots */
        getCinemaMovieSlots: builder.query<
            CinemaMovieSlotResponse,
            { cinemaId: number } & SlotQueryArgs
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
