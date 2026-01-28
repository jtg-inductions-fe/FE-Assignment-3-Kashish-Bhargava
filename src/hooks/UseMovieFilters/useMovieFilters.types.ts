/**
 * Props for the desktop and mobile movie filters section.
 */
export interface UseMovieFiltersParams {
    /**List of available languages to filter movies by.*/
    availableLanguages: string[];
    /**List of available genres to filter movies by.*/
    availableGenres: string[];
    /**Languages currently selected by the user. */
    selectedLanguages: string[];
    /**Genres currently selected by the user. */
    selectedGenres: string[];
    /** Function to update the selected languages. */
    setSelectedLanguages: (langs: string[]) => void;
    /** Function to update the selected genres. */
    setSelectedGenres: (genres: string[]) => void;
}
