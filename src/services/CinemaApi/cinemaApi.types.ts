/**
 * Represents a cinema with its basic details.
 */
export interface Cinema {
    /**Unique cinema identifier */
    id: number;
    /**Cinema name*/
    name: string;
    /**Location of cinema*/
    location: string;
    /**No. of rows in cinema */
    rows: number;
    /**Seats per row in cinema */
    seats_per_row: number;
    /**Cinema slug */
    slug: string;
}

/**
 * Represents a paginated response for cinemas retrieved from API.
 */
export interface CinemaResponse {
    /**URL for the next page of results, or null if no more pages. */
    next: string | null;
    /**URL for the previous page of results, or null if on the first page. */
    previous: string | null;
    /**List of movies returned in the current page. */
    results: Cinema[];
}
