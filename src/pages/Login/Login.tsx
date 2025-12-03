// import { useAppDispatch } from '@app/hooks';
// import { AuthForm } from '@components';
// import { setCredentials } from '@features/auth/authSlice';
// import { useLoginMutation } from '@services/userApi';
// import type { AuthResponse, LoginRequest } from '@services/userApi.types';

// export const Login = () => {
//     const [login, { isLoading }] = useLoginMutation();
//     const dispatch = useAppDispatch();

//     const handleLogin = async (data: LoginRequest) => {
//         try {
//             const response: AuthResponse = await login(data).unwrap();
//             dispatch(setCredentials(response));
//         } catch (error: unknown) {
//             //eslint-disable-next-line no-console
//             console.error('Login failed:', error);
//         }
//     };

//     return (
//         <AuthForm<LoginRequest>
//             mode="login"
//             onSubmit={handleLogin}
//             isLoading={isLoading}
//         />
//     );
// };

// import { useAppDispatch } from '@app/hooks';
// import { AuthForm } from '@components';
// import { setCredentials } from '@features/auth/authSlice';
// import { useLoginMutation } from '@services/userApi';
// import type { LoginRequest, LoginResponse } from '@services/userApi.types';

// export const Login = () => {
//     const [login, { isLoading }] = useLoginMutation();
//     const dispatch = useAppDispatch();

//     const handleLogin = async (data: LoginRequest) => {
//         try {
//             const response: LoginResponse = await login(data).unwrap();

//             // Store JWT in redux state
//             dispatch(
//                 setCredentials({
//                     user: null, // Backend doesn’t send user in login response
//                     accessToken: response.access,
//                     refreshToken: '', // If your backend later adds refresh token, add here
//                 }),
//             );
//         } catch (error) {
//             //eslint-disable-next-line no-console
//             console.error('Login failed:', error);
//         }
//     };

//     return (
//         <AuthForm<LoginRequest>
//             mode="login"
//             onSubmit={handleLogin}
//             isLoading={isLoading}
//         />
//     );
// };
import { useAppDispatch } from '@app/hooks';
import { AuthForm } from '@components';
import { setCredentials } from '@features/auth/authSlice';
import { useLoginMutation } from '@services/userApi';
import type { LoginRequest } from '@services/userApi.types';

export const Login = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();

    const handleLogin = async (data: LoginRequest) => {
        try {
            const response = await login(data).unwrap();
            dispatch(
                setCredentials({
                    user: null,
                    accessToken: response.access,
                    refreshToken: '',
                }),
            );
        } catch (error) {
            //eslint-disable-next-line no-console
            console.error('Login failed:', error);
        }
    };

    return (
        <AuthForm<LoginRequest>
            mode="login"
            onSubmit={handleLogin}
            isLoading={isLoading}
        />
    );
};
