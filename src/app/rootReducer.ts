import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@features/Auth/authSlice';
import layoutReducer from '@features/Layout/layoutSlice';
import { baseApi } from '@services/baseApi';

export const rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
