export interface CreateBookingArgs {
    /**unique cinema id */
    cinemaId: number;
    /**unique slot id */
    slotId: number;
    /**list of selected seat ids */
    seatIds: number[];
}

export interface CreateBookingResponse {
    /**unique booking id*/
    id: number;
}
