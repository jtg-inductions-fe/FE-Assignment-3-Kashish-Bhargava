import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@features/auth/authSlice';
import layoutReducer from '@features/layout/layoutSlice';
import { baseApi } from '@services/baseApi';

export const rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
