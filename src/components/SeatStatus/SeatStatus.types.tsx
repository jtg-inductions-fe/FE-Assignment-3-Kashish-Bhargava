//Types of status of a seat
export type SeatStatusTypes = 'available' | 'selected' | 'booked';

export interface SeatItems {
    /**Display label */
    label: string;
    /**Status of a seat */
    status: SeatStatusTypes;
}
