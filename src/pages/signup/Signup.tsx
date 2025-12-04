import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Alert, Snackbar } from '@mui/material';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { AuthForm } from '@components';
import { ROUTES } from '@constant';
import { useSignupMutation } from '@services/userApi';
import type { SignupRequest } from '@services/userApi.types';

export const Signup = () => {
    const [signup, { isLoading }] = useSignupMutation();
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

    const handleSignup = async (data: SignupRequest) => {
        try {
            const response = await signup(data).unwrap();

            if (response) {
                setSnackbar({
                    open: true,
                    message: 'Signup successful! Redirecting to login...',
                    severity: 'success',
                });

                setTimeout(() => {
                    void navigate(ROUTES.LOGIN);
                }, 2000);
            }
        } catch (error) {
            const err = error as FetchBaseQueryError | SerializedError;

            if ('status' in err) {
                const status = err.status;
                const backendError = (
                    err as FetchBaseQueryError & {
                        data?: Record<string, unknown>;
                    }
                ).data;

                if ((status === 400 || status === 409) && backendError?.email) {
                    setSnackbar({
                        open: true,
                        message:
                            'This email is already registered. Please login instead.',
                        severity: 'error',
                    });
                } else {
                    setSnackbar({
                        open: true,
                        message:
                            'Signup failed. Please check your details and try again.',
                        severity: 'error',
                    });
                }
            } else {
                setSnackbar({
                    open: true,
                    message:
                        'Unexpected error occurred. Please try again later.',
                    severity: 'error',
                });
            }
        }
    };

    return (
        <>
            <AuthForm<SignupRequest>
                mode="signup"
                onSubmit={handleSignup}
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
