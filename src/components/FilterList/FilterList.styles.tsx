//Styled component for FilterList
import { Checkbox, styled } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)(({ theme: { spacing } }) => ({
    padding: spacing(4, 8),
}));
