import { Outlet } from 'react-router-dom';

import { Navbar } from '@components';

import { MainContainer, MainLayoutWrapper } from './MainLayout.styles';
import type { MainLayoutProps } from './MainLayout.types';

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
