import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Alert, Snackbar } from '@mui/material';

import type { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useAppDispatch } from '@app/hooks';
import { AuthForm } from '@components';
import { ROUTES } from '@constant';
import { setCredentials } from '@features/auth/authSlice';
import { useLoginMutation } from '@services/userApi/userApi';
import type { LoginRequest } from '@services/userApi/userApi.types';

export const Login = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Snackbar state
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error';
    }>({ open: false, message: '', severity: 'success' });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleLogin = async (data: LoginRequest) => {
        try {
            const response = await login(data).unwrap();

            //200 — successful login
            if (response) {
                dispatch(
                    setCredentials({
                        user: null,
                        accessToken: response.access,
                        refreshToken: '',
                    }),
                );

                setSnackbar({
                    open: true,
                    message: 'Login successful! Redirecting to home...',
                    severity: 'success',
                });

                // Redirect after a short delay
                setTimeout(() => {
                    void navigate(ROUTES.HOME);
                }, 1500);
            }
        } catch (error) {
            const err = error as FetchBaseQueryError | SerializedError;

            if ('status' in err) {
                const status = err.status;

                // Handle 401 Unauthorized (wrong credentials or no account)
                if (status === 401) {
                    setSnackbar({
                        open: true,
                        message:
                            'Incorrect credentials or user does not exist. Please sign up first.',
                        severity: 'error',
                    });
                } else {
                    //Handle all other backend errors like server error (500)
                    setSnackbar({
                        open: true,
                        message: 'Login failed. Please try again later.',
                        severity: 'error',
                    });
                }
            } else {
                // Handle unexpected or client-side errors like no internet
                setSnackbar({
                    open: true,
                    message:
                        'Unexpected error occurred. Please try again later.',
                    severity: 'error',
                });
            }
            //eslint-disable-next-line no-console
            console.error('Login failed:', error);
        }
    };

    return (
        <>
            <AuthForm<LoginRequest>
                mode="login"
                onSubmit={handleLogin}
                isLoading={isLoading}
            />
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};
