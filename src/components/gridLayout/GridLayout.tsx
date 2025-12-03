import {
    GridCell,
    GridContainer,
    GridLayoutContainer,
} from './GridLayout.styles';

interface GridLayoutProps<T extends { id?: string | number }> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export const GridLayout = <T extends { id?: string | number }>({
    items,
    renderItem,
}: GridLayoutProps<T>) => (
    <GridLayoutContainer>
        <GridContainer container columnSpacing={3} rowGap={5}>
            {items.map((item, index) => (
                <GridCell
                    key={item.id ?? index}
                    size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                >
                    {renderItem(item)}
                </GridCell>
            ))}
        </GridContainer>
    </GridLayoutContainer>
);
