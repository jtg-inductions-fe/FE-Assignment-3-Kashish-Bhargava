// import { useAppDispatch } from '@app/hooks';
// import { AuthForm } from '@components';
// import { setCredentials } from '@features/auth/authSlice';
// import { useSignupMutation } from '@services/userApi';
// import type { AuthResponse, SignupRequest } from '@services/userApi.types';

// export const Signup = () => {
//     const [signup, { isLoading }] = useSignupMutation();
//     const dispatch = useAppDispatch();

//     const handleSignup = async (data: SignupRequest) => {
//         try {
//             const response: AuthResponse = await signup(data).unwrap();
//             dispatch(setCredentials(response));
//         } catch (error: unknown) {
//             //eslint-disable-next-line no-console
//             console.error('Signup failed:', error);
//         }
//     };

//     return (
//         <AuthForm<SignupRequest>
//             mode="signup"
//             onSubmit={handleSignup}
//             isLoading={isLoading}
//         />
//     );
// };

// import { AuthForm } from '@components';
// import { useSignupMutation } from '@services/userApi';
// import type { SignupRequest, SignupResponse } from '@services/userApi.types';

// export const Signup = () => {
//     const [signup, { isLoading }] = useSignupMutation();

//     const handleSignup = async (data: SignupRequest) => {
//         try {
//             const response: SignupResponse = await signup(data).unwrap();
//             //eslint-disable-next-line no-console
//             console.log('User created:', response);
//         } catch (error) {
//             //eslint-disable-next-line no-console
//             console.error('Signup failed:', error);
//         }
//     };

//     return (
//         <AuthForm<SignupRequest>
//             mode="signup"
//             onSubmit={handleSignup}
//             isLoading={isLoading}
//         />
//     );
// };

import { AuthForm } from '@components';
import { useSignupMutation } from '@services/userApi';
import type { SignupRequest } from '@services/userApi.types';

export const Signup = () => {
    const [signup, { isLoading }] = useSignupMutation();

    const handleSignup = async (data: SignupRequest) => {
        try {
            const response = await signup(data).unwrap();
            //eslint-disable-next-line no-console
            console.log('Signup success:', response);
        } catch (error) {
            if ('data' in (error as { data?: unknown })) {
                //eslint-disable-next-line no-console
                console.error(
                    'Signup failed:',
                    (error as { data?: unknown }).data,
                );
            } else {
                //eslint-disable-next-line no-console
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        <AuthForm<SignupRequest>
            mode="signup"
            onSubmit={handleSignup}
            isLoading={isLoading}
        />
    );
};
