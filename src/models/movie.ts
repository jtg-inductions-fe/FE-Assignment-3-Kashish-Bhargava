/**
 * Represents a movie with its basic details.
 */
export interface Movie {
    /**Unique movie identifier */
    id: number;
    /**URL-friendly identifier for routing */
    slug: string;
    /**Movie title */
    name: string;
    /**List of genres(e.g., action, drama) */
    genres: string[];
    /**Available languages for the movies */
    languages: string[];
    /**Short summary about the movie */
    description: string;
    /**Duration of the movie */
    duration: string;
    /**Movie release date */
    release_date: string;
}
