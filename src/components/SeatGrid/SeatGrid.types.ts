import type { SeatRow } from '@containers/SeatBooking.types';
import type { Seat } from '@services/SeatApi/seatApi.types';

export interface SeatGridProps {
    /**Grouped rows of seats */
    rows: SeatRow[];
    /**Currently selected seat IDs */
    selectedSeatIds: number[];
    /**Toggle handler for selecting and unselecting a seat */
    onToggleSeat: (seat: Seat) => void;
}
