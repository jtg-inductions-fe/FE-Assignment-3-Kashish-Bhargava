import { Box, Button, CircularProgress, Fab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
    },
}));

export const Title = styled(Typography)(() => ({
    fontWeight: 700,
    marginBottom: '1.5rem',
}));

export const MoviesGridWrapper = styled(Box)(() => ({
    marginTop: '1.5rem',
}));

export const CenteredLoader = styled(CircularProgress)(() => ({
    display: 'block',
    margin: 'auto',
}));

export const PaginationContainer = styled(Box)(() => ({
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}));

export const PaginationButton = styled(Button)(() => ({
    minWidth: '120px',
}));

export const FilterFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    boxShadow: theme.shadows[4],
}));
