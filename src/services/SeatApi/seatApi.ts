import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

import type { SeatQueryArgs, SeatResponse } from './seatApi.types';

export const seatApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSeats: builder.query<SeatResponse, SeatQueryArgs>({
            query: ({ cinemaId, slotId }) => ({
                url: `${API_CONSTANT.CINEMAS}${cinemaId}/${API_CONSTANT.SLOTS}${slotId}/${API_CONSTANT.SEATS}`,
            }),
            providesTags: (_result, _error, { cinemaId, slotId }) => [
                { type: 'Seats', id: `${cinemaId}-${slotId}` },
            ],
        }),
    }),
});

export const { useGetSeatsQuery } = seatApi;
