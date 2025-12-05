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

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            palette: {
                common: { white },
            },
        },
    }) => ({
        '& .MuiPaper-root': {
            backgroundColor: white,
        },
    }),
);

export const DrawerContent = styled(Box)(({ theme: { spacing } }) => ({
    padding: spacing(2),
}));

export const DrawerHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const DrawerTitle = styled(Typography)(() => ({
    fontWeight: 600,
}));

export const ResetButton = styled(Button)(
    ({
        theme: {
            palette: {
                primary: { main },
            },
        },
    }) => ({
        color: main,
    }),
);

export const SectionTitle = styled(Typography)(() => ({
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
