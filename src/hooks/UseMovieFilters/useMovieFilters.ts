import { useMemo } from 'react';

import { UseMovieFiltersParams } from './useMovieFilters.types';

//useMovieFilters hook used by both desktop and mobile movie filters.
export const useMovieFilters = (props: UseMovieFiltersParams) => {
    const {
        availableLanguages,
        availableGenres,
        selectedGenres,
        selectedLanguages,
        setSelectedGenres,
        setSelectedLanguages,
    } = props;
    const filterConfig = useMemo(
        () => [
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
        ],
        [
            availableLanguages,
            availableGenres,
            selectedLanguages,
            selectedGenres,
            setSelectedLanguages,
            setSelectedGenres,
        ],
    );

    return { filterConfig };
};
