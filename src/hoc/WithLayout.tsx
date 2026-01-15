import React from 'react';

import type { ReactNode } from 'react';

/**
 * Higher-Order Component to wrap a page inside a layout.
 * Allows passing optional layout props like showNavbar or isContainerized.
 */
export const withLayout =
    /**
     *
     * @param Layout - Layout component
     * @param layoutProps - Props to be passed to the Layout component excluding children
     */
    //P: Props of the Page and L : Props of the Layout
    <P extends object, L extends { children?: ReactNode }>(
            Layout: React.ComponentType<L>,
            layoutProps?: Omit<L, 'children'>,
        ) =>
        /**
         *
         * @param Page - Page component
         * @returns - Wrapped component with layout
         */
        (Page: React.ComponentType<P>): React.FC<P> => {
            const WrappedComponent: React.FC<P> = (props) => (
                <Layout {...(layoutProps as L)}>
                    <Page {...props} />
                </Layout>
            );

            //For debugging
            WrappedComponent.displayName = `withLayout(${Page.displayName || Page.name || 'Component'})`;

            return WrappedComponent;
        };
