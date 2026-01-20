import { Box, Typography } from '@mui/material';

import { FilterList } from '@components';
import { Button } from '@components';

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

    //Filter configuration
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

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <Box display={'flex'} flexDirection={'column'} gap={16} padding={8}>
                {/*Drawer header*/}
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography variant="h2">Filters</Typography>
                    <Button onClick={onReset} variant="text">
                        Reset All
                    </Button>
                </Box>
                {/*Filter section*/}
                {filterConfig.map(
                    (
                        {
                            id,
                            options,
                            title,
                            selectedValues,
                            setSelectedValues,
                        },
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
                            {index < filterConfig.length - 1 && (
                                <StyledDivider />
                            )}
                        </Box>
                    ),
                )}
                {/*Apply filters button*/}
                <Button variant="contained" fullWidth onClick={onApply}>
                    Apply
                </Button>
            </Box>
        </StyledDrawer>
    );
};
