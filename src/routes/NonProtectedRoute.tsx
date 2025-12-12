import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';

export const NonProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return !isAuthenticated ? children : <Navigate to={ROUTES.HOME} replace />;
};
