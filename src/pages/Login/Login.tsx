import { useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { useAppDispatch } from '@app/hooks';
import { AuthForm } from '@components';
import { COMMON_CONSTANTS } from '@constant';
import { setAccessToken } from '@features/Auth/authSlice';
import type { AuthError, SnackbarState } from '@models/auth';
import { useLoginMutation } from '@services/UserApi/userApi';
import type { LoginRequest } from '@services/UserApi/userApi.types';

//Login page
export const Login = () => {
    //RTK Query login mutation
    const [login, { isLoading }] = useLoginMutation();
    //Redux dispatcher
    const dispatch = useAppDispatch();

    // Snackbar state
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'success',
    });

    //Close Snackbar handler
    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    //Handle login form submission
    const handleLogin = async (data: LoginRequest) => {
        try {
            const response = await login(data).unwrap();

            //200 - successful login
            if (response) {
                dispatch(
                    setAccessToken({
                        accessToken: response.access,
                    }),
                );
            }
        } catch (error) {
            const err = error as AuthError;

            if ('status' in err) {
                const status = err.status;

                // Handle 401 Unauthorized (wrong credentials or no account)
                if (status === 401) {
                    setSnackbar({
                        open: true,
                        message: COMMON_CONSTANTS.LOGIN_UNAUTHORIZED_MESSAGE,
                        severity: 'error',
                    });
                } else {
                    //Handle all other backend errors like server error (500)
                    setSnackbar({
                        open: true,
                        message: COMMON_CONSTANTS.LOGIN_BACKEND_ERROR_MESSAGE,
                        severity: 'error',
                    });
                }
            } else {
                // Handle unexpected or client-side errors like no internet
                setSnackbar({
                    open: true,
                    message: COMMON_CONSTANTS.LOGIN_CLIENT_SIDE_ERROR_MESSAGE,
                    severity: 'error',
                });
            }
            //eslint-disable-next-line no-console
            console.error('Login failed:', error);
        }
    };

    return (
        <>
            {/*AuthForm component*/}
            <AuthForm<LoginRequest>
                mode="login"
                onSubmit={handleLogin}
                isLoading={isLoading}
            />
            {/*Snackbar for displaying message*/}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};
