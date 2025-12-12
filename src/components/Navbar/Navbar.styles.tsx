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

export const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
}));

export const LogoBox = styled(Box)(
    ({
        theme: {
            spacing,
            palette: {
                primary: { main },
            },
        },
    }) => ({
        cursor: 'pointer',
        height: spacing(40),
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
