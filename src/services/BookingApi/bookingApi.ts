import { API_CONSTANT } from '@app/apiConstant';
import { baseApi } from '@services/BaseApi';

import { CreateBookingArgs, CreateBookingResponse } from './bookingApi.types';

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
        }),
    }),
});

export const { useCreateBookingMutation } = bookingApi;
