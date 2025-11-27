import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import { baseApi } from '../services/baseApi';

//Redux store configuration
export const store = configureStore({
    reducer: {
        counter: counterReducer, //Counter slice for testing
        auth: authReducer, //Authentication slice
        [baseApi.reducerPath]: baseApi.reducer, //RTK Query API that stores cached responses
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware), //Adds RTK Query middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
