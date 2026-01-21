import { useEffect } from 'react';

import { useAppDispatch } from '@app/hooks';
import { logout, setAccessToken } from '@features/Auth';
import { useRefreshTokenQuery } from '@services/UserApi';

//Runs on app load
export const AppInitializer = () => {
    const dispatch = useAppDispatch();

    //Refresh using cookie
    const { data, isSuccess, isError } = useRefreshTokenQuery();

    useEffect(() => {
        //Store access token if refresh succeed
        if (isSuccess && data?.access) {
            dispatch(setAccessToken({ accessToken: data.access }));
        }
        //Logout on error
        if (isError) {
            dispatch(logout());
        }
    }, [isSuccess, isError, data, dispatch]);

    return null;
};
