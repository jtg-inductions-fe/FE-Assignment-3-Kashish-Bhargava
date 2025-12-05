// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {
//     Accordion,
//     AccordionDetails,
//     AccordionSummary,
//     Box,
//     Button,
//     Checkbox,
//     FormControlLabel,
//     Typography,
// } from '@mui/material';

// interface Props {
//     availableLanguages: string[];
//     availableGenres: string[];
//     selectedLanguages: string[];
//     selectedGenres: string[];
//     setSelectedLanguages: (langs: string[]) => void;
//     setSelectedGenres: (genres: string[]) => void;
// }

// export const MovieFiltersDesktop = ({
//     availableLanguages,
//     availableGenres,
//     selectedLanguages,
//     selectedGenres,
//     setSelectedLanguages,
//     setSelectedGenres,
// }: Props) => {
//     const toggleValue = (list: string[], value: string) =>
//         list.includes(value)
//             ? list.filter((v) => v !== value)
//             : [...list, value];

//     const handleReset = () => {
//         setSelectedLanguages([]);
//         setSelectedGenres([]);
//     };

//     return (
//         <Box mb={3}>
//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//             >
//                 <Typography variant="h6">Filters</Typography>
//                 <Button onClick={handleReset}>Clear All</Button>
//             </Box>

//             <Accordion defaultExpanded sx={{backgroundColor:'#fff',p:2}}>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography>Languages</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     {availableLanguages.map((lang) => (
//                         <FormControlLabel
//                             key={lang}
//                             control={
//                                 <Checkbox
//                                     checked={selectedLanguages.includes(lang)}
//                                     onChange={() =>
//                                         setSelectedLanguages(
//                                             toggleValue(
//                                                 selectedLanguages,
//                                                 lang,
//                                             ),
//                                         )
//                                     }
//                                 />
//                             }
//                             label={lang}
//                         />
//                     ))}
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion defaultExpanded sx={{backgroundColor:'#fff',p:2}}>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography>Genres</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     {availableGenres.map((genre) => (
//                         <FormControlLabel
//                             key={genre}
//                             control={
//                                 <Checkbox
//                                     checked={selectedGenres.includes(genre)}
//                                     onChange={() =>
//                                         setSelectedGenres(
//                                             toggleValue(selectedGenres, genre),
//                                         )
//                                     }
//                                 />
//                             }
//                             label={genre}
//                         />
//                     ))}
//                 </AccordionDetails>
//             </Accordion>
//         </Box>
//     );
// };
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
                <FilterTitle variant="h6">Filters</FilterTitle>
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
