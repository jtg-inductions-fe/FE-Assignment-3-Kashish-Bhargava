import { Slot } from '@models/slots';

/**
 * Movie along with its available slots
 */
export interface MovieWithSlots {
    /**Unique movie id */
    id: number;
    /**Movie name */
    name: string;
    /**Movie duration */
    duration: string;
    /**Language in which movie is available */
    languages: string[];
    /**Movie genres */
    genres: string[];
    /**Available slots for a movie */
    slots: Slot[];
}

/** Response for Cinema Movie slots */
export type CinemaMovieSlotResponse = MovieWithSlots[];

/**Cinema along with its available slots */
export interface CinemaWithSlots {
    /**Unique cinema id */
    id: number;
    /**Cinema name */
    name: string;
    /**Cinema location */
    location: string;
    /**Available slots in cinema */
    slots: Slot[];
}

/** Response for Movie Cinema slots */
export type MovieCinemaSlotResponse = CinemaWithSlots[];

/** Common query args */
export interface SlotQueryArgs {
    /*Selected date*/
    date?: string;
}

/**Query args for fetching slots of a movie in different cinemas */
export type MovieCinemaSlotArgs = {
    /**Movie id*/
    movieId: number;
} & SlotQueryArgs;

/**Query args for fetching slots of a cinema for different movies */
export type CinemaMovieSlotArgs = {
    /**Cinema id*/
    cinemaId: number;
} & SlotQueryArgs;
