import type { ReactNode } from 'react';

/**
 * Props for GridLayout component.
 */
export interface GridLayoutProps {
    children: ReactNode;
    /**
     * Used to provide the no. of grid cells to be displayed on different breakpoints. Default is { xs: 6, sm: 4, md: 3, lg: 2 }
     */
    columns?: Partial<{ xs: number; sm: number; md: number; lg: number }>;
}
