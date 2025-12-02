import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@services/baseApi';

import { rootReducer } from './rootReducer';

//Redux store configuration
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware), //Adds RTK Query Middleware
    devTools: import.meta.env.DEV, //dev tools enabled during development and disabled during production
});
