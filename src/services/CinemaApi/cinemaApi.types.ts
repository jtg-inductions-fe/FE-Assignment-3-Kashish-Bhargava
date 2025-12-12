export interface Cinema {
    id: number;
    name: string;
    location: string;
    rows: number;
    seats_per_row: number;
}

export interface CinemaResponse {
    next: string | null;
    previous: string | null;
    results: Cinema[];
}
