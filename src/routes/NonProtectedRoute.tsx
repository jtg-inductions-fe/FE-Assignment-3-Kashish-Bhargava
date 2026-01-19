import { ReactNode, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Alert, Snackbar } from '@mui/material';

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
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    //Navigation helpers
    const location = useLocation();
    const navigate = useNavigate();

    //Get previous route if any
    const state = location.state as LocationState | null;
    const redirectTo = state?.from ?? ROUTES.HOME;

    //Snackbar state
    const [showSnackbar, setShowSnackbar] = useState(false);

    //Handle redirect after successful authentication
    useEffect(() => {
        if (isAuthenticated) {
            setShowSnackbar(true);

            //Redirect after short delay
            const timer = setTimeout(() => {
                void navigate(redirectTo, { replace: true });
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [isAuthenticated, navigate, redirectTo]);

    //Allow access to authentication pages if the user is not authenticated
    if (!isAuthenticated) return children;

    //Show success message while redirecting
    return (
        <>
            <Snackbar
                open={showSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success">
                    Authentication successful! Redirecting...
                </Alert>
            </Snackbar>
        </>
    );
};
