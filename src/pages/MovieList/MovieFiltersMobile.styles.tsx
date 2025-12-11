import { Box, Checkbox, Divider, Drawer } from '@mui/material';
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
    padding: spacing(8),
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(16),
}));

export const DrawerHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const StyledCheckbox = styled(Checkbox)(({ theme: { spacing } }) => ({
    padding: spacing(4, 8),
}));

export const StyledDivider = styled(Divider)(({ theme: { spacing } }) => ({
    margin: spacing(8, 0),
}));
