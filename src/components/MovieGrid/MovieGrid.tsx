import { useEffect } from 'react';

import { useAppDispatch } from '@app/hooks';
import { GridLayout, MovieCard } from '@components';
import { setGridColumns } from '@features/Layout/layoutSlice';

import { MovieGridColumns, MovieGridProps } from './movieGrid.types';

export const MovieGrid = (props: MovieGridProps & MovieGridColumns) => {
    const { movies, layoutKey, columns } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (columns) {
            dispatch(
                setGridColumns({
                    key: layoutKey,
                    columns,
                }),
            );
        }
    }, [dispatch, layoutKey, columns]);

    return (
        <GridLayout
            items={movies}
            renderItem={(movie) => <MovieCard movie={movie} />}
            layoutKey={layoutKey}
        />
    );
};
