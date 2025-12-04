import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { CircularProgress, TextField } from '@mui/material';

import { ROUTES } from '@constant';

import {
    FormContainer,
    FormHeading,
    FormHeadingContainer,
    FormSubtitle,
    FormTitle,
    GoBackHomeButton,
    StyledButton,
    StyledLink,
    SwitchText,
} from './AuthForm.styles';
import type { AuthFormProps } from './AuthForm.types';

export const AuthForm = <T extends object>({
    mode,
    onSubmit,
    isLoading = false,
}: AuthFormProps<T>) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<T>({} as T);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        void onSubmit(formData);
    };
    const isSignup = mode === 'signup';

    return (
        <FormContainer onSubmit={handleSubmit}>
            <GoBackHomeButton onClick={() => void navigate(ROUTES.HOME)}>
                <ArrowBackIosNewIcon />
            </GoBackHomeButton>
            <FormTitle>{isSignup ? 'Sign Up' : 'Login'}</FormTitle>
            <FormHeadingContainer>
                <FormHeading>
                    {isSignup ? 'Create Account' : 'Welcome Back'}
                </FormHeading>

                <FormSubtitle>
                    {isSignup
                        ? 'Sign up to book your favorite movies effortlessly!'
                        : 'Login to continue your movie experience!'}
                </FormSubtitle>
            </FormHeadingContainer>

            {isSignup && (
                <>
                    <TextField
                        required
                        label="Name"
                        name="name"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        label="Phone Number"
                        name="phone_number"
                        fullWidth
                        onChange={handleChange}
                    />
                </>
            )}

            <TextField
                required
                label="Email"
                name="email"
                type="email"
                fullWidth
                onChange={handleChange}
            />
            <TextField
                required
                label="Password"
                name="password"
                type="password"
                fullWidth
                onChange={handleChange}
            />

            {isSignup && (
                <TextField
                    required
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    fullWidth
                    onChange={handleChange}
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

            <SwitchText>
                {mode === 'login' ? (
                    <>
                        Don’t have an account?{' '}
                        <StyledLink href="/signup">Sign Up</StyledLink>
                    </>
                ) : (
                    <>
                        Already have an account?{' '}
                        <StyledLink href="/login">Login</StyledLink>
                    </>
                )}
            </SwitchText>
        </FormContainer>
    );
};
