import { Box, CircularProgress, Fab, styled } from '@mui/material';

import { Button } from '@components';

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

export const PaginationContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing(20),
}));

export const PaginationButton = styled(Button)(({ theme: { spacing } }) => ({
    minWidth: spacing(80),
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
