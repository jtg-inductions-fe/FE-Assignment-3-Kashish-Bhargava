import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Link to={ROUTES.HOME} aria-label="Navigate to Home">
                    <LogoBox>
                        <StyledLogoImage
                            src={BookMyShowLogo}
                            alt="BookMyShow Logo"
                        />
                    </LogoBox>
                </Link>

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
                        onClick={() => void navigate(ROUTES.LOGIN)}
                        aria-label="Navigate to Login"
                    >
                        Login
                    </Button>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};
