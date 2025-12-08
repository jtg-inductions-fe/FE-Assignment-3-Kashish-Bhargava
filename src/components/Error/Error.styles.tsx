import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: spacing(32),
    textAlign: 'center',
    padding: spacing(24, 16),
}));

export const TextWrapper = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: spacing(8),
        textAlign: 'center',
        [up('lg')]: {
            gap: spacing(12),
        },
    }),
);

export const StyledImage = styled('img')({
    width: '100%',
    height: 'auto',
});
