import {
    Accordion,
    AccordionDetails,
    Box,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Button } from '@components';

export const FiltersContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(12),
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
        padding: spacing(8),
        boxShadow: shadows[1],
    }),
);

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
    marginLeft: 0,
}));

export const StyledCheckbox = styled(Checkbox)(({ theme: { spacing } }) => ({
    padding: spacing(4, 8),
}));
