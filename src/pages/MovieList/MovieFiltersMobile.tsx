import { Box, Typography } from '@mui/material';

import { Button, FilterList } from '@components';
import { useMovieFilters } from '@hooks/UseMovieFilters';

import { StyledDivider, StyledDrawer } from './MovieFiltersMobile.styles';
import { MovieFiltersMobileProps } from './MovieFiltersMobile.types';

export const MovieFiltersMobile = (props: MovieFiltersMobileProps) => {
    //Props
    const {
        open,
        onClose,
        availableLanguages,
        availableGenres,
        selectedLanguages,
        selectedGenres,
        setSelectedLanguages,
        setSelectedGenres,
        onApply,
        onReset,
    } = props;

    //Custom Hook for movie filters
    const { filterConfig } = useMovieFilters({
        availableGenres,
        availableLanguages,
        selectedGenres,
        selectedLanguages,
        setSelectedGenres,
        setSelectedLanguages,
    });

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            {/*Drawer header*/}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h2">Filters</Typography>
                <Button onClick={onReset} variant="text">
                    Reset All
                </Button>
            </Box>
            {/*Filter section*/}
            {filterConfig.map(
                (
                    { id, options, title, selectedValues, setSelectedValues },
                    index,
                ) => (
                    <Box key={id}>
                        {/*FilterList component*/}
                        <FilterList
                            title={title}
                            options={options}
                            selectedValues={selectedValues}
                            setSelectedValues={setSelectedValues}
                        />
                        {index < filterConfig.length - 1 && <StyledDivider />}
                    </Box>
                ),
            )}
            {/*Apply filters button*/}
            <Button variant="contained" fullWidth onClick={onApply}>
                Apply
            </Button>
        </StyledDrawer>
    );
};
