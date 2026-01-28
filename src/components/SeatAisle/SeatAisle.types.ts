/*seat orientation options for the seat aisle*/
export type SeatAisleOrientation = 'horizontal' | 'vertical';

/*Props for SeatAisle component*/
export interface SeatAisleProps {
    orientation?: SeatAisleOrientation;
}
