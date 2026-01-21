/**
 * Props for the mobile movie filters drawer component.
 */
export interface MovieFiltersMobileProps {
    /**
     * Controls whether the filter drawer is open or closed.
     */
    open: boolean;
    /**
     * Callback to close the drawer.
     */
    onClose: () => void;
    /**
     * List of available language options fetched from the API.
     */
    availableLanguages: string[];
    /**
     * List of available genre options fetched from the API.
     */
    availableGenres: string[];
    /**
     * Currently selected languages chosen by the user.
     */
    selectedLanguages: string[];
    /**
     * Currently selected genres chosen by the user.
     */
    selectedGenres: string[];
    /**
     * Function to update the selected languages list.
     */
    setSelectedLanguages: (langs: string[]) => void;
    /**
     * Function to update the selected genres list.
     */
    setSelectedGenres: (genres: string[]) => void;
    /**
     * Triggered when the user clicks the "Apply" button to confirm selected filters.
     */
    onApply: () => void;
    /**
     * Triggered when the user clicks the "Reset" button to clear all applied filters.
     */
    onReset: () => void;
}
