import { IconButton, Link, styled } from '@mui/material';

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
        maxWidth: spacing(400),
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
