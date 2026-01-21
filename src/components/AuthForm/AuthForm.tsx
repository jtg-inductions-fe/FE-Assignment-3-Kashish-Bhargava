import { useState } from 'react';

import { AppLink } from 'components';
import { FieldValues, Path, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Box,
    CircularProgress,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';

import { Button } from '@components';
import { COMMON_CONSTANTS, ROUTES } from '@constant';
import { LocationState } from '@models/auth';

import { FormContainer, GoBackHomeButton } from './AuthForm.styles';
import type { AuthFormProps } from './authForm.types';

// Regex patterns
const phoneRegex = COMMON_CONSTANTS.PHONE_REGEX;
const passwordRegex = COMMON_CONSTANTS.PASSWORD_REGEX;
const emailRegex = COMMON_CONSTANTS.EMAIL_REGEX;

/**
 * Reusable authentication form for login and signup
 */
export const AuthForm = <T extends FieldValues>(props: AuthFormProps<T>) => {
    //Props
    const { mode, onSubmit, isLoading = false } = props;

    //Navigation helpers
    const navigate = useNavigate();
    const location = useLocation();

    //Preserve previous route for redirect
    const state = location.state as LocationState | null;

    //Check current mode
    const isSignup = mode === 'signup';

    //React Hook Form setup
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<T>({ mode: 'onBlur' });

    //Watch password for confirm password validation
    const password = watch('password' as Path<T>);

    //Password visibility state
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword((prev) => !prev);

    // Validation rules
    const validateEmail = (value: string) =>
        emailRegex.test(value) || COMMON_CONSTANTS.EMAIL_VALIDATION_RULE;

    const validatePassword = (value: string) =>
        passwordRegex.test(value) || COMMON_CONSTANTS.PASSWORD_VALIDATION_RULE;

    const validatePhone = (value: string) =>
        phoneRegex.test(value) || COMMON_CONSTANTS.PHONE_VALIDATION_RULE;

    const validateConfirmPassword = (value: string) =>
        value === password || COMMON_CONSTANTS.CONFIRM_PASSWORD_VALIDATION_RULE;

    return (
        <FormContainer onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
            {/*Back to home button*/}
            <GoBackHomeButton
                aria-label="Go back to home"
                onClick={() => void navigate(ROUTES.HOME)}
            >
                <ArrowBackIosNewIcon />
            </GoBackHomeButton>

            {/*Form heading*/}
            <Typography variant="h3" color="text.primary">
                {isSignup
                    ? COMMON_CONSTANTS.SIGNUP_HEADING
                    : COMMON_CONSTANTS.LOGIN_HEADING}
            </Typography>

            {/*Form SubHeading and description*/}
            <Box display="flex" flexDirection="column">
                <Typography variant="h2" color="text.primary">
                    {isSignup
                        ? COMMON_CONSTANTS.SIGNUP_SUBHEADING
                        : COMMON_CONSTANTS.LOGIN_SUBHEADING}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {isSignup
                        ? COMMON_CONSTANTS.SIGNUP_PARA
                        : COMMON_CONSTANTS.LOGIN_PARA}
                </Typography>
            </Box>

            {/*Signup only fields*/}
            {isSignup && (
                <>
                    <TextField
                        label="Name"
                        fullWidth
                        {...register('name' as Path<T>, {
                            required: COMMON_CONSTANTS.NAME_REQUIRED,
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message as string}
                    />

                    <TextField
                        label="Phone Number"
                        fullWidth
                        {...register('phone_number' as Path<T>, {
                            required: COMMON_CONSTANTS.PHONE_REQUIRED,
                            validate: validatePhone,
                        })}
                        error={!!errors.phone_number}
                        helperText={errors.phone_number?.message as string}
                    />
                </>
            )}
            {/*Email field*/}
            <TextField
                label="Email"
                type="email"
                fullWidth
                {...register('email' as Path<T>, {
                    required: COMMON_CONSTANTS.EMAIL_REQUIRED,
                    validate: validateEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message as string}
            />
            {/*Password field*/}
            <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                {...register('password' as Path<T>, {
                    required: COMMON_CONSTANTS.PASSWORD_REQUIRED,
                    validate: validatePassword,
                })}
                error={!!errors.password}
                helperText={errors.password?.message as string}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                    aria-label="toggle password visibility"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            {/*Confirm Password (Signup only)*/}
            {isSignup && (
                <TextField
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    autoComplete="new-password"
                    {...register('confirm_password' as Path<T>, {
                        required: COMMON_CONSTANTS.CONFIRM_PASSWORD_REQUIRED,
                        validate: validateConfirmPassword,
                    })}
                    error={!!errors.confirm_password}
                    helperText={errors.confirm_password?.message as string}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={
                                            toggleConfirmPasswordVisibility
                                        }
                                        edge="end"
                                        aria-label="toggle confirm password visibility"
                                    >
                                        {showConfirmPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
            {/*Submit button*/}
            <Button type="submit" variant="contained" disabled={isLoading}>
                {isLoading ? (
                    <CircularProgress size={24} />
                ) : (
                    <>{isSignup ? 'Sign Up' : 'Login'}</>
                )}
            </Button>
            {/*Switch between Signup and Login*/}
            <Typography variant="body1" color="text.primary">
                {mode === 'login' ? (
                    <>
                        Don&apos;t have an account?&nbsp;
                        <AppLink
                            to={ROUTES.SIGNUP}
                            label="Sign Up"
                            state={state}
                            color="primary.main"
                            aria-label="Go to Sign Up"
                            underline="hover"
                        />
                    </>
                ) : (
                    <>
                        Already have an account?&nbsp;
                        <AppLink
                            to={ROUTES.LOGIN}
                            state={state}
                            label="Login"
                            color="primary.main"
                            aria-label="Go to Login"
                            underline="hover"
                        />
                    </>
                )}
            </Typography>
        </FormContainer>
    );
};
