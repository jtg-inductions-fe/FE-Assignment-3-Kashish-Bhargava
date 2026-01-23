import { baseApi } from '@services/BaseApi';

import { SeatQueryArgs, type SeatResponse } from './seatApi.types';

export const seatApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSeats: builder.query<SeatResponse, SeatQueryArgs>({
            query: ({ cinemaId, slotId }) => ({
                url: `/cinemas/${cinemaId}/slots/${slotId}/seats/`,
            }),
            providesTags: ['Bookings'],
        }),
    }),
});

export const { useGetSeatsQuery } = seatApi;
