import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

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
                url: `${API_CONSTANT.MOVIES}${movieId}/${API_CONSTANT.SLOTS}`,
                params: { date },
            }),
        }),

        /** Cinema Movie slots */
        getCinemaMovieSlots: builder.query<
            CinemaMovieSlotResponse,
            CinemaMovieSlotArgs
        >({
            query: ({ cinemaId, date }) => ({
                url: `${API_CONSTANT.CINEMAS}${cinemaId}/${API_CONSTANT.SLOTS}`,
                params: { date },
            }),
        }),
    }),
});

export const { useGetMovieCinemaSlotsQuery, useGetCinemaMovieSlotsQuery } =
    slotApi;
