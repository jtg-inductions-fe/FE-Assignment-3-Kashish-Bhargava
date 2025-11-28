import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constant';
import { MainLayout } from '@layouts';
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
import { NonProtectedRoute, ProtectedRoute } from '@routes';

export const router = createBrowserRouter([
    //Public routes
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: ROUTES.MOVIES, element: <MovieList /> },
            { path: ROUTES.MOVIE_DETAIL, element: <MovieDetail /> },
            { path: ROUTES.CINEMAS, element: <CinemaList /> },
            { path: ROUTES.CINEMA_MOVIE_SLOTS, element: <CinemaMovieSlot /> },
            { path: ROUTES.MOVIE_CINEMA_SLOTS, element: <MovieCinemaSlot /> },
        ],
    },
    //Auth Routes (Visible only to users not logged in)
    {
        element: <NonProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            { path: ROUTES.LOGIN, element: <Login /> },
            { path: ROUTES.SIGNUP, element: <Signup /> },
        ],
    },
    //Protected Routes
    {
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            { path: ROUTES.PROFILE, element: <Profile /> },
            { path: ROUTES.BOOK_SEATS, element: <SeatBooking /> },
            { path: ROUTES.PURCHASE_HISTORY, element: <PurchaseHistory /> },
        ],
    },
    //Not Found
    {
        path: '*',
        element: <NotFound />,
    },
]);
