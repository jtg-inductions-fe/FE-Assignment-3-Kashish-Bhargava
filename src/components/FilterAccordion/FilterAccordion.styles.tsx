//Styled components for FilterAccordion
import { Accordion, AccordionDetails, Chip, styled } from '@mui/material';

export const StyledAccordion = styled(Accordion)(
    ({
        theme: {
            palette: {
                common: { white },
            },
            spacing,
            shadows,
        },
    }) => ({
        backgroundColor: white,
        padding: spacing(16),
        boxShadow: shadows[1],
    }),
);

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}));

export const FilterChip = styled(Chip)(
    ({
        theme: {
            shape: { borderRadius },
        },
    }) => ({
        borderRadius: borderRadius,
    }),
);
