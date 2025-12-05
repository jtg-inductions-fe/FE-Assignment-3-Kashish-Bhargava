import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@features/auth/authSlice';
import { baseApi } from '@services/baseApi';

export const rootReducer = combineReducers({
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
