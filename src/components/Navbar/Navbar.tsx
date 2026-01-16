import { Link, useLocation, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

import { useAppSelector } from '@app/hooks';
import BookMyShowLogo from '@assets/images/book-my-show-logo.png';
import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    LogoBox,
    StyledAppBar,
    StyledLogoImage,
    StyledToolbar,
} from './Navbar.styles';

export const Navbar = () => {
    // Check if the user is authenticated
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    /**
     * Hook for navigating programmatically.
     */
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                {/* Logo */}
                <Link to={ROUTES.HOME} aria-label="Navigate to Home">
                    <LogoBox>
                        <StyledLogoImage
                            src={BookMyShowLogo}
                            alt="BookMyShow Logo"
                        />
                    </LogoBox>
                </Link>
                {/* User Profile */}
                {isAuthenticated ? (
                    <IconButton
                        onClick={() => void navigate(ROUTES.PROFILE)}
                        aria-label="Navigate to Profile"
                        color="primary"
                    >
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() =>
                            void navigate(ROUTES.LOGIN, {
                                state: { from: location.pathname },
                            })
                        }
                        aria-label="Navigate to Login"
                    >
                        Login
                    </Button>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};
