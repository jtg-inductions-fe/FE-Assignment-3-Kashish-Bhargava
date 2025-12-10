import { Movie } from '@models/movie';

/**
 * To define the type of the basic movie details i.e. id, name, genres, languages, description, duration,release_date to be displayed in each movie card
 */
export interface MovieCardProps {
    movie: Movie;
}
