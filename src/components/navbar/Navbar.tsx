import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import { useAppSelector } from '@app/hooks';
import bookMyShowLogo from '@assets/images/book-my-show-logo.png';
import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    HomeButton,
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
                <LogoBox onClick={() => void navigate(ROUTES.HOME)}>
                    <StyledImage src={bookMyShowLogo} alt="BookMyShow Logo" />
                </LogoBox>

                <HomeButton
                    onClick={() => void navigate(ROUTES.HOME)}
                    aria-label="Home button"
                >
                    <HomeIcon />
                </HomeButton>

                {isAuthenticated ? (
                    <ProfileButton
                        onClick={() => void navigate(ROUTES.PROFILE)}
                    >
                        <AccountCircleIcon fontSize="large" />
                    </ProfileButton>
                ) : (
                    <Button
                        text="Login"
                        onClick={() => void navigate(ROUTES.LOGIN)}
                    >
                        Login
                    </Button>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};
