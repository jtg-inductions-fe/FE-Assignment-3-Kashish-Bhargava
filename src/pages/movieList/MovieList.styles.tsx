import { Box, Button, CircularProgress, Fab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        padding: spacing(2),
        [up('md')]: {
            padding: spacing(4),
            display: 'flex',
            flexDirection: 'column',
            gap: spacing(5),
        },
    }),
);

export const MovieListContent = styled(Box)(
    ({
        theme: {
            breakpoints: { up },
            spacing,
        },
    }) => ({
        [up('md')]: {
            display: 'flex',
            gap: spacing(10),
        },
    }),
);

export const Title = styled(Typography)(
    ({
        theme: {
            typography: { h1 },
        },
    }) => ({
        ...h1,
    }),
);
export const MoviesListSideSection = styled(Box)(() => ({
    display: 'flex',
    flex: '0 0 25%',
}));
export const MovieListMainContent = styled(Box)(
    ({
        theme: {
            breakpoints: { up },
            spacing,
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 100%',
        gap: spacing(8),
        [up('md')]: {
            flex: '0 0 65%',
        },
    }),
);

export const CenteredLoader = styled(CircularProgress)(() => ({
    display: 'block',
    margin: 'auto',
}));

export const PaginationContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}));

export const PaginationButton = styled(Button)(({ theme: { spacing } }) => ({
    minWidth: spacing(30),
}));

export const FilterFab = styled(Fab)(({ theme: { spacing } }) => ({
    position: 'fixed',
    bottom: spacing(2),
    right: spacing(2),
}));
