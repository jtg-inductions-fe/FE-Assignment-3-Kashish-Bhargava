import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, User } from '@features/auth/authSlice.types';

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Sets user data and tokens after successful login/signup
        setCredentials: (
            state,
            action: PayloadAction<{
                user: User;
                accessToken: string;
                refreshToken: string;
            }>,
        ) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
        },
    },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
