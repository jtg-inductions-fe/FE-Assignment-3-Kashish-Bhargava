import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { FilterAccordion } from '@components';
import { Button } from '@components';
import { ROUTES } from '@constant';

import { MovieFilterDesktopProps } from './MovieFiltersDesktop.types';

export const MovieFiltersDesktop = (props: MovieFilterDesktopProps) => {
    //Props
    const {
        availableLanguages,
        availableGenres,
        selectedLanguages,
        selectedGenres,
        setSelectedLanguages,
        setSelectedGenres,
    } = props;

    //Filter Configuration
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

    //Navigation
    const navigate = useNavigate();

    //Reset all applied filters
    const handleReset = () => {
        setSelectedLanguages([]);
        setSelectedGenres([]);
    };

    return (
        <Box
            marginBottom={12}
            display={'flex'}
            flexDirection={'column'}
            gap={12}
        >
            {/*Header Section*/}
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography variant="h2">Filters</Typography>
                <Button onClick={handleReset} variant="text">
                    Clear All
                </Button>
            </Box>
            {/*Filter Accordion*/}
            {filterConfig.map(
                ({ id, title, options, selectedValues, setSelectedValues }) => (
                    <FilterAccordion
                        key={id}
                        title={title}
                        options={options}
                        selectedValues={selectedValues}
                        setSelectedValues={setSelectedValues}
                    />
                ),
            )}
            {/*Browse by cinemas button*/}
            <Button
                variant="outlined"
                onClick={() => void navigate(ROUTES.CINEMAS)}
            >
                Browse by Cinemas
            </Button>
        </Box>
    );
};
