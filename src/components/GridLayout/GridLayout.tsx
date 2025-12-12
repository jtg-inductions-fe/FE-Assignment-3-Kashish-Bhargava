import { Grid2 } from '@mui/material';

import { GridLayoutProps } from './GridLayout.types';

export const GridLayout = <T extends { id: number }>(
    props: GridLayoutProps<T>,
) => {
    const {
        items,
        renderItem,
        columns = { xs: 6, sm: 4, md: 3, lg: 2 },
    } = props;
    return (
        <Grid2 container columnSpacing={16} rowGap={20}>
            {items.map((item) => (
                <Grid2
                    key={item.id}
                    size={columns}
                    display="flex"
                    justifyContent="center"
                >
                    {renderItem(item)}
                </Grid2>
            ))}
        </Grid2>
    );
};
