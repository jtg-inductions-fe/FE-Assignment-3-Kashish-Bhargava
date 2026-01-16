/**
 * Types for User API requests and responses
 */
export interface SignupRequest {
    /**User's email address */
    email: string;
    /**User's full name */
    name: string;
    /**User's contact phone number */
    phone_number: string;
    /**User's chosen password */
    password: string;
    /**Confirmation of the chosen password */
    confirm_password: string;
}

export interface SignupResponse {
    access: string;
}

// Login
export interface LoginRequest {
    /**User's email address */
    email: string;
    /**User's password */
    password: string;
}

export interface LoginResponse {
    /**JWT access token for authenticated requests */
    access: string;
}
