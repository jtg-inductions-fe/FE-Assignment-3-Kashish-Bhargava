export interface Slot {
    id: number;
    start_time: string;
    end_time: string;
    price: string;
    fill_percentage?: number; //check
}

export interface SlotMetrics {
    totalSeats: number;
    bookedSeats: number;
}
