//Styled component for MovieDetail
import { Box, Chip, styled } from '@mui/material';

export const MovieDetailTopContentSection = styled(Box)<{
    backdrop?: string;
}>(
    ({
        backdrop,
        theme: {
            breakpoints: { up },
        },
    }) => ({
        backgroundImage: `
        linear-gradient(
            to right,
            rgba(0,0,0,0.95) 0%,
            rgba(0,0,0,0.75) 40%,
            rgba(0,0,0,0.4) 80%,
            rgba(0,0,0,0.95) 100%
        ),
        radial-gradient(
            circle at center,
            rgba(0,0,0,0) 40%,
            rgba(0,0,0,0.85) 100%
        ),
        ${backdrop ? `url(${backdrop})` : 'none'}
    `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [up('sm')]: {
            alignItems: 'center',
            flexDirection: 'row',
        },
    }),
);

export const FirstContentSection = styled(Box)(
    ({
        theme: {
            breakpoints: { up },
            spacing,
        },
    }) => ({
        flexDirection: 'column',
        gap: spacing(4),

        [up('sm')]: {
            flexDirection: 'row',
            gap: spacing(10),
        },
    }),
);

export const Poster = styled('img')(({ theme: { spacing, shadows } }) => ({
    maxWidth: spacing(260),
    borderRadius: spacing(8),
    boxShadow: shadows[5],
}));

export const DescriptionSection = styled(Box)(() => ({
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
}));

export const LanguageChip = styled(Chip)(
    ({
        theme: {
            typography: { h4 },
            palette: {
                primary: { light, main },
            },
            spacing,
            shape: { borderRadius },
        },
    }) => ({
        ...h4,
        backgroundColor: light,
        color: main,
        padding: spacing(2, 2),
        borderRadius: borderRadius,
    }),
);
