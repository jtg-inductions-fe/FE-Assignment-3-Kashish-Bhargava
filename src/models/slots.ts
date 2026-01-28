/**
 * Single show slot
 */
export interface Slot {
    /**Unique slot id */
    id: number;
    /**Slot start time */
    start_time: string;
    /**Slot end time*/
    end_time: string;
    /**Ticket price for a slot */
    price: string;
    /**Fill percentage for availability status*/
    fill_percentage?: number;
}

/**Metrics for a slot*/
export interface SlotMetrics {
    /**total available seats in a slot */
    totalSeats: number;
    /**No. of seats booked */
    bookedSeats: number;
}
