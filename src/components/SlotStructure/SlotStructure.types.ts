/**
 * Props for the SlotStructure component
 */
export interface SlotStructureProps {
    /**Movie or event title*/
    title: string;
    /**Movie duration*/
    duration?: string;
    /**Movie genres */
    genres?: string[];
    /**Movie languages*/
    languages?: string[];
    /**Currently selected date*/
    selectedDate: string;
    /**Callback for date selection */
    onDateChange: (date: string) => void;
}
