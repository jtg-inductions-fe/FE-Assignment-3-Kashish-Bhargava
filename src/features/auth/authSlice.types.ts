export interface User {
    id: number;
    email: string;
    name: string;
    phone: string;
}
export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}
