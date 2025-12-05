import { Movie } from '@models/movie';

export interface MoviesResponse {
    next: string | null;
    previous: string | null;
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
