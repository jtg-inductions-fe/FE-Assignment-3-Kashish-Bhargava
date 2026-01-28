import type { Seat } from '@services/SeatApi/seatApi.types';

export interface SeatRowProps {
    /**Row label */
    rowLabel: string;
    /**Seat of a row */
    seats: Seat[];
    /**IDs of currently selected seats */
    selectedSeatIds: number[];
    /**Handler to toggle seat selection */
    onToggleSeat: (seat: Seat) => void;
}
