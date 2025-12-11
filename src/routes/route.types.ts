import type { ComponentType } from 'react';

/**
 * Represents a single child route inside a parent route group.
 */
export interface ChildRoute {
    /** If true, this is the default route (no path needed) */
    index?: boolean;

    /** The URL path for this route */
    path?: string;

    /** The React component to render for this route */
    element: ComponentType;
}

/**
 * Defines a route group — can include layout, guards, and multiple child routes.
 * Used to structure routes by access level and layout.
 */
export interface RouteConfig {
    /** Type of guard — 'protected' for logged-in users, 'nonProtected' for guests */
    guard?: 'protected' | 'nonProtected';

    /** Error boundary component for this route group */
    errorElement?: ComponentType;

    /** List of child routes rendered inside this layout */
    routes?: ChildRoute[];

    /** Optional direct path (for standalone routes like 404) */
    path?: string;

    /** Component to render for standalone routes */
    element?: ComponentType;
}
