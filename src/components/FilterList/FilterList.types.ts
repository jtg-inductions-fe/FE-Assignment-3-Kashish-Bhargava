//Reusable mobile filter list
export interface FilterListProps {
    //List Title
    title: string;
    //List of Available filter options
    options: string[];
    //Currently selected values
    selectedValues: string[];
    //Setter for selected values
    setSelectedValues: (values: string[]) => void;
}
