import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(
    ({
        theme: {
            spacing,
            palette: {
                secondary: { light },
                background: { paper },
            },
            mixins: { flex },
        },
    }) => ({
        ...flex('flex-start', 'stretch', spacing(0), 'column'),
        width: '100%',
        borderRadius: spacing(3),
        boxShadow: `0px 4px 12px ${light}`,
        height: '100%',
        backgroundColor: paper,
    }),
);

export const StyledCardMedia = styled(CardMedia)(({ theme: { spacing } }) => ({
    objectFit: 'cover',
    height: spacing(60),
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
