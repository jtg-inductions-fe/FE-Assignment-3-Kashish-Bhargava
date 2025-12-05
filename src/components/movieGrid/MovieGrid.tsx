import { useEffect } from 'react';

import { useAppDispatch } from '@app/hooks';
import { GridLayout } from '@components';
import { MovieCard } from '@components';
import { setGridColumns } from '@features/layout/layoutSlice';

import { MovieGridColumns, MovieGridProps } from './movieGrid.types';

export const MovieGrid = ({
    movies,
    layoutKey,
    columns,
}: MovieGridProps & MovieGridColumns) => {
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
