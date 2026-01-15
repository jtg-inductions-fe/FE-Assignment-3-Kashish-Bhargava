import { AppBar, Box, styled, Toolbar } from '@mui/material';

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
            appVars: { navbarWidth },
        },
    }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: navbarWidth,
        width: '100%',
        margin: '0 auto',
    }),
);

export const LogoBox = styled(Box)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        height: pxToRem(56),
    }),
);

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}));
