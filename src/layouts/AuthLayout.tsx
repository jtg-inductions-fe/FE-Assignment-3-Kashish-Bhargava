import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
    <>
        <h1>AuthLayout</h1>
        <main>
            <Outlet />
        </main>
    </>
);
