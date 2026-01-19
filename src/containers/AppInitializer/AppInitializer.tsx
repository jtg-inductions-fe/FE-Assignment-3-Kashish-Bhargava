import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setUser } from '@features/Auth';
import { useGetProfileQuery } from '@services/UserApi';

export const AppInitializer = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    const { data: user } = useGetProfileQuery();

    useEffect(() => {
        if (user && isAuthenticated) {
            dispatch(setUser(user));
        }
    }, [isAuthenticated, user, dispatch]);

    return null;
};
