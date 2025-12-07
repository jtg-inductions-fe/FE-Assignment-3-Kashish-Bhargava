import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(
    ({
        theme: {
            palette: {
                common: { white },
                secondary: { dark },
            },
        },
    }) => ({
        position: 'static',
        elevation: 0,
        borderBottom: `1px solid ${dark}`,
        backgroundColor: white,
    }),
);

export const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
        height: spacing(10),
        outline: 'none',
        '&:focus': {
            boxShadow: `0 0 0 3px ${main}`,
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
