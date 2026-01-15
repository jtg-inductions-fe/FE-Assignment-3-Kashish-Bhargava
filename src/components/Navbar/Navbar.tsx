import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Link } from '@mui/material';

import { useAppSelector } from '@app/hooks';
import BookMyShowLogo from '@assets/images/book-my-show-logo.png';
import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    LogoBox,
    StyledAppBar,
    StyledImage,
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
                <Link href={ROUTES.HOME} aria-label="Navigate to Home">
                    <LogoBox>
                        <StyledImage
                            src={BookMyShowLogo}
                            alt="BookMyShow Logo"
                        />
                    </LogoBox>
                </Link>

                <Button
                    variant="outlined"
                    onClick={() => void navigate(ROUTES.HOME)}
                    aria-label="Home button"
                >
                    <HomeIcon />
                </Button>

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
                    >
                        Login
                    </Button>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};
