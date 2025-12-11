import { Accordion, AccordionDetails, Box, Chip, styled } from '@mui/material';

import { Button } from '@components';

export const FiltersContainer = styled(Box)(({ theme: { spacing } }) => ({
    marginBottom: spacing(12),
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(12),
}));

export const FiltersHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const ClearAllButton = styled(Button)(() => ({
    padding: 0,
}));

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
            borderRadius: { button: borderRadiusButton },
        },
    }) => ({
        borderRadius: borderRadiusButton,
    }),
);
