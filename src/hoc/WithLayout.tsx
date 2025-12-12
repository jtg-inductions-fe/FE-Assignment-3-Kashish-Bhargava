import React from 'react';

import type { ReactNode } from 'react';

/**
 * Higher-Order Component to wrap a page inside a layout.
 * Allows passing optional layout props like showNavbar or isContainerized.
 */
export const withLayout =
    <P extends object, L extends { children?: ReactNode }>(
        Layout: React.ComponentType<L>,
        layoutProps?: Omit<L, 'children'>,
    ) =>
    (Page: React.ComponentType<P>): React.FC<P> => {
        const WrappedComponent: React.FC<P> = (props) => (
            <Layout {...(layoutProps as L)}>
                <Page {...props} />
            </Layout>
        );

        WrappedComponent.displayName = `withLayout(${Page.displayName || Page.name || 'Component'})`;

        return WrappedComponent;
    };
