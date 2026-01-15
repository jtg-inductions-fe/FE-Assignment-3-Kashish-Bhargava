import { Slot } from '@models/slots';

export interface MovieWithSlots {
    id: number;
    name: string;
    duration: string;
    languages: string[];
    genres: string[];
    slots: Slot[];
}

/** Response for Cinema Movie slots */
export type CinemaMovieSlotResponse = MovieWithSlots[];

export interface CinemaWithSlots {
    id: number;
    name: string;
    location: string;
    slots: Slot[];
}

/** Response for Movie Cinema slots */
export type MovieCinemaSlotResponse = CinemaWithSlots[];

/** Common query args */
export interface SlotQueryArgs {
    date: string;
}

export type MovieCinemaSlotArgs = {
    movieId: number;
} & SlotQueryArgs;

export type CinemaMovieSlotArgs = {
    cinemaId: number;
} & SlotQueryArgs;
