import { Component, ErrorInfo, ReactNode } from 'react';

import { Typography } from '@mui/material';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

/**
 * Error boundary component for catching and handling errors in child components.
 */
export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    public state: ErrorBoundaryState = { hasError: false };

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        //eslint-disable-next-line no-console
        console.error(
            'ErrorBoundary caught an error in a child component:',
            error,
        );

        return { hasError: true };
    }

    /** Logs error details in development mode */
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Development logging
        if (import.meta.env.DEV) {
            //eslint-disable-next-line no-console
            console.error('ErrorBoundary detail:', error, errorInfo);
        }
    }

    /**
     * Renders the default fallback UI when an error occurs.
     * @returns The fallback UI to display.
     */
    private renderDefaultFallback(): ReactNode {
        return (
            <Typography variant="h4" align="center" mt={4}>
                Something went wrong. Please try again later.
            </Typography>
        );
    }

    /**
     * Renders the fallback UI when an error occurs.
     * @returns The fallback UI to display.
     */
    public render() {
        if (this.state.hasError) {
            return this.props.fallback ?? this.renderDefaultFallback();
        }

        return this.props.children;
    }
}
