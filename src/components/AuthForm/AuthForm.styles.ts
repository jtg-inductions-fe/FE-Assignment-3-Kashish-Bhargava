import { Box, IconButton, Link, styled, Typography } from '@mui/material';

import { Button } from '../Button/Button';

export const FormContainer = styled('form')(
    ({
        theme: {
            palette: { background },
            spacing,
            shape: { borderRadius },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(12),
        width: '100%',
        maxWidth: 400,
        marginInline: 'auto',
        padding: spacing(12),
        borderRadius: borderRadius,
        backgroundColor: background.default,
        position: 'relative',
        textAlign: 'center',
    }),
);

export const GoBackHomeButton = styled(IconButton)(() => ({
    position: 'absolute',
}));

export const FormTitle = styled(Typography)(
    ({
        theme: {
            palette: {
                text: { primary },
            },
            typography: { h3 },
        },
    }) => ({
        ...h3,
        color: primary,
    }),
);

export const FormHeadingContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const FormHeading = styled(Typography)(
    ({
        theme: {
            palette: {
                text: { primary },
            },
            typography: { h2 },
        },
    }) => ({
        ...h2,
        color: primary,
    }),
);

export const FormSubtitle = styled(Typography)(
    ({
        theme: {
            typography: { body2 },
            palette: {
                text: { primary },
            },
        },
    }) => ({
        ...body2,
        color: primary,
    }),
);

export const StyledButton = styled(Button)(
    ({
        theme: {
            spacing,
            typography: { button },
        },
    }) => ({
        ...button,
        fontWeight: 600,
        height: spacing(48),
    }),
);

export const SwitchText = styled(Typography)(
    ({
        theme: {
            palette: {
                text: { primary },
            },
            typography: { body1 },
        },
    }) => ({
        ...body1,
        color: primary,
    }),
);

export const StyledLink = styled(Link)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        textDecoration: 'none',
        color: main,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    }),
);
