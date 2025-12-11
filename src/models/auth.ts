import type { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/**Snackbar state type used for showing success or error messages */
export interface SnackbarState {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
}

/** Union type for possible error types returned by RTK Query */
export type AuthError = FetchBaseQueryError | SerializedError;

/**Error type that also includes extra details sent by the backend. */
export type BackendError = FetchBaseQueryError & {
    data?: Record<string, unknown>;
};
