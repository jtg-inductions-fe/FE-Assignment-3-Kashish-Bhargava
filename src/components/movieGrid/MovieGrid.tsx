import { GridLayout } from '@components';
import { MovieCard } from '@components';

import { MovieGridProps } from './movieGrid.types';

export const MovieGrid = ({ movies }: MovieGridProps) => (
    <GridLayout
        items={movies}
        renderItem={(movie) => <MovieCard movie={movie} />}
    />
);
