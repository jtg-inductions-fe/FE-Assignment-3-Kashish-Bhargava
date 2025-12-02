import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HomeLayout = styled(Box)(
    ({
        theme: {
            spacing,
            mixins: { flex },
        },
    }) => ({
        ...flex('space-between', 'stretch', spacing(5), 'column'),
        marginBottom: spacing(2),
    }),
);

export const HomePageBanner = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        borderRadius: spacing(4),
        overflow: 'hidden',
        width: '100%',
        height: 'auto',
        [up('md')]: {
            height: spacing(100),
        },
    }),
);

export const HomePageHeading = styled(Box)(
    ({
        theme: {
            spacing,
            mixins: { flex },
        },
    }) => ({
        ...flex('space-between', 'center', spacing(0), 'row'),
    }),
);

export const MovieHeading = styled(Typography)(
    ({
        theme: {
            typography: { h2 },
            palette: {
                text: { primary },
            },
        },
    }) => ({
        ...h2,
        color: primary,
    }),
);

export const SeeAll = styled(Stack)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        color: main,
        '&:hover': {
            textDecoration: 'underline',
        },
    }),
);

export const SeeAllText = styled(Typography)(
    ({
        theme: {
            typography: { body1 },
        },
    }) => ({
        ...body1,
    }),
);

export const LoadingBox = styled(Box)(
    ({
        theme: {
            mixins: { flex },
            spacing,
        },
    }) => ({
        ...flex('center', 'stretch', spacing(0), 'row'),
        marginTop: spacing(4),
    }),
);

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
        marginTop: spacing(4),
        color: main,
    }),
);

export const CinemaBlock = styled(Box)(
    ({
        theme: {
            mixins: { flex },
            spacing,
            palette: {
                primary: { light },
            },
            breakpoints: { up },
        },
    }) => ({
        ...flex('flex-start', 'center', spacing(1), 'row'),
        backgroundColor: light,
        borderRadius: spacing(4),
        cursor: 'pointer',
        [up('md')]: {
            padding: spacing(3),
        },
    }),
);

export const CinemaBlockImage = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        width: spacing(20),
        height: spacing(20),
        [up('md')]: {
            width: spacing(25),
            height: spacing(25),
        },
    }),
);

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
}));

export const CinemaBlockContent = styled(Box)(
    ({
        theme: {
            mixins: { flex },
            spacing,
        },
    }) => ({
        ...flex('flex-start', 'stretch', spacing(0), 'column'),
    }),
);

export const BrowseByCinema = styled(Box)(
    ({
        theme: {
            mixins: { flex },
            spacing,
            palette: {
                common: { black },
            },
        },
    }) => ({
        ...flex('flex-start', 'center', spacing(0), 'row'),
        color: black,
    }),
);

export const BrowseByCinemaHeading = styled(Typography)(
    ({
        theme: {
            typography: { subtitle1, body2 },
            breakpoints: { up },
        },
    }) => ({
        ...subtitle1,
        [up('md')]: {
            ...body2,
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
