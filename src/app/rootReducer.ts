/**
 * Root reducer for the Redux store that registers all application reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@features/Auth/authSlice';
import { baseApi } from '@services/BaseApi/baseApi';

export const rootReducer = combineReducers({
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
