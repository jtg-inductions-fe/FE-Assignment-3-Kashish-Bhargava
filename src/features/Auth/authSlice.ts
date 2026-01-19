import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@features/Auth';

import { AuthState, SetAccessTokenPayload } from './authSlice.types';

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Sets user data and tokens after successful login/signup
        setAccessToken: (
            state,
            action: PayloadAction<SetAccessTokenPayload>,
        ) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.accessToken = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setAccessToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
