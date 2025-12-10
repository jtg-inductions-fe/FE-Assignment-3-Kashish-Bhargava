/*This routing setup follows a configuration-driven approach where all routes are defined in a single routeConfig file. 
Each route specifies details like its path, element, layout, guard, and errorElement. 
The wrapWithGuards function automatically applies route protection based on the guard type — wrapping routes with ProtectedRoute for authenticated users,
NonProtectedRoute for unauthenticated users, and leaving public routes open to all. Using createBrowserRouter,
the app dynamically maps these configurations to create both nested and standalone routes like NotFound*/

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
        layout: MainLayout,
        errorElement: ErrorPage,
        routes: [
            { index: true, element: Home },
            { path: ROUTES.MOVIES, element: MovieList },
            { path: ROUTES.MOVIE_DETAIL, element: MovieDetail },
            { path: ROUTES.CINEMAS, element: CinemaList },
            { path: ROUTES.CINEMA_MOVIE_SLOTS, element: CinemaMovieSlot },
            { path: ROUTES.MOVIE_CINEMA_SLOTS, element: MovieCinemaSlot },
        ],
    },

    // Non-Protected Routes (only for unauthenticated users)
    {
        layout: AuthLayout,
        guard: 'nonProtected',
        errorElement: ErrorPage,
        routes: [
            { path: ROUTES.LOGIN, element: Login },
            { path: ROUTES.SIGNUP, element: Signup },
        ],
    },

    // Protected Routes (only for authenticated users)
    {
        layout: MainLayout,
        guard: 'protected',
        errorElement: ErrorPage,
        routes: [
            { path: ROUTES.PROFILE, element: Profile },
            { path: ROUTES.BOOK_SEATS, element: SeatBooking },
            { path: ROUTES.PURCHASE_HISTORY, element: PurchaseHistory },
        ],
    },

    // Catch all routes other than the defined routes
    {
        path: ROUTES.NOTFOUND,
        element: NotFound,
    },
    //Only for developing ErrorPage (will be removed later)
    {
        path: ROUTES.ERROR,
        element: ErrorPage,
    },
];
