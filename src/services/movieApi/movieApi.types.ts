import { Movie } from '@models/movie';

export interface MoviesResponse {
    next: string | null;
    previous: string | null;
    results: Movie[];
}
