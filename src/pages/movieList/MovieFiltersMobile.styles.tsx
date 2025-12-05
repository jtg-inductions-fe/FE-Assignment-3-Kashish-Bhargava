import {
    Box,
    Button,
    Checkbox,
    Divider,
    Drawer,
    List,
    ListItemButton,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDrawer = styled(Drawer)(() => ({
    '& .MuiPaper-root': {
        backgroundColor: '#fff',
    },
}));

export const DrawerContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export const DrawerHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const DrawerTitle = styled(Typography)(() => ({
    fontWeight: 600,
}));

export const ResetButton = styled(Button)(({ theme }) => ({
    color: theme.palette.error.main,
    textTransform: 'none',
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    fontWeight: 500,
}));

export const StyledList = styled(List)(() => ({
    padding: 0,
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
    paddingLeft: '0.5rem',
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
    padding: '4px 8px',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textTransform: 'none',
}));
