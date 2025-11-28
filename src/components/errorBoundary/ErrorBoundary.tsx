import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

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

    public render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
