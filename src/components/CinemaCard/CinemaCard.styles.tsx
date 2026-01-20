import { Card, CardContent, CardMedia, styled } from '@mui/material';

export const StyledCinemaCard = styled(Card)(
    ({
        theme: {
            shadows,
            shape: { borderRadiusLg },
        },
    }) => ({
        width: '100%',
        borderRadius: borderRadiusLg,
        boxShadow: shadows[2],
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',

        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: shadows[4],
        },
    }),
);

export const StyledCinemaContent = styled(CardContent)(
    ({ theme: { spacing } }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: spacing(12, 8),
    }),
);

export const StyledCinemaCardMedia = styled(CardMedia)(
    ({ theme: { spacing } }) => ({
        aspectRatio: 5 / 3,
        objectFit: 'cover',
        minHeight: spacing(32),
    }),
);
