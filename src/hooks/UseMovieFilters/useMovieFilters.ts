import { UseMovieFiltersParams } from './useMovieFilters.types';

export const useMovieFilters = (props: UseMovieFiltersParams) => {
    const {
        availableLanguages,
        availableGenres,
        selectedGenres,
        selectedLanguages,
        setSelectedGenres,
        setSelectedLanguages,
    } = props;
    const filterConfig = [
        {
            id: 'languages',
            title: 'Languages',
            options: availableLanguages,
            selectedValues: selectedLanguages,
            setSelectedValues: setSelectedLanguages,
        },
        {
            id: 'genres',
            title: 'Genres',
            options: availableGenres,
            selectedValues: selectedGenres,
            setSelectedValues: setSelectedGenres,
        },
    ];

    return { filterConfig };
};
