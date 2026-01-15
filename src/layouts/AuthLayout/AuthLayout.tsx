import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer, AuthLayoutWrapper } from './AuthLayout.styles';
import { AuthLayoutProps } from './AuthLayout.types';

/**
 * Auth layout component for displaying authentication-related views.
 * @param props - Props for the auth layout component.
 * @returns The rendered auth layout component.
 */
export const AuthLayout = (props: AuthLayoutProps) => {
    const { children } = props;

    return (
        <AuthLayoutWrapper>
            <AuthLayoutContainer>{children || <Outlet />}</AuthLayoutContainer>
        </AuthLayoutWrapper>
    );
};
