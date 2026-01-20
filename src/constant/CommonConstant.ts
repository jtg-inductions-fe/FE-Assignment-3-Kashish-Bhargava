/**
 * Common constants.
 */
export const COMMON_CONSTANTS = {
    PHONE_REGEX: /^\+?\d{7,15}$/,
    PASSWORD_REGEX:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    EMAIL_VALIDATION_RULE: 'Enter a valid email',
    PASSWORD_VALIDATION_RULE:
        'Must include at least one uppercase, lowercase, number & special character',
    PHONE_VALIDATION_RULE: 'Enter a valid phone number (7-15 digits)',
    CONFIRM_PASSWORD_VALIDATION_RULE: 'Passwords do not match',
    SIGNUP_HEADING: 'Sign Up',
    LOGIN_HEADING: 'Login',
    SIGNUP_SUBHEADING: 'Create Account',
    LOGIN_SUBHEADING: 'Welcome Back',
    SIGNUP_PARA: 'Sign up to book your favorite movies effortlessly!',
    LOGIN_PARA: 'Login to continue your movie experience!',
    NAME_REQUIRED: 'Name is required',
    PHONE_REQUIRED: 'Phone number is required',
    EMAIL_REQUIRED: 'Email is required',
    PASSWORD_REQUIRED: 'Password is required',
    CONFIRM_PASSWORD_REQUIRED: 'Confirm your password',
    LOGIN_UNAUTHORIZED_MESSAGE:
        'Incorrect credentials or user does not exist. Please sign up first.',
    LOGIN_BACKEND_ERROR_MESSAGE: 'Login failed. Please try again later.',
    LOGIN_CLIENT_SIDE_ERROR_MESSAGE:
        'Unexpected error occurred. Please try again later.',
    EMAIL_ALREADY_REGISTERED:
        'This email is already registered. Please login instead.',
    SIGNUP_INCORRECT_CREDENTIALS:
        'Signup failed. Please check your details and try again.',
    SIGNUP_UNEXPECTED_ERROR:
        'Unexpected error occurred. Please try again later.',
} as const;
