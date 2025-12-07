import {
    Box,
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
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(4),
}));

export const DrawerHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const DrawerTitle = styled(Typography)(
    ({
        theme: {
            typography: { h2 },
        },
    }) => ({
        ...h2,
    }),
);

export const SectionTitle = styled(Typography)(
    ({
        theme: {
            typography: { subtitle1 },
        },
    }) => ({
        ...subtitle1,
        margin: 0,
    }),
);

export const StyledList = styled(List)(() => ({
    padding: 0,
}));

export const StyledListItemButton = styled(ListItemButton)(
    ({ theme: { spacing } }) => ({
        paddingLeft: spacing(0),
    }),
);

export const StyledCheckbox = styled(Checkbox)(({ theme: { spacing } }) => ({
    padding: spacing(1, 2),
}));

export const StyledDivider = styled(Divider)(({ theme: { spacing } }) => ({
    margin: `${spacing(2)} 0`,
}));
