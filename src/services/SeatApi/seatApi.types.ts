export interface Seat {
    id: number;
    available: boolean;
    row_number: number;
    seat_number: number;
}

export type SeatResponse = Seat[];

export interface SeatQueryArgs {
    cinemaId: number;
    slotId: number;
}
