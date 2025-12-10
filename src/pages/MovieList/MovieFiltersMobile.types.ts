export interface MovieFiltersMobileProps {
    open: boolean;
    onClose: () => void;
    availableLanguages: string[];
    availableGenres: string[];
    selectedLanguages: string[];
    selectedGenres: string[];
    setSelectedLanguages: (langs: string[]) => void;
    setSelectedGenres: (genres: string[]) => void;
    onApply: () => void;
    onReset: () => void;
}
