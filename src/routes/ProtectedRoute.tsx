import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';

/**
 * Protected route component for displaying children when the user is authenticated.
 * @param param - Props for the protected route component.
 * @returns The rendered protected route component.
 */
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} replace />;
};
