import { Outlet } from 'react-router-dom';

import { Navbar } from '@components';

import { MainContainer, MainLayoutWrapper } from './MainLayout.styles';

export const MainLayout = () => (
    <MainLayoutWrapper>
        <Navbar />
        <MainContainer>
            <Outlet />
        </MainContainer>
    </MainLayoutWrapper>
);
