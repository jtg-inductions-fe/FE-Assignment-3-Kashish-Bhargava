import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@features/Auth';

import { AuthState, SetAccessTokenPayload } from './authSlice.types';

//Initial authentication state
const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    hasLoggedOut: false,
};

//Authentication slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Sets access token after login/signup
        setAccessToken: (
            state,
            action: PayloadAction<SetAccessTokenPayload>,
        ) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state.hasLoggedOut = false;
        },
        //Store logged-in user profile
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        //Clears auth state on logout
        logout: (state) => {
            state.accessToken = null;
            state.user = null;
            state.isAuthenticated = false;
            state.hasLoggedOut = true;
        },
    },
});

//export actions and reducers
export const { setAccessToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
