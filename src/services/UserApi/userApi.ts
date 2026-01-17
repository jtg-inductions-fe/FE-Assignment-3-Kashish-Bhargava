import { API_CONSTANT } from '@app/apiConstant';
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
                url: API_CONSTANT.SIGNUP,
                method: 'POST',
                body: data,
            }),
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: API_CONSTANT.LOGIN,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = userApi;
