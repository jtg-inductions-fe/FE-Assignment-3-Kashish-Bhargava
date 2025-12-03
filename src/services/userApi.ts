// import { baseApi } from '@services/baseApi';

// import type {
//     AuthResponse,
//     LoginRequest,
//     SignupRequest,
// } from './userApi.types';

// export const userApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         signup: builder.mutation<AuthResponse, SignupRequest>({
//             query: (data) => ({
//                 url: '/users/signup/',
//                 method: 'POST',
//                 body: data,
//             }),
//         }),

//         login: builder.mutation<AuthResponse, LoginRequest>({
//             query: (data) => ({
//                 url: '/users/login/',
//                 method: 'POST',
//                 body: data,
//             }),
//         }),
//     }),
// });

// export const { useSignupMutation, useLoginMutation } = userApi;

import { baseApi } from '@services/baseApi';

import type {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
} from './userApi.types';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation<SignupResponse, SignupRequest>({
            query: (data) => ({
                url: 'users/signup/',
                method: 'POST',
                body: data,
            }),
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: 'users/login/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = userApi;
