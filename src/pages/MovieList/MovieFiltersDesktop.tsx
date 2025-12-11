import { useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Stack, Typography } from '@mui/material';

import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    ClearAllButton,
    FilterChip,
    FiltersContainer,
    FiltersHeader,
    StyledAccordion,
    StyledAccordionDetails,
} from './MovieFiltersDesktop.styles';
import { MovieFilterDesktopProps } from './MovieFiltersDesktop.types';

export const MovieFiltersDesktop = (props: MovieFilterDesktopProps) => {
    const {
        availableLanguages,
        availableGenres,
        selectedLanguages,
        selectedGenres,
        setSelectedLanguages,
        setSelectedGenres,
    } = props;

    const toggleValue = (list: string[], value: string) =>
        list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];

    const handleReset = () => {
        setSelectedLanguages([]);
        setSelectedGenres([]);
    };

    const navigate = useNavigate();

    return (
        <FiltersContainer>
            <FiltersHeader>
                <Typography variant="h2">Filters</Typography>
                <ClearAllButton onClick={handleReset}>Clear All</ClearAllButton>
            </FiltersHeader>

            <StyledAccordion defaultExpanded disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Languages</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <Stack direction="row" flexWrap="wrap" gap={8}>
                        {availableLanguages.map((lang) => {
                            const isSelected = selectedLanguages.includes(lang);
                            return (
                                <FilterChip
                                    key={lang}
                                    label={lang}
                                    clickable
                                    color={isSelected ? 'primary' : 'default'}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    onClick={() =>
                                        setSelectedLanguages(
                                            toggleValue(
                                                selectedLanguages,
                                                lang,
                                            ),
                                        )
                                    }
                                />
                            );
                        })}
                    </Stack>
                </StyledAccordionDetails>
            </StyledAccordion>

            <StyledAccordion defaultExpanded disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Genres</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <Stack direction="row" flexWrap="wrap" gap={8}>
                        {availableGenres.map((genre) => {
                            const isSelected = selectedGenres.includes(genre);
                            return (
                                <FilterChip
                                    key={genre}
                                    label={genre}
                                    clickable
                                    color={isSelected ? 'primary' : 'default'}
                                    variant={isSelected ? 'filled' : 'outlined'}
                                    onClick={() =>
                                        setSelectedGenres(
                                            toggleValue(selectedGenres, genre),
                                        )
                                    }
                                />
                            );
                        })}
                    </Stack>
                </StyledAccordionDetails>
            </StyledAccordion>
            <Button
                variant="outlined"
                onClick={() => void navigate(ROUTES.CINEMAS)}
            >
                Browse by Cinemas
            </Button>
        </FiltersContainer>
    );
};
