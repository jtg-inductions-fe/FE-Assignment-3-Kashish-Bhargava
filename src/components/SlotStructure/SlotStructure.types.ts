export interface SlotStructureProps {
    title: string;
    duration?: string;
    genres?: string[];
    languages?: string[];
    selectedDate: string;
    onDateChange: (date: string) => void;
}
