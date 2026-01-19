/**
 * Regex Pattern constants.
 */
export const COMMON_CONSTANTS = {
    PHONE_REGEX: /^\+?\d{7,15}$/,
    PASSWORD_REGEX:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
    EMAIL_REGEX: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    EMAIL_VALIDATION_RULE: 'Enter a valid email',
    PASSWORD_VALIDATION_RULE:
        'Must include at least one uppercase, lowercase, number & special character',
    PHONE_VALIDATION_RULE: 'Enter a valid phone number (7-15 digits)',
    CONFIRM_PASSWORD_VALIDATION_RULE: 'Passwords do not match',
} as const;
