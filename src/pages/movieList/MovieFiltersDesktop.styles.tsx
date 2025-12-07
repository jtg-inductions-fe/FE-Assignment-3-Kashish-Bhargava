import {
    Accordion,
    AccordionDetails,
    Box,
    Checkbox,
    FormControlLabel,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const FiltersContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const FiltersHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const FilterTitle = styled(Typography)(
    ({
        theme: {
            typography: { h2 },
        },
    }) => ({
        ...h2,
    }),
);

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
        padding: spacing(2),
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
    padding: spacing(1, 2),
}));
