import { GridLayout } from '@components';
import { MovieCard } from '@components';

interface Movie {
    id: number;
    name: string;
    genres: string[];
    languages: string[];
    description: string;
    duration: string;
    release_date: string;
}

interface MovieGridProps {
    movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps) => (
    <GridLayout
        items={movies}
        renderItem={(movie) => <MovieCard movie={movie} />}
    />
);
