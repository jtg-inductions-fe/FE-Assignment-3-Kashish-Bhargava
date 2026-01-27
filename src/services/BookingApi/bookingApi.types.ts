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

/** Filters for purchase history */
export type BookingStatusFilter = 'upcoming' | 'past' | 'cancelled';

/**A booked seat  */
export interface PurchaseHistorySeat {
    /**Row number of seat */
    row_number: number;
    /**Seat number of seat */
    seat_number: number;
}

/**Slot details  */
export interface PurchaseHistorySlot {
    /**Cinema name */
    cinema: string;
    /**Cinema location */
    location: string;
    /**Movie name */
    movie: string;
    /**Slot start date and time */
    start_time: string;
    /**Movie duration */
    duration: string;
}

/**Ticket */
export interface PurchaseHistoryTicket {
    /**booking id */
    id: number;
    /**Booking status: 'B'=Booked, 'C'=Cancelled*/
    status: 'B' | 'C';
    /**Booking creation time */
    created_at: string;
    /** Slot info*/
    slot: PurchaseHistorySlot;
    /**List of booked seats */
    seats: PurchaseHistorySeat[];
    /**Total price*/
    total_price: number;
}
/**Paginated response */
export interface PurchaseHistoryResponse {
    /**Cursor for next page */
    next: string | null;
    /**Cursor for previous page */
    previous: string | null;
    /**List of tickets */
    results: PurchaseHistoryTicket[];
}

/**Arguments for purchase history */
export interface PurchaseHistoryArgs {
    /**Filter type for booking */
    booking: BookingStatusFilter;
    /**Pagination cursor */
    cursor?: string | null;
}
