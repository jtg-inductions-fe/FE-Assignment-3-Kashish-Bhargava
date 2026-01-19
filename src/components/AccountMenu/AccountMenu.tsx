import * as React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Divider, ListItemIcon, Tooltip } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';
import { logout } from '@features/Auth';
import { baseApi } from '@services/baseApi';
import { useLogoutMutation } from '@services/UserApi';

import {
    AccountIconButton,
    MenuAvatar,
    StyledMenu,
    StyledMenuItem,
    UserAvatar,
} from './AccountMenu.styles';

export const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [logoutApi] = useLogoutMutation();
    const user = useAppSelector((state) => state.auth.user);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await logoutApi().unwrap();
        } finally {
            dispatch(logout());
            dispatch(baseApi.util.resetApiState());
            void navigate(ROUTES.HOME, { replace: true });
        }
    };

    return (
        <>
            <Box display="flex" alignItems="center" textAlign="center">
                <Tooltip title="Account settings">
                    <AccountIconButton
                        onClick={handleClick}
                        size="large"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <UserAvatar>
                            {user?.name?.charAt(0).toUpperCase() ?? '?'}
                        </UserAvatar>
                    </AccountIconButton>
                </Tooltip>
            </Box>

            <StyledMenu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <StyledMenuItem>
                    <MenuAvatar />
                    Profile
                </StyledMenuItem>

                <Divider />

                <StyledMenuItem
                    onClick={() => {
                        void handleLogout();
                    }}
                >
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    Logout
                </StyledMenuItem>
            </StyledMenu>
        </>
    );
};
