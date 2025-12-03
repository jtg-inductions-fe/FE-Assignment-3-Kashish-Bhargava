import {
    Box,
    Button,
    IconButton,
    Link,
    styled,
    Typography,
} from '@mui/material';

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
        gap: spacing(3),
        width: '100%',
        maxWidth: 400,
        marginInline: 'auto',
        padding: spacing(3),
        borderRadius: borderRadius,
        backgroundColor: background.default,
        position: 'relative',
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
        },
    }) => ({
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '1.8rem',
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
        textAlign: 'center',
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
        textAlign: 'center',
        color: primary,
    }),
);

export const StyledButton = styled(Button)(
    ({
        theme: {
            shape: { borderRadius },
            spacing,
            typography: { button },
            palette: {
                primary: { main },
            },
        },
    }) => ({
        ...button,
        backgroundColor: main,
        borderRadius: borderRadius,
        fontWeight: 600,
        textTransform: 'none',
        height: spacing(13),
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
        textAlign: 'center',
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
