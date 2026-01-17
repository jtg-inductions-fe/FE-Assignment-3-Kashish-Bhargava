/**
 * Styled MovieCard component.
 */
import { Card, CardContent, CardMedia, styled } from '@mui/material';

export const StyledCard = styled(Card)(
    ({
        theme: {
            palette: {
                background: { paper },
            },
            shape: { borderRadius },
            shadows,
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: borderRadius,
        boxShadow: shadows[8],
        height: '100%',
        backgroundColor: paper,
    }),
);

export const StyledCardMedia = styled(CardMedia)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        aspectRatio: 2 / 3,
        objectFit: 'cover',
        minHeight: pxToRem(32),
    }),
);

export const StyledCardContent = styled(CardContent)(() => ({
    flexGrow: 1,
}));
