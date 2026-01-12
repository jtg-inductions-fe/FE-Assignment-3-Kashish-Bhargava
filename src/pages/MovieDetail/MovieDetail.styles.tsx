import { Box, Chip, styled, Typography } from '@mui/material';

export const MovieDetailContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(24),
}));

export const LoadingBox = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(40),
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
        },
    }) => ({
        backgroundColor: paper,
    }),
);

export const MovieDetailTopContentSection = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        maxWidth: spacing(1440),
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        gap: spacing(20),
        padding: spacing(32),
        [up('sm')]: {
            alignItems: 'center',
            flexDirection: 'row',
        },
    }),
);

export const MovieDetailBottomContentSection = styled(Box)(
    ({ theme: { spacing } }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(16),
        maxWidth: spacing(1440),
        margin: 'auto',
        paddingInline: spacing(20),
    }),
);

export const Poster = styled('img')(({ theme: { spacing, shadows } }) => ({
    width: '100%',
    maxWidth: spacing(260),
    borderRadius: spacing(8),
    boxShadow: shadows[5],
}));

export const ContentSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(16),
}));

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
        gap: spacing(8),
        color: light,
    }),
);

export const ActionButtons = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    gap: spacing(8),
    flexWrap: 'wrap',
}));

export const DescriptionSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(8),
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
}));

export const MovieLanguageSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(16),
}));

export const ChipsContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing(12),
}));

export const LanguageChip = styled(Chip)(
    ({
        theme: {
            typography: { h4 },
            palette: {
                primary: { light, main },
            },
            spacing,
            borderRadius: { button: borderRadiusChip },
        },
    }) => ({
        ...h4,
        backgroundColor: light,
        color: main,
        padding: spacing(2, 2),
        borderRadius: borderRadiusChip,
    }),
);
