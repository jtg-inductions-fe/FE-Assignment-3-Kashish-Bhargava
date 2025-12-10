import { GridColumns } from '@models/layout';
import { Movie } from '@models/movie';

/**
 * To provide array of movies each having basic movie details i.e. id, name, genres, languages, description, duration,release_date to be displayed in each movie card
 */
export interface MovieGridProps {
    movies: Movie[];
}

/**
 * To provide a key and grid layout structure for different layout configurations based on the different components or pages.
 */
export interface MovieGridColumns {
    layoutKey: string;
    columns?: GridColumns;
}
