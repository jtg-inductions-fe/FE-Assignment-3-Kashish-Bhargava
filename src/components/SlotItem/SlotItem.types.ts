/**
 * Props for the SlotItem component
 */
export interface SlotItemProps {
    /**Start time of the slot */
    startTime: string;
    /**Metrics to calculate the slot availability */
    metrics?: {
        /**Total number of seats in a slot*/
        totalSeats: number;
        /**Number of seats booked*/
        bookedSeats: number;
    };
    /**unique identifier for cinema */
    cinemaId: number;
    /**unique identifier for slot */
    slotId: number;
    /**movie name */
    movieName: string;
    /**cinema name */
    cinemaName: string;
    /**date of slot */
    date: string;
    /**cinema location */
    cinemaLocation: string;
    /**price of seat */
    seatPrice: number;
}
