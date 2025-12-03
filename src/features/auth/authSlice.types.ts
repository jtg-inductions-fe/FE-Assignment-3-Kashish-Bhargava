/**
 * Represents a single user in the authentication system.
 */
export interface User {
    /** Unique identifier for the user */
    id: number;

    /** Registered email address (unique) */
    email: string;

    /** Full name of the user */
    name: string;

    /** Contact phone number */
    phone: string;
}

/**
 * Authentication state stored in the Redux store.
 */
export interface AuthState {
    /** Currently authenticated user's details (null if not logged in) */
    user: User | null;

    /** JWT access token used for API authentication */
    accessToken: string | null;

    /** JWT refresh token used to renew the access token */
    refreshToken: string | null;

    /** Boolean flag indicating if the user is authenticated */
    isAuthenticated: boolean;
}

/**
 * Payload structure for the setCredentials action.
 * Used to update authentication details after login or signup.
 */
export interface SetCredentialsPayload {
    /** Authenticated user's information */
    user: User | null;

    /** New access token received from the backend */
    accessToken: string;

    /** Corresponding refresh token */
    refreshToken: string;
}
