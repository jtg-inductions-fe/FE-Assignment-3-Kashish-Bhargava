export interface GridLayoutProps<T extends { id?: string | number }> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}
