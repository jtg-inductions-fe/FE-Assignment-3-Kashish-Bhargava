import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Typography } from '@mui/material';

import {
    ClearButton,
    FiltersContainer,
    FiltersHeader,
    FilterTitle,
    StyledAccordion,
    StyledAccordionDetails,
    StyledCheckbox,
    StyledFormControlLabel,
} from './MovieFiltersDesktop.styles';

interface Props {
    availableLanguages: string[];
    availableGenres: string[];
    selectedLanguages: string[];
    selectedGenres: string[];
    setSelectedLanguages: (langs: string[]) => void;
    setSelectedGenres: (genres: string[]) => void;
}

export const MovieFiltersDesktop = ({
    availableLanguages,
    availableGenres,
    selectedLanguages,
    selectedGenres,
    setSelectedLanguages,
    setSelectedGenres,
}: Props) => {
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
                <ClearButton onClick={handleReset}>Clear All</ClearButton>
            </FiltersHeader>

            <StyledAccordion defaultExpanded>
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

            <StyledAccordion defaultExpanded>
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
