import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setUser } from '@features/Auth';
import { useGetProfileQuery } from '@services/UserApi';

/**
 * Initializes auth state on app load by fetching user profile.
 */
export const AppInitializer = () => {
    //Redux dispatcher
    const dispatch = useAppDispatch();

    //Check if the user is authenticated
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );

    //Fetch user profile
    const { data: user } = useGetProfileQuery();

    //Store user data once authenticated
    useEffect(() => {
        if (user && isAuthenticated) {
            dispatch(setUser(user));
        }
    }, [isAuthenticated, user, dispatch]);

    return null;
};
