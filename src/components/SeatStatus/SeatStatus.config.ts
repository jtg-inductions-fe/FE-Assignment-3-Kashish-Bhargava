import type { SeatItems } from './SeatStatus.types';

/**Configuration for seat status */
export const STATUS_ITEMS: SeatItems[] = [
    { label: 'Available', status: 'available' },
    { label: 'Selected', status: 'selected' },
    { label: 'Booked', status: 'booked' },
];
