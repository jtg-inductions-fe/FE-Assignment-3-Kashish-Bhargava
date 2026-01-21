import { API_CONSTANT } from '@app/apiConstant';
import { User } from '@features/Auth';
import { baseApi } from '@services/BaseApi/baseApi';

import type {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
} from './userApi.types';

/**
 * User API service for signup,login,profile fetching, logout and token refresh.
 */
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

        refreshToken: builder.query<{ access: string }, void>({
            query: () => ({
                url: API_CONSTANT.TOKEN_REFRESH,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useGetProfileQuery,
    useLogoutMutation,
    useRefreshTokenQuery,
} = userApi;
