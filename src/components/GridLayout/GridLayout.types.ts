import type { ReactNode } from 'react';

/**
 * Props for GridLayout component.
 *
 * @template T - Type of each grid item
 */
export interface GridLayoutProps<T extends { id: number }> {
    /**Array of items to render in the grid. */
    items: T[];
    /**Function to render each grid item. */
    renderItem: (item: T) => ReactNode;
    /**
     * Used to provide the no. of grid cells to be displayed on different breakpoints.
     */
    columns?: { xs: number; sm: number; md: number; lg: number };
}
