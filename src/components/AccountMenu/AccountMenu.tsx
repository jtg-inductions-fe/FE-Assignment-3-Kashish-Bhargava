import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Divider, ListItemIcon, Tooltip } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';
import { logout } from '@features/Auth';
import { baseApi } from '@services/BaseApi/baseApi';
import { useLogoutMutation } from '@services/UserApi';

import {
    AccountIconButton,
    MenuAvatar,
    StyledMenu,
    StyledMenuItem,
    UserAvatar,
} from './AccountMenu.styles';
import {
    AccountMenuAnchor,
    AccountMenuClickHandler,
    LogoutHandler,
} from './AccountMenu.types';

/**
 * Account Menu shown in the navbar for authenticated users.
 * Displays user avatar with profile and logout actions.
 */
export const AccountMenu = () => {
    //Anchor element for opening and closing the menu.
    const [anchorEl, setAnchorEl] = useState<AccountMenuAnchor>(null);
    const open = Boolean(anchorEl);

    //Redux and navigation hooks
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //Logout API mutation
    const [logoutApi] = useLogoutMutation();

    //Logged-in user data
    const user = useAppSelector((state) => state.auth.user);

    //Open menu on Avatar click
    const handleClick: AccountMenuClickHandler = (event) => {
        setAnchorEl(event.currentTarget);
    };

    //Close Menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Logout user and reset app state
    const handleLogout: LogoutHandler = async () => {
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
            {/*User Avatar Button*/}
            <Box display="flex" alignItems="center" textAlign="center">
                <Tooltip title="Account settings">
                    <AccountIconButton
                        onClick={handleClick}
                        size="large"
                        aria-label="Account Menu"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <UserAvatar>
                            {user?.name?.charAt(0).toUpperCase() || '?'}
                        </UserAvatar>
                    </AccountIconButton>
                </Tooltip>
            </Box>
            {/*Account dropdown menu*/}
            <StyledMenu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/*View Profile option*/}
                <StyledMenuItem onClick={() => void navigate(ROUTES.PROFILE)}>
                    <MenuAvatar />
                    Profile
                </StyledMenuItem>

                <Divider />
                {/*Logout Option */}
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
