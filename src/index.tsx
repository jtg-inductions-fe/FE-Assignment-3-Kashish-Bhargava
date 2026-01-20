import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Provider } from 'react-redux';

import { store } from '@app/store';
import { ErrorBoundary } from '@components';
import { ErrorPage } from '@pages';
import { router } from '@routes';
import { theme } from '@theme';

import { AppInitializer } from './containers/AppInitializer';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <AppInitializer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ErrorBoundary fallback={<ErrorPage />}>
                    <RouterProvider router={router} />
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
