import { Box, styled, Typography } from '@mui/material';

import { Button } from '@components';

export const HomeLayout = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: spacing(32),
    marginBottom: spacing(32),
}));

export const HomePageBanner = styled(Box)(
    ({
        theme: {
            breakpoints: { up },
            shape: { borderRadius },
            typography: { pxToRem },
        },
    }) => ({
        borderRadius: borderRadius,
        overflow: 'hidden',
        width: '100%',
        height: 'auto',
        [up('md')]: {
            height: pxToRem(400),
        },
    }),
);

export const HomePageHeading = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const SeeAllButton = styled(Button)(() => ({
    padding: 0,
}));

export const HomePageMainSection = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(8),
}));

export const LoadingBox = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(16),
}));

export const ErrorMessageBox = styled(Box)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
            spacing,
        },
    }) => ({
        textAlign: 'center',
        marginTop: spacing(16),
        color: main,
    }),
);

export const CinemaBlock = styled(Box)(
    ({
        theme: {
            spacing,
            palette: {
                primary: { light },
            },
            breakpoints: { up },
            shape: { borderRadius },
        },
    }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: spacing(4),
        backgroundColor: light,
        borderRadius: borderRadius,
        cursor: 'pointer',
        [up('md')]: {
            padding: spacing(12),
        },
    }),
);

export const CinemaBlockImage = styled(Box)(
    ({
        theme: {
            breakpoints: { up },
            typography: { pxToRem },
        },
    }) => ({
        width: pxToRem(80),
        height: pxToRem(80),
        [up('md')]: {
            width: pxToRem(100),
            height: pxToRem(100),
        },
    }),
);

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
}));

export const CinemaBlockContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const BrowseByCinema = styled(Button)(
    ({
        theme: {
            palette: {
                common: { black },
            },
            breakpoints: { up },
            typography: { pxToRem },
        },
    }) => ({
        color: black,
        padding: 0,
        maxWidth: pxToRem(168),
        [up('md')]: {
            maxWidth: pxToRem(188),
        },
    }),
);

export const BrowseByCinemaHeading = styled(Typography)(
    ({
        theme: {
            typography: { subtitle1, body1 },
            breakpoints: { up },
        },
    }) => ({
        ...subtitle1,
        [up('md')]: {
            ...body1,
        },
    }),
);

export const BrowseByCinemaDescription = styled(Typography)(
    ({
        theme: {
            typography: { subtitle2, caption },
            palette: {
                text: { primary },
            },
            breakpoints: { up },
        },
    }) => ({
        ...caption,
        color: primary,
        [up('md')]: {
            ...subtitle2,
        },
    }),
);
