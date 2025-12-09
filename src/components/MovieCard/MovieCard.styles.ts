import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(
    ({
        theme: {
            palette: {
                secondary: { light },
                background: { paper },
            },
            shape: { borderRadius },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: borderRadius,
        boxShadow: `0px 4px 12px ${light}`,
        height: '100%',
        backgroundColor: paper,
    }),
);

export const StyledCardMedia = styled(CardMedia)(({ theme: { spacing } }) => ({
    aspectRatio: 2 / 3,
    objectFit: 'cover',
    minHeight: spacing(240),
}));

export const StyledCardContent = styled(CardContent)(() => ({
    flexGrow: 1,
}));

export const MovieName = styled(Typography)(
    ({
        theme: {
            palette: {
                secondary: { dark },
            },
            typography: { subtitle1 },
        },
    }) => ({
        ...subtitle1,
        overflowWrap: 'break-word',
        fontWeight: 600,
        color: dark,
    }),
);

export const GenreText = styled(Typography)(
    ({
        theme: {
            typography: { body1 },
            palette: {
                text: { secondary },
            },
        },
    }) => ({
        ...body1,
        overflowWrap: 'break-word',
        color: secondary,
    }),
);
