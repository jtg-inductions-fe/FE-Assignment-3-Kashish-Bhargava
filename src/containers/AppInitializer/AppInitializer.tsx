import { useEffect } from 'react';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useAppDispatch } from '@app/hooks';
import { logout, setAccessToken } from '@features/Auth';
import { useRefreshTokenQuery } from '@services/UserApi';

//Runs on app load
export const AppInitializer = () => {
    const dispatch = useAppDispatch();

    //Refresh using cookie
    const { data, isSuccess, isError, error } = useRefreshTokenQuery();

    useEffect(() => {
        //Store access token if refresh succeed
        if (isSuccess && data?.access) {
            dispatch(setAccessToken({ accessToken: data.access }));
        }
        //Logout on error
        if (isError) {
            const status = (error as FetchBaseQueryError | undefined)?.status;
            if (status === 401 || status === 403) {
                dispatch(logout());
            }
        }
    }, [isSuccess, isError, data, error, dispatch]);

    return null;
};
