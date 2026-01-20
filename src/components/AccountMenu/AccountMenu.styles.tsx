/**
 * Styled AccountMenu Component
 */
import { Avatar, IconButton, Menu, MenuItem, styled } from '@mui/material';

export const AccountIconButton = styled(IconButton)(() => ({
    padding: 0,
}));

export const UserAvatar = styled(Avatar)(
    ({
        theme: {
            palette: {
                primary: { main, light },
            },
        },
    }) => ({
        width: 42,
        height: 42,
        color: main,
        backgroundColor: light,
    }),
);

export const StyledMenu = styled(Menu)(
    ({
        theme: {
            palette: {
                common: { white },
            },
            spacing,
        },
    }) => ({
        '& .MuiPaper-root': {
            overflow: 'visible',
            marginTop: spacing(2),
            backgroundColor: white,

            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                backgroundColor: white,
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
    }),
);

export const StyledMenuItem = styled(MenuItem)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        color: main,
        display: 'flex',
        justifyContent: 'space-between',
    }),
);

export const MenuAvatar = styled(Avatar)(
    ({
        theme: {
            palette: {
                primary: { main, light },
            },
        },
    }) => ({
        width: 32,
        height: 32,
        color: main,
        backgroundColor: light,
    }),
);
