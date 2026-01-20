import type { ReactNode } from 'react';

/**Props for configuring the MainLayout component */
export interface MainLayoutProps {
    /**Whether to display the navigation bar. Defaults to true */
    showNavbar?: boolean;
    /** Whether the inner content should be containerized (max-width) or full-width. Defaults to true. */
    isContainerized?: boolean;
    /**Children components to be rendered within the layout */
    children?: ReactNode;
}

/**
 * Layout configuration options for routes.
 */
export interface LayoutHandle {
    layout?: {
        /**Whether to display the navigation bar. Defaults to true */
        showNavbar?: boolean;
        /** Whether the inner content should be containerized (max-width) or full-width. Defaults to true. */
        isContainerized?: boolean;
    };
}
