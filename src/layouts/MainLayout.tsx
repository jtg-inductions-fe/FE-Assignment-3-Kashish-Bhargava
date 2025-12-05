import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
    <>
        <header>Navbar</header>
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
);
