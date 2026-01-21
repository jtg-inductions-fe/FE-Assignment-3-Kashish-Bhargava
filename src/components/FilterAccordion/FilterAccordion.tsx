import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Stack, Typography } from '@mui/material';

import {
    FilterChip,
    StyledAccordion,
    StyledAccordionDetails,
} from './FilterAccordion.styles';
import { FilterAccordionProps } from './FilterAccordion.types';

export const FilterAccordion = (props: FilterAccordionProps) => {
    //Props
    const { title, options, selectedValues, setSelectedValues } = props;

    //Toggle selection
    const toggleValue = (value: string) =>
        selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

    return (
        <StyledAccordion defaultExpanded disableGutters>
            {/*Accordion Header*/}
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            {/*Accordion Content*/}
            <StyledAccordionDetails>
                <Stack direction="row" flexWrap="wrap" gap={8}>
                    {options.map((option) => {
                        const isSelected = selectedValues.includes(option);

                        return (
                            <FilterChip
                                key={option}
                                label={option}
                                clickable
                                color={isSelected ? 'primary' : 'default'}
                                variant={isSelected ? 'filled' : 'outlined'}
                                onClick={() =>
                                    setSelectedValues(toggleValue(option))
                                }
                            />
                        );
                    })}
                </Stack>
            </StyledAccordionDetails>
        </StyledAccordion>
    );
};
