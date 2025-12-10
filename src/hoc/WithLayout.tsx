import React from 'react';

/**
 * Higher-Order Component to wrap a page inside a layout.
 * Allows passing optional layout props like showNavbar or isContainerized.
 */
export const withLayout =
    <P extends object, L extends { children?: React.ReactNode }>(
        Layout: React.ComponentType<L>,
        layoutProps?: Omit<L, 'children'>,
    ) =>
    (Page: React.ComponentType<P>): React.FC<P> => {
        const WrappedComponent: React.FC<P> = (props) => (
            <Layout {...(layoutProps as L)}>
                <Page {...props} />
            </Layout>
        );

        return WrappedComponent;
    };
