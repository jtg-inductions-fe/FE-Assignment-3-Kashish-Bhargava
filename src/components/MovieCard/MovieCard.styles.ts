import {
    Card,
    CardContent,
    CardMedia,
    styled,
    Typography,
} from '@mui/material';
import shadows from '@mui/material/styles/shadows';

export const StyledCard = styled(Card)(
    ({
        theme: {
            palette: {
                background: { paper },
            },
            shape: { borderRadius },
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
        fontWeight: 600,
        color: dark,
    }),
);
