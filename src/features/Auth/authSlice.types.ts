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

    /** Boolean flag indicating if the user is authenticated */
    isAuthenticated: boolean;

    /**Boolean flag indicating if the user has logged out */
    hasLoggedOut: boolean;
}

/**
 * Payload structure for the setAccessToken action.
 * Used to update authentication details after login or signup.
 */
export interface SetAccessTokenPayload {
    /** New access token received from the backend */
    accessToken: string;
}
