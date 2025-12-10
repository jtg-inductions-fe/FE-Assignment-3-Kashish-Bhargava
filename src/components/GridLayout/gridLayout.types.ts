/**
 * Props for GridLayout component.
 *
 * @template T - Type of each grid item
 */
export interface GridLayoutProps<T extends { id: string | number }> {
    /**Array of items to render in the grid. */
    items: T[];
    /**Function to render each grid item. */
    renderItem: (item: T) => React.ReactNode;
}

/**
 * Used to provide different grid layout structure based on the specific key given by different components
 */
export interface LayoutKey {
    layoutKey?: string;
}
