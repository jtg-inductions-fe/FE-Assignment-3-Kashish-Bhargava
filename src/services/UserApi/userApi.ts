import { API_CONSTANT } from '@app/apiConstant';
import { User } from '@features/Auth';
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
            invalidatesTags: ['User'],
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: API_CONSTANT.LOGIN,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),

        getProfile: builder.query<User, void>({
            query: () => ({
                url: API_CONSTANT.PROFILE,
            }),
            providesTags: ['User'],
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: API_CONSTANT.LOGOUT,
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useGetProfileQuery,
    useLogoutMutation,
} = userApi;
