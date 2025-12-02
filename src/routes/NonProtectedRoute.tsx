import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';
import { AuthLayout } from '@layouts';

export const NonProtectedRoute = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return !isAuthenticated ? (
        <AuthLayout />
    ) : (
        <Navigate to={ROUTES.HOME} replace />
    );
};
