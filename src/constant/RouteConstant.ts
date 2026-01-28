/**
 * Route constants.
 */
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    PROFILE: '/profile',

    MOVIES: '/movies',
    MOVIE_DETAIL: '/movies/:slug',
    MOVIE_CINEMA_SLOTS: '/movies/:slug/slots',

    CINEMAS: '/cinemas',
    CINEMA_MOVIE_SLOTS: '/cinemas/:slug/slots',
    BOOK_SEATS: '/cinemas/:cinemaId/slots/:slotId/seats',

    PURCHASE_HISTORY: '/bookings/history',

    NOTFOUND: '*',
} as const;
