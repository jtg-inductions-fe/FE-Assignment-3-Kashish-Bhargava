export interface MovieFilterDesktopProps {
    availableLanguages: string[];
    availableGenres: string[];
    selectedLanguages: string[];
    selectedGenres: string[];
    setSelectedLanguages: (langs: string[]) => void;
    setSelectedGenres: (genres: string[]) => void;
}
