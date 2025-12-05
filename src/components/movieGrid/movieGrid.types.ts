import { GridColumns } from '@models/layout';
import { Movie } from '@models/movie';

export interface MovieGridProps {
    movies: Movie[];
}

export interface MovieGridColumns {
    layoutKey: string;
    columns?: GridColumns;
}
