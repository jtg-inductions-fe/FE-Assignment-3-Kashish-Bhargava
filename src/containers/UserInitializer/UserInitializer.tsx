import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setUser } from '@features/Auth';
import { useGetProfileQuery } from '@services/UserApi';

//User profile fetched after authentication
export const UserInitializer = () => {
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector((state) => state.auth.accessToken);

    //Fetch profile only when token exists
    const { data: user } = useGetProfileQuery(undefined, {
        skip: !accessToken,
    });

    //Store user profile
    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }
    }, [user, dispatch]);

    return null;
};
