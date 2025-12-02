import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface GridLayoutProps<T extends { id?: string | number }> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export const GridLayout = <T extends { id?: string | number }>({
    items,
    renderItem,
}: GridLayoutProps<T>) => (
    <Container sx={{ px: 0 }}>
        <Grid container columnSpacing={3} rowGap={5}>
            {items.map((item, index) => (
                <Grid
                    key={item.id ?? index}
                    size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    {renderItem(item)}
                </Grid>
            ))}
        </Grid>
    </Container>
);
