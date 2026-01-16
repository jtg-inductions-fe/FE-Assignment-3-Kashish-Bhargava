import { useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { useAppDispatch } from '@app/hooks';
import { AuthForm } from '@components';
import { setAccessToken } from '@features/Auth';
import type { AuthError, BackendError, SnackbarState } from '@models/auth';
import { useSignupMutation } from '@services/UserApi/userApi';
import type { SignupRequest } from '@services/UserApi/userApi.types';

export const Signup = () => {
    const [signup, { isLoading }] = useSignupMutation();
    const dispatch = useAppDispatch();

    // Snackbar state
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleSignup = async (data: SignupRequest) => {
        try {
            const response = await signup(data).unwrap();

            dispatch(
                setAccessToken({
                    accessToken: response.access,
                }),
            );

            setSnackbar({
                open: true,
                message: 'Signup successful! Redirecting...',
                severity: 'success',
            });
        } catch (error) {
            const err = error as AuthError;

            if ('status' in err) {
                const status = err.status;
                const backendError = (err as BackendError).data;

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
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};
