import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '@app/rootReducer';
import { baseApi } from '@services/baseApi';

//Redux store configuration
export const store = configureStore({
    //Register all application reducers
    reducer: rootReducer,
    //Add RTK Query Middleware along with default middleware (like thunk) to handle API caching and automatic refetching
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    devTools: import.meta.env.DEV, //dev tools enabled during development and disabled during production
});
