import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
    children: ReactNode;
    /** Fallback component to render on error (e.g., 500 error page) */
    fallback?: ReactNode;
};

export type ErrorBoundaryState = {
    hasError: boolean;
};
