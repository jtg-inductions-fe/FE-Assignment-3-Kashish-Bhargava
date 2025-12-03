// Signup
export interface SignupRequest {
    email: string;
    name: string;
    phone_number: string;
    password: string;
    confirm_password: string;
}

export interface SignupResponse {
    email: string;
    name: string;
    phone_number: string;
}

// Login
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    access: string;
}
