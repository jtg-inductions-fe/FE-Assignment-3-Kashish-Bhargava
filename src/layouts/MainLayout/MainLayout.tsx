import { Outlet } from 'react-router-dom';

import { Navbar } from '@components';

import { MainContainer, MainLayoutWrapper } from './MainLayout.styles';
import type { MainLayoutProps } from './MainLayout.types';

/**
 * Main layout component for displaying the main application layout.
 * @param props - Props for the main layout component.
 * @returns The rendered main layout component.
 */
export const MainLayout = (props: MainLayoutProps) => {
    const { showNavbar = true, isContainerized = true, children } = props;

    return (
        <MainLayoutWrapper>
            {showNavbar && <Navbar />}
            {isContainerized ? (
                <MainContainer>{children || <Outlet />}</MainContainer>
            ) : (
                children || <Outlet />
            )}
        </MainLayoutWrapper>
    );
};
