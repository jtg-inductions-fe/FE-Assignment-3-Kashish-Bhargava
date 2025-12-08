import { Box, Chip, styled, Typography } from '@mui/material';

export const MovieDetailContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(6),
    padding: spacing(4),
}));

export const LoadingBox = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(10),
}));

export const FailedToLoadText = styled(Typography)(
    ({
        theme: {
            typography: { h1 },
            palette: {
                primary: { main },
            },
            spacing,
        },
    }) => ({
        ...h1,
        color: main,
        textAlign: 'center',
        marginTop: spacing(40),
    }),
);

export const MovieDetailTopSection = styled(Box)(
    ({
        theme: {
            palette: {
                background: { paper },
            },
            spacing,
            breakpoints: { up },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(5),
        backgroundColor: paper,
        padding: spacing(5),
        [up('sm')]: {
            alignItems: 'center',
            flexDirection: 'row',
        },
    }),
);

export const MovieDetailBottomSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(8),
}));

export const Poster = styled('img')(({ theme: { spacing, shadows } }) => ({
    width: '100%',
    maxWidth: spacing(88),
    borderRadius: spacing(2),
    boxShadow: shadows[5],
}));

export const ContentSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(4),
}));

export const Title = styled(Typography)(
    ({
        theme: {
            palette: {
                common: { white },
            },
            typography: { h1 },
        },
    }) => ({
        ...h1,
        color: white,
    }),
);

export const MovieInfo = styled(Box)(
    ({
        theme: {
            spacing,
            palette: {
                secondary: { light },
            },
        },
    }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing(2),
        color: light,
    }),
);

export const MovieInfoItem = styled(Typography)(
    ({
        theme: {
            typography: { h3 },
        },
    }) => ({
        ...h3,
        display: 'flex',
    }),
);

export const ActionButtons = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    gap: spacing(2),
    flexWrap: 'wrap',
}));

export const DescriptionSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(2),
}));

export const DescriptionTitle = styled(Typography)(
    ({
        theme: {
            typography: { h1 },
            palette: {
                common: { black },
            },
        },
    }) => ({
        ...h1,
        color: black,
    }),
);

export const DescriptionContent = styled(Typography)(
    ({
        theme: {
            typography: { h2 },
        },
    }) => ({
        ...h2,
    }),
);

export const MovieLanguageHeading = styled(Typography)(
    ({
        theme: {
            typography: { h1 },
            palette: {
                common: { black },
            },
        },
    }) => ({
        ...h1,
        color: black,
    }),
);

export const MovieLanguageSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(4),
}));

export const ChipsContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing(4),
}));

export const LanguageChip = styled(Chip)(
    ({
        theme: {
            typography: { h2 },
            palette: {
                primary: { light, main },
            },
            spacing,
        },
    }) => ({
        ...h2,
        backgroundColor: light,
        color: main,
        padding: spacing(2, 2),
    }),
);
