import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

import {
    CreateBookingArgs,
    CreateBookingResponse,
    PurchaseHistoryArgs,
    PurchaseHistoryResponse,
} from './bookingApi.types';

/**API slice for Booking related operations*/
export const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        /**Create a booking for selected seats in a slot*/
        createBooking: builder.mutation<
            CreateBookingResponse,
            CreateBookingArgs
        >({
            query: ({ cinemaId, slotId, seatIds }) => ({
                url: `${API_CONSTANT.CINEMAS}${cinemaId}/${API_CONSTANT.SLOTS}${slotId}/${API_CONSTANT.BOOKINGS}`,
                method: 'POST',
                body: {
                    seat_ids: seatIds,
                    status: 'B',
                },
            }),
            invalidatesTags: (_result, _error, { cinemaId, slotId }) => [
                {
                    type: 'Seats',
                    id: `${cinemaId}-${slotId}`,
                },
            ],
        }),

        /**To get all the tickets purchased by the user (upcoming, past and cancelled)*/
        getPurchaseHistory: builder.query<
            PurchaseHistoryResponse,
            PurchaseHistoryArgs
        >({
            query: ({ booking, cursor }) => ({
                url: `${API_CONSTANT.CINEMAS}${API_CONSTANT.BOOKINGS}${API_CONSTANT.HISTORY}`,
                params: {
                    booking,
                    cursor,
                },
            }),
            providesTags: ['Bookings'],
        }),

        /**Cancel a booking for selected seats in a slot*/
        cancelBooking: builder.mutation<void, number>({
            query: (bookingId) => ({
                url: `/${API_CONSTANT.CINEMAS}${API_CONSTANT.BOOKINGS}${bookingId}/`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Bookings'],
        }),
    }),
});

export const {
    useCreateBookingMutation,
    useGetPurchaseHistoryQuery,
    useCancelBookingMutation,
} = bookingApi;
