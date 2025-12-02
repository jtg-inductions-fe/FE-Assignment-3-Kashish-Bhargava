import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';
import { MainLayout } from '@layouts';

export const ProtectedRoute = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <MainLayout />
    ) : (
        <Navigate to={ROUTES.LOGIN} replace />
    );
};
