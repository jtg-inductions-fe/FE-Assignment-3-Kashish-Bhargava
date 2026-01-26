//Props for SeatBookingSummary component
export interface SeatBookingSummaryProps {
    /**Price per seat in a slot */
    pricePerSeat: number;
    /**No. of seats selected */
    selectedCount: number;
    /**Callback triggered when user clicks "Book Tickets" */
    onBook: () => void;
    /**To indicate booking in progress*/
    isBooking: boolean;
}
