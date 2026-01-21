//Styled components for MovieList Page
import { Box, CircularProgress, Fab, styled } from '@mui/material';

export const MovieListContainer = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        [up('md')]: {
            display: 'flex',
            gap: spacing(40),
        },
    }),
);

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
        gap: spacing(16),

        [up('md')]: {
            flex: '0 0 65%',
        },
    }),
);

export const CenteredLoader = styled(CircularProgress)(() => ({
    display: 'block',
    margin: 'auto',
}));

export const FilterFab = styled(Fab)(({ theme: { spacing } }) => ({
    position: 'fixed',
    bottom: spacing(16),
    right: spacing(16),
}));

export const BrowseByCinemaFab = styled(Fab)(({ theme: { spacing } }) => ({
    textTransform: 'none',
    position: 'fixed',
    bottom: spacing(16),
    left: spacing(16),
}));
