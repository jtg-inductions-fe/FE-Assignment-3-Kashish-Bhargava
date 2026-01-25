import { Slot } from '@models/slots';

/**
 * Props for the SlotGroup component
 */
export interface SlotGroupProps {
    /**Title of movie or cinema name*/
    title: string;
    /*Details of movie and cinema*/
    subtitle?: string;
    /**List of slots */
    slots: Slot[];
    /**unique identifier for cinema*/
    cinemaId: number;
    /**cinema name */
    cinemaName: string;
    /**movie name */
    movieName: string;
    /** selected slot date*/
    selectedDate: string;
    /**cinema location */
    cinemaLocation: string;
}
