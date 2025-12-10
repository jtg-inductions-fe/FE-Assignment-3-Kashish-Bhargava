import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer, AuthLayoutWrapper } from './AuthLayout.styles';

export const AuthLayout = () => (
    <AuthLayoutWrapper>
        <AuthLayoutContainer>
            <Outlet />
        </AuthLayoutContainer>
    </AuthLayoutWrapper>
);
