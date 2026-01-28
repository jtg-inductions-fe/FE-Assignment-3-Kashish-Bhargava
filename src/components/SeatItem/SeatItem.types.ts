import type { Seat } from '@services/SeatApi/seatApi.types';

export interface SeatItemProps {
    /**Seat data object */
    seat: Seat;
    /**Determines the seat is selected or not */
    isSelected: boolean;
    /**Handler to toggle seat selection */
    onToggle: (seat: Seat) => void;
}
