import { Link } from 'react-router-dom';

import { IconButton, styled } from '@mui/material';

import { Button } from '../Button/Button';

export const FormContainer = styled('form')(
    ({
        theme: {
            palette: { background },
            spacing,
            shape: { borderRadiusLg },
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(12),
        width: '100%',
        maxWidth: pxToRem(400),
        marginInline: 'auto',
        padding: spacing(12),
        borderRadius: borderRadiusLg,
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
            typography: { button, pxToRem },
        },
    }) => ({
        ...button,
        fontWeight: 600,
        height: pxToRem(48),
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
