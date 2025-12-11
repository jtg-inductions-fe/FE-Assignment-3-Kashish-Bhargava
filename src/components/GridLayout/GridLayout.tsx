import Grid from '@mui/material/Grid2';

import { useAppSelector } from '@app/hooks';

import { GridCell } from './GridLayout.styles';
import { GridLayoutProps, LayoutKey } from './gridLayout.types';

export const GridLayout = <T extends { id: string | number }>(
    props: GridLayoutProps<T> & LayoutKey,
) => {
    const { items, renderItem, layoutKey = 'Default' } = props;

    const gridColumns = useAppSelector(
        (state) =>
            state.layout.gridColumns[layoutKey] ?? {
                xs: 6,
                sm: 4,
                md: 3,
                lg: 2,
            },
    );

    return (
        <Grid container columnSpacing={16} rowGap={20}>
            {items.map((item, index) => (
                <GridCell key={item.id ?? index} size={gridColumns}>
                    {renderItem(item)}
                </GridCell>
            ))}
        </Grid>
    );
};
