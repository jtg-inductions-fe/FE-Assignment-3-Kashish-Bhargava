import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
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

export const LogoBox = styled(Box)(({ theme: { spacing } }) => ({
    cursor: 'pointer',
    height: spacing(10),
}));

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

export const HomeButton = styled(Button)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        border: `1px solid ${main}`,
    }),
);
