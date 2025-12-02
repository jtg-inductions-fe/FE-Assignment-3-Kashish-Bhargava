import type { ComponentType } from 'react';

interface ChildRoute {
    index?: boolean;
    path?: string;
    element: ComponentType;
}

export interface RouteConfig {
    layout?: ComponentType;
    guard?: 'protected' | 'nonProtected';
    errorElement?: ComponentType;
    routes?: ChildRoute[];
    path?: string;
    element?: ComponentType;
}
