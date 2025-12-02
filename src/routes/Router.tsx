import { createBrowserRouter } from 'react-router-dom';

import {
    NonProtectedRoute,
    ProtectedRoute,
    RouteConfig,
    routeConfig,
} from '@routes';

const wrapWithGuards = (config: RouteConfig) => {
    if (config.guard === 'protected') {
        return <ProtectedRoute />;
    }
    if (config.guard === 'nonProtected') {
        return <NonProtectedRoute />;
    }
    return config.layout ? <config.layout /> : undefined;
};

export const router = createBrowserRouter(
    routeConfig.map((config: RouteConfig) => {
        const element = wrapWithGuards(config);

        // If it has child routes
        if (config.routes) {
            return {
                path: config.path,
                element,
                errorElement: config.errorElement && <config.errorElement />,
                children: config.routes.map((r) => ({
                    index: r.index,
                    path: r.path,
                    element: <r.element />,
                })),
            };
        }

        // If it’s a standalone route
        return {
            path: config.path,
            element: config.element ? <config.element /> : undefined,
        };
    }),
);
