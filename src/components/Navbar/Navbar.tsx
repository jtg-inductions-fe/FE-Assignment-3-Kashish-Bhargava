import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import { useAppSelector } from '@app/hooks';
import BookMyShowLogo from '@assets/images/book-my-show-logo.png';
import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    LogoBox,
    ProfileButton,
    StyledAppBar,
    StyledImage,
    StyledToolbar,
} from './Navbar.styles';

export const Navbar = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    const navigate = useNavigate();

    return (
        <StyledAppBar>
            <StyledToolbar>
                <LogoBox
                    onClick={() => void navigate(ROUTES.HOME)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            void navigate(ROUTES.HOME);
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Navigate to Home"
                >
                    <StyledImage src={BookMyShowLogo} alt="BookMyShow Logo" />
                </LogoBox>

                <Button
                    variant="outlined"
                    onClick={() => void navigate(ROUTES.HOME)}
                    aria-label="Home button"
                >
                    <HomeIcon />
                </Button>

                {isAuthenticated ? (
                    <ProfileButton
                        onClick={() => void navigate(ROUTES.PROFILE)}
                        aria-label="Navigate to Profile"
                    >
                        <AccountCircleIcon fontSize="large" />
                    </ProfileButton>
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
