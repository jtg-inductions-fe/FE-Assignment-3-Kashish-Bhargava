import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Typography } from '@mui/material';

import { Button } from '@components';

import {
    FiltersContainer,
    FiltersHeader,
    FilterTitle,
    StyledAccordion,
    StyledAccordionDetails,
    StyledCheckbox,
    StyledFormControlLabel,
} from './MovieFiltersDesktop.styles';
import { MovieFilterDesktopProps } from './MovieFiltersDesktop.types';

export const MovieFiltersDesktop = ({
    availableLanguages,
    availableGenres,
    selectedLanguages,
    selectedGenres,
    setSelectedLanguages,
    setSelectedGenres,
}: MovieFilterDesktopProps) => {
    const toggleValue = (list: string[], value: string) =>
        list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];

    const handleReset = () => {
        setSelectedLanguages([]);
        setSelectedGenres([]);
    };

    return (
        <FiltersContainer>
            <FiltersHeader>
                <FilterTitle>Filters</FilterTitle>
                <Button onClick={handleReset}>Clear All</Button>
            </FiltersHeader>

            <StyledAccordion defaultExpanded disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Languages</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    {availableLanguages.map((lang) => (
                        <StyledFormControlLabel
                            key={lang}
                            control={
                                <StyledCheckbox
                                    checked={selectedLanguages.includes(lang)}
                                    onChange={() =>
                                        setSelectedLanguages(
                                            toggleValue(
                                                selectedLanguages,
                                                lang,
                                            ),
                                        )
                                    }
                                />
                            }
                            label={lang}
                        />
                    ))}
                </StyledAccordionDetails>
            </StyledAccordion>

            <StyledAccordion defaultExpanded disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Genres</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    {availableGenres.map((genre) => (
                        <StyledFormControlLabel
                            key={genre}
                            control={
                                <StyledCheckbox
                                    checked={selectedGenres.includes(genre)}
                                    onChange={() =>
                                        setSelectedGenres(
                                            toggleValue(selectedGenres, genre),
                                        )
                                    }
                                />
                            }
                            label={genre}
                        />
                    ))}
                </StyledAccordionDetails>
            </StyledAccordion>
        </FiltersContainer>
    );
};
