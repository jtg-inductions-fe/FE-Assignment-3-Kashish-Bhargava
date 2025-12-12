import { Movie } from '@models/movie';

/**
 * Represents a paginated response for movies retrieved from API.
 */
export interface MoviesResponse {
    /**URL for the next page of results, or null if no more pages. */
    next: string | null;
    /**URL for the previous page of results, or null if on the first page. */
    previous: string | null;
    /**List of movies returned in the current page. */
    results: Movie[];
}

/** Query parameters used when fetching paginated movie lists  */
export interface MoviesQueryArgs {
    /**Cursor for pagination (used to fetch next or previous results).*/
    cursor?: string | null;
    /**List of selected languages to filter movies */
    languages?: string[];
    /**List of selected genres to filter movies. */
    genres?: string[];
}

/**API response structure for a single movie genre */
export interface GenreResponse {
    /**Name of the genre*/
    genre: string;
}

export interface LanguageResponse {
    /**Name of the language*/
    language: string;
}
