//Reusable Accordion for filter options
export interface FilterAccordionProps {
    //Accordion title
    title: string;
    //List of available filter options
    options: string[];
    //Currently selected values
    selectedValues: string[];
    //Setter for selected values
    setSelectedValues: (values: string[]) => void;
}
