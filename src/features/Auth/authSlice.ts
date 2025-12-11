import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, SetCredentialsPayload } from './authSlice.types';

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
            action: PayloadAction<SetCredentialsPayload>,
        ) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            //both user data and access token are present i.e.authenticated user
            if (action.payload.user && action.payload.accessToken) {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                // user data is missing but access token is present ( at the time of login )
            } else if (action.payload.accessToken) {
                state.user = null;
                state.isAuthenticated = true;
                // user data is present but access token is missing ( at the time of signup )
            } else {
                state.user = action.payload.user || null;
                state.isAuthenticated = false;
            }
        },
    },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
