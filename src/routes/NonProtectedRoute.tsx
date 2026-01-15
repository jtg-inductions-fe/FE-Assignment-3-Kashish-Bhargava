import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';

/**
 * Non-protected route component for displaying children when the user is not authenticated.
 * @param param - Props for the non-protected route component.
 * @returns The rendered non-protected route component.
 */
export const NonProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return !isAuthenticated ? children : <Navigate to={ROUTES.HOME} replace />;
};
