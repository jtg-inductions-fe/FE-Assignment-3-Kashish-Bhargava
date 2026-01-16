import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '@app/hooks';
import { ROUTES } from '@constant';
import { LocationState } from '@models/auth';

/**
 * Non-protected route component for displaying children when the user is not authenticated.
 * @param param - Props for the non-protected route component.
 * @returns The rendered non-protected route component.
 */
export const NonProtectedRoute = ({ children }: { children: ReactNode }) => {
    /**
     * Get the authentication status from the Redux store.
     */
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const location = useLocation();
    const state = (location.state as LocationState) || null;
    const from = state?.from ?? ROUTES.HOME;

    return !isAuthenticated ? children : <Navigate to={from} replace />;
};
