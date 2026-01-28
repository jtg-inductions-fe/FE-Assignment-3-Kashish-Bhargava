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
}
