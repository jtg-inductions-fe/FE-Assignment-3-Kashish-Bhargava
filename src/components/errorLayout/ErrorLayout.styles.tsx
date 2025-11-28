import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box)(
    ({
        theme: {
            spacing,
            mixins: { flex },
            breakpoints: { up },
        },
    }) => ({
        minHeight: spacing(126.75),
        ...flex('flex-start', 'center', spacing(7.5), 'column'),
        textAlign: 'center',
        boxSizing: 'border-box',
        padding: spacing(14, 0),
        [up('lg')]: {
            minHeight: spacing(229.5),
            padding: spacing(24.75),
            gap: spacing(12),
        },
    }),
);

export const ContentWrapper = styled(Box)(
    ({
        theme: {
            spacing,
            mixins: { flex },
            breakpoints: { up },
        },
    }) => ({
        minHeight: 'auto',
        ...flex('flex-start', 'center', spacing(5.75), 'column'),
        [up('lg')]: {
            minHeight: spacing(39.25),
            gap: spacing(5),
        },
    }),
);

export const TextWrapper = styled(Box)(
    ({
        theme: {
            spacing,
            mixins: { flex },
            breakpoints: { up },
        },
    }) => ({
        minHeight: 'auto',
        ...flex('flex-start', 'center', spacing(2.5), 'column'),
        textAlign: 'center',
        [up('lg')]: {
            minHeight: spacing(25),
            gap: spacing(3.25),
        },
    }),
);

export const ImageWrapper = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        width: '100%',
        maxWidth: spacing(67.5),
        height: 'auto',
        [up('lg')]: {
            maxWidth: spacing(175),
        },
    }),
);

export const StyledImage = styled('img')({
    width: '100%',
    height: '100%',
});

export const Message = styled(Typography)(
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

export const Description = styled(Typography)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
            typography: { h2 },
            palette: {
                text: { primary },
            },
        },
    }) => ({
        maxWidth: spacing(100),
        ...h2,
        color: primary,
        [up('lg')]: {
            maxWidth: spacing(225),
        },
    }),
);
