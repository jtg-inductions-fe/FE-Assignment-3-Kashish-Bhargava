import { Box, styled } from '@mui/material';

export const CinemaListLayout = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(20),
}));

export const CinemaListHeader = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: spacing(8),
        [up('md')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    }),
);
