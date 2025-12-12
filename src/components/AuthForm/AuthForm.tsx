import { useState } from 'react';

import { FieldValues, Path, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

import { ROUTES } from '@constant';

import {
    FormContainer,
    GoBackHomeButton,
    StyledButton,
    StyledLink,
} from './AuthForm.styles';
import type { AuthFormProps } from './authForm.types';

// Regex patterns
const phoneRegex = /^\+?\d{7,15}$/;
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const AuthForm = <T extends FieldValues>(props: AuthFormProps<T>) => {
    const { mode, onSubmit, isLoading = false } = props;
    const navigate = useNavigate();
    const isSignup = mode === 'signup';

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<T>({ mode: 'onBlur' });

    const password = watch('password' as Path<T>);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword((prev) => !prev);

    // Validation rules
    const validateEmail = (value: string) =>
        emailRegex.test(value) || 'Enter a valid email';

    const validatePassword = (value: string) =>
        passwordRegex.test(value) ||
        'Must include at least one uppercase, lowercase, number & special character';

    const validatePhone = (value: string) =>
        phoneRegex.test(value) || 'Enter a valid phone number (7–15 digits)';

    const validateConfirmPassword = (value: string) =>
        value === password || 'Passwords do not match';

    return (
        <FormContainer onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
            <GoBackHomeButton
                aria-label="Go back to home"
                onClick={() => void navigate(ROUTES.HOME)}
            >
                <ArrowBackIosNewIcon />
            </GoBackHomeButton>

            <Typography variant="h3" color="text.primary">
                {isSignup ? 'Sign Up' : 'Login'}
            </Typography>

            <Box display="flex" flexDirection="column">
                <Typography variant="h2" color="text.primary">
                    {isSignup ? 'Create Account' : 'Welcome Back'}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {isSignup
                        ? 'Sign up to book your favorite movies effortlessly!'
                        : 'Login to continue your movie experience!'}
                </Typography>
            </Box>

            {isSignup && (
                <>
                    <TextField
                        label="Name"
                        fullWidth
                        {...register('name' as Path<T>, {
                            required: 'Name is required',
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message as string}
                    />

                    <TextField
                        label="Phone Number"
                        fullWidth
                        {...register('phone_number' as Path<T>, {
                            required: 'Phone number is required',
                            validate: validatePhone,
                        })}
                        error={!!errors.phone_number}
                        helperText={errors.phone_number?.message as string}
                    />
                </>
            )}

            <TextField
                label="Email"
                type="email"
                fullWidth
                {...register('email' as Path<T>, {
                    required: 'Email is required',
                    validate: validateEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message as string}
            />

            <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                {...register('password' as Path<T>, {
                    required: 'Password is required',
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

            {isSignup && (
                <TextField
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    {...register('confirm_password' as Path<T>, {
                        required: 'Confirm your password',
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

            <StyledButton
                type="submit"
                variant="contained"
                disabled={isLoading}
            >
                {isLoading ? (
                    <CircularProgress size={24} />
                ) : (
                    <>{isSignup ? 'Sign Up' : 'Login'}</>
                )}
            </StyledButton>

            <Typography variant="body1" color="text.primary">
                {mode === 'login' ? (
                    <>
                        Don&apos;t have an account?{' '}
                        <StyledLink href={ROUTES.SIGNUP}>Sign Up</StyledLink>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <StyledLink href={ROUTES.LOGIN}>Login</StyledLink>
                    </>
                )}
            </Typography>
        </FormContainer>
    );
};
