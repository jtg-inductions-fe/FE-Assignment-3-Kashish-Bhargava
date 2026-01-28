import type { Seat } from '@services/SeatApi';

export interface SeatRow {
    /**Row number */
    rowNumber: number;
    /**label for row */
    rowLabel: string;
    /**Seats of a row*/
    seats: Seat[];
}

export interface SeatBookingContainerProps {
    /**unique cinema id */
    cinemaId: number;
    /**unique slot id */
    slotId: number;
}

export interface SeatBookingNavigationState {
    /**movie name */
    movieName: string;
    /**cinema name */
    cinemaName: string;
    /**Selected slot date */
    date: string;
    /**start time of slot */
    startTime: string;
    /**cinema location */
    cinemaLocation: string;
    /**Price per seat */
    seatPrice: number;
}

export interface SnackbarState {
    /**Snackbar visibility */
    open: boolean;
    /**Message to be displayed */
    message: string;
    /**state of the message */
    severity: 'success' | 'error';
}
