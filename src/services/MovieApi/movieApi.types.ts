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

export interface MoviesQueryArgs {
    cursor?: string | null;
    languages?: string[];
    genres?: string[];
}

export interface GenreResponse {
    genre: string;
}

export interface LanguageResponse {
    language: string;
}
