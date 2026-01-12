import { Box, styled, TextField } from '@mui/material';

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

export const LocationTextField = styled(TextField)(
    ({
        theme: {
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        marginBottom: spacing(4),
        maxWidth: pxToRem(400),
    }),
);

export const ScrollBox = styled(Box)(({ theme: { spacing } }) => ({
    height: spacing(2),
}));
