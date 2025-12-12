import { AppBar, Box, IconButton, styled, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)(
    ({
        theme: {
            palette: {
                common: { white },
            },
            spacing,
            border: { layoutBorder },
        },
    }) => ({
        boxShadow: 'none',
        borderBottom: layoutBorder,
        backgroundColor: white,
        paddingInline: spacing(8),
    }),
);

export const StyledToolbar = styled(Toolbar)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: pxToRem(1440),
        width: '100%',
        margin: '0 auto',
    }),
);

export const LogoBox = styled(Box)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
            typography: { pxToRem },
        },
    }) => ({
        cursor: 'pointer',
        height: pxToRem(40),
        outline: 'none',
        '&:focus-visible': {
            outline: `2px solid ${main}`,
            outlineOffset: '2px',
        },
    }),
);

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}));

export const ProfileButton = styled(IconButton)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        color: main,
    }),
);
