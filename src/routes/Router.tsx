import { createBrowserRouter, Outlet } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@layouts';

import { NonProtectedRoute } from './NonProtectedRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { RouteConfig } from './route.types';
import { routeConfig } from './routeConfig';

const wrapWithGuards = (config: RouteConfig) => {
    if (config.guard === 'protected') {
        return (
            <ProtectedRoute>
                <Outlet />
            </ProtectedRoute>
        );
    }
    if (config.guard === 'nonProtected') {
        return (
            <NonProtectedRoute>
                <Outlet />
            </NonProtectedRoute>
        );
    }

    return <Outlet />;
};

export const router = createBrowserRouter(
    routeConfig.map((config) => {
        const guardElement = wrapWithGuards(config);

        // Auth routes
        if (config.guard === 'nonProtected') {
            return {
                element: <AuthLayout />,
                children: [
                    {
                        element: guardElement,
                        children: config.routes?.map((r) => ({
                            path: r.path,
                            index: r.index,
                            element: <r.element />,
                        })),
                    },
                ],
            };
        }

        // Main app routes
        if (config.routes) {
            return {
                element: <MainLayout />,
                errorElement: config.errorElement && <config.errorElement />,
                children: [
                    {
                        element: guardElement,
                        children: config.routes.map((r) => ({
                            path: r.path,
                            index: r.index,
                            element: <r.element />,
                            handle: r.handle,
                        })),
                    },
                ],
            };
        }

        // Standalone routes
        return {
            path: config.path,
            element: config.element && <config.element />,
        };
    }),
);
