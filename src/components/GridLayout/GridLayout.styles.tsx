import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

export const GridLayoutContainer = styled(Container)(
    ({ theme: { spacing } }) => ({
        paddingInline: spacing(0),
    }),
);

export const GridContainer = styled(Grid)(({ theme: { spacing } }) => ({
    paddingInline: spacing(0),
}));

export const GridCell = styled(Grid)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingInline: spacing(0),
}));
