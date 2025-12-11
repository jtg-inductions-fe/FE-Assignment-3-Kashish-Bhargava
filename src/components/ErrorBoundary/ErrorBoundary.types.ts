import { ReactNode } from 'react';

/**
 * Props for the ErrorBoundary component.
 * @property children - The child components to be wrapped by the ErrorBoundary.
 * @property fallback - Optional fallback component to render when an error is caught.
 */
export type ErrorBoundaryProps = {
    children: ReactNode;
    fallback?: ReactNode;
};

/**
 * State for the ErrorBoundary component.
 * @property hasError - Indicates whether an error has been caught.
 */
export type ErrorBoundaryState = {
    hasError: boolean;
};
