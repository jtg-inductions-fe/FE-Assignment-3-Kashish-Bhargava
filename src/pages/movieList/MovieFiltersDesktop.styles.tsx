import {
    Accordion,
    AccordionDetails,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const FiltersContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
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

export const ClearButton = styled(Button)(() => ({
    textTransform: 'none',
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[1],
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
    marginLeft: 0,
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
    padding: '4px 8px',
}));
