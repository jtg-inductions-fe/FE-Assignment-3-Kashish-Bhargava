import { Outlet, useMatches } from 'react-router-dom';

import { Navbar } from '@components';

import { MainContainer, MainLayoutWrapper } from './MainLayout.styles';
import { LayoutHandle } from './MainLayout.types';

export const MainLayout = () => {
    /**
     * Get the current route matches.
     */
    const matches = useMatches();

    // Find nearest route that defines layout config
    const layoutHandle = [...matches]
        .reverse()
        .find(
            (m): m is typeof m & { handle: LayoutHandle } =>
                typeof m.handle === 'object' &&
                m.handle !== null &&
                'layout' in m.handle,
        )?.handle.layout;

    /**
     * Determine if the navbar should be shown and page containerization.
     */
    const showNavbar = layoutHandle?.showNavbar ?? true;
    const isContainerized = layoutHandle?.isContainerized ?? true;

    return (
        <MainLayoutWrapper>
            {showNavbar && <Navbar />}
            {isContainerized ? (
                <MainContainer>
                    <Outlet />
                </MainContainer>
            ) : (
                <Outlet />
            )}
        </MainLayoutWrapper>
    );
};
