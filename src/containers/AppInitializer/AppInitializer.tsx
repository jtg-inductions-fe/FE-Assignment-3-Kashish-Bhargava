import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setAccessToken } from '@features/Auth';
import { useLazyRefreshTokenQuery } from '@services/UserApi';

export const AppInitializer = () => {
    const dispatch = useAppDispatch();

    //Flag to avoid refresh after logout
    const hasLoggedOut = useAppSelector((state) => state.auth.hasLoggedOut);

    const [triggerRefresh] = useLazyRefreshTokenQuery();

    useEffect(() => {
        const restoreSession = async () => {
            //Skip refresh if the user logs out
            if (hasLoggedOut) return;

            try {
                //Try to refresh access token using cookie
                const result = await triggerRefresh().unwrap();

                //Store new access token on success
                dispatch(setAccessToken({ accessToken: result.access }));
            } catch {
                // refresh failed user stays logged out
            }
        };

        void restoreSession();
    }, [triggerRefresh, dispatch, hasLoggedOut]);

    return null;
};
