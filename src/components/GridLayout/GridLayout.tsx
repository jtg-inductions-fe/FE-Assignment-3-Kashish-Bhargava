import { Grid2 } from '@mui/material';

import { GRID_CONSTANTS } from '@constant';

import { GridLayoutProps } from './GridLayout.types';

/**
 * Grid layout component for displaying children in a responsive grid.
 * @param props - Props for the grid layout component.
 * @returns The rendered grid layout component.
 */
export const GridLayout = (props: GridLayoutProps) => {
    const { children, columns = GRID_CONSTANTS.DEFAULT_GRID } = props;

    return (
        <Grid2 container columnSpacing={16} rowGap={20}>
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <Grid2
                        key={index}
                        size={columns}
                        display="flex"
                        justifyContent="center"
                    >
                        {child}
                    </Grid2>
                ))
            ) : (
                <Grid2 size={columns}>{children}</Grid2>
            )}
        </Grid2>
    );
};
