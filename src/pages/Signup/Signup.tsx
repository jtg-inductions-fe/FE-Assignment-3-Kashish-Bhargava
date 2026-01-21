import { useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { useAppDispatch } from '@app/hooks';
import { AuthForm } from '@components';
import { COMMON_CONSTANTS } from '@constant';
import { setAccessToken } from '@features/Auth';
import type { AuthError, BackendError, SnackbarState } from '@models/auth';
import { useSignupMutation } from '@services/UserApi/userApi';
import type { SignupRequest } from '@services/UserApi/userApi.types';

//Signup page
export const Signup = () => {
    //RTK Query signup mutation
    const [signup, { isLoading }] = useSignupMutation();
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

    //Handle signup form submission
    const handleSignup = async (data: SignupRequest) => {
        try {
            const response = await signup(data).unwrap();

            //200 - Successful signup
            dispatch(
                setAccessToken({
                    accessToken: response.access,
                }),
            );
        } catch (error) {
            const err = error as AuthError;

            if ('status' in err) {
                const status = err.status;
                const backendError = (err as BackendError).data;

                //User already registered
                if ((status === 400 || status === 409) && backendError?.email) {
                    setSnackbar({
                        open: true,
                        message: COMMON_CONSTANTS.EMAIL_ALREADY_REGISTERED,
                        severity: 'error',
                    });
                } else {
                    //Incorrect credentials
                    setSnackbar({
                        open: true,
                        message: COMMON_CONSTANTS.SIGNUP_INCORRECT_CREDENTIALS,
                        severity: 'error',
                    });
                }
            } else {
                //Unexpected Error
                setSnackbar({
                    open: true,
                    message: COMMON_CONSTANTS.SIGNUP_UNEXPECTED_ERROR,
                    severity: 'error',
                });
            }
        }
    };

    return (
        <>
            {/*AuthForm component*/}
            <AuthForm<SignupRequest>
                mode="signup"
                onSubmit={handleSignup}
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
