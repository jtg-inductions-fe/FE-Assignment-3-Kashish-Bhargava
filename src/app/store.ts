import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import { baseApi } from '../services/baseApi';

//Redux store configuration
export const store = configureStore({
    reducer: {
        auth: authReducer, //Authentication slice
        [baseApi.reducerPath]: baseApi.reducer, //RTK Query API that stores cached responses
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware), //Adds RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
