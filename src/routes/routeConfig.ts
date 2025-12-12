/*This routing setup follows a configuration-driven approach where all routes are defined in a single routeConfig file. 
Each route specifies details like its path, element, layout, guard, and errorElement. 
The wrapWithGuards function automatically applies route protection based on the guard type — wrapping routes with ProtectedRoute for authenticated users,
NonProtectedRoute for unauthenticated users, and leaving public routes open to all. Using createBrowserRouter,
the app dynamically maps these configurations to create both nested and standalone routes like NotFound*/

import { withLayout } from 'hoc/WithLayout';

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
    // Public Routes
    {
        errorElement: ErrorPage,
        routes: [
            {
                index: true,
                element: withLayout(MainLayout)(Home),
            },
            { path: ROUTES.MOVIES, element: withLayout(MainLayout)(MovieList) },
            {
                path: ROUTES.MOVIE_DETAIL,
                element: withLayout(MainLayout, {
                    showNavbar: true,
                    isContainerized: false,
                })(MovieDetail),
            },
            {
                path: ROUTES.CINEMAS,
                element: withLayout(MainLayout)(CinemaList),
            },
            {
                path: ROUTES.CINEMA_MOVIE_SLOTS,
                element: withLayout(MainLayout)(CinemaMovieSlot),
            },
            {
                path: ROUTES.MOVIE_CINEMA_SLOTS,
                element: withLayout(MainLayout)(MovieCinemaSlot),
            },
        ],
    },

    // Non-Protected Routes (only for unauthenticated users)
    {
        guard: 'nonProtected',
        errorElement: ErrorPage,
        routes: [
            { path: ROUTES.LOGIN, element: withLayout(AuthLayout)(Login) },
            { path: ROUTES.SIGNUP, element: withLayout(AuthLayout)(Signup) },
        ],
    },

    // Protected Routes (only for authenticated users)
    {
        guard: 'protected',
        errorElement: ErrorPage,
        routes: [
            { path: ROUTES.PROFILE, element: withLayout(MainLayout)(Profile) },
            {
                path: ROUTES.BOOK_SEATS,
                element: withLayout(MainLayout, {
                    showNavbar: false,
                    isContainerized: true,
                })(SeatBooking),
            },
            {
                path: ROUTES.PURCHASE_HISTORY,
                element: withLayout(MainLayout)(PurchaseHistory),
            },
        ],
    },

    // Catch all routes other than the defined routes
    {
        path: ROUTES.NOTFOUND,
        element: NotFound,
    },
];
