/**
 * Styled AccountMenu Component
 */
import { Avatar, IconButton, Menu, MenuItem, styled } from '@mui/material';
import { paperClasses } from '@mui/material/Paper';

export const AccountIconButton = styled(IconButton)(() => ({
    padding: 0,
}));

export const UserAvatar = styled(Avatar)(
    ({
        theme: {
            palette: {
                primary: { main, light },
            },
            typography: { pxToRem },
        },
    }) => ({
        width: pxToRem(42),
        height: pxToRem(42),
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
            typography: { pxToRem },
        },
    }) => ({
        [`& .${paperClasses.root}`]: {
            overflow: 'visible',
            marginTop: spacing(2),
            backgroundColor: white,

            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: pxToRem(14),
                width: pxToRem(10),
                height: pxToRem(10),
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
            typography: { pxToRem },
        },
    }) => ({
        width: pxToRem(32),
        height: pxToRem(32),
        color: main,
        backgroundColor: light,
    }),
);
