import { useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Typography } from '@mui/material';

import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    ClearAllButton,
    FiltersContainer,
    FiltersHeader,
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
            <Button
                variant="outlined"
                onClick={() => void navigate(ROUTES.CINEMAS)}
            >
                Browse by Cinemas
            </Button>
        </FiltersContainer>
    );
};
