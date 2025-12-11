import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer, AuthLayoutWrapper } from './AuthLayout.styles';
import { AuthLayoutProps } from './AuthLayout.types';

export const AuthLayout = (props: AuthLayoutProps) => {
    const { children } = props;
    return (
        <AuthLayoutWrapper>
            <AuthLayoutContainer>{children || <Outlet />}</AuthLayoutContainer>
        </AuthLayoutWrapper>
    );
};
