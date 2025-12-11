import { Outlet } from 'react-router-dom';

import { Navbar } from '@components';

import { MainContainer, MainLayoutWrapper } from './MainLayout.styles';
import type { MainLayoutProps } from './MainLayout.types';

export const MainLayout = (props: MainLayoutProps) => {
    const { showNavbar = true, isContainerized = true, children } = props;
    const Wrapper = isContainerized ? MainContainer : MainLayoutWrapper;

    return (
        <MainLayoutWrapper>
            {showNavbar && <Navbar />}
            <Wrapper>{children || <Outlet />}</Wrapper>
        </MainLayoutWrapper>
    );
};
