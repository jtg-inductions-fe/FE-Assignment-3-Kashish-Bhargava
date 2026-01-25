// /*This routing setup follows a configuration-driven approach where all routes are defined in a single routeConfig file.
// Each route specifies details like its path, element, layout, guard, and errorElement.
// The wrapWithGuards function automatically applies route protection based on the guard type — wrapping routes with ProtectedRoute for authenticated users,
// NonProtectedRoute for unauthenticated users, and leaving public routes open to all. Using createBrowserRouter,
// the app dynamically maps these configurations to create both nested and standalone routes like NotFound*/

import { ROUTES } from '@constant';
import { AuthLayout, MainLayout } from '@layouts';
import {
    CinemaList,
    CinemaMovieSlot,
    ErrorPage,
    Home,
    Login,
    MovieCinemaSlot,
    MovieDetail,
    MovieList,
    NotFound,
    Profile,
    PurchaseHistory,
    SeatBooking,
    Signup,
} from '@pages';

import type { RouteConfig } from './route.types';

export const routeConfig: RouteConfig[] = [
    /**
     * Public routes using MainLayout
     */
    {
        element: MainLayout,
        errorElement: ErrorPage,
        routes: [
            {
                index: true,
                element: Home,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
            {
                path: ROUTES.MOVIES,
                element: MovieList,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
            {
                path: ROUTES.MOVIE_DETAIL,
                element: MovieDetail,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: false,
                    },
                },
            },
            {
                path: ROUTES.CINEMAS,
                element: CinemaList,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
            {
                path: ROUTES.CINEMA_MOVIE_SLOTS,
                element: CinemaMovieSlot,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
            {
                path: ROUTES.MOVIE_CINEMA_SLOTS,
                element: MovieCinemaSlot,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
        ],
    },

    /**
     * Non-protected routes (AuthLayout)
     */
    {
        guard: 'nonProtected',
        element: AuthLayout,
        errorElement: ErrorPage,
        routes: [
            {
                path: ROUTES.LOGIN,
                element: Login,
            },
            {
                path: ROUTES.SIGNUP,
                element: Signup,
            },
        ],
    },

    /**
     * Protected routes (MainLayout)
     */
    {
        guard: 'protected',
        element: MainLayout,
        errorElement: ErrorPage,
        routes: [
            {
                path: ROUTES.PROFILE,
                element: Profile,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
            {
                path: ROUTES.BOOK_SEATS,
                element: SeatBooking,
                handle: {
                    layout: {
                        showNavbar: false,
                        isContainerized: false,
                    },
                },
            },
            {
                path: ROUTES.PURCHASE_HISTORY,
                element: PurchaseHistory,
                handle: {
                    layout: {
                        showNavbar: true,
                        isContainerized: true,
                    },
                },
            },
        ],
    },

    /**
     * Fallback route
     */
    {
        path: ROUTES.NOTFOUND,
        element: NotFound,
    },
];
